var $l8XVT$babelruntimehelpersextends = require("@babel/runtime/helpers/extends")
var $l8XVT$react = require("react")
var $l8XVT$dssuiprimitive = require("../../primitive")
var $l8XVT$dssuireactcontext = require("../../react-context")
var $l8XVT$dssuireactprimitive = require("../../react-primitive")
var $l8XVT$dssuireactmenu = require("../../react-menu")
var $l8XVT$dssuireactusecallbackref = require("../../react-use-callback-ref")
var $l8XVT$dssuireactusecontrollablestate = require("../../react-use-controllable-state")

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  })
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a
}

$parcel$export(module.exports, "createContextMenuScope", () => $5de197f6cd80e8e9$export$1059331f43ddcc82)
$parcel$export(module.exports, "ContextMenu", () => $5de197f6cd80e8e9$export$8dc6765e8be191c7)
$parcel$export(module.exports, "ContextMenuTrigger", () => $5de197f6cd80e8e9$export$be6fc7b1d5b0beb9)
$parcel$export(module.exports, "ContextMenuPortal", () => $5de197f6cd80e8e9$export$14afd0be83e45060)
$parcel$export(module.exports, "ContextMenuContent", () => $5de197f6cd80e8e9$export$572205900c9369e)
$parcel$export(module.exports, "ContextMenuGroup", () => $5de197f6cd80e8e9$export$9860523b0fcdd664)
$parcel$export(module.exports, "ContextMenuLabel", () => $5de197f6cd80e8e9$export$d4b9d3b609a10742)
$parcel$export(module.exports, "ContextMenuItem", () => $5de197f6cd80e8e9$export$16a26dc176a49100)
$parcel$export(module.exports, "ContextMenuCheckboxItem", () => $5de197f6cd80e8e9$export$b6adbe51d5d8b7ec)
$parcel$export(module.exports, "ContextMenuRadioGroup", () => $5de197f6cd80e8e9$export$db5c89af5ed9aa07)
$parcel$export(module.exports, "ContextMenuRadioItem", () => $5de197f6cd80e8e9$export$8a727d09a7d9bfc2)
$parcel$export(module.exports, "ContextMenuItemIndicator", () => $5de197f6cd80e8e9$export$9ed8194dee42d94b)
$parcel$export(module.exports, "ContextMenuSeparator", () => $5de197f6cd80e8e9$export$8d6b009fadfe1207)
$parcel$export(module.exports, "ContextMenuArrow", () => $5de197f6cd80e8e9$export$f47d0a58228a61e2)
$parcel$export(module.exports, "ContextMenuSub", () => $5de197f6cd80e8e9$export$5bc21d1c00c4b201)
$parcel$export(module.exports, "ContextMenuSubTrigger", () => $5de197f6cd80e8e9$export$30b2b5c64556d316)
$parcel$export(module.exports, "ContextMenuSubContent", () => $5de197f6cd80e8e9$export$2c967063bd2dc512)
$parcel$export(module.exports, "Root", () => $5de197f6cd80e8e9$export$be92b6f5f03c0fe9)
$parcel$export(module.exports, "Trigger", () => $5de197f6cd80e8e9$export$41fb9f06171c75f4)
$parcel$export(module.exports, "Portal", () => $5de197f6cd80e8e9$export$602eac185826482c)
$parcel$export(module.exports, "Content", () => $5de197f6cd80e8e9$export$7c6e2c02157bb7d2)
$parcel$export(module.exports, "Group", () => $5de197f6cd80e8e9$export$eb2fcfdbd7ba97d4)
$parcel$export(module.exports, "Label", () => $5de197f6cd80e8e9$export$b04be29aa201d4f5)
$parcel$export(module.exports, "Item", () => $5de197f6cd80e8e9$export$6d08773d2e66f8f2)
$parcel$export(module.exports, "CheckboxItem", () => $5de197f6cd80e8e9$export$16ce288f89fa631c)
$parcel$export(module.exports, "RadioGroup", () => $5de197f6cd80e8e9$export$a98f0dcb43a68a25)
$parcel$export(module.exports, "RadioItem", () => $5de197f6cd80e8e9$export$371ab307eab489c0)
$parcel$export(module.exports, "ItemIndicator", () => $5de197f6cd80e8e9$export$c3468e2714d175fa)
$parcel$export(module.exports, "Separator", () => $5de197f6cd80e8e9$export$1ff3c3f08ae963c0)
$parcel$export(module.exports, "Arrow", () => $5de197f6cd80e8e9$export$21b07c8f274aebd5)
$parcel$export(module.exports, "Sub", () => $5de197f6cd80e8e9$export$d7a01e11500dfb6f)
$parcel$export(module.exports, "SubTrigger", () => $5de197f6cd80e8e9$export$2ea8a7a591ac5eac)
$parcel$export(module.exports, "SubContent", () => $5de197f6cd80e8e9$export$6d4de93b380beddf)

