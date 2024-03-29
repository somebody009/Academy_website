import * as React from "react";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
export const createCollapsibleScope: import("../../react-context").CreateScope;
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface CollapsibleProps extends PrimitiveDivProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}
export const Collapsible: React.ForwardRefExoticComponent<
  CollapsibleProps & React.RefAttributes<HTMLDivElement>
>;
type PrimitiveButtonProps = dss.ComponentPropsWithoutRef<
  typeof Primitive.button
>;
export interface CollapsibleTriggerProps extends PrimitiveButtonProps {}
export const CollapsibleTrigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>
>;
export interface CollapsibleContentProps
  extends Omit<CollapsibleContentImplProps, "present"> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const CollapsibleContent: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<HTMLDivElement>
>;
interface CollapsibleContentImplProps extends PrimitiveDivProps {
  present: boolean;
}
export const Root: React.ForwardRefExoticComponent<
  CollapsibleProps & React.RefAttributes<HTMLDivElement>
>;
export const Trigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>
>;
export const Content: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<HTMLDivElement>
>;

//# sourceMappingURL=index.d.ts.map
