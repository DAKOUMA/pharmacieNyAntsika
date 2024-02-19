import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Svg from '../../Components/SVG/Svg'
import SvgImage from '../../Components/SVG/SvgImage'
import SvgImage2 from '../../Components/SVG/SvgImage2'
import Svg1 from '../../Components/SVG/Svg1'
import Svg2 from '../../Components/SVG/Svg2'
import { brain, capsule, femme, shield } from '../../Images/Images'
import SvgBlack from '../../Components/SVG/SvgBlack'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [learnMore, setLearnMore] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (learnMore) {
      navigate('/pharmacie')
    }
  })

  return (
    <div className='page'>
      <NavBar />
      <main className='xl:hidden home-main relative h-3/4 z-0' style={{ backgroundImage: `url(${femme})` }}>
        <div className='home-main_Green relative'>
          <span className='text-white text-xl font-medium absolute right-2 top-8'>
            Votre Pharmacie toujour plus proche de vous
          </span>
          <span className='text-white font-normal absolute right-2 top-16'>
            "Avoir une pharmacie, c'est avoir un trésor."
          </span>
          <span className='text-white text-sm font-normal absolute right-3 top-20'>
            -Victor Hugo
          </span>
        </div>
        <Svg />
        <SvgBlack/>
        <div className='home-main_Black absolute flex flex-col h-48 bottom-0 z-20 w-screen'>
          <p className='text-white mx-auto text-4xl font-medium mt-3 mb-3'>PHARMACIE NY ANTSIKA</p>
          <p className='text-white mx-auto text-xl font-normal'>Toamasina, Bazary kely - Cité Procoops lot B-92 </p>
          <p className='text-white mx-auto text-xl font-normal'>+261 32 42 672 35 / +261 34 41 022 92 </p>
          <button onClick={() => setLearnMore(true)} className='mt-5 text-2xl learnButton w-fit mx-auto px-2 rounded-md shadow-lg'>En savoir plus</button>
        </div>
        <div>
        </div>
      </main>
      <main className='  max-xl:hidden relative lg:w-full mx-auto'>
        <div className='victorHugo absolute flex flex-col top-10 left-10 items-end'>
        <p className='text-xl'>Avoir une pharmacie, c'est un tresor</p>
        <span className=''>-Victor Hugo</span>
        </div>
        <div className='photoSvg containerSvg1 absolute right-0'>
          <Svg1/>
          <SvgImage />
          <div className='photo-svg-text absolute top-20 text-3xl right-10 z-10 text-white'>
            Votre Pharmacie toujours plus proche de vous
          </div>
        </div>
        <div className='pharmaSvg containerSvg absolute top-32'>
          <Svg2/>
          <SvgImage2 />
          <div className='pharmaSvg-text absolute ml-7 top-20 text-white z-10'>
            <h1 className='text-5xl font-medium'>PHARMACIE NY ANTSIKA</h1>
            <h2 className='text-2xl'>Toamasina, Bazary kely - Cité Procoops lot B-92 </h2>
            <p className='my-4 text-xl'>Tel : +261 32 42 672 35</p>
            <p className='text-xl'>Lundi au Vendedi: 7h30 - 12h00 / 14h30 - 18h30</p>
            <p className='text-xl'>Samedi: 7h30 - 12h00</p>
            <button className='text-2xl learnMore-xl px-2 rounded-md mt-5' onClick={() => setLearnMore(true)}>En savoir plus</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home