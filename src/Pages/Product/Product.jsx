import React, { useEffect, useRef } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { cheveux, maman, sport, bledina, ericFavre, vichy, topicrem, noreva, laroche } from '../../Images/Images'

const Product = () => {
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
    <div className='page1'>
      <NavBar />
      <main className='productMain'>
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
        <div className="productMain-CardContainer">
          <Link to={"/product/beauty"} className='mainCard'>
            <img src={cheveux} alt="" />
            <div className="mainCard-Text_Container">
              <h1>Beauté & Hygiène</h1>
              <span>Prenez soins de vos cheveux avec nos produits de marque</span>
            </div>
          </Link>
          <Link to={"/product/baby"} className='mainCard'>
            <img src={maman} alt="" />
            <div className="mainCard-Text_Container">
              <h1>Maman & Bébé</h1>
              <span>Bébé et vous serons chouchouter avec nous</span>
            </div>
          </Link>
          <Link to={"/product/sport"} className='mainCard'>
            <img src={sport} alt="" />
            <div className="mainCard-Text_Container">
              <h1>Minceur & Sport</h1>
              <span>Forgez vos muscles avec les meilleurs produits</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Product