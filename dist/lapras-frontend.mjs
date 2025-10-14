import { defineComponent as E, createElementBlock as m, openBlock as p, mergeProps as j, renderSlot as x, toDisplayString as oe, ref as Le, computed as Re, onMounted as qt, watch as Ot, resolveComponent as Be, normalizeClass as Y, createElementVNode as f, createVNode as Ye, createBlock as ue, resolveDynamicComponent as Bt, withCtx as _e, createCommentVNode as R, createTextVNode as Ut, Transition as At, normalizeStyle as U, withModifiers as Yt, withDirectives as Xt, vShow as Gt, Fragment as Ct, renderList as It, toRefs as Zt, nextTick as Jt } from "vue";
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
}), D = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function er(e, t, r, n, o, a) {
  return p(), m("div", j(e.$attrs, {
    style: { backgroundImage: `url('${e.src || e.avatarDefault}')` },
    class: "avatar-icon",
    role: "img"
  }), null, 16);
}
const Co = /* @__PURE__ */ D(Qt, [["render", er], ["__scopeId", "data-v-ae8d1844"]]), tr = E({
  inheritAttrs: !1,
  props: {
    skin: {
      type: String,
      default: "default"
    }
  }
});
function rr(e, t, r, n, o, a) {
  return p(), m("div", j(e.$attrs, {
    class: [`is-skin-${e.skin}`, "card"]
  }), [
    x(e.$slots, "default")
  ], 16);
}
const Io = /* @__PURE__ */ D(tr, [["render", rr]]), nr = {
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
}, or = E({
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup() {
    return {
      iconMap: nr
    };
  }
});
function ar(e, t, r, n, o, a) {
  return p(), m("i", j(e.$attrs, { class: "icon" }), oe(e.iconMap[e.name]), 17);
}
const ve = /* @__PURE__ */ D(or, [["render", ar], ["__scopeId", "data-v-d54d8182"]]), ir = E({
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
    },
    indeterminate: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": null,
    "update:indeterminate": null
  },
  setup(e, t) {
    const r = Le(), n = (i) => t.emit("update:modelValue", i), o = (i) => {
      const s = i.target;
      e.indeterminate && (t.emit("update:indeterminate", !1), r.value && (r.value.checked = !0)), n(s.checked);
    }, a = Re(() => e.indeterminate ? "minus" : "check");
    return qt(() => {
      r.value && (r.value.indeterminate = e.indeterminate);
    }), Ot(
      () => e.indeterminate,
      (i) => {
        r.value && (r.value.indeterminate = i);
      }
    ), {
      inputRef: r,
      onInput: o,
      iconName: a
    };
  }
}), sr = ["checked", "disabled"];
function lr(e, t, r, n, o, a) {
  const i = Be("Icon");
  return p(), m("label", {
    class: Y(["check-box", { "is-disabled": e.disabled }])
  }, [
    f("input", j({ ref: "inputRef" }, e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s)),
      class: "input",
      type: "checkbox"
    }), null, 16, sr),
    f("div", {
      class: Y(["icon-wrap", {
        "is-checked": e.modelValue && !e.indeterminate,
        "is-indeterminate": e.indeterminate
      }])
    }, [
      Ye(i, { name: e.iconName }, null, 8, ["name"])
    ], 2)
  ], 2);
}
const Eo = /* @__PURE__ */ D(ir, [["render", lr], ["__scopeId", "data-v-6b522891"]]), ur = E({
  inheritAttrs: !1,
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}), dr = { class: "icon-wrap" };
function pr(e, t, r, n, o, a) {
  return p(), ue(Bt(e.tag), j(e.$attrs, { class: "enhanced-icon" }), {
    default: _e(() => [
      t[0] || (t[0] = f("svg", {
        class: "svg",
        viewBox: "0 0 40 40"
      }, [
        f("defs", null, [
          f("circle", {
            id: "path1",
            cx: "20",
            cy: "20",
            r: "20"
          }),
          f("mask", {
            id: "mask-2",
            maskContentUnits: "userSpaceOnUse",
            maskUnits: "objectBoundingBox",
            x: "0",
            y: "0",
            width: "40",
            height: "40",
            fill: "white"
          }, [
            f("use", { "xlink:href": "#path1" })
          ])
        ]),
        f("g", {
          id: "Artboard",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, [
          f("g", { id: "svg" }, [
            f("use", {
              id: "Oval",
              stroke: "#012F89",
              mask: "url(#mask-2)",
              "stroke-width": "2",
              "stroke-dasharray": "2.2,2.2",
              "xlink:href": "#path1"
            }),
            f("path", {
              class: "inner-circle",
              d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z",
              id: "Oval",
              fill: "#012F89"
            })
          ])
        ])
      ], -1)),
      f("p", dr, [
        x(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 16);
}
const So = /* @__PURE__ */ D(ur, [["render", pr], ["__scopeId", "data-v-55c59436"]]), fr = E({
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
}), cr = {
  key: 0,
  class: "label-line"
}, vr = { class: "label" }, mr = { key: 0 }, hr = { class: "field-wrap" }, gr = {
  key: 1,
  class: "error-message"
}, yr = { class: "note" };
function br(e, t, r, n, o, a) {
  return p(), m("div", j(e.$attrs, { class: "field-group" }), [
    e.label ? (p(), m("div", cr, [
      f("p", vr, [
        Ut(oe(e.label), 1),
        e.subLabel ? (p(), m("small", mr, oe(e.subLabel), 1)) : R("", !0)
      ]),
      e.required !== null ? (p(), m("p", {
        key: 0,
        class: Y(["required-badge", { "is-required": e.required }])
      }, oe(e.required ? "必須" : "任意"), 3)) : R("", !0)
    ])) : R("", !0),
    f("div", hr, [
      x(e.$slots, "default", {}, void 0, !0)
    ]),
    e.errorMessage ? (p(), m("p", gr, oe(e.errorMessage), 1)) : R("", !0),
    f("div", yr, [
      x(e.$slots, "note", {}, void 0, !0)
    ])
  ], 16);
}
const Do = /* @__PURE__ */ D(fr, [["render", br], ["__scopeId", "data-v-3b2fbddf"]]), wr = E({
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
}), $r = {
  key: 0,
  class: "icon-wrap is-left"
}, kr = { class: "body" }, Or = {
  key: 1,
  class: "icon-wrap is-right"
};
function Br(e, t, r, n, o, a) {
  return p(), ue(Bt(e.tag), j(e.$attrs, {
    class: [[`skin-${e.skin}`, `size-${e.size}`, e.enhanced && "is-enhanced"], "flat-button"],
    disabled: e.disabled || void 0
  }), {
    default: _e(() => [
      e.$slots.leftIcon ? (p(), m("div", $r, [
        x(e.$slots, "leftIcon", {}, void 0, !0)
      ])) : R("", !0),
      f("div", kr, [
        x(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.rightIcon ? (p(), m("div", Or, [
        x(e.$slots, "rightIcon", {}, void 0, !0)
      ])) : R("", !0)
    ]),
    _: 3
  }, 16, ["class", "disabled"]);
}
const Po = /* @__PURE__ */ D(wr, [["render", Br], ["__scopeId", "data-v-ef3a5852"]]), Ar = ["href", "rel", "target"], To = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ProtectedLink",
  props: {
    href: {
      type: String,
      validator(e) {
        return e ? !(e.includes(":") && !e.match(/^https?:\/\//i)) : !0;
      },
      default: void 0
    },
    force: {
      type: Boolean,
      default: !1
    },
    target: {
      type: String,
      default: void 0
    },
    rel: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const t = (a) => a ? a.includes(":") && !a.match(/^https?:\/\//i) ? void 0 : a : void 0, r = e, n = Re(() => r.force ? r.href : t(r.href)), o = Re(() => r.target === "_blank" ? `noopener ${r.rel || ""}`.replace(/\s$/, "") : r.rel);
    return (a, i) => (p(), m("a", j(a.$attrs, {
      href: n.value,
      rel: o.value,
      target: e.target
    }), [
      x(a.$slots, "default")
    ], 16, Ar));
  }
});
function Cr(e) {
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
var Et = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), le = [], Ve = !1, Ge = -1, ye = void 0, be = void 0, St = function(t) {
  return le.some(function(r) {
    return !!(r.options.allowTouchMove && r.options.allowTouchMove(t));
  });
}, Me = function(t) {
  var r = t || window.event;
  return St(r.target) || r.touches.length > 1 ? !0 : (r.preventDefault && r.preventDefault(), !1);
}, Ir = function(t) {
  if (be === void 0) {
    var r = !1, n = window.innerWidth - document.documentElement.clientWidth;
    r && n > 0 && (be = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
  }
  ye === void 0 && (ye = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Er = function() {
  be !== void 0 && (document.body.style.paddingRight = be, be = void 0), ye !== void 0 && (document.body.style.overflow = ye, ye = void 0);
}, Sr = function(t) {
  return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
}, Dr = function(t, r) {
  var n = t.targetTouches[0].clientY - Ge;
  return St(t.target) ? !1 : r && r.scrollTop === 0 && n > 0 || Sr(r) && n < 0 ? Me(t) : (t.stopPropagation(), !0);
}, Pr = function(t, r) {
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
    le = [].concat(Cr(le), [n]), Et ? (t.ontouchstart = function(o) {
      o.targetTouches.length === 1 && (Ge = o.targetTouches[0].clientY);
    }, t.ontouchmove = function(o) {
      o.targetTouches.length === 1 && Dr(o, t);
    }, Ve || (document.addEventListener("touchmove", Me, Xe ? { passive: !1 } : void 0), Ve = !0)) : Ir();
  }
}, ct = function() {
  Et ? (le.forEach(function(t) {
    t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null;
  }), Ve && (document.removeEventListener("touchmove", Me, Xe ? { passive: !1 } : void 0), Ve = !1), Ge = -1) : Er(), le = [];
};
const Tr = E({
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
          return Pr(t);
        ct();
      }
    }
  },
  beforeUnmount() {
    ct();
  }
}), xr = { class: "modal-body" };
function Lr(e, t, r, n, o, a) {
  const i = Be("Icon");
  return p(), ue(At, { name: "fade" }, {
    default: _e(() => [
      e.visible ? (p(), m("div", {
        key: 0,
        class: "modal",
        role: "dialog",
        "aria-modal": "",
        style: U({ zIndex: e.zIndex })
      }, [
        f("div", {
          class: "filter",
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close")),
          style: U({ background: e.filterBackground })
        }, null, 4),
        f("div", {
          class: "modal-container",
          style: U({ margin: `${e.gutter}px` })
        }, [
          f("div", xr, [
            e.hasClose ? (p(), m("div", {
              key: 0,
              class: "close-wrap",
              onClick: t[2] || (t[2] = (s) => e.$emit("close"))
            }, [
              f("button", {
                type: "button",
                class: "close",
                "aria-label": "閉じる",
                onClick: t[1] || (t[1] = Yt((s) => e.$emit("close"), ["stop"]))
              }, [
                Ye(i, { name: "close" })
              ])
            ])) : R("", !0),
            f("div", {
              class: Y(["content", { panel: e.panel }])
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
const xo = /* @__PURE__ */ D(Tr, [["render", Lr], ["__scopeId", "data-v-945d841a"]]), Rr = E({
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
}), Vr = ["checked", "disabled"];
function Mr(e, t, r, n, o, a) {
  return p(), m("label", {
    class: Y(["radio", { "is-disabled": e.disabled }])
  }, [
    f("input", j(e.$attrs, {
      checked: e.modelValue,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "input",
      type: "radio",
      disabled: e.disabled
    }), null, 16, Vr),
    t[1] || (t[1] = f("div", { class: "dot" }, null, -1))
  ], 2);
}
const Lo = /* @__PURE__ */ D(Rr, [["render", Mr], ["__scopeId", "data-v-2b146e1a"]]), jr = E({
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
function _r(e, t, r, n, o, a) {
  return p(), m("div", j(e.$attrs, { class: "score-bar" }), [
    f("div", {
      class: "inner",
      style: U({
        width: `${e.value / e.max * 100}%`,
        background: e.value >= e.highThreshold ? e.highBarColor : e.barColor
      })
    }, null, 4)
  ], 16);
}
const Ro = /* @__PURE__ */ D(jr, [["render", _r], ["__scopeId", "data-v-80af665b"]]), Hr = E({
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
}), Wr = { class: "select-box" }, Fr = ["value"], Nr = ["value"], zr = { class: "icon-wrap" };
function qr(e, t, r, n, o, a) {
  const i = Be("Icon");
  return p(), m("div", Wr, [
    f("select", {
      class: "select",
      value: e.modelValue,
      onChange: t[0] || (t[0] = (...s) => e.onInput && e.onInput(...s))
    }, [
      e.placeholder ? Xt((p(), m("option", {
        key: 0,
        value: ""
      }, oe(e.placeholder), 513)), [
        [Gt, !1]
      ]) : R("", !0),
      (p(!0), m(Ct, null, It(e.options, (s) => (p(), m("option", {
        value: s.value,
        key: s.value
      }, oe(s.label), 9, Nr))), 128))
    ], 40, Fr),
    f("div", zr, [
      Ye(i, { name: "arrow-down" })
    ])
  ]);
}
const Vo = /* @__PURE__ */ D(Hr, [["render", qr], ["__scopeId", "data-v-d6a6e489"]]), Ur = E({
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
}), Yr = {
  key: 0,
  class: "modal",
  ref: "modal"
}, Xr = { class: "modal-body" }, Gr = {
  key: 1,
  class: "icon-cancel"
};
function Zr(e, t, r, n, o, a) {
  const i = Be("Icon");
  return p(), ue(At, { name: "fade" }, {
    default: _e(() => [
      e.visible ? (p(), m("div", Yr, [
        f("div", {
          class: "modal-overlay",
          style: U({
            background: e.filterBackground,
            zIndex: e.zIndex
          }),
          onClick: t[0] || (t[0] = () => e.closeOnClickOutside && e.$emit("close"))
        }, null, 4),
        f("div", {
          class: "modal-container",
          style: U({
            padding: `${e.gutter}px`,
            zIndex: e.zIndex
          })
        }, [
          f("div", Xr, [
            f("div", {
              class: Y(["close-wrap", { "outer-close": e.outerClose }])
            }, [
              e.hasClose ? (p(), m("p", {
                key: 0,
                class: "close",
                onClick: t[1] || (t[1] = (s) => e.$emit("close"))
              }, [
                e.outerClose ? (p(), ue(i, {
                  key: 0,
                  name: "close",
                  alt: "閉じる"
                })) : (p(), m("i", Gr))
              ])) : R("", !0)
            ], 2),
            f("div", {
              class: Y(["content", { panel: e.panel }])
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
const Mo = /* @__PURE__ */ D(Ur, [["render", Zr], ["__scopeId", "data-v-a2b6f65d"]]), Jr = E({
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
}), Kr = {
  key: 0,
  class: "sub"
};
function Qr(e, t, r, n, o, a) {
  return p(), m("div", j(e.$attrs, {
    style: { background: e.background, color: e.color },
    class: "tag-label"
  }), [
    e.$slots.subLabel ? (p(), m("p", Kr, [
      x(e.$slots, "subLabel", {}, void 0, !0)
    ])) : R("", !0),
    f("p", {
      class: Y(["main", { "has-sub-label": e.$slots.subLabel }])
    }, [
      x(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ], 16);
}
const jo = /* @__PURE__ */ D(Jr, [["render", Qr], ["__scopeId", "data-v-b80e4e79"]]), en = E({
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
    const r = Le(null), n = () => {
      r.value && e.autoExpand && (r.value.style.height = "", r.value.style.height = `${Math.max(
        r.value.scrollHeight,
        e.baseTextareaHeight
      )}px`);
    }, o = (i) => {
      t.emit("update:modelValue", i.target.value);
    }, { modelValue: a } = Zt(e);
    return Ot(
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
}), tn = ["value", "disabled"], rn = ["value", "disabled", "type"];
function nn(e, t, r, n, o, a) {
  return e.multiline ? (p(), m("textarea", j({ key: 0 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-multi-line", { "has-error": e.error }],
    disabled: e.disabled,
    onInput: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
    onFocus: t[1] || (t[1] = (i) => e.$emit("focus")),
    onBlur: t[2] || (t[2] = (i) => e.$emit("blur")),
    ref: "textarea"
  }), null, 16, tn)) : (p(), m("input", j({ key: 1 }, e.$attrs, {
    value: e.modelValue,
    class: ["text-input is-single-line", { "has-error": e.error }],
    disabled: e.disabled,
    type: e.type,
    onInput: t[3] || (t[3] = (...i) => e.onInput && e.onInput(...i)),
    onFocus: t[4] || (t[4] = (i) => e.$emit("focus")),
    onBlur: t[5] || (t[5] = (i) => e.$emit("blur"))
  }), null, 16, rn));
}
const _o = /* @__PURE__ */ D(en, [["render", nn], ["__scopeId", "data-v-f84d50db"]]), on = E({
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
}), an = { class: "toggle" }, sn = { class: "label" };
function ln(e, t, r, n, o, a) {
  return p(), m("label", {
    class: Y(["toggle-label-set", {
      "is-active": e.isActive,
      "is-button": e.isButton,
      "is-disabled": e.disabled,
      "is-flipped": e.isFlipped
    }])
  }, [
    f("div", an, [
      x(e.$slots, "toggle", {}, void 0, !0)
    ]),
    f("div", sn, [
      x(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Ho = /* @__PURE__ */ D(on, [["render", ln], ["__scopeId", "data-v-29bfced2"]]), un = E({
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
}), dn = { class: "toggle-switch" }, pn = ["checked", "disabled"];
function fn(e, t, r, n, o, a) {
  return p(), m("label", dn, [
    f("input", j(e.$attrs, {
      checked: e.modelValue,
      disabled: e.disabled || void 0,
      onChange: t[0] || (t[0] = (...i) => e.onInput && e.onInput(...i)),
      class: "checkbox",
      type: "checkbox"
    }), null, 16, pn),
    f("div", {
      class: Y(["switch-base", { "is-disabled": e.disabled }])
    }, [...t[1] || (t[1] = [
      f("div", { class: "toggle" }, null, -1)
    ])], 2)
  ]);
}
const Wo = /* @__PURE__ */ D(un, [["render", fn], ["__scopeId", "data-v-36bffd3f"]]);
var V = "top", F = "bottom", N = "right", M = "left", Ze = "auto", Ae = [V, F, N, M], de = "start", ke = "end", cn = "clippingParents", Dt = "viewport", ge = "popper", vn = "reference", vt = /* @__PURE__ */ Ae.reduce(function(e, t) {
  return e.concat([t + "-" + de, t + "-" + ke]);
}, []), Pt = /* @__PURE__ */ [].concat(Ae, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + de, t + "-" + ke]);
}, []), mn = "beforeRead", hn = "read", gn = "afterRead", yn = "beforeMain", bn = "main", wn = "afterMain", $n = "beforeWrite", kn = "write", On = "afterWrite", Bn = [mn, hn, gn, yn, bn, wn, $n, kn, On];
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
function An(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !W(a) || !G(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Cn(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = i.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !W(o) || !G(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const In = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: An,
  effect: Cn,
  requires: ["computeStyles"]
};
function X(e) {
  return e.split("-")[0];
}
var ae = Math.max, je = Math.min, pe = Math.round;
function qe() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tt() {
  return !/^((?!chrome|android).)*safari/i.test(qe());
}
function fe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && W(e) && (o = e.offsetWidth > 0 && pe(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && pe(n.height) / e.offsetHeight || 1);
  var i = ie(e) ? H(e) : window, s = i.visualViewport, l = !Tt() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, y = n.width / o, $ = n.height / a;
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
  var t = fe(e), r = e.offsetWidth, n = e.offsetHeight;
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
function En(e) {
  return ["table", "td", "th"].indexOf(G(e)) >= 0;
}
function K(e) {
  return ((ie(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function He(e) {
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
function mt(e) {
  return !W(e) || // https://github.com/popperjs/popper-core/issues/837
  Z(e).position === "fixed" ? null : e.offsetParent;
}
function Sn(e) {
  var t = /firefox/i.test(qe()), r = /Trident/i.test(qe());
  if (r && W(e)) {
    var n = Z(e);
    if (n.position === "fixed")
      return null;
  }
  var o = He(e);
  for (Je(o) && (o = o.host); W(o) && ["html", "body"].indexOf(G(o)) < 0; ) {
    var a = Z(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ce(e) {
  for (var t = H(e), r = mt(e); r && En(r) && Z(r).position === "static"; )
    r = mt(r);
  return r && (G(r) === "html" || G(r) === "body" && Z(r).position === "static") ? t : r || Sn(e) || t;
}
function Qe(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, r) {
  return ae(e, je(t, r));
}
function Dn(e, t, r) {
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
function Vt(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Pn = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Rt(typeof t != "number" ? t : Vt(t, Ae));
};
function Tn(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = X(r.placement), l = Qe(s), d = [M, N].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !i)) {
    var y = Pn(o.padding, r), $ = Ke(a), c = l === "y" ? V : M, O = l === "y" ? F : N, g = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], h = i[l] - r.rects.reference[l], k = Ce(a), A = k ? l === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, C = g / 2 - h / 2, v = y[c], b = A - $[u] - y[O], w = A / 2 - $[u] / 2 + C, B = we(v, w, b), P = l;
    r.modifiersData[n] = (t = {}, t[P] = B, t.centerOffset = B - w, t);
  }
}
function xn(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xt(t.elements.popper, o) && (t.elements.arrow = o));
}
const Ln = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Tn,
  effect: xn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ce(e) {
  return e.split("-")[1];
}
var Rn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vn(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: pe(r * o) / o || 0,
    y: pe(n * o) / o || 0
  };
}
function ht(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, y = e.isFixed, $ = i.x, c = $ === void 0 ? 0 : $, O = i.y, g = O === void 0 ? 0 : O, h = typeof u == "function" ? u({
    x: c,
    y: g
  }) : {
    x: c,
    y: g
  };
  c = h.x, g = h.y;
  var k = i.hasOwnProperty("x"), A = i.hasOwnProperty("y"), C = M, v = V, b = window;
  if (d) {
    var w = Ce(r), B = "clientHeight", P = "clientWidth";
    if (w === H(r) && (w = K(r), Z(w).position !== "static" && s === "absolute" && (B = "scrollHeight", P = "scrollWidth")), w = w, o === V || (o === M || o === N) && a === ke) {
      v = F;
      var S = y && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[B]
      );
      g -= S - n.height, g *= l ? 1 : -1;
    }
    if (o === M || (o === V || o === F) && a === ke) {
      C = N;
      var I = y && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      c -= I - n.width, c *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: s
  }, d && Rn), z = u === !0 ? Vn({
    x: c,
    y: g
  }, H(r)) : {
    x: c,
    y: g
  };
  if (c = z.x, g = z.y, l) {
    var L;
    return Object.assign({}, T, (L = {}, L[v] = A ? "0" : "", L[C] = k ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + g + "px)" : "translate3d(" + c + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, T, (t = {}, t[v] = A ? g + "px" : "", t[C] = k ? c + "px" : "", t.transform = "", t));
}
function Mn(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, d = {
    placement: X(t.placement),
    variation: ce(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ht(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ht(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mn,
  data: {}
};
var Te = {
  passive: !0
};
function _n(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = H(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Te);
  }), s && l.addEventListener("resize", r.update, Te), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Te);
    }), s && l.removeEventListener("resize", r.update, Te);
  };
}
const Hn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _n,
  data: {}
};
var Wn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Wn[t];
  });
}
var Fn = {
  start: "end",
  end: "start"
};
function gt(e) {
  return e.replace(/start|end/g, function(t) {
    return Fn[t];
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
  return fe(K(e)).left + et(e).scrollLeft;
}
function Nn(e, t) {
  var r = H(e), n = K(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var d = Tt();
    (d || !d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + tt(e),
    y: l
  };
}
function zn(e) {
  var t, r = K(e), n = et(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ae(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = ae(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + tt(e), l = -n.scrollTop;
  return Z(o || r).direction === "rtl" && (s += ae(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function rt(e) {
  var t = Z(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Mt(e) {
  return ["html", "body", "#document"].indexOf(G(e)) >= 0 ? e.ownerDocument.body : W(e) && rt(e) ? e : Mt(He(e));
}
function $e(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Mt(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = H(n), i = o ? [a].concat(a.visualViewport || [], rt(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat($e(He(i)))
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
function qn(e, t) {
  var r = fe(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yt(e, t, r) {
  return t === Dt ? Ue(Nn(e, r)) : ie(t) ? qn(t, r) : Ue(zn(K(e)));
}
function Un(e) {
  var t = $e(He(e)), r = ["absolute", "fixed"].indexOf(Z(e).position) >= 0, n = r && W(e) ? Ce(e) : e;
  return ie(n) ? t.filter(function(o) {
    return ie(o) && xt(o, n) && G(o) !== "body";
  }) : [];
}
function Yn(e, t, r, n) {
  var o = t === "clippingParents" ? Un(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, d) {
    var u = yt(e, d, n);
    return l.top = ae(u.top, l.top), l.right = je(u.right, l.right), l.bottom = je(u.bottom, l.bottom), l.left = ae(u.left, l.left), l;
  }, yt(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function jt(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? X(n) : null, a = n ? ce(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case V:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case F:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case N:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case M:
      l = {
        x: t.x - r.width,
        y: s
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? cn : s, d = r.rootBoundary, u = d === void 0 ? Dt : d, y = r.elementContext, $ = y === void 0 ? ge : y, c = r.altBoundary, O = c === void 0 ? !1 : c, g = r.padding, h = g === void 0 ? 0 : g, k = Rt(typeof h != "number" ? h : Vt(h, Ae)), A = $ === ge ? vn : ge, C = e.rects.popper, v = e.elements[O ? A : $], b = Yn(ie(v) ? v : v.contextElement || K(e.elements.popper), l, u, i), w = fe(e.elements.reference), B = jt({
    reference: w,
    element: C,
    placement: o
  }), P = Ue(Object.assign({}, C, B)), S = $ === ge ? P : w, I = {
    top: b.top - S.top + k.top,
    bottom: S.bottom - b.bottom + k.bottom,
    left: b.left - S.left + k.left,
    right: S.right - b.right + k.right
  }, T = e.modifiersData.offset;
  if ($ === ge && T) {
    var z = T[o];
    Object.keys(I).forEach(function(L) {
      var Q = [N, F].indexOf(L) >= 0 ? 1 : -1, ee = [V, F].indexOf(L) >= 0 ? "y" : "x";
      I[L] += z[ee] * Q;
    });
  }
  return I;
}
function Xn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Pt : l, u = ce(n), y = u ? s ? vt : vt.filter(function(O) {
    return ce(O) === u;
  }) : Ae, $ = y.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  $.length === 0 && ($ = y);
  var c = $.reduce(function(O, g) {
    return O[g] = Oe(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[X(g)], O;
  }, {});
  return Object.keys(c).sort(function(O, g) {
    return c[O] - c[g];
  });
}
function Gn(e) {
  if (X(e) === Ze)
    return [];
  var t = xe(e);
  return [gt(e), t, gt(t)];
}
function Zn(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, d = r.padding, u = r.boundary, y = r.rootBoundary, $ = r.altBoundary, c = r.flipVariations, O = c === void 0 ? !0 : c, g = r.allowedAutoPlacements, h = t.options.placement, k = X(h), A = k === h, C = l || (A || !O ? [xe(h)] : Gn(h)), v = [h].concat(C).reduce(function(se, J) {
      return se.concat(X(J) === Ze ? Xn(t, {
        placement: J,
        boundary: u,
        rootBoundary: y,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: g
      }) : J);
    }, []), b = t.rects.reference, w = t.rects.popper, B = /* @__PURE__ */ new Map(), P = !0, S = v[0], I = 0; I < v.length; I++) {
      var T = v[I], z = X(T), L = ce(T) === de, Q = [V, F].indexOf(z) >= 0, ee = Q ? "width" : "height", _ = Oe(t, {
        placement: T,
        boundary: u,
        rootBoundary: y,
        altBoundary: $,
        padding: d
      }), q = Q ? L ? N : M : L ? F : V;
      b[ee] > w[ee] && (q = xe(q));
      var Ie = xe(q), te = [];
      if (a && te.push(_[z] <= 0), s && te.push(_[q] <= 0, _[Ie] <= 0), te.every(function(se) {
        return se;
      })) {
        S = T, P = !1;
        break;
      }
      B.set(T, te);
    }
    if (P)
      for (var Ee = O ? 3 : 1, We = function(J) {
        var he = v.find(function(De) {
          var re = B.get(De);
          if (re)
            return re.slice(0, J).every(function(Fe) {
              return Fe;
            });
        });
        if (he)
          return S = he, "break";
      }, me = Ee; me > 0; me--) {
        var Se = We(me);
        if (Se === "break") break;
      }
    t.placement !== S && (t.modifiersData[n]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const Jn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Zn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function bt(e, t, r) {
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
function wt(e) {
  return [V, N, F, M].some(function(t) {
    return e[t] >= 0;
  });
}
function Kn(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Oe(t, {
    elementContext: "reference"
  }), s = Oe(t, {
    altBoundary: !0
  }), l = bt(i, n), d = bt(s, o, a), u = wt(l), y = wt(d);
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
const Qn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Kn
};
function eo(e, t, r) {
  var n = X(e), o = [M, V].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [M, N].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function to(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Pt.reduce(function(u, y) {
    return u[y] = eo(y, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = i;
}
const ro = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: to
};
function no(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = jt({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const oo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: no,
  data: {}
};
function ao(e) {
  return e === "x" ? "y" : "x";
}
function io(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, y = r.padding, $ = r.tether, c = $ === void 0 ? !0 : $, O = r.tetherOffset, g = O === void 0 ? 0 : O, h = Oe(t, {
    boundary: l,
    rootBoundary: d,
    padding: y,
    altBoundary: u
  }), k = X(t.placement), A = ce(t.placement), C = !A, v = Qe(k), b = ao(v), w = t.modifiersData.popperOffsets, B = t.rects.reference, P = t.rects.popper, S = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, I = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var L, Q = v === "y" ? V : M, ee = v === "y" ? F : N, _ = v === "y" ? "height" : "width", q = w[v], Ie = q + h[Q], te = q - h[ee], Ee = c ? -P[_] / 2 : 0, We = A === de ? B[_] : P[_], me = A === de ? -P[_] : -B[_], Se = t.elements.arrow, se = c && Se ? Ke(Se) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Lt(), he = J[Q], De = J[ee], re = we(0, B[_], se[_]), Fe = C ? B[_] / 2 - Ee - re - he - I.mainAxis : We - re - he - I.mainAxis, _t = C ? -B[_] / 2 + Ee + re + De + I.mainAxis : me + re + De + I.mainAxis, Ne = t.elements.arrow && Ce(t.elements.arrow), Ht = Ne ? v === "y" ? Ne.clientTop || 0 : Ne.clientLeft || 0 : 0, nt = (L = T == null ? void 0 : T[v]) != null ? L : 0, Wt = q + Fe - nt - Ht, Ft = q + _t - nt, ot = we(c ? je(Ie, Wt) : Ie, q, c ? ae(te, Ft) : te);
      w[v] = ot, z[v] = ot - q;
    }
    if (s) {
      var at, Nt = v === "x" ? V : M, zt = v === "x" ? F : N, ne = w[b], Pe = b === "y" ? "height" : "width", it = ne + h[Nt], st = ne - h[zt], ze = [V, M].indexOf(k) !== -1, lt = (at = T == null ? void 0 : T[b]) != null ? at : 0, ut = ze ? it : ne - B[Pe] - P[Pe] - lt + I.altAxis, dt = ze ? ne + B[Pe] + P[Pe] - lt - I.altAxis : st, pt = c && ze ? Dn(ut, ne, dt) : we(c ? ut : it, ne, c ? dt : st);
      w[b] = pt, z[b] = pt - ne;
    }
    t.modifiersData[n] = z;
  }
}
const so = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: io,
  requiresIfExists: ["offset"]
};
function lo(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function uo(e) {
  return e === H(e) || !W(e) ? et(e) : lo(e);
}
function po(e) {
  var t = e.getBoundingClientRect(), r = pe(t.width) / e.offsetWidth || 1, n = pe(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function fo(e, t, r) {
  r === void 0 && (r = !1);
  var n = W(t), o = W(t) && po(t), a = K(t), i = fe(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((G(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rt(a)) && (s = uo(t)), W(t) ? (l = fe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = tt(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function co(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function vo(e) {
  var t = co(e);
  return Bn.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function mo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ho(e) {
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
var $t = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function go(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? $t : o;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $t, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, y = [], $ = !1, c = {
      state: u,
      setOptions: function(k) {
        var A = typeof k == "function" ? k(u.options) : k;
        g(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = {
          reference: ie(s) ? $e(s) : s.contextElement ? $e(s.contextElement) : [],
          popper: $e(l)
        };
        var C = vo(ho([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(v) {
          return v.enabled;
        }), O(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!$) {
          var k = u.elements, A = k.reference, C = k.popper;
          if (kt(A, C)) {
            u.rects = {
              reference: fo(A, Ce(C), u.options.strategy === "fixed"),
              popper: Ke(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
              return u.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var b = u.orderedModifiers[v], w = b.fn, B = b.options, P = B === void 0 ? {} : B, S = b.name;
              typeof w == "function" && (u = w({
                state: u,
                options: P,
                name: S,
                instance: c
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: mo(function() {
        return new Promise(function(h) {
          c.forceUpdate(), h(u);
        });
      }),
      destroy: function() {
        g(), $ = !0;
      }
    };
    if (!kt(s, l))
      return c;
    c.setOptions(d).then(function(h) {
      !$ && d.onFirstUpdate && d.onFirstUpdate(h);
    });
    function O() {
      u.orderedModifiers.forEach(function(h) {
        var k = h.name, A = h.options, C = A === void 0 ? {} : A, v = h.effect;
        if (typeof v == "function") {
          var b = v({
            state: u,
            name: k,
            instance: c,
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
    return c;
  };
}
var yo = [Hn, oo, jn, In, ro, Jn, so, Ln, Qn], bo = /* @__PURE__ */ go({
  defaultModifiers: yo
});
const wo = E({
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
    const t = Le(null), r = Le(null);
    let n;
    return { hoverEvent: () => {
      !t.value || !r.value || (n && n.destroy(), n = bo(t.value, r.value, {
        placement: "top",
        ...e.options
      }));
    }, trigger: t, container: r };
  }
}), $o = { class: "tooltip" }, ko = {
  class: "container",
  ref: "container"
};
function Oo(e, t, r, n, o, a) {
  const i = Be("Icon");
  return p(), m("span", $o, [
    f("span", {
      class: "trigger",
      ref: "trigger",
      onMouseenter: t[0] || (t[0] = (...s) => e.hoverEvent && e.hoverEvent(...s))
    }, [
      x(e.$slots, "trigger", {}, void 0, !0),
      e.$slots.trigger ? R("", !0) : (p(), ue(i, {
        key: 0,
        name: "info"
      }))
    ], 544),
    f("div", ko, [
      f("div", {
        class: Y(["body", { "has-skin": !e.skeleton }]),
        style: U({
          maxWidth: `${e.maxWidth}px`
        })
      }, [
        x(e.$slots, "default", {}, void 0, !0)
      ], 6)
    ], 512)
  ]);
}
const Fo = /* @__PURE__ */ D(wo, [["render", Oo], ["__scopeId", "data-v-e8caa5d7"]]), Bo = /* @__PURE__ */ E({
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
    const t = e, r = Re(() => Array.from({ length: t.lineCount }, (n, o) => ({
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
}), No = /* @__PURE__ */ D(Bo, [["__scopeId", "data-v-3620d5a4"]]);
export {
  Co as AvatarImg,
  Io as Card,
  Eo as CheckBox,
  No as ContentLoader,
  So as EnhancedIconButton,
  Do as FieldGroup,
  Po as FlatButton,
  ve as Icon,
  xo as Modal,
  To as ProtectedLink,
  Lo as Radio,
  Ro as RatingBar,
  Vo as SelectBox,
  Mo as ShortModal,
  jo as TagLabel,
  _o as TextInput,
  Ho as ToggleLabelSet,
  Wo as ToggleSwitch,
  Fo as Tooltip
};
