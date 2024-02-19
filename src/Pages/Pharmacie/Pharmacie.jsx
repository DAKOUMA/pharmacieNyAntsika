import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SvgPharmacie1 from '../../Components/SVG/SvgPharmacie/SvgPharmacie1'
import { deuxFemme, deuxFemmeXl, infirmierXl, pharmacieHouse, pharmacieHouseSm } from '../../Images/Images'
import Map from '../../assets/GoogleMaps/Map'
import SvgMap from '../../Components/SVG/SvgPharmacie/SvgMap'
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom'
import SvgAnimation from '../../Components/SVG/SvgPharmacie/SvgAnimation'
import ScrollToTopOnMount from '../../main'
import Footer from '../../Components/SVG/Footer/Footer'


const Pharmacie = () => {

  const [userHeight, setUserHeigt] = useState(0)
  const [animation1, setAnimation1] = useState(false)
  const mapRefXl = useRef(null)
  const mapRefSm = useRef(null)

  const animationOn = () => {
    setAnimation1(true)
  }

  const animationOff = () => {
    setAnimation1(false)
  }

  const handleScroll = () => {
    setUserHeigt(window.scrollY)
  }

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      window.addEventListener('scroll', handleScroll)
    console.log(userHeight);

    if (userHeight >= 400 && userHeight <= 1080) {
      animationOn()
    } else {
      animationOff()
    }
    console.log(animation1);

    }
  }, [userHeight])

  return (
    <div className='page1'>
      <ScrollToTopOnMount/>
      <NavBar />
      <div className='pharmacie-main-xl'>
        <div className='bg-red  relative'>
          <img className='pharmacieHouse_photo' src={pharmacieHouse} alt="" />
          <SvgPharmacie1 true={true} />
          <div className='text-pharmacie nyAntsika right-0 top-40'>
            <h1>"Notre Pharmacie"</h1>
            <span>
              En plein coeur de Toamasina depuis 1991 la Pharmacie Ny Antsika
              a toujours priorisé la santé ainsi que la satisfaction de sa clientèle.
            </span>
          </div>
        </div>
        <div className={`double-container relative flex flex-row justify-between overflow-hidden ${animation1 ? 'animation-1' : ''}`}>
          <img className='infirmier_photo1' src={deuxFemmeXl} alt="" />
          <div className='text-pharmacie equipAntsika relative top-40 left-10 max-xl:absolute max-xl:w-1/2 lg:relative max-lg:right-40'>
            <h1>"“Equip’Antsika”"</h1>
            <span>
              Une équipe jeune et convivial, en permanente formation afin de priorisé votre santé avant toute chose.
            </span>
          </div>
          <SvgPharmacie1 true={false} />
          <img className='infirmier_photo2' src={infirmierXl} alt="" />
        </div>
        <div className='map-container relative w-full'>
          <Map refs={mapRefXl} true={true}/>
          <SvgMap />
          <div className='text-white pharmacie-info absolute mt-32 right-10 grid grid-rows-5 text-center'>
            <h1 className='text-6xl font-semibold'>PHARMACIE NY ANTSIKA</h1>
            <p className='text-3xl font-medium'>Pharmacien: RAMERISON Rhodeli</p>
            <div>
              <p className='text-xl'>Lundi au vendredi: 7h30 - 12h00 / 14h30 - 18-30</p>
              <p className='text-xl'>Samedi: 7h30 - 12h30</p>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='w-80'>
                <h2 className='text-4xl font-medium'>Adresse</h2>
                <p className='text-xl'><Link className='pharmacie-contact-link' to={'#map'}>Toamasina, Bazary kely Cité Procoops lot B-92 Plle 31/22</Link></p>
              </div>
              <div className=' w-80 text-center'>
                <h2 className='text-4xl font-medium'>Contact</h2>
                <p className='text-xl'>+261 32 42 672 35 / 020 53 030 43</p>
                <p className='text-xl'><Link className='pharmacie-contact-link' to={'mailto:pcie.ny.antsika@gmail.com'}>pcie.ny.antsika@gmail.com</Link></p>
              </div>
            </div>
            <div className='flex flex-row w-60 justify-between mx-auto mt-16'>
              <Link className='social-link'><CiFacebook size={"3rem"} color='#525D66' /></Link>
              <Link className='social-link' to={'mailto:pcie.ny.antsika@gmail.com'}><CiMail size={'3rem'} color='#525D66' /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='pharmacie-main-sm'>
        <div className='notre-pharmacie-container'>
         <SvgAnimation 
          className={`notre-pharmacie-container_Polygone`}
          color={'#6ab547'}
          animation={{attributeName: 'x1', values: '90%; -200%', dur: '3s', final:'-200%'}} 
          linearPosition={{x1:'90%', y1:'0%', x2:'100%', y2:'0%'}} 
          gradientUrl={'gradient1'} 
          />
          <img src={pharmacieHouseSm} alt="" />
          <div className="notre-pharmacie-container_Text relative z-10">
            <h1>"Notre Pharmacie"</h1>
            <p className='relative z-0'>En plein coeur de Toamasina depuis 1991 la Pharmacie Ny Antsika
              a toujours priorisé la santé ainsi que la satisfaction de sa clientèle.
            </p>
          </div>
        </div>
        <div className="notre-equipe-container">
          <SvgAnimation 
          className={`notre-equipe-container_Polygone`}
          color={'#525d66'}
          animation={{attributeName: 'x1', values: '10%; 300%', dur: '3s', final: '300%'}} 
          linearPosition={{x1:'10%', y1:'0%', x2:'20%', y2:'0%'}}
          gradientUrl={'gradient2'} 
          />
          <img src={deuxFemme} alt="" />
          <div className="notre-equipe-container_Text">
            <h1>"Equip'Antsika"</h1>
            <p>Une équipe jeune et convivial, en permanente formation afin de priorisé votre santé avant toute chose.</p>
          </div>
        </div>
        <div className="pharmacie-info-container relative">
          <div className="pharmacie-info-container_Polygone">
          </div>
          <Map refs={mapRefSm} true={false} />
          <div className="pharmacie-info-container_Text text-center">
          <h1 className='font-semibold'>PHARMACIE NY ANTSIKA</h1>
            <p className='font-medium'>Pharmacien: RAMERISON Rhodeli</p>
            <div>
              <p className=''>Lundi au vendredi: 7h30 - 12h00 / 14h30 - 18-30</p>
              <p className=''>Samedi: 7h30 - 12h30</p>
            </div>
            <div className='flex flex-row justify-between'>
              <div className=''>
                <h2 className='font-medium'>Adresse</h2>
                <p className=''><Link to={'#map'}>Toamasina, Bazary kely Cité Procoops lot B-92 Plle 31/22</Link></p>
              </div>
              <div className=' w-80 text-center'>
                <h2 className=' font-medium'>Contact</h2>
                <p className=''>+261 32 42 672 35 / 020 53 030 43</p>
                <p className=''><Link to={'mailto:pcie.ny.antsika@gmail.com'}>pcie.ny.antsika@gmail.com</Link></p>
              </div>
            </div>
            <div className='flex flex-row w-60 justify-between mx-auto mt-16'>
              <Link className='social-link' to={'https://web.facebook.com/profile.php?id=100063959350682'}><CiFacebook size={"3rem"} color='#525D66' /></Link>
              <Link className='social-link' to={'mailto:pcie.ny.antsika@gmail.com'}><CiMail size={'3rem'} color='#525D66' /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pharmacie