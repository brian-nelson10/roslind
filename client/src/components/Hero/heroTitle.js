import * as React from "react";
import "./hero.css";
import { AnimatePresence, motion } from "framer-motion";
const HeroTitle = ({ text, para }) => {

const letters = Array.from(text);
const parag = Array.from(para);
// Variants for Container
  const title = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {  staggerChildren: .09, delayChildren: .5 * i },
    }),
  };

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
          y: -60,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]        
          },
        },
  };

    return (
        <AnimatePresence>
            <div className="title">
              <motion.div 
                style={{zIndex: "5"}}
                className="text-xlxl font-bold font-maragsa" 
                variants={title}
                initial="hidden"
                animate="visible">
                 {letters.map((letter, index) => (
        <motion.span className="font-maragsa text-black hover:transform-scale(2)" 
            variants={child} 
            key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
              </motion.div>
              <motion.div variants={title}
                initial="hidden"
                animate="visible">
                    {parag.map((letter, index) => (
              <motion.span 
                variants={child}
                key={index}
                className="paragraphContainer">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
              ))}
              </motion.div>
              </div>
              </AnimatePresence>
    )
  };

  export default HeroTitle;