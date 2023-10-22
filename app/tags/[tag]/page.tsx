import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import Link from 'next/link'
import Listitem from '@/app/components/Listitem'

export const revalidate = 86400

type Props = {
  params:{
    tag:string
  }
}

export async function generateStaticParams(){
  const posts = await getPostsMeta()

  if(!posts) return []

  const tags = new Set(posts.map(post=>post.tags).flat())
  //Notice
  return Array.from(tags, tag => {tag})
}
export function generateMetadata({params:{tag}}:Props){
  return {
    title: `Posts about ${tag}`
  }
}

export default async function TagsList({params:{tag}}:Props) {
  const posts = await getPostsMeta()

  if(!posts) {
    return(
      <p className='mt-10 text-center'>Sorry, no posts available</p>
    )
  }
  const tagsList = posts.filter(post => post.tags.includes(tag))

  return (
    <>
      <h2 className='text-3xl mt-4 mb-0'>Results for: #{tag}</h2>
      <section className='mt-6 mx-auto max-w-2xl'>
        <ul className='w-full list-none p-0'>
          {tagsList.map(post => (
            <Listitem key={post.id} post={post}/>
          ))}
        </ul>
      </section>
    </>
  )
}
