import { defineComponent as _, openBlock as f, createElementBlock as w, mergeProps as L, renderSlot as P, toDisplayString as ae, resolveComponent as Se, normalizeClass as X, createElementVNode as d, createVNode as Je, createBlock as de, resolveDynamicComponent as _t, withCtx as je, pushScopeId as Ze, popScopeId as Ke, createTextVNode as Jt, createCommentVNode as M, computed as mt, Transition as xt, normalizeStyle as ie, withModifiers as Zt, withDirectives as Kt, vShow as Qt, Fragment as er, renderList as tr, ref as Ye, toRefs as rr, watch as or, nextTick as nr } from "vue";
const ar = "data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20width%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h200v200h-200z%22%20fill%3D%22%23D7D9E3%22%2F%3E%3Cg%20fill%3D%22%23888A93%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2271%22%20r%3D%2253%22%2F%3E%3Cpath%20d%3D%22m179%20200c0-37.555363-35.369505-68-79-68-43.6304952%200-79%2030.444637-79%2068s158%2037.555363%20158%200z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", ir = _({
  inheritAttrs: !1,
  props: {
    src: {
      type: String
    }
  },
  setup() {
    return {
      avatarDefault: ar
    };
  }
}), x = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function sr(e, t, r, n, o, a) {
  return f(), w("div", L(e.$attrs, {
    style: { backgroundImage: `url(${e.src || e.avatarDefault})` },
    class: "avatar-icon",
    role: "img"
  }), null, 16);
}
const zn = /* @__PURE__ */ x(ir, [["render", sr], ["__scopeId", "data-v-1e9b8680"]]), lr = _({
  inheritAttrs: !1,
  props: {
    skin: {
      type: String,
      default: "default"
    }
  }
});
function ur(e, t, r, n, o, a) {
  return f(), w("div", L(e.$attrs, {
    class: [`is-skin-${e.skin}`, "card"]
  }), [
    P(e.$slots, "default")
  ], 16);
}
const Yn = /* @__PURE__ */ x(lr, [["render", ur]]), cr = {
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
}, dr = _({
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup() {
    return {
      iconMap: cr
    };
  }
});
function pr(e, t, r, n, o, a) {
  return f(), w("i", L(e.$attrs, { class: "icon" }), ae(e.iconMap[e.name]), 17);
}
const me = /* @__PURE__ */ x(dr, [["render", pr], ["__scopeId", "data-v-d54d8182"]]), fr = _({
  inheritAttrs: !1,
  components: {
    Icon: me
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
}), vr = ["checked", "disabled"], hr = { class: "icon-wrap" };
function mr(e, t, r, n, o, a) {
  const s = Se("Icon");
  return f(), w("label", {
    class: X(["check-box", { "is-disabled": e.disabled }])
  }, [
    d("input", L(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "input",
      type: "checkbox"
    }), null, 16, vr),
    d("div", hr, [
      Je(s, { name: "check" })
    ])
  ], 2);
}
const Un = /* @__PURE__ */ x(fr, [["render", mr], ["__scopeId", "data-v-130587c5"]]), gr = _({
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}), yr = (e) => (Ze("data-v-99143396"), e = e(), Ke(), e), br = /* @__PURE__ */ yr(() => /* @__PURE__ */ d("svg", {
  class: "svg",
  viewBox: "0 0 40 40"
}, [
  /* @__PURE__ */ d("defs", null, [
    /* @__PURE__ */ d("circle", {
      id: "path1",
      cx: "20",
      cy: "20",
      r: "20"
    }),
    /* @__PURE__ */ d("mask", {
      id: "mask-2",
      maskContentUnits: "userSpaceOnUse",
      maskUnits: "objectBoundingBox",
      x: "0",
      y: "0",
      width: "40",
      height: "40",
      fill: "white"
    }, [
      /* @__PURE__ */ d("use", { "xlink:href": "#path1" })
    ])
  ]),
  /* @__PURE__ */ d("g", {
    id: "Artboard",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ d("g", { id: "svg" }, [
      /* @__PURE__ */ d("use", {
        id: "Oval",
        stroke: "#012F89",
        mask: "url(#mask-2)",
        "stroke-width": "2",
        "stroke-dasharray": "2.2,2.2",
        "xlink:href": "#path1"
      }),
      /* @__PURE__ */ d("path", {
        class: "inner-circle",
        d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z",
        id: "Oval",
        fill: "#012F89"
      })
    ])
  ])
], -1)), wr = { class: "icon-wrap" };
function $r(e, t, r, n, o, a) {
  return f(), de(_t(e.tag), L(e.$attrs, { class: "enhanced-icon" }), {
    default: je(() => [
      br,
      d("p", wr, [
        P(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 16);
}
const Xn = /* @__PURE__ */ x(gr, [["render", $r], ["__scopeId", "data-v-99143396"]]), Or = _({
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
}), kr = {
  key: 0,
  class: "label-line"
}, Er = { class: "label" }, Ir = { key: 0 }, Sr = { class: "field-wrap" }, Ar = {
  key: 1,
  class: "error-message"
}, Br = { class: "note" };
function Dr(e, t, r, n, o, a) {
  return f(), w("div", L(e.$attrs, { class: "field-group" }), [
    e.label ? (f(), w("div", kr, [
      d("p", Er, [
        Jt(ae(e.label), 1),
        e.subLabel ? (f(), w("small", Ir, ae(e.subLabel), 1)) : M("", !0)
      ]),
      e.required !== null ? (f(), w("p", {
        key: 0,
        class: X(["required-badge", { "is-required": e.required }])
      }, ae(e.required ? "必須" : "任意"), 3)) : M("", !0)
    ])) : M("", !0),
    d("div", Sr, [
      P(e.$slots, "default", {}, void 0, !0)
    ]),
    e.errorMessage ? (f(), w("p", Ar, ae(e.errorMessage), 1)) : M("", !0),
    d("div", Br, [
      P(e.$slots, "note", {}, void 0, !0)
    ])
  ], 16);
}
const Gn = /* @__PURE__ */ x(Or, [["render", Dr], ["__scopeId", "data-v-1a297517"]]), Cr = _({
  inheritAttrs: !1,
  components: {
    Icon: me
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
}), _r = {
  key: 0,
  class: "icon-wrap is-left"
}, xr = { class: "body" }, Pr = {
  key: 1,
  class: "icon-wrap is-right"
};
function Tr(e, t, r, n, o, a) {
  return f(), de(_t(e.tag), L(e.$attrs, {
    class: [[`skin-${e.skin}`, `size-${e.size}`, e.enhanced && "is-enhanced"], "flat-button"],
    disabled: e.disabled || void 0
  }), {
    default: je(() => [
      e.$slots.leftIcon ? (f(), w("div", _r, [
        P(e.$slots, "leftIcon", {}, void 0, !0)
      ])) : M("", !0),
      d("div", xr, [
        P(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.rightIcon ? (f(), w("div", Pr, [
        P(e.$slots, "rightIcon", {}, void 0, !0)
      ])) : M("", !0)
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
const Jn = /* @__PURE__ */ x(Cr, [["render", Tr], ["__scopeId", "data-v-5249a286"]]), gt = (e) => {
  if (e && !(e.includes(":") && !e.match(/^https?:\/\//i)))
    return e;
}, Rr = _({
  // root属性によるcomputedのオーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: !1,
  props: {
    href: {
      type: String,
      validator(e) {
        return !!gt(e);
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
    const t = mt(() => e.force ? e.href : gt(e.href)), r = mt(() => e.target === "_blank" ? `noopener ${e.rel || ""}`.replace(/\s$/, "") : e.rel);
    return {
      escapedHref: t,
      formattedRel: r
    };
  }
}), Vr = ["href", "rel", "target"];
function Nr(e, t, r, n, o, a) {
  return f(), w("a", L(e.$attrs, {
    href: e.escapedHref,
    rel: e.formattedRel,
    target: e.target
  }), [
    P(e.$slots, "default")
  ], 16, Vr);
}
const Zn = /* @__PURE__ */ x(Rr, [["render", Nr]]);
function Lr(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  } else
    return Array.from(e);
}
var Qe = !1;
if (typeof window < "u") {
  var yt = {
    get passive() {
      Qe = !0;
    }
  };
  window.addEventListener("testPassive", null, yt), window.removeEventListener("testPassive", null, yt);
}
var Pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), ce = [], Ve = !1, et = -1, we = void 0, $e = void 0, Tt = function(t) {
  return ce.some(function(r) {
    return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
  });
}, Ne = function(t) {
  var r = t || window.event;
  return Tt(r.target) || r.touches.length > 1 ? !0 : (r.preventDefault && r.preventDefault(), !1);
}, jr = function(t) {
  if ($e === void 0) {
    var r = !!t, n = window.innerWidth - document.documentElement.clientWidth;
    r && n > 0 && ($e = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
  }
  we === void 0 && (we = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Mr = function() {
  $e !== void 0 && (document.body.style.paddingRight = $e, $e = void 0), we !== void 0 && (document.body.style.overflow = we, we = void 0);
}, Fr = function(t) {
  return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
}, qr = function(t, r) {
  var n = t.targetTouches[0].clientY - et;
  return Tt(t.target) ? !1 : r && r.scrollTop === 0 && n > 0 || Fr(r) && n < 0 ? Ne(t) : (t.stopPropagation(), !0);
}, Hr = function(t, r) {
  if (!t) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!ce.some(function(o) {
    return o.targetElement === t;
  })) {
    var n = {
      targetElement: t,
      options: {}
    };
    ce = [].concat(Lr(ce), [n]), Pt ? (t.ontouchstart = function(o) {
      o.targetTouches.length === 1 && (et = o.targetTouches[0].clientY);
    }, t.ontouchmove = function(o) {
      o.targetTouches.length === 1 && qr(o, t);
    }, Ve || (document.addEventListener("touchmove", Ne, Qe ? { passive: !1 } : void 0), Ve = !0)) : jr(r);
  }
}, bt = function() {
  Pt ? (ce.forEach(function(t) {
    t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null;
  }), Ve && (document.removeEventListener("touchmove", Ne, Qe ? { passive: !1 } : void 0), Ve = !1), et = -1) : Mr(), ce = [];
};
const Wr = _({
  components: {
    Icon: me
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
          return Hr(t);
        bt();
      }
    }
  },
  beforeUnmount() {
    bt();
  }
}), zr = { class: "modal-body" };
function Yr(e, t, r, n, o, a) {
  const s = Se("Icon");
  return f(), de(xt, { name: "fade" }, {
    default: je(() => [
      e.visible ? (f(), w("div", {
        key: 0,
        class: "modal",
        role: "dialog",
        "aria-modal": "",
        style: ie({ zIndex: e.zIndex })
      }, [
        d("div", {
          class: "filter",
          onClick: t[0] || (t[0] = (i) => e.$emit("close")),
          style: ie({ background: e.filterBackground })
        }, null, 4),
        d("div", {
          class: "modal-container",
          style: ie({ margin: `${e.gutter}px` })
        }, [
          d("div", zr, [
            e.hasClose ? (f(), w("div", {
              key: 0,
              class: "close-wrap",
              onClick: t[2] || (t[2] = (i) => e.$emit("close"))
            }, [
              d("button", {
                type: "button",
                class: "close",
                "aria-label": "閉じる",
                onClick: t[1] || (t[1] = Zt((i) => e.$emit("close"), ["stop"]))
              }, [
                Je(s, { name: "close" })
              ])
            ])) : M("", !0),
            d("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              P(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 4)) : M("", !0)
    ]),
    _: 3
  });
}
const Kn = /* @__PURE__ */ x(Wr, [["render", Yr], ["__scopeId", "data-v-2db1b433"]]), Ur = _({
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
}), Xr = (e) => (Ze("data-v-4f75ed60"), e = e(), Ke(), e), Gr = ["checked"], Jr = /* @__PURE__ */ Xr(() => /* @__PURE__ */ d("div", { class: "dot" }, null, -1));
function Zr(e, t, r, n, o, a) {
  return f(), w("label", {
    class: X(["radio", { "is-disabled": e.disabled }])
  }, [
    d("input", L(e.$attrs, {
      checked: e.modelValue,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "input",
      type: "radio"
    }), null, 16, Gr),
    Jr
  ], 2);
}
const Qn = /* @__PURE__ */ x(Ur, [["render", Zr], ["__scopeId", "data-v-4f75ed60"]]), Kr = _({
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
function Qr(e, t, r, n, o, a) {
  return f(), w("div", L(e.$attrs, { class: "score-bar" }), [
    d("div", {
      class: "inner",
      style: ie({
        width: `${e.value / e.max * 100}%`,
        background: e.value >= e.highThreshold ? e.highBarColor : e.barColor
      })
    }, null, 4)
  ], 16);
}
const ea = /* @__PURE__ */ x(Kr, [["render", Qr], ["__scopeId", "data-v-814aab7c"]]), eo = _({
  components: {
    Icon: me
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
}), to = { class: "select-box" }, ro = ["value"], oo = ["value"], no = { class: "icon-wrap" };
function ao(e, t, r, n, o, a) {
  const s = Se("Icon");
  return f(), w("div", to, [
    d("select", {
      class: "select",
      value: e.modelValue,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i))
    }, [
      e.placeholder ? Kt((f(), w("option", {
        key: 0,
        value: ""
      }, ae(e.placeholder), 513)), [
        [Qt, !1]
      ]) : M("", !0),
      (f(!0), w(er, null, tr(e.options, (i) => (f(), w("option", {
        value: i.value,
        key: i.value
      }, ae(i.label), 9, oo))), 128))
    ], 40, ro),
    d("div", no, [
      Je(s, { name: "arrow-down" })
    ])
  ]);
}
const ta = /* @__PURE__ */ x(eo, [["render", ao], ["__scopeId", "data-v-e11577f7"]]), io = _({
  components: {
    Icon: me
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
}), so = {
  key: 0,
  class: "modal",
  ref: "modal"
}, lo = { class: "modal-body" }, uo = {
  key: 1,
  class: "icon-cancel"
};
function co(e, t, r, n, o, a) {
  const s = Se("Icon");
  return f(), de(xt, { name: "fade" }, {
    default: je(() => [
      e.visible ? (f(), w("div", so, [
        d("div", {
          class: "modal-overlay",
          style: ie({
            background: e.filterBackground,
            zIndex: e.zIndex
          }),
          onClick: t[0] || (t[0] = (i) => e.$emit("close"))
        }, null, 4),
        d("div", {
          class: "modal-container",
          style: ie({
            padding: `${e.gutter}px`,
            zIndex: e.zIndex
          })
        }, [
          d("div", lo, [
            d("div", {
              class: X(["close-wrap", { "outer-close": e.outerClose }])
            }, [
              e.hasClose ? (f(), w("p", {
                key: 0,
                class: "close",
                onClick: t[1] || (t[1] = (i) => e.$emit("close"))
              }, [
                e.outerClose ? (f(), de(s, {
                  key: 0,
                  name: "close",
                  alt: "閉じる"
                })) : (f(), w("i", uo))
              ])) : M("", !0)
            ], 2),
            d("div", {
              class: X(["content", { panel: e.panel }])
            }, [
              P(e.$slots, "default", {}, void 0, !0)
            ], 2)
          ])
        ], 4)
      ], 512)) : M("", !0)
    ]),
    _: 3
  });
}
const ra = /* @__PURE__ */ x(io, [["render", co], ["__scopeId", "data-v-d21b0974"]]), po = _({
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
}), fo = {
  key: 0,
  class: "sub"
};
function vo(e, t, r, n, o, a) {
  return f(), w("div", L(e.$attrs, {
    style: { background: e.background, color: e.color },
    class: "tag-label"
  }), [
    e.$slots.subLabel ? (f(), w("p", fo, [
      P(e.$slots, "subLabel", {}, void 0, !0)
    ])) : M("", !0),
    d("p", {
      class: X(["main", { "has-sub-label": e.$slots.subLabel }])
    }, [
      P(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ], 16);
}
const oa = /* @__PURE__ */ x(po, [["render", vo], ["__scopeId", "data-v-b448a5a6"]]), ho = _({
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
    const r = Ye(null), n = () => {
      r.value && e.autoExpand && (r.value.style.height = "", r.value.style.height = `${Math.max(
        r.value.scrollHeight,
        e.baseTextareaHeight
      )}px`);
    }, o = (s) => {
      t.emit("update:modelValue", s.target.value);
    }, { modelValue: a } = rr(e);
    return or(
      a,
      async () => {
        await nr(), n();
      },
      { immediate: !0 }
    ), {
      textarea: r,
      onInput: o
    };
  }
}), mo = ["value"], go = ["value"];
function yo(e, t, r, n, o, a) {
  return e.multiline ? (f(), w("textarea", L({ key: 0 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-multi-line", { "has-error": e.error }],
    onInput: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[1] || (t[1] = (s) => e.$emit("focus")),
    onBlur: t[2] || (t[2] = (s) => e.$emit("blur")),
    ref: "textarea"
  }), null, 16, mo)) : (f(), w("input", L({ key: 1 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-single-line", { "has-error": e.error }],
    type: "text",
    onInput: t[3] || (t[3] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[4] || (t[4] = (s) => e.$emit("focus")),
    onBlur: t[5] || (t[5] = (s) => e.$emit("blur"))
  }), null, 16, go));
}
const na = /* @__PURE__ */ x(ho, [["render", yo], ["__scopeId", "data-v-b0dc756c"]]), bo = _({
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
}), wo = { class: "toggle" }, $o = { class: "label" };
function Oo(e, t, r, n, o, a) {
  return f(), w("label", {
    class: X(["toggle-label-set", {
      "is-active": e.isActive,
      "is-button": e.isButton,
      "is-disabled": e.disabled,
      "is-flipped": e.isFlipped
    }])
  }, [
    d("div", wo, [
      P(e.$slots, "toggle", {}, void 0, !0)
    ]),
    d("div", $o, [
      P(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const aa = /* @__PURE__ */ x(bo, [["render", Oo], ["__scopeId", "data-v-29bfced2"]]), ko = _({
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
}), Eo = (e) => (Ze("data-v-b0aac0b1"), e = e(), Ke(), e), Io = { class: "toggle-switch" }, So = ["checked", "disabled"], Ao = /* @__PURE__ */ Eo(() => /* @__PURE__ */ d("div", { class: "toggle" }, null, -1)), Bo = [
  Ao
];
function Do(e, t, r, n, o, a) {
  return f(), w("label", Io, [
    d("input", L(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled || void 0,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "checkbox",
      type: "checkbox"
    }), null, 16, So),
    d("div", {
      class: X(["switch-base", { "is-disabled": e.disabled }])
    }, Bo, 2)
  ]);
}
const ia = /* @__PURE__ */ x(ko, [["render", Do], ["__scopeId", "data-v-b0aac0b1"]]);
var V = "top", q = "bottom", H = "right", N = "left", Me = "auto", Ae = [V, q, H, N], pe = "start", Ee = "end", Co = "clippingParents", Rt = "viewport", be = "popper", _o = "reference", wt = /* @__PURE__ */ Ae.reduce(function(e, t) {
  return e.concat([t + "-" + pe, t + "-" + Ee]);
}, []), Vt = /* @__PURE__ */ [].concat(Ae, [Me]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pe, t + "-" + Ee]);
}, []), xo = "beforeRead", Po = "read", To = "afterRead", Ro = "beforeMain", Vo = "main", No = "afterMain", Lo = "beforeWrite", jo = "write", Mo = "afterWrite", Ue = [xo, Po, To, Ro, Vo, No, Lo, jo, Mo];
function G(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function W(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function le(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function F(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Fo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !F(a) || !G(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function qo(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !F(o) || !G(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Ho = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fo,
  effect: qo,
  requires: ["computeStyles"]
};
function Y(e) {
  return e.split("-")[0];
}
var se = Math.max, Le = Math.min, fe = Math.round;
function Xe() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Nt() {
  return !/^((?!chrome|android).)*safari/i.test(Xe());
}
function ve(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && F(e) && (o = e.offsetWidth > 0 && fe(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && fe(n.height) / e.offsetHeight || 1);
  var s = le(e) ? W(e) : window, i = s.visualViewport, l = !Nt() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, g = n.width / o, O = n.height / a;
  return {
    width: g,
    height: O,
    top: u,
    right: c + g,
    bottom: u + O,
    left: c,
    x: c,
    y: u
  };
}
function rt(e) {
  var t = ve(e), r = e.offsetWidth, n = e.offsetHeight;
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
  if (r && tt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function U(e) {
  return W(e).getComputedStyle(e);
}
function Wo(e) {
  return ["table", "td", "th"].indexOf(G(e)) >= 0;
}
function K(e) {
  return ((le(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fe(e) {
  return G(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (tt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    K(e)
  );
}
function $t(e) {
  return !F(e) || // https://github.com/popperjs/popper-core/issues/837
  U(e).position === "fixed" ? null : e.offsetParent;
}
function zo(e) {
  var t = /firefox/i.test(Xe()), r = /Trident/i.test(Xe());
  if (r && F(e)) {
    var n = U(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Fe(e);
  for (tt(o) && (o = o.host); F(o) && ["html", "body"].indexOf(G(o)) < 0; ) {
    var a = U(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Be(e) {
  for (var t = W(e), r = $t(e); r && Wo(r) && U(r).position === "static"; )
    r = $t(r);
  return r && (G(r) === "html" || G(r) === "body" && U(r).position === "static") ? t : r || zo(e) || t;
}
function ot(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Oe(e, t, r) {
  return se(e, Le(t, r));
}
function Yo(e, t, r) {
  var n = Oe(e, t, r);
  return n > r ? r : n;
}
function jt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mt(e) {
  return Object.assign({}, jt(), e);
}
function Ft(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Uo = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Mt(typeof t != "number" ? t : Ft(t, Ae));
};
function Xo(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Y(r.placement), l = ot(i), c = [N, H].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var g = Uo(o.padding, r), O = rt(a), p = l === "y" ? V : N, E = l === "y" ? q : H, y = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], m = s[l] - r.rects.reference[l], k = Be(a), A = k ? l === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, S = y / 2 - m / 2, v = g[p], b = A - O[u] - g[E], h = A / 2 - O[u] / 2 + S, I = Oe(v, h, b), B = l;
    r.modifiersData[n] = (t = {}, t[B] = I, t.centerOffset = I - h, t);
  }
}
function Go(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (F(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Lt(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const Jo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Xo,
  effect: Go,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function he(e) {
  return e.split("-")[1];
}
var Zo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ko(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: fe(t * o) / o || 0,
    y: fe(r * o) / o || 0
  };
}
function Ot(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, g = e.isFixed, O = s.x, p = O === void 0 ? 0 : O, E = s.y, y = E === void 0 ? 0 : E, m = typeof u == "function" ? u({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = m.x, y = m.y;
  var k = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), S = N, v = V, b = window;
  if (c) {
    var h = Be(r), I = "clientHeight", B = "clientWidth";
    if (h === W(r) && (h = K(r), U(h).position !== "static" && i === "absolute" && (I = "scrollHeight", B = "scrollWidth")), h = h, o === V || (o === N || o === H) && a === Ee) {
      v = q;
      var D = g && h === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        h[I]
      );
      y -= D - n.height, y *= l ? 1 : -1;
    }
    if (o === N || (o === V || o === q) && a === Ee) {
      S = H;
      var C = g && h === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        h[B]
      );
      p -= C - n.width, p *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: i
  }, c && Zo), T = u === !0 ? Ko({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  if (p = T.x, y = T.y, l) {
    var R;
    return Object.assign({}, $, (R = {}, R[v] = A ? "0" : "", R[S] = k ? "0" : "", R.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", R));
  }
  return Object.assign({}, $, (t = {}, t[v] = A ? y + "px" : "", t[S] = k ? p + "px" : "", t.transform = "", t));
}
function Qo(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var c = U(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(g) {
      return c.indexOf(g) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: Y(t.placement),
    variation: he(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ot(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ot(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const en = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qo,
  data: {}
};
var Te = {
  passive: !0
};
function tn(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = W(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Te);
  }), i && l.addEventListener("resize", r.update, Te), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Te);
    }), i && l.removeEventListener("resize", r.update, Te);
  };
}
const rn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tn,
  data: {}
};
var on = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Re(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return on[t];
  });
}
var nn = {
  start: "end",
  end: "start"
};
function kt(e) {
  return e.replace(/start|end/g, function(t) {
    return nn[t];
  });
}
function nt(e) {
  var t = W(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function at(e) {
  return ve(K(e)).left + nt(e).scrollLeft;
}
function an(e, t) {
  var r = W(e), n = K(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = Nt();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + at(e),
    y: l
  };
}
function sn(e) {
  var t, r = K(e), n = nt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = se(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = se(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + at(e), l = -n.scrollTop;
  return U(o || r).direction === "rtl" && (i += se(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function it(e) {
  var t = U(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function qt(e) {
  return ["html", "body", "#document"].indexOf(G(e)) >= 0 ? e.ownerDocument.body : F(e) && it(e) ? e : qt(Fe(e));
}
function ke(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = qt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = W(n), s = o ? [a].concat(a.visualViewport || [], it(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ke(Fe(s)))
  );
}
function Ge(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ln(e, t) {
  var r = ve(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Et(e, t, r) {
  return t === Rt ? Ge(an(e, r)) : le(t) ? ln(t, r) : Ge(sn(K(e)));
}
function un(e) {
  var t = ke(Fe(e)), r = ["absolute", "fixed"].indexOf(U(e).position) >= 0, n = r && F(e) ? Be(e) : e;
  return le(n) ? t.filter(function(o) {
    return le(o) && Lt(o, n) && G(o) !== "body";
  }) : [];
}
function cn(e, t, r, n) {
  var o = t === "clippingParents" ? un(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, c) {
    var u = Et(e, c, n);
    return l.top = se(u.top, l.top), l.right = Le(u.right, l.right), l.bottom = Le(u.bottom, l.bottom), l.left = se(u.left, l.left), l;
  }, Et(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ht(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Y(n) : null, a = n ? he(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case V:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case q:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case H:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case N:
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
  var c = o ? ot(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case pe:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Ee:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ie(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Co : i, c = r.rootBoundary, u = c === void 0 ? Rt : c, g = r.elementContext, O = g === void 0 ? be : g, p = r.altBoundary, E = p === void 0 ? !1 : p, y = r.padding, m = y === void 0 ? 0 : y, k = Mt(typeof m != "number" ? m : Ft(m, Ae)), A = O === be ? _o : be, S = e.rects.popper, v = e.elements[E ? A : O], b = cn(le(v) ? v : v.contextElement || K(e.elements.popper), l, u, s), h = ve(e.elements.reference), I = Ht({
    reference: h,
    element: S,
    strategy: "absolute",
    placement: o
  }), B = Ge(Object.assign({}, S, I)), D = O === be ? B : h, C = {
    top: b.top - D.top + k.top,
    bottom: D.bottom - b.bottom + k.bottom,
    left: b.left - D.left + k.left,
    right: D.right - b.right + k.right
  }, $ = e.modifiersData.offset;
  if (O === be && $) {
    var T = $[o];
    Object.keys(C).forEach(function(R) {
      var Q = [H, q].indexOf(R) >= 0 ? 1 : -1, ee = [V, q].indexOf(R) >= 0 ? "y" : "x";
      C[R] += T[ee] * Q;
    });
  }
  return C;
}
function dn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Vt : l, u = he(n), g = u ? i ? wt : wt.filter(function(E) {
    return he(E) === u;
  }) : Ae, O = g.filter(function(E) {
    return c.indexOf(E) >= 0;
  });
  O.length === 0 && (O = g, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var p = O.reduce(function(E, y) {
    return E[y] = Ie(e, {
      placement: y,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Y(y)], E;
  }, {});
  return Object.keys(p).sort(function(E, y) {
    return p[E] - p[y];
  });
}
function pn(e) {
  if (Y(e) === Me)
    return [];
  var t = Re(e);
  return [kt(e), t, kt(t)];
}
function fn(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, g = r.rootBoundary, O = r.altBoundary, p = r.flipVariations, E = p === void 0 ? !0 : p, y = r.allowedAutoPlacements, m = t.options.placement, k = Y(m), A = k === m, S = l || (A || !E ? [Re(m)] : pn(m)), v = [m].concat(S).reduce(function(ue, J) {
      return ue.concat(Y(J) === Me ? dn(t, {
        placement: J,
        boundary: u,
        rootBoundary: g,
        padding: c,
        flipVariations: E,
        allowedAutoPlacements: y
      }) : J);
    }, []), b = t.rects.reference, h = t.rects.popper, I = /* @__PURE__ */ new Map(), B = !0, D = v[0], C = 0; C < v.length; C++) {
      var $ = v[C], T = Y($), R = he($) === pe, Q = [V, q].indexOf(T) >= 0, ee = Q ? "width" : "height", j = Ie(t, {
        placement: $,
        boundary: u,
        rootBoundary: g,
        altBoundary: O,
        padding: c
      }), z = Q ? R ? H : N : R ? q : V;
      b[ee] > h[ee] && (z = Re(z));
      var De = Re(z), te = [];
      if (a && te.push(j[T] <= 0), i && te.push(j[z] <= 0, j[De] <= 0), te.every(function(ue) {
        return ue;
      })) {
        D = $, B = !1;
        break;
      }
      I.set($, te);
    }
    if (B)
      for (var Ce = E ? 3 : 1, qe = function(J) {
        var ye = v.find(function(xe) {
          var re = I.get(xe);
          if (re)
            return re.slice(0, J).every(function(He) {
              return He;
            });
        });
        if (ye)
          return D = ye, "break";
      }, ge = Ce; ge > 0; ge--) {
        var _e = qe(ge);
        if (_e === "break") break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const vn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function It(e, t, r) {
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
function St(e) {
  return [V, H, q, N].some(function(t) {
    return e[t] >= 0;
  });
}
function hn(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ie(t, {
    elementContext: "reference"
  }), i = Ie(t, {
    altBoundary: !0
  }), l = It(s, n), c = It(i, o, a), u = St(l), g = St(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: g
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": g
  });
}
const mn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hn
};
function gn(e, t, r) {
  var n = Y(e), o = [N, V].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [N, H].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function yn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = Vt.reduce(function(u, g) {
    return u[g] = gn(g, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const bn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yn
};
function wn(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ht({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const $n = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wn,
  data: {}
};
function On(e) {
  return e === "x" ? "y" : "x";
}
function kn(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, g = r.padding, O = r.tether, p = O === void 0 ? !0 : O, E = r.tetherOffset, y = E === void 0 ? 0 : E, m = Ie(t, {
    boundary: l,
    rootBoundary: c,
    padding: g,
    altBoundary: u
  }), k = Y(t.placement), A = he(t.placement), S = !A, v = ot(k), b = On(v), h = t.modifiersData.popperOffsets, I = t.rects.reference, B = t.rects.popper, D = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, C = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, T = {
    x: 0,
    y: 0
  };
  if (h) {
    if (a) {
      var R, Q = v === "y" ? V : N, ee = v === "y" ? q : H, j = v === "y" ? "height" : "width", z = h[v], De = z + m[Q], te = z - m[ee], Ce = p ? -B[j] / 2 : 0, qe = A === pe ? I[j] : B[j], ge = A === pe ? -B[j] : -I[j], _e = t.elements.arrow, ue = p && _e ? rt(_e) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jt(), ye = J[Q], xe = J[ee], re = Oe(0, I[j], ue[j]), He = S ? I[j] / 2 - Ce - re - ye - C.mainAxis : qe - re - ye - C.mainAxis, Wt = S ? -I[j] / 2 + Ce + re + xe + C.mainAxis : ge + re + xe + C.mainAxis, We = t.elements.arrow && Be(t.elements.arrow), zt = We ? v === "y" ? We.clientTop || 0 : We.clientLeft || 0 : 0, st = (R = $ == null ? void 0 : $[v]) != null ? R : 0, Yt = z + He - st - zt, Ut = z + Wt - st, lt = Oe(p ? Le(De, Yt) : De, z, p ? se(te, Ut) : te);
      h[v] = lt, T[v] = lt - z;
    }
    if (i) {
      var ut, Xt = v === "x" ? V : N, Gt = v === "x" ? q : H, oe = h[b], Pe = b === "y" ? "height" : "width", ct = oe + m[Xt], dt = oe - m[Gt], ze = [V, N].indexOf(k) !== -1, pt = (ut = $ == null ? void 0 : $[b]) != null ? ut : 0, ft = ze ? ct : oe - I[Pe] - B[Pe] - pt + C.altAxis, vt = ze ? oe + I[Pe] + B[Pe] - pt - C.altAxis : dt, ht = p && ze ? Yo(ft, oe, vt) : Oe(p ? ft : ct, oe, p ? vt : dt);
      h[b] = ht, T[b] = ht - oe;
    }
    t.modifiersData[n] = T;
  }
}
const En = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kn,
  requiresIfExists: ["offset"]
};
function In(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Sn(e) {
  return e === W(e) || !F(e) ? nt(e) : In(e);
}
function An(e) {
  var t = e.getBoundingClientRect(), r = fe(t.width) / e.offsetWidth || 1, n = fe(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Bn(e, t, r) {
  r === void 0 && (r = !1);
  var n = F(t), o = F(t) && An(t), a = K(t), s = ve(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((G(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  it(a)) && (i = Sn(t)), F(t) ? (l = ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = at(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Dn(e) {
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
function Cn(e) {
  var t = Dn(e);
  return Ue.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function _n(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Z(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(o, a) {
    return o.replace(/%s/, a);
  }, e);
}
var ne = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', xn = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', At = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pn(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), At).filter(function(r, n, o) {
      return o.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Z(ne, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Z(ne, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ue.indexOf(t.phase) < 0 && console.error(Z(ne, t.name, '"phase"', "either " + Ue.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Z(ne, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Z(ne, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Z(ne, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Z(ne, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + At.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(Z(xn, String(t.name), n, n));
      });
    });
  });
}
function Tn(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function Rn(e) {
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
var Bt = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vn = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Dt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Nn(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Dt : o;
  return function(i, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dt, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, g = [], O = !1, p = {
      state: u,
      setOptions: function(k) {
        var A = typeof k == "function" ? k(u.options) : k;
        y(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = {
          reference: le(i) ? ke(i) : i.contextElement ? ke(i.contextElement) : [],
          popper: ke(l)
        };
        var S = Cn(Rn([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = S.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var v = Tn([].concat(S, u.options.modifiers), function($) {
            var T = $.name;
            return T;
          });
          if (Pn(v), Y(u.options.placement) === Me) {
            var b = u.orderedModifiers.find(function($) {
              var T = $.name;
              return T === "flip";
            });
            b || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = U(l), I = h.marginTop, B = h.marginRight, D = h.marginBottom, C = h.marginLeft;
          [I, B, D, C].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return E(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!O) {
          var k = u.elements, A = k.reference, S = k.popper;
          if (!Ct(A, S)) {
            process.env.NODE_ENV !== "production" && console.error(Bt);
            return;
          }
          u.rects = {
            reference: Bn(A, Be(S), u.options.strategy === "fixed"),
            popper: rt(S)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var v = 0, b = 0; b < u.orderedModifiers.length; b++) {
            if (process.env.NODE_ENV !== "production" && (v += 1, v > 100)) {
              console.error(Vn);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, b = -1;
              continue;
            }
            var h = u.orderedModifiers[b], I = h.fn, B = h.options, D = B === void 0 ? {} : B, C = h.name;
            typeof I == "function" && (u = I({
              state: u,
              options: D,
              name: C,
              instance: p
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _n(function() {
        return new Promise(function(m) {
          p.forceUpdate(), m(u);
        });
      }),
      destroy: function() {
        y(), O = !0;
      }
    };
    if (!Ct(i, l))
      return process.env.NODE_ENV !== "production" && console.error(Bt), p;
    p.setOptions(c).then(function(m) {
      !O && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function E() {
      u.orderedModifiers.forEach(function(m) {
        var k = m.name, A = m.options, S = A === void 0 ? {} : A, v = m.effect;
        if (typeof v == "function") {
          var b = v({
            state: u,
            name: k,
            instance: p,
            options: S
          }), h = function() {
          };
          g.push(b || h);
        }
      });
    }
    function y() {
      g.forEach(function(m) {
        return m();
      }), g = [];
    }
    return p;
  };
}
var Ln = [rn, $n, en, Ho, bn, vn, En, Jo, mn], jn = /* @__PURE__ */ Nn({
  defaultModifiers: Ln
});
const Mn = _({
  components: {
    Icon: me
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
    const t = Ye(null), r = Ye(null);
    let n;
    return { hoverEvent: () => {
      !t.value || !r.value || (n && n.destroy(), n = jn(t.value, r.value, {
        placement: "top",
        ...e.options
      }));
    }, trigger: t, container: r };
  }
}), Fn = { class: "tooltip" }, qn = {
  class: "container",
  ref: "container"
};
function Hn(e, t, r, n, o, a) {
  const s = Se("Icon");
  return f(), w("span", Fn, [
    d("span", {
      class: "trigger",
      ref: "trigger",
      onMouseenter: t[0] || (t[0] = (...i) => e.hoverEvent && e.hoverEvent(...i))
    }, [
      P(e.$slots, "trigger", {}, void 0, !0),
      e.$slots.trigger ? M("", !0) : (f(), de(s, {
        key: 0,
        name: "info"
      }))
    ], 544),
    d("div", qn, [
      d("div", {
        class: X(["body", { "has-skin": !e.skeleton }]),
        style: ie({
          maxWidth: `${e.maxWidth}px`
        })
      }, [
        P(e.$slots, "default", {}, void 0, !0)
      ], 6)
    ], 512)
  ]);
}
const sa = /* @__PURE__ */ x(Mn, [["render", Hn], ["__scopeId", "data-v-3e3124c5"]]);
export {
  zn as AvatarImg,
  Yn as Card,
  Un as CheckBox,
  Xn as EnhancedIconButton,
  Gn as FieldGroup,
  Jn as FlatButton,
  me as Icon,
  Kn as Modal,
  Zn as ProtectedLink,
  Qn as Radio,
  ea as RatingBar,
  ta as SelectBox,
  ra as ShortModal,
  oa as TagLabel,
  na as TextInput,
  aa as ToggleLabelSet,
  ia as ToggleSwitch,
  sa as Tooltip
};
