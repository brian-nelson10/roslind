import React from "react";
import { motion } from "framer-motion";
import HomeNav from "../components/Nav/homeNav";
import Hero from "../components/Hero";
import HeroTitle from "../components/Hero/heroTitle";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const hero = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .7,
      duration: 1.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Landing({isFirstMount}) {
    return (
        <>
        
       
            <motion.section exit={{ opacity: 0 }} className="w-max h-max sm:flex-col">
              <div className="sm:flex-col">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={content(isFirstMount)}
                    className="space-y-12 w-max h-max">
                    <motion.div className="text-6xl font-black text-center"
                        variants={title}>
                        <HomeNav />
                    </motion.div>
                    <motion.div className=" grid grid-columns-2 gap-2 mx-0 my-0">
                        <motion.div className="col-start-1 col-end-3 mt-44 ml-28">
                      <HeroTitle text="Roslind" para="A Collection of Artist Dropouts"/>
                      </motion.div>
                      <motion.div 
                        className="col-start-3 col-end-4 sm: row-span-full" 
                        variants={hero}>
                      <Hero/>
                      </motion.div>
                    </motion.div>
                </motion.div>
                </div>
            </motion.section>
        </>
    );
};
