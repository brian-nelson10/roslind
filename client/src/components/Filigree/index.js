import * as React from "react";
import "./filigree.css";
import { motion } from "framer-motion";
import Fill from "../../assets/images/fill1Color.png"
const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : 1.5 },
    },
});
const fill = {
    initial: {
        rotate: 180,
        originY: .5 ,
        originX: 2,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: 0,
        originX: 1.5,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 5.5,
            ease: [0.57, 0, 0.13, 1]
        }
    }
};
const fill2 = {
    initial: {
        rotate: -180,
        rotateX: 180,
        originY: .1 ,
        originX: 2,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: 0,
        rotateX: 180,
        originX: 1.5,
        originY: .5 ,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 5.5,
            ease: [0.57, 0, 0.13, 1]
        }
    }
};

const fillFlip ={ 
    initial: {
        rotate: -90,
        rotateY: 180,
        originX: .7,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: 0,
        rotateY: 180,
        originX: 1,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.5,
            duration: 5.5,
            ease: [0.57, 0, 0.13, 1]
        }
    }
};
const fillFlip2 ={ 
    initial: {
        rotate: 90,
        rotateY: 180,
        rotateX: 180,
        originX: .7,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: 0,
        rotateY: 180,
        rotateX: 180,
        originX: 1,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.5,
            duration: 5.5,
            ease: [0.57, 0, 0.13, 1]
        }
    }
};
const FiligreeHero = ({isFirstMount}) => {

return (
    <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
        >
    <motion.img
 className="fill"
 src={Fill}
 alt="filigree"
 variants={fill}
 initial="initial"
 animate="animate"
 />
<motion.img
 className="fill1"
 src={Fill}
 alt="filigree"
 variants={fillFlip}
 initial="initial"
 animate="animate"
 />
<motion.img
 className="fill2"
 src={Fill}
 alt="filigree"
 variants={fill2}
 initial="initial"
 animate="animate"
 />
<motion.img
 className="fill3"
 src={Fill}
 alt="filigree"
 variants={fillFlip2}
 initial="initial"
 animate="animate"
/>
</motion.div>
)
};

export default FiligreeHero;