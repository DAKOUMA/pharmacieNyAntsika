import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProductCard from './ProductCard'
import {zmaEricfavre, zmaPreviewEricfavre, 
        ironEricfavre, 
        wheyLgEricfavre, wheySmEricfavre, 
        pancakesEricfavre, 
        isoZeroLgEricfavre, 
        claPreviewEricfavre, claProductEricfavre, isoZeroSlEricfavre, } from '../../Images/Images'
import ProductNavbar from './ProductNavbar'
import ScrollToTopOnMount from '../../main'
import Footer from '../../Components/SVG/Footer/Footer'

const Sport = () => {


  const sportProduct = [
    {
      title: "ZMA+",
      description: "boostez votre énergie au quotidien et votre testostérone.",
      image: zmaEricfavre,
      delay: '2s' 
    },
    {
      title: "Iron Fat Burner",
      description: "Iron Ultra fat burner agit sur la masse grasse",
      image: ironEricfavre,
      delay: '3s'
    },
    {
      title: "Pancakes Protein",
      description: "Préparation pour pâte à pancakes protéinés, saveur vanille",
      image: pancakesEricfavre,
      delay: '4s'
    },
    {
      title: "Whey Optimax 1.5Kg",
      description: "L'excellence pour les muscles - Protéines de Whey bi-sources",
      image: wheyLgEricfavre,
      delay: '5s'
    },
    {
      title: "Whey Optimax 500g",
      description: "L'excellence pour les muscles - Protéines de Whey bi-sources",
      image: wheySmEricfavre,
      delay: '6s'
    },
    {
      title: "ISO Zero 1.5Kg",
      description: "Protéines isolate pour le développement musculaire - Saveur Triple Vanille",
      image: isoZeroLgEricfavre,
      delay: '7s'
    },
    {
      title: "ISO Zero 500g",
      description: "Protéines isolate pour le développement musculaire - Saveur Triple Vanille",
      image: isoZeroSlEricfavre,
      delay: '8s'
    },
    {
      title: "CLA 2400",
      description: "CLA 2400 pour vous accompagner dans votre programme minceur",
      image: claProductEricfavre,
      delay: '9s'
    }
  ]
  return (
    <div className='page1'>
      <ScrollToTopOnMount/>
        <NavBar/>
        <main className=''>
          <ProductNavbar/>
          <h1 className='text-4xl my-12 mx-auto text-center'>Tout nos produits sont disponibles sur place a notre pharmacie</h1>
            <div className='cardProduct-container'>
            {
              sportProduct.map((value, index) => (
                <ProductCard title={value.title} image={value.image} description={value.description} key={index} delay={value.delay} />
              ))
            }
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Sport