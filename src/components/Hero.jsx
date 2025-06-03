import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function Hero() {
    const videos=[
        "https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4",
        "https://a.storyblok.com/f/271652/x/927ee8c1eb/hero-cut-2.mp4",
        "https://a.storyblok.com/f/271652/x/1d3a68d908/hero-cut-3.mp4",
        "https://a.storyblok.com/f/271652/x/54a86466e4/hero-cut-4.mp4",
    ]
    const totalVideos = 4;
    const [currentVideo, setCurrentVideo] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const nextVideoRef = useRef(null);

    function getVideoSrc(index) {
        return videos[index - 1];
    }

    function handleMiniVideoClick() {
        if (isTransitioning) return; // Prevent multiple clicks during transition

        setIsTransitioning(true);
        const nextVideo = (currentVideo % totalVideos) + 1;

        // Start loading the video immediately but don't show it yet
        setHasClicked(true);

        // After 1 second, update the current video and show the transition
        setTimeout(() => {
            setCurrentVideo(nextVideo);
            setIsTransitioning(false);
        }, 500);
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
        if (hasClicked && !isTransitioning) {
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
        <div id='home' className='relative h-dvh w-screen overflow-x-hidden'>
            {/* {loading && (
                <>
                    <div className="flex-center flex-col absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                        <div className="three-body">
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                        </div>
                        <div className='text-center text-black'>
                            <br />
                            <p>
                                Please wait while the content loads — it might take a little longer the first time. <br /> Once loaded, refreshing the page can help smooth out the animations.
                            </p>
                        </div>
                    </div>
                </>


            )} */}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overlfow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className=" mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-3xl">
                        <div
                            onClick={handleMiniVideoClick}
                            className={`origin-center scale-50 opacity-20 transition-all duration-300 ease-out hover-scale-loop ${isTransitioning ? 'pointer-events-none opacity-50' : ''}`}
                        >
                            {/* MINI VIDEO PLAYER */}
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                // autoPlay
                                id='mini-video'
                                className='size-64 object-cover scale-30 rounded-3xl hover:scale-100'
                                onLoadedData={handleVideoLoad}
                                // poster='img/about.png'
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