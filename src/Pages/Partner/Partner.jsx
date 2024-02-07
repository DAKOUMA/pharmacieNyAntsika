import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SvgImage from '../../Components/SVG/SvgImage'
import SvgImage2 from '../../Components/SVG/SvgImage2'
import Svg1 from '../../Components/SVG/Svg1'
import Svg2 from '../../Components/SVG/Svg2'

const Partner = () => {
  return (
    <div className='flex flex-col page'>
      <NavBar />
      <div className='relative lg:w-full 2xl:w-4/5 mx-auto'>
        <div className='photoSvg containerSvg1 absolute right-0'>
          <Svg1/>
          <SvgImage />
          <div className='absolute top-20 text-3xl right-10 z-10 text-white'>
            Votre Pharmacie toujours plus proche de vous
          </div>
        </div>
        <div className='pharmaSvg containerSvg absolute top-32'>
          <Svg2/>
          <SvgImage2 />
          <div className='absolute ml-7 top-20 text-white z-10'>
            <h1 className='text-5xl font-medium'>PHARMACIE NY ANTSIKA</h1>
            <h2 className='text-2xl'>Toamasina, Bazary kely - Cité Procoops lot B-92 </h2>
            <p className='my-4 text-xl'>Tel : +261 32 42 672 35</p>
            <p className='text-xl'>Lundi au Vendedi: 7h30 - 12h00 / 14h30 - 18h30</p>
            <p className='text-xl'>Samedi: 7h30 - 12h00</p>
            <button className='text-2xl bg-slate-800 px-2 rounded-md mt-5'>En savoir plus</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Partner