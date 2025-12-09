import { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

import { cocktailsList, mocktailsList } from './index'

function Mocktails(props) {

    const isMobile = useMediaQuery({maxWidth: 769})
    const startVal = isMobile? 'top bottom': 'top bottom'
    const endVal = isMobile? 'center top': 'bottom top'
    const y = isMobile? 200: 250
    

    return (
        <div className='h-dvh relative bg-gray-800 ' id='box'>
            <h1 className='px-8 text-white text-2xl lg:text-4xl w-max h-min absolute  mt-2 md:top-1/6 style-font '>Mocktails</h1>
            <div className="  w-max lg:w-6xl flex-col rounded-xl md:flex-row md:flex-center md:justify-around lg:items-end absolute left-1/2 -translate-x-1/2 bottom-1/8">
                <div className='mocktails p-5 bg-gray-200 m-4 rounded-lg'>
                    <h1 className='style-font text-gray-600'>Mocktails</h1>
                    <ul className=' flex flex-col gap-4 md:gap-10'>
                        {mocktailsList.map(({name, country, detail, price}) => (
                            <li key={name} className='list flex justify-between gap-2'><div>{name}({country})</div><p className=' text-gray-600 px-4 rounded-2xl'>{price}({detail})</p></li>
                        ))}
                    </ul>
                </div>
                
                <div className='cocktails p-5 bg-gray-200 m-4 rounded-lg'>
                    <h1 className='style-font text-gray-600'>Cocktails</h1>
                    <ul className='flex flex-col gap-4 md:gap-10 '>
                        {cocktailsList.map(({name, country, detail, price}) => (
                            <li key={name} className='list flex justify-between'><div>{name}({country})</div><p className= 'text-gray-600 px-4  rounded-2xl'>{price}({detail})</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mocktails;