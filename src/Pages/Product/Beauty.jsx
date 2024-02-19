import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProductCard from './ProductCard'
import {noreliftNoreva, normadermNoreva, actipurSoinNoreva, actipurStopNoreva, actipurGammeNoreva,
        tolerianeLrp, lipikarSyndetLrp,
        melaDayTopicrem, melaDayGammeTopicrem, eauMicellaireTopicrem, ultraHydratantTopicrem } from '../../Images/Images'
import ProductNavbar from './ProductNavbar'
import ScrollToTopOnMount from '../../main'
import Footer from '../../Components/SVG/Footer/Footer'

const Beauty = () => {
  const BeautyProduct = [
    {
      title: "Normaderm Correcteur",
      description: " Corrige les imperfections. resserre les pores..",
      image: normadermNoreva,
      delay: '2s' 
    },
    {
      title: "Actipur Stop bouton",
      description: "Elimine les boutons, et regénère la peau",
      image: actipurStopNoreva,
      delay: '3s'
    },
    {
      title: "Actipur 3en1",
      description: "Une formule intensive pour éliminer boutons et points noirs !",
      image: actipurSoinNoreva,
      delay: '4s'
    },
    {
      title: "Toleriane Dermo-Nettoyant",
      description: "Formule minimaliste enrichie en Eau Thermale de La Roche-Posay",
      image: tolerianeLrp,
      delay: '5s'
    },
    {
      title: "LIPIKAR SYNDET AP+",
      description: "Crème lavante relipidante, anti-irritations. Efficacité anti-grattage. Tolérance optimale.",
      image: lipikarSyndetLrp,
      delay: '6s'
    },
    {
      title: "Mela Ultra-hydratant",
      description: "MELA Lait Unifiant Ultra-Hydratant est un lait corps unifiant pour les peaux sensibles.",
      image: ultraHydratantTopicrem,
      delay: '7s'
    },
    {
      title: "Mela crème jour",
      description: "MELA associe prévention et correction anti-taches efficace à une très haute protection UV.",
      image: melaDayTopicrem,
      delay: '8s'
    },
    {
      title: "Hydra +",
      description: " Elle nettoie les peaux et yeux sensibles en douceur, elle démaquille, même le maquillage waterproof",
      image: eauMicellaireTopicrem,
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
              BeautyProduct.map((value, index) => (
                <ProductCard title={value.title} image={value.image} description={value.description} key={index} delay={value.delay} />
              ))
            }
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Beauty