import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img 
            src={src} 
            alt=""
            className="w-full h-full object-cover"
        />
    </div>
);

export default function Contact() {
    return (
        <div id="contact" className="my-10 sm:my-20 min-h-96 w-full px-4 sm:px-10">
            <div className='relative rounded-lg bg-black py-20 sm:py-24 md:py-32 lg:py-36 text-blue-50 overflow-hidden'>
                <div className="absolute left-4 sm:left-10 lg:left-20 top-0 hidden sm:block h-full w-40 sm:w-60 lg:w-80 overflow-hidden">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 translate-y-40 sm:translate-y-60 lg:translate-y-40"
                    />
                </div>
                
                <div className="absolute -top-20 right-4 w-40 sm:left-20 sm:w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-72">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute scale-75 sm:scale-100 md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path scale-75 sm:scale-100 md:scale-125"
                    />
                </div>
                
                {/* Main content */}
                <div className='flex flex-col justify-center items-center gap-3 sm:gap-5 px-4 sm:px-8'>
                    <p className='font-general text-xs sm:text-sm uppercase md:text-[15px] text-center'>
                        JOIN ZENTRY
                    </p>
                    <AnimatedTitle
                        title="let's build the new era of gaming together."
                        containerClass="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-center text-2xl sm:text-4xl md:text-5xl lg:text-[5rem] uppercase bg-text-image leading-tight sm:leading-normal"
                    />
                    <Button 
                        id='contact' 
                        title='Contact us' 
                        containerClass='bg-white text-black' 
                    />
                </div>
            </div>
        </div>
    )
}