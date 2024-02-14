import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationDesktopHamburger } from "@/constants"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const DesktopNavigationHamburgerMenu = () => {
  const pathname = usePathname()

  return (
    <>
      {navigationDesktopHamburger.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

        return (
          <Link
            href={item.route}
            key={item.route}
            className={`${
              isActive ? "text-link self-center align-middle font-bold" : "text-black"
            } relative block w-fit self-center align-middle text-black after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:rounded-md	after:bg-[#006CE8] after:transition after:duration-300 after:content-[''] hover:text-[] after:hover:scale-x-100`}
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )
}

export const DesktopHamMenuItem = () => {
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className={`absolute right-6 top-24 w-40 rounded-xl bg-white p-4 drop-shadow-2xl `}    >
    
      {/* Accordion content */}
      <div className="flex flex-col gap-4 py-2">
        <DesktopNavigationHamburgerMenu />
      </div>
      {/* </motion.div> */}
    </motion.li>
  )
}
