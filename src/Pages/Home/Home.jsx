import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Svg from '../../Components/SVG/Svg'
import { brain, capsule, femme, shield } from '../../Images/Images'
import SvgBlack from '../../Components/SVG/SvgBlack'

const Home = () => {
  return (
    <div className='page'>
      <NavBar />
      <main className='home-main relative h-3/4 z-0' style={{ backgroundImage: `url(${femme})` }}>
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
          <button className='mt-5 text-2xl learnButton w-fit mx-auto px-2 rounded-md shadow-lg'>En savoir plus</button>
        </div>
        <div>
        </div>
      </main>
      <div className='flex flex-row justify-around mt-'>
        <img className='w-20' src={brain} alt="" />
        <img className='w-20' src={capsule} alt="" />
        <img className='w-20' src={shield} alt="" />
      </div>
    </div>
  )
}

export default Home