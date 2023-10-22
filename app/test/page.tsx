import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostByName } from '@/lib/posts'

const eee = getPostByName("more.mdx")


// app/page.js
export default function Home() {
  return (
    <MDXRemote
      source={`## Hello ~~hello~~

      This is from Server Components!
      `}
    />
  )
}