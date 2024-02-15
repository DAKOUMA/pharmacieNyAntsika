import React, { useEffect, useRef, useState } from 'react'

const SvgAnimation = (props) => {
    const linearGradientRef = useRef(null)
    const linearGradientRefs = useRef([])
    useEffect(() => {
        if (linearGradientRef.current) {
            const animateElement = linearGradientRef.current.querySelector('animate')
            const handleAnimationEnd = () => {
                linearGradientRef.current.setAttribute('x1', props.animation.final)
                
            }

            animateElement.addEventListener('animationend', handleAnimationEnd());
            return () => {
                animateElement.removeEventListener('animationend', handleAnimationEnd)
            }
        }
    }, [])
    return (
        <svg className={props.className} width="1000" height="500" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient 
                    ref={linearGradientRef} 
                    id={props.gradientUrl} 
                    x1={props.linearPosition.x1} 
                    y1={props.linearPosition.y1} 
                    x2={props.linearPosition.x2} 
                    y2={props.linearPosition.y2}
                    >
                    <stop offset={'0%'} stopColor='white'>
                    </stop>
                    <stop offset={'100%'} stopColor={props.color}>
                    </stop>
                    <animate
                        attributeName={props.animation.attributeName}
                        values={props.animation.values}
                        dur={props.animation.dur}
                        repeatCount={'once'}
                        >
                    </animate>
                </linearGradient>
            </defs>
            <path d="M1000 0H0V500H1000V0Z" fill={`url(#${props.gradientUrl})`} />
        </svg>
    )
}

export default SvgAnimation