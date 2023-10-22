import React from 'react'
import Link from 'next/link'
import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'
export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop shadow-xl z-10'>
      <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row px-10'>
        <h1 className='place-content-center text-3xl font-bold text-white grid'>
        <Link href="/"
          className='text-white/90 no-underline hover:text-white'>Felix</Link>
        </h1>

        
        <div className='flex flex-row justify-center sm:justify-evenly align-middle
        gap-4 text-white text-4xl lg:text-5xl'>
          <Link href=''><FaYoutube/></Link>
          <Link href=''><FaTwitter/></Link>
          <Link href=''><FaGithub/></Link>
          <Link href=''><FaLaptop/></Link>
        </div>
      </div>
    </nav>
  )
}
