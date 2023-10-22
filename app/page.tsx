import Image from 'next/image'
import Posts from './components/Posts'

export const revalidate = 86400
export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome &nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Felix</span>
        </span>
        
      </p>
      <Posts/>
    </div>
  )
}
