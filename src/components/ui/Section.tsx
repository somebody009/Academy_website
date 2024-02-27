import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = {
  term?: string
  className?: string
  children: ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export const Section: React.FC<Props> = ({ as: Component = "section", className, children }) => {
  return (
    <Component className={clsx("mx-auto max-w-full  md:px-0 lg:py-14", className)}>
      <div className="mx-auto lg:max-w-none">{children}</div>
    </Component>
  )
}
