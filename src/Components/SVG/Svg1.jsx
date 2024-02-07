import React from 'react'

const Svg1 = () => {
  return (
    <svg className=' absolute top-10 right-0 z-10' version='1.1' width={"700"} height={"250"} xmlns='http://www.w3.org/2000/svg'>
        <polyline className='svg1-polyline-1 relative opacity-50 z-10' stroke='none' strokeWidth={'1'} fill='#6AB547' 
        points='100 0 700 0 700 100 50 100 100 0'/>
        <polyline className='svg1-polyline-2 relative opacity-50 z-10' stroke='' strokeWidth={'1'} fill='#6AB547' 
        points='20 20 700 20 700 120 70 120 20 20 '/>
    </svg>
  )
}

export default Svg1