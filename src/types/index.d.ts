import { BADGE_CRITERIA } from "@/constants"

export interface NavigationHome {
  route: string
  label: string
  imgUrl?: string
}

export interface TrendingPrograms {
  name: string
  route: string
  color?: string
}

export interface HiringCompanies {
  src: Url
  alt: string
  title?: string
}
