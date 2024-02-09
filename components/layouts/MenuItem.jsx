import React from 'react'
import Image from 'next/image'
import Kachori from '../../public/kachori.jpg'
const MenuItem = () => {
  return (
    <div className='mt-4'>
      <div className='bg-gray-100 rounded-2xl w-[300px] flex flex-col items-center justify-center gap-2 py-4 shadow-md hover:bg-white hover:-translate-x-1 translate-y-1'>
        <div className='flex items-center justify-center'>
            <Image src={Kachori} alt='Item' width={200} height={250} className='rounded-full'/>
        </div>
        <div className='text-red-800 font-bold text-2xl'>
            <h1 >Kota Kachori</h1>
        </div>
        <div className='flex gap-2 font-bold text-xl text-orange-500'>
            <span>Price:</span>
            <span>$3</span>
        </div>
        <button className='bg-green-600 rounded-full p-2 text-white font-bold'>Add Cart</button>
      </div>
    </div>
  )
}

export default MenuItem