/* -------------------------------------------------------------------------------------------------
 * ContextMenu
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$CONTEXT_MENU_NAME =
  "ContextMenu"
const [$5de197f6cd80e8e9$var$createContextMenuContext, $5de197f6cd80e8e9$export$1059331f43ddcc82] =
  $l8XVT$dssuireactcontext.createContextScope($5de197f6cd80e8e9$var$CONTEXT_MENU_NAME, [
    $l8XVT$dssuireactmenu.createMenuScope,
  ])
const $5de197f6cd80e8e9$var$useMenuScope = $l8XVT$dssuireactmenu.createMenuScope()
const [$5de197f6cd80e8e9$var$ContextMenuProvider, $5de197f6cd80e8e9$var$useContextMenuContext] =
  $5de197f6cd80e8e9$var$createContextMenuContext($5de197f6cd80e8e9$var$CONTEXT_MENU_NAME)
const $5de197f6cd80e8e9$export$8dc6765e8be191c7 = (props) => {
  const {
    __scopeContextMenu: __scopeContextMenu,
    children: children,
    onOpenChange: onOpenChange,
    dir: dir,
    modal: modal = true,
  } = props
  const [open1, setOpen] = $l8XVT$react.useState(false)
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  const handleOpenChangeProp = $l8XVT$dssuireactusecallbackref.useCallbackRef(onOpenChange)
  const handleOpenChange = $l8XVT$react.useCallback(
    (open) => {
      setOpen(open)
      handleOpenChangeProp(open)
    },
    [handleOpenChangeProp]
  )
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $5de197f6cd80e8e9$var$ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open: open1,
      onOpenChange: handleOpenChange,
      modal: modal,
    },
    /*#__PURE__*/ $l8XVT$react.createElement(
      $l8XVT$dssuireactmenu.Root,
      $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, {
        dir: dir,
        open: open1,
        onOpenChange: handleOpenChange,
        modal: modal,
      }),
      children
    )
  )
}
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$8dc6765e8be191c7, {
  displayName: $5de197f6cd80e8e9$var$CONTEXT_MENU_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$TRIGGER_NAME =
  "ContextMenuTrigger"
const $5de197f6cd80e8e9$export$be6fc7b1d5b0beb9 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, disabled: disabled = false, ...triggerProps } = props
  const context = $5de197f6cd80e8e9$var$useContextMenuContext($5de197f6cd80e8e9$var$TRIGGER_NAME, __scopeContextMenu)
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  const pointRef = $l8XVT$react.useRef({
    x: 0,
    y: 0,
  })
  const virtualRef = $l8XVT$react.useRef({
    getBoundingClientRect: () =>
      DOMRect.fromRect({
        width: 0,
        height: 0,
        ...pointRef.current,
      }),
  })
  const longPressTimerRef = $l8XVT$react.useRef(0)
  const clearLongPress = $l8XVT$react.useCallback(() => window.clearTimeout(longPressTimerRef.current), [])
  const handleOpen = (event) => {
    pointRef.current = {
      x: event.clientX,
      y: event.clientY,
    }
    context.onOpenChange(true)
  }
  $l8XVT$react.useEffect(() => clearLongPress, [clearLongPress])
  $l8XVT$react.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress])
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$react.Fragment,
    null,
    /*#__PURE__*/ $l8XVT$react.createElement(
      $l8XVT$dssuireactmenu.Anchor,
      $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, {
        virtualRef: virtualRef,
      })
    ),
    /*#__PURE__*/ $l8XVT$react.createElement(
      $l8XVT$dssuireactprimitive.Primitive.span,
      $parcel$interopDefault($l8XVT$babelruntimehelpersextends)(
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : undefined,
        },
        triggerProps,
        {
          ref: forwardedRef, // prevent iOS context menu from appearing
          style: {
            WebkitTouchCallout: "none",
            ...props.style,
          }, // if trigger is disabled, enable the native Context Menu
          onContextMenu: disabled
            ? props.onContextMenu
            : $l8XVT$dssuiprimitive.composeEventHandlers(props.onContextMenu, (event) => {
                // clearing the long press here because some platforms already support
                // long press to trigger a `contextmenu` event
                clearLongPress()
                handleOpen(event)
                event.preventDefault()
              }),
          onPointerDown: disabled
            ? props.onPointerDown
            : $l8XVT$dssuiprimitive.composeEventHandlers(
                props.onPointerDown,
                $5de197f6cd80e8e9$var$whenTouchOrPen((event) => {
                  // clear the long press here in case there's multiple touch points
                  clearLongPress()
                  longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700)
                })
              ),
          onPointerMove: disabled
            ? props.onPointerMove
            : $l8XVT$dssuiprimitive.composeEventHandlers(
                props.onPointerMove,
                $5de197f6cd80e8e9$var$whenTouchOrPen(clearLongPress)
              ),
          onPointerCancel: disabled
            ? props.onPointerCancel
            : $l8XVT$dssuiprimitive.composeEventHandlers(
                props.onPointerCancel,
                $5de197f6cd80e8e9$var$whenTouchOrPen(clearLongPress)
              ),
          onPointerUp: disabled
            ? props.onPointerUp
            : $l8XVT$dssuiprimitive.composeEventHandlers(
                props.onPointerUp,
                $5de197f6cd80e8e9$var$whenTouchOrPen(clearLongPress)
              ),
        }
      )
    )
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$be6fc7b1d5b0beb9, {
  displayName: $5de197f6cd80e8e9$var$TRIGGER_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$PORTAL_NAME =
  "ContextMenuPortal"
const $5de197f6cd80e8e9$export$14afd0be83e45060 = (props) => {
  const { __scopeContextMenu: __scopeContextMenu, ...portalProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Portal,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, portalProps)
  )
}
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$14afd0be83e45060, {
  displayName: $5de197f6cd80e8e9$var$PORTAL_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$CONTENT_NAME =
  "ContextMenuContent"
const $5de197f6cd80e8e9$export$572205900c9369e = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...contentProps } = props
  const context = $5de197f6cd80e8e9$var$useContextMenuContext($5de197f6cd80e8e9$var$CONTENT_NAME, __scopeContextMenu)
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  const hasInteractedOutsideRef = $l8XVT$react.useRef(false)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Content,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, contentProps, {
      ref: forwardedRef,
      side: "right",
      sideOffset: 2,
      align: "start",
      onCloseAutoFocus: (event) => {
        var _props$onCloseAutoFoc
        ;(_props$onCloseAutoFoc = props.onCloseAutoFocus) === null ||
          _props$onCloseAutoFoc === void 0 ||
          _props$onCloseAutoFoc.call(props, event)
        if (!event.defaultPrevented && hasInteractedOutsideRef.current) event.preventDefault()
        hasInteractedOutsideRef.current = false
      },
      onInteractOutside: (event) => {
        var _props$onInteractOuts
        ;(_props$onInteractOuts = props.onInteractOutside) === null ||
          _props$onInteractOuts === void 0 ||
          _props$onInteractOuts.call(props, event)
        if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true
      },
      style: {
        ...props.style,
        "--dss-context-menu-content-transform-origin": "var(--dss-popper-transform-origin)",
        "--dss-context-menu-content-available-width": "var(--dss-popper-available-width)",
        "--dss-context-menu-content-available-height": "var(--dss-popper-available-height)",
        "--dss-context-menu-trigger-width": "var(--dss-popper-anchor-width)",
        "--dss-context-menu-trigger-height": "var(--dss-popper-anchor-height)",
      },
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$572205900c9369e, {
  displayName: $5de197f6cd80e8e9$var$CONTENT_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$GROUP_NAME =
  "ContextMenuGroup"
const $5de197f6cd80e8e9$export$9860523b0fcdd664 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...groupProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Group,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, groupProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$9860523b0fcdd664, {
  displayName: $5de197f6cd80e8e9$var$GROUP_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$LABEL_NAME =
  "ContextMenuLabel"
const $5de197f6cd80e8e9$export$d4b9d3b609a10742 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...labelProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Label,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, labelProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$d4b9d3b609a10742, {
  displayName: $5de197f6cd80e8e9$var$LABEL_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$ITEM_NAME =
  "ContextMenuItem"
const $5de197f6cd80e8e9$export$16a26dc176a49100 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...itemProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Item,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, itemProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$16a26dc176a49100, {
  displayName: $5de197f6cd80e8e9$var$ITEM_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$CHECKBOX_ITEM_NAME =
  "ContextMenuCheckboxItem"
const $5de197f6cd80e8e9$export$b6adbe51d5d8b7ec = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...checkboxItemProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.CheckboxItem,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, checkboxItemProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$b6adbe51d5d8b7ec, {
  displayName: $5de197f6cd80e8e9$var$CHECKBOX_ITEM_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$RADIO_GROUP_NAME =
  "ContextMenuRadioGroup"
const $5de197f6cd80e8e9$export$db5c89af5ed9aa07 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...radioGroupProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.RadioGroup,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, radioGroupProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$db5c89af5ed9aa07, {
  displayName: $5de197f6cd80e8e9$var$RADIO_GROUP_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$RADIO_ITEM_NAME =
  "ContextMenuRadioItem"
const $5de197f6cd80e8e9$export$8a727d09a7d9bfc2 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...radioItemProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.RadioItem,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, radioItemProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$8a727d09a7d9bfc2, {
  displayName: $5de197f6cd80e8e9$var$RADIO_ITEM_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$INDICATOR_NAME =
  "ContextMenuItemIndicator"
const $5de197f6cd80e8e9$export$9ed8194dee42d94b = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...itemIndicatorProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.ItemIndicator,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, itemIndicatorProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$9ed8194dee42d94b, {
  displayName: $5de197f6cd80e8e9$var$INDICATOR_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$SEPARATOR_NAME =
  "ContextMenuSeparator"
const $5de197f6cd80e8e9$export$8d6b009fadfe1207 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...separatorProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Separator,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, separatorProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$8d6b009fadfe1207, {
  displayName: $5de197f6cd80e8e9$var$SEPARATOR_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$ARROW_NAME =
  "ContextMenuArrow"
const $5de197f6cd80e8e9$export$f47d0a58228a61e2 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...arrowProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Arrow,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, arrowProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$f47d0a58228a61e2, {
  displayName: $5de197f6cd80e8e9$var$ARROW_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$SUB_NAME =
  "ContextMenuSub"
const $5de197f6cd80e8e9$export$5bc21d1c00c4b201 = (props) => {
  const {
    __scopeContextMenu: __scopeContextMenu,
    children: children,
    onOpenChange: onOpenChange,
    open: openProp,
    defaultOpen: defaultOpen,
  } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  const [open, setOpen] = $l8XVT$dssuireactusecontrollablestate.useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  })
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.Sub,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, {
      open: open,
      onOpenChange: setOpen,
    }),
    children
  )
}
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$5bc21d1c00c4b201, {
  displayName: $5de197f6cd80e8e9$var$SUB_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$SUB_TRIGGER_NAME =
  "ContextMenuSubTrigger"
const $5de197f6cd80e8e9$export$30b2b5c64556d316 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...triggerItemProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.SubTrigger,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, triggerItemProps, {
      ref: forwardedRef,
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$30b2b5c64556d316, {
  displayName: $5de197f6cd80e8e9$var$SUB_TRIGGER_NAME,
})
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $5de197f6cd80e8e9$var$SUB_CONTENT_NAME =
  "ContextMenuSubContent"
const $5de197f6cd80e8e9$export$2c967063bd2dc512 = /*#__PURE__*/ $l8XVT$react.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu: __scopeContextMenu, ...subContentProps } = props
  const menuScope = $5de197f6cd80e8e9$var$useMenuScope(__scopeContextMenu)
  return /*#__PURE__*/ $l8XVT$react.createElement(
    $l8XVT$dssuireactmenu.SubContent,
    $parcel$interopDefault($l8XVT$babelruntimehelpersextends)({}, menuScope, subContentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        "--dss-context-menu-content-transform-origin": "var(--dss-popper-transform-origin)",
        "--dss-context-menu-content-available-width": "var(--dss-popper-available-width)",
        "--dss-context-menu-content-available-height": "var(--dss-popper-available-height)",
        "--dss-context-menu-trigger-width": "var(--dss-popper-anchor-width)",
        "--dss-context-menu-trigger-height": "var(--dss-popper-anchor-height)",
      },
    })
  )
})
/*#__PURE__*/ Object.assign($5de197f6cd80e8e9$export$2c967063bd2dc512, {
  displayName: $5de197f6cd80e8e9$var$SUB_CONTENT_NAME,
})
/* -----------------------------------------------------------------------------------------------*/ function $5de197f6cd80e8e9$var$whenTouchOrPen(
  handler
) {
  return (event) => (event.pointerType !== "mouse" ? handler(event) : undefined)
}
const $5de197f6cd80e8e9$export$be92b6f5f03c0fe9 = $5de197f6cd80e8e9$export$8dc6765e8be191c7
const $5de197f6cd80e8e9$export$41fb9f06171c75f4 = $5de197f6cd80e8e9$export$be6fc7b1d5b0beb9
const $5de197f6cd80e8e9$export$602eac185826482c = $5de197f6cd80e8e9$export$14afd0be83e45060
const $5de197f6cd80e8e9$export$7c6e2c02157bb7d2 = $5de197f6cd80e8e9$export$572205900c9369e
const $5de197f6cd80e8e9$export$eb2fcfdbd7ba97d4 = $5de197f6cd80e8e9$export$9860523b0fcdd664
const $5de197f6cd80e8e9$export$b04be29aa201d4f5 = $5de197f6cd80e8e9$export$d4b9d3b609a10742
const $5de197f6cd80e8e9$export$6d08773d2e66f8f2 = $5de197f6cd80e8e9$export$16a26dc176a49100
const $5de197f6cd80e8e9$export$16ce288f89fa631c = $5de197f6cd80e8e9$export$b6adbe51d5d8b7ec
const $5de197f6cd80e8e9$export$a98f0dcb43a68a25 = $5de197f6cd80e8e9$export$db5c89af5ed9aa07
const $5de197f6cd80e8e9$export$371ab307eab489c0 = $5de197f6cd80e8e9$export$8a727d09a7d9bfc2
const $5de197f6cd80e8e9$export$c3468e2714d175fa = $5de197f6cd80e8e9$export$9ed8194dee42d94b
const $5de197f6cd80e8e9$export$1ff3c3f08ae963c0 = $5de197f6cd80e8e9$export$8d6b009fadfe1207
const $5de197f6cd80e8e9$export$21b07c8f274aebd5 = $5de197f6cd80e8e9$export$f47d0a58228a61e2
const $5de197f6cd80e8e9$export$d7a01e11500dfb6f = $5de197f6cd80e8e9$export$5bc21d1c00c4b201
const $5de197f6cd80e8e9$export$2ea8a7a591ac5eac = $5de197f6cd80e8e9$export$30b2b5c64556d316
const $5de197f6cd80e8e9$export$6d4de93b380beddf = $5de197f6cd80e8e9$export$2c967063bd2dc512

//# sourceMappingURL=index.js.map
