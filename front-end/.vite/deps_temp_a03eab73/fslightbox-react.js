import {
  require_prop_types
} from "./chunk-VER6FNRX.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/fslightbox-react/index.js
var require_fslightbox_react = __commonJS({
  "node_modules/fslightbox-react/index.js"(exports, module) {
    (() => {
      "use strict";
      var e = { n: (t2) => {
        var n2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return e.d(n2, { a: n2 }), n2;
      }, d: (t2, n2) => {
        for (var o2 in n2)
          e.o(n2, o2) && !e.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: n2[o2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => Le });
      const n = require_prop_types();
      var o = e.n(n);
      const r = require_react();
      var i = e.n(r), s = "fslightbox-", c = "".concat(s, "styles"), a = "".concat(s, "cursor-grabbing"), l = "".concat(s, "full-dimension"), u = "".concat(s, "flex-centered"), f = "".concat(s, "transform-transition"), d = "".concat(s, "absoluted"), p = "".concat(s, "fade-in"), m = "".concat(s, "fade-out"), h = p + "-strong", g = m + "-strong", v = "".concat(s, "opacity-1");
      "".concat(s, "source");
      const b = function(e2) {
        var t2 = e2.size, n2 = e2.viewBox, o2 = e2.d;
        return i().createElement("svg", { width: t2, height: t2, viewBox: n2, xmlns: "http://www.w3.org/2000/svg" }, i().createElement("path", { className: "".concat(s, "svg-path"), d: o2 }));
      }, x = function(e2) {
        var t2 = e2.onClick, n2 = e2.viewBox, o2 = e2.size, r2 = e2.d, c2 = e2.title;
        return i().createElement("div", { onClick: t2, className: "".concat(s, "toolbar-button ").concat(u), title: c2 }, i().createElement(b, { viewBox: n2, size: o2, d: r2 }));
      };
      function y(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      function w(e2) {
        var t2 = e2.o, n2 = t2.fs, o2 = n2.o, s2 = n2.x, c2 = t2.fss, a2 = function(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
            if (null != n3) {
              var o3, r2, i2, s3, c3 = [], a3 = true, l3 = false;
              try {
                if (i2 = (n3 = n3.call(e4)).next, 0 === t4) {
                  if (Object(n3) !== n3)
                    return;
                  a3 = false;
                } else
                  for (; !(a3 = (o3 = i2.call(n3)).done) && (c3.push(o3.value), c3.length !== t4); a3 = true)
                    ;
              } catch (e5) {
                l3 = true, r2 = e5;
              } finally {
                try {
                  if (!a3 && null != n3.return && (s3 = n3.return(), Object(s3) !== s3))
                    return;
                } finally {
                  if (l3)
                    throw r2;
                }
              }
              return c3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return y(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? y(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, r.useState)(false), 2), l2 = a2[0], u2 = a2[1];
        return c2.g = function() {
          return l2;
        }, c2.s = u2, i().createElement(x, { onClick: l2 ? s2 : o2, viewBox: l2 ? "0 0 950 1024" : "0 0 18 18", size: l2 ? "24px" : "20px", d: l2 ? "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z" : "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", title: l2 ? "Exit fullscreen" : "Enter fullscreen" });
      }
      const S = function(e2) {
        var t2 = e2.fsLightbox.core.lightboxCloser.closeLightbox;
        return i().createElement(x, { onClick: t2, viewBox: "0 0 24 24", size: "20px", d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z", title: "Close" });
      }, E = function(e2) {
        var t2 = e2.fsLightbox;
        return i().createElement("div", { className: "".concat(s, "toolbar") }, i().createElement(w, { o: t2 }), i().createElement(S, { fsLightbox: t2 }));
      };
      function L(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      const A = function(e2) {
        var t2, n2, o2 = e2.fsLightbox, c2 = o2.componentsServices, a2 = o2.props.sources, l2 = o2.stageIndexes, u2 = (t2 = (0, r.useState)(l2.current + 1), n2 = 2, function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(t2) || function(e3, t3) {
          var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != n3) {
            var o3, r2, i2, s2, c3 = [], a3 = true, l3 = false;
            try {
              if (i2 = (n3 = n3.call(e3)).next, 0 === t3) {
                if (Object(n3) !== n3)
                  return;
                a3 = false;
              } else
                for (; !(a3 = (o3 = i2.call(n3)).done) && (c3.push(o3.value), c3.length !== t3); a3 = true)
                  ;
            } catch (e4) {
              l3 = true, r2 = e4;
            } finally {
              try {
                if (!a3 && null != n3.return && (s2 = n3.return(), Object(s2) !== s2))
                  return;
              } finally {
                if (l3)
                  throw r2;
              }
            }
            return c3;
          }
        }(t2, n2) || function(e3, t3) {
          if (e3) {
            if ("string" == typeof e3)
              return L(e3, t3);
            var n3 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? L(e3, t3) : void 0;
          }
        }(t2, n2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), f2 = u2[0], d2 = u2[1];
        c2.setSlideNumber = function(e3) {
          d2(e3);
        };
        var p2 = i().createRef(), m2 = i().createRef();
        return (0, r.useEffect)(function() {
          m2.current.offsetWidth > 55 && (p2.current.style.justifyContent = "flex-start");
        }, []), i().createElement("div", { ref: p2, className: "".concat(s, "slide-number-container") }, i().createElement("div", { ref: m2, className: "fslightbox-flex-centered" }, i().createElement("span", null, f2), i().createElement("span", { className: "".concat(s, "slash") }), i().createElement("span", null, a2.length)));
      }, O = function(e2) {
        var t2 = e2.fsLightbox;
        return i().createElement("div", { className: "".concat(s, "nav") }, i().createElement(E, { fsLightbox: t2 }), t2.props.sources.length > 1 && i().createElement(A, { fsLightbox: t2 }));
      };
      function C(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      const I = function(e2) {
        var t2, n2, o2 = e2.fsLightbox.componentsServices, c2 = (t2 = (0, r.useState)(false), n2 = 2, function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(t2) || function(e3, t3) {
          var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != n3) {
            var o3, r2, i2, s2, c3 = [], a3 = true, l2 = false;
            try {
              if (i2 = (n3 = n3.call(e3)).next, 0 === t3) {
                if (Object(n3) !== n3)
                  return;
                a3 = false;
              } else
                for (; !(a3 = (o3 = i2.call(n3)).done) && (c3.push(o3.value), c3.length !== t3); a3 = true)
                  ;
            } catch (e4) {
              l2 = true, r2 = e4;
            } finally {
              try {
                if (!a3 && null != n3.return && (s2 = n3.return(), Object(s2) !== s2))
                  return;
              } finally {
                if (l2)
                  throw r2;
              }
            }
            return c3;
          }
        }(t2, n2) || function(e3, t3) {
          if (e3) {
            if ("string" == typeof e3)
              return C(e3, t3);
            var n3 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? C(e3, t3) : void 0;
          }
        }(t2, n2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), a2 = c2[0], u2 = c2[1];
        return o2.showSlideSwipingHovererIfNotYet = function() {
          a2 || u2(true);
        }, o2.hideSlideSwipingHovererIfShown = function() {
          a2 && u2(false);
        }, a2 && i().createElement("div", { className: "".concat(s, "slide-swiping-hoverer ").concat(l, " ").concat(d) });
      }, j = function(e2) {
        var t2 = e2.onClick, n2 = e2.name, o2 = e2.d, r2 = n2.charAt(0).toUpperCase() + n2.slice(1), c2 = "".concat(s, "slide-btn");
        return i().createElement("div", { onClick: t2, title: "".concat(r2, " slide"), className: "".concat(c2, "-container ").concat(c2, "-").concat(n2, "-container") }, i().createElement("div", { className: "".concat(c2, " ").concat(u) }, i().createElement(b, { viewBox: "0 0 20 20", size: "20px", d: o2 })));
      };
      function z(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      function F(e2) {
        var t2 = e2.o, n2 = t2.elements.sourcesComponents, o2 = t2.isl, s2 = t2.loc, c2 = t2.saw, a2 = t2.sawu, l2 = t2.st, u2 = t2.stageIndexes.current, f2 = e2.i, d2 = function(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
            if (null != n3) {
              var o3, r2, i2, s3, c3 = [], a3 = true, l3 = false;
              try {
                if (i2 = (n3 = n3.call(e4)).next, 0 === t4) {
                  if (Object(n3) !== n3)
                    return;
                  a3 = false;
                } else
                  for (; !(a3 = (o3 = i2.call(n3)).done) && (c3.push(o3.value), c3.length !== t4); a3 = true)
                    ;
              } catch (e5) {
                l3 = true, r2 = e5;
              } finally {
                try {
                  if (!a3 && null != n3.return && (s3 = n3.return(), Object(s3) !== s3))
                    return;
                } finally {
                  if (l3)
                    throw r2;
                }
              }
              return c3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return z(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? z(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, r.useState)(false), 2), p2 = d2[0], m2 = d2[1];
        return a2[f2] = function() {
          m2(!p2);
        }, i().createElement("div", { ref: c2[f2] }, !o2[f2] && i().createElement("div", { className: "fslightboxl" }, i().createElement("div", null), i().createElement("div", null), i().createElement("div", null), i().createElement("div", null)), (f2 === u2 || !s2 && l2.i(f2)) && n2[f2]);
      }
      function k(e2) {
        var t2 = e2.o, n2 = e2.i, o2 = t2.props.slideDistance, r2 = t2.smw, s2 = t2.smwm, c2 = t2.st, a2 = 0;
        s2[n2] = {};
        var p2 = s2[n2];
        function m2() {
          return r2[n2].current;
        }
        function h2(e3) {
          m2().style.transform = "translateX(".concat(e3 + a2, "px)"), a2 = 0;
        }
        function g2() {
          return (1 + o2) * innerWidth;
        }
        return p2.s = function() {
          m2().style.display = "flex";
        }, p2.h = function() {
          m2().style.display = "none";
        }, p2.a = function() {
          m2().classList.add(f);
        }, p2.d = function() {
          m2().classList.remove(f);
        }, p2.n = function() {
          m2().style.removeProperty("transform");
        }, p2.v = function(e3) {
          return a2 = e3, p2;
        }, p2.ne = function() {
          h2(-g2());
        }, p2.z = function() {
          h2(0);
        }, p2.p = function() {
          h2(g2());
        }, i().createElement("div", { ref: r2[n2], className: "".concat(d, " ").concat(l, " ").concat(u), style: c2.i(n2) ? {} : { display: "none" } }, i().createElement(F, { o: t2, i: n2 }));
      }
      function T(e2) {
        return e2.touches ? e2.touches[0].screenX : e2.screenX;
      }
      const R = function(e2) {
        for (var t2 = e2.o, n2 = [], o2 = 0; o2 < t2.sl; o2++)
          n2.push(i().createElement(k, { o: t2, i: o2, key: o2 }));
        return i().createElement("div", { className: "".concat(d, " ").concat(l), onPointerDown: function(e3) {
          !function(e4, t3) {
            var n3 = e4.elements.sources, o3 = e4.p, r2 = e4.smwm, i2 = e4.stageIndexes;
            "IMG" === t3.target.tagName && t3.preventDefault(), o3.isSwiping = true, o3.downScreenX = T(t3), o3.swipedX = 0;
            var s2 = n3[i2.current].current;
            s2 && s2.contains(t3.target) ? o3.isSourceDownEventTarget = true : o3.isSourceDownEventTarget = false;
            for (var c2 = 0; c2 < r2.length; c2++)
              r2[c2].d();
          }(t2, e3);
        } }, n2);
      };
      var H = ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightboxin{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightboxs{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}";
      function N() {
        var e2 = document.createElement("style");
        e2.className = c, e2.appendChild(document.createTextNode(H)), document.head.appendChild(e2);
      }
      function M(e2) {
        for (var t2 = e2.props.sources, n2 = [], o2 = 0; o2 < t2.length; o2++)
          n2.push(i().createRef());
        return n2;
      }
      function U(e2, t2, n2) {
        for (var o2 = 0; o2 < e2.props.sources.length; o2++)
          e2.collections[t2][o2] = e2.resolve(n2, [o2]);
      }
      var P = "fslightbox-types";
      function W(e2) {
        var t2, n2 = e2.props, o2 = false, r2 = {}, i2 = 0;
        if (this.getSourceTypeFromLocalStorageByUrl = function(e3) {
          return t2[e3] ? t2[e3] : s2(e3);
        }, this.handleReceivedSourceTypeForUrl = function(e3, n3) {
          if (r2[n3] === o2 && (i2--, "invalid" !== e3 ? r2[n3] = e3 : delete r2[n3], 0 === i2)) {
            !function(e4, t3) {
              for (var n4 in t3)
                e4[n4] = t3[n4];
            }(t2, r2);
            try {
              localStorage.setItem(P, JSON.stringify(t2));
            } catch (e4) {
            }
          }
        }, n2.disableLocalStorage)
          this.getSourceTypeFromLocalStorageByUrl = function() {
          }, this.handleReceivedSourceTypeForUrl = function() {
          };
        else {
          try {
            t2 = JSON.parse(localStorage.getItem(P));
          } catch (e3) {
          }
          t2 || (t2 = {}, this.getSourceTypeFromLocalStorageByUrl = s2);
        }
        function s2(e3) {
          i2++, r2[e3] = o2;
        }
      }
      var B = "image", D = "video", X = "youtube", q = "custom", V = "invalid";
      function _() {
        return _ = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, _.apply(this, arguments);
      }
      function Y(e2) {
        var t2 = e2.o, n2 = t2.collections.sourceLoadHandlers, o2 = t2.elements.sources, r2 = t2.props, s2 = r2.customAttributes, c2 = r2.sources, a2 = e2.i;
        return i().createElement("img", _({ className: "fslightboxs", onLoad: n2[a2].handleImageLoad, ref: o2[a2], src: c2[a2] }, s2 && s2[a2] ? s2[a2] : {}));
      }
      function $() {
        return $ = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, $.apply(this, arguments);
      }
      function Q(e2) {
        var t2 = e2.o, n2 = t2.collections.sourceLoadHandlers, o2 = t2.elements.sources, r2 = t2.props, s2 = r2.customAttributes, c2 = r2.sources, a2 = t2.timeout, l2 = e2.i;
        return a2(n2[l2].handleNotMetaDatedVideoLoad, 3e3), i().createElement("video", $({ ref: o2[l2], className: "fslightboxs fslightboxv", src: c2[l2], onLoadedMetadata: n2[l2].handleVideoLoad, controls: true }, s2 && s2[l2] ? s2[l2] : {}));
      }
      function G() {
        return G = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, G.apply(this, arguments);
      }
      function J(e2) {
        var t2 = e2.o, n2 = t2.elements.sources, o2 = t2.collections.sourceLoadHandlers, s2 = t2.props, c2 = s2.customAttributes, a2 = s2.sources, l2 = e2.i;
        (0, r.useEffect)(o2[l2].handleYoutubeLoad);
        var u2 = a2[l2], f2 = u2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], d2 = u2.split("?")[1];
        return d2 = d2 || "", i().createElement("iframe", G({ ref: n2[l2], className: "fslightboxs", src: "https://www.youtube.com/embed/".concat(f2, "?").concat(d2), frameBorder: "0", allowFullScreen: true }, c2 && c2[l2] ? c2[l2] : {}));
      }
      function Z(e2) {
        var t2 = e2.o, n2 = t2.isl, o2 = t2.sawu, s2 = t2.smw, c2 = e2.i;
        return (0, r.useEffect)(function() {
          n2[c2] = true, o2[c2](), s2[c2].current.classList.add(h);
        }), i().createElement("div", { className: "fslightboxin ".concat(u) }, "Invalid source");
      }
      function K(e2) {
        var t2 = e2.o, n2 = t2.collections.sourceLoadHandlers, o2 = t2.elements.sources, s2 = t2.props.sources, c2 = e2.i;
        (0, r.useEffect)(n2[c2].handleCustomLoad);
        var a2 = s2[c2].props.className;
        return i().cloneElement(s2[c2], { ref: o2[c2], className: a2 ? "".concat(a2, " fslightboxs") : "fslightboxs" });
      }
      function ee(e2) {
        var t2 = e2.componentsServices.isLightboxOpenManager, n2 = e2.elements.sourcesComponents, o2 = e2.sawu;
        this.runActionsForSourceTypeAndIndex = function(r2, s2) {
          var c2;
          switch (r2) {
            case B:
              c2 = Y;
              break;
            case D:
              c2 = Q;
              break;
            case X:
              c2 = J;
              break;
            case q:
              c2 = K;
              break;
            default:
              c2 = Z;
          }
          n2[s2] = i().createElement(c2, { o: e2, i: s2 }), t2.get() && o2[s2]();
        };
      }
      function te(e2, t2, n2) {
        var o2 = e2.props, r2 = o2.types, i2 = o2.type, s2 = o2.sources;
        this.getTypeSetByClientForIndex = function(e3) {
          var t3;
          return r2 && r2[e3] ? t3 = r2[e3] : i2 && (t3 = i2), t3;
        }, this.retrieveTypeWithXhrForIndex = function(e3) {
          !function(e4, t3) {
            var n3 = document.createElement("a");
            n3.href = e4;
            var o3 = n3.hostname;
            if ("www.youtube.com" === o3 || "youtu.be" === o3)
              return t3(X);
            var r3 = new XMLHttpRequest();
            r3.onreadystatechange = function() {
              if (4 !== r3.readyState) {
                if (2 === r3.readyState) {
                  var e5, n4 = r3.getResponseHeader("content-type");
                  switch (n4.slice(0, n4.indexOf("/"))) {
                    case "image":
                      e5 = B;
                      break;
                    case "video":
                      e5 = D;
                      break;
                    default:
                      e5 = V;
                  }
                  r3.onreadystatechange = null, r3.abort(), t3(e5);
                }
              } else
                t3(V);
            }, r3.open("GET", e4), r3.send();
          }(s2[e3], function(o3) {
            t2.handleReceivedSourceTypeForUrl(o3, s2[e3]), n2.runActionsForSourceTypeAndIndex(o3, e3);
          });
        };
      }
      function ne(e2) {
        var t2 = e2.componentsServices.isLightboxOpenManager, n2 = e2.core, o2 = n2.lightboxCloser, r2 = n2.slideIndexChanger, i2 = e2.stageIndexes;
        this.runTogglerUpdateActions = function() {
          t2.get() ? o2.closeLightbox() : e2.ii ? e2.o() : e2.i();
        }, this.runCurrentStageIndexUpdateActionsFor = function(e3) {
          e3 !== i2.current && (t2.get() ? r2.jumpTo(e3) : i2.current = e3);
        };
      }
      function oe(e2) {
        var t2 = e2.core.lightboxUpdater, n2 = (0, e2.resolve)(ne);
        t2.handleUpdate = function(t3) {
          var o2 = e2.props;
          void 0 !== o2.source ? n2.runCurrentStageIndexUpdateActionsFor(o2.sources.indexOf(o2.source)) : void 0 !== o2.sourceIndex ? n2.runCurrentStageIndexUpdateActionsFor(o2.sourceIndex) : void 0 !== o2.slide && n2.runCurrentStageIndexUpdateActionsFor(o2.slide - 1), t3.toggler !== o2.toggler && n2.runTogglerUpdateActions();
        };
      }
      var re = 250;
      function ie(e2) {
        var t2 = e2.loc, n2 = e2.stageIndexes, o2 = e2.sawu;
        if (t2)
          o2[n2.current]();
        else
          for (var r2 in n2) {
            var i2 = n2[r2];
            void 0 !== i2 && o2[i2]();
          }
      }
      function se(e2, t2) {
        var n2 = e2.current.classList;
        n2.contains(t2) && n2.remove(t2);
      }
      function ce(e2) {
        var t2, n2 = e2.dss, o2 = e2.p, r2 = e2.sl, i2 = (t2 = false, function() {
          return !t2 && (t2 = true, requestAnimationFrame(function() {
            t2 = false;
          }), true);
        });
        this.a = 1 === r2 || n2 ? function() {
          o2.swipedX = 1;
        } : function(t3) {
          o2.isSwiping && i2() && function(e3, t4) {
            var n3 = e3.componentsServices, o3 = e3.elements.container, r3 = e3.p, i3 = e3.smwm, s2 = e3.stageIndexes;
            n3.showSlideSwipingHovererIfNotYet(), o3.current.classList.add(a), r3.swipedX = T(t4) - r3.downScreenX;
            var c2 = s2.previous, l2 = s2.next;
            function u2(e4, t5) {
              i3[e4].v(r3.swipedX)[t5]();
            }
            u2(s2.current, "z"), void 0 !== c2 && r3.swipedX > 0 ? u2(c2, "ne") : void 0 !== l2 && r3.swipedX < 0 && u2(l2, "p");
          }(e2, t3);
        };
      }
      function ae(e2) {
        var t2 = e2.core.slideIndexChanger, n2 = e2.smwm, o2 = e2.stageIndexes, r2 = e2.sws;
        function i2(e3) {
          var t3 = n2[o2.current];
          t3.a(), t3[e3]();
        }
        function s2(e3, t3) {
          void 0 !== e3 && (n2[e3].s(), n2[e3][t3]());
        }
        this.p = function() {
          var e3 = o2.previous;
          if (void 0 === e3)
            i2("z");
          else {
            i2("p");
            var n3 = o2.next;
            t2.changeTo(e3);
            var c2 = o2.previous;
            r2.d(c2), r2.b(n3), i2("z"), s2(c2, "ne");
          }
        }, this.n = function() {
          var e3 = o2.next;
          if (void 0 === e3)
            i2("z");
          else {
            i2("ne");
            var n3 = o2.previous;
            t2.changeTo(e3);
            var c2 = o2.next;
            r2.d(c2), r2.b(n3), i2("z"), s2(c2, "p");
          }
        };
      }
      function le(e2) {
        var t2 = e2.componentsServices, n2 = e2.core.lightboxCloser, o2 = e2.dss, r2 = e2.elements.container, i2 = e2.p, s2 = e2.props.disableBackgroundClose, c2 = (0, e2.r)(ae);
        this.n = function() {
          t2.hideSlideSwipingHovererIfShown(), i2.isSourceDownEventTarget || s2 || n2.closeLightbox(), i2.isSwiping = false;
        }, this.s = function() {
          o2 || (i2.swipedX > 0 ? c2.p() : c2.n()), t2.hideSlideSwipingHovererIfShown(), r2.current.classList.remove(a), i2.isSwiping = false;
        };
      }
      function ue(e2) {
        var t2, n2, o2;
        !function(e3) {
          var t3 = e3.props.sources, n3 = e3.st, o3 = e3.stageIndexes, r2 = t3.length - 1;
          n3.p = function() {
            return 0 === o3.current ? r2 : o3.current - 1;
          }, n3.n = function() {
            return o3.current === r2 ? 0 : o3.current + 1;
          }, n3.u = 0 === r2 ? function() {
          } : 1 === r2 ? function() {
            0 === o3.current ? (o3.next = 1, delete o3.previous) : (o3.previous = 0, delete o3.next);
          } : function() {
            o3.previous = n3.p(), o3.next = n3.n();
          }, n3.i = r2 <= 2 ? function() {
            return true;
          } : function(e4) {
            var t4 = o3.current;
            if (0 === t4 && e4 === r2 || t4 === r2 && 0 === e4)
              return true;
            var n4 = t4 - e4;
            return -1 === n4 || 0 === n4 || 1 === n4;
          };
        }(e2), n2 = (t2 = e2).core.classFacade, o2 = t2.elements, n2.removeFromEachElementClassIfContains = function(e3, t3) {
          for (var n3 = 0; n3 < o2[e3].length; n3++)
            se(o2[e3][n3], t3);
        }, function(e3) {
          var t3 = e3.fs, n3 = e3.fss, o3 = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
          function r2(e4) {
            for (var t4 = 0; t4 < o3.length; t4++)
              document[e4](o3[t4], i2);
          }
          function i2() {
            n3.s(document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement);
          }
          t3.o = function() {
            n3.s(true);
            var e4 = document.documentElement;
            e4.requestFullscreen ? e4.requestFullscreen() : e4.mozRequestFullScreen ? e4.mozRequestFullScreen() : e4.webkitRequestFullscreen ? e4.webkitRequestFullscreen() : e4.msRequestFullscreen && e4.msRequestFullscreen();
          }, t3.x = function() {
            n3.s(false), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
          }, t3.t = function() {
            n3.g() ? t3.x() : t3.o();
          }, t3.l = function() {
            r2("addEventListener");
          }, t3.q = function() {
            r2("removeEventListener");
          };
        }(e2), function(e3) {
          var t3, n3, o3 = e3.core, r2 = o3.globalEventsController, i2 = o3.windowResizeActioner, s2 = e3.fs, c2 = (0, e3.r)(ce);
          r2.attachListeners = function() {
            document.addEventListener("pointermove", c2.a), n3 = function(t4) {
              var n4, o4, r3;
              o4 = (n4 = e3).p, r3 = (0, n4.r)(le), o4.isSwiping && (o4.swipedX ? r3.s() : r3.n());
            }, document.addEventListener("pointerup", n3), addEventListener("resize", i2.runActions), t3 = function(t4) {
              !function(e4, t5) {
                var n4 = e4.core.lightboxCloser, o4 = e4.fs;
                switch (t5.key) {
                  case "Escape":
                    n4.closeLightbox();
                    break;
                  case "ArrowLeft":
                    e4.pr();
                    break;
                  case "ArrowRight":
                    e4.n();
                    break;
                  case "F11":
                    t5.preventDefault(), o4.t();
                }
              }(e3, t4);
            }, document.addEventListener("keydown", t3), s2.l();
          }, r2.removeListeners = function() {
            document.removeEventListener("pointermove", c2.a), document.removeEventListener("pointerup", n3), removeEventListener("resize", i2.runActions), document.removeEventListener("keydown", t3), s2.q();
          };
        }(e2), function(e3) {
          var t3 = e3.core, n3 = t3.lightboxCloser, o3 = t3.lightboxCloseActioner;
          n3.closeLightbox = function() {
            o3.isLightboxFadingOut || o3.runActions();
          };
        }(e2), function(e3) {
          var t3 = e3.componentsServices.isLightboxOpenManager, n3 = e3.core, o3 = n3.globalEventsController, r2 = n3.lightboxCloseActioner, i2 = n3.scrollbarRecompensor, s2 = e3.e, c2 = e3.elements.container, a2 = e3.fs, l2 = e3.fss, u2 = e3.p, f2 = e3.props, d2 = e3.timeout;
          r2.isLightboxFadingOut = false, r2.runActions = function() {
            r2.isLightboxFadingOut = true, c2.current.classList.add(g), o3.removeListeners(), f2.exitFullscreenOnClose && l2.g() && a2.x(), d2(function() {
              r2.isLightboxFadingOut = false, u2.isSwiping = false, c2.current.classList.remove(g), document.documentElement.classList.remove("fslightbox-open"), i2.removeRecompense(), t3.set(false), s2("onClose");
            }, re - 30);
          };
        }(e2), oe(e2), function(e3) {
          var t3 = e3.data, n3 = e3.core.scrollbarRecompensor;
          n3.addRecompense = function() {
            "complete" === document.readyState ? o3() : window.addEventListener("load", function() {
              o3(), n3.addRecompense = o3;
            });
          };
          var o3 = function() {
            document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = t3.scrollbarWidth + "px");
          };
          n3.removeRecompense = function() {
            document.body.style.removeProperty("margin-right");
          };
        }(e2), function(e3) {
          var t3 = e3.core.slideIndexChanger, n3 = e3.sl, o3 = e3.st;
          n3 > 1 ? (e3.pr = function() {
            t3.jumpTo(o3.p());
          }, e3.n = function() {
            t3.jumpTo(o3.n());
          }) : (e3.pr = function() {
          }, e3.n = function() {
          });
        }(e2), function(e3) {
          var t3 = e3.componentsServices, n3 = e3.core.slideIndexChanger, o3 = e3.isl, r2 = e3.saw, i2 = e3.smwm, s2 = e3.st, c2 = e3.stageIndexes, a2 = e3.sws;
          n3.changeTo = function(n4) {
            c2.current = n4, s2.u(), t3.setSlideNumber(n4 + 1), ie(e3);
          }, n3.jumpTo = function(e4) {
            var t4 = c2.previous, l2 = c2.current, u2 = c2.next, f2 = o3[l2], d2 = o3[e4];
            n3.changeTo(e4);
            for (var h2 = 0; h2 < i2.length; h2++)
              i2[h2].d();
            a2.d(l2), a2.c(), requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                var e5 = c2.previous, n4 = c2.current, h3 = c2.next;
                function g2() {
                  s2.i(l2) ? l2 === c2.previous ? i2[l2].ne() : l2 === c2.next && i2[l2].p() : (i2[l2].h(), i2[l2].n());
                }
                f2 && r2[l2].current.classList.add(m), d2 && r2[n4].current.classList.add(p), a2.a(), void 0 !== e5 && e5 !== l2 && i2[e5].ne(), i2[n4].n(), void 0 !== h3 && h3 !== l2 && i2[h3].p(), a2.b(t4), a2.b(u2), o3[l2] ? setTimeout(g2, re - 40) : g2();
              });
            });
          };
        }(e2), function(e3) {
          var t3 = e3.isl, n3 = e3.stageIndexes, o3 = e3.saw, r2 = e3.smwm, i2 = e3.st, s2 = e3.sws;
          s2.a = function() {
            for (var e4 in n3)
              r2[n3[e4]].s();
          }, s2.b = function(e4) {
            void 0 === e4 || i2.i(e4) || (r2[e4].h(), r2[e4].n());
          }, s2.c = function() {
            for (var e4 in n3)
              s2.d(n3[e4]);
          }, s2.d = function(e4) {
            if (t3[e4]) {
              var n4 = o3[e4];
              se(n4, h), se(n4, p), se(n4, m);
            }
          };
        }(e2), function(e3) {
          var t3 = e3.collections.sourceSizers, n3 = e3.core.windowResizeActioner, o3 = e3.data, r2 = e3.elements.sources, i2 = e3.smwm, s2 = e3.stageIndexes;
          n3.runActions = function() {
            innerWidth < 992 ? o3.maxSourceWidth = innerWidth : o3.maxSourceWidth = 0.9 * innerWidth, o3.maxSourceHeight = 0.9 * innerHeight;
            for (var e4 = 0; e4 < r2.length; e4++)
              i2[e4].d(), t3[e4] && r2[e4].current && t3[e4].adjustSize();
            var n4 = s2.previous, c2 = s2.next;
            void 0 !== n4 && i2[n4].ne(), void 0 !== c2 && i2[c2].p();
          };
        }(e2);
      }
      function fe(e2, t2, n2, o2) {
        var r2 = e2.data, i2 = e2.elements.sources, s2 = n2 / o2, c2 = 0;
        this.adjustSize = function() {
          if ((c2 = r2.maxSourceWidth / s2) < r2.maxSourceHeight)
            return n2 < r2.maxSourceWidth && (c2 = o2), a2();
          c2 = o2 > r2.maxSourceHeight ? r2.maxSourceHeight : o2, a2();
        };
        var a2 = function() {
          var e3 = i2[t2].current.style;
          e3.width = c2 * s2 + "px", e3.height = c2 + "px";
        };
      }
      function de(e2, t2) {
        var n2 = this, o2 = e2.collections.sourceSizers, r2 = e2.elements.sources, i2 = e2.isl, s2 = e2.resolve, c2 = e2.saw, a2 = e2.sawu;
        function l2(e3, n3) {
          o2[t2] = s2(fe, [t2, e3, n3]), o2[t2].adjustSize();
        }
        this.runActions = function(e3, o3) {
          i2[t2] = true, a2[t2](), r2[t2].current.classList.add(v), c2[t2].current.classList.add(h), l2(e3, o3), n2.runActions = l2;
        };
      }
      function pe(e2, t2) {
        var n2, o2 = this, r2 = e2.elements.sources, i2 = e2.props, s2 = (0, e2.resolve)(de, [t2]);
        this.handleImageLoad = function(e3) {
          var t3 = e3.target, n3 = t3.naturalWidth, o3 = t3.naturalHeight;
          s2.runActions(n3, o3);
        }, this.handleVideoLoad = function(e3) {
          var t3 = e3.target, o3 = t3.videoWidth, r3 = t3.videoHeight;
          n2 = true, s2.runActions(o3, r3);
        }, this.handleNotMetaDatedVideoLoad = function() {
          n2 || o2.handleYoutubeLoad();
        }, this.handleYoutubeLoad = function() {
          var e3 = 1920, t3 = 1080;
          i2.maxYoutubeVideoDimensions && (e3 = i2.maxYoutubeVideoDimensions.width, t3 = i2.maxYoutubeVideoDimensions.height), s2.runActions(e3, t3);
        }, this.handleCustomLoad = function() {
          var e3 = r2[t2].current;
          if (e3) {
            var n3 = e3.offsetWidth, i3 = e3.offsetHeight;
            n3 && i3 ? s2.runActions(n3, i3) : setTimeout(o2.handleCustomLoad);
          }
        };
      }
      function me(e2) {
        return me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, me(e2);
      }
      function he(e2) {
        return he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, he(e2);
      }
      function ge(e2, t2, n2) {
        return ge = we() ? Reflect.construct.bind() : function(e3, t3, n3) {
          var o2 = [null];
          o2.push.apply(o2, t3);
          var r2 = new (Function.bind.apply(e3, o2))();
          return n3 && xe(r2, n3.prototype), r2;
        }, ge.apply(null, arguments);
      }
      function ve(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      function be(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var o2 = t2[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, (void 0, r2 = function(e3, t3) {
            if ("object" !== he(e3) || null === e3)
              return e3;
            var n3 = e3[Symbol.toPrimitive];
            if (void 0 !== n3) {
              var o3 = n3.call(e3, "string");
              if ("object" !== he(o3))
                return o3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e3);
          }(o2.key), "symbol" === he(r2) ? r2 : String(r2)), o2);
        }
        var r2;
      }
      function xe(e2, t2) {
        return xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        }, xe(e2, t2);
      }
      function ye(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }
      function we() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e2) {
          return false;
        }
      }
      function Se(e2) {
        return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        }, Se(e2);
      }
      "object" === ("undefined" == typeof document ? "undefined" : me(document)) && N();
      var Ee = function(e2) {
        !function(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && xe(e3, t3);
        }(u2, e2);
        var t2, n2, o2, r2, a2 = (o2 = u2, r2 = we(), function() {
          var e3, t3 = Se(o2);
          if (r2) {
            var n3 = Se(this).constructor;
            e3 = Reflect.construct(t3, arguments, n3);
          } else
            e3 = t3.apply(this, arguments);
          return function(e4, t4) {
            if (t4 && ("object" === he(t4) || "function" == typeof t4))
              return t4;
            if (void 0 !== t4)
              throw new TypeError("Derived constructors may only return object or undefined");
            return ye(e4);
          }(this, e3);
        });
        function u2(e3) {
          var t3;
          return function(e4, t4) {
            if (!(e4 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }(this, u2), (t3 = a2.call(this, e3)).state = { isOpen: false }, t3.data = { maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0 }, t3.isl = [], t3.p = { isSwiping: false, downScreenX: null, isSourceDownEventTarget: false, swipedX: 0 }, t3.stageIndexes = { current: 0 }, t3.componentsServices = { showSlideSwipingHovererIfNotYet: null, hideSlideSwipingHovererIfShown: null, setSlideNumber: null, isSlideSwipingHovererShown: {}, isLightboxOpenManager: { get: function() {
            return t3.state.isOpen;
          }, set: function(e4, n3) {
            t3.setState({ isOpen: e4 }, n3);
          } } }, t3.fss = {}, t3.sawu = [], t3.elements = { container: i().createRef(), sources: null, sourcesComponents: [] }, t3.collections = { sourceLoadHandlers: [], sourceSizers: [], xhrs: [] }, t3.smwm = [], t3.core = { classFacade: {}, globalEventsController: {}, lightboxCloser: {}, lightboxCloseActioner: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideIndexChanger: {}, windowResizeActioner: {} }, t3.fs = {}, t3.st = {}, t3.sws = {}, t3.timeout = t3.timeout.bind(ye(t3)), t3.getQueuedAction = t3.getQueuedAction.bind(ye(t3)), t3.r = t3.resolve.bind(ye(t3)), t3.resolve = t3.resolve.bind(ye(t3)), t3.e = t3.e.bind(ye(t3)), oe(ye(t3)), function(e4) {
            var t4 = e4.componentsServices.isLightboxOpenManager, n3 = e4.core, o3 = n3.globalEventsController, r3 = n3.scrollbarRecompensor, i2 = n3.windowResizeActioner, s2 = e4.e, c2 = e4.elements, a3 = e4.st, l2 = e4.stageIndexes, u3 = e4.sws;
            function f2() {
              ie(e4), document.documentElement.classList.add("fslightbox-open"), r3.addRecompense(), o3.attachListeners(), i2.runActions(), s2("onOpen");
            }
            e4.o = function() {
              U(e4, "sourceLoadHandlers", pe), t4.set(true, function() {
                u3.b(l2.previous), u3.b(l2.current), u3.b(l2.next), a3.u(), u3.c(), u3.a(), f2(), s2("onShow");
              });
            }, e4.i = function() {
              e4.ii = true, function(e5) {
                var t5 = e5.props;
                e5.s = t5.sources, e5.sl = e5.s.length, e5.dss = t5.disableSlideSwiping, e5.loc = t5.loadOnlyCurrentSource;
              }(e4), e4.smw = M(e4), e4.saw = M(e4), c2.sources = M(e4), U(e4, "sourceLoadHandlers", pe), ue(e4), a3.u(), t4.set(true, function() {
                f2(), function(e5) {
                  for (var t5 = e5.props.sources, n4 = e5.resolve, o4 = n4(W), r4 = n4(ee), i3 = n4(te, [o4, r4]), s3 = 0; s3 < t5.length; s3++)
                    if ("string" == typeof t5[s3]) {
                      var c3 = i3.getTypeSetByClientForIndex(s3);
                      if (c3)
                        r4.runActionsForSourceTypeAndIndex(c3, s3);
                      else {
                        var a4 = o4.getSourceTypeFromLocalStorageByUrl(t5[s3]);
                        a4 ? r4.runActionsForSourceTypeAndIndex(a4, s3) : i3.retrieveTypeWithXhrForIndex(s3);
                      }
                    } else
                      r4.runActionsForSourceTypeAndIndex(q, s3);
                }(e4), s2("onInit");
              });
            };
          }(ye(t3)), t3;
        }
        return t2 = u2, n2 = [{ key: "timeout", value: function(e3, t3) {
          var n3 = this;
          setTimeout(function() {
            n3.elements.container.current && e3();
          }, t3);
        } }, { key: "getQueuedAction", value: function(e3, t3) {
          var n3 = this, o3 = [];
          return function() {
            o3.push(true), n3.timeout(function() {
              o3.pop(), o3.length || e3();
            }, t3);
          };
        } }, { key: "resolve", value: function(e3) {
          var t3, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return n3.unshift(this), ge(e3, function(e4) {
            if (Array.isArray(e4))
              return ve(e4);
          }(t3 = n3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
              return Array.from(e4);
          }(t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return ve(e4, t4);
              var n4 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n4 && e4.constructor && (n4 = e4.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e4) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? ve(e4, t4) : void 0;
            }
          }(t3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }());
        } }, { key: "e", value: function(e3) {
          var t3 = this.props[e3];
          t3 && t3(this);
        } }, { key: "componentDidUpdate", value: function(e3, t3, n3) {
          this.core.lightboxUpdater.handleUpdate(e3);
        } }, { key: "componentDidMount", value: function() {
          var e3, t3, n3, o3;
          t3 = (e3 = this).data, n3 = e3.i, o3 = e3.props.openOnMount, document.getElementsByClassName(c).length || N(), t3.scrollbarWidth = function() {
            var e4 = document.createElement("div"), t4 = e4.style, n4 = document.createElement("div");
            t4.visibility = "hidden", t4.width = "100px", t4.msOverflowStyle = "scrollbar", t4.overflow = "scroll", n4.style.width = "100%", document.body.appendChild(e4);
            var o4 = e4.offsetWidth;
            e4.appendChild(n4);
            var r3 = n4.offsetWidth;
            return document.body.removeChild(e4), o4 - r3;
          }(), o3 && n3();
        } }, { key: "componentWillUnmount", value: function() {
          !function(e3) {
            for (var t3 = e3.collections.xhrs, n3 = e3.componentsServices.isLightboxOpenManager, o3 = e3.core.globalEventsController, r3 = 0; r3 < t3.length; r3++)
              t3[r3].abort();
            n3.get() && o3.removeListeners();
          }(this);
        } }, { key: "render", value: function() {
          return this.state.isOpen ? i().createElement("div", { ref: this.elements.container, className: "".concat(s, "container ").concat(l, " ").concat(h) }, i().createElement(I, { fsLightbox: this }), i().createElement(O, { fsLightbox: this }), this.props.sources.length > 1 ? i().createElement(i().Fragment, null, i().createElement(j, { onClick: this.pr, name: "previous", d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z" }), i().createElement(j, { onClick: this.n, name: "next", d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z" })) : null, i().createElement(R, { o: this })) : null;
        } }], n2 && be(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), u2;
      }(r.Component);
      Ee.propTypes = { toggler: o().bool, sources: o().array, slide: o().number, source: o().string, sourceIndex: o().number, onOpen: o().func, onClose: o().func, onInit: o().func, onShow: o().func, disableLocalStorage: o().bool, types: o().array, type: o().string, customAttributes: o().array, maxYoutubeVideoDimensions: o().object, disableBackgroundClose: o().bool, disableSlideSwiping: o().bool, exitFullscreenOnClose: o().bool, loadOnlyCurrentSource: o().bool, openOnMount: o().bool, slideDistance: o().number }, Ee.defaultProps = { slideDistance: 0.3 };
      const Le = Ee;
      module.exports = t;
    })();
  }
});
export default require_fslightbox_react();
//# sourceMappingURL=fslightbox-react.js.map
