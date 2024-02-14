// Accordion.tsx
"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

const HeaderMenu2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev)
  }

  ;<button className="rounded-md bg-[#FBFBFB] p-2 text-white" onClick={toggleAccordion}>
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}>
        {isOpen ? (
          <>
            <g fill="none" stroke="#121212" strokeLinecap="round" strokeWidth={1.5}>
              <path d="m5.51 7 13.1 10.264" />
              <path d="M12 12h0M5.51 17l12.916-9.86" data-name="Vector" />
            </g>
          </>
        ) : (
          <>
            <g fill="none" stroke="#121212" strokeLinecap="round" strokeWidth={1.5}>
              <path d="M3 7h18" />
              <path d="M3 12h18M3 17h18" data-name="Vector" />
            </g>
          </>
        )}
      </svg>
    </div>
  </button>
  return (
    <div className="relative">
      <button className="rounded-md bg-[#FBFBFB] p-2 text-white" onClick={toggleAccordion}>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}>
            {isOpen ? (
              <>
                <g fill="none" stroke="#121212" strokeLinecap="round" strokeWidth={1.5}>
                  <path d="m5.51 7 13.1 10.264" />
                  <path d="M12 12h0M5.51 17l12.916-9.86" data-name="Vector" />
                </g>
              </>
            ) : (
              <>
                <g fill="none" stroke="#121212" strokeLinecap="round" strokeWidth={1.5}>
                  <path d="M3 7h18" />
                  <path d="M3 12h18M3 17h18" data-name="Vector" />
                </g>
              </>
            )}
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Change y value to 20
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} // Change y value to 20
            transition={{ duration: 0.3 }}
            className="absolute -left-16 right-0 top-14 w-40 rounded-xl  bg-white p-4  drop-shadow-2xl"
          >
            {/* Accordion content */}
            <div className="flex flex-col gap-6 py-2">
              <Link href="/live-schedule">Live Schedule</Link>
              <Link href="/about">About</Link>
              <Link href="/login">Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeaderMenu2
