import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

export default function FeatureCards({ src, title, description, className }) {
    const videoPlay = useRef();
    return (
        <div className={` relative w-full h-full rounded-xl`}>
            <div className={` ${className} bento-tilt_1 w-full h-[20rem] md:h-full rounded-2xl hover:scale-95 duration-100`}>
                <div className='absolute  p-7 text-blue-50'>
                    <h2 className={` .special-font  bento-title special-font `}><b>{title}</b></h2>
                    <p className=' text-white w-[50%] md:w-[50%] text-[10px] md:text-[1rem] md:text-gray-400 '>{description}</p>
                </div>
                <video
                    ref={videoPlay}
                    src={src}
                    loop
                    muted
                    className="w-full h-full object-cover"
                    onMouseEnter={() => videoPlay.current.play()}
                    onMouseLeave={() => videoPlay.current.pause()}
                />
            </div>
        </div>
    )
}
