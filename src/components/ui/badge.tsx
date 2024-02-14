import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
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

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  asLink?: boolean // New prop to indicate whether to render as a Link
  href?: string // New prop for link href
}

function Badge({ className, variant, icon, asLink, href, ...props }: BadgeProps) {
  const Component = asLink ? Link : "div"

  return (
    <Component
      href={asLink ? href : undefined} // Render href attribute only if it's a Link
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-center gap-2 px-2 py-0.5">
        {props.children}
        {icon}
      </div>
    </Component>
  )
}

export { Badge, badgeVariants }
