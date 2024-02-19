import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProductCard from './ProductCard'
import { biberonRemond, goubillonRemond, inhalation, nursie, physio, tetineRemond } from '../../Images/Images'
import ProductNavbar from './ProductNavbar'
import ScrollToTopOnMount from '../../main'
import Footer from '../../Components/SVG/Footer/Footer'

const Baby = () => {  
  const babyProduct = [
    {
      title: "Lait Nursie",
      description: "La gamme nursie, une reférence en matière de lait pour bébé",
      image: nursie,
      delay: '2s' 
    },
    {
      title: "Lait Physiolac",
      description: "Tonus, croissance et vitalité assurez les vous avec Physiolac",
      image: physio,
      delay: '3s'
    },
    {
      title: "Biberon Remond",
      description: "Biberon en verre de 240ml, stérilisable",
      image: biberonRemond,
      delay: '4s'
    },
    {
      title: "Tetine Remond",
      description: "Tetine en caoutchouc, spécialement conçu pour facilité la succion.",
      image: tetineRemond,
      delay: '5s'
    },
    {
      title: "Goupillon Remond",
      description: "L'indispensable, pour le nettoyage des biberon.",
      image: goubillonRemond,
      delay: '6s'
    },
    {
      title: "Chambre d'inhalation",
      description: "Chambre d'inhalation Anycare, ne vous en séparer jamais.",
      image: inhalation,
      delay: '7s'
    },
  ]
  return (
    <div className='page1'>
      <ScrollToTopOnMount/>
        <NavBar/>
        <main>
        <ProductNavbar/>
          <h1 className='text-4xl my-12 mx-auto text-center'>Tout nos produits sont disponibles sur place a notre pharmacie</h1>
            <div className='cardProduct-container'>
            {
              babyProduct.map((value, index) => (
                <ProductCard title={value.title} image={value.image} description={value.description} key={index} delay={value.delay} />
              ))
            }
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Baby