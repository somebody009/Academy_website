import $3TiJz$babelruntimehelpersesmextends from "@babel/runtime/helpers/esm/extends";
import {
  useState as $3TiJz$useState,
  useCallback as $3TiJz$useCallback,
  createElement as $3TiJz$createElement,
  forwardRef as $3TiJz$forwardRef,
  useRef as $3TiJz$useRef,
  useEffect as $3TiJz$useEffect,
  Fragment as $3TiJz$Fragment,
} from "react";
import { composeEventHandlers as $3TiJz$composeEventHandlers } from "../../primitive";
import { createContextScope as $3TiJz$createContextScope } from "../../react-context";
import { Primitive as $3TiJz$Primitive } from "../../react-primitive";
import {
  createMenuScope as $3TiJz$createMenuScope,
  Root as $3TiJz$Root,
  Anchor as $3TiJz$Anchor,
  Portal as $3TiJz$Portal,
  Content as $3TiJz$Content,
  Group as $3TiJz$Group,
  Label as $3TiJz$Label,
  Item as $3TiJz$Item,
  CheckboxItem as $3TiJz$CheckboxItem,
  RadioGroup as $3TiJz$RadioGroup,
  RadioItem as $3TiJz$RadioItem,
  ItemIndicator as $3TiJz$ItemIndicator,
  Separator as $3TiJz$Separator,
  Arrow as $3TiJz$Arrow,
  Sub as $3TiJz$Sub,
  SubTrigger as $3TiJz$SubTrigger,
  SubContent as $3TiJz$SubContent,
} from "../../react-menu";
import { useCallbackRef as $3TiJz$useCallbackRef } from "../../react-use-callback-ref";
import { useControllableState as $3TiJz$useControllableState } from "../../react-use-controllable-state";

