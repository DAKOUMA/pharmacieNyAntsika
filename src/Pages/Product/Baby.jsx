import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProductCard from './ProductCard'

const Baby = () => {
  return (
    <div className='page1'>
        <NavBar/>
        <main>
            <ProductCard/>
        </main>
    </div>
  )
}

export default Baby