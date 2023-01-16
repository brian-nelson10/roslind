import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeroText = ({ text }) => {
// splitting text into letters
  const letters = Array.from(text);
 
// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {  staggerChildren: .09, delayChildren: 5.5 * i },
    }),
    exited: (i = 1) => ({
        opacity: 0,
        transition: { staggerChildren: .09, delayChildren: 0.5 * i },
      }),
  };
// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,

      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
    exited: {
            opacity: 0,
            x: 50,
            y: -10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 1
            }
        }
  };


  return (
    <AnimatePresence >
    <motion.div
     className="text-6xl font-black text-center "
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exited"
    >
      {letters.map((letter, index) => (
        <motion.span className="font-maragsa" variants={child} key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
    
    </AnimatePresence>
  );
};


export default HeroText;