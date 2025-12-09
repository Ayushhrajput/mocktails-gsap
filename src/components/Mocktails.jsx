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
        <div className=' bg-gray-800 ' id='box'>
            
        </div>
    );
}

export default Mocktails;