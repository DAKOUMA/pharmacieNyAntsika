import React from 'react'

const Svg = () => {
  return (
    <svg className='svg_container absolute top-0 z-10' version='1.1' width={"2000"} height={"250"} xmlns='http://www.w3.org/2000/svg'>
        <polyline className='polyline_1 relative z-10' stroke='none' strokeWidth={'1'} fill='#6AB547' 
        points='0 0 2000 0 2000 120 50 120 0 0'/>
        <polyline className='polyline_2 relative z-10' stroke='none' strokeWidth={'1'} fill='#6AB547' 
        points='20 20 2000 20 2000 150 70 150 20 20 '/>
    </svg>
  )
}

export default Svg