import React, { useEffect, useRef } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { cheveux, maman, sport, bledina, ericFavre, vichy, topicrem, noreva, laroche } from '../../Images/Images'
import ProductNavbar from './ProductNavbar'
import Footer from '../../Components/SVG/Footer/Footer'

const Product = () => {
  class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return null;
    }
  }
  return (
    <div className='page1'>
      <ScrollToTopOnMount/>
      <NavBar />
      <main className='productMain'>
        <ProductNavbar/>
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
      <Footer/>
    </div>
  )
}

export default Product