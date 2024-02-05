import React from 'react'

const SvgBlack = () => {
  return (
    <svg className=' absolute bottom-0 z-10' version='1.1' width={"2000"} height={"250"} xmlns='http://www.w3.org/2000/svg'>
        <polyline className='polyline-black_1 relative z-10' stroke='none' strokeWidth={'1'} fill='#525D66' 
        points='0 0 2000 0 2000 120 0 120 0 0'/>
        <polyline className='polyline-black_2 relative z-10' stroke='none' strokeWidth={'1'} fill='#525D66' 
        points='0 50 2000 50 2000 250 0 250 0 0'/>
    </svg>
  )
}

export default SvgBlack