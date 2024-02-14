import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = {
  term?: string
  className?: string
  children: ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export const Container: React.FC<Props> = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("mx-auto max-w-full ", className)}>
      <div className="mx-auto w-full max-w-2xl items-center justify-center lg:max-w-none">{children}</div>
    </Component>
  )
}
