import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Pharmacie from './Pages/Pharmacie/Pharmacie'
import Product from './Pages/Product/Product'
import Partner from './Pages/Partner/Partner'
import Contact from './Pages/Contact/Contact'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pharmacie' element={<Pharmacie/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/partner' element={<Partner/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App