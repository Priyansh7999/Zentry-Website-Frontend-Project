import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({ title, containerClass }) {
    const titleRef = useRef();

    useGSAP(() => {
        // gsap.fromTo(
        //   titleRef.current,
        //   {
        //     x: '-100px', // from left
        //     y: '100px',  // from bottom
        //     opacity: 0.4,
        //   },
        //   {
        //     x: '0px',
        //     y: '0px',
        //     opacity: 1,
        //     duration: 1,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //       trigger: titleRef.current,
        //       start: 'top 80%', // when top of element is 80% from top of viewport
        //       toggleActions: 'play none none reverse',
        //     },
        //   }
        // );
        gsap.from('#title', {
            x: '-100px',
            y: '100px',
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#title',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <div>
            <div
                ref={titleRef}
                id='title'
                className='special-font mx-11 mt-5 text-center text-2xl uppercase leading-[0.8] md:text-[5rem]'
            >
                <b>{title}</b>
            </div>
        </div>
    );
}
