import clsx from "clsx"
import Link from "next/link"
import React from "react"

export interface ButtonProps {
  variant: "primary" | "secondary" | "default" | "destructive" | "ghost" | "link" | "outline"
  size: "small" | "medium" | "large" | "default" | "icon"
  className?: string
  href?: string
  children?: React.ReactNode
  target?: boolean
  asDiv?: boolean
  style?: React.CSSProperties
}

export const buttonVariants = ({ variant, size }: { variant: ButtonProps["variant"]; size: ButtonProps["size"] }) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    small: "h-9 rounded-md px-3 text-sm",
    medium: "text-base h-11 rounded-lg px-8",
    large: "text-lg rounded-lg px-20 h-10 ",
    icon: "h-10 w-10",
  }

  return clsx(variantClasses[variant], sizeClasses[size])
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  href,
  children,
  asDiv,
  style,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const combinedClasses = clsx(baseClasses, buttonVariants({ variant, size }), className)

  if (asDiv) {
    return (
      <div className={combinedClasses} style={style} {...rest}>
        {children}
      </div>
    )
  } else if (href) {
    return (
      <Link href={href} className={combinedClasses} {...rest} target="_blank">
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} style={style} {...rest}>
      {children}
    </button>
  )
}

export default Button
