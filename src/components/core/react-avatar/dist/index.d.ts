import * as React from "react"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
export const createAvatarScope: import("../../react-context").CreateScope
type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error"
type PrimitiveSpanProps = dss.ComponentPropsWithoutRef<typeof Primitive.span>
export interface AvatarProps extends PrimitiveSpanProps {}
export const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>
type PrimitiveImageProps = dss.ComponentPropsWithoutRef<typeof Primitive.img>
export interface AvatarImageProps extends PrimitiveImageProps {
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
}
export const AvatarImage: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>
export interface AvatarFallbackProps extends PrimitiveSpanProps {
  delayMs?: number
}
export const AvatarFallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>>
export const Root: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>
export const Image: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>
export const Fallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>>

//# sourceMappingURL=index.d.ts.map
