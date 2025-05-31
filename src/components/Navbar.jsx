import React, { useRef, useState } from 'react'
import clsx from "clsx";
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
export default function Navbar() {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const navContainerRef = useRef();
    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
    const audioElement = useRef();
    function toogleAudioIndicator() {
        audioElement.current.paused ? audioElement.current.play() : audioElement.current.pause();
    }

    return (
        <div ref={navContainerRef}
            className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full item-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/gallery-1.webp" alt="logo" className='w-8 rounded-full' />
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
                            <audio ref={audioElement} className='hidden' src="/audio/loop.mp3" loop>
                                {[1, 2, 3, 4].map((bar) => (
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
                            </audio>
                        </button>
                    </div>

                </nav>
            </header>

        </div>
    )
}
