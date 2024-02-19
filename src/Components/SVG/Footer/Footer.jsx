import React from 'react'
import { useState } from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [hoverColor, setHoverColor] = useState(false)
    const [hoverColor1, setHoverColor1] = useState(false)
    return (
        <footer className='relative z-20'>
            <ul className=''>
                <h1>Liens Rapides</h1>
                <li><Link to={'/'}>Acceuil</Link></li>
                <li><Link to={'/pharmacie'}>La pharmacie</Link></li>
                <li><Link to={'/product'}>Produits</Link></li>
                <li><Link to={'/partner'}>Partenaires</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
            <ul>
                <h1>Info contact</h1>
                <li><Link></Link></li>
                <li><Link to={'mailto:pcie.ny.antsika@gmail.com'}>pcie.ny.antsika@gmail.com</Link></li>
                <li><Link>Toamasina, Bazary kely Cité Procoops lot B-92 Plle 31/22</Link></li>
                <div className='link-footer_Container'>
                <li>
                    <Link 
                        onMouseEnter={() => setHoverColor(prevHoverColor => !prevHoverColor)} 
                        onMouseLeave={() => setHoverColor(prevHoverColor => !prevHoverColor)} 
                        className='link-footer'
                        to={'https://web.facebook.com/profile.php?id=100063959350682'}>
                            <CiFacebook size={"3rem"} color={`${hoverColor ? '#6ab547' : '#ffffff'}`} />
                    </Link>
                </li>
                <li>
                    <Link 
                        onMouseEnter={() => setHoverColor1(prevHoverColor1 => !prevHoverColor1)} 
                        onMouseLeave={() => setHoverColor1(prevHoverColor1 => !prevHoverColor1)} 
                        className='link-footer'
                        to={'mailto:pcie.ny.antsika@gmail.com'}>
                            <CiMail size={"3rem"} color={`${hoverColor1 ? '#6ab547' : '#ffffff'}`} />
                    </Link>
                </li>
                </div>
            </ul>
        </footer>
    )
}

export default Footer