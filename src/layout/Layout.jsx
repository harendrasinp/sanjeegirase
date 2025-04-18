import React, { useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { useRef } from 'react'
import "../../src/index.css"
export const Layout = ({ children }) => {
    const [toggle, setToogle] = useState(false);
    const musicRef = useRef();
    const handlePlay = () => {
        musicRef.current.play();
        setToogle(true)
    };
    return (
        <div className=' flex flex-col gap-6'>
            <div className={`bg-[url(/images/bg/background.jpg)] bg-fixed bg-cover bg-no-repeat bg-center overflow-y-hidden ${toggle ? "animation" : "h-[10rem]"}`}>
                <audio ref={musicRef} src="music/backmusic.mp3"></audio>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
            {toggle ? null
                :<div className='flex flex-col justify-center items-center gap-6'>
                    <button className='bg-amber-900 text-amber-50 rounded-[0.5rem] px-5 py-2' onClick={handlePlay}>Open</button>
                    <div className='shadow-2xl shadow-amber-950'>
                        <img className='w-[12rem] h-[18rem]' src="images/bapu/bapu2.jpg" alt="bapu" />
                    </div>
                    <div className='text-amber-950 font-semibold  text-[1.5rem]'>डॉ. संजीव गिरासे</div>
                </div>
            }
        </div>
    )
}
