import React from 'react'

const Svg2 = () => {
  return (
    <svg className=' absolute top-10 left-0 z-10' version='1.1' width={"700"} height={"250"} xmlns='http://www.w3.org/2000/svg'>
        <polyline className='svg2-polyline-1 relative opacity-50 z-10' stroke='none' strokeWidth={'1'} fill='#525d66' 
        points='0 0 550 0 600 90 0 90 0 0'/>
        <polyline className='svg2-polyline-2 opacity-50 z-10' stroke='' strokeWidth={'1'} fill='#525d66' 
        points='0 20 620 20 570 120 0 120 0 20 '/>
    </svg>
  )
}

export default Svg2