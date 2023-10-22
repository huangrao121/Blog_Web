import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import Link from 'next/link'
import Listitem from './Listitem'
export default async function Posts() {
  const posts = await getPostsMeta()

  if(!posts) {
    return(
      <p className='mt-10 text-center'>Sorry, no posts available</p>
    )
  } else {return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blogs</h2>
      <ul className='w-full list-none p-0'>
        {posts.map((post)=>(
          <Listitem key={post.id} post={post}/>
        ))
        }
      </ul>
    </section>
  )}
}
