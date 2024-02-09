import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-[80px]'>
      <div className='text-red-800 font-semibold text-5xl'>
      <Link href={'/'}>ST PIZZA</Link>
      </div>
      <div className='flex items-center gap-4 text-3xl font-semibold text-gray-500'>
        <Link href={'#1'}>Home</Link>
        <Link href={'#1'}>About</Link>
        <Link href={'#1'}>Menu</Link>
        <Link href={'#1'}>Contact</Link>
        
      </div>
      <div className='flex items-center gap-4 text-3xl font-semibold text-gray-500'>
      <Link href={'#1'} className='bg-red-500 p-2 h-12 rounded-full text-white text-center'>Login</Link>
      </div>

    </header>
  )
}

export default Header
