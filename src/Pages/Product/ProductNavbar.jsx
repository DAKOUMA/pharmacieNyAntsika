import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { cheveux, maman, sport, bledina, ericFavre, vichy, topicrem, noreva, laroche } from '../../Images/Images'

const ProductNavbar = () => {
    const scrollerRef = useRef(null)
  const scrollerInnerRef = useRef(null)

    const addAnimation = () => {
        scrollerRef.current.setAttribute("data-animated", true)
        const scrollerContent = Array.from(scrollerInnerRef.current.children)
        
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true)
          
          scrollerInnerRef.current.appendChild(duplicatedItem)
        })
      }
    
      useEffect(() => {
        if (scrollerRef.current && scrollerInnerRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation()
        }
      },)
  return (
    <div className='productMain-Navbar'>
          <ul className="product-LinkContainer">
            <li className="product-LinkContainer_Link"><Link to={"/product/beauty"}>Beauté & Hygiène</Link></li>
            <li className="product-LinkContainer_Link"><Link to={"/product/baby"}>Maman & Bébé</Link></li>
            <li className="product-LinkContainer_Link"><Link to={"/product/sport"}>Minceur & Sport</Link></li>
          </ul>
          <div
            className="product-BrandContainer scroller"
            ref={scrollerRef}>
            <div className='scroller__inner' ref={scrollerInnerRef}>
              <li><img className='' src={noreva} alt="" /></li>
              <li><img className='' src={laroche} alt="" /></li>
              <li><img className='' src={ericFavre} alt="" /></li>
              <li><img className='' src={bledina} alt="" /></li>
              <li><img className='' src={vichy} alt="" /></li>
              <li><img className='' src={topicrem} alt="" /></li>
            </div>
          </div>
        </div>
  )
}

export default ProductNavbar