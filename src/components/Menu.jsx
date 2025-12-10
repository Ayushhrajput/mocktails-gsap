import React from 'react'
import { sliderlists, cocktails } from '../components/index.js'
import { useState } from 'react';

function Menu(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    

    return (
        <section id='menu' aria-labelledby='menu-heading' className='relative bg-gray-200 py-4'>
            <h1 id='menu-heading' className='sr-only'>Cocktails Menu</h1>
            <nav id='cocktails-tab' aria-label='cocktail navigation' className=' flex justify-around gap-4 bg-white px-4 shadow-sm p-2 m-4 w-max md:w-xl mx-auto rounded-4xl'>
                {cocktails.map((cocktail, index) => {
                    const isActive = index == currentIndex
                    return (
                        <button key={cocktail.id} className={`${isActive? '': 'text-gray-600'}`} onClick={() => (setCurrentIndex(index))}>{cocktail.name}</button>
                    )
                })}
            </nav>
            <div className='content'>
                <div className='arrow flex absolute text-white justify-between h-full w-full md:w-80 left-1/2 top-1/4 -translate-x-1/2'>
                    <button className='left-arrow  h-100 w-full' onClick={() => {
                        if(currentIndex == 0){
                            setCurrentIndex(currentIndex)
                        } else {
                            setCurrentIndex(currentIndex-1)
                        }
                        
                    }}> 
                        <span></span>
                    </button>
                    <button className='left-arrow  h-100 w-full' onClick={() => {
                        if(currentIndex == cocktails.length-1) {
                            setCurrentIndex(currentIndex)
                        } else {
                            setCurrentIndex(currentIndex+1)
                        }
                        }}>
                            
                        <span></span>
                    </button>
                </div>
                <div className=''>
                        {
                            <img key={currentIndex} src={sliderlists[currentIndex].image} alt="" className='w-full md:w-80 object-cover mx-auto' />
                        }
                        
                </div>
                <div className='absolute text-2xl sm:text-4xl style-font w-min md:w-40 px-4 right-0 md:right-1/12  top-1/2'>{sliderlists[currentIndex].title}</div>
                <div className=' absolute top-1/6 md:top-1/2 md:left-1/8 px-4'>
                        <div className=' text-4xl text-white  text-shadow-2xs md:text-black font-bold'>{cocktails[currentIndex].name}</div>
                        <button className='bg-white rounded-full px-4 text-xl hidden md:inline shadow-sm'>About</button>
                </div>
                
                
            </div>
            
        </section>
    );
}

export default Menu;