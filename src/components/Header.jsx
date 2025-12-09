import { headerLinks } from './index';
import { ScrollTrigger, SplitText } from 'gsap/all';
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, SplitText)

function Header(props) {


    useGSAP(() => {
        gsap.fromTo('header', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000040',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: 'header',
                start: 'bottom top',
                scrub: true
            }
        })
    }, [])
    return (
        <header className='text-white fixed left-0 top-0 w-full z-10'>
            <div className='flex-col md:flex-center px-4 p-2'>
                <a href= '' className='flex-center gap-4 shrink-0'>
                    <img src="/" alt="" className='' />
                    <p className='w-max style-font font-bold text-2xl'>Velvet Pour</p>
                </a>
                <ul className='flex justify-around md:justify-end md:gap-10 w-full px-10'>
                    {headerLinks.map((link) => (
                        <li key={link.id} className=''><a href='' className='peer'>{link.title}</a>
                        <div className='h-0.5 peer-hover:w-full peer-focus:w-full w-0 transition-all duration-100   bg-white'></div>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
        
    );
}

export default Header;