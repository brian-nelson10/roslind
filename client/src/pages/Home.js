import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import HomeNav from "../components/Nav/homeNav";

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

export default function Landing({isFirstMount}) {
    return (
        <>
        
        <Layout>
            <motion.section exit={{ opacity: 0 }}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={content(isFirstMount)}
                    className="space-y-12">
                    <motion.div className="text-6xl font-black text-center"
                        variants={title}>
                        <HomeNav />
                    </motion.div>
                </motion.div>
            </motion.section>
        </Layout>
        </>
    );
};
