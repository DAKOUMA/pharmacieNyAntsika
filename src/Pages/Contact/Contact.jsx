import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { CiMail, CiFacebook } from "react-icons/ci";
import Footer from '../../Components/SVG/Footer/Footer';




const Contact = () => {

  return (
    <div className='page1 bg-green-200'>
        <NavBar/>
        <div className=" pharmacie-info-container_Text text-center text-black mt-20 w-4/5 mx-auto">
          <h1 className='font-semibold mb-4'>PHARMACIE NY ANTSIKA</h1>
            <p className='font-medium'>Pharmacien: RAMERISON Rhodeli</p>
            <div>
              <p className=''>Lundi au vendredi: 7h30 - 12h00 / 14h30 - 18-30</p>
              <p className=''>Samedi: 7h30 - 12h30</p>
            </div>
            <div className='mt-10 flex flex-row justify-between'>
              <div className=''>
                <h2 className='font-medium mb-2'>Adresse</h2>
                <p className=''><Link className='contact-link' to={'/pharmacie'}>Toamasina, Bazary kely Cité Procoops lot B-92 Plle 31/22</Link></p>
              </div>
              <div className=' w-80 text-center'>
                <h2 className=' font-medium mb-2'>Contact</h2>
                <p className=''>+261 32 42 672 35 / 020 53 030 43</p>
                <p className=''><a className='contact-link' href="mailto:pcie.ny.antsika@gmail.com">pcie.ny.antsika@gmail.com</a></p>
              </div>
            </div>
            <div className='flex flex-row w-60 justify-between mx-auto mt-10'>
              <Link className='social-link1' to={'https://web.facebook.com/profile.php?id=100063959350682'}><CiFacebook size={"3rem"} color='#525D66' /></Link>
              <Link className='social-link1' to={'mailto:pcie.ny.antsika@gmail.com'}><CiMail size={'3rem'} color='#525D66' /></Link>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Contact