import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SvgImage from '../../Components/SVG/SvgImage'

const Partner = () => {
  return (
    <div className='flex flex-col page'>
        <NavBar/>
        <div className='relative w-2/4 mx-auto'>
        <SvgImage/>
        </div>
        
    </div>
  )
}

export default Partner