import * as C from "../../react-dialog";
import * as t from "react";
import le from "command-score";
var ue = '[cmdk-list-sizer=""]',
  M = '[cmdk-group=""]',
  N = '[cmdk-group-items=""]',
  de = '[cmdk-group-heading=""]',
  ee = '[cmdk-item=""]',
  Z = `${ee}:not([aria-disabled="true"])`,
  z = "cmdk-item-select",
  S = "data-value",
  fe = (n, a) => le(n, a),
  te = t.createContext(void 0),
  k = () => t.useContext(te),
  re = t.createContext(void 0),
  U = () => t.useContext(re),
  ne = t.createContext(void 0),
  oe = t.forwardRef((n, a) => {
    let r = t.useRef(null),
      o = x(() => ({
        search: "",
        value: "",
        filtered: { count: 0, items: new Map(), groups: new Set() },
      })),
      u = x(() => new Set()),
      l = x(() => new Map()),
      p = x(() => new Map()),
      f = x(() => new Set()),
      d = ae(n),
      {
        label: v,
        children: E,
        value: R,
        onValueChange: w,
        filter: O,
        shouldFilter: ie,
        ...D
      } = n,
      F = t.useId(),
      g = t.useId(),
      A = t.useId(),
      y = ye();
    L(() => {
      if (R !== void 0) {
        let e = R.trim().toLowerCase();
        (o.current.value = e), y(6, W), h.emit();
      }
    }, [R]);
    let h = t.useMemo(
        () => ({
          subscribe: (e) => (f.current.add(e), () => f.current.delete(e)),
          snapshot: () => o.current,
          setState: (e, c, i) => {
            var s, m, b;
            if (!Object.is(o.current[e], c)) {
              if (((o.current[e] = c), e === "search")) j(), G(), y(1, V);
              else if (e === "value")
                if (((s = d.current) == null ? void 0 : s.value) !== void 0) {
                  (b = (m = d.current).onValueChange) == null || b.call(m, c);
                  return;
                } else i || y(5, W);
              h.emit();
            }
          },
          emit: () => {
            f.current.forEach((e) => e());
          },
        }),
        []
      ),
      K = t.useMemo(
        () => ({
          value: (e, c) => {
            c !== p.current.get(e) &&
              (p.current.set(e, c),
              o.current.filtered.items.set(e, B(c)),
              y(2, () => {
                G(), h.emit();
              }));
          },
          item: (e, c) => (
            u.current.add(e),
            c &&
              (l.current.has(c)
                ? l.current.get(c).add(e)
                : l.current.set(c, new Set([e]))),
            y(3, () => {
              j(), G(), o.current.value || V(), h.emit();
            }),
            () => {
              p.current.delete(e),
                u.current.delete(e),
                o.current.filtered.items.delete(e),
                y(4, () => {
                  j(), V(), h.emit();
                });
            }
          ),
          group: (e) => (
            l.current.has(e) || l.current.set(e, new Set()),
            () => {
              p.current.delete(e), l.current.delete(e);
            }
          ),
          filter: () => d.current.shouldFilter,
          label: v || n["aria-label"],
          listId: F,
          inputId: A,
          labelId: g,
        }),
        []
      );
    function B(e) {
      var i;
      let c = ((i = d.current) == null ? void 0 : i.filter) ?? fe;
      return e ? c(e, o.current.search) : 0;
    }
    function G() {
      if (!r.current || !o.current.search || d.current.shouldFilter === !1)
        return;
      let e = o.current.filtered.items,
        c = [];
      o.current.filtered.groups.forEach((s) => {
        let m = l.current.get(s),
          b = 0;
        m.forEach((P) => {
          let ce = e.get(P);
          b = Math.max(ce, b);
        }),
          c.push([s, b]);
      });
      let i = r.current.querySelector(ue);
      I()
        .sort((s, m) => {
          let b = s.getAttribute(S),
            P = m.getAttribute(S);
          return (e.get(P) ?? 0) - (e.get(b) ?? 0);
        })
        .forEach((s) => {
          let m = s.closest(N);
          m
            ? m.appendChild(s.parentElement === m ? s : s.closest(`${N} > *`))
            : i.appendChild(s.parentElement === i ? s : s.closest(`${N} > *`));
        }),
        c
          .sort((s, m) => m[1] - s[1])
          .forEach((s) => {
            let m = r.current.querySelector(`${M}[${S}="${s[0]}"]`);
            m == null || m.parentElement.appendChild(m);
          });
    }
    function V() {
      let e = I().find((i) => !i.ariaDisabled),
        c = e == null ? void 0 : e.getAttribute(S);
      h.setState("value", c || void 0);
    }
    function j() {
      if (!o.current.search || d.current.shouldFilter === !1) {
        o.current.filtered.count = u.current.size;
        return;
      }
      o.current.filtered.groups = new Set();
      let e = 0;
      for (let c of u.current) {
        let i = p.current.get(c),
          s = B(i);
        o.current.filtered.items.set(c, s), s > 0 && e++;
      }
      for (let [c, i] of l.current)
        for (let s of i)
          if (o.current.filtered.items.get(s) > 0) {
            o.current.filtered.groups.add(c);
            break;
          }
      o.current.filtered.count = e;
    }
    function W() {
      var c, i, s;
      let e = _();
      e &&
        (((c = e.parentElement) == null ? void 0 : c.firstChild) === e &&
          ((s = (i = e.closest(M)) == null ? void 0 : i.querySelector(de)) ==
            null ||
            s.scrollIntoView({ block: "nearest" })),
        e.scrollIntoView({ block: "nearest" }));
    }
    function _() {
      return r.current.querySelector(`${ee}[aria-selected="true"]`);
    }
    function I() {
      return Array.from(r.current.querySelectorAll(Z));
    }
    function q(e) {
      let i = I()[e];
      i && h.setState("value", i.getAttribute(S));
    }
    function $(e) {
      var b;
      let c = _(),
        i = I(),
        s = i.findIndex((P) => P === c),
        m = i[s + e];
      (b = d.current) != null &&
        b.loop &&
        (m =
          s + e < 0 ? i[i.length - 1] : s + e === i.length ? i[0] : i[s + e]),
        m && h.setState("value", m.getAttribute(S));
    }
    function J(e) {
      let c = _(),
        i = c == null ? void 0 : c.closest(M),
        s;
      for (; i && !s; )
        (i = e > 0 ? Se(i, M) : Ce(i, M)),
          (s = i == null ? void 0 : i.querySelector(Z));
      s ? h.setState("value", s.getAttribute(S)) : $(e);
    }
    let Q = () => q(I().length - 1),
      X = (e) => {
        e.preventDefault(), e.metaKey ? Q() : e.altKey ? J(1) : $(1);
      },
      Y = (e) => {
        e.preventDefault(), e.metaKey ? q(0) : e.altKey ? J(-1) : $(-1);
      };
    return t.createElement(
      "div",
      {
        ref: H([r, a]),
        ...D,
        "cmdk-root": "",
        onKeyDown: (e) => {
          var c;
          if (((c = D.onKeyDown) == null || c.call(D, e), !e.defaultPrevented))
            switch (e.key) {
              case "n":
              case "j": {
                e.ctrlKey && X(e);
                break;
              }
              case "ArrowDown": {
                X(e);
                break;
              }
              case "p":
              case "k": {
                e.ctrlKey && Y(e);
                break;
              }
              case "ArrowUp": {
                Y(e);
                break;
              }
              case "Home": {
                e.preventDefault(), q(0);
                break;
              }
              case "End": {
                e.preventDefault(), Q();
                break;
              }
              case "Enter": {
                e.preventDefault();
                let i = _();
                if (i) {
                  let s = new Event(z);
                  i.dispatchEvent(s);
                }
              }
            }
        },
      },
      t.createElement(
        "label",
        { "cmdk-label": "", htmlFor: K.inputId, id: K.labelId, style: xe },
        v
      ),
      t.createElement(
        re.Provider,
        { value: h },
        t.createElement(te.Provider, { value: K }, E)
      )
    );
  }),
  me = t.forwardRef((n, a) => {
    let r = t.useId(),
      o = t.useRef(null),
      u = t.useContext(ne),
      l = k(),
      p = ae(n);
    L(() => l.item(r, u), []);
    let f = se(r, o, [n.value, n.children, o]),
      d = U(),
      v = T((g) => g.value && g.value === f.current),
      E = T((g) =>
        l.filter() === !1 ? !0 : g.search ? g.filtered.items.get(r) > 0 : !0
      );
    t.useEffect(() => {
      let g = o.current;
      if (!(!g || n.disabled))
        return g.addEventListener(z, R), () => g.removeEventListener(z, R);
    }, [E, n.onSelect, n.disabled]);
    function R() {
      var g, A;
      (A = (g = p.current).onSelect) == null || A.call(g, f.current);
    }
    function w() {
      d.setState("value", f.current, !0);
    }
    if (!E) return null;
    let { disabled: O, value: ie, onSelect: D, ...F } = n;
    return t.createElement(
      "div",
      {
        ref: H([o, a]),
        ...F,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": O || void 0,
        "aria-selected": v || void 0,
        "data-selected": v || void 0,
        onPointerMove: O ? void 0 : w,
        onClick: O ? void 0 : R,
      },
      n.children
    );
  }),
  pe = t.forwardRef((n, a) => {
    let { heading: r, children: o, ...u } = n,
      l = t.useId(),
      p = t.useRef(null),
      f = t.useRef(null),
      d = t.useId(),
      v = k(),
      E = T((w) =>
        v.filter() === !1 ? !0 : w.search ? w.filtered.groups.has(l) : !0
      );
    L(() => v.group(l), []), se(l, p, [n.value, n.heading, f]);
    let R = t.createElement(ne.Provider, { value: l }, o);
    return t.createElement(
      "div",
      {
        ref: H([p, a]),
        ...u,
        "cmdk-group": "",
        role: "presentation",
        hidden: E ? void 0 : !0,
      },
      r &&
        t.createElement(
          "div",
          { ref: f, "cmdk-group-heading": "", "aria-hidden": !0, id: d },
          r
        ),
      t.createElement(
        "div",
        {
          "cmdk-group-items": "",
          role: "group",
          "aria-labelledby": r ? d : void 0,
        },
        R
      )
    );
  }),
  ge = t.forwardRef((n, a) => {
    let { alwaysRender: r, ...o } = n,
      u = t.useRef(null),
      l = T((p) => !p.search);
    return !r && !l
      ? null
      : t.createElement("div", {
          ref: H([u, a]),
          ...o,
          "cmdk-separator": "",
          role: "separator",
        });
  }),
  ve = t.forwardRef((n, a) => {
    let { onValueChange: r, ...o } = n,
      u = n.value != null,
      l = U(),
      p = T((d) => d.search),
      f = k();
    return (
      t.useEffect(() => {
        n.value != null && l.setState("search", n.value);
      }, [n.value]),
      t.createElement("input", {
        ref: a,
        ...o,
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
        value: u ? n.value : p,
        onChange: (d) => {
          u || l.setState("search", d.target.value),
            r == null || r(d.target.value);
        },
      })
    );
  }),
  Re = t.forwardRef((n, a) => {
    let { children: r, ...o } = n,
      u = t.useRef(null),
      l = t.useRef(null),
      p = k();
    return (
      t.useEffect(() => {
        if (l.current && u.current) {
          let f = l.current,
            d = u.current,
            v,
            E = new ResizeObserver(() => {
              v = requestAnimationFrame(() => {
                let R = f.getBoundingClientRect().height;
                d.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px");
              });
            });
          return (
            E.observe(f),
            () => {
              cancelAnimationFrame(v), E.unobserve(f);
            }
          );
        }
      }, []),
      t.createElement(
        "div",
        {
          ref: H([u, a]),
          ...o,
          "cmdk-list": "",
          role: "listbox",
          "aria-label": "Suggestions",
          id: p.listId,
          "aria-labelledby": p.inputId,
        },
        t.createElement("div", { ref: l, "cmdk-list-sizer": "" }, r)
      )
    );
  }),
  be = t.forwardRef((n, a) => {
    let { open: r, onOpenChange: o, container: u, ...l } = n;
    return t.createElement(
      C.Root,
      { open: r, onOpenChange: o },
      t.createElement(
        C.Portal,
        { container: u },
        t.createElement(C.Overlay, { "cmdk-overlay": "" }),
        t.createElement(
          C.Content,
          { "aria-label": n.label, "cmdk-dialog": "" },
          t.createElement(oe, { ref: a, ...l })
        )
      )
    );
  }),
  he = t.forwardRef((n, a) => {
    let r = t.useRef(!0),
      o = T((u) => u.filtered.count === 0);
    return (
      t.useEffect(() => {
        r.current = !1;
      }, []),
      r.current || !o
        ? null
        : t.createElement("div", {
            ref: a,
            ...n,
            "cmdk-empty": "",
            role: "presentation",
          })
    );
  }),
  Ee = t.forwardRef((n, a) => {
    let { progress: r, children: o, ...u } = n;
    return t.createElement(
      "div",
      {
        ref: a,
        ...u,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": r,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Loading...",
      },
      t.createElement("div", { "aria-hidden": !0 }, o)
    );
  }),
  Le = Object.assign(oe, {
    List: Re,
    Item: me,
    Input: ve,
    Group: pe,
    Separator: ge,
    Dialog: be,
    Empty: he,
    Loading: Ee,
  });
