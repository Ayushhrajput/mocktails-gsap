import { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import {useMediaQuery} from 'react-responsive'
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

function Hero(props) {
  
    
    
  const isMobile = useMediaQuery({maxWidth: 768})

  useLayoutEffect(() => {
    
    const titleSplit = new SplitText(".titled", { type: "lines" });
    const paragraphSplit = new SplitText(".paragraph", {
      type: "lines",
    });
    
    
    gsap.set(titleSplit.chars, { opacity: 1 });
    gsap.from(titleSplit.lines, {
      yPercent: 40,
      opacity: 0,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
      delay: 1,
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
        className="bg-blue-400 relative h-screen overflow-hidden"
      >
        <h1
          
          className="text-[6rem] lg:text-[12rem] titled font-bold style-font w-max absolute top-1/12 left-1/2 -translate-x-1/2"
        >
          MOJITO
        </h1>
        <img
          src="/imgs/lemonslice.png"
          alt=""
          id="l-lemon"
          className="max-w-40 absolute -left-1/6 md:-left-1/16 top-1/2"
        />
        <img
          src="/imgs/lemon.png"
          alt=""
          id="r-lemon"
          className="max-w-40 absolute -right-1/8 md:-right-1/16 top-1/4 -rotate-90"
        />
        <div className="absolute flex justify-between items-end bottom-0  w-full p-4">
          <p className="w-20 style-font paragraph text-lg md:text-4xl md:w-60">
            "Shake it, stir it, sip it"
          </p>
          <p className="w-40 paragraph hidden lg:inline italic md:w-60">
            Innovative blends and daring twists designed for those who crave
            something extraordinary.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
