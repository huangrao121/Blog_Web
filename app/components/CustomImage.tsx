import React from 'react'
import Image from 'next/image'

type Props = {
  src:string,
  alt:string,
  priority?:string
}
export default function CustomImage({src,alt,priority}:Props) {

  const prty = priority ? true:false
  return (
    <div>
      <Image
        className='rounded-lg mx-auto'
        src={src}
        width={650}
        height={650}
        alt={alt}
        priority={prty}
      />
    </div>
  )
}
