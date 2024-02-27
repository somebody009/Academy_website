import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border border-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ChipwithLinkProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  icon?: React.ReactNode
  href: string // Make href mandatory
}

function ChipwithLink({ className, variant, icon, href, ...props }: ChipwithLinkProps) {
  return (
    <Link href={href} className=" z-50 cursor-pointer">
      <div className={cn(chipVariants({ variant }), className)} {...props}>
        <div className="group flex items-center gap-2  ">
          {props.children}
          {icon}
        </div>
      </div>
    </Link>
  )
}

export { ChipwithLink, chipVariants }
