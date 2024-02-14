import * as React from "react";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
declare const ORIENTATIONS: readonly ["horizontal", "vertical"];
type Orientation = (typeof ORIENTATIONS)[number];
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface SeparatorProps extends PrimitiveDivProps {
  /**
   * Either `vertical` or `horizontal`. Defaults to `horizontal`.
   */
  orientation?: Orientation;
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean;
}
export const Separator: React.ForwardRefExoticComponent<
  SeparatorProps & React.RefAttributes<HTMLDivElement>
>;
export const Root: React.ForwardRefExoticComponent<
  SeparatorProps & React.RefAttributes<HTMLDivElement>
>;

//# sourceMappingURL=index.d.ts.map
