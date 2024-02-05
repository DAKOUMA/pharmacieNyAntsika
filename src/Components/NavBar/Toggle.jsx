import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Toggle = (pro) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }
    let slideIn = toggle ? 'slideIn' : ''

    useEffect(() => {
        console.log(toggle);
    }, [toggle])

    return (
        <div className='lg:hidden'>
            {
                !toggle ? (<AiOutlineAlignLeft size={'3.5rem'} fill='#525d66' onClick={handleToggle}  />)
                : (<AiOutlineClose size={'3.5rem'} fill='#6ab547' onClick={handleToggle}/>)
            }
            <ul className={`navLink_Sm ${slideIn} flex flex-col absolute right-0 top-20 translate-x-full text-center h-60 w-40 justify-around z-50`}>
                <li><Link to={'/'}>ACCEUIL</Link></li>
                <li><Link to={'/pharmacie'}>LA PHARMACIE</Link></li>
                <li><Link to={'/product'}>PRODUITS</Link></li>
                <li><Link to={'/partner'}>PARTENAIRES</Link></li>
                <li><Link to={'/contact'}>CONTACT</Link></li>
                <span className='lg:hidden'>Pharmacie de garde</span>
            </ul>
        </div>
    )
}

export default Toggle