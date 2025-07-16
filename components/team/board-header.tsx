"use client"
import Image from 'next/image'
import { motion } from 'motion/react';
import BlurText from '../ui/BlurText';

export default function BoardHeaderImage() {
    return (
        <div>

            {/* Board header image on medium and up screens */}
            <div className="w-full hidden sm:block">
                <Image className="w-full mb-30" src="/images/team/board/board-header.png" alt="2025 ACM Board picture" width={2233} height={1016} />
            </div>


            {/* Title on small screens */}
            <div className='block sm:hidden mt-20 mx-auto px-10 mb-20'>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <BlurText text="The Board." className="text-maroon font-heading text-[4.20rem] sm:text-8xl" animateBy="letters" />
                </motion.div>
            </div>
        </div>

    );
}