function SO(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Ry = { exports: {} }, Sv = {}, wy = { exports: {} }, bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function EO() {
  if (pT) return bt;
  pT = 1;
  var c = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), m = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), M = Symbol.iterator;
  function H(P) {
    return P === null || typeof P != "object" ? null : (P = M && P[M] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var Y = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, X = {};
  function K(P, re, Ze) {
    this.props = P, this.context = re, this.refs = X, this.updater = Ze || Y;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(P, re) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, re, "setState");
  }, K.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = K.prototype;
  function ce(P, re, Ze) {
    this.props = P, this.context = re, this.refs = X, this.updater = Ze || Y;
  }
  var fe = ce.prototype = new Z();
  fe.constructor = ce, j(fe, K.prototype), fe.isPureReactComponent = !0;
  var De = Array.isArray, he = Object.prototype.hasOwnProperty, Ye = { current: null }, Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Tt(P, re, Ze) {
    var Xe, yt = {}, pt = null, ct = null;
    if (re != null) for (Xe in re.ref !== void 0 && (ct = re.ref), re.key !== void 0 && (pt = "" + re.key), re) he.call(re, Xe) && !Me.hasOwnProperty(Xe) && (yt[Xe] = re[Xe]);
    var vt = arguments.length - 2;
    if (vt === 1) yt.children = Ze;
    else if (1 < vt) {
      for (var gt = Array(vt), Qt = 0; Qt < vt; Qt++) gt[Qt] = arguments[Qt + 2];
      yt.children = gt;
    }
    if (P && P.defaultProps) for (Xe in vt = P.defaultProps, vt) yt[Xe] === void 0 && (yt[Xe] = vt[Xe]);
    return { $$typeof: c, type: P, key: pt, ref: ct, props: yt, _owner: Ye.current };
  }
  function tt(P, re) {
    return { $$typeof: c, type: P.type, key: re, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function _t(P) {
    return typeof P == "object" && P !== null && P.$$typeof === c;
  }
  function Gt(P) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(Ze) {
      return re[Ze];
    });
  }
  var At = /\/+/g;
  function We(P, re) {
    return typeof P == "object" && P !== null && P.key != null ? Gt("" + P.key) : re.toString(36);
  }
  function It(P, re, Ze, Xe, yt) {
    var pt = typeof P;
    (pt === "undefined" || pt === "boolean") && (P = null);
    var ct = !1;
    if (P === null) ct = !0;
    else switch (pt) {
      case "string":
      case "number":
        ct = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case c:
          case d:
            ct = !0;
        }
    }
    if (ct) return ct = P, yt = yt(ct), P = Xe === "" ? "." + We(ct, 0) : Xe, De(yt) ? (Ze = "", P != null && (Ze = P.replace(At, "$&/") + "/"), It(yt, re, Ze, "", function(Qt) {
      return Qt;
    })) : yt != null && (_t(yt) && (yt = tt(yt, Ze + (!yt.key || ct && ct.key === yt.key ? "" : ("" + yt.key).replace(At, "$&/") + "/") + P)), re.push(yt)), 1;
    if (ct = 0, Xe = Xe === "" ? "." : Xe + ":", De(P)) for (var vt = 0; vt < P.length; vt++) {
      pt = P[vt];
      var gt = Xe + We(pt, vt);
      ct += It(pt, re, Ze, gt, yt);
    }
    else if (gt = H(P), typeof gt == "function") for (P = gt.call(P), vt = 0; !(pt = P.next()).done; ) pt = pt.value, gt = Xe + We(pt, vt++), ct += It(pt, re, Ze, gt, yt);
    else if (pt === "object") throw re = String(P), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    return ct;
  }
  function Ut(P, re, Ze) {
    if (P == null) return P;
    var Xe = [], yt = 0;
    return It(P, Xe, "", "", function(pt) {
      return re.call(Ze, pt, yt++);
    }), Xe;
  }
  function Ft(P) {
    if (P._status === -1) {
      var re = P._result;
      re = re(), re.then(function(Ze) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = Ze);
      }, function(Ze) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = Ze);
      }), P._status === -1 && (P._status = 0, P._result = re);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var Fe = { current: null }, ye = { transition: null }, He = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: ye, ReactCurrentOwner: Ye };
  function Ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: Ut, forEach: function(P, re, Ze) {
    Ut(P, function() {
      re.apply(this, arguments);
    }, Ze);
  }, count: function(P) {
    var re = 0;
    return Ut(P, function() {
      re++;
    }), re;
  }, toArray: function(P) {
    return Ut(P, function(re) {
      return re;
    }) || [];
  }, only: function(P) {
    if (!_t(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, bt.Component = K, bt.Fragment = v, bt.Profiler = E, bt.PureComponent = ce, bt.StrictMode = g, bt.Suspense = k, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, bt.act = Ce, bt.cloneElement = function(P, re, Ze) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var Xe = j({}, P.props), yt = P.key, pt = P.ref, ct = P._owner;
    if (re != null) {
      if (re.ref !== void 0 && (pt = re.ref, ct = Ye.current), re.key !== void 0 && (yt = "" + re.key), P.type && P.type.defaultProps) var vt = P.type.defaultProps;
      for (gt in re) he.call(re, gt) && !Me.hasOwnProperty(gt) && (Xe[gt] = re[gt] === void 0 && vt !== void 0 ? vt[gt] : re[gt]);
    }
    var gt = arguments.length - 2;
    if (gt === 1) Xe.children = Ze;
    else if (1 < gt) {
      vt = Array(gt);
      for (var Qt = 0; Qt < gt; Qt++) vt[Qt] = arguments[Qt + 2];
      Xe.children = vt;
    }
    return { $$typeof: c, type: P.type, key: yt, ref: pt, props: Xe, _owner: ct };
  }, bt.createContext = function(P) {
    return P = { $$typeof: m, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: w, _context: P }, P.Consumer = P;
  }, bt.createElement = Tt, bt.createFactory = function(P) {
    var re = Tt.bind(null, P);
    return re.type = P, re;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(P) {
    return { $$typeof: O, render: P };
  }, bt.isValidElement = _t, bt.lazy = function(P) {
    return { $$typeof: F, _payload: { _status: -1, _result: P }, _init: Ft };
  }, bt.memo = function(P, re) {
    return { $$typeof: b, type: P, compare: re === void 0 ? null : re };
  }, bt.startTransition = function(P) {
    var re = ye.transition;
    ye.transition = {};
    try {
      P();
    } finally {
      ye.transition = re;
    }
  }, bt.unstable_act = Ce, bt.useCallback = function(P, re) {
    return Fe.current.useCallback(P, re);
  }, bt.useContext = function(P) {
    return Fe.current.useContext(P);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(P) {
    return Fe.current.useDeferredValue(P);
  }, bt.useEffect = function(P, re) {
    return Fe.current.useEffect(P, re);
  }, bt.useId = function() {
    return Fe.current.useId();
  }, bt.useImperativeHandle = function(P, re, Ze) {
    return Fe.current.useImperativeHandle(P, re, Ze);
  }, bt.useInsertionEffect = function(P, re) {
    return Fe.current.useInsertionEffect(P, re);
  }, bt.useLayoutEffect = function(P, re) {
    return Fe.current.useLayoutEffect(P, re);
  }, bt.useMemo = function(P, re) {
    return Fe.current.useMemo(P, re);
  }, bt.useReducer = function(P, re, Ze) {
    return Fe.current.useReducer(P, re, Ze);
  }, bt.useRef = function(P) {
    return Fe.current.useRef(P);
  }, bt.useState = function(P) {
    return Fe.current.useState(P);
  }, bt.useSyncExternalStore = function(P, re, Ze) {
    return Fe.current.useSyncExternalStore(P, re, Ze);
  }, bt.useTransition = function() {
    return Fe.current.useTransition();
  }, bt.version = "18.3.1", bt;
}
var Tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Tv.exports;
var vT;
function CO() {
  return vT || (vT = 1, function(c, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.3.1", g = Symbol.for("react.element"), E = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), b = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), K = Symbol.iterator, Z = "@@iterator";
      function ce(C) {
        if (C === null || typeof C != "object")
          return null;
        var D = K && C[K] || C[Z];
        return typeof D == "function" ? D : null;
      }
      var fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {
        transition: null
      }, he = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Me = {}, Tt = null;
      function tt(C) {
        Tt = C;
      }
      Me.setExtraStackFrame = function(C) {
        Tt = C;
      }, Me.getCurrentStack = null, Me.getStackAddendum = function() {
        var C = "";
        Tt && (C += Tt);
        var D = Me.getCurrentStack;
        return D && (C += D() || ""), C;
      };
      var _t = !1, Gt = !1, At = !1, We = !1, It = !1, Ut = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: De,
        ReactCurrentOwner: Ye
      };
      Ut.ReactDebugCurrentFrame = Me, Ut.ReactCurrentActQueue = he;
      function Ft(C) {
        {
          for (var D = arguments.length, q = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            q[J - 1] = arguments[J];
          ye("warn", C, q);
        }
      }
      function Fe(C) {
        {
          for (var D = arguments.length, q = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            q[J - 1] = arguments[J];
          ye("error", C, q);
        }
      }
      function ye(C, D, q) {
        {
          var J = Ut.ReactDebugCurrentFrame, ve = J.getStackAddendum();
          ve !== "" && (D += "%s", q = q.concat([ve]));
          var qe = q.map(function(Ee) {
            return String(Ee);
          });
          qe.unshift("Warning: " + D), Function.prototype.apply.call(console[C], console, qe);
        }
      }
      var He = {};
      function Ce(C, D) {
        {
          var q = C.constructor, J = q && (q.displayName || q.name) || "ReactClass", ve = J + "." + D;
          if (He[ve])
            return;
          Fe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, J), He[ve] = !0;
        }
      }
      var P = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(C, D, q) {
          Ce(C, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(C, D, q, J) {
          Ce(C, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(C, D, q, J) {
          Ce(C, "setState");
        }
      }, re = Object.assign, Ze = {};
      Object.freeze(Ze);
      function Xe(C, D, q) {
        this.props = C, this.context = D, this.refs = Ze, this.updater = q || P;
      }
      Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(C, D) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, D, "setState");
      }, Xe.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, pt = function(C, D) {
          Object.defineProperty(Xe.prototype, C, {
            get: function() {
              Ft("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var ct in yt)
          yt.hasOwnProperty(ct) && pt(ct, yt[ct]);
      }
      function vt() {
      }
      vt.prototype = Xe.prototype;
      function gt(C, D, q) {
        this.props = C, this.context = D, this.refs = Ze, this.updater = q || P;
      }
      var Qt = gt.prototype = new vt();
      Qt.constructor = gt, re(Qt, Xe.prototype), Qt.isPureReactComponent = !0;
      function Mn() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var kr = Array.isArray;
      function wn(C) {
        return kr(C);
      }
      function ir(C) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, q = D && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return q;
        }
      }
      function In(C) {
        try {
          return Yn(C), !1;
        } catch {
          return !0;
        }
      }
      function Yn(C) {
        return "" + C;
      }
      function qr(C) {
        if (In(C))
          return Fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(C)), Yn(C);
      }
      function yi(C, D, q) {
        var J = C.displayName;
        if (J)
          return J;
        var ve = D.displayName || D.name || "";
        return ve !== "" ? q + "(" + ve + ")" : q;
      }
      function da(C) {
        return C.displayName || "Context";
      }
      function Zn(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && Fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case w:
            return "Fragment";
          case E:
            return "Portal";
          case O:
            return "Profiler";
          case m:
            return "StrictMode";
          case M:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case b:
              var D = C;
              return da(D) + ".Consumer";
            case k:
              var q = C;
              return da(q._context) + ".Provider";
            case F:
              return yi(C, C.render, "ForwardRef");
            case Y:
              var J = C.displayName || null;
              return J !== null ? J : Zn(C.type) || "Memo";
            case j: {
              var ve = C, qe = ve._payload, Ee = ve._init;
              try {
                return Zn(Ee(qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, Wn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ka, An;
      An = {};
      function wr(C) {
        if (Tn.call(C, "ref")) {
          var D = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function pa(C) {
        if (Tn.call(C, "key")) {
          var D = Object.getOwnPropertyDescriptor(C, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function Xa(C, D) {
        var q = function() {
          Rr || (Rr = !0, Fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: q,
          configurable: !0
        });
      }
      function gi(C, D) {
        var q = function() {
          Ka || (Ka = !0, Fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: q,
          configurable: !0
        });
      }
      function ge(C) {
        if (typeof C.ref == "string" && Ye.current && C.__self && Ye.current.stateNode !== C.__self) {
          var D = Zn(Ye.current.type);
          An[D] || (Fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, C.ref), An[D] = !0);
        }
      }
      var Pe = function(C, D, q, J, ve, qe, Ee) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: C,
          key: D,
          ref: q,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: qe
        };
        return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function ht(C, D, q) {
        var J, ve = {}, qe = null, Ee = null, Ke = null, wt = null;
        if (D != null) {
          wr(D) && (Ee = D.ref, ge(D)), pa(D) && (qr(D.key), qe = "" + D.key), Ke = D.__self === void 0 ? null : D.__self, wt = D.__source === void 0 ? null : D.__source;
          for (J in D)
            Tn.call(D, J) && !Wn.hasOwnProperty(J) && (ve[J] = D[J]);
        }
        var Mt = arguments.length - 2;
        if (Mt === 1)
          ve.children = q;
        else if (Mt > 1) {
          for (var sn = Array(Mt), Zt = 0; Zt < Mt; Zt++)
            sn[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(sn), ve.children = sn;
        }
        if (C && C.defaultProps) {
          var mt = C.defaultProps;
          for (J in mt)
            ve[J] === void 0 && (ve[J] = mt[J]);
        }
        if (qe || Ee) {
          var en = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          qe && Xa(ve, en), Ee && gi(ve, en);
        }
        return Pe(C, qe, Ee, Ke, wt, Ye.current, ve);
      }
      function Yt(C, D) {
        var q = Pe(C.type, D, C.ref, C._self, C._source, C._owner, C.props);
        return q;
      }
      function ln(C, D, q) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var J, ve = re({}, C.props), qe = C.key, Ee = C.ref, Ke = C._self, wt = C._source, Mt = C._owner;
        if (D != null) {
          wr(D) && (Ee = D.ref, Mt = Ye.current), pa(D) && (qr(D.key), qe = "" + D.key);
          var sn;
          C.type && C.type.defaultProps && (sn = C.type.defaultProps);
          for (J in D)
            Tn.call(D, J) && !Wn.hasOwnProperty(J) && (D[J] === void 0 && sn !== void 0 ? ve[J] = sn[J] : ve[J] = D[J]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          ve.children = q;
        else if (Zt > 1) {
          for (var mt = Array(Zt), en = 0; en < Zt; en++)
            mt[en] = arguments[en + 2];
          ve.children = mt;
        }
        return Pe(C.type, qe, Ee, Ke, wt, Mt, ve);
      }
      function yn(C) {
        return typeof C == "object" && C !== null && C.$$typeof === g;
      }
      var fn = ".", er = ":";
      function un(C) {
        var D = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, J = C.replace(D, function(ve) {
          return q[ve];
        });
        return "$" + J;
      }
      var Kt = !1, Xt = /\/+/g;
      function va(C) {
        return C.replace(Xt, "$&/");
      }
      function Tr(C, D) {
        return typeof C == "object" && C !== null && C.key != null ? (qr(C.key), un("" + C.key)) : D.toString(36);
      }
      function ka(C, D, q, J, ve) {
        var qe = typeof C;
        (qe === "undefined" || qe === "boolean") && (C = null);
        var Ee = !1;
        if (C === null)
          Ee = !0;
        else
          switch (qe) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case g:
                case E:
                  Ee = !0;
              }
          }
        if (Ee) {
          var Ke = C, wt = ve(Ke), Mt = J === "" ? fn + Tr(Ke, 0) : J;
          if (wn(wt)) {
            var sn = "";
            Mt != null && (sn = va(Mt) + "/"), ka(wt, D, sn, "", function(yd) {
              return yd;
            });
          } else wt != null && (yn(wt) && (wt.key && (!Ke || Ke.key !== wt.key) && qr(wt.key), wt = Yt(
            wt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (wt.key && (!Ke || Ke.key !== wt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              va("" + wt.key) + "/"
            ) : "") + Mt
          )), D.push(wt));
          return 1;
        }
        var Zt, mt, en = 0, gn = J === "" ? fn : J + er;
        if (wn(C))
          for (var Ol = 0; Ol < C.length; Ol++)
            Zt = C[Ol], mt = gn + Tr(Zt, Ol), en += ka(Zt, D, q, mt, ve);
        else {
          var os = ce(C);
          if (typeof os == "function") {
            var Gi = C;
            os === Gi.entries && (Kt || Ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var ss = os.call(Gi), Su, md = 0; !(Su = ss.next()).done; )
              Zt = Su.value, mt = gn + Tr(Zt, md++), en += ka(Zt, D, q, mt, ve);
          } else if (qe === "object") {
            var xc = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (xc === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : xc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Wi(C, D, q) {
        if (C == null)
          return C;
        var J = [], ve = 0;
        return ka(C, J, "", "", function(qe) {
          return D.call(q, qe, ve++);
        }), J;
      }
      function cu(C) {
        var D = 0;
        return Wi(C, function() {
          D++;
        }), D;
      }
      function fu(C, D, q) {
        Wi(C, function() {
          D.apply(this, arguments);
        }, q);
      }
      function Cl(C) {
        return Wi(C, function(D) {
          return D;
        }) || [];
      }
      function Rl(C) {
        if (!yn(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function du(C) {
        var D = {
          $$typeof: b,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: k,
          _context: D
        };
        var q = !1, J = !1, ve = !1;
        {
          var qe = {
            $$typeof: b,
            _context: D
          };
          Object.defineProperties(qe, {
            Provider: {
              get: function() {
                return J || (J = !0, Fe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Ee) {
                D.Provider = Ee;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Ee) {
                D._currentValue = Ee;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Ee) {
                D._currentValue2 = Ee;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Ee) {
                D._threadCount = Ee;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, Fe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Ee) {
                ve || (Ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ee), ve = !0);
              }
            }
          }), D.Consumer = qe;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Dr = -1, Or = 0, lr = 1, Si = 2;
      function Ja(C) {
        if (C._status === Dr) {
          var D = C._result, q = D();
          if (q.then(function(qe) {
            if (C._status === Or || C._status === Dr) {
              var Ee = C;
              Ee._status = lr, Ee._result = qe;
            }
          }, function(qe) {
            if (C._status === Or || C._status === Dr) {
              var Ee = C;
              Ee._status = Si, Ee._result = qe;
            }
          }), C._status === Dr) {
            var J = C;
            J._status = Or, J._result = q;
          }
        }
        if (C._status === lr) {
          var ve = C._result;
          return ve === void 0 && Fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || Fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw C._result;
      }
      function Ei(C) {
        var D = {
          // We use these fields to store the result.
          _status: Dr,
          _result: C
        }, q = {
          $$typeof: j,
          _payload: D,
          _init: Ja
        };
        {
          var J, ve;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(qe) {
                Fe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = qe, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(qe) {
                Fe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = qe, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function Ci(C) {
        C != null && C.$$typeof === Y ? Fe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? Fe("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && Fe("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && Fe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: F,
          render: C
        };
        {
          var q;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(J) {
              q = J, !C.name && !C.displayName && (C.displayName = J);
            }
          });
        }
        return D;
      }
      var L;
      L = Symbol.for("react.module.reference");
      function le(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === w || C === O || It || C === m || C === M || C === H || We || C === X || _t || Gt || At || typeof C == "object" && C !== null && (C.$$typeof === j || C.$$typeof === Y || C.$$typeof === k || C.$$typeof === b || C.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === L || C.getModuleId !== void 0));
      }
      function Re(C, D) {
        le(C) || Fe("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var q = {
          $$typeof: Y,
          type: C,
          compare: D === void 0 ? null : D
        };
        {
          var J;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(ve) {
              J = ve, !C.name && !C.displayName && (C.displayName = ve);
            }
          });
        }
        return q;
      }
      function Ne() {
        var C = fe.current;
        return C === null && Fe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function ut(C) {
        var D = Ne();
        if (C._context !== void 0) {
          var q = C._context;
          q.Consumer === C ? Fe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === C && Fe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(C);
      }
      function at(C) {
        var D = Ne();
        return D.useState(C);
      }
      function Rt(C, D, q) {
        var J = Ne();
        return J.useReducer(C, D, q);
      }
      function St(C) {
        var D = Ne();
        return D.useRef(C);
      }
      function xn(C, D) {
        var q = Ne();
        return q.useEffect(C, D);
      }
      function on(C, D) {
        var q = Ne();
        return q.useInsertionEffect(C, D);
      }
      function dn(C, D) {
        var q = Ne();
        return q.useLayoutEffect(C, D);
      }
      function ur(C, D) {
        var q = Ne();
        return q.useCallback(C, D);
      }
      function Za(C, D) {
        var q = Ne();
        return q.useMemo(C, D);
      }
      function ei(C, D, q) {
        var J = Ne();
        return J.useImperativeHandle(C, D, q);
      }
      function ot(C, D) {
        {
          var q = Ne();
          return q.useDebugValue(C, D);
        }
      }
      function ft() {
        var C = Ne();
        return C.useTransition();
      }
      function ti(C) {
        var D = Ne();
        return D.useDeferredValue(C);
      }
      function pu() {
        var C = Ne();
        return C.useId();
      }
      function vu(C, D, q) {
        var J = Ne();
        return J.useSyncExternalStore(C, D, q);
      }
      var wl = 0, io, Tl, Qr, as, Lr, wc, Tc;
      function lo() {
      }
      lo.__reactDisabledLog = !0;
      function xl() {
        {
          if (wl === 0) {
            io = console.log, Tl = console.info, Qr = console.warn, as = console.error, Lr = console.group, wc = console.groupCollapsed, Tc = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: lo,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          wl++;
        }
      }
      function ha() {
        {
          if (wl--, wl === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: re({}, C, {
                value: io
              }),
              info: re({}, C, {
                value: Tl
              }),
              warn: re({}, C, {
                value: Qr
              }),
              error: re({}, C, {
                value: as
              }),
              group: re({}, C, {
                value: Lr
              }),
              groupCollapsed: re({}, C, {
                value: wc
              }),
              groupEnd: re({}, C, {
                value: Tc
              })
            });
          }
          wl < 0 && Fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = Ut.ReactCurrentDispatcher, ri;
      function uo(C, D, q) {
        {
          if (ri === void 0)
            try {
              throw Error();
            } catch (ve) {
              var J = ve.stack.trim().match(/\n( *(at )?)/);
              ri = J && J[1] || "";
            }
          return `
` + ri + C;
        }
      }
      var hu = !1, bl;
      {
        var oo = typeof WeakMap == "function" ? WeakMap : Map;
        bl = new oo();
      }
      function so(C, D) {
        if (!C || hu)
          return "";
        {
          var q = bl.get(C);
          if (q !== void 0)
            return q;
        }
        var J;
        hu = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var qe;
        qe = ni.current, ni.current = null, xl();
        try {
          if (D) {
            var Ee = function() {
              throw Error();
            };
            if (Object.defineProperty(Ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ee, []);
              } catch (gn) {
                J = gn;
              }
              Reflect.construct(C, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (gn) {
                J = gn;
              }
              C.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              J = gn;
            }
            C();
          }
        } catch (gn) {
          if (gn && J && typeof gn.stack == "string") {
            for (var Ke = gn.stack.split(`
`), wt = J.stack.split(`
`), Mt = Ke.length - 1, sn = wt.length - 1; Mt >= 1 && sn >= 0 && Ke[Mt] !== wt[sn]; )
              sn--;
            for (; Mt >= 1 && sn >= 0; Mt--, sn--)
              if (Ke[Mt] !== wt[sn]) {
                if (Mt !== 1 || sn !== 1)
                  do
                    if (Mt--, sn--, sn < 0 || Ke[Mt] !== wt[sn]) {
                      var Zt = `
` + Ke[Mt].replace(" at new ", " at ");
                      return C.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", C.displayName)), typeof C == "function" && bl.set(C, Zt), Zt;
                    }
                  while (Mt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          hu = !1, ni.current = qe, ha(), Error.prepareStackTrace = ve;
        }
        var mt = C ? C.displayName || C.name : "", en = mt ? uo(mt) : "";
        return typeof C == "function" && bl.set(C, en), en;
      }
      function qi(C, D, q) {
        return so(C, !1);
      }
      function vd(C) {
        var D = C.prototype;
        return !!(D && D.isReactComponent);
      }
      function Qi(C, D, q) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return so(C, vd(C));
        if (typeof C == "string")
          return uo(C);
        switch (C) {
          case M:
            return uo("Suspense");
          case H:
            return uo("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case F:
              return qi(C.render);
            case Y:
              return Qi(C.type, D, q);
            case j: {
              var J = C, ve = J._payload, qe = J._init;
              try {
                return Qi(qe(ve), D, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, co = Ut.ReactDebugCurrentFrame;
      function Nt(C) {
        if (C) {
          var D = C._owner, q = Qi(C.type, C._source, D ? D.type : null);
          co.setExtraStackFrame(q);
        } else
          co.setExtraStackFrame(null);
      }
      function is(C, D, q, J, ve) {
        {
          var qe = Function.call.bind(Tn);
          for (var Ee in C)
            if (qe(C, Ee)) {
              var Ke = void 0;
              try {
                if (typeof C[Ee] != "function") {
                  var wt = Error((J || "React class") + ": " + q + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw wt.name = "Invariant Violation", wt;
                }
                Ke = C[Ee](D, Ee, J, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Mt) {
                Ke = Mt;
              }
              Ke && !(Ke instanceof Error) && (Nt(ve), Fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", q, Ee, typeof Ke), Nt(null)), Ke instanceof Error && !(Ke.message in Pt) && (Pt[Ke.message] = !0, Nt(ve), Fe("Failed %s type: %s", q, Ke.message), Nt(null));
            }
        }
      }
      function Ri(C) {
        if (C) {
          var D = C._owner, q = Qi(C.type, C._source, D ? D.type : null);
          tt(q);
        } else
          tt(null);
      }
      var nt;
      nt = !1;
      function fo() {
        if (Ye.current) {
          var C = Zn(Ye.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function or(C) {
        if (C !== void 0) {
          var D = C.fileName.replace(/^.*[\\\/]/, ""), q = C.lineNumber;
          return `

Check your code at ` + D + ":" + q + ".";
        }
        return "";
      }
      function wi(C) {
        return C != null ? or(C.__source) : "";
      }
      var Nr = {};
      function Ti(C) {
        var D = fo();
        if (!D) {
          var q = typeof C == "string" ? C : C.displayName || C.name;
          q && (D = `

Check the top-level render call using <` + q + ">.");
        }
        return D;
      }
      function pn(C, D) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var q = Ti(D);
          if (!Nr[q]) {
            Nr[q] = !0;
            var J = "";
            C && C._owner && C._owner !== Ye.current && (J = " It was passed a child from " + Zn(C._owner.type) + "."), Ri(C), Fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, J), Ri(null);
          }
        }
      }
      function Jt(C, D) {
        if (typeof C == "object") {
          if (wn(C))
            for (var q = 0; q < C.length; q++) {
              var J = C[q];
              yn(J) && pn(J, D);
            }
          else if (yn(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var ve = ce(C);
            if (typeof ve == "function" && ve !== C.entries)
              for (var qe = ve.call(C), Ee; !(Ee = qe.next()).done; )
                yn(Ee.value) && pn(Ee.value, D);
          }
        }
      }
      function _l(C) {
        {
          var D = C.type;
          if (D == null || typeof D == "string")
            return;
          var q;
          if (typeof D == "function")
            q = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === Y))
            q = D.propTypes;
          else
            return;
          if (q) {
            var J = Zn(D);
            is(q, C.props, "prop", J, C);
          } else if (D.PropTypes !== void 0 && !nt) {
            nt = !0;
            var ve = Zn(D);
            Fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qn(C) {
        {
          for (var D = Object.keys(C.props), q = 0; q < D.length; q++) {
            var J = D[q];
            if (J !== "children" && J !== "key") {
              Ri(C), Fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Ri(null);
              break;
            }
          }
          C.ref !== null && (Ri(C), Fe("Invalid attribute `ref` supplied to `React.Fragment`."), Ri(null));
        }
      }
      function Mr(C, D, q) {
        var J = le(C);
        if (!J) {
          var ve = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = wi(D);
          qe ? ve += qe : ve += fo();
          var Ee;
          C === null ? Ee = "null" : wn(C) ? Ee = "array" : C !== void 0 && C.$$typeof === g ? (Ee = "<" + (Zn(C.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof C, Fe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ve);
        }
        var Ke = ht.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (J)
          for (var wt = 2; wt < arguments.length; wt++)
            Jt(arguments[wt], C);
        return C === w ? qn(Ke) : _l(Ke), Ke;
      }
      var Da = !1;
      function mu(C) {
        var D = Mr.bind(null, C);
        return D.type = C, Da || (Da = !0, Ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return Ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), D;
      }
      function ls(C, D, q) {
        for (var J = ln.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          Jt(arguments[ve], J.type);
        return _l(J), J;
      }
      function us(C, D) {
        var q = De.transition;
        De.transition = {};
        var J = De.transition;
        De.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (De.transition = q, q === null && J._updatedFibers) {
            var ve = J._updatedFibers.size;
            ve > 10 && Ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var kl = !1, yu = null;
      function hd(C) {
        if (yu === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), q = c && c[D];
            yu = q.call(c, "timers").setImmediate;
          } catch {
            yu = function(ve) {
              kl === !1 && (kl = !0, typeof MessageChannel > "u" && Fe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var qe = new MessageChannel();
              qe.port1.onmessage = ve, qe.port2.postMessage(void 0);
            };
          }
        return yu(C);
      }
      var Oa = 0, ai = !1;
      function xi(C) {
        {
          var D = Oa;
          Oa++, he.current === null && (he.current = []);
          var q = he.isBatchingLegacy, J;
          try {
            if (he.isBatchingLegacy = !0, J = C(), !q && he.didScheduleLegacyUpdate) {
              var ve = he.current;
              ve !== null && (he.didScheduleLegacyUpdate = !1, Dl(ve));
            }
          } catch (mt) {
            throw La(D), mt;
          } finally {
            he.isBatchingLegacy = q;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var qe = J, Ee = !1, Ke = {
              then: function(mt, en) {
                Ee = !0, qe.then(function(gn) {
                  La(D), Oa === 0 ? po(gn, mt, en) : mt(gn);
                }, function(gn) {
                  La(D), en(gn);
                });
              }
            };
            return !ai && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (ai = !0, Fe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var wt = J;
            if (La(D), Oa === 0) {
              var Mt = he.current;
              Mt !== null && (Dl(Mt), he.current = null);
              var sn = {
                then: function(mt, en) {
                  he.current === null ? (he.current = [], po(wt, mt, en)) : mt(wt);
                }
              };
              return sn;
            } else {
              var Zt = {
                then: function(mt, en) {
                  mt(wt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function La(C) {
        C !== Oa - 1 && Fe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = C;
      }
      function po(C, D, q) {
        {
          var J = he.current;
          if (J !== null)
            try {
              Dl(J), hd(function() {
                J.length === 0 ? (he.current = null, D(C)) : po(C, D, q);
              });
            } catch (ve) {
              q(ve);
            }
          else
            D(C);
        }
      }
      var vo = !1;
      function Dl(C) {
        if (!vo) {
          vo = !0;
          var D = 0;
          try {
            for (; D < C.length; D++) {
              var q = C[D];
              do
                q = q(!0);
              while (q !== null);
            }
            C.length = 0;
          } catch (J) {
            throw C = C.slice(D + 1), J;
          } finally {
            vo = !1;
          }
        }
      }
      var gu = Mr, ho = ls, mo = mu, ii = {
        map: Wi,
        forEach: fu,
        count: cu,
        toArray: Cl,
        only: Rl
      };
      d.Children = ii, d.Component = Xe, d.Fragment = w, d.Profiler = O, d.PureComponent = gt, d.StrictMode = m, d.Suspense = M, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ut, d.act = xi, d.cloneElement = ho, d.createContext = du, d.createElement = gu, d.createFactory = mo, d.createRef = Mn, d.forwardRef = Ci, d.isValidElement = yn, d.lazy = Ei, d.memo = Re, d.startTransition = us, d.unstable_act = xi, d.useCallback = ur, d.useContext = ut, d.useDebugValue = ot, d.useDeferredValue = ti, d.useEffect = xn, d.useId = pu, d.useImperativeHandle = ei, d.useInsertionEffect = on, d.useLayoutEffect = dn, d.useMemo = Za, d.useReducer = Rt, d.useRef = St, d.useState = at, d.useSyncExternalStore = vu, d.useTransition = ft, d.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tv, Tv.exports)), Tv.exports;
}
var hT;
function _v() {
  return hT || (hT = 1, process.env.NODE_ENV === "production" ? wy.exports = EO() : wy.exports = CO()), wy.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function RO() {
  if (mT) return Sv;
  mT = 1;
  var c = _v(), d = Symbol.for("react.element"), v = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, E = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(O, k, b) {
    var F, M = {}, H = null, Y = null;
    b !== void 0 && (H = "" + b), k.key !== void 0 && (H = "" + k.key), k.ref !== void 0 && (Y = k.ref);
    for (F in k) g.call(k, F) && !w.hasOwnProperty(F) && (M[F] = k[F]);
    if (O && O.defaultProps) for (F in k = O.defaultProps, k) M[F] === void 0 && (M[F] = k[F]);
    return { $$typeof: d, type: O, key: H, ref: Y, props: M, _owner: E.current };
  }
  return Sv.Fragment = v, Sv.jsx = m, Sv.jsxs = m, Sv;
}
var Ev = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function wO() {
  return yT || (yT = 1, process.env.NODE_ENV !== "production" && function() {
    var c = _v(), d = Symbol.for("react.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), j = Symbol.iterator, X = "@@iterator";
    function K(L) {
      if (L === null || typeof L != "object")
        return null;
      var le = j && L[j] || L[X];
      return typeof le == "function" ? le : null;
    }
    var Z = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ce(L) {
      {
        for (var le = arguments.length, Re = new Array(le > 1 ? le - 1 : 0), Ne = 1; Ne < le; Ne++)
          Re[Ne - 1] = arguments[Ne];
        fe("error", L, Re);
      }
    }
    function fe(L, le, Re) {
      {
        var Ne = Z.ReactDebugCurrentFrame, ut = Ne.getStackAddendum();
        ut !== "" && (le += "%s", Re = Re.concat([ut]));
        var at = Re.map(function(Rt) {
          return String(Rt);
        });
        at.unshift("Warning: " + le), Function.prototype.apply.call(console[L], console, at);
      }
    }
    var De = !1, he = !1, Ye = !1, Me = !1, Tt = !1, tt;
    tt = Symbol.for("react.module.reference");
    function _t(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === g || L === w || Tt || L === E || L === b || L === F || Me || L === Y || De || he || Ye || typeof L == "object" && L !== null && (L.$$typeof === H || L.$$typeof === M || L.$$typeof === m || L.$$typeof === O || L.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === tt || L.getModuleId !== void 0));
    }
    function Gt(L, le, Re) {
      var Ne = L.displayName;
      if (Ne)
        return Ne;
      var ut = le.displayName || le.name || "";
      return ut !== "" ? Re + "(" + ut + ")" : Re;
    }
    function At(L) {
      return L.displayName || "Context";
    }
    function We(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case g:
          return "Fragment";
        case v:
          return "Portal";
        case w:
          return "Profiler";
        case E:
          return "StrictMode";
        case b:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case O:
            var le = L;
            return At(le) + ".Consumer";
          case m:
            var Re = L;
            return At(Re._context) + ".Provider";
          case k:
            return Gt(L, L.render, "ForwardRef");
          case M:
            var Ne = L.displayName || null;
            return Ne !== null ? Ne : We(L.type) || "Memo";
          case H: {
            var ut = L, at = ut._payload, Rt = ut._init;
            try {
              return We(Rt(at));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var It = Object.assign, Ut = 0, Ft, Fe, ye, He, Ce, P, re;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Ut === 0) {
          Ft = console.log, Fe = console.info, ye = console.warn, He = console.error, Ce = console.group, P = console.groupCollapsed, re = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        Ut++;
      }
    }
    function yt() {
      {
        if (Ut--, Ut === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: It({}, L, {
              value: Ft
            }),
            info: It({}, L, {
              value: Fe
            }),
            warn: It({}, L, {
              value: ye
            }),
            error: It({}, L, {
              value: He
            }),
            group: It({}, L, {
              value: Ce
            }),
            groupCollapsed: It({}, L, {
              value: P
            }),
            groupEnd: It({}, L, {
              value: re
            })
          });
        }
        Ut < 0 && ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pt = Z.ReactCurrentDispatcher, ct;
    function vt(L, le, Re) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (ut) {
            var Ne = ut.stack.trim().match(/\n( *(at )?)/);
            ct = Ne && Ne[1] || "";
          }
        return `
` + ct + L;
      }
    }
    var gt = !1, Qt;
    {
      var Mn = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new Mn();
    }
    function kr(L, le) {
      if (!L || gt)
        return "";
      {
        var Re = Qt.get(L);
        if (Re !== void 0)
          return Re;
      }
      var Ne;
      gt = !0;
      var ut = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var at;
      at = pt.current, pt.current = null, Xe();
      try {
        if (le) {
          var Rt = function() {
            throw Error();
          };
          if (Object.defineProperty(Rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Rt, []);
            } catch (ot) {
              Ne = ot;
            }
            Reflect.construct(L, [], Rt);
          } else {
            try {
              Rt.call();
            } catch (ot) {
              Ne = ot;
            }
            L.call(Rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            Ne = ot;
          }
          L();
        }
      } catch (ot) {
        if (ot && Ne && typeof ot.stack == "string") {
          for (var St = ot.stack.split(`
`), xn = Ne.stack.split(`
`), on = St.length - 1, dn = xn.length - 1; on >= 1 && dn >= 0 && St[on] !== xn[dn]; )
            dn--;
          for (; on >= 1 && dn >= 0; on--, dn--)
            if (St[on] !== xn[dn]) {
              if (on !== 1 || dn !== 1)
                do
                  if (on--, dn--, dn < 0 || St[on] !== xn[dn]) {
                    var ur = `
` + St[on].replace(" at new ", " at ");
                    return L.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", L.displayName)), typeof L == "function" && Qt.set(L, ur), ur;
                  }
                while (on >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        gt = !1, pt.current = at, yt(), Error.prepareStackTrace = ut;
      }
      var Za = L ? L.displayName || L.name : "", ei = Za ? vt(Za) : "";
      return typeof L == "function" && Qt.set(L, ei), ei;
    }
    function wn(L, le, Re) {
      return kr(L, !1);
    }
    function ir(L) {
      var le = L.prototype;
      return !!(le && le.isReactComponent);
    }
    function In(L, le, Re) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return kr(L, ir(L));
      if (typeof L == "string")
        return vt(L);
      switch (L) {
        case b:
          return vt("Suspense");
        case F:
          return vt("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case k:
            return wn(L.render);
          case M:
            return In(L.type, le, Re);
          case H: {
            var Ne = L, ut = Ne._payload, at = Ne._init;
            try {
              return In(at(ut), le, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, qr = {}, yi = Z.ReactDebugCurrentFrame;
    function da(L) {
      if (L) {
        var le = L._owner, Re = In(L.type, L._source, le ? le.type : null);
        yi.setExtraStackFrame(Re);
      } else
        yi.setExtraStackFrame(null);
    }
    function Zn(L, le, Re, Ne, ut) {
      {
        var at = Function.call.bind(Yn);
        for (var Rt in L)
          if (at(L, Rt)) {
            var St = void 0;
            try {
              if (typeof L[Rt] != "function") {
                var xn = Error((Ne || "React class") + ": " + Re + " type `" + Rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              St = L[Rt](le, Rt, Ne, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              St = on;
            }
            St && !(St instanceof Error) && (da(ut), ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", Re, Rt, typeof St), da(null)), St instanceof Error && !(St.message in qr) && (qr[St.message] = !0, da(ut), ce("Failed %s type: %s", Re, St.message), da(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Wn(L) {
      return Tn(L);
    }
    function Rr(L) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, Re = le && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Re;
      }
    }
    function Ka(L) {
      try {
        return An(L), !1;
      } catch {
        return !0;
      }
    }
    function An(L) {
      return "" + L;
    }
    function wr(L) {
      if (Ka(L))
        return ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(L)), An(L);
    }
    var pa = Z.ReactCurrentOwner, Xa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, ge;
    function Pe(L) {
      if (Yn.call(L, "ref")) {
        var le = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function ht(L) {
      if (Yn.call(L, "key")) {
        var le = Object.getOwnPropertyDescriptor(L, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Yt(L, le) {
      typeof L.ref == "string" && pa.current;
    }
    function ln(L, le) {
      {
        var Re = function() {
          gi || (gi = !0, ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function yn(L, le) {
      {
        var Re = function() {
          ge || (ge = !0, ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var fn = function(L, le, Re, Ne, ut, at, Rt) {
      var St = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: L,
        key: le,
        ref: Re,
        props: Rt,
        // Record the component responsible for creating this element.
        _owner: at
      };
      return St._store = {}, Object.defineProperty(St._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(St, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(St, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ut
      }), Object.freeze && (Object.freeze(St.props), Object.freeze(St)), St;
    };
    function er(L, le, Re, Ne, ut) {
      {
        var at, Rt = {}, St = null, xn = null;
        Re !== void 0 && (wr(Re), St = "" + Re), ht(le) && (wr(le.key), St = "" + le.key), Pe(le) && (xn = le.ref, Yt(le, ut));
        for (at in le)
          Yn.call(le, at) && !Xa.hasOwnProperty(at) && (Rt[at] = le[at]);
        if (L && L.defaultProps) {
          var on = L.defaultProps;
          for (at in on)
            Rt[at] === void 0 && (Rt[at] = on[at]);
        }
        if (St || xn) {
          var dn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          St && ln(Rt, dn), xn && yn(Rt, dn);
        }
        return fn(L, St, xn, ut, Ne, pa.current, Rt);
      }
    }
    var un = Z.ReactCurrentOwner, Kt = Z.ReactDebugCurrentFrame;
    function Xt(L) {
      if (L) {
        var le = L._owner, Re = In(L.type, L._source, le ? le.type : null);
        Kt.setExtraStackFrame(Re);
      } else
        Kt.setExtraStackFrame(null);
    }
    var va;
    va = !1;
    function Tr(L) {
      return typeof L == "object" && L !== null && L.$$typeof === d;
    }
    function ka() {
      {
        if (un.current) {
          var L = We(un.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Wi(L) {
      return "";
    }
    var cu = {};
    function fu(L) {
      {
        var le = ka();
        if (!le) {
          var Re = typeof L == "string" ? L : L.displayName || L.name;
          Re && (le = `

Check the top-level render call using <` + Re + ">.");
        }
        return le;
      }
    }
    function Cl(L, le) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Re = fu(le);
        if (cu[Re])
          return;
        cu[Re] = !0;
        var Ne = "";
        L && L._owner && L._owner !== un.current && (Ne = " It was passed a child from " + We(L._owner.type) + "."), Xt(L), ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, Ne), Xt(null);
      }
    }
    function Rl(L, le) {
      {
        if (typeof L != "object")
          return;
        if (Wn(L))
          for (var Re = 0; Re < L.length; Re++) {
            var Ne = L[Re];
            Tr(Ne) && Cl(Ne, le);
          }
        else if (Tr(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var ut = K(L);
          if (typeof ut == "function" && ut !== L.entries)
            for (var at = ut.call(L), Rt; !(Rt = at.next()).done; )
              Tr(Rt.value) && Cl(Rt.value, le);
        }
      }
    }
    function du(L) {
      {
        var le = L.type;
        if (le == null || typeof le == "string")
          return;
        var Re;
        if (typeof le == "function")
          Re = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === M))
          Re = le.propTypes;
        else
          return;
        if (Re) {
          var Ne = We(le);
          Zn(Re, L.props, "prop", Ne, L);
        } else if (le.PropTypes !== void 0 && !va) {
          va = !0;
          var ut = We(le);
          ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ut || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(L) {
      {
        for (var le = Object.keys(L.props), Re = 0; Re < le.length; Re++) {
          var Ne = le[Re];
          if (Ne !== "children" && Ne !== "key") {
            Xt(L), ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Xt(null);
            break;
          }
        }
        L.ref !== null && (Xt(L), ce("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    var Or = {};
    function lr(L, le, Re, Ne, ut, at) {
      {
        var Rt = _t(L);
        if (!Rt) {
          var St = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (St += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? St += xn : St += ka();
          var on;
          L === null ? on = "null" : Wn(L) ? on = "array" : L !== void 0 && L.$$typeof === d ? (on = "<" + (We(L.type) || "Unknown") + " />", St = " Did you accidentally export a JSX literal instead of a component?") : on = typeof L, ce("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, St);
        }
        var dn = er(L, le, Re, ut, at);
        if (dn == null)
          return dn;
        if (Rt) {
          var ur = le.children;
          if (ur !== void 0)
            if (Ne)
              if (Wn(ur)) {
                for (var Za = 0; Za < ur.length; Za++)
                  Rl(ur[Za], L);
                Object.freeze && Object.freeze(ur);
              } else
                ce("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rl(ur, L);
        }
        if (Yn.call(le, "key")) {
          var ei = We(L), ot = Object.keys(le).filter(function(pu) {
            return pu !== "key";
          }), ft = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Or[ei + ft]) {
            var ti = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            ce(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, ei, ti, ei), Or[ei + ft] = !0;
          }
        }
        return L === g ? Dr(dn) : du(dn), dn;
      }
    }
    function Si(L, le, Re) {
      return lr(L, le, Re, !0);
    }
    function Ja(L, le, Re) {
      return lr(L, le, Re, !1);
    }
    var Ei = Ja, Ci = Si;
    Ev.Fragment = g, Ev.jsx = Ei, Ev.jsxs = Ci;
  }()), Ev;
}
var gT;
function TO() {
  return gT || (gT = 1, process.env.NODE_ENV === "production" ? Ry.exports = RO() : Ry.exports = wO()), Ry.exports;
}
var dt = TO(), cd = {}, Ty = { exports: {} }, qa = {}, xy = { exports: {} }, uC = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ST;
function xO() {
  return ST || (ST = 1, function(c) {
    function d(ye, He) {
      var Ce = ye.length;
      ye.push(He);
      e: for (; 0 < Ce; ) {
        var P = Ce - 1 >>> 1, re = ye[P];
        if (0 < E(re, He)) ye[P] = He, ye[Ce] = re, Ce = P;
        else break e;
      }
    }
    function v(ye) {
      return ye.length === 0 ? null : ye[0];
    }
    function g(ye) {
      if (ye.length === 0) return null;
      var He = ye[0], Ce = ye.pop();
      if (Ce !== He) {
        ye[0] = Ce;
        e: for (var P = 0, re = ye.length, Ze = re >>> 1; P < Ze; ) {
          var Xe = 2 * (P + 1) - 1, yt = ye[Xe], pt = Xe + 1, ct = ye[pt];
          if (0 > E(yt, Ce)) pt < re && 0 > E(ct, yt) ? (ye[P] = ct, ye[pt] = Ce, P = pt) : (ye[P] = yt, ye[Xe] = Ce, P = Xe);
          else if (pt < re && 0 > E(ct, Ce)) ye[P] = ct, ye[pt] = Ce, P = pt;
          else break e;
        }
      }
      return He;
    }
    function E(ye, He) {
      var Ce = ye.sortIndex - He.sortIndex;
      return Ce !== 0 ? Ce : ye.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      c.unstable_now = function() {
        return w.now();
      };
    } else {
      var m = Date, O = m.now();
      c.unstable_now = function() {
        return m.now() - O;
      };
    }
    var k = [], b = [], F = 1, M = null, H = 3, Y = !1, j = !1, X = !1, K = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fe(ye) {
      for (var He = v(b); He !== null; ) {
        if (He.callback === null) g(b);
        else if (He.startTime <= ye) g(b), He.sortIndex = He.expirationTime, d(k, He);
        else break;
        He = v(b);
      }
    }
    function De(ye) {
      if (X = !1, fe(ye), !j) if (v(k) !== null) j = !0, Ft(he);
      else {
        var He = v(b);
        He !== null && Fe(De, He.startTime - ye);
      }
    }
    function he(ye, He) {
      j = !1, X && (X = !1, Z(Tt), Tt = -1), Y = !0;
      var Ce = H;
      try {
        for (fe(He), M = v(k); M !== null && (!(M.expirationTime > He) || ye && !Gt()); ) {
          var P = M.callback;
          if (typeof P == "function") {
            M.callback = null, H = M.priorityLevel;
            var re = P(M.expirationTime <= He);
            He = c.unstable_now(), typeof re == "function" ? M.callback = re : M === v(k) && g(k), fe(He);
          } else g(k);
          M = v(k);
        }
        if (M !== null) var Ze = !0;
        else {
          var Xe = v(b);
          Xe !== null && Fe(De, Xe.startTime - He), Ze = !1;
        }
        return Ze;
      } finally {
        M = null, H = Ce, Y = !1;
      }
    }
    var Ye = !1, Me = null, Tt = -1, tt = 5, _t = -1;
    function Gt() {
      return !(c.unstable_now() - _t < tt);
    }
    function At() {
      if (Me !== null) {
        var ye = c.unstable_now();
        _t = ye;
        var He = !0;
        try {
          He = Me(!0, ye);
        } finally {
          He ? We() : (Ye = !1, Me = null);
        }
      } else Ye = !1;
    }
    var We;
    if (typeof ce == "function") We = function() {
      ce(At);
    };
    else if (typeof MessageChannel < "u") {
      var It = new MessageChannel(), Ut = It.port2;
      It.port1.onmessage = At, We = function() {
        Ut.postMessage(null);
      };
    } else We = function() {
      K(At, 0);
    };
    function Ft(ye) {
      Me = ye, Ye || (Ye = !0, We());
    }
    function Fe(ye, He) {
      Tt = K(function() {
        ye(c.unstable_now());
      }, He);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ye) {
      ye.callback = null;
    }, c.unstable_continueExecution = function() {
      j || Y || (j = !0, Ft(he));
    }, c.unstable_forceFrameRate = function(ye) {
      0 > ye || 125 < ye ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < ye ? Math.floor(1e3 / ye) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, c.unstable_getFirstCallbackNode = function() {
      return v(k);
    }, c.unstable_next = function(ye) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = H;
      }
      var Ce = H;
      H = He;
      try {
        return ye();
      } finally {
        H = Ce;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ye, He) {
      switch (ye) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ye = 3;
      }
      var Ce = H;
      H = ye;
      try {
        return He();
      } finally {
        H = Ce;
      }
    }, c.unstable_scheduleCallback = function(ye, He, Ce) {
      var P = c.unstable_now();
      switch (typeof Ce == "object" && Ce !== null ? (Ce = Ce.delay, Ce = typeof Ce == "number" && 0 < Ce ? P + Ce : P) : Ce = P, ye) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = Ce + re, ye = { id: F++, callback: He, priorityLevel: ye, startTime: Ce, expirationTime: re, sortIndex: -1 }, Ce > P ? (ye.sortIndex = Ce, d(b, ye), v(k) === null && ye === v(b) && (X ? (Z(Tt), Tt = -1) : X = !0, Fe(De, Ce - P))) : (ye.sortIndex = re, d(k, ye), j || Y || (j = !0, Ft(he))), ye;
    }, c.unstable_shouldYield = Gt, c.unstable_wrapCallback = function(ye) {
      var He = H;
      return function() {
        var Ce = H;
        H = He;
        try {
          return ye.apply(this, arguments);
        } finally {
          H = Ce;
        }
      };
    };
  }(uC)), uC;
}
var oC = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ET;
function bO() {
  return ET || (ET = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, v = 5;
      function g(ge, Pe) {
        var ht = ge.length;
        ge.push(Pe), m(ge, Pe, ht);
      }
      function E(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function w(ge) {
        if (ge.length === 0)
          return null;
        var Pe = ge[0], ht = ge.pop();
        return ht !== Pe && (ge[0] = ht, O(ge, ht, 0)), Pe;
      }
      function m(ge, Pe, ht) {
        for (var Yt = ht; Yt > 0; ) {
          var ln = Yt - 1 >>> 1, yn = ge[ln];
          if (k(yn, Pe) > 0)
            ge[ln] = Pe, ge[Yt] = yn, Yt = ln;
          else
            return;
        }
      }
      function O(ge, Pe, ht) {
        for (var Yt = ht, ln = ge.length, yn = ln >>> 1; Yt < yn; ) {
          var fn = (Yt + 1) * 2 - 1, er = ge[fn], un = fn + 1, Kt = ge[un];
          if (k(er, Pe) < 0)
            un < ln && k(Kt, er) < 0 ? (ge[Yt] = Kt, ge[un] = Pe, Yt = un) : (ge[Yt] = er, ge[fn] = Pe, Yt = fn);
          else if (un < ln && k(Kt, Pe) < 0)
            ge[Yt] = Kt, ge[un] = Pe, Yt = un;
          else
            return;
        }
      }
      function k(ge, Pe) {
        var ht = ge.sortIndex - Pe.sortIndex;
        return ht !== 0 ? ht : ge.id - Pe.id;
      }
      var b = 1, F = 2, M = 3, H = 4, Y = 5;
      function j(ge, Pe) {
      }
      var X = typeof performance == "object" && typeof performance.now == "function";
      if (X) {
        var K = performance;
        c.unstable_now = function() {
          return K.now();
        };
      } else {
        var Z = Date, ce = Z.now();
        c.unstable_now = function() {
          return Z.now() - ce;
        };
      }
      var fe = 1073741823, De = -1, he = 250, Ye = 5e3, Me = 1e4, Tt = fe, tt = [], _t = [], Gt = 1, At = null, We = M, It = !1, Ut = !1, Ft = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ce(ge) {
        for (var Pe = E(_t); Pe !== null; ) {
          if (Pe.callback === null)
            w(_t);
          else if (Pe.startTime <= ge)
            w(_t), Pe.sortIndex = Pe.expirationTime, g(tt, Pe);
          else
            return;
          Pe = E(_t);
        }
      }
      function P(ge) {
        if (Ft = !1, Ce(ge), !Ut)
          if (E(tt) !== null)
            Ut = !0, An(re);
          else {
            var Pe = E(_t);
            Pe !== null && wr(P, Pe.startTime - ge);
          }
      }
      function re(ge, Pe) {
        Ut = !1, Ft && (Ft = !1, pa()), It = !0;
        var ht = We;
        try {
          var Yt;
          if (!d) return Ze(ge, Pe);
        } finally {
          At = null, We = ht, It = !1;
        }
      }
      function Ze(ge, Pe) {
        var ht = Pe;
        for (Ce(ht), At = E(tt); At !== null && !(At.expirationTime > ht && (!ge || yi())); ) {
          var Yt = At.callback;
          if (typeof Yt == "function") {
            At.callback = null, We = At.priorityLevel;
            var ln = At.expirationTime <= ht, yn = Yt(ln);
            ht = c.unstable_now(), typeof yn == "function" ? At.callback = yn : At === E(tt) && w(tt), Ce(ht);
          } else
            w(tt);
          At = E(tt);
        }
        if (At !== null)
          return !0;
        var fn = E(_t);
        return fn !== null && wr(P, fn.startTime - ht), !1;
      }
      function Xe(ge, Pe) {
        switch (ge) {
          case b:
          case F:
          case M:
          case H:
          case Y:
            break;
          default:
            ge = M;
        }
        var ht = We;
        We = ge;
        try {
          return Pe();
        } finally {
          We = ht;
        }
      }
      function yt(ge) {
        var Pe;
        switch (We) {
          case b:
          case F:
          case M:
            Pe = M;
            break;
          default:
            Pe = We;
            break;
        }
        var ht = We;
        We = Pe;
        try {
          return ge();
        } finally {
          We = ht;
        }
      }
      function pt(ge) {
        var Pe = We;
        return function() {
          var ht = We;
          We = Pe;
          try {
            return ge.apply(this, arguments);
          } finally {
            We = ht;
          }
        };
      }
      function ct(ge, Pe, ht) {
        var Yt = c.unstable_now(), ln;
        if (typeof ht == "object" && ht !== null) {
          var yn = ht.delay;
          typeof yn == "number" && yn > 0 ? ln = Yt + yn : ln = Yt;
        } else
          ln = Yt;
        var fn;
        switch (ge) {
          case b:
            fn = De;
            break;
          case F:
            fn = he;
            break;
          case Y:
            fn = Tt;
            break;
          case H:
            fn = Me;
            break;
          case M:
          default:
            fn = Ye;
            break;
        }
        var er = ln + fn, un = {
          id: Gt++,
          callback: Pe,
          priorityLevel: ge,
          startTime: ln,
          expirationTime: er,
          sortIndex: -1
        };
        return ln > Yt ? (un.sortIndex = ln, g(_t, un), E(tt) === null && un === E(_t) && (Ft ? pa() : Ft = !0, wr(P, ln - Yt))) : (un.sortIndex = er, g(tt, un), !Ut && !It && (Ut = !0, An(re))), un;
      }
      function vt() {
      }
      function gt() {
        !Ut && !It && (Ut = !0, An(re));
      }
      function Qt() {
        return E(tt);
      }
      function Mn(ge) {
        ge.callback = null;
      }
      function kr() {
        return We;
      }
      var wn = !1, ir = null, In = -1, Yn = v, qr = -1;
      function yi() {
        var ge = c.unstable_now() - qr;
        return !(ge < Yn);
      }
      function da() {
      }
      function Zn(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? Yn = Math.floor(1e3 / ge) : Yn = v;
      }
      var Tn = function() {
        if (ir !== null) {
          var ge = c.unstable_now();
          qr = ge;
          var Pe = !0, ht = !0;
          try {
            ht = ir(Pe, ge);
          } finally {
            ht ? Wn() : (wn = !1, ir = null);
          }
        } else
          wn = !1;
      }, Wn;
      if (typeof He == "function")
        Wn = function() {
          He(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ka = Rr.port2;
        Rr.port1.onmessage = Tn, Wn = function() {
          Ka.postMessage(null);
        };
      } else
        Wn = function() {
          Fe(Tn, 0);
        };
      function An(ge) {
        ir = ge, wn || (wn = !0, Wn());
      }
      function wr(ge, Pe) {
        In = Fe(function() {
          ge(c.unstable_now());
        }, Pe);
      }
      function pa() {
        ye(In), In = -1;
      }
      var Xa = da, gi = null;
      c.unstable_IdlePriority = Y, c.unstable_ImmediatePriority = b, c.unstable_LowPriority = H, c.unstable_NormalPriority = M, c.unstable_Profiling = gi, c.unstable_UserBlockingPriority = F, c.unstable_cancelCallback = Mn, c.unstable_continueExecution = gt, c.unstable_forceFrameRate = Zn, c.unstable_getCurrentPriorityLevel = kr, c.unstable_getFirstCallbackNode = Qt, c.unstable_next = yt, c.unstable_pauseExecution = vt, c.unstable_requestPaint = Xa, c.unstable_runWithPriority = Xe, c.unstable_scheduleCallback = ct, c.unstable_shouldYield = yi, c.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(oC)), oC;
}
var CT;
function WT() {
  return CT || (CT = 1, process.env.NODE_ENV === "production" ? xy.exports = xO() : xy.exports = bO()), xy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RT;
function _O() {
  if (RT) return qa;
  RT = 1;
  var c = _v(), d = WT();
  function v(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), E = {};
  function w(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) g.add(r[n]);
  }
  var O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, M = {};
  function H(n) {
    return k.call(M, n) ? !0 : k.call(F, n) ? !1 : b.test(n) ? M[n] = !0 : (F[n] = !0, !1);
  }
  function Y(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function j(n, r, l, o) {
    if (r === null || typeof r > "u" || Y(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function X(n, r, l, o, f, h, R) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = R;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    K[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    K[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    K[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    K[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    K[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    K[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    K[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    K[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    K[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function ce(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Z,
      ce
    );
    K[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Z, ce);
    K[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Z, ce);
    K[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    K[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    K[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function fe(n, r, l, o) {
    var f = K.hasOwnProperty(r) ? K[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (j(r, l, f, o) && (l = null), o || f === null ? H(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (r = f.attributeName, o = f.attributeNamespace, l === null ? n.removeAttribute(r) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var De = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = Symbol.for("react.element"), Ye = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), Tt = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), _t = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), At = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), It = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), ye = Symbol.iterator;
  function He(n) {
    return n === null || typeof n != "object" ? null : (n = ye && n[ye] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ce = Object.assign, P;
  function re(n) {
    if (P === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      P = r && r[1] || "";
    }
    return `
` + P + n;
  }
  var Ze = !1;
  function Xe(n, r) {
    if (!n || Ze) return "";
    Ze = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (Q) {
          var o = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          o = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          o = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && o && typeof Q.stack == "string") {
        for (var f = Q.stack.split(`
`), h = o.stack.split(`
`), R = f.length - 1, _ = h.length - 1; 1 <= R && 0 <= _ && f[R] !== h[_]; ) _--;
        for (; 1 <= R && 0 <= _; R--, _--) if (f[R] !== h[_]) {
          if (R !== 1 || _ !== 1)
            do
              if (R--, _--, 0 > _ || f[R] !== h[_]) {
                var N = `
` + f[R].replace(" at new ", " at ");
                return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
              }
            while (1 <= R && 0 <= _);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return re(n.type);
      case 16:
        return re("Lazy");
      case 13:
        return re("Suspense");
      case 19:
        return re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Xe(n.type, !1), n;
      case 11:
        return n = Xe(n.type.render, !1), n;
      case 1:
        return n = Xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function pt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Me:
        return "Fragment";
      case Ye:
        return "Portal";
      case tt:
        return "Profiler";
      case Tt:
        return "StrictMode";
      case We:
        return "Suspense";
      case It:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Gt:
        return (n.displayName || "Context") + ".Consumer";
      case _t:
        return (n._context.displayName || "Context") + ".Provider";
      case At:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ut:
        return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
      case Ft:
        r = n._payload, n = n._init;
        try {
          return pt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ct(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pt(r);
      case 8:
        return r === Tt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function vt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function gt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = gt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, h = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(R) {
        o = "" + R, h.call(this, R);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(R) {
        o = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function kr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = gt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function wn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ir(n, r) {
    var l = r.checked;
    return Ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = vt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && fe(n, "checked", r, !1);
  }
  function qr(n, r) {
    Yn(n, r);
    var l = vt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? da(n, r.type, l) : r.hasOwnProperty("defaultValue") && da(n, r.type, vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function yi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function da(n, r, l) {
    (r !== "number" || wn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Zn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < l.length; f++) r["$" + l[f]] = !0;
      for (l = 0; l < n.length; l++) f = r.hasOwnProperty("$" + n[l].value), n[l].selected !== f && (n[l].selected = f), f && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + vt(l), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === l) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(v(91));
    return Ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(v(92));
        if (Zn(l)) {
          if (1 < l.length) throw Error(v(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: vt(l) };
  }
  function Ka(n, r) {
    var l = vt(r.value), o = vt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function An(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function wr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Xa, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Xa = Xa || document.createElement("div"), Xa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Xa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ge(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Pe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ht = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Pe).forEach(function(n) {
    ht.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Pe[r] = Pe[n];
    });
  });
  function Yt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Pe.hasOwnProperty(n) && Pe[n] ? ("" + r).trim() : r + "px";
  }
  function ln(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, f = Yt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, f) : n[l] = f;
    }
  }
  var yn = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(v(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(v(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(v(62));
    }
  }
  function er(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var un = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, va = null, Tr = null;
  function ka(n) {
    if (n = Ve(n)) {
      if (typeof Xt != "function") throw Error(v(280));
      var r = n.stateNode;
      r && (r = bn(r), Xt(n.stateNode, n.type, r));
    }
  }
  function Wi(n) {
    va ? Tr ? Tr.push(n) : Tr = [n] : va = n;
  }
  function cu() {
    if (va) {
      var n = va, r = Tr;
      if (Tr = va = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function fu(n, r) {
    return n(r);
  }
  function Cl() {
  }
  var Rl = !1;
  function du(n, r, l) {
    if (Rl) return n(r, l);
    Rl = !0;
    try {
      return fu(n, r, l);
    } finally {
      Rl = !1, (va !== null || Tr !== null) && (Cl(), cu());
    }
  }
  function Dr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = bn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(v(231, r, typeof l));
    return l;
  }
  var Or = !1;
  if (O) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      Or = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Or = !1;
  }
  function Si(n, r, l, o, f, h, R, _, N) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (se) {
      this.onError(se);
    }
  }
  var Ja = !1, Ei = null, Ci = !1, L = null, le = { onError: function(n) {
    Ja = !0, Ei = n;
  } };
  function Re(n, r, l, o, f, h, R, _, N) {
    Ja = !1, Ei = null, Si.apply(le, arguments);
  }
  function Ne(n, r, l, o, f, h, R, _, N) {
    if (Re.apply(this, arguments), Ja) {
      if (Ja) {
        var Q = Ei;
        Ja = !1, Ei = null;
      } else throw Error(v(198));
      Ci || (Ci = !0, L = Q);
    }
  }
  function ut(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function at(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Rt(n) {
    if (ut(n) !== n) throw Error(v(188));
  }
  function St(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ut(n), r === null) throw Error(v(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var f = l.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === l) return Rt(f), n;
          if (h === o) return Rt(f), r;
          h = h.sibling;
        }
        throw Error(v(188));
      }
      if (l.return !== o.return) l = f, o = h;
      else {
        for (var R = !1, _ = f.child; _; ) {
          if (_ === l) {
            R = !0, l = f, o = h;
            break;
          }
          if (_ === o) {
            R = !0, o = f, l = h;
            break;
          }
          _ = _.sibling;
        }
        if (!R) {
          for (_ = h.child; _; ) {
            if (_ === l) {
              R = !0, l = h, o = f;
              break;
            }
            if (_ === o) {
              R = !0, o = h, l = f;
              break;
            }
            _ = _.sibling;
          }
          if (!R) throw Error(v(189));
        }
      }
      if (l.alternate !== o) throw Error(v(190));
    }
    if (l.tag !== 3) throw Error(v(188));
    return l.stateNode.current === l ? n : r;
  }
  function xn(n) {
    return n = St(n), n !== null ? on(n) : null;
  }
  function on(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = on(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = d.unstable_scheduleCallback, ur = d.unstable_cancelCallback, Za = d.unstable_shouldYield, ei = d.unstable_requestPaint, ot = d.unstable_now, ft = d.unstable_getCurrentPriorityLevel, ti = d.unstable_ImmediatePriority, pu = d.unstable_UserBlockingPriority, vu = d.unstable_NormalPriority, wl = d.unstable_LowPriority, io = d.unstable_IdlePriority, Tl = null, Qr = null;
  function as(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(Tl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Lr = Math.clz32 ? Math.clz32 : lo, wc = Math.log, Tc = Math.LN2;
  function lo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (wc(n) / Tc | 0) | 0;
  }
  var xl = 64, ha = 4194304;
  function ni(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ri(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, f = n.suspendedLanes, h = n.pingedLanes, R = l & 268435455;
    if (R !== 0) {
      var _ = R & ~f;
      _ !== 0 ? o = ni(_) : (h &= R, h !== 0 && (o = ni(h)));
    } else R = l & ~f, R !== 0 ? o = ni(R) : h !== 0 && (o = ni(h));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & f) && (f = o & -o, h = r & -r, f >= h || f === 16 && (h & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Lr(r), f = 1 << l, o |= n[l], r &= ~f;
    return o;
  }
  function uo(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, f = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var R = 31 - Lr(h), _ = 1 << R, N = f[R];
      N === -1 ? (!(_ & l) || _ & o) && (f[R] = uo(_, r)) : N <= r && (n.expiredLanes |= _), h &= ~_;
    }
  }
  function bl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function oo() {
    var n = xl;
    return xl <<= 1, !(xl & 4194240) && (xl = 64), n;
  }
  function so(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function qi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Lr(r), n[r] = l;
  }
  function vd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var f = 31 - Lr(l), h = 1 << f;
      r[f] = 0, o[f] = -1, n[f] = -1, l &= ~h;
    }
  }
  function Qi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Lr(l), f = 1 << o;
      f & r | n[o] & r && (n[o] |= r), l &= ~f;
    }
  }
  var Pt = 0;
  function co(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Nt, is, Ri, nt, fo, or = !1, wi = [], Nr = null, Ti = null, pn = null, Jt = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), qn = [], Mr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Da(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Nr = null;
        break;
      case "dragenter":
      case "dragleave":
        Ti = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Jt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _l.delete(r.pointerId);
    }
  }
  function mu(n, r, l, o, f, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: h, targetContainers: [f] }, r !== null && (r = Ve(r), r !== null && is(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function ls(n, r, l, o, f) {
    switch (r) {
      case "focusin":
        return Nr = mu(Nr, n, r, l, o, f), !0;
      case "dragenter":
        return Ti = mu(Ti, n, r, l, o, f), !0;
      case "mouseover":
        return pn = mu(pn, n, r, l, o, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Jt.set(h, mu(Jt.get(h) || null, n, r, l, o, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, _l.set(h, mu(_l.get(h) || null, n, r, l, o, f)), !0;
    }
    return !1;
  }
  function us(n) {
    var r = xu(n.target);
    if (r !== null) {
      var l = ut(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = at(l), r !== null) {
            n.blockedOn = r, fo(n.priority, function() {
              Ri(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function kl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ho(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        un = o, l.target.dispatchEvent(o), un = null;
      } else return r = Ve(l), r !== null && is(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yu(n, r, l) {
    kl(n) && l.delete(r);
  }
  function hd() {
    or = !1, Nr !== null && kl(Nr) && (Nr = null), Ti !== null && kl(Ti) && (Ti = null), pn !== null && kl(pn) && (pn = null), Jt.forEach(yu), _l.forEach(yu);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, or || (or = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, hd)));
  }
  function ai(n) {
    function r(f) {
      return Oa(f, n);
    }
    if (0 < wi.length) {
      Oa(wi[0], n);
      for (var l = 1; l < wi.length; l++) {
        var o = wi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Nr !== null && Oa(Nr, n), Ti !== null && Oa(Ti, n), pn !== null && Oa(pn, n), Jt.forEach(r), _l.forEach(r), l = 0; l < qn.length; l++) o = qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qn.length && (l = qn[0], l.blockedOn === null); ) us(l), l.blockedOn === null && qn.shift();
  }
  var xi = De.ReactCurrentBatchConfig, La = !0;
  function po(n, r, l, o) {
    var f = Pt, h = xi.transition;
    xi.transition = null;
    try {
      Pt = 1, Dl(n, r, l, o);
    } finally {
      Pt = f, xi.transition = h;
    }
  }
  function vo(n, r, l, o) {
    var f = Pt, h = xi.transition;
    xi.transition = null;
    try {
      Pt = 4, Dl(n, r, l, o);
    } finally {
      Pt = f, xi.transition = h;
    }
  }
  function Dl(n, r, l, o) {
    if (La) {
      var f = ho(n, r, l, o);
      if (f === null) zc(n, r, o, gu, l), Da(n, o);
      else if (ls(f, n, r, l, o)) o.stopPropagation();
      else if (Da(n, o), r & 4 && -1 < Mr.indexOf(n)) {
        for (; f !== null; ) {
          var h = Ve(f);
          if (h !== null && Nt(h), h = ho(n, r, l, o), h === null && zc(n, r, o, gu, l), h === f) break;
          f = h;
        }
        f !== null && o.stopPropagation();
      } else zc(n, r, o, null, l);
    }
  }
  var gu = null;
  function ho(n, r, l, o) {
    if (gu = null, n = Kt(o), n = xu(n), n !== null) if (r = ut(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = at(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return gu = n, null;
  }
  function mo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ft()) {
          case ti:
            return 1;
          case pu:
            return 4;
          case vu:
          case wl:
            return 16;
          case io:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, C = null, D = null;
  function q() {
    if (D) return D;
    var n, r = C, l = r.length, o, f = "value" in ii ? ii.value : ii.textContent, h = f.length;
    for (n = 0; n < l && r[n] === f[n]; n++) ;
    var R = l - n;
    for (o = 1; o <= R && r[l - o] === f[h - o]; o++) ;
    return D = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ve() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Ee(n) {
    function r(l, o, f, h, R) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = h, this.target = R, this.currentTarget = null;
      for (var _ in n) n.hasOwnProperty(_) && (l = n[_], this[_] = l ? l(h) : h[_]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ve : qe, this.isPropagationStopped = qe, this;
    }
    return Ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ve);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ve);
    }, persist: function() {
    }, isPersistent: ve }), r;
  }
  var Ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, wt = Ee(Ke), Mt = Ce({}, Ke, { view: 0, detail: 0 }), sn = Ee(Mt), Zt, mt, en, gn = Ce({}, Mt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== en && (en && n.type === "mousemove" ? (Zt = n.screenX - en.screenX, mt = n.screenY - en.screenY) : mt = Zt = 0, en = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : mt;
  } }), Ol = Ee(gn), os = Ce({}, gn, { dataTransfer: 0 }), Gi = Ee(os), ss = Ce({}, Mt, { relatedTarget: 0 }), Su = Ee(ss), md = Ce({}, Ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xc = Ee(md), yd = Ce({}, Ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Mv = Ee(yd), gd = Ce({}, Ke, { data: 0 }), Sd = Ee(gd), Av = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Uv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Iy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ki(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Iy[n]) ? !!r[n] : !1;
  }
  function Ed() {
    return Ki;
  }
  var Cd = Ce({}, Mt, { key: function(n) {
    if (n.key) {
      var r = Av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Uv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ed, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Rd = Ee(Cd), wd = Ce({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zv = Ee(wd), bc = Ce({}, Mt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ed }), Fv = Ee(bc), Gr = Ce({}, Ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xi = Ee(Gr), Un = Ce({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ji = Ee(Un), Td = [9, 13, 27, 32], yo = O && "CompositionEvent" in window, cs = null;
  O && "documentMode" in document && (cs = document.documentMode);
  var fs = O && "TextEvent" in window && !cs, Pv = O && (!yo || cs && 8 < cs && 11 >= cs), jv = " ", _c = !1;
  function Hv(n, r) {
    switch (n) {
      case "keyup":
        return Td.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var go = !1;
  function Vv(n, r) {
    switch (n) {
      case "compositionend":
        return Bv(r);
      case "keypress":
        return r.which !== 32 ? null : (_c = !0, jv);
      case "textInput":
        return n = r.data, n === jv && _c ? null : n;
      default:
        return null;
    }
  }
  function Yy(n, r) {
    if (go) return n === "compositionend" || !yo && Hv(n, r) ? (n = q(), D = C = ii = null, go = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Pv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function $v(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wy[n.type] : r === "textarea";
  }
  function xd(n, r, l, o) {
    Wi(o), r = ys(r, "onChange"), 0 < r.length && (l = new wt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var bi = null, Eu = null;
  function Iv(n) {
    wu(n, 0);
  }
  function ds(n) {
    var r = ui(n);
    if (kr(r)) return n;
  }
  function qy(n, r) {
    if (n === "change") return r;
  }
  var Yv = !1;
  if (O) {
    var bd;
    if (O) {
      var _d = "oninput" in document;
      if (!_d) {
        var Wv = document.createElement("div");
        Wv.setAttribute("oninput", "return;"), _d = typeof Wv.oninput == "function";
      }
      bd = _d;
    } else bd = !1;
    Yv = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function qv() {
    bi && (bi.detachEvent("onpropertychange", Qv), Eu = bi = null);
  }
  function Qv(n) {
    if (n.propertyName === "value" && ds(Eu)) {
      var r = [];
      xd(r, Eu, n, Kt(n)), du(Iv, r);
    }
  }
  function Qy(n, r, l) {
    n === "focusin" ? (qv(), bi = r, Eu = l, bi.attachEvent("onpropertychange", Qv)) : n === "focusout" && qv();
  }
  function Gv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ds(Eu);
  }
  function Gy(n, r) {
    if (n === "click") return ds(r);
  }
  function Kv(n, r) {
    if (n === "input" || n === "change") return ds(r);
  }
  function Ky(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var li = typeof Object.is == "function" ? Object.is : Ky;
  function ps(n, r) {
    if (li(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!k.call(r, f) || !li(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Xv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function kc(n, r) {
    var l = Xv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Xv(l);
    }
  }
  function Ll(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ll(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vs() {
    for (var n = window, r = wn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = wn(n.document);
    }
    return r;
  }
  function Dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function So(n) {
    var r = vs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ll(l.ownerDocument.documentElement, l)) {
      if (o !== null && Dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = l.textContent.length, h = Math.min(o.start, f);
          o = o.end === void 0 ? h : Math.min(o.end, f), !n.extend && h > o && (f = o, o = h, h = f), f = kc(l, h);
          var R = kc(
            l,
            o
          );
          f && R && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== R.node || n.focusOffset !== R.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), h > o ? (n.addRange(r), n.extend(R.node, R.offset)) : (r.setEnd(R.node, R.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xy = O && "documentMode" in document && 11 >= document.documentMode, Eo = null, kd = null, hs = null, Dd = !1;
  function Od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Dd || Eo == null || Eo !== wn(o) || (o = Eo, "selectionStart" in o && Dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), hs && ps(hs, o) || (hs = o, o = ys(kd, "onSelect"), 0 < o.length && (r = new wt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Eo)));
  }
  function Oc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Cu = { animationend: Oc("Animation", "AnimationEnd"), animationiteration: Oc("Animation", "AnimationIteration"), animationstart: Oc("Animation", "AnimationStart"), transitionend: Oc("Transition", "TransitionEnd") }, sr = {}, Ld = {};
  O && (Ld = document.createElement("div").style, "AnimationEvent" in window || (delete Cu.animationend.animation, delete Cu.animationiteration.animation, delete Cu.animationstart.animation), "TransitionEvent" in window || delete Cu.transitionend.transition);
  function Lc(n) {
    if (sr[n]) return sr[n];
    if (!Cu[n]) return n;
    var r = Cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Ld) return sr[n] = r[l];
    return n;
  }
  var Jv = Lc("animationend"), Zv = Lc("animationiteration"), eh = Lc("animationstart"), th = Lc("transitionend"), Nd = /* @__PURE__ */ new Map(), Nc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    Nd.set(n, r), w(r, [n]);
  }
  for (var Md = 0; Md < Nc.length; Md++) {
    var Ru = Nc[Md], Jy = Ru.toLowerCase(), Zy = Ru[0].toUpperCase() + Ru.slice(1);
    Na(Jy, "on" + Zy);
  }
  Na(Jv, "onAnimationEnd"), Na(Zv, "onAnimationIteration"), Na(eh, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(th, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ne(o, r, void 0, n), n.currentTarget = null;
  }
  function wu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], f = o.event;
      o = o.listeners;
      e: {
        var h = void 0;
        if (r) for (var R = o.length - 1; 0 <= R; R--) {
          var _ = o[R], N = _.instance, Q = _.currentTarget;
          if (_ = _.listener, N !== h && f.isPropagationStopped()) break e;
          Mc(f, _, Q), h = N;
        }
        else for (R = 0; R < o.length; R++) {
          if (_ = o[R], N = _.instance, Q = _.currentTarget, _ = _.listener, N !== h && f.isPropagationStopped()) break e;
          Mc(f, _, Q), h = N;
        }
      }
    }
    if (Ci) throw n = L, Ci = !1, L = null, n;
  }
  function Wt(n, r) {
    var l = r[Es];
    l === void 0 && (l = r[Es] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (nh(r, n, 2, !1), l.add(o));
  }
  function Ac(n, r, l) {
    var o = 0;
    r && (o |= 4), nh(l, n, o, r);
  }
  var Uc = "_reactListening" + Math.random().toString(36).slice(2);
  function Co(n) {
    if (!n[Uc]) {
      n[Uc] = !0, g.forEach(function(l) {
        l !== "selectionchange" && (Ad.has(l) || Ac(l, !1, n), Ac(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Uc] || (r[Uc] = !0, Ac("selectionchange", !1, r));
    }
  }
  function nh(n, r, l, o) {
    switch (mo(r)) {
      case 1:
        var f = po;
        break;
      case 4:
        f = vo;
        break;
      default:
        f = Dl;
    }
    l = f.bind(null, r, l, n), f = void 0, !Or || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: f }) : n.addEventListener(r, l, !0) : f !== void 0 ? n.addEventListener(r, l, { passive: f }) : n.addEventListener(r, l, !1);
  }
  function zc(n, r, l, o, f) {
    var h = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var R = o.tag;
      if (R === 3 || R === 4) {
        var _ = o.stateNode.containerInfo;
        if (_ === f || _.nodeType === 8 && _.parentNode === f) break;
        if (R === 4) for (R = o.return; R !== null; ) {
          var N = R.tag;
          if ((N === 3 || N === 4) && (N = R.stateNode.containerInfo, N === f || N.nodeType === 8 && N.parentNode === f)) return;
          R = R.return;
        }
        for (; _ !== null; ) {
          if (R = xu(_), R === null) return;
          if (N = R.tag, N === 5 || N === 6) {
            o = h = R;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      o = o.return;
    }
    du(function() {
      var Q = h, se = Kt(l), de = [];
      e: {
        var oe = Nd.get(n);
        if (oe !== void 0) {
          var _e = wt, Ae = n;
          switch (n) {
            case "keypress":
              if (J(l) === 0) break e;
            case "keydown":
            case "keyup":
              _e = Rd;
              break;
            case "focusin":
              Ae = "focus", _e = Su;
              break;
            case "focusout":
              Ae = "blur", _e = Su;
              break;
            case "beforeblur":
            case "afterblur":
              _e = Su;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _e = Ol;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _e = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _e = Fv;
              break;
            case Jv:
            case Zv:
            case eh:
              _e = xc;
              break;
            case th:
              _e = Xi;
              break;
            case "scroll":
              _e = sn;
              break;
            case "wheel":
              _e = Ji;
              break;
            case "copy":
            case "cut":
            case "paste":
              _e = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _e = zv;
          }
          var ze = (r & 4) !== 0, Ln = !ze && n === "scroll", B = ze ? oe !== null ? oe + "Capture" : null : oe;
          ze = [];
          for (var U = Q, I; U !== null; ) {
            I = U;
            var me = I.stateNode;
            if (I.tag === 5 && me !== null && (I = me, B !== null && (me = Dr(U, B), me != null && ze.push(Ro(U, me, I)))), Ln) break;
            U = U.return;
          }
          0 < ze.length && (oe = new _e(oe, Ae, null, l, se), de.push({ event: oe, listeners: ze }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (oe = n === "mouseover" || n === "pointerover", _e = n === "mouseout" || n === "pointerout", oe && l !== un && (Ae = l.relatedTarget || l.fromElement) && (xu(Ae) || Ae[Zi])) break e;
          if ((_e || oe) && (oe = se.window === se ? se : (oe = se.ownerDocument) ? oe.defaultView || oe.parentWindow : window, _e ? (Ae = l.relatedTarget || l.toElement, _e = Q, Ae = Ae ? xu(Ae) : null, Ae !== null && (Ln = ut(Ae), Ae !== Ln || Ae.tag !== 5 && Ae.tag !== 6) && (Ae = null)) : (_e = null, Ae = Q), _e !== Ae)) {
            if (ze = Ol, me = "onMouseLeave", B = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (ze = zv, me = "onPointerLeave", B = "onPointerEnter", U = "pointer"), Ln = _e == null ? oe : ui(_e), I = Ae == null ? oe : ui(Ae), oe = new ze(me, U + "leave", _e, l, se), oe.target = Ln, oe.relatedTarget = I, me = null, xu(se) === Q && (ze = new ze(B, U + "enter", Ae, l, se), ze.target = I, ze.relatedTarget = Ln, me = ze), Ln = me, _e && Ae) t: {
              for (ze = _e, B = Ae, U = 0, I = ze; I; I = Nl(I)) U++;
              for (I = 0, me = B; me; me = Nl(me)) I++;
              for (; 0 < U - I; ) ze = Nl(ze), U--;
              for (; 0 < I - U; ) B = Nl(B), I--;
              for (; U--; ) {
                if (ze === B || B !== null && ze === B.alternate) break t;
                ze = Nl(ze), B = Nl(B);
              }
              ze = null;
            }
            else ze = null;
            _e !== null && rh(de, oe, _e, ze, !1), Ae !== null && Ln !== null && rh(de, Ln, Ae, ze, !0);
          }
        }
        e: {
          if (oe = Q ? ui(Q) : window, _e = oe.nodeName && oe.nodeName.toLowerCase(), _e === "select" || _e === "input" && oe.type === "file") var xe = qy;
          else if ($v(oe)) if (Yv) xe = Kv;
          else {
            xe = Gv;
            var Ie = Qy;
          }
          else (_e = oe.nodeName) && _e.toLowerCase() === "input" && (oe.type === "checkbox" || oe.type === "radio") && (xe = Gy);
          if (xe && (xe = xe(n, Q))) {
            xd(de, xe, l, se);
            break e;
          }
          Ie && Ie(n, oe, Q), n === "focusout" && (Ie = oe._wrapperState) && Ie.controlled && oe.type === "number" && da(oe, "number", oe.value);
        }
        switch (Ie = Q ? ui(Q) : window, n) {
          case "focusin":
            ($v(Ie) || Ie.contentEditable === "true") && (Eo = Ie, kd = Q, hs = null);
            break;
          case "focusout":
            hs = kd = Eo = null;
            break;
          case "mousedown":
            Dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dd = !1, Od(de, l, se);
            break;
          case "selectionchange":
            if (Xy) break;
          case "keydown":
          case "keyup":
            Od(de, l, se);
        }
        var Ge;
        if (yo) e: {
          switch (n) {
            case "compositionstart":
              var rt = "onCompositionStart";
              break e;
            case "compositionend":
              rt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              rt = "onCompositionUpdate";
              break e;
          }
          rt = void 0;
        }
        else go ? Hv(n, l) && (rt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (rt = "onCompositionStart");
        rt && (Pv && l.locale !== "ko" && (go || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && go && (Ge = q()) : (ii = se, C = "value" in ii ? ii.value : ii.textContent, go = !0)), Ie = ys(Q, rt), 0 < Ie.length && (rt = new Sd(rt, n, null, l, se), de.push({ event: rt, listeners: Ie }), Ge ? rt.data = Ge : (Ge = Bv(l), Ge !== null && (rt.data = Ge)))), (Ge = fs ? Vv(n, l) : Yy(n, l)) && (Q = ys(Q, "onBeforeInput"), 0 < Q.length && (se = new Sd("onBeforeInput", "beforeinput", null, l, se), de.push({ event: se, listeners: Q }), se.data = Ge));
      }
      wu(de, r);
    });
  }
  function Ro(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ys(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var f = n, h = f.stateNode;
      f.tag === 5 && h !== null && (f = h, h = Dr(n, l), h != null && o.unshift(Ro(n, h, f)), h = Dr(n, r), h != null && o.push(Ro(n, h, f))), n = n.return;
    }
    return o;
  }
  function Nl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rh(n, r, l, o, f) {
    for (var h = r._reactName, R = []; l !== null && l !== o; ) {
      var _ = l, N = _.alternate, Q = _.stateNode;
      if (N !== null && N === o) break;
      _.tag === 5 && Q !== null && (_ = Q, f ? (N = Dr(l, h), N != null && R.unshift(Ro(l, N, _))) : f || (N = Dr(l, h), N != null && R.push(Ro(l, N, _)))), l = l.return;
    }
    R.length !== 0 && n.push({ event: r, listeners: R });
  }
  var ah = /\r\n?/g, eg = /\u0000|\uFFFD/g;
  function ih(n) {
    return (typeof n == "string" ? n : "" + n).replace(ah, `
`).replace(eg, "");
  }
  function Fc(n, r, l) {
    if (r = ih(r), ih(n) !== r && l) throw Error(v(425));
  }
  function Ml() {
  }
  var gs = null, Tu = null;
  function Pc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var jc = typeof setTimeout == "function" ? setTimeout : void 0, Ud = typeof clearTimeout == "function" ? clearTimeout : void 0, lh = typeof Promise == "function" ? Promise : void 0, wo = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(n) {
    return lh.resolve(null).then(n).catch(Hc);
  } : jc;
  function Hc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function To(n, r) {
    var l = r, o = 0;
    do {
      var f = l.nextSibling;
      if (n.removeChild(l), f && f.nodeType === 8) if (l = f.data, l === "/$") {
        if (o === 0) {
          n.removeChild(f), ai(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = f;
    } while (l);
    ai(r);
  }
  function _i(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function uh(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Al = Math.random().toString(36).slice(2), ki = "__reactFiber$" + Al, Ss = "__reactProps$" + Al, Zi = "__reactContainer$" + Al, Es = "__reactEvents$" + Al, xo = "__reactListeners$" + Al, tg = "__reactHandles$" + Al;
  function xu(n) {
    var r = n[ki];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Zi] || l[ki]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = uh(n); n !== null; ) {
          if (l = n[ki]) return l;
          n = uh(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ve(n) {
    return n = n[ki] || n[Zi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ui(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(v(33));
  }
  function bn(n) {
    return n[Ss] || null;
  }
  var kt = [], Ma = -1;
  function oi(n) {
    return { current: n };
  }
  function cn(n) {
    0 > Ma || (n.current = kt[Ma], kt[Ma] = null, Ma--);
  }
  function Be(n, r) {
    Ma++, kt[Ma] = n.current, n.current = r;
  }
  var Kr = {}, Rn = oi(Kr), Qn = oi(!1), Xr = Kr;
  function Aa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Kr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, h;
    for (h in l) f[h] = r[h];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function bo() {
    cn(Qn), cn(Rn);
  }
  function oh(n, r, l) {
    if (Rn.current !== Kr) throw Error(v(168));
    Be(Rn, r), Be(Qn, l);
  }
  function Cs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var f in o) if (!(f in r)) throw Error(v(108, ct(n) || "Unknown", f));
    return Ce({}, l, o);
  }
  function Jr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Kr, Xr = Rn.current, Be(Rn, n), Be(Qn, Qn.current), !0;
  }
  function Bc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(v(169));
    l ? (n = Cs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, cn(Qn), cn(Rn), Be(Rn, n)) : cn(Qn), Be(Qn, l);
  }
  var Di = null, _o = !1, el = !1;
  function Vc(n) {
    Di === null ? Di = [n] : Di.push(n);
  }
  function Ul(n) {
    _o = !0, Vc(n);
  }
  function Oi() {
    if (!el && Di !== null) {
      el = !0;
      var n = 0, r = Pt;
      try {
        var l = Di;
        for (Pt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Di = null, _o = !1;
      } catch (f) {
        throw Di !== null && (Di = Di.slice(n + 1)), dn(ti, Oi), f;
      } finally {
        Pt = r, el = !1;
      }
    }
    return null;
  }
  var zl = [], Fl = 0, Pl = null, tl = 0, Fn = [], Ua = 0, ma = null, Li = 1, Ni = "";
  function bu(n, r) {
    zl[Fl++] = tl, zl[Fl++] = Pl, Pl = n, tl = r;
  }
  function sh(n, r, l) {
    Fn[Ua++] = Li, Fn[Ua++] = Ni, Fn[Ua++] = ma, ma = n;
    var o = Li;
    n = Ni;
    var f = 32 - Lr(o) - 1;
    o &= ~(1 << f), l += 1;
    var h = 32 - Lr(r) + f;
    if (30 < h) {
      var R = f - f % 5;
      h = (o & (1 << R) - 1).toString(32), o >>= R, f -= R, Li = 1 << 32 - Lr(r) + f | l << f | o, Ni = h + n;
    } else Li = 1 << h | l << f | o, Ni = n;
  }
  function $c(n) {
    n.return !== null && (bu(n, 1), sh(n, 1, 0));
  }
  function Ic(n) {
    for (; n === Pl; ) Pl = zl[--Fl], zl[Fl] = null, tl = zl[--Fl], zl[Fl] = null;
    for (; n === ma; ) ma = Fn[--Ua], Fn[Ua] = null, Ni = Fn[--Ua], Fn[Ua] = null, Li = Fn[--Ua], Fn[Ua] = null;
  }
  var Zr = null, ea = null, hn = !1, za = null;
  function zd(n, r) {
    var l = Ba(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function ch(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = _i(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ma !== null ? { id: Li, overflow: Ni } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ba(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pd(n) {
    if (hn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!ch(n, r)) {
          if (Fd(n)) throw Error(v(418));
          r = _i(l.nextSibling);
          var o = Zr;
          r && ch(n, r) ? zd(o, l) : (n.flags = n.flags & -4097 | 2, hn = !1, Zr = n);
        }
      } else {
        if (Fd(n)) throw Error(v(418));
        n.flags = n.flags & -4097 | 2, hn = !1, Zr = n;
      }
    }
  }
  function Gn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function Yc(n) {
    if (n !== Zr) return !1;
    if (!hn) return Gn(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Pc(n.type, n.memoizedProps)), r && (r = ea)) {
      if (Fd(n)) throw Rs(), Error(v(418));
      for (; r; ) zd(n, r), r = _i(r.nextSibling);
    }
    if (Gn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(v(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = _i(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Zr ? _i(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rs() {
    for (var n = ea; n; ) n = _i(n.nextSibling);
  }
  function jl() {
    ea = Zr = null, hn = !1;
  }
  function nl(n) {
    za === null ? za = [n] : za.push(n);
  }
  var ng = De.ReactCurrentBatchConfig;
  function _u(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(v(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(v(147, n));
        var f = o, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(R) {
          var _ = f.refs;
          R === null ? delete _[h] : _[h] = R;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(v(284));
      if (!l._owner) throw Error(v(290, n));
    }
    return n;
  }
  function Wc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function fh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ku(n) {
    function r(B, U) {
      if (n) {
        var I = B.deletions;
        I === null ? (B.deletions = [U], B.flags |= 16) : I.push(U);
      }
    }
    function l(B, U) {
      if (!n) return null;
      for (; U !== null; ) r(B, U), U = U.sibling;
      return null;
    }
    function o(B, U) {
      for (B = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? B.set(U.key, U) : B.set(U.index, U), U = U.sibling;
      return B;
    }
    function f(B, U) {
      return B = ql(B, U), B.index = 0, B.sibling = null, B;
    }
    function h(B, U, I) {
      return B.index = I, n ? (I = B.alternate, I !== null ? (I = I.index, I < U ? (B.flags |= 2, U) : I) : (B.flags |= 2, U)) : (B.flags |= 1048576, U);
    }
    function R(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function _(B, U, I, me) {
      return U === null || U.tag !== 6 ? (U = hp(I, B.mode, me), U.return = B, U) : (U = f(U, I), U.return = B, U);
    }
    function N(B, U, I, me) {
      var xe = I.type;
      return xe === Me ? se(B, U, I.props.children, me, I.key) : U !== null && (U.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === Ft && fh(xe) === U.type) ? (me = f(U, I.props), me.ref = _u(B, U, I), me.return = B, me) : (me = Js(I.type, I.key, I.props, null, B.mode, me), me.ref = _u(B, U, I), me.return = B, me);
    }
    function Q(B, U, I, me) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== I.containerInfo || U.stateNode.implementation !== I.implementation ? (U = bf(I, B.mode, me), U.return = B, U) : (U = f(U, I.children || []), U.return = B, U);
    }
    function se(B, U, I, me, xe) {
      return U === null || U.tag !== 7 ? (U = ol(I, B.mode, me, xe), U.return = B, U) : (U = f(U, I), U.return = B, U);
    }
    function de(B, U, I) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = hp("" + U, B.mode, I), U.return = B, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case he:
            return I = Js(U.type, U.key, U.props, null, B.mode, I), I.ref = _u(B, null, U), I.return = B, I;
          case Ye:
            return U = bf(U, B.mode, I), U.return = B, U;
          case Ft:
            var me = U._init;
            return de(B, me(U._payload), I);
        }
        if (Zn(U) || He(U)) return U = ol(U, B.mode, I, null), U.return = B, U;
        Wc(B, U);
      }
      return null;
    }
    function oe(B, U, I, me) {
      var xe = U !== null ? U.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return xe !== null ? null : _(B, U, "" + I, me);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case he:
            return I.key === xe ? N(B, U, I, me) : null;
          case Ye:
            return I.key === xe ? Q(B, U, I, me) : null;
          case Ft:
            return xe = I._init, oe(
              B,
              U,
              xe(I._payload),
              me
            );
        }
        if (Zn(I) || He(I)) return xe !== null ? null : se(B, U, I, me, null);
        Wc(B, I);
      }
      return null;
    }
    function _e(B, U, I, me, xe) {
      if (typeof me == "string" && me !== "" || typeof me == "number") return B = B.get(I) || null, _(U, B, "" + me, xe);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case he:
            return B = B.get(me.key === null ? I : me.key) || null, N(U, B, me, xe);
          case Ye:
            return B = B.get(me.key === null ? I : me.key) || null, Q(U, B, me, xe);
          case Ft:
            var Ie = me._init;
            return _e(B, U, I, Ie(me._payload), xe);
        }
        if (Zn(me) || He(me)) return B = B.get(I) || null, se(U, B, me, xe, null);
        Wc(U, me);
      }
      return null;
    }
    function Ae(B, U, I, me) {
      for (var xe = null, Ie = null, Ge = U, rt = U = 0, Xn = null; Ge !== null && rt < I.length; rt++) {
        Ge.index > rt ? (Xn = Ge, Ge = null) : Xn = Ge.sibling;
        var Bt = oe(B, Ge, I[rt], me);
        if (Bt === null) {
          Ge === null && (Ge = Xn);
          break;
        }
        n && Ge && Bt.alternate === null && r(B, Ge), U = h(Bt, U, rt), Ie === null ? xe = Bt : Ie.sibling = Bt, Ie = Bt, Ge = Xn;
      }
      if (rt === I.length) return l(B, Ge), hn && bu(B, rt), xe;
      if (Ge === null) {
        for (; rt < I.length; rt++) Ge = de(B, I[rt], me), Ge !== null && (U = h(Ge, U, rt), Ie === null ? xe = Ge : Ie.sibling = Ge, Ie = Ge);
        return hn && bu(B, rt), xe;
      }
      for (Ge = o(B, Ge); rt < I.length; rt++) Xn = _e(Ge, B, rt, I[rt], me), Xn !== null && (n && Xn.alternate !== null && Ge.delete(Xn.key === null ? rt : Xn.key), U = h(Xn, U, rt), Ie === null ? xe = Xn : Ie.sibling = Xn, Ie = Xn);
      return n && Ge.forEach(function(Kl) {
        return r(B, Kl);
      }), hn && bu(B, rt), xe;
    }
    function ze(B, U, I, me) {
      var xe = He(I);
      if (typeof xe != "function") throw Error(v(150));
      if (I = xe.call(I), I == null) throw Error(v(151));
      for (var Ie = xe = null, Ge = U, rt = U = 0, Xn = null, Bt = I.next(); Ge !== null && !Bt.done; rt++, Bt = I.next()) {
        Ge.index > rt ? (Xn = Ge, Ge = null) : Xn = Ge.sibling;
        var Kl = oe(B, Ge, Bt.value, me);
        if (Kl === null) {
          Ge === null && (Ge = Xn);
          break;
        }
        n && Ge && Kl.alternate === null && r(B, Ge), U = h(Kl, U, rt), Ie === null ? xe = Kl : Ie.sibling = Kl, Ie = Kl, Ge = Xn;
      }
      if (Bt.done) return l(
        B,
        Ge
      ), hn && bu(B, rt), xe;
      if (Ge === null) {
        for (; !Bt.done; rt++, Bt = I.next()) Bt = de(B, Bt.value, me), Bt !== null && (U = h(Bt, U, rt), Ie === null ? xe = Bt : Ie.sibling = Bt, Ie = Bt);
        return hn && bu(B, rt), xe;
      }
      for (Ge = o(B, Ge); !Bt.done; rt++, Bt = I.next()) Bt = _e(Ge, B, rt, Bt.value, me), Bt !== null && (n && Bt.alternate !== null && Ge.delete(Bt.key === null ? rt : Bt.key), U = h(Bt, U, rt), Ie === null ? xe = Bt : Ie.sibling = Bt, Ie = Bt);
      return n && Ge.forEach(function(mg) {
        return r(B, mg);
      }), hn && bu(B, rt), xe;
    }
    function Ln(B, U, I, me) {
      if (typeof I == "object" && I !== null && I.type === Me && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case he:
            e: {
              for (var xe = I.key, Ie = U; Ie !== null; ) {
                if (Ie.key === xe) {
                  if (xe = I.type, xe === Me) {
                    if (Ie.tag === 7) {
                      l(B, Ie.sibling), U = f(Ie, I.props.children), U.return = B, B = U;
                      break e;
                    }
                  } else if (Ie.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === Ft && fh(xe) === Ie.type) {
                    l(B, Ie.sibling), U = f(Ie, I.props), U.ref = _u(B, Ie, I), U.return = B, B = U;
                    break e;
                  }
                  l(B, Ie);
                  break;
                } else r(B, Ie);
                Ie = Ie.sibling;
              }
              I.type === Me ? (U = ol(I.props.children, B.mode, me, I.key), U.return = B, B = U) : (me = Js(I.type, I.key, I.props, null, B.mode, me), me.ref = _u(B, U, I), me.return = B, B = me);
            }
            return R(B);
          case Ye:
            e: {
              for (Ie = I.key; U !== null; ) {
                if (U.key === Ie) if (U.tag === 4 && U.stateNode.containerInfo === I.containerInfo && U.stateNode.implementation === I.implementation) {
                  l(B, U.sibling), U = f(U, I.children || []), U.return = B, B = U;
                  break e;
                } else {
                  l(B, U);
                  break;
                }
                else r(B, U);
                U = U.sibling;
              }
              U = bf(I, B.mode, me), U.return = B, B = U;
            }
            return R(B);
          case Ft:
            return Ie = I._init, Ln(B, U, Ie(I._payload), me);
        }
        if (Zn(I)) return Ae(B, U, I, me);
        if (He(I)) return ze(B, U, I, me);
        Wc(B, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, U !== null && U.tag === 6 ? (l(B, U.sibling), U = f(U, I), U.return = B, B = U) : (l(B, U), U = hp(I, B.mode, me), U.return = B, B = U), R(B)) : l(B, U);
    }
    return Ln;
  }
  var _n = ku(!0), we = ku(!1), ya = oi(null), ta = null, ko = null, jd = null;
  function Hd() {
    jd = ko = ta = null;
  }
  function Bd(n) {
    var r = ya.current;
    cn(ya), n._currentValue = r;
  }
  function Vd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Sn(n, r) {
    ta = n, jd = ko = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Fa(n) {
    var r = n._currentValue;
    if (jd !== n) if (n = { context: n, memoizedValue: r, next: null }, ko === null) {
      if (ta === null) throw Error(v(308));
      ko = n, ta.dependencies = { lanes: 0, firstContext: n };
    } else ko = ko.next = n;
    return r;
  }
  var Du = null;
  function $d(n) {
    Du === null ? Du = [n] : Du.push(n);
  }
  function Id(n, r, l, o) {
    var f = r.interleaved;
    return f === null ? (l.next = l, $d(r)) : (l.next = f.next, f.next = l), r.interleaved = l, ga(n, o);
  }
  function ga(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Sa = !1;
  function Yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function dh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rl(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Hl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Dt & 2) {
      var f = o.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), o.pending = r, ga(n, l);
    }
    return f = o.interleaved, f === null ? (r.next = r, $d(o)) : (r.next = f.next, f.next = r), o.interleaved = r, ga(n, l);
  }
  function qc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qi(n, l);
    }
  }
  function ph(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, h = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var R = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          h === null ? f = h = R : h = h.next = R, l = l.next;
        } while (l !== null);
        h === null ? f = h = r : h = h.next = r;
      } else f = h = r;
      l = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: h, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ws(n, r, l, o) {
    var f = n.updateQueue;
    Sa = !1;
    var h = f.firstBaseUpdate, R = f.lastBaseUpdate, _ = f.shared.pending;
    if (_ !== null) {
      f.shared.pending = null;
      var N = _, Q = N.next;
      N.next = null, R === null ? h = Q : R.next = Q, R = N;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, _ = se.lastBaseUpdate, _ !== R && (_ === null ? se.firstBaseUpdate = Q : _.next = Q, se.lastBaseUpdate = N));
    }
    if (h !== null) {
      var de = f.baseState;
      R = 0, se = Q = N = null, _ = h;
      do {
        var oe = _.lane, _e = _.eventTime;
        if ((o & oe) === oe) {
          se !== null && (se = se.next = {
            eventTime: _e,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var Ae = n, ze = _;
            switch (oe = r, _e = l, ze.tag) {
              case 1:
                if (Ae = ze.payload, typeof Ae == "function") {
                  de = Ae.call(_e, de, oe);
                  break e;
                }
                de = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = ze.payload, oe = typeof Ae == "function" ? Ae.call(_e, de, oe) : Ae, oe == null) break e;
                de = Ce({}, de, oe);
                break e;
              case 2:
                Sa = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, oe = f.effects, oe === null ? f.effects = [_] : oe.push(_));
        } else _e = { eventTime: _e, lane: oe, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, se === null ? (Q = se = _e, N = de) : se = se.next = _e, R |= oe;
        if (_ = _.next, _ === null) {
          if (_ = f.shared.pending, _ === null) break;
          oe = _, _ = oe.next, oe.next = null, f.lastBaseUpdate = oe, f.shared.pending = null;
        }
      } while (!0);
      if (se === null && (N = de), f.baseState = N, f.firstBaseUpdate = Q, f.lastBaseUpdate = se, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          R |= f.lane, f = f.next;
        while (f !== r);
      } else h === null && (f.shared.lanes = 0);
      Fi |= R, n.lanes = R, n.memoizedState = de;
    }
  }
  function Wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], f = o.callback;
      if (f !== null) {
        if (o.callback = null, o = l, typeof f != "function") throw Error(v(191, f));
        f.call(o);
      }
    }
  }
  var Ts = {}, Mi = oi(Ts), xs = oi(Ts), bs = oi(Ts);
  function Ou(n) {
    if (n === Ts) throw Error(v(174));
    return n;
  }
  function qd(n, r) {
    switch (Be(bs, r), Be(xs, n), Be(Mi, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pa(r, n);
    }
    cn(Mi), Be(Mi, r);
  }
  function Lu() {
    cn(Mi), cn(xs), cn(bs);
  }
  function vh(n) {
    Ou(bs.current);
    var r = Ou(Mi.current), l = pa(r, n.type);
    r !== l && (Be(xs, n), Be(Mi, l));
  }
  function Qc(n) {
    xs.current === n && (cn(Mi), cn(xs));
  }
  var En = oi(0);
  function Gc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var _s = [];
  function $e() {
    for (var n = 0; n < _s.length; n++) _s[n]._workInProgressVersionPrimary = null;
    _s.length = 0;
  }
  var Et = De.ReactCurrentDispatcher, jt = De.ReactCurrentBatchConfig, tn = 0, Ht = null, Pn = null, tr = null, Kc = !1, ks = !1, Nu = 0, ue = 0;
  function zt() {
    throw Error(v(321));
  }
  function Je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!li(n[l], r[l])) return !1;
    return !0;
  }
  function Bl(n, r, l, o, f, h) {
    if (tn = h, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Et.current = n === null || n.memoizedState === null ? df : As, n = l(o, f), ks) {
      h = 0;
      do {
        if (ks = !1, Nu = 0, 25 <= h) throw Error(v(301));
        h += 1, tr = Pn = null, r.updateQueue = null, Et.current = pf, n = l(o, f);
      } while (ks);
    }
    if (Et.current = Fu, r = Pn !== null && Pn.next !== null, tn = 0, tr = Pn = Ht = null, Kc = !1, r) throw Error(v(300));
    return n;
  }
  function si() {
    var n = Nu !== 0;
    return Nu = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tr === null ? Ht.memoizedState = tr = n : tr = tr.next = n, tr;
  }
  function kn() {
    if (Pn === null) {
      var n = Ht.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Pn.next;
    var r = tr === null ? Ht.memoizedState : tr.next;
    if (r !== null) tr = r, Pn = n;
    else {
      if (n === null) throw Error(v(310));
      Pn = n, n = { memoizedState: Pn.memoizedState, baseState: Pn.baseState, baseQueue: Pn.baseQueue, queue: Pn.queue, next: null }, tr === null ? Ht.memoizedState = tr = n : tr = tr.next = n;
    }
    return tr;
  }
  function al(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Vl(n) {
    var r = kn(), l = r.queue;
    if (l === null) throw Error(v(311));
    l.lastRenderedReducer = n;
    var o = Pn, f = o.baseQueue, h = l.pending;
    if (h !== null) {
      if (f !== null) {
        var R = f.next;
        f.next = h.next, h.next = R;
      }
      o.baseQueue = f = h, l.pending = null;
    }
    if (f !== null) {
      h = f.next, o = o.baseState;
      var _ = R = null, N = null, Q = h;
      do {
        var se = Q.lane;
        if ((tn & se) === se) N !== null && (N = N.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), o = Q.hasEagerState ? Q.eagerState : n(o, Q.action);
        else {
          var de = {
            lane: se,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          N === null ? (_ = N = de, R = o) : N = N.next = de, Ht.lanes |= se, Fi |= se;
        }
        Q = Q.next;
      } while (Q !== null && Q !== h);
      N === null ? R = o : N.next = _, li(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = R, r.baseQueue = N, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      f = n;
      do
        h = f.lane, Ht.lanes |= h, Fi |= h, f = f.next;
      while (f !== n);
    } else f === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Mu(n) {
    var r = kn(), l = r.queue;
    if (l === null) throw Error(v(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, f = l.pending, h = r.memoizedState;
    if (f !== null) {
      l.pending = null;
      var R = f = f.next;
      do
        h = n(h, R.action), R = R.next;
      while (R !== f);
      li(h, r.memoizedState) || (jn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), l.lastRenderedState = h;
    }
    return [h, o];
  }
  function Xc() {
  }
  function Jc(n, r) {
    var l = Ht, o = kn(), f = r(), h = !li(o.memoizedState, f);
    if (h && (o.memoizedState = f, jn = !0), o = o.queue, Ds(tf.bind(null, l, o, n), [n]), o.getSnapshot !== r || h || tr !== null && tr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Au(9, ef.bind(null, l, o, f, r), void 0, null), Kn === null) throw Error(v(349));
      tn & 30 || Zc(l, r, f);
    }
    return f;
  }
  function Zc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ef(n, r, l, o) {
    r.value = l, r.getSnapshot = o, nf(r) && rf(n);
  }
  function tf(n, r, l) {
    return l(function() {
      nf(r) && rf(n);
    });
  }
  function nf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !li(n, l);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = ga(n, 1);
    r !== null && Fr(r, n, 1, -1);
  }
  function af(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: n }, r.queue = n, n = n.dispatch = zu.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Au(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function lf() {
    return kn().memoizedState;
  }
  function Do(n, r, l, o) {
    var f = xr();
    Ht.flags |= n, f.memoizedState = Au(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Oo(n, r, l, o) {
    var f = kn();
    o = o === void 0 ? null : o;
    var h = void 0;
    if (Pn !== null) {
      var R = Pn.memoizedState;
      if (h = R.destroy, o !== null && Je(o, R.deps)) {
        f.memoizedState = Au(r, l, h, o);
        return;
      }
    }
    Ht.flags |= n, f.memoizedState = Au(1 | r, l, h, o);
  }
  function uf(n, r) {
    return Do(8390656, 8, n, r);
  }
  function Ds(n, r) {
    return Oo(2048, 8, n, r);
  }
  function of(n, r) {
    return Oo(4, 2, n, r);
  }
  function Os(n, r) {
    return Oo(4, 4, n, r);
  }
  function Uu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function sf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Oo(4, 4, Uu.bind(null, r, n), l);
  }
  function Ls() {
  }
  function cf(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function ff(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Qd(n, r, l) {
    return tn & 21 ? (li(l, r) || (l = oo(), Ht.lanes |= l, Fi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function Ns(n, r) {
    var l = Pt;
    Pt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = jt.transition;
    jt.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = l, jt.transition = o;
    }
  }
  function Gd() {
    return kn().memoizedState;
  }
  function Ms(n, r, l) {
    var o = Pi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Ea(n)) hh(r, l);
    else if (l = Id(n, r, l, o), l !== null) {
      var f = Vn();
      Fr(l, n, o, f), an(l, r, o);
    }
  }
  function zu(n, r, l) {
    var o = Pi(n), f = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ea(n)) hh(r, f);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var R = r.lastRenderedState, _ = h(R, l);
        if (f.hasEagerState = !0, f.eagerState = _, li(_, R)) {
          var N = r.interleaved;
          N === null ? (f.next = f, $d(r)) : (f.next = N.next, N.next = f), r.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      l = Id(n, r, f, o), l !== null && (f = Vn(), Fr(l, n, o, f), an(l, r, o));
    }
  }
  function Ea(n) {
    var r = n.alternate;
    return n === Ht || r !== null && r === Ht;
  }
  function hh(n, r) {
    ks = Kc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function an(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qi(n, l);
    }
  }
  var Fu = { readContext: Fa, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, df = { readContext: Fa, useCallback: function(n, r) {
    return xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fa, useEffect: uf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Do(
      4194308,
      4,
      Uu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Do(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Do(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = xr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ms.bind(null, Ht, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: Ls, useDeferredValue: function(n) {
    return xr().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = Ns.bind(null, n[1]), xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ht, f = xr();
    if (hn) {
      if (l === void 0) throw Error(v(407));
      l = l();
    } else {
      if (l = r(), Kn === null) throw Error(v(349));
      tn & 30 || Zc(o, r, l);
    }
    f.memoizedState = l;
    var h = { value: l, getSnapshot: r };
    return f.queue = h, uf(tf.bind(
      null,
      o,
      h,
      n
    ), [n]), o.flags |= 2048, Au(9, ef.bind(null, o, h, l, r), void 0, null), l;
  }, useId: function() {
    var n = xr(), r = Kn.identifierPrefix;
    if (hn) {
      var l = Ni, o = Li;
      l = (o & ~(1 << 32 - Lr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Nu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ue++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, As = {
    readContext: Fa,
    useCallback: cf,
    useContext: Fa,
    useEffect: Ds,
    useImperativeHandle: sf,
    useInsertionEffect: of,
    useLayoutEffect: Os,
    useMemo: ff,
    useReducer: Vl,
    useRef: lf,
    useState: function() {
      return Vl(al);
    },
    useDebugValue: Ls,
    useDeferredValue: function(n) {
      var r = kn();
      return Qd(r, Pn.memoizedState, n);
    },
    useTransition: function() {
      var n = Vl(al)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: Gd,
    unstable_isNewReconciler: !1
  }, pf = { readContext: Fa, useCallback: cf, useContext: Fa, useEffect: Ds, useImperativeHandle: sf, useInsertionEffect: of, useLayoutEffect: Os, useMemo: ff, useReducer: Mu, useRef: lf, useState: function() {
    return Mu(al);
  }, useDebugValue: Ls, useDeferredValue: function(n) {
    var r = kn();
    return Pn === null ? r.memoizedState = n : Qd(r, Pn.memoizedState, n);
  }, useTransition: function() {
    var n = Mu(al)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Xc, useSyncExternalStore: Jc, useId: Gd, unstable_isNewReconciler: !1 };
  function ci(n, r) {
    if (n && n.defaultProps) {
      r = Ce({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : Ce({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var vf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ut(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vn(), f = Pi(n), h = rl(o, f);
    h.payload = r, l != null && (h.callback = l), r = Hl(n, h, f), r !== null && (Fr(r, n, f, o), qc(r, n, f));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vn(), f = Pi(n), h = rl(o, f);
    h.tag = 1, h.payload = r, l != null && (h.callback = l), r = Hl(n, h, f), r !== null && (Fr(r, n, f, o), qc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Vn(), o = Pi(n), f = rl(l, o);
    f.tag = 2, r != null && (f.callback = r), r = Hl(n, f, o), r !== null && (Fr(r, n, o, l), qc(r, n, o));
  } };
  function mh(n, r, l, o, f, h, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, h, R) : r.prototype && r.prototype.isPureReactComponent ? !ps(l, o) || !ps(f, h) : !0;
  }
  function hf(n, r, l) {
    var o = !1, f = Kr, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Fa(h) : (f = zn(r) ? Xr : Rn.current, o = r.contextTypes, h = (o = o != null) ? Aa(n, f) : Kr), r = new r(l, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function yh(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && vf.enqueueReplaceState(r, r.state, null);
  }
  function Us(n, r, l, o) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = {}, Yd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? f.context = Fa(h) : (h = zn(r) ? Xr : Rn.current, f.context = Aa(n, h)), f.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Kd(n, r, h, l), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && vf.enqueueReplaceState(f, f.state, null), ws(n, l, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Pu(n, r) {
    try {
      var l = "", o = r;
      do
        l += yt(o), o = o.return;
      while (o);
      var f = l;
    } catch (h) {
      f = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Xd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Jd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function gh(n, r, l) {
    l = rl(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      zo || (zo = !0, Bu = o), Jd(n, r);
    }, l;
  }
  function Zd(n, r, l) {
    l = rl(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      l.payload = function() {
        return o(f);
      }, l.callback = function() {
        Jd(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (l.callback = function() {
      Jd(n, r), typeof o != "function" && (Yl === null ? Yl = /* @__PURE__ */ new Set([this]) : Yl.add(this));
      var R = r.stack;
      this.componentDidCatch(r.value, { componentStack: R !== null ? R : "" });
    }), l;
  }
  function ep(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new mf();
      var f = /* @__PURE__ */ new Set();
      o.set(r, f);
    } else f = o.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(r, f));
    f.has(l) || (f.add(l), n = sg.bind(null, n, r, l), r.then(n, n));
  }
  function Sh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $l(n, r, l, o, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rl(-1, 1), r.tag = 2, Hl(l, r, 1))), l.lanes |= 1), n);
  }
  var zs = De.ReactCurrentOwner, jn = !1;
  function cr(n, r, l, o) {
    r.child = n === null ? we(r, null, l, o) : _n(r, n.child, l, o);
  }
  function na(n, r, l, o, f) {
    l = l.render;
    var h = r.ref;
    return Sn(r, f), o = Bl(n, r, l, o, h, f), l = si(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, ja(n, r, f)) : (hn && l && $c(r), r.flags |= 1, cr(n, r, o, f), r.child);
  }
  function ju(n, r, l, o, f) {
    if (n === null) {
      var h = l.type;
      return typeof h == "function" && !vp(h) && h.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = h, st(n, r, h, o, f)) : (n = Js(l.type, null, o, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & f)) {
      var R = h.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ps, l(R, o) && n.ref === r.ref) return ja(n, r, f);
    }
    return r.flags |= 1, n = ql(h, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function st(n, r, l, o, f) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (ps(h, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = h, (n.lanes & f) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, ja(n, r, f);
    }
    return Eh(n, r, l, o, f);
  }
  function Fs(n, r, l) {
    var o = r.pendingProps, f = o.children, h = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Be(Mo, Ca), Ca |= l;
    else {
      if (!(l & 1073741824)) return n = h !== null ? h.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Be(Mo, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = h !== null ? h.baseLanes : l, Be(Mo, Ca), Ca |= o;
    }
    else h !== null ? (o = h.baseLanes | l, r.memoizedState = null) : o = l, Be(Mo, Ca), Ca |= o;
    return cr(n, r, f, l), r.child;
  }
  function tp(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Eh(n, r, l, o, f) {
    var h = zn(l) ? Xr : Rn.current;
    return h = Aa(r, h), Sn(r, f), l = Bl(n, r, l, o, h, f), o = si(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, ja(n, r, f)) : (hn && o && $c(r), r.flags |= 1, cr(n, r, l, f), r.child);
  }
  function Ch(n, r, l, o, f) {
    if (zn(l)) {
      var h = !0;
      Jr(r);
    } else h = !1;
    if (Sn(r, f), r.stateNode === null) Pa(n, r), hf(r, l, o), Us(r, l, o, f), o = !0;
    else if (n === null) {
      var R = r.stateNode, _ = r.memoizedProps;
      R.props = _;
      var N = R.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = Fa(Q) : (Q = zn(l) ? Xr : Rn.current, Q = Aa(r, Q));
      var se = l.getDerivedStateFromProps, de = typeof se == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      de || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (_ !== o || N !== Q) && yh(r, R, o, Q), Sa = !1;
      var oe = r.memoizedState;
      R.state = oe, ws(r, o, R, f), N = r.memoizedState, _ !== o || oe !== N || Qn.current || Sa ? (typeof se == "function" && (Kd(r, l, se, o), N = r.memoizedState), (_ = Sa || mh(r, l, _, o, oe, N, Q)) ? (de || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = N), R.props = o, R.state = N, R.context = Q, o = _) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      R = r.stateNode, dh(n, r), _ = r.memoizedProps, Q = r.type === r.elementType ? _ : ci(r.type, _), R.props = Q, de = r.pendingProps, oe = R.context, N = l.contextType, typeof N == "object" && N !== null ? N = Fa(N) : (N = zn(l) ? Xr : Rn.current, N = Aa(r, N));
      var _e = l.getDerivedStateFromProps;
      (se = typeof _e == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (_ !== de || oe !== N) && yh(r, R, o, N), Sa = !1, oe = r.memoizedState, R.state = oe, ws(r, o, R, f);
      var Ae = r.memoizedState;
      _ !== de || oe !== Ae || Qn.current || Sa ? (typeof _e == "function" && (Kd(r, l, _e, o), Ae = r.memoizedState), (Q = Sa || mh(r, l, Q, o, oe, Ae, N) || !1) ? (se || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(o, Ae, N), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(o, Ae, N)), typeof R.componentDidUpdate == "function" && (r.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof R.componentDidUpdate != "function" || _ === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ae), R.props = o, R.state = Ae, R.context = N, o = Q) : (typeof R.componentDidUpdate != "function" || _ === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ps(n, r, l, o, h, f);
  }
  function Ps(n, r, l, o, f, h) {
    tp(n, r);
    var R = (r.flags & 128) !== 0;
    if (!o && !R) return f && Bc(r, l, !1), ja(n, r, h);
    o = r.stateNode, zs.current = r;
    var _ = R && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && R ? (r.child = _n(r, n.child, null, h), r.child = _n(r, null, _, h)) : cr(n, r, _, h), r.memoizedState = o.state, f && Bc(r, l, !0), r.child;
  }
  function Lo(n) {
    var r = n.stateNode;
    r.pendingContext ? oh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && oh(n, r.context, !1), qd(n, r.containerInfo);
  }
  function Rh(n, r, l, o, f) {
    return jl(), nl(f), r.flags |= 256, cr(n, r, l, o), r.child;
  }
  var yf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function np(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function gf(n, r, l) {
    var o = r.pendingProps, f = En.current, h = !1, R = (r.flags & 128) !== 0, _;
    if ((_ = R) || (_ = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), _ ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Be(En, f & 1), n === null)
      return Pd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (R = o.children, n = o.fallback, h ? (o = r.mode, h = r.child, R = { mode: "hidden", children: R }, !(o & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = R) : h = Ql(R, o, 0, null), n = ol(n, o, l, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = np(l), r.memoizedState = yf, n) : rp(r, R));
    if (f = n.memoizedState, f !== null && (_ = f.dehydrated, _ !== null)) return wh(n, r, R, o, _, f, l);
    if (h) {
      h = o.fallback, R = r.mode, f = n.child, _ = f.sibling;
      var N = { mode: "hidden", children: o.children };
      return !(R & 1) && r.child !== f ? (o = r.child, o.childLanes = 0, o.pendingProps = N, r.deletions = null) : (o = ql(f, N), o.subtreeFlags = f.subtreeFlags & 14680064), _ !== null ? h = ql(_, h) : (h = ol(h, R, l, null), h.flags |= 2), h.return = r, o.return = r, o.sibling = h, r.child = o, o = h, h = r.child, R = n.child.memoizedState, R = R === null ? np(l) : { baseLanes: R.baseLanes | l, cachePool: null, transitions: R.transitions }, h.memoizedState = R, h.childLanes = n.childLanes & ~l, r.memoizedState = yf, o;
    }
    return h = n.child, n = h.sibling, o = ql(h, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function rp(n, r) {
    return r = Ql({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function js(n, r, l, o) {
    return o !== null && nl(o), _n(r, n.child, null, l), n = rp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function wh(n, r, l, o, f, h, R) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Xd(Error(v(422))), js(n, r, R, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = o.fallback, f = r.mode, o = Ql({ mode: "visible", children: o.children }, f, 0, null), h = ol(h, f, R, null), h.flags |= 2, o.return = r, h.return = r, o.sibling = h, r.child = o, r.mode & 1 && _n(r, n.child, null, R), r.child.memoizedState = np(R), r.memoizedState = yf, h);
    if (!(r.mode & 1)) return js(n, r, R, null);
    if (f.data === "$!") {
      if (o = f.nextSibling && f.nextSibling.dataset, o) var _ = o.dgst;
      return o = _, h = Error(v(419)), o = Xd(h, o, void 0), js(n, r, R, o);
    }
    if (_ = (R & n.childLanes) !== 0, jn || _) {
      if (o = Kn, o !== null) {
        switch (R & -R) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (o.suspendedLanes | R) ? 0 : f, f !== 0 && f !== h.retryLane && (h.retryLane = f, ga(n, f), Fr(o, n, f, -1));
      }
      return pp(), o = Xd(Error(v(421))), js(n, r, R, o);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cg.bind(null, n), f._reactRetry = r, null) : (n = h.treeContext, ea = _i(f.nextSibling), Zr = r, hn = !0, za = null, n !== null && (Fn[Ua++] = Li, Fn[Ua++] = Ni, Fn[Ua++] = ma, Li = n.id, Ni = n.overflow, ma = r), r = rp(r, o.children), r.flags |= 4096, r);
  }
  function ap(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Vd(n.return, r, l);
  }
  function Ar(n, r, l, o, f) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: f } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = o, h.tail = l, h.tailMode = f);
  }
  function Ai(n, r, l) {
    var o = r.pendingProps, f = o.revealOrder, h = o.tail;
    if (cr(n, r, o.children, l), o = En.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && ap(n, l, r);
        else if (n.tag === 19) ap(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Be(En, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (l = r.child, f = null; l !== null; ) n = l.alternate, n !== null && Gc(n) === null && (f = l), l = l.sibling;
        l = f, l === null ? (f = r.child, r.child = null) : (f = l.sibling, l.sibling = null), Ar(r, !1, f, l, h);
        break;
      case "backwards":
        for (l = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Gc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = l, l = f, f = n;
        }
        Ar(r, !0, l, null, h);
        break;
      case "together":
        Ar(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Pa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ja(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Fi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(v(153));
    if (r.child !== null) {
      for (n = r.child, l = ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = ql(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Hs(n, r, l) {
    switch (r.tag) {
      case 3:
        Lo(r), jl();
        break;
      case 5:
        vh(r);
        break;
      case 1:
        zn(r.type) && Jr(r);
        break;
      case 4:
        qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, f = r.memoizedProps.value;
        Be(ya, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Be(En, En.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? gf(n, r, l) : (Be(En, En.current & 1), n = ja(n, r, l), n !== null ? n.sibling : null);
        Be(En, En.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ai(n, r, l);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Be(En, En.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Fs(n, r, l);
    }
    return ja(n, r, l);
  }
  var Ha, Hn, Th, xh;
  Ha = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Hn = function() {
  }, Th = function(n, r, l, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = r.stateNode, Ou(Mi.current);
      var h = null;
      switch (l) {
        case "input":
          f = ir(n, f), o = ir(n, o), h = [];
          break;
        case "select":
          f = Ce({}, f, { value: void 0 }), o = Ce({}, o, { value: void 0 }), h = [];
          break;
        case "textarea":
          f = Wn(n, f), o = Wn(n, o), h = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ml);
      }
      fn(l, o);
      var R;
      l = null;
      for (Q in f) if (!o.hasOwnProperty(Q) && f.hasOwnProperty(Q) && f[Q] != null) if (Q === "style") {
        var _ = f[Q];
        for (R in _) _.hasOwnProperty(R) && (l || (l = {}), l[R] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (E.hasOwnProperty(Q) ? h || (h = []) : (h = h || []).push(Q, null));
      for (Q in o) {
        var N = o[Q];
        if (_ = f != null ? f[Q] : void 0, o.hasOwnProperty(Q) && N !== _ && (N != null || _ != null)) if (Q === "style") if (_) {
          for (R in _) !_.hasOwnProperty(R) || N && N.hasOwnProperty(R) || (l || (l = {}), l[R] = "");
          for (R in N) N.hasOwnProperty(R) && _[R] !== N[R] && (l || (l = {}), l[R] = N[R]);
        } else l || (h || (h = []), h.push(
          Q,
          l
        )), l = N;
        else Q === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, _ = _ ? _.__html : void 0, N != null && _ !== N && (h = h || []).push(Q, N)) : Q === "children" ? typeof N != "string" && typeof N != "number" || (h = h || []).push(Q, "" + N) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (E.hasOwnProperty(Q) ? (N != null && Q === "onScroll" && Wt("scroll", n), h || _ === N || (h = [])) : (h = h || []).push(Q, N));
      }
      l && (h = h || []).push("style", l);
      var Q = h;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, xh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Bs(n, r) {
    if (!hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var f = n.child; f !== null; ) l |= f.lanes | f.childLanes, o |= f.subtreeFlags & 14680064, o |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) l |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function bh(n, r, l) {
    var o = r.pendingProps;
    switch (Ic(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nr(r), null;
      case 1:
        return zn(r.type) && bo(), nr(r), null;
      case 3:
        return o = r.stateNode, Lu(), cn(Qn), cn(Rn), $e(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (Vu(za), za = null))), Hn(n, r), nr(r), null;
      case 5:
        Qc(r);
        var f = Ou(bs.current);
        if (l = r.type, n !== null && r.stateNode != null) Th(n, r, l, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(v(166));
            return nr(r), null;
          }
          if (n = Ou(Mi.current), Yc(r)) {
            o = r.stateNode, l = r.type;
            var h = r.memoizedProps;
            switch (o[ki] = r, o[Ss] = h, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Wt("cancel", o), Wt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", o);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ms.length; f++) Wt(ms[f], o);
                break;
              case "source":
                Wt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  o
                ), Wt("load", o);
                break;
              case "details":
                Wt("toggle", o);
                break;
              case "input":
                In(o, h), Wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!h.multiple }, Wt("invalid", o);
                break;
              case "textarea":
                Rr(o, h), Wt("invalid", o);
            }
            fn(l, h), f = null;
            for (var R in h) if (h.hasOwnProperty(R)) {
              var _ = h[R];
              R === "children" ? typeof _ == "string" ? o.textContent !== _ && (h.suppressHydrationWarning !== !0 && Fc(o.textContent, _, n), f = ["children", _]) : typeof _ == "number" && o.textContent !== "" + _ && (h.suppressHydrationWarning !== !0 && Fc(
                o.textContent,
                _,
                n
              ), f = ["children", "" + _]) : E.hasOwnProperty(R) && _ != null && R === "onScroll" && Wt("scroll", o);
            }
            switch (l) {
              case "input":
                Mn(o), yi(o, h, !0);
                break;
              case "textarea":
                Mn(o), An(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (o.onclick = Ml);
            }
            o = f, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            R = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = R.createElement(l, { is: o.is }) : (n = R.createElement(l), l === "select" && (R = n, o.multiple ? R.multiple = !0 : o.size && (R.size = o.size))) : n = R.createElementNS(n, l), n[ki] = r, n[Ss] = o, Ha(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (R = er(l, o), l) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), f = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), f = o;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ms.length; f++) Wt(ms[f], n);
                  f = o;
                  break;
                case "source":
                  Wt("error", n), f = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), f = o;
                  break;
                case "details":
                  Wt("toggle", n), f = o;
                  break;
                case "input":
                  In(n, o), f = ir(n, o), Wt("invalid", n);
                  break;
                case "option":
                  f = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, f = Ce({}, o, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Rr(n, o), f = Wn(n, o), Wt("invalid", n);
                  break;
                default:
                  f = o;
              }
              fn(l, f), _ = f;
              for (h in _) if (_.hasOwnProperty(h)) {
                var N = _[h];
                h === "style" ? ln(n, N) : h === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && gi(n, N)) : h === "children" ? typeof N == "string" ? (l !== "textarea" || N !== "") && ge(n, N) : typeof N == "number" && ge(n, "" + N) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? N != null && h === "onScroll" && Wt("scroll", n) : N != null && fe(n, h, N, R));
              }
              switch (l) {
                case "input":
                  Mn(n), yi(n, o, !1);
                  break;
                case "textarea":
                  Mn(n), An(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + vt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, h = o.value, h != null ? Tn(n, !!o.multiple, h, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Ml);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return nr(r), null;
      case 6:
        if (n && r.stateNode != null) xh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(v(166));
          if (l = Ou(bs.current), Ou(Mi.current), Yc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ki] = r, (h = o.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Fc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Fc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ki] = r, r.stateNode = o;
        }
        return nr(r), null;
      case 13:
        if (cn(En), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ea !== null && r.mode & 1 && !(r.flags & 128)) Rs(), jl(), r.flags |= 98560, h = !1;
          else if (h = Yc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(v(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(v(317));
              h[ki] = r;
            } else jl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            nr(r), h = !1;
          } else za !== null && (Vu(za), za = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? On === 0 && (On = 3) : pp())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return Lu(), Hn(n, r), n === null && Co(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return Bd(r.type._context), nr(r), null;
      case 17:
        return zn(r.type) && bo(), nr(r), null;
      case 19:
        if (cn(En), h = r.memoizedState, h === null) return nr(r), null;
        if (o = (r.flags & 128) !== 0, R = h.rendering, R === null) if (o) Bs(h, !1);
        else {
          if (On !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (R = Gc(n), R !== null) {
              for (r.flags |= 128, Bs(h, !1), o = R.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) h = l, n = o, h.flags &= 14680066, R = h.alternate, R === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = R.childLanes, h.lanes = R.lanes, h.child = R.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = R.memoizedProps, h.memoizedState = R.memoizedState, h.updateQueue = R.updateQueue, h.type = R.type, n = R.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Be(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && ot() > Uo && (r.flags |= 128, o = !0, Bs(h, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Gc(R), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Bs(h, !0), h.tail === null && h.tailMode === "hidden" && !R.alternate && !hn) return nr(r), null;
          } else 2 * ot() - h.renderingStartTime > Uo && l !== 1073741824 && (r.flags |= 128, o = !0, Bs(h, !1), r.lanes = 4194304);
          h.isBackwards ? (R.sibling = r.child, r.child = R) : (l = h.last, l !== null ? l.sibling = R : r.child = R, h.last = R);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = ot(), r.sibling = null, l = En.current, Be(En, o ? l & 1 | 2 : l & 1), r) : (nr(r), null);
      case 22:
      case 23:
        return dp(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ca & 1073741824 && (nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, r.tag));
  }
  function Sf(n, r) {
    switch (Ic(r), r.tag) {
      case 1:
        return zn(r.type) && bo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Lu(), cn(Qn), cn(Rn), $e(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Qc(r), null;
      case 13:
        if (cn(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(v(340));
          jl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return cn(En), null;
      case 4:
        return Lu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return dp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vs = !1, br = !1, rg = typeof WeakSet == "function" ? WeakSet : Set, Le = null;
  function No(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      mn(n, r, o);
    }
    else l.current = null;
  }
  function Ef(n, r, l) {
    try {
      l();
    } catch (o) {
      mn(n, r, o);
    }
  }
  var _h = !1;
  function kh(n, r) {
    if (gs = La, n = vs(), Dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var f = o.anchorOffset, h = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, h.nodeType;
          } catch {
            l = null;
            break e;
          }
          var R = 0, _ = -1, N = -1, Q = 0, se = 0, de = n, oe = null;
          t: for (; ; ) {
            for (var _e; de !== l || f !== 0 && de.nodeType !== 3 || (_ = R + f), de !== h || o !== 0 && de.nodeType !== 3 || (N = R + o), de.nodeType === 3 && (R += de.nodeValue.length), (_e = de.firstChild) !== null; )
              oe = de, de = _e;
            for (; ; ) {
              if (de === n) break t;
              if (oe === l && ++Q === f && (_ = R), oe === h && ++se === o && (N = R), (_e = de.nextSibling) !== null) break;
              de = oe, oe = de.parentNode;
            }
            de = _e;
          }
          l = _ === -1 || N === -1 ? null : { start: _, end: N };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Tu = { focusedElem: n, selectionRange: l }, La = !1, Le = r; Le !== null; ) if (r = Le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Le = n;
    else for (; Le !== null; ) {
      r = Le;
      try {
        var Ae = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ae !== null) {
              var ze = Ae.memoizedProps, Ln = Ae.memoizedState, B = r.stateNode, U = B.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : ci(r.type, ze), Ln);
              B.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(v(163));
        }
      } catch (me) {
        mn(r, r.return, me);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Le = n;
        break;
      }
      Le = r.return;
    }
    return Ae = _h, _h = !1, Ae;
  }
  function $s(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var f = o = o.next;
      do {
        if ((f.tag & n) === n) {
          var h = f.destroy;
          f.destroy = void 0, h !== void 0 && Ef(r, l, h);
        }
        f = f.next;
      } while (f !== o);
    }
  }
  function Is(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ip(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Cf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Cf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ki], delete r[Ss], delete r[Es], delete r[xo], delete r[tg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ys(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function il(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ys(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ui(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ml));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ui(n, r, l), n = n.sibling; n !== null; ) Ui(n, r, l), n = n.sibling;
  }
  function zi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (zi(n, r, l), n = n.sibling; n !== null; ) zi(n, r, l), n = n.sibling;
  }
  var Dn = null, Ur = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Dh(n, r, l), l = l.sibling;
  }
  function Dh(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(Tl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        br || No(l, r);
      case 6:
        var o = Dn, f = Ur;
        Dn = null, zr(n, r, l), Dn = o, Ur = f, Dn !== null && (Ur ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Dn.removeChild(l.stateNode));
        break;
      case 18:
        Dn !== null && (Ur ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? To(n.parentNode, l) : n.nodeType === 1 && To(n, l), ai(n)) : To(Dn, l.stateNode));
        break;
      case 4:
        o = Dn, f = Ur, Dn = l.stateNode.containerInfo, Ur = !0, zr(n, r, l), Dn = o, Ur = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!br && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          f = o = o.next;
          do {
            var h = f, R = h.destroy;
            h = h.tag, R !== void 0 && (h & 2 || h & 4) && Ef(l, r, R), f = f.next;
          } while (f !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!br && (No(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (_) {
          mn(l, r, _);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (br = (o = br) || l.memoizedState !== null, zr(n, r, l), br = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function Oh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new rg()), r.forEach(function(o) {
        var f = jh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(f, f));
      });
    }
  }
  function fi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var f = l[o];
      try {
        var h = n, R = r, _ = R;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              Dn = _.stateNode, Ur = !1;
              break e;
            case 3:
              Dn = _.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              Dn = _.stateNode.containerInfo, Ur = !0;
              break e;
          }
          _ = _.return;
        }
        if (Dn === null) throw Error(v(160));
        Dh(h, R, f), Dn = null, Ur = !1;
        var N = f.alternate;
        N !== null && (N.return = null), f.return = null;
      } catch (Q) {
        mn(f, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) lp(r, n), r = r.sibling;
  }
  function lp(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fi(r, n), ra(n), o & 4) {
          try {
            $s(3, n, n.return), Is(3, n);
          } catch (ze) {
            mn(n, n.return, ze);
          }
          try {
            $s(5, n, n.return);
          } catch (ze) {
            mn(n, n.return, ze);
          }
        }
        break;
      case 1:
        fi(r, n), ra(n), o & 512 && l !== null && No(l, l.return);
        break;
      case 5:
        if (fi(r, n), ra(n), o & 512 && l !== null && No(l, l.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            ge(f, "");
          } catch (ze) {
            mn(n, n.return, ze);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var h = n.memoizedProps, R = l !== null ? l.memoizedProps : h, _ = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null) try {
            _ === "input" && h.type === "radio" && h.name != null && Yn(f, h), er(_, R);
            var Q = er(_, h);
            for (R = 0; R < N.length; R += 2) {
              var se = N[R], de = N[R + 1];
              se === "style" ? ln(f, de) : se === "dangerouslySetInnerHTML" ? gi(f, de) : se === "children" ? ge(f, de) : fe(f, se, de, Q);
            }
            switch (_) {
              case "input":
                qr(f, h);
                break;
              case "textarea":
                Ka(f, h);
                break;
              case "select":
                var oe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!h.multiple;
                var _e = h.value;
                _e != null ? Tn(f, !!h.multiple, _e, !1) : oe !== !!h.multiple && (h.defaultValue != null ? Tn(
                  f,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Tn(f, !!h.multiple, h.multiple ? [] : "", !1));
            }
            f[Ss] = h;
          } catch (ze) {
            mn(n, n.return, ze);
          }
        }
        break;
      case 6:
        if (fi(r, n), ra(n), o & 4) {
          if (n.stateNode === null) throw Error(v(162));
          f = n.stateNode, h = n.memoizedProps;
          try {
            f.nodeValue = h;
          } catch (ze) {
            mn(n, n.return, ze);
          }
        }
        break;
      case 3:
        if (fi(r, n), ra(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ai(r.containerInfo);
        } catch (ze) {
          mn(n, n.return, ze);
        }
        break;
      case 4:
        fi(r, n), ra(n);
        break;
      case 13:
        fi(r, n), ra(n), f = n.child, f.flags & 8192 && (h = f.memoizedState !== null, f.stateNode.isHidden = h, !h || f.alternate !== null && f.alternate.memoizedState !== null || (sp = ot())), o & 4 && Oh(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (br = (Q = br) || se, fi(r, n), br = Q) : fi(r, n), ra(n), o & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !se && n.mode & 1) for (Le = n, se = n.child; se !== null; ) {
            for (de = Le = se; Le !== null; ) {
              switch (oe = Le, _e = oe.child, oe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $s(4, oe, oe.return);
                  break;
                case 1:
                  No(oe, oe.return);
                  var Ae = oe.stateNode;
                  if (typeof Ae.componentWillUnmount == "function") {
                    o = oe, l = oe.return;
                    try {
                      r = o, Ae.props = r.memoizedProps, Ae.state = r.memoizedState, Ae.componentWillUnmount();
                    } catch (ze) {
                      mn(o, l, ze);
                    }
                  }
                  break;
                case 5:
                  No(oe, oe.return);
                  break;
                case 22:
                  if (oe.memoizedState !== null) {
                    Ws(de);
                    continue;
                  }
              }
              _e !== null ? (_e.return = oe, Le = _e) : Ws(de);
            }
            se = se.sibling;
          }
          e: for (se = null, de = n; ; ) {
            if (de.tag === 5) {
              if (se === null) {
                se = de;
                try {
                  f = de.stateNode, Q ? (h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (_ = de.stateNode, N = de.memoizedProps.style, R = N != null && N.hasOwnProperty("display") ? N.display : null, _.style.display = Yt("display", R));
                } catch (ze) {
                  mn(n, n.return, ze);
                }
              }
            } else if (de.tag === 6) {
              if (se === null) try {
                de.stateNode.nodeValue = Q ? "" : de.memoizedProps;
              } catch (ze) {
                mn(n, n.return, ze);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              se === de && (se = null), de = de.return;
            }
            se === de && (se = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        fi(r, n), ra(n), o & 4 && Oh(n);
        break;
      case 21:
        break;
      default:
        fi(
          r,
          n
        ), ra(n);
    }
  }
  function ra(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ys(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(v(160));
        }
        switch (o.tag) {
          case 5:
            var f = o.stateNode;
            o.flags & 32 && (ge(f, ""), o.flags &= -33);
            var h = il(n);
            zi(n, h, f);
            break;
          case 3:
          case 4:
            var R = o.stateNode.containerInfo, _ = il(n);
            Ui(n, _, R);
            break;
          default:
            throw Error(v(161));
        }
      } catch (N) {
        mn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ag(n, r, l) {
    Le = n, up(n);
  }
  function up(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Le !== null; ) {
      var f = Le, h = f.child;
      if (f.tag === 22 && o) {
        var R = f.memoizedState !== null || Vs;
        if (!R) {
          var _ = f.alternate, N = _ !== null && _.memoizedState !== null || br;
          _ = Vs;
          var Q = br;
          if (Vs = R, (br = N) && !Q) for (Le = f; Le !== null; ) R = Le, N = R.child, R.tag === 22 && R.memoizedState !== null ? op(f) : N !== null ? (N.return = R, Le = N) : op(f);
          for (; h !== null; ) Le = h, up(h), h = h.sibling;
          Le = f, Vs = _, br = Q;
        }
        Lh(n);
      } else f.subtreeFlags & 8772 && h !== null ? (h.return = f, Le = h) : Lh(n);
    }
  }
  function Lh(n) {
    for (; Le !== null; ) {
      var r = Le;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              br || Is(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !br) if (l === null) o.componentDidMount();
              else {
                var f = r.elementType === r.type ? l.memoizedProps : ci(r.type, l.memoizedProps);
                o.componentDidUpdate(f, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && Wd(r, h, o);
              break;
            case 3:
              var R = r.updateQueue;
              if (R !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Wd(r, R, l);
              }
              break;
            case 5:
              var _ = r.stateNode;
              if (l === null && r.flags & 4) {
                l = _;
                var N = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && l.focus();
                    break;
                  case "img":
                    N.src && (l.src = N.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var Q = r.alternate;
                if (Q !== null) {
                  var se = Q.memoizedState;
                  if (se !== null) {
                    var de = se.dehydrated;
                    de !== null && ai(de);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
          br || r.flags & 512 && ip(r);
        } catch (oe) {
          mn(r, r.return, oe);
        }
      }
      if (r === n) {
        Le = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Le = l;
        break;
      }
      Le = r.return;
    }
  }
  function Ws(n) {
    for (; Le !== null; ) {
      var r = Le;
      if (r === n) {
        Le = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Le = l;
        break;
      }
      Le = r.return;
    }
  }
  function op(n) {
    for (; Le !== null; ) {
      var r = Le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Is(4, r);
            } catch (N) {
              mn(r, l, N);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var f = r.return;
              try {
                o.componentDidMount();
              } catch (N) {
                mn(r, f, N);
              }
            }
            var h = r.return;
            try {
              ip(r);
            } catch (N) {
              mn(r, h, N);
            }
            break;
          case 5:
            var R = r.return;
            try {
              ip(r);
            } catch (N) {
              mn(r, R, N);
            }
        }
      } catch (N) {
        mn(r, r.return, N);
      }
      if (r === n) {
        Le = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, Le = _;
        break;
      }
      Le = r.return;
    }
  }
  var ig = Math.ceil, Il = De.ReactCurrentDispatcher, Hu = De.ReactCurrentOwner, fr = De.ReactCurrentBatchConfig, Dt = 0, Kn = null, Bn = null, dr = 0, Ca = 0, Mo = oi(0), On = 0, qs = null, Fi = 0, Ao = 0, Rf = 0, Qs = null, aa = null, sp = 0, Uo = 1 / 0, Ra = null, zo = !1, Bu = null, Yl = null, wf = !1, ll = null, Gs = 0, Wl = 0, Fo = null, Ks = -1, _r = 0;
  function Vn() {
    return Dt & 6 ? ot() : Ks !== -1 ? Ks : Ks = ot();
  }
  function Pi(n) {
    return n.mode & 1 ? Dt & 2 && dr !== 0 ? dr & -dr : ng.transition !== null ? (_r === 0 && (_r = oo()), _r) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : mo(n.type)), n) : 1;
  }
  function Fr(n, r, l, o) {
    if (50 < Wl) throw Wl = 0, Fo = null, Error(v(185));
    qi(n, l, o), (!(Dt & 2) || n !== Kn) && (n === Kn && (!(Dt & 2) && (Ao |= l), On === 4 && di(n, dr)), ia(n, o), l === 1 && Dt === 0 && !(r.mode & 1) && (Uo = ot() + 500, _o && Oi()));
  }
  function ia(n, r) {
    var l = n.callbackNode;
    hu(n, r);
    var o = ri(n, n === Kn ? dr : 0);
    if (o === 0) l !== null && ur(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ur(l), r === 1) n.tag === 0 ? Ul(cp.bind(null, n)) : Vc(cp.bind(null, n)), wo(function() {
        !(Dt & 6) && Oi();
      }), l = null;
      else {
        switch (co(o)) {
          case 1:
            l = ti;
            break;
          case 4:
            l = pu;
            break;
          case 16:
            l = vu;
            break;
          case 536870912:
            l = io;
            break;
          default:
            l = vu;
        }
        l = Bh(l, Tf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Tf(n, r) {
    if (Ks = -1, _r = 0, Dt & 6) throw Error(v(327));
    var l = n.callbackNode;
    if (Po() && n.callbackNode !== l) return null;
    var o = ri(n, n === Kn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = xf(n, o);
    else {
      r = o;
      var f = Dt;
      Dt |= 2;
      var h = Mh();
      (Kn !== n || dr !== r) && (Ra = null, Uo = ot() + 500, ul(n, r));
      do
        try {
          Ah();
          break;
        } catch (_) {
          Nh(n, _);
        }
      while (!0);
      Hd(), Il.current = h, Dt = f, Bn !== null ? r = 0 : (Kn = null, dr = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (f = bl(n), f !== 0 && (o = f, r = Xs(n, f))), r === 1) throw l = qs, ul(n, 0), di(n, o), ia(n, ot()), l;
      if (r === 6) di(n, o);
      else {
        if (f = n.current.alternate, !(o & 30) && !lg(f) && (r = xf(n, o), r === 2 && (h = bl(n), h !== 0 && (o = h, r = Xs(n, h))), r === 1)) throw l = qs, ul(n, 0), di(n, o), ia(n, ot()), l;
        switch (n.finishedWork = f, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            Iu(n, aa, Ra);
            break;
          case 3:
            if (di(n, o), (o & 130023424) === o && (r = sp + 500 - ot(), 10 < r)) {
              if (ri(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & o) !== o) {
                Vn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = jc(Iu.bind(null, n, aa, Ra), r);
              break;
            }
            Iu(n, aa, Ra);
            break;
          case 4:
            if (di(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, f = -1; 0 < o; ) {
              var R = 31 - Lr(o);
              h = 1 << R, R = r[R], R > f && (f = R), o &= ~h;
            }
            if (o = f, o = ot() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ig(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = jc(Iu.bind(null, n, aa, Ra), o);
              break;
            }
            Iu(n, aa, Ra);
            break;
          case 5:
            Iu(n, aa, Ra);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return ia(n, ot()), n.callbackNode === l ? Tf.bind(null, n) : null;
  }
  function Xs(n, r) {
    var l = Qs;
    return n.current.memoizedState.isDehydrated && (ul(n, r).flags |= 256), n = xf(n, r), n !== 2 && (r = aa, aa = l, r !== null && Vu(r)), n;
  }
  function Vu(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function lg(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var f = l[o], h = f.getSnapshot;
          f = f.value;
          try {
            if (!li(h(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function di(n, r) {
    for (r &= ~Rf, r &= ~Ao, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Lr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function cp(n) {
    if (Dt & 6) throw Error(v(327));
    Po();
    var r = ri(n, 0);
    if (!(r & 1)) return ia(n, ot()), null;
    var l = xf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = bl(n);
      o !== 0 && (r = o, l = Xs(n, o));
    }
    if (l === 1) throw l = qs, ul(n, 0), di(n, r), ia(n, ot()), l;
    if (l === 6) throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Iu(n, aa, Ra), ia(n, ot()), null;
  }
  function fp(n, r) {
    var l = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = l, Dt === 0 && (Uo = ot() + 500, _o && Oi());
    }
  }
  function $u(n) {
    ll !== null && ll.tag === 0 && !(Dt & 6) && Po();
    var r = Dt;
    Dt |= 1;
    var l = fr.transition, o = Pt;
    try {
      if (fr.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = o, fr.transition = l, Dt = r, !(Dt & 6) && Oi();
    }
  }
  function dp() {
    Ca = Mo.current, cn(Mo);
  }
  function ul(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ud(l)), Bn !== null) for (l = Bn.return; l !== null; ) {
      var o = l;
      switch (Ic(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && bo();
          break;
        case 3:
          Lu(), cn(Qn), cn(Rn), $e();
          break;
        case 5:
          Qc(o);
          break;
        case 4:
          Lu();
          break;
        case 13:
          cn(En);
          break;
        case 19:
          cn(En);
          break;
        case 10:
          Bd(o.type._context);
          break;
        case 22:
        case 23:
          dp();
      }
      l = l.return;
    }
    if (Kn = n, Bn = n = ql(n.current, null), dr = Ca = r, On = 0, qs = null, Rf = Ao = Fi = 0, aa = Qs = null, Du !== null) {
      for (r = 0; r < Du.length; r++) if (l = Du[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var f = o.next, h = l.pending;
        if (h !== null) {
          var R = h.next;
          h.next = f, o.next = R;
        }
        l.pending = o;
      }
      Du = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var l = Bn;
      try {
        if (Hd(), Et.current = Fu, Kc) {
          for (var o = Ht.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          Kc = !1;
        }
        if (tn = 0, tr = Pn = Ht = null, ks = !1, Nu = 0, Hu.current = null, l === null || l.return === null) {
          On = 1, qs = r, Bn = null;
          break;
        }
        e: {
          var h = n, R = l.return, _ = l, N = r;
          if (r = dr, _.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var Q = N, se = _, de = se.tag;
            if (!(se.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var oe = se.alternate;
              oe ? (se.updateQueue = oe.updateQueue, se.memoizedState = oe.memoizedState, se.lanes = oe.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var _e = Sh(R);
            if (_e !== null) {
              _e.flags &= -257, $l(_e, R, _, h, r), _e.mode & 1 && ep(h, Q, r), r = _e, N = Q;
              var Ae = r.updateQueue;
              if (Ae === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(N), r.updateQueue = ze;
              } else Ae.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                ep(h, Q, r), pp();
                break e;
              }
              N = Error(v(426));
            }
          } else if (hn && _.mode & 1) {
            var Ln = Sh(R);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), $l(Ln, R, _, h, r), nl(Pu(N, _));
              break e;
            }
          }
          h = N = Pu(N, _), On !== 4 && (On = 2), Qs === null ? Qs = [h] : Qs.push(h), h = R;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var B = gh(h, N, r);
                ph(h, B);
                break e;
              case 1:
                _ = N;
                var U = h.type, I = h.stateNode;
                if (!(h.flags & 128) && (typeof U.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Yl === null || !Yl.has(I)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var me = Zd(h, _, r);
                  ph(h, me);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        zh(l);
      } catch (xe) {
        r = xe, Bn === l && l !== null && (Bn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mh() {
    var n = Il.current;
    return Il.current = Fu, n === null ? Fu : n;
  }
  function pp() {
    (On === 0 || On === 3 || On === 2) && (On = 4), Kn === null || !(Fi & 268435455) && !(Ao & 268435455) || di(Kn, dr);
  }
  function xf(n, r) {
    var l = Dt;
    Dt |= 2;
    var o = Mh();
    (Kn !== n || dr !== r) && (Ra = null, ul(n, r));
    do
      try {
        ug();
        break;
      } catch (f) {
        Nh(n, f);
      }
    while (!0);
    if (Hd(), Dt = l, Il.current = o, Bn !== null) throw Error(v(261));
    return Kn = null, dr = 0, On;
  }
  function ug() {
    for (; Bn !== null; ) Uh(Bn);
  }
  function Ah() {
    for (; Bn !== null && !Za(); ) Uh(Bn);
  }
  function Uh(n) {
    var r = Hh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? zh(n) : Bn = r, Hu.current = null;
  }
  function zh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Sf(l, r), l !== null) {
          l.flags &= 32767, Bn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, Bn = null;
          return;
        }
      } else if (l = bh(l, r, Ca), l !== null) {
        Bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function Iu(n, r, l) {
    var o = Pt, f = fr.transition;
    try {
      fr.transition = null, Pt = 1, og(n, r, l, o);
    } finally {
      fr.transition = f, Pt = o;
    }
    return null;
  }
  function og(n, r, l, o) {
    do
      Po();
    while (ll !== null);
    if (Dt & 6) throw Error(v(327));
    l = n.finishedWork;
    var f = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = l.lanes | l.childLanes;
    if (vd(n, h), n === Kn && (Bn = Kn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || wf || (wf = !0, Bh(vu, function() {
      return Po(), null;
    })), h = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || h) {
      h = fr.transition, fr.transition = null;
      var R = Pt;
      Pt = 1;
      var _ = Dt;
      Dt |= 4, Hu.current = null, kh(n, l), lp(l, n), So(Tu), La = !!gs, Tu = gs = null, n.current = l, ag(l), ei(), Dt = _, Pt = R, fr.transition = h;
    } else n.current = l;
    if (wf && (wf = !1, ll = n, Gs = f), h = n.pendingLanes, h === 0 && (Yl = null), as(l.stateNode), ia(n, ot()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) f = r[l], o(f.value, { componentStack: f.stack, digest: f.digest });
    if (zo) throw zo = !1, n = Bu, Bu = null, n;
    return Gs & 1 && n.tag !== 0 && Po(), h = n.pendingLanes, h & 1 ? n === Fo ? Wl++ : (Wl = 0, Fo = n) : Wl = 0, Oi(), null;
  }
  function Po() {
    if (ll !== null) {
      var n = co(Gs), r = fr.transition, l = Pt;
      try {
        if (fr.transition = null, Pt = 16 > n ? 16 : n, ll === null) var o = !1;
        else {
          if (n = ll, ll = null, Gs = 0, Dt & 6) throw Error(v(331));
          var f = Dt;
          for (Dt |= 4, Le = n.current; Le !== null; ) {
            var h = Le, R = h.child;
            if (Le.flags & 16) {
              var _ = h.deletions;
              if (_ !== null) {
                for (var N = 0; N < _.length; N++) {
                  var Q = _[N];
                  for (Le = Q; Le !== null; ) {
                    var se = Le;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, se, h);
                    }
                    var de = se.child;
                    if (de !== null) de.return = se, Le = de;
                    else for (; Le !== null; ) {
                      se = Le;
                      var oe = se.sibling, _e = se.return;
                      if (Cf(se), se === Q) {
                        Le = null;
                        break;
                      }
                      if (oe !== null) {
                        oe.return = _e, Le = oe;
                        break;
                      }
                      Le = _e;
                    }
                  }
                }
                var Ae = h.alternate;
                if (Ae !== null) {
                  var ze = Ae.child;
                  if (ze !== null) {
                    Ae.child = null;
                    do {
                      var Ln = ze.sibling;
                      ze.sibling = null, ze = Ln;
                    } while (ze !== null);
                  }
                }
                Le = h;
              }
            }
            if (h.subtreeFlags & 2064 && R !== null) R.return = h, Le = R;
            else e: for (; Le !== null; ) {
              if (h = Le, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  $s(9, h, h.return);
              }
              var B = h.sibling;
              if (B !== null) {
                B.return = h.return, Le = B;
                break e;
              }
              Le = h.return;
            }
          }
          var U = n.current;
          for (Le = U; Le !== null; ) {
            R = Le;
            var I = R.child;
            if (R.subtreeFlags & 2064 && I !== null) I.return = R, Le = I;
            else e: for (R = U; Le !== null; ) {
              if (_ = Le, _.flags & 2048) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Is(9, _);
                }
              } catch (xe) {
                mn(_, _.return, xe);
              }
              if (_ === R) {
                Le = null;
                break e;
              }
              var me = _.sibling;
              if (me !== null) {
                me.return = _.return, Le = me;
                break e;
              }
              Le = _.return;
            }
          }
          if (Dt = f, Oi(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(Tl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Pt = l, fr.transition = r;
      }
    }
    return !1;
  }
  function Fh(n, r, l) {
    r = Pu(l, r), r = gh(n, r, 1), n = Hl(n, r, 1), r = Vn(), n !== null && (qi(n, 1, r), ia(n, r));
  }
  function mn(n, r, l) {
    if (n.tag === 3) Fh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Fh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Yl === null || !Yl.has(o))) {
          n = Pu(l, n), n = Zd(r, n, 1), r = Hl(r, n, 1), n = Vn(), r !== null && (qi(r, 1, n), ia(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function sg(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Vn(), n.pingedLanes |= n.suspendedLanes & l, Kn === n && (dr & l) === l && (On === 4 || On === 3 && (dr & 130023424) === dr && 500 > ot() - sp ? ul(n, 0) : Rf |= l), ia(n, r);
  }
  function Ph(n, r) {
    r === 0 && (n.mode & 1 ? (r = ha, ha <<= 1, !(ha & 130023424) && (ha = 4194304)) : r = 1);
    var l = Vn();
    n = ga(n, r), n !== null && (qi(n, r, l), ia(n, l));
  }
  function cg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Ph(n, l);
  }
  function jh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, f = n.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(v(314));
    }
    o !== null && o.delete(r), Ph(n, l);
  }
  var Hh;
  Hh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, Hs(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, hn && r.flags & 1048576 && sh(r, tl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Pa(n, r), n = r.pendingProps;
        var f = Aa(r, Rn.current);
        Sn(r, l), f = Bl(null, r, o, n, f, l);
        var h = si();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (h = !0, Jr(r)) : h = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Yd(r), f.updater = vf, r.stateNode = f, f._reactInternals = r, Us(r, o, n, l), r = Ps(null, r, o, !0, h, l)) : (r.tag = 0, hn && h && $c(r), cr(null, r, f, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Pa(n, r), n = r.pendingProps, f = o._init, o = f(o._payload), r.type = o, f = r.tag = dg(o), n = ci(o, n), f) {
            case 0:
              r = Eh(null, r, o, n, l);
              break e;
            case 1:
              r = Ch(null, r, o, n, l);
              break e;
            case 11:
              r = na(null, r, o, n, l);
              break e;
            case 14:
              r = ju(null, r, o, ci(o.type, n), l);
              break e;
          }
          throw Error(v(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : ci(o, f), Eh(n, r, o, f, l);
      case 1:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : ci(o, f), Ch(n, r, o, f, l);
      case 3:
        e: {
          if (Lo(r), n === null) throw Error(v(387));
          o = r.pendingProps, h = r.memoizedState, f = h.element, dh(n, r), ws(r, o, null, l);
          var R = r.memoizedState;
          if (o = R.element, h.isDehydrated) if (h = { element: o, isDehydrated: !1, cache: R.cache, pendingSuspenseBoundaries: R.pendingSuspenseBoundaries, transitions: R.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            f = Pu(Error(v(423)), r), r = Rh(n, r, o, l, f);
            break e;
          } else if (o !== f) {
            f = Pu(Error(v(424)), r), r = Rh(n, r, o, l, f);
            break e;
          } else for (ea = _i(r.stateNode.containerInfo.firstChild), Zr = r, hn = !0, za = null, l = we(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (jl(), o === f) {
              r = ja(n, r, l);
              break e;
            }
            cr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return vh(r), n === null && Pd(r), o = r.type, f = r.pendingProps, h = n !== null ? n.memoizedProps : null, R = f.children, Pc(o, f) ? R = null : h !== null && Pc(o, h) && (r.flags |= 32), tp(n, r), cr(n, r, R, l), r.child;
      case 6:
        return n === null && Pd(r), null;
      case 13:
        return gf(n, r, l);
      case 4:
        return qd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = _n(r, null, o, l) : cr(n, r, o, l), r.child;
      case 11:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : ci(o, f), na(n, r, o, f, l);
      case 7:
        return cr(n, r, r.pendingProps, l), r.child;
      case 8:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, f = r.pendingProps, h = r.memoizedProps, R = f.value, Be(ya, o._currentValue), o._currentValue = R, h !== null) if (li(h.value, R)) {
            if (h.children === f.children && !Qn.current) {
              r = ja(n, r, l);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var _ = h.dependencies;
            if (_ !== null) {
              R = h.child;
              for (var N = _.firstContext; N !== null; ) {
                if (N.context === o) {
                  if (h.tag === 1) {
                    N = rl(-1, l & -l), N.tag = 2;
                    var Q = h.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var se = Q.pending;
                      se === null ? N.next = N : (N.next = se.next, se.next = N), Q.pending = N;
                    }
                  }
                  h.lanes |= l, N = h.alternate, N !== null && (N.lanes |= l), Vd(
                    h.return,
                    l,
                    r
                  ), _.lanes |= l;
                  break;
                }
                N = N.next;
              }
            } else if (h.tag === 10) R = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (R = h.return, R === null) throw Error(v(341));
              R.lanes |= l, _ = R.alternate, _ !== null && (_.lanes |= l), Vd(R, l, r), R = h.sibling;
            } else R = h.child;
            if (R !== null) R.return = h;
            else for (R = h; R !== null; ) {
              if (R === r) {
                R = null;
                break;
              }
              if (h = R.sibling, h !== null) {
                h.return = R.return, R = h;
                break;
              }
              R = R.return;
            }
            h = R;
          }
          cr(n, r, f.children, l), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, o = r.pendingProps.children, Sn(r, l), f = Fa(f), o = o(f), r.flags |= 1, cr(n, r, o, l), r.child;
      case 14:
        return o = r.type, f = ci(o, r.pendingProps), f = ci(o.type, f), ju(n, r, o, f, l);
      case 15:
        return st(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : ci(o, f), Pa(n, r), r.tag = 1, zn(o) ? (n = !0, Jr(r)) : n = !1, Sn(r, l), hf(r, o, f), Us(r, o, f, l), Ps(null, r, o, !0, n, l);
      case 19:
        return Ai(n, r, l);
      case 22:
        return Fs(n, r, l);
    }
    throw Error(v(156, r.tag));
  };
  function Bh(n, r) {
    return dn(n, r);
  }
  function fg(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, l, o) {
    return new fg(n, r, l, o);
  }
  function vp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dg(n) {
    if (typeof n == "function") return vp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === At) return 11;
      if (n === Ut) return 14;
    }
    return 2;
  }
  function ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ba(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Js(n, r, l, o, f, h) {
    var R = 2;
    if (o = n, typeof n == "function") vp(n) && (R = 1);
    else if (typeof n == "string") R = 5;
    else e: switch (n) {
      case Me:
        return ol(l.children, f, h, r);
      case Tt:
        R = 8, f |= 8;
        break;
      case tt:
        return n = Ba(12, l, r, f | 2), n.elementType = tt, n.lanes = h, n;
      case We:
        return n = Ba(13, l, r, f), n.elementType = We, n.lanes = h, n;
      case It:
        return n = Ba(19, l, r, f), n.elementType = It, n.lanes = h, n;
      case Fe:
        return Ql(l, f, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case _t:
            R = 10;
            break e;
          case Gt:
            R = 9;
            break e;
          case At:
            R = 11;
            break e;
          case Ut:
            R = 14;
            break e;
          case Ft:
            R = 16, o = null;
            break e;
        }
        throw Error(v(130, n == null ? n : typeof n, ""));
    }
    return r = Ba(R, l, r, f), r.elementType = n, r.type = o, r.lanes = h, r;
  }
  function ol(n, r, l, o) {
    return n = Ba(7, n, o, r), n.lanes = l, n;
  }
  function Ql(n, r, l, o) {
    return n = Ba(22, n, o, r), n.elementType = Fe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function hp(n, r, l) {
    return n = Ba(6, n, null, r), n.lanes = l, n;
  }
  function bf(n, r, l) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Vh(n, r, l, o, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = so(0), this.expirationTimes = so(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = so(0), this.identifierPrefix = o, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function _f(n, r, l, o, f, h, R, _, N) {
    return n = new Vh(n, r, l, _, N), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ba(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yd(h), n;
  }
  function pg(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ye, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function mp(n) {
    if (!n) return Kr;
    n = n._reactInternals;
    e: {
      if (ut(n) !== n || n.tag !== 1) throw Error(v(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return Cs(n, l, r);
    }
    return r;
  }
  function $h(n, r, l, o, f, h, R, _, N) {
    return n = _f(l, o, !0, n, f, h, R, _, N), n.context = mp(null), l = n.current, o = Vn(), f = Pi(l), h = rl(o, f), h.callback = r ?? null, Hl(l, h, f), n.current.lanes = f, qi(n, f, o), ia(n, o), n;
  }
  function kf(n, r, l, o) {
    var f = r.current, h = Vn(), R = Pi(f);
    return l = mp(l), r.context === null ? r.context = l : r.pendingContext = l, r = rl(h, R), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Hl(f, r, R), n !== null && (Fr(n, f, R, h), qc(n, f, R)), R;
  }
  function Df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function yp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Of(n, r) {
    yp(n, r), (n = n.alternate) && yp(n, r);
  }
  var gp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Gl(n) {
    this._internalRoot = n;
  }
  Lf.prototype.render = Gl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(v(409));
    kf(n, r, null, null);
  }, Lf.prototype.unmount = Gl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      $u(function() {
        kf(null, n, null, null);
      }), r[Zi] = null;
    }
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  Lf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = nt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qn.length && r !== 0 && r < qn[l].priority; l++) ;
      qn.splice(l, 0, n), l === 0 && us(n);
    }
  };
  function Sp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Nf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ih() {
  }
  function vg(n, r, l, o, f) {
    if (f) {
      if (typeof o == "function") {
        var h = o;
        o = function() {
          var Q = Df(R);
          h.call(Q);
        };
      }
      var R = $h(r, o, n, 0, null, !1, !1, "", Ih);
      return n._reactRootContainer = R, n[Zi] = R.current, Co(n.nodeType === 8 ? n.parentNode : n), $u(), R;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof o == "function") {
      var _ = o;
      o = function() {
        var Q = Df(N);
        _.call(Q);
      };
    }
    var N = _f(n, 0, !1, null, null, !1, !1, "", Ih);
    return n._reactRootContainer = N, n[Zi] = N.current, Co(n.nodeType === 8 ? n.parentNode : n), $u(function() {
      kf(r, N, l, o);
    }), N;
  }
  function Mf(n, r, l, o, f) {
    var h = l._reactRootContainer;
    if (h) {
      var R = h;
      if (typeof f == "function") {
        var _ = f;
        f = function() {
          var N = Df(R);
          _.call(N);
        };
      }
      kf(r, R, n, f);
    } else R = vg(l, r, n, f, o);
    return Df(R);
  }
  Nt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ni(r.pendingLanes);
          l !== 0 && (Qi(r, l | 1), ia(r, ot()), !(Dt & 6) && (Uo = ot() + 500, Oi()));
        }
        break;
      case 13:
        $u(function() {
          var o = ga(n, 1);
          if (o !== null) {
            var f = Vn();
            Fr(o, n, 1, f);
          }
        }), Of(n, 1);
    }
  }, is = function(n) {
    if (n.tag === 13) {
      var r = ga(n, 134217728);
      if (r !== null) {
        var l = Vn();
        Fr(r, n, 134217728, l);
      }
      Of(n, 134217728);
    }
  }, Ri = function(n) {
    if (n.tag === 13) {
      var r = Pi(n), l = ga(n, r);
      if (l !== null) {
        var o = Vn();
        Fr(l, n, r, o);
      }
      Of(n, r);
    }
  }, nt = function() {
    return Pt;
  }, fo = function(n, r) {
    var l = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (qr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var f = bn(o);
              if (!f) throw Error(v(90));
              kr(o), qr(o, f);
            }
          }
        }
        break;
      case "textarea":
        Ka(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, fu = fp, Cl = $u;
  var Yh = { usingClientEntryPoint: !1, Events: [Ve, ui, bn, Wi, cu, fp] }, Zs = { findFiberByHostInstance: xu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hg = { bundleType: Zs.bundleType, version: Zs.version, rendererPackageName: Zs.rendererPackageName, rendererConfig: Zs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: De.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zs.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ec.isDisabled && ec.supportsFiber) try {
      Tl = ec.inject(hg), Qr = ec;
    } catch {
    }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sp(r)) throw Error(v(200));
    return pg(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!Sp(n)) throw Error(v(299));
    var l = !1, o = "", f = gp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = _f(n, 1, !1, null, null, l, !1, o, f), n[Zi] = r.current, Co(n.nodeType === 8 ? n.parentNode : n), new Gl(r);
  }, qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return $u(n);
  }, qa.hydrate = function(n, r, l) {
    if (!Nf(r)) throw Error(v(200));
    return Mf(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!Sp(n)) throw Error(v(405));
    var o = l != null && l.hydratedSources || null, f = !1, h = "", R = gp;
    if (l != null && (l.unstable_strictMode === !0 && (f = !0), l.identifierPrefix !== void 0 && (h = l.identifierPrefix), l.onRecoverableError !== void 0 && (R = l.onRecoverableError)), r = $h(r, null, n, 1, l ?? null, f, !1, h, R), n[Zi] = r.current, Co(n), o) for (n = 0; n < o.length; n++) l = o[n], f = l._getVersion, f = f(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, f] : r.mutableSourceEagerHydrationData.push(
      l,
      f
    );
    return new Lf(r);
  }, qa.render = function(n, r, l) {
    if (!Nf(r)) throw Error(v(200));
    return Mf(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!Nf(n)) throw Error(v(40));
    return n._reactRootContainer ? ($u(function() {
      Mf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Zi] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = fp, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Nf(l)) throw Error(v(200));
    if (n == null || n._reactInternals === void 0) throw Error(v(38));
    return Mf(n, r, l, !1, o);
  }, qa.version = "18.3.1-next-f1338f8080-20240426", qa;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wT;
function kO() {
  return wT || (wT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = _v(), d = WT(), v = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function E(e) {
      g = e;
    }
    function w(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        O("warn", e, a);
      }
    }
    function m(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        O("error", e, a);
      }
    }
    function O(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(p) {
          return String(p);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, b = 1, F = 2, M = 3, H = 4, Y = 5, j = 6, X = 7, K = 8, Z = 9, ce = 10, fe = 11, De = 12, he = 13, Ye = 14, Me = 15, Tt = 16, tt = 17, _t = 18, Gt = 19, At = 21, We = 22, It = 23, Ut = 24, Ft = 25, Fe = !0, ye = !1, He = !1, Ce = !1, P = !1, re = !0, Ze = !0, Xe = !0, yt = !0, pt = /* @__PURE__ */ new Set(), ct = {}, vt = {};
    function gt(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      ct[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ct[e] = t;
      {
        var a = e.toLowerCase();
        vt[a] = e, e === "onDoubleClick" && (vt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        pt.add(t[i]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kr = Object.prototype.hasOwnProperty;
    function wn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ir(e) {
      try {
        return In(e), !1;
      } catch {
        return !0;
      }
    }
    function In(e) {
      return "" + e;
    }
    function Yn(e, t) {
      if (ir(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), In(e);
    }
    function qr(e) {
      if (ir(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), In(e);
    }
    function yi(e, t) {
      if (ir(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), In(e);
    }
    function da(e, t) {
      if (ir(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), In(e);
    }
    function Zn(e) {
      if (ir(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), In(e);
    }
    function Tn(e) {
      if (ir(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", wn(e)), In(e);
    }
    var Wn = 0, Rr = 1, Ka = 2, An = 3, wr = 4, pa = 5, Xa = 6, gi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = gi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + gi + "][" + ge + "]*$"), ht = {}, Yt = {};
    function ln(e) {
      return kr.call(Yt, e) ? !0 : kr.call(ht, e) ? !1 : Pe.test(e) ? (Yt[e] = !0, !0) : (ht[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === Wn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Wn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function er(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
            return !t;
          case wr:
            return t === !1;
          case pa:
            return isNaN(t);
          case Xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function Kt(e, t, a, i, u, s, p) {
      this.acceptsBooleans = t === Ka || t === An || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = p;
    }
    var Xt = {}, va = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    va.forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Wn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Xt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Ka,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Ka,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        An,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Xa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        pa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Tr = /[\-\:]([a-z])/g, ka = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Tr, ka);
      Xt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Tr, ka);
      Xt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Tr, ka);
      Xt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Wi = "xlinkHref";
    Xt[Wi] = new Kt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Xt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var cu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fu = !1;
    function Cl(e) {
      !fu && cu.test(e) && (fu = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Rl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Yn(a, t), i.sanitizeURL && Cl("" + a);
        var s = i.attributeName, p = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : er(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (er(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          p = e.getAttribute(s);
        }
        return er(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
      }
    }
    function du(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Yn(a, t), u === "" + a ? a : u;
      }
    }
    function Dr(e, t, a, i) {
      var u = un(t);
      if (!yn(t, u, i)) {
        if (er(t, a, u, i) && (a = null), i || u === null) {
          if (ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var p = u.mustUseProperty;
        if (p) {
          var y = u.propertyName;
          if (a === null) {
            var S = u.type;
            e[y] = S === An ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var T = u.attributeName, x = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var z = u.type, A;
          z === An || z === wr && a === !0 ? A = "" : (Yn(a, T), A = "" + a, u.sanitizeURL && Cl(A.toString())), x ? e.setAttributeNS(x, T, A) : e.setAttribute(T, A);
        }
      }
    }
    var Or = Symbol.for("react.element"), lr = Symbol.for("react.portal"), Si = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), Ei = Symbol.for("react.profiler"), Ci = Symbol.for("react.provider"), L = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Rt = Symbol.for("react.scope"), St = Symbol.for("react.debug_trace_mode"), xn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), ur = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, ei = "@@iterator";
    function ot(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[ei];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, ti = 0, pu, vu, wl, io, Tl, Qr, as;
    function Lr() {
    }
    Lr.__reactDisabledLog = !0;
    function wc() {
      {
        if (ti === 0) {
          pu = console.log, vu = console.info, wl = console.warn, io = console.error, Tl = console.group, Qr = console.groupCollapsed, as = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Lr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ti++;
      }
    }
    function Tc() {
      {
        if (ti--, ti === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, e, {
              value: pu
            }),
            info: ft({}, e, {
              value: vu
            }),
            warn: ft({}, e, {
              value: wl
            }),
            error: ft({}, e, {
              value: io
            }),
            group: ft({}, e, {
              value: Tl
            }),
            groupCollapsed: ft({}, e, {
              value: Qr
            }),
            groupEnd: ft({}, e, {
              value: as
            })
          });
        }
        ti < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lo = v.ReactCurrentDispatcher, xl;
    function ha(e, t, a) {
      {
        if (xl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            xl = i && i[1] || "";
          }
        return `
` + xl + e;
      }
    }
    var ni = !1, ri;
    {
      var uo = typeof WeakMap == "function" ? WeakMap : Map;
      ri = new uo();
    }
    function hu(e, t) {
      if (!e || ni)
        return "";
      {
        var a = ri.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ni = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = lo.current, lo.current = null, wc();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (G) {
              i = G;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (G) {
              i = G;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            i = G;
          }
          e();
        }
      } catch (G) {
        if (G && i && typeof G.stack == "string") {
          for (var y = G.stack.split(`
`), S = i.stack.split(`
`), T = y.length - 1, x = S.length - 1; T >= 1 && x >= 0 && y[T] !== S[x]; )
            x--;
          for (; T >= 1 && x >= 0; T--, x--)
            if (y[T] !== S[x]) {
              if (T !== 1 || x !== 1)
                do
                  if (T--, x--, x < 0 || y[T] !== S[x]) {
                    var z = `
` + y[T].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ri.set(e, z), z;
                  }
                while (T >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ni = !1, lo.current = s, Tc(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", W = A ? ha(A) : "";
      return typeof e == "function" && ri.set(e, W), W;
    }
    function bl(e, t, a) {
      return hu(e, !0);
    }
    function oo(e, t, a) {
      return hu(e, !1);
    }
    function so(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return hu(e, so(e));
      if (typeof e == "string")
        return ha(e);
      switch (e) {
        case Re:
          return ha("Suspense");
        case Ne:
          return ha("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            return oo(e.render);
          case ut:
            return qi(e.type, t, a);
          case at: {
            var i = e, u = i._payload, s = i._init;
            try {
              return qi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function vd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Y:
          return ha(e.type);
        case Tt:
          return ha("Lazy");
        case he:
          return ha("Suspense");
        case Gt:
          return ha("SuspenseList");
        case k:
        case F:
        case Me:
          return oo(e.type);
        case fe:
          return oo(e.type.render);
        case b:
          return bl(e.type);
        default:
          return "";
      }
    }
    function Qi(e) {
      try {
        var t = "", a = e;
        do
          t += vd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Pt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function co(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Si:
          return "Fragment";
        case lr:
          return "Portal";
        case Ei:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case Re:
          return "Suspense";
        case Ne:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            var t = e;
            return co(t) + ".Consumer";
          case Ci:
            var a = e;
            return co(a._context) + ".Provider";
          case le:
            return Pt(e, e.render, "ForwardRef");
          case ut:
            var i = e.displayName || null;
            return i !== null ? i : Nt(e.type) || "Memo";
          case at: {
            var u = e, s = u._payload, p = u._init;
            try {
              return Nt(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function is(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ri(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ut:
          return "Cache";
        case Z:
          var i = a;
          return Ri(i) + ".Consumer";
        case ce:
          var u = a;
          return Ri(u._context) + ".Provider";
        case _t:
          return "DehydratedFragment";
        case fe:
          return is(a, a.render, "ForwardRef");
        case X:
          return "Fragment";
        case Y:
          return a;
        case H:
          return "Portal";
        case M:
          return "Root";
        case j:
          return "Text";
        case Tt:
          return Nt(a);
        case K:
          return a === Ja ? "StrictMode" : "Mode";
        case We:
          return "Offscreen";
        case De:
          return "Profiler";
        case At:
          return "Scope";
        case he:
          return "Suspense";
        case Gt:
          return "SuspenseList";
        case Ft:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case k:
        case tt:
        case F:
        case Ye:
        case Me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fo = v.ReactDebugCurrentFrame, or = null, wi = !1;
    function Nr() {
      {
        if (or === null)
          return null;
        var e = or._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function Ti() {
      return or === null ? "" : Qi(or);
    }
    function pn() {
      fo.getCurrentStack = null, or = null, wi = !1;
    }
    function Jt(e) {
      fo.getCurrentStack = e === null ? null : Ti, or = e, wi = !1;
    }
    function _l() {
      return or;
    }
    function qn(e) {
      wi = e;
    }
    function Mr(e) {
      return "" + e;
    }
    function Da(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var mu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ls(e, t) {
      mu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function us(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function kl(e) {
      return e._valueTracker;
    }
    function yu(e) {
      e._valueTracker = null;
    }
    function hd(e) {
      var t = "";
      return e && (us(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = us(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(y) {
            Tn(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            Tn(y), i = "" + y;
          },
          stopTracking: function() {
            yu(e), delete e[t];
          }
        };
        return p;
      }
    }
    function ai(e) {
      kl(e) || (e._valueTracker = Oa(e));
    }
    function xi(e) {
      if (!e)
        return !1;
      var t = kl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function La(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var po = !1, vo = !1, Dl = !1, gu = !1;
    function ho(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function mo(e, t) {
      var a = e, i = t.checked, u = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ii(e, t) {
      ls("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vo && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), vo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !po && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), po = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: ho(t)
      };
    }
    function C(e, t) {
      var a = e, i = t.checked;
      i != null && Dr(a, "checked", i, !1);
    }
    function D(e, t) {
      var a = e;
      {
        var i = ho(t);
        !a._wrapperState.controlled && i && !gu && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gu = !0), a._wrapperState.controlled && !i && !Dl && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Dl = !0);
      }
      C(e, t);
      var u = Da(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Mr(u)) : a.value !== Mr(u) && (a.value = Mr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qe(a, t.type, u) : t.hasOwnProperty("defaultValue") && qe(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var p = Mr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function J(e, t) {
      var a = e;
      D(a, t), ve(a, t);
    }
    function ve(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var p = u[s];
          if (!(p === e || p.form !== e.form)) {
            var y = om(p);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            xi(p), D(p, y);
          }
        }
      }
    }
    function qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Mr(e._wrapperState.initialValue) : e.defaultValue !== Mr(a) && (e.defaultValue = Mr(a)));
    }
    var Ee = !1, Ke = !1, wt = !1;
    function Mt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ke || (Ke = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wt || (wt = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ee && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ee = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Mr(Da(t.value)));
    }
    var Zt = Array.isArray;
    function mt(e) {
      return Zt(e);
    }
    var en;
    en = !1;
    function gn() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ol = ["value", "defaultValue"];
    function os(e) {
      {
        ls("select", e);
        for (var t = 0; t < Ol.length; t++) {
          var a = Ol[t];
          if (e[a] != null) {
            var i = mt(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, gn()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, gn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, p = {}, y = 0; y < s.length; y++)
          p["$" + s[y]] = !0;
        for (var S = 0; S < u.length; S++) {
          var T = p.hasOwnProperty("$" + u[S].value);
          u[S].selected !== T && (u[S].selected = T), T && i && (u[S].defaultSelected = !0);
        }
      } else {
        for (var x = Mr(Da(a)), z = null, A = 0; A < u.length; A++) {
          if (u[A].value === x) {
            u[A].selected = !0, i && (u[A].defaultSelected = !0);
            return;
          }
          z === null && !u[A].disabled && (z = u[A]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ss(e, t) {
      return ft({}, t, {
        value: void 0
      });
    }
    function Su(e, t) {
      var a = e;
      os(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !en && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), en = !0);
    }
    function md(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function xc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Gi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function yd(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var Mv = !1;
    function gd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Mr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Sd(e, t) {
      var a = e;
      ls("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Mv && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), Mv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Da(i)
      };
    }
    function Av(e, t) {
      var a = e, i = Da(t.value), u = Da(t.defaultValue);
      if (i != null) {
        var s = Mr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Mr(u));
    }
    function Uv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Iy(e, t) {
      Av(e, t);
    }
    var Ki = "http://www.w3.org/1999/xhtml", Ed = "http://www.w3.org/1998/Math/MathML", Cd = "http://www.w3.org/2000/svg";
    function Rd(e) {
      switch (e) {
        case "svg":
          return Cd;
        case "math":
          return Ed;
        default:
          return Ki;
      }
    }
    function wd(e, t) {
      return e == null || e === Ki ? Rd(t) : e === Cd && t === "foreignObject" ? Ki : e;
    }
    var zv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, bc, Fv = zv(function(e, t) {
      if (e.namespaceURI === Cd && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Xi = 3, Un = 8, Ji = 9, Td = 11, yo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, cs = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, fs = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Pv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var jv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fs).forEach(function(e) {
      jv.forEach(function(t) {
        fs[Pv(t, e)] = fs[e];
      });
    });
    function _c(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : (da(t, e), ("" + t).trim());
    }
    var Hv = /([A-Z])/g, Bv = /^ms-/;
    function go(e) {
      return e.replace(Hv, "-$1").toLowerCase().replace(Bv, "-ms-");
    }
    var Vv = function() {
    };
    {
      var Yy = /^(?:webkit|moz|o)[A-Z]/, Wy = /^-ms-/, $v = /-(.)/g, xd = /;\s*$/, bi = {}, Eu = {}, Iv = !1, ds = !1, qy = function(e) {
        return e.replace($v, function(t, a) {
          return a.toUpperCase();
        });
      }, Yv = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          qy(e.replace(Wy, "ms-"))
        ));
      }, bd = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _d = function(e, t) {
        Eu.hasOwnProperty(t) && Eu[t] || (Eu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(xd, "")));
      }, Wv = function(e, t) {
        Iv || (Iv = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qv = function(e, t) {
        ds || (ds = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Vv = function(e, t) {
        e.indexOf("-") > -1 ? Yv(e) : Yy.test(e) ? bd(e) : xd.test(t) && _d(e, t), typeof t == "number" && (isNaN(t) ? Wv(e, t) : isFinite(t) || qv(e, t));
      };
    }
    var Qv = Vv;
    function Qy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : go(i)) + ":", t += _c(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qv(i, t[i]);
          var s = _c(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Kv(e) {
      var t = {};
      for (var a in e)
        for (var i = cs[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ky(e, t) {
      {
        if (!t)
          return;
        var a = Kv(e), i = Kv(t), u = {};
        for (var s in a) {
          var p = a[s], y = i[s];
          if (y && p !== y) {
            var S = p + "," + y;
            if (u[S])
              continue;
            u[S] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gy(e[p]) ? "Removing" : "Updating", p, y);
          }
        }
      }
    }
    var li = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ps = ft({
      menuitem: !0
    }, li), Xv = "__html";
    function kc(e, t) {
      if (t) {
        if (ps[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Xv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ll(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var vs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, So = {}, Xy = new RegExp("^(aria)-[" + ge + "]*$"), Eo = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function kd(e, t) {
      {
        if (kr.call(So, t) && So[t])
          return !0;
        if (Eo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), So[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), So[t] = !0, !0;
        }
        if (Xy.test(t)) {
          var u = t.toLowerCase(), s = Dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return So[t] = !0, !1;
          if (t !== s)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), So[t] = !0, !0;
        }
      }
      return !0;
    }
    function hs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = kd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Dd(e, t) {
      Ll(e, t) || hs(e, t);
    }
    var Od = !1;
    function Oc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Od && (Od = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cu = function() {
    };
    {
      var sr = {}, Ld = /^on./, Lc = /^on[^A-Z]/, Jv = new RegExp("^(aria)-[" + ge + "]*$"), Zv = new RegExp("^(aria)[A-Z][" + ge + "]*$");
      Cu = function(e, t, a, i) {
        if (kr.call(sr, t) && sr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = p.hasOwnProperty(u) ? p[u] : null;
          if (y != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, y), sr[t] = !0, !0;
          if (Ld.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (Ld.test(t))
          return Lc.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (Jv.test(t) || Zv.test(t))
          return !0;
        if (u === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (u === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var S = un(t), T = S !== null && S.type === Wn;
        if (vs.hasOwnProperty(u)) {
          var x = vs[u];
          if (x !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, x), sr[t] = !0, !0;
        } else if (!T && t !== u)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), sr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, S, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : T ? !0 : fn(t, a, S, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === An && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
      };
    }
    var eh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Cu(e, u, t[u], a);
          s || i.push(u);
        }
        var p = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function th(e, t, a) {
      Ll(e, t) || eh(e, t, a);
    }
    var Nd = 1, Nc = 2, Na = 4, Md = Nd | Nc | Na, Ru = null;
    function Jy(e) {
      Ru !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ru = e;
    }
    function Zy() {
      Ru === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ru = null;
    }
    function ms(e) {
      return e === Ru;
    }
    function Ad(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xi ? t.parentNode : t;
    }
    var Mc = null, wu = null, Wt = null;
    function Ac(e) {
      var t = Bo(e);
      if (t) {
        if (typeof Mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = om(a);
          Mc(t.stateNode, t.type, i);
        }
      }
    }
    function Uc(e) {
      Mc = e;
    }
    function Co(e) {
      wu ? Wt ? Wt.push(e) : Wt = [e] : wu = e;
    }
    function nh() {
      return wu !== null || Wt !== null;
    }
    function zc() {
      if (wu) {
        var e = wu, t = Wt;
        if (wu = null, Wt = null, Ac(e), t)
          for (var a = 0; a < t.length; a++)
            Ac(t[a]);
      }
    }
    var Ro = function(e, t) {
      return e(t);
    }, ys = function() {
    }, Nl = !1;
    function rh() {
      var e = nh();
      e && (ys(), zc());
    }
    function ah(e, t, a) {
      if (Nl)
        return e(t, a);
      Nl = !0;
      try {
        return Ro(e, t, a);
      } finally {
        Nl = !1, rh();
      }
    }
    function eg(e, t, a) {
      Ro = e, ys = a;
    }
    function ih(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Fc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && ih(t));
        default:
          return !1;
      }
    }
    function Ml(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = om(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Fc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var gs = !1;
    if (Mn)
      try {
        var Tu = {};
        Object.defineProperty(Tu, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", Tu, Tu), window.removeEventListener("test", Tu, Tu);
      } catch {
        gs = !1;
      }
    function Pc(e, t, a, i, u, s, p, y, S) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (x) {
        this.onError(x);
      }
    }
    var jc = Pc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ud = document.createElement("react");
      jc = function(t, a, i, u, s, p, y, S, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), z = !1, A = !0, W = window.event, G = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Ud.removeEventListener(ne, Qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Te = Array.prototype.slice.call(arguments, 3);
        function Qe() {
          z = !0, te(), a.apply(i, Te), A = !1;
        }
        var je, Lt = !1, xt = !1;
        function V($) {
          if (je = $.error, Lt = !0, je === null && $.colno === 0 && $.lineno === 0 && (xt = !0), $.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", V), Ud.addEventListener(ne, Qe, !1), x.initEvent(ne, !1, !1), Ud.dispatchEvent(x), G && Object.defineProperty(window, "event", G), z && A && (Lt ? xt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", V), !z)
          return te(), Pc.apply(this, arguments);
      };
    }
    var lh = jc, wo = !1, Hc = null, To = !1, _i = null, uh = {
      onError: function(e) {
        wo = !0, Hc = e;
      }
    };
    function Al(e, t, a, i, u, s, p, y, S) {
      wo = !1, Hc = null, lh.apply(uh, arguments);
    }
    function ki(e, t, a, i, u, s, p, y, S) {
      if (Al.apply(this, arguments), wo) {
        var T = Es();
        To || (To = !0, _i = T);
      }
    }
    function Ss() {
      if (To) {
        var e = _i;
        throw To = !1, _i = null, e;
      }
    }
    function Zi() {
      return wo;
    }
    function Es() {
      if (wo) {
        var e = Hc;
        return wo = !1, Hc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xo(e) {
      return e._reactInternals;
    }
    function tg(e) {
      return e._reactInternals !== void 0;
    }
    function xu(e, t) {
      e._reactInternals = t;
    }
    var Ve = (
      /*                      */
      0
    ), ui = (
      /*                */
      1
    ), bn = (
      /*                    */
      2
    ), kt = (
      /*                       */
      4
    ), Ma = (
      /*                */
      16
    ), oi = (
      /*                 */
      32
    ), cn = (
      /*                     */
      64
    ), Be = (
      /*                   */
      128
    ), Kr = (
      /*            */
      256
    ), Rn = (
      /*                          */
      512
    ), Qn = (
      /*                     */
      1024
    ), Xr = (
      /*                      */
      2048
    ), Aa = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), bo = (
      /*             */
      16384
    ), oh = (
      /*               */
      32767
    ), Cs = (
      /*                   */
      32768
    ), Jr = (
      /*                */
      65536
    ), Bc = (
      /* */
      131072
    ), Di = (
      /*                       */
      1048576
    ), _o = (
      /*                    */
      2097152
    ), el = (
      /*                 */
      4194304
    ), Vc = (
      /*                */
      8388608
    ), Ul = (
      /*               */
      16777216
    ), Oi = (
      /*              */
      33554432
    ), zl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      kt | Qn | 0
    ), Fl = bn | kt | Ma | oi | Rn | Aa | zn, Pl = kt | cn | Rn | zn, tl = Xr | Ma, Fn = el | Vc | _o, Ua = v.ReactCurrentOwner;
    function ma(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bn | Aa)) !== Ve && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === M ? a : null;
    }
    function Li(e) {
      if (e.tag === he) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ni(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function bu(e) {
      return ma(e) === e;
    }
    function sh(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = xo(e);
      return u ? ma(u) === u : !1;
    }
    function $c(e) {
      if (ma(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ic(e) {
      var t = e.alternate;
      if (!t) {
        var a = ma(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var p = s.alternate;
        if (p === null) {
          var y = s.return;
          if (y !== null) {
            i = u = y;
            continue;
          }
          break;
        }
        if (s.child === p.child) {
          for (var S = s.child; S; ) {
            if (S === i)
              return $c(s), e;
            if (S === u)
              return $c(s), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = p;
        else {
          for (var T = !1, x = s.child; x; ) {
            if (x === i) {
              T = !0, i = s, u = p;
              break;
            }
            if (x === u) {
              T = !0, u = s, i = p;
              break;
            }
            x = x.sibling;
          }
          if (!T) {
            for (x = p.child; x; ) {
              if (x === i) {
                T = !0, i = p, u = s;
                break;
              }
              if (x === u) {
                T = !0, u = p, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Ic(e);
      return t !== null ? ea(t) : null;
    }
    function ea(e) {
      if (e.tag === Y || e.tag === j)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ea(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hn(e) {
      var t = Ic(e);
      return t !== null ? za(t) : null;
    }
    function za(e) {
      if (e.tag === Y || e.tag === j)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== H) {
          var a = za(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var zd = d.unstable_scheduleCallback, ch = d.unstable_cancelCallback, Fd = d.unstable_shouldYield, Pd = d.unstable_requestPaint, Gn = d.unstable_now, Yc = d.unstable_getCurrentPriorityLevel, Rs = d.unstable_ImmediatePriority, jl = d.unstable_UserBlockingPriority, nl = d.unstable_NormalPriority, ng = d.unstable_LowPriority, _u = d.unstable_IdlePriority, Wc = d.unstable_yieldValue, fh = d.unstable_setDisableYieldValue, ku = null, _n = null, we = null, ya = !1, ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ko(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = ft({}, e, {
          getLaneLabelMap: Du,
          injectProfilingHooks: Fa
        })), ku = t.inject(e), _n = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function jd(e, t) {
      if (_n && typeof _n.onScheduleFiberRoot == "function")
        try {
          _n.onScheduleFiberRoot(ku, e, t);
        } catch (a) {
          ya || (ya = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function Hd(e, t) {
      if (_n && typeof _n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Be) === Be;
          if (Xe) {
            var i;
            switch (t) {
              case Ar:
                i = Rs;
                break;
              case Ai:
                i = jl;
                break;
              case Pa:
                i = nl;
                break;
              case ja:
                i = _u;
                break;
              default:
                i = nl;
                break;
            }
            _n.onCommitFiberRoot(ku, e, i, a);
          }
        } catch (u) {
          ya || (ya = !0, m("React instrumentation encountered an error: %s", u));
        }
    }
    function Bd(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(ku, e);
        } catch (t) {
          ya || (ya = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Vd(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(ku, e);
        } catch (t) {
          ya || (ya = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Sn(e) {
      if (typeof Wc == "function" && (fh(e), E(e)), _n && typeof _n.setStrictMode == "function")
        try {
          _n.setStrictMode(ku, e);
        } catch (t) {
          ya || (ya = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Fa(e) {
      we = e;
    }
    function Du() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Nu; a++) {
          var i = hh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $d(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function Id() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function ga(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function Sa() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Yd(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function dh() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function rl(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function Hl() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function qc(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function ph() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function ws(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function Wd() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function Ts(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function Mi(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function xs(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function bs() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function Ou(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function qd() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function Lu(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function vh() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function Qc() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function En(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function Gc(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function _s(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), Et = (
      /*                 */
      1
    ), jt = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), Ht = (
      /*              */
      16
    ), Pn = Math.clz32 ? Math.clz32 : ks, tr = Math.log, Kc = Math.LN2;
    function ks(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (tr(t) / Kc | 0) | 0;
    }
    var Nu = 31, ue = (
      /*                        */
      0
    ), zt = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), Bl = (
      /*    */
      2
    ), si = (
      /*             */
      4
    ), xr = (
      /*            */
      8
    ), kn = (
      /*                     */
      16
    ), al = (
      /*                */
      32
    ), Vl = (
      /*                       */
      4194240
    ), Mu = (
      /*                        */
      64
    ), Xc = (
      /*                        */
      128
    ), Jc = (
      /*                        */
      256
    ), Zc = (
      /*                        */
      512
    ), ef = (
      /*                        */
      1024
    ), tf = (
      /*                        */
      2048
    ), nf = (
      /*                        */
      4096
    ), rf = (
      /*                        */
      8192
    ), af = (
      /*                        */
      16384
    ), Au = (
      /*                       */
      32768
    ), lf = (
      /*                       */
      65536
    ), Do = (
      /*                       */
      131072
    ), Oo = (
      /*                       */
      262144
    ), uf = (
      /*                       */
      524288
    ), Ds = (
      /*                       */
      1048576
    ), of = (
      /*                       */
      2097152
    ), Os = (
      /*                            */
      130023424
    ), Uu = (
      /*                             */
      4194304
    ), sf = (
      /*                             */
      8388608
    ), Ls = (
      /*                             */
      16777216
    ), cf = (
      /*                             */
      33554432
    ), ff = (
      /*                             */
      67108864
    ), Qd = Uu, Ns = (
      /*          */
      134217728
    ), Gd = (
      /*                          */
      268435455
    ), Ms = (
      /*               */
      268435456
    ), zu = (
      /*                        */
      536870912
    ), Ea = (
      /*                   */
      1073741824
    );
    function hh(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & Bl)
          return "InputContinuousHydration";
        if (e & si)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & kn)
          return "Default";
        if (e & al)
          return "TransitionHydration";
        if (e & Vl)
          return "Transition";
        if (e & Os)
          return "Retry";
        if (e & Ns)
          return "SelectiveHydration";
        if (e & Ms)
          return "IdleHydration";
        if (e & zu)
          return "Idle";
        if (e & Ea)
          return "Offscreen";
      }
    }
    var an = -1, Fu = Mu, df = Uu;
    function As(e) {
      switch ($l(e)) {
        case Je:
          return Je;
        case Bl:
          return Bl;
        case si:
          return si;
        case xr:
          return xr;
        case kn:
          return kn;
        case al:
          return al;
        case Mu:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Au:
        case lf:
        case Do:
        case Oo:
        case uf:
        case Ds:
        case of:
          return e & Vl;
        case Uu:
        case sf:
        case Ls:
        case cf:
        case ff:
          return e & Os;
        case Ns:
          return Ns;
        case Ms:
          return Ms;
        case zu:
          return zu;
        case Ea:
          return Ea;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function pf(e, t) {
      var a = e.pendingLanes;
      if (a === ue)
        return ue;
      var i = ue, u = e.suspendedLanes, s = e.pingedLanes, p = a & Gd;
      if (p !== ue) {
        var y = p & ~u;
        if (y !== ue)
          i = As(y);
        else {
          var S = p & s;
          S !== ue && (i = As(S));
        }
      } else {
        var T = a & ~u;
        T !== ue ? i = As(T) : s !== ue && (i = As(s));
      }
      if (i === ue)
        return ue;
      if (t !== ue && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ue) {
        var x = $l(i), z = $l(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === kn && (z & Vl) !== ue
        )
          return t;
      }
      (i & si) !== ue && (i |= a & kn);
      var A = e.entangledLanes;
      if (A !== ue)
        for (var W = e.entanglements, G = i & A; G > 0; ) {
          var te = jn(G), Te = 1 << te;
          i |= W[te], G &= ~Te;
        }
      return i;
    }
    function ci(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var u = jn(t), s = 1 << u, p = a[u];
        p > i && (i = p), t &= ~s;
      }
      return i;
    }
    function Kd(e, t) {
      switch (e) {
        case Je:
        case Bl:
        case si:
          return t + 250;
        case xr:
        case kn:
        case al:
        case Mu:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Au:
        case lf:
        case Do:
        case Oo:
        case uf:
        case Ds:
        case of:
          return t + 5e3;
        case Uu:
        case sf:
        case Ls:
        case cf:
        case ff:
          return an;
        case Ns:
        case Ms:
        case zu:
        case Ea:
          return an;
        default:
          return m("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function vf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, p = a; p > 0; ) {
        var y = jn(p), S = 1 << y, T = s[y];
        T === an ? ((S & i) === ue || (S & u) !== ue) && (s[y] = Kd(S, t)) : T <= t && (e.expiredLanes |= S), p &= ~S;
      }
    }
    function mh(e) {
      return As(e.pendingLanes);
    }
    function hf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== ue ? t : t & Ea ? Ea : ue;
    }
    function yh(e) {
      return (e & Je) !== ue;
    }
    function Us(e) {
      return (e & Gd) !== ue;
    }
    function Pu(e) {
      return (e & Os) === e;
    }
    function Xd(e) {
      var t = Je | si | kn;
      return (e & t) === ue;
    }
    function Jd(e) {
      return (e & Vl) === e;
    }
    function mf(e, t) {
      var a = Bl | si | xr | kn;
      return (t & a) !== ue;
    }
    function gh(e, t) {
      return (t & e.expiredLanes) !== ue;
    }
    function Zd(e) {
      return (e & Vl) !== ue;
    }
    function ep() {
      var e = Fu;
      return Fu <<= 1, (Fu & Vl) === ue && (Fu = Mu), e;
    }
    function Sh() {
      var e = df;
      return df <<= 1, (df & Os) === ue && (df = Uu), e;
    }
    function $l(e) {
      return e & -e;
    }
    function zs(e) {
      return $l(e);
    }
    function jn(e) {
      return 31 - Pn(e);
    }
    function cr(e) {
      return jn(e);
    }
    function na(e, t) {
      return (e & t) !== ue;
    }
    function ju(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function Fs(e, t) {
      return e & ~t;
    }
    function tp(e, t) {
      return e & t;
    }
    function Eh(e) {
      return e;
    }
    function Ch(e, t) {
      return e !== zt && e < t ? e : t;
    }
    function Ps(e) {
      for (var t = [], a = 0; a < Nu; a++)
        t.push(e);
      return t;
    }
    function Lo(e, t, a) {
      e.pendingLanes |= t, t !== zu && (e.suspendedLanes = ue, e.pingedLanes = ue);
      var i = e.eventTimes, u = cr(t);
      i[u] = a;
    }
    function Rh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = an, i &= ~s;
      }
    }
    function yf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function np(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ue, e.pingedLanes = ue, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, p = a; p > 0; ) {
        var y = jn(p), S = 1 << y;
        i[y] = ue, u[y] = an, s[y] = an, p &= ~S;
      }
    }
    function gf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), p = 1 << s;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~p;
      }
    }
    function rp(e, t) {
      var a = $l(t), i;
      switch (a) {
        case si:
          i = Bl;
          break;
        case kn:
          i = xr;
          break;
        case Mu:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Au:
        case lf:
        case Do:
        case Oo:
        case uf:
        case Ds:
        case of:
        case Uu:
        case sf:
        case Ls:
        case cf:
        case ff:
          i = al;
          break;
        case zu:
          i = Ms;
          break;
        default:
          i = zt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== zt ? zt : i;
    }
    function js(e, t, a) {
      if (ta)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = cr(a), s = 1 << u, p = i[u];
          p.add(t), a &= ~s;
        }
    }
    function wh(e, t) {
      if (ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = cr(t), s = 1 << u, p = a[u];
          p.size > 0 && (p.forEach(function(y) {
            var S = y.alternate;
            (S === null || !i.has(S)) && i.add(y);
          }), p.clear()), t &= ~s;
        }
    }
    function ap(e, t) {
      return null;
    }
    var Ar = Je, Ai = si, Pa = kn, ja = zu, Hs = zt;
    function Ha() {
      return Hs;
    }
    function Hn(e) {
      Hs = e;
    }
    function Th(e, t) {
      var a = Hs;
      try {
        return Hs = e, t();
      } finally {
        Hs = a;
      }
    }
    function xh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Bs(e, t) {
      return e > t ? e : t;
    }
    function nr(e, t) {
      return e !== 0 && e < t;
    }
    function bh(e) {
      var t = $l(e);
      return nr(Ar, t) ? nr(Ai, t) ? Us(t) ? Pa : ja : Ai : Ar;
    }
    function Sf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Vs;
    function br(e) {
      Vs = e;
    }
    function rg(e) {
      Vs(e);
    }
    var Le;
    function No(e) {
      Le = e;
    }
    var Ef;
    function _h(e) {
      Ef = e;
    }
    var kh;
    function $s(e) {
      kh = e;
    }
    var Is;
    function ip(e) {
      Is = e;
    }
    var Cf = !1, Ys = [], il = null, Ui = null, zi = null, Dn = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), zr = [], Dh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Oh(e) {
      return Dh.indexOf(e) > -1;
    }
    function fi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function lp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          il = null;
          break;
        case "dragenter":
        case "dragleave":
          Ui = null;
          break;
        case "mouseover":
        case "mouseout":
          zi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Dn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ur.delete(i);
          break;
        }
      }
    }
    function ra(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var p = fi(t, a, i, u, s);
        if (t !== null) {
          var y = Bo(t);
          y !== null && Le(y);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return u !== null && S.indexOf(u) === -1 && S.push(u), e;
    }
    function ag(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return il = ra(il, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var p = u;
          return Ui = ra(Ui, e, t, a, i, p), !0;
        }
        case "mouseover": {
          var y = u;
          return zi = ra(zi, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = u, T = S.pointerId;
          return Dn.set(T, ra(Dn.get(T) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var x = u, z = x.pointerId;
          return Ur.set(z, ra(Ur.get(z) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function up(e) {
      var t = rc(e.target);
      if (t !== null) {
        var a = ma(t);
        if (a !== null) {
          var i = a.tag;
          if (i === he) {
            var u = Li(a);
            if (u !== null) {
              e.blockedOn = u, Is(e.priority, function() {
                Ef(a);
              });
              return;
            }
          } else if (i === M) {
            var s = a.stateNode;
            if (Sf(s)) {
              e.blockedOn = Ni(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Lh(e) {
      for (var t = kh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && nr(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && up(a);
    }
    function Ws(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ao(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jy(s), u.target.dispatchEvent(s), Zy();
        } else {
          var p = Bo(i);
          return p !== null && Le(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function op(e, t, a) {
      Ws(e) && a.delete(t);
    }
    function ig() {
      Cf = !1, il !== null && Ws(il) && (il = null), Ui !== null && Ws(Ui) && (Ui = null), zi !== null && Ws(zi) && (zi = null), Dn.forEach(op), Ur.forEach(op);
    }
    function Il(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cf || (Cf = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, ig)));
    }
    function Hu(e) {
      if (Ys.length > 0) {
        Il(Ys[0], e);
        for (var t = 1; t < Ys.length; t++) {
          var a = Ys[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      il !== null && Il(il, e), Ui !== null && Il(Ui, e), zi !== null && Il(zi, e);
      var i = function(y) {
        return Il(y, e);
      };
      Dn.forEach(i), Ur.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var p = zr[0];
        if (p.blockedOn !== null)
          break;
        up(p), p.blockedOn === null && zr.shift();
      }
    }
    var fr = v.ReactCurrentBatchConfig, Dt = !0;
    function Kn(e) {
      Dt = !!e;
    }
    function Bn() {
      return Dt;
    }
    function dr(e, t, a) {
      var i = Rf(t), u;
      switch (i) {
        case Ar:
          u = Ca;
          break;
        case Ai:
          u = Mo;
          break;
        case Pa:
        default:
          u = On;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var u = Ha(), s = fr.transition;
      fr.transition = null;
      try {
        Hn(Ar), On(e, t, a, i);
      } finally {
        Hn(u), fr.transition = s;
      }
    }
    function Mo(e, t, a, i) {
      var u = Ha(), s = fr.transition;
      fr.transition = null;
      try {
        Hn(Ai), On(e, t, a, i);
      } finally {
        Hn(u), fr.transition = s;
      }
    }
    function On(e, t, a, i) {
      Dt && qs(e, t, a, i);
    }
    function qs(e, t, a, i) {
      var u = Ao(e, t, a, i);
      if (u === null) {
        wg(e, t, i, Fi, a), lp(e, i);
        return;
      }
      if (ag(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (lp(e, i), t & Na && Oh(e)) {
        for (; u !== null; ) {
          var s = Bo(u);
          s !== null && rg(s);
          var p = Ao(e, t, a, i);
          if (p === null && wg(e, t, i, Fi, a), p === u)
            break;
          u = p;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wg(e, t, i, null, a);
    }
    var Fi = null;
    function Ao(e, t, a, i) {
      Fi = null;
      var u = Ad(i), s = rc(u);
      if (s !== null) {
        var p = ma(s);
        if (p === null)
          s = null;
        else {
          var y = p.tag;
          if (y === he) {
            var S = Li(p);
            if (S !== null)
              return S;
            s = null;
          } else if (y === M) {
            var T = p.stateNode;
            if (Sf(T))
              return Ni(p);
            s = null;
          } else p !== s && (s = null);
        }
      }
      return Fi = s, null;
    }
    function Rf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ar;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ai;
        case "message": {
          var t = Yc();
          switch (t) {
            case Rs:
              return Ar;
            case jl:
              return Ai;
            case nl:
            case ng:
              return Pa;
            case _u:
              return ja;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function Qs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function aa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function sp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Uo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ra = null, zo = null, Bu = null;
    function Yl(e) {
      return Ra = e, zo = Gs(), !0;
    }
    function wf() {
      Ra = null, zo = null, Bu = null;
    }
    function ll() {
      if (Bu)
        return Bu;
      var e, t = zo, a = t.length, i, u = Gs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === u[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Bu = u.slice(e, y), Bu;
    }
    function Gs() {
      return "value" in Ra ? Ra.value : Ra.textContent;
    }
    function Wl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Fo() {
      return !0;
    }
    function Ks() {
      return !1;
    }
    function _r(e) {
      function t(a, i, u, s, p) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = p, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(s) : this[y] = s[y];
          }
        var T = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return T ? this.isDefaultPrevented = Fo : this.isDefaultPrevented = Ks, this.isPropagationStopped = Ks, this;
      }
      return ft(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Fo
      }), t;
    }
    var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Pi = _r(Vn), Fr = ft({}, Vn, {
      view: 0,
      detail: 0
    }), ia = _r(Fr), Tf, Xs, Vu;
    function lg(e) {
      e !== Vu && (Vu && e.type === "mousemove" ? (Tf = e.screenX - Vu.screenX, Xs = e.screenY - Vu.screenY) : (Tf = 0, Xs = 0), Vu = e);
    }
    var di = ft({}, Fr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: mn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (lg(e), Tf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Xs;
      }
    }), cp = _r(di), fp = ft({}, di, {
      dataTransfer: 0
    }), $u = _r(fp), dp = ft({}, Fr, {
      relatedTarget: 0
    }), ul = _r(dp), Nh = ft({}, Vn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mh = _r(Nh), pp = ft({}, Vn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xf = _r(pp), ug = ft({}, Vn, {
      data: 0
    }), Ah = _r(ug), Uh = Ah, zh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Iu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function og(e) {
      if (e.key) {
        var t = zh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Iu[e.keyCode] || "Unidentified" : "";
    }
    var Po = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Fh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Po[e];
      return i ? !!a[i] : !1;
    }
    function mn(e) {
      return Fh;
    }
    var sg = ft({}, Fr, {
      key: og,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Wl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ph = _r(sg), cg = ft({}, di, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), jh = _r(cg), Hh = ft({}, Fr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mn
    }), Bh = _r(Hh), fg = ft({}, Vn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ba = _r(fg), vp = ft({}, di, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), dg = _r(vp), ql = [9, 13, 27, 32], Js = 229, ol = Mn && "CompositionEvent" in window, Ql = null;
    Mn && "documentMode" in document && (Ql = document.documentMode);
    var hp = Mn && "TextEvent" in window && !Ql, bf = Mn && (!ol || Ql && Ql > 8 && Ql <= 11), Vh = 32, _f = String.fromCharCode(Vh);
    function pg() {
      gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var mp = !1;
    function $h(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function kf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Df(e, t) {
      return e === "keydown" && t.keyCode === Js;
    }
    function yp(e, t) {
      switch (e) {
        case "keyup":
          return ql.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Js;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Of(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function gp(e) {
      return e.locale === "ko";
    }
    var Gl = !1;
    function Lf(e, t, a, i, u) {
      var s, p;
      if (ol ? s = kf(t) : Gl ? yp(t, i) && (s = "onCompositionEnd") : Df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bf && !gp(i) && (!Gl && s === "onCompositionStart" ? Gl = Yl(u) : s === "onCompositionEnd" && Gl && (p = ll()));
      var y = Gh(a, s);
      if (y.length > 0) {
        var S = new Ah(s, t, null, i, u);
        if (e.push({
          event: S,
          listeners: y
        }), p)
          S.data = p;
        else {
          var T = Of(i);
          T !== null && (S.data = T);
        }
      }
    }
    function Sp(e, t) {
      switch (e) {
        case "compositionend":
          return Of(t);
        case "keypress":
          var a = t.which;
          return a !== Vh ? null : (mp = !0, _f);
        case "textInput":
          var i = t.data;
          return i === _f && mp ? null : i;
        default:
          return null;
      }
    }
    function Nf(e, t) {
      if (Gl) {
        if (e === "compositionend" || !ol && yp(e, t)) {
          var a = ll();
          return wf(), Gl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!$h(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bf && !gp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ih(e, t, a, i, u) {
      var s;
      if (hp ? s = Sp(t, i) : s = Nf(t, i), !s)
        return null;
      var p = Gh(a, "onBeforeInput");
      if (p.length > 0) {
        var y = new Uh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: y,
          listeners: p
        }), y.data = s;
      }
    }
    function vg(e, t, a, i, u, s, p) {
      Lf(e, t, a, i, u), Ih(e, t, a, i, u);
    }
    var Mf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Yh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Mf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Zs(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function hg() {
      gt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function ec(e, t, a, i) {
      Co(i);
      var u = Gh(t, "onChange");
      if (u.length > 0) {
        var s = new Pi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      ec(t, r, e, Ad(e)), ah(f, t);
    }
    function f(e) {
      IC(e, 0);
    }
    function h(e) {
      var t = jf(e);
      if (xi(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    Mn && (_ = Zs("input") && (!document.documentMode || document.documentMode > 9));
    function N(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", se);
    }
    function Q() {
      n && (n.detachEvent("onpropertychange", se), n = null, r = null);
    }
    function se(e) {
      e.propertyName === "value" && h(r) && o(e);
    }
    function de(e, t, a) {
      e === "focusin" ? (Q(), N(t, a)) : e === "focusout" && Q();
    }
    function oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(r);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ae(e, t) {
      if (e === "click")
        return h(t);
    }
    function ze(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function Ln(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qe(e, "number", e.value);
    }
    function B(e, t, a, i, u, s, p) {
      var y = a ? jf(a) : window, S, T;
      if (l(y) ? S = R : Yh(y) ? _ ? S = ze : (S = oe, T = de) : _e(y) && (S = Ae), S) {
        var x = S(t, a);
        if (x) {
          ec(e, x, i, u);
          return;
        }
      }
      T && T(t, y, a), t === "focusout" && Ln(y);
    }
    function U() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function I(e, t, a, i, u, s, p) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !ms(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (rc(T) || Mp(T)))
          return;
      }
      if (!(!S && !y)) {
        var x;
        if (u.window === u)
          x = u;
        else {
          var z = u.ownerDocument;
          z ? x = z.defaultView || z.parentWindow : x = window;
        }
        var A, W;
        if (S) {
          var G = i.relatedTarget || i.toElement;
          if (A = a, W = G ? rc(G) : null, W !== null) {
            var te = ma(W);
            (W !== te || W.tag !== Y && W.tag !== j) && (W = null);
          }
        } else
          A = null, W = a;
        if (A !== W) {
          var Te = cp, Qe = "onMouseLeave", je = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Te = jh, Qe = "onPointerLeave", je = "onPointerEnter", Lt = "pointer");
          var xt = A == null ? x : jf(A), V = W == null ? x : jf(W), ne = new Te(Qe, Lt + "leave", A, i, u);
          ne.target = xt, ne.relatedTarget = V;
          var $ = null, pe = rc(u);
          if (pe === a) {
            var Oe = new Te(je, Lt + "enter", W, i, u);
            Oe.target = V, Oe.relatedTarget = xt, $ = Oe;
          }
          Xx(e, ne, $, A, W);
        }
      }
    }
    function me(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : me;
    function Ie(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!kr.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Xn(e, t) {
      for (var a = Ge(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Xi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ge(rt(a));
      }
    }
    function Bt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, p = i.focusNode, y = i.focusOffset;
      try {
        u.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return Kl(e, u, s, p, y);
    }
    function Kl(e, t, a, i, u) {
      var s = 0, p = -1, y = -1, S = 0, T = 0, x = e, z = null;
      e: for (; ; ) {
        for (var A = null; x === t && (a === 0 || x.nodeType === Xi) && (p = s + a), x === i && (u === 0 || x.nodeType === Xi) && (y = s + u), x.nodeType === Xi && (s += x.nodeValue.length), (A = x.firstChild) !== null; )
          z = x, x = A;
        for (; ; ) {
          if (x === e)
            break e;
          if (z === t && ++S === a && (p = s), z === i && ++T === u && (y = s), (A = x.nextSibling) !== null)
            break;
          x = z, z = x.parentNode;
        }
        x = A;
      }
      return p === -1 || y === -1 ? null : {
        start: p,
        end: y
      };
    }
    function mg(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, p = Math.min(t.start, s), y = t.end === void 0 ? p : Math.min(t.end, s);
        if (!u.extend && p > y) {
          var S = y;
          y = p, p = S;
        }
        var T = Xn(e, p), x = Xn(e, y);
        if (T && x) {
          if (u.rangeCount === 1 && u.anchorNode === T.node && u.anchorOffset === T.offset && u.focusNode === x.node && u.focusOffset === x.offset)
            return;
          var z = a.createRange();
          z.setStart(T.node, T.offset), u.removeAllRanges(), p > y ? (u.addRange(z), u.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset), u.addRange(z));
        }
      }
    }
    function NC(e) {
      return e && e.nodeType === Xi;
    }
    function MC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : NC(e) ? !1 : NC(t) ? MC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Mx(e) {
      return e && e.ownerDocument && MC(e.ownerDocument.documentElement, e);
    }
    function Ax(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function AC() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (Ax(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function yg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Ux() {
      var e = AC();
      return {
        focusedElem: e,
        selectionRange: yg(e) ? Fx(e) : null
      };
    }
    function zx(e) {
      var t = AC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Mx(a)) {
        i !== null && yg(a) && Px(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var p = 0; p < u.length; p++) {
          var y = u[p];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function Fx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Bt(e), t || {
        start: 0,
        end: 0
      };
    }
    function Px(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : mg(e, t);
    }
    var jx = Mn && "documentMode" in document && document.documentMode <= 11;
    function Hx() {
      gt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Af = null, gg = null, Ep = null, Sg = !1;
    function Bx(e) {
      if ("selectionStart" in e && yg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Vx(e) {
      return e.window === e ? e.document : e.nodeType === Ji ? e : e.ownerDocument;
    }
    function UC(e, t, a) {
      var i = Vx(a);
      if (!(Sg || Af == null || Af !== La(i))) {
        var u = Bx(Af);
        if (!Ep || !Ie(Ep, u)) {
          Ep = u;
          var s = Gh(gg, "onSelect");
          if (s.length > 0) {
            var p = new Pi("onSelect", "select", null, t, a);
            e.push({
              event: p,
              listeners: s
            }), p.target = Af;
          }
        }
      }
    }
    function $x(e, t, a, i, u, s, p) {
      var y = a ? jf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Yh(y) || y.contentEditable === "true") && (Af = y, gg = a, Ep = null);
          break;
        case "focusout":
          Af = null, gg = null, Ep = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sg = !1, UC(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (jx)
            break;
        // falls through
        case "keydown":
        case "keyup":
          UC(e, i, u);
      }
    }
    function Wh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Uf = {
      animationend: Wh("Animation", "AnimationEnd"),
      animationiteration: Wh("Animation", "AnimationIteration"),
      animationstart: Wh("Animation", "AnimationStart"),
      transitionend: Wh("Transition", "TransitionEnd")
    }, Eg = {}, zC = {};
    Mn && (zC = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function qh(e) {
      if (Eg[e])
        return Eg[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in zC)
          return Eg[e] = t[a];
      return e;
    }
    var FC = qh("animationend"), PC = qh("animationiteration"), jC = qh("animationstart"), HC = qh("transitionend"), BC = /* @__PURE__ */ new Map(), VC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function jo(e, t) {
      BC.set(e, t), gt(t, [e]);
    }
    function Ix() {
      for (var e = 0; e < VC.length; e++) {
        var t = VC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        jo(a, "on" + i);
      }
      jo(FC, "onAnimationEnd"), jo(PC, "onAnimationIteration"), jo(jC, "onAnimationStart"), jo("dblclick", "onDoubleClick"), jo("focusin", "onFocus"), jo("focusout", "onBlur"), jo(HC, "onTransitionEnd");
    }
    function Yx(e, t, a, i, u, s, p) {
      var y = BC.get(t);
      if (y !== void 0) {
        var S = Pi, T = t;
        switch (t) {
          case "keypress":
            if (Wl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            S = Ph;
            break;
          case "focusin":
            T = "focus", S = ul;
            break;
          case "focusout":
            T = "blur", S = ul;
            break;
          case "beforeblur":
          case "afterblur":
            S = ul;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = cp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = $u;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Bh;
            break;
          case FC:
          case PC:
          case jC:
            S = Mh;
            break;
          case HC:
            S = Ba;
            break;
          case "scroll":
            S = ia;
            break;
          case "wheel":
            S = dg;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = jh;
            break;
        }
        var x = (s & Na) !== 0;
        {
          var z = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = Gx(a, y, i.type, x, z);
          if (A.length > 0) {
            var W = new S(y, T, null, i, u);
            e.push({
              event: W,
              listeners: A
            });
          }
        }
      }
    }
    Ix(), U(), hg(), Hx(), pg();
    function Wx(e, t, a, i, u, s, p) {
      Yx(e, t, a, i, u, s);
      var y = (s & Md) === 0;
      y && (I(e, t, a, i, u), B(e, t, a, i, u), $x(e, t, a, i, u), vg(e, t, a, i, u));
    }
    var Cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Cp));
    function $C(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ki(i, t, void 0, e), e.currentTarget = null;
    }
    function qx(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], p = s.instance, y = s.currentTarget, S = s.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          $C(e, S, y), i = p;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var x = t[T], z = x.instance, A = x.currentTarget, W = x.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          $C(e, W, A), i = z;
        }
    }
    function IC(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, p = u.listeners;
        qx(s, p, a);
      }
      Ss();
    }
    function Qx(e, t, a, i, u) {
      var s = Ad(a), p = [];
      Wx(p, e, i, a, s, t), IC(p, t);
    }
    function Cn(e, t) {
      Cg.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = T1(t), u = Jx(e);
      i.has(u) || (YC(t, e, Nc, a), i.add(u));
    }
    function Rg(e, t, a) {
      Cg.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), YC(a, e, i, t);
    }
    var Qh = "_reactListening" + Math.random().toString(36).slice(2);
    function Rp(e) {
      if (!e[Qh]) {
        e[Qh] = !0, pt.forEach(function(a) {
          a !== "selectionchange" && (Cg.has(a) || Rg(a, !1, e), Rg(a, !0, e));
        });
        var t = e.nodeType === Ji ? e : e.ownerDocument;
        t !== null && (t[Qh] || (t[Qh] = !0, Rg("selectionchange", !1, t)));
      }
    }
    function YC(e, t, a, i, u) {
      var s = dr(e, t, a), p = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? sp(e, t, s, p) : aa(e, t, s) : p !== void 0 ? Uo(e, t, s, p) : Qs(e, t, s);
    }
    function WC(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function wg(e, t, a, i, u) {
      var s = i;
      if (!(t & Nd) && !(t & Nc)) {
        var p = u;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var S = y.tag;
            if (S === M || S === H) {
              var T = y.stateNode.containerInfo;
              if (WC(T, p))
                break;
              if (S === H)
                for (var x = y.return; x !== null; ) {
                  var z = x.tag;
                  if (z === M || z === H) {
                    var A = x.stateNode.containerInfo;
                    if (WC(A, p))
                      return;
                  }
                  x = x.return;
                }
              for (; T !== null; ) {
                var W = rc(T);
                if (W === null)
                  return;
                var G = W.tag;
                if (G === Y || G === j) {
                  y = s = W;
                  continue e;
                }
                T = T.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      ah(function() {
        return Qx(e, t, a, s);
      });
    }
    function wp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Gx(e, t, a, i, u, s) {
      for (var p = t !== null ? t + "Capture" : null, y = i ? p : t, S = [], T = e, x = null; T !== null; ) {
        var z = T, A = z.stateNode, W = z.tag;
        if (W === Y && A !== null && (x = A, y !== null)) {
          var G = Ml(T, y);
          G != null && S.push(wp(T, G, x));
        }
        if (u)
          break;
        T = T.return;
      }
      return S;
    }
    function Gh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, p = s.stateNode, y = s.tag;
        if (y === Y && p !== null) {
          var S = p, T = Ml(u, a);
          T != null && i.unshift(wp(u, T, S));
          var x = Ml(u, t);
          x != null && i.push(wp(u, x, S));
        }
        u = u.return;
      }
      return i;
    }
    function zf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Y);
      return e || null;
    }
    function Kx(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = zf(s))
        u++;
      for (var p = 0, y = i; y; y = zf(y))
        p++;
      for (; u - p > 0; )
        a = zf(a), u--;
      for (; p - u > 0; )
        i = zf(i), p--;
      for (var S = u; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = zf(a), i = zf(i);
      }
      return null;
    }
    function qC(e, t, a, i, u) {
      for (var s = t._reactName, p = [], y = a; y !== null && y !== i; ) {
        var S = y, T = S.alternate, x = S.stateNode, z = S.tag;
        if (T !== null && T === i)
          break;
        if (z === Y && x !== null) {
          var A = x;
          if (u) {
            var W = Ml(y, s);
            W != null && p.unshift(wp(y, W, A));
          } else if (!u) {
            var G = Ml(y, s);
            G != null && p.push(wp(y, G, A));
          }
        }
        y = y.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function Xx(e, t, a, i, u) {
      var s = i && u ? Kx(i, u) : null;
      i !== null && qC(e, t, i, s, !1), u !== null && a !== null && qC(e, a, u, s, !0);
    }
    function Jx(e, t) {
      return e + "__bubble";
    }
    var Va = !1, Tp = "dangerouslySetInnerHTML", Kh = "suppressContentEditableWarning", Ho = "suppressHydrationWarning", QC = "autoFocus", tc = "children", nc = "style", Xh = "__html", Tg, Jh, xp, GC, Zh, KC, XC;
    Tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Jh = function(e, t) {
      Dd(e, t), Oc(e, t), th(e, t, {
        registrationNameDependencies: ct,
        possibleRegistrationNames: vt
      });
    }, KC = Mn && !document.documentMode, xp = function(e, t, a) {
      if (!Va) {
        var i = em(a), u = em(t);
        u !== i && (Va = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, GC = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Zh = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, XC = function(e, t) {
      var a = e.namespaceURI === Ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Zx = /\r\n?/g, eb = /\u0000|\uFFFD/g;
    function em(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Zx, `
`).replace(eb, "");
    }
    function tm(e, t, a, i) {
      var u = em(t), s = em(e);
      if (s !== u && (i && (Va || (Va = !0, m('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Fe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function JC(e) {
      return e.nodeType === Ji ? e : e.ownerDocument;
    }
    function tb() {
    }
    function nm(e) {
      e.onclick = tb;
    }
    function nb(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var p = i[s];
          if (s === nc)
            p && Object.freeze(p), Gv(t, p);
          else if (s === Tp) {
            var y = p ? p[Xh] : void 0;
            y != null && Fv(t, y);
          } else if (s === tc)
            if (typeof p == "string") {
              var S = e !== "textarea" || p !== "";
              S && yo(t, p);
            } else typeof p == "number" && yo(t, "" + p);
          else s === Kh || s === Ho || s === QC || (ct.hasOwnProperty(s) ? p != null && (typeof p != "function" && Zh(s, p), s === "onScroll" && Cn("scroll", t)) : p != null && Dr(t, s, p, u));
        }
    }
    function rb(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], p = t[u + 1];
        s === nc ? Gv(e, p) : s === Tp ? Fv(e, p) : s === tc ? yo(e, p) : Dr(e, s, p, i);
      }
    }
    function ab(e, t, a, i) {
      var u, s = JC(a), p, y = i;
      if (y === Ki && (y = Rd(e)), y === Ki) {
        if (u = Ll(e, t), !u && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = s.createElement("div");
          S.innerHTML = "<script><\/script>";
          var T = S.firstChild;
          p = S.removeChild(T);
        } else if (typeof t.is == "string")
          p = s.createElement(e, {
            is: t.is
          });
        else if (p = s.createElement(e), e === "select") {
          var x = p;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        p = s.createElementNS(y, e);
      return y === Ki && !u && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !kr.call(Tg, e) && (Tg[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function ib(e, t) {
      return JC(t).createTextNode(e);
    }
    function lb(e, t, a, i) {
      var u = Ll(t, a);
      Jh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < Cp.length; p++)
            Cn(Cp[p], e);
          s = a;
          break;
        case "source":
          Cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), s = a;
          break;
        case "details":
          Cn("toggle", e), s = a;
          break;
        case "input":
          ii(e, a), s = mo(e, a), Cn("invalid", e);
          break;
        case "option":
          Mt(e, a), s = a;
          break;
        case "select":
          Su(e, a), s = ss(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Sd(e, a), s = gd(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (kc(t, s), nb(t, e, i, s, u), t) {
        case "input":
          ai(e), q(e, a, !1);
          break;
        case "textarea":
          ai(e), Uv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          md(e, a);
          break;
        default:
          typeof s.onClick == "function" && nm(e);
          break;
      }
    }
    function ub(e, t, a, i, u) {
      Jh(t, i);
      var s = null, p, y;
      switch (t) {
        case "input":
          p = mo(e, a), y = mo(e, i), s = [];
          break;
        case "select":
          p = ss(e, a), y = ss(e, i), s = [];
          break;
        case "textarea":
          p = gd(e, a), y = gd(e, i), s = [];
          break;
        default:
          p = a, y = i, typeof p.onClick != "function" && typeof y.onClick == "function" && nm(e);
          break;
      }
      kc(t, y);
      var S, T, x = null;
      for (S in p)
        if (!(y.hasOwnProperty(S) || !p.hasOwnProperty(S) || p[S] == null))
          if (S === nc) {
            var z = p[S];
            for (T in z)
              z.hasOwnProperty(T) && (x || (x = {}), x[T] = "");
          } else S === Tp || S === tc || S === Kh || S === Ho || S === QC || (ct.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in y) {
        var A = y[S], W = p != null ? p[S] : void 0;
        if (!(!y.hasOwnProperty(S) || A === W || A == null && W == null))
          if (S === nc)
            if (A && Object.freeze(A), W) {
              for (T in W)
                W.hasOwnProperty(T) && (!A || !A.hasOwnProperty(T)) && (x || (x = {}), x[T] = "");
              for (T in A)
                A.hasOwnProperty(T) && W[T] !== A[T] && (x || (x = {}), x[T] = A[T]);
            } else
              x || (s || (s = []), s.push(S, x)), x = A;
          else if (S === Tp) {
            var G = A ? A[Xh] : void 0, te = W ? W[Xh] : void 0;
            G != null && te !== G && (s = s || []).push(S, G);
          } else S === tc ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(S, "" + A) : S === Kh || S === Ho || (ct.hasOwnProperty(S) ? (A != null && (typeof A != "function" && Zh(S, A), S === "onScroll" && Cn("scroll", e)), !s && W !== A && (s = [])) : (s = s || []).push(S, A));
      }
      return x && (Ky(x, y[nc]), (s = s || []).push(nc, x)), s;
    }
    function ob(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && C(e, u);
      var s = Ll(a, i), p = Ll(a, u);
      switch (rb(e, t, s, p), a) {
        case "input":
          D(e, u);
          break;
        case "textarea":
          Av(e, u);
          break;
        case "select":
          xc(e, u);
          break;
      }
    }
    function sb(e) {
      {
        var t = e.toLowerCase();
        return vs.hasOwnProperty(t) && vs[t] || null;
      }
    }
    function cb(e, t, a, i, u, s, p) {
      var y, S;
      switch (y = Ll(t, a), Jh(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < Cp.length; T++)
            Cn(Cp[T], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          ii(e, a), Cn("invalid", e);
          break;
        case "option":
          Mt(e, a);
          break;
        case "select":
          Su(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Sd(e, a), Cn("invalid", e);
          break;
      }
      kc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var x = e.attributes, z = 0; z < x.length; z++) {
          var A = x[z].name.toLowerCase();
          switch (A) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(x[z].name);
          }
        }
      }
      var W = null;
      for (var G in a)
        if (a.hasOwnProperty(G)) {
          var te = a[G];
          if (G === tc)
            typeof te == "string" ? e.textContent !== te && (a[Ho] !== !0 && tm(e.textContent, te, s, p), W = [tc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Ho] !== !0 && tm(e.textContent, te, s, p), W = [tc, "" + te]);
          else if (ct.hasOwnProperty(G))
            te != null && (typeof te != "function" && Zh(G, te), G === "onScroll" && Cn("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Te = void 0, Qe = un(G);
            if (a[Ho] !== !0) {
              if (!(G === Kh || G === Ho || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              G === "value" || G === "checked" || G === "selected")) {
                if (G === Tp) {
                  var je = e.innerHTML, Lt = te ? te[Xh] : void 0;
                  if (Lt != null) {
                    var xt = XC(e, Lt);
                    xt !== je && xp(G, je, xt);
                  }
                } else if (G === nc) {
                  if (S.delete(G), KC) {
                    var V = Qy(te);
                    Te = e.getAttribute("style"), V !== Te && xp(G, Te, V);
                  }
                } else if (y)
                  S.delete(G.toLowerCase()), Te = du(e, G, te), te !== Te && xp(G, Te, te);
                else if (!yn(G, Qe, y) && !er(G, te, Qe, y)) {
                  var ne = !1;
                  if (Qe !== null)
                    S.delete(Qe.attributeName), Te = Rl(e, G, te, Qe);
                  else {
                    var $ = i;
                    if ($ === Ki && ($ = Rd(t)), $ === Ki)
                      S.delete(G.toLowerCase());
                    else {
                      var pe = sb(G);
                      pe !== null && pe !== G && (ne = !0, S.delete(pe)), S.delete(G);
                    }
                    Te = du(e, G, te);
                  }
                  var Oe = P;
                  !Oe && te !== Te && !ne && xp(G, Te, te);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Ho] !== !0 && GC(S), t) {
        case "input":
          ai(e), q(e, a, !0);
          break;
        case "textarea":
          ai(e), Uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && nm(e);
          break;
      }
      return W;
    }
    function fb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xg(e, t) {
      {
        if (Va)
          return;
        Va = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (Va)
          return;
        Va = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function kg(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function db(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          Iy(e, a);
          return;
        case "select":
          yd(e, a);
          return;
      }
    }
    var bp = function() {
    }, _p = function() {
    };
    {
      var pb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ZC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], vb = ZC.concat(["button"]), hb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eR = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      _p = function(e, t) {
        var a = ft({}, e || eR), i = {
          tag: t
        };
        return ZC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), vb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), pb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var mb = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return hb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, yb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, tR = {};
      bp = function(e, t, a) {
        a = a || eR;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = mb(e, u) ? null : i, p = s ? null : yb(e, a), y = s || p;
        if (y) {
          var S = y.tag, T = !!s + "|" + e + "|" + S;
          if (!tR[T]) {
            tR[T] = !0;
            var x = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var A = "";
              S === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, S, z, A);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, S);
          }
        }
      };
    }
    var rm = "suppressHydrationWarning", am = "$", im = "/$", kp = "$?", Dp = "$!", gb = "style", Dg = null, Og = null;
    function Sb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ji:
        case Td: {
          t = i === Ji ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : wd(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, p = s.namespaceURI || null;
          t = s.tagName, a = wd(p, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = _p(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function Eb(e, t, a) {
      {
        var i = e, u = wd(i.namespace, t), s = _p(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function UM(e) {
      return e;
    }
    function Cb(e) {
      Dg = Bn(), Og = Ux();
      var t = null;
      return Kn(!1), t;
    }
    function Rb(e) {
      zx(Og), Kn(Dg), Dg = null, Og = null;
    }
    function wb(e, t, a, i, u) {
      var s;
      {
        var p = i;
        if (bp(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = _p(p.ancestorInfo, e);
          bp(null, y, S);
        }
        s = p.namespace;
      }
      var T = ab(e, t, a, s);
      return Np(u, T), Pg(T, t), T;
    }
    function Tb(e, t) {
      e.appendChild(t);
    }
    function xb(e, t, a, i, u) {
      switch (lb(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function bb(e, t, a, i, u, s) {
      {
        var p = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, S = _p(p.ancestorInfo, t);
          bp(null, y, S);
        }
      }
      return ub(e, t, a, i);
    }
    function Lg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _b(e, t, a, i) {
      {
        var u = a;
        bp(null, e, u.ancestorInfo);
      }
      var s = ib(e, t);
      return Np(i, s), s;
    }
    function kb() {
      var e = window.event;
      return e === void 0 ? Pa : Rf(e.type);
    }
    var Ng = typeof setTimeout == "function" ? setTimeout : void 0, Db = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = -1, nR = typeof Promise == "function" ? Promise : void 0, Ob = typeof queueMicrotask == "function" ? queueMicrotask : typeof nR < "u" ? function(e) {
      return nR.resolve(null).then(e).catch(Lb);
    } : Ng;
    function Lb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Nb(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Mb(e, t, a, i, u, s) {
      ob(e, t, a, i, u), Pg(e, u);
    }
    function rR(e) {
      yo(e, "");
    }
    function Ab(e, t, a) {
      e.nodeValue = a;
    }
    function Ub(e, t) {
      e.appendChild(t);
    }
    function zb(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && nm(a);
    }
    function Fb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Pb(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function jb(e, t) {
      e.removeChild(t);
    }
    function Hb(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ag(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === im)
            if (i === 0) {
              e.removeChild(u), Hu(t);
              return;
            } else
              i--;
          else (s === am || s === kp || s === Dp) && i++;
        }
        a = u;
      } while (a);
      Hu(t);
    }
    function Bb(e, t) {
      e.nodeType === Un ? Ag(e.parentNode, t) : e.nodeType === Gr && Ag(e, t), Hu(e);
    }
    function Vb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function $b(e) {
      e.nodeValue = "";
    }
    function Ib(e, t) {
      e = e;
      var a = t[gb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = _c("display", i);
    }
    function Yb(e, t) {
      e.nodeValue = t;
    }
    function Wb(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Ji && e.documentElement && e.removeChild(e.documentElement);
    }
    function qb(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Qb(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function Gb(e) {
      return e.nodeType !== Un ? null : e;
    }
    function aR(e) {
      return e.data === kp;
    }
    function Ug(e) {
      return e.data === Dp;
    }
    function Kb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Xb(e, t) {
      e._reactRetry = t;
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Xi)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === am || a === Dp || a === kp)
            break;
          if (a === im)
            return null;
        }
      }
      return e;
    }
    function Op(e) {
      return lm(e.nextSibling);
    }
    function Jb(e) {
      return lm(e.firstChild);
    }
    function Zb(e) {
      return lm(e.firstChild);
    }
    function e1(e) {
      return lm(e.nextSibling);
    }
    function t1(e, t, a, i, u, s, p) {
      Np(s, e), Pg(e, a);
      var y;
      {
        var S = u;
        y = S.namespace;
      }
      var T = (s.mode & Et) !== $e;
      return cb(e, t, a, y, i, T, p);
    }
    function n1(e, t, a, i) {
      return Np(a, e), a.mode & Et, fb(e, t);
    }
    function r1(e, t) {
      Np(t, e);
    }
    function a1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === im) {
            if (a === 0)
              return Op(t);
            a--;
          } else (i === am || i === Dp || i === kp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function iR(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === am || i === Dp || i === kp) {
            if (a === 0)
              return t;
            a--;
          } else i === im && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function i1(e) {
      Hu(e);
    }
    function l1(e) {
      Hu(e);
    }
    function u1(e) {
      return e !== "head" && e !== "body";
    }
    function o1(e, t, a, i) {
      var u = !0;
      tm(t.nodeValue, a, i, u);
    }
    function s1(e, t, a, i, u, s) {
      if (t[rm] !== !0) {
        var p = !0;
        tm(i.nodeValue, u, s, p);
      }
    }
    function c1(e, t) {
      t.nodeType === Gr ? xg(e, t) : t.nodeType === Un || bg(e, t);
    }
    function f1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? xg(a, t) : t.nodeType === Un || bg(a, t));
      }
    }
    function d1(e, t, a, i, u) {
      (u || t[rm] !== !0) && (i.nodeType === Gr ? xg(a, i) : i.nodeType === Un || bg(a, i));
    }
    function p1(e, t, a) {
      _g(e, t);
    }
    function v1(e, t) {
      kg(e, t);
    }
    function h1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && _g(i, t);
      }
    }
    function m1(e, t) {
      {
        var a = e.parentNode;
        a !== null && kg(a, t);
      }
    }
    function y1(e, t, a, i, u, s) {
      (s || t[rm] !== !0) && _g(a, i);
    }
    function g1(e, t, a, i, u) {
      (u || t[rm] !== !0) && kg(a, i);
    }
    function S1(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function E1(e) {
      Rp(e);
    }
    var Ff = Math.random().toString(36).slice(2), Pf = "__reactFiber$" + Ff, zg = "__reactProps$" + Ff, Lp = "__reactContainer$" + Ff, Fg = "__reactEvents$" + Ff, C1 = "__reactListeners$" + Ff, R1 = "__reactHandles$" + Ff;
    function w1(e) {
      delete e[Pf], delete e[zg], delete e[Fg], delete e[C1], delete e[R1];
    }
    function Np(e, t) {
      t[Pf] = e;
    }
    function um(e, t) {
      t[Lp] = e;
    }
    function lR(e) {
      e[Lp] = null;
    }
    function Mp(e) {
      return !!e[Lp];
    }
    function rc(e) {
      var t = e[Pf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Lp] || a[Pf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = iR(e); u !== null; ) {
              var s = u[Pf];
              if (s)
                return s;
              u = iR(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bo(e) {
      var t = e[Pf] || e[Lp];
      return t && (t.tag === Y || t.tag === j || t.tag === he || t.tag === M) ? t : null;
    }
    function jf(e) {
      if (e.tag === Y || e.tag === j)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function om(e) {
      return e[zg] || null;
    }
    function Pg(e, t) {
      e[zg] = t;
    }
    function T1(e) {
      var t = e[Fg];
      return t === void 0 && (t = e[Fg] = /* @__PURE__ */ new Set()), t;
    }
    var uR = {}, oR = v.ReactDebugCurrentFrame;
    function sm(e) {
      if (e) {
        var t = e._owner, a = qi(e.type, e._source, t ? t.type : null);
        oR.setExtraStackFrame(a);
      } else
        oR.setExtraStackFrame(null);
    }
    function sl(e, t, a, i, u) {
      {
        var s = Function.call.bind(kr);
        for (var p in e)
          if (s(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[p](t, p, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              y = T;
            }
            y && !(y instanceof Error) && (sm(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof y), sm(null)), y instanceof Error && !(y.message in uR) && (uR[y.message] = !0, sm(u), m("Failed %s type: %s", a, y.message), sm(null));
          }
      }
    }
    var jg = [], cm;
    cm = [];
    var Yu = -1;
    function Vo(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Yu < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== cm[Yu] && m("Unexpected Fiber popped."), e.current = jg[Yu], jg[Yu] = null, cm[Yu] = null, Yu--;
    }
    function ua(e, t, a) {
      Yu++, jg[Yu] = e.current, cm[Yu] = a, e.current = t;
    }
    var Hg;
    Hg = {};
    var pi = {};
    Object.freeze(pi);
    var Wu = Vo(pi), Xl = Vo(!1), Bg = pi;
    function Hf(e, t, a) {
      return a && Jl(t) ? Bg : Wu.current;
    }
    function sR(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var p in i)
          s[p] = t[p];
        {
          var y = nt(e) || "Unknown";
          sl(i, s, "context", y);
        }
        return u && sR(e, t, s), s;
      }
    }
    function fm() {
      return Xl.current;
    }
    function Jl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function dm(e) {
      la(Xl, e), la(Wu, e);
    }
    function Vg(e) {
      la(Xl, e), la(Wu, e);
    }
    function cR(e, t, a) {
      {
        if (Wu.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Wu, t, e), ua(Xl, a, e);
      }
    }
    function fR(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = nt(e) || "Unknown";
            Hg[s] || (Hg[s] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var y in p)
          if (!(y in u))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = nt(e) || "Unknown";
          sl(u, p, "child context", S);
        }
        return ft({}, a, p);
      }
    }
    function pm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Bg = Wu.current, ua(Wu, a, e), ua(Xl, Xl.current, e), !0;
      }
    }
    function dR(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fR(e, t, Bg);
          i.__reactInternalMemoizedMergedChildContext = u, la(Xl, e), la(Wu, e), ua(Wu, u, e), ua(Xl, a, e);
        } else
          la(Xl, e), ua(Xl, a, e);
      }
    }
    function x1(e) {
      {
        if (!bu(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (Jl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var $o = 0, vm = 1, qu = null, $g = !1, Ig = !1;
    function pR(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    function b1(e) {
      $g = !0, pR(e);
    }
    function vR() {
      $g && Io();
    }
    function Io() {
      if (!Ig && qu !== null) {
        Ig = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = qu;
          for (Hn(Ar); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          qu = null, $g = !1;
        } catch (s) {
          throw qu !== null && (qu = qu.slice(e + 1)), zd(Rs, Io), s;
        } finally {
          Hn(t), Ig = !1;
        }
      }
      return null;
    }
    var Vf = [], $f = 0, hm = null, mm = 0, ji = [], Hi = 0, ac = null, Qu = 1, Gu = "";
    function _1(e) {
      return lc(), (e.flags & Di) !== Ve;
    }
    function k1(e) {
      return lc(), mm;
    }
    function D1() {
      var e = Gu, t = Qu, a = t & ~O1(t);
      return a.toString(32) + e;
    }
    function ic(e, t) {
      lc(), Vf[$f++] = mm, Vf[$f++] = hm, hm = e, mm = t;
    }
    function hR(e, t, a) {
      lc(), ji[Hi++] = Qu, ji[Hi++] = Gu, ji[Hi++] = ac, ac = e;
      var i = Qu, u = Gu, s = ym(i) - 1, p = i & ~(1 << s), y = a + 1, S = ym(t) + s;
      if (S > 30) {
        var T = s - s % 5, x = (1 << T) - 1, z = (p & x).toString(32), A = p >> T, W = s - T, G = ym(t) + W, te = y << W, Te = te | A, Qe = z + u;
        Qu = 1 << G | Te, Gu = Qe;
      } else {
        var je = y << s, Lt = je | p, xt = u;
        Qu = 1 << S | Lt, Gu = xt;
      }
    }
    function Yg(e) {
      lc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ic(e, a), hR(e, a, i);
      }
    }
    function ym(e) {
      return 32 - Pn(e);
    }
    function O1(e) {
      return 1 << ym(e) - 1;
    }
    function Wg(e) {
      for (; e === hm; )
        hm = Vf[--$f], Vf[$f] = null, mm = Vf[--$f], Vf[$f] = null;
      for (; e === ac; )
        ac = ji[--Hi], ji[Hi] = null, Gu = ji[--Hi], ji[Hi] = null, Qu = ji[--Hi], ji[Hi] = null;
    }
    function L1() {
      return lc(), ac !== null ? {
        id: Qu,
        overflow: Gu
      } : null;
    }
    function N1(e, t) {
      lc(), ji[Hi++] = Qu, ji[Hi++] = Gu, ji[Hi++] = ac, Qu = t.id, Gu = t.overflow, ac = e;
    }
    function lc() {
      jr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Bi = null, cl = !1, uc = !1, Yo = null;
    function M1() {
      cl && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mR() {
      uc = !0;
    }
    function A1() {
      return uc;
    }
    function U1(e) {
      var t = e.stateNode.containerInfo;
      return Bi = Zb(t), Pr = e, cl = !0, Yo = null, uc = !1, !0;
    }
    function z1(e, t, a) {
      return Bi = e1(t), Pr = e, cl = !0, Yo = null, uc = !1, a !== null && N1(e, a), !0;
    }
    function yR(e, t) {
      switch (e.tag) {
        case M: {
          c1(e.stateNode.containerInfo, t);
          break;
        }
        case Y: {
          var a = (e.mode & Et) !== $e;
          d1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case he: {
          var i = e.memoizedState;
          i.dehydrated !== null && f1(i.dehydrated, t);
          break;
        }
      }
    }
    function gR(e, t) {
      yR(e, t);
      var a = HD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function qg(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case M: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Y:
                var i = t.type;
                t.pendingProps, p1(a, i);
                break;
              case j:
                var u = t.pendingProps;
                v1(a, u);
                break;
            }
            break;
          }
          case Y: {
            var s = e.type, p = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case Y: {
                var S = t.type, T = t.pendingProps, x = (e.mode & Et) !== $e;
                y1(
                  s,
                  p,
                  y,
                  S,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case j: {
                var z = t.pendingProps, A = (e.mode & Et) !== $e;
                g1(
                  s,
                  p,
                  y,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
            }
            break;
          }
          case he: {
            var W = e.memoizedState, G = W.dehydrated;
            if (G !== null) switch (t.tag) {
              case Y:
                var te = t.type;
                t.pendingProps, h1(G, te);
                break;
              case j:
                var Te = t.pendingProps;
                m1(G, Te);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function SR(e, t) {
      t.flags = t.flags & -4097 | bn, qg(e, t);
    }
    function ER(e, t) {
      switch (e.tag) {
        case Y: {
          var a = e.type;
          e.pendingProps;
          var i = qb(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Bi = Jb(i), !0) : !1;
        }
        case j: {
          var u = e.pendingProps, s = Qb(t, u);
          return s !== null ? (e.stateNode = s, Pr = e, Bi = null, !0) : !1;
        }
        case he: {
          var p = Gb(t);
          if (p !== null) {
            var y = {
              dehydrated: p,
              treeContext: L1(),
              retryLane: Ea
            };
            e.memoizedState = y;
            var S = BD(p);
            return S.return = e, e.child = S, Pr = e, Bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Qg(e) {
      return (e.mode & Et) !== $e && (e.flags & Be) === Ve;
    }
    function Gg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Kg(e) {
      if (cl) {
        var t = Bi;
        if (!t) {
          Qg(e) && (qg(Pr, e), Gg()), SR(Pr, e), cl = !1, Pr = e;
          return;
        }
        var a = t;
        if (!ER(e, t)) {
          Qg(e) && (qg(Pr, e), Gg()), t = Op(a);
          var i = Pr;
          if (!t || !ER(e, t)) {
            SR(Pr, e), cl = !1, Pr = e;
            return;
          }
          gR(i, a);
        }
      }
    }
    function F1(e, t, a) {
      var i = e.stateNode, u = !uc, s = t1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function P1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = n1(t, a, e);
      if (i) {
        var u = Pr;
        if (u !== null)
          switch (u.tag) {
            case M: {
              var s = u.stateNode.containerInfo, p = (u.mode & Et) !== $e;
              o1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case Y: {
              var y = u.type, S = u.memoizedProps, T = u.stateNode, x = (u.mode & Et) !== $e;
              s1(
                y,
                S,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function j1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      r1(a, e);
    }
    function H1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return a1(a);
    }
    function CR(e) {
      for (var t = e.return; t !== null && t.tag !== Y && t.tag !== M && t.tag !== he; )
        t = t.return;
      Pr = t;
    }
    function gm(e) {
      if (e !== Pr)
        return !1;
      if (!cl)
        return CR(e), cl = !0, !1;
      if (e.tag !== M && (e.tag !== Y || u1(e.type) && !Lg(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (Qg(e))
            RR(e), Gg();
          else
            for (; t; )
              gR(e, t), t = Op(t);
      }
      return CR(e), e.tag === he ? Bi = H1(e) : Bi = Pr ? Op(e.stateNode) : null, !0;
    }
    function B1() {
      return cl && Bi !== null;
    }
    function RR(e) {
      for (var t = Bi; t; )
        yR(e, t), t = Op(t);
    }
    function If() {
      Pr = null, Bi = null, cl = !1, uc = !1;
    }
    function wR() {
      Yo !== null && (mw(Yo), Yo = null);
    }
    function jr() {
      return cl;
    }
    function Xg(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    var V1 = v.ReactCurrentBatchConfig, $1 = null;
    function I1() {
      return V1.transition;
    }
    var fl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Y1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, oc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ap = [], Up = [], zp = [], Fp = [], Pp = [], jp = [], sc = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && Up.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && jp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(A) {
          e.add(nt(A) || "Component"), sc.add(A.type);
        }), Ap = []);
        var t = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(A) {
          t.add(nt(A) || "Component"), sc.add(A.type);
        }), Up = []);
        var a = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(A) {
          a.add(nt(A) || "Component"), sc.add(A.type);
        }), zp = []);
        var i = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(A) {
          i.add(nt(A) || "Component"), sc.add(A.type);
        }), Fp = []);
        var u = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(A) {
          u.add(nt(A) || "Component"), sc.add(A.type);
        }), Pp = []);
        var s = /* @__PURE__ */ new Set();
        if (jp.length > 0 && (jp.forEach(function(A) {
          s.add(nt(A) || "Component"), sc.add(A.type);
        }), jp = []), t.size > 0) {
          var p = oc(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var y = oc(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var S = oc(s);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var T = oc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var x = oc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (u.size > 0) {
          var z = oc(u);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var Sm = /* @__PURE__ */ new Map(), TR = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var a = Y1(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!TR.has(e.type)) {
          var i = Sm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Sm.set(a, i)), i.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        Sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(nt(s) || "Component"), TR.add(s.type);
            });
            var u = oc(i);
            try {
              Jt(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              pn();
            }
          }
        });
      }, fl.discardPendingWarnings = function() {
        Ap = [], Up = [], zp = [], Fp = [], Pp = [], jp = [], Sm = /* @__PURE__ */ new Map();
      };
    }
    var Jg, Zg, eS, tS, nS, xR = function(e, t) {
    };
    Jg = !1, Zg = !1, eS = {}, tS = {}, nS = {}, xR = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = nt(t) || "Component";
        tS[a] || (tS[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function W1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tn || re) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !W1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = nt(e) || "Component";
          eS[u] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), eS[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, p;
          if (s) {
            var y = s;
            if (y.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = y.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = p;
          yi(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var x = function(z) {
            var A = S.refs;
            z === null ? delete A[T] : A[T] = z;
          };
          return x._stringRef = T, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Em(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Cm(e) {
      {
        var t = nt(e) || "Component";
        if (nS[t])
          return;
        nS[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bR(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function _R(e) {
      function t(V, ne) {
        if (e) {
          var $ = V.deletions;
          $ === null ? (V.deletions = [ne], V.flags |= Ma) : $.push(ne);
        }
      }
      function a(V, ne) {
        if (!e)
          return null;
        for (var $ = ne; $ !== null; )
          t(V, $), $ = $.sibling;
        return null;
      }
      function i(V, ne) {
        for (var $ = /* @__PURE__ */ new Map(), pe = ne; pe !== null; )
          pe.key !== null ? $.set(pe.key, pe) : $.set(pe.index, pe), pe = pe.sibling;
        return $;
      }
      function u(V, ne) {
        var $ = gc(V, ne);
        return $.index = 0, $.sibling = null, $;
      }
      function s(V, ne, $) {
        if (V.index = $, !e)
          return V.flags |= Di, ne;
        var pe = V.alternate;
        if (pe !== null) {
          var Oe = pe.index;
          return Oe < ne ? (V.flags |= bn, ne) : Oe;
        } else
          return V.flags |= bn, ne;
      }
      function p(V) {
        return e && V.alternate === null && (V.flags |= bn), V;
      }
      function y(V, ne, $, pe) {
        if (ne === null || ne.tag !== j) {
          var Oe = XE($, V.mode, pe);
          return Oe.return = V, Oe;
        } else {
          var be = u(ne, $);
          return be.return = V, be;
        }
      }
      function S(V, ne, $, pe) {
        var Oe = $.type;
        if (Oe === Si)
          return x(V, ne, $.props.children, pe, $.key);
        if (ne !== null && (ne.elementType === Oe || // Keep this check inline so it only runs on the false path:
        Nw(ne, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === at && bR(Oe) === ne.type)) {
          var be = u(ne, $.props);
          return be.ref = Hp(V, ne, $), be.return = V, be._debugSource = $._source, be._debugOwner = $._owner, be;
        }
        var et = KE($, V.mode, pe);
        return et.ref = Hp(V, ne, $), et.return = V, et;
      }
      function T(V, ne, $, pe) {
        if (ne === null || ne.tag !== H || ne.stateNode.containerInfo !== $.containerInfo || ne.stateNode.implementation !== $.implementation) {
          var Oe = JE($, V.mode, pe);
          return Oe.return = V, Oe;
        } else {
          var be = u(ne, $.children || []);
          return be.return = V, be;
        }
      }
      function x(V, ne, $, pe, Oe) {
        if (ne === null || ne.tag !== X) {
          var be = ns($, V.mode, pe, Oe);
          return be.return = V, be;
        } else {
          var et = u(ne, $);
          return et.return = V, et;
        }
      }
      function z(V, ne, $) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var pe = XE("" + ne, V.mode, $);
          return pe.return = V, pe;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Or: {
              var Oe = KE(ne, V.mode, $);
              return Oe.ref = Hp(V, null, ne), Oe.return = V, Oe;
            }
            case lr: {
              var be = JE(ne, V.mode, $);
              return be.return = V, be;
            }
            case at: {
              var et = ne._payload, lt = ne._init;
              return z(V, lt(et), $);
            }
          }
          if (mt(ne) || ot(ne)) {
            var rn = ns(ne, V.mode, $, null);
            return rn.return = V, rn;
          }
          Em(V, ne);
        }
        return typeof ne == "function" && Cm(V), null;
      }
      function A(V, ne, $, pe) {
        var Oe = ne !== null ? ne.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Oe !== null ? null : y(V, ne, "" + $, pe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Or:
              return $.key === Oe ? S(V, ne, $, pe) : null;
            case lr:
              return $.key === Oe ? T(V, ne, $, pe) : null;
            case at: {
              var be = $._payload, et = $._init;
              return A(V, ne, et(be), pe);
            }
          }
          if (mt($) || ot($))
            return Oe !== null ? null : x(V, ne, $, pe, null);
          Em(V, $);
        }
        return typeof $ == "function" && Cm(V), null;
      }
      function W(V, ne, $, pe, Oe) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var be = V.get($) || null;
          return y(ne, be, "" + pe, Oe);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Or: {
              var et = V.get(pe.key === null ? $ : pe.key) || null;
              return S(ne, et, pe, Oe);
            }
            case lr: {
              var lt = V.get(pe.key === null ? $ : pe.key) || null;
              return T(ne, lt, pe, Oe);
            }
            case at:
              var rn = pe._payload, Vt = pe._init;
              return W(V, ne, $, Vt(rn), Oe);
          }
          if (mt(pe) || ot(pe)) {
            var Jn = V.get($) || null;
            return x(ne, Jn, pe, Oe, null);
          }
          Em(ne, pe);
        }
        return typeof pe == "function" && Cm(ne), null;
      }
      function G(V, ne, $) {
        {
          if (typeof V != "object" || V === null)
            return ne;
          switch (V.$$typeof) {
            case Or:
            case lr:
              xR(V, $);
              var pe = V.key;
              if (typeof pe != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(pe);
                break;
              }
              if (!ne.has(pe)) {
                ne.add(pe);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case at:
              var Oe = V._payload, be = V._init;
              G(be(Oe), ne, $);
              break;
          }
        }
        return ne;
      }
      function te(V, ne, $, pe) {
        for (var Oe = null, be = 0; be < $.length; be++) {
          var et = $[be];
          Oe = G(et, Oe, V);
        }
        for (var lt = null, rn = null, Vt = ne, Jn = 0, $t = 0, $n = null; Vt !== null && $t < $.length; $t++) {
          Vt.index > $t ? ($n = Vt, Vt = null) : $n = Vt.sibling;
          var sa = A(V, Vt, $[$t], pe);
          if (sa === null) {
            Vt === null && (Vt = $n);
            break;
          }
          e && Vt && sa.alternate === null && t(V, Vt), Jn = s(sa, Jn, $t), rn === null ? lt = sa : rn.sibling = sa, rn = sa, Vt = $n;
        }
        if ($t === $.length) {
          if (a(V, Vt), jr()) {
            var Wr = $t;
            ic(V, Wr);
          }
          return lt;
        }
        if (Vt === null) {
          for (; $t < $.length; $t++) {
            var hi = z(V, $[$t], pe);
            hi !== null && (Jn = s(hi, Jn, $t), rn === null ? lt = hi : rn.sibling = hi, rn = hi);
          }
          if (jr()) {
            var ba = $t;
            ic(V, ba);
          }
          return lt;
        }
        for (var _a = i(V, Vt); $t < $.length; $t++) {
          var ca = W(_a, V, $t, $[$t], pe);
          ca !== null && (e && ca.alternate !== null && _a.delete(ca.key === null ? $t : ca.key), Jn = s(ca, Jn, $t), rn === null ? lt = ca : rn.sibling = ca, rn = ca);
        }
        if (e && _a.forEach(function(sd) {
          return t(V, sd);
        }), jr()) {
          var no = $t;
          ic(V, no);
        }
        return lt;
      }
      function Te(V, ne, $, pe) {
        var Oe = ot($);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (Zg || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zg = !0), $.entries === Oe && (Jg || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jg = !0);
          var be = Oe.call($);
          if (be)
            for (var et = null, lt = be.next(); !lt.done; lt = be.next()) {
              var rn = lt.value;
              et = G(rn, et, V);
            }
        }
        var Vt = Oe.call($);
        if (Vt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, $n = ne, sa = 0, Wr = 0, hi = null, ba = Vt.next(); $n !== null && !ba.done; Wr++, ba = Vt.next()) {
          $n.index > Wr ? (hi = $n, $n = null) : hi = $n.sibling;
          var _a = A(V, $n, ba.value, pe);
          if (_a === null) {
            $n === null && ($n = hi);
            break;
          }
          e && $n && _a.alternate === null && t(V, $n), sa = s(_a, sa, Wr), $t === null ? Jn = _a : $t.sibling = _a, $t = _a, $n = hi;
        }
        if (ba.done) {
          if (a(V, $n), jr()) {
            var ca = Wr;
            ic(V, ca);
          }
          return Jn;
        }
        if ($n === null) {
          for (; !ba.done; Wr++, ba = Vt.next()) {
            var no = z(V, ba.value, pe);
            no !== null && (sa = s(no, sa, Wr), $t === null ? Jn = no : $t.sibling = no, $t = no);
          }
          if (jr()) {
            var sd = Wr;
            ic(V, sd);
          }
          return Jn;
        }
        for (var gv = i(V, $n); !ba.done; Wr++, ba = Vt.next()) {
          var lu = W(gv, V, Wr, ba.value, pe);
          lu !== null && (e && lu.alternate !== null && gv.delete(lu.key === null ? Wr : lu.key), sa = s(lu, sa, Wr), $t === null ? Jn = lu : $t.sibling = lu, $t = lu);
        }
        if (e && gv.forEach(function(gO) {
          return t(V, gO);
        }), jr()) {
          var yO = Wr;
          ic(V, yO);
        }
        return Jn;
      }
      function Qe(V, ne, $, pe) {
        if (ne !== null && ne.tag === j) {
          a(V, ne.sibling);
          var Oe = u(ne, $);
          return Oe.return = V, Oe;
        }
        a(V, ne);
        var be = XE($, V.mode, pe);
        return be.return = V, be;
      }
      function je(V, ne, $, pe) {
        for (var Oe = $.key, be = ne; be !== null; ) {
          if (be.key === Oe) {
            var et = $.type;
            if (et === Si) {
              if (be.tag === X) {
                a(V, be.sibling);
                var lt = u(be, $.props.children);
                return lt.return = V, lt._debugSource = $._source, lt._debugOwner = $._owner, lt;
              }
            } else if (be.elementType === et || // Keep this check inline so it only runs on the false path:
            Nw(be, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === at && bR(et) === be.type) {
              a(V, be.sibling);
              var rn = u(be, $.props);
              return rn.ref = Hp(V, be, $), rn.return = V, rn._debugSource = $._source, rn._debugOwner = $._owner, rn;
            }
            a(V, be);
            break;
          } else
            t(V, be);
          be = be.sibling;
        }
        if ($.type === Si) {
          var Vt = ns($.props.children, V.mode, pe, $.key);
          return Vt.return = V, Vt;
        } else {
          var Jn = KE($, V.mode, pe);
          return Jn.ref = Hp(V, ne, $), Jn.return = V, Jn;
        }
      }
      function Lt(V, ne, $, pe) {
        for (var Oe = $.key, be = ne; be !== null; ) {
          if (be.key === Oe)
            if (be.tag === H && be.stateNode.containerInfo === $.containerInfo && be.stateNode.implementation === $.implementation) {
              a(V, be.sibling);
              var et = u(be, $.children || []);
              return et.return = V, et;
            } else {
              a(V, be);
              break;
            }
          else
            t(V, be);
          be = be.sibling;
        }
        var lt = JE($, V.mode, pe);
        return lt.return = V, lt;
      }
      function xt(V, ne, $, pe) {
        var Oe = typeof $ == "object" && $ !== null && $.type === Si && $.key === null;
        if (Oe && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Or:
              return p(je(V, ne, $, pe));
            case lr:
              return p(Lt(V, ne, $, pe));
            case at:
              var be = $._payload, et = $._init;
              return xt(V, ne, et(be), pe);
          }
          if (mt($))
            return te(V, ne, $, pe);
          if (ot($))
            return Te(V, ne, $, pe);
          Em(V, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? p(Qe(V, ne, "" + $, pe)) : (typeof $ == "function" && Cm(V), a(V, ne));
      }
      return xt;
    }
    var Yf = _R(!0), kR = _R(!1);
    function q1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Q1(e, t) {
      for (var a = e.child; a !== null; )
        UD(a, t), a = a.sibling;
    }
    var rS = Vo(null), aS;
    aS = {};
    var Rm = null, Wf = null, iS = null, wm = !1;
    function Tm() {
      Rm = null, Wf = null, iS = null, wm = !1;
    }
    function DR() {
      wm = !0;
    }
    function OR() {
      wm = !1;
    }
    function LR(e, t, a) {
      ua(rS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== aS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = aS;
    }
    function lS(e, t) {
      var a = rS.current;
      la(rS, t), e._currentValue = a;
    }
    function uS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ju(i.childLanes, t) ? u !== null && !ju(u.childLanes, t) && (u.childLanes = st(u.childLanes, t)) : (i.childLanes = st(i.childLanes, t), u !== null && (u.childLanes = st(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function G1(e, t, a) {
      K1(e, t, a);
    }
    function K1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var p = s.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === b) {
                var y = zs(a), S = Ku(an, y);
                S.tag = bm;
                var T = i.updateQueue;
                if (T !== null) {
                  var x = T.shared, z = x.pending;
                  z === null ? S.next = S : (S.next = z.next, z.next = S), x.pending = S;
                }
              }
              i.lanes = st(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = st(A.lanes, a)), uS(i.return, a, e), s.lanes = st(s.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === ce)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === _t) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = st(W.lanes, a);
          var G = W.alternate;
          G !== null && (G.lanes = st(G.lanes, a)), uS(W, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var te = u.sibling;
            if (te !== null) {
              te.return = u.return, u = te;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function qf(e, t) {
      Rm = e, Wf = null, iS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && tv(), a.firstContext = null);
      }
    }
    function rr(e) {
      wm && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (iS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wf === null) {
          if (Rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wf = a, Rm.dependencies = {
            lanes: ue,
            firstContext: a
          };
        } else
          Wf = Wf.next = a;
      }
      return t;
    }
    var cc = null;
    function oS(e) {
      cc === null ? cc = [e] : cc.push(e);
    }
    function X1() {
      if (cc !== null) {
        for (var e = 0; e < cc.length; e++) {
          var t = cc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        cc = null;
      }
    }
    function NR(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, oS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, xm(e, i);
    }
    function J1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, oS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Z1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, oS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, xm(e, i);
    }
    function $a(e, t) {
      return xm(e, t);
    }
    var e_ = xm;
    function xm(e, t) {
      e.lanes = st(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = st(a.lanes, t)), a === null && (e.flags & (bn | Aa)) !== Ve && kw(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = st(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = st(a.childLanes, t) : (u.flags & (bn | Aa)) !== Ve && kw(e), i = u, u = u.return;
      if (i.tag === M) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var MR = 0, AR = 1, bm = 2, sS = 3, _m = !1, cS, km;
    cS = !1, km = null;
    function fS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ue
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function UR(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ku(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: MR,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Wo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (km === u && !cS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cS = !0), Jk()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, e_(e, a);
      } else
        return Z1(e, u, t, a);
    }
    function Dm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Zd(a)) {
          var s = u.lanes;
          s = tp(s, e.pendingLanes);
          var p = st(s, a);
          u.lanes = p, gf(e, p);
        }
      }
    }
    function dS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, p = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var T = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              p === null ? s = p = T : (p.next = T, p = T), S = S.next;
            } while (S !== null);
            p === null ? s = p = t : (p.next = t, p = t);
          } else
            s = p = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: p,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function t_(e, t, a, i, u, s) {
      switch (a.tag) {
        case AR: {
          var p = a.payload;
          if (typeof p == "function") {
            DR();
            var y = p.call(s, i, u);
            {
              if (e.mode & tn) {
                Sn(!0);
                try {
                  p.call(s, i, u);
                } finally {
                  Sn(!1);
                }
              }
              OR();
            }
            return y;
          }
          return p;
        }
        case sS:
          e.flags = e.flags & -65537 | Be;
        // Intentional fallthrough
        case MR: {
          var S = a.payload, T;
          if (typeof S == "function") {
            DR(), T = S.call(s, i, u);
            {
              if (e.mode & tn) {
                Sn(!0);
                try {
                  S.call(s, i, u);
                } finally {
                  Sn(!1);
                }
              }
              OR();
            }
          } else
            T = S;
          return T == null ? i : ft({}, i, T);
        }
        case bm:
          return _m = !0, i;
      }
      return i;
    }
    function Om(e, t, a, i) {
      var u = e.updateQueue;
      _m = !1, km = u.shared;
      var s = u.firstBaseUpdate, p = u.lastBaseUpdate, y = u.shared.pending;
      if (y !== null) {
        u.shared.pending = null;
        var S = y, T = S.next;
        S.next = null, p === null ? s = T : p.next = T, p = S;
        var x = e.alternate;
        if (x !== null) {
          var z = x.updateQueue, A = z.lastBaseUpdate;
          A !== p && (A === null ? z.firstBaseUpdate = T : A.next = T, z.lastBaseUpdate = S);
        }
      }
      if (s !== null) {
        var W = u.baseState, G = ue, te = null, Te = null, Qe = null, je = s;
        do {
          var Lt = je.lane, xt = je.eventTime;
          if (ju(i, Lt)) {
            if (Qe !== null) {
              var ne = {
                eventTime: xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              Qe = Qe.next = ne;
            }
            W = t_(e, u, je, W, t, a);
            var $ = je.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== zt) {
              e.flags |= cn;
              var pe = u.effects;
              pe === null ? u.effects = [je] : pe.push(je);
            }
          } else {
            var V = {
              eventTime: xt,
              lane: Lt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            Qe === null ? (Te = Qe = V, te = W) : Qe = Qe.next = V, G = st(G, Lt);
          }
          if (je = je.next, je === null) {
            if (y = u.shared.pending, y === null)
              break;
            var Oe = y, be = Oe.next;
            Oe.next = null, je = be, u.lastBaseUpdate = Oe, u.shared.pending = null;
          }
        } while (!0);
        Qe === null && (te = W), u.baseState = te, u.firstBaseUpdate = Te, u.lastBaseUpdate = Qe;
        var et = u.shared.interleaved;
        if (et !== null) {
          var lt = et;
          do
            G = st(G, lt.lane), lt = lt.next;
          while (lt !== et);
        } else s === null && (u.shared.lanes = ue);
        pv(G), e.lanes = G, e.memoizedState = W;
      }
      km = null;
    }
    function n_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function zR() {
      _m = !1;
    }
    function Lm() {
      return _m;
    }
    function FR(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], p = s.callback;
          p !== null && (s.callback = null, n_(p, a));
        }
    }
    var Bp = {}, qo = Vo(Bp), Vp = Vo(Bp), Nm = Vo(Bp);
    function Mm(e) {
      if (e === Bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function PR() {
      var e = Mm(Nm.current);
      return e;
    }
    function pS(e, t) {
      ua(Nm, t, e), ua(Vp, e, e), ua(qo, Bp, e);
      var a = Sb(t);
      la(qo, e), ua(qo, a, e);
    }
    function Qf(e) {
      la(qo, e), la(Vp, e), la(Nm, e);
    }
    function vS() {
      var e = Mm(qo.current);
      return e;
    }
    function jR(e) {
      Mm(Nm.current);
      var t = Mm(qo.current), a = Eb(t, e.type);
      t !== a && (ua(Vp, e, e), ua(qo, a, e));
    }
    function hS(e) {
      Vp.current === e && (la(qo, e), la(Vp, e));
    }
    var r_ = 0, HR = 1, BR = 1, $p = 2, dl = Vo(r_);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function Gf(e) {
      return e & HR;
    }
    function yS(e, t) {
      return e & HR | t;
    }
    function a_(e, t) {
      return e | t;
    }
    function Qo(e, t) {
      ua(dl, t, e);
    }
    function Kf(e) {
      la(dl, e);
    }
    function i_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aR(i) || Ug(i))
              return t;
          }
        } else if (t.tag === Gt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Be) !== Ve;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Zl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), gS = [];
    function SS() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e];
        t._workInProgressVersionPrimary = null;
      }
      gS.length = 0;
    }
    function l_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ke = v.ReactCurrentDispatcher, Ip = v.ReactCurrentBatchConfig, ES, Xf;
    ES = /* @__PURE__ */ new Set();
    var fc = ue, nn = null, hr = null, mr = null, Um = !1, Yp = !1, Wp = 0, u_ = 0, o_ = 25, ae = null, Vi = null, Go = -1, CS = !1;
    function qt() {
      {
        var e = ae;
        Vi === null ? Vi = [e] : Vi.push(e);
      }
    }
    function Se() {
      {
        var e = ae;
        Vi !== null && (Go++, Vi[Go] !== e && s_(e));
      }
    }
    function Jf(e) {
      e != null && !mt(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function s_(e) {
      {
        var t = nt(nn);
        if (!ES.has(t) && (ES.add(t), Vi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Go; u++) {
            for (var s = Vi[u], p = u === Go ? e : s, y = u + 1 + ". " + s; y.length < i; )
              y += " ";
            y += p + `
`, a += y;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function RS(e, t) {
      if (CS)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Zf(e, t, a, i, u, s) {
      fc = s, nn = t, Vi = e !== null ? e._debugHookTypes : null, Go = -1, CS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? ke.current = s0 : Vi !== null ? ke.current = o0 : ke.current = u0;
      var p = a(i, u);
      if (Yp) {
        var y = 0;
        do {
          if (Yp = !1, Wp = 0, y >= o_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, CS = !1, hr = null, mr = null, t.updateQueue = null, Go = -1, ke.current = c0, p = a(i, u);
        } while (Yp);
      }
      ke.current = Qm, t._debugHookTypes = Vi;
      var S = hr !== null && hr.next !== null;
      if (fc = ue, nn = null, hr = null, mr = null, ae = null, Vi = null, Go = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Et) !== $e && m("Internal React error: Expected static flag was missing. Please notify the React team."), Um = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function ed() {
      var e = Wp !== 0;
      return Wp = 0, e;
    }
    function VR(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== $e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Fs(e.lanes, a);
    }
    function $R() {
      if (ke.current = Qm, Um) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Um = !1;
      }
      fc = ue, nn = null, hr = null, mr = null, Vi = null, Go = -1, ae = null, n0 = !1, Yp = !1, Wp = 0;
    }
    function eu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? nn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function $i() {
      var e;
      if (hr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = nn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? nn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function IR() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function TS(e, t, a) {
      var i = eu(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var p = s.dispatch = p_.bind(null, nn, s);
      return [i.memoizedState, p];
    }
    function xS(e, t, a) {
      var i = $i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, p = s.baseQueue, y = u.pending;
      if (y !== null) {
        if (p !== null) {
          var S = p.next, T = y.next;
          p.next = T, y.next = S;
        }
        s.baseQueue !== p && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = p = y, u.pending = null;
      }
      if (p !== null) {
        var x = p.next, z = s.baseState, A = null, W = null, G = null, te = x;
        do {
          var Te = te.lane;
          if (ju(fc, Te)) {
            if (G !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              G = G.next = je;
            }
            if (te.hasEagerState)
              z = te.eagerState;
            else {
              var Lt = te.action;
              z = e(z, Lt);
            }
          } else {
            var Qe = {
              lane: Te,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            G === null ? (W = G = Qe, A = z) : G = G.next = Qe, nn.lanes = st(nn.lanes, Te), pv(Te);
          }
          te = te.next;
        } while (te !== null && te !== x);
        G === null ? A = z : G.next = W, xe(z, i.memoizedState) || tv(), i.memoizedState = z, i.baseState = A, i.baseQueue = G, u.lastRenderedState = z;
      }
      var xt = u.interleaved;
      if (xt !== null) {
        var V = xt;
        do {
          var ne = V.lane;
          nn.lanes = st(nn.lanes, ne), pv(ne), V = V.next;
        } while (V !== xt);
      } else p === null && (u.lanes = ue);
      var $ = u.dispatch;
      return [i.memoizedState, $];
    }
    function bS(e, t, a) {
      var i = $i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, p = u.pending, y = i.memoizedState;
      if (p !== null) {
        u.pending = null;
        var S = p.next, T = S;
        do {
          var x = T.action;
          y = e(y, x), T = T.next;
        } while (T !== S);
        xe(y, i.memoizedState) || tv(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), u.lastRenderedState = y;
      }
      return [y, s];
    }
    function zM(e, t, a) {
    }
    function FM(e, t, a) {
    }
    function _S(e, t, a) {
      var i = nn, u = eu(), s, p = jr();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Xf || s !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      } else {
        if (s = t(), !Xf) {
          var y = t();
          xe(s, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
        }
        var S = py();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        mf(S, fc) || YR(i, t, s);
      }
      u.memoizedState = s;
      var T = {
        value: s,
        getSnapshot: t
      };
      return u.queue = T, Hm(qR.bind(null, i, T, e), [e]), i.flags |= Xr, qp(pr | Hr, WR.bind(null, i, T, s, t), void 0, null), s;
    }
    function zm(e, t, a) {
      var i = nn, u = $i(), s = t();
      if (!Xf) {
        var p = t();
        xe(s, p) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      }
      var y = u.memoizedState, S = !xe(y, s);
      S && (u.memoizedState = s, tv());
      var T = u.queue;
      if (Gp(qR.bind(null, i, T, e), [e]), T.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Xr, qp(pr | Hr, WR.bind(null, i, T, s, t), void 0, null);
        var x = py();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        mf(x, fc) || YR(i, t, s);
      }
      return s;
    }
    function YR(e, t, a) {
      e.flags |= bo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = nn.updateQueue;
      if (u === null)
        u = IR(), nn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function WR(e, t, a, i) {
      t.value = a, t.getSnapshot = i, QR(t) && GR(e);
    }
    function qR(e, t, a) {
      var i = function() {
        QR(t) && GR(e);
      };
      return a(i);
    }
    function QR(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function GR(e) {
      var t = $a(e, Je);
      t !== null && Er(t, e, Je, an);
    }
    function Fm(e) {
      var t = eu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = v_.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function kS(e) {
      return xS(wS);
    }
    function DS(e) {
      return bS(wS);
    }
    function qp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = IR(), nn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var p = s.lastEffect;
        if (p === null)
          s.lastEffect = u.next = u;
        else {
          var y = p.next;
          p.next = u, u.next = y, s.lastEffect = u;
        }
      }
      return u;
    }
    function OS(e) {
      var t = eu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Pm(e) {
      var t = $i();
      return t.memoizedState;
    }
    function Qp(e, t, a, i) {
      var u = eu(), s = i === void 0 ? null : i;
      nn.flags |= e, u.memoizedState = qp(pr | t, a, void 0, s);
    }
    function jm(e, t, a, i) {
      var u = $i(), s = i === void 0 ? null : i, p = void 0;
      if (hr !== null) {
        var y = hr.memoizedState;
        if (p = y.destroy, s !== null) {
          var S = y.deps;
          if (RS(s, S)) {
            u.memoizedState = qp(t, a, p, s);
            return;
          }
        }
      }
      nn.flags |= e, u.memoizedState = qp(pr | t, a, p, s);
    }
    function Hm(e, t) {
      return (nn.mode & Ht) !== $e ? Qp(Oi | Xr | Vc, Hr, e, t) : Qp(Xr | Vc, Hr, e, t);
    }
    function Gp(e, t) {
      return jm(Xr, Hr, e, t);
    }
    function LS(e, t) {
      return Qp(kt, Zl, e, t);
    }
    function Bm(e, t) {
      return jm(kt, Zl, e, t);
    }
    function NS(e, t) {
      var a = kt;
      return a |= el, (nn.mode & Ht) !== $e && (a |= Ul), Qp(a, vr, e, t);
    }
    function Vm(e, t) {
      return jm(kt, vr, e, t);
    }
    function KR(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function MS(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = kt;
      return u |= el, (nn.mode & Ht) !== $e && (u |= Ul), Qp(u, vr, KR.bind(null, t, e), i);
    }
    function $m(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return jm(kt, vr, KR.bind(null, t, e), i);
    }
    function c_(e, t) {
    }
    var Im = c_;
    function AS(e, t) {
      var a = eu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Ym(e, t) {
      var a = $i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (RS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function US(e, t) {
      var a = eu(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Wm(e, t) {
      var a = $i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (RS(i, s))
          return u[0];
      }
      var p = e();
      return a.memoizedState = [p, i], p;
    }
    function zS(e) {
      var t = eu();
      return t.memoizedState = e, e;
    }
    function XR(e) {
      var t = $i(), a = hr, i = a.memoizedState;
      return ZR(t, i, e);
    }
    function JR(e) {
      var t = $i();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return ZR(t, a, e);
    }
    function ZR(e, t, a) {
      var i = !Xd(fc);
      if (i) {
        if (!xe(a, t)) {
          var u = ep();
          nn.lanes = st(nn.lanes, u), pv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tv()), e.memoizedState = a, a;
    }
    function f_(e, t, a) {
      var i = Ha();
      Hn(xh(i, Ai)), e(!0);
      var u = Ip.transition;
      Ip.transition = {};
      var s = Ip.transition;
      Ip.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), Ip.transition = u, u === null && s._updatedFibers) {
          var p = s._updatedFibers.size;
          p > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function FS() {
      var e = Fm(!1), t = e[0], a = e[1], i = f_.bind(null, a), u = eu();
      return u.memoizedState = i, [t, i];
    }
    function e0() {
      var e = kS(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    function t0() {
      var e = DS(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    var n0 = !1;
    function d_() {
      return n0;
    }
    function PS() {
      var e = eu(), t = py(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = D1();
        i = ":" + a + "R" + u;
        var s = Wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var p = u_++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function qm() {
      var e = $i(), t = e.memoizedState;
      return t;
    }
    function p_(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = es(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (r0(e))
        a0(t, u);
      else {
        var s = NR(e, t, u, i);
        if (s !== null) {
          var p = xa();
          Er(s, e, i, p), i0(s, t, i);
        }
      }
      l0(e, i);
    }
    function v_(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = es(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (r0(e))
        a0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === ue && (s === null || s.lanes === ue)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var y;
            y = ke.current, ke.current = pl;
            try {
              var S = t.lastRenderedState, T = p(S, a);
              if (u.hasEagerState = !0, u.eagerState = T, xe(T, S)) {
                J1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ke.current = y;
            }
          }
        }
        var x = NR(e, t, u, i);
        if (x !== null) {
          var z = xa();
          Er(x, e, i, z), i0(x, t, i);
        }
      }
      l0(e, i);
    }
    function r0(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function a0(e, t) {
      Yp = Um = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function i0(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var u = st(i, a);
        t.lanes = u, gf(e, u);
      }
    }
    function l0(e, t, a) {
      _s(e, t);
    }
    var Qm = {
      readContext: rr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: ye
    }, u0 = null, o0 = null, s0 = null, c0 = null, tu = null, pl = null, Gm = null;
    {
      var jS = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      u0 = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", qt(), Jf(t), AS(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", qt(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", qt(), Jf(t), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", qt(), Jf(a), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", qt(), Jf(t), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", qt(), Jf(t), NS(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", qt(), Jf(t);
          var a = ke.current;
          ke.current = tu;
          try {
            return US(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", qt();
          var i = ke.current;
          ke.current = tu;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", qt(), OS(e);
        },
        useState: function(e) {
          ae = "useState", qt();
          var t = ke.current;
          ke.current = tu;
          try {
            return Fm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", qt(), zS(e);
        },
        useTransition: function() {
          return ae = "useTransition", qt(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", qt(), _S(e, t, a);
        },
        useId: function() {
          return ae = "useId", qt(), PS();
        },
        unstable_isNewReconciler: ye
      }, o0 = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Se(), AS(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Se(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Se(), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Se(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Se(), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Se(), NS(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Se();
          var a = ke.current;
          ke.current = tu;
          try {
            return US(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Se();
          var i = ke.current;
          ke.current = tu;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Se(), OS(e);
        },
        useState: function(e) {
          ae = "useState", Se();
          var t = ke.current;
          ke.current = tu;
          try {
            return Fm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Se(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Se(), zS(e);
        },
        useTransition: function() {
          return ae = "useTransition", Se(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Se(), _S(e, t, a);
        },
        useId: function() {
          return ae = "useId", Se(), PS();
        },
        unstable_isNewReconciler: ye
      }, s0 = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Se(), Ym(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Se(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Se(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Se(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Se(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Se();
          var a = ke.current;
          ke.current = pl;
          try {
            return Wm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Se();
          var i = ke.current;
          ke.current = pl;
          try {
            return xS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Se(), Pm();
        },
        useState: function(e) {
          ae = "useState", Se();
          var t = ke.current;
          ke.current = pl;
          try {
            return kS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Se(), Im();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Se(), XR(e);
        },
        useTransition: function() {
          return ae = "useTransition", Se(), e0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Se(), zm(e, t);
        },
        useId: function() {
          return ae = "useId", Se(), qm();
        },
        unstable_isNewReconciler: ye
      }, c0 = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Se(), Ym(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Se(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Se(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Se(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Se(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Se();
          var a = ke.current;
          ke.current = Gm;
          try {
            return Wm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Se();
          var i = ke.current;
          ke.current = Gm;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Se(), Pm();
        },
        useState: function(e) {
          ae = "useState", Se();
          var t = ke.current;
          ke.current = Gm;
          try {
            return DS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Se(), Im();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Se(), JR(e);
        },
        useTransition: function() {
          return ae = "useTransition", Se(), t0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Se(), zm(e, t);
        },
        useId: function() {
          return ae = "useId", Se(), qm();
        },
        unstable_isNewReconciler: ye
      }, tu = {
        readContext: function(e) {
          return jS(), rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", it(), qt(), AS(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", it(), qt(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", it(), qt(), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", it(), qt(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", it(), qt(), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", it(), qt(), NS(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", it(), qt();
          var a = ke.current;
          ke.current = tu;
          try {
            return US(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", it(), qt();
          var i = ke.current;
          ke.current = tu;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", it(), qt(), OS(e);
        },
        useState: function(e) {
          ae = "useState", it(), qt();
          var t = ke.current;
          ke.current = tu;
          try {
            return Fm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", it(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", it(), qt(), zS(e);
        },
        useTransition: function() {
          return ae = "useTransition", it(), qt(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", it(), qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", it(), qt(), _S(e, t, a);
        },
        useId: function() {
          return ae = "useId", it(), qt(), PS();
        },
        unstable_isNewReconciler: ye
      }, pl = {
        readContext: function(e) {
          return jS(), rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", it(), Se(), Ym(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", it(), Se(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", it(), Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", it(), Se(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", it(), Se(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", it(), Se(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", it(), Se();
          var a = ke.current;
          ke.current = pl;
          try {
            return Wm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", it(), Se();
          var i = ke.current;
          ke.current = pl;
          try {
            return xS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", it(), Se(), Pm();
        },
        useState: function(e) {
          ae = "useState", it(), Se();
          var t = ke.current;
          ke.current = pl;
          try {
            return kS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", it(), Se(), Im();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", it(), Se(), XR(e);
        },
        useTransition: function() {
          return ae = "useTransition", it(), Se(), e0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", it(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", it(), Se(), zm(e, t);
        },
        useId: function() {
          return ae = "useId", it(), Se(), qm();
        },
        unstable_isNewReconciler: ye
      }, Gm = {
        readContext: function(e) {
          return jS(), rr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", it(), Se(), Ym(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", it(), Se(), rr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", it(), Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", it(), Se(), $m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", it(), Se(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", it(), Se(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", it(), Se();
          var a = ke.current;
          ke.current = pl;
          try {
            return Wm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", it(), Se();
          var i = ke.current;
          ke.current = pl;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", it(), Se(), Pm();
        },
        useState: function(e) {
          ae = "useState", it(), Se();
          var t = ke.current;
          ke.current = pl;
          try {
            return DS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", it(), Se(), Im();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", it(), Se(), JR(e);
        },
        useTransition: function() {
          return ae = "useTransition", it(), Se(), t0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", it(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", it(), Se(), zm(e, t);
        },
        useId: function() {
          return ae = "useId", it(), Se(), qm();
        },
        unstable_isNewReconciler: ye
      };
    }
    var Ko = d.unstable_now, f0 = 0, Km = -1, Kp = -1, Xm = -1, HS = !1, Jm = !1;
    function d0() {
      return HS;
    }
    function h_() {
      Jm = !0;
    }
    function m_() {
      HS = !1, Jm = !1;
    }
    function y_() {
      HS = Jm, Jm = !1;
    }
    function p0() {
      return f0;
    }
    function v0() {
      f0 = Ko();
    }
    function BS(e) {
      Kp = Ko(), e.actualStartTime < 0 && (e.actualStartTime = Ko());
    }
    function h0(e) {
      Kp = -1;
    }
    function Zm(e, t) {
      if (Kp >= 0) {
        var a = Ko() - Kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kp = -1;
      }
    }
    function nu(e) {
      if (Km >= 0) {
        var t = Ko() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case De:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (Xm >= 0) {
        var t = Ko() - Xm;
        Xm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case De:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ru() {
      Km = Ko();
    }
    function $S() {
      Xm = Ko();
    }
    function IS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vl(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var YS = {}, WS, qS, QS, GS, KS, m0, ey, XS, JS, ZS, Xp;
    {
      WS = /* @__PURE__ */ new Set(), qS = /* @__PURE__ */ new Set(), QS = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), XS = /* @__PURE__ */ new Set(), KS = /* @__PURE__ */ new Set(), JS = /* @__PURE__ */ new Set(), ZS = /* @__PURE__ */ new Set(), Xp = /* @__PURE__ */ new Set();
      var y0 = /* @__PURE__ */ new Set();
      ey = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          y0.has(a) || (y0.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, m0 = function(e, t) {
        if (t === void 0) {
          var a = Nt(e) || "Component";
          KS.has(a) || (KS.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(YS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(YS);
    }
    function eE(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & tn) {
          Sn(!0);
          try {
            s = a(i, u);
          } finally {
            Sn(!1);
          }
        }
        m0(t, s);
      }
      var p = s == null ? u : ft({}, u, s);
      if (e.memoizedState = p, e.lanes === ue) {
        var y = e.updateQueue;
        y.baseState = p;
      }
    }
    var tE = {
      isMounted: sh,
      enqueueSetState: function(e, t, a) {
        var i = xo(e), u = xa(), s = es(i), p = Ku(u, s);
        p.payload = t, a != null && (ey(a, "setState"), p.callback = a);
        var y = Wo(i, p, s);
        y !== null && (Er(y, i, s, u), Dm(y, i, s)), _s(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = xo(e), u = xa(), s = es(i), p = Ku(u, s);
        p.tag = AR, p.payload = t, a != null && (ey(a, "replaceState"), p.callback = a);
        var y = Wo(i, p, s);
        y !== null && (Er(y, i, s, u), Dm(y, i, s)), _s(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = xo(e), i = xa(), u = es(a), s = Ku(i, u);
        s.tag = bm, t != null && (ey(t, "forceUpdate"), s.callback = t);
        var p = Wo(a, s, u);
        p !== null && (Er(p, a, u, i), Dm(p, a, u)), Gc(a, u);
      }
    };
    function g0(e, t, a, i, u, s, p) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(i, s, p);
        {
          if (e.mode & tn) {
            Sn(!0);
            try {
              S = y.shouldComponentUpdate(i, s, p);
            } finally {
              Sn(!1);
            }
          }
          S === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ie(a, i) || !Ie(u, s) : !0;
    }
    function g_(e, t, a) {
      var i = e.stateNode;
      {
        var u = Nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tn) === $e && (Xp.add(t), m(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tn) === $e && (Xp.add(t), m(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !JS.has(t) && (JS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var p = i.props !== a;
        i.props !== void 0 && p && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !QS.has(t) && (QS.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var y = i.state;
        y && (typeof y != "object" || mt(y)) && m("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function S0(e, t) {
      t.updater = tE, e.stateNode = t, xu(t, e), t._reactInternalInstance = YS;
    }
    function E0(e, t, a) {
      var i = !1, u = pi, s = pi, p = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === L && p._context === void 0
        );
        if (!y && !ZS.has(t)) {
          ZS.add(t);
          var S = "";
          p === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? S = " However, it is set to a " + typeof p + "." : p.$$typeof === Ci ? S = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", S);
        }
      }
      if (typeof p == "object" && p !== null)
        s = rr(p);
      else {
        u = Hf(e, t, !0);
        var T = t.contextTypes;
        i = T != null, s = i ? Bf(e, u) : pi;
      }
      var x = new t(a, s);
      if (e.mode & tn) {
        Sn(!0);
        try {
          x = new t(a, s);
        } finally {
          Sn(!1);
        }
      }
      var z = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      S0(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var A = Nt(t) || "Component";
          qS.has(A) || (qS.add(A), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, x.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var W = null, G = null, te = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), W !== null || G !== null || te !== null) {
            var Te = Nt(t) || "Component", Qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            GS.has(Te) || (GS.add(Te), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Te, Qe, W !== null ? `
  ` + W : "", G !== null ? `
  ` + G : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && sR(e, u, s), x;
    }
    function S_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), tE.enqueueReplaceState(t, t.state, null));
    }
    function C0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = nt(e) || "Component";
          WS.has(s) || (WS.add(s), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        tE.enqueueReplaceState(t, t.state, null);
      }
    }
    function nE(e, t, a, i) {
      g_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, fS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = rr(s);
      else {
        var p = Hf(e, t, !0);
        u.context = Bf(e, p);
      }
      {
        if (u.state === a) {
          var y = Nt(t) || "Component";
          XS.has(y) || (XS.add(y), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & tn && fl.recordLegacyContextWarning(e, u), fl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (eE(e, t, S, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (S_(e, u), Om(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var T = kt;
        T |= el, (e.mode & Ht) !== $e && (T |= Ul), e.flags |= T;
      }
    }
    function E_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var p = u.context, y = t.contextType, S = pi;
      if (typeof y == "object" && y !== null)
        S = rr(y);
      else {
        var T = Hf(e, t, !0);
        S = Bf(e, T);
      }
      var x = t.getDerivedStateFromProps, z = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !z && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || p !== S) && C0(e, u, a, S), zR();
      var A = e.memoizedState, W = u.state = A;
      if (Om(e, a, u, i), W = e.memoizedState, s === a && A === W && !fm() && !Lm()) {
        if (typeof u.componentDidMount == "function") {
          var G = kt;
          G |= el, (e.mode & Ht) !== $e && (G |= Ul), e.flags |= G;
        }
        return !1;
      }
      typeof x == "function" && (eE(e, t, x, a), W = e.memoizedState);
      var te = Lm() || g0(e, t, s, a, A, W, S);
      if (te) {
        if (!z && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Te = kt;
          Te |= el, (e.mode & Ht) !== $e && (Te |= Ul), e.flags |= Te;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Qe = kt;
          Qe |= el, (e.mode & Ht) !== $e && (Qe |= Ul), e.flags |= Qe;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return u.props = a, u.state = W, u.context = S, te;
    }
    function C_(e, t, a, i, u) {
      var s = t.stateNode;
      UR(e, t);
      var p = t.memoizedProps, y = t.type === t.elementType ? p : vl(t.type, p);
      s.props = y;
      var S = t.pendingProps, T = s.context, x = a.contextType, z = pi;
      if (typeof x == "object" && x !== null)
        z = rr(x);
      else {
        var A = Hf(t, a, !0);
        z = Bf(t, A);
      }
      var W = a.getDerivedStateFromProps, G = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !G && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== S || T !== z) && C0(t, s, i, z), zR();
      var te = t.memoizedState, Te = s.state = te;
      if (Om(t, i, s, u), Te = t.memoizedState, p === S && te === Te && !fm() && !Lm())
        return typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof W == "function" && (eE(t, a, W, i), Te = t.memoizedState);
      var Qe = Lm() || g0(t, a, y, i, te, Te, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return Qe ? (!G && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Te, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Te, z)), typeof s.componentDidUpdate == "function" && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = i, t.memoizedState = Te), s.props = i, s.state = Te, s.context = z, Qe;
    }
    function dc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qi(t),
        digest: null
      };
    }
    function rE(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function R_(e, t) {
      return !0;
    }
    function aE(e, t) {
      try {
        var a = R_(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, p = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var y = u ? nt(u) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === M)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = nt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var z = S + `
` + p + `

` + ("" + T);
        console.error(z);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var w_ = typeof WeakMap == "function" ? WeakMap : Map;
    function R0(e, t, a) {
      var i = Ku(an, a);
      i.tag = sS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        hD(u), aE(e, t);
      }, i;
    }
    function iE(e, t, a) {
      var i = Ku(an, a);
      i.tag = sS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          Mw(e), aE(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        Mw(e), aE(e, t), typeof u != "function" && pD(this);
        var S = t.value, T = t.stack;
        this.componentDidCatch(S, {
          componentStack: T !== null ? T : ""
        }), typeof u != "function" && (na(e.lanes, Je) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), i;
    }
    function w0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new w_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = mD.bind(null, e, t, a);
        ta && vv(e, a), t.then(s, s);
      }
    }
    function T_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function x_(e, t) {
      var a = e.tag;
      if ((e.mode & Et) === $e && (a === k || a === fe || a === Me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function T0(e) {
      var t = e;
      do {
        if (t.tag === he && i_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function x0(e, t, a, i, u) {
      if ((e.mode & Et) === $e) {
        if (e === t)
          e.flags |= Jr;
        else {
          if (e.flags |= Be, a.flags |= Bc, a.flags &= -52805, a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = tt;
            else {
              var p = Ku(an, Je);
              p.tag = bm, Wo(a, p, Je);
            }
          }
          a.lanes = st(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= Jr, e.lanes = u, e;
    }
    function b_(e, t, a, i, u) {
      if (a.flags |= Cs, ta && vv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        x_(a), jr() && a.mode & Et && mR();
        var p = T0(t);
        if (p !== null) {
          p.flags &= -257, x0(p, t, a, e, u), p.mode & Et && w0(e, s, u), T_(p, e, s);
          return;
        } else {
          if (!yh(u)) {
            w0(e, s, u), PE();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (jr() && a.mode & Et) {
        mR();
        var S = T0(t);
        if (S !== null) {
          (S.flags & Jr) === Ve && (S.flags |= Kr), x0(S, t, a, e, u), Xg(dc(i, a));
          return;
        }
      }
      i = dc(i, a), iD(i);
      var T = t;
      do {
        switch (T.tag) {
          case M: {
            var x = i;
            T.flags |= Jr;
            var z = zs(u);
            T.lanes = st(T.lanes, z);
            var A = R0(T, x, z);
            dS(T, A);
            return;
          }
          case b:
            var W = i, G = T.type, te = T.stateNode;
            if ((T.flags & Be) === Ve && (typeof G.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !Tw(te))) {
              T.flags |= Jr;
              var Te = zs(u);
              T.lanes = st(T.lanes, Te);
              var Qe = iE(T, W, Te);
              dS(T, Qe);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function __() {
      return null;
    }
    var Jp = v.ReactCurrentOwner, hl = !1, lE, Zp, uE, oE, sE, pc, cE, ty, ev;
    lE = {}, Zp = {}, uE = {}, oE = {}, sE = {}, pc = !1, cE = {}, ty = {}, ev = {};
    function wa(e, t, a, i) {
      e === null ? t.child = kR(t, null, a, i) : t.child = Yf(t, e.child, a, i);
    }
    function k_(e, t, a, i) {
      t.child = Yf(t, e.child, null, i), t.child = Yf(t, null, a, i);
    }
    function b0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var p = a.render, y = t.ref, S, T;
      qf(t, u), ga(t);
      {
        if (Jp.current = t, qn(!0), S = Zf(e, t, p, i, y, u), T = ed(), t.mode & tn) {
          Sn(!0);
          try {
            S = Zf(e, t, p, i, y, u), T = ed();
          } finally {
            Sn(!1);
          }
        }
        qn(!1);
      }
      return Sa(), e !== null && !hl ? (VR(e, t, u), Xu(e, t, u)) : (jr() && T && Yg(t), t.flags |= ui, wa(e, t, S, u), t.child);
    }
    function _0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (MD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = s;
          return p = od(s), t.tag = Me, t.type = p, pE(t, s), k0(e, t, p, i, u);
        }
        {
          var y = s.propTypes;
          if (y && sl(
            y,
            i,
            // Resolved props
            "prop",
            Nt(s)
          ), a.defaultProps !== void 0) {
            var S = Nt(s) || "Unknown";
            ev[S] || (m("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", S), ev[S] = !0);
          }
        }
        var T = GE(a.type, null, i, t, t.mode, u);
        return T.ref = t.ref, T.return = t, t.child = T, T;
      }
      {
        var x = a.type, z = x.propTypes;
        z && sl(
          z,
          i,
          // Resolved props
          "prop",
          Nt(x)
        );
      }
      var A = e.child, W = SE(e, u);
      if (!W) {
        var G = A.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Ie, te(G, i) && e.ref === t.ref)
          return Xu(e, t, u);
      }
      t.flags |= ui;
      var Te = gc(A, i);
      return Te.ref = t.ref, Te.return = t, t.child = Te, Te;
    }
    function k0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === at) {
          var p = s, y = p._payload, S = p._init;
          try {
            s = S(y);
          } catch {
            s = null;
          }
          var T = s && s.propTypes;
          T && sl(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Ie(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = i = x, SE(e, u))
            (e.flags & Bc) !== Ve && (hl = !0);
          else return t.lanes = e.lanes, Xu(e, t, u);
      }
      return fE(e, t, a, i, u);
    }
    function D0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Ce)
        if ((t.mode & Et) === $e) {
          var p = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, vy(t, a);
        } else if (na(a, Ea)) {
          var z = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var A = s !== null ? s.baseLanes : a;
          vy(t, A);
        } else {
          var y = null, S;
          if (s !== null) {
            var T = s.baseLanes;
            S = st(T, a);
          } else
            S = a;
          t.lanes = t.childLanes = Ea;
          var x = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, vy(t, S), null;
        }
      else {
        var W;
        s !== null ? (W = st(s.baseLanes, a), t.memoizedState = null) : W = a, vy(t, W);
      }
      return wa(e, t, u, a), t.child;
    }
    function D_(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function O_(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function L_(e, t, a) {
      {
        t.flags |= kt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return wa(e, t, s, a), t.child;
    }
    function O0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Rn, t.flags |= _o);
    }
    function fE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var p;
      {
        var y = Hf(t, a, !0);
        p = Bf(t, y);
      }
      var S, T;
      qf(t, u), ga(t);
      {
        if (Jp.current = t, qn(!0), S = Zf(e, t, a, i, p, u), T = ed(), t.mode & tn) {
          Sn(!0);
          try {
            S = Zf(e, t, a, i, p, u), T = ed();
          } finally {
            Sn(!1);
          }
        }
        qn(!1);
      }
      return Sa(), e !== null && !hl ? (VR(e, t, u), Xu(e, t, u)) : (jr() && T && Yg(t), t.flags |= ui, wa(e, t, S, u), t.child);
    }
    function L0(e, t, a, i, u) {
      {
        switch (QD(t)) {
          case !1: {
            var s = t.stateNode, p = t.type, y = new p(t.memoizedProps, s.context), S = y.state;
            s.updater.enqueueSetState(s, S, null);
            break;
          }
          case !0: {
            t.flags |= Be, t.flags |= Jr;
            var T = new Error("Simulated error coming from DevTools"), x = zs(u);
            t.lanes = st(t.lanes, x);
            var z = iE(t, dc(T, t), x);
            dS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var A = a.propTypes;
          A && sl(
            A,
            i,
            // Resolved props
            "prop",
            Nt(a)
          );
        }
      }
      var W;
      Jl(a) ? (W = !0, pm(t)) : W = !1, qf(t, u);
      var G = t.stateNode, te;
      G === null ? (ry(e, t), E0(t, a, i), nE(t, a, i, u), te = !0) : e === null ? te = E_(t, a, i, u) : te = C_(e, t, a, i, u);
      var Te = dE(e, t, a, te, W, u);
      {
        var Qe = t.stateNode;
        te && Qe.props !== i && (pc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), pc = !0);
      }
      return Te;
    }
    function dE(e, t, a, i, u, s) {
      O0(e, t);
      var p = (t.flags & Be) !== Ve;
      if (!i && !p)
        return u && dR(t, a, !1), Xu(e, t, s);
      var y = t.stateNode;
      Jp.current = t;
      var S;
      if (p && typeof a.getDerivedStateFromError != "function")
        S = null, h0();
      else {
        ga(t);
        {
          if (qn(!0), S = y.render(), t.mode & tn) {
            Sn(!0);
            try {
              y.render();
            } finally {
              Sn(!1);
            }
          }
          qn(!1);
        }
        Sa();
      }
      return t.flags |= ui, e !== null && p ? k_(e, t, S, s) : wa(e, t, S, s), t.memoizedState = y.state, u && dR(t, a, !0), t.child;
    }
    function N0(e) {
      var t = e.stateNode;
      t.pendingContext ? cR(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cR(e, t.context, !1), pS(e, t.containerInfo);
    }
    function N_(e, t, a) {
      if (N0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      UR(e, t), Om(t, i, null, a);
      var p = t.memoizedState;
      t.stateNode;
      var y = p.element;
      if (u.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, T = t.updateQueue;
        if (T.baseState = S, t.memoizedState = S, t.flags & Kr) {
          var x = dc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return M0(e, t, y, a, x);
        } else if (y !== s) {
          var z = dc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return M0(e, t, y, a, z);
        } else {
          U1(t);
          var A = kR(t, null, y, a);
          t.child = A;
          for (var W = A; W; )
            W.flags = W.flags & -3 | Aa, W = W.sibling;
        }
      } else {
        if (If(), y === s)
          return Xu(e, t, a);
        wa(e, t, y, a);
      }
      return t.child;
    }
    function M0(e, t, a, i, u) {
      return If(), Xg(u), t.flags |= Kr, wa(e, t, a, i), t.child;
    }
    function M_(e, t, a) {
      jR(t), e === null && Kg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, p = u.children, y = Lg(i, u);
      return y ? p = null : s !== null && Lg(i, s) && (t.flags |= oi), O0(e, t), wa(e, t, p, a), t.child;
    }
    function A_(e, t) {
      return e === null && Kg(t), null;
    }
    function U_(e, t, a, i) {
      ry(e, t);
      var u = t.pendingProps, s = a, p = s._payload, y = s._init, S = y(p);
      t.type = S;
      var T = t.tag = AD(S), x = vl(S, u), z;
      switch (T) {
        case k:
          return pE(t, S), t.type = S = od(S), z = fE(null, t, S, x, i), z;
        case b:
          return t.type = S = $E(S), z = L0(null, t, S, x, i), z;
        case fe:
          return t.type = S = IE(S), z = b0(null, t, S, x, i), z;
        case Ye: {
          if (t.type !== t.elementType) {
            var A = S.propTypes;
            A && sl(
              A,
              x,
              // Resolved for outer only
              "prop",
              Nt(S)
            );
          }
          return z = _0(
            null,
            t,
            S,
            vl(S.type, x),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw S !== null && typeof S == "object" && S.$$typeof === at && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function z_(e, t, a, i, u) {
      ry(e, t), t.tag = b;
      var s;
      return Jl(a) ? (s = !0, pm(t)) : s = !1, qf(t, u), E0(t, a, i), nE(t, a, i, u), dE(null, t, a, !0, s, u);
    }
    function F_(e, t, a, i) {
      ry(e, t);
      var u = t.pendingProps, s;
      {
        var p = Hf(t, a, !1);
        s = Bf(t, p);
      }
      qf(t, i);
      var y, S;
      ga(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Nt(a) || "Unknown";
          lE[T] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), lE[T] = !0);
        }
        t.mode & tn && fl.recordLegacyContextWarning(t, null), qn(!0), Jp.current = t, y = Zf(null, t, a, u, s, i), S = ed(), qn(!1);
      }
      if (Sa(), t.flags |= ui, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var x = Nt(a) || "Unknown";
        Zp[x] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Zp[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var z = Nt(a) || "Unknown";
          Zp[z] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Zp[z] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return Jl(a) ? (A = !0, pm(t)) : A = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, fS(t), S0(t, y), nE(t, a, u, i), dE(null, t, a, !0, A, i);
      } else {
        if (t.tag = k, t.mode & tn) {
          Sn(!0);
          try {
            y = Zf(null, t, a, u, s, i), S = ed();
          } finally {
            Sn(!1);
          }
        }
        return jr() && S && Yg(t), wa(null, t, y, i), pE(t, a), t.child;
      }
    }
    function pE(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), sE[u] || (sE[u] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var p = Nt(t) || "Unknown";
          ev[p] || (m("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", p), ev[p] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Nt(t) || "Unknown";
          oE[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), oE[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = Nt(t) || "Unknown";
          uE[S] || (m("%s: Function components do not support contextType.", S), uE[S] = !0);
        }
      }
    }
    var vE = {
      dehydrated: null,
      treeContext: null,
      retryLane: zt
    };
    function hE(e) {
      return {
        baseLanes: e,
        cachePool: __(),
        transitions: null
      };
    }
    function P_(e, t) {
      var a = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function j_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return mS(e, $p);
    }
    function H_(e, t) {
      return Fs(e.childLanes, t);
    }
    function A0(e, t, a) {
      var i = t.pendingProps;
      GD(t) && (t.flags |= Be);
      var u = dl.current, s = !1, p = (t.flags & Be) !== Ve;
      if (p || j_(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = a_(u, BR)), u = Gf(u), Qo(t, u), e === null) {
        Kg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return Y_(t, S);
        }
        var T = i.children, x = i.fallback;
        if (s) {
          var z = B_(t, T, x, a), A = t.child;
          return A.memoizedState = hE(a), t.memoizedState = vE, z;
        } else
          return mE(t, T);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var G = W.dehydrated;
          if (G !== null)
            return W_(e, t, p, i, G, W, a);
        }
        if (s) {
          var te = i.fallback, Te = i.children, Qe = $_(e, t, Te, te, a), je = t.child, Lt = e.child.memoizedState;
          return je.memoizedState = Lt === null ? hE(a) : P_(Lt, a), je.childLanes = H_(e, a), t.memoizedState = vE, Qe;
        } else {
          var xt = i.children, V = V_(e, t, xt, a);
          return t.memoizedState = null, V;
        }
      }
    }
    function mE(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = yE(u, i);
      return s.return = e, e.child = s, s;
    }
    function B_(e, t, a, i) {
      var u = e.mode, s = e.child, p = {
        mode: "hidden",
        children: t
      }, y, S;
      return (u & Et) === $e && s !== null ? (y = s, y.childLanes = ue, y.pendingProps = p, e.mode & jt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = ns(a, u, i, null)) : (y = yE(p, u), S = ns(a, u, i, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function yE(e, t, a) {
      return Uw(e, t, ue, null);
    }
    function U0(e, t) {
      return gc(e, t);
    }
    function V_(e, t, a, i) {
      var u = e.child, s = u.sibling, p = U0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Et) === $e && (p.lanes = i), p.return = t, p.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Ma) : y.push(s);
      }
      return t.child = p, p;
    }
    function $_(e, t, a, i, u) {
      var s = t.mode, p = e.child, y = p.sibling, S = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Et) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var x = t.child;
        T = x, T.childLanes = ue, T.pendingProps = S, t.mode & jt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = p.selfBaseDuration, T.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        T = U0(p, S), T.subtreeFlags = p.subtreeFlags & Fn;
      var z;
      return y !== null ? z = gc(y, i) : (z = ns(i, s, u, null), z.flags |= bn), z.return = t, T.return = t, T.sibling = z, t.child = T, z;
    }
    function ny(e, t, a, i) {
      i !== null && Xg(i), Yf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, p = mE(t, s);
      return p.flags |= bn, t.memoizedState = null, p;
    }
    function I_(e, t, a, i, u) {
      var s = t.mode, p = {
        mode: "visible",
        children: a
      }, y = yE(p, s), S = ns(i, s, u, null);
      return S.flags |= bn, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & Et) !== $e && Yf(t, e.child, null, u), S;
    }
    function Y_(e, t, a) {
      return (e.mode & Et) === $e ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : Ug(t) ? e.lanes = xr : e.lanes = Ea, null;
    }
    function W_(e, t, a, i, u, s, p) {
      if (a)
        if (t.flags & Kr) {
          t.flags &= -257;
          var V = rE(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ny(e, t, p, V);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Be, null;
          var ne = i.children, $ = i.fallback, pe = I_(e, t, ne, $, p), Oe = t.child;
          return Oe.memoizedState = hE(p), t.memoizedState = vE, pe;
        }
      else {
        if (M1(), (t.mode & Et) === $e)
          return ny(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ug(u)) {
          var y, S, T;
          {
            var x = Kb(u);
            y = x.digest, S = x.message, T = x.stack;
          }
          var z;
          S ? z = new Error(S) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = rE(z, y, T);
          return ny(e, t, p, A);
        }
        var W = na(p, e.childLanes);
        if (hl || W) {
          var G = py();
          if (G !== null) {
            var te = rp(G, p);
            if (te !== zt && te !== s.retryLane) {
              s.retryLane = te;
              var Te = an;
              $a(e, te), Er(G, e, te, Te);
            }
          }
          PE();
          var Qe = rE(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ny(e, t, p, Qe);
        } else if (aR(u)) {
          t.flags |= Be, t.child = e.child;
          var je = yD.bind(null, e);
          return Xb(u, je), null;
        } else {
          z1(t, u, s.treeContext);
          var Lt = i.children, xt = mE(t, Lt);
          return xt.flags |= Aa, xt;
        }
      }
    }
    function z0(e, t, a) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), uS(e.return, t, a);
    }
    function q_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === he) {
          var u = i.memoizedState;
          u !== null && z0(i, a, e);
        } else if (i.tag === Gt)
          z0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Q_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function G_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cE[e])
        if (cE[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function K_(e, t) {
      e !== void 0 && !ty[e] && (e !== "collapsed" && e !== "hidden" ? (ty[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ty[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function F0(e, t) {
      {
        var a = mt(e), i = !a && typeof ot(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function X_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!F0(e[a], a))
              return;
        } else {
          var i = ot(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), p = 0; !s.done; s = u.next()) {
                if (!F0(s.value, p))
                  return;
                p++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gE(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function P0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, p = i.children;
      G_(u), K_(s, u), X_(p, u), wa(e, t, p, a);
      var y = dl.current, S = mS(y, $p);
      if (S)
        y = yS(y, $p), t.flags |= Be;
      else {
        var T = e !== null && (e.flags & Be) !== Ve;
        T && q_(t, t.child, a), y = Gf(y);
      }
      if (Qo(t, y), (t.mode & Et) === $e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var x = Q_(t.child), z;
            x === null ? (z = t.child, t.child = null) : (z = x.sibling, x.sibling = null), gE(
              t,
              !1,
              // isBackwards
              z,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var G = W.alternate;
              if (G !== null && Am(G) === null) {
                t.child = W;
                break;
              }
              var te = W.sibling;
              W.sibling = A, A = W, W = te;
            }
            gE(
              t,
              !0,
              // isBackwards
              A,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            gE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function J_(e, t, a) {
      pS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Yf(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var j0 = !1;
    function Z_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, p = t.memoizedProps, y = s.value;
      {
        "value" in s || j0 || (j0 = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && sl(S, s, "prop", "Context.Provider");
      }
      if (LR(t, u, y), p !== null) {
        var T = p.value;
        if (xe(T, y)) {
          if (p.children === s.children && !fm())
            return Xu(e, t, a);
        } else
          G1(t, u, a);
      }
      var x = s.children;
      return wa(e, t, x, a), t.child;
    }
    var H0 = !1;
    function ek(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (H0 || (H0 = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, a);
      var p = rr(i);
      ga(t);
      var y;
      return Jp.current = t, qn(!0), y = s(p), qn(!1), Sa(), t.flags |= ui, wa(e, t, y, a), t.child;
    }
    function tv() {
      hl = !0;
    }
    function ry(e, t) {
      (t.mode & Et) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bn);
    }
    function Xu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), h0(), pv(t.lanes), na(a, t.childLanes) ? (q1(e, t), t.child) : null;
    }
    function tk(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ma) : s.push(e), a.flags |= bn, a;
      }
    }
    function SE(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function nk(e, t, a) {
      switch (t.tag) {
        case M:
          N0(t), t.stateNode, If();
          break;
        case Y:
          jR(t);
          break;
        case b: {
          var i = t.type;
          Jl(i) && pm(t);
          break;
        }
        case H:
          pS(t, t.stateNode.containerInfo);
          break;
        case ce: {
          var u = t.memoizedProps.value, s = t.type._context;
          LR(t, s, u);
          break;
        }
        case De:
          {
            var p = na(a, t.childLanes);
            p && (t.flags |= kt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case he: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return Qo(t, Gf(dl.current)), t.flags |= Be, null;
            var T = t.child, x = T.childLanes;
            if (na(a, x))
              return A0(e, t, a);
            Qo(t, Gf(dl.current));
            var z = Xu(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Qo(t, Gf(dl.current));
          break;
        }
        case Gt: {
          var A = (e.flags & Be) !== Ve, W = na(a, t.childLanes);
          if (A) {
            if (W)
              return P0(e, t, a);
            t.flags |= Be;
          }
          var G = t.memoizedState;
          if (G !== null && (G.rendering = null, G.tail = null, G.lastEffect = null), Qo(t, dl.current), W)
            break;
          return null;
        }
        case We:
        case It:
          return t.lanes = ue, D0(e, t, a);
      }
      return Xu(e, t, a);
    }
    function B0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return tk(e, t, GE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || fm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          hl = !0;
        else {
          var s = SE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Be) === Ve)
            return hl = !1, nk(e, t, a);
          (e.flags & Bc) !== Ve ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, jr() && _1(t)) {
        var p = t.index, y = k1();
        hR(t, y, p);
      }
      switch (t.lanes = ue, t.tag) {
        case F:
          return F_(e, t, t.type, a);
        case Tt: {
          var S = t.elementType;
          return U_(e, t, S, a);
        }
        case k: {
          var T = t.type, x = t.pendingProps, z = t.elementType === T ? x : vl(T, x);
          return fE(e, t, T, z, a);
        }
        case b: {
          var A = t.type, W = t.pendingProps, G = t.elementType === A ? W : vl(A, W);
          return L0(e, t, A, G, a);
        }
        case M:
          return N_(e, t, a);
        case Y:
          return M_(e, t, a);
        case j:
          return A_(e, t);
        case he:
          return A0(e, t, a);
        case H:
          return J_(e, t, a);
        case fe: {
          var te = t.type, Te = t.pendingProps, Qe = t.elementType === te ? Te : vl(te, Te);
          return b0(e, t, te, Qe, a);
        }
        case X:
          return D_(e, t, a);
        case K:
          return O_(e, t, a);
        case De:
          return L_(e, t, a);
        case ce:
          return Z_(e, t, a);
        case Z:
          return ek(e, t, a);
        case Ye: {
          var je = t.type, Lt = t.pendingProps, xt = vl(je, Lt);
          if (t.type !== t.elementType) {
            var V = je.propTypes;
            V && sl(
              V,
              xt,
              // Resolved for outer only
              "prop",
              Nt(je)
            );
          }
          return xt = vl(je.type, xt), _0(e, t, je, xt, a);
        }
        case Me:
          return k0(e, t, t.type, t.pendingProps, a);
        case tt: {
          var ne = t.type, $ = t.pendingProps, pe = t.elementType === ne ? $ : vl(ne, $);
          return z_(e, t, ne, pe, a);
        }
        case Gt:
          return P0(e, t, a);
        case At:
          break;
        case We:
          return D0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= kt;
    }
    function V0(e) {
      e.flags |= Rn, e.flags |= _o;
    }
    var $0, EE, I0, Y0;
    $0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Y || u.tag === j)
          Tb(e, u.stateNode);
        else if (u.tag !== H) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, EE = function(e, t) {
    }, I0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var p = t.stateNode, y = vS(), S = bb(p, a, s, i, u, y);
        t.updateQueue = S, S && td(t);
      }
    }, Y0 = function(e, t, a, i) {
      a !== i && td(t);
    };
    function nv(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Br(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ue, i = Ve;
      if (t) {
        if ((e.mode & jt) !== $e) {
          for (var S = e.selfBaseDuration, T = e.child; T !== null; )
            a = st(a, st(T.lanes, T.childLanes)), i |= T.subtreeFlags & Fn, i |= T.flags & Fn, S += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = S;
        } else
          for (var x = e.child; x !== null; )
            a = st(a, st(x.lanes, x.childLanes)), i |= x.subtreeFlags & Fn, i |= x.flags & Fn, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & jt) !== $e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, p = e.child; p !== null; )
            a = st(a, st(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, u += p.actualDuration, s += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = st(a, st(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function rk(e, t, a) {
      if (B1() && (t.mode & Et) !== $e && (t.flags & Be) === Ve)
        return RR(t), If(), t.flags |= Kr | Cs | Jr, !1;
      var i = gm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (j1(t), Br(t), (t.mode & jt) !== $e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (If(), (t.flags & Be) === Ve && (t.memoizedState = null), t.flags |= kt, Br(t), (t.mode & jt) !== $e) {
            var p = a !== null;
            if (p) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return wR(), !0;
    }
    function W0(e, t, a) {
      var i = t.pendingProps;
      switch (Wg(t), t.tag) {
        case F:
        case Tt:
        case Me:
        case k:
        case fe:
        case X:
        case K:
        case De:
        case Z:
        case Ye:
          return Br(t), null;
        case b: {
          var u = t.type;
          return Jl(u) && dm(t), Br(t), null;
        }
        case M: {
          var s = t.stateNode;
          if (Qf(t), Vg(t), SS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var p = gm(t);
            if (p)
              td(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Kr) !== Ve) && (t.flags |= Qn, wR());
            }
          }
          return EE(e, t), Br(t), null;
        }
        case Y: {
          hS(t);
          var S = PR(), T = t.type;
          if (e !== null && t.stateNode != null)
            I0(e, t, T, i, S), e.ref !== t.ref && V0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Br(t), null;
            }
            var x = vS(), z = gm(t);
            if (z)
              F1(t, S, x) && td(t);
            else {
              var A = wb(T, i, S, x, t);
              $0(A, t, !1, !1), t.stateNode = A, xb(A, T, i, S) && td(t);
            }
            t.ref !== null && V0(t);
          }
          return Br(t), null;
        }
        case j: {
          var W = i;
          if (e && t.stateNode != null) {
            var G = e.memoizedProps;
            Y0(e, t, G, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = PR(), Te = vS(), Qe = gm(t);
            Qe ? P1(t) && td(t) : t.stateNode = _b(W, te, Te, t);
          }
          return Br(t), null;
        }
        case he: {
          Kf(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = rk(e, t, je);
            if (!Lt)
              return t.flags & Jr ? t : null;
          }
          if ((t.flags & Be) !== Ve)
            return t.lanes = a, (t.mode & jt) !== $e && IS(t), t;
          var xt = je !== null, V = e !== null && e.memoizedState !== null;
          if (xt !== V && xt) {
            var ne = t.child;
            if (ne.flags |= zn, (t.mode & Et) !== $e) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              $ || mS(dl.current, BR) ? aD() : PE();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= kt), Br(t), (t.mode & jt) !== $e && xt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case H:
          return Qf(t), EE(e, t), e === null && E1(t.stateNode.containerInfo), Br(t), null;
        case ce:
          var be = t.type._context;
          return lS(be, t), Br(t), null;
        case tt: {
          var et = t.type;
          return Jl(et) && dm(t), Br(t), null;
        }
        case Gt: {
          Kf(t);
          var lt = t.memoizedState;
          if (lt === null)
            return Br(t), null;
          var rn = (t.flags & Be) !== Ve, Vt = lt.rendering;
          if (Vt === null)
            if (rn)
              nv(lt, !1);
            else {
              var Jn = lD() && (e === null || (e.flags & Be) === Ve);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var $n = Am($t);
                  if ($n !== null) {
                    rn = !0, t.flags |= Be, nv(lt, !1);
                    var sa = $n.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= kt), t.subtreeFlags = Ve, Q1(t, a), Qo(t, yS(dl.current, $p)), t.child;
                  }
                  $t = $t.sibling;
                }
              lt.tail !== null && Gn() > pw() && (t.flags |= Be, rn = !0, nv(lt, !1), t.lanes = Qd);
            }
          else {
            if (!rn) {
              var Wr = Am(Vt);
              if (Wr !== null) {
                t.flags |= Be, rn = !0;
                var hi = Wr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= kt), nv(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !Vt.alternate && !jr())
                  return Br(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Gn() * 2 - lt.renderingStartTime > pw() && a !== Ea && (t.flags |= Be, rn = !0, nv(lt, !1), t.lanes = Qd);
            }
            if (lt.isBackwards)
              Vt.sibling = t.child, t.child = Vt;
            else {
              var ba = lt.last;
              ba !== null ? ba.sibling = Vt : t.child = Vt, lt.last = Vt;
            }
          }
          if (lt.tail !== null) {
            var _a = lt.tail;
            lt.rendering = _a, lt.tail = _a.sibling, lt.renderingStartTime = Gn(), _a.sibling = null;
            var ca = dl.current;
            return rn ? ca = yS(ca, $p) : ca = Gf(ca), Qo(t, ca), _a;
          }
          return Br(t), null;
        }
        case At:
          break;
        case We:
        case It: {
          FE(t);
          var no = t.memoizedState, sd = no !== null;
          if (e !== null) {
            var gv = e.memoizedState, lu = gv !== null;
            lu !== sd && (t.flags |= zn);
          }
          return !sd || (t.mode & Et) === $e ? Br(t) : na(iu, Ea) && (Br(t), t.subtreeFlags & (bn | kt) && (t.flags |= zn)), null;
        }
        case Ut:
          return null;
        case Ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ak(e, t, a) {
      switch (Wg(t), t.tag) {
        case b: {
          var i = t.type;
          Jl(i) && dm(t);
          var u = t.flags;
          return u & Jr ? (t.flags = u & -65537 | Be, (t.mode & jt) !== $e && IS(t), t) : null;
        }
        case M: {
          t.stateNode, Qf(t), Vg(t), SS();
          var s = t.flags;
          return (s & Jr) !== Ve && (s & Be) === Ve ? (t.flags = s & -65537 | Be, t) : null;
        }
        case Y:
          return hS(t), null;
        case he: {
          Kf(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            If();
          }
          var y = t.flags;
          return y & Jr ? (t.flags = y & -65537 | Be, (t.mode & jt) !== $e && IS(t), t) : null;
        }
        case Gt:
          return Kf(t), null;
        case H:
          return Qf(t), null;
        case ce:
          var S = t.type._context;
          return lS(S, t), null;
        case We:
        case It:
          return FE(t), null;
        case Ut:
          return null;
        default:
          return null;
      }
    }
    function q0(e, t, a) {
      switch (Wg(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && dm(t);
          break;
        }
        case M: {
          t.stateNode, Qf(t), Vg(t), SS();
          break;
        }
        case Y: {
          hS(t);
          break;
        }
        case H:
          Qf(t);
          break;
        case he:
          Kf(t);
          break;
        case Gt:
          Kf(t);
          break;
        case ce:
          var u = t.type._context;
          lS(u, t);
          break;
        case We:
        case It:
          FE(t);
          break;
      }
    }
    var Q0 = null;
    Q0 = /* @__PURE__ */ new Set();
    var ay = !1, Vr = !1, ik = typeof WeakSet == "function" ? WeakSet : Set, Ue = null, nd = null, rd = null;
    function lk(e) {
      Al(null, function() {
        throw e;
      }), Es();
    }
    var uk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & jt)
        try {
          ru(), t.componentWillUnmount();
        } finally {
          nu(e);
        }
      else
        t.componentWillUnmount();
    };
    function G0(e, t) {
      try {
        Xo(vr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function CE(e, t, a) {
      try {
        uk(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function ok(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function K0(e, t) {
      try {
        J0(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function ad(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Xe && yt && e.mode & jt)
              try {
                ru(), i = a(null);
              } finally {
                nu(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          a.current = null;
    }
    function iy(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var X0 = !1;
    function sk(e, t) {
      Cb(e.containerInfo), Ue = t, ck();
      var a = X0;
      return X0 = !1, a;
    }
    function ck() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        (e.subtreeFlags & zl) !== Ve && t !== null ? (t.return = e, Ue = t) : fk();
      }
    }
    function fk() {
      for (; Ue !== null; ) {
        var e = Ue;
        Jt(e);
        try {
          dk(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function dk(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qn) !== Ve) {
        switch (Jt(e), e.tag) {
          case k:
          case fe:
          case Me:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !pc && (s.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), s.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var p = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vl(e.type, i), u);
              {
                var y = Q0;
                p === void 0 && !y.has(e.type) && (y.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case M: {
            {
              var S = e.stateNode;
              Wb(S.containerInfo);
            }
            break;
          }
          case Y:
          case j:
          case H:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        pn();
      }
    }
    function ml(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, p = s;
        do {
          if ((p.tag & e) === e) {
            var y = p.destroy;
            p.destroy = void 0, y !== void 0 && ((e & Hr) !== Ia ? rl(t) : (e & vr) !== Ia && ws(t), (e & Zl) !== Ia && hv(!0), iy(t, a, y), (e & Zl) !== Ia && hv(!1), (e & Hr) !== Ia ? Hl() : (e & vr) !== Ia && Wd());
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function Xo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== Ia ? Yd(t) : (e & vr) !== Ia && qc(t);
            var p = s.create;
            (e & Zl) !== Ia && hv(!0), s.destroy = p(), (e & Zl) !== Ia && hv(!1), (e & Hr) !== Ia ? dh() : (e & vr) !== Ia && ph();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (s.tag & vr) !== Ve ? S = "useLayoutEffect" : (s.tag & Zl) !== Ve ? S = "useInsertionEffect" : S = "useEffect";
                var T = void 0;
                y === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? T = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + y, m("%s must not return anything besides a function, which is used for clean-up.%s", S, T);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function pk(e, t) {
      if ((t.flags & kt) !== Ve)
        switch (t.tag) {
          case De: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, p = p0(), y = t.alternate === null ? "mount" : "update";
            d0() && (y = "nested-update"), typeof s == "function" && s(u, y, a, p);
            var S = t.return;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case M:
                  var T = S.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case De:
                  var x = S.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
              }
              S = S.return;
            }
            break;
          }
        }
    }
    function vk(e, t, a, i) {
      if ((a.flags & Pl) !== Ve)
        switch (a.tag) {
          case k:
          case fe:
          case Me: {
            if (!Vr)
              if (a.mode & jt)
                try {
                  ru(), Xo(vr | pr, a);
                } finally {
                  nu(a);
                }
              else
                Xo(vr | pr, a);
            break;
          }
          case b: {
            var u = a.stateNode;
            if (a.flags & kt && !Vr)
              if (t === null)
                if (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & jt)
                  try {
                    ru(), u.componentDidMount();
                  } finally {
                    nu(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vl(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & jt)
                  try {
                    ru(), u.componentDidUpdate(s, p, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nu(a);
                  }
                else
                  u.componentDidUpdate(s, p, u.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), FR(a, y, u));
            break;
          }
          case M: {
            var S = a.updateQueue;
            if (S !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Y:
                    T = a.child.stateNode;
                    break;
                  case b:
                    T = a.child.stateNode;
                    break;
                }
              FR(a, S, T);
            }
            break;
          }
          case Y: {
            var x = a.stateNode;
            if (t === null && a.flags & kt) {
              var z = a.type, A = a.memoizedProps;
              Nb(x, z, A);
            }
            break;
          }
          case j:
            break;
          case H:
            break;
          case De: {
            {
              var W = a.memoizedProps, G = W.onCommit, te = W.onRender, Te = a.stateNode.effectDuration, Qe = p0(), je = t === null ? "mount" : "update";
              d0() && (je = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, je, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Qe);
              {
                typeof G == "function" && G(a.memoizedProps.id, je, Te, Qe), fD(a);
                var Lt = a.return;
                e: for (; Lt !== null; ) {
                  switch (Lt.tag) {
                    case M:
                      var xt = Lt.stateNode;
                      xt.effectDuration += Te;
                      break e;
                    case De:
                      var V = Lt.stateNode;
                      V.effectDuration += Te;
                      break e;
                  }
                  Lt = Lt.return;
                }
              }
            }
            break;
          }
          case he: {
            Rk(e, a);
            break;
          }
          case Gt:
          case tt:
          case At:
          case We:
          case It:
          case Ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & Rn && J0(a);
    }
    function hk(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          if (e.mode & jt)
            try {
              ru(), G0(e, e.return);
            } finally {
              nu(e);
            }
          else
            G0(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ok(e, e.return, t), K0(e, e.return);
          break;
        }
        case Y: {
          K0(e, e.return);
          break;
        }
      }
    }
    function mk(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Y) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Vb(u) : Ib(i.stateNode, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
          }
        } else if (i.tag === j) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? $b(s) : Yb(s, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
        } else if (!((i.tag === We || i.tag === It) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function J0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Y:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & jt)
            try {
              ru(), u = t(i);
            } finally {
              nu(e);
            }
          else
            u = t(i);
          typeof u == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = i;
      }
    }
    function yk(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Z0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Z0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Y) {
          var a = e.stateNode;
          a !== null && w1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function gk(e) {
      for (var t = e.return; t !== null; ) {
        if (ew(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ew(e) {
      return e.tag === Y || e.tag === M || e.tag === H;
    }
    function tw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ew(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Y && t.tag !== j && t.tag !== _t; ) {
          if (t.flags & bn || t.child === null || t.tag === H)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & bn))
          return t.stateNode;
      }
    }
    function Sk(e) {
      var t = gk(e);
      switch (t.tag) {
        case Y: {
          var a = t.stateNode;
          t.flags & oi && (rR(a), t.flags &= -33);
          var i = tw(e);
          wE(e, i, a);
          break;
        }
        case M:
        case H: {
          var u = t.stateNode.containerInfo, s = tw(e);
          RE(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function RE(e, t, a) {
      var i = e.tag, u = i === Y || i === j;
      if (u) {
        var s = e.stateNode;
        t ? Pb(a, s, t) : zb(a, s);
      } else if (i !== H) {
        var p = e.child;
        if (p !== null) {
          RE(p, t, a);
          for (var y = p.sibling; y !== null; )
            RE(y, t, a), y = y.sibling;
        }
      }
    }
    function wE(e, t, a) {
      var i = e.tag, u = i === Y || i === j;
      if (u) {
        var s = e.stateNode;
        t ? Fb(a, s, t) : Ub(a, s);
      } else if (i !== H) {
        var p = e.child;
        if (p !== null) {
          wE(p, t, a);
          for (var y = p.sibling; y !== null; )
            wE(y, t, a), y = y.sibling;
        }
      }
    }
    var $r = null, yl = !1;
    function Ek(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Y: {
              $r = i.stateNode, yl = !1;
              break e;
            }
            case M: {
              $r = i.stateNode.containerInfo, yl = !0;
              break e;
            }
            case H: {
              $r = i.stateNode.containerInfo, yl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nw(e, t, a), $r = null, yl = !1;
      }
      yk(a);
    }
    function Jo(e, t, a) {
      for (var i = a.child; i !== null; )
        nw(e, t, i), i = i.sibling;
    }
    function nw(e, t, a) {
      switch (Vd(a), a.tag) {
        case Y:
          Vr || ad(a, t);
        // eslint-disable-next-line-no-fallthrough
        case j: {
          {
            var i = $r, u = yl;
            $r = null, Jo(e, t, a), $r = i, yl = u, $r !== null && (yl ? Hb($r, a.stateNode) : jb($r, a.stateNode));
          }
          return;
        }
        case _t: {
          $r !== null && (yl ? Bb($r, a.stateNode) : Ag($r, a.stateNode));
          return;
        }
        case H: {
          {
            var s = $r, p = yl;
            $r = a.stateNode.containerInfo, yl = !0, Jo(e, t, a), $r = s, yl = p;
          }
          return;
        }
        case k:
        case fe:
        case Ye:
        case Me: {
          if (!Vr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var T = S.next, x = T;
                do {
                  var z = x, A = z.destroy, W = z.tag;
                  A !== void 0 && ((W & Zl) !== Ia ? iy(a, t, A) : (W & vr) !== Ia && (ws(a), a.mode & jt ? (ru(), iy(a, t, A), nu(a)) : iy(a, t, A), Wd())), x = x.next;
                } while (x !== T);
              }
            }
          }
          Jo(e, t, a);
          return;
        }
        case b: {
          if (!Vr) {
            ad(a, t);
            var G = a.stateNode;
            typeof G.componentWillUnmount == "function" && CE(a, t, G);
          }
          Jo(e, t, a);
          return;
        }
        case At: {
          Jo(e, t, a);
          return;
        }
        case We: {
          if (
            // TODO: Remove this dead flag
            a.mode & Et
          ) {
            var te = Vr;
            Vr = te || a.memoizedState !== null, Jo(e, t, a), Vr = te;
          } else
            Jo(e, t, a);
          break;
        }
        default: {
          Jo(e, t, a);
          return;
        }
      }
    }
    function Ck(e) {
      e.memoizedState;
    }
    function Rk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && l1(s);
          }
        }
      }
    }
    function rw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ik()), t.forEach(function(i) {
          var u = gD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ta)
              if (nd !== null && rd !== null)
                vv(rd, nd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function wk(e, t, a) {
      nd = a, rd = e, Jt(t), aw(t, e), Jt(t), nd = null, rd = null;
    }
    function gl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Ek(e, t, s);
          } catch (S) {
            vn(s, t, S);
          }
        }
      var p = _l();
      if (t.subtreeFlags & Fl)
        for (var y = t.child; y !== null; )
          Jt(y), aw(y, e), y = y.sibling;
      Jt(p);
    }
    function aw(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case k:
        case fe:
        case Ye:
        case Me: {
          if (gl(t, e), au(e), u & kt) {
            try {
              ml(Zl | pr, e, e.return), Xo(Zl | pr, e);
            } catch (et) {
              vn(e, e.return, et);
            }
            if (e.mode & jt) {
              try {
                ru(), ml(vr | pr, e, e.return);
              } catch (et) {
                vn(e, e.return, et);
              }
              nu(e);
            } else
              try {
                ml(vr | pr, e, e.return);
              } catch (et) {
                vn(e, e.return, et);
              }
          }
          return;
        }
        case b: {
          gl(t, e), au(e), u & Rn && i !== null && ad(i, i.return);
          return;
        }
        case Y: {
          gl(t, e), au(e), u & Rn && i !== null && ad(i, i.return);
          {
            if (e.flags & oi) {
              var s = e.stateNode;
              try {
                rR(s);
              } catch (et) {
                vn(e, e.return, et);
              }
            }
            if (u & kt) {
              var p = e.stateNode;
              if (p != null) {
                var y = e.memoizedProps, S = i !== null ? i.memoizedProps : y, T = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    Mb(p, x, T, S, y, e);
                  } catch (et) {
                    vn(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case j: {
          if (gl(t, e), au(e), u & kt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, A = e.memoizedProps, W = i !== null ? i.memoizedProps : A;
            try {
              Ab(z, W, A);
            } catch (et) {
              vn(e, e.return, et);
            }
          }
          return;
        }
        case M: {
          if (gl(t, e), au(e), u & kt && i !== null) {
            var G = i.memoizedState;
            if (G.isDehydrated)
              try {
                i1(t.containerInfo);
              } catch (et) {
                vn(e, e.return, et);
              }
          }
          return;
        }
        case H: {
          gl(t, e), au(e);
          return;
        }
        case he: {
          gl(t, e), au(e);
          var te = e.child;
          if (te.flags & zn) {
            var Te = te.stateNode, Qe = te.memoizedState, je = Qe !== null;
            if (Te.isHidden = je, je) {
              var Lt = te.alternate !== null && te.alternate.memoizedState !== null;
              Lt || rD();
            }
          }
          if (u & kt) {
            try {
              Ck(e);
            } catch (et) {
              vn(e, e.return, et);
            }
            rw(e);
          }
          return;
        }
        case We: {
          var xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Et
          ) {
            var V = Vr;
            Vr = V || xt, gl(t, e), Vr = V;
          } else
            gl(t, e);
          if (au(e), u & zn) {
            var ne = e.stateNode, $ = e.memoizedState, pe = $ !== null, Oe = e;
            if (ne.isHidden = pe, pe && !xt && (Oe.mode & Et) !== $e) {
              Ue = Oe;
              for (var be = Oe.child; be !== null; )
                Ue = be, xk(be), be = be.sibling;
            }
            mk(Oe, pe);
          }
          return;
        }
        case Gt: {
          gl(t, e), au(e), u & kt && rw(e);
          return;
        }
        case At:
          return;
        default: {
          gl(t, e), au(e);
          return;
        }
      }
    }
    function au(e) {
      var t = e.flags;
      if (t & bn) {
        try {
          Sk(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & Aa && (e.flags &= -4097);
    }
    function Tk(e, t, a) {
      nd = a, rd = t, Ue = e, iw(e, t, a), nd = null, rd = null;
    }
    function iw(e, t, a) {
      for (var i = (e.mode & Et) !== $e; Ue !== null; ) {
        var u = Ue, s = u.child;
        if (u.tag === We && i) {
          var p = u.memoizedState !== null, y = p || ay;
          if (y) {
            TE(e, t, a);
            continue;
          } else {
            var S = u.alternate, T = S !== null && S.memoizedState !== null, x = T || Vr, z = ay, A = Vr;
            ay = y, Vr = x, Vr && !A && (Ue = u, bk(u));
            for (var W = s; W !== null; )
              Ue = W, iw(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            Ue = u, ay = z, Vr = A, TE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Pl) !== Ve && s !== null ? (s.return = u, Ue = s) : TE(e, t, a);
      }
    }
    function TE(e, t, a) {
      for (; Ue !== null; ) {
        var i = Ue;
        if ((i.flags & Pl) !== Ve) {
          var u = i.alternate;
          Jt(i);
          try {
            vk(t, u, i, a);
          } catch (p) {
            vn(i, i.return, p);
          }
          pn();
        }
        if (i === e) {
          Ue = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ue = s;
          return;
        }
        Ue = i.return;
      }
    }
    function xk(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        switch (t.tag) {
          case k:
          case fe:
          case Ye:
          case Me: {
            if (t.mode & jt)
              try {
                ru(), ml(vr, t, t.return);
              } finally {
                nu(t);
              }
            else
              ml(vr, t, t.return);
            break;
          }
          case b: {
            ad(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CE(t, t.return, i);
            break;
          }
          case Y: {
            ad(t, t.return);
            break;
          }
          case We: {
            var u = t.memoizedState !== null;
            if (u) {
              lw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ue = a) : lw(e);
      }
    }
    function lw(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if (t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function bk(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        if (t.tag === We) {
          var i = t.memoizedState !== null;
          if (i) {
            uw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ue = a) : uw(e);
      }
    }
    function uw(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        Jt(t);
        try {
          hk(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function _k(e, t, a, i) {
      Ue = t, kk(t, e, a, i);
    }
    function kk(e, t, a, i) {
      for (; Ue !== null; ) {
        var u = Ue, s = u.child;
        (u.subtreeFlags & tl) !== Ve && s !== null ? (s.return = u, Ue = s) : Dk(e, t, a, i);
      }
    }
    function Dk(e, t, a, i) {
      for (; Ue !== null; ) {
        var u = Ue;
        if ((u.flags & Xr) !== Ve) {
          Jt(u);
          try {
            Ok(t, u, a, i);
          } catch (p) {
            vn(u, u.return, p);
          }
          pn();
        }
        if (u === e) {
          Ue = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ue = s;
          return;
        }
        Ue = u.return;
      }
    }
    function Ok(e, t, a, i) {
      switch (t.tag) {
        case k:
        case fe:
        case Me: {
          if (t.mode & jt) {
            $S();
            try {
              Xo(Hr | pr, t);
            } finally {
              VS(t);
            }
          } else
            Xo(Hr | pr, t);
          break;
        }
      }
    }
    function Lk(e) {
      Ue = e, Nk();
    }
    function Nk() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        if ((Ue.flags & Ma) !== Ve) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ue = u, Uk(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var p = s.child;
                if (p !== null) {
                  s.child = null;
                  do {
                    var y = p.sibling;
                    p.sibling = null, p = y;
                  } while (p !== null);
                }
              }
            }
            Ue = e;
          }
        }
        (e.subtreeFlags & tl) !== Ve && t !== null ? (t.return = e, Ue = t) : Mk();
      }
    }
    function Mk() {
      for (; Ue !== null; ) {
        var e = Ue;
        (e.flags & Xr) !== Ve && (Jt(e), Ak(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function Ak(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          e.mode & jt ? ($S(), ml(Hr | pr, e, e.return), VS(e)) : ml(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function Uk(e, t) {
      for (; Ue !== null; ) {
        var a = Ue;
        Jt(a), Fk(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Ue = i) : zk(e);
      }
    }
    function zk(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.sibling, i = t.return;
        if (Z0(t), t === e) {
          Ue = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ue = a;
          return;
        }
        Ue = i;
      }
    }
    function Fk(e, t) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          e.mode & jt ? ($S(), ml(Hr, e, t), VS(e)) : ml(Hr, e, t);
          break;
        }
      }
    }
    function Pk(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          try {
            Xo(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function jk(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          try {
            Xo(Hr | pr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Hk(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me: {
          try {
            ml(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CE(e, e.return, t);
          break;
        }
      }
    }
    function Bk(e) {
      switch (e.tag) {
        case k:
        case fe:
        case Me:
          try {
            ml(Hr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rv = Symbol.for;
      rv("selector.component"), rv("selector.has_pseudo_class"), rv("selector.role"), rv("selector.test_id"), rv("selector.text");
    }
    var Vk = [];
    function $k() {
      Vk.forEach(function(e) {
        return e();
      });
    }
    var Ik = v.ReactCurrentActQueue;
    function Yk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ow() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ik.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Wk = Math.ceil, xE = v.ReactCurrentDispatcher, bE = v.ReactCurrentOwner, Ir = v.ReactCurrentBatchConfig, Sl = v.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), sw = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Ii = (
      /*                */
      4
    ), Ju = 0, av = 1, vc = 2, ly = 3, iv = 4, cw = 5, _E = 6, Ot = yr, Ta = null, Nn = null, gr = ue, iu = ue, kE = Vo(ue), Sr = Ju, lv = null, uy = ue, uv = ue, oy = ue, ov = null, Ya = null, DE = 0, fw = 500, dw = 1 / 0, qk = 500, Zu = null;
    function sv() {
      dw = Gn() + qk;
    }
    function pw() {
      return dw;
    }
    var sy = !1, OE = null, id = null, hc = !1, Zo = null, cv = ue, LE = [], NE = null, Qk = 50, fv = 0, ME = null, AE = !1, cy = !1, Gk = 50, ld = 0, fy = null, dv = an, dy = ue, vw = !1;
    function py() {
      return Ta;
    }
    function xa() {
      return (Ot & (Yr | Ii)) !== yr ? Gn() : (dv !== an || (dv = Gn()), dv);
    }
    function es(e) {
      var t = e.mode;
      if ((t & Et) === $e)
        return Je;
      if ((Ot & Yr) !== yr && gr !== ue)
        return zs(gr);
      var a = I1() !== $1;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return dy === zt && (dy = ep()), dy;
      }
      var u = Ha();
      if (u !== zt)
        return u;
      var s = kb();
      return s;
    }
    function Kk(e) {
      var t = e.mode;
      return (t & Et) === $e ? Je : Sh();
    }
    function Er(e, t, a, i) {
      ED(), vw && m("useInsertionEffect must not schedule updates."), AE && (cy = !0), Lo(e, a, i), (Ot & Yr) !== ue && e === Ta ? wD(t) : (ta && js(e, t, a), TD(t), e === Ta && ((Ot & Yr) === yr && (uv = st(uv, a)), Sr === iv && ts(e, gr)), Wa(e, i), a === Je && Ot === yr && (t.mode & Et) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (sv(), vR()));
    }
    function Xk(e, t, a) {
      var i = e.current;
      i.lanes = t, Lo(e, t, a), Wa(e, a);
    }
    function Jk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ot & Yr) !== yr
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      vf(e, t);
      var i = pf(e, e === Ta ? gr : ue);
      if (i === ue) {
        a !== null && Ow(a), e.callbackNode = null, e.callbackPriority = zt;
        return;
      }
      var u = $l(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && a !== BE)) {
        a == null && s !== Je && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Ow(a);
      var p;
      if (u === Je)
        e.tag === $o ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), b1(yw.bind(null, e))) : pR(yw.bind(null, e)), Sl.current !== null ? Sl.current.push(Io) : Ob(function() {
          (Ot & (Yr | Ii)) === yr && Io();
        }), p = null;
      else {
        var y;
        switch (bh(i)) {
          case Ar:
            y = Rs;
            break;
          case Ai:
            y = jl;
            break;
          case Pa:
            y = nl;
            break;
          case ja:
            y = _u;
            break;
          default:
            y = nl;
            break;
        }
        p = VE(y, hw.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = p;
    }
    function hw(e, t) {
      if (m_(), dv = an, dy = ue, (Ot & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = to();
      if (i && e.callbackNode !== a)
        return null;
      var u = pf(e, e === Ta ? gr : ue);
      if (u === ue)
        return null;
      var s = !mf(e, u) && !gh(e, u) && !t, p = s ? oD(e, u) : hy(e, u);
      if (p !== Ju) {
        if (p === vc) {
          var y = hf(e);
          y !== ue && (u = y, p = UE(e, y));
        }
        if (p === av) {
          var S = lv;
          throw mc(e, ue), ts(e, u), Wa(e, Gn()), S;
        }
        if (p === _E)
          ts(e, u);
        else {
          var T = !mf(e, u), x = e.current.alternate;
          if (T && !eD(x)) {
            if (p = hy(e, u), p === vc) {
              var z = hf(e);
              z !== ue && (u = z, p = UE(e, z));
            }
            if (p === av) {
              var A = lv;
              throw mc(e, ue), ts(e, u), Wa(e, Gn()), A;
            }
          }
          e.finishedWork = x, e.finishedLanes = u, Zk(e, p, u);
        }
      }
      return Wa(e, Gn()), e.callbackNode === a ? hw.bind(null, e) : null;
    }
    function UE(e, t) {
      var a = ov;
      if (Sf(e)) {
        var i = mc(e, t);
        i.flags |= Kr, S1(e.containerInfo);
      }
      var u = hy(e, t);
      if (u !== vc) {
        var s = Ya;
        Ya = a, s !== null && mw(s);
      }
      return u;
    }
    function mw(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Zk(e, t, a) {
      switch (t) {
        case Ju:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case vc: {
          yc(e, Ya, Zu);
          break;
        }
        case ly: {
          if (ts(e, a), Pu(a) && // do not delay if we're inside an act() scope
          !Lw()) {
            var i = DE + fw - Gn();
            if (i > 10) {
              var u = pf(e, ue);
              if (u !== ue)
                break;
              var s = e.suspendedLanes;
              if (!ju(s, a)) {
                xa(), yf(e, s);
                break;
              }
              e.timeoutHandle = Ng(yc.bind(null, e, Ya, Zu), i);
              break;
            }
          }
          yc(e, Ya, Zu);
          break;
        }
        case iv: {
          if (ts(e, a), Jd(a))
            break;
          if (!Lw()) {
            var p = ci(e, a), y = p, S = Gn() - y, T = SD(S) - S;
            if (T > 10) {
              e.timeoutHandle = Ng(yc.bind(null, e, Ya, Zu), T);
              break;
            }
          }
          yc(e, Ya, Zu);
          break;
        }
        case cw: {
          yc(e, Ya, Zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function eD(e) {
      for (var t = e; ; ) {
        if (t.flags & bo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], p = s.getSnapshot, y = s.value;
                try {
                  if (!xe(p(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & bo && S !== null) {
          S.return = t, t = S;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ts(e, t) {
      t = Fs(t, oy), t = Fs(t, uv), Rh(e, t);
    }
    function yw(e) {
      if (y_(), (Ot & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      to();
      var t = pf(e, ue);
      if (!na(t, Je))
        return Wa(e, Gn()), null;
      var a = hy(e, t);
      if (e.tag !== $o && a === vc) {
        var i = hf(e);
        i !== ue && (t = i, a = UE(e, i));
      }
      if (a === av) {
        var u = lv;
        throw mc(e, ue), ts(e, t), Wa(e, Gn()), u;
      }
      if (a === _E)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, yc(e, Ya, Zu), Wa(e, Gn()), null;
    }
    function tD(e, t) {
      t !== ue && (gf(e, st(t, Je)), Wa(e, Gn()), (Ot & (Yr | Ii)) === yr && (sv(), Io()));
    }
    function zE(e, t) {
      var a = Ot;
      Ot |= sw;
      try {
        return e(t);
      } finally {
        Ot = a, Ot === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (sv(), vR());
      }
    }
    function nD(e, t, a, i, u) {
      var s = Ha(), p = Ir.transition;
      try {
        return Ir.transition = null, Hn(Ar), e(t, a, i, u);
      } finally {
        Hn(s), Ir.transition = p, Ot === yr && sv();
      }
    }
    function eo(e) {
      Zo !== null && Zo.tag === $o && (Ot & (Yr | Ii)) === yr && to();
      var t = Ot;
      Ot |= sw;
      var a = Ir.transition, i = Ha();
      try {
        return Ir.transition = null, Hn(Ar), e ? e() : void 0;
      } finally {
        Hn(i), Ir.transition = a, Ot = t, (Ot & (Yr | Ii)) === yr && Io();
      }
    }
    function gw() {
      return (Ot & (Yr | Ii)) !== yr;
    }
    function vy(e, t) {
      ua(kE, iu, e), iu = st(iu, t);
    }
    function FE(e) {
      iu = kE.current, la(kE, e);
    }
    function mc(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== Mg && (e.timeoutHandle = Mg, Db(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          q0(u, i), i = i.return;
        }
      Ta = e;
      var s = gc(e.current, null);
      return Nn = s, gr = iu = t, Sr = Ju, lv = null, uy = ue, uv = ue, oy = ue, ov = null, Ya = null, X1(), fl.discardPendingWarnings(), s;
    }
    function Sw(e, t) {
      do {
        var a = Nn;
        try {
          if (Tm(), $R(), pn(), bE.current = null, a === null || a.return === null) {
            Sr = av, lv = t, Nn = null;
            return;
          }
          if (Xe && a.mode & jt && Zm(a, !0), Ze)
            if (Sa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Mi(a, i, gr);
            } else
              Ts(a, t, gr);
          b_(e, a.return, a, t, gr), ww(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ew() {
      var e = xE.current;
      return xE.current = Qm, e === null ? Qm : e;
    }
    function Cw(e) {
      xE.current = e;
    }
    function rD() {
      DE = Gn();
    }
    function pv(e) {
      uy = st(e, uy);
    }
    function aD() {
      Sr === Ju && (Sr = ly);
    }
    function PE() {
      (Sr === Ju || Sr === ly || Sr === vc) && (Sr = iv), Ta !== null && (Us(uy) || Us(uv)) && ts(Ta, gr);
    }
    function iD(e) {
      Sr !== iv && (Sr = vc), ov === null ? ov = [e] : ov.push(e);
    }
    function lD() {
      return Sr === Ju;
    }
    function hy(e, t) {
      var a = Ot;
      Ot |= Yr;
      var i = Ew();
      if (Ta !== e || gr !== t) {
        if (ta) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vv(e, gr), u.clear()), wh(e, t);
        }
        Zu = ap(), mc(e, t);
      }
      Lu(t);
      do
        try {
          uD();
          break;
        } catch (s) {
          Sw(e, s);
        }
      while (!0);
      if (Tm(), Ot = a, Cw(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Qc(), Ta = null, gr = ue, Sr;
    }
    function uD() {
      for (; Nn !== null; )
        Rw(Nn);
    }
    function oD(e, t) {
      var a = Ot;
      Ot |= Yr;
      var i = Ew();
      if (Ta !== e || gr !== t) {
        if (ta) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vv(e, gr), u.clear()), wh(e, t);
        }
        Zu = ap(), sv(), mc(e, t);
      }
      Lu(t);
      do
        try {
          sD();
          break;
        } catch (s) {
          Sw(e, s);
        }
      while (!0);
      return Tm(), Cw(i), Ot = a, Nn !== null ? (vh(), Ju) : (Qc(), Ta = null, gr = ue, Sr);
    }
    function sD() {
      for (; Nn !== null && !Fd(); )
        Rw(Nn);
    }
    function Rw(e) {
      var t = e.alternate;
      Jt(e);
      var a;
      (e.mode & jt) !== $e ? (BS(e), a = jE(t, e, iu), Zm(e, !0)) : a = jE(t, e, iu), pn(), e.memoizedProps = e.pendingProps, a === null ? ww(e) : Nn = a, bE.current = null;
    }
    function ww(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Cs) === Ve) {
          Jt(t);
          var u = void 0;
          if ((t.mode & jt) === $e ? u = W0(a, t, iu) : (BS(t), u = W0(a, t, iu), Zm(t, !1)), pn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = ak(a, t);
          if (s !== null) {
            s.flags &= oh, Nn = s;
            return;
          }
          if ((t.mode & jt) !== $e) {
            Zm(t, !1);
            for (var p = t.actualDuration, y = t.child; y !== null; )
              p += y.actualDuration, y = y.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Cs, i.subtreeFlags = Ve, i.deletions = null;
          else {
            Sr = _E, Nn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          Nn = S;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      Sr === Ju && (Sr = cw);
    }
    function yc(e, t, a) {
      var i = Ha(), u = Ir.transition;
      try {
        Ir.transition = null, Hn(Ar), cD(e, t, a, i);
      } finally {
        Ir.transition = u, Hn(i);
      }
      return null;
    }
    function cD(e, t, a, i) {
      do
        to();
      while (Zo !== null);
      if (CD(), (Ot & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if ($d(s), u === null)
        return Id(), null;
      if (s === ue && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ue, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zt;
      var p = st(u.lanes, u.childLanes);
      np(e, p), e === Ta && (Ta = null, Nn = null, gr = ue), ((u.subtreeFlags & tl) !== Ve || (u.flags & tl) !== Ve) && (hc || (hc = !0, NE = a, VE(nl, function() {
        return to(), null;
      })));
      var y = (u.subtreeFlags & (zl | Fl | Pl | tl)) !== Ve, S = (u.flags & (zl | Fl | Pl | tl)) !== Ve;
      if (y || S) {
        var T = Ir.transition;
        Ir.transition = null;
        var x = Ha();
        Hn(Ar);
        var z = Ot;
        Ot |= Ii, bE.current = null, sk(e, u), v0(), wk(e, u, s), Rb(e.containerInfo), e.current = u, xs(s), Tk(u, e, s), bs(), Pd(), Ot = z, Hn(x), Ir.transition = T;
      } else
        e.current = u, v0();
      var A = hc;
      if (hc ? (hc = !1, Zo = e, cv = s) : (ld = 0, fy = null), p = e.pendingLanes, p === ue && (id = null), A || _w(e.current, !1), Hd(u.stateNode, i), ta && e.memoizedUpdaters.clear(), $k(), Wa(e, Gn()), t !== null)
        for (var W = e.onRecoverableError, G = 0; G < t.length; G++) {
          var te = t[G], Te = te.stack, Qe = te.digest;
          W(te.value, {
            componentStack: Te,
            digest: Qe
          });
        }
      if (sy) {
        sy = !1;
        var je = OE;
        throw OE = null, je;
      }
      return na(cv, Je) && e.tag !== $o && to(), p = e.pendingLanes, na(p, Je) ? (h_(), e === ME ? fv++ : (fv = 0, ME = e)) : fv = 0, Io(), Id(), null;
    }
    function to() {
      if (Zo !== null) {
        var e = bh(cv), t = Bs(Pa, e), a = Ir.transition, i = Ha();
        try {
          return Ir.transition = null, Hn(t), dD();
        } finally {
          Hn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function fD(e) {
      LE.push(e), hc || (hc = !0, VE(nl, function() {
        return to(), null;
      }));
    }
    function dD() {
      if (Zo === null)
        return !1;
      var e = NE;
      NE = null;
      var t = Zo, a = cv;
      if (Zo = null, cv = ue, (Ot & (Yr | Ii)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AE = !0, cy = !1, Ou(a);
      var i = Ot;
      Ot |= Ii, Lk(t.current), _k(t, t.current, a, e);
      {
        var u = LE;
        LE = [];
        for (var s = 0; s < u.length; s++) {
          var p = u[s];
          pk(t, p);
        }
      }
      qd(), _w(t.current, !0), Ot = i, Io(), cy ? t === fy ? ld++ : (ld = 0, fy = t) : ld = 0, AE = !1, cy = !1, Bd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Tw(e) {
      return id !== null && id.has(e);
    }
    function pD(e) {
      id === null ? id = /* @__PURE__ */ new Set([e]) : id.add(e);
    }
    function vD(e) {
      sy || (sy = !0, OE = e);
    }
    var hD = vD;
    function xw(e, t, a) {
      var i = dc(a, t), u = R0(e, i, Je), s = Wo(e, u, Je), p = xa();
      s !== null && (Lo(s, Je, p), Wa(s, p));
    }
    function vn(e, t, a) {
      if (lk(a), hv(!1), e.tag === M) {
        xw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          xw(i, e, a);
          return;
        } else if (i.tag === b) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Tw(s)) {
            var p = dc(a, e), y = iE(i, p, Je), S = Wo(i, y, Je), T = xa();
            S !== null && (Lo(S, Je, T), Wa(S, T));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function mD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      yf(e, a), xD(e), Ta === e && ju(gr, a) && (Sr === iv || Sr === ly && Pu(gr) && Gn() - DE < fw ? mc(e, ue) : oy = st(oy, a)), Wa(e, u);
    }
    function bw(e, t) {
      t === zt && (t = Kk(e));
      var a = xa(), i = $a(e, t);
      i !== null && (Lo(i, t, a), Wa(i, a));
    }
    function yD(e) {
      var t = e.memoizedState, a = zt;
      t !== null && (a = t.retryLane), bw(e, a);
    }
    function gD(e, t) {
      var a = zt, i;
      switch (e.tag) {
        case he:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Gt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bw(e, a);
    }
    function SD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Wk(e / 1960) * 1960;
    }
    function ED() {
      if (fv > Qk)
        throw fv = 0, ME = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > Gk && (ld = 0, fy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CD() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function _w(e, t) {
      Jt(e), my(e, Ul, Hk), t && my(e, Oi, Bk), my(e, Ul, Pk), t && my(e, Oi, jk), pn();
    }
    function my(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ve ? i = i.child : ((i.flags & t) !== Ve && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var yy = null;
    function kw(e) {
      {
        if ((Ot & Yr) !== yr || !(e.mode & Et))
          return;
        var t = e.tag;
        if (t !== F && t !== M && t !== b && t !== k && t !== fe && t !== Ye && t !== Me)
          return;
        var a = nt(e) || "ReactComponent";
        if (yy !== null) {
          if (yy.has(a))
            return;
          yy.add(a);
        } else
          yy = /* @__PURE__ */ new Set([a]);
        var i = or;
        try {
          Jt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Jt(e) : pn();
        }
      }
    }
    var jE;
    {
      var RD = null;
      jE = function(e, t, a) {
        var i = zw(RD, t);
        try {
          return B0(e, t, a);
        } catch (s) {
          if (A1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Tm(), $R(), q0(e, t), zw(t, i), t.mode & jt && BS(t), Al(null, B0, null, e, t, a), Zi()) {
            var u = Es();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Dw = !1, HE;
    HE = /* @__PURE__ */ new Set();
    function wD(e) {
      if (wi && !d_())
        switch (e.tag) {
          case k:
          case fe:
          case Me: {
            var t = Nn && nt(Nn) || "Unknown", a = t;
            if (!HE.has(a)) {
              HE.add(a);
              var i = nt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            Dw || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Dw = !0);
            break;
          }
        }
    }
    function vv(e, t) {
      if (ta) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          js(e, i, t);
        });
      }
    }
    var BE = {};
    function VE(e, t) {
      {
        var a = Sl.current;
        return a !== null ? (a.push(t), BE) : zd(e, t);
      }
    }
    function Ow(e) {
      if (e !== BE)
        return ch(e);
    }
    function Lw() {
      return Sl.current !== null;
    }
    function TD(e) {
      {
        if (e.mode & Et) {
          if (!ow())
            return;
        } else if (!Yk() || Ot !== yr || e.tag !== k && e.tag !== fe && e.tag !== Me)
          return;
        if (Sl.current === null) {
          var t = or;
          try {
            Jt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? Jt(e) : pn();
          }
        }
      }
    }
    function xD(e) {
      e.tag !== $o && ow() && Sl.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hv(e) {
      vw = e;
    }
    var Yi = null, ud = null, bD = function(e) {
      Yi = e;
    };
    function od(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $E(e) {
      return od(e);
    }
    function IE(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = od(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: le,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Nw(e, t) {
      {
        if (Yi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (u = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === at) && (u = !0);
            break;
          }
          case fe: {
            (s === le || s === at) && (u = !0);
            break;
          }
          case Ye:
          case Me: {
            (s === ut || s === at) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var p = Yi(a);
          if (p !== void 0 && p === Yi(i))
            return !0;
        }
        return !1;
      }
    }
    function Mw(e) {
      {
        if (Yi === null || typeof WeakSet != "function")
          return;
        ud === null && (ud = /* @__PURE__ */ new WeakSet()), ud.add(e);
      }
    }
    var _D = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        to(), eo(function() {
          YE(e.current, i, a);
        });
      }
    }, kD = function(e, t) {
      {
        if (e.context !== pi)
          return;
        to(), eo(function() {
          mv(t, e, null, null);
        });
      }
    };
    function YE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, p = e.tag, y = e.type, S = null;
        switch (p) {
          case k:
          case Me:
          case b:
            S = y;
            break;
          case fe:
            S = y.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, x = !1;
        if (S !== null) {
          var z = Yi(S);
          z !== void 0 && (a.has(z) ? x = !0 : t.has(z) && (p === b ? x = !0 : T = !0));
        }
        if (ud !== null && (ud.has(e) || i !== null && ud.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || T) {
          var A = $a(e, Je);
          A !== null && Er(A, e, Je, an);
        }
        u !== null && !x && YE(u, t, a), s !== null && YE(s, t, a);
      }
    }
    var DD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WE(e.current, i, a), a;
      }
    };
    function WE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, p = e.type, y = null;
        switch (s) {
          case k:
          case Me:
          case b:
            y = p;
            break;
          case fe:
            y = p.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? OD(e, a) : i !== null && WE(i, t, a), u !== null && WE(u, t, a);
      }
    }
    function OD(e, t) {
      {
        var a = LD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Y:
              t.add(i.stateNode);
              return;
            case H:
              t.add(i.stateNode.containerInfo);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function LD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Y)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var qE;
    {
      qE = !1;
      try {
        var Aw = Object.preventExtensions({});
      } catch {
        qE = !0;
      }
    }
    function ND(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ve, this.subtreeFlags = Ve, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new ND(e, t, a, i);
    };
    function QE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function MD(e) {
      return typeof e == "function" && !QE(e) && e.defaultProps === void 0;
    }
    function AD(e) {
      if (typeof e == "function")
        return QE(e) ? b : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return fe;
        if (t === ut)
          return Ye;
      }
      return F;
    }
    function gc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ve, a.subtreeFlags = Ve, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case F:
        case k:
        case Me:
          a.type = od(e.type);
          break;
        case b:
          a.type = $E(e.type);
          break;
        case fe:
          a.type = IE(e.type);
          break;
      }
      return a;
    }
    function UD(e, t) {
      e.flags &= Fn | bn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ue, e.lanes = t, e.child = null, e.subtreeFlags = Ve, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ve, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function zD(e, t, a) {
      var i;
      return e === vm ? (i = Et, t === !0 && (i |= tn, i |= Ht)) : i = $e, ta && (i |= jt), vi(M, null, null, i);
    }
    function GE(e, t, a, i, u, s) {
      var p = F, y = e;
      if (typeof e == "function")
        QE(e) ? (p = b, y = $E(y)) : y = od(y);
      else if (typeof e == "string")
        p = Y;
      else
        e: switch (e) {
          case Si:
            return ns(a.children, u, s, t);
          case Ja:
            p = K, u |= tn, (u & Et) !== $e && (u |= Ht);
            break;
          case Ei:
            return FD(a, u, s, t);
          case Re:
            return PD(a, u, s, t);
          case Ne:
            return jD(a, u, s, t);
          case xn:
            return Uw(a, u, s, t);
          case on:
          // eslint-disable-next-line no-fallthrough
          case Rt:
          // eslint-disable-next-line no-fallthrough
          case dn:
          // eslint-disable-next-line no-fallthrough
          case ur:
          // eslint-disable-next-line no-fallthrough
          case St:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ci:
                  p = ce;
                  break e;
                case L:
                  p = Z;
                  break e;
                case le:
                  p = fe, y = IE(y);
                  break e;
                case ut:
                  p = Ye;
                  break e;
                case at:
                  p = Tt, y = null;
                  break e;
              }
            var S = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var T = i ? nt(i) : null;
              T && (S += `

Check the render method of \`` + T + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
          }
        }
      var x = vi(p, a, t, u);
      return x.elementType = e, x.type = y, x.lanes = s, x._debugOwner = i, x;
    }
    function KE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, p = e.props, y = GE(u, s, p, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function ns(e, t, a, i) {
      var u = vi(X, e, i, t);
      return u.lanes = a, u;
    }
    function FD(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = vi(De, e, i, t | jt);
      return u.elementType = Ei, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function PD(e, t, a, i) {
      var u = vi(he, e, i, t);
      return u.elementType = Re, u.lanes = a, u;
    }
    function jD(e, t, a, i) {
      var u = vi(Gt, e, i, t);
      return u.elementType = Ne, u.lanes = a, u;
    }
    function Uw(e, t, a, i) {
      var u = vi(We, e, i, t);
      u.elementType = xn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function XE(e, t, a) {
      var i = vi(j, e, null, t);
      return i.lanes = a, i;
    }
    function HD() {
      var e = vi(Y, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function BD(e) {
      var t = vi(_t, null, null, $e);
      return t.stateNode = e, t;
    }
    function JE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = vi(H, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function zw(e, t) {
      return e === null && (e = vi(F, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function VD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Mg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zt, this.eventTimes = Ps(ue), this.expirationTimes = Ps(an), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = Ps(ue), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], p = 0; p < Nu; p++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case vm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case $o:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Fw(e, t, a, i, u, s, p, y, S, T) {
      var x = new VD(e, t, a, y, S), z = zD(t, s);
      x.current = z, z.stateNode = x;
      {
        var A = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = A;
      }
      return fS(z), x;
    }
    var ZE = "18.3.1";
    function $D(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var eC, tC;
    eC = !1, tC = {};
    function Pw(e) {
      if (!e)
        return pi;
      var t = xo(e), a = x1(t);
      if (t.tag === b) {
        var i = t.type;
        if (Jl(i))
          return fR(t, i, a);
      }
      return a;
    }
    function ID(e, t) {
      {
        var a = xo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Zr(a);
        if (u === null)
          return null;
        if (u.mode & tn) {
          var s = nt(a) || "Component";
          if (!tC[s]) {
            tC[s] = !0;
            var p = or;
            try {
              Jt(u), a.mode & tn ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              p ? Jt(p) : pn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function jw(e, t, a, i, u, s, p, y) {
      var S = !1, T = null;
      return Fw(e, t, S, T, a, i, u, s, p);
    }
    function Hw(e, t, a, i, u, s, p, y, S, T) {
      var x = !0, z = Fw(a, i, x, e, u, s, p, y, S);
      z.context = Pw(null);
      var A = z.current, W = xa(), G = es(A), te = Ku(W, G);
      return te.callback = t ?? null, Wo(A, te, G), Xk(z, G, W), z;
    }
    function mv(e, t, a, i) {
      jd(t, e);
      var u = t.current, s = xa(), p = es(u);
      En(p);
      var y = Pw(a);
      t.context === null ? t.context = y : t.pendingContext = y, wi && or !== null && !eC && (eC = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(or) || "Unknown"));
      var S = Ku(s, p);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var T = Wo(u, S, p);
      return T !== null && (Er(T, u, p, s), Dm(T, u, p)), p;
    }
    function gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Y:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function YD(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Sf(t)) {
            var a = mh(t);
            tD(t, a);
          }
          break;
        }
        case he: {
          eo(function() {
            var u = $a(e, Je);
            if (u !== null) {
              var s = xa();
              Er(u, e, Je, s);
            }
          });
          var i = Je;
          nC(e, i);
          break;
        }
      }
    }
    function Bw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ch(a.retryLane, t));
    }
    function nC(e, t) {
      Bw(e, t);
      var a = e.alternate;
      a && Bw(a, t);
    }
    function WD(e) {
      if (e.tag === he) {
        var t = Ns, a = $a(e, t);
        if (a !== null) {
          var i = xa();
          Er(a, e, t, i);
        }
        nC(e, t);
      }
    }
    function qD(e) {
      if (e.tag === he) {
        var t = es(e), a = $a(e, t);
        if (a !== null) {
          var i = xa();
          Er(a, e, t, i);
        }
        nC(e, t);
      }
    }
    function Vw(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var $w = function(e) {
      return null;
    };
    function QD(e) {
      return $w(e);
    }
    var Iw = function(e) {
      return !1;
    };
    function GD(e) {
      return Iw(e);
    }
    var Yw = null, Ww = null, qw = null, Qw = null, Gw = null, Kw = null, Xw = null, Jw = null, Zw = null;
    {
      var eT = function(e, t, a) {
        var i = t[a], u = mt(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (mt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = eT(e[i], t, a + 1), u);
      }, tT = function(e, t) {
        return eT(e, t, 0);
      }, nT = function(e, t, a, i) {
        var u = t[i], s = mt(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          s[p] = s[u], mt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = nT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, rT = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nT(e, t, a, 0);
      }, aT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mt(e) ? e.slice() : ft({}, e);
        return s[u] = aT(e[u], t, a + 1, i), s;
      }, iT = function(e, t, a) {
        return aT(e, t, 0, a);
      }, rC = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Yw = function(e, t, a, i) {
        var u = rC(e, t);
        if (u !== null) {
          var s = iT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = $a(e, Je);
          p !== null && Er(p, e, Je, an);
        }
      }, Ww = function(e, t, a) {
        var i = rC(e, t);
        if (i !== null) {
          var u = tT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ft({}, e.memoizedProps);
          var s = $a(e, Je);
          s !== null && Er(s, e, Je, an);
        }
      }, qw = function(e, t, a, i) {
        var u = rC(e, t);
        if (u !== null) {
          var s = rT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = $a(e, Je);
          p !== null && Er(p, e, Je, an);
        }
      }, Qw = function(e, t, a) {
        e.pendingProps = iT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Je);
        i !== null && Er(i, e, Je, an);
      }, Gw = function(e, t) {
        e.pendingProps = tT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Je);
        a !== null && Er(a, e, Je, an);
      }, Kw = function(e, t, a) {
        e.pendingProps = rT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Je);
        i !== null && Er(i, e, Je, an);
      }, Xw = function(e) {
        var t = $a(e, Je);
        t !== null && Er(t, e, Je, an);
      }, Jw = function(e) {
        $w = e;
      }, Zw = function(e) {
        Iw = e;
      };
    }
    function KD(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function XD(e) {
      return null;
    }
    function JD() {
      return or;
    }
    function ZD(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return ko({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yw,
        overrideHookStateDeletePath: Ww,
        overrideHookStateRenamePath: qw,
        overrideProps: Qw,
        overridePropsDeletePath: Gw,
        overridePropsRenamePath: Kw,
        setErrorHandler: Jw,
        setSuspenseHandler: Zw,
        scheduleUpdate: Xw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: KD,
        findFiberByHostInstance: t || XD,
        // React Refresh
        findHostInstancesForRefresh: DD,
        scheduleRefresh: _D,
        scheduleRoot: kD,
        setRefreshHandler: bD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: JD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZE
      });
    }
    var lT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function aC(e) {
      this._internalRoot = e;
    }
    Sy.prototype.render = aC.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ey(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = Vw(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mv(e, t, null, null);
    }, Sy.prototype.unmount = aC.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gw() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), eo(function() {
          mv(null, e, null, null);
        }), lR(t);
      }
    };
    function eO(e, t) {
      if (!Ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      uT(e);
      var a = !1, i = !1, u = "", s = lT;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Or && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = jw(e, vm, null, a, i, u, s);
      um(p.current, e);
      var y = e.nodeType === Un ? e.parentNode : e;
      return Rp(y), new aC(p);
    }
    function Sy(e) {
      this._internalRoot = e;
    }
    function tO(e) {
      e && Lh(e);
    }
    Sy.prototype.unstable_scheduleHydration = tO;
    function nO(e, t, a) {
      if (!Ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      uT(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, p = !1, y = "", S = lT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var T = Hw(t, null, e, vm, i, s, p, y, S);
      if (um(T.current, e), Rp(e), u)
        for (var x = 0; x < u.length; x++) {
          var z = u[x];
          l_(T, z);
        }
      return new Sy(T);
    }
    function Ey(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ji || e.nodeType === Td));
    }
    function yv(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ji || e.nodeType === Td || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function uT(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Mp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var rO = v.ReactCurrentOwner, oT;
    oT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = Vw(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = iC(e), u = !!(i && Bo(i));
      u && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function iC(e) {
      return e ? e.nodeType === Ji ? e.documentElement : e.firstChild : null;
    }
    function sT() {
    }
    function aO(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = gy(p);
            s.call(A);
          };
        }
        var p = Hw(
          t,
          i,
          e,
          $o,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sT
        );
        e._reactRootContainer = p, um(p.current, e);
        var y = e.nodeType === Un ? e.parentNode : e;
        return Rp(y), eo(), p;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var A = gy(x);
            T.call(A);
          };
        }
        var x = jw(
          e,
          $o,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sT
        );
        e._reactRootContainer = x, um(x.current, e);
        var z = e.nodeType === Un ? e.parentNode : e;
        return Rp(z), eo(function() {
          mv(t, x, a, i);
        }), x;
      }
    }
    function iO(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Cy(e, t, a, i, u) {
      oT(a), iO(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, p;
      if (!s)
        p = aO(a, t, e, u, i);
      else {
        if (p = s, typeof u == "function") {
          var y = u;
          u = function() {
            var S = gy(p);
            y.call(S);
          };
        }
        mv(t, p, e, u);
      }
      return gy(p);
    }
    var cT = !1;
    function lO(e) {
      {
        cT || (cT = !0, m("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = rO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : ID(e, "findDOMNode");
    }
    function uO(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Mp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Cy(null, e, t, !0, a);
    }
    function oO(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Mp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Cy(null, e, t, !1, a);
    }
    function sO(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !tg(e))
        throw new Error("parentComponent must be a valid React Component");
      return Cy(e, t, a, !1, i);
    }
    var fT = !1;
    function cO(e) {
      if (fT || (fT = !0, m("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !yv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Mp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = iC(e), i = a && !Bo(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return eo(function() {
          Cy(null, null, e, !1, function() {
            e._reactRootContainer = null, lR(e);
          });
        }), !0;
      } else {
        {
          var u = iC(e), s = !!(u && Bo(u)), p = e.nodeType === Gr && yv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    br(YD), No(WD), _h(qD), $s(Ha), ip(Th), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Uc(db), eg(zE, nD, eo);
    function fO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ey(t))
        throw new Error("Target container is not a DOM element.");
      return $D(e, t, null, a);
    }
    function dO(e, t, a, i) {
      return sO(e, t, a, i);
    }
    var lC = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bo, jf, om, Co, zc, zE]
    };
    function pO(e, t) {
      return lC.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), eO(e, t);
    }
    function vO(e, t, a) {
      return lC.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nO(e, t, a);
    }
    function hO(e) {
      return gw() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), eo(e);
    }
    var mO = ZD({
      findFiberByHostInstance: rc,
      bundleType: 1,
      version: ZE,
      rendererPackageName: "react-dom"
    });
    if (!mO && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var dT = window.location.protocol;
      /^(https?|file):$/.test(dT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (dT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lC, Qa.createPortal = fO, Qa.createRoot = pO, Qa.findDOMNode = lO, Qa.flushSync = hO, Qa.hydrate = uO, Qa.hydrateRoot = vO, Qa.render = oO, Qa.unmountComponentAtNode = cO, Qa.unstable_batchedUpdates = zE, Qa.unstable_renderSubtreeIntoContainer = dO, Qa.version = ZE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
var TT;
function DO() {
  if (TT) return Ty.exports;
  TT = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), Ty.exports = _O()) : Ty.exports = kO(), Ty.exports;
}
var xT;
function OO() {
  if (xT) return cd;
  xT = 1;
  var c = DO();
  if (process.env.NODE_ENV === "production")
    cd.createRoot = c.createRoot, cd.hydrateRoot = c.hydrateRoot;
  else {
    var d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    cd.createRoot = function(v, g) {
      d.usingClientEntryPoint = !0;
      try {
        return c.createRoot(v, g);
      } finally {
        d.usingClientEntryPoint = !1;
      }
    }, cd.hydrateRoot = function(v, g, E) {
      d.usingClientEntryPoint = !0;
      try {
        return c.hydrateRoot(v, g, E);
      } finally {
        d.usingClientEntryPoint = !1;
      }
    };
  }
  return cd;
}
var LO = OO();
const NO = /* @__PURE__ */ SO(LO);
var ie = _v(), Cv = {}, bT;
function MO() {
  if (bT) return Cv;
  bT = 1, Object.defineProperty(Cv, "__esModule", { value: !0 }), Cv.parse = m, Cv.serialize = b;
  const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, d = /^[\u0021-\u003A\u003C-\u007E]*$/, v = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, g = /^[\u0020-\u003A\u003D-\u007E]*$/, E = Object.prototype.toString, w = /* @__PURE__ */ (() => {
    const H = function() {
    };
    return H.prototype = /* @__PURE__ */ Object.create(null), H;
  })();
  function m(H, Y) {
    const j = new w(), X = H.length;
    if (X < 2)
      return j;
    const K = (Y == null ? void 0 : Y.decode) || F;
    let Z = 0;
    do {
      const ce = H.indexOf("=", Z);
      if (ce === -1)
        break;
      const fe = H.indexOf(";", Z), De = fe === -1 ? X : fe;
      if (ce > De) {
        Z = H.lastIndexOf(";", ce - 1) + 1;
        continue;
      }
      const he = O(H, Z, ce), Ye = k(H, ce, he), Me = H.slice(he, Ye);
      if (j[Me] === void 0) {
        let Tt = O(H, ce + 1, De), tt = k(H, De, Tt);
        const _t = K(H.slice(Tt, tt));
        j[Me] = _t;
      }
      Z = De + 1;
    } while (Z < X);
    return j;
  }
  function O(H, Y, j) {
    do {
      const X = H.charCodeAt(Y);
      if (X !== 32 && X !== 9)
        return Y;
    } while (++Y < j);
    return j;
  }
  function k(H, Y, j) {
    for (; Y > j; ) {
      const X = H.charCodeAt(--Y);
      if (X !== 32 && X !== 9)
        return Y + 1;
    }
    return j;
  }
  function b(H, Y, j) {
    const X = (j == null ? void 0 : j.encode) || encodeURIComponent;
    if (!c.test(H))
      throw new TypeError(`argument name is invalid: ${H}`);
    const K = X(Y);
    if (!d.test(K))
      throw new TypeError(`argument val is invalid: ${Y}`);
    let Z = H + "=" + K;
    if (!j)
      return Z;
    if (j.maxAge !== void 0) {
      if (!Number.isInteger(j.maxAge))
        throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);
      Z += "; Max-Age=" + j.maxAge;
    }
    if (j.domain) {
      if (!v.test(j.domain))
        throw new TypeError(`option domain is invalid: ${j.domain}`);
      Z += "; Domain=" + j.domain;
    }
    if (j.path) {
      if (!g.test(j.path))
        throw new TypeError(`option path is invalid: ${j.path}`);
      Z += "; Path=" + j.path;
    }
    if (j.expires) {
      if (!M(j.expires) || !Number.isFinite(j.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${j.expires}`);
      Z += "; Expires=" + j.expires.toUTCString();
    }
    if (j.httpOnly && (Z += "; HttpOnly"), j.secure && (Z += "; Secure"), j.partitioned && (Z += "; Partitioned"), j.priority)
      switch (typeof j.priority == "string" ? j.priority.toLowerCase() : void 0) {
        case "low":
          Z += "; Priority=Low";
          break;
        case "medium":
          Z += "; Priority=Medium";
          break;
        case "high":
          Z += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${j.priority}`);
      }
    if (j.sameSite)
      switch (typeof j.sameSite == "string" ? j.sameSite.toLowerCase() : j.sameSite) {
        case !0:
        case "strict":
          Z += "; SameSite=Strict";
          break;
        case "lax":
          Z += "; SameSite=Lax";
          break;
        case "none":
          Z += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${j.sameSite}`);
      }
    return Z;
  }
  function F(H) {
    if (H.indexOf("%") === -1)
      return H;
    try {
      return decodeURIComponent(H);
    } catch {
      return H;
    }
  }
  function M(H) {
    return E.call(H) === "[object Date]";
  }
  return Cv;
}
MO();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var _T = "popstate";
function AO(c = {}) {
  function d(g, E) {
    let { pathname: w, search: m, hash: O } = g.location;
    return hC(
      "",
      { pathname: w, search: m, hash: O },
      // state defaults to `null` because `window.history.state` does
      E.state && E.state.usr || null,
      E.state && E.state.key || "default"
    );
  }
  function v(g, E) {
    return typeof E == "string" ? E : xv(E);
  }
  return zO(
    d,
    v,
    null,
    c
  );
}
function Cr(c, d) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(d);
}
function ou(c, d) {
  if (!c) {
    typeof console < "u" && console.warn(d);
    try {
      throw new Error(d);
    } catch {
    }
  }
}
function UO() {
  return Math.random().toString(36).substring(2, 10);
}
function kT(c, d) {
  return {
    usr: c.state,
    key: c.key,
    idx: d
  };
}
function hC(c, d, v = null, g) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...typeof d == "string" ? kv(d) : d,
    state: v,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: d && d.key || g || UO()
  };
}
function xv({
  pathname: c = "/",
  search: d = "",
  hash: v = ""
}) {
  return d && d !== "?" && (c += d.charAt(0) === "?" ? d : "?" + d), v && v !== "#" && (c += v.charAt(0) === "#" ? v : "#" + v), c;
}
function kv(c) {
  let d = {};
  if (c) {
    let v = c.indexOf("#");
    v >= 0 && (d.hash = c.substring(v), c = c.substring(0, v));
    let g = c.indexOf("?");
    g >= 0 && (d.search = c.substring(g), c = c.substring(0, g)), c && (d.pathname = c);
  }
  return d;
}
function zO(c, d, v, g = {}) {
  let { window: E = document.defaultView, v5Compat: w = !1 } = g, m = E.history, O = "POP", k = null, b = F();
  b == null && (b = 0, m.replaceState({ ...m.state, idx: b }, ""));
  function F() {
    return (m.state || { idx: null }).idx;
  }
  function M() {
    O = "POP";
    let K = F(), Z = K == null ? null : K - b;
    b = K, k && k({ action: O, location: X.location, delta: Z });
  }
  function H(K, Z) {
    O = "PUSH";
    let ce = hC(X.location, K, Z);
    b = F() + 1;
    let fe = kT(ce, b), De = X.createHref(ce);
    try {
      m.pushState(fe, "", De);
    } catch (he) {
      if (he instanceof DOMException && he.name === "DataCloneError")
        throw he;
      E.location.assign(De);
    }
    w && k && k({ action: O, location: X.location, delta: 1 });
  }
  function Y(K, Z) {
    O = "REPLACE";
    let ce = hC(X.location, K, Z);
    b = F();
    let fe = kT(ce, b), De = X.createHref(ce);
    m.replaceState(fe, "", De), w && k && k({ action: O, location: X.location, delta: 0 });
  }
  function j(K) {
    let Z = E.location.origin !== "null" ? E.location.origin : E.location.href, ce = typeof K == "string" ? K : xv(K);
    return ce = ce.replace(/ $/, "%20"), Cr(
      Z,
      `No window.location.(origin|href) available to create URL for href: ${ce}`
    ), new URL(ce, Z);
  }
  let X = {
    get action() {
      return O;
    },
    get location() {
      return c(E, m);
    },
    listen(K) {
      if (k)
        throw new Error("A history only accepts one active listener");
      return E.addEventListener(_T, M), k = K, () => {
        E.removeEventListener(_T, M), k = null;
      };
    },
    createHref(K) {
      return d(E, K);
    },
    createURL: j,
    encodeLocation(K) {
      let Z = j(K);
      return {
        pathname: Z.pathname,
        search: Z.search,
        hash: Z.hash
      };
    },
    push: H,
    replace: Y,
    go(K) {
      return m.go(K);
    }
  };
  return X;
}
function qT(c, d, v = "/") {
  return FO(c, d, v, !1);
}
function FO(c, d, v, g) {
  let E = typeof d == "string" ? kv(d) : d, w = rs(E.pathname || "/", v);
  if (w == null)
    return null;
  let m = QT(c);
  PO(m);
  let O = null;
  for (let k = 0; O == null && k < m.length; ++k) {
    let b = GO(w);
    O = qO(
      m[k],
      b,
      g
    );
  }
  return O;
}
function QT(c, d = [], v = [], g = "") {
  let E = (w, m, O) => {
    let k = {
      relativePath: O === void 0 ? w.path || "" : O,
      caseSensitive: w.caseSensitive === !0,
      childrenIndex: m,
      route: w
    };
    k.relativePath.startsWith("/") && (Cr(
      k.relativePath.startsWith(g),
      `Absolute route path "${k.relativePath}" nested under path "${g}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), k.relativePath = k.relativePath.slice(g.length));
    let b = ro([g, k.relativePath]), F = v.concat(k);
    w.children && w.children.length > 0 && (Cr(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      w.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
    ), QT(w.children, d, F, b)), !(w.path == null && !w.index) && d.push({
      path: b,
      score: YO(b, w.index),
      routesMeta: F
    });
  };
  return c.forEach((w, m) => {
    var O;
    if (w.path === "" || !((O = w.path) != null && O.includes("?")))
      E(w, m);
    else
      for (let k of GT(w.path))
        E(w, m, k);
  }), d;
}
function GT(c) {
  let d = c.split("/");
  if (d.length === 0) return [];
  let [v, ...g] = d, E = v.endsWith("?"), w = v.replace(/\?$/, "");
  if (g.length === 0)
    return E ? [w, ""] : [w];
  let m = GT(g.join("/")), O = [];
  return O.push(
    ...m.map(
      (k) => k === "" ? w : [w, k].join("/")
    )
  ), E && O.push(...m), O.map(
    (k) => c.startsWith("/") && k === "" ? "/" : k
  );
}
function PO(c) {
  c.sort(
    (d, v) => d.score !== v.score ? v.score - d.score : WO(
      d.routesMeta.map((g) => g.childrenIndex),
      v.routesMeta.map((g) => g.childrenIndex)
    )
  );
}
var jO = /^:[\w-]+$/, HO = 3, BO = 2, VO = 1, $O = 10, IO = -2, DT = (c) => c === "*";
function YO(c, d) {
  let v = c.split("/"), g = v.length;
  return v.some(DT) && (g += IO), d && (g += BO), v.filter((E) => !DT(E)).reduce(
    (E, w) => E + (jO.test(w) ? HO : w === "" ? VO : $O),
    g
  );
}
function WO(c, d) {
  return c.length === d.length && c.slice(0, -1).every((g, E) => g === d[E]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    c[c.length - 1] - d[d.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function qO(c, d, v = !1) {
  let { routesMeta: g } = c, E = {}, w = "/", m = [];
  for (let O = 0; O < g.length; ++O) {
    let k = g[O], b = O === g.length - 1, F = w === "/" ? d : d.slice(w.length) || "/", M = Ny(
      { path: k.relativePath, caseSensitive: k.caseSensitive, end: b },
      F
    ), H = k.route;
    if (!M && b && v && !g[g.length - 1].route.index && (M = Ny(
      {
        path: k.relativePath,
        caseSensitive: k.caseSensitive,
        end: !1
      },
      F
    )), !M)
      return null;
    Object.assign(E, M.params), m.push({
      // TODO: Can this as be avoided?
      params: E,
      pathname: ro([w, M.pathname]),
      pathnameBase: ZO(
        ro([w, M.pathnameBase])
      ),
      route: H
    }), M.pathnameBase !== "/" && (w = ro([w, M.pathnameBase]));
  }
  return m;
}
function Ny(c, d) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [v, g] = QO(
    c.path,
    c.caseSensitive,
    c.end
  ), E = d.match(v);
  if (!E) return null;
  let w = E[0], m = w.replace(/(.)\/+$/, "$1"), O = E.slice(1);
  return {
    params: g.reduce(
      (b, { paramName: F, isOptional: M }, H) => {
        if (F === "*") {
          let j = O[H] || "";
          m = w.slice(0, w.length - j.length).replace(/(.)\/+$/, "$1");
        }
        const Y = O[H];
        return M && !Y ? b[F] = void 0 : b[F] = (Y || "").replace(/%2F/g, "/"), b;
      },
      {}
    ),
    pathname: w,
    pathnameBase: m,
    pattern: c
  };
}
function QO(c, d = !1, v = !0) {
  ou(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`
  );
  let g = [], E = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, O, k) => (g.push({ paramName: O, isOptional: k != null }), k ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return c.endsWith("*") ? (g.push({ paramName: "*" }), E += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : v ? E += "\\/*$" : c !== "" && c !== "/" && (E += "(?:(?=\\/|$))"), [new RegExp(E, d ? void 0 : "i"), g];
}
function GO(c) {
  try {
    return c.split("/").map((d) => decodeURIComponent(d).replace(/\//g, "%2F")).join("/");
  } catch (d) {
    return ou(
      !1,
      `The URL path "${c}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`
    ), c;
  }
}
function rs(c, d) {
  if (d === "/") return c;
  if (!c.toLowerCase().startsWith(d.toLowerCase()))
    return null;
  let v = d.endsWith("/") ? d.length - 1 : d.length, g = c.charAt(v);
  return g && g !== "/" ? null : c.slice(v) || "/";
}
function KO(c, d = "/") {
  let {
    pathname: v,
    search: g = "",
    hash: E = ""
  } = typeof c == "string" ? kv(c) : c;
  return {
    pathname: v ? v.startsWith("/") ? v : XO(v, d) : d,
    search: eL(g),
    hash: tL(E)
  };
}
function XO(c, d) {
  let v = d.replace(/\/+$/, "").split("/");
  return c.split("/").forEach((E) => {
    E === ".." ? v.length > 1 && v.pop() : E !== "." && v.push(E);
  }), v.length > 1 ? v.join("/") : "/";
}
function sC(c, d, v, g) {
  return `Cannot include a '${c}' character in a manually specified \`to.${d}\` field [${JSON.stringify(
    g
  )}].  Please separate it out to the \`to.${v}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function JO(c) {
  return c.filter(
    (d, v) => v === 0 || d.route.path && d.route.path.length > 0
  );
}
function KT(c) {
  let d = JO(c);
  return d.map(
    (v, g) => g === d.length - 1 ? v.pathname : v.pathnameBase
  );
}
function XT(c, d, v, g = !1) {
  let E;
  typeof c == "string" ? E = kv(c) : (E = { ...c }, Cr(
    !E.pathname || !E.pathname.includes("?"),
    sC("?", "pathname", "search", E)
  ), Cr(
    !E.pathname || !E.pathname.includes("#"),
    sC("#", "pathname", "hash", E)
  ), Cr(
    !E.search || !E.search.includes("#"),
    sC("#", "search", "hash", E)
  ));
  let w = c === "" || E.pathname === "", m = w ? "/" : E.pathname, O;
  if (m == null)
    O = v;
  else {
    let M = d.length - 1;
    if (!g && m.startsWith("..")) {
      let H = m.split("/");
      for (; H[0] === ".."; )
        H.shift(), M -= 1;
      E.pathname = H.join("/");
    }
    O = M >= 0 ? d[M] : "/";
  }
  let k = KO(E, O), b = m && m !== "/" && m.endsWith("/"), F = (w || m === ".") && v.endsWith("/");
  return !k.pathname.endsWith("/") && (b || F) && (k.pathname += "/"), k;
}
var ro = (c) => c.join("/").replace(/\/\/+/g, "/"), ZO = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"), eL = (c) => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c, tL = (c) => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c;
function nL(c) {
  return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
}
var JT = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  JT
);
var rL = [
  "GET",
  ...JT
];
new Set(rL);
var fd = ie.createContext(null);
fd.displayName = "DataRouter";
var Uy = ie.createContext(null);
Uy.displayName = "DataRouterState";
var ZT = ie.createContext({
  isTransitioning: !1
});
ZT.displayName = "ViewTransition";
var aL = ie.createContext(
  /* @__PURE__ */ new Map()
);
aL.displayName = "Fetchers";
var iL = ie.createContext(null);
iL.displayName = "Await";
var su = ie.createContext(
  null
);
su.displayName = "Navigation";
var zy = ie.createContext(
  null
);
zy.displayName = "Location";
var ao = ie.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ao.displayName = "Route";
var RC = ie.createContext(null);
RC.displayName = "RouteError";
function lL(c, { relative: d } = {}) {
  Cr(
    Dv(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: v, navigator: g } = ie.useContext(su), { hash: E, pathname: w, search: m } = Ov(c, { relative: d }), O = w;
  return v !== "/" && (O = w === "/" ? v : ro([v, w])), g.createHref({ pathname: O, search: m, hash: E });
}
function Dv() {
  return ie.useContext(zy) != null;
}
function Rc() {
  return Cr(
    Dv(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), ie.useContext(zy).location;
}
var ex = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function tx(c) {
  ie.useContext(su).static || ie.useLayoutEffect(c);
}
function uL() {
  let { isDataRoute: c } = ie.useContext(ao);
  return c ? EL() : oL();
}
function oL() {
  Cr(
    Dv(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = ie.useContext(fd), { basename: d, navigator: v } = ie.useContext(su), { matches: g } = ie.useContext(ao), { pathname: E } = Rc(), w = JSON.stringify(KT(g)), m = ie.useRef(!1);
  return tx(() => {
    m.current = !0;
  }), ie.useCallback(
    (k, b = {}) => {
      if (ou(m.current, ex), !m.current) return;
      if (typeof k == "number") {
        v.go(k);
        return;
      }
      let F = XT(
        k,
        JSON.parse(w),
        E,
        b.relative === "path"
      );
      c == null && d !== "/" && (F.pathname = F.pathname === "/" ? d : ro([d, F.pathname])), (b.replace ? v.replace : v.push)(
        F,
        b.state,
        b
      );
    },
    [
      d,
      v,
      w,
      E,
      c
    ]
  );
}
ie.createContext(null);
function Ov(c, { relative: d } = {}) {
  let { matches: v } = ie.useContext(ao), { pathname: g } = Rc(), E = JSON.stringify(KT(v));
  return ie.useMemo(
    () => XT(
      c,
      JSON.parse(E),
      g,
      d === "path"
    ),
    [c, E, g, d]
  );
}
function sL(c, d, v, g) {
  Cr(
    Dv(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: E } = ie.useContext(su), { matches: w } = ie.useContext(ao), m = w[w.length - 1], O = m ? m.params : {}, k = m ? m.pathname : "/", b = m ? m.pathnameBase : "/", F = m && m.route;
  {
    let Z = F && F.path || "";
    nx(
      k,
      !F || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${k}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`
    );
  }
  let M = Rc(), H;
  H = M;
  let Y = H.pathname || "/", j = Y;
  if (b !== "/") {
    let Z = b.replace(/^\//, "").split("/");
    j = "/" + Y.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let X = qT(c, { pathname: j });
  return ou(
    F || X != null,
    `No routes matched location "${H.pathname}${H.search}${H.hash}" `
  ), ou(
    X == null || X[X.length - 1].route.element !== void 0 || X[X.length - 1].route.Component !== void 0 || X[X.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), vL(
    X && X.map(
      (Z) => Object.assign({}, Z, {
        params: Object.assign({}, O, Z.params),
        pathname: ro([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          E.encodeLocation ? E.encodeLocation(Z.pathname).pathname : Z.pathname
        ]),
        pathnameBase: Z.pathnameBase === "/" ? b : ro([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          E.encodeLocation ? E.encodeLocation(Z.pathnameBase).pathname : Z.pathnameBase
        ])
      })
    ),
    w,
    v,
    g
  );
}
function cL() {
  let c = SL(), d = nL(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c), v = c instanceof Error ? c.stack : null, g = "rgba(200,200,200, 0.5)", E = { padding: "0.5rem", backgroundColor: g }, w = { padding: "2px 4px", backgroundColor: g }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    c
  ), m = /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ ie.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ ie.createElement("code", { style: w }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ ie.createElement("code", { style: w }, "errorElement"), " prop on your route.")), /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ ie.createElement("h3", { style: { fontStyle: "italic" } }, d), v ? /* @__PURE__ */ ie.createElement("pre", { style: E }, v) : null, m);
}
var fL = /* @__PURE__ */ ie.createElement(cL, null), dL = class extends ie.Component {
  constructor(c) {
    super(c), this.state = {
      location: c.location,
      revalidation: c.revalidation,
      error: c.error
    };
  }
  static getDerivedStateFromError(c) {
    return { error: c };
  }
  static getDerivedStateFromProps(c, d) {
    return d.location !== c.location || d.revalidation !== "idle" && c.revalidation === "idle" ? {
      error: c.error,
      location: c.location,
      revalidation: c.revalidation
    } : {
      error: c.error !== void 0 ? c.error : d.error,
      location: d.location,
      revalidation: c.revalidation || d.revalidation
    };
  }
  componentDidCatch(c, d) {
    console.error(
      "React Router caught the following error during render",
      c,
      d
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ ie.createElement(ao.Provider, { value: this.props.routeContext }, /* @__PURE__ */ ie.createElement(
      RC.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function pL({ routeContext: c, match: d, children: v }) {
  let g = ie.useContext(fd);
  return g && g.static && g.staticContext && (d.route.errorElement || d.route.ErrorBoundary) && (g.staticContext._deepestRenderedBoundaryId = d.route.id), /* @__PURE__ */ ie.createElement(ao.Provider, { value: c }, v);
}
function vL(c, d = [], v = null, g = null) {
  if (c == null) {
    if (!v)
      return null;
    if (v.errors)
      c = v.matches;
    else if (d.length === 0 && !v.initialized && v.matches.length > 0)
      c = v.matches;
    else
      return null;
  }
  let E = c, w = v == null ? void 0 : v.errors;
  if (w != null) {
    let k = E.findIndex(
      (b) => b.route.id && (w == null ? void 0 : w[b.route.id]) !== void 0
    );
    Cr(
      k >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        w
      ).join(",")}`
    ), E = E.slice(
      0,
      Math.min(E.length, k + 1)
    );
  }
  let m = !1, O = -1;
  if (v)
    for (let k = 0; k < E.length; k++) {
      let b = E[k];
      if ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (O = k), b.route.id) {
        let { loaderData: F, errors: M } = v, H = b.route.loader && !F.hasOwnProperty(b.route.id) && (!M || M[b.route.id] === void 0);
        if (b.route.lazy || H) {
          m = !0, O >= 0 ? E = E.slice(0, O + 1) : E = [E[0]];
          break;
        }
      }
    }
  return E.reduceRight((k, b, F) => {
    let M, H = !1, Y = null, j = null;
    v && (M = w && b.route.id ? w[b.route.id] : void 0, Y = b.route.errorElement || fL, m && (O < 0 && F === 0 ? (nx(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), H = !0, j = null) : O === F && (H = !0, j = b.route.hydrateFallbackElement || null)));
    let X = d.concat(E.slice(0, F + 1)), K = () => {
      let Z;
      return M ? Z = Y : H ? Z = j : b.route.Component ? Z = /* @__PURE__ */ ie.createElement(b.route.Component, null) : b.route.element ? Z = b.route.element : Z = k, /* @__PURE__ */ ie.createElement(
        pL,
        {
          match: b,
          routeContext: {
            outlet: k,
            matches: X,
            isDataRoute: v != null
          },
          children: Z
        }
      );
    };
    return v && (b.route.ErrorBoundary || b.route.errorElement || F === 0) ? /* @__PURE__ */ ie.createElement(
      dL,
      {
        location: v.location,
        revalidation: v.revalidation,
        component: Y,
        error: M,
        children: K(),
        routeContext: { outlet: null, matches: X, isDataRoute: !0 }
      }
    ) : K();
  }, null);
}
function wC(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hL(c) {
  let d = ie.useContext(fd);
  return Cr(d, wC(c)), d;
}
function mL(c) {
  let d = ie.useContext(Uy);
  return Cr(d, wC(c)), d;
}
function yL(c) {
  let d = ie.useContext(ao);
  return Cr(d, wC(c)), d;
}
function TC(c) {
  let d = yL(c), v = d.matches[d.matches.length - 1];
  return Cr(
    v.route.id,
    `${c} can only be used on routes that contain a unique "id"`
  ), v.route.id;
}
function gL() {
  return TC(
    "useRouteId"
    /* UseRouteId */
  );
}
function SL() {
  var g;
  let c = ie.useContext(RC), d = mL(
    "useRouteError"
    /* UseRouteError */
  ), v = TC(
    "useRouteError"
    /* UseRouteError */
  );
  return c !== void 0 ? c : (g = d.errors) == null ? void 0 : g[v];
}
function EL() {
  let { router: c } = hL(
    "useNavigate"
    /* UseNavigateStable */
  ), d = TC(
    "useNavigate"
    /* UseNavigateStable */
  ), v = ie.useRef(!1);
  return tx(() => {
    v.current = !0;
  }), ie.useCallback(
    async (E, w = {}) => {
      ou(v.current, ex), v.current && (typeof E == "number" ? c.navigate(E) : await c.navigate(E, { fromRouteId: d, ...w }));
    },
    [c, d]
  );
}
var OT = {};
function nx(c, d, v) {
  !d && !OT[c] && (OT[c] = !0, ou(!1, v));
}
ie.memo(CL);
function CL({
  routes: c,
  future: d,
  state: v
}) {
  return sL(c, void 0, v, d);
}
function RL({
  basename: c = "/",
  children: d = null,
  location: v,
  navigationType: g = "POP",
  navigator: E,
  static: w = !1
}) {
  Cr(
    !Dv(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let m = c.replace(/^\/*/, "/"), O = ie.useMemo(
    () => ({
      basename: m,
      navigator: E,
      static: w,
      future: {}
    }),
    [m, E, w]
  );
  typeof v == "string" && (v = kv(v));
  let {
    pathname: k = "/",
    search: b = "",
    hash: F = "",
    state: M = null,
    key: H = "default"
  } = v, Y = ie.useMemo(() => {
    let j = rs(k, m);
    return j == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: F,
        state: M,
        key: H
      },
      navigationType: g
    };
  }, [m, k, b, F, M, H, g]);
  return ou(
    Y != null,
    `<Router basename="${m}"> is not able to match the URL "${k}${b}${F}" because it does not start with the basename, so the <Router> won't render anything.`
  ), Y == null ? null : /* @__PURE__ */ ie.createElement(su.Provider, { value: O }, /* @__PURE__ */ ie.createElement(zy.Provider, { children: d, value: Y }));
}
var _y = "get", ky = "application/x-www-form-urlencoded";
function Fy(c) {
  return c != null && typeof c.tagName == "string";
}
function wL(c) {
  return Fy(c) && c.tagName.toLowerCase() === "button";
}
function TL(c) {
  return Fy(c) && c.tagName.toLowerCase() === "form";
}
function xL(c) {
  return Fy(c) && c.tagName.toLowerCase() === "input";
}
function bL(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function _L(c, d) {
  return c.button === 0 && // Ignore everything but left clicks
  (!d || d === "_self") && // Let browser handle "target=_blank" etc.
  !bL(c);
}
var by = null;
function kL() {
  if (by === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), by = !1;
    } catch {
      by = !0;
    }
  return by;
}
var DL = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function cC(c) {
  return c != null && !DL.has(c) ? (ou(
    !1,
    `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ky}"`
  ), null) : c;
}
function OL(c, d) {
  let v, g, E, w, m;
  if (TL(c)) {
    let O = c.getAttribute("action");
    g = O ? rs(O, d) : null, v = c.getAttribute("method") || _y, E = cC(c.getAttribute("enctype")) || ky, w = new FormData(c);
  } else if (wL(c) || xL(c) && (c.type === "submit" || c.type === "image")) {
    let O = c.form;
    if (O == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let k = c.getAttribute("formaction") || O.getAttribute("action");
    if (g = k ? rs(k, d) : null, v = c.getAttribute("formmethod") || O.getAttribute("method") || _y, E = cC(c.getAttribute("formenctype")) || cC(O.getAttribute("enctype")) || ky, w = new FormData(O, c), !kL()) {
      let { name: b, type: F, value: M } = c;
      if (F === "image") {
        let H = b ? `${b}.` : "";
        w.append(`${H}x`, "0"), w.append(`${H}y`, "0");
      } else b && w.append(b, M);
    }
  } else {
    if (Fy(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    v = _y, g = null, E = ky, m = c;
  }
  return w && E === "text/plain" && (m = w, w = void 0), { action: g, method: v.toLowerCase(), encType: E, formData: w, body: m };
}
function xC(c, d) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(d);
}
async function LL(c, d) {
  if (c.id in d)
    return d[c.id];
  try {
    let v = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      c.module
    );
    return d[c.id] = v, v;
  } catch (v) {
    return console.error(
      `Error loading route module \`${c.module}\`, reloading page...`
    ), console.error(v), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function NL(c) {
  return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string";
}
async function ML(c, d, v) {
  let g = await Promise.all(
    c.map(async (E) => {
      let w = d.routes[E.route.id];
      if (w) {
        let m = await LL(w, v);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return FL(
    g.flat(1).filter(NL).filter((E) => E.rel === "stylesheet" || E.rel === "preload").map(
      (E) => E.rel === "stylesheet" ? { ...E, rel: "prefetch", as: "style" } : { ...E, rel: "prefetch" }
    )
  );
}
function LT(c, d, v, g, E, w) {
  let m = (k, b) => v[b] ? k.route.id !== v[b].route.id : !0, O = (k, b) => {
    var F;
    return (
      // param change, /users/123 -> /users/456
      v[b].pathname !== k.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((F = v[b].route.path) == null ? void 0 : F.endsWith("*")) && v[b].params["*"] !== k.params["*"]
    );
  };
  return w === "assets" ? d.filter(
    (k, b) => m(k, b) || O(k, b)
  ) : w === "data" ? d.filter((k, b) => {
    var M;
    let F = g.routes[k.route.id];
    if (!F || !F.hasLoader)
      return !1;
    if (m(k, b) || O(k, b))
      return !0;
    if (k.route.shouldRevalidate) {
      let H = k.route.shouldRevalidate({
        currentUrl: new URL(
          E.pathname + E.search + E.hash,
          window.origin
        ),
        currentParams: ((M = v[0]) == null ? void 0 : M.params) || {},
        nextUrl: new URL(c, window.origin),
        nextParams: k.params,
        defaultShouldRevalidate: !0
      });
      if (typeof H == "boolean")
        return H;
    }
    return !0;
  }) : [];
}
function AL(c, d) {
  return UL(
    c.map((v) => {
      let g = d.routes[v.route.id];
      if (!g) return [];
      let E = [g.module];
      return g.imports && (E = E.concat(g.imports)), E;
    }).flat(1)
  );
}
function UL(c) {
  return [...new Set(c)];
}
function zL(c) {
  let d = {}, v = Object.keys(c).sort();
  for (let g of v)
    d[g] = c[g];
  return d;
}
function FL(c, d) {
  let v = /* @__PURE__ */ new Set();
  return new Set(d), c.reduce((g, E) => {
    let w = JSON.stringify(zL(E));
    return v.has(w) || (v.add(w), g.push({ key: w, link: E })), g;
  }, []);
}
function PL(c) {
  let d = typeof c == "string" ? new URL(
    c,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : c;
  return d.pathname === "/" ? d.pathname = "_root.data" : d.pathname = `${d.pathname.replace(/\/$/, "")}.data`, d;
}
function jL() {
  let c = ie.useContext(fd);
  return xC(
    c,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), c;
}
function HL() {
  let c = ie.useContext(Uy);
  return xC(
    c,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), c;
}
var bC = ie.createContext(void 0);
bC.displayName = "FrameworkContext";
function rx() {
  let c = ie.useContext(bC);
  return xC(
    c,
    "You must render this element inside a <HydratedRouter> element"
  ), c;
}
function BL(c, d) {
  let v = ie.useContext(bC), [g, E] = ie.useState(!1), [w, m] = ie.useState(!1), { onFocus: O, onBlur: k, onMouseEnter: b, onMouseLeave: F, onTouchStart: M } = d, H = ie.useRef(null);
  ie.useEffect(() => {
    if (c === "render" && m(!0), c === "viewport") {
      let X = (Z) => {
        Z.forEach((ce) => {
          m(ce.isIntersecting);
        });
      }, K = new IntersectionObserver(X, { threshold: 0.5 });
      return H.current && K.observe(H.current), () => {
        K.disconnect();
      };
    }
  }, [c]), ie.useEffect(() => {
    if (g) {
      let X = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(X);
      };
    }
  }, [g]);
  let Y = () => {
    E(!0);
  }, j = () => {
    E(!1), m(!1);
  };
  return v ? c !== "intent" ? [w, H, {}] : [
    w,
    H,
    {
      onFocus: Rv(O, Y),
      onBlur: Rv(k, j),
      onMouseEnter: Rv(b, Y),
      onMouseLeave: Rv(F, j),
      onTouchStart: Rv(M, Y)
    }
  ] : [!1, H, {}];
}
function Rv(c, d) {
  return (v) => {
    c && c(v), v.defaultPrevented || d(v);
  };
}
function VL({
  page: c,
  ...d
}) {
  let { router: v } = jL(), g = ie.useMemo(
    () => qT(v.routes, c, v.basename),
    [v.routes, c, v.basename]
  );
  return g ? /* @__PURE__ */ ie.createElement(IL, { page: c, matches: g, ...d }) : null;
}
function $L(c) {
  let { manifest: d, routeModules: v } = rx(), [g, E] = ie.useState([]);
  return ie.useEffect(() => {
    let w = !1;
    return ML(c, d, v).then(
      (m) => {
        w || E(m);
      }
    ), () => {
      w = !0;
    };
  }, [c, d, v]), g;
}
function IL({
  page: c,
  matches: d,
  ...v
}) {
  let g = Rc(), { manifest: E, routeModules: w } = rx(), { loaderData: m, matches: O } = HL(), k = ie.useMemo(
    () => LT(
      c,
      d,
      O,
      E,
      g,
      "data"
    ),
    [c, d, O, E, g]
  ), b = ie.useMemo(
    () => LT(
      c,
      d,
      O,
      E,
      g,
      "assets"
    ),
    [c, d, O, E, g]
  ), F = ie.useMemo(() => {
    if (c === g.pathname + g.search + g.hash)
      return [];
    let Y = /* @__PURE__ */ new Set(), j = !1;
    if (d.forEach((K) => {
      var ce;
      let Z = E.routes[K.route.id];
      !Z || !Z.hasLoader || (!k.some((fe) => fe.route.id === K.route.id) && K.route.id in m && ((ce = w[K.route.id]) != null && ce.shouldRevalidate) || Z.hasClientLoader ? j = !0 : Y.add(K.route.id));
    }), Y.size === 0)
      return [];
    let X = PL(c);
    return j && Y.size > 0 && X.searchParams.set(
      "_routes",
      d.filter((K) => Y.has(K.route.id)).map((K) => K.route.id).join(",")
    ), [X.pathname + X.search];
  }, [
    m,
    g,
    E,
    k,
    d,
    c,
    w
  ]), M = ie.useMemo(
    () => AL(b, E),
    [b, E]
  ), H = $L(b);
  return /* @__PURE__ */ ie.createElement(ie.Fragment, null, F.map((Y) => /* @__PURE__ */ ie.createElement("link", { key: Y, rel: "prefetch", as: "fetch", href: Y, ...v })), M.map((Y) => /* @__PURE__ */ ie.createElement("link", { key: Y, rel: "modulepreload", href: Y, ...v })), H.map(({ key: Y, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ ie.createElement("link", { key: Y, ...j })
  )));
}
function YL(...c) {
  return (d) => {
    c.forEach((v) => {
      typeof v == "function" ? v(d) : v != null && (v.current = d);
    });
  };
}
var ax = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ax && (window.__reactRouterVersion = "7.1.1");
} catch {
}
function WL({
  basename: c,
  children: d,
  window: v
}) {
  let g = ie.useRef();
  g.current == null && (g.current = AO({ window: v, v5Compat: !0 }));
  let E = g.current, [w, m] = ie.useState({
    action: E.action,
    location: E.location
  }), O = ie.useCallback(
    (k) => {
      ie.startTransition(() => m(k));
    },
    [m]
  );
  return ie.useLayoutEffect(() => E.listen(O), [E, O]), /* @__PURE__ */ ie.createElement(
    RL,
    {
      basename: c,
      children: d,
      location: w.location,
      navigationType: w.action,
      navigator: E
    }
  );
}
var ix = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, lx = ie.forwardRef(
  function({
    onClick: d,
    discover: v = "render",
    prefetch: g = "none",
    relative: E,
    reloadDocument: w,
    replace: m,
    state: O,
    target: k,
    to: b,
    preventScrollReset: F,
    viewTransition: M,
    ...H
  }, Y) {
    let { basename: j } = ie.useContext(su), X = typeof b == "string" && ix.test(b), K, Z = !1;
    if (typeof b == "string" && X && (K = b, ax))
      try {
        let tt = new URL(window.location.href), _t = b.startsWith("//") ? new URL(tt.protocol + b) : new URL(b), Gt = rs(_t.pathname, j);
        _t.origin === tt.origin && Gt != null ? b = Gt + _t.search + _t.hash : Z = !0;
      } catch {
        ou(
          !1,
          `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let ce = lL(b, { relative: E }), [fe, De, he] = BL(
      g,
      H
    ), Ye = KL(b, {
      replace: m,
      state: O,
      target: k,
      preventScrollReset: F,
      relative: E,
      viewTransition: M
    });
    function Me(tt) {
      d && d(tt), tt.defaultPrevented || Ye(tt);
    }
    let Tt = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ ie.createElement(
        "a",
        {
          ...H,
          ...he,
          href: K || ce,
          onClick: Z || w ? d : Me,
          ref: YL(Y, De),
          target: k,
          "data-discover": !X && v === "render" ? "true" : void 0
        }
      )
    );
    return fe && !X ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, Tt, /* @__PURE__ */ ie.createElement(VL, { page: ce })) : Tt;
  }
);
lx.displayName = "Link";
var qL = ie.forwardRef(
  function({
    "aria-current": d = "page",
    caseSensitive: v = !1,
    className: g = "",
    end: E = !1,
    style: w,
    to: m,
    viewTransition: O,
    children: k,
    ...b
  }, F) {
    let M = Ov(m, { relative: b.relative }), H = Rc(), Y = ie.useContext(Uy), { navigator: j, basename: X } = ie.useContext(su), K = Y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    tN(M) && O === !0, Z = j.encodeLocation ? j.encodeLocation(M).pathname : M.pathname, ce = H.pathname, fe = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null;
    v || (ce = ce.toLowerCase(), fe = fe ? fe.toLowerCase() : null, Z = Z.toLowerCase()), fe && X && (fe = rs(fe, X) || fe);
    const De = Z !== "/" && Z.endsWith("/") ? Z.length - 1 : Z.length;
    let he = ce === Z || !E && ce.startsWith(Z) && ce.charAt(De) === "/", Ye = fe != null && (fe === Z || !E && fe.startsWith(Z) && fe.charAt(Z.length) === "/"), Me = {
      isActive: he,
      isPending: Ye,
      isTransitioning: K
    }, Tt = he ? d : void 0, tt;
    typeof g == "function" ? tt = g(Me) : tt = [
      g,
      he ? "active" : null,
      Ye ? "pending" : null,
      K ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let _t = typeof w == "function" ? w(Me) : w;
    return /* @__PURE__ */ ie.createElement(
      lx,
      {
        ...b,
        "aria-current": Tt,
        className: tt,
        ref: F,
        style: _t,
        to: m,
        viewTransition: O
      },
      typeof k == "function" ? k(Me) : k
    );
  }
);
qL.displayName = "NavLink";
var QL = ie.forwardRef(
  ({
    discover: c = "render",
    fetcherKey: d,
    navigate: v,
    reloadDocument: g,
    replace: E,
    state: w,
    method: m = _y,
    action: O,
    onSubmit: k,
    relative: b,
    preventScrollReset: F,
    viewTransition: M,
    ...H
  }, Y) => {
    let j = ZL(), X = eN(O, { relative: b }), K = m.toLowerCase() === "get" ? "get" : "post", Z = typeof O == "string" && ix.test(O), ce = (fe) => {
      if (k && k(fe), fe.defaultPrevented) return;
      fe.preventDefault();
      let De = fe.nativeEvent.submitter, he = (De == null ? void 0 : De.getAttribute("formmethod")) || m;
      j(De || fe.currentTarget, {
        fetcherKey: d,
        method: he,
        navigate: v,
        replace: E,
        state: w,
        relative: b,
        preventScrollReset: F,
        viewTransition: M
      });
    };
    return /* @__PURE__ */ ie.createElement(
      "form",
      {
        ref: Y,
        method: K,
        action: X,
        onSubmit: g ? k : ce,
        ...H,
        "data-discover": !Z && c === "render" ? "true" : void 0
      }
    );
  }
);
QL.displayName = "Form";
function GL(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ux(c) {
  let d = ie.useContext(fd);
  return Cr(d, GL(c)), d;
}
function KL(c, {
  target: d,
  replace: v,
  state: g,
  preventScrollReset: E,
  relative: w,
  viewTransition: m
} = {}) {
  let O = uL(), k = Rc(), b = Ov(c, { relative: w });
  return ie.useCallback(
    (F) => {
      if (_L(F, d)) {
        F.preventDefault();
        let M = v !== void 0 ? v : xv(k) === xv(b);
        O(c, {
          replace: M,
          state: g,
          preventScrollReset: E,
          relative: w,
          viewTransition: m
        });
      }
    },
    [
      k,
      O,
      b,
      v,
      g,
      d,
      c,
      E,
      w,
      m
    ]
  );
}
var XL = 0, JL = () => `__${String(++XL)}__`;
function ZL() {
  let { router: c } = ux(
    "useSubmit"
    /* UseSubmit */
  ), { basename: d } = ie.useContext(su), v = gL();
  return ie.useCallback(
    async (g, E = {}) => {
      let { action: w, method: m, encType: O, formData: k, body: b } = OL(
        g,
        d
      );
      if (E.navigate === !1) {
        let F = E.fetcherKey || JL();
        await c.fetch(F, v, E.action || w, {
          preventScrollReset: E.preventScrollReset,
          formData: k,
          body: b,
          formMethod: E.method || m,
          formEncType: E.encType || O,
          flushSync: E.flushSync
        });
      } else
        await c.navigate(E.action || w, {
          preventScrollReset: E.preventScrollReset,
          formData: k,
          body: b,
          formMethod: E.method || m,
          formEncType: E.encType || O,
          replace: E.replace,
          state: E.state,
          fromRouteId: v,
          flushSync: E.flushSync,
          viewTransition: E.viewTransition
        });
    },
    [c, d, v]
  );
}
function eN(c, { relative: d } = {}) {
  let { basename: v } = ie.useContext(su), g = ie.useContext(ao);
  Cr(g, "useFormAction must be used inside a RouteContext");
  let [E] = g.matches.slice(-1), w = { ...Ov(c || ".", { relative: d }) }, m = Rc();
  if (c == null) {
    w.search = m.search;
    let O = new URLSearchParams(w.search), k = O.getAll("index");
    if (k.some((F) => F === "")) {
      O.delete("index"), k.filter((M) => M).forEach((M) => O.append("index", M));
      let F = O.toString();
      w.search = F ? `?${F}` : "";
    }
  }
  return (!c || c === ".") && E.route.index && (w.search = w.search ? w.search.replace(/^\?/, "?index&") : "?index"), v !== "/" && (w.pathname = w.pathname === "/" ? v : ro([v, w.pathname])), xv(w);
}
function tN(c, d = {}) {
  let v = ie.useContext(ZT);
  Cr(
    v != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: g } = ux(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), E = Ov(c, { relative: d.relative });
  if (!v.isTransitioning)
    return !1;
  let w = rs(v.currentLocation.pathname, g) || v.currentLocation.pathname, m = rs(v.nextLocation.pathname, g) || v.nextLocation.pathname;
  return Ny(E.pathname, m) != null || Ny(E.pathname, w) != null;
}
new TextEncoder();
const _C = "/logo.png", nN = ({ messages: c, firstMessageSent: d }) => /* @__PURE__ */ dt.jsx("div", { className: "max-w-md mx-auto flex flex-col h-[76vh] rounded relative", children: /* @__PURE__ */ dt.jsx("div", { className: "flex-grow overflow-y-auto p-4 space-y-4 pb-20 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100", children: /* @__PURE__ */ dt.jsx("ul", { className: "list-none p-0 m-0", children: c.map((v, g) => /* @__PURE__ */ dt.jsxs(
  "li",
  {
    className: `flex items-start space-x-2 mb-4 ${v.sender === "assistant" ? "justify-start" : "justify-end"}`,
    children: [
      v.sender === "assistant" && /* @__PURE__ */ dt.jsx(
        "img",
        {
          src: _C,
          alt: "Assistant",
          className: "h-8 w-8 rounded-full"
        }
      ),
      /* @__PURE__ */ dt.jsxs(
        "div",
        {
          className: `p-4 rounded-lg ${v.sender === "assistant" ? "bg-blue-50 text-black" : "bg-white text-black border border-gray-300 shadow-sm"}`,
          children: [
            /* @__PURE__ */ dt.jsx("p", { children: v.text }),
            v.sender === "assistant" && d && g === 0 && /* @__PURE__ */ dt.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              /* @__PURE__ */ dt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "What are your services?" }),
              /* @__PURE__ */ dt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "How can I book?" }),
              /* @__PURE__ */ dt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "What are the rates?" })
            ] })
          ]
        }
      )
    ]
  },
  g
)) }) }) }), ox = "http://localhost:8000", rN = ({ isOpen: c, onClose: d, threadId: v, assistantId: g }) => {
  const [E, w] = ie.useState([]), [m, O] = ie.useState(""), [k, b] = ie.useState(!1);
  ie.useEffect(() => {
    w([
      {
        text: "Hello! I'm Xeko, your AI. How can I help you today?",
        sender: "assistant"
      }
    ]), b(!0);
  }, [v, g]);
  const F = async () => {
    if (!(!m.trim() || !v || !g)) {
      w((M) => [
        ...M,
        { text: m, sender: "user" }
      ]), O("");
      try {
        const M = await fetch(`${ox}/send_message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            thread_id: v,
            assistant_id: g,
            text: m
          })
        });
        if (!M.body) throw new Error("No response body from server");
        const H = M.body.getReader(), Y = new TextDecoder("utf-8");
        let j = "";
        for (w((X) => [
          ...X,
          { text: "", sender: "assistant" }
        ]); ; ) {
          const { done: X, value: K } = await H.read();
          if (X) break;
          const Z = Y.decode(K, { stream: !0 });
          j += Z, w((ce) => {
            const fe = ce.length - 1, De = ce[fe];
            if (De.sender === "assistant") {
              const he = [...ce];
              return he[fe] = {
                ...De,
                text: j
              }, he;
            }
            return ce;
          });
        }
      } catch (M) {
        console.error("Error receiving streamed message:", M), w((H) => [
          ...H,
          { text: "Something went wrong. Please try again.", sender: "assistant" }
        ]);
      }
    }
  };
  return c ? /* @__PURE__ */ dt.jsx("div", { className: "fixed inset-0 flex justify-center items-center md:justify-end md:items-end mb-5 p-4 bg-opacity-75 z-50", children: /* @__PURE__ */ dt.jsxs(
    "div",
    {
      className: "relative align-middle bg-white h-[90vh] mr-2 rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-md flex flex-col",
      "aria-labelledby": "modal-headline",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ dt.jsxs("header", { className: "w-full h-[100px] bg-gradient-to-tr from-blue-400 via-blue-400 to-blue-600 text-white text-center flex items-center justify-between p-4", children: [
          /* @__PURE__ */ dt.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ dt.jsx("div", { children: /* @__PURE__ */ dt.jsx("img", { src: _C, className: "w-[70px]", alt: "" }) }),
            /* @__PURE__ */ dt.jsxs("div", { children: [
              /* @__PURE__ */ dt.jsx("p", { children: "Xeko Assistant AI" }),
              /* @__PURE__ */ dt.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ dt.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
                /* @__PURE__ */ dt.jsx("p", { children: "User name" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ dt.jsx("div", { className: "h-9 w-9 bg-blue-400 hover:bg-blue-300 p-2 rounded-full flex justify-center items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105", children: /* @__PURE__ */ dt.jsx(
            "button",
            {
              className: "text-white bg-transparent border-none text-2xl font-bold",
              onClick: d,
              "aria-label": "Close",
              children: "×"
            }
          ) })
        ] }),
        /* @__PURE__ */ dt.jsx("div", { className: "flex-grow overflow-y-auto p-4", children: /* @__PURE__ */ dt.jsx(nN, { messages: E, firstMessageSent: k }) }),
        /* @__PURE__ */ dt.jsx("div", { className: "p-4 bg-white border-t border-b border-gray-300", children: /* @__PURE__ */ dt.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ dt.jsx(
            "input",
            {
              type: "text",
              value: m,
              onChange: (M) => O(M.target.value),
              className: "w-full p-2 text-sm bg-gray-200 border rounded-lg focus:outline-none focus:border-transparent",
              placeholder: "Type a message..."
            }
          ),
          /* @__PURE__ */ dt.jsx("div", { onClick: F, children: /* @__PURE__ */ dt.jsx(
            "img",
            {
              src: "https://i.ibb.co/mcphR4S/Design-sans-titre-33.png",
              className: "w-12 cursor-pointer rounded-full p-2 bg-blue-500",
              alt: ""
            }
          ) })
        ] }) }),
        /* @__PURE__ */ dt.jsx("footer", { className: "p-4", children: /* @__PURE__ */ dt.jsx("p", { className: "text-center text-gray-500 text-xs", children: "Powered by Xeko.ai" }) })
      ]
    }
  ) }) : null;
};
function sx(c, d) {
  return function() {
    return c.apply(d, arguments);
  };
}
const { toString: aN } = Object.prototype, { getPrototypeOf: kC } = Object, Py = /* @__PURE__ */ ((c) => (d) => {
  const v = aN.call(d);
  return c[v] || (c[v] = v.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), El = (c) => (c = c.toLowerCase(), (d) => Py(d) === c), jy = (c) => (d) => typeof d === c, { isArray: dd } = Array, bv = jy("undefined");
function iN(c) {
  return c !== null && !bv(c) && c.constructor !== null && !bv(c.constructor) && mi(c.constructor.isBuffer) && c.constructor.isBuffer(c);
}
const cx = El("ArrayBuffer");
function lN(c) {
  let d;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? d = ArrayBuffer.isView(c) : d = c && c.buffer && cx(c.buffer), d;
}
const uN = jy("string"), mi = jy("function"), fx = jy("number"), Hy = (c) => c !== null && typeof c == "object", oN = (c) => c === !0 || c === !1, Dy = (c) => {
  if (Py(c) !== "object")
    return !1;
  const d = kC(c);
  return (d === null || d === Object.prototype || Object.getPrototypeOf(d) === null) && !(Symbol.toStringTag in c) && !(Symbol.iterator in c);
}, sN = El("Date"), cN = El("File"), fN = El("Blob"), dN = El("FileList"), pN = (c) => Hy(c) && mi(c.pipe), vN = (c) => {
  let d;
  return c && (typeof FormData == "function" && c instanceof FormData || mi(c.append) && ((d = Py(c)) === "formdata" || // detect form-data instance
  d === "object" && mi(c.toString) && c.toString() === "[object FormData]"));
}, hN = El("URLSearchParams"), [mN, yN, gN, SN] = ["ReadableStream", "Request", "Response", "Headers"].map(El), EN = (c) => c.trim ? c.trim() : c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lv(c, d, { allOwnKeys: v = !1 } = {}) {
  if (c === null || typeof c > "u")
    return;
  let g, E;
  if (typeof c != "object" && (c = [c]), dd(c))
    for (g = 0, E = c.length; g < E; g++)
      d.call(null, c[g], g, c);
  else {
    const w = v ? Object.getOwnPropertyNames(c) : Object.keys(c), m = w.length;
    let O;
    for (g = 0; g < m; g++)
      O = w[g], d.call(null, c[O], O, c);
  }
}
function dx(c, d) {
  d = d.toLowerCase();
  const v = Object.keys(c);
  let g = v.length, E;
  for (; g-- > 0; )
    if (E = v[g], d === E.toLowerCase())
      return E;
  return null;
}
const Sc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, px = (c) => !bv(c) && c !== Sc;
function mC() {
  const { caseless: c } = px(this) && this || {}, d = {}, v = (g, E) => {
    const w = c && dx(d, E) || E;
    Dy(d[w]) && Dy(g) ? d[w] = mC(d[w], g) : Dy(g) ? d[w] = mC({}, g) : dd(g) ? d[w] = g.slice() : d[w] = g;
  };
  for (let g = 0, E = arguments.length; g < E; g++)
    arguments[g] && Lv(arguments[g], v);
  return d;
}
const CN = (c, d, v, { allOwnKeys: g } = {}) => (Lv(d, (E, w) => {
  v && mi(E) ? c[w] = sx(E, v) : c[w] = E;
}, { allOwnKeys: g }), c), RN = (c) => (c.charCodeAt(0) === 65279 && (c = c.slice(1)), c), wN = (c, d, v, g) => {
  c.prototype = Object.create(d.prototype, g), c.prototype.constructor = c, Object.defineProperty(c, "super", {
    value: d.prototype
  }), v && Object.assign(c.prototype, v);
}, TN = (c, d, v, g) => {
  let E, w, m;
  const O = {};
  if (d = d || {}, c == null) return d;
  do {
    for (E = Object.getOwnPropertyNames(c), w = E.length; w-- > 0; )
      m = E[w], (!g || g(m, c, d)) && !O[m] && (d[m] = c[m], O[m] = !0);
    c = v !== !1 && kC(c);
  } while (c && (!v || v(c, d)) && c !== Object.prototype);
  return d;
}, xN = (c, d, v) => {
  c = String(c), (v === void 0 || v > c.length) && (v = c.length), v -= d.length;
  const g = c.indexOf(d, v);
  return g !== -1 && g === v;
}, bN = (c) => {
  if (!c) return null;
  if (dd(c)) return c;
  let d = c.length;
  if (!fx(d)) return null;
  const v = new Array(d);
  for (; d-- > 0; )
    v[d] = c[d];
  return v;
}, _N = /* @__PURE__ */ ((c) => (d) => c && d instanceof c)(typeof Uint8Array < "u" && kC(Uint8Array)), kN = (c, d) => {
  const g = (c && c[Symbol.iterator]).call(c);
  let E;
  for (; (E = g.next()) && !E.done; ) {
    const w = E.value;
    d.call(c, w[0], w[1]);
  }
}, DN = (c, d) => {
  let v;
  const g = [];
  for (; (v = c.exec(d)) !== null; )
    g.push(v);
  return g;
}, ON = El("HTMLFormElement"), LN = (c) => c.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(v, g, E) {
    return g.toUpperCase() + E;
  }
), NT = (({ hasOwnProperty: c }) => (d, v) => c.call(d, v))(Object.prototype), NN = El("RegExp"), vx = (c, d) => {
  const v = Object.getOwnPropertyDescriptors(c), g = {};
  Lv(v, (E, w) => {
    let m;
    (m = d(E, w, c)) !== !1 && (g[w] = m || E);
  }), Object.defineProperties(c, g);
}, MN = (c) => {
  vx(c, (d, v) => {
    if (mi(c) && ["arguments", "caller", "callee"].indexOf(v) !== -1)
      return !1;
    const g = c[v];
    if (mi(g)) {
      if (d.enumerable = !1, "writable" in d) {
        d.writable = !1;
        return;
      }
      d.set || (d.set = () => {
        throw Error("Can not rewrite read-only method '" + v + "'");
      });
    }
  });
}, AN = (c, d) => {
  const v = {}, g = (E) => {
    E.forEach((w) => {
      v[w] = !0;
    });
  };
  return dd(c) ? g(c) : g(String(c).split(d)), v;
}, UN = () => {
}, zN = (c, d) => c != null && Number.isFinite(c = +c) ? c : d, fC = "abcdefghijklmnopqrstuvwxyz", MT = "0123456789", hx = {
  DIGIT: MT,
  ALPHA: fC,
  ALPHA_DIGIT: fC + fC.toUpperCase() + MT
}, FN = (c = 16, d = hx.ALPHA_DIGIT) => {
  let v = "";
  const { length: g } = d;
  for (; c--; )
    v += d[Math.random() * g | 0];
  return v;
};
function PN(c) {
  return !!(c && mi(c.append) && c[Symbol.toStringTag] === "FormData" && c[Symbol.iterator]);
}
const jN = (c) => {
  const d = new Array(10), v = (g, E) => {
    if (Hy(g)) {
      if (d.indexOf(g) >= 0)
        return;
      if (!("toJSON" in g)) {
        d[E] = g;
        const w = dd(g) ? [] : {};
        return Lv(g, (m, O) => {
          const k = v(m, E + 1);
          !bv(k) && (w[O] = k);
        }), d[E] = void 0, w;
      }
    }
    return g;
  };
  return v(c, 0);
}, HN = El("AsyncFunction"), BN = (c) => c && (Hy(c) || mi(c)) && mi(c.then) && mi(c.catch), mx = ((c, d) => c ? setImmediate : d ? ((v, g) => (Sc.addEventListener("message", ({ source: E, data: w }) => {
  E === Sc && w === v && g.length && g.shift()();
}, !1), (E) => {
  g.push(E), Sc.postMessage(v, "*");
}))(`axios@${Math.random()}`, []) : (v) => setTimeout(v))(
  typeof setImmediate == "function",
  mi(Sc.postMessage)
), VN = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sc) : typeof process < "u" && process.nextTick || mx, ee = {
  isArray: dd,
  isArrayBuffer: cx,
  isBuffer: iN,
  isFormData: vN,
  isArrayBufferView: lN,
  isString: uN,
  isNumber: fx,
  isBoolean: oN,
  isObject: Hy,
  isPlainObject: Dy,
  isReadableStream: mN,
  isRequest: yN,
  isResponse: gN,
  isHeaders: SN,
  isUndefined: bv,
  isDate: sN,
  isFile: cN,
  isBlob: fN,
  isRegExp: NN,
  isFunction: mi,
  isStream: pN,
  isURLSearchParams: hN,
  isTypedArray: _N,
  isFileList: dN,
  forEach: Lv,
  merge: mC,
  extend: CN,
  trim: EN,
  stripBOM: RN,
  inherits: wN,
  toFlatObject: TN,
  kindOf: Py,
  kindOfTest: El,
  endsWith: xN,
  toArray: bN,
  forEachEntry: kN,
  matchAll: DN,
  isHTMLForm: ON,
  hasOwnProperty: NT,
  hasOwnProp: NT,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vx,
  freezeMethods: MN,
  toObjectSet: AN,
  toCamelCase: LN,
  noop: UN,
  toFiniteNumber: zN,
  findKey: dx,
  global: Sc,
  isContextDefined: px,
  ALPHABET: hx,
  generateString: FN,
  isSpecCompliantForm: PN,
  toJSONObject: jN,
  isAsyncFn: HN,
  isThenable: BN,
  setImmediate: mx,
  asap: VN
};
function Ct(c, d, v, g, E) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = c, this.name = "AxiosError", d && (this.code = d), v && (this.config = v), g && (this.request = g), E && (this.response = E, this.status = E.status ? E.status : null);
}
ee.inherits(Ct, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: ee.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const yx = Ct.prototype, gx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((c) => {
  gx[c] = { value: c };
});
Object.defineProperties(Ct, gx);
Object.defineProperty(yx, "isAxiosError", { value: !0 });
Ct.from = (c, d, v, g, E, w) => {
  const m = Object.create(yx);
  return ee.toFlatObject(c, m, function(k) {
    return k !== Error.prototype;
  }, (O) => O !== "isAxiosError"), Ct.call(m, c.message, d, v, g, E), m.cause = c, m.name = c.name, w && Object.assign(m, w), m;
};
const $N = null;
function yC(c) {
  return ee.isPlainObject(c) || ee.isArray(c);
}
function Sx(c) {
  return ee.endsWith(c, "[]") ? c.slice(0, -2) : c;
}
function AT(c, d, v) {
  return c ? c.concat(d).map(function(E, w) {
    return E = Sx(E), !v && w ? "[" + E + "]" : E;
  }).join(v ? "." : "") : d;
}
function IN(c) {
  return ee.isArray(c) && !c.some(yC);
}
const YN = ee.toFlatObject(ee, {}, null, function(d) {
  return /^is[A-Z]/.test(d);
});
function By(c, d, v) {
  if (!ee.isObject(c))
    throw new TypeError("target must be an object");
  d = d || new FormData(), v = ee.toFlatObject(v, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(X, K) {
    return !ee.isUndefined(K[X]);
  });
  const g = v.metaTokens, E = v.visitor || F, w = v.dots, m = v.indexes, k = (v.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(d);
  if (!ee.isFunction(E))
    throw new TypeError("visitor must be a function");
  function b(j) {
    if (j === null) return "";
    if (ee.isDate(j))
      return j.toISOString();
    if (!k && ee.isBlob(j))
      throw new Ct("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(j) || ee.isTypedArray(j) ? k && typeof Blob == "function" ? new Blob([j]) : Buffer.from(j) : j;
  }
  function F(j, X, K) {
    let Z = j;
    if (j && !K && typeof j == "object") {
      if (ee.endsWith(X, "{}"))
        X = g ? X : X.slice(0, -2), j = JSON.stringify(j);
      else if (ee.isArray(j) && IN(j) || (ee.isFileList(j) || ee.endsWith(X, "[]")) && (Z = ee.toArray(j)))
        return X = Sx(X), Z.forEach(function(fe, De) {
          !(ee.isUndefined(fe) || fe === null) && d.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? AT([X], De, w) : m === null ? X : X + "[]",
            b(fe)
          );
        }), !1;
    }
    return yC(j) ? !0 : (d.append(AT(K, X, w), b(j)), !1);
  }
  const M = [], H = Object.assign(YN, {
    defaultVisitor: F,
    convertValue: b,
    isVisitable: yC
  });
  function Y(j, X) {
    if (!ee.isUndefined(j)) {
      if (M.indexOf(j) !== -1)
        throw Error("Circular reference detected in " + X.join("."));
      M.push(j), ee.forEach(j, function(Z, ce) {
        (!(ee.isUndefined(Z) || Z === null) && E.call(
          d,
          Z,
          ee.isString(ce) ? ce.trim() : ce,
          X,
          H
        )) === !0 && Y(Z, X ? X.concat(ce) : [ce]);
      }), M.pop();
    }
  }
  if (!ee.isObject(c))
    throw new TypeError("data must be an object");
  return Y(c), d;
}
function UT(c) {
  const d = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g, function(g) {
    return d[g];
  });
}
function DC(c, d) {
  this._pairs = [], c && By(c, this, d);
}
const Ex = DC.prototype;
Ex.append = function(d, v) {
  this._pairs.push([d, v]);
};
Ex.toString = function(d) {
  const v = d ? function(g) {
    return d.call(this, g, UT);
  } : UT;
  return this._pairs.map(function(E) {
    return v(E[0]) + "=" + v(E[1]);
  }, "").join("&");
};
function WN(c) {
  return encodeURIComponent(c).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cx(c, d, v) {
  if (!d)
    return c;
  const g = v && v.encode || WN;
  ee.isFunction(v) && (v = {
    serialize: v
  });
  const E = v && v.serialize;
  let w;
  if (E ? w = E(d, v) : w = ee.isURLSearchParams(d) ? d.toString() : new DC(d, v).toString(g), w) {
    const m = c.indexOf("#");
    m !== -1 && (c = c.slice(0, m)), c += (c.indexOf("?") === -1 ? "?" : "&") + w;
  }
  return c;
}
class zT {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(d, v, g) {
    return this.handlers.push({
      fulfilled: d,
      rejected: v,
      synchronous: g ? g.synchronous : !1,
      runWhen: g ? g.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(d) {
    this.handlers[d] && (this.handlers[d] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(d) {
    ee.forEach(this.handlers, function(g) {
      g !== null && d(g);
    });
  }
}
const Rx = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qN = typeof URLSearchParams < "u" ? URLSearchParams : DC, QN = typeof FormData < "u" ? FormData : null, GN = typeof Blob < "u" ? Blob : null, KN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qN,
    FormData: QN,
    Blob: GN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, OC = typeof window < "u" && typeof document < "u", gC = typeof navigator == "object" && navigator || void 0, XN = OC && (!gC || ["ReactNative", "NativeScript", "NS"].indexOf(gC.product) < 0), JN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ZN = OC && window.location.href || "http://localhost", eM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: OC,
  hasStandardBrowserEnv: XN,
  hasStandardBrowserWebWorkerEnv: JN,
  navigator: gC,
  origin: ZN
}, Symbol.toStringTag, { value: "Module" })), fa = {
  ...eM,
  ...KN
};
function tM(c, d) {
  return By(c, new fa.classes.URLSearchParams(), Object.assign({
    visitor: function(v, g, E, w) {
      return fa.isNode && ee.isBuffer(v) ? (this.append(g, v.toString("base64")), !1) : w.defaultVisitor.apply(this, arguments);
    }
  }, d));
}
function nM(c) {
  return ee.matchAll(/\w+|\[(\w*)]/g, c).map((d) => d[0] === "[]" ? "" : d[1] || d[0]);
}
function rM(c) {
  const d = {}, v = Object.keys(c);
  let g;
  const E = v.length;
  let w;
  for (g = 0; g < E; g++)
    w = v[g], d[w] = c[w];
  return d;
}
function wx(c) {
  function d(v, g, E, w) {
    let m = v[w++];
    if (m === "__proto__") return !0;
    const O = Number.isFinite(+m), k = w >= v.length;
    return m = !m && ee.isArray(E) ? E.length : m, k ? (ee.hasOwnProp(E, m) ? E[m] = [E[m], g] : E[m] = g, !O) : ((!E[m] || !ee.isObject(E[m])) && (E[m] = []), d(v, g, E[m], w) && ee.isArray(E[m]) && (E[m] = rM(E[m])), !O);
  }
  if (ee.isFormData(c) && ee.isFunction(c.entries)) {
    const v = {};
    return ee.forEachEntry(c, (g, E) => {
      d(nM(g), E, v, 0);
    }), v;
  }
  return null;
}
function aM(c, d, v) {
  if (ee.isString(c))
    try {
      return (d || JSON.parse)(c), ee.trim(c);
    } catch (g) {
      if (g.name !== "SyntaxError")
        throw g;
    }
  return (0, JSON.stringify)(c);
}
const Nv = {
  transitional: Rx,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(d, v) {
    const g = v.getContentType() || "", E = g.indexOf("application/json") > -1, w = ee.isObject(d);
    if (w && ee.isHTMLForm(d) && (d = new FormData(d)), ee.isFormData(d))
      return E ? JSON.stringify(wx(d)) : d;
    if (ee.isArrayBuffer(d) || ee.isBuffer(d) || ee.isStream(d) || ee.isFile(d) || ee.isBlob(d) || ee.isReadableStream(d))
      return d;
    if (ee.isArrayBufferView(d))
      return d.buffer;
    if (ee.isURLSearchParams(d))
      return v.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), d.toString();
    let O;
    if (w) {
      if (g.indexOf("application/x-www-form-urlencoded") > -1)
        return tM(d, this.formSerializer).toString();
      if ((O = ee.isFileList(d)) || g.indexOf("multipart/form-data") > -1) {
        const k = this.env && this.env.FormData;
        return By(
          O ? { "files[]": d } : d,
          k && new k(),
          this.formSerializer
        );
      }
    }
    return w || E ? (v.setContentType("application/json", !1), aM(d)) : d;
  }],
  transformResponse: [function(d) {
    const v = this.transitional || Nv.transitional, g = v && v.forcedJSONParsing, E = this.responseType === "json";
    if (ee.isResponse(d) || ee.isReadableStream(d))
      return d;
    if (d && ee.isString(d) && (g && !this.responseType || E)) {
      const m = !(v && v.silentJSONParsing) && E;
      try {
        return JSON.parse(d);
      } catch (O) {
        if (m)
          throw O.name === "SyntaxError" ? Ct.from(O, Ct.ERR_BAD_RESPONSE, this, null, this.response) : O;
      }
    }
    return d;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: fa.classes.FormData,
    Blob: fa.classes.Blob
  },
  validateStatus: function(d) {
    return d >= 200 && d < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ee.forEach(["delete", "get", "head", "post", "put", "patch"], (c) => {
  Nv.headers[c] = {};
});
const iM = ee.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), lM = (c) => {
  const d = {};
  let v, g, E;
  return c && c.split(`
`).forEach(function(m) {
    E = m.indexOf(":"), v = m.substring(0, E).trim().toLowerCase(), g = m.substring(E + 1).trim(), !(!v || d[v] && iM[v]) && (v === "set-cookie" ? d[v] ? d[v].push(g) : d[v] = [g] : d[v] = d[v] ? d[v] + ", " + g : g);
  }), d;
}, FT = Symbol("internals");
function wv(c) {
  return c && String(c).trim().toLowerCase();
}
function Oy(c) {
  return c === !1 || c == null ? c : ee.isArray(c) ? c.map(Oy) : String(c);
}
function uM(c) {
  const d = /* @__PURE__ */ Object.create(null), v = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let g;
  for (; g = v.exec(c); )
    d[g[1]] = g[2];
  return d;
}
const oM = (c) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());
function dC(c, d, v, g, E) {
  if (ee.isFunction(g))
    return g.call(this, d, v);
  if (E && (d = v), !!ee.isString(d)) {
    if (ee.isString(g))
      return d.indexOf(g) !== -1;
    if (ee.isRegExp(g))
      return g.test(d);
  }
}
function sM(c) {
  return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (d, v, g) => v.toUpperCase() + g);
}
function cM(c, d) {
  const v = ee.toCamelCase(" " + d);
  ["get", "set", "has"].forEach((g) => {
    Object.defineProperty(c, g + v, {
      value: function(E, w, m) {
        return this[g].call(this, d, E, w, m);
      },
      configurable: !0
    });
  });
}
class Ga {
  constructor(d) {
    d && this.set(d);
  }
  set(d, v, g) {
    const E = this;
    function w(O, k, b) {
      const F = wv(k);
      if (!F)
        throw new Error("header name must be a non-empty string");
      const M = ee.findKey(E, F);
      (!M || E[M] === void 0 || b === !0 || b === void 0 && E[M] !== !1) && (E[M || k] = Oy(O));
    }
    const m = (O, k) => ee.forEach(O, (b, F) => w(b, F, k));
    if (ee.isPlainObject(d) || d instanceof this.constructor)
      m(d, v);
    else if (ee.isString(d) && (d = d.trim()) && !oM(d))
      m(lM(d), v);
    else if (ee.isHeaders(d))
      for (const [O, k] of d.entries())
        w(k, O, g);
    else
      d != null && w(v, d, g);
    return this;
  }
  get(d, v) {
    if (d = wv(d), d) {
      const g = ee.findKey(this, d);
      if (g) {
        const E = this[g];
        if (!v)
          return E;
        if (v === !0)
          return uM(E);
        if (ee.isFunction(v))
          return v.call(this, E, g);
        if (ee.isRegExp(v))
          return v.exec(E);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(d, v) {
    if (d = wv(d), d) {
      const g = ee.findKey(this, d);
      return !!(g && this[g] !== void 0 && (!v || dC(this, this[g], g, v)));
    }
    return !1;
  }
  delete(d, v) {
    const g = this;
    let E = !1;
    function w(m) {
      if (m = wv(m), m) {
        const O = ee.findKey(g, m);
        O && (!v || dC(g, g[O], O, v)) && (delete g[O], E = !0);
      }
    }
    return ee.isArray(d) ? d.forEach(w) : w(d), E;
  }
  clear(d) {
    const v = Object.keys(this);
    let g = v.length, E = !1;
    for (; g--; ) {
      const w = v[g];
      (!d || dC(this, this[w], w, d, !0)) && (delete this[w], E = !0);
    }
    return E;
  }
  normalize(d) {
    const v = this, g = {};
    return ee.forEach(this, (E, w) => {
      const m = ee.findKey(g, w);
      if (m) {
        v[m] = Oy(E), delete v[w];
        return;
      }
      const O = d ? sM(w) : String(w).trim();
      O !== w && delete v[w], v[O] = Oy(E), g[O] = !0;
    }), this;
  }
  concat(...d) {
    return this.constructor.concat(this, ...d);
  }
  toJSON(d) {
    const v = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (g, E) => {
      g != null && g !== !1 && (v[E] = d && ee.isArray(g) ? g.join(", ") : g);
    }), v;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([d, v]) => d + ": " + v).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(d) {
    return d instanceof this ? d : new this(d);
  }
  static concat(d, ...v) {
    const g = new this(d);
    return v.forEach((E) => g.set(E)), g;
  }
  static accessor(d) {
    const g = (this[FT] = this[FT] = {
      accessors: {}
    }).accessors, E = this.prototype;
    function w(m) {
      const O = wv(m);
      g[O] || (cM(E, m), g[O] = !0);
    }
    return ee.isArray(d) ? d.forEach(w) : w(d), this;
  }
}
Ga.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(Ga.prototype, ({ value: c }, d) => {
  let v = d[0].toUpperCase() + d.slice(1);
  return {
    get: () => c,
    set(g) {
      this[v] = g;
    }
  };
});
ee.freezeMethods(Ga);
function pC(c, d) {
  const v = this || Nv, g = d || v, E = Ga.from(g.headers);
  let w = g.data;
  return ee.forEach(c, function(O) {
    w = O.call(v, w, E.normalize(), d ? d.status : void 0);
  }), E.normalize(), w;
}
function Tx(c) {
  return !!(c && c.__CANCEL__);
}
function pd(c, d, v) {
  Ct.call(this, c ?? "canceled", Ct.ERR_CANCELED, d, v), this.name = "CanceledError";
}
ee.inherits(pd, Ct, {
  __CANCEL__: !0
});
function xx(c, d, v) {
  const g = v.config.validateStatus;
  !v.status || !g || g(v.status) ? c(v) : d(new Ct(
    "Request failed with status code " + v.status,
    [Ct.ERR_BAD_REQUEST, Ct.ERR_BAD_RESPONSE][Math.floor(v.status / 100) - 4],
    v.config,
    v.request,
    v
  ));
}
function fM(c) {
  const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c);
  return d && d[1] || "";
}
function dM(c, d) {
  c = c || 10;
  const v = new Array(c), g = new Array(c);
  let E = 0, w = 0, m;
  return d = d !== void 0 ? d : 1e3, function(k) {
    const b = Date.now(), F = g[w];
    m || (m = b), v[E] = k, g[E] = b;
    let M = w, H = 0;
    for (; M !== E; )
      H += v[M++], M = M % c;
    if (E = (E + 1) % c, E === w && (w = (w + 1) % c), b - m < d)
      return;
    const Y = F && b - F;
    return Y ? Math.round(H * 1e3 / Y) : void 0;
  };
}
function pM(c, d) {
  let v = 0, g = 1e3 / d, E, w;
  const m = (b, F = Date.now()) => {
    v = F, E = null, w && (clearTimeout(w), w = null), c.apply(null, b);
  };
  return [(...b) => {
    const F = Date.now(), M = F - v;
    M >= g ? m(b, F) : (E = b, w || (w = setTimeout(() => {
      w = null, m(E);
    }, g - M)));
  }, () => E && m(E)];
}
const My = (c, d, v = 3) => {
  let g = 0;
  const E = dM(50, 250);
  return pM((w) => {
    const m = w.loaded, O = w.lengthComputable ? w.total : void 0, k = m - g, b = E(k), F = m <= O;
    g = m;
    const M = {
      loaded: m,
      total: O,
      progress: O ? m / O : void 0,
      bytes: k,
      rate: b || void 0,
      estimated: b && O && F ? (O - m) / b : void 0,
      event: w,
      lengthComputable: O != null,
      [d ? "download" : "upload"]: !0
    };
    c(M);
  }, v);
}, PT = (c, d) => {
  const v = c != null;
  return [(g) => d[0]({
    lengthComputable: v,
    total: c,
    loaded: g
  }), d[1]];
}, jT = (c) => (...d) => ee.asap(() => c(...d)), vM = fa.hasStandardBrowserEnv ? /* @__PURE__ */ ((c, d) => (v) => (v = new URL(v, fa.origin), c.protocol === v.protocol && c.host === v.host && (d || c.port === v.port)))(
  new URL(fa.origin),
  fa.navigator && /(msie|trident)/i.test(fa.navigator.userAgent)
) : () => !0, hM = fa.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(c, d, v, g, E, w) {
      const m = [c + "=" + encodeURIComponent(d)];
      ee.isNumber(v) && m.push("expires=" + new Date(v).toGMTString()), ee.isString(g) && m.push("path=" + g), ee.isString(E) && m.push("domain=" + E), w === !0 && m.push("secure"), document.cookie = m.join("; ");
    },
    read(c) {
      const d = document.cookie.match(new RegExp("(^|;\\s*)(" + c + ")=([^;]*)"));
      return d ? decodeURIComponent(d[3]) : null;
    },
    remove(c) {
      this.write(c, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function mM(c) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(c);
}
function yM(c, d) {
  return d ? c.replace(/\/?\/$/, "") + "/" + d.replace(/^\/+/, "") : c;
}
function bx(c, d) {
  return c && !mM(d) ? yM(c, d) : d;
}
const HT = (c) => c instanceof Ga ? { ...c } : c;
function Cc(c, d) {
  d = d || {};
  const v = {};
  function g(b, F, M, H) {
    return ee.isPlainObject(b) && ee.isPlainObject(F) ? ee.merge.call({ caseless: H }, b, F) : ee.isPlainObject(F) ? ee.merge({}, F) : ee.isArray(F) ? F.slice() : F;
  }
  function E(b, F, M, H) {
    if (ee.isUndefined(F)) {
      if (!ee.isUndefined(b))
        return g(void 0, b, M, H);
    } else return g(b, F, M, H);
  }
  function w(b, F) {
    if (!ee.isUndefined(F))
      return g(void 0, F);
  }
  function m(b, F) {
    if (ee.isUndefined(F)) {
      if (!ee.isUndefined(b))
        return g(void 0, b);
    } else return g(void 0, F);
  }
  function O(b, F, M) {
    if (M in d)
      return g(b, F);
    if (M in c)
      return g(void 0, b);
  }
  const k = {
    url: w,
    method: w,
    data: w,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    withXSRFToken: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: O,
    headers: (b, F, M) => E(HT(b), HT(F), M, !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, c, d)), function(F) {
    const M = k[F] || E, H = M(c[F], d[F], F);
    ee.isUndefined(H) && M !== O || (v[F] = H);
  }), v;
}
const _x = (c) => {
  const d = Cc({}, c);
  let { data: v, withXSRFToken: g, xsrfHeaderName: E, xsrfCookieName: w, headers: m, auth: O } = d;
  d.headers = m = Ga.from(m), d.url = Cx(bx(d.baseURL, d.url), c.params, c.paramsSerializer), O && m.set(
    "Authorization",
    "Basic " + btoa((O.username || "") + ":" + (O.password ? unescape(encodeURIComponent(O.password)) : ""))
  );
  let k;
  if (ee.isFormData(v)) {
    if (fa.hasStandardBrowserEnv || fa.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if ((k = m.getContentType()) !== !1) {
      const [b, ...F] = k ? k.split(";").map((M) => M.trim()).filter(Boolean) : [];
      m.setContentType([b || "multipart/form-data", ...F].join("; "));
    }
  }
  if (fa.hasStandardBrowserEnv && (g && ee.isFunction(g) && (g = g(d)), g || g !== !1 && vM(d.url))) {
    const b = E && w && hM.read(w);
    b && m.set(E, b);
  }
  return d;
}, gM = typeof XMLHttpRequest < "u", SM = gM && function(c) {
  return new Promise(function(v, g) {
    const E = _x(c);
    let w = E.data;
    const m = Ga.from(E.headers).normalize();
    let { responseType: O, onUploadProgress: k, onDownloadProgress: b } = E, F, M, H, Y, j;
    function X() {
      Y && Y(), j && j(), E.cancelToken && E.cancelToken.unsubscribe(F), E.signal && E.signal.removeEventListener("abort", F);
    }
    let K = new XMLHttpRequest();
    K.open(E.method.toUpperCase(), E.url, !0), K.timeout = E.timeout;
    function Z() {
      if (!K)
        return;
      const fe = Ga.from(
        "getAllResponseHeaders" in K && K.getAllResponseHeaders()
      ), he = {
        data: !O || O === "text" || O === "json" ? K.responseText : K.response,
        status: K.status,
        statusText: K.statusText,
        headers: fe,
        config: c,
        request: K
      };
      xx(function(Me) {
        v(Me), X();
      }, function(Me) {
        g(Me), X();
      }, he), K = null;
    }
    "onloadend" in K ? K.onloadend = Z : K.onreadystatechange = function() {
      !K || K.readyState !== 4 || K.status === 0 && !(K.responseURL && K.responseURL.indexOf("file:") === 0) || setTimeout(Z);
    }, K.onabort = function() {
      K && (g(new Ct("Request aborted", Ct.ECONNABORTED, c, K)), K = null);
    }, K.onerror = function() {
      g(new Ct("Network Error", Ct.ERR_NETWORK, c, K)), K = null;
    }, K.ontimeout = function() {
      let De = E.timeout ? "timeout of " + E.timeout + "ms exceeded" : "timeout exceeded";
      const he = E.transitional || Rx;
      E.timeoutErrorMessage && (De = E.timeoutErrorMessage), g(new Ct(
        De,
        he.clarifyTimeoutError ? Ct.ETIMEDOUT : Ct.ECONNABORTED,
        c,
        K
      )), K = null;
    }, w === void 0 && m.setContentType(null), "setRequestHeader" in K && ee.forEach(m.toJSON(), function(De, he) {
      K.setRequestHeader(he, De);
    }), ee.isUndefined(E.withCredentials) || (K.withCredentials = !!E.withCredentials), O && O !== "json" && (K.responseType = E.responseType), b && ([H, j] = My(b, !0), K.addEventListener("progress", H)), k && K.upload && ([M, Y] = My(k), K.upload.addEventListener("progress", M), K.upload.addEventListener("loadend", Y)), (E.cancelToken || E.signal) && (F = (fe) => {
      K && (g(!fe || fe.type ? new pd(null, c, K) : fe), K.abort(), K = null);
    }, E.cancelToken && E.cancelToken.subscribe(F), E.signal && (E.signal.aborted ? F() : E.signal.addEventListener("abort", F)));
    const ce = fM(E.url);
    if (ce && fa.protocols.indexOf(ce) === -1) {
      g(new Ct("Unsupported protocol " + ce + ":", Ct.ERR_BAD_REQUEST, c));
      return;
    }
    K.send(w || null);
  });
}, EM = (c, d) => {
  const { length: v } = c = c ? c.filter(Boolean) : [];
  if (d || v) {
    let g = new AbortController(), E;
    const w = function(b) {
      if (!E) {
        E = !0, O();
        const F = b instanceof Error ? b : this.reason;
        g.abort(F instanceof Ct ? F : new pd(F instanceof Error ? F.message : F));
      }
    };
    let m = d && setTimeout(() => {
      m = null, w(new Ct(`timeout ${d} of ms exceeded`, Ct.ETIMEDOUT));
    }, d);
    const O = () => {
      c && (m && clearTimeout(m), m = null, c.forEach((b) => {
        b.unsubscribe ? b.unsubscribe(w) : b.removeEventListener("abort", w);
      }), c = null);
    };
    c.forEach((b) => b.addEventListener("abort", w));
    const { signal: k } = g;
    return k.unsubscribe = () => ee.asap(O), k;
  }
}, CM = function* (c, d) {
  let v = c.byteLength;
  if (v < d) {
    yield c;
    return;
  }
  let g = 0, E;
  for (; g < v; )
    E = g + d, yield c.slice(g, E), g = E;
}, RM = async function* (c, d) {
  for await (const v of wM(c))
    yield* CM(v, d);
}, wM = async function* (c) {
  if (c[Symbol.asyncIterator]) {
    yield* c;
    return;
  }
  const d = c.getReader();
  try {
    for (; ; ) {
      const { done: v, value: g } = await d.read();
      if (v)
        break;
      yield g;
    }
  } finally {
    await d.cancel();
  }
}, BT = (c, d, v, g) => {
  const E = RM(c, d);
  let w = 0, m, O = (k) => {
    m || (m = !0, g && g(k));
  };
  return new ReadableStream({
    async pull(k) {
      try {
        const { done: b, value: F } = await E.next();
        if (b) {
          O(), k.close();
          return;
        }
        let M = F.byteLength;
        if (v) {
          let H = w += M;
          v(H);
        }
        k.enqueue(new Uint8Array(F));
      } catch (b) {
        throw O(b), b;
      }
    },
    cancel(k) {
      return O(k), E.return();
    }
  }, {
    highWaterMark: 2
  });
}, Vy = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", kx = Vy && typeof ReadableStream == "function", TM = Vy && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((c) => (d) => c.encode(d))(new TextEncoder()) : async (c) => new Uint8Array(await new Response(c).arrayBuffer())), Dx = (c, ...d) => {
  try {
    return !!c(...d);
  } catch {
    return !1;
  }
}, xM = kx && Dx(() => {
  let c = !1;
  const d = new Request(fa.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return c = !0, "half";
    }
  }).headers.has("Content-Type");
  return c && !d;
}), VT = 64 * 1024, SC = kx && Dx(() => ee.isReadableStream(new Response("").body)), Ay = {
  stream: SC && ((c) => c.body)
};
Vy && ((c) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !Ay[d] && (Ay[d] = ee.isFunction(c[d]) ? (v) => v[d]() : (v, g) => {
      throw new Ct(`Response type '${d}' is not supported`, Ct.ERR_NOT_SUPPORT, g);
    });
  });
})(new Response());
const bM = async (c) => {
  if (c == null)
    return 0;
  if (ee.isBlob(c))
    return c.size;
  if (ee.isSpecCompliantForm(c))
    return (await new Request(fa.origin, {
      method: "POST",
      body: c
    }).arrayBuffer()).byteLength;
  if (ee.isArrayBufferView(c) || ee.isArrayBuffer(c))
    return c.byteLength;
  if (ee.isURLSearchParams(c) && (c = c + ""), ee.isString(c))
    return (await TM(c)).byteLength;
}, _M = async (c, d) => {
  const v = ee.toFiniteNumber(c.getContentLength());
  return v ?? bM(d);
}, kM = Vy && (async (c) => {
  let {
    url: d,
    method: v,
    data: g,
    signal: E,
    cancelToken: w,
    timeout: m,
    onDownloadProgress: O,
    onUploadProgress: k,
    responseType: b,
    headers: F,
    withCredentials: M = "same-origin",
    fetchOptions: H
  } = _x(c);
  b = b ? (b + "").toLowerCase() : "text";
  let Y = EM([E, w && w.toAbortSignal()], m), j;
  const X = Y && Y.unsubscribe && (() => {
    Y.unsubscribe();
  });
  let K;
  try {
    if (k && xM && v !== "get" && v !== "head" && (K = await _M(F, g)) !== 0) {
      let he = new Request(d, {
        method: "POST",
        body: g,
        duplex: "half"
      }), Ye;
      if (ee.isFormData(g) && (Ye = he.headers.get("content-type")) && F.setContentType(Ye), he.body) {
        const [Me, Tt] = PT(
          K,
          My(jT(k))
        );
        g = BT(he.body, VT, Me, Tt);
      }
    }
    ee.isString(M) || (M = M ? "include" : "omit");
    const Z = "credentials" in Request.prototype;
    j = new Request(d, {
      ...H,
      signal: Y,
      method: v.toUpperCase(),
      headers: F.normalize().toJSON(),
      body: g,
      duplex: "half",
      credentials: Z ? M : void 0
    });
    let ce = await fetch(j);
    const fe = SC && (b === "stream" || b === "response");
    if (SC && (O || fe && X)) {
      const he = {};
      ["status", "statusText", "headers"].forEach((tt) => {
        he[tt] = ce[tt];
      });
      const Ye = ee.toFiniteNumber(ce.headers.get("content-length")), [Me, Tt] = O && PT(
        Ye,
        My(jT(O), !0)
      ) || [];
      ce = new Response(
        BT(ce.body, VT, Me, () => {
          Tt && Tt(), X && X();
        }),
        he
      );
    }
    b = b || "text";
    let De = await Ay[ee.findKey(Ay, b) || "text"](ce, c);
    return !fe && X && X(), await new Promise((he, Ye) => {
      xx(he, Ye, {
        data: De,
        headers: Ga.from(ce.headers),
        status: ce.status,
        statusText: ce.statusText,
        config: c,
        request: j
      });
    });
  } catch (Z) {
    throw X && X(), Z && Z.name === "TypeError" && /fetch/i.test(Z.message) ? Object.assign(
      new Ct("Network Error", Ct.ERR_NETWORK, c, j),
      {
        cause: Z.cause || Z
      }
    ) : Ct.from(Z, Z && Z.code, c, j);
  }
}), EC = {
  http: $N,
  xhr: SM,
  fetch: kM
};
ee.forEach(EC, (c, d) => {
  if (c) {
    try {
      Object.defineProperty(c, "name", { value: d });
    } catch {
    }
    Object.defineProperty(c, "adapterName", { value: d });
  }
});
const $T = (c) => `- ${c}`, DM = (c) => ee.isFunction(c) || c === null || c === !1, Ox = {
  getAdapter: (c) => {
    c = ee.isArray(c) ? c : [c];
    const { length: d } = c;
    let v, g;
    const E = {};
    for (let w = 0; w < d; w++) {
      v = c[w];
      let m;
      if (g = v, !DM(v) && (g = EC[(m = String(v)).toLowerCase()], g === void 0))
        throw new Ct(`Unknown adapter '${m}'`);
      if (g)
        break;
      E[m || "#" + w] = g;
    }
    if (!g) {
      const w = Object.entries(E).map(
        ([O, k]) => `adapter ${O} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let m = d ? w.length > 1 ? `since :
` + w.map($T).join(`
`) : " " + $T(w[0]) : "as no adapter specified";
      throw new Ct(
        "There is no suitable adapter to dispatch the request " + m,
        "ERR_NOT_SUPPORT"
      );
    }
    return g;
  },
  adapters: EC
};
function vC(c) {
  if (c.cancelToken && c.cancelToken.throwIfRequested(), c.signal && c.signal.aborted)
    throw new pd(null, c);
}
function IT(c) {
  return vC(c), c.headers = Ga.from(c.headers), c.data = pC.call(
    c,
    c.transformRequest
  ), ["post", "put", "patch"].indexOf(c.method) !== -1 && c.headers.setContentType("application/x-www-form-urlencoded", !1), Ox.getAdapter(c.adapter || Nv.adapter)(c).then(function(g) {
    return vC(c), g.data = pC.call(
      c,
      c.transformResponse,
      g
    ), g.headers = Ga.from(g.headers), g;
  }, function(g) {
    return Tx(g) || (vC(c), g && g.response && (g.response.data = pC.call(
      c,
      c.transformResponse,
      g.response
    ), g.response.headers = Ga.from(g.response.headers))), Promise.reject(g);
  });
}
const Lx = "1.7.9", $y = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((c, d) => {
  $y[c] = function(g) {
    return typeof g === c || "a" + (d < 1 ? "n " : " ") + c;
  };
});
const YT = {};
$y.transitional = function(d, v, g) {
  function E(w, m) {
    return "[Axios v" + Lx + "] Transitional option '" + w + "'" + m + (g ? ". " + g : "");
  }
  return (w, m, O) => {
    if (d === !1)
      throw new Ct(
        E(m, " has been removed" + (v ? " in " + v : "")),
        Ct.ERR_DEPRECATED
      );
    return v && !YT[m] && (YT[m] = !0, console.warn(
      E(
        m,
        " has been deprecated since v" + v + " and will be removed in the near future"
      )
    )), d ? d(w, m, O) : !0;
  };
};
$y.spelling = function(d) {
  return (v, g) => (console.warn(`${g} is likely a misspelling of ${d}`), !0);
};
function OM(c, d, v) {
  if (typeof c != "object")
    throw new Ct("options must be an object", Ct.ERR_BAD_OPTION_VALUE);
  const g = Object.keys(c);
  let E = g.length;
  for (; E-- > 0; ) {
    const w = g[E], m = d[w];
    if (m) {
      const O = c[w], k = O === void 0 || m(O, w, c);
      if (k !== !0)
        throw new Ct("option " + w + " must be " + k, Ct.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (v !== !0)
      throw new Ct("Unknown option " + w, Ct.ERR_BAD_OPTION);
  }
}
const Ly = {
  assertOptions: OM,
  validators: $y
}, uu = Ly.validators;
class Ec {
  constructor(d) {
    this.defaults = d, this.interceptors = {
      request: new zT(),
      response: new zT()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(d, v) {
    try {
      return await this._request(d, v);
    } catch (g) {
      if (g instanceof Error) {
        let E = {};
        Error.captureStackTrace ? Error.captureStackTrace(E) : E = new Error();
        const w = E.stack ? E.stack.replace(/^.+\n/, "") : "";
        try {
          g.stack ? w && !String(g.stack).endsWith(w.replace(/^.+\n.+\n/, "")) && (g.stack += `
` + w) : g.stack = w;
        } catch {
        }
      }
      throw g;
    }
  }
  _request(d, v) {
    typeof d == "string" ? (v = v || {}, v.url = d) : v = d || {}, v = Cc(this.defaults, v);
    const { transitional: g, paramsSerializer: E, headers: w } = v;
    g !== void 0 && Ly.assertOptions(g, {
      silentJSONParsing: uu.transitional(uu.boolean),
      forcedJSONParsing: uu.transitional(uu.boolean),
      clarifyTimeoutError: uu.transitional(uu.boolean)
    }, !1), E != null && (ee.isFunction(E) ? v.paramsSerializer = {
      serialize: E
    } : Ly.assertOptions(E, {
      encode: uu.function,
      serialize: uu.function
    }, !0)), Ly.assertOptions(v, {
      baseUrl: uu.spelling("baseURL"),
      withXsrfToken: uu.spelling("withXSRFToken")
    }, !0), v.method = (v.method || this.defaults.method || "get").toLowerCase();
    let m = w && ee.merge(
      w.common,
      w[v.method]
    );
    w && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (j) => {
        delete w[j];
      }
    ), v.headers = Ga.concat(m, w);
    const O = [];
    let k = !0;
    this.interceptors.request.forEach(function(X) {
      typeof X.runWhen == "function" && X.runWhen(v) === !1 || (k = k && X.synchronous, O.unshift(X.fulfilled, X.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(X) {
      b.push(X.fulfilled, X.rejected);
    });
    let F, M = 0, H;
    if (!k) {
      const j = [IT.bind(this), void 0];
      for (j.unshift.apply(j, O), j.push.apply(j, b), H = j.length, F = Promise.resolve(v); M < H; )
        F = F.then(j[M++], j[M++]);
      return F;
    }
    H = O.length;
    let Y = v;
    for (M = 0; M < H; ) {
      const j = O[M++], X = O[M++];
      try {
        Y = j(Y);
      } catch (K) {
        X.call(this, K);
        break;
      }
    }
    try {
      F = IT.call(this, Y);
    } catch (j) {
      return Promise.reject(j);
    }
    for (M = 0, H = b.length; M < H; )
      F = F.then(b[M++], b[M++]);
    return F;
  }
  getUri(d) {
    d = Cc(this.defaults, d);
    const v = bx(d.baseURL, d.url);
    return Cx(v, d.params, d.paramsSerializer);
  }
}
ee.forEach(["delete", "get", "head", "options"], function(d) {
  Ec.prototype[d] = function(v, g) {
    return this.request(Cc(g || {}, {
      method: d,
      url: v,
      data: (g || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(d) {
  function v(g) {
    return function(w, m, O) {
      return this.request(Cc(O || {}, {
        method: d,
        headers: g ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: w,
        data: m
      }));
    };
  }
  Ec.prototype[d] = v(), Ec.prototype[d + "Form"] = v(!0);
});
class LC {
  constructor(d) {
    if (typeof d != "function")
      throw new TypeError("executor must be a function.");
    let v;
    this.promise = new Promise(function(w) {
      v = w;
    });
    const g = this;
    this.promise.then((E) => {
      if (!g._listeners) return;
      let w = g._listeners.length;
      for (; w-- > 0; )
        g._listeners[w](E);
      g._listeners = null;
    }), this.promise.then = (E) => {
      let w;
      const m = new Promise((O) => {
        g.subscribe(O), w = O;
      }).then(E);
      return m.cancel = function() {
        g.unsubscribe(w);
      }, m;
    }, d(function(w, m, O) {
      g.reason || (g.reason = new pd(w, m, O), v(g.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(d) {
    if (this.reason) {
      d(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(d) : this._listeners = [d];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(d) {
    if (!this._listeners)
      return;
    const v = this._listeners.indexOf(d);
    v !== -1 && this._listeners.splice(v, 1);
  }
  toAbortSignal() {
    const d = new AbortController(), v = (g) => {
      d.abort(g);
    };
    return this.subscribe(v), d.signal.unsubscribe = () => this.unsubscribe(v), d.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let d;
    return {
      token: new LC(function(E) {
        d = E;
      }),
      cancel: d
    };
  }
}
function LM(c) {
  return function(v) {
    return c.apply(null, v);
  };
}
function NM(c) {
  return ee.isObject(c) && c.isAxiosError === !0;
}
const CC = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(CC).forEach(([c, d]) => {
  CC[d] = c;
});
function Nx(c) {
  const d = new Ec(c), v = sx(Ec.prototype.request, d);
  return ee.extend(v, Ec.prototype, d, { allOwnKeys: !0 }), ee.extend(v, d, null, { allOwnKeys: !0 }), v.create = function(E) {
    return Nx(Cc(c, E));
  }, v;
}
const ar = Nx(Nv);
ar.Axios = Ec;
ar.CanceledError = pd;
ar.CancelToken = LC;
ar.isCancel = Tx;
ar.VERSION = Lx;
ar.toFormData = By;
ar.AxiosError = Ct;
ar.Cancel = ar.CanceledError;
ar.all = function(d) {
  return Promise.all(d);
};
ar.spread = LM;
ar.isAxiosError = NM;
ar.mergeConfig = Cc;
ar.AxiosHeaders = Ga;
ar.formToJSON = (c) => wx(ee.isHTMLForm(c) ? new FormData(c) : c);
ar.getAdapter = Ox.getAdapter;
ar.HttpStatusCode = CC;
ar.default = ar;
const MM = () => {
  const [c, d] = ie.useState(!1), [v, g] = ie.useState(null), [E, w] = ie.useState(!0), [m, O] = ie.useState(null);
  ie.useEffect(() => {
    const H = new URLSearchParams(window.location.search).get("assistant_id") || "asst_79azoCwz4RXE6luvA1xQdvLo";
    O(H);
  }, []);
  const k = async () => {
    try {
      if (!m)
        throw new Error("Assistant ID is missing.");
      const H = (await ar.get(`${ox}/get_thread_id/${m}`)).data.thread_id;
      g(H), d(!0), w(!1);
    } catch (M) {
      console.error("Failed to fetch thread ID:", M), alert("Unable to start chat. Please try again later.");
    }
  }, b = () => {
    d(!1), g(null), w(!0);
  }, F = () => {
    w(!1);
  };
  return /* @__PURE__ */ dt.jsxs(dt.Fragment, { children: [
    E && /* @__PURE__ */ dt.jsxs("div", { className: "bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-500 h-[130px] w-[180px] p-4 flex flex-col justify-center items-center rounded-tl-3xl rounded-bl-3xl transition-all duration-500 ease-in-out relative", children: [
      /* @__PURE__ */ dt.jsx(
        "button",
        {
          onClick: F,
          className: "absolute top-0 left-1 text-gray-200 hover:text-white font-bold text-md p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer",
          children: "X"
        }
      ),
      /* @__PURE__ */ dt.jsx(
        "img",
        {
          src: _C,
          alt: "logo",
          className: "h-24 animate__animated animate__fadeIn relative top-[-10px] w-[80px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        }
      ),
      /* @__PURE__ */ dt.jsx(
        "button",
        {
          className: "bg-white hover:bg-gray-100 text-blue-400 font-bold py-2 text-sm px-4 rounded mb-8 transition duration-300 ease-in-out transform hover:scale-105",
          onClick: k,
          children: "Any Questions?"
        }
      )
    ] }),
    c && v && /* @__PURE__ */ dt.jsx(
      rN,
      {
        isOpen: c,
        onClose: b,
        threadId: v,
        assistantId: m || ""
      }
    )
  ] });
};
function AM() {
  return /* @__PURE__ */ dt.jsx("div", { className: "h-screen flex flex-col justify-center items-end mr-2 bg-transparent", children: /* @__PURE__ */ dt.jsx(MM, {}) });
}
NO.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ dt.jsx(WL, { children: /* @__PURE__ */ dt.jsx(AM, {}) })
);
