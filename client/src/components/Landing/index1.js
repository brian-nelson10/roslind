// import React from "react";
// import Triangle from "../../assets/tri2.svg"
// import {  motion } from "framer-motion";
// import "./styles.css";
// import HeroText from "../HeroText";

// const content = (isFirstMount) => ({
//     animate: {
//         transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : .5 },
//     },
// });
// const controls = {
//     initial: { scale: 0, opacity: 0 },
//     animate: {
//         scale: [null, .01, 1.1, .8],
//         opacity: [.5, .2, .9, 1],
//         transition: {
//             type: 'tween',
//             duration: 1.1,
//             ease: "easeInOut",
//             delay: 2

//         },
//     },
    
// };
// const exited = {
    
//     initial: {
//         opacity: 0,
//         transition: {
//             type: 'tween',
//             duration: 1.1,
//             ease: "easeOut",
//             delay: 5
//         }

//     }
// }

// const Example = ({ isFirstMount }) => {

//     return (
//         <>
//         <div className="container">
//             <motion.div variants={exited}>
//             <HeroText text="Roslind" />
//             </motion.div>
//         <motion.div
//             initial="initial"
//             animate="animate"
//             variants={content(isFirstMount)}>
//                 <motion.img
//                     variants={controls}
//                     src={Triangle} alt="yea"
//                     >
                        
//                 </motion.img>
//             </motion.div>
//             </div>
//             </>
        
//     )
// }

// export default Example;