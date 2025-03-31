import { defineComponent as E, openBlock as c, createElementBlock as h, mergeProps as M, renderSlot as P, toDisplayString as ne, resolveComponent as Be, normalizeClass as X, createElementVNode as p, createVNode as Ye, createBlock as ue, resolveDynamicComponent as It, withCtx as Ve, pushScopeId as Xe, popScopeId as Ge, createTextVNode as Yt, createCommentVNode as L, computed as Ne, Transition as Ct, normalizeStyle as U, withModifiers as Xt, withDirectives as Gt, vShow as Zt, Fragment as Et, renderList as St, ref as ze, toRefs as Jt, watch as Kt, nextTick as Qt } from "vue";
const er = "data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20width%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h200v200h-200z%22%20fill%3D%22%23D7D9E3%22%2F%3E%3Cg%20fill%3D%22%23888A93%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2271%22%20r%3D%2253%22%2F%3E%3Cpath%20d%3D%22m179%20200c0-37.555363-35.369505-68-79-68-43.6304952%200-79%2030.444637-79%2068s158%2037.555363%20158%200z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", tr = E({
  inheritAttrs: !1,
  props: {
    src: {
      type: String
    }
  },
  setup() {
    return {
      avatarDefault: er
    };
  }
}), S = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function rr(e, t, r, n, o, a) {
  return c(), h("div", M(e.$attrs, {
    style: { backgroundImage: `url('${e.src || e.avatarDefault}')` },
    class: "avatar-icon",
    role: "img"
  }), null, 16);
}
const Mn = /* @__PURE__ */ S(tr, [["render", rr], ["__scopeId", "data-v-ae8d1844"]]), or = E({
  inheritAttrs: !1,
  props: {
    skin: {
      type: String,
      default: "default"
    }
  }
});
function nr(e, t, r, n, o, a) {
  return c(), h("div", M(e.$attrs, {
    class: [`is-skin-${e.skin}`, "card"]
  }), [
    P(e.$slots, "default")
  ], 16);
}
const jn = /* @__PURE__ */ S(or, [["render", nr]]), ar = {
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
}, ir = E({
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup() {
    return {
      iconMap: ar
    };
  }
});
function sr(e, t, r, n, o, a) {
  return c(), h("i", M(e.$attrs, { class: "icon" }), ne(e.iconMap[e.name]), 17);
}
const ve = /* @__PURE__ */ S(ir, [["render", sr], ["__scopeId", "data-v-d54d8182"]]), lr = E({
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
}), ur = ["checked", "disabled"], dr = { class: "icon-wrap" };
function cr(e, t, r, n, o, a) {
  const s = Be("Icon");
  return c(), h("label", {
    class: X(["check-box", { "is-disabled": e.disabled }])
  }, [
    p("input", M(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "input",
      type: "checkbox"
    }), null, 16, ur),
    p("div", dr, [
      Ye(s, { name: "check" })
    ])
  ], 2);
}
const Fn = /* @__PURE__ */ S(lr, [["render", cr], ["__scopeId", "data-v-76efe8b1"]]), pr = E({
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}), fr = (e) => (Xe("data-v-55c59436"), e = e(), Ge(), e), vr = /* @__PURE__ */ fr(() => /* @__PURE__ */ p("svg", {
  class: "svg",
  viewBox: "0 0 40 40"
}, [
  /* @__PURE__ */ p("defs", null, [
    /* @__PURE__ */ p("circle", {
      id: "path1",
      cx: "20",
      cy: "20",
      r: "20"
    }),
    /* @__PURE__ */ p("mask", {
      id: "mask-2",
      maskContentUnits: "userSpaceOnUse",
      maskUnits: "objectBoundingBox",
      x: "0",
      y: "0",
      width: "40",
      height: "40",
      fill: "white"
    }, [
      /* @__PURE__ */ p("use", { "xlink:href": "#path1" })
    ])
  ]),
  /* @__PURE__ */ p("g", {
    id: "Artboard",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ p("g", { id: "svg" }, [
      /* @__PURE__ */ p("use", {
        id: "Oval",
        stroke: "#012F89",
        mask: "url(#mask-2)",
        "stroke-width": "2",
        "stroke-dasharray": "2.2,2.2",
        "xlink:href": "#path1"
      }),
      /* @__PURE__ */ p("path", {
        class: "inner-circle",
        d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z",
        id: "Oval",
        fill: "#012F89"
      })
    ])
  ])
], -1)), hr = { class: "icon-wrap" };
function mr(e, t, r, n, o, a) {
  return c(), ue(It(e.tag), M(e.$attrs, { class: "enhanced-icon" }), {
    default: Ve(() => [
      vr,
      p("p", hr, [
        P(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 16);
}
const Hn = /* @__PURE__ */ S(pr, [["render", mr], ["__scopeId", "data-v-55c59436"]]), gr = E({
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
}), yr = {
  key: 0,
  class: "label-line"
}, br = { class: "label" }, wr = { key: 0 }, $r = { class: "field-wrap" }, kr = {
  key: 1,
  class: "error-message"
}, Or = { class: "note" };
function Br(e, t, r, n, o, a) {
  return c(), h("div", M(e.$attrs, { class: "field-group" }), [
    e.label ? (c(), h("div", yr, [
      p("p", br, [
        Yt(ne(e.label), 1),
        e.subLabel ? (c(), h("small", wr, ne(e.subLabel), 1)) : L("", !0)
      ]),
      e.required !== null ? (c(), h("p", {
        key: 0,
        class: X(["required-badge", { "is-required": e.required }])
      }, ne(e.required ? "必須" : "任意"), 3)) : L("", !0)
    ])) : L("", !0),
    p("div", $r, [
      P(e.$slots, "default", {}, void 0, !0)
    ]),
    e.errorMessage ? (c(), h("p", kr, ne(e.errorMessage), 1)) : L("", !0),
    p("div", Or, [
      P(e.$slots, "note", {}, void 0, !0)
    ])
  ], 16);
}
const Wn = /* @__PURE__ */ S(gr, [["render", Br], ["__scopeId", "data-v-3b2fbddf"]]), Ar = E({
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
}), Ir = {
  key: 0,
  class: "icon-wrap is-left"
}, Cr = { class: "body" }, Er = {
  key: 1,
  class: "icon-wrap is-right"
};
function Sr(e, t, r, n, o, a) {
  return c(), ue(It(e.tag), M(e.$attrs, {
    class: [[`skin-${e.skin}`, `size-${e.size}`, e.enhanced && "is-enhanced"], "flat-button"],
    disabled: e.disabled || void 0
  }), {
    default: Ve(() => [
      e.$slots.leftIcon ? (c(), h("div", Ir, [
        P(e.$slots, "leftIcon", {}, void 0, !0)
      ])) : L("", !0),
      p("div", Cr, [
        P(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.rightIcon ? (c(), h("div", Er, [
        P(e.$slots, "rightIcon", {}, void 0, !0)
      ])) : L("", !0)
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
const Nn = /* @__PURE__ */ S(Ar, [["render", Sr], ["__scopeId", "data-v-ef3a5852"]]), vt = (e) => {
  if (e && !(e.includes(":") && !e.match(/^https?:\/\//i)))
    return e;
}, Dr = E({
  // root属性によるcomputedのオーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: !1,
  props: {
    href: {
      type: String,
      validator(e) {
        return !!vt(e);
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
    const t = Ne(() => e.force ? e.href : vt(e.href)), r = Ne(() => e.target === "_blank" ? `noopener ${e.rel || ""}`.replace(/\s$/, "") : e.rel);
    return {
      escapedHref: t,
      formattedRel: r
    };
  }
}), _r = ["href", "rel", "target"];
function Tr(e, t, r, n, o, a) {
  return c(), h("a", M(e.$attrs, {
    href: e.escapedHref,
    rel: e.formattedRel,
    target: e.target
  }), [
    P(e.$slots, "default")
  ], 16, _r);
}
const zn = /* @__PURE__ */ S(Dr, [["render", Tr]]);
function Pr(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  } else
    return Array.from(e);
}
var Ze = !1;
if (typeof window < "u") {
  var ht = {
    get passive() {
      Ze = !0;
    }
  };
  window.addEventListener("testPassive", null, ht), window.removeEventListener("testPassive", null, ht);
}
var Dt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), le = [], xe = !1, Je = -1, ye = void 0, be = void 0, _t = function(t) {
  return le.some(function(r) {
    return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
  });
}, Le = function(t) {
  var r = t || window.event;
  return _t(r.target) || r.touches.length > 1 ? !0 : (r.preventDefault && r.preventDefault(), !1);
}, xr = function(t) {
  if (be === void 0) {
    var r = !!t, n = window.innerWidth - document.documentElement.clientWidth;
    r && n > 0 && (be = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
  }
  ye === void 0 && (ye = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Lr = function() {
  be !== void 0 && (document.body.style.paddingRight = be, be = void 0), ye !== void 0 && (document.body.style.overflow = ye, ye = void 0);
}, Rr = function(t) {
  return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
}, Vr = function(t, r) {
  var n = t.targetTouches[0].clientY - Je;
  return _t(t.target) ? !1 : r && r.scrollTop === 0 && n > 0 || Rr(r) && n < 0 ? Le(t) : (t.stopPropagation(), !0);
}, Mr = function(t, r) {
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
    le = [].concat(Pr(le), [n]), Dt ? (t.ontouchstart = function(o) {
      o.targetTouches.length === 1 && (Je = o.targetTouches[0].clientY);
    }, t.ontouchmove = function(o) {
      o.targetTouches.length === 1 && Vr(o, t);
    }, xe || (document.addEventListener("touchmove", Le, Ze ? { passive: !1 } : void 0), xe = !0)) : xr(r);
  }
}, mt = function() {
  Dt ? (le.forEach(function(t) {
    t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null;
  }), xe && (document.removeEventListener("touchmove", Le, Ze ? { passive: !1 } : void 0), xe = !1), Je = -1) : Lr(), le = [];
};
const jr = E({
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
          return Mr(t);
        mt();
      }
    }
  },
  beforeUnmount() {
    mt();
  }
}), Fr = { class: "modal-body" };
function Hr(e, t, r, n, o, a) {
  const s = Be("Icon");
  return c(), ue(Ct, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (c(), h("div", {
        key: 0,
        class: "modal",
        role: "dialog",
        "aria-modal": "",
        style: U({ zIndex: e.zIndex })
      }, [
        p("div", {
          class: "filter",
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close")),
          style: U({ background: e.filterBackground })
        }, null, 4),
        p("div", {
          class: "modal-container",
          style: U({ margin: `${e.gutter}px` })
        }, [
          p("div", Fr, [
            e.hasClose ? (c(), h("div", {
              key: 0,
              class: "close-wrap",
              onClick: t[2] || (t[2] = (i) => e.$emit("close"))
            }, [
              p("button", {
                type: "button",
                class: "close",
                "aria-label": "閉じる",
                onClick: t[1] || (t[1] = Xt((i) => e.$emit("close"), ["stop"]))
              }, [
                Ye(s, { name: "close" })
              ])
            ])) : L("", !0),
            p("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              P(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 4)) : L("", !0)
    ]),
    _: 3
  });
}
const qn = /* @__PURE__ */ S(jr, [["render", Hr], ["__scopeId", "data-v-945d841a"]]), Wr = E({
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
}), Nr = (e) => (Xe("data-v-2b146e1a"), e = e(), Ge(), e), zr = ["checked", "disabled"], qr = /* @__PURE__ */ Nr(() => /* @__PURE__ */ p("div", { class: "dot" }, null, -1));
function Ur(e, t, r, n, o, a) {
  return c(), h("label", {
    class: X(["radio", { "is-disabled": e.disabled }])
  }, [
    p("input", M(e.$attrs, {
      checked: e.modelValue,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "input",
      type: "radio",
      disabled: e.disabled
    }), null, 16, zr),
    qr
  ], 2);
}
const Un = /* @__PURE__ */ S(Wr, [["render", Ur], ["__scopeId", "data-v-2b146e1a"]]), Yr = E({
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
function Xr(e, t, r, n, o, a) {
  return c(), h("div", M(e.$attrs, { class: "score-bar" }), [
    p("div", {
      class: "inner",
      style: U({
        width: `${e.value / e.max * 100}%`,
        background: e.value >= e.highThreshold ? e.highBarColor : e.barColor
      })
    }, null, 4)
  ], 16);
}
const Yn = /* @__PURE__ */ S(Yr, [["render", Xr], ["__scopeId", "data-v-80af665b"]]), Gr = E({
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
}), Zr = { class: "select-box" }, Jr = ["value"], Kr = ["value"], Qr = { class: "icon-wrap" };
function eo(e, t, r, n, o, a) {
  const s = Be("Icon");
  return c(), h("div", Zr, [
    p("select", {
      class: "select",
      value: e.modelValue,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i))
    }, [
      e.placeholder ? Gt((c(), h("option", {
        key: 0,
        value: ""
      }, ne(e.placeholder), 513)), [
        [Zt, !1]
      ]) : L("", !0),
      (c(!0), h(Et, null, St(e.options, (i) => (c(), h("option", {
        value: i.value,
        key: i.value
      }, ne(i.label), 9, Kr))), 128))
    ], 40, Jr),
    p("div", Qr, [
      Ye(s, { name: "arrow-down" })
    ])
  ]);
}
const Xn = /* @__PURE__ */ S(Gr, [["render", eo], ["__scopeId", "data-v-d6a6e489"]]), to = E({
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
}), ro = {
  key: 0,
  class: "modal",
  ref: "modal"
}, oo = { class: "modal-body" }, no = {
  key: 1,
  class: "icon-cancel"
};
function ao(e, t, r, n, o, a) {
  const s = Be("Icon");
  return c(), ue(Ct, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (c(), h("div", ro, [
        p("div", {
          class: "modal-overlay",
          style: U({
            background: e.filterBackground,
            zIndex: e.zIndex
          }),
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close"))
        }, null, 4),
        p("div", {
          class: "modal-container",
          style: U({
            padding: `${e.gutter}px`,
            zIndex: e.zIndex
          })
        }, [
          p("div", oo, [
            p("div", {
              class: X(["close-wrap", { "outer-close": e.outerClose }])
            }, [
              e.hasClose ? (c(), h("p", {
                key: 0,
                class: "close",
                onClick: t[1] || (t[1] = (i) => e.$emit("close"))
              }, [
                e.outerClose ? (c(), ue(s, {
                  key: 0,
                  name: "close",
                  alt: "閉じる"
                })) : (c(), h("i", no))
              ])) : L("", !0)
            ], 2),
            p("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              P(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 512)) : L("", !0)
    ]),
    _: 3
  });
}
const Gn = /* @__PURE__ */ S(to, [["render", ao], ["__scopeId", "data-v-a2b6f65d"]]), io = E({
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
}), so = {
  key: 0,
  class: "sub"
};
function lo(e, t, r, n, o, a) {
  return c(), h("div", M(e.$attrs, {
    style: { background: e.background, color: e.color },
    class: "tag-label"
  }), [
    e.$slots.subLabel ? (c(), h("p", so, [
      P(e.$slots, "subLabel", {}, void 0, !0)
    ])) : L("", !0),
    p("p", {
      class: X(["main", { "has-sub-label": e.$slots.subLabel }])
    }, [
      P(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ], 16);
}
const Zn = /* @__PURE__ */ S(io, [["render", lo], ["__scopeId", "data-v-b80e4e79"]]), uo = E({
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
    }, { modelValue: a } = Jt(e);
    return Kt(
      a,
      async () => {
        await Qt(), n();
      },
      { immediate: !0 }
    ), {
      textarea: r,
      onInput: o
    };
  }
}), co = ["value", "disabled"], po = ["value", "disabled", "type"];
function fo(e, t, r, n, o, a) {
  return e.multiline ? (c(), h("textarea", M({ key: 0 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-multi-line", { "has-error": e.error }],
    disabled: e.disabled,
    onInput: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[1] || (t[1] = (s) => e.$emit("focus")),
    onBlur: t[2] || (t[2] = (s) => e.$emit("blur")),
    ref: "textarea"
  }), null, 16, co)) : (c(), h("input", M({ key: 1 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-single-line", { "has-error": e.error }],
    disabled: e.disabled,
    type: e.type,
    onInput: t[3] || (t[3] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[4] || (t[4] = (s) => e.$emit("focus")),
    onBlur: t[5] || (t[5] = (s) => e.$emit("blur"))
  }), null, 16, po));
}
const Jn = /* @__PURE__ */ S(uo, [["render", fo], ["__scopeId", "data-v-f84d50db"]]), vo = E({
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
}), ho = { class: "toggle" }, mo = { class: "label" };
function go(e, t, r, n, o, a) {
  return c(), h("label", {
    class: X(["toggle-label-set", {
      "is-active": e.isActive,
      "is-button": e.isButton,
      "is-disabled": e.disabled,
      "is-flipped": e.isFlipped
    }])
  }, [
    p("div", ho, [
      P(e.$slots, "toggle", {}, void 0, !0)
    ]),
    p("div", mo, [
      P(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Kn = /* @__PURE__ */ S(vo, [["render", go], ["__scopeId", "data-v-29bfced2"]]), yo = E({
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
}), bo = (e) => (Xe("data-v-36bffd3f"), e = e(), Ge(), e), wo = { class: "toggle-switch" }, $o = ["checked", "disabled"], ko = /* @__PURE__ */ bo(() => /* @__PURE__ */ p("div", { class: "toggle" }, null, -1)), Oo = [
  ko
];
function Bo(e, t, r, n, o, a) {
  return c(), h("label", wo, [
    p("input", M(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled || void 0,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "checkbox",
      type: "checkbox"
    }), null, 16, $o),
    p("div", {
      class: X(["switch-base", { "is-disabled": e.disabled }])
    }, Oo, 2)
  ]);
}
const Qn = /* @__PURE__ */ S(yo, [["render", Bo], ["__scopeId", "data-v-36bffd3f"]]);
var R = "top", W = "bottom", N = "right", V = "left", Ke = "auto", Ae = [R, W, N, V], de = "start", ke = "end", Ao = "clippingParents", Tt = "viewport", ge = "popper", Io = "reference", gt = /* @__PURE__ */ Ae.reduce(function(e, t) {
  return e.concat([t + "-" + de, t + "-" + ke]);
}, []), Pt = /* @__PURE__ */ [].concat(Ae, [Ke]).reduce(function(e, t) {
  return e.concat([t, t + "-" + de, t + "-" + ke]);
}, []), Co = "beforeRead", Eo = "read", So = "afterRead", Do = "beforeMain", _o = "main", To = "afterMain", Po = "beforeWrite", xo = "write", Lo = "afterWrite", Ro = [Co, Eo, So, Do, _o, To, Po, xo, Lo];
function G(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function F(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ie(e) {
  var t = F(e).Element;
  return e instanceof t || e instanceof Element;
}
function H(e) {
  var t = F(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qe(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !H(a) || !G(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Mo(e) {
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
      !H(o) || !G(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const jo = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vo,
  effect: Mo,
  requires: ["computeStyles"]
};
function Y(e) {
  return e.split("-")[0];
}
var ae = Math.max, Re = Math.min, ce = Math.round;
function qe() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xt() {
  return !/^((?!chrome|android).)*safari/i.test(qe());
}
function pe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && H(e) && (o = e.offsetWidth > 0 && ce(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ce(n.height) / e.offsetHeight || 1);
  var s = ie(e) ? F(e) : window, i = s.visualViewport, l = !xt() && r, d = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, y = n.width / o, $ = n.height / a;
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
function et(e) {
  var t = pe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Lt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Qe(r)) {
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
  return F(e).getComputedStyle(e);
}
function Fo(e) {
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
    (Qe(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    K(e)
  );
}
function yt(e) {
  return !H(e) || // https://github.com/popperjs/popper-core/issues/837
  Z(e).position === "fixed" ? null : e.offsetParent;
}
function Ho(e) {
  var t = /firefox/i.test(qe()), r = /Trident/i.test(qe());
  if (r && H(e)) {
    var n = Z(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Me(e);
  for (Qe(o) && (o = o.host); H(o) && ["html", "body"].indexOf(G(o)) < 0; ) {
    var a = Z(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ie(e) {
  for (var t = F(e), r = yt(e); r && Fo(r) && Z(r).position === "static"; )
    r = yt(r);
  return r && (G(r) === "html" || G(r) === "body" && Z(r).position === "static") ? t : r || Ho(e) || t;
}
function tt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, r) {
  return ae(e, Re(t, r));
}
function Wo(e, t, r) {
  var n = we(e, t, r);
  return n > r ? r : n;
}
function Rt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vt(e) {
  return Object.assign({}, Rt(), e);
}
function Mt(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var No = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Vt(typeof t != "number" ? t : Mt(t, Ae));
};
function zo(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Y(r.placement), l = tt(i), d = [V, N].indexOf(i) >= 0, u = d ? "height" : "width";
  if (!(!a || !s)) {
    var y = No(o.padding, r), $ = et(a), f = l === "y" ? R : V, O = l === "y" ? W : N, g = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], m = s[l] - r.rects.reference[l], k = Ie(a), A = k ? l === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, I = g / 2 - m / 2, v = y[f], b = A - $[u] - y[O], w = A / 2 - $[u] / 2 + I, B = we(v, w, b), _ = l;
    r.modifiersData[n] = (t = {}, t[_] = B, t.centerOffset = B - w, t);
  }
}
function qo(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Lt(t.elements.popper, o) && (t.elements.arrow = o));
}
const Uo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: zo,
  effect: qo,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function fe(e) {
  return e.split("-")[1];
}
var Yo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xo(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ce(r * o) / o || 0,
    y: ce(n * o) / o || 0
  };
}
function bt(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, y = e.isFixed, $ = s.x, f = $ === void 0 ? 0 : $, O = s.y, g = O === void 0 ? 0 : O, m = typeof u == "function" ? u({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = m.x, g = m.y;
  var k = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), I = V, v = R, b = window;
  if (d) {
    var w = Ie(r), B = "clientHeight", _ = "clientWidth";
    if (w === F(r) && (w = K(r), Z(w).position !== "static" && i === "absolute" && (B = "scrollHeight", _ = "scrollWidth")), w = w, o === R || (o === V || o === N) && a === ke) {
      v = W;
      var D = y && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[B]
      );
      g -= D - n.height, g *= l ? 1 : -1;
    }
    if (o === V || (o === R || o === W) && a === ke) {
      I = N;
      var C = y && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      f -= C - n.width, f *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: i
  }, d && Yo), z = u === !0 ? Xo({
    x: f,
    y: g
  }, F(r)) : {
    x: f,
    y: g
  };
  if (f = z.x, g = z.y, l) {
    var x;
    return Object.assign({}, T, (x = {}, x[v] = A ? "0" : "", x[I] = k ? "0" : "", x.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", x));
  }
  return Object.assign({}, T, (t = {}, t[v] = A ? g + "px" : "", t[I] = k ? f + "px" : "", t.transform = "", t));
}
function Go(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, d = {
    placement: Y(t.placement),
    variation: fe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bt(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bt(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Zo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Go,
  data: {}
};
var Te = {
  passive: !0
};
function Jo(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = F(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Te);
  }), i && l.addEventListener("resize", r.update, Te), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Te);
    }), i && l.removeEventListener("resize", r.update, Te);
  };
}
const Ko = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jo,
  data: {}
};
var Qo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qo[t];
  });
}
var en = {
  start: "end",
  end: "start"
};
function wt(e) {
  return e.replace(/start|end/g, function(t) {
    return en[t];
  });
}
function rt(e) {
  var t = F(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ot(e) {
  return pe(K(e)).left + rt(e).scrollLeft;
}
function tn(e, t) {
  var r = F(e), n = K(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var d = xt();
    (d || !d && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + ot(e),
    y: l
  };
}
function rn(e) {
  var t, r = K(e), n = rt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ae(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = ae(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + ot(e), l = -n.scrollTop;
  return Z(o || r).direction === "rtl" && (i += ae(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function nt(e) {
  var t = Z(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function jt(e) {
  return ["html", "body", "#document"].indexOf(G(e)) >= 0 ? e.ownerDocument.body : H(e) && nt(e) ? e : jt(Me(e));
}
function $e(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = jt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = F(n), s = o ? [a].concat(a.visualViewport || [], nt(n) ? n : []) : n, i = t.concat(s);
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
function on(e, t) {
  var r = pe(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function $t(e, t, r) {
  return t === Tt ? Ue(tn(e, r)) : ie(t) ? on(t, r) : Ue(rn(K(e)));
}
function nn(e) {
  var t = $e(Me(e)), r = ["absolute", "fixed"].indexOf(Z(e).position) >= 0, n = r && H(e) ? Ie(e) : e;
  return ie(n) ? t.filter(function(o) {
    return ie(o) && Lt(o, n) && G(o) !== "body";
  }) : [];
}
function an(e, t, r, n) {
  var o = t === "clippingParents" ? nn(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, d) {
    var u = $t(e, d, n);
    return l.top = ae(u.top, l.top), l.right = Re(u.right, l.right), l.bottom = Re(u.bottom, l.bottom), l.left = ae(u.left, l.left), l;
  }, $t(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ft(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Y(n) : null, a = n ? fe(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case R:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case W:
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
  var d = o ? tt(o) : null;
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Ao : i, d = r.rootBoundary, u = d === void 0 ? Tt : d, y = r.elementContext, $ = y === void 0 ? ge : y, f = r.altBoundary, O = f === void 0 ? !1 : f, g = r.padding, m = g === void 0 ? 0 : g, k = Vt(typeof m != "number" ? m : Mt(m, Ae)), A = $ === ge ? Io : ge, I = e.rects.popper, v = e.elements[O ? A : $], b = an(ie(v) ? v : v.contextElement || K(e.elements.popper), l, u, s), w = pe(e.elements.reference), B = Ft({
    reference: w,
    element: I,
    strategy: "absolute",
    placement: o
  }), _ = Ue(Object.assign({}, I, B)), D = $ === ge ? _ : w, C = {
    top: b.top - D.top + k.top,
    bottom: D.bottom - b.bottom + k.bottom,
    left: b.left - D.left + k.left,
    right: D.right - b.right + k.right
  }, T = e.modifiersData.offset;
  if ($ === ge && T) {
    var z = T[o];
    Object.keys(C).forEach(function(x) {
      var Q = [N, W].indexOf(x) >= 0 ? 1 : -1, ee = [R, W].indexOf(x) >= 0 ? "y" : "x";
      C[x] += z[ee] * Q;
    });
  }
  return C;
}
function sn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Pt : l, u = fe(n), y = u ? i ? gt : gt.filter(function(O) {
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
function ln(e) {
  if (Y(e) === Ke)
    return [];
  var t = Pe(e);
  return [wt(e), t, wt(t)];
}
function un(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, d = r.padding, u = r.boundary, y = r.rootBoundary, $ = r.altBoundary, f = r.flipVariations, O = f === void 0 ? !0 : f, g = r.allowedAutoPlacements, m = t.options.placement, k = Y(m), A = k === m, I = l || (A || !O ? [Pe(m)] : ln(m)), v = [m].concat(I).reduce(function(se, J) {
      return se.concat(Y(J) === Ke ? sn(t, {
        placement: J,
        boundary: u,
        rootBoundary: y,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: g
      }) : J);
    }, []), b = t.rects.reference, w = t.rects.popper, B = /* @__PURE__ */ new Map(), _ = !0, D = v[0], C = 0; C < v.length; C++) {
      var T = v[C], z = Y(T), x = fe(T) === de, Q = [R, W].indexOf(z) >= 0, ee = Q ? "width" : "height", j = Oe(t, {
        placement: T,
        boundary: u,
        rootBoundary: y,
        altBoundary: $,
        padding: d
      }), q = Q ? x ? N : V : x ? W : R;
      b[ee] > w[ee] && (q = Pe(q));
      var Ce = Pe(q), te = [];
      if (a && te.push(j[z] <= 0), i && te.push(j[q] <= 0, j[Ce] <= 0), te.every(function(se) {
        return se;
      })) {
        D = T, _ = !1;
        break;
      }
      B.set(T, te);
    }
    if (_)
      for (var Ee = O ? 3 : 1, je = function(J) {
        var me = v.find(function(De) {
          var re = B.get(De);
          if (re)
            return re.slice(0, J).every(function(Fe) {
              return Fe;
            });
        });
        if (me)
          return D = me, "break";
      }, he = Ee; he > 0; he--) {
        var Se = je(he);
        if (Se === "break") break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const dn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: un,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kt(e, t, r) {
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
function Ot(e) {
  return [R, N, W, V].some(function(t) {
    return e[t] >= 0;
  });
}
function cn(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Oe(t, {
    elementContext: "reference"
  }), i = Oe(t, {
    altBoundary: !0
  }), l = kt(s, n), d = kt(i, o, a), u = Ot(l), y = Ot(d);
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
const pn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: cn
};
function fn(e, t, r) {
  var n = Y(e), o = [V, R].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
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
function vn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = Pt.reduce(function(u, y) {
    return u[y] = fn(y, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, d = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = s;
}
const hn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vn
};
function mn(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ft({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: mn,
  data: {}
};
function yn(e) {
  return e === "x" ? "y" : "x";
}
function bn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, y = r.padding, $ = r.tether, f = $ === void 0 ? !0 : $, O = r.tetherOffset, g = O === void 0 ? 0 : O, m = Oe(t, {
    boundary: l,
    rootBoundary: d,
    padding: y,
    altBoundary: u
  }), k = Y(t.placement), A = fe(t.placement), I = !A, v = tt(k), b = yn(v), w = t.modifiersData.popperOffsets, B = t.rects.reference, _ = t.rects.popper, D = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, C = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var x, Q = v === "y" ? R : V, ee = v === "y" ? W : N, j = v === "y" ? "height" : "width", q = w[v], Ce = q + m[Q], te = q - m[ee], Ee = f ? -_[j] / 2 : 0, je = A === de ? B[j] : _[j], he = A === de ? -_[j] : -B[j], Se = t.elements.arrow, se = f && Se ? et(Se) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Rt(), me = J[Q], De = J[ee], re = we(0, B[j], se[j]), Fe = I ? B[j] / 2 - Ee - re - me - C.mainAxis : je - re - me - C.mainAxis, Ht = I ? -B[j] / 2 + Ee + re + De + C.mainAxis : he + re + De + C.mainAxis, He = t.elements.arrow && Ie(t.elements.arrow), Wt = He ? v === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, at = (x = T == null ? void 0 : T[v]) != null ? x : 0, Nt = q + Fe - at - Wt, zt = q + Ht - at, it = we(f ? Re(Ce, Nt) : Ce, q, f ? ae(te, zt) : te);
      w[v] = it, z[v] = it - q;
    }
    if (i) {
      var st, qt = v === "x" ? R : V, Ut = v === "x" ? W : N, oe = w[b], _e = b === "y" ? "height" : "width", lt = oe + m[qt], ut = oe - m[Ut], We = [R, V].indexOf(k) !== -1, dt = (st = T == null ? void 0 : T[b]) != null ? st : 0, ct = We ? lt : oe - B[_e] - _[_e] - dt + C.altAxis, pt = We ? oe + B[_e] + _[_e] - dt - C.altAxis : ut, ft = f && We ? Wo(ct, oe, pt) : we(f ? ct : lt, oe, f ? pt : ut);
      w[b] = ft, z[b] = ft - oe;
    }
    t.modifiersData[n] = z;
  }
}
const wn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bn,
  requiresIfExists: ["offset"]
};
function $n(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function kn(e) {
  return e === F(e) || !H(e) ? rt(e) : $n(e);
}
function On(e) {
  var t = e.getBoundingClientRect(), r = ce(t.width) / e.offsetWidth || 1, n = ce(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Bn(e, t, r) {
  r === void 0 && (r = !1);
  var n = H(t), o = H(t) && On(t), a = K(t), s = pe(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((G(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nt(a)) && (i = kn(t)), H(t) ? (l = pe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ot(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function An(e) {
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
function In(e) {
  var t = An(e);
  return Ro.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Cn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function En(e) {
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
var Bt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function At() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Sn(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Bt : o;
  return function(i, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bt, a),
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
        var I = In(En([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = I.filter(function(v) {
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
          var k = u.elements, A = k.reference, I = k.popper;
          if (At(A, I)) {
            u.rects = {
              reference: Bn(A, Ie(I), u.options.strategy === "fixed"),
              popper: et(I)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
              return u.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var b = u.orderedModifiers[v], w = b.fn, B = b.options, _ = B === void 0 ? {} : B, D = b.name;
              typeof w == "function" && (u = w({
                state: u,
                options: _,
                name: D,
                instance: f
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Cn(function() {
        return new Promise(function(m) {
          f.forceUpdate(), m(u);
        });
      }),
      destroy: function() {
        g(), $ = !0;
      }
    };
    if (!At(i, l))
      return f;
    f.setOptions(d).then(function(m) {
      !$ && d.onFirstUpdate && d.onFirstUpdate(m);
    });
    function O() {
      u.orderedModifiers.forEach(function(m) {
        var k = m.name, A = m.options, I = A === void 0 ? {} : A, v = m.effect;
        if (typeof v == "function") {
          var b = v({
            state: u,
            name: k,
            instance: f,
            options: I
          }), w = function() {
          };
          y.push(b || w);
        }
      });
    }
    function g() {
      y.forEach(function(m) {
        return m();
      }), y = [];
    }
    return f;
  };
}
var Dn = [Ko, gn, Zo, jo, hn, dn, wn, Uo, pn], _n = /* @__PURE__ */ Sn({
  defaultModifiers: Dn
});
const Tn = E({
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
      !t.value || !r.value || (n && n.destroy(), n = _n(t.value, r.value, {
        placement: "top",
        ...e.options
      }));
    }, trigger: t, container: r };
  }
}), Pn = { class: "tooltip" }, xn = {
  class: "container",
  ref: "container"
};
function Ln(e, t, r, n, o, a) {
  const s = Be("Icon");
  return c(), h("span", Pn, [
    p("span", {
      class: "trigger",
      ref: "trigger",
      onMouseenter: t[0] || (t[0] = (...i) => e.hoverEvent && e.hoverEvent(...i))
    }, [
      P(e.$slots, "trigger", {}, void 0, !0),
      e.$slots.trigger ? L("", !0) : (c(), ue(s, {
        key: 0,
        name: "info"
      }))
    ], 544),
    p("div", xn, [
      p("div", {
        class: X(["body", { "has-skin": !e.skeleton }]),
        style: U({
          maxWidth: `${e.maxWidth}px`
        })
      }, [
        P(e.$slots, "default", {}, void 0, !0)
      ], 6)
    ], 512)
  ]);
}
const ea = /* @__PURE__ */ S(Tn, [["render", Ln], ["__scopeId", "data-v-e8caa5d7"]]), Rn = /* @__PURE__ */ E({
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
    return (n, o) => (c(), h("div", {
      class: "content-loader",
      style: U({
        gap: `${n.gap}em`
      })
    }, [
      (c(!0), h(Et, null, St(r.value, (a) => (c(), h("div", {
        class: "loader-group",
        key: a.id,
        style: U({
          gap: `${n.lineHeight / 2.5}em`
        })
      }, [
        ["CIRCLE", "BULLET_LIST"].includes(n.type) ? (c(), h("div", {
          key: 0,
          class: "circle",
          style: U({
            width: `${n.lineHeight}em`,
            height: `${n.lineHeight}em`
          })
        }, null, 4)) : L("", !0),
        ["PARAGRAPH", "BULLET_LIST"].includes(n.type) ? (c(), h("div", {
          key: 1,
          class: "line",
          style: U({
            maxWidth: `${a.maxWidth}%`,
            height: `${n.lineHeight}em`
          })
        }, null, 4)) : L("", !0)
      ], 4))), 128))
    ], 4));
  }
}), ta = /* @__PURE__ */ S(Rn, [["__scopeId", "data-v-3620d5a4"]]);
export {
  Mn as AvatarImg,
  jn as Card,
  Fn as CheckBox,
  ta as ContentLoader,
  Hn as EnhancedIconButton,
  Wn as FieldGroup,
  Nn as FlatButton,
  ve as Icon,
  qn as Modal,
  zn as ProtectedLink,
  Un as Radio,
  Yn as RatingBar,
  Xn as SelectBox,
  Gn as ShortModal,
  Zn as TagLabel,
  Jn as TextInput,
  Kn as ToggleLabelSet,
  Qn as ToggleSwitch,
  ea as Tooltip
};
