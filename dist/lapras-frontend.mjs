import { defineComponent as E, createElementBlock as m, openBlock as p, mergeProps as M, renderSlot as x, toDisplayString as ne, resolveComponent as Be, normalizeClass as X, createElementVNode as c, createVNode as Ye, createBlock as ue, resolveDynamicComponent as Bt, withCtx as Ve, createCommentVNode as R, createTextVNode as qt, computed as Ne, Transition as At, normalizeStyle as U, withModifiers as Ut, withDirectives as Yt, vShow as Xt, Fragment as Ct, renderList as It, ref as ze, toRefs as Gt, watch as Zt, nextTick as Jt } from "vue";
const Kt = "data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20width%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h200v200h-200z%22%20fill%3D%22%23D7D9E3%22%2F%3E%3Cg%20fill%3D%22%23888A93%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2271%22%20r%3D%2253%22%2F%3E%3Cpath%20d%3D%22m179%20200c0-37.555363-35.369505-68-79-68-43.6304952%200-79%2030.444637-79%2068s158%2037.555363%20158%200z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", Qt = E({
  inheritAttrs: !1,
  props: {
    src: {
      type: String
    }
  },
  setup() {
    return {
      avatarDefault: Kt
    };
  }
}), S = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function er(e, t, r, n, o, a) {
  return p(), m("div", M(e.$attrs, {
    style: { backgroundImage: `url('${e.src || e.avatarDefault}')` },
    class: "avatar-icon",
    role: "img"
  }), null, 16);
}
const Sn = /* @__PURE__ */ S(Qt, [["render", er], ["__scopeId", "data-v-ae8d1844"]]), tr = E({
  inheritAttrs: !1,
  props: {
    skin: {
      type: String,
      default: "default"
    }
  }
});
function rr(e, t, r, n, o, a) {
  return p(), m("div", M(e.$attrs, {
    class: [`is-skin-${e.skin}`, "card"]
  }), [
    x(e.$slots, "default")
  ], 16);
}
const Dn = /* @__PURE__ */ S(tr, [["render", rr]]), or = {
  "add-document": "",
  "add-user": "",
  analytics: "",
  "arrow-down-bold": "",
  "arrow-down": "",
  "arrow-left-double": "",
  "arrow-left": "",
  "arrow-left2": "",
  "arrow-left3": "",
  "arrow-left4": "",
  "arrow-right-double": "",
  "arrow-right": "",
  "arrow-right2": "",
  "arrow-right3": "",
  "arrow-right4": "",
  "arrow-up": "",
  at: "",
  "back-arrow": "",
  bell: "",
  briefcase: "",
  cake: "",
  calendar: "",
  cancel: "",
  check: "",
  "circle-add-button": "",
  "circle-arrow-left": "",
  "circle-arrow-right": "",
  circle: "",
  clock: "",
  "close-bold": "",
  "close-circle": "",
  close: "",
  comment: "",
  commits: "",
  company: "",
  contributors: "",
  cross: "",
  danger: "",
  "delete-user": "",
  document: "",
  "double-circle": "",
  "edit-window": "",
  "electric-ray": "",
  "emotion-frown": "",
  "emotion-normal": "",
  "emotion-smile": "",
  exclamation: "",
  "external-link": "",
  "eye-close": "",
  eye: "",
  file: "",
  forks: "",
  github: "",
  "heart-full": "",
  help: "",
  home: "",
  home2: "",
  "icon-picture": "",
  info: "",
  info2: "",
  interview: "",
  job: "",
  layout: "",
  layout2: "",
  "like-fill": "",
  like: "",
  link: "",
  "mail-line": "",
  mail: "",
  medal: "",
  memo: "",
  menu: "",
  money: "",
  "more-button-dots": "",
  "note-edit": "",
  openmail: "",
  paper: "",
  paperclip: "",
  "paper-plane": "",
  parson: "",
  "pencil-circle": "",
  pencil: "",
  people: "",
  people2: "",
  "person-arrow": "",
  pin: "",
  placemap: "",
  plus: "",
  minus: "",
  profile: "",
  refresh: "",
  replymail: "",
  "report-problem": "",
  "row-left-arrow": "",
  "row-right-arrow": "",
  search: "",
  sendmail: "",
  setting: "",
  settings: "",
  share: "",
  "sort-down": "",
  "square-add-button": "",
  "square-delete-button": "",
  "star-full": "",
  "star-half": "",
  stock: "",
  stop: "",
  "storage-box": "",
  "stylish-plus": "",
  "surprised-bell": "",
  tag: "",
  "task-check": "",
  "thumbs-down": "",
  "thumbs-up": "",
  tray: "",
  trush: "",
  unopened: "",
  view: "",
  balloon: "",
  lightbulb: "",
  sword: "",
  crown: "",
  sparkle: "",
  activity: "",
  interest: "",
  remote: "",
  "upload-document": ""
}, nr = E({
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup() {
    return {
      iconMap: or
    };
  }
});
function ar(e, t, r, n, o, a) {
  return p(), m("i", M(e.$attrs, { class: "icon" }), ne(e.iconMap[e.name]), 17);
}
const ve = /* @__PURE__ */ S(nr, [["render", ar], ["__scopeId", "data-v-d54d8182"]]), ir = E({
  inheritAttrs: !1,
  components: {
    Icon: ve
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": null
  },
  setup(e, t) {
    const r = (o) => t.emit("update:modelValue", o);
    return {
      onInput: (o) => {
        r(o.target.checked);
      }
    };
  }
}), sr = ["checked", "disabled"], lr = { class: "icon-wrap" };
function ur(e, t, r, n, o, a) {
  const s = Be("Icon");
  return p(), m("label", {
    class: X(["check-box", { "is-disabled": e.disabled }])
  }, [
    c("input", M(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "input",
      type: "checkbox"
    }), null, 16, sr),
    c("div", lr, [
      Ye(s, { name: "check" })
    ])
  ], 2);
}
const Tn = /* @__PURE__ */ S(ir, [["render", ur], ["__scopeId", "data-v-76efe8b1"]]), dr = E({
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}), pr = { class: "icon-wrap" };
function cr(e, t, r, n, o, a) {
  return p(), ue(Bt(e.tag), M(e.$attrs, { class: "enhanced-icon" }), {
    default: Ve(() => [
      t[0] || (t[0] = c("svg", {
        class: "svg",
        viewBox: "0 0 40 40"
      }, [
        c("defs", null, [
          c("circle", {
            id: "path1",
            cx: "20",
            cy: "20",
            r: "20"
          }),
          c("mask", {
            id: "mask-2",
            maskContentUnits: "userSpaceOnUse",
            maskUnits: "objectBoundingBox",
            x: "0",
            y: "0",
            width: "40",
            height: "40",
            fill: "white"
          }, [
            c("use", { "xlink:href": "#path1" })
          ])
        ]),
        c("g", {
          id: "Artboard",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, [
          c("g", { id: "svg" }, [
            c("use", {
              id: "Oval",
              stroke: "#012F89",
              mask: "url(#mask-2)",
              "stroke-width": "2",
              "stroke-dasharray": "2.2,2.2",
              "xlink:href": "#path1"
            }),
            c("path", {
              class: "inner-circle",
              d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z",
              id: "Oval",
              fill: "#012F89"
            })
          ])
        ])
      ], -1)),
      c("p", pr, [
        x(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 16);
}
const Pn = /* @__PURE__ */ S(dr, [["render", cr], ["__scopeId", "data-v-55c59436"]]), fr = E({
  inheritAttrs: !1,
  props: {
    label: {
      type: String,
      default: ""
    },
    subLabel: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: null
    }
  }
}), vr = {
  key: 0,
  class: "label-line"
}, mr = { class: "label" }, hr = { key: 0 }, gr = { class: "field-wrap" }, yr = {
  key: 1,
  class: "error-message"
}, br = { class: "note" };
function wr(e, t, r, n, o, a) {
  return p(), m("div", M(e.$attrs, { class: "field-group" }), [
    e.label ? (p(), m("div", vr, [
      c("p", mr, [
        qt(ne(e.label), 1),
        e.subLabel ? (p(), m("small", hr, ne(e.subLabel), 1)) : R("", !0)
      ]),
      e.required !== null ? (p(), m("p", {
        key: 0,
        class: X(["required-badge", { "is-required": e.required }])
      }, ne(e.required ? "必須" : "任意"), 3)) : R("", !0)
    ])) : R("", !0),
    c("div", gr, [
      x(e.$slots, "default", {}, void 0, !0)
    ]),
    e.errorMessage ? (p(), m("p", yr, ne(e.errorMessage), 1)) : R("", !0),
    c("div", br, [
      x(e.$slots, "note", {}, void 0, !0)
    ])
  ], 16);
}
const xn = /* @__PURE__ */ S(fr, [["render", wr], ["__scopeId", "data-v-3b2fbddf"]]), $r = E({
  inheritAttrs: !1,
  components: {
    Icon: ve
  },
  props: {
    skin: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "m"
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    enhanced: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "button"
    }
  }
}), kr = {
  key: 0,
  class: "icon-wrap is-left"
}, Or = { class: "body" }, Br = {
  key: 1,
  class: "icon-wrap is-right"
};
function Ar(e, t, r, n, o, a) {
  return p(), ue(Bt(e.tag), M(e.$attrs, {
    class: [[`skin-${e.skin}`, `size-${e.size}`, e.enhanced && "is-enhanced"], "flat-button"],
    disabled: e.disabled || void 0
  }), {
    default: Ve(() => [
      e.$slots.leftIcon ? (p(), m("div", kr, [
        x(e.$slots, "leftIcon", {}, void 0, !0)
      ])) : R("", !0),
      c("div", Or, [
        x(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.rightIcon ? (p(), m("div", Br, [
        x(e.$slots, "rightIcon", {}, void 0, !0)
      ])) : R("", !0)
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
const Ln = /* @__PURE__ */ S($r, [["render", Ar], ["__scopeId", "data-v-ef3a5852"]]), ct = (e) => {
  if (e && !(e.includes(":") && !e.match(/^https?:\/\//i)))
    return e;
}, Cr = E({
  // root属性によるcomputedのオーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: !1,
  props: {
    href: {
      type: String,
      validator(e) {
        return !!ct(e);
      }
    },
    force: {
      type: Boolean,
      default: !1
    },
    target: {
      type: String
    },
    rel: {
      type: String
    }
  },
  setup(e) {
    const t = Ne(() => e.force ? e.href : ct(e.href)), r = Ne(() => e.target === "_blank" ? `noopener ${e.rel || ""}`.replace(/\s$/, "") : e.rel);
    return {
      escapedHref: t,
      formattedRel: r
    };
  }
}), Ir = ["href", "rel", "target"];
function Er(e, t, r, n, o, a) {
  return p(), m("a", M(e.$attrs, {
    href: e.escapedHref,
    rel: e.formattedRel,
    target: e.target
  }), [
    x(e.$slots, "default")
  ], 16, Ir);
}
const Rn = /* @__PURE__ */ S(Cr, [["render", Er]]);
function Sr(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  } else
    return Array.from(e);
}
var Xe = !1;
if (typeof window < "u") {
  var ft = {
    get passive() {
      Xe = !0;
    }
  };
  window.addEventListener("testPassive", null, ft), window.removeEventListener("testPassive", null, ft);
}
var Et = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), le = [], Le = !1, Ge = -1, ye = void 0, be = void 0, St = function(t) {
  return le.some(function(r) {
    return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
  });
}, Re = function(t) {
  var r = t || window.event;
  return St(r.target) || r.touches.length > 1 ? !0 : (r.preventDefault && r.preventDefault(), !1);
}, Dr = function(t) {
  if (be === void 0) {
    var r = !1, n = window.innerWidth - document.documentElement.clientWidth;
    r && n > 0 && (be = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
  }
  ye === void 0 && (ye = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Tr = function() {
  be !== void 0 && (document.body.style.paddingRight = be, be = void 0), ye !== void 0 && (document.body.style.overflow = ye, ye = void 0);
}, Pr = function(t) {
  return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
}, xr = function(t, r) {
  var n = t.targetTouches[0].clientY - Ge;
  return St(t.target) ? !1 : r && r.scrollTop === 0 && n > 0 || Pr(r) && n < 0 ? Re(t) : (t.stopPropagation(), !0);
}, Lr = function(t, r) {
  if (!t) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!le.some(function(o) {
    return o.targetElement === t;
  })) {
    var n = {
      targetElement: t,
      options: {}
    };
    le = [].concat(Sr(le), [n]), Et ? (t.ontouchstart = function(o) {
      o.targetTouches.length === 1 && (Ge = o.targetTouches[0].clientY);
    }, t.ontouchmove = function(o) {
      o.targetTouches.length === 1 && xr(o, t);
    }, Le || (document.addEventListener("touchmove", Re, Xe ? { passive: !1 } : void 0), Le = !0)) : Dr();
  }
}, vt = function() {
  Et ? (le.forEach(function(t) {
    t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null;
  }), Le && (document.removeEventListener("touchmove", Re, Xe ? { passive: !1 } : void 0), Le = !1), Ge = -1) : Tr(), le = [];
};
const Rr = E({
  components: {
    Icon: ve
  },
  props: {
    filterBackground: {
      type: String,
      default: "rgba(0, 48, 137, 0.14)"
    },
    hasClose: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !0
    },
    panel: {
      type: Boolean,
      default: !0
    },
    gutter: {
      type: Number,
      default: 20
    },
    zIndex: {
      type: Number,
      default: 10
    },
    closeOnClickOutside: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    close: null
  },
  watch: {
    visible: {
      immediate: !0,
      handler(e) {
        const t = document.body;
        if (e)
          return Lr(t);
        vt();
      }
    }
  },
  beforeUnmount() {
    vt();
  }
}), _r = { class: "modal-body" };
function Vr(e, t, r, n, o, a) {
  const s = Be("Icon");
  return p(), ue(At, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (p(), m("div", {
        key: 0,
        class: "modal",
        role: "dialog",
        "aria-modal": "",
        style: U({ zIndex: e.zIndex })
      }, [
        c("div", {
          class: "filter",
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close")),
          style: U({ background: e.filterBackground })
        }, null, 4),
        c("div", {
          class: "modal-container",
          style: U({ margin: `${e.gutter}px` })
        }, [
          c("div", _r, [
            e.hasClose ? (p(), m("div", {
              key: 0,
              class: "close-wrap",
              onClick: t[2] || (t[2] = (i) => e.$emit("close"))
            }, [
              c("button", {
                type: "button",
                class: "close",
                "aria-label": "閉じる",
                onClick: t[1] || (t[1] = Ut((i) => e.$emit("close"), ["stop"]))
              }, [
                Ye(s, { name: "close" })
              ])
            ])) : R("", !0),
            c("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              x(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 4)) : R("", !0)
    ]),
    _: 3
  });
}
const _n = /* @__PURE__ */ S(Rr, [["render", Vr], ["__scopeId", "data-v-945d841a"]]), Mr = E({
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": null
  },
  setup(e, t) {
    const r = (o) => {
      o && t.emit("update:modelValue", !0);
    };
    return {
      onInput: (o) => r(o.target.checked)
    };
  }
}), jr = ["checked", "disabled"];
function Hr(e, t, r, n, o, a) {
  return p(), m("label", {
    class: X(["radio", { "is-disabled": e.disabled }])
  }, [
    c("input", M(e.$attrs, {
      checked: e.modelValue,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "input",
      type: "radio",
      disabled: e.disabled
    }), null, 16, jr),
    t[1] || (t[1] = c("div", { class: "dot" }, null, -1))
  ], 2);
}
const Vn = /* @__PURE__ */ S(Mr, [["render", Hr], ["__scopeId", "data-v-2b146e1a"]]), Wr = E({
  inheritAttrs: !1,
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    barColor: {
      type: String,
      default: "linear-gradient(90deg, #171c60 0%, #009ee8 100%)"
    },
    highThreshold: {
      type: Number,
      default: 1 / 0
    },
    highBarColor: {
      type: String,
      default: "#ff5a5f"
    }
  }
});
function Fr(e, t, r, n, o, a) {
  return p(), m("div", M(e.$attrs, { class: "score-bar" }), [
    c("div", {
      class: "inner",
      style: U({
        width: `${e.value / e.max * 100}%`,
        background: e.value >= e.highThreshold ? e.highBarColor : e.barColor
      })
    }, null, 4)
  ], 16);
}
const Mn = /* @__PURE__ */ S(Wr, [["render", Fr], ["__scopeId", "data-v-80af665b"]]), Nr = E({
  components: {
    Icon: ve
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: {
    "update:modelValue": null
  },
  setup(e, t) {
    const r = (o) => t.emit("update:modelValue", o);
    return {
      context: t,
      onInput: (o) => r(o.target.value)
    };
  }
}), zr = { class: "select-box" }, qr = ["value"], Ur = ["value"], Yr = { class: "icon-wrap" };
function Xr(e, t, r, n, o, a) {
  const s = Be("Icon");
  return p(), m("div", zr, [
    c("select", {
      class: "select",
      value: e.modelValue,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i))
    }, [
      e.placeholder ? Yt((p(), m("option", {
        key: 0,
        value: ""
      }, ne(e.placeholder), 513)), [
        [Xt, !1]
      ]) : R("", !0),
      (p(!0), m(Ct, null, It(e.options, (i) => (p(), m("option", {
        value: i.value,
        key: i.value
      }, ne(i.label), 9, Ur))), 128))
    ], 40, qr),
    c("div", Yr, [
      Ye(s, { name: "arrow-down" })
    ])
  ]);
}
const jn = /* @__PURE__ */ S(Nr, [["render", Xr], ["__scopeId", "data-v-d6a6e489"]]), Gr = E({
  components: {
    Icon: ve
  },
  props: {
    filterBackground: {
      type: String,
      default: "rgba(0, 48, 137, 0.14)"
    },
    hasClose: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !0
    },
    panel: {
      type: Boolean,
      default: !0
    },
    gutter: {
      type: Number,
      default: 20
    },
    zIndex: {
      type: Number,
      default: 10
    },
    // バツボタンをダイアログの外に表示するか否か
    // 基本的に SCOUT は true、LAPRAS は false
    outerClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickOutside: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    close: null
  }
}), Zr = {
  key: 0,
  class: "modal",
  ref: "modal"
}, Jr = { class: "modal-body" }, Kr = {
  key: 1,
  class: "icon-cancel"
};
function Qr(e, t, r, n, o, a) {
  const s = Be("Icon");
  return p(), ue(At, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (p(), m("div", Zr, [
        c("div", {
          class: "modal-overlay",
          style: U({
            background: e.filterBackground,
            zIndex: e.zIndex
          }),
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close"))
        }, null, 4),
        c("div", {
          class: "modal-container",
          style: U({
            padding: `${e.gutter}px`,
            zIndex: e.zIndex
          })
        }, [
          c("div", Jr, [
            c("div", {
              class: X(["close-wrap", { "outer-close": e.outerClose }])
            }, [
              e.hasClose ? (p(), m("p", {
                key: 0,
                class: "close",
                onClick: t[1] || (t[1] = (i) => e.$emit("close"))
              }, [
                e.outerClose ? (p(), ue(s, {
                  key: 0,
                  name: "close",
                  alt: "閉じる"
                })) : (p(), m("i", Kr))
              ])) : R("", !0)
            ], 2),
            c("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              x(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 512)) : R("", !0)
    ]),
    _: 3
  });
}
const Hn = /* @__PURE__ */ S(Gr, [["render", Qr], ["__scopeId", "data-v-a2b6f65d"]]), eo = E({
  inheritAttrs: !1,
  props: {
    background: {
      type: String,
      default: "#EAEAEA"
    },
    color: {
      type: String,
      default: "#7F7F7F"
    }
  }
}), to = {
  key: 0,
  class: "sub"
};
function ro(e, t, r, n, o, a) {
  return p(), m("div", M(e.$attrs, {
    style: { background: e.background, color: e.color },
    class: "tag-label"
  }), [
    e.$slots.subLabel ? (p(), m("p", to, [
      x(e.$slots, "subLabel", {}, void 0, !0)
    ])) : R("", !0),
    c("p", {
      class: X(["main", { "has-sub-label": e.$slots.subLabel }])
    }, [
      x(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ], 16);
}
const Wn = /* @__PURE__ */ S(eo, [["render", ro], ["__scopeId", "data-v-b80e4e79"]]), oo = E({
  inheritAttrs: !1,
  props: {
    multiline: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    autoExpand: {
      type: Boolean,
      default: !1
    },
    baseTextareaHeight: {
      type: Number,
      default: 56
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": null,
    blur: null,
    focus: null
  },
  setup(e, t) {
    const r = ze(null), n = () => {
      r.value && e.autoExpand && (r.value.style.height = "", r.value.style.height = `${Math.max(
        r.value.scrollHeight,
        e.baseTextareaHeight
      )}px`);
    }, o = (s) => {
      t.emit("update:modelValue", s.target.value);
    }, { modelValue: a } = Gt(e);
    return Zt(
      a,
      async () => {
        await Jt(), n();
      },
      { immediate: !0 }
    ), {
      textarea: r,
      onInput: o
    };
  }
}), no = ["value", "disabled"], ao = ["value", "disabled", "type"];
function io(e, t, r, n, o, a) {
  return e.multiline ? (p(), m("textarea", M({ key: 0 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-multi-line", { "has-error": e.error }],
    disabled: e.disabled,
    onInput: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[1] || (t[1] = (s) => e.$emit("focus")),
    onBlur: t[2] || (t[2] = (s) => e.$emit("blur")),
    ref: "textarea"
  }), null, 16, no)) : (p(), m("input", M({ key: 1 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-single-line", { "has-error": e.error }],
    disabled: e.disabled,
    type: e.type,
    onInput: t[3] || (t[3] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[4] || (t[4] = (s) => e.$emit("focus")),
    onBlur: t[5] || (t[5] = (s) => e.$emit("blur"))
  }), null, 16, ao));
}
const Fn = /* @__PURE__ */ S(oo, [["render", io], ["__scopeId", "data-v-f84d50db"]]), so = E({
  props: {
    isActive: {
      type: Boolean,
      default: !1
    },
    isButton: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    isFlipped: {
      type: Boolean,
      default: !1
    }
  }
}), lo = { class: "toggle" }, uo = { class: "label" };
function po(e, t, r, n, o, a) {
  return p(), m("label", {
    class: X(["toggle-label-set", {
      "is-active": e.isActive,
      "is-button": e.isButton,
      "is-disabled": e.disabled,
      "is-flipped": e.isFlipped
    }])
  }, [
    c("div", lo, [
      x(e.$slots, "toggle", {}, void 0, !0)
    ]),
    c("div", uo, [
      x(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Nn = /* @__PURE__ */ S(so, [["render", po], ["__scopeId", "data-v-29bfced2"]]), co = E({
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {
    "update:modelValue": null
  },
  setup(e, t) {
    const r = (o) => t.emit("update:modelValue", o);
    return {
      onInput: (o) => r(o.target.checked)
    };
  }
}), fo = { class: "toggle-switch" }, vo = ["checked", "disabled"];
function mo(e, t, r, n, o, a) {
  return p(), m("label", fo, [
    c("input", M(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled || void 0,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "checkbox",
      type: "checkbox"
    }), null, 16, vo),
    c("div", {
      class: X(["switch-base", { "is-disabled": e.disabled }])
    }, [...t[1] || (t[1] = [
      c("div", { class: "toggle" }, null, -1)
    ])], 2)
  ]);
}
const zn = /* @__PURE__ */ S(co, [["render", mo], ["__scopeId", "data-v-36bffd3f"]]);
var _ = "top", F = "bottom", N = "right", V = "left", Ze = "auto", Ae = [_, F, N, V], de = "start", ke = "end", ho = "clippingParents", Dt = "viewport", ge = "popper", go = "reference", mt = /* @__PURE__ */ Ae.reduce(function(e, t) {
  return e.concat([t + "-" + de, t + "-" + ke]);
}, []), Tt = /* @__PURE__ */ [].concat(Ae, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + de, t + "-" + ke]);
}, []), yo = "beforeRead", bo = "read", wo = "afterRead", $o = "beforeMain", ko = "main", Oo = "afterMain", Bo = "beforeWrite", Ao = "write", Co = "afterWrite", Io = [yo, bo, wo, $o, ko, Oo, Bo, Ao, Co];
function G(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function H(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ie(e) {
  var t = H(e).Element;
  return e instanceof t || e instanceof Element;
}
function W(e) {
  var t = H(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Je(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = H(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Eo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !W(a) || !G(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function So(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !W(o) || !G(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Do = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Eo,
  effect: So,
  requires: ["computeStyles"]
};
function Y(e) {
  return e.split("-")[0];
}
var ae = Math.max, _e = Math.min, pe = Math.round;
function qe() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pt() {
  return !/^((?!chrome|android).)*safari/i.test(qe());
}
function ce(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && W(e) && (o = e.offsetWidth > 0 && pe(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && pe(n.height) / e.offsetHeight || 1);
  var s = ie(e) ? H(e) : window, i = s.visualViewport, l = !Pt() && r, d = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, y = n.width / o, $ = n.height / a;
  return {
    width: y,
    height: $,
    top: u,
    right: d + y,
    bottom: u + $,
    left: d,
    x: d,
    y: u
  };
}
function Ke(e) {
  var t = ce(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function xt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Je(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Z(e) {
  return H(e).getComputedStyle(e);
}
function To(e) {
  return ["table", "td", "th"].indexOf(G(e)) >= 0;
}
function K(e) {
  return ((ie(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Me(e) {
  return G(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Je(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    K(e)
  );
}
function ht(e) {
  return !W(e) || // https://github.com/popperjs/popper-core/issues/837
  Z(e).position === "fixed" ? null : e.offsetParent;
}
function Po(e) {
  var t = /firefox/i.test(qe()), r = /Trident/i.test(qe());
  if (r && W(e)) {
    var n = Z(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Me(e);
  for (Je(o) && (o = o.host); W(o) && ["html", "body"].indexOf(G(o)) < 0; ) {
    var a = Z(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ce(e) {
  for (var t = H(e), r = ht(e); r && To(r) && Z(r).position === "static"; )
    r = ht(r);
  return r && (G(r) === "html" || G(r) === "body" && Z(r).position === "static") ? t : r || Po(e) || t;
}
function Qe(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, r) {
  return ae(e, _e(t, r));
}
function xo(e, t, r) {
  var n = we(e, t, r);
  return n > r ? r : n;
}
function Lt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rt(e) {
  return Object.assign({}, Lt(), e);
}
function _t(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Lo = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Rt(typeof t != "number" ? t : _t(t, Ae));
};
function Ro(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Y(r.placement), l = Qe(i), d = [V, N].indexOf(i) >= 0, u = d ? "height" : "width";
  if (!(!a || !s)) {
    var y = Lo(o.padding, r), $ = Ke(a), f = l === "y" ? _ : V, O = l === "y" ? F : N, g = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], h = s[l] - r.rects.reference[l], k = Ce(a), A = k ? l === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, C = g / 2 - h / 2, v = y[f], b = A - $[u] - y[O], w = A / 2 - $[u] / 2 + C, B = we(v, w, b), T = l;
    r.modifiersData[n] = (t = {}, t[T] = B, t.centerOffset = B - w, t);
  }
}
function _o(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xt(t.elements.popper, o) && (t.elements.arrow = o));
}
const Vo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ro,
  effect: _o,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function fe(e) {
  return e.split("-")[1];
}
var Mo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jo(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: pe(r * o) / o || 0,
    y: pe(n * o) / o || 0
  };
}
function gt(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, y = e.isFixed, $ = s.x, f = $ === void 0 ? 0 : $, O = s.y, g = O === void 0 ? 0 : O, h = typeof u == "function" ? u({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = h.x, g = h.y;
  var k = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), C = V, v = _, b = window;
  if (d) {
    var w = Ce(r), B = "clientHeight", T = "clientWidth";
    if (w === H(r) && (w = K(r), Z(w).position !== "static" && i === "absolute" && (B = "scrollHeight", T = "scrollWidth")), w = w, o === _ || (o === V || o === N) && a === ke) {
      v = F;
      var D = y && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[B]
      );
      g -= D - n.height, g *= l ? 1 : -1;
    }
    if (o === V || (o === _ || o === F) && a === ke) {
      C = N;
      var I = y && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[T]
      );
      f -= I - n.width, f *= l ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: i
  }, d && Mo), z = u === !0 ? jo({
    x: f,
    y: g
  }, H(r)) : {
    x: f,
    y: g
  };
  if (f = z.x, g = z.y, l) {
    var L;
    return Object.assign({}, P, (L = {}, L[v] = A ? "0" : "", L[C] = k ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, P, (t = {}, t[v] = A ? g + "px" : "", t[C] = k ? f + "px" : "", t.transform = "", t));
}
function Ho(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, d = {
    placement: Y(t.placement),
    variation: fe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gt(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gt(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Wo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ho,
  data: {}
};
var Pe = {
  passive: !0
};
function Fo(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = H(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Pe);
  }), i && l.addEventListener("resize", r.update, Pe), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Pe);
    }), i && l.removeEventListener("resize", r.update, Pe);
  };
}
const No = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fo,
  data: {}
};
var zo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zo[t];
  });
}
var qo = {
  start: "end",
  end: "start"
};
function yt(e) {
  return e.replace(/start|end/g, function(t) {
    return qo[t];
  });
}
function et(e) {
  var t = H(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function tt(e) {
  return ce(K(e)).left + et(e).scrollLeft;
}
function Uo(e, t) {
  var r = H(e), n = K(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var d = Pt();
    (d || !d && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + tt(e),
    y: l
  };
}
function Yo(e) {
  var t, r = K(e), n = et(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ae(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = ae(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + tt(e), l = -n.scrollTop;
  return Z(o || r).direction === "rtl" && (i += ae(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function rt(e) {
  var t = Z(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Vt(e) {
  return ["html", "body", "#document"].indexOf(G(e)) >= 0 ? e.ownerDocument.body : W(e) && rt(e) ? e : Vt(Me(e));
}
function $e(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Vt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = H(n), s = o ? [a].concat(a.visualViewport || [], rt(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat($e(Me(s)))
  );
}
function Ue(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Xo(e, t) {
  var r = ce(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function bt(e, t, r) {
  return t === Dt ? Ue(Uo(e, r)) : ie(t) ? Xo(t, r) : Ue(Yo(K(e)));
}
function Go(e) {
  var t = $e(Me(e)), r = ["absolute", "fixed"].indexOf(Z(e).position) >= 0, n = r && W(e) ? Ce(e) : e;
  return ie(n) ? t.filter(function(o) {
    return ie(o) && xt(o, n) && G(o) !== "body";
  }) : [];
}
function Zo(e, t, r, n) {
  var o = t === "clippingParents" ? Go(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, d) {
    var u = bt(e, d, n);
    return l.top = ae(u.top, l.top), l.right = _e(u.right, l.right), l.bottom = _e(u.bottom, l.bottom), l.left = ae(u.left, l.left), l;
  }, bt(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Mt(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Y(n) : null, a = n ? fe(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case _:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case F:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case N:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case V:
      l = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? Qe(o) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case de:
        l[d] = l[d] - (t[u] / 2 - r[u] / 2);
        break;
      case ke:
        l[d] = l[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Oe(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? ho : i, d = r.rootBoundary, u = d === void 0 ? Dt : d, y = r.elementContext, $ = y === void 0 ? ge : y, f = r.altBoundary, O = f === void 0 ? !1 : f, g = r.padding, h = g === void 0 ? 0 : g, k = Rt(typeof h != "number" ? h : _t(h, Ae)), A = $ === ge ? go : ge, C = e.rects.popper, v = e.elements[O ? A : $], b = Zo(ie(v) ? v : v.contextElement || K(e.elements.popper), l, u, s), w = ce(e.elements.reference), B = Mt({
    reference: w,
    element: C,
    placement: o
  }), T = Ue(Object.assign({}, C, B)), D = $ === ge ? T : w, I = {
    top: b.top - D.top + k.top,
    bottom: D.bottom - b.bottom + k.bottom,
    left: b.left - D.left + k.left,
    right: D.right - b.right + k.right
  }, P = e.modifiersData.offset;
  if ($ === ge && P) {
    var z = P[o];
    Object.keys(I).forEach(function(L) {
      var Q = [N, F].indexOf(L) >= 0 ? 1 : -1, ee = [_, F].indexOf(L) >= 0 ? "y" : "x";
      I[L] += z[ee] * Q;
    });
  }
  return I;
}
function Jo(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Tt : l, u = fe(n), y = u ? i ? mt : mt.filter(function(O) {
    return fe(O) === u;
  }) : Ae, $ = y.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  $.length === 0 && ($ = y);
  var f = $.reduce(function(O, g) {
    return O[g] = Oe(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Y(g)], O;
  }, {});
  return Object.keys(f).sort(function(O, g) {
    return f[O] - f[g];
  });
}
function Ko(e) {
  if (Y(e) === Ze)
    return [];
  var t = xe(e);
  return [yt(e), t, yt(t)];
}
function Qo(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, d = r.padding, u = r.boundary, y = r.rootBoundary, $ = r.altBoundary, f = r.flipVariations, O = f === void 0 ? !0 : f, g = r.allowedAutoPlacements, h = t.options.placement, k = Y(h), A = k === h, C = l || (A || !O ? [xe(h)] : Ko(h)), v = [h].concat(C).reduce(function(se, J) {
      return se.concat(Y(J) === Ze ? Jo(t, {
        placement: J,
        boundary: u,
        rootBoundary: y,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: g
      }) : J);
    }, []), b = t.rects.reference, w = t.rects.popper, B = /* @__PURE__ */ new Map(), T = !0, D = v[0], I = 0; I < v.length; I++) {
      var P = v[I], z = Y(P), L = fe(P) === de, Q = [_, F].indexOf(z) >= 0, ee = Q ? "width" : "height", j = Oe(t, {
        placement: P,
        boundary: u,
        rootBoundary: y,
        altBoundary: $,
        padding: d
      }), q = Q ? L ? N : V : L ? F : _;
      b[ee] > w[ee] && (q = xe(q));
      var Ie = xe(q), te = [];
      if (a && te.push(j[z] <= 0), i && te.push(j[q] <= 0, j[Ie] <= 0), te.every(function(se) {
        return se;
      })) {
        D = P, T = !1;
        break;
      }
      B.set(P, te);
    }
    if (T)
      for (var Ee = O ? 3 : 1, je = function(J) {
        var he = v.find(function(De) {
          var re = B.get(De);
          if (re)
            return re.slice(0, J).every(function(He) {
              return He;
            });
        });
        if (he)
          return D = he, "break";
      }, me = Ee; me > 0; me--) {
        var Se = je(me);
        if (Se === "break") break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const en = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Qo,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wt(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function $t(e) {
  return [_, N, F, V].some(function(t) {
    return e[t] >= 0;
  });
}
function tn(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Oe(t, {
    elementContext: "reference"
  }), i = Oe(t, {
    altBoundary: !0
  }), l = wt(s, n), d = wt(i, o, a), u = $t(l), y = $t(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: u,
    hasPopperEscaped: y
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": y
  });
}
const rn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tn
};
function on(e, t, r) {
  var n = Y(e), o = [V, _].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [V, N].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function nn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = Tt.reduce(function(u, y) {
    return u[y] = on(y, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, d = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = s;
}
const an = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: nn
};
function sn(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Mt({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ln = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sn,
  data: {}
};
function un(e) {
  return e === "x" ? "y" : "x";
}
function dn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, y = r.padding, $ = r.tether, f = $ === void 0 ? !0 : $, O = r.tetherOffset, g = O === void 0 ? 0 : O, h = Oe(t, {
    boundary: l,
    rootBoundary: d,
    padding: y,
    altBoundary: u
  }), k = Y(t.placement), A = fe(t.placement), C = !A, v = Qe(k), b = un(v), w = t.modifiersData.popperOffsets, B = t.rects.reference, T = t.rects.popper, D = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, I = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var L, Q = v === "y" ? _ : V, ee = v === "y" ? F : N, j = v === "y" ? "height" : "width", q = w[v], Ie = q + h[Q], te = q - h[ee], Ee = f ? -T[j] / 2 : 0, je = A === de ? B[j] : T[j], me = A === de ? -T[j] : -B[j], Se = t.elements.arrow, se = f && Se ? Ke(Se) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Lt(), he = J[Q], De = J[ee], re = we(0, B[j], se[j]), He = C ? B[j] / 2 - Ee - re - he - I.mainAxis : je - re - he - I.mainAxis, jt = C ? -B[j] / 2 + Ee + re + De + I.mainAxis : me + re + De + I.mainAxis, We = t.elements.arrow && Ce(t.elements.arrow), Ht = We ? v === "y" ? We.clientTop || 0 : We.clientLeft || 0 : 0, ot = (L = P == null ? void 0 : P[v]) != null ? L : 0, Wt = q + He - ot - Ht, Ft = q + jt - ot, nt = we(f ? _e(Ie, Wt) : Ie, q, f ? ae(te, Ft) : te);
      w[v] = nt, z[v] = nt - q;
    }
    if (i) {
      var at, Nt = v === "x" ? _ : V, zt = v === "x" ? F : N, oe = w[b], Te = b === "y" ? "height" : "width", it = oe + h[Nt], st = oe - h[zt], Fe = [_, V].indexOf(k) !== -1, lt = (at = P == null ? void 0 : P[b]) != null ? at : 0, ut = Fe ? it : oe - B[Te] - T[Te] - lt + I.altAxis, dt = Fe ? oe + B[Te] + T[Te] - lt - I.altAxis : st, pt = f && Fe ? xo(ut, oe, dt) : we(f ? ut : it, oe, f ? dt : st);
      w[b] = pt, z[b] = pt - oe;
    }
    t.modifiersData[n] = z;
  }
}
const pn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dn,
  requiresIfExists: ["offset"]
};
function cn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function fn(e) {
  return e === H(e) || !W(e) ? et(e) : cn(e);
}
function vn(e) {
  var t = e.getBoundingClientRect(), r = pe(t.width) / e.offsetWidth || 1, n = pe(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function mn(e, t, r) {
  r === void 0 && (r = !1);
  var n = W(t), o = W(t) && vn(t), a = K(t), s = ce(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((G(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rt(a)) && (i = fn(t)), W(t) ? (l = ce(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = tt(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function hn(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function gn(e) {
  var t = hn(e);
  return Io.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function yn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function bn(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var kt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ot() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function wn(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? kt : o;
  return function(i, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kt, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, y = [], $ = !1, f = {
      state: u,
      setOptions: function(k) {
        var A = typeof k == "function" ? k(u.options) : k;
        g(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = {
          reference: ie(i) ? $e(i) : i.contextElement ? $e(i.contextElement) : [],
          popper: $e(l)
        };
        var C = gn(bn([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(v) {
          return v.enabled;
        }), O(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!$) {
          var k = u.elements, A = k.reference, C = k.popper;
          if (Ot(A, C)) {
            u.rects = {
              reference: mn(A, Ce(C), u.options.strategy === "fixed"),
              popper: Ke(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
              return u.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var b = u.orderedModifiers[v], w = b.fn, B = b.options, T = B === void 0 ? {} : B, D = b.name;
              typeof w == "function" && (u = w({
                state: u,
                options: T,
                name: D,
                instance: f
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: yn(function() {
        return new Promise(function(h) {
          f.forceUpdate(), h(u);
        });
      }),
      destroy: function() {
        g(), $ = !0;
      }
    };
    if (!Ot(i, l))
      return f;
    f.setOptions(d).then(function(h) {
      !$ && d.onFirstUpdate && d.onFirstUpdate(h);
    });
    function O() {
      u.orderedModifiers.forEach(function(h) {
        var k = h.name, A = h.options, C = A === void 0 ? {} : A, v = h.effect;
        if (typeof v == "function") {
          var b = v({
            state: u,
            name: k,
            instance: f,
            options: C
          }), w = function() {
          };
          y.push(b || w);
        }
      });
    }
    function g() {
      y.forEach(function(h) {
        return h();
      }), y = [];
    }
    return f;
  };
}
var $n = [No, ln, Wo, Do, an, en, pn, Vo, rn], kn = /* @__PURE__ */ wn({
  defaultModifiers: $n
});
const On = E({
  components: {
    Icon: ve
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    skeleton: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: Number,
      default: 320
    }
  },
  setup(e) {
    const t = ze(null), r = ze(null);
    let n;
    return { hoverEvent: () => {
      !t.value || !r.value || (n && n.destroy(), n = kn(t.value, r.value, {
        placement: "top",
        ...e.options
      }));
    }, trigger: t, container: r };
  }
}), Bn = { class: "tooltip" }, An = {
  class: "container",
  ref: "container"
};
function Cn(e, t, r, n, o, a) {
  const s = Be("Icon");
  return p(), m("span", Bn, [
    c("span", {
      class: "trigger",
      ref: "trigger",
      onMouseenter: t[0] || (t[0] = (...i) => e.hoverEvent && e.hoverEvent(...i))
    }, [
      x(e.$slots, "trigger", {}, void 0, !0),
      e.$slots.trigger ? R("", !0) : (p(), ue(s, {
        key: 0,
        name: "info"
      }))
    ], 544),
    c("div", An, [
      c("div", {
        class: X(["body", { "has-skin": !e.skeleton }]),
        style: U({
          maxWidth: `${e.maxWidth}px`
        })
      }, [
        x(e.$slots, "default", {}, void 0, !0)
      ], 6)
    ], 512)
  ]);
}
const qn = /* @__PURE__ */ S(On, [["render", Cn], ["__scopeId", "data-v-e8caa5d7"]]), In = /* @__PURE__ */ E({
  name: "ContentLoader",
  __name: "ContentLoader",
  props: {
    type: { default: "PARAGRAPH" },
    lineCount: { default: 5 },
    lineHeight: { default: 1 },
    randomLineWidth: { type: Boolean, default: !0 },
    gap: { default: 0.8 }
  },
  setup(e) {
    const t = e, r = Ne(() => Array.from({ length: t.lineCount }, (n, o) => ({
      id: o,
      maxWidth: t.randomLineWidth ? 50 + Math.random() * 50 : 100
    })));
    return (n, o) => (p(), m("div", {
      class: "content-loader",
      style: U({
        gap: `${n.gap}em`
      })
    }, [
      (p(!0), m(Ct, null, It(r.value, (a) => (p(), m("div", {
        class: "loader-group",
        key: a.id,
        style: U({
          gap: `${n.lineHeight / 2.5}em`
        })
      }, [
        ["CIRCLE", "BULLET_LIST"].includes(n.type) ? (p(), m("div", {
          key: 0,
          class: "circle",
          style: U({
            width: `${n.lineHeight}em`,
            height: `${n.lineHeight}em`
          })
        }, null, 4)) : R("", !0),
        ["PARAGRAPH", "BULLET_LIST"].includes(n.type) ? (p(), m("div", {
          key: 1,
          class: "line",
          style: U({
            maxWidth: `${a.maxWidth}%`,
            height: `${n.lineHeight}em`
          })
        }, null, 4)) : R("", !0)
      ], 4))), 128))
    ], 4));
  }
}), Un = /* @__PURE__ */ S(In, [["__scopeId", "data-v-3620d5a4"]]);
export {
  Sn as AvatarImg,
  Dn as Card,
  Tn as CheckBox,
  Un as ContentLoader,
  Pn as EnhancedIconButton,
  xn as FieldGroup,
  Ln as FlatButton,
  ve as Icon,
  _n as Modal,
  Rn as ProtectedLink,
  Vn as Radio,
  Mn as RatingBar,
  jn as SelectBox,
  Hn as ShortModal,
  Wn as TagLabel,
  Fn as TextInput,
  Nn as ToggleLabelSet,
  zn as ToggleSwitch,
  qn as Tooltip
};
