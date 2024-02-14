import { HiringCompanies, NavigationHome, TrendingPrograms } from "@/types"

export const navigationHomeDesktop: NavigationHome[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about-us",
    label: "About Us",
  },
  {
    route: "/events",
    label: "Events",
  },
  {
    route: "/jobs",
    label: "Jobs",
  },
]
export const navigationDesktopHamburger: NavigationHome[] = [
  {
    route: "live-schedule",
    label: "Live Schedule",
  },
  {
    route: "/login",
    label: "Login",
  },
  {
    route: "/events",
    label: "Events",
  },
  {
    route: "/jobs",
    label: "Jobs",
  },
]
export const trendingPrograms: TrendingPrograms[] = [
  {
    name: "Data Analytics",
    route: "/Data Analytics",

    color: "#41BF0B",
  },
  {
    name: "Ethical Hacking",
    route: "/ethical-hacking",
    color: "#41BF0B",
  },
  {
    name: "Data Science",
    route: "/data-science",
    color: "#41BF0B",
  },
  {
    name: "Business Analytics",
    route: "/data-analytics",
    color: "#FFB701",
  },
  {
    name: "Machine Learning",
    route: "/machine-learning",
    color: "#FFB701",
  },
  {
    name: "AWS",
    route: "/aws",
    color: "#FFB701",
  },
]
export const hiringCompanies: HiringCompanies[] = [
  {
    src: "/HiringPartners/deloitte.png",
    alt: "Top Hiring Companies - Deloitte ",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/EY.png",
    alt: "/ethical-hacking",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/jacob.png",
    alt: "/data-science",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/kpmg.png",
    alt: "/data-analytics",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/meta.png",
    alt: "/machine-learning",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/microsoft.png",
    alt: "/aws",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/northrop-gurmman.png",
    alt: "/aws",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/symantec.png",
    alt: "/aws",
    title: "#Data Analytics",
  },
  {
    src: "/HiringPartners/vmware.png",
    alt: "/aws",
    title: "#Data Analytics",
  },
]
