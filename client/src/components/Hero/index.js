import * as React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Ben from "../../assets/images/benWhite.png";
import FiligreeHero from "../Filigree";
// import Fill from "../../assets/images/fill1Color.png"
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
// const content = (isFirstMount) => ({
//     animate: {
//         transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : .5 },
//     },
// });
// const fill = {
//     initial: {
//         rotate: 180,
//         originX: 1.5,
//         opacity: 0,
//         scale: 0
//     },
//     animate: {
//         rotate: 0,
//         opacity: 1,
//         scale: 1,
//         transition: {
//             delay: 1,
//             duration: 5.5,
//             ease: [0.57, 0, 0.13, 1]
//         }
//     }
// };
// const fillFlip ={ 
//     initial: {
//         rotate: -180,
//         originX: -.7,
//         opacity: 0,
//         scale: 0
//     },
//     animate: {
//         rotate: 0,
//         opacity: 1,
//         scale: 1,
//         transition: {
//             delay: 1.5,
//             duration: 5.5,
//             ease: [0.57, 0, 0.13, 1]
//         }
//     }
// };
const Hero = () => (
    <>
        <section>
            <div className="relative z-50">
                <div className="h-100vh items-center justify-center">
                    <div className="relative">
                        <div
                            className="relative ">
                            <div className="frame w-100%">
                                <Link to={`/`}>
                                            <motion.img
                                                className="ben"
                                                src={Ben}
                                                alt="Ben Roslind"
                                                transition={transition}
                                            />
                            </Link>
                            <FiligreeHero />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)

export default Hero;