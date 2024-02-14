import * as React from "react"
import * as dss from "../../react-primitive"
import { Primitive } from "../../react-primitive"
export const createSwitchScope: import("../../react-context").CreateScope
type PrimitiveButtonProps = dss.ComponentPropsWithoutRef<typeof Primitive.button>
export interface SwitchProps extends PrimitiveButtonProps {
  checked?: boolean
  defaultChecked?: boolean
  required?: boolean
  onCheckedChange?(checked: boolean): void
}
export const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>
type PrimitiveSpanProps = dss.ComponentPropsWithoutRef<typeof Primitive.span>
export interface SwitchThumbProps extends PrimitiveSpanProps {}
export const SwitchThumb: React.ForwardRefExoticComponent<SwitchThumbProps & React.RefAttributes<HTMLSpanElement>>
export const Root: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>
export const Thumb: React.ForwardRefExoticComponent<SwitchThumbProps & React.RefAttributes<HTMLSpanElement>>

//# sourceMappingURL=index.d.ts.map
