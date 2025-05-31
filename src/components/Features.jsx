import React, { useRef } from 'react'
import FeatureCards from './FeatureCards';

export default function Features() {
    const videoPlay = useRef();
    return (
        <div className='bg-black w-full h-full p-[10%]'>
            <div className='container'>
                <div className='px-5 py-12 w-[100\0%] md:w-[40%]'>
                    <h2 className=' text-lg font-circular-web text-blue-50 '>Explore the Zentry Universe</h2>
                    <p className='text-lg font-circular-web text-blue-50 opacity-50'>Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.</p>
                </div>
            </div>
            <div className='flex align-middle justify-center mt-[3rem]'>
                <FeatureCards src="/videos/feature-1.mp4" title="Radient" description="The game of games app transforming moments across Web2 & Web3 titles into rewards." />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-[2rem] md:gap-7">
                {/* Left side: Feature 2 */}
                <div className="w-full md:w-[50%] h-[25rem] md:h-[50.8rem]">
                    <FeatureCards
                        src="/videos/feature-2.mp4"
                        title="Zigma"
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    />
                </div>

                {/* Right side: Feature 3 and 4 stacked vertically */}
                <div className="flex flex-col w-full md:w-[50%] h-[50rem] md:h-[50rem] gap-2 ">
                    <div className="h-[25rem] md:h-1/2 w-full">
                        <FeatureCards
                            src="/videos/feature-3.mp4"
                            title="Nexus"
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </div>
                    <div className="h-[25rem] md:h-1/2 w-full">
                        <FeatureCards
                            src="/videos/feature-4.mp4"
                            title="Azul"
                            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        />
                    </div>
                </div>


            </div>

            <div className="flex md:flex-row flex-col items-center justify-center md:mt-[2rem] gap-2 md:gap-7">
                    <div className="w-full text-black md:h-[25rem]">
                        <FeatureCards
                            title="More Coming Soon"
                            className={"text-black bg-violet-300 hover:bg-black"}
                        />
                    </div>
                    <div className="h-[25rem] w-full">
                        <FeatureCards
                            src="/videos/feature-5.mp4"
                            // title="Prologue"
                            // description="The game of games app transforming moments across Web2 & Web3 titles into rewards."
                        />
                    </div>
                </div>

        </div>
    )
}
