import React from 'react'
import { Carousel } from './Carousel'
import { motion } from 'framer-motion'
import "../src/index.css"
export const Content = () => {
    return (
        <div className='h-[calc(100vh-10rem)] flex flex-col justify-center items-center'>
            <div className='overflow-hidden h-[15rem] w-screen flex justify-center items-center relative'>
                <motion.div
                    className="absolute top-0"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{
                        duration:30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className='flex flex-col justify-center items-center space-y-1'>
                        <div className='text-[1rem] font-bold'>प्रकाशन सोहळ्याचे अध्यक्ष</div>
                        <div className='text-[1rem] '>मा. दादासाहेब डॉ. संजयकुमारजी आर. देवरे</div>
                        <div className='text-[1rem] '>(नाक, कान, घसा शल्यचिकित्सक)अध्यक्ष-आ.ध.मा.शि.प्र.संस्था,धुळे</div>

                        <div className='text-[1rem] font-bold'>मा. प्राचार्य तानसेन जगताप</div>
                        <div className='text-[1rem] '>संस्थापक अध्यक्ष-म.सा.प.शाखा-४०गाव</div>

                        <div className='text-[1rem] font-bold'>मा.प्रा.डॉ.आशुतोष पाटील</div>
                        <div className='text-[1rem] '>समीक्षक,संचालक-आजीवन अध्यापन व विस्तार विभाग क.ब.चौ.उ.म.वि.जळगाव</div>

                        <div className='text-[1rem] font-bold'>मा.प्राचार्य डॉ.दिलीप धोङगे</div>
                        <div className='text-[1rem] '>समीक्षक,संत साहित्याचे गाढे अभ्यासक</div>

                        <div className='text-[1rem] font-bold'>मा.युवराज माळी</div>
                        <div className='text-[1rem] '>संचालक, अथर्व पब्लिकेशन, जळगाव</div>

                    </div>
                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-amber-950 font-bold tiro-devanagari-marathi-regular-italic'>लेखक संजीव गिरास</div>
                <div><Carousel /></div>
            </div>
        </div>

    )
}
