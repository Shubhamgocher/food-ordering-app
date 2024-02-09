import React from 'react'
import Image from 'next/image'
import Hero_img from '../../public/hero.jpg'
const Hero = () => {
  return (
    <div className='flex justify-between '>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='block text-black text-6xl font-semibold text-center'>Order Food <br/> Online in India</h1>
        <p className='block text-gray-700 text-4xl'>Experieance best Indian Hygenic food in your home</p>
      </div>
      <div className='mr-20 my-4'>
        <Image src={Hero_img} alt='Food_Image' height={300} width={350} />
      </div>
    </div>
  )
}

export default Hero