function Se(n, a) {
  let r = n.nextElementSibling;
  for (; r; ) {
    if (r.matches(a)) return r;
    r = r.nextElementSibling;
  }
}
function Ce(n, a) {
  let r = n.previousElementSibling;
  for (; r; ) {
    if (r.matches(a)) return r;
    r = r.previousElementSibling;
  }
}
function ae(n) {
  let a = t.useRef(n);
  return (
    L(() => {
      a.current = n;
    }),
    a
  );
}
var L = typeof window > "u" ? t.useEffect : t.useLayoutEffect;
function x(n) {
  let a = t.useRef();
  return a.current === void 0 && (a.current = n()), a;
}
function H(n) {
  return (a) => {
    n.forEach((r) => {
      typeof r == "function" ? r(a) : r != null && (r.current = a);
    });
  };
}
function T(n) {
  let a = U(),
    r = () => n(a.snapshot());
  return t.useSyncExternalStore(a.subscribe, r, r);
}
function se(n, a, r) {
  let o = t.useRef(),
    u = k();
  return (
    L(() => {
      var p;
      let l = (() => {
        var f;
        for (let d of r) {
          if (typeof d == "string") return d.trim().toLowerCase();
          if (typeof d == "object" && "current" in d && d.current)
            return (f = d.current.textContent) == null
              ? void 0
              : f.trim().toLowerCase();
        }
      })();
      u.value(n, l),
        (p = a.current) == null || p.setAttribute(S, l),
        (o.current = l);
    }),
    o
  );
}
var ye = () => {
    let [n, a] = t.useState(),
      r = x(() => new Map());
    return (
      L(() => {
        r.current.forEach((o) => o()), (r.current = new Map());
      }, [n]),
      (o, u) => {
        r.current.set(o, u), a({});
      }
    );
  },
  xe = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  };
export {
  Le as Command,
  be as CommandDialog,
  he as CommandEmpty,
  pe as CommandGroup,
  ve as CommandInput,
  me as CommandItem,
  Re as CommandList,
  Ee as CommandLoading,
  oe as CommandRoot,
  ge as CommandSeparator,
  T as useCommandState,
};
