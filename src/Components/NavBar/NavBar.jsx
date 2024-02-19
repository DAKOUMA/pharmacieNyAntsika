import React from 'react'
import { logoPharmacie, logoPharmacieXl } from '../../Images/Images'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-row w-full right-0 top-0 backdrop-blur-3xl fixed items-center justify-between z-50'>
      <img src={logoPharmacieXl} alt="" className='w-72' />

      <Toggle />
      <ul className='navLink_Lg hidden lg:flex w-1/2 justify-around mx-auto'>
        <li><Link to={'/'}>ACCEUIL</Link></li>
        <li><Link to={'/pharmacie'}>LA PHARMACIE</Link></li>
        <li><Link to={'/product'}>PRODUITS</Link></li>
        <li><Link to={'/partner'}>PARTENAIRES</Link></li>
        <li><Link to={'/contact'}>CONTACT</Link></li>
      </ul>
      <span className='absolute top-0 right-0 hidden lg:flex pharmaLg text-white px-3'>Pharmacie de garde</span>
    </div>
  )
}

export default NavBar