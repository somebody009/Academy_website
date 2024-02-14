import * as React from "react";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
export const createProgressScope: import("../../react-context").CreateScope;
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface ProgressProps extends PrimitiveDivProps {
  value?: number | null | undefined;
  max?: number;
  getValueLabel?(value: number, max: number): string;
}
export const Progress: React.ForwardRefExoticComponent<
  ProgressProps & React.RefAttributes<HTMLDivElement>
>;
export interface ProgressIndicatorProps extends PrimitiveDivProps {}
export const ProgressIndicator: React.ForwardRefExoticComponent<
  ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>
>;
export const Root: React.ForwardRefExoticComponent<
  ProgressProps & React.RefAttributes<HTMLDivElement>
>;
export const Indicator: React.ForwardRefExoticComponent<
  ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>
>;

//# sourceMappingURL=index.d.ts.map
