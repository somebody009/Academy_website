import { SVGProps } from "react"
export interface TrendingIconProps extends SVGProps<SVGSVGElement> {
  color?: string
  width: number
  height: number
  title: string
  altText: string
}
