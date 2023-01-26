import * as React from "react";
import "./filigree.css";
import { motion } from "framer-motion";
import Fill from "../../assets/images/fill1Color.png";
import Fill2 from "../../assets/images/fill2Color.png";
import Fill3 from "../../assets/images/fill3Color.png";
import Fill4 from "../../assets/images/fill5Color.png";
const content = (isFirstMount) => ({
    animate: {
        
        transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : 1.5 }, delay: 6
    },
});
const fill = {
    initial: {
        rotate: 180,
        originY: .8 ,
        originX: 2,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: -20,
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
        rotate: 20,
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
const fill4 = {
    initial: {
        rotate: -200,
        originY: 1,
        originX: 1.2,
        opacity: 0,
        scale: 0
    },
    animate: {
        rotate: -60,
        originX: .5,
        originY: .8,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 2.5,
            duration: 4,
            ease: "easeIn"
        }
    }
};
const fill5 = {
    initial: {
        rotate: 30,
        originY: 1,
        originX: 1,
        opacity: .8,
        scale: 0
    },
    animate: {
        rotate: -80,
        originX: .8,
        originY: 1,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 5.3,
            duration: 3.7,
            ease: "easeIn"
        }
    }
};
const fill6 = {
    initial: {
        rotate: -30,
        originY: -10,
        originX: 1,
        opacity: .8,
        scale: 0
    },
    animate: {
        rotate: -80,
        originX: .8,
        originY: 1.8,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 5.5,
            duration: 3.8,
            ease: "easeIn"
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
<motion.img 
    className="fill4"
    src={Fill2}
    alt="filigree"
    variants={fill4}
    initial="initial"
    animate="animate"
    />
<motion.img 
    className="fill5"
    src={Fill3}
    alt="filigree"
    variants={fill5}
    initial="initial"
    animate="animate"
    />
<motion.img 
    className="fill6"
    src={Fill4}
    alt="filigree"
    variants={fill6}
    initial="initial"
    animate="animate"
    />
</motion.div>
)
};

export default FiligreeHero;