import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
export default function Story() {
    const frameRef = useRef(null);
    function handleMouseLeave() {

        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.6,
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 500,
            ease: 'power3.out'
        })
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
            duration: 0.6,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power3.out'
        })
    }
    return (
        <>
            <div id='Story' className='min-h-screen w-screen bg-black text-blue-50'>
                <div className='relative mb-8 flex flex-col items-center justify-center gap-5'>
                    <h2 className='font-general text-sm uppercase md:text-[10px]'>THE OPEN IP UNIVERSE</h2>
                    <div className='relative size-full flex justify-center align-middle w-[50%]'>
                        <AnimatedTitle title={"THE STORY OF A HIDDEN REALM"} containerClass=" mt-5 pointer-events-none mix-blend-difference relative z-10 text-center text-[6rem] uppercase" />
                    </div>
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    src="/img/entrance.webp"
                                    alt="enterance"
                                    className='object-contain'
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={(e) => handleMouseMove(e)}
                                />
                            </div>
                        </div>
                        <svg
                            className="invisible absolute size-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="flt_tag">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="8"
                                        result="blur"
                                    />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                        result="flt_tag"
                                    />
                                    <feComposite
                                        in="SourceGraphic"
                                        in2="flt_tag"
                                        operator="atop"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className='absolute md:bottom-0 md:right-20 md:w-[30%] w-full right-0 bottom-20 p-10 flex flex-col gap-5'>
                        <p className='text-lg font-circular-web'>Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
                        <Button id="explore" title="Explore" containerClass=" text-black flex bg-blue-50" rightIcon={<TiLocationArrow />}  />
                    </div>
                </div>
            </div>
        </>
    )
}
