import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = {
  term?: string
  className?: string
  children: ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export const Section: React.FC<Props> = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("mx-auto max-w-full px-4 lg:py-14", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}
