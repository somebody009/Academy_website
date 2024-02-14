import * as React from "react"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
type PrimitiveSpanProps = dss.ComponentPropsWithoutRef<typeof Primitive.span>
export interface VisuallyHiddenProps extends PrimitiveSpanProps {}
export const VisuallyHidden: React.ForwardRefExoticComponent<VisuallyHiddenProps & React.RefAttributes<HTMLSpanElement>>
export const Root: React.ForwardRefExoticComponent<VisuallyHiddenProps & React.RefAttributes<HTMLSpanElement>>

//# sourceMappingURL=index.d.ts.map
