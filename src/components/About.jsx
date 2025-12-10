import React, { useEffect, useLayoutEffect } from 'react';
import pexels from '../imgs/pexels.jpg'
import pexels1 from '../imgs/pexels1.jpg'
import pexels2 from '../imgs/pexels2.jpg'
import pexels3 from '../imgs/pexels3.jpg'
import { gsap } from 'gsap'
import {profileList, FeatureLists, goodLists} from './index.js'
import { SplitText } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import useMediaQuery from 'react-responsive'
gsap.registerPlugin(SplitText, ScrollTrigger)

function About(props) {

    const isMobile = useMediaQuery({maxWidth: 768})

    useLayoutEffect(() => {
        window.onload = () => {
            ScrollTrigger.refresh()
        }
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#img',
                start: 'top center',
                end: 'top 20% ',
                scrub: true,
                
            }
        })
        const lineSplit = new SplitText('.line', {
            type: 'lines'
        })
        tl.to(lineSplit.lines, {
            opacity: 0,
            duration:1,
            delay: 1,
            ease: 'power1.inOut'
        })
        tl.to('#img', {
            maskSize: 100,
            scale: isMobile? 1: 2,
            duration: 1
        })
        
        },[])
    
    return (
        <div className=''>
            <div className='w-full  flex flex-col md:flex-row justify-between gap-10 px-4 py-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className=' px-8 w-max text-white h-min rounded-4xl bg-gray-400'>Cocktails</h1>
                    <p className='text-4xl style-font'> "Cocktails designed to delight."</p>
                </div>
                <div className='w-full md:w-sm'>
                    <p className='md:text-xl text-lg'> Raise your glass and taste the perfect balance of flavor and flair.</p>
                    <div className='flex gap-6'>
                        <div className='text-gray-600'>
                            <span className='md:text-4xl text-2xl'>4.5</span>
                            <span className='md:text-xl'>/</span>
                            <span className='md:text-xl'>5</span>
                        </div>
                        <div className='flex'>
                            {profileList.map((profile) => (
                                <img key={profile.imgPath} src={profile.imgPath} alt="" className='w-10 h-10 object-cover rounded-full border -ml-4 ' ></img>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='flex md:flex-row flex-col flex-wrap justify-center px-4 py-4 gap-4'>
                <img src={pexels} alt="" className='w-max md:w-lg  rounded-xl object-cover' />
                <img src={pexels1} alt="" className='w-max md:w-xl md:h-min rounded-xl object-cover'/>
                <img src={pexels2} alt="" className='w-max md:w-xl md:h-min rounded-xl object-cover'/>
                <img src={pexels3} alt="" className='w-max md:w-lg rounded-xl object-cover'/>
            </div>
            <div id='box' className='p-4 overflow-hidden'>
                <div id='container' className=' flex flex-col md:h-120 md:flex-row px-4 md:px-20 justify-between items-center'>
                    <ul className='italic'>
                        {FeatureLists.map((lines, index) => (
                            <li key={index} className='line '>{lines}</li>
                        ))}
                    </ul>
                    <div><img id='img' src='https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg' alt="" className='masked-img w-sm md:lg rounded-lg' /></div>
                    <ul className='italic'>
                        {goodLists.map((lines, index) => (
                            <li key={index} className='line '>{lines}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
            
        </div>
        
        
    );
}

export default About;