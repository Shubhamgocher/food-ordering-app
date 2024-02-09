import React from 'react'
import MenuItem from './MenuItem'
import SectionHeaders from './SectionHeaders'

const Menu = () => {
  return (
    <div>
      <SectionHeaders
      subHeader={"Check Out"}
      mainHeader={"Our Best Sellers"}/>
      <div className='grid grid-cols-3 gap-4 ml-[100px]'>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      
    </div>
    </div>
  )
}

export default Menu
