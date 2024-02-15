import React from 'react'

const SvgPharmacie1 = (props) => {
    const svg1 = (
        <svg className='pharmacieHouse_svg absolute right-0 top-0' width="644" height="700" viewBox="0 0 644 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 700L290.726 0H644V700H0Z" fill="#6AB547"/>
        </svg>
    )
    const svg2 = (
        <svg className='infirmier_svg absolute right-52 max-xl:right-20' width="941" height="700" viewBox="0 0 941 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 700L290.726 0.000312328H644V700H0Z" fill="#525D66"/>
<path d="M941 0L650.274 700H297V0L941 0Z" fill="#525D66"/>
        </svg>
    )

    return (
        props.true ? svg1 : svg2
    )
}

export default SvgPharmacie1