import React from 'react';
import pexels from '../imgs/pexels.jpg'
import pexels1 from '../imgs/pexels1.jpg'
import pexels2 from '../imgs/pexels2.jpg'
import pexels3 from '../imgs/pexels3.jpg'
import pexels4 from '../imgs/pexels4.jpg'
import {profileList} from './index.js'

function About(props) {
    return (
        <div className='bg-gray-800'>
            <div className='w-full text-white  flex flex-col md:flex-row justify-between gap-10 px-4'>
                <div className='flex flex-col gap-4'>
                    <h1 className=' px-8 bg-white text-black w-max h-min rounded-4xl'>Cocktails</h1>
                    <p className='text-4xl style-font'> "Cocktails designed to delight."</p>
                </div>
                <div className='w-full md:w-sm'>
                    <p className='md:text-xl text-lg'> Raise your glass and taste the perfect balance of flavor and flair.</p>
                    <div className='flex gap-6'>
                        <div>
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
            <div>
                <div>
                    
                </div>
            </div>
            
        </div>
        
        
    );
}

export default About;