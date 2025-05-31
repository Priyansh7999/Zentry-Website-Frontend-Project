import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function Hero() {
    const totalVideos = 4;
    const [currentVideo, setCurrentVideo] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const nextVideoRef = useRef(null);

    function getVideoSrc(index) {
        return `videos/hero-${index}.mp4`;
    }

    function handleMiniVideoClick() {
        setHasClicked(true);
        setCurrentVideo((prev) => (prev % totalVideos) + 1);
    };
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setLoading(false);
        }
    }, [loadedVideos]);

    const upcomingVideoIndex = (currentVideo % totalVideos) + 1;

    // GSAP WORK
    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#hidden-video', { visibility: 'visible' })
            gsap.to('#hidden-video', {
                duration: 1,
                scale: 1,
                width: '100%',
                height: '100%',
                ease: 'power1.inOut',
            })
            gsap.from('#mini-video', {
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentVideo], revertOnUpdate: true })

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0, 90% 90%, 0 100%)',
            borderRadius: '0 0 40% 10%',
        })
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    return (
        <div id='Hero' className='relative h-dvh w-screen overflow-x-hidden'>
            {loading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overlfow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className=" mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-3xl">
                        <div onClick={handleMiniVideoClick} className='origin-center scale-75 opacity-20 transition-all duration-300 ease-out hover:scale-100 hover:opacity-100'>
                            {/* MINI VIDEO PLAYER */}
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                // autoPlay
                                id='mini-video'
                                className='size-64 origin-center scale-30 object-cover object-center rounded-3xl hover:scale-100'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    {/* Big video hidden */}
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentVideo)}
                        autoPlay
                        loop
                        muted
                        id='hidden-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                         onLoadedData={handleVideoLoad}
                    />
                    {/* Big video visible */}
                    <video
                        src={getVideoSrc(currentVideo)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                {/* Gaming at bottom */}
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>G<b>a</b>ming</h1>
                {/* Top Section */}
                <div className='absolute top-0 left-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'><b>redefine</b></h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-xl text-blue-100'>Enter the Metagame <br /> Unleash the Play Economy</p>
                        <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 flex-center gap-1" />
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black-75'>G<b>a</b>ming</h1>
        </div>
    );
}

export default Hero;
