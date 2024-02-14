var Se = Object.create
var F = Object.defineProperty
var Ce = Object.getOwnPropertyDescriptor
var ye = Object.getOwnPropertyNames
var xe = Object.getPrototypeOf,
  Te = Object.prototype.hasOwnProperty
var Le = (r, o) => {
    for (var n in o) F(r, n, { get: o[n], enumerable: !0 })
  },
  re = (r, o, n, a) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let l of ye(o))
        !Te.call(r, l) &&
          l !== n &&
          F(r, l, {
            get: () => o[l],
            enumerable: !(a = Ce(o, l)) || a.enumerable,
          })
    return r
  }
var z = (r, o, n) => (
    (n = r != null ? Se(xe(r)) : {}),
    re(o || !r || !r.__esModule ? F(n, "default", { value: r, enumerable: !0 }) : n, r)
  ),
  we = (r) => re(F({}, "__esModule", { value: !0 }), r)
var _e = {}
Le(_e, {
  Command: () => Me,
  CommandDialog: () => pe,
  CommandEmpty: () => ge,
  CommandGroup: () => ue,
  CommandInput: () => fe,
  CommandItem: () => le,
  CommandList: () => me,
  CommandLoading: () => ve,
  CommandRoot: () => J,
  CommandSeparator: () => de,
  useCommandState: () => y,
})
module.exports = we(_e)
var C = z(require("../../react-dialog")),
  t = z(require("react")),
  oe = z(require("command-score")),
  De = '[cmdk-list-sizer=""]',
  M = '[cmdk-group=""]',
  U = '[cmdk-group-items=""]',
  Ie = '[cmdk-group-heading=""]',
  ae = '[cmdk-item=""]',
  ne = `${ae}:not([aria-disabled="true"])`,
  B = "cmdk-item-select",
  S = "data-value",
  Pe = (r, o) => (0, oe.default)(r, o),
  se = t.createContext(void 0),
  k = () => t.useContext(se),
  ie = t.createContext(void 0),
  W = () => t.useContext(ie),
  ce = t.createContext(void 0),
  J = t.forwardRef((r, o) => {
    let n = t.useRef(null),
      a = T(() => ({
        search: "",
        value: "",
        filtered: { count: 0, items: new Map(), groups: new Set() },
      })),
      l = T(() => new Set()),
      u = T(() => new Map()),
      p = T(() => new Map()),
      f = T(() => new Set()),
      d = Re(r),
      { label: v, children: E, value: R, onValueChange: w, filter: O, shouldFilter: he, ...D } = r,
      K = t.useId(),
      g = t.useId(),
      A = t.useId(),
      x = Oe()
    L(() => {
      if (R !== void 0) {
        let e = R.trim().toLowerCase()
        ;(a.current.value = e), x(6, X), h.emit()
      }
    }, [R])
    let h = t.useMemo(
        () => ({
          subscribe: (e) => (f.current.add(e), () => f.current.delete(e)),
          snapshot: () => a.current,
          setState: (e, c, i) => {
            var s, m, b
            if (!Object.is(a.current[e], c)) {
              if (((a.current[e] = c), e === "search")) q(), V(), x(1, j)
              else if (e === "value")
                if (((s = d.current) == null ? void 0 : s.value) !== void 0) {
                  ;(b = (m = d.current).onValueChange) == null || b.call(m, c)
                  return
                } else i || x(5, X)
              h.emit()
            }
          },
          emit: () => {
            f.current.forEach((e) => e())
          },
        }),
        []
      ),
      G = t.useMemo(
        () => ({
          value: (e, c) => {
            c !== p.current.get(e) &&
              (p.current.set(e, c),
              a.current.filtered.items.set(e, Q(c)),
              x(2, () => {
                V(), h.emit()
              }))
          },
          item: (e, c) => (
            l.current.add(e),
            c && (u.current.has(c) ? u.current.get(c).add(e) : u.current.set(c, new Set([e]))),
            x(3, () => {
              q(), V(), a.current.value || j(), h.emit()
            }),
            () => {
              p.current.delete(e),
                l.current.delete(e),
                a.current.filtered.items.delete(e),
                x(4, () => {
                  q(), j(), h.emit()
                })
            }
          ),
          group: (e) => (
            u.current.has(e) || u.current.set(e, new Set()),
            () => {
              p.current.delete(e), u.current.delete(e)
            }
          ),
          filter: () => d.current.shouldFilter,
          label: v || r["aria-label"],
          listId: K,
          inputId: A,
          labelId: g,
        }),
        []
      )
    function Q(e) {
      var i
      let c = ((i = d.current) == null ? void 0 : i.filter) ?? Pe
      return e ? c(e, a.current.search) : 0
    }
    function V() {
      if (!n.current || !a.current.search || d.current.shouldFilter === !1) return
      let e = a.current.filtered.items,
        c = []
      a.current.filtered.groups.forEach((s) => {
        let m = u.current.get(s),
          b = 0
        m.forEach((P) => {
          let Ee = e.get(P)
          b = Math.max(Ee, b)
        }),
          c.push([s, b])
      })
      let i = n.current.querySelector(De)
      I()
        .sort((s, m) => {
          let b = s.getAttribute(S),
            P = m.getAttribute(S)
          return (e.get(P) ?? 0) - (e.get(b) ?? 0)
        })
        .forEach((s) => {
          let m = s.closest(U)
          m
            ? m.appendChild(s.parentElement === m ? s : s.closest(`${U} > *`))
            : i.appendChild(s.parentElement === i ? s : s.closest(`${U} > *`))
        }),
        c
          .sort((s, m) => m[1] - s[1])
          .forEach((s) => {
            let m = n.current.querySelector(`${M}[${S}="${s[0]}"]`)
            m == null || m.parentElement.appendChild(m)
          })
    }
    function j() {
      let e = I().find((i) => !i.ariaDisabled),
        c = e == null ? void 0 : e.getAttribute(S)
      h.setState("value", c || void 0)
    }
    function q() {
      if (!a.current.search || d.current.shouldFilter === !1) {
        a.current.filtered.count = l.current.size
        return
      }
      a.current.filtered.groups = new Set()
      let e = 0
      for (let c of l.current) {
        let i = p.current.get(c),
          s = Q(i)
        a.current.filtered.items.set(c, s), s > 0 && e++
      }
      for (let [c, i] of u.current)
        for (let s of i)
          if (a.current.filtered.items.get(s) > 0) {
            a.current.filtered.groups.add(c)
            break
          }
      a.current.filtered.count = e
    }
    function X() {
      var c, i, s
      let e = _()
      e &&
        (((c = e.parentElement) == null ? void 0 : c.firstChild) === e &&
          ((s = (i = e.closest(M)) == null ? void 0 : i.querySelector(Ie)) == null ||
            s.scrollIntoView({ block: "nearest" })),
        e.scrollIntoView({ block: "nearest" }))
    }
    function _() {
      return n.current.querySelector(`${ae}[aria-selected="true"]`)
    }
    function I() {
      return Array.from(n.current.querySelectorAll(ne))
    }
    function $(e) {
      let i = I()[e]
      i && h.setState("value", i.getAttribute(S))
    }
    function N(e) {
      var b
      let c = _(),
        i = I(),
        s = i.findIndex((P) => P === c),
        m = i[s + e]
      ;(b = d.current) != null && b.loop && (m = s + e < 0 ? i[i.length - 1] : s + e === i.length ? i[0] : i[s + e]),
        m && h.setState("value", m.getAttribute(S))
    }
    function Y(e) {
      let c = _(),
        i = c == null ? void 0 : c.closest(M),
        s
      for (; i && !s; ) (i = e > 0 ? ke(i, M) : He(i, M)), (s = i == null ? void 0 : i.querySelector(ne))
      s ? h.setState("value", s.getAttribute(S)) : N(e)
    }
    let Z = () => $(I().length - 1),
      ee = (e) => {
        e.preventDefault(), e.metaKey ? Z() : e.altKey ? Y(1) : N(1)
      },
      te = (e) => {
        e.preventDefault(), e.metaKey ? $(0) : e.altKey ? Y(-1) : N(-1)
      }
    return t.createElement(
      "div",
      {
        ref: H([n, o]),
        ...D,
        "cmdk-root": "",
        onKeyDown: (e) => {
          var c
          if (((c = D.onKeyDown) == null || c.call(D, e), !e.defaultPrevented))
            switch (e.key) {
              case "n":
              case "j": {
                e.ctrlKey && ee(e)
                break
              }
              case "ArrowDown": {
                ee(e)
                break
              }
              case "p":
              case "k": {
                e.ctrlKey && te(e)
                break
              }
              case "ArrowUp": {
                te(e)
                break
              }
              case "Home": {
                e.preventDefault(), $(0)
                break
              }
              case "End": {
                e.preventDefault(), Z()
                break
              }
              case "Enter": {
                e.preventDefault()
                let i = _()
                if (i) {
                  let s = new Event(B)
                  i.dispatchEvent(s)
                }
              }
            }
        },
      },
      t.createElement("label", { "cmdk-label": "", htmlFor: G.inputId, id: G.labelId, style: Ae }, v),
      t.createElement(ie.Provider, { value: h }, t.createElement(se.Provider, { value: G }, E))
    )
  }),
  le = t.forwardRef((r, o) => {
    let n = t.useId(),
      a = t.useRef(null),
      l = t.useContext(ce),
      u = k(),
      p = Re(r)
    L(() => u.item(n, l), [])
    let f = be(n, a, [r.value, r.children, a]),
      d = W(),
      v = y((g) => g.value && g.value === f.current),
      E = y((g) => (u.filter() === !1 ? !0 : g.search ? g.filtered.items.get(n) > 0 : !0))
    t.useEffect(() => {
      let g = a.current
      if (!(!g || r.disabled)) return g.addEventListener(B, R), () => g.removeEventListener(B, R)
    }, [E, r.onSelect, r.disabled])
    function R() {
      var g, A
      ;(A = (g = p.current).onSelect) == null || A.call(g, f.current)
    }
    function w() {
      d.setState("value", f.current, !0)
    }
    if (!E) return null
    let { disabled: O, value: he, onSelect: D, ...K } = r
    return t.createElement(
      "div",
      {
        ref: H([a, o]),
        ...K,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": O || void 0,
        "aria-selected": v || void 0,
        "data-selected": v || void 0,
        onPointerMove: O ? void 0 : w,
        onClick: O ? void 0 : R,
      },
      r.children
    )
  }),
  ue = t.forwardRef((r, o) => {
    let { heading: n, children: a, ...l } = r,
      u = t.useId(),
      p = t.useRef(null),
      f = t.useRef(null),
      d = t.useId(),
      v = k(),
      E = y((w) => (v.filter() === !1 ? !0 : w.search ? w.filtered.groups.has(u) : !0))
    L(() => v.group(u), []), be(u, p, [r.value, r.heading, f])
    let R = t.createElement(ce.Provider, { value: u }, a)
    return t.createElement(
      "div",
      {
        ref: H([p, o]),
        ...l,
        "cmdk-group": "",
        role: "presentation",
        hidden: E ? void 0 : !0,
      },
      n && t.createElement("div", { ref: f, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n),
      t.createElement(
        "div",
        {
          "cmdk-group-items": "",
          role: "group",
          "aria-labelledby": n ? d : void 0,
        },
        R
      )
    )
  }),
  de = t.forwardRef((r, o) => {
    let { alwaysRender: n, ...a } = r,
      l = t.useRef(null),
      u = y((p) => !p.search)
    return !n && !u
      ? null
      : t.createElement("div", {
          ref: H([l, o]),
          ...a,
          "cmdk-separator": "",
          role: "separator",
        })
  }),
  fe = t.forwardRef((r, o) => {
    let { onValueChange: n, ...a } = r,
      l = r.value != null,
      u = W(),
      p = y((d) => d.search),
      f = k()
    return (
      t.useEffect(() => {
        r.value != null && u.setState("search", r.value)
      }, [r.value]),
      t.createElement("input", {
        ref: o,
        ...a,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": f.listId,
        "aria-labelledby": f.labelId,
        id: f.inputId,
        type: "text",
        value: l ? r.value : p,
        onChange: (d) => {
          l || u.setState("search", d.target.value), n == null || n(d.target.value)
        },
      })
    )
  }),
  me = t.forwardRef((r, o) => {
    let { children: n, ...a } = r,
      l = t.useRef(null),
      u = t.useRef(null),
      p = k()
    return (
      t.useEffect(() => {
        if (u.current && l.current) {
          let f = u.current,
            d = l.current,
            v,
            E = new ResizeObserver(() => {
              v = requestAnimationFrame(() => {
                let R = f.getBoundingClientRect().height
                d.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px")
              })
            })
          return (
            E.observe(f),
            () => {
              cancelAnimationFrame(v), E.unobserve(f)
            }
          )
        }
      }, []),
      t.createElement(
        "div",
        {
          ref: H([l, o]),
          ...a,
          "cmdk-list": "",
          role: "listbox",
          "aria-label": "Suggestions",
          id: p.listId,
          "aria-labelledby": p.inputId,
        },
        t.createElement("div", { ref: u, "cmdk-list-sizer": "" }, n)
      )
    )
  }),
  pe = t.forwardRef((r, o) => {
    let { open: n, onOpenChange: a, container: l, ...u } = r
    return t.createElement(
      C.Root,
      { open: n, onOpenChange: a },
      t.createElement(
        C.Portal,
        { container: l },
        t.createElement(C.Overlay, { "cmdk-overlay": "" }),
        t.createElement(C.Content, { "aria-label": r.label, "cmdk-dialog": "" }, t.createElement(J, { ref: o, ...u }))
      )
    )
  }),
  ge = t.forwardRef((r, o) => {
    let n = t.useRef(!0),
      a = y((l) => l.filtered.count === 0)
    return (
      t.useEffect(() => {
        n.current = !1
      }, []),
      n.current || !a
        ? null
        : t.createElement("div", {
            ref: o,
            ...r,
            "cmdk-empty": "",
            role: "presentation",
          })
    )
  }),
  ve = t.forwardRef((r, o) => {
    let { progress: n, children: a, ...l } = r
    return t.createElement(
      "div",
      {
        ref: o,
        ...l,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Loading...",
      },
      t.createElement("div", { "aria-hidden": !0 }, a)
    )
  }),
  Me = Object.assign(J, {
    List: me,
    Item: le,
    Input: fe,
    Group: ue,
    Separator: de,
    Dialog: pe,
    Empty: ge,
    Loading: ve,
  })
function ke(r, o) {
  let n = r.nextElementSibling
  for (; n; ) {
    if (n.matches(o)) return n
    n = n.nextElementSibling
  }
}
function He(r, o) {
  let n = r.previousElementSibling
  for (; n; ) {
    if (n.matches(o)) return n
    n = n.previousElementSibling
  }
}
function Re(r) {
  let o = t.useRef(r)
  return (
    L(() => {
      o.current = r
    }),
    o
  )
}
var L = typeof window > "u" ? t.useEffect : t.useLayoutEffect
function T(r) {
  let o = t.useRef()
  return o.current === void 0 && (o.current = r()), o
}
function H(r) {
  return (o) => {
    r.forEach((n) => {
      typeof n == "function" ? n(o) : n != null && (n.current = o)
    })
  }
}
function y(r) {
  let o = W(),
    n = () => r(o.snapshot())
  return t.useSyncExternalStore(o.subscribe, n, n)
}
function be(r, o, n) {
  let a = t.useRef(),
    l = k()
  return (
    L(() => {
      var p
      let u = (() => {
        var f
        for (let d of n) {
          if (typeof d == "string") return d.trim().toLowerCase()
          if (typeof d == "object" && "current" in d && d.current)
            return (f = d.current.textContent) == null ? void 0 : f.trim().toLowerCase()
        }
      })()
      l.value(r, u), (p = o.current) == null || p.setAttribute(S, u), (a.current = u)
    }),
    a
  )
}
var Oe = () => {
    let [r, o] = t.useState(),
      n = T(() => new Map())
    return (
      L(() => {
        n.current.forEach((a) => a()), (n.current = new Map())
      }, [r]),
      (a, l) => {
        n.current.set(a, l), o({})
      }
    )
  },
  Ae = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  }
0 &&
  (module.exports = {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandLoading,
    CommandRoot,
    CommandSeparator,
    useCommandState,
  })
