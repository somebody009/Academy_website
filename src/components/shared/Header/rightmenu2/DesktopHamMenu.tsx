import { motion, useCycle } from "framer-motion"
import * as React from "react"

import { DesktopHamMenuItem } from "./DesktopHamMenuItem"
import { MenuToggle } from "./MenuToggle"
import { useDimensions } from "./use-dimensions";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const DesktopHamMenu = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const dimensions = useDimensions(containerRef);
  const { height = 0 } = dimensions || {}; // Provide a default value for height


  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      custom={height}
      className="self-center align-middle"
    >
      <motion.div className="background" />
      <motion.ul
        variants={variants}
             >
        <DesktopHamMenuItem />
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
