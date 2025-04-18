
import { Carousel } from './Carousel'
import { motion } from 'framer-motion'
import "../src/index.css"
export const Content = () => {
    
    return (
            <div className='h-[calc(100vh-10rem)]flex flex-col justify-center items-center gap-5'>
                <div className='overflow-hidden h-[15rem] w-screen flex justify-center items-center relative'>
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
                                    संस्थापक अध्यक्ष-म.सा.प.शाखा-४०गाव
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
                                    संस्थापक अध्यक्ष-म.सा.प.शाखा-४०गाव
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
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-amber-950 font-bold tiro-devanagari-marathi-regular-italic'>लेखक संजीव गिरास</div>
                    <div><Carousel /></div>
                </div>
            </div>
        
    )
}
