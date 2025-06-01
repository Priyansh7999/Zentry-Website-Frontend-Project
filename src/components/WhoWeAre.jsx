import React, { useState, useRef } from 'react';
import Button from './Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Title({ src, alt = "Character" }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span 
      className="relative mx-2 align-middle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dash always remains in place */}
      <span className="inline-block w-16 h-16 bg-black mx-4 mb-7 rounded-xl align-middle"></span>
      
      {/* Image appears over the dash on hover with scaling animation */}
      <img
        src={src}
        alt={alt}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg transition-all duration-500 ease-out shadow-2xl z-50 ${
          isHovered ? 'w-56 h-40 scale-150 opacity-100 z-50' : 'scale-0 opacity-0'
        }`}
      />
    </span>
  );
}

export default function WhoWeAre() {
  const containerRef = useRef(null);
  
  // GSAP ScrollTrigger Animation
  useGSAP(() => {
    // Set initial state for all text elements
    gsap.set(['#text-1', '#text-2', '#text-3', '#text-4', '#text-5', '#text-6', '#text-7'], {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotationX: -15
    });
    
    // Create timeline for sequential animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom 95%",
        scrub: 1,
        markers: false, // Set to true for debugging
      }
    });
    
    // Animate each text element with stagger
    tl.to('#text-1', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1)"
    })
    .to('#text-2', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to('#text-3', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to('#text-4', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .to('#text-5', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .to('#text-6', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .to('#text-7', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6");
    
  }, { scope: containerRef });
  
  return (
    <div ref={containerRef} className='relative mb-8 mt-36 flex flex-col items-center justify-center gap-5'>
      <h2 className='font-general text-sm uppercase md:text-[15px]'>WHO WE ARE</h2>
      <div className='relative size-full flex justify-center align-middle w-[100%]'>
        <div className='special-font text-8xl text-center'>
          <b>
            <p id='text-1'>WE'RE BUILDING</p>
            <p id='text-2'>A NEW <span><Title src="img/gallery-4.webp" /></span> REALITY</p>
            <p id='text-3'>THAT REWARDS</p>
            <p id='text-4'>PLAYERS <Title src="img/swordman.webp" /> AND</p>
            <p id='text-5'>EMPOWERS</p>
            <p id='text-6'>HUMANS & AI</p>
            <p id='text-7'>TO <Title src="img/gallery-5.webp" /> THRIVE</p>
          </b>
        </div>            
      </div>
      <div className='text-center'>
        <p className=''>Zentry envisions a future where players, emerging tech, and <br /> a new economy unite at the convergence of gaming and AI.</p>
        <Button title="DISCOVER US" containerClass=" mt-5 text-center text-[1rem] uppercase text-white bg-black" />
      </div>
    </div>
  );
}