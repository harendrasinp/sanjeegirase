import React from 'react'
import { motion } from 'framer-motion'
export const Header = () => {
    return (
        <div className='h-[12rem] flex flex-col justify-center items-center w-screen'>
            <div className='flex  justify-center items-center'>
                <img className='w-[3rem] h-[3rem]' src="images/bapu/bapu1.png" alt="bapupng" />
                <motion.div className='text-amber-950 text-[1.2rem] font-bold'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}>
                    "कादंबरी प्रकाशन सोहळा"
                </motion.div>
            </div>
            <motion.div className='text-amber-950 text-[0.8rem] flex flex-col justify-center items-center'>
                <div>विठाई प्रतिष्ठान,ठाणे व स्व.अण्णासाहेब आर.डी.देवरे कला व </div>
                <div>विज्ञान महाविद्यालय,म्हसदी,ता.साक्री,जि.धुळे यांचे संयुक्त विद्यमाने आयोजित</div>
            </motion.div>
        </div>
    )
}
