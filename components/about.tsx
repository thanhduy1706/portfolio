'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About', 0.5);

    // const { ref, inView } = useInView({
    //   threshold: 0.5,
    // })
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    // // console.log(inView)
    // useEffect(() => {
    //   if (inView && Date.now() - timeOfLastClick > 1000){
    //     setActiveSection('About')
    //   }
    // },[inView, setActiveSection, timeOfLastClick])

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        >
            <SectionHeading>About me</SectionHeading>

            <p className="mb-3">
                I enrolled in a coding bootcamp and learned{' '}
                <span className="font-medium">frontend web development</span>.
                I <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{' '}
                <span className="font-medium">
                    React, Next.js, and Node.js
                </span>
                . I am also familiar with TypeScript. I am always looking to
                learn new technologies. I am currently looking for a{' '}
                <span className="font-medium">intern position</span> as a
                Frontend developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                watching movies, and playing with my dog. I also enjoy{' '}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{' '}
                <span className="font-medium">UI/UX</span>. I'm
                also learning how to play the guitar.
            </p>
        </motion.section>
    );
}
