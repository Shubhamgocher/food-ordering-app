import React from 'react'

const SectionHeaders = ({mainHeader,subHeader}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-2'>
      <h1 className='text-black text-4xl'>{subHeader}</h1>
      <h1 className='text-red-800 text-4xl font-bold'>{mainHeader}</h1>
    </div>
  )
}

export default SectionHeaders
