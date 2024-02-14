import * as React from "react";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface AspectRatioProps extends PrimitiveDivProps {
  ratio?: number;
}
export const AspectRatio: React.ForwardRefExoticComponent<
  AspectRatioProps & React.RefAttributes<HTMLDivElement>
>;
export const Root: React.ForwardRefExoticComponent<
  AspectRatioProps & React.RefAttributes<HTMLDivElement>
>;

//# sourceMappingURL=index.d.ts.map
