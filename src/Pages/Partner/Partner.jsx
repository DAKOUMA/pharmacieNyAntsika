import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SvgImage from '../../Components/SVG/SvgImage'
import SvgImage2 from '../../Components/SVG/SvgImage2'
import Svg1 from '../../Components/SVG/Svg1'
import Svg2 from '../../Components/SVG/Svg2'
import { bfm, nyhavana, pharmaDestin, sanlam } from '../../Images/Images'
import Footer from '../../Components/SVG/Footer/Footer'
import { Link } from 'react-router-dom'
import ScrollToTopOnMount from '../../main'

const Partner = () => {

  return (
    <div className='page1'>
      <ScrollToTopOnMount/>
      <NavBar />
      <main>
        <h1 className='text-5xl my-12 text-center'>Nos partenaires</h1>
        <div className='flex flex-col w-3/4 mx-auto gap-32'>
          <img className="shadow-xl" src={pharmaDestin} alt="" />
          <img className="shadow-xl" src={bfm} alt="" />
          <img className="shadow-xl" src={sanlam} alt="" />
          <img className="shadow-xl" src={nyhavana} alt="" />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Partner