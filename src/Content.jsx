
import { Carousel } from './Carousel'
import { AnimatePresence, motion } from 'framer-motion'
import "../src/index.css"
import { pdata } from './pdata'
import { useEffect, useState } from 'react'
export const Content = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % pdata.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='h-[calc(185vh-10rem)] flex flex-col justify-center items-center -mt-5 '>
            <div className='flex justify-center items-center  text-amber-900 mb-3'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-bold'>दिनांक वेळ</div>
                    <div className='border-b-2 border-amber-950'>रविवार,२० एप्रिल २०२५</div>
                </div>
            </div>
            <div className='overflow-hidden h-[20rem] w-screen flex justify-center items-center relative mb-6'>
                <motion.div
                    className="absolute top-0"
                    initial={{ y: "30%" }}
                    animate={{ y: "-50%" }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className='flex flex-col justify-center items-center space-y-1'>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                प्रकाशन सोहळ्याचे अध्यक्ष
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                मा. दादासाहेब डॉ. संजयकुमारजी आर. देवरे (नाक, कान, घसा शल्यचिकित्सक)<br />
                                अध्यक्ष-आ.ध.मा.शि.प्र.संस्था, धुळे
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा. प्राचार्य तानसेन जगताप
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                संस्थापक अध्यक्ष-म.सा.प.शाखा-चाळीसगाव
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.प्रा.डॉ.आशुतोष पाटील
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                समीक्षक,संचालक-आजीवन अध्यापन व विस्तार विभाग क.ब.चौ.उ.म.वि.जळगाव
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.प्राचार्य डॉ.दिलीप धोङगे
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                समीक्षक,संत साहित्याचे गाढे अभ्यासक
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.युवराज माळी
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                संचालक, अथर्व पब्लिकेशन, जळगाव
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-center items-center space-y-1'>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                प्रकाशन सोहळ्याचे अध्यक्ष
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                मा. दादासाहेब डॉ. संजयकुमारजी आर. देवरे (नाक, कान, घसा शल्यचिकित्सक)<br />
                                अध्यक्ष-आ.ध.मा.शि.प्र.संस्था, धुळे
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा. प्राचार्य तानसेन जगताप
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                संस्थापक अध्यक्ष-म.सा.प.शाखा-चाळीसगाव
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.प्रा.डॉ.आशुतोष पाटील
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                समीक्षक,संचालक-आजीवन अध्यापन व विस्तार विभाग क.ब.चौ.उ.म.वि.जळगाव
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.प्राचार्य डॉ.दिलीप धोङगे
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                समीक्षक,संत साहित्याचे गाढे अभ्यासक
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-[1rem] font-bold">
                                मा.युवराज माळी
                            </div>
                            <div className="text-[1rem] w-[20rem]">
                                संचालक, अथर्व पब्लिकेशन, जळगाव
                            </div>
                        </div>

                    </div>

                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center mb-5'>
                <div className='text-amber-950 font-bold tiro-devanagari-marathi-regular-italic mb-2'>लेखक संजीव गिरासे यांचे प्रकाशित पुस्तके </div>
                <div><Carousel /></div>
            </div>

            <div className='border-[0.5rem] rounded-[0.2rem] border-amber-950/60 w-[20rem] h-[16rem] mb-5 shadow-2xl shadow-amber-950'>
                <div className="w-[19rem] h-[15rem] mx-auto overflow-hidden relative">
                    <AnimatePresence>
                        <motion.img
                            key={pdata[index]}
                            src={pdata[index]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center'>
                <div className='text-amber-950 font-semibold text-[2rem]'>Location</div>
                <div className='text-amber-950 font-semibold text-[1rem]'>आय.एस.ओ. हॉल, क्यूमाईन क्लब समोर, धुळे</div>
                <iframe className='w-[20rem] h-[10rem] border-[0.5rem] border-amber-950/75' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.2568261680917!2d74.7728171!3d20.901984499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f3390aaeb7%3A0xe62611ce05413890!2sIndian%20Medical%20Association!5e0!3m2!1sen!2sin!4v1744998344307!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>

    )
}
