import * as React from "react"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>
export interface PortalProps extends PrimitiveDivProps {
  container?: HTMLElement | null
}
export const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>
export const Root: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>

//# sourceMappingURL=index.d.ts.map
