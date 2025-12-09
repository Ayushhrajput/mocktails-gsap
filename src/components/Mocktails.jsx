import { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)
import mocktails from '../imgs/mocktails.png'

import { cocktailsList, mocktailsList } from './index'

function Mocktails(props) {

    const isMobile = useMediaQuery({maxWidth: 769})
    const startVal = isMobile? 'top bottom': 'top bottom'
    const endVal = isMobile? 'center top': 'bottom top'
    const y = isMobile? 200: 250
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#box',
                start: startVal,
                end: endVal,
                scrub: true,
            }
        }).to(
            '#img', {
                y: y,
                
                
                ease: 'power1.inOut'
                
            }
        )
        const listSplit  = new SplitText('.list', {
            type: ' words'
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#box',
                start: 'top center',
                end: 'center center',
                scrub: true
            }
        }).from(listSplit.words, {
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power1.inOut'
        })
    }, [])
    

    return (
        <div className='h-dvh relative bg-blue-400' id='box'>
            <img src={mocktails} alt="" id='img' className='w-60 lg:w-80 absolute left-1/2 -translate-x-1/2 -top-1/6' />
            <div className="text-white text-lg w-max md:h-dvh md:w-6xl flex-col md:flex-row md:flex-center md:justify-around lg:items-end absolute left-1/2 -translate-x-1/2 bottom-1/8">
                <div className='mocktails p-5 '>
                    <h1 className='style-font text-blue-200'>Mocktails</h1>
                    <ul className=' flex flex-col  gap-4 md:gap-10'>
                        {mocktailsList.map(({name, country, detail, price}) => (
                            <li key={name} className='list flex justify-between gap-4'><div>{name}({country})</div><p>{price}({detail})</p></li>
                        ))}
                    </ul>
                </div>
                
                <div className='cocktails p-5'>
                    <h1 className='style-font text-blue-200'>Cocktails</h1>
                    <ul className='flex flex-col gap-4 md:gap-10 '>
                        {cocktailsList.map(({name, country, detail, price}) => (
                            <li key={name} className='list flex justify-between gap-4'><div>{name}({country})</div><p>{price}({detail})</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mocktails;