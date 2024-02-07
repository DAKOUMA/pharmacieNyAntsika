import React from 'react'
import Svg1 from './Svg1'
import { femme } from '../../Images/Images'

const SvgImage = () => {
  return (
    <svg className='' version='1.1' width={"1000"} height={"400"} xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='image' x={'0'} y={'0'} patternUnits='userSpaceOnUse' height={'600'} width={'2000'}>
            <image href={femme} x={'0'} y={'-60'} width={'100%'} height={'180%'}  />
          </pattern>
        </defs>
        <polygon className=' w-16 relative z-10' stroke='none' strokeWidth={'1'} fill={'url(#image)'} 
        points='0 0 1000 0 1000 400 200 400 0 0'/>
    </svg>
  )
}

export default SvgImage