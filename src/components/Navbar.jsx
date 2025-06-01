import React, { useEffect, useRef, useState } from 'react'
import clsx from "clsx";
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const navContainerRef = useRef();
    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
    const audioElement = useRef();
    const { y: scrollY } = useWindowScroll();
    const [LastscrollIndex, setLastScrollIndex] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    function toogleAudioIndicator() {
        setIsAudioPlaying(!isAudioPlaying);
        setIsIndicatorActive(!isIndicatorActive);
    }
    useEffect(() => {
        if (isAudioPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [isAudioPlaying])

    useEffect(() => {
        if (scrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('hidden');
            navContainerRef.current.classList.remove('bg-black');
        } else if (scrollY > LastscrollIndex) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('hidden');
        } else if (scrollY < LastscrollIndex) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('hidden');
            navContainerRef.current.classList.add('bg-black');
        }
        setLastScrollIndex(scrollY);
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.1,
            ease: "power3.out"
        })
    }, [scrollY]);

    
    
    return (
        <div ref={navContainerRef}
            className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all sm:inset-x-6 rounded-2xl duration-300 ease-in-out'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/gallery-1.webp" alt="logo" className='w-8 rounded-full' onClick={() => window.location.href = '#home'} />
                        <Button
                            title={"Products"}
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden item-center justify-center gap-1 w-fit"
                        />
                        <Button
                            title={"WhitePaper"}
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden item-center justify-center gap-1 w-fit"
                        />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block '>
                            {
                                navItems.map((item, index) => (
                                    <a key={index} className='nav-hover-btn' href={`#${item.toLowerCase()}`}>
                                        {item}
                                    </a>
                                ))
                            }
                        </div>
                        <button className='ml-10 flex items-center space-x-0.5'
                            onClick={toogleAudioIndicator}>
                            <audio ref={audioElement} src="/audio/loop.mp3" loop  />
                            {[1, 2, 3, 4, 5].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>

                </nav>
            </header>

        </div>
    )
}
