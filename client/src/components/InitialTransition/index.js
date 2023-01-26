import React from "react";
import { motion } from "framer-motion";

const blackBox = {
    initial: {
      height: "100%",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.2,
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
        duration: 1.3,
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
        duration: 2.5,
        delay: .8,
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
        className="absolute z-50 flex items-center justify-center w-full bg-[#242423]"
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
          className="text-[#fcbf49]"
        >
        
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-[#e8eddf] fill-current"
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

    );
  };
  export default InitialTransition;