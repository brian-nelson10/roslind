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
  };
  return (
    <AnimatePresence >
    <motion.div
     className="text-6xl text-center"
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span className="font-maragsa text-black font-normal hover:text-[#d6d6d6]" variants={child} key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
    </AnimatePresence>
  );
};
export default HeroText;