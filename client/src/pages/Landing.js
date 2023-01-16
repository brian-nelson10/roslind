import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import HeroText from "../components/HeroText";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Landing({isFirstMount}) {
    return (
        <Layout>
        <motion.section exit={{ opacity: 0 }}>
            <InitialTransition/>
            <motion.div
                initial="initial"
                animate="animate"
                variants={content(isFirstMount)}
                className="space-y-12">
                    <motion.div className="text-6xl font-black text-center"
                    variants={title}>
                        <HeroText text="Roslind"/>
                    </motion.div>
                </motion.div>
        </motion.section>
        </Layout>
    );
};

const blackBox = {
    initial: {
      height: "100%",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const init = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeIn",
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: .5,
        when: "afterChildren",
      },
    },
  };
  
  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: 1000,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  };

  const InitialTransition = () => {
    // Scroll user to top to avoid showing the footer
    React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);

    return (
       
        <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }>
             <motion.svg variants={init} className="absolute z-50 flex w-full h-full">
            <motion.svg variants={textContainer} className="absolute z-50 flex w-full h-full">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={1750}
          height={1800}
          className="text-white"
        >
        
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
          
        </pattern>
        <text
          className="text-xlxl font-bold font-maragsa w-full h-full"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Roslind
        </text>
      </motion.svg>
      </motion.svg>
        </motion.div>

    )

  }  