/* -------------------------------------------------------------------------------------------------
 * ContextMenu
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CONTEXT_MENU_NAME =
  "ContextMenu";
const [
  $1b0217ee4a91d156$var$createContextMenuContext,
  $1b0217ee4a91d156$export$1059331f43ddcc82,
] = $3TiJz$createContextScope($1b0217ee4a91d156$var$CONTEXT_MENU_NAME, [
  $3TiJz$createMenuScope,
]);
const $1b0217ee4a91d156$var$useMenuScope = $3TiJz$createMenuScope();
const [
  $1b0217ee4a91d156$var$ContextMenuProvider,
  $1b0217ee4a91d156$var$useContextMenuContext,
] = $1b0217ee4a91d156$var$createContextMenuContext(
  $1b0217ee4a91d156$var$CONTEXT_MENU_NAME
);
const $1b0217ee4a91d156$export$8dc6765e8be191c7 = (props) => {
  const {
    __scopeContextMenu: __scopeContextMenu,
    children: children,
    onOpenChange: onOpenChange,
    dir: dir,
    modal: modal = true,
  } = props;
  const [open1, setOpen] = $3TiJz$useState(false);
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = $3TiJz$useCallbackRef(onOpenChange);
  const handleOpenChange = $3TiJz$useCallback(
    (open) => {
      setOpen(open);
      handleOpenChangeProp(open);
    },
    [handleOpenChangeProp]
  );
  return /*#__PURE__*/ $3TiJz$createElement(
    $1b0217ee4a91d156$var$ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open: open1,
      onOpenChange: handleOpenChange,
      modal: modal,
    },
    /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Root,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, {
        dir: dir,
        open: open1,
        onOpenChange: handleOpenChange,
        modal: modal,
      }),
      children
    )
  );
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8dc6765e8be191c7, {
  displayName: $1b0217ee4a91d156$var$CONTEXT_MENU_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$TRIGGER_NAME =
  "ContextMenuTrigger";
const $1b0217ee4a91d156$export$be6fc7b1d5b0beb9 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const {
      __scopeContextMenu: __scopeContextMenu,
      disabled: disabled = false,
      ...triggerProps
    } = props;
    const context = $1b0217ee4a91d156$var$useContextMenuContext(
      $1b0217ee4a91d156$var$TRIGGER_NAME,
      __scopeContextMenu
    );
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const pointRef = $3TiJz$useRef({
      x: 0,
      y: 0,
    });
    const virtualRef = $3TiJz$useRef({
      getBoundingClientRect: () =>
        DOMRect.fromRect({
          width: 0,
          height: 0,
          ...pointRef.current,
        }),
    });
    const longPressTimerRef = $3TiJz$useRef(0);
    const clearLongPress = $3TiJz$useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = (event) => {
      pointRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
      context.onOpenChange(true);
    };
    $3TiJz$useEffect(() => clearLongPress, [clearLongPress]);
    $3TiJz$useEffect(
      () => void (disabled && clearLongPress()),
      [disabled, clearLongPress]
    );
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Fragment,
      null,
      /*#__PURE__*/ $3TiJz$createElement(
        $3TiJz$Anchor,
        $3TiJz$babelruntimehelpersesmextends({}, menuScope, {
          virtualRef: virtualRef,
        })
      ),
      /*#__PURE__*/ $3TiJz$createElement(
        $3TiJz$Primitive.span,
        $3TiJz$babelruntimehelpersesmextends(
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
              : $3TiJz$composeEventHandlers(props.onContextMenu, (event) => {
                  // clearing the long press here because some platforms already support
                  // long press to trigger a `contextmenu` event
                  clearLongPress();
                  handleOpen(event);
                  event.preventDefault();
                }),
            onPointerDown: disabled
              ? props.onPointerDown
              : $3TiJz$composeEventHandlers(
                  props.onPointerDown,
                  $1b0217ee4a91d156$var$whenTouchOrPen((event) => {
                    // clear the long press here in case there's multiple touch points
                    clearLongPress();
                    longPressTimerRef.current = window.setTimeout(
                      () => handleOpen(event),
                      700
                    );
                  })
                ),
            onPointerMove: disabled
              ? props.onPointerMove
              : $3TiJz$composeEventHandlers(
                  props.onPointerMove,
                  $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)
                ),
            onPointerCancel: disabled
              ? props.onPointerCancel
              : $3TiJz$composeEventHandlers(
                  props.onPointerCancel,
                  $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)
                ),
            onPointerUp: disabled
              ? props.onPointerUp
              : $3TiJz$composeEventHandlers(
                  props.onPointerUp,
                  $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)
                ),
          }
        )
      )
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$be6fc7b1d5b0beb9, {
  displayName: $1b0217ee4a91d156$var$TRIGGER_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$PORTAL_NAME =
  "ContextMenuPortal";
const $1b0217ee4a91d156$export$14afd0be83e45060 = (props) => {
  const { __scopeContextMenu: __scopeContextMenu, ...portalProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return /*#__PURE__*/ $3TiJz$createElement(
    $3TiJz$Portal,
    $3TiJz$babelruntimehelpersesmextends({}, menuScope, portalProps)
  );
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$14afd0be83e45060, {
  displayName: $1b0217ee4a91d156$var$PORTAL_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CONTENT_NAME =
  "ContextMenuContent";
const $1b0217ee4a91d156$export$572205900c9369e =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...contentProps } = props;
    const context = $1b0217ee4a91d156$var$useContextMenuContext(
      $1b0217ee4a91d156$var$CONTENT_NAME,
      __scopeContextMenu
    );
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = $3TiJz$useRef(false);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Content,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, contentProps, {
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          var _props$onCloseAutoFoc;
          (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null ||
            _props$onCloseAutoFoc === void 0 ||
            _props$onCloseAutoFoc.call(props, event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current)
            event.preventDefault();
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _props$onInteractOuts;
          (_props$onInteractOuts = props.onInteractOutside) === null ||
            _props$onInteractOuts === void 0 ||
            _props$onInteractOuts.call(props, event);
          if (!event.defaultPrevented && !context.modal)
            hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          "--dss-context-menu-content-transform-origin":
            "var(--dss-popper-transform-origin)",
          "--dss-context-menu-content-available-width":
            "var(--dss-popper-available-width)",
          "--dss-context-menu-content-available-height":
            "var(--dss-popper-available-height)",
          "--dss-context-menu-trigger-width": "var(--dss-popper-anchor-width)",
          "--dss-context-menu-trigger-height":
            "var(--dss-popper-anchor-height)",
        },
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$572205900c9369e, {
  displayName: $1b0217ee4a91d156$var$CONTENT_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$GROUP_NAME =
  "ContextMenuGroup";
const $1b0217ee4a91d156$export$9860523b0fcdd664 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...groupProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Group,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, groupProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$9860523b0fcdd664, {
  displayName: $1b0217ee4a91d156$var$GROUP_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$LABEL_NAME =
  "ContextMenuLabel";
const $1b0217ee4a91d156$export$d4b9d3b609a10742 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...labelProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Label,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, labelProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$d4b9d3b609a10742, {
  displayName: $1b0217ee4a91d156$var$LABEL_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$ITEM_NAME =
  "ContextMenuItem";
const $1b0217ee4a91d156$export$16a26dc176a49100 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...itemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Item,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, itemProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$16a26dc176a49100, {
  displayName: $1b0217ee4a91d156$var$ITEM_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME =
  "ContextMenuCheckboxItem";
const $1b0217ee4a91d156$export$b6adbe51d5d8b7ec =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...checkboxItemProps } =
      props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$CheckboxItem,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, checkboxItemProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$b6adbe51d5d8b7ec, {
  displayName: $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$RADIO_GROUP_NAME =
  "ContextMenuRadioGroup";
const $1b0217ee4a91d156$export$db5c89af5ed9aa07 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...radioGroupProps } =
      props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$RadioGroup,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, radioGroupProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$db5c89af5ed9aa07, {
  displayName: $1b0217ee4a91d156$var$RADIO_GROUP_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$RADIO_ITEM_NAME =
  "ContextMenuRadioItem";
const $1b0217ee4a91d156$export$8a727d09a7d9bfc2 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...radioItemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$RadioItem,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, radioItemProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8a727d09a7d9bfc2, {
  displayName: $1b0217ee4a91d156$var$RADIO_ITEM_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$INDICATOR_NAME =
  "ContextMenuItemIndicator";
const $1b0217ee4a91d156$export$9ed8194dee42d94b =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...itemIndicatorProps } =
      props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$ItemIndicator,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$9ed8194dee42d94b, {
  displayName: $1b0217ee4a91d156$var$INDICATOR_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SEPARATOR_NAME =
  "ContextMenuSeparator";
const $1b0217ee4a91d156$export$8d6b009fadfe1207 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...separatorProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Separator,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, separatorProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8d6b009fadfe1207, {
  displayName: $1b0217ee4a91d156$var$SEPARATOR_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$ARROW_NAME =
  "ContextMenuArrow";
const $1b0217ee4a91d156$export$f47d0a58228a61e2 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...arrowProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$Arrow,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, arrowProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$f47d0a58228a61e2, {
  displayName: $1b0217ee4a91d156$var$ARROW_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_NAME =
  "ContextMenuSub";
const $1b0217ee4a91d156$export$5bc21d1c00c4b201 = (props) => {
  const {
    __scopeContextMenu: __scopeContextMenu,
    children: children,
    onOpenChange: onOpenChange,
    open: openProp,
    defaultOpen: defaultOpen,
  } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const [open, setOpen] = $3TiJz$useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  return /*#__PURE__*/ $3TiJz$createElement(
    $3TiJz$Sub,
    $3TiJz$babelruntimehelpersesmextends({}, menuScope, {
      open: open,
      onOpenChange: setOpen,
    }),
    children
  );
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$5bc21d1c00c4b201, {
  displayName: $1b0217ee4a91d156$var$SUB_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_TRIGGER_NAME =
  "ContextMenuSubTrigger";
const $1b0217ee4a91d156$export$30b2b5c64556d316 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...triggerItemProps } =
      props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$SubTrigger,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, triggerItemProps, {
        ref: forwardedRef,
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$30b2b5c64556d316, {
  displayName: $1b0217ee4a91d156$var$SUB_TRIGGER_NAME,
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_CONTENT_NAME =
  "ContextMenuSubContent";
const $1b0217ee4a91d156$export$2c967063bd2dc512 =
  /*#__PURE__*/ $3TiJz$forwardRef((props, forwardedRef) => {
    const { __scopeContextMenu: __scopeContextMenu, ...subContentProps } =
      props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ $3TiJz$createElement(
      $3TiJz$SubContent,
      $3TiJz$babelruntimehelpersesmextends({}, menuScope, subContentProps, {
        ref: forwardedRef,
        style: {
          ...props.style,
          "--dss-context-menu-content-transform-origin":
            "var(--dss-popper-transform-origin)",
          "--dss-context-menu-content-available-width":
            "var(--dss-popper-available-width)",
          "--dss-context-menu-content-available-height":
            "var(--dss-popper-available-height)",
          "--dss-context-menu-trigger-width": "var(--dss-popper-anchor-width)",
          "--dss-context-menu-trigger-height":
            "var(--dss-popper-anchor-height)",
        },
      })
    );
  });
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$2c967063bd2dc512, {
  displayName: $1b0217ee4a91d156$var$SUB_CONTENT_NAME,
});
/* -----------------------------------------------------------------------------------------------*/ function $1b0217ee4a91d156$var$whenTouchOrPen(
  handler
) {
  return (event) =>
    event.pointerType !== "mouse" ? handler(event) : undefined;
}
const $1b0217ee4a91d156$export$be92b6f5f03c0fe9 =
  $1b0217ee4a91d156$export$8dc6765e8be191c7;
const $1b0217ee4a91d156$export$41fb9f06171c75f4 =
  $1b0217ee4a91d156$export$be6fc7b1d5b0beb9;
const $1b0217ee4a91d156$export$602eac185826482c =
  $1b0217ee4a91d156$export$14afd0be83e45060;
const $1b0217ee4a91d156$export$7c6e2c02157bb7d2 =
  $1b0217ee4a91d156$export$572205900c9369e;
const $1b0217ee4a91d156$export$eb2fcfdbd7ba97d4 =
  $1b0217ee4a91d156$export$9860523b0fcdd664;
const $1b0217ee4a91d156$export$b04be29aa201d4f5 =
  $1b0217ee4a91d156$export$d4b9d3b609a10742;
const $1b0217ee4a91d156$export$6d08773d2e66f8f2 =
  $1b0217ee4a91d156$export$16a26dc176a49100;
const $1b0217ee4a91d156$export$16ce288f89fa631c =
  $1b0217ee4a91d156$export$b6adbe51d5d8b7ec;
const $1b0217ee4a91d156$export$a98f0dcb43a68a25 =
  $1b0217ee4a91d156$export$db5c89af5ed9aa07;
const $1b0217ee4a91d156$export$371ab307eab489c0 =
  $1b0217ee4a91d156$export$8a727d09a7d9bfc2;
const $1b0217ee4a91d156$export$c3468e2714d175fa =
  $1b0217ee4a91d156$export$9ed8194dee42d94b;
const $1b0217ee4a91d156$export$1ff3c3f08ae963c0 =
  $1b0217ee4a91d156$export$8d6b009fadfe1207;
const $1b0217ee4a91d156$export$21b07c8f274aebd5 =
  $1b0217ee4a91d156$export$f47d0a58228a61e2;
const $1b0217ee4a91d156$export$d7a01e11500dfb6f =
  $1b0217ee4a91d156$export$5bc21d1c00c4b201;
const $1b0217ee4a91d156$export$2ea8a7a591ac5eac =
  $1b0217ee4a91d156$export$30b2b5c64556d316;
const $1b0217ee4a91d156$export$6d4de93b380beddf =
  $1b0217ee4a91d156$export$2c967063bd2dc512;

export {
  $1b0217ee4a91d156$export$1059331f43ddcc82 as createContextMenuScope,
  $1b0217ee4a91d156$export$8dc6765e8be191c7 as ContextMenu,
  $1b0217ee4a91d156$export$be6fc7b1d5b0beb9 as ContextMenuTrigger,
  $1b0217ee4a91d156$export$14afd0be83e45060 as ContextMenuPortal,
  $1b0217ee4a91d156$export$572205900c9369e as ContextMenuContent,
  $1b0217ee4a91d156$export$9860523b0fcdd664 as ContextMenuGroup,
  $1b0217ee4a91d156$export$d4b9d3b609a10742 as ContextMenuLabel,
  $1b0217ee4a91d156$export$16a26dc176a49100 as ContextMenuItem,
  $1b0217ee4a91d156$export$b6adbe51d5d8b7ec as ContextMenuCheckboxItem,
  $1b0217ee4a91d156$export$db5c89af5ed9aa07 as ContextMenuRadioGroup,
  $1b0217ee4a91d156$export$8a727d09a7d9bfc2 as ContextMenuRadioItem,
  $1b0217ee4a91d156$export$9ed8194dee42d94b as ContextMenuItemIndicator,
  $1b0217ee4a91d156$export$8d6b009fadfe1207 as ContextMenuSeparator,
  $1b0217ee4a91d156$export$f47d0a58228a61e2 as ContextMenuArrow,
  $1b0217ee4a91d156$export$5bc21d1c00c4b201 as ContextMenuSub,
  $1b0217ee4a91d156$export$30b2b5c64556d316 as ContextMenuSubTrigger,
  $1b0217ee4a91d156$export$2c967063bd2dc512 as ContextMenuSubContent,
  $1b0217ee4a91d156$export$be92b6f5f03c0fe9 as Root,
  $1b0217ee4a91d156$export$41fb9f06171c75f4 as Trigger,
  $1b0217ee4a91d156$export$602eac185826482c as Portal,
  $1b0217ee4a91d156$export$7c6e2c02157bb7d2 as Content,
  $1b0217ee4a91d156$export$eb2fcfdbd7ba97d4 as Group,
  $1b0217ee4a91d156$export$b04be29aa201d4f5 as Label,
  $1b0217ee4a91d156$export$6d08773d2e66f8f2 as Item,
  $1b0217ee4a91d156$export$16ce288f89fa631c as CheckboxItem,
  $1b0217ee4a91d156$export$a98f0dcb43a68a25 as RadioGroup,
  $1b0217ee4a91d156$export$371ab307eab489c0 as RadioItem,
  $1b0217ee4a91d156$export$c3468e2714d175fa as ItemIndicator,
  $1b0217ee4a91d156$export$1ff3c3f08ae963c0 as Separator,
  $1b0217ee4a91d156$export$21b07c8f274aebd5 as Arrow,
  $1b0217ee4a91d156$export$d7a01e11500dfb6f as Sub,
  $1b0217ee4a91d156$export$2ea8a7a591ac5eac as SubTrigger,
  $1b0217ee4a91d156$export$6d4de93b380beddf as SubContent,
};
//# sourceMappingURL=index.mjs.map
