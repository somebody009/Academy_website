"use client"
import { motion, MotionConfig, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

import { Footer } from "../shared/Footer/Footer"

function MainLayoutInner({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [expanded, setExpanded] = useState(false)

  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: any) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false)
      }
    }

    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* <header className="!bg-black ">
        <div className=" !fixed inset-x-0 top-0 !z-40 bg-[#000000]">
          <Header1 className="" />
        </div>
      </header> */}

      <motion.div layout className=" relative isolate flex w-full flex-col">
        {/* <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-[#705DED21] stroke-neutral-950/5"
            yOffset={-96}
            interactive
          /> */}
        <main className="w-full flex-auto">{children}</main>
        <Footer />
      </motion.div>

      {/* <motion.div
        layout
        style={{ borderTopLeftRadius: 80, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14 "
      >

      </motion.div> */}
    </MotionConfig>
  )
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()

  return <MainLayoutInner key={pathname}>{children}</MainLayoutInner>
}
