import React, { useState } from 'react'
import { useEffect, useRef } from 'react';

const ProductCard = () => {
    const [animation, setAnimation] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const productCardRef = useRef(null)

    const handleMousePosition = (e => {
        setPosition({ x: e.clientX, y: e.clientY })
    })

    const setProperies = (properties) => {
        for (const [property, value] of Object.entries(properties)) {
            productCardRef.current.style.setProperty(property, value)
        }
    }

    const mousePosition = () => {
        const rect = productCardRef.current.getBoundingClientRect();
        const mouseX = position.x - rect.left;
        const mouseY = position.y - rect.top;

        const properties = {
            '--mouseDegX': `${Math.floor(((mouseX / rect.width) - 0.5) * 25)}deg`,
            '--mouseDegY': `${Math.floor(((mouseY / rect.height) - 0.5) * 25)}deg`,
            '--mousePxX': `${(Math.floor(((mouseX / rect.width) - 0.5) * 20)) / 2}px`,
            '--mousePxY': `${(Math.floor(((mouseY / rect.height) - 0.5) * 20)) / 2}px`,
            // '--radialX': `${Math.floor(((mouseX / rect.width)) * 100)}%`,
            // '--radialY': `${Math.floor(((mouseY / rect.height)) * 100)}%`,
        }

        setProperies(properties)
    }

    const resetProperties = () => {
        const properties = {
            '--mouseDegX': '0deg',
            '--mouseDegY': '0deg',
            '--mousePxX': '0px',
            '--mousePxY': '0px',
            // '--radialX': '50%',
            // '--radialY': '50%',
        }
        setProperies(properties)
    }


    useEffect(() => {
        if (productCardRef.current && animation) {
            mousePosition()
        }
    }, [position])
    return (
        <div
            className='cardProduct w-96 h-96 bg-red-800 mx-auto'
            ref={productCardRef}
            onMouseMove={handleMousePosition}
            onMouseEnter={() => setAnimation(prevAnimation => !prevAnimation)}
            onMouseLeave={() => {setAnimation(prevAnimation => !prevAnimation)
                                resetProperties()}}>
            <img src={''} alt="" />
            <h1>{'Hello'}</h1>
            <span>{'BOB'}</span>
        </div>
    )
}

export default ProductCard