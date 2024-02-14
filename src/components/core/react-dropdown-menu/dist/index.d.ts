import * as React from "react"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
import * as MenuPrimitive from "../../react-menu"
type Direction = "ltr" | "rtl"
export const createDropdownMenuScope: import("../../react-context").CreateScope
export interface DropdownMenuProps {
  children?: React.ReactNode
  dir?: Direction
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  modal?: boolean
}
export const DropdownMenu: React.FC<DropdownMenuProps>
type PrimitiveButtonProps = dss.ComponentPropsWithoutRef<typeof Primitive.button>
export interface DropdownMenuTriggerProps extends PrimitiveButtonProps {}
export const DropdownMenuTrigger: React.ForwardRefExoticComponent<
  DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>
>
type MenuPortalProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Portal>
export interface DropdownMenuPortalProps extends MenuPortalProps {}
export const DropdownMenuPortal: React.FC<DropdownMenuPortalProps>
type MenuContentProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
export interface DropdownMenuContentProps extends Omit<MenuContentProps, "onEntryFocus"> {}
export const DropdownMenuContent: React.ForwardRefExoticComponent<
  DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>
>
type MenuGroupProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Group>
export interface DropdownMenuGroupProps extends MenuGroupProps {}
export const DropdownMenuGroup: React.ForwardRefExoticComponent<
  DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>
>
type MenuLabelProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Label>
export interface DropdownMenuLabelProps extends MenuLabelProps {}
export const DropdownMenuLabel: React.ForwardRefExoticComponent<
  DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>
>
type MenuItemProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>
export interface DropdownMenuItemProps extends MenuItemProps {}
export const DropdownMenuItem: React.ForwardRefExoticComponent<
  DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>
>
type MenuCheckboxItemProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {}
export const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<
  DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>
type MenuRadioGroupProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioGroup>
export interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {}
export const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<
  DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>
>
type MenuRadioItemProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}
export const DropdownMenuRadioItem: React.ForwardRefExoticComponent<
  DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>
type MenuItemIndicatorProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.ItemIndicator>
export interface DropdownMenuItemIndicatorProps extends MenuItemIndicatorProps {}
export const DropdownMenuItemIndicator: React.ForwardRefExoticComponent<
  DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>
>
type MenuSeparatorProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
export interface DropdownMenuSeparatorProps extends MenuSeparatorProps {}
export const DropdownMenuSeparator: React.ForwardRefExoticComponent<
  DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>
type MenuArrowProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.Arrow>
export interface DropdownMenuArrowProps extends MenuArrowProps {}
export const DropdownMenuArrow: React.ForwardRefExoticComponent<
  DropdownMenuArrowProps & React.RefAttributes<SVGSVGElement>
>
export interface DropdownMenuSubProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
}
export const DropdownMenuSub: React.FC<DropdownMenuSubProps>
type MenuSubTriggerProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger>
export interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {}
export const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<
  DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>
type MenuSubContentProps = dss.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent>
export interface DropdownMenuSubContentProps extends MenuSubContentProps {}
export const DropdownMenuSubContent: React.ForwardRefExoticComponent<
  DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>
>
export const Root: React.FC<DropdownMenuProps>
export const Trigger: React.ForwardRefExoticComponent<DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>
export const Portal: React.FC<DropdownMenuPortalProps>
export const Content: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>
export const Group: React.ForwardRefExoticComponent<DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>
export const Label: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>
export const Item: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>
export const CheckboxItem: React.ForwardRefExoticComponent<
  DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>
export const RadioGroup: React.ForwardRefExoticComponent<
  DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>
>
export const RadioItem: React.ForwardRefExoticComponent<
  DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>
export const ItemIndicator: React.ForwardRefExoticComponent<
  DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>
>
export const Separator: React.ForwardRefExoticComponent<
  DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>
export const Arrow: React.ForwardRefExoticComponent<DropdownMenuArrowProps & React.RefAttributes<SVGSVGElement>>
export const Sub: React.FC<DropdownMenuSubProps>
export const SubTrigger: React.ForwardRefExoticComponent<
  DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>
export const SubContent: React.ForwardRefExoticComponent<
  DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>
>

//# sourceMappingURL=index.d.ts.map
