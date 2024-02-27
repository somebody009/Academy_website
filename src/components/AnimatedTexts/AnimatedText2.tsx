"use client"
import { motion, Variants } from "framer-motion"
import React from "react"

interface AnimatedText2Props {
  text: string
  className?: string
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.2,
    },
  },
}

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 2,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
}

const AnimatedText2: React.FC<AnimatedText2Props> = ({ text, className = "" }) => {
  return (
    <div className=" items-center justify-center  overflow-hidden py-2 text-center sm:py-0">
      <div>
        <motion.div
          className={`text-dark dark:text-light h6 inline-block w-full font-normal ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inline-block !font-satoshi" variants={singleWord}>
            {text}&nbsp;
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedText2
