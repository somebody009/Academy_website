import * as React from "react";
import * as PopperPrimitive from "../../react-popper";
import { Portal as _Portal1 } from "../../react-portal";
import * as dss from "../../react-primitive";
import { Primitive } from "../../react-primitive";
import { DismissableLayer } from "../../react-dismissable-layer";
export const createHoverCardScope: import("../../react-context").CreateScope;
export interface HoverCardProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
}
export const HoverCard: React.FC<HoverCardProps>;
type PrimitiveLinkProps = dss.ComponentPropsWithoutRef<typeof Primitive.a>;
export interface HoverCardTriggerProps extends PrimitiveLinkProps {}
export const HoverCardTrigger: React.ForwardRefExoticComponent<
  HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>
>;
type PortalProps = React.ComponentPropsWithoutRef<typeof _Portal1>;
export interface HoverCardPortalProps extends Omit<PortalProps, "asChild"> {
  children?: React.ReactNode;
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const HoverCardPortal: React.FC<HoverCardPortalProps>;
export interface HoverCardContentProps extends HoverCardContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const HoverCardContent: React.ForwardRefExoticComponent<
  HoverCardContentProps & React.RefAttributes<HTMLDivElement>
>;
type DismissableLayerProps = dss.ComponentPropsWithoutRef<
  typeof DismissableLayer
>;
type PopperContentProps = dss.ComponentPropsWithoutRef<
  typeof PopperPrimitive.Content
>;
interface HoverCardContentImplProps
  extends Omit<PopperContentProps, "onPlaced"> {
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: DismissableLayerProps["onEscapeKeyDown"];
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `HoverCard`.
   * Can be prevented.
   */
  onPointerDownOutside?: DismissableLayerProps["onPointerDownOutside"];
  /**
   * Event handler called when the focus moves outside of the `HoverCard`.
   * Can be prevented.
   */
  onFocusOutside?: DismissableLayerProps["onFocusOutside"];
  /**
   * Event handler called when an interaction happens outside the `HoverCard`.
   * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
   * Can be prevented.
   */
  onInteractOutside?: DismissableLayerProps["onInteractOutside"];
}
type PopperArrowProps = dss.ComponentPropsWithoutRef<
  typeof PopperPrimitive.Arrow
>;
export interface HoverCardArrowProps extends PopperArrowProps {}
export const HoverCardArrow: React.ForwardRefExoticComponent<
  HoverCardArrowProps & React.RefAttributes<SVGSVGElement>
>;
export const Root: React.FC<HoverCardProps>;
export const Trigger: React.ForwardRefExoticComponent<
  HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>
>;
export const Portal: React.FC<HoverCardPortalProps>;
export const Content: React.ForwardRefExoticComponent<
  HoverCardContentProps & React.RefAttributes<HTMLDivElement>
>;
export const Arrow: React.ForwardRefExoticComponent<
  HoverCardArrowProps & React.RefAttributes<SVGSVGElement>
>;

//# sourceMappingURL=index.d.ts.map
