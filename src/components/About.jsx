import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);
export default function About() {
    useGSAP(() => {
        const clipAnimation = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#clip",
                    start: "center center",
                    end: "+=800 center",
                    scrub: 0.5,
                    pin: true,
                }
            }
        )

        clipAnimation.to(".mask-clip-path", {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    });
    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center justify-center gap-5'>
                {/* heading */}
                <h2 className='font-general text-sm uppercase md:text-[20px]'>Welcome to Zentry</h2>
                <AnimatedTitle title={"Discover the world's largest shared adventure"} containerClass=" mt-5 text-center text-2xl uppercase" />
                {/* Big heading */}
               
                {/* Below image Text */}
                <div className='about-subtext'>
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>
                    <p>Zentry is a unified play layer driving attention and contribution through cross-world AI gamification</p>
                </div>
            </div>
            {/* Image */}
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw];">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="size-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
