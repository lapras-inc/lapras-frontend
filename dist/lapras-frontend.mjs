import { defineComponent as C, openBlock as v, createElementBlock as g, mergeProps as V, renderSlot as T, toDisplayString as oe, resolveComponent as Be, normalizeClass as U, createElementVNode as c, createVNode as Ye, createBlock as ue, resolveDynamicComponent as At, withCtx as Ve, pushScopeId as Ue, popScopeId as Xe, createTextVNode as qt, createCommentVNode as M, computed as ft, Transition as Et, normalizeStyle as ne, withModifiers as Yt, withDirectives as Ut, vShow as Xt, Fragment as Gt, renderList as Zt, ref as Ne, toRefs as Jt, watch as Kt, nextTick as Qt } from "vue";
const er = "data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20width%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h200v200h-200z%22%20fill%3D%22%23D7D9E3%22%2F%3E%3Cg%20fill%3D%22%23888A93%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2271%22%20r%3D%2253%22%2F%3E%3Cpath%20d%3D%22m179%20200c0-37.555363-35.369505-68-79-68-43.6304952%200-79%2030.444637-79%2068s158%2037.555363%20158%200z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", tr = C({
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
}), x = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function rr(e, t, r, n, o, a) {
  return v(), g("div", V(e.$attrs, {
    style: { backgroundImage: `url(${e.src || e.avatarDefault})` },
    class: "avatar-icon",
    role: "img"
  }), null, 16);
}
const Vn = /* @__PURE__ */ x(tr, [["render", rr], ["__scopeId", "data-v-1e9b8680"]]), or = C({
  inheritAttrs: !1,
  props: {
    skin: {
      type: String,
      default: "default"
    }
  }
});
function nr(e, t, r, n, o, a) {
  return v(), g("div", V(e.$attrs, {
    class: [`is-skin-${e.skin}`, "card"]
  }), [
    T(e.$slots, "default")
  ], 16);
}
const jn = /* @__PURE__ */ x(or, [["render", nr]]), ar = {
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
}, ir = C({
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
  return v(), g("i", V(e.$attrs, { class: "icon" }), oe(e.iconMap[e.name]), 17);
}
const ve = /* @__PURE__ */ x(ir, [["render", sr], ["__scopeId", "data-v-d54d8182"]]), lr = C({
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
  return v(), g("label", {
    class: U(["check-box", { "is-disabled": e.disabled }])
  }, [
    c("input", V(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "input",
      type: "checkbox"
    }), null, 16, ur),
    c("div", dr, [
      Ye(s, { name: "check" })
    ])
  ], 2);
}
const Mn = /* @__PURE__ */ x(lr, [["render", cr], ["__scopeId", "data-v-76efe8b1"]]), pr = C({
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}), fr = (e) => (Ue("data-v-55c59436"), e = e(), Xe(), e), vr = /* @__PURE__ */ fr(() => /* @__PURE__ */ c("svg", {
  class: "svg",
  viewBox: "0 0 40 40"
}, [
  /* @__PURE__ */ c("defs", null, [
    /* @__PURE__ */ c("circle", {
      id: "path1",
      cx: "20",
      cy: "20",
      r: "20"
    }),
    /* @__PURE__ */ c("mask", {
      id: "mask-2",
      maskContentUnits: "userSpaceOnUse",
      maskUnits: "objectBoundingBox",
      x: "0",
      y: "0",
      width: "40",
      height: "40",
      fill: "white"
    }, [
      /* @__PURE__ */ c("use", { "xlink:href": "#path1" })
    ])
  ]),
  /* @__PURE__ */ c("g", {
    id: "Artboard",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ c("g", { id: "svg" }, [
      /* @__PURE__ */ c("use", {
        id: "Oval",
        stroke: "#012F89",
        mask: "url(#mask-2)",
        "stroke-width": "2",
        "stroke-dasharray": "2.2,2.2",
        "xlink:href": "#path1"
      }),
      /* @__PURE__ */ c("path", {
        class: "inner-circle",
        d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z",
        id: "Oval",
        fill: "#012F89"
      })
    ])
  ])
], -1)), hr = { class: "icon-wrap" };
function mr(e, t, r, n, o, a) {
  return v(), ue(At(e.tag), V(e.$attrs, { class: "enhanced-icon" }), {
    default: Ve(() => [
      vr,
      c("p", hr, [
        T(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 16);
}
const Fn = /* @__PURE__ */ x(pr, [["render", mr], ["__scopeId", "data-v-55c59436"]]), gr = C({
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
  return v(), g("div", V(e.$attrs, { class: "field-group" }), [
    e.label ? (v(), g("div", yr, [
      c("p", br, [
        qt(oe(e.label), 1),
        e.subLabel ? (v(), g("small", wr, oe(e.subLabel), 1)) : M("", !0)
      ]),
      e.required !== null ? (v(), g("p", {
        key: 0,
        class: U(["required-badge", { "is-required": e.required }])
      }, oe(e.required ? "必須" : "任意"), 3)) : M("", !0)
    ])) : M("", !0),
    c("div", $r, [
      T(e.$slots, "default", {}, void 0, !0)
    ]),
    e.errorMessage ? (v(), g("p", kr, oe(e.errorMessage), 1)) : M("", !0),
    c("div", Or, [
      T(e.$slots, "note", {}, void 0, !0)
    ])
  ], 16);
}
const Hn = /* @__PURE__ */ x(gr, [["render", Br], ["__scopeId", "data-v-3b2fbddf"]]), Ir = C({
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
}), Ar = {
  key: 0,
  class: "icon-wrap is-left"
}, Er = { class: "body" }, Sr = {
  key: 1,
  class: "icon-wrap is-right"
};
function Cr(e, t, r, n, o, a) {
  return v(), ue(At(e.tag), V(e.$attrs, {
    class: [[`skin-${e.skin}`, `size-${e.size}`, e.enhanced && "is-enhanced"], "flat-button"],
    disabled: e.disabled || void 0
  }), {
    default: Ve(() => [
      e.$slots.leftIcon ? (v(), g("div", Ar, [
        T(e.$slots, "leftIcon", {}, void 0, !0)
      ])) : M("", !0),
      c("div", Er, [
        T(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.rightIcon ? (v(), g("div", Sr, [
        T(e.$slots, "rightIcon", {}, void 0, !0)
      ])) : M("", !0)
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
const Wn = /* @__PURE__ */ x(Ir, [["render", Cr], ["__scopeId", "data-v-ef3a5852"]]), vt = (e) => {
  if (e && !(e.includes(":") && !e.match(/^https?:\/\//i)))
    return e;
}, xr = C({
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
    const t = ft(() => e.force ? e.href : vt(e.href)), r = ft(() => e.target === "_blank" ? `noopener ${e.rel || ""}`.replace(/\s$/, "") : e.rel);
    return {
      escapedHref: t,
      formattedRel: r
    };
  }
}), Dr = ["href", "rel", "target"];
function _r(e, t, r, n, o, a) {
  return v(), g("a", V(e.$attrs, {
    href: e.escapedHref,
    rel: e.formattedRel,
    target: e.target
  }), [
    T(e.$slots, "default")
  ], 16, Dr);
}
const Nn = /* @__PURE__ */ x(xr, [["render", _r]]);
function Tr(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  } else
    return Array.from(e);
}
var Ge = !1;
if (typeof window < "u") {
  var ht = {
    get passive() {
      Ge = !0;
    }
  };
  window.addEventListener("testPassive", null, ht), window.removeEventListener("testPassive", null, ht);
}
var St = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), le = [], Pe = !1, Ze = -1, ye = void 0, be = void 0, Ct = function(t) {
  return le.some(function(r) {
    return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
  });
}, Re = function(t) {
  var r = t || window.event;
  return Ct(r.target) || r.touches.length > 1 ? !0 : (r.preventDefault && r.preventDefault(), !1);
}, Pr = function(t) {
  if (be === void 0) {
    var r = !!t, n = window.innerWidth - document.documentElement.clientWidth;
    r && n > 0 && (be = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
  }
  ye === void 0 && (ye = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Rr = function() {
  be !== void 0 && (document.body.style.paddingRight = be, be = void 0), ye !== void 0 && (document.body.style.overflow = ye, ye = void 0);
}, Lr = function(t) {
  return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
}, Vr = function(t, r) {
  var n = t.targetTouches[0].clientY - Ze;
  return Ct(t.target) ? !1 : r && r.scrollTop === 0 && n > 0 || Lr(r) && n < 0 ? Re(t) : (t.stopPropagation(), !0);
}, jr = function(t, r) {
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
    le = [].concat(Tr(le), [n]), St ? (t.ontouchstart = function(o) {
      o.targetTouches.length === 1 && (Ze = o.targetTouches[0].clientY);
    }, t.ontouchmove = function(o) {
      o.targetTouches.length === 1 && Vr(o, t);
    }, Pe || (document.addEventListener("touchmove", Re, Ge ? { passive: !1 } : void 0), Pe = !0)) : Pr(r);
  }
}, mt = function() {
  St ? (le.forEach(function(t) {
    t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null;
  }), Pe && (document.removeEventListener("touchmove", Re, Ge ? { passive: !1 } : void 0), Pe = !1), Ze = -1) : Rr(), le = [];
};
const Mr = C({
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
          return jr(t);
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
  return v(), ue(Et, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (v(), g("div", {
        key: 0,
        class: "modal",
        role: "dialog",
        "aria-modal": "",
        style: ne({ zIndex: e.zIndex })
      }, [
        c("div", {
          class: "filter",
          onClick: t[0] || (t[0] = (i) => e.$emit("close")),
          style: ne({ background: e.filterBackground })
        }, null, 4),
        c("div", {
          class: "modal-container",
          style: ne({ margin: `${e.gutter}px` })
        }, [
          c("div", Fr, [
            e.hasClose ? (v(), g("div", {
              key: 0,
              class: "close-wrap",
              onClick: t[2] || (t[2] = (i) => e.$emit("close"))
            }, [
              c("button", {
                type: "button",
                class: "close",
                "aria-label": "閉じる",
                onClick: t[1] || (t[1] = Yt((i) => e.$emit("close"), ["stop"]))
              }, [
                Ye(s, { name: "close" })
              ])
            ])) : M("", !0),
            c("div", {
              class: U(["content", { panel: e.panel }])
            }, [
              T(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 4)) : M("", !0)
    ]),
    _: 3
  });
}
const zn = /* @__PURE__ */ x(Mr, [["render", Hr], ["__scopeId", "data-v-c5d54c35"]]), Wr = C({
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
}), Nr = (e) => (Ue("data-v-0a65636e"), e = e(), Xe(), e), zr = ["checked"], qr = /* @__PURE__ */ Nr(() => /* @__PURE__ */ c("div", { class: "dot" }, null, -1));
function Yr(e, t, r, n, o, a) {
  return v(), g("label", {
    class: U(["radio", { "is-disabled": e.disabled }])
  }, [
    c("input", V(e.$attrs, {
      checked: e.modelValue,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "input",
      type: "radio"
    }), null, 16, zr),
    qr
  ], 2);
}
const qn = /* @__PURE__ */ x(Wr, [["render", Yr], ["__scopeId", "data-v-0a65636e"]]), Ur = C({
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
  return v(), g("div", V(e.$attrs, { class: "score-bar" }), [
    c("div", {
      class: "inner",
      style: ne({
        width: `${e.value / e.max * 100}%`,
        background: e.value >= e.highThreshold ? e.highBarColor : e.barColor
      })
    }, null, 4)
  ], 16);
}
const Yn = /* @__PURE__ */ x(Ur, [["render", Xr], ["__scopeId", "data-v-80af665b"]]), Gr = C({
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
  return v(), g("div", Zr, [
    c("select", {
      class: "select",
      value: e.modelValue,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i))
    }, [
      e.placeholder ? Ut((v(), g("option", {
        key: 0,
        value: ""
      }, oe(e.placeholder), 513)), [
        [Xt, !1]
      ]) : M("", !0),
      (v(!0), g(Gt, null, Zt(e.options, (i) => (v(), g("option", {
        value: i.value,
        key: i.value
      }, oe(i.label), 9, Kr))), 128))
    ], 40, Jr),
    c("div", Qr, [
      Ye(s, { name: "arrow-down" })
    ])
  ]);
}
const Un = /* @__PURE__ */ x(Gr, [["render", eo], ["__scopeId", "data-v-d6a6e489"]]), to = C({
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
  return v(), ue(Et, { name: "fade" }, {
    default: Ve(() => [
      e.visible ? (v(), g("div", ro, [
        c("div", {
          class: "modal-overlay",
          style: ne({
            background: e.filterBackground,
            zIndex: e.zIndex
          }),
          onClick: t[0] || (t[0] = (i) => e.$emit("close"))
        }, null, 4),
        c("div", {
          class: "modal-container",
          style: ne({
            padding: `${e.gutter}px`,
            zIndex: e.zIndex
          })
        }, [
          c("div", oo, [
            c("div", {
              class: U(["close-wrap", { "outer-close": e.outerClose }])
            }, [
              e.hasClose ? (v(), g("p", {
                key: 0,
                class: "close",
                onClick: t[1] || (t[1] = (i) => e.$emit("close"))
              }, [
                e.outerClose ? (v(), ue(s, {
                  key: 0,
                  name: "close",
                  alt: "閉じる"
                })) : (v(), g("i", no))
              ])) : M("", !0)
            ], 2),
            c("div", {
              class: U(["content", { panel: e.panel }])
            }, [
              T(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 512)) : M("", !0)
    ]),
    _: 3
  });
}
const Xn = /* @__PURE__ */ x(to, [["render", ao], ["__scopeId", "data-v-5cf391b8"]]), io = C({
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
  return v(), g("div", V(e.$attrs, {
    style: { background: e.background, color: e.color },
    class: "tag-label"
  }), [
    e.$slots.subLabel ? (v(), g("p", so, [
      T(e.$slots, "subLabel", {}, void 0, !0)
    ])) : M("", !0),
    c("p", {
      class: U(["main", { "has-sub-label": e.$slots.subLabel }])
    }, [
      T(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ], 16);
}
const Gn = /* @__PURE__ */ x(io, [["render", lo], ["__scopeId", "data-v-b80e4e79"]]), uo = C({
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
    }
  },
  emits: {
    "update:modelValue": null,
    blur: null,
    focus: null
  },
  setup(e, t) {
    const r = Ne(null), n = () => {
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
}), co = ["value"], po = ["value"];
function fo(e, t, r, n, o, a) {
  return e.multiline ? (v(), g("textarea", V({ key: 0 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-multi-line", { "has-error": e.error }],
    onInput: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[1] || (t[1] = (s) => e.$emit("focus")),
    onBlur: t[2] || (t[2] = (s) => e.$emit("blur")),
    ref: "textarea"
  }), null, 16, co)) : (v(), g("input", V({ key: 1 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-single-line", { "has-error": e.error }],
    type: "text",
    onInput: t[3] || (t[3] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[4] || (t[4] = (s) => e.$emit("focus")),
    onBlur: t[5] || (t[5] = (s) => e.$emit("blur"))
  }), null, 16, po));
}
const Zn = /* @__PURE__ */ x(uo, [["render", fo], ["__scopeId", "data-v-2edfa012"]]), vo = C({
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
  return v(), g("label", {
    class: U(["toggle-label-set", {
      "is-active": e.isActive,
      "is-button": e.isButton,
      "is-disabled": e.disabled,
      "is-flipped": e.isFlipped
    }])
  }, [
    c("div", ho, [
      T(e.$slots, "toggle", {}, void 0, !0)
    ]),
    c("div", mo, [
      T(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Jn = /* @__PURE__ */ x(vo, [["render", go], ["__scopeId", "data-v-29bfced2"]]), yo = C({
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
}), bo = (e) => (Ue("data-v-36bffd3f"), e = e(), Xe(), e), wo = { class: "toggle-switch" }, $o = ["checked", "disabled"], ko = /* @__PURE__ */ bo(() => /* @__PURE__ */ c("div", { class: "toggle" }, null, -1)), Oo = [
  ko
];
function Bo(e, t, r, n, o, a) {
  return v(), g("label", wo, [
    c("input", V(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled || void 0,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "checkbox",
      type: "checkbox"
    }), null, 16, $o),
    c("div", {
      class: U(["switch-base", { "is-disabled": e.disabled }])
    }, Oo, 2)
  ]);
}
const Kn = /* @__PURE__ */ x(yo, [["render", Bo], ["__scopeId", "data-v-36bffd3f"]]);
var R = "top", W = "bottom", N = "right", L = "left", Je = "auto", Ie = [R, W, N, L], de = "start", ke = "end", Io = "clippingParents", xt = "viewport", ge = "popper", Ao = "reference", gt = /* @__PURE__ */ Ie.reduce(function(e, t) {
  return e.concat([t + "-" + de, t + "-" + ke]);
}, []), Dt = /* @__PURE__ */ [].concat(Ie, [Je]).reduce(function(e, t) {
  return e.concat([t, t + "-" + de, t + "-" + ke]);
}, []), Eo = "beforeRead", So = "read", Co = "afterRead", xo = "beforeMain", Do = "main", _o = "afterMain", To = "beforeWrite", Po = "write", Ro = "afterWrite", Lo = [Eo, So, Co, xo, Do, _o, To, Po, Ro];
function X(e) {
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
function Ke(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !H(a) || !X(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function jo(e) {
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
      !H(o) || !X(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Mo = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vo,
  effect: jo,
  requires: ["computeStyles"]
};
function Y(e) {
  return e.split("-")[0];
}
var ae = Math.max, Le = Math.min, ce = Math.round;
function ze() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _t() {
  return !/^((?!chrome|android).)*safari/i.test(ze());
}
function pe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && H(e) && (o = e.offsetWidth > 0 && ce(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ce(n.height) / e.offsetHeight || 1);
  var s = ie(e) ? F(e) : window, i = s.visualViewport, l = !_t() && r, d = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, y = n.width / o, $ = n.height / a;
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
function Qe(e) {
  var t = pe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Tt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ke(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function G(e) {
  return F(e).getComputedStyle(e);
}
function Fo(e) {
  return ["table", "td", "th"].indexOf(X(e)) >= 0;
}
function J(e) {
  return ((ie(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function je(e) {
  return X(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ke(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    J(e)
  );
}
function yt(e) {
  return !H(e) || // https://github.com/popperjs/popper-core/issues/837
  G(e).position === "fixed" ? null : e.offsetParent;
}
function Ho(e) {
  var t = /firefox/i.test(ze()), r = /Trident/i.test(ze());
  if (r && H(e)) {
    var n = G(e);
    if (n.position === "fixed")
      return null;
  }
  var o = je(e);
  for (Ke(o) && (o = o.host); H(o) && ["html", "body"].indexOf(X(o)) < 0; ) {
    var a = G(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ae(e) {
  for (var t = F(e), r = yt(e); r && Fo(r) && G(r).position === "static"; )
    r = yt(r);
  return r && (X(r) === "html" || X(r) === "body" && G(r).position === "static") ? t : r || Ho(e) || t;
}
function et(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, r) {
  return ae(e, Le(t, r));
}
function Wo(e, t, r) {
  var n = we(e, t, r);
  return n > r ? r : n;
}
function Pt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rt(e) {
  return Object.assign({}, Pt(), e);
}
function Lt(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var No = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Rt(typeof t != "number" ? t : Lt(t, Ie));
};
function zo(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Y(r.placement), l = et(i), d = [L, N].indexOf(i) >= 0, u = d ? "height" : "width";
  if (!(!a || !s)) {
    var y = No(o.padding, r), $ = Qe(a), p = l === "y" ? R : L, O = l === "y" ? W : N, m = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], h = s[l] - r.rects.reference[l], k = Ae(a), I = k ? l === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, A = m / 2 - h / 2, f = y[p], b = I - $[u] - y[O], w = I / 2 - $[u] / 2 + A, B = we(f, w, b), D = l;
    r.modifiersData[n] = (t = {}, t[D] = B, t.centerOffset = B - w, t);
  }
}
function qo(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Tt(t.elements.popper, o) && (t.elements.arrow = o));
}
const Yo = {
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
var Uo = {
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
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, y = e.isFixed, $ = s.x, p = $ === void 0 ? 0 : $, O = s.y, m = O === void 0 ? 0 : O, h = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = h.x, m = h.y;
  var k = s.hasOwnProperty("x"), I = s.hasOwnProperty("y"), A = L, f = R, b = window;
  if (d) {
    var w = Ae(r), B = "clientHeight", D = "clientWidth";
    if (w === F(r) && (w = J(r), G(w).position !== "static" && i === "absolute" && (B = "scrollHeight", D = "scrollWidth")), w = w, o === R || (o === L || o === N) && a === ke) {
      f = W;
      var S = y && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[B]
      );
      m -= S - n.height, m *= l ? 1 : -1;
    }
    if (o === L || (o === R || o === W) && a === ke) {
      A = N;
      var E = y && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[D]
      );
      p -= E - n.width, p *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: i
  }, d && Uo), z = u === !0 ? Xo({
    x: p,
    y: m
  }, F(r)) : {
    x: p,
    y: m
  };
  if (p = z.x, m = z.y, l) {
    var P;
    return Object.assign({}, _, (P = {}, P[f] = I ? "0" : "", P[A] = k ? "0" : "", P.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", P));
  }
  return Object.assign({}, _, (t = {}, t[f] = I ? m + "px" : "", t[A] = k ? p + "px" : "", t.transform = "", t));
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
var _e = {
  passive: !0
};
function Jo(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = F(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, _e);
  }), i && l.addEventListener("resize", r.update, _e), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, _e);
    }), i && l.removeEventListener("resize", r.update, _e);
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
function Te(e) {
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
function tt(e) {
  var t = F(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function rt(e) {
  return pe(J(e)).left + tt(e).scrollLeft;
}
function tn(e, t) {
  var r = F(e), n = J(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var d = _t();
    (d || !d && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + rt(e),
    y: l
  };
}
function rn(e) {
  var t, r = J(e), n = tt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ae(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = ae(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + rt(e), l = -n.scrollTop;
  return G(o || r).direction === "rtl" && (i += ae(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function ot(e) {
  var t = G(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Vt(e) {
  return ["html", "body", "#document"].indexOf(X(e)) >= 0 ? e.ownerDocument.body : H(e) && ot(e) ? e : Vt(je(e));
}
function $e(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Vt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = F(n), s = o ? [a].concat(a.visualViewport || [], ot(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat($e(je(s)))
  );
}
function qe(e) {
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
  return t === xt ? qe(tn(e, r)) : ie(t) ? on(t, r) : qe(rn(J(e)));
}
function nn(e) {
  var t = $e(je(e)), r = ["absolute", "fixed"].indexOf(G(e).position) >= 0, n = r && H(e) ? Ae(e) : e;
  return ie(n) ? t.filter(function(o) {
    return ie(o) && Tt(o, n) && X(o) !== "body";
  }) : [];
}
function an(e, t, r, n) {
  var o = t === "clippingParents" ? nn(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, d) {
    var u = $t(e, d, n);
    return l.top = ae(u.top, l.top), l.right = Le(u.right, l.right), l.bottom = Le(u.bottom, l.bottom), l.left = ae(u.left, l.left), l;
  }, $t(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function jt(e) {
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
    case L:
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
  var d = o ? et(o) : null;
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Io : i, d = r.rootBoundary, u = d === void 0 ? xt : d, y = r.elementContext, $ = y === void 0 ? ge : y, p = r.altBoundary, O = p === void 0 ? !1 : p, m = r.padding, h = m === void 0 ? 0 : m, k = Rt(typeof h != "number" ? h : Lt(h, Ie)), I = $ === ge ? Ao : ge, A = e.rects.popper, f = e.elements[O ? I : $], b = an(ie(f) ? f : f.contextElement || J(e.elements.popper), l, u, s), w = pe(e.elements.reference), B = jt({
    reference: w,
    element: A,
    strategy: "absolute",
    placement: o
  }), D = qe(Object.assign({}, A, B)), S = $ === ge ? D : w, E = {
    top: b.top - S.top + k.top,
    bottom: S.bottom - b.bottom + k.bottom,
    left: b.left - S.left + k.left,
    right: S.right - b.right + k.right
  }, _ = e.modifiersData.offset;
  if ($ === ge && _) {
    var z = _[o];
    Object.keys(E).forEach(function(P) {
      var K = [N, W].indexOf(P) >= 0 ? 1 : -1, Q = [R, W].indexOf(P) >= 0 ? "y" : "x";
      E[P] += z[Q] * K;
    });
  }
  return E;
}
function sn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Dt : l, u = fe(n), y = u ? i ? gt : gt.filter(function(O) {
    return fe(O) === u;
  }) : Ie, $ = y.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  $.length === 0 && ($ = y);
  var p = $.reduce(function(O, m) {
    return O[m] = Oe(e, {
      placement: m,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Y(m)], O;
  }, {});
  return Object.keys(p).sort(function(O, m) {
    return p[O] - p[m];
  });
}
function ln(e) {
  if (Y(e) === Je)
    return [];
  var t = Te(e);
  return [wt(e), t, wt(t)];
}
function un(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, d = r.padding, u = r.boundary, y = r.rootBoundary, $ = r.altBoundary, p = r.flipVariations, O = p === void 0 ? !0 : p, m = r.allowedAutoPlacements, h = t.options.placement, k = Y(h), I = k === h, A = l || (I || !O ? [Te(h)] : ln(h)), f = [h].concat(A).reduce(function(se, Z) {
      return se.concat(Y(Z) === Je ? sn(t, {
        placement: Z,
        boundary: u,
        rootBoundary: y,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: m
      }) : Z);
    }, []), b = t.rects.reference, w = t.rects.popper, B = /* @__PURE__ */ new Map(), D = !0, S = f[0], E = 0; E < f.length; E++) {
      var _ = f[E], z = Y(_), P = fe(_) === de, K = [R, W].indexOf(z) >= 0, Q = K ? "width" : "height", j = Oe(t, {
        placement: _,
        boundary: u,
        rootBoundary: y,
        altBoundary: $,
        padding: d
      }), q = K ? P ? N : L : P ? W : R;
      b[Q] > w[Q] && (q = Te(q));
      var Ee = Te(q), ee = [];
      if (a && ee.push(j[z] <= 0), i && ee.push(j[q] <= 0, j[Ee] <= 0), ee.every(function(se) {
        return se;
      })) {
        S = _, D = !1;
        break;
      }
      B.set(_, ee);
    }
    if (D)
      for (var Se = O ? 3 : 1, Me = function(Z) {
        var me = f.find(function(xe) {
          var te = B.get(xe);
          if (te)
            return te.slice(0, Z).every(function(Fe) {
              return Fe;
            });
        });
        if (me)
          return S = me, "break";
      }, he = Se; he > 0; he--) {
        var Ce = Me(he);
        if (Ce === "break") break;
      }
    t.placement !== S && (t.modifiersData[n]._skip = !0, t.placement = S, t.reset = !0);
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
  return [R, N, W, L].some(function(t) {
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
  var n = Y(e), o = [L, R].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [L, N].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function vn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = Dt.reduce(function(u, y) {
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
  t.modifiersData[r] = jt({
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
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, y = r.padding, $ = r.tether, p = $ === void 0 ? !0 : $, O = r.tetherOffset, m = O === void 0 ? 0 : O, h = Oe(t, {
    boundary: l,
    rootBoundary: d,
    padding: y,
    altBoundary: u
  }), k = Y(t.placement), I = fe(t.placement), A = !I, f = et(k), b = yn(f), w = t.modifiersData.popperOffsets, B = t.rects.reference, D = t.rects.popper, S = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, E = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var P, K = f === "y" ? R : L, Q = f === "y" ? W : N, j = f === "y" ? "height" : "width", q = w[f], Ee = q + h[K], ee = q - h[Q], Se = p ? -D[j] / 2 : 0, Me = I === de ? B[j] : D[j], he = I === de ? -D[j] : -B[j], Ce = t.elements.arrow, se = p && Ce ? Qe(Ce) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pt(), me = Z[K], xe = Z[Q], te = we(0, B[j], se[j]), Fe = A ? B[j] / 2 - Se - te - me - E.mainAxis : Me - te - me - E.mainAxis, Mt = A ? -B[j] / 2 + Se + te + xe + E.mainAxis : he + te + xe + E.mainAxis, He = t.elements.arrow && Ae(t.elements.arrow), Ft = He ? f === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, nt = (P = _ == null ? void 0 : _[f]) != null ? P : 0, Ht = q + Fe - nt - Ft, Wt = q + Mt - nt, at = we(p ? Le(Ee, Ht) : Ee, q, p ? ae(ee, Wt) : ee);
      w[f] = at, z[f] = at - q;
    }
    if (i) {
      var it, Nt = f === "x" ? R : L, zt = f === "x" ? W : N, re = w[b], De = b === "y" ? "height" : "width", st = re + h[Nt], lt = re - h[zt], We = [R, L].indexOf(k) !== -1, ut = (it = _ == null ? void 0 : _[b]) != null ? it : 0, dt = We ? st : re - B[De] - D[De] - ut + E.altAxis, ct = We ? re + B[De] + D[De] - ut - E.altAxis : lt, pt = p && We ? Wo(dt, re, ct) : we(p ? dt : st, re, p ? ct : lt);
      w[b] = pt, z[b] = pt - re;
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
  return e === F(e) || !H(e) ? tt(e) : $n(e);
}
function On(e) {
  var t = e.getBoundingClientRect(), r = ce(t.width) / e.offsetWidth || 1, n = ce(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Bn(e, t, r) {
  r === void 0 && (r = !1);
  var n = H(t), o = H(t) && On(t), a = J(t), s = pe(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((X(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ot(a)) && (i = kn(t)), H(t) ? (l = pe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = rt(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function In(e) {
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
function An(e) {
  var t = In(e);
  return Lo.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function En(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Sn(e) {
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
function It() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Cn(e) {
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
    }, y = [], $ = !1, p = {
      state: u,
      setOptions: function(k) {
        var I = typeof k == "function" ? k(u.options) : k;
        m(), u.options = Object.assign({}, a, u.options, I), u.scrollParents = {
          reference: ie(i) ? $e(i) : i.contextElement ? $e(i.contextElement) : [],
          popper: $e(l)
        };
        var A = An(Sn([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = A.filter(function(f) {
          return f.enabled;
        }), O(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!$) {
          var k = u.elements, I = k.reference, A = k.popper;
          if (It(I, A)) {
            u.rects = {
              reference: Bn(I, Ae(A), u.options.strategy === "fixed"),
              popper: Qe(A)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
              return u.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var f = 0; f < u.orderedModifiers.length; f++) {
              if (u.reset === !0) {
                u.reset = !1, f = -1;
                continue;
              }
              var b = u.orderedModifiers[f], w = b.fn, B = b.options, D = B === void 0 ? {} : B, S = b.name;
              typeof w == "function" && (u = w({
                state: u,
                options: D,
                name: S,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: En(function() {
        return new Promise(function(h) {
          p.forceUpdate(), h(u);
        });
      }),
      destroy: function() {
        m(), $ = !0;
      }
    };
    if (!It(i, l))
      return p;
    p.setOptions(d).then(function(h) {
      !$ && d.onFirstUpdate && d.onFirstUpdate(h);
    });
    function O() {
      u.orderedModifiers.forEach(function(h) {
        var k = h.name, I = h.options, A = I === void 0 ? {} : I, f = h.effect;
        if (typeof f == "function") {
          var b = f({
            state: u,
            name: k,
            instance: p,
            options: A
          }), w = function() {
          };
          y.push(b || w);
        }
      });
    }
    function m() {
      y.forEach(function(h) {
        return h();
      }), y = [];
    }
    return p;
  };
}
var xn = [Ko, gn, Zo, Mo, hn, dn, wn, Yo, pn], Dn = /* @__PURE__ */ Cn({
  defaultModifiers: xn
});
const _n = C({
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
    const t = Ne(null), r = Ne(null);
    let n;
    return { hoverEvent: () => {
      !t.value || !r.value || (n && n.destroy(), n = Dn(t.value, r.value, {
        placement: "top",
        ...e.options
      }));
    }, trigger: t, container: r };
  }
}), Tn = { class: "tooltip" }, Pn = {
  class: "container",
  ref: "container"
};
function Rn(e, t, r, n, o, a) {
  const s = Be("Icon");
  return v(), g("span", Tn, [
    c("span", {
      class: "trigger",
      ref: "trigger",
      onMouseenter: t[0] || (t[0] = (...i) => e.hoverEvent && e.hoverEvent(...i))
    }, [
      T(e.$slots, "trigger", {}, void 0, !0),
      e.$slots.trigger ? M("", !0) : (v(), ue(s, {
        key: 0,
        name: "info"
      }))
    ], 544),
    c("div", Pn, [
      c("div", {
        class: U(["body", { "has-skin": !e.skeleton }]),
        style: ne({
          maxWidth: `${e.maxWidth}px`
        })
      }, [
        T(e.$slots, "default", {}, void 0, !0)
      ], 6)
    ], 512)
  ]);
}
const Qn = /* @__PURE__ */ x(_n, [["render", Rn], ["__scopeId", "data-v-e8caa5d7"]]);
export {
  Vn as AvatarImg,
  jn as Card,
  Mn as CheckBox,
  Fn as EnhancedIconButton,
  Hn as FieldGroup,
  Wn as FlatButton,
  ve as Icon,
  zn as Modal,
  Nn as ProtectedLink,
  qn as Radio,
  Yn as RatingBar,
  Un as SelectBox,
  Xn as ShortModal,
  Gn as TagLabel,
  Zn as TextInput,
  Jn as ToggleLabelSet,
  Kn as ToggleSwitch,
  Qn as Tooltip
};
