import * as React from "react"
import { DismissableLayer } from "../../react-dismissable-layer"
import { FocusScope } from "../../react-focus-scope"
import { Portal as _Portal1 } from "../../react-portal"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
export const createDialogScope: import("../../react-context").CreateScope
export interface DialogProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  modal?: boolean
}
export const Dialog: React.FC<DialogProps>
type PrimitiveButtonProps = dss.ComponentPropsWithoutRef<typeof Primitive.button>
export interface DialogTriggerProps extends PrimitiveButtonProps {}
export const DialogTrigger: React.ForwardRefExoticComponent<DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
type PortalProps = React.ComponentPropsWithoutRef<typeof _Portal1>
export interface DialogPortalProps extends Omit<PortalProps, "asChild"> {
  children?: React.ReactNode
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}
export const DialogPortal: React.FC<DialogPortalProps>
export interface DialogOverlayProps extends DialogOverlayImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}
export const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>
type PrimitiveDivProps = dss.ComponentPropsWithoutRef<typeof Primitive.div>
interface DialogOverlayImplProps extends PrimitiveDivProps {}
export interface DialogContentProps extends DialogContentTypeProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}
export const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>
interface DialogContentTypeProps extends Omit<DialogContentImplProps, "trapFocus" | "disableOutsidePointerEvents"> {}
type DismissableLayerProps = dss.ComponentPropsWithoutRef<typeof DismissableLayer>
type FocusScopeProps = dss.ComponentPropsWithoutRef<typeof FocusScope>
interface DialogContentImplProps extends Omit<DismissableLayerProps, "onDismiss"> {
  /**
   * When `true`, focus cannot escape the `Content` via keyboard,
   * pointer, or a programmatic focus.
   * @defaultValue false
   */
  trapFocus?: FocusScopeProps["trapped"]
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"]
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"]
}
type PrimitiveHeading2Props = dss.ComponentPropsWithoutRef<typeof Primitive.h2>
export interface DialogTitleProps extends PrimitiveHeading2Props {}
export const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>
type PrimitiveParagraphProps = dss.ComponentPropsWithoutRef<typeof Primitive.p>
export interface DialogDescriptionProps extends PrimitiveParagraphProps {}
export const DialogDescription: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>
export interface DialogCloseProps extends PrimitiveButtonProps {}
export const DialogClose: React.ForwardRefExoticComponent<DialogCloseProps & React.RefAttributes<HTMLButtonElement>>
export const WarningProvider: {
  (
    props: {
      contentName: string
      titleName: string
      docsSlug: string
    } & {
      children: React.ReactNode
    }
  ): JSX.Element
  displayName: string
}
export const Root: React.FC<DialogProps>
export const Trigger: React.ForwardRefExoticComponent<DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
export const Portal: React.FC<DialogPortalProps>
export const Overlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>
export const Content: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>
export const Title: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>
export const Description: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>
export const Close: React.ForwardRefExoticComponent<DialogCloseProps & React.RefAttributes<HTMLButtonElement>>

//# sourceMappingURL=index.d.ts.map
