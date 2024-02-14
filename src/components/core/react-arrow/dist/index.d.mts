import * as React from "react";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
type PrimitiveSvgProps = dss.ComponentPropsWithoutRef<typeof Primitive.svg>;
export interface ArrowProps extends PrimitiveSvgProps {}
export const Arrow: React.ForwardRefExoticComponent<
  ArrowProps & React.RefAttributes<SVGSVGElement>
>;
export const Root: React.ForwardRefExoticComponent<
  ArrowProps & React.RefAttributes<SVGSVGElement>
>;

//# sourceMappingURL=index.d.ts.map
