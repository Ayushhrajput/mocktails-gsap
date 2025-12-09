import { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import {useMediaQuery} from 'react-responsive'
import { SplitText, ScrollTrigger } from "gsap/all";
import lemon from '../imgs/lemon.png'
import lemonSlice from '../imgs/lemonslice.png'
import mocktail from '../imgs/mocktail.png'
gsap.registerPlugin(SplitText, ScrollTrigger);

function Hero(props) {
  
    
    
  const isMobile = useMediaQuery({maxWidth: 768})

  useLayoutEffect(() => {
    

    const paragraphSplit = new SplitText(".paragraph", {
      type: "lines",
    });
    
    
    
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
      delay: 1,
    });
    const titleSplit = new SplitText(".titled", { type: "lines" });
    gsap.from(titleSplit.lines, {
      yPercent: 40,
      opacity: 0,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.06,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#l-lemon", { y: -200 }, 0)
      .to("#r-lemon", { y: 200 }, 0);
      return () => {
      titleSplit.revert();
      paragraphSplit.revert();
    };

  }, []);

  return (
    <div className="text-white">
      <section
        id="hero"
        className="bg-[url('https://images.pexels.com/photos/12419161/pexels-photo-12419161.jpeg')] relative bg-cover bg-center h-140 w-full overflow-hidden"
      >
        <h1
          
          className="text-8xl md:text-[12rem] titled font-extrabold w-max absolute top-1/6 left-1/2 -translate-x-1/2 z-10 "
        >
          MOJITO
        </h1>
        <div className="absolute bottom-0 w-60 left-10/12 -mx-40 p-4">
          <p className="text-xl  paragraph  italic">
            Innovative blends and daring twists designed for those who crave
            something extraordinary.
          </p>
        </div>
        
      </section>
    </div>
  );
}

export default Hero;
