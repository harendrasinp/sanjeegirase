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
                :<div className='flex justify-center items-center'>
                    <button className='bg-amber-900 text-amber-50 rounded-[0.5rem] px-5 py-2' onClick={handlePlay}>Open</button>
                </div>
            }
        </div>
    )
}
