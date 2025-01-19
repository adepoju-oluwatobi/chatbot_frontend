function Tk(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var oy = { exports: {} }, fv = {}, sy = { exports: {} }, Tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jT;
function wk() {
  if (jT) return Tt;
  jT = 1;
  var v = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), g = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), B = Symbol.iterator;
  function le(M) {
    return M === null || typeof M != "object" ? null : (M = B && M[B] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ne = Object.assign, pe = {};
  function oe(M, X, Ke) {
    this.props = M, this.context = X, this.refs = pe, this.updater = Ke || ue;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(M, X) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, X, "setState");
  }, oe.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function Je() {
  }
  Je.prototype = oe.prototype;
  function Ne(M, X, Ke) {
    this.props = M, this.context = X, this.refs = pe, this.updater = Ke || ue;
  }
  var _e = Ne.prototype = new Je();
  _e.constructor = Ne, ne(_e, oe.prototype), _e.isPureReactComponent = !0;
  var Qe = Array.isArray, ge = Object.prototype.hasOwnProperty, Ze = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $t(M, X, Ke) {
    var qe, ht = {}, ct = null, ot = null;
    if (X != null) for (qe in X.ref !== void 0 && (ot = X.ref), X.key !== void 0 && (ct = "" + X.key), X) ge.call(X, qe) && !Fe.hasOwnProperty(qe) && (ht[qe] = X[qe]);
    var ft = arguments.length - 2;
    if (ft === 1) ht.children = Ke;
    else if (1 < ft) {
      for (var mt = Array(ft), Wt = 0; Wt < ft; Wt++) mt[Wt] = arguments[Wt + 2];
      ht.children = mt;
    }
    if (M && M.defaultProps) for (qe in ft = M.defaultProps, ft) ht[qe] === void 0 && (ht[qe] = ft[qe]);
    return { $$typeof: v, type: M, key: ct, ref: ot, props: ht, _owner: Ze.current };
  }
  function Ot(M, X) {
    return { $$typeof: v, type: M.type, key: X, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function nn(M) {
    return typeof M == "object" && M !== null && M.$$typeof === v;
  }
  function sn(M) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(Ke) {
      return X[Ke];
    });
  }
  var Nt = /\/+/g;
  function Ve(M, X) {
    return typeof M == "object" && M !== null && M.key != null ? sn("" + M.key) : X.toString(36);
  }
  function Bt(M, X, Ke, qe, ht) {
    var ct = typeof M;
    (ct === "undefined" || ct === "boolean") && (M = null);
    var ot = !1;
    if (M === null) ot = !0;
    else switch (ct) {
      case "string":
      case "number":
        ot = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case v:
          case h:
            ot = !0;
        }
    }
    if (ot) return ot = M, ht = ht(ot), M = qe === "" ? "." + Ve(ot, 0) : qe, Qe(ht) ? (Ke = "", M != null && (Ke = M.replace(Nt, "$&/") + "/"), Bt(ht, X, Ke, "", function(Wt) {
      return Wt;
    })) : ht != null && (nn(ht) && (ht = Ot(ht, Ke + (!ht.key || ot && ot.key === ht.key ? "" : ("" + ht.key).replace(Nt, "$&/") + "/") + M)), X.push(ht)), 1;
    if (ot = 0, qe = qe === "" ? "." : qe + ":", Qe(M)) for (var ft = 0; ft < M.length; ft++) {
      ct = M[ft];
      var mt = qe + Ve(ct, ft);
      ot += Bt(ct, X, Ke, mt, ht);
    }
    else if (mt = le(M), typeof mt == "function") for (M = mt.call(M), ft = 0; !(ct = M.next()).done; ) ct = ct.value, mt = qe + Ve(ct, ft++), ot += Bt(ct, X, Ke, mt, ht);
    else if (ct === "object") throw X = String(M), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return ot;
  }
  function Lt(M, X, Ke) {
    if (M == null) return M;
    var qe = [], ht = 0;
    return Bt(M, qe, "", "", function(ct) {
      return X.call(Ke, ct, ht++);
    }), qe;
  }
  function At(M) {
    if (M._status === -1) {
      var X = M._result;
      X = X(), X.then(function(Ke) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Ke);
      }, function(Ke) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Ke);
      }), M._status === -1 && (M._status = 0, M._result = X);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var Me = { current: null }, fe = { transition: null }, ze = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: fe, ReactCurrentOwner: Ze };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Tt.Children = { map: Lt, forEach: function(M, X, Ke) {
    Lt(M, function() {
      X.apply(this, arguments);
    }, Ke);
  }, count: function(M) {
    var X = 0;
    return Lt(M, function() {
      X++;
    }), X;
  }, toArray: function(M) {
    return Lt(M, function(X) {
      return X;
    }) || [];
  }, only: function(M) {
    if (!nn(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, Tt.Component = oe, Tt.Fragment = y, Tt.Profiler = w, Tt.PureComponent = Ne, Tt.StrictMode = C, Tt.Suspense = q, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ze, Tt.act = me, Tt.cloneElement = function(M, X, Ke) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var qe = ne({}, M.props), ht = M.key, ct = M.ref, ot = M._owner;
    if (X != null) {
      if (X.ref !== void 0 && (ct = X.ref, ot = Ze.current), X.key !== void 0 && (ht = "" + X.key), M.type && M.type.defaultProps) var ft = M.type.defaultProps;
      for (mt in X) ge.call(X, mt) && !Fe.hasOwnProperty(mt) && (qe[mt] = X[mt] === void 0 && ft !== void 0 ? ft[mt] : X[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) qe.children = Ke;
    else if (1 < mt) {
      ft = Array(mt);
      for (var Wt = 0; Wt < mt; Wt++) ft[Wt] = arguments[Wt + 2];
      qe.children = ft;
    }
    return { $$typeof: v, type: M.type, key: ht, ref: ct, props: qe, _owner: ot };
  }, Tt.createContext = function(M) {
    return M = { $$typeof: g, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: D, _context: M }, M.Consumer = M;
  }, Tt.createElement = $t, Tt.createFactory = function(M) {
    var X = $t.bind(null, M);
    return X.type = M, X;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(M) {
    return { $$typeof: I, render: M };
  }, Tt.isValidElement = nn, Tt.lazy = function(M) {
    return { $$typeof: K, _payload: { _status: -1, _result: M }, _init: At };
  }, Tt.memo = function(M, X) {
    return { $$typeof: j, type: M, compare: X === void 0 ? null : X };
  }, Tt.startTransition = function(M) {
    var X = fe.transition;
    fe.transition = {};
    try {
      M();
    } finally {
      fe.transition = X;
    }
  }, Tt.unstable_act = me, Tt.useCallback = function(M, X) {
    return Me.current.useCallback(M, X);
  }, Tt.useContext = function(M) {
    return Me.current.useContext(M);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(M) {
    return Me.current.useDeferredValue(M);
  }, Tt.useEffect = function(M, X) {
    return Me.current.useEffect(M, X);
  }, Tt.useId = function() {
    return Me.current.useId();
  }, Tt.useImperativeHandle = function(M, X, Ke) {
    return Me.current.useImperativeHandle(M, X, Ke);
  }, Tt.useInsertionEffect = function(M, X) {
    return Me.current.useInsertionEffect(M, X);
  }, Tt.useLayoutEffect = function(M, X) {
    return Me.current.useLayoutEffect(M, X);
  }, Tt.useMemo = function(M, X) {
    return Me.current.useMemo(M, X);
  }, Tt.useReducer = function(M, X, Ke) {
    return Me.current.useReducer(M, X, Ke);
  }, Tt.useRef = function(M) {
    return Me.current.useRef(M);
  }, Tt.useState = function(M) {
    return Me.current.useState(M);
  }, Tt.useSyncExternalStore = function(M, X, Ke) {
    return Me.current.useSyncExternalStore(M, X, Ke);
  }, Tt.useTransition = function() {
    return Me.current.useTransition();
  }, Tt.version = "18.3.1", Tt;
}
var vv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
vv.exports;
var HT;
function bk() {
  return HT || (HT = 1, function(v, h) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = "18.3.1", C = Symbol.for("react.element"), w = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), j = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), oe = Symbol.iterator, Je = "@@iterator";
      function Ne(S) {
        if (S === null || typeof S != "object")
          return null;
        var x = oe && S[oe] || S[Je];
        return typeof x == "function" ? x : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Qe = {
        transition: null
      }, ge = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, $t = null;
      function Ot(S) {
        $t = S;
      }
      Fe.setExtraStackFrame = function(S) {
        $t = S;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var S = "";
        $t && (S += $t);
        var x = Fe.getCurrentStack;
        return x && (S += x() || ""), S;
      };
      var nn = !1, sn = !1, Nt = !1, Ve = !1, Bt = !1, Lt = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: Qe,
        ReactCurrentOwner: Ze
      };
      Lt.ReactDebugCurrentFrame = Fe, Lt.ReactCurrentActQueue = ge;
      function At(S) {
        {
          for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), Y = 1; Y < x; Y++)
            P[Y - 1] = arguments[Y];
          fe("warn", S, P);
        }
      }
      function Me(S) {
        {
          for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), Y = 1; Y < x; Y++)
            P[Y - 1] = arguments[Y];
          fe("error", S, P);
        }
      }
      function fe(S, x, P) {
        {
          var Y = Lt.ReactDebugCurrentFrame, se = Y.getStackAddendum();
          se !== "" && (x += "%s", P = P.concat([se]));
          var $e = P.map(function(he) {
            return String(he);
          });
          $e.unshift("Warning: " + x), Function.prototype.apply.call(console[S], console, $e);
        }
      }
      var ze = {};
      function me(S, x) {
        {
          var P = S.constructor, Y = P && (P.displayName || P.name) || "ReactClass", se = Y + "." + x;
          if (ze[se])
            return;
          Me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", x, Y), ze[se] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
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
        enqueueForceUpdate: function(S, x, P) {
          me(S, "forceUpdate");
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
        enqueueReplaceState: function(S, x, P, Y) {
          me(S, "replaceState");
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
        enqueueSetState: function(S, x, P, Y) {
          me(S, "setState");
        }
      }, X = Object.assign, Ke = {};
      Object.freeze(Ke);
      function qe(S, x, P) {
        this.props = S, this.context = x, this.refs = Ke, this.updater = P || M;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(S, x) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, x, "setState");
      }, qe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ct = function(S, x) {
          Object.defineProperty(qe.prototype, S, {
            get: function() {
              At("%s(...) is deprecated in plain JavaScript React classes. %s", x[0], x[1]);
            }
          });
        };
        for (var ot in ht)
          ht.hasOwnProperty(ot) && ct(ot, ht[ot]);
      }
      function ft() {
      }
      ft.prototype = qe.prototype;
      function mt(S, x, P) {
        this.props = S, this.context = x, this.refs = Ke, this.updater = P || M;
      }
      var Wt = mt.prototype = new ft();
      Wt.constructor = mt, X(Wt, qe.prototype), Wt.isPureReactComponent = !0;
      function Ln() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var xr = Array.isArray;
      function Rn(S) {
        return xr(S);
      }
      function ar(S) {
        {
          var x = typeof Symbol == "function" && Symbol.toStringTag, P = x && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return P;
        }
      }
      function $n(S) {
        try {
          return In(S), !1;
        } catch {
          return !0;
        }
      }
      function In(S) {
        return "" + S;
      }
      function Yr(S) {
        if ($n(S))
          return Me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(S)), In(S);
      }
      function hi(S, x, P) {
        var Y = S.displayName;
        if (Y)
          return Y;
        var se = x.displayName || x.name || "";
        return se !== "" ? P + "(" + se + ")" : P;
      }
      function ca(S) {
        return S.displayName || "Context";
      }
      function Jn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case D:
            return "Fragment";
          case w:
            return "Portal";
          case I:
            return "Profiler";
          case g:
            return "StrictMode";
          case B:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case j:
              var x = S;
              return ca(x) + ".Consumer";
            case q:
              var P = S;
              return ca(P._context) + ".Provider";
            case K:
              return hi(S, S.render, "ForwardRef");
            case ue:
              var Y = S.displayName || null;
              return Y !== null ? Y : Jn(S.type) || "Memo";
            case ne: {
              var se = S, $e = se._payload, he = se._init;
              try {
                return Jn(he($e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, Yn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, Qa, Mn;
      Mn = {};
      function Cr(S) {
        if (Tn.call(S, "ref")) {
          var x = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function fa(S) {
        if (Tn.call(S, "key")) {
          var x = Object.getOwnPropertyDescriptor(S, "key").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ga(S, x) {
        var P = function() {
          Er || (Er = !0, Me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        P.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: P,
          configurable: !0
        });
      }
      function mi(S, x) {
        var P = function() {
          Qa || (Qa = !0, Me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        P.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: P,
          configurable: !0
        });
      }
      function de(S) {
        if (typeof S.ref == "string" && Ze.current && S.__self && Ze.current.stateNode !== S.__self) {
          var x = Jn(Ze.current.type);
          Mn[x] || (Me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x, S.ref), Mn[x] = !0);
        }
      }
      var Ae = function(S, x, P, Y, se, $e, he) {
        var We = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: C,
          // Built-in properties that belong on the element
          type: S,
          key: x,
          ref: P,
          props: he,
          // Record the component responsible for creating this element.
          _owner: $e
        };
        return We._store = {}, Object.defineProperty(We._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(We, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Y
        }), Object.defineProperty(We, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: se
        }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
      };
      function dt(S, x, P) {
        var Y, se = {}, $e = null, he = null, We = null, Ct = null;
        if (x != null) {
          Cr(x) && (he = x.ref, de(x)), fa(x) && (Yr(x.key), $e = "" + x.key), We = x.__self === void 0 ? null : x.__self, Ct = x.__source === void 0 ? null : x.__source;
          for (Y in x)
            Tn.call(x, Y) && !Yn.hasOwnProperty(Y) && (se[Y] = x[Y]);
        }
        var kt = arguments.length - 2;
        if (kt === 1)
          se.children = P;
        else if (kt > 1) {
          for (var un = Array(kt), Kt = 0; Kt < kt; Kt++)
            un[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(un), se.children = un;
        }
        if (S && S.defaultProps) {
          var pt = S.defaultProps;
          for (Y in pt)
            se[Y] === void 0 && (se[Y] = pt[Y]);
        }
        if ($e || he) {
          var Xt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          $e && Ga(se, Xt), he && mi(se, Xt);
        }
        return Ae(S, $e, he, We, Ct, Ze.current, se);
      }
      function Vt(S, x) {
        var P = Ae(S.type, x, S.ref, S._self, S._source, S._owner, S.props);
        return P;
      }
      function rn(S, x, P) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var Y, se = X({}, S.props), $e = S.key, he = S.ref, We = S._self, Ct = S._source, kt = S._owner;
        if (x != null) {
          Cr(x) && (he = x.ref, kt = Ze.current), fa(x) && (Yr(x.key), $e = "" + x.key);
          var un;
          S.type && S.type.defaultProps && (un = S.type.defaultProps);
          for (Y in x)
            Tn.call(x, Y) && !Yn.hasOwnProperty(Y) && (x[Y] === void 0 && un !== void 0 ? se[Y] = un[Y] : se[Y] = x[Y]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          se.children = P;
        else if (Kt > 1) {
          for (var pt = Array(Kt), Xt = 0; Xt < Kt; Xt++)
            pt[Xt] = arguments[Xt + 2];
          se.children = pt;
        }
        return Ae(S.type, $e, he, We, Ct, kt, se);
      }
      function mn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === C;
      }
      var cn = ".", Zn = ":";
      function an(S) {
        var x = /[=:]/g, P = {
          "=": "=0",
          ":": "=2"
        }, Y = S.replace(x, function(se) {
          return P[se];
        });
        return "$" + Y;
      }
      var qt = !1, Qt = /\/+/g;
      function da(S) {
        return S.replace(Qt, "$&/");
      }
      function Rr(S, x) {
        return typeof S == "object" && S !== null && S.key != null ? (Yr(S.key), an("" + S.key)) : x.toString(36);
      }
      function xa(S, x, P, Y, se) {
        var $e = typeof S;
        ($e === "undefined" || $e === "boolean") && (S = null);
        var he = !1;
        if (S === null)
          he = !0;
        else
          switch ($e) {
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case C:
                case w:
                  he = !0;
              }
          }
        if (he) {
          var We = S, Ct = se(We), kt = Y === "" ? cn + Rr(We, 0) : Y;
          if (Rn(Ct)) {
            var un = "";
            kt != null && (un = da(kt) + "/"), xa(Ct, x, un, "", function(sd) {
              return sd;
            });
          } else Ct != null && (mn(Ct) && (Ct.key && (!We || We.key !== Ct.key) && Yr(Ct.key), Ct = Vt(
            Ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            P + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ct.key && (!We || We.key !== Ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + Ct.key) + "/"
            ) : "") + kt
          )), x.push(Ct));
          return 1;
        }
        var Kt, pt, Xt = 0, yn = Y === "" ? cn : Y + Zn;
        if (Rn(S))
          for (var Dl = 0; Dl < S.length; Dl++)
            Kt = S[Dl], pt = yn + Rr(Kt, Dl), Xt += xa(Kt, x, P, pt, se);
        else {
          var ns = Ne(S);
          if (typeof ns == "function") {
            var qi = S;
            ns === qi.entries && (qt || At("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var rs = ns.call(qi), hu, od = 0; !(hu = rs.next()).done; )
              Kt = hu.value, pt = yn + Rr(Kt, od++), Xt += xa(Kt, x, P, pt, se);
          } else if ($e === "object") {
            var gc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Xt;
      }
      function Ii(S, x, P) {
        if (S == null)
          return S;
        var Y = [], se = 0;
        return xa(S, Y, "", "", function($e) {
          return x.call(P, $e, se++);
        }), Y;
      }
      function lu(S) {
        var x = 0;
        return Ii(S, function() {
          x++;
        }), x;
      }
      function uu(S, x, P) {
        Ii(S, function() {
          x.apply(this, arguments);
        }, P);
      }
      function Sl(S) {
        return Ii(S, function(x) {
          return x;
        }) || [];
      }
      function El(S) {
        if (!mn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ou(S) {
        var x = {
          $$typeof: j,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
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
        x.Provider = {
          $$typeof: q,
          _context: x
        };
        var P = !1, Y = !1, se = !1;
        {
          var $e = {
            $$typeof: j,
            _context: x
          };
          Object.defineProperties($e, {
            Provider: {
              get: function() {
                return Y || (Y = !0, Me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), x.Provider;
              },
              set: function(he) {
                x.Provider = he;
              }
            },
            _currentValue: {
              get: function() {
                return x._currentValue;
              },
              set: function(he) {
                x._currentValue = he;
              }
            },
            _currentValue2: {
              get: function() {
                return x._currentValue2;
              },
              set: function(he) {
                x._currentValue2 = he;
              }
            },
            _threadCount: {
              get: function() {
                return x._threadCount;
              },
              set: function(he) {
                x._threadCount = he;
              }
            },
            Consumer: {
              get: function() {
                return P || (P = !0, Me("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), x.Consumer;
              }
            },
            displayName: {
              get: function() {
                return x.displayName;
              },
              set: function(he) {
                se || (At("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), se = !0);
              }
            }
          }), x.Consumer = $e;
        }
        return x._currentRenderer = null, x._currentRenderer2 = null, x;
      }
      var _r = -1, Dr = 0, ir = 1, yi = 2;
      function Ka(S) {
        if (S._status === _r) {
          var x = S._result, P = x();
          if (P.then(function($e) {
            if (S._status === Dr || S._status === _r) {
              var he = S;
              he._status = ir, he._result = $e;
            }
          }, function($e) {
            if (S._status === Dr || S._status === _r) {
              var he = S;
              he._status = yi, he._result = $e;
            }
          }), S._status === _r) {
            var Y = S;
            Y._status = Dr, Y._result = P;
          }
        }
        if (S._status === ir) {
          var se = S._result;
          return se === void 0 && Me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, se), "default" in se || Me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, se), se.default;
        } else
          throw S._result;
      }
      function gi(S) {
        var x = {
          // We use these fields to store the result.
          _status: _r,
          _result: S
        }, P = {
          $$typeof: ne,
          _payload: x,
          _init: Ka
        };
        {
          var Y, se;
          Object.defineProperties(P, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Y;
              },
              set: function($e) {
                Me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = $e, Object.defineProperty(P, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return se;
              },
              set: function($e) {
                Me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), se = $e, Object.defineProperty(P, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return P;
      }
      function Si(S) {
        S != null && S.$$typeof === ue ? Me("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Me("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Me("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Me("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var x = {
          $$typeof: K,
          render: S
        };
        {
          var P;
          Object.defineProperty(x, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(Y) {
              P = Y, !S.name && !S.displayName && (S.displayName = Y);
            }
          });
        }
        return x;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function Z(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === D || S === I || Bt || S === g || S === B || S === le || Ve || S === pe || nn || sn || Nt || typeof S == "object" && S !== null && (S.$$typeof === ne || S.$$typeof === ue || S.$$typeof === q || S.$$typeof === j || S.$$typeof === K || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === _ || S.getModuleId !== void 0));
      }
      function ye(S, x) {
        Z(S) || Me("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var P = {
          $$typeof: ue,
          type: S,
          compare: x === void 0 ? null : x
        };
        {
          var Y;
          Object.defineProperty(P, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(se) {
              Y = se, !S.name && !S.displayName && (S.displayName = se);
            }
          });
        }
        return P;
      }
      function De() {
        var S = _e.current;
        return S === null && Me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function it(S) {
        var x = De();
        if (S._context !== void 0) {
          var P = S._context;
          P.Consumer === S ? Me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : P.Provider === S && Me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return x.useContext(S);
      }
      function nt(S) {
        var x = De();
        return x.useState(S);
      }
      function Et(S, x, P) {
        var Y = De();
        return Y.useReducer(S, x, P);
      }
      function yt(S) {
        var x = De();
        return x.useRef(S);
      }
      function wn(S, x) {
        var P = De();
        return P.useEffect(S, x);
      }
      function ln(S, x) {
        var P = De();
        return P.useInsertionEffect(S, x);
      }
      function fn(S, x) {
        var P = De();
        return P.useLayoutEffect(S, x);
      }
      function lr(S, x) {
        var P = De();
        return P.useCallback(S, x);
      }
      function Xa(S, x) {
        var P = De();
        return P.useMemo(S, x);
      }
      function Ja(S, x, P) {
        var Y = De();
        return Y.useImperativeHandle(S, x, P);
      }
      function lt(S, x) {
        {
          var P = De();
          return P.useDebugValue(S, x);
        }
      }
      function st() {
        var S = De();
        return S.useTransition();
      }
      function Za(S) {
        var x = De();
        return x.useDeferredValue(S);
      }
      function su() {
        var S = De();
        return S.useId();
      }
      function cu(S, x, P) {
        var Y = De();
        return Y.useSyncExternalStore(S, x, P);
      }
      var Cl = 0, eo, Rl, Wr, Jo, kr, mc, yc;
      function to() {
      }
      to.__reactDisabledLog = !0;
      function Tl() {
        {
          if (Cl === 0) {
            eo = console.log, Rl = console.info, Wr = console.warn, Jo = console.error, kr = console.group, mc = console.groupCollapsed, yc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: to,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          Cl++;
        }
      }
      function pa() {
        {
          if (Cl--, Cl === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: X({}, S, {
                value: eo
              }),
              info: X({}, S, {
                value: Rl
              }),
              warn: X({}, S, {
                value: Wr
              }),
              error: X({}, S, {
                value: Jo
              }),
              group: X({}, S, {
                value: kr
              }),
              groupCollapsed: X({}, S, {
                value: mc
              }),
              groupEnd: X({}, S, {
                value: yc
              })
            });
          }
          Cl < 0 && Me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = Lt.ReactCurrentDispatcher, ti;
      function no(S, x, P) {
        {
          if (ti === void 0)
            try {
              throw Error();
            } catch (se) {
              var Y = se.stack.trim().match(/\n( *(at )?)/);
              ti = Y && Y[1] || "";
            }
          return `
` + ti + S;
        }
      }
      var fu = !1, wl;
      {
        var ro = typeof WeakMap == "function" ? WeakMap : Map;
        wl = new ro();
      }
      function ao(S, x) {
        if (!S || fu)
          return "";
        {
          var P = wl.get(S);
          if (P !== void 0)
            return P;
        }
        var Y;
        fu = !0;
        var se = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $e;
        $e = ei.current, ei.current = null, Tl();
        try {
          if (x) {
            var he = function() {
              throw Error();
            };
            if (Object.defineProperty(he.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(he, []);
              } catch (yn) {
                Y = yn;
              }
              Reflect.construct(S, [], he);
            } else {
              try {
                he.call();
              } catch (yn) {
                Y = yn;
              }
              S.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (yn) {
              Y = yn;
            }
            S();
          }
        } catch (yn) {
          if (yn && Y && typeof yn.stack == "string") {
            for (var We = yn.stack.split(`
`), Ct = Y.stack.split(`
`), kt = We.length - 1, un = Ct.length - 1; kt >= 1 && un >= 0 && We[kt] !== Ct[un]; )
              un--;
            for (; kt >= 1 && un >= 0; kt--, un--)
              if (We[kt] !== Ct[un]) {
                if (kt !== 1 || un !== 1)
                  do
                    if (kt--, un--, un < 0 || We[kt] !== Ct[un]) {
                      var Kt = `
` + We[kt].replace(" at new ", " at ");
                      return S.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", S.displayName)), typeof S == "function" && wl.set(S, Kt), Kt;
                    }
                  while (kt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          fu = !1, ei.current = $e, pa(), Error.prepareStackTrace = se;
        }
        var pt = S ? S.displayName || S.name : "", Xt = pt ? no(pt) : "";
        return typeof S == "function" && wl.set(S, Xt), Xt;
      }
      function Yi(S, x, P) {
        return ao(S, !1);
      }
      function ld(S) {
        var x = S.prototype;
        return !!(x && x.isReactComponent);
      }
      function Wi(S, x, P) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return ao(S, ld(S));
        if (typeof S == "string")
          return no(S);
        switch (S) {
          case B:
            return no("Suspense");
          case le:
            return no("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case K:
              return Yi(S.render);
            case ue:
              return Wi(S.type, x, P);
            case ne: {
              var Y = S, se = Y._payload, $e = Y._init;
              try {
                return Wi($e(se), x, P);
              } catch {
              }
            }
          }
        return "";
      }
      var Ut = {}, io = Lt.ReactDebugCurrentFrame;
      function Dt(S) {
        if (S) {
          var x = S._owner, P = Wi(S.type, S._source, x ? x.type : null);
          io.setExtraStackFrame(P);
        } else
          io.setExtraStackFrame(null);
      }
      function Zo(S, x, P, Y, se) {
        {
          var $e = Function.call.bind(Tn);
          for (var he in S)
            if ($e(S, he)) {
              var We = void 0;
              try {
                if (typeof S[he] != "function") {
                  var Ct = Error((Y || "React class") + ": " + P + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ct.name = "Invariant Violation", Ct;
                }
                We = S[he](x, he, Y, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (kt) {
                We = kt;
              }
              We && !(We instanceof Error) && (Dt(se), Me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", P, he, typeof We), Dt(null)), We instanceof Error && !(We.message in Ut) && (Ut[We.message] = !0, Dt(se), Me("Failed %s type: %s", P, We.message), Dt(null));
            }
        }
      }
      function Ei(S) {
        if (S) {
          var x = S._owner, P = Wi(S.type, S._source, x ? x.type : null);
          Ot(P);
        } else
          Ot(null);
      }
      var et;
      et = !1;
      function lo() {
        if (Ze.current) {
          var S = Jn(Ze.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function ur(S) {
        if (S !== void 0) {
          var x = S.fileName.replace(/^.*[\\\/]/, ""), P = S.lineNumber;
          return `

Check your code at ` + x + ":" + P + ".";
        }
        return "";
      }
      function Ci(S) {
        return S != null ? ur(S.__source) : "";
      }
      var Or = {};
      function Ri(S) {
        var x = lo();
        if (!x) {
          var P = typeof S == "string" ? S : S.displayName || S.name;
          P && (x = `

Check the top-level render call using <` + P + ">.");
        }
        return x;
      }
      function dn(S, x) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var P = Ri(x);
          if (!Or[P]) {
            Or[P] = !0;
            var Y = "";
            S && S._owner && S._owner !== Ze.current && (Y = " It was passed a child from " + Jn(S._owner.type) + "."), Ei(S), Me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, Y), Ei(null);
          }
        }
      }
      function Gt(S, x) {
        if (typeof S == "object") {
          if (Rn(S))
            for (var P = 0; P < S.length; P++) {
              var Y = S[P];
              mn(Y) && dn(Y, x);
            }
          else if (mn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var se = Ne(S);
            if (typeof se == "function" && se !== S.entries)
              for (var $e = se.call(S), he; !(he = $e.next()).done; )
                mn(he.value) && dn(he.value, x);
          }
        }
      }
      function bl(S) {
        {
          var x = S.type;
          if (x == null || typeof x == "string")
            return;
          var P;
          if (typeof x == "function")
            P = x.propTypes;
          else if (typeof x == "object" && (x.$$typeof === K || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          x.$$typeof === ue))
            P = x.propTypes;
          else
            return;
          if (P) {
            var Y = Jn(x);
            Zo(P, S.props, "prop", Y, S);
          } else if (x.PropTypes !== void 0 && !et) {
            et = !0;
            var se = Jn(x);
            Me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
          }
          typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && Me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wn(S) {
        {
          for (var x = Object.keys(S.props), P = 0; P < x.length; P++) {
            var Y = x[P];
            if (Y !== "children" && Y !== "key") {
              Ei(S), Me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ei(null);
              break;
            }
          }
          S.ref !== null && (Ei(S), Me("Invalid attribute `ref` supplied to `React.Fragment`."), Ei(null));
        }
      }
      function Nr(S, x, P) {
        var Y = Z(S);
        if (!Y) {
          var se = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Ci(x);
          $e ? se += $e : se += lo();
          var he;
          S === null ? he = "null" : Rn(S) ? he = "array" : S !== void 0 && S.$$typeof === C ? (he = "<" + (Jn(S.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : he = typeof S, Me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, se);
        }
        var We = dt.apply(this, arguments);
        if (We == null)
          return We;
        if (Y)
          for (var Ct = 2; Ct < arguments.length; Ct++)
            Gt(arguments[Ct], S);
        return S === D ? Wn(We) : bl(We), We;
      }
      var _a = !1;
      function du(S) {
        var x = Nr.bind(null, S);
        return x.type = S, _a || (_a = !0, At("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(x, "type", {
          enumerable: !1,
          get: function() {
            return At("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), x;
      }
      function es(S, x, P) {
        for (var Y = rn.apply(this, arguments), se = 2; se < arguments.length; se++)
          Gt(arguments[se], Y.type);
        return bl(Y), Y;
      }
      function ts(S, x) {
        var P = Qe.transition;
        Qe.transition = {};
        var Y = Qe.transition;
        Qe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Qe.transition = P, P === null && Y._updatedFibers) {
            var se = Y._updatedFibers.size;
            se > 10 && At("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
          }
        }
      }
      var xl = !1, pu = null;
      function ud(S) {
        if (pu === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7), P = v && v[x];
            pu = P.call(v, "timers").setImmediate;
          } catch {
            pu = function(se) {
              xl === !1 && (xl = !0, typeof MessageChannel > "u" && Me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var $e = new MessageChannel();
              $e.port1.onmessage = se, $e.port2.postMessage(void 0);
            };
          }
        return pu(S);
      }
      var Da = 0, ni = !1;
      function Ti(S) {
        {
          var x = Da;
          Da++, ge.current === null && (ge.current = []);
          var P = ge.isBatchingLegacy, Y;
          try {
            if (ge.isBatchingLegacy = !0, Y = S(), !P && ge.didScheduleLegacyUpdate) {
              var se = ge.current;
              se !== null && (ge.didScheduleLegacyUpdate = !1, _l(se));
            }
          } catch (pt) {
            throw ka(x), pt;
          } finally {
            ge.isBatchingLegacy = P;
          }
          if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
            var $e = Y, he = !1, We = {
              then: function(pt, Xt) {
                he = !0, $e.then(function(yn) {
                  ka(x), Da === 0 ? uo(yn, pt, Xt) : pt(yn);
                }, function(yn) {
                  ka(x), Xt(yn);
                });
              }
            };
            return !ni && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (ni = !0, Me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), We;
          } else {
            var Ct = Y;
            if (ka(x), Da === 0) {
              var kt = ge.current;
              kt !== null && (_l(kt), ge.current = null);
              var un = {
                then: function(pt, Xt) {
                  ge.current === null ? (ge.current = [], uo(Ct, pt, Xt)) : pt(Ct);
                }
              };
              return un;
            } else {
              var Kt = {
                then: function(pt, Xt) {
                  pt(Ct);
                }
              };
              return Kt;
            }
          }
        }
      }
      function ka(S) {
        S !== Da - 1 && Me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = S;
      }
      function uo(S, x, P) {
        {
          var Y = ge.current;
          if (Y !== null)
            try {
              _l(Y), ud(function() {
                Y.length === 0 ? (ge.current = null, x(S)) : uo(S, x, P);
              });
            } catch (se) {
              P(se);
            }
          else
            x(S);
        }
      }
      var oo = !1;
      function _l(S) {
        if (!oo) {
          oo = !0;
          var x = 0;
          try {
            for (; x < S.length; x++) {
              var P = S[x];
              do
                P = P(!0);
              while (P !== null);
            }
            S.length = 0;
          } catch (Y) {
            throw S = S.slice(x + 1), Y;
          } finally {
            oo = !1;
          }
        }
      }
      var vu = Nr, so = es, co = du, ri = {
        map: Ii,
        forEach: uu,
        count: lu,
        toArray: Sl,
        only: El
      };
      h.Children = ri, h.Component = qe, h.Fragment = D, h.Profiler = I, h.PureComponent = mt, h.StrictMode = g, h.Suspense = B, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, h.act = Ti, h.cloneElement = so, h.createContext = ou, h.createElement = vu, h.createFactory = co, h.createRef = Ln, h.forwardRef = Si, h.isValidElement = mn, h.lazy = gi, h.memo = ye, h.startTransition = ts, h.unstable_act = Ti, h.useCallback = lr, h.useContext = it, h.useDebugValue = lt, h.useDeferredValue = Za, h.useEffect = wn, h.useId = su, h.useImperativeHandle = Ja, h.useInsertionEffect = ln, h.useLayoutEffect = fn, h.useMemo = Xa, h.useReducer = Et, h.useRef = yt, h.useState = nt, h.useSyncExternalStore = cu, h.useTransition = st, h.version = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vv, vv.exports)), vv.exports;
}
var PT;
function mv() {
  return PT || (PT = 1, process.env.NODE_ENV === "production" ? sy.exports = wk() : sy.exports = bk()), sy.exports;
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
var BT;
function xk() {
  if (BT) return fv;
  BT = 1;
  var v = mv(), h = Symbol.for("react.element"), y = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(I, q, j) {
    var K, B = {}, le = null, ue = null;
    j !== void 0 && (le = "" + j), q.key !== void 0 && (le = "" + q.key), q.ref !== void 0 && (ue = q.ref);
    for (K in q) C.call(q, K) && !D.hasOwnProperty(K) && (B[K] = q[K]);
    if (I && I.defaultProps) for (K in q = I.defaultProps, q) B[K] === void 0 && (B[K] = q[K]);
    return { $$typeof: h, type: I, key: le, ref: ue, props: B, _owner: w.current };
  }
  return fv.Fragment = y, fv.jsx = g, fv.jsxs = g, fv;
}
var dv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VT;
function _k() {
  return VT || (VT = 1, process.env.NODE_ENV !== "production" && function() {
    var v = mv(), h = Symbol.for("react.element"), y = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), I = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), ne = Symbol.iterator, pe = "@@iterator";
    function oe(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var Z = ne && _[ne] || _[pe];
      return typeof Z == "function" ? Z : null;
    }
    var Je = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ne(_) {
      {
        for (var Z = arguments.length, ye = new Array(Z > 1 ? Z - 1 : 0), De = 1; De < Z; De++)
          ye[De - 1] = arguments[De];
        _e("error", _, ye);
      }
    }
    function _e(_, Z, ye) {
      {
        var De = Je.ReactDebugCurrentFrame, it = De.getStackAddendum();
        it !== "" && (Z += "%s", ye = ye.concat([it]));
        var nt = ye.map(function(Et) {
          return String(Et);
        });
        nt.unshift("Warning: " + Z), Function.prototype.apply.call(console[_], console, nt);
      }
    }
    var Qe = !1, ge = !1, Ze = !1, Fe = !1, $t = !1, Ot;
    Ot = Symbol.for("react.module.reference");
    function nn(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === C || _ === D || $t || _ === w || _ === j || _ === K || Fe || _ === ue || Qe || ge || Ze || typeof _ == "object" && _ !== null && (_.$$typeof === le || _.$$typeof === B || _.$$typeof === g || _.$$typeof === I || _.$$typeof === q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === Ot || _.getModuleId !== void 0));
    }
    function sn(_, Z, ye) {
      var De = _.displayName;
      if (De)
        return De;
      var it = Z.displayName || Z.name || "";
      return it !== "" ? ye + "(" + it + ")" : ye;
    }
    function Nt(_) {
      return _.displayName || "Context";
    }
    function Ve(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && Ne("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case C:
          return "Fragment";
        case y:
          return "Portal";
        case D:
          return "Profiler";
        case w:
          return "StrictMode";
        case j:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case I:
            var Z = _;
            return Nt(Z) + ".Consumer";
          case g:
            var ye = _;
            return Nt(ye._context) + ".Provider";
          case q:
            return sn(_, _.render, "ForwardRef");
          case B:
            var De = _.displayName || null;
            return De !== null ? De : Ve(_.type) || "Memo";
          case le: {
            var it = _, nt = it._payload, Et = it._init;
            try {
              return Ve(Et(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Bt = Object.assign, Lt = 0, At, Me, fe, ze, me, M, X;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function qe() {
      {
        if (Lt === 0) {
          At = console.log, Me = console.info, fe = console.warn, ze = console.error, me = console.group, M = console.groupCollapsed, X = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        Lt++;
      }
    }
    function ht() {
      {
        if (Lt--, Lt === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Bt({}, _, {
              value: At
            }),
            info: Bt({}, _, {
              value: Me
            }),
            warn: Bt({}, _, {
              value: fe
            }),
            error: Bt({}, _, {
              value: ze
            }),
            group: Bt({}, _, {
              value: me
            }),
            groupCollapsed: Bt({}, _, {
              value: M
            }),
            groupEnd: Bt({}, _, {
              value: X
            })
          });
        }
        Lt < 0 && Ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = Je.ReactCurrentDispatcher, ot;
    function ft(_, Z, ye) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (it) {
            var De = it.stack.trim().match(/\n( *(at )?)/);
            ot = De && De[1] || "";
          }
        return `
` + ot + _;
      }
    }
    var mt = !1, Wt;
    {
      var Ln = typeof WeakMap == "function" ? WeakMap : Map;
      Wt = new Ln();
    }
    function xr(_, Z) {
      if (!_ || mt)
        return "";
      {
        var ye = Wt.get(_);
        if (ye !== void 0)
          return ye;
      }
      var De;
      mt = !0;
      var it = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = ct.current, ct.current = null, qe();
      try {
        if (Z) {
          var Et = function() {
            throw Error();
          };
          if (Object.defineProperty(Et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Et, []);
            } catch (lt) {
              De = lt;
            }
            Reflect.construct(_, [], Et);
          } else {
            try {
              Et.call();
            } catch (lt) {
              De = lt;
            }
            _.call(Et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lt) {
            De = lt;
          }
          _();
        }
      } catch (lt) {
        if (lt && De && typeof lt.stack == "string") {
          for (var yt = lt.stack.split(`
`), wn = De.stack.split(`
`), ln = yt.length - 1, fn = wn.length - 1; ln >= 1 && fn >= 0 && yt[ln] !== wn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (yt[ln] !== wn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || yt[ln] !== wn[fn]) {
                    var lr = `
` + yt[ln].replace(" at new ", " at ");
                    return _.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", _.displayName)), typeof _ == "function" && Wt.set(_, lr), lr;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        mt = !1, ct.current = nt, ht(), Error.prepareStackTrace = it;
      }
      var Xa = _ ? _.displayName || _.name : "", Ja = Xa ? ft(Xa) : "";
      return typeof _ == "function" && Wt.set(_, Ja), Ja;
    }
    function Rn(_, Z, ye) {
      return xr(_, !1);
    }
    function ar(_) {
      var Z = _.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function $n(_, Z, ye) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return xr(_, ar(_));
      if (typeof _ == "string")
        return ft(_);
      switch (_) {
        case j:
          return ft("Suspense");
        case K:
          return ft("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case q:
            return Rn(_.render);
          case B:
            return $n(_.type, Z, ye);
          case le: {
            var De = _, it = De._payload, nt = De._init;
            try {
              return $n(nt(it), Z, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var In = Object.prototype.hasOwnProperty, Yr = {}, hi = Je.ReactDebugCurrentFrame;
    function ca(_) {
      if (_) {
        var Z = _._owner, ye = $n(_.type, _._source, Z ? Z.type : null);
        hi.setExtraStackFrame(ye);
      } else
        hi.setExtraStackFrame(null);
    }
    function Jn(_, Z, ye, De, it) {
      {
        var nt = Function.call.bind(In);
        for (var Et in _)
          if (nt(_, Et)) {
            var yt = void 0;
            try {
              if (typeof _[Et] != "function") {
                var wn = Error((De || "React class") + ": " + ye + " type `" + Et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              yt = _[Et](Z, Et, De, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              yt = ln;
            }
            yt && !(yt instanceof Error) && (ca(it), Ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", De || "React class", ye, Et, typeof yt), ca(null)), yt instanceof Error && !(yt.message in Yr) && (Yr[yt.message] = !0, ca(it), Ne("Failed %s type: %s", ye, yt.message), ca(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Yn(_) {
      return Tn(_);
    }
    function Er(_) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, ye = Z && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ye;
      }
    }
    function Qa(_) {
      try {
        return Mn(_), !1;
      } catch {
        return !0;
      }
    }
    function Mn(_) {
      return "" + _;
    }
    function Cr(_) {
      if (Qa(_))
        return Ne("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(_)), Mn(_);
    }
    var fa = Je.ReactCurrentOwner, Ga = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mi, de;
    function Ae(_) {
      if (In.call(_, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function dt(_) {
      if (In.call(_, "key")) {
        var Z = Object.getOwnPropertyDescriptor(_, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Vt(_, Z) {
      typeof _.ref == "string" && fa.current;
    }
    function rn(_, Z) {
      {
        var ye = function() {
          mi || (mi = !0, Ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ye.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function mn(_, Z) {
      {
        var ye = function() {
          de || (de = !0, Ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ye.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var cn = function(_, Z, ye, De, it, nt, Et) {
      var yt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: _,
        key: Z,
        ref: ye,
        props: Et,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return yt._store = {}, Object.defineProperty(yt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(yt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.defineProperty(yt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: it
      }), Object.freeze && (Object.freeze(yt.props), Object.freeze(yt)), yt;
    };
    function Zn(_, Z, ye, De, it) {
      {
        var nt, Et = {}, yt = null, wn = null;
        ye !== void 0 && (Cr(ye), yt = "" + ye), dt(Z) && (Cr(Z.key), yt = "" + Z.key), Ae(Z) && (wn = Z.ref, Vt(Z, it));
        for (nt in Z)
          In.call(Z, nt) && !Ga.hasOwnProperty(nt) && (Et[nt] = Z[nt]);
        if (_ && _.defaultProps) {
          var ln = _.defaultProps;
          for (nt in ln)
            Et[nt] === void 0 && (Et[nt] = ln[nt]);
        }
        if (yt || wn) {
          var fn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          yt && rn(Et, fn), wn && mn(Et, fn);
        }
        return cn(_, yt, wn, it, De, fa.current, Et);
      }
    }
    var an = Je.ReactCurrentOwner, qt = Je.ReactDebugCurrentFrame;
    function Qt(_) {
      if (_) {
        var Z = _._owner, ye = $n(_.type, _._source, Z ? Z.type : null);
        qt.setExtraStackFrame(ye);
      } else
        qt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function Rr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === h;
    }
    function xa() {
      {
        if (an.current) {
          var _ = Ve(an.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Ii(_) {
      return "";
    }
    var lu = {};
    function uu(_) {
      {
        var Z = xa();
        if (!Z) {
          var ye = typeof _ == "string" ? _ : _.displayName || _.name;
          ye && (Z = `

Check the top-level render call using <` + ye + ">.");
        }
        return Z;
      }
    }
    function Sl(_, Z) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ye = uu(Z);
        if (lu[ye])
          return;
        lu[ye] = !0;
        var De = "";
        _ && _._owner && _._owner !== an.current && (De = " It was passed a child from " + Ve(_._owner.type) + "."), Qt(_), Ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, De), Qt(null);
      }
    }
    function El(_, Z) {
      {
        if (typeof _ != "object")
          return;
        if (Yn(_))
          for (var ye = 0; ye < _.length; ye++) {
            var De = _[ye];
            Rr(De) && Sl(De, Z);
          }
        else if (Rr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var it = oe(_);
          if (typeof it == "function" && it !== _.entries)
            for (var nt = it.call(_), Et; !(Et = nt.next()).done; )
              Rr(Et.value) && Sl(Et.value, Z);
        }
      }
    }
    function ou(_) {
      {
        var Z = _.type;
        if (Z == null || typeof Z == "string")
          return;
        var ye;
        if (typeof Z == "function")
          ye = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === B))
          ye = Z.propTypes;
        else
          return;
        if (ye) {
          var De = Ve(Z);
          Jn(ye, _.props, "prop", De, _);
        } else if (Z.PropTypes !== void 0 && !da) {
          da = !0;
          var it = Ve(Z);
          Ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && Ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(_) {
      {
        for (var Z = Object.keys(_.props), ye = 0; ye < Z.length; ye++) {
          var De = Z[ye];
          if (De !== "children" && De !== "key") {
            Qt(_), Ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", De), Qt(null);
            break;
          }
        }
        _.ref !== null && (Qt(_), Ne("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    var Dr = {};
    function ir(_, Z, ye, De, it, nt) {
      {
        var Et = nn(_);
        if (!Et) {
          var yt = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (yt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Ii();
          wn ? yt += wn : yt += xa();
          var ln;
          _ === null ? ln = "null" : Yn(_) ? ln = "array" : _ !== void 0 && _.$$typeof === h ? (ln = "<" + (Ve(_.type) || "Unknown") + " />", yt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof _, Ne("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, yt);
        }
        var fn = Zn(_, Z, ye, it, nt);
        if (fn == null)
          return fn;
        if (Et) {
          var lr = Z.children;
          if (lr !== void 0)
            if (De)
              if (Yn(lr)) {
                for (var Xa = 0; Xa < lr.length; Xa++)
                  El(lr[Xa], _);
                Object.freeze && Object.freeze(lr);
              } else
                Ne("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              El(lr, _);
        }
        if (In.call(Z, "key")) {
          var Ja = Ve(_), lt = Object.keys(Z).filter(function(su) {
            return su !== "key";
          }), st = lt.length > 0 ? "{key: someKey, " + lt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dr[Ja + st]) {
            var Za = lt.length > 0 ? "{" + lt.join(": ..., ") + ": ...}" : "{}";
            Ne(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, Ja, Za, Ja), Dr[Ja + st] = !0;
          }
        }
        return _ === C ? _r(fn) : ou(fn), fn;
      }
    }
    function yi(_, Z, ye) {
      return ir(_, Z, ye, !0);
    }
    function Ka(_, Z, ye) {
      return ir(_, Z, ye, !1);
    }
    var gi = Ka, Si = yi;
    dv.Fragment = C, dv.jsx = gi, dv.jsxs = Si;
  }()), dv;
}
var $T;
function Dk() {
  return $T || ($T = 1, process.env.NODE_ENV === "production" ? oy.exports = xk() : oy.exports = _k()), oy.exports;
}
var vt = Dk(), rd = {}, cy = { exports: {} }, Ya = {}, fy = { exports: {} }, PE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IT;
function kk() {
  return IT || (IT = 1, function(v) {
    function h(fe, ze) {
      var me = fe.length;
      fe.push(ze);
      e: for (; 0 < me; ) {
        var M = me - 1 >>> 1, X = fe[M];
        if (0 < w(X, ze)) fe[M] = ze, fe[me] = X, me = M;
        else break e;
      }
    }
    function y(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function C(fe) {
      if (fe.length === 0) return null;
      var ze = fe[0], me = fe.pop();
      if (me !== ze) {
        fe[0] = me;
        e: for (var M = 0, X = fe.length, Ke = X >>> 1; M < Ke; ) {
          var qe = 2 * (M + 1) - 1, ht = fe[qe], ct = qe + 1, ot = fe[ct];
          if (0 > w(ht, me)) ct < X && 0 > w(ot, ht) ? (fe[M] = ot, fe[ct] = me, M = ct) : (fe[M] = ht, fe[qe] = me, M = qe);
          else if (ct < X && 0 > w(ot, me)) fe[M] = ot, fe[ct] = me, M = ct;
          else break e;
        }
      }
      return ze;
    }
    function w(fe, ze) {
      var me = fe.sortIndex - ze.sortIndex;
      return me !== 0 ? me : fe.id - ze.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      v.unstable_now = function() {
        return D.now();
      };
    } else {
      var g = Date, I = g.now();
      v.unstable_now = function() {
        return g.now() - I;
      };
    }
    var q = [], j = [], K = 1, B = null, le = 3, ue = !1, ne = !1, pe = !1, oe = typeof setTimeout == "function" ? setTimeout : null, Je = typeof clearTimeout == "function" ? clearTimeout : null, Ne = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _e(fe) {
      for (var ze = y(j); ze !== null; ) {
        if (ze.callback === null) C(j);
        else if (ze.startTime <= fe) C(j), ze.sortIndex = ze.expirationTime, h(q, ze);
        else break;
        ze = y(j);
      }
    }
    function Qe(fe) {
      if (pe = !1, _e(fe), !ne) if (y(q) !== null) ne = !0, At(ge);
      else {
        var ze = y(j);
        ze !== null && Me(Qe, ze.startTime - fe);
      }
    }
    function ge(fe, ze) {
      ne = !1, pe && (pe = !1, Je($t), $t = -1), ue = !0;
      var me = le;
      try {
        for (_e(ze), B = y(q); B !== null && (!(B.expirationTime > ze) || fe && !sn()); ) {
          var M = B.callback;
          if (typeof M == "function") {
            B.callback = null, le = B.priorityLevel;
            var X = M(B.expirationTime <= ze);
            ze = v.unstable_now(), typeof X == "function" ? B.callback = X : B === y(q) && C(q), _e(ze);
          } else C(q);
          B = y(q);
        }
        if (B !== null) var Ke = !0;
        else {
          var qe = y(j);
          qe !== null && Me(Qe, qe.startTime - ze), Ke = !1;
        }
        return Ke;
      } finally {
        B = null, le = me, ue = !1;
      }
    }
    var Ze = !1, Fe = null, $t = -1, Ot = 5, nn = -1;
    function sn() {
      return !(v.unstable_now() - nn < Ot);
    }
    function Nt() {
      if (Fe !== null) {
        var fe = v.unstable_now();
        nn = fe;
        var ze = !0;
        try {
          ze = Fe(!0, fe);
        } finally {
          ze ? Ve() : (Ze = !1, Fe = null);
        }
      } else Ze = !1;
    }
    var Ve;
    if (typeof Ne == "function") Ve = function() {
      Ne(Nt);
    };
    else if (typeof MessageChannel < "u") {
      var Bt = new MessageChannel(), Lt = Bt.port2;
      Bt.port1.onmessage = Nt, Ve = function() {
        Lt.postMessage(null);
      };
    } else Ve = function() {
      oe(Nt, 0);
    };
    function At(fe) {
      Fe = fe, Ze || (Ze = !0, Ve());
    }
    function Me(fe, ze) {
      $t = oe(function() {
        fe(v.unstable_now());
      }, ze);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, v.unstable_continueExecution = function() {
      ne || ue || (ne = !0, At(ge));
    }, v.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ot = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return le;
    }, v.unstable_getFirstCallbackNode = function() {
      return y(q);
    }, v.unstable_next = function(fe) {
      switch (le) {
        case 1:
        case 2:
        case 3:
          var ze = 3;
          break;
        default:
          ze = le;
      }
      var me = le;
      le = ze;
      try {
        return fe();
      } finally {
        le = me;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(fe, ze) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var me = le;
      le = fe;
      try {
        return ze();
      } finally {
        le = me;
      }
    }, v.unstable_scheduleCallback = function(fe, ze, me) {
      var M = v.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? M + me : M) : me = M, fe) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = me + X, fe = { id: K++, callback: ze, priorityLevel: fe, startTime: me, expirationTime: X, sortIndex: -1 }, me > M ? (fe.sortIndex = me, h(j, fe), y(q) === null && fe === y(j) && (pe ? (Je($t), $t = -1) : pe = !0, Me(Qe, me - M))) : (fe.sortIndex = X, h(q, fe), ne || ue || (ne = !0, At(ge))), fe;
    }, v.unstable_shouldYield = sn, v.unstable_wrapCallback = function(fe) {
      var ze = le;
      return function() {
        var me = le;
        le = ze;
        try {
          return fe.apply(this, arguments);
        } finally {
          le = me;
        }
      };
    };
  }(PE)), PE;
}
var BE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YT;
function Ok() {
  return YT || (YT = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, y = 5;
      function C(de, Ae) {
        var dt = de.length;
        de.push(Ae), g(de, Ae, dt);
      }
      function w(de) {
        return de.length === 0 ? null : de[0];
      }
      function D(de) {
        if (de.length === 0)
          return null;
        var Ae = de[0], dt = de.pop();
        return dt !== Ae && (de[0] = dt, I(de, dt, 0)), Ae;
      }
      function g(de, Ae, dt) {
        for (var Vt = dt; Vt > 0; ) {
          var rn = Vt - 1 >>> 1, mn = de[rn];
          if (q(mn, Ae) > 0)
            de[rn] = Ae, de[Vt] = mn, Vt = rn;
          else
            return;
        }
      }
      function I(de, Ae, dt) {
        for (var Vt = dt, rn = de.length, mn = rn >>> 1; Vt < mn; ) {
          var cn = (Vt + 1) * 2 - 1, Zn = de[cn], an = cn + 1, qt = de[an];
          if (q(Zn, Ae) < 0)
            an < rn && q(qt, Zn) < 0 ? (de[Vt] = qt, de[an] = Ae, Vt = an) : (de[Vt] = Zn, de[cn] = Ae, Vt = cn);
          else if (an < rn && q(qt, Ae) < 0)
            de[Vt] = qt, de[an] = Ae, Vt = an;
          else
            return;
        }
      }
      function q(de, Ae) {
        var dt = de.sortIndex - Ae.sortIndex;
        return dt !== 0 ? dt : de.id - Ae.id;
      }
      var j = 1, K = 2, B = 3, le = 4, ue = 5;
      function ne(de, Ae) {
      }
      var pe = typeof performance == "object" && typeof performance.now == "function";
      if (pe) {
        var oe = performance;
        v.unstable_now = function() {
          return oe.now();
        };
      } else {
        var Je = Date, Ne = Je.now();
        v.unstable_now = function() {
          return Je.now() - Ne;
        };
      }
      var _e = 1073741823, Qe = -1, ge = 250, Ze = 5e3, Fe = 1e4, $t = _e, Ot = [], nn = [], sn = 1, Nt = null, Ve = B, Bt = !1, Lt = !1, At = !1, Me = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(de) {
        for (var Ae = w(nn); Ae !== null; ) {
          if (Ae.callback === null)
            D(nn);
          else if (Ae.startTime <= de)
            D(nn), Ae.sortIndex = Ae.expirationTime, C(Ot, Ae);
          else
            return;
          Ae = w(nn);
        }
      }
      function M(de) {
        if (At = !1, me(de), !Lt)
          if (w(Ot) !== null)
            Lt = !0, Mn(X);
          else {
            var Ae = w(nn);
            Ae !== null && Cr(M, Ae.startTime - de);
          }
      }
      function X(de, Ae) {
        Lt = !1, At && (At = !1, fa()), Bt = !0;
        var dt = Ve;
        try {
          var Vt;
          if (!h) return Ke(de, Ae);
        } finally {
          Nt = null, Ve = dt, Bt = !1;
        }
      }
      function Ke(de, Ae) {
        var dt = Ae;
        for (me(dt), Nt = w(Ot); Nt !== null && !(Nt.expirationTime > dt && (!de || hi())); ) {
          var Vt = Nt.callback;
          if (typeof Vt == "function") {
            Nt.callback = null, Ve = Nt.priorityLevel;
            var rn = Nt.expirationTime <= dt, mn = Vt(rn);
            dt = v.unstable_now(), typeof mn == "function" ? Nt.callback = mn : Nt === w(Ot) && D(Ot), me(dt);
          } else
            D(Ot);
          Nt = w(Ot);
        }
        if (Nt !== null)
          return !0;
        var cn = w(nn);
        return cn !== null && Cr(M, cn.startTime - dt), !1;
      }
      function qe(de, Ae) {
        switch (de) {
          case j:
          case K:
          case B:
          case le:
          case ue:
            break;
          default:
            de = B;
        }
        var dt = Ve;
        Ve = de;
        try {
          return Ae();
        } finally {
          Ve = dt;
        }
      }
      function ht(de) {
        var Ae;
        switch (Ve) {
          case j:
          case K:
          case B:
            Ae = B;
            break;
          default:
            Ae = Ve;
            break;
        }
        var dt = Ve;
        Ve = Ae;
        try {
          return de();
        } finally {
          Ve = dt;
        }
      }
      function ct(de) {
        var Ae = Ve;
        return function() {
          var dt = Ve;
          Ve = Ae;
          try {
            return de.apply(this, arguments);
          } finally {
            Ve = dt;
          }
        };
      }
      function ot(de, Ae, dt) {
        var Vt = v.unstable_now(), rn;
        if (typeof dt == "object" && dt !== null) {
          var mn = dt.delay;
          typeof mn == "number" && mn > 0 ? rn = Vt + mn : rn = Vt;
        } else
          rn = Vt;
        var cn;
        switch (de) {
          case j:
            cn = Qe;
            break;
          case K:
            cn = ge;
            break;
          case ue:
            cn = $t;
            break;
          case le:
            cn = Fe;
            break;
          case B:
          default:
            cn = Ze;
            break;
        }
        var Zn = rn + cn, an = {
          id: sn++,
          callback: Ae,
          priorityLevel: de,
          startTime: rn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return rn > Vt ? (an.sortIndex = rn, C(nn, an), w(Ot) === null && an === w(nn) && (At ? fa() : At = !0, Cr(M, rn - Vt))) : (an.sortIndex = Zn, C(Ot, an), !Lt && !Bt && (Lt = !0, Mn(X))), an;
      }
      function ft() {
      }
      function mt() {
        !Lt && !Bt && (Lt = !0, Mn(X));
      }
      function Wt() {
        return w(Ot);
      }
      function Ln(de) {
        de.callback = null;
      }
      function xr() {
        return Ve;
      }
      var Rn = !1, ar = null, $n = -1, In = y, Yr = -1;
      function hi() {
        var de = v.unstable_now() - Yr;
        return !(de < In);
      }
      function ca() {
      }
      function Jn(de) {
        if (de < 0 || de > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        de > 0 ? In = Math.floor(1e3 / de) : In = y;
      }
      var Tn = function() {
        if (ar !== null) {
          var de = v.unstable_now();
          Yr = de;
          var Ae = !0, dt = !0;
          try {
            dt = ar(Ae, de);
          } finally {
            dt ? Yn() : (Rn = !1, ar = null);
          }
        } else
          Rn = !1;
      }, Yn;
      if (typeof ze == "function")
        Yn = function() {
          ze(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), Qa = Er.port2;
        Er.port1.onmessage = Tn, Yn = function() {
          Qa.postMessage(null);
        };
      } else
        Yn = function() {
          Me(Tn, 0);
        };
      function Mn(de) {
        ar = de, Rn || (Rn = !0, Yn());
      }
      function Cr(de, Ae) {
        $n = Me(function() {
          de(v.unstable_now());
        }, Ae);
      }
      function fa() {
        fe($n), $n = -1;
      }
      var Ga = ca, mi = null;
      v.unstable_IdlePriority = ue, v.unstable_ImmediatePriority = j, v.unstable_LowPriority = le, v.unstable_NormalPriority = B, v.unstable_Profiling = mi, v.unstable_UserBlockingPriority = K, v.unstable_cancelCallback = Ln, v.unstable_continueExecution = mt, v.unstable_forceFrameRate = Jn, v.unstable_getCurrentPriorityLevel = xr, v.unstable_getFirstCallbackNode = Wt, v.unstable_next = ht, v.unstable_pauseExecution = ft, v.unstable_requestPaint = Ga, v.unstable_runWithPriority = qe, v.unstable_scheduleCallback = ot, v.unstable_shouldYield = hi, v.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(BE)), BE;
}
var WT;
function fw() {
  return WT || (WT = 1, process.env.NODE_ENV === "production" ? fy.exports = kk() : fy.exports = Ok()), fy.exports;
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
var qT;
function Nk() {
  if (qT) return Ya;
  qT = 1;
  var v = mv(), h = fw();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), w = {};
  function D(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) C.add(r[n]);
  }
  var I = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), q = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, B = {};
  function le(n) {
    return q.call(B, n) ? !0 : q.call(K, n) ? !1 : j.test(n) ? B[n] = !0 : (K[n] = !0, !1);
  }
  function ue(n, r, l, o) {
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
  function ne(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o)) return !0;
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
  function pe(n, r, l, o, c, d, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = E;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new pe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new pe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new pe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new pe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new pe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new pe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new pe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new pe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new pe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Je = /[\-:]([a-z])/g;
  function Ne(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Je,
      Ne
    );
    oe[r] = new pe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Je, Ne);
    oe[r] = new pe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Je, Ne);
    oe[r] = new pe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new pe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new pe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function _e(n, r, l, o) {
    var c = oe.hasOwnProperty(r) ? oe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ne(r, l, c, o) && (l = null), o || c === null ? le(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Qe = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = Symbol.for("react.element"), Ze = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), $t = Symbol.for("react.strict_mode"), Ot = Symbol.for("react.profiler"), nn = Symbol.for("react.provider"), sn = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), Ve = Symbol.for("react.suspense"), Bt = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), Me = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function ze(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, M;
  function X(n) {
    if (M === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      M = r && r[1] || "";
    }
    return `
` + M + n;
  }
  var Ke = !1;
  function qe(n, r) {
    if (!n || Ke) return "";
    Ke = !0;
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
        } catch (V) {
          var o = V;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (V) {
          o = V;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (V) {
          o = V;
        }
        n();
      }
    } catch (V) {
      if (V && o && typeof V.stack == "string") {
        for (var c = V.stack.split(`
`), d = o.stack.split(`
`), E = c.length - 1, b = d.length - 1; 1 <= E && 0 <= b && c[E] !== d[b]; ) b--;
        for (; 1 <= E && 0 <= b; E--, b--) if (c[E] !== d[b]) {
          if (E !== 1 || b !== 1)
            do
              if (E--, b--, 0 > b || c[E] !== d[b]) {
                var k = `
` + c[E].replace(" at new ", " at ");
                return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
              }
            while (1 <= E && 0 <= b);
          break;
        }
      }
    } finally {
      Ke = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? X(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return X(n.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case Ze:
        return "Portal";
      case Ot:
        return "Profiler";
      case $t:
        return "StrictMode";
      case Ve:
        return "Suspense";
      case Bt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case sn:
        return (n.displayName || "Context") + ".Consumer";
      case nn:
        return (n._context.displayName || "Context") + ".Provider";
      case Nt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Lt:
        return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
      case At:
        r = n._payload, n = n._init;
        try {
          return ct(n(r));
        } catch {
        }
    }
    return null;
  }
  function ot(n) {
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
        return ct(r);
      case 8:
        return r === $t ? "StrictMode" : "Mode";
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
  function ft(n) {
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
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = mt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(E) {
        o = "" + E, d.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(E) {
        o = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ln(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function xr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = mt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ar(n, r) {
    var l = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ft(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && _e(n, "checked", r, !1);
  }
  function Yr(n, r) {
    In(n, r);
    var l = ft(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ca(n, r.type, l) : r.hasOwnProperty("defaultValue") && ca(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function hi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ca(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Jn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ft(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(y(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(y(92));
        if (Jn(l)) {
          if (1 < l.length) throw Error(y(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ft(l) };
  }
  function Qa(n, r) {
    var l = ft(r.value), o = ft(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Cr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Cr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ga, mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ga = Ga || document.createElement("div"), Ga.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ga.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function de(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ae = {
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
  }, dt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ae).forEach(function(n) {
    dt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ae[r] = Ae[n];
    });
  });
  function Vt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ae.hasOwnProperty(n) && Ae[n] ? ("" + r).trim() : r + "px";
  }
  function rn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Vt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mn = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(y(62));
    }
  }
  function Zn(n, r) {
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
  var an = null;
  function qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Qt = null, da = null, Rr = null;
  function xa(n) {
    if (n = He(n)) {
      if (typeof Qt != "function") throw Error(y(280));
      var r = n.stateNode;
      r && (r = bn(r), Qt(n.stateNode, n.type, r));
    }
  }
  function Ii(n) {
    da ? Rr ? Rr.push(n) : Rr = [n] : da = n;
  }
  function lu() {
    if (da) {
      var n = da, r = Rr;
      if (Rr = da = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function uu(n, r) {
    return n(r);
  }
  function Sl() {
  }
  var El = !1;
  function ou(n, r, l) {
    if (El) return n(r, l);
    El = !0;
    try {
      return uu(n, r, l);
    } finally {
      El = !1, (da !== null || Rr !== null) && (Sl(), lu());
    }
  }
  function _r(n, r) {
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
    if (l && typeof l != "function") throw Error(y(231, r, typeof l));
    return l;
  }
  var Dr = !1;
  if (I) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      Dr = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    Dr = !1;
  }
  function yi(n, r, l, o, c, d, E, b, k) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, V);
    } catch (re) {
      this.onError(re);
    }
  }
  var Ka = !1, gi = null, Si = !1, _ = null, Z = { onError: function(n) {
    Ka = !0, gi = n;
  } };
  function ye(n, r, l, o, c, d, E, b, k) {
    Ka = !1, gi = null, yi.apply(Z, arguments);
  }
  function De(n, r, l, o, c, d, E, b, k) {
    if (ye.apply(this, arguments), Ka) {
      if (Ka) {
        var V = gi;
        Ka = !1, gi = null;
      } else throw Error(y(198));
      Si || (Si = !0, _ = V);
    }
  }
  function it(n) {
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
  function nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Et(n) {
    if (it(n) !== n) throw Error(y(188));
  }
  function yt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = it(n), r === null) throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Et(c), n;
          if (d === o) return Et(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var E = !1, b = c.child; b; ) {
          if (b === l) {
            E = !0, l = c, o = d;
            break;
          }
          if (b === o) {
            E = !0, o = c, l = d;
            break;
          }
          b = b.sibling;
        }
        if (!E) {
          for (b = d.child; b; ) {
            if (b === l) {
              E = !0, l = d, o = c;
              break;
            }
            if (b === o) {
              E = !0, o = d, l = c;
              break;
            }
            b = b.sibling;
          }
          if (!E) throw Error(y(189));
        }
      }
      if (l.alternate !== o) throw Error(y(190));
    }
    if (l.tag !== 3) throw Error(y(188));
    return l.stateNode.current === l ? n : r;
  }
  function wn(n) {
    return n = yt(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = h.unstable_scheduleCallback, lr = h.unstable_cancelCallback, Xa = h.unstable_shouldYield, Ja = h.unstable_requestPaint, lt = h.unstable_now, st = h.unstable_getCurrentPriorityLevel, Za = h.unstable_ImmediatePriority, su = h.unstable_UserBlockingPriority, cu = h.unstable_NormalPriority, Cl = h.unstable_LowPriority, eo = h.unstable_IdlePriority, Rl = null, Wr = null;
  function Jo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(Rl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : to, mc = Math.log, yc = Math.LN2;
  function to(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (mc(n) / yc | 0) | 0;
  }
  var Tl = 64, pa = 4194304;
  function ei(n) {
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
  function ti(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var b = E & ~c;
      b !== 0 ? o = ei(b) : (d &= E, d !== 0 && (o = ei(d)));
    } else E = l & ~c, E !== 0 ? o = ei(E) : d !== 0 && (o = ei(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function no(n, r) {
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
  function fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var E = 31 - kr(d), b = 1 << E, k = c[E];
      k === -1 ? (!(b & l) || b & o) && (c[E] = no(b, r)) : k <= r && (n.expiredLanes |= b), d &= ~b;
    }
  }
  function wl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ro() {
    var n = Tl;
    return Tl <<= 1, !(Tl & 4194240) && (Tl = 64), n;
  }
  function ao(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Yi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function ld(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ut = 0;
  function io(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Dt, Zo, Ei, et, lo, ur = !1, Ci = [], Or = null, Ri = null, dn = null, Gt = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), Wn = [], Nr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _a(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        Ri = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Gt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bl.delete(r.pointerId);
    }
  }
  function du(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = He(r), r !== null && Zo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function es(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = du(Or, n, r, l, o, c), !0;
      case "dragenter":
        return Ri = du(Ri, n, r, l, o, c), !0;
      case "mouseover":
        return dn = du(dn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Gt.set(d, du(Gt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, bl.set(d, du(bl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ts(n) {
    var r = Cu(n.target);
    if (r !== null) {
      var l = it(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = nt(l), r !== null) {
            n.blockedOn = r, lo(n.priority, function() {
              Ei(l);
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
  function xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = so(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        an = o, l.target.dispatchEvent(o), an = null;
      } else return r = He(l), r !== null && Zo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pu(n, r, l) {
    xl(n) && l.delete(r);
  }
  function ud() {
    ur = !1, Or !== null && xl(Or) && (Or = null), Ri !== null && xl(Ri) && (Ri = null), dn !== null && xl(dn) && (dn = null), Gt.forEach(pu), bl.forEach(pu);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ur || (ur = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, ud)));
  }
  function ni(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < Ci.length) {
      Da(Ci[0], n);
      for (var l = 1; l < Ci.length; l++) {
        var o = Ci[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && Da(Or, n), Ri !== null && Da(Ri, n), dn !== null && Da(dn, n), Gt.forEach(r), bl.forEach(r), l = 0; l < Wn.length; l++) o = Wn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Wn.length && (l = Wn[0], l.blockedOn === null); ) ts(l), l.blockedOn === null && Wn.shift();
  }
  var Ti = Qe.ReactCurrentBatchConfig, ka = !0;
  function uo(n, r, l, o) {
    var c = Ut, d = Ti.transition;
    Ti.transition = null;
    try {
      Ut = 1, _l(n, r, l, o);
    } finally {
      Ut = c, Ti.transition = d;
    }
  }
  function oo(n, r, l, o) {
    var c = Ut, d = Ti.transition;
    Ti.transition = null;
    try {
      Ut = 4, _l(n, r, l, o);
    } finally {
      Ut = c, Ti.transition = d;
    }
  }
  function _l(n, r, l, o) {
    if (ka) {
      var c = so(n, r, l, o);
      if (c === null) kc(n, r, o, vu, l), _a(n, o);
      else if (es(c, n, r, l, o)) o.stopPropagation();
      else if (_a(n, o), r & 4 && -1 < Nr.indexOf(n)) {
        for (; c !== null; ) {
          var d = He(c);
          if (d !== null && Dt(d), d = so(n, r, l, o), d === null && kc(n, r, o, vu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else kc(n, r, o, null, l);
    }
  }
  var vu = null;
  function so(n, r, l, o) {
    if (vu = null, n = qt(o), n = Cu(n), n !== null) if (r = it(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = nt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vu = n, null;
  }
  function co(n) {
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
        switch (st()) {
          case Za:
            return 1;
          case su:
            return 4;
          case cu:
          case Cl:
            return 16;
          case eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, S = null, x = null;
  function P() {
    if (x) return x;
    var n, r = S, l = r.length, o, c = "value" in ri ? ri.value : ri.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var E = l - n;
    for (o = 1; o <= E && r[l - o] === c[d - o]; o++) ;
    return x = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function se() {
    return !0;
  }
  function $e() {
    return !1;
  }
  function he(n) {
    function r(l, o, c, d, E) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = E, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (l = n[b], this[b] = l ? l(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? se : $e, this.isPropagationStopped = $e, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = se);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = se);
    }, persist: function() {
    }, isPersistent: se }), r;
  }
  var We = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ct = he(We), kt = me({}, We, { view: 0, detail: 0 }), un = he(kt), Kt, pt, Xt, yn = me({}, kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (Kt = n.screenX - Xt.screenX, pt = n.screenY - Xt.screenY) : pt = Kt = 0, Xt = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pt;
  } }), Dl = he(yn), ns = me({}, yn, { dataTransfer: 0 }), qi = he(ns), rs = me({}, kt, { relatedTarget: 0 }), hu = he(rs), od = me({}, We, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gc = he(od), sd = me({}, We, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Sv = he(sd), cd = me({}, We, { data: 0 }), fd = he(cd), Ev = {
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
  }, Cv = {
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
  }, Ty = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ty[n]) ? !!r[n] : !1;
  }
  function dd() {
    return Qi;
  }
  var pd = me({}, kt, { key: function(n) {
    if (n.key) {
      var r = Ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Y(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dd, charCode: function(n) {
    return n.type === "keypress" ? Y(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Y(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), vd = he(pd), hd = me({}, yn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rv = he(hd), Sc = me({}, kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dd }), Tv = he(Sc), qr = me({}, We, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gi = he(qr), An = me({}, yn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = he(An), md = [9, 13, 27, 32], fo = I && "CompositionEvent" in window, as = null;
  I && "documentMode" in document && (as = document.documentMode);
  var is = I && "TextEvent" in window && !as, wv = I && (!fo || as && 8 < as && 11 >= as), bv = " ", Ec = !1;
  function xv(n, r) {
    switch (n) {
      case "keyup":
        return md.indexOf(r.keyCode) !== -1;
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
  function _v(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var po = !1;
  function Dv(n, r) {
    switch (n) {
      case "compositionend":
        return _v(r);
      case "keypress":
        return r.which !== 32 ? null : (Ec = !0, bv);
      case "textInput":
        return n = r.data, n === bv && Ec ? null : n;
      default:
        return null;
    }
  }
  function wy(n, r) {
    if (po) return n === "compositionend" || !fo && xv(n, r) ? (n = P(), x = S = ri = null, po = !1, n) : null;
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
        return wv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var by = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function kv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!by[n.type] : r === "textarea";
  }
  function yd(n, r, l, o) {
    Ii(o), r = fs(r, "onChange"), 0 < r.length && (l = new Ct("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var wi = null, mu = null;
  function Ov(n) {
    Su(n, 0);
  }
  function ls(n) {
    var r = ii(n);
    if (xr(r)) return n;
  }
  function xy(n, r) {
    if (n === "change") return r;
  }
  var Nv = !1;
  if (I) {
    var gd;
    if (I) {
      var Sd = "oninput" in document;
      if (!Sd) {
        var Lv = document.createElement("div");
        Lv.setAttribute("oninput", "return;"), Sd = typeof Lv.oninput == "function";
      }
      gd = Sd;
    } else gd = !1;
    Nv = gd && (!document.documentMode || 9 < document.documentMode);
  }
  function Mv() {
    wi && (wi.detachEvent("onpropertychange", Av), mu = wi = null);
  }
  function Av(n) {
    if (n.propertyName === "value" && ls(mu)) {
      var r = [];
      yd(r, mu, n, qt(n)), ou(Ov, r);
    }
  }
  function _y(n, r, l) {
    n === "focusin" ? (Mv(), wi = r, mu = l, wi.attachEvent("onpropertychange", Av)) : n === "focusout" && Mv();
  }
  function Uv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ls(mu);
  }
  function Dy(n, r) {
    if (n === "click") return ls(r);
  }
  function zv(n, r) {
    if (n === "input" || n === "change") return ls(r);
  }
  function ky(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ai = typeof Object.is == "function" ? Object.is : ky;
  function us(n, r) {
    if (ai(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!q.call(r, c) || !ai(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Cc(n, r) {
    var l = Fv(n);
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
      l = Fv(l);
    }
  }
  function kl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? kl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function os() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function Rc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function vo(n) {
    var r = os(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && kl(l.ownerDocument.documentElement, l)) {
      if (o !== null && Rc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Cc(l, d);
          var E = Cc(
            l,
            o
          );
          c && E && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Oy = I && "documentMode" in document && 11 >= document.documentMode, ho = null, Ed = null, ss = null, Cd = !1;
  function Rd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Cd || ho == null || ho !== Rn(o) || (o = ho, "selectionStart" in o && Rc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ss && us(ss, o) || (ss = o, o = fs(Ed, "onSelect"), 0 < o.length && (r = new Ct("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ho)));
  }
  function Tc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yu = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, or = {}, Td = {};
  I && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete yu.animationend.animation, delete yu.animationiteration.animation, delete yu.animationstart.animation), "TransitionEvent" in window || delete yu.transitionend.transition);
  function wc(n) {
    if (or[n]) return or[n];
    if (!yu[n]) return n;
    var r = yu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Td) return or[n] = r[l];
    return n;
  }
  var jv = wc("animationend"), Hv = wc("animationiteration"), Pv = wc("animationstart"), Bv = wc("transitionend"), wd = /* @__PURE__ */ new Map(), bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Oa(n, r) {
    wd.set(n, r), D(r, [n]);
  }
  for (var bd = 0; bd < bc.length; bd++) {
    var gu = bc[bd], Ny = gu.toLowerCase(), Ly = gu[0].toUpperCase() + gu.slice(1);
    Oa(Ny, "on" + Ly);
  }
  Oa(jv, "onAnimationEnd"), Oa(Hv, "onAnimationIteration"), Oa(Pv, "onAnimationStart"), Oa("dblclick", "onDoubleClick"), Oa("focusin", "onFocus"), Oa("focusout", "onBlur"), Oa(Bv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), D("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
  function xc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, De(o, r, void 0, n), n.currentTarget = null;
  }
  function Su(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var E = o.length - 1; 0 <= E; E--) {
          var b = o[E], k = b.instance, V = b.currentTarget;
          if (b = b.listener, k !== d && c.isPropagationStopped()) break e;
          xc(c, b, V), d = k;
        }
        else for (E = 0; E < o.length; E++) {
          if (b = o[E], k = b.instance, V = b.currentTarget, b = b.listener, k !== d && c.isPropagationStopped()) break e;
          xc(c, b, V), d = k;
        }
      }
    }
    if (Si) throw n = _, Si = !1, _ = null, n;
  }
  function It(n, r) {
    var l = r[vs];
    l === void 0 && (l = r[vs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Vv(r, n, 2, !1), l.add(o));
  }
  function _c(n, r, l) {
    var o = 0;
    r && (o |= 4), Vv(l, n, o, r);
  }
  var Dc = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(n) {
    if (!n[Dc]) {
      n[Dc] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (xd.has(l) || _c(l, !1, n), _c(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Dc] || (r[Dc] = !0, _c("selectionchange", !1, r));
    }
  }
  function Vv(n, r, l, o) {
    switch (co(r)) {
      case 1:
        var c = uo;
        break;
      case 4:
        c = oo;
        break;
      default:
        c = _l;
    }
    l = c.bind(null, r, l, n), c = void 0, !Dr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function kc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var E = o.tag;
      if (E === 3 || E === 4) {
        var b = o.stateNode.containerInfo;
        if (b === c || b.nodeType === 8 && b.parentNode === c) break;
        if (E === 4) for (E = o.return; E !== null; ) {
          var k = E.tag;
          if ((k === 3 || k === 4) && (k = E.stateNode.containerInfo, k === c || k.nodeType === 8 && k.parentNode === c)) return;
          E = E.return;
        }
        for (; b !== null; ) {
          if (E = Cu(b), E === null) return;
          if (k = E.tag, k === 5 || k === 6) {
            o = d = E;
            continue e;
          }
          b = b.parentNode;
        }
      }
      o = o.return;
    }
    ou(function() {
      var V = d, re = qt(l), ae = [];
      e: {
        var te = wd.get(n);
        if (te !== void 0) {
          var Te = Ct, ke = n;
          switch (n) {
            case "keypress":
              if (Y(l) === 0) break e;
            case "keydown":
            case "keyup":
              Te = vd;
              break;
            case "focusin":
              ke = "focus", Te = hu;
              break;
            case "focusout":
              ke = "blur", Te = hu;
              break;
            case "beforeblur":
            case "afterblur":
              Te = hu;
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
              Te = Dl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Te = qi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Te = Tv;
              break;
            case jv:
            case Hv:
            case Pv:
              Te = gc;
              break;
            case Bv:
              Te = Gi;
              break;
            case "scroll":
              Te = un;
              break;
            case "wheel":
              Te = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              Te = Sv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Te = Rv;
          }
          var Le = (r & 4) !== 0, On = !Le && n === "scroll", A = Le ? te !== null ? te + "Capture" : null : te;
          Le = [];
          for (var N = V, F; N !== null; ) {
            F = N;
            var ce = F.stateNode;
            if (F.tag === 5 && ce !== null && (F = ce, A !== null && (ce = _r(N, A), ce != null && Le.push(yo(N, ce, F)))), On) break;
            N = N.return;
          }
          0 < Le.length && (te = new Te(te, ke, null, l, re), ae.push({ event: te, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Te = n === "mouseout" || n === "pointerout", te && l !== an && (ke = l.relatedTarget || l.fromElement) && (Cu(ke) || ke[Xi])) break e;
          if ((Te || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, Te ? (ke = l.relatedTarget || l.toElement, Te = V, ke = ke ? Cu(ke) : null, ke !== null && (On = it(ke), ke !== On || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (Te = null, ke = V), Te !== ke)) {
            if (Le = Dl, ce = "onMouseLeave", A = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Rv, ce = "onPointerLeave", A = "onPointerEnter", N = "pointer"), On = Te == null ? te : ii(Te), F = ke == null ? te : ii(ke), te = new Le(ce, N + "leave", Te, l, re), te.target = On, te.relatedTarget = F, ce = null, Cu(re) === V && (Le = new Le(A, N + "enter", ke, l, re), Le.target = F, Le.relatedTarget = On, ce = Le), On = ce, Te && ke) t: {
              for (Le = Te, A = ke, N = 0, F = Le; F; F = Ol(F)) N++;
              for (F = 0, ce = A; ce; ce = Ol(ce)) F++;
              for (; 0 < N - F; ) Le = Ol(Le), N--;
              for (; 0 < F - N; ) A = Ol(A), F--;
              for (; N--; ) {
                if (Le === A || A !== null && Le === A.alternate) break t;
                Le = Ol(Le), A = Ol(A);
              }
              Le = null;
            }
            else Le = null;
            Te !== null && $v(ae, te, Te, Le, !1), ke !== null && On !== null && $v(ae, On, ke, Le, !0);
          }
        }
        e: {
          if (te = V ? ii(V) : window, Te = te.nodeName && te.nodeName.toLowerCase(), Te === "select" || Te === "input" && te.type === "file") var Ce = xy;
          else if (kv(te)) if (Nv) Ce = zv;
          else {
            Ce = Uv;
            var Be = _y;
          }
          else (Te = te.nodeName) && Te.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ce = Dy);
          if (Ce && (Ce = Ce(n, V))) {
            yd(ae, Ce, l, re);
            break e;
          }
          Be && Be(n, te, V), n === "focusout" && (Be = te._wrapperState) && Be.controlled && te.type === "number" && ca(te, "number", te.value);
        }
        switch (Be = V ? ii(V) : window, n) {
          case "focusin":
            (kv(Be) || Be.contentEditable === "true") && (ho = Be, Ed = V, ss = null);
            break;
          case "focusout":
            ss = Ed = ho = null;
            break;
          case "mousedown":
            Cd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cd = !1, Rd(ae, l, re);
            break;
          case "selectionchange":
            if (Oy) break;
          case "keydown":
          case "keyup":
            Rd(ae, l, re);
        }
        var Ye;
        if (fo) e: {
          switch (n) {
            case "compositionstart":
              var tt = "onCompositionStart";
              break e;
            case "compositionend":
              tt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              tt = "onCompositionUpdate";
              break e;
          }
          tt = void 0;
        }
        else po ? xv(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (wv && l.locale !== "ko" && (po || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && po && (Ye = P()) : (ri = re, S = "value" in ri ? ri.value : ri.textContent, po = !0)), Be = fs(V, tt), 0 < Be.length && (tt = new fd(tt, n, null, l, re), ae.push({ event: tt, listeners: Be }), Ye ? tt.data = Ye : (Ye = _v(l), Ye !== null && (tt.data = Ye)))), (Ye = is ? Dv(n, l) : wy(n, l)) && (V = fs(V, "onBeforeInput"), 0 < V.length && (re = new fd("onBeforeInput", "beforeinput", null, l, re), ae.push({ event: re, listeners: V }), re.data = Ye));
      }
      Su(ae, r);
    });
  }
  function yo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function fs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(yo(n, d, c)), d = _r(n, r), d != null && o.push(yo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Ol(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $v(n, r, l, o, c) {
    for (var d = r._reactName, E = []; l !== null && l !== o; ) {
      var b = l, k = b.alternate, V = b.stateNode;
      if (k !== null && k === o) break;
      b.tag === 5 && V !== null && (b = V, c ? (k = _r(l, d), k != null && E.unshift(yo(l, k, b))) : c || (k = _r(l, d), k != null && E.push(yo(l, k, b)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Iv = /\r\n?/g, My = /\u0000|\uFFFD/g;
  function Yv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Iv, `
`).replace(My, "");
  }
  function Oc(n, r, l) {
    if (r = Yv(r), Yv(n) !== r && l) throw Error(y(425));
  }
  function Nl() {
  }
  var ds = null, Eu = null;
  function Nc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = typeof setTimeout == "function" ? setTimeout : void 0, _d = typeof clearTimeout == "function" ? clearTimeout : void 0, Wv = typeof Promise == "function" ? Promise : void 0, go = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wv < "u" ? function(n) {
    return Wv.resolve(null).then(n).catch(Mc);
  } : Lc;
  function Mc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function So(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ni(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ni(r);
  }
  function bi(n) {
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
  function qv(n) {
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
  var Ll = Math.random().toString(36).slice(2), xi = "__reactFiber$" + Ll, ps = "__reactProps$" + Ll, Xi = "__reactContainer$" + Ll, vs = "__reactEvents$" + Ll, Eo = "__reactListeners$" + Ll, Ay = "__reactHandles$" + Ll;
  function Cu(n) {
    var r = n[xi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Xi] || l[xi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = qv(n); n !== null; ) {
          if (l = n[xi]) return l;
          n = qv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function He(n) {
    return n = n[xi] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ii(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(y(33));
  }
  function bn(n) {
    return n[ps] || null;
  }
  var wt = [], Na = -1;
  function li(n) {
    return { current: n };
  }
  function on(n) {
    0 > Na || (n.current = wt[Na], wt[Na] = null, Na--);
  }
  function je(n, r) {
    Na++, wt[Na] = n.current, n.current = r;
  }
  var Qr = {}, Cn = li(Qr), qn = li(!1), Gr = Qr;
  function La(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Qr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function Co() {
    on(qn), on(Cn);
  }
  function Qv(n, r, l) {
    if (Cn.current !== Qr) throw Error(y(168));
    je(Cn, r), je(qn, l);
  }
  function hs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(y(108, ot(n) || "Unknown", c));
    return me({}, l, o);
  }
  function Kr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Qr, Gr = Cn.current, je(Cn, n), je(qn, qn.current), !0;
  }
  function Ac(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(y(169));
    l ? (n = hs(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, on(qn), on(Cn), je(Cn, n)) : on(qn), je(qn, l);
  }
  var _i = null, Ro = !1, Ji = !1;
  function Uc(n) {
    _i === null ? _i = [n] : _i.push(n);
  }
  function Ml(n) {
    Ro = !0, Uc(n);
  }
  function Di() {
    if (!Ji && _i !== null) {
      Ji = !0;
      var n = 0, r = Ut;
      try {
        var l = _i;
        for (Ut = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        _i = null, Ro = !1;
      } catch (c) {
        throw _i !== null && (_i = _i.slice(n + 1)), fn(Za, Di), c;
      } finally {
        Ut = r, Ji = !1;
      }
    }
    return null;
  }
  var Al = [], Ul = 0, zl = null, Zi = 0, zn = [], Ma = 0, va = null, ki = 1, Oi = "";
  function Ru(n, r) {
    Al[Ul++] = Zi, Al[Ul++] = zl, zl = n, Zi = r;
  }
  function Gv(n, r, l) {
    zn[Ma++] = ki, zn[Ma++] = Oi, zn[Ma++] = va, va = n;
    var o = ki;
    n = Oi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var E = c - c % 5;
      d = (o & (1 << E) - 1).toString(32), o >>= E, c -= E, ki = 1 << 32 - kr(r) + c | l << c | o, Oi = d + n;
    } else ki = 1 << d | l << c | o, Oi = n;
  }
  function zc(n) {
    n.return !== null && (Ru(n, 1), Gv(n, 1, 0));
  }
  function Fc(n) {
    for (; n === zl; ) zl = Al[--Ul], Al[Ul] = null, Zi = Al[--Ul], Al[Ul] = null;
    for (; n === va; ) va = zn[--Ma], zn[Ma] = null, Oi = zn[--Ma], zn[Ma] = null, ki = zn[--Ma], zn[Ma] = null;
  }
  var Xr = null, Jr = null, vn = !1, Aa = null;
  function Dd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Kv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Jr = bi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = va !== null ? { id: ki, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function kd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Od(n) {
    if (vn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!Kv(n, r)) {
          if (kd(n)) throw Error(y(418));
          r = bi(l.nextSibling);
          var o = Xr;
          r && Kv(n, r) ? Dd(o, l) : (n.flags = n.flags & -4097 | 2, vn = !1, Xr = n);
        }
      } else {
        if (kd(n)) throw Error(y(418));
        n.flags = n.flags & -4097 | 2, vn = !1, Xr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function jc(n) {
    if (n !== Xr) return !1;
    if (!vn) return Qn(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Nc(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (kd(n)) throw ms(), Error(y(418));
      for (; r; ) Dd(n, r), r = bi(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = bi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = Xr ? bi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ms() {
    for (var n = Jr; n; ) n = bi(n.nextSibling);
  }
  function Fl() {
    Jr = Xr = null, vn = !1;
  }
  function el(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Uy = Qe.ReactCurrentBatchConfig;
  function Tu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(y(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(y(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(E) {
          var b = c.refs;
          E === null ? delete b[d] : b[d] = E;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(y(284));
      if (!l._owner) throw Error(y(290, n));
    }
    return n;
  }
  function Hc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Xv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wu(n) {
    function r(A, N) {
      if (n) {
        var F = A.deletions;
        F === null ? (A.deletions = [N], A.flags |= 16) : F.push(N);
      }
    }
    function l(A, N) {
      if (!n) return null;
      for (; N !== null; ) r(A, N), N = N.sibling;
      return null;
    }
    function o(A, N) {
      for (A = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? A.set(N.key, N) : A.set(N.index, N), N = N.sibling;
      return A;
    }
    function c(A, N) {
      return A = Yl(A, N), A.index = 0, A.sibling = null, A;
    }
    function d(A, N, F) {
      return A.index = F, n ? (F = A.alternate, F !== null ? (F = F.index, F < N ? (A.flags |= 2, N) : F) : (A.flags |= 2, N)) : (A.flags |= 1048576, N);
    }
    function E(A) {
      return n && A.alternate === null && (A.flags |= 2), A;
    }
    function b(A, N, F, ce) {
      return N === null || N.tag !== 6 ? (N = up(F, A.mode, ce), N.return = A, N) : (N = c(N, F), N.return = A, N);
    }
    function k(A, N, F, ce) {
      var Ce = F.type;
      return Ce === Fe ? re(A, N, F.props.children, ce, F.key) : N !== null && (N.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === At && Xv(Ce) === N.type) ? (ce = c(N, F.props), ce.ref = Tu(A, N, F), ce.return = A, ce) : (ce = Ws(F.type, F.key, F.props, null, A.mode, ce), ce.ref = Tu(A, N, F), ce.return = A, ce);
    }
    function V(A, N, F, ce) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== F.containerInfo || N.stateNode.implementation !== F.implementation ? (N = Sf(F, A.mode, ce), N.return = A, N) : (N = c(N, F.children || []), N.return = A, N);
    }
    function re(A, N, F, ce, Ce) {
      return N === null || N.tag !== 7 ? (N = ll(F, A.mode, ce, Ce), N.return = A, N) : (N = c(N, F), N.return = A, N);
    }
    function ae(A, N, F) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = up("" + N, A.mode, F), N.return = A, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ge:
            return F = Ws(N.type, N.key, N.props, null, A.mode, F), F.ref = Tu(A, null, N), F.return = A, F;
          case Ze:
            return N = Sf(N, A.mode, F), N.return = A, N;
          case At:
            var ce = N._init;
            return ae(A, ce(N._payload), F);
        }
        if (Jn(N) || ze(N)) return N = ll(N, A.mode, F, null), N.return = A, N;
        Hc(A, N);
      }
      return null;
    }
    function te(A, N, F, ce) {
      var Ce = N !== null ? N.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number") return Ce !== null ? null : b(A, N, "" + F, ce);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ge:
            return F.key === Ce ? k(A, N, F, ce) : null;
          case Ze:
            return F.key === Ce ? V(A, N, F, ce) : null;
          case At:
            return Ce = F._init, te(
              A,
              N,
              Ce(F._payload),
              ce
            );
        }
        if (Jn(F) || ze(F)) return Ce !== null ? null : re(A, N, F, ce, null);
        Hc(A, F);
      }
      return null;
    }
    function Te(A, N, F, ce, Ce) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return A = A.get(F) || null, b(N, A, "" + ce, Ce);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case ge:
            return A = A.get(ce.key === null ? F : ce.key) || null, k(N, A, ce, Ce);
          case Ze:
            return A = A.get(ce.key === null ? F : ce.key) || null, V(N, A, ce, Ce);
          case At:
            var Be = ce._init;
            return Te(A, N, F, Be(ce._payload), Ce);
        }
        if (Jn(ce) || ze(ce)) return A = A.get(F) || null, re(N, A, ce, Ce, null);
        Hc(N, ce);
      }
      return null;
    }
    function ke(A, N, F, ce) {
      for (var Ce = null, Be = null, Ye = N, tt = N = 0, Kn = null; Ye !== null && tt < F.length; tt++) {
        Ye.index > tt ? (Kn = Ye, Ye = null) : Kn = Ye.sibling;
        var jt = te(A, Ye, F[tt], ce);
        if (jt === null) {
          Ye === null && (Ye = Kn);
          break;
        }
        n && Ye && jt.alternate === null && r(A, Ye), N = d(jt, N, tt), Be === null ? Ce = jt : Be.sibling = jt, Be = jt, Ye = Kn;
      }
      if (tt === F.length) return l(A, Ye), vn && Ru(A, tt), Ce;
      if (Ye === null) {
        for (; tt < F.length; tt++) Ye = ae(A, F[tt], ce), Ye !== null && (N = d(Ye, N, tt), Be === null ? Ce = Ye : Be.sibling = Ye, Be = Ye);
        return vn && Ru(A, tt), Ce;
      }
      for (Ye = o(A, Ye); tt < F.length; tt++) Kn = Te(Ye, A, tt, F[tt], ce), Kn !== null && (n && Kn.alternate !== null && Ye.delete(Kn.key === null ? tt : Kn.key), N = d(Kn, N, tt), Be === null ? Ce = Kn : Be.sibling = Kn, Be = Kn);
      return n && Ye.forEach(function(Ql) {
        return r(A, Ql);
      }), vn && Ru(A, tt), Ce;
    }
    function Le(A, N, F, ce) {
      var Ce = ze(F);
      if (typeof Ce != "function") throw Error(y(150));
      if (F = Ce.call(F), F == null) throw Error(y(151));
      for (var Be = Ce = null, Ye = N, tt = N = 0, Kn = null, jt = F.next(); Ye !== null && !jt.done; tt++, jt = F.next()) {
        Ye.index > tt ? (Kn = Ye, Ye = null) : Kn = Ye.sibling;
        var Ql = te(A, Ye, jt.value, ce);
        if (Ql === null) {
          Ye === null && (Ye = Kn);
          break;
        }
        n && Ye && Ql.alternate === null && r(A, Ye), N = d(Ql, N, tt), Be === null ? Ce = Ql : Be.sibling = Ql, Be = Ql, Ye = Kn;
      }
      if (jt.done) return l(
        A,
        Ye
      ), vn && Ru(A, tt), Ce;
      if (Ye === null) {
        for (; !jt.done; tt++, jt = F.next()) jt = ae(A, jt.value, ce), jt !== null && (N = d(jt, N, tt), Be === null ? Ce = jt : Be.sibling = jt, Be = jt);
        return vn && Ru(A, tt), Ce;
      }
      for (Ye = o(A, Ye); !jt.done; tt++, jt = F.next()) jt = Te(Ye, A, tt, jt.value, ce), jt !== null && (n && jt.alternate !== null && Ye.delete(jt.key === null ? tt : jt.key), N = d(jt, N, tt), Be === null ? Ce = jt : Be.sibling = jt, Be = jt);
      return n && Ye.forEach(function(Gy) {
        return r(A, Gy);
      }), vn && Ru(A, tt), Ce;
    }
    function On(A, N, F, ce) {
      if (typeof F == "object" && F !== null && F.type === Fe && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ge:
            e: {
              for (var Ce = F.key, Be = N; Be !== null; ) {
                if (Be.key === Ce) {
                  if (Ce = F.type, Ce === Fe) {
                    if (Be.tag === 7) {
                      l(A, Be.sibling), N = c(Be, F.props.children), N.return = A, A = N;
                      break e;
                    }
                  } else if (Be.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === At && Xv(Ce) === Be.type) {
                    l(A, Be.sibling), N = c(Be, F.props), N.ref = Tu(A, Be, F), N.return = A, A = N;
                    break e;
                  }
                  l(A, Be);
                  break;
                } else r(A, Be);
                Be = Be.sibling;
              }
              F.type === Fe ? (N = ll(F.props.children, A.mode, ce, F.key), N.return = A, A = N) : (ce = Ws(F.type, F.key, F.props, null, A.mode, ce), ce.ref = Tu(A, N, F), ce.return = A, A = ce);
            }
            return E(A);
          case Ze:
            e: {
              for (Be = F.key; N !== null; ) {
                if (N.key === Be) if (N.tag === 4 && N.stateNode.containerInfo === F.containerInfo && N.stateNode.implementation === F.implementation) {
                  l(A, N.sibling), N = c(N, F.children || []), N.return = A, A = N;
                  break e;
                } else {
                  l(A, N);
                  break;
                }
                else r(A, N);
                N = N.sibling;
              }
              N = Sf(F, A.mode, ce), N.return = A, A = N;
            }
            return E(A);
          case At:
            return Be = F._init, On(A, N, Be(F._payload), ce);
        }
        if (Jn(F)) return ke(A, N, F, ce);
        if (ze(F)) return Le(A, N, F, ce);
        Hc(A, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, N !== null && N.tag === 6 ? (l(A, N.sibling), N = c(N, F), N.return = A, A = N) : (l(A, N), N = up(F, A.mode, ce), N.return = A, A = N), E(A)) : l(A, N);
    }
    return On;
  }
  var xn = wu(!0), Se = wu(!1), ha = li(null), Zr = null, To = null, Nd = null;
  function Ld() {
    Nd = To = Zr = null;
  }
  function Md(n) {
    var r = ha.current;
    on(ha), n._currentValue = r;
  }
  function Ad(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    Zr = n, Nd = To = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Ua(n) {
    var r = n._currentValue;
    if (Nd !== n) if (n = { context: n, memoizedValue: r, next: null }, To === null) {
      if (Zr === null) throw Error(y(308));
      To = n, Zr.dependencies = { lanes: 0, firstContext: n };
    } else To = To.next = n;
    return r;
  }
  var bu = null;
  function Ud(n) {
    bu === null ? bu = [n] : bu.push(n);
  }
  function zd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ud(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ma(n, o);
  }
  function ma(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ya = !1;
  function Fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function tl(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function jl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, bt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ma(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ud(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ma(n, l);
  }
  function Pc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wi(n, l);
    }
  }
  function Zv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = E : d = d.next = E, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ys(n, r, l, o) {
    var c = n.updateQueue;
    ya = !1;
    var d = c.firstBaseUpdate, E = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var k = b, V = k.next;
      k.next = null, E === null ? d = V : E.next = V, E = k;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, b = re.lastBaseUpdate, b !== E && (b === null ? re.firstBaseUpdate = V : b.next = V, re.lastBaseUpdate = k));
    }
    if (d !== null) {
      var ae = c.baseState;
      E = 0, re = V = k = null, b = d;
      do {
        var te = b.lane, Te = b.eventTime;
        if ((o & te) === te) {
          re !== null && (re = re.next = {
            eventTime: Te,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var ke = n, Le = b;
            switch (te = r, Te = l, Le.tag) {
              case 1:
                if (ke = Le.payload, typeof ke == "function") {
                  ae = ke.call(Te, ae, te);
                  break e;
                }
                ae = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Le.payload, te = typeof ke == "function" ? ke.call(Te, ae, te) : ke, te == null) break e;
                ae = me({}, ae, te);
                break e;
              case 2:
                ya = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [b] : te.push(b));
        } else Te = { eventTime: Te, lane: te, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, re === null ? (V = re = Te, k = ae) : re = re.next = Te, E |= te;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null) break;
          te = b, b = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (re === null && (k = ae), c.baseState = k, c.firstBaseUpdate = V, c.lastBaseUpdate = re, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          E |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ui |= E, n.lanes = E, n.memoizedState = ae;
    }
  }
  function jd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(y(191, c));
        c.call(o);
      }
    }
  }
  var gs = {}, Ni = li(gs), Ss = li(gs), Es = li(gs);
  function xu(n) {
    if (n === gs) throw Error(y(174));
    return n;
  }
  function Hd(n, r) {
    switch (je(Es, r), je(Ss, n), je(Ni, gs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : fa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = fa(r, n);
    }
    on(Ni), je(Ni, r);
  }
  function _u() {
    on(Ni), on(Ss), on(Es);
  }
  function eh(n) {
    xu(Es.current);
    var r = xu(Ni.current), l = fa(r, n.type);
    r !== l && (je(Ss, n), je(Ni, l));
  }
  function Bc(n) {
    Ss.current === n && (on(Ni), on(Ss));
  }
  var Sn = li(0);
  function Vc(n) {
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
  var Cs = [];
  function Pe() {
    for (var n = 0; n < Cs.length; n++) Cs[n]._workInProgressVersionPrimary = null;
    Cs.length = 0;
  }
  var gt = Qe.ReactCurrentDispatcher, zt = Qe.ReactCurrentBatchConfig, Jt = 0, Ft = null, Fn = null, er = null, $c = !1, Rs = !1, Du = 0, ee = 0;
  function Mt() {
    throw Error(y(321));
  }
  function Ge(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ai(n[l], r[l])) return !1;
    return !0;
  }
  function Hl(n, r, l, o, c, d) {
    if (Jt = d, Ft = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, gt.current = n === null || n.memoizedState === null ? af : Ds, n = l(o, c), Rs) {
      d = 0;
      do {
        if (Rs = !1, Du = 0, 25 <= d) throw Error(y(301));
        d += 1, er = Fn = null, r.updateQueue = null, gt.current = lf, n = l(o, c);
      } while (Rs);
    }
    if (gt.current = Mu, r = Fn !== null && Fn.next !== null, Jt = 0, er = Fn = Ft = null, $c = !1, r) throw Error(y(300));
    return n;
  }
  function ui() {
    var n = Du !== 0;
    return Du = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return er === null ? Ft.memoizedState = er = n : er = er.next = n, er;
  }
  function _n() {
    if (Fn === null) {
      var n = Ft.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = er === null ? Ft.memoizedState : er.next;
    if (r !== null) er = r, Fn = n;
    else {
      if (n === null) throw Error(y(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, er === null ? Ft.memoizedState = er = n : er = er.next = n;
    }
    return er;
  }
  function nl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Pl(n) {
    var r = _n(), l = r.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = Fn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var E = c.next;
        c.next = d.next, d.next = E;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var b = E = null, k = null, V = d;
      do {
        var re = V.lane;
        if ((Jt & re) === re) k !== null && (k = k.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), o = V.hasEagerState ? V.eagerState : n(o, V.action);
        else {
          var ae = {
            lane: re,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          k === null ? (b = k = ae, E = o) : k = k.next = ae, Ft.lanes |= re, Ui |= re;
        }
        V = V.next;
      } while (V !== null && V !== d);
      k === null ? E = o : k.next = b, ai(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = E, r.baseQueue = k, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ft.lanes |= d, Ui |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ku(n) {
    var r = _n(), l = r.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var E = c = c.next;
      do
        d = n(d, E.action), E = E.next;
      while (E !== c);
      ai(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Ic() {
  }
  function Yc(n, r) {
    var l = Ft, o = _n(), c = r(), d = !ai(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, Ts(Qc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || er !== null && er.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ou(9, qc.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(y(349));
      Jt & 30 || Wc(l, r, c);
    }
    return c;
  }
  function Wc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function qc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Gc(r) && Kc(n);
  }
  function Qc(n, r, l) {
    return l(function() {
      Gc(r) && Kc(n);
    });
  }
  function Gc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ai(n, l);
    } catch {
      return !0;
    }
  }
  function Kc(n) {
    var r = ma(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Lu.bind(null, Ft, n), [r.memoizedState, n];
  }
  function Ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Jc() {
    return _n().memoizedState;
  }
  function wo(n, r, l, o) {
    var c = Tr();
    Ft.flags |= n, c.memoizedState = Ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function bo(n, r, l, o) {
    var c = _n();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Fn !== null) {
      var E = Fn.memoizedState;
      if (d = E.destroy, o !== null && Ge(o, E.deps)) {
        c.memoizedState = Ou(r, l, d, o);
        return;
      }
    }
    Ft.flags |= n, c.memoizedState = Ou(1 | r, l, d, o);
  }
  function Zc(n, r) {
    return wo(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return bo(2048, 8, n, r);
  }
  function ef(n, r) {
    return bo(4, 2, n, r);
  }
  function ws(n, r) {
    return bo(4, 4, n, r);
  }
  function Nu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function tf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bo(4, 4, Nu.bind(null, r, n), l);
  }
  function bs() {
  }
  function nf(n, r) {
    var l = _n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ge(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function rf(n, r) {
    var l = _n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ge(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Pd(n, r, l) {
    return Jt & 21 ? (ai(l, r) || (l = ro(), Ft.lanes |= l, Ui |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function xs(n, r) {
    var l = Ut;
    Ut = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = zt.transition;
    zt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ut = l, zt.transition = o;
    }
  }
  function Bd() {
    return _n().memoizedState;
  }
  function _s(n, r, l) {
    var o = zi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ga(n)) th(r, l);
    else if (l = zd(n, r, l, o), l !== null) {
      var c = Bn();
      Ur(l, n, o, c), tn(l, r, o);
    }
  }
  function Lu(n, r, l) {
    var o = zi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ga(n)) th(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var E = r.lastRenderedState, b = d(E, l);
        if (c.hasEagerState = !0, c.eagerState = b, ai(b, E)) {
          var k = r.interleaved;
          k === null ? (c.next = c, Ud(r)) : (c.next = k.next, k.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = zd(n, r, c, o), l !== null && (c = Bn(), Ur(l, n, o, c), tn(l, r, o));
    }
  }
  function ga(n) {
    var r = n.alternate;
    return n === Ft || r !== null && r === Ft;
  }
  function th(n, r) {
    Rs = $c = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function tn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wi(n, l);
    }
  }
  var Mu = { readContext: Ua, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useInsertionEffect: Mt, useLayoutEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useMutableSource: Mt, useSyncExternalStore: Mt, useId: Mt, unstable_isNewReconciler: !1 }, af = { readContext: Ua, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ua, useEffect: Zc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, wo(
      4194308,
      4,
      Nu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return wo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = _s.bind(null, Ft, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: bs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = xs.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ft, c = Tr();
    if (vn) {
      if (l === void 0) throw Error(y(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(y(349));
      Jt & 30 || Wc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Zc(Qc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ou(9, qc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Gn.identifierPrefix;
    if (vn) {
      var l = Oi, o = ki;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Du++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ee++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ds = {
    readContext: Ua,
    useCallback: nf,
    useContext: Ua,
    useEffect: Ts,
    useImperativeHandle: tf,
    useInsertionEffect: ef,
    useLayoutEffect: ws,
    useMemo: rf,
    useReducer: Pl,
    useRef: Jc,
    useState: function() {
      return Pl(nl);
    },
    useDebugValue: bs,
    useDeferredValue: function(n) {
      var r = _n();
      return Pd(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Pl(nl)[0], r = _n().memoizedState;
      return [n, r];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Yc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, lf = { readContext: Ua, useCallback: nf, useContext: Ua, useEffect: Ts, useImperativeHandle: tf, useInsertionEffect: ef, useLayoutEffect: ws, useMemo: rf, useReducer: ku, useRef: Jc, useState: function() {
    return ku(nl);
  }, useDebugValue: bs, useDeferredValue: function(n) {
    var r = _n();
    return Fn === null ? r.memoizedState = n : Pd(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = ku(nl)[0], r = _n().memoizedState;
    return [n, r];
  }, useMutableSource: Ic, useSyncExternalStore: Yc, useId: Bd, unstable_isNewReconciler: !1 };
  function oi(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Vd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : me({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var uf = { isMounted: function(n) {
    return (n = n._reactInternals) ? it(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Bn(), c = zi(n), d = tl(o, c);
    d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Ur(r, n, c, o), Pc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Bn(), c = zi(n), d = tl(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Ur(r, n, c, o), Pc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Bn(), o = zi(n), c = tl(l, o);
    c.tag = 2, r != null && (c.callback = r), r = jl(n, c, o), r !== null && (Ur(r, n, o, l), Pc(r, n, o));
  } };
  function nh(n, r, l, o, c, d, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, E) : r.prototype && r.prototype.isPureReactComponent ? !us(l, o) || !us(c, d) : !0;
  }
  function of(n, r, l) {
    var o = !1, c = Qr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ua(d) : (c = Un(r) ? Gr : Cn.current, o = r.contextTypes, d = (o = o != null) ? La(n, c) : Qr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = uf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function rh(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && uf.enqueueReplaceState(r, r.state, null);
  }
  function ks(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ua(d) : (d = Un(r) ? Gr : Cn.current, c.context = La(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Vd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && uf.enqueueReplaceState(c, c.state, null), ys(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Au(n, r) {
    try {
      var l = "", o = r;
      do
        l += ht(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function $d(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Id(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function ah(n, r, l) {
    l = tl(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      No || (No = !0, Fu = o), Id(n, r);
    }, l;
  }
  function Yd(n, r, l) {
    l = tl(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Id(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Id(n, r), typeof o != "function" && ($l === null ? $l = /* @__PURE__ */ new Set([this]) : $l.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function Wd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new sf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Vy.bind(null, n, r, l), r.then(n, n));
  }
  function ih(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Bl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = tl(-1, 1), r.tag = 2, jl(l, r, 1))), l.lanes |= 1), n);
  }
  var Os = Qe.ReactCurrentOwner, jn = !1;
  function sr(n, r, l, o) {
    r.child = n === null ? Se(r, null, l, o) : xn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return gn(r, c), o = Hl(n, r, l, o, d, c), l = ui(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (vn && l && zc(r), r.flags |= 1, sr(n, r, o, c), r.child);
  }
  function Uu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !lp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ut(n, r, d, o, c)) : (n = Ws(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var E = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : us, l(E, o) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ut(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (us(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return lh(n, r, l, o, c);
  }
  function Ns(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(Do, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, je(Do, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, je(Do, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, je(Do, Sa), Sa |= o;
    return sr(n, r, c, l), r.child;
  }
  function qd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lh(n, r, l, o, c) {
    var d = Un(l) ? Gr : Cn.current;
    return d = La(r, d), gn(r, c), l = Hl(n, r, l, o, d, c), o = ui(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (vn && o && zc(r), r.flags |= 1, sr(n, r, l, c), r.child);
  }
  function uh(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      Kr(r);
    } else d = !1;
    if (gn(r, c), r.stateNode === null) za(n, r), of(r, l, o), ks(r, l, o, c), o = !0;
    else if (n === null) {
      var E = r.stateNode, b = r.memoizedProps;
      E.props = b;
      var k = E.context, V = l.contextType;
      typeof V == "object" && V !== null ? V = Ua(V) : (V = Un(l) ? Gr : Cn.current, V = La(r, V));
      var re = l.getDerivedStateFromProps, ae = typeof re == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ae || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (b !== o || k !== V) && rh(r, E, o, V), ya = !1;
      var te = r.memoizedState;
      E.state = te, ys(r, o, E, c), k = r.memoizedState, b !== o || te !== k || qn.current || ya ? (typeof re == "function" && (Vd(r, l, re, o), k = r.memoizedState), (b = ya || nh(r, l, b, o, te, k, V)) ? (ae || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = k), E.props = o, E.state = k, E.context = V, o = b) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      E = r.stateNode, Jv(n, r), b = r.memoizedProps, V = r.type === r.elementType ? b : oi(r.type, b), E.props = V, ae = r.pendingProps, te = E.context, k = l.contextType, typeof k == "object" && k !== null ? k = Ua(k) : (k = Un(l) ? Gr : Cn.current, k = La(r, k));
      var Te = l.getDerivedStateFromProps;
      (re = typeof Te == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (b !== ae || te !== k) && rh(r, E, o, k), ya = !1, te = r.memoizedState, E.state = te, ys(r, o, E, c);
      var ke = r.memoizedState;
      b !== ae || te !== ke || qn.current || ya ? (typeof Te == "function" && (Vd(r, l, Te, o), ke = r.memoizedState), (V = ya || nh(r, l, V, o, te, ke, k) || !1) ? (re || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(o, ke, k), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(o, ke, k)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || b === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ke), E.props = o, E.state = ke, E.context = k, o = V) : (typeof E.componentDidUpdate != "function" || b === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ls(n, r, l, o, d, c);
  }
  function Ls(n, r, l, o, c, d) {
    qd(n, r);
    var E = (r.flags & 128) !== 0;
    if (!o && !E) return c && Ac(r, l, !1), Fa(n, r, d);
    o = r.stateNode, Os.current = r;
    var b = E && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && E ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, b, d)) : sr(n, r, b, d), r.memoizedState = o.state, c && Ac(r, l, !0), r.child;
  }
  function xo(n) {
    var r = n.stateNode;
    r.pendingContext ? Qv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Qv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function oh(n, r, l, o, c) {
    return Fl(), el(c), r.flags |= 256, sr(n, r, l, o), r.child;
  }
  var cf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Qd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ff(n, r, l) {
    var o = r.pendingProps, c = Sn.current, d = !1, E = (r.flags & 128) !== 0, b;
    if ((b = E) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), je(Sn, c & 1), n === null)
      return Od(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, E = { mode: "hidden", children: E }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = E) : d = Wl(E, o, 0, null), n = ll(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Qd(l), r.memoizedState = cf, n) : Gd(r, E));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null)) return sh(n, r, E, o, b, c, l);
    if (d) {
      d = o.fallback, E = r.mode, c = n.child, b = c.sibling;
      var k = { mode: "hidden", children: o.children };
      return !(E & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = k, r.deletions = null) : (o = Yl(c, k), o.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? d = Yl(b, d) : (d = ll(d, E, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, E = n.child.memoizedState, E = E === null ? Qd(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, d.memoizedState = E, d.childLanes = n.childLanes & ~l, r.memoizedState = cf, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Gd(n, r) {
    return r = Wl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ms(n, r, l, o) {
    return o !== null && el(o), xn(r, n.child, null, l), n = Gd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sh(n, r, l, o, c, d, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = $d(Error(y(422))), Ms(n, r, E, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Wl({ mode: "visible", children: o.children }, c, 0, null), d = ll(d, c, E, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, E), r.child.memoizedState = Qd(E), r.memoizedState = cf, d);
    if (!(r.mode & 1)) return Ms(n, r, E, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var b = o.dgst;
      return o = b, d = Error(y(419)), o = $d(d, o, void 0), Ms(n, r, E, o);
    }
    if (b = (E & n.childLanes) !== 0, jn || b) {
      if (o = Gn, o !== null) {
        switch (E & -E) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | E) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ma(n, c), Ur(o, n, c, -1));
      }
      return ip(), o = $d(Error(y(421))), Ms(n, r, E, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = bi(c.nextSibling), Xr = r, vn = !0, Aa = null, n !== null && (zn[Ma++] = ki, zn[Ma++] = Oi, zn[Ma++] = va, ki = n.id, Oi = n.overflow, va = r), r = Gd(r, o.children), r.flags |= 4096, r);
  }
  function Kd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ad(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Li(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (sr(n, r, o.children, l), o = Sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Kd(n, l, r);
        else if (n.tag === 19) Kd(n, l, r);
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
    if (je(Sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Vc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Vc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ui |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function As(n, r, l) {
    switch (r.tag) {
      case 3:
        xo(r), Fl();
        break;
      case 5:
        eh(r);
        break;
      case 1:
        Un(r.type) && Kr(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        je(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (je(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ff(n, r, l) : (je(Sn, Sn.current & 1), n = Fa(n, r, l), n !== null ? n.sibling : null);
        je(Sn, Sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Li(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), je(Sn, Sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ns(n, r, l);
    }
    return Fa(n, r, l);
  }
  var ja, Hn, ch, fh;
  ja = function(n, r) {
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
  }, ch = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, xu(Ni.current);
      var d = null;
      switch (l) {
        case "input":
          c = ar(n, c), o = ar(n, o), d = [];
          break;
        case "select":
          c = me({}, c, { value: void 0 }), o = me({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Nl);
      }
      cn(l, o);
      var E;
      l = null;
      for (V in c) if (!o.hasOwnProperty(V) && c.hasOwnProperty(V) && c[V] != null) if (V === "style") {
        var b = c[V];
        for (E in b) b.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
      } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (w.hasOwnProperty(V) ? d || (d = []) : (d = d || []).push(V, null));
      for (V in o) {
        var k = o[V];
        if (b = c != null ? c[V] : void 0, o.hasOwnProperty(V) && k !== b && (k != null || b != null)) if (V === "style") if (b) {
          for (E in b) !b.hasOwnProperty(E) || k && k.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
          for (E in k) k.hasOwnProperty(E) && b[E] !== k[E] && (l || (l = {}), l[E] = k[E]);
        } else l || (d || (d = []), d.push(
          V,
          l
        )), l = k;
        else V === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, b = b ? b.__html : void 0, k != null && b !== k && (d = d || []).push(V, k)) : V === "children" ? typeof k != "string" && typeof k != "number" || (d = d || []).push(V, "" + k) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (w.hasOwnProperty(V) ? (k != null && V === "onScroll" && It("scroll", n), d || b === k || (d = [])) : (d = d || []).push(V, k));
      }
      l && (d = d || []).push("style", l);
      var V = d;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, fh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Us(n, r) {
    if (!vn) switch (n.tailMode) {
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
  function tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function dh(n, r, l) {
    var o = r.pendingProps;
    switch (Fc(r), r.tag) {
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
        return tr(r), null;
      case 1:
        return Un(r.type) && Co(), tr(r), null;
      case 3:
        return o = r.stateNode, _u(), on(qn), on(Cn), Pe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (jc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (ju(Aa), Aa = null))), Hn(n, r), tr(r), null;
      case 5:
        Bc(r);
        var c = xu(Es.current);
        if (l = r.type, n !== null && r.stateNode != null) ch(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(y(166));
            return tr(r), null;
          }
          if (n = xu(Ni.current), jc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[xi] = r, o[ps] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                It("cancel", o), It("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                It("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < cs.length; c++) It(cs[c], o);
                break;
              case "source":
                It("error", o);
                break;
              case "img":
              case "image":
              case "link":
                It(
                  "error",
                  o
                ), It("load", o);
                break;
              case "details":
                It("toggle", o);
                break;
              case "input":
                $n(o, d), It("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, It("invalid", o);
                break;
              case "textarea":
                Er(o, d), It("invalid", o);
            }
            cn(l, d), c = null;
            for (var E in d) if (d.hasOwnProperty(E)) {
              var b = d[E];
              E === "children" ? typeof b == "string" ? o.textContent !== b && (d.suppressHydrationWarning !== !0 && Oc(o.textContent, b, n), c = ["children", b]) : typeof b == "number" && o.textContent !== "" + b && (d.suppressHydrationWarning !== !0 && Oc(
                o.textContent,
                b,
                n
              ), c = ["children", "" + b]) : w.hasOwnProperty(E) && b != null && E === "onScroll" && It("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), hi(o, d, !0);
                break;
              case "textarea":
                Ln(o), Mn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Nl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            E = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Cr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = E.createElement(l, { is: o.is }) : (n = E.createElement(l), l === "select" && (E = n, o.multiple ? E.multiple = !0 : o.size && (E.size = o.size))) : n = E.createElementNS(n, l), n[xi] = r, n[ps] = o, ja(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = Zn(l, o), l) {
                case "dialog":
                  It("cancel", n), It("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  It("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < cs.length; c++) It(cs[c], n);
                  c = o;
                  break;
                case "source":
                  It("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  It(
                    "error",
                    n
                  ), It("load", n), c = o;
                  break;
                case "details":
                  It("toggle", n), c = o;
                  break;
                case "input":
                  $n(n, o), c = ar(n, o), It("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = me({}, o, { value: void 0 }), It("invalid", n);
                  break;
                case "textarea":
                  Er(n, o), c = Yn(n, o), It("invalid", n);
                  break;
                default:
                  c = o;
              }
              cn(l, c), b = c;
              for (d in b) if (b.hasOwnProperty(d)) {
                var k = b[d];
                d === "style" ? rn(n, k) : d === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && mi(n, k)) : d === "children" ? typeof k == "string" ? (l !== "textarea" || k !== "") && de(n, k) : typeof k == "number" && de(n, "" + k) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (w.hasOwnProperty(d) ? k != null && d === "onScroll" && It("scroll", n) : k != null && _e(n, d, k, E));
              }
              switch (l) {
                case "input":
                  Ln(n), hi(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), Mn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ft(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Nl);
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
        return tr(r), null;
      case 6:
        if (n && r.stateNode != null) fh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(y(166));
          if (l = xu(Es.current), xu(Ni.current), jc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[xi] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                Oc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Oc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[xi] = r, r.stateNode = o;
        }
        return tr(r), null;
      case 13:
        if (on(Sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && Jr !== null && r.mode & 1 && !(r.flags & 128)) ms(), Fl(), r.flags |= 98560, d = !1;
          else if (d = jc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(y(317));
              d[xi] = r;
            } else Fl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            tr(r), d = !1;
          } else Aa !== null && (ju(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? kn === 0 && (kn = 3) : ip())), r.updateQueue !== null && (r.flags |= 4), tr(r), null);
      case 4:
        return _u(), Hn(n, r), n === null && mo(r.stateNode.containerInfo), tr(r), null;
      case 10:
        return Md(r.type._context), tr(r), null;
      case 17:
        return Un(r.type) && Co(), tr(r), null;
      case 19:
        if (on(Sn), d = r.memoizedState, d === null) return tr(r), null;
        if (o = (r.flags & 128) !== 0, E = d.rendering, E === null) if (o) Us(d, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (E = Vc(n), E !== null) {
              for (r.flags |= 128, Us(d, !1), o = E.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, E = d.alternate, E === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = E.childLanes, d.lanes = E.lanes, d.child = E.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = E.memoizedProps, d.memoizedState = E.memoizedState, d.updateQueue = E.updateQueue, d.type = E.type, n = E.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return je(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && lt() > Oo && (r.flags |= 128, o = !0, Us(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Vc(E), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Us(d, !0), d.tail === null && d.tailMode === "hidden" && !E.alternate && !vn) return tr(r), null;
          } else 2 * lt() - d.renderingStartTime > Oo && l !== 1073741824 && (r.flags |= 128, o = !0, Us(d, !1), r.lanes = 4194304);
          d.isBackwards ? (E.sibling = r.child, r.child = E) : (l = d.last, l !== null ? l.sibling = E : r.child = E, d.last = E);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = lt(), r.sibling = null, l = Sn.current, je(Sn, o ? l & 1 | 2 : l & 1), r) : (tr(r), null);
      case 22:
      case 23:
        return ap(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function df(n, r) {
    switch (Fc(r), r.tag) {
      case 1:
        return Un(r.type) && Co(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return _u(), on(qn), on(Cn), Pe(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Bc(r), null;
      case 13:
        if (on(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(y(340));
          Fl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return on(Sn), null;
      case 4:
        return _u(), null;
      case 10:
        return Md(r.type._context), null;
      case 22:
      case 23:
        return ap(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zs = !1, wr = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, xe = null;
  function _o(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      hn(n, r, o);
    }
    else l.current = null;
  }
  function pf(n, r, l) {
    try {
      l();
    } catch (o) {
      hn(n, r, o);
    }
  }
  var ph = !1;
  function vh(n, r) {
    if (ds = ka, n = os(), Rc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var E = 0, b = -1, k = -1, V = 0, re = 0, ae = n, te = null;
          t: for (; ; ) {
            for (var Te; ae !== l || c !== 0 && ae.nodeType !== 3 || (b = E + c), ae !== d || o !== 0 && ae.nodeType !== 3 || (k = E + o), ae.nodeType === 3 && (E += ae.nodeValue.length), (Te = ae.firstChild) !== null; )
              te = ae, ae = Te;
            for (; ; ) {
              if (ae === n) break t;
              if (te === l && ++V === c && (b = E), te === d && ++re === o && (k = E), (Te = ae.nextSibling) !== null) break;
              ae = te, te = ae.parentNode;
            }
            ae = Te;
          }
          l = b === -1 || k === -1 ? null : { start: b, end: k };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Eu = { focusedElem: n, selectionRange: l }, ka = !1, xe = r; xe !== null; ) if (r = xe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, xe = n;
    else for (; xe !== null; ) {
      r = xe;
      try {
        var ke = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var Le = ke.memoizedProps, On = ke.memoizedState, A = r.stateNode, N = A.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : oi(r.type, Le), On);
              A.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var F = r.stateNode.containerInfo;
            F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(y(163));
        }
      } catch (ce) {
        hn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, xe = n;
        break;
      }
      xe = r.return;
    }
    return ke = ph, ph = !1, ke;
  }
  function Fs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && pf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function js(n, r) {
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
  function Xd(n) {
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
  function vf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, vf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[ps], delete r[vs], delete r[Eo], delete r[Ay])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function rl(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Hs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Mi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Nl));
    else if (o !== 4 && (n = n.child, n !== null)) for (Mi(n, r, l), n = n.sibling; n !== null; ) Mi(n, r, l), n = n.sibling;
  }
  function Ai(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ai(n, r, l), n = n.sibling; n !== null; ) Ai(n, r, l), n = n.sibling;
  }
  var Dn = null, Mr = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; ) hh(n, r, l), l = l.sibling;
  }
  function hh(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(Rl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || _o(l, r);
      case 6:
        var o = Dn, c = Mr;
        Dn = null, Ar(n, r, l), Dn = o, Mr = c, Dn !== null && (Mr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Dn.removeChild(l.stateNode));
        break;
      case 18:
        Dn !== null && (Mr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? So(n.parentNode, l) : n.nodeType === 1 && So(n, l), ni(n)) : So(Dn, l.stateNode));
        break;
      case 4:
        o = Dn, c = Mr, Dn = l.stateNode.containerInfo, Mr = !0, Ar(n, r, l), Dn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, E = d.destroy;
            d = d.tag, E !== void 0 && (d & 2 || d & 4) && pf(l, r, E), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!wr && (_o(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (b) {
          hn(l, r, b);
        }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (o = wr) || l.memoizedState !== null, Ar(n, r, l), wr = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function mh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new zy()), r.forEach(function(o) {
        var c = bh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function si(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, E = r, b = E;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              Dn = b.stateNode, Mr = !1;
              break e;
            case 3:
              Dn = b.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              Dn = b.stateNode.containerInfo, Mr = !0;
              break e;
          }
          b = b.return;
        }
        if (Dn === null) throw Error(y(160));
        hh(d, E, c), Dn = null, Mr = !1;
        var k = c.alternate;
        k !== null && (k.return = null), c.return = null;
      } catch (V) {
        hn(c, r, V);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jd(r, n), r = r.sibling;
  }
  function Jd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), ta(n), o & 4) {
          try {
            Fs(3, n, n.return), js(3, n);
          } catch (Le) {
            hn(n, n.return, Le);
          }
          try {
            Fs(5, n, n.return);
          } catch (Le) {
            hn(n, n.return, Le);
          }
        }
        break;
      case 1:
        si(r, n), ta(n), o & 512 && l !== null && _o(l, l.return);
        break;
      case 5:
        if (si(r, n), ta(n), o & 512 && l !== null && _o(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            de(c, "");
          } catch (Le) {
            hn(n, n.return, Le);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, E = l !== null ? l.memoizedProps : d, b = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null) try {
            b === "input" && d.type === "radio" && d.name != null && In(c, d), Zn(b, E);
            var V = Zn(b, d);
            for (E = 0; E < k.length; E += 2) {
              var re = k[E], ae = k[E + 1];
              re === "style" ? rn(c, ae) : re === "dangerouslySetInnerHTML" ? mi(c, ae) : re === "children" ? de(c, ae) : _e(c, re, ae, V);
            }
            switch (b) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Qa(c, d);
                break;
              case "select":
                var te = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Te = d.value;
                Te != null ? Tn(c, !!d.multiple, Te, !1) : te !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ps] = d;
          } catch (Le) {
            hn(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (si(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            hn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (si(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ni(r.containerInfo);
        } catch (Le) {
          hn(n, n.return, Le);
        }
        break;
      case 4:
        si(r, n), ta(n);
        break;
      case 13:
        si(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (tp = lt())), o & 4 && mh(n);
        break;
      case 22:
        if (re = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (V = wr) || re, si(r, n), wr = V) : si(r, n), ta(n), o & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !re && n.mode & 1) for (xe = n, re = n.child; re !== null; ) {
            for (ae = xe = re; xe !== null; ) {
              switch (te = xe, Te = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fs(4, te, te.return);
                  break;
                case 1:
                  _o(te, te.return);
                  var ke = te.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    o = te, l = te.return;
                    try {
                      r = o, ke.props = r.memoizedProps, ke.state = r.memoizedState, ke.componentWillUnmount();
                    } catch (Le) {
                      hn(o, l, Le);
                    }
                  }
                  break;
                case 5:
                  _o(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    Ps(ae);
                    continue;
                  }
              }
              Te !== null ? (Te.return = te, xe = Te) : Ps(ae);
            }
            re = re.sibling;
          }
          e: for (re = null, ae = n; ; ) {
            if (ae.tag === 5) {
              if (re === null) {
                re = ae;
                try {
                  c = ae.stateNode, V ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (b = ae.stateNode, k = ae.memoizedProps.style, E = k != null && k.hasOwnProperty("display") ? k.display : null, b.style.display = Vt("display", E));
                } catch (Le) {
                  hn(n, n.return, Le);
                }
              }
            } else if (ae.tag === 6) {
              if (re === null) try {
                ae.stateNode.nodeValue = V ? "" : ae.memoizedProps;
              } catch (Le) {
                hn(n, n.return, Le);
              }
            } else if ((ae.tag !== 22 && ae.tag !== 23 || ae.memoizedState === null || ae === n) && ae.child !== null) {
              ae.child.return = ae, ae = ae.child;
              continue;
            }
            if (ae === n) break e;
            for (; ae.sibling === null; ) {
              if (ae.return === null || ae.return === n) break e;
              re === ae && (re = null), ae = ae.return;
            }
            re === ae && (re = null), ae.sibling.return = ae.return, ae = ae.sibling;
          }
        }
        break;
      case 19:
        si(r, n), ta(n), o & 4 && mh(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Hs(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(y(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (de(c, ""), o.flags &= -33);
            var d = rl(n);
            Ai(n, d, c);
            break;
          case 3:
          case 4:
            var E = o.stateNode.containerInfo, b = rl(n);
            Mi(n, b, E);
            break;
          default:
            throw Error(y(161));
        }
      } catch (k) {
        hn(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fy(n, r, l) {
    xe = n, Zd(n);
  }
  function Zd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; xe !== null; ) {
      var c = xe, d = c.child;
      if (c.tag === 22 && o) {
        var E = c.memoizedState !== null || zs;
        if (!E) {
          var b = c.alternate, k = b !== null && b.memoizedState !== null || wr;
          b = zs;
          var V = wr;
          if (zs = E, (wr = k) && !V) for (xe = c; xe !== null; ) E = xe, k = E.child, E.tag === 22 && E.memoizedState !== null ? ep(c) : k !== null ? (k.return = E, xe = k) : ep(c);
          for (; d !== null; ) xe = d, Zd(d), d = d.sibling;
          xe = c, zs = b, wr = V;
        }
        yh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, xe = d) : yh(n);
    }
  }
  function yh(n) {
    for (; xe !== null; ) {
      var r = xe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || js(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : oi(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && jd(r, d, o);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                jd(r, E, l);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (l === null && r.flags & 4) {
                l = b;
                var k = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && l.focus();
                    break;
                  case "img":
                    k.src && (l.src = k.src);
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
                var V = r.alternate;
                if (V !== null) {
                  var re = V.memoizedState;
                  if (re !== null) {
                    var ae = re.dehydrated;
                    ae !== null && ni(ae);
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
              throw Error(y(163));
          }
          wr || r.flags & 512 && Xd(r);
        } catch (te) {
          hn(r, r.return, te);
        }
      }
      if (r === n) {
        xe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, xe = l;
        break;
      }
      xe = r.return;
    }
  }
  function Ps(n) {
    for (; xe !== null; ) {
      var r = xe;
      if (r === n) {
        xe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, xe = l;
        break;
      }
      xe = r.return;
    }
  }
  function ep(n) {
    for (; xe !== null; ) {
      var r = xe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              js(4, r);
            } catch (k) {
              hn(r, l, k);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (k) {
                hn(r, c, k);
              }
            }
            var d = r.return;
            try {
              Xd(r);
            } catch (k) {
              hn(r, d, k);
            }
            break;
          case 5:
            var E = r.return;
            try {
              Xd(r);
            } catch (k) {
              hn(r, E, k);
            }
        }
      } catch (k) {
        hn(r, r.return, k);
      }
      if (r === n) {
        xe = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, xe = b;
        break;
      }
      xe = r.return;
    }
  }
  var jy = Math.ceil, Vl = Qe.ReactCurrentDispatcher, zu = Qe.ReactCurrentOwner, cr = Qe.ReactCurrentBatchConfig, bt = 0, Gn = null, Pn = null, fr = 0, Sa = 0, Do = li(0), kn = 0, Bs = null, Ui = 0, ko = 0, hf = 0, Vs = null, na = null, tp = 0, Oo = 1 / 0, Ea = null, No = !1, Fu = null, $l = null, mf = !1, al = null, $s = 0, Il = 0, Lo = null, Is = -1, br = 0;
  function Bn() {
    return bt & 6 ? lt() : Is !== -1 ? Is : Is = lt();
  }
  function zi(n) {
    return n.mode & 1 ? bt & 2 && fr !== 0 ? fr & -fr : Uy.transition !== null ? (br === 0 && (br = ro()), br) : (n = Ut, n !== 0 || (n = window.event, n = n === void 0 ? 16 : co(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Il) throw Il = 0, Lo = null, Error(y(185));
    Yi(n, l, o), (!(bt & 2) || n !== Gn) && (n === Gn && (!(bt & 2) && (ko |= l), kn === 4 && ci(n, fr)), ra(n, o), l === 1 && bt === 0 && !(r.mode & 1) && (Oo = lt() + 500, Ro && Di()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    fu(n, r);
    var o = ti(n, n === Gn ? fr : 0);
    if (o === 0) l !== null && lr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && lr(l), r === 1) n.tag === 0 ? Ml(np.bind(null, n)) : Uc(np.bind(null, n)), go(function() {
        !(bt & 6) && Di();
      }), l = null;
      else {
        switch (io(o)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = su;
            break;
          case 16:
            l = cu;
            break;
          case 536870912:
            l = eo;
            break;
          default:
            l = cu;
        }
        l = _h(l, yf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yf(n, r) {
    if (Is = -1, br = 0, bt & 6) throw Error(y(327));
    var l = n.callbackNode;
    if (Mo() && n.callbackNode !== l) return null;
    var o = ti(n, n === Gn ? fr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = gf(n, o);
    else {
      r = o;
      var c = bt;
      bt |= 2;
      var d = Sh();
      (Gn !== n || fr !== r) && (Ea = null, Oo = lt() + 500, il(n, r));
      do
        try {
          Eh();
          break;
        } catch (b) {
          gh(n, b);
        }
      while (!0);
      Ld(), Vl.current = d, bt = c, Pn !== null ? r = 0 : (Gn = null, fr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wl(n), c !== 0 && (o = c, r = Ys(n, c))), r === 1) throw l = Bs, il(n, 0), ci(n, o), ra(n, lt()), l;
      if (r === 6) ci(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hy(c) && (r = gf(n, o), r === 2 && (d = wl(n), d !== 0 && (o = d, r = Ys(n, d))), r === 1)) throw l = Bs, il(n, 0), ci(n, o), ra(n, lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Pu(n, na, Ea);
            break;
          case 3:
            if (ci(n, o), (o & 130023424) === o && (r = tp + 500 - lt(), 10 < r)) {
              if (ti(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Bn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Lc(Pu.bind(null, n, na, Ea), r);
              break;
            }
            Pu(n, na, Ea);
            break;
          case 4:
            if (ci(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var E = 31 - kr(o);
              d = 1 << E, E = r[E], E > c && (c = E), o &= ~d;
            }
            if (o = c, o = lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * jy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Lc(Pu.bind(null, n, na, Ea), o);
              break;
            }
            Pu(n, na, Ea);
            break;
          case 5:
            Pu(n, na, Ea);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return ra(n, lt()), n.callbackNode === l ? yf.bind(null, n) : null;
  }
  function Ys(n, r) {
    var l = Vs;
    return n.current.memoizedState.isDehydrated && (il(n, r).flags |= 256), n = gf(n, r), n !== 2 && (r = na, na = l, r !== null && ju(r)), n;
  }
  function ju(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function Hy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ai(d(), c)) return !1;
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
  function ci(n, r) {
    for (r &= ~hf, r &= ~ko, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function np(n) {
    if (bt & 6) throw Error(y(327));
    Mo();
    var r = ti(n, 0);
    if (!(r & 1)) return ra(n, lt()), null;
    var l = gf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wl(n);
      o !== 0 && (r = o, l = Ys(n, o));
    }
    if (l === 1) throw l = Bs, il(n, 0), ci(n, r), ra(n, lt()), l;
    if (l === 6) throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Pu(n, na, Ea), ra(n, lt()), null;
  }
  function rp(n, r) {
    var l = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = l, bt === 0 && (Oo = lt() + 500, Ro && Di());
    }
  }
  function Hu(n) {
    al !== null && al.tag === 0 && !(bt & 6) && Mo();
    var r = bt;
    bt |= 1;
    var l = cr.transition, o = Ut;
    try {
      if (cr.transition = null, Ut = 1, n) return n();
    } finally {
      Ut = o, cr.transition = l, bt = r, !(bt & 6) && Di();
    }
  }
  function ap() {
    Sa = Do.current, on(Do);
  }
  function il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, _d(l)), Pn !== null) for (l = Pn.return; l !== null; ) {
      var o = l;
      switch (Fc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Co();
          break;
        case 3:
          _u(), on(qn), on(Cn), Pe();
          break;
        case 5:
          Bc(o);
          break;
        case 4:
          _u();
          break;
        case 13:
          on(Sn);
          break;
        case 19:
          on(Sn);
          break;
        case 10:
          Md(o.type._context);
          break;
        case 22:
        case 23:
          ap();
      }
      l = l.return;
    }
    if (Gn = n, Pn = n = Yl(n.current, null), fr = Sa = r, kn = 0, Bs = null, hf = ko = Ui = 0, na = Vs = null, bu !== null) {
      for (r = 0; r < bu.length; r++) if (l = bu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var E = d.next;
          d.next = c, o.next = E;
        }
        l.pending = o;
      }
      bu = null;
    }
    return n;
  }
  function gh(n, r) {
    do {
      var l = Pn;
      try {
        if (Ld(), gt.current = Mu, $c) {
          for (var o = Ft.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          $c = !1;
        }
        if (Jt = 0, er = Fn = Ft = null, Rs = !1, Du = 0, zu.current = null, l === null || l.return === null) {
          kn = 1, Bs = r, Pn = null;
          break;
        }
        e: {
          var d = n, E = l.return, b = l, k = r;
          if (r = fr, b.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var V = k, re = b, ae = re.tag;
            if (!(re.mode & 1) && (ae === 0 || ae === 11 || ae === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var Te = ih(E);
            if (Te !== null) {
              Te.flags &= -257, Bl(Te, E, b, d, r), Te.mode & 1 && Wd(d, V, r), r = Te, k = V;
              var ke = r.updateQueue;
              if (ke === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(k), r.updateQueue = Le;
              } else ke.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                Wd(d, V, r), ip();
                break e;
              }
              k = Error(y(426));
            }
          } else if (vn && b.mode & 1) {
            var On = ih(E);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Bl(On, E, b, d, r), el(Au(k, b));
              break e;
            }
          }
          d = k = Au(k, b), kn !== 4 && (kn = 2), Vs === null ? Vs = [d] : Vs.push(d), d = E;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var A = ah(d, k, r);
                Zv(d, A);
                break e;
              case 1:
                b = k;
                var N = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof N.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && ($l === null || !$l.has(F)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = Yd(d, b, r);
                  Zv(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Rh(l);
      } catch (Ce) {
        r = Ce, Pn === l && l !== null && (Pn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sh() {
    var n = Vl.current;
    return Vl.current = Mu, n === null ? Mu : n;
  }
  function ip() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Gn === null || !(Ui & 268435455) && !(ko & 268435455) || ci(Gn, fr);
  }
  function gf(n, r) {
    var l = bt;
    bt |= 2;
    var o = Sh();
    (Gn !== n || fr !== r) && (Ea = null, il(n, r));
    do
      try {
        Py();
        break;
      } catch (c) {
        gh(n, c);
      }
    while (!0);
    if (Ld(), bt = l, Vl.current = o, Pn !== null) throw Error(y(261));
    return Gn = null, fr = 0, kn;
  }
  function Py() {
    for (; Pn !== null; ) Ch(Pn);
  }
  function Eh() {
    for (; Pn !== null && !Xa(); ) Ch(Pn);
  }
  function Ch(n) {
    var r = xh(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Rh(n) : Pn = r, zu.current = null;
  }
  function Rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = df(l, r), l !== null) {
          l.flags &= 32767, Pn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Pn = null;
          return;
        }
      } else if (l = dh(l, r, Sa), l !== null) {
        Pn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Pn = r;
        return;
      }
      Pn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Pu(n, r, l) {
    var o = Ut, c = cr.transition;
    try {
      cr.transition = null, Ut = 1, By(n, r, l, o);
    } finally {
      cr.transition = c, Ut = o;
    }
    return null;
  }
  function By(n, r, l, o) {
    do
      Mo();
    while (al !== null);
    if (bt & 6) throw Error(y(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ld(n, d), n === Gn && (Pn = Gn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || mf || (mf = !0, _h(cu, function() {
      return Mo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = cr.transition, cr.transition = null;
      var E = Ut;
      Ut = 1;
      var b = bt;
      bt |= 4, zu.current = null, vh(n, l), Jd(l, n), vo(Eu), ka = !!ds, Eu = ds = null, n.current = l, Fy(l), Ja(), bt = b, Ut = E, cr.transition = d;
    } else n.current = l;
    if (mf && (mf = !1, al = n, $s = c), d = n.pendingLanes, d === 0 && ($l = null), Jo(l.stateNode), ra(n, lt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (No) throw No = !1, n = Fu, Fu = null, n;
    return $s & 1 && n.tag !== 0 && Mo(), d = n.pendingLanes, d & 1 ? n === Lo ? Il++ : (Il = 0, Lo = n) : Il = 0, Di(), null;
  }
  function Mo() {
    if (al !== null) {
      var n = io($s), r = cr.transition, l = Ut;
      try {
        if (cr.transition = null, Ut = 16 > n ? 16 : n, al === null) var o = !1;
        else {
          if (n = al, al = null, $s = 0, bt & 6) throw Error(y(331));
          var c = bt;
          for (bt |= 4, xe = n.current; xe !== null; ) {
            var d = xe, E = d.child;
            if (xe.flags & 16) {
              var b = d.deletions;
              if (b !== null) {
                for (var k = 0; k < b.length; k++) {
                  var V = b[k];
                  for (xe = V; xe !== null; ) {
                    var re = xe;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fs(8, re, d);
                    }
                    var ae = re.child;
                    if (ae !== null) ae.return = re, xe = ae;
                    else for (; xe !== null; ) {
                      re = xe;
                      var te = re.sibling, Te = re.return;
                      if (vf(re), re === V) {
                        xe = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = Te, xe = te;
                        break;
                      }
                      xe = Te;
                    }
                  }
                }
                var ke = d.alternate;
                if (ke !== null) {
                  var Le = ke.child;
                  if (Le !== null) {
                    ke.child = null;
                    do {
                      var On = Le.sibling;
                      Le.sibling = null, Le = On;
                    } while (Le !== null);
                  }
                }
                xe = d;
              }
            }
            if (d.subtreeFlags & 2064 && E !== null) E.return = d, xe = E;
            else e: for (; xe !== null; ) {
              if (d = xe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Fs(9, d, d.return);
              }
              var A = d.sibling;
              if (A !== null) {
                A.return = d.return, xe = A;
                break e;
              }
              xe = d.return;
            }
          }
          var N = n.current;
          for (xe = N; xe !== null; ) {
            E = xe;
            var F = E.child;
            if (E.subtreeFlags & 2064 && F !== null) F.return = E, xe = F;
            else e: for (E = N; xe !== null; ) {
              if (b = xe, b.flags & 2048) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    js(9, b);
                }
              } catch (Ce) {
                hn(b, b.return, Ce);
              }
              if (b === E) {
                xe = null;
                break e;
              }
              var ce = b.sibling;
              if (ce !== null) {
                ce.return = b.return, xe = ce;
                break e;
              }
              xe = b.return;
            }
          }
          if (bt = c, Di(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(Rl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ut = l, cr.transition = r;
      }
    }
    return !1;
  }
  function Th(n, r, l) {
    r = Au(l, r), r = ah(n, r, 1), n = jl(n, r, 1), r = Bn(), n !== null && (Yi(n, 1, r), ra(n, r));
  }
  function hn(n, r, l) {
    if (n.tag === 3) Th(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Th(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($l === null || !$l.has(o))) {
          n = Au(l, n), n = Yd(r, n, 1), r = jl(r, n, 1), n = Bn(), r !== null && (Yi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Bn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (fr & l) === l && (kn === 4 || kn === 3 && (fr & 130023424) === fr && 500 > lt() - tp ? il(n, 0) : hf |= l), ra(n, r);
  }
  function wh(n, r) {
    r === 0 && (n.mode & 1 ? (r = pa, pa <<= 1, !(pa & 130023424) && (pa = 4194304)) : r = 1);
    var l = Bn();
    n = ma(n, r), n !== null && (Yi(n, r, l), ra(n, l));
  }
  function $y(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), wh(n, l);
  }
  function bh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    o !== null && o.delete(r), wh(n, l);
  }
  var xh;
  xh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, As(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, vn && r.flags & 1048576 && Gv(r, Zi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = La(r, Cn.current);
        gn(r, l), c = Hl(null, r, o, n, c, l);
        var d = ui();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, Kr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Fd(r), c.updater = uf, r.stateNode = c, c._reactInternals = r, ks(r, o, n, l), r = Ls(null, r, o, !0, d, l)) : (r.tag = 0, vn && d && zc(r), sr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Yy(o), n = oi(o, n), c) {
            case 0:
              r = lh(null, r, o, n, l);
              break e;
            case 1:
              r = uh(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = Uu(null, r, o, oi(o.type, n), l);
              break e;
          }
          throw Error(y(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), lh(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), uh(n, r, o, c, l);
      case 3:
        e: {
          if (xo(r), n === null) throw Error(y(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Jv(n, r), ys(r, o, null, l);
          var E = r.memoizedState;
          if (o = E.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Au(Error(y(423)), r), r = oh(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Au(Error(y(424)), r), r = oh(n, r, o, l, c);
            break e;
          } else for (Jr = bi(r.stateNode.containerInfo.firstChild), Xr = r, vn = !0, Aa = null, l = Se(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Fl(), o === c) {
              r = Fa(n, r, l);
              break e;
            }
            sr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return eh(r), n === null && Od(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, E = c.children, Nc(o, c) ? E = null : d !== null && Nc(o, d) && (r.flags |= 32), qd(n, r), sr(n, r, E, l), r.child;
      case 6:
        return n === null && Od(r), null;
      case 13:
        return ff(n, r, l);
      case 4:
        return Hd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : sr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), ea(n, r, o, c, l);
      case 7:
        return sr(n, r, r.pendingProps, l), r.child;
      case 8:
        return sr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return sr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, E = c.value, je(ha, o._currentValue), o._currentValue = E, d !== null) if (ai(d.value, E)) {
            if (d.children === c.children && !qn.current) {
              r = Fa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var b = d.dependencies;
            if (b !== null) {
              E = d.child;
              for (var k = b.firstContext; k !== null; ) {
                if (k.context === o) {
                  if (d.tag === 1) {
                    k = tl(-1, l & -l), k.tag = 2;
                    var V = d.updateQueue;
                    if (V !== null) {
                      V = V.shared;
                      var re = V.pending;
                      re === null ? k.next = k : (k.next = re.next, re.next = k), V.pending = k;
                    }
                  }
                  d.lanes |= l, k = d.alternate, k !== null && (k.lanes |= l), Ad(
                    d.return,
                    l,
                    r
                  ), b.lanes |= l;
                  break;
                }
                k = k.next;
              }
            } else if (d.tag === 10) E = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (E = d.return, E === null) throw Error(y(341));
              E.lanes |= l, b = E.alternate, b !== null && (b.lanes |= l), Ad(E, l, r), E = d.sibling;
            } else E = d.child;
            if (E !== null) E.return = d;
            else for (E = d; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (d = E.sibling, d !== null) {
                d.return = E.return, E = d;
                break;
              }
              E = E.return;
            }
            d = E;
          }
          sr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, gn(r, l), c = Ua(c), o = o(c), r.flags |= 1, sr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = oi(o, r.pendingProps), c = oi(o.type, c), Uu(n, r, o, c, l);
      case 15:
        return ut(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : oi(o, c), za(n, r), r.tag = 1, Un(o) ? (n = !0, Kr(r)) : n = !1, gn(r, l), of(r, o, c), ks(r, o, c, l), Ls(null, r, o, !0, n, l);
      case 19:
        return Li(n, r, l);
      case 22:
        return Ns(n, r, l);
    }
    throw Error(y(156, r.tag));
  };
  function _h(n, r) {
    return fn(n, r);
  }
  function Iy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new Iy(n, r, l, o);
  }
  function lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yy(n) {
    if (typeof n == "function") return lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Nt) return 11;
      if (n === Lt) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ws(n, r, l, o, c, d) {
    var E = 2;
    if (o = n, typeof n == "function") lp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Fe:
        return ll(l.children, c, d, r);
      case $t:
        E = 8, c |= 8;
        break;
      case Ot:
        return n = Ha(12, l, r, c | 2), n.elementType = Ot, n.lanes = d, n;
      case Ve:
        return n = Ha(13, l, r, c), n.elementType = Ve, n.lanes = d, n;
      case Bt:
        return n = Ha(19, l, r, c), n.elementType = Bt, n.lanes = d, n;
      case Me:
        return Wl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case nn:
            E = 10;
            break e;
          case sn:
            E = 9;
            break e;
          case Nt:
            E = 11;
            break e;
          case Lt:
            E = 14;
            break e;
          case At:
            E = 16, o = null;
            break e;
        }
        throw Error(y(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(E, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function ll(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function Wl(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = Me, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function up(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Sf(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Dh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ao(0), this.expirationTimes = ao(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ao(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ef(n, r, l, o, c, d, E, b, k) {
    return n = new Dh(n, r, l, b, k), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(d), n;
  }
  function Wy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ze, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function op(n) {
    if (!n) return Qr;
    n = n._reactInternals;
    e: {
      if (it(n) !== n || n.tag !== 1) throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Un(l)) return hs(n, l, r);
    }
    return r;
  }
  function kh(n, r, l, o, c, d, E, b, k) {
    return n = Ef(l, o, !0, n, c, d, E, b, k), n.context = op(null), l = n.current, o = Bn(), c = zi(l), d = tl(o, c), d.callback = r ?? null, jl(l, d, c), n.current.lanes = c, Yi(n, c, o), ra(n, o), n;
  }
  function Cf(n, r, l, o) {
    var c = r.current, d = Bn(), E = zi(c);
    return l = op(l), r.context === null ? r.context = l : r.pendingContext = l, r = tl(d, E), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = jl(c, r, E), n !== null && (Ur(n, c, E, d), Pc(n, c, E)), E;
  }
  function Rf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function sp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Tf(n, r) {
    sp(n, r), (n = n.alternate) && sp(n, r);
  }
  var cp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ql(n) {
    this._internalRoot = n;
  }
  wf.prototype.render = ql.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(y(409));
    Cf(n, r, null, null);
  }, wf.prototype.unmount = ql.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Hu(function() {
        Cf(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function wf(n) {
    this._internalRoot = n;
  }
  wf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = et();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Wn.length && r !== 0 && r < Wn[l].priority; l++) ;
      Wn.splice(l, 0, n), l === 0 && ts(n);
    }
  };
  function fp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function bf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Oh() {
  }
  function qy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var V = Rf(E);
          d.call(V);
        };
      }
      var E = kh(r, o, n, 0, null, !1, !1, "", Oh);
      return n._reactRootContainer = E, n[Xi] = E.current, mo(n.nodeType === 8 ? n.parentNode : n), Hu(), E;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var b = o;
      o = function() {
        var V = Rf(k);
        b.call(V);
      };
    }
    var k = Ef(n, 0, !1, null, null, !1, !1, "", Oh);
    return n._reactRootContainer = k, n[Xi] = k.current, mo(n.nodeType === 8 ? n.parentNode : n), Hu(function() {
      Cf(r, k, l, o);
    }), k;
  }
  function xf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var E = d;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var k = Rf(E);
          b.call(k);
        };
      }
      Cf(r, E, n, c);
    } else E = qy(l, r, n, c, o);
    return Rf(E);
  }
  Dt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && (Wi(r, l | 1), ra(r, lt()), !(bt & 6) && (Oo = lt() + 500, Di()));
        }
        break;
      case 13:
        Hu(function() {
          var o = ma(n, 1);
          if (o !== null) {
            var c = Bn();
            Ur(o, n, 1, c);
          }
        }), Tf(n, 1);
    }
  }, Zo = function(n) {
    if (n.tag === 13) {
      var r = ma(n, 134217728);
      if (r !== null) {
        var l = Bn();
        Ur(r, n, 134217728, l);
      }
      Tf(n, 134217728);
    }
  }, Ei = function(n) {
    if (n.tag === 13) {
      var r = zi(n), l = ma(n, r);
      if (l !== null) {
        var o = Bn();
        Ur(l, n, r, o);
      }
      Tf(n, r);
    }
  }, et = function() {
    return Ut;
  }, lo = function(n, r) {
    var l = Ut;
    try {
      return Ut = n, r();
    } finally {
      Ut = l;
    }
  }, Qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = bn(o);
              if (!c) throw Error(y(90));
              xr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Qa(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, uu = rp, Sl = Hu;
  var Nh = { usingClientEntryPoint: !1, Events: [He, ii, bn, Ii, lu, rp] }, qs = { findFiberByHostInstance: Cu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qy = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber) try {
      Rl = Qs.inject(Qy), Wr = Qs;
    } catch {
    }
  }
  return Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh, Ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fp(r)) throw Error(y(200));
    return Wy(n, r, null, l);
  }, Ya.createRoot = function(n, r) {
    if (!fp(n)) throw Error(y(299));
    var l = !1, o = "", c = cp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ef(n, 1, !1, null, null, l, !1, o, c), n[Xi] = r.current, mo(n.nodeType === 8 ? n.parentNode : n), new ql(r);
  }, Ya.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, Ya.flushSync = function(n) {
    return Hu(n);
  }, Ya.hydrate = function(n, r, l) {
    if (!bf(r)) throw Error(y(200));
    return xf(null, n, r, !0, l);
  }, Ya.hydrateRoot = function(n, r, l) {
    if (!fp(n)) throw Error(y(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", E = cp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = kh(r, null, n, 1, l ?? null, c, !1, d, E), n[Xi] = r.current, mo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new wf(r);
  }, Ya.render = function(n, r, l) {
    if (!bf(r)) throw Error(y(200));
    return xf(null, n, r, !1, l);
  }, Ya.unmountComponentAtNode = function(n) {
    if (!bf(n)) throw Error(y(40));
    return n._reactRootContainer ? (Hu(function() {
      xf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Ya.unstable_batchedUpdates = rp, Ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!bf(l)) throw Error(y(200));
    if (n == null || n._reactInternals === void 0) throw Error(y(38));
    return xf(n, r, l, !1, o);
  }, Ya.version = "18.3.1-next-f1338f8080-20240426", Ya;
}
var Wa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QT;
function Lk() {
  return QT || (QT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = mv(), h = fw(), y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function w(e) {
      C = e;
    }
    function D(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        I("warn", e, a);
      }
    }
    function g(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        I("error", e, a);
      }
    }
    function I(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var q = 0, j = 1, K = 2, B = 3, le = 4, ue = 5, ne = 6, pe = 7, oe = 8, Je = 9, Ne = 10, _e = 11, Qe = 12, ge = 13, Ze = 14, Fe = 15, $t = 16, Ot = 17, nn = 18, sn = 19, Nt = 21, Ve = 22, Bt = 23, Lt = 24, At = 25, Me = !0, fe = !1, ze = !1, me = !1, M = !1, X = !0, Ke = !0, qe = !0, ht = !0, ct = /* @__PURE__ */ new Set(), ot = {}, ft = {};
    function mt(e, t) {
      Wt(e, t), Wt(e + "Capture", t);
    }
    function Wt(e, t) {
      ot[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ot[e] = t;
      {
        var a = e.toLowerCase();
        ft[a] = e, e === "onDoubleClick" && (ft.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ct.add(t[i]);
    }
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xr = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ar(e) {
      try {
        return $n(e), !1;
      } catch {
        return !0;
      }
    }
    function $n(e) {
      return "" + e;
    }
    function In(e, t) {
      if (ar(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function Yr(e) {
      if (ar(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function hi(e, t) {
      if (ar(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function ca(e, t) {
      if (ar(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function Jn(e) {
      if (ar(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function Tn(e) {
      if (ar(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    var Yn = 0, Er = 1, Qa = 2, Mn = 3, Cr = 4, fa = 5, Ga = 6, mi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = mi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ae = new RegExp("^[" + mi + "][" + de + "]*$"), dt = {}, Vt = {};
    function rn(e) {
      return xr.call(Vt, e) ? !0 : xr.call(dt, e) ? !1 : Ae.test(e) ? (Vt[e] = !0, !0) : (dt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === Yn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, a, i) {
      if (a !== null && a.type === Yn)
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
    function Zn(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case Cr:
            return t === !1;
          case fa:
            return isNaN(t);
          case Ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return Qt.hasOwnProperty(e) ? Qt[e] : null;
    }
    function qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Qa || t === Mn || t === Cr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Qt = {}, da = [
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
    da.forEach(function(e) {
      Qt[e] = new qt(
        e,
        Yn,
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
      Qt[t] = new qt(
        t,
        Er,
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
      Qt[e] = new qt(
        e,
        Qa,
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
      Qt[e] = new qt(
        e,
        Qa,
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
      Qt[e] = new qt(
        e,
        Mn,
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
      Qt[e] = new qt(
        e,
        Mn,
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
      Qt[e] = new qt(
        e,
        Cr,
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
      Qt[e] = new qt(
        e,
        Ga,
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
      Qt[e] = new qt(
        e,
        fa,
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
    var Rr = /[\-\:]([a-z])/g, xa = function(e) {
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
      var t = e.replace(Rr, xa);
      Qt[t] = new qt(
        t,
        Er,
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
      var t = e.replace(Rr, xa);
      Qt[t] = new qt(
        t,
        Er,
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
      var t = e.replace(Rr, xa);
      Qt[t] = new qt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Qt[e] = new qt(
        e,
        Er,
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
    var Ii = "xlinkHref";
    Qt[Ii] = new qt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Qt[e] = new qt(
        e,
        Er,
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
    var lu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, uu = !1;
    function Sl(e) {
      !uu && lu.test(e) && (uu = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function El(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        In(a, t), i.sanitizeURL && Sl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Cr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ou(e, t, a, i) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return In(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = an(t);
      if (!mn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (In(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var m = u.type;
            e[p] = m === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var R = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var L = u.type, O;
          L === Mn || L === Cr && a === !0 ? O = "" : (In(a, R), O = "" + a, u.sanitizeURL && Sl(O.toString())), T ? e.setAttributeNS(T, R, O) : e.setAttribute(R, O);
        }
      }
    }
    var Dr = Symbol.for("react.element"), ir = Symbol.for("react.portal"), yi = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), gi = Symbol.for("react.profiler"), Si = Symbol.for("react.provider"), _ = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), it = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), yt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), fn = Symbol.for("react.cache"), lr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Ja = "@@iterator";
    function lt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Ja];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, Za = 0, su, cu, Cl, eo, Rl, Wr, Jo;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function mc() {
      {
        if (Za === 0) {
          su = console.log, cu = console.info, Cl = console.warn, eo = console.error, Rl = console.group, Wr = console.groupCollapsed, Jo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
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
        Za++;
      }
    }
    function yc() {
      {
        if (Za--, Za === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, e, {
              value: su
            }),
            info: st({}, e, {
              value: cu
            }),
            warn: st({}, e, {
              value: Cl
            }),
            error: st({}, e, {
              value: eo
            }),
            group: st({}, e, {
              value: Rl
            }),
            groupCollapsed: st({}, e, {
              value: Wr
            }),
            groupEnd: st({}, e, {
              value: Jo
            })
          });
        }
        Za < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var to = y.ReactCurrentDispatcher, Tl;
    function pa(e, t, a) {
      {
        if (Tl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Tl = i && i[1] || "";
          }
        return `
` + Tl + e;
      }
    }
    var ei = !1, ti;
    {
      var no = typeof WeakMap == "function" ? WeakMap : Map;
      ti = new no();
    }
    function fu(e, t) {
      if (!e || ei)
        return "";
      {
        var a = ti.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ei = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = to.current, to.current = null, mc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch ($) {
              i = $;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var p = $.stack.split(`
`), m = i.stack.split(`
`), R = p.length - 1, T = m.length - 1; R >= 1 && T >= 0 && p[R] !== m[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (p[R] !== m[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || p[R] !== m[T]) {
                    var L = `
` + p[R].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && ti.set(e, L), L;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ei = !1, to.current = s, yc(), Error.prepareStackTrace = u;
      }
      var O = e ? e.displayName || e.name : "", H = O ? pa(O) : "";
      return typeof e == "function" && ti.set(e, H), H;
    }
    function wl(e, t, a) {
      return fu(e, !0);
    }
    function ro(e, t, a) {
      return fu(e, !1);
    }
    function ao(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fu(e, ao(e));
      if (typeof e == "string")
        return pa(e);
      switch (e) {
        case ye:
          return pa("Suspense");
        case De:
          return pa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            return ro(e.render);
          case it:
            return Yi(e.type, t, a);
          case nt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ld(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return pa(e.type);
        case $t:
          return pa("Lazy");
        case ge:
          return pa("Suspense");
        case sn:
          return pa("SuspenseList");
        case q:
        case K:
        case Fe:
          return ro(e.type);
        case _e:
          return ro(e.type.render);
        case j:
          return wl(e.type);
        default:
          return "";
      }
    }
    function Wi(e) {
      try {
        var t = "", a = e;
        do
          t += ld(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ut(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function io(e) {
      return e.displayName || "Context";
    }
    function Dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case yi:
          return "Fragment";
        case ir:
          return "Portal";
        case gi:
          return "Profiler";
        case Ka:
          return "StrictMode";
        case ye:
          return "Suspense";
        case De:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return io(t) + ".Consumer";
          case Si:
            var a = e;
            return io(a._context) + ".Provider";
          case Z:
            return Ut(e, e.render, "ForwardRef");
          case it:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case nt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Dt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ei(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Lt:
          return "Cache";
        case Je:
          var i = a;
          return Ei(i) + ".Consumer";
        case Ne:
          var u = a;
          return Ei(u._context) + ".Provider";
        case nn:
          return "DehydratedFragment";
        case _e:
          return Zo(a, a.render, "ForwardRef");
        case pe:
          return "Fragment";
        case ue:
          return a;
        case le:
          return "Portal";
        case B:
          return "Root";
        case ne:
          return "Text";
        case $t:
          return Dt(a);
        case oe:
          return a === Ka ? "StrictMode" : "Mode";
        case Ve:
          return "Offscreen";
        case Qe:
          return "Profiler";
        case Nt:
          return "Scope";
        case ge:
          return "Suspense";
        case sn:
          return "SuspenseList";
        case At:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case j:
        case q:
        case Ot:
        case K:
        case Ze:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var lo = y.ReactDebugCurrentFrame, ur = null, Ci = !1;
    function Or() {
      {
        if (ur === null)
          return null;
        var e = ur._debugOwner;
        if (e !== null && typeof e < "u")
          return et(e);
      }
      return null;
    }
    function Ri() {
      return ur === null ? "" : Wi(ur);
    }
    function dn() {
      lo.getCurrentStack = null, ur = null, Ci = !1;
    }
    function Gt(e) {
      lo.getCurrentStack = e === null ? null : Ri, ur = e, Ci = !1;
    }
    function bl() {
      return ur;
    }
    function Wn(e) {
      Ci = e;
    }
    function Nr(e) {
      return "" + e;
    }
    function _a(e) {
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
    var du = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function es(e, t) {
      du[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ts(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xl(e) {
      return e._valueTracker;
    }
    function pu(e) {
      e._valueTracker = null;
    }
    function ud(e) {
      var t = "";
      return e && (ts(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = ts(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            pu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ni(e) {
      xl(e) || (e._valueTracker = Da(e));
    }
    function Ti(e) {
      if (!e)
        return !1;
      var t = xl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ud(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ka(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var uo = !1, oo = !1, _l = !1, vu = !1;
    function so(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function co(e, t) {
      var a = e, i = t.checked, u = st({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ri(e, t) {
      es("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !oo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), oo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !uo && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), uo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: _a(t.value != null ? t.value : i),
        controlled: so(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function x(e, t) {
      var a = e;
      {
        var i = so(t);
        !a._wrapperState.controlled && i && !vu && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vu = !0), a._wrapperState.controlled && !i && !_l && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _l = !0);
      }
      S(e, t);
      var u = _a(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Nr(u)) : a.value !== Nr(u) && (a.value = Nr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? $e(a, t.type, u) : t.hasOwnProperty("defaultValue") && $e(a, t.type, _a(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function P(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Nr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Y(e, t) {
      var a = e;
      x(a, t), se(a, t);
    }
    function se(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        In(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Qh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ti(f), x(f, p);
          }
        }
      }
    }
    function $e(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ka(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Nr(e._wrapperState.initialValue) : e.defaultValue !== Nr(a) && (e.defaultValue = Nr(a)));
    }
    var he = !1, We = !1, Ct = !1;
    function kt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || We || (We = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ct || (Ct = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !he && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), he = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Nr(_a(t.value)));
    }
    var Kt = Array.isArray;
    function pt(e) {
      return Kt(e);
    }
    var Xt;
    Xt = !1;
    function yn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Dl = ["value", "defaultValue"];
    function ns(e) {
      {
        es("select", e);
        for (var t = 0; t < Dl.length; t++) {
          var a = Dl[t];
          if (e[a] != null) {
            var i = pt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yn());
          }
        }
      }
    }
    function qi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var m = 0; m < u.length; m++) {
          var R = f.hasOwnProperty("$" + u[m].value);
          u[m].selected !== R && (u[m].selected = R), R && i && (u[m].defaultSelected = !0);
        }
      } else {
        for (var T = Nr(_a(a)), L = null, O = 0; O < u.length; O++) {
          if (u[O].value === T) {
            u[O].selected = !0, i && (u[O].defaultSelected = !0);
            return;
          }
          L === null && !u[O].disabled && (L = u[O]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function rs(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function hu(e, t) {
      var a = e;
      ns(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Xt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xt = !0);
    }
    function od(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? qi(a, !!t.multiple, i, !1) : t.defaultValue != null && qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function gc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? qi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? qi(a, !!t.multiple, t.defaultValue, !0) : qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function sd(e, t) {
      var a = e, i = t.value;
      i != null && qi(a, !!t.multiple, i, !1);
    }
    var Sv = !1;
    function cd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = st({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function fd(e, t) {
      var a = e;
      es("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Sv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Sv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (pt(u)) {
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
        initialValue: _a(i)
      };
    }
    function Ev(e, t) {
      var a = e, i = _a(t.value), u = _a(t.defaultValue);
      if (i != null) {
        var s = Nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Nr(u));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ty(e, t) {
      Ev(e, t);
    }
    var Qi = "http://www.w3.org/1999/xhtml", dd = "http://www.w3.org/1998/Math/MathML", pd = "http://www.w3.org/2000/svg";
    function vd(e) {
      switch (e) {
        case "svg":
          return pd;
        case "math":
          return dd;
        default:
          return Qi;
      }
    }
    function hd(e, t) {
      return e == null || e === Qi ? vd(t) : e === pd && t === "foreignObject" ? Qi : e;
    }
    var Rv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Sc, Tv = Rv(function(e, t) {
      if (e.namespaceURI === pd && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Gi = 3, An = 8, Ki = 9, md = 11, fo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, as = {
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
    }, is = {
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
    function wv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var bv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(is).forEach(function(e) {
      bv.forEach(function(t) {
        is[wv(t, e)] = is[e];
      });
    });
    function Ec(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(is.hasOwnProperty(e) && is[e]) ? t + "px" : (ca(t, e), ("" + t).trim());
    }
    var xv = /([A-Z])/g, _v = /^ms-/;
    function po(e) {
      return e.replace(xv, "-$1").toLowerCase().replace(_v, "-ms-");
    }
    var Dv = function() {
    };
    {
      var wy = /^(?:webkit|moz|o)[A-Z]/, by = /^-ms-/, kv = /-(.)/g, yd = /;\s*$/, wi = {}, mu = {}, Ov = !1, ls = !1, xy = function(e) {
        return e.replace(kv, function(t, a) {
          return a.toUpperCase();
        });
      }, Nv = function(e) {
        wi.hasOwnProperty(e) && wi[e] || (wi[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xy(e.replace(by, "ms-"))
        ));
      }, gd = function(e) {
        wi.hasOwnProperty(e) && wi[e] || (wi[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Sd = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(yd, "")));
      }, Lv = function(e, t) {
        Ov || (Ov = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Mv = function(e, t) {
        ls || (ls = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Dv = function(e, t) {
        e.indexOf("-") > -1 ? Nv(e) : wy.test(e) ? gd(e) : yd.test(t) && Sd(e, t), typeof t == "number" && (isNaN(t) ? Lv(e, t) : isFinite(t) || Mv(e, t));
      };
    }
    var Av = Dv;
    function _y(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : po(i)) + ":", t += Ec(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Av(i, t[i]);
          var s = Ec(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function zv(e) {
      var t = {};
      for (var a in e)
        for (var i = as[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ky(e, t) {
      {
        if (!t)
          return;
        var a = zv(e), i = zv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var m = f + "," + p;
            if (u[m])
              continue;
            u[m] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ai = {
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
    }, us = st({
      menuitem: !0
    }, ai), Fv = "__html";
    function Cc(e, t) {
      if (t) {
        if (us[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function kl(e, t) {
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
    var os = {
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
    }, Rc = {
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
    }, vo = {}, Oy = new RegExp("^(aria)-[" + de + "]*$"), ho = new RegExp("^(aria)[A-Z][" + de + "]*$");
    function Ed(e, t) {
      {
        if (xr.call(vo, t) && vo[t])
          return !0;
        if (ho.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Rc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vo[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), vo[t] = !0, !0;
        }
        if (Oy.test(t)) {
          var u = t.toLowerCase(), s = Rc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return vo[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), vo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ss(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Ed(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Cd(e, t) {
      kl(e, t) || ss(e, t);
    }
    var Rd = !1;
    function Tc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Rd && (Rd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yu = function() {
    };
    {
      var or = {}, Td = /^on./, wc = /^on[^A-Z]/, jv = new RegExp("^(aria)-[" + de + "]*$"), Hv = new RegExp("^(aria)[A-Z][" + de + "]*$");
      yu = function(e, t, a, i) {
        if (xr.call(or, t) && or[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), or[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), or[t] = !0, !0;
          if (Td.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), or[t] = !0, !0;
        } else if (Td.test(t))
          return wc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), or[t] = !0, !0;
        if (jv.test(t) || Hv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), or[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), or[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), or[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), or[t] = !0, !0;
        var m = an(t), R = m !== null && m.type === Yn;
        if (os.hasOwnProperty(u)) {
          var T = os[u];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), or[t] = !0, !0;
        } else if (!R && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), or[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, m, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), or[t] = !0, !0) : R ? !0 : cn(t, a, m, !1) ? (or[t] = !0, !1) : ((a === "false" || a === "true") && m !== null && m.type === Mn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), or[t] = !0), !0);
      };
    }
    var Pv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = yu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Bv(e, t, a) {
      kl(e, t) || Pv(e, t, a);
    }
    var wd = 1, bc = 2, Oa = 4, bd = wd | bc | Oa, gu = null;
    function Ny(e) {
      gu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gu = e;
    }
    function Ly() {
      gu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gu = null;
    }
    function cs(e) {
      return e === gu;
    }
    function xd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Gi ? t.parentNode : t;
    }
    var xc = null, Su = null, It = null;
    function _c(e) {
      var t = zo(e);
      if (t) {
        if (typeof xc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Qh(a);
          xc(t.stateNode, t.type, i);
        }
      }
    }
    function Dc(e) {
      xc = e;
    }
    function mo(e) {
      Su ? It ? It.push(e) : It = [e] : Su = e;
    }
    function Vv() {
      return Su !== null || It !== null;
    }
    function kc() {
      if (Su) {
        var e = Su, t = It;
        if (Su = null, It = null, _c(e), t)
          for (var a = 0; a < t.length; a++)
            _c(t[a]);
      }
    }
    var yo = function(e, t) {
      return e(t);
    }, fs = function() {
    }, Ol = !1;
    function $v() {
      var e = Vv();
      e && (fs(), kc());
    }
    function Iv(e, t, a) {
      if (Ol)
        return e(t, a);
      Ol = !0;
      try {
        return yo(e, t, a);
      } finally {
        Ol = !1, $v();
      }
    }
    function My(e, t, a) {
      yo = e, fs = a;
    }
    function Yv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Oc(e, t, a) {
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
          return !!(a.disabled && Yv(t));
        default:
          return !1;
      }
    }
    function Nl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Qh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Oc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ds = !1;
    if (Ln)
      try {
        var Eu = {};
        Object.defineProperty(Eu, "passive", {
          get: function() {
            ds = !0;
          }
        }), window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
      } catch {
        ds = !1;
      }
    function Nc(e, t, a, i, u, s, f, p, m) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var Lc = Nc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var _d = document.createElement("react");
      Lc = function(t, a, i, u, s, f, p, m, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), L = !1, O = !0, H = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          _d.removeEventListener(G, Ie, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var Ee = Array.prototype.slice.call(arguments, 3);
        function Ie() {
          L = !0, Q(), a.apply(i, Ee), O = !1;
        }
        var Ue, _t = !1, Rt = !1;
        function U(z) {
          if (Ue = z.error, _t = !0, Ue === null && z.colno === 0 && z.lineno === 0 && (Rt = !0), z.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), _d.addEventListener(G, Ie, !1), T.initEvent(G, !1, !1), _d.dispatchEvent(T), $ && Object.defineProperty(window, "event", $), L && O && (_t ? Rt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", U), !L)
          return Q(), Nc.apply(this, arguments);
      };
    }
    var Wv = Lc, go = !1, Mc = null, So = !1, bi = null, qv = {
      onError: function(e) {
        go = !0, Mc = e;
      }
    };
    function Ll(e, t, a, i, u, s, f, p, m) {
      go = !1, Mc = null, Wv.apply(qv, arguments);
    }
    function xi(e, t, a, i, u, s, f, p, m) {
      if (Ll.apply(this, arguments), go) {
        var R = vs();
        So || (So = !0, bi = R);
      }
    }
    function ps() {
      if (So) {
        var e = bi;
        throw So = !1, bi = null, e;
      }
    }
    function Xi() {
      return go;
    }
    function vs() {
      if (go) {
        var e = Mc;
        return go = !1, Mc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Eo(e) {
      return e._reactInternals;
    }
    function Ay(e) {
      return e._reactInternals !== void 0;
    }
    function Cu(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), ii = (
      /*                */
      1
    ), bn = (
      /*                    */
      2
    ), wt = (
      /*                       */
      4
    ), Na = (
      /*                */
      16
    ), li = (
      /*                 */
      32
    ), on = (
      /*                     */
      64
    ), je = (
      /*                   */
      128
    ), Qr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), qn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Un = (
      /*                   */
      8192
    ), Co = (
      /*             */
      16384
    ), Qv = (
      /*               */
      32767
    ), hs = (
      /*                   */
      32768
    ), Kr = (
      /*                */
      65536
    ), Ac = (
      /* */
      131072
    ), _i = (
      /*                       */
      1048576
    ), Ro = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), Uc = (
      /*                */
      8388608
    ), Ml = (
      /*               */
      16777216
    ), Di = (
      /*              */
      33554432
    ), Al = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      wt | qn | 0
    ), Ul = bn | wt | Na | li | Cn | La | Un, zl = wt | on | Cn | Un, Zi = Gr | Na, zn = Ji | Uc | Ro, Ma = y.ReactCurrentOwner;
    function va(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bn | La)) !== He && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function ki(e) {
      if (e.tag === ge) {
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
    function Oi(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function Ru(e) {
      return va(e) === e;
    }
    function Gv(e) {
      {
        var t = Ma.current;
        if (t !== null && t.tag === j) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Eo(e);
      return u ? va(u) === u : !1;
    }
    function zc(e) {
      if (va(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fc(e) {
      var t = e.alternate;
      if (!t) {
        var a = va(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var m = s.child; m; ) {
            if (m === i)
              return zc(s), e;
            if (m === u)
              return zc(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var R = !1, T = s.child; T; ) {
            if (T === i) {
              R = !0, i = s, u = f;
              break;
            }
            if (T === u) {
              R = !0, u = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = f.child; T; ) {
              if (T === i) {
                R = !0, i = f, u = s;
                break;
              }
              if (T === u) {
                R = !0, u = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Xr(e) {
      var t = Fc(e);
      return t !== null ? Jr(t) : null;
    }
    function Jr(e) {
      if (e.tag === ue || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Jr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vn(e) {
      var t = Fc(e);
      return t !== null ? Aa(t) : null;
    }
    function Aa(e) {
      if (e.tag === ue || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== le) {
          var a = Aa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dd = h.unstable_scheduleCallback, Kv = h.unstable_cancelCallback, kd = h.unstable_shouldYield, Od = h.unstable_requestPaint, Qn = h.unstable_now, jc = h.unstable_getCurrentPriorityLevel, ms = h.unstable_ImmediatePriority, Fl = h.unstable_UserBlockingPriority, el = h.unstable_NormalPriority, Uy = h.unstable_LowPriority, Tu = h.unstable_IdlePriority, Hc = h.unstable_yieldValue, Xv = h.unstable_setDisableYieldValue, wu = null, xn = null, Se = null, ha = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function To(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ke && (e = st({}, e, {
          getLaneLabelMap: bu,
          injectProfilingHooks: Ua
        })), wu = t.inject(e), xn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Nd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(wu, e, t);
        } catch (a) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ld(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & je) === je;
          if (qe) {
            var i;
            switch (t) {
              case Lr:
                i = ms;
                break;
              case Li:
                i = Fl;
                break;
              case za:
                i = el;
                break;
              case Fa:
                i = Tu;
                break;
              default:
                i = el;
                break;
            }
            xn.onCommitFiberRoot(wu, e, i, a);
          }
        } catch (u) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Md(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(wu, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ad(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(wu, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof Hc == "function" && (Xv(e), w(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(wu, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ua(e) {
      Se = e;
    }
    function bu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Du; a++) {
          var i = th(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ud(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function zd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function ma(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function ya() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function Fd(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Jv() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function tl(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function jl() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function Pc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function Zv() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function ys(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function jd() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function gs(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function Ni(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function Ss(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function Es() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function xu(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function Hd() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function _u(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function eh() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Bc() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function Sn(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Vc(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function Cs(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var Pe = (
      /*                         */
      0
    ), gt = (
      /*                 */
      1
    ), zt = (
      /*                    */
      2
    ), Jt = (
      /*               */
      8
    ), Ft = (
      /*              */
      16
    ), Fn = Math.clz32 ? Math.clz32 : Rs, er = Math.log, $c = Math.LN2;
    function Rs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (er(t) / $c | 0) | 0;
    }
    var Du = 31, ee = (
      /*                        */
      0
    ), Mt = (
      /*                          */
      0
    ), Ge = (
      /*                        */
      1
    ), Hl = (
      /*    */
      2
    ), ui = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), _n = (
      /*                     */
      16
    ), nl = (
      /*                */
      32
    ), Pl = (
      /*                       */
      4194240
    ), ku = (
      /*                        */
      64
    ), Ic = (
      /*                        */
      128
    ), Yc = (
      /*                        */
      256
    ), Wc = (
      /*                        */
      512
    ), qc = (
      /*                        */
      1024
    ), Qc = (
      /*                        */
      2048
    ), Gc = (
      /*                        */
      4096
    ), Kc = (
      /*                        */
      8192
    ), Xc = (
      /*                        */
      16384
    ), Ou = (
      /*                       */
      32768
    ), Jc = (
      /*                       */
      65536
    ), wo = (
      /*                       */
      131072
    ), bo = (
      /*                       */
      262144
    ), Zc = (
      /*                       */
      524288
    ), Ts = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), ws = (
      /*                            */
      130023424
    ), Nu = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), bs = (
      /*                             */
      16777216
    ), nf = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), Pd = Nu, xs = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), _s = (
      /*               */
      268435456
    ), Lu = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function th(e) {
      {
        if (e & Ge)
          return "Sync";
        if (e & Hl)
          return "InputContinuousHydration";
        if (e & ui)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & _n)
          return "Default";
        if (e & nl)
          return "TransitionHydration";
        if (e & Pl)
          return "Transition";
        if (e & ws)
          return "Retry";
        if (e & xs)
          return "SelectiveHydration";
        if (e & _s)
          return "IdleHydration";
        if (e & Lu)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var tn = -1, Mu = ku, af = Nu;
    function Ds(e) {
      switch (Bl(e)) {
        case Ge:
          return Ge;
        case Hl:
          return Hl;
        case ui:
          return ui;
        case Tr:
          return Tr;
        case _n:
          return _n;
        case nl:
          return nl;
        case ku:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Ou:
        case Jc:
        case wo:
        case bo:
        case Zc:
        case Ts:
        case ef:
          return e & Pl;
        case Nu:
        case tf:
        case bs:
        case nf:
        case rf:
          return e & ws;
        case xs:
          return xs;
        case _s:
          return _s;
        case Lu:
          return Lu;
        case ga:
          return ga;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function lf(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, u = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== ee) {
        var p = f & ~u;
        if (p !== ee)
          i = Ds(p);
        else {
          var m = f & s;
          m !== ee && (i = Ds(m));
        }
      } else {
        var R = a & ~u;
        R !== ee ? i = Ds(R) : s !== ee && (i = Ds(s));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ee) {
        var T = Bl(i), L = Bl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === _n && (L & Pl) !== ee
        )
          return t;
      }
      (i & ui) !== ee && (i |= a & _n);
      var O = e.entangledLanes;
      if (O !== ee)
        for (var H = e.entanglements, $ = i & O; $ > 0; ) {
          var Q = jn($), Ee = 1 << Q;
          i |= H[Q], $ &= ~Ee;
        }
      return i;
    }
    function oi(e, t) {
      for (var a = e.eventTimes, i = tn; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vd(e, t) {
      switch (e) {
        case Ge:
        case Hl:
        case ui:
          return t + 250;
        case Tr:
        case _n:
        case nl:
        case ku:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Ou:
        case Jc:
        case wo:
        case bo:
        case Zc:
        case Ts:
        case ef:
          return t + 5e3;
        case Nu:
        case tf:
        case bs:
        case nf:
        case rf:
          return tn;
        case xs:
        case _s:
        case Lu:
        case ga:
          return tn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), tn;
      }
    }
    function uf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), m = 1 << p, R = s[p];
        R === tn ? ((m & i) === ee || (m & u) !== ee) && (s[p] = Vd(m, t)) : R <= t && (e.expiredLanes |= m), f &= ~m;
      }
    }
    function nh(e) {
      return Ds(e.pendingLanes);
    }
    function of(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== ee ? t : t & ga ? ga : ee;
    }
    function rh(e) {
      return (e & Ge) !== ee;
    }
    function ks(e) {
      return (e & Bd) !== ee;
    }
    function Au(e) {
      return (e & ws) === e;
    }
    function $d(e) {
      var t = Ge | ui | _n;
      return (e & t) === ee;
    }
    function Id(e) {
      return (e & Pl) === e;
    }
    function sf(e, t) {
      var a = Hl | ui | Tr | _n;
      return (t & a) !== ee;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Yd(e) {
      return (e & Pl) !== ee;
    }
    function Wd() {
      var e = Mu;
      return Mu <<= 1, (Mu & Pl) === ee && (Mu = ku), e;
    }
    function ih() {
      var e = af;
      return af <<= 1, (af & ws) === ee && (af = Nu), e;
    }
    function Bl(e) {
      return e & -e;
    }
    function Os(e) {
      return Bl(e);
    }
    function jn(e) {
      return 31 - Fn(e);
    }
    function sr(e) {
      return jn(e);
    }
    function ea(e, t) {
      return (e & t) !== ee;
    }
    function Uu(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function lh(e) {
      return e;
    }
    function uh(e, t) {
      return e !== Mt && e < t ? e : t;
    }
    function Ls(e) {
      for (var t = [], a = 0; a < Du; a++)
        t.push(e);
      return t;
    }
    function xo(e, t, a) {
      e.pendingLanes |= t, t !== Lu && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, u = sr(t);
      i[u] = a;
    }
    function oh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = tn, i &= ~s;
      }
    }
    function cf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), m = 1 << p;
        i[p] = ee, u[p] = tn, s[p] = tn, f &= ~m;
      }
    }
    function ff(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Gd(e, t) {
      var a = Bl(t), i;
      switch (a) {
        case ui:
          i = Hl;
          break;
        case _n:
          i = Tr;
          break;
        case ku:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Ou:
        case Jc:
        case wo:
        case bo:
        case Zc:
        case Ts:
        case ef:
        case Nu:
        case tf:
        case bs:
        case nf:
        case rf:
          i = nl;
          break;
        case Lu:
          i = _s;
          break;
        default:
          i = Mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Mt ? Mt : i;
    }
    function Ms(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = sr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function sh(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = sr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var m = p.alternate;
            (m === null || !i.has(m)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Kd(e, t) {
      return null;
    }
    var Lr = Ge, Li = ui, za = _n, Fa = Lu, As = Mt;
    function ja() {
      return As;
    }
    function Hn(e) {
      As = e;
    }
    function ch(e, t) {
      var a = As;
      try {
        return As = e, t();
      } finally {
        As = a;
      }
    }
    function fh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Us(e, t) {
      return e > t ? e : t;
    }
    function tr(e, t) {
      return e !== 0 && e < t;
    }
    function dh(e) {
      var t = Bl(e);
      return tr(Lr, t) ? tr(Li, t) ? ks(t) ? za : Fa : Li : Lr;
    }
    function df(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var zs;
    function wr(e) {
      zs = e;
    }
    function zy(e) {
      zs(e);
    }
    var xe;
    function _o(e) {
      xe = e;
    }
    var pf;
    function ph(e) {
      pf = e;
    }
    var vh;
    function Fs(e) {
      vh = e;
    }
    var js;
    function Xd(e) {
      js = e;
    }
    var vf = !1, Hs = [], rl = null, Mi = null, Ai = null, Dn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Ar = [], hh = [
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
    function mh(e) {
      return hh.indexOf(e) > -1;
    }
    function si(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Jd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          rl = null;
          break;
        case "dragenter":
        case "dragleave":
          Mi = null;
          break;
        case "mouseover":
        case "mouseout":
          Ai = null;
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
          Mr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = si(t, a, i, u, s);
        if (t !== null) {
          var p = zo(t);
          p !== null && xe(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var m = e.targetContainers;
      return u !== null && m.indexOf(u) === -1 && m.push(u), e;
    }
    function Fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return rl = ta(rl, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Mi = ta(Mi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ai = ta(Ai, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var m = u, R = m.pointerId;
          return Dn.set(R, ta(Dn.get(R) || null, e, t, a, i, m)), !0;
        }
        case "gotpointercapture": {
          var T = u, L = T.pointerId;
          return Mr.set(L, ta(Mr.get(L) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Zd(e) {
      var t = Xs(e.target);
      if (t !== null) {
        var a = va(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ge) {
            var u = ki(a);
            if (u !== null) {
              e.blockedOn = u, js(e.priority, function() {
                pf(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (df(s)) {
              e.blockedOn = Oi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function yh(e) {
      for (var t = vh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ar.length && tr(t, Ar[i].priority); i++)
        ;
      Ar.splice(i, 0, a), i === 0 && Zd(a);
    }
    function Ps(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ko(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ny(s), u.target.dispatchEvent(s), Ly();
        } else {
          var f = zo(i);
          return f !== null && xe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ep(e, t, a) {
      Ps(e) && a.delete(t);
    }
    function jy() {
      vf = !1, rl !== null && Ps(rl) && (rl = null), Mi !== null && Ps(Mi) && (Mi = null), Ai !== null && Ps(Ai) && (Ai = null), Dn.forEach(ep), Mr.forEach(ep);
    }
    function Vl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, jy)));
    }
    function zu(e) {
      if (Hs.length > 0) {
        Vl(Hs[0], e);
        for (var t = 1; t < Hs.length; t++) {
          var a = Hs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      rl !== null && Vl(rl, e), Mi !== null && Vl(Mi, e), Ai !== null && Vl(Ai, e);
      var i = function(p) {
        return Vl(p, e);
      };
      Dn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Ar.length; u++) {
        var s = Ar[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ar.length > 0; ) {
        var f = Ar[0];
        if (f.blockedOn !== null)
          break;
        Zd(f), f.blockedOn === null && Ar.shift();
      }
    }
    var cr = y.ReactCurrentBatchConfig, bt = !0;
    function Gn(e) {
      bt = !!e;
    }
    function Pn() {
      return bt;
    }
    function fr(e, t, a) {
      var i = hf(t), u;
      switch (i) {
        case Lr:
          u = Sa;
          break;
        case Li:
          u = Do;
          break;
        case za:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Sa(e, t, a, i) {
      var u = ja(), s = cr.transition;
      cr.transition = null;
      try {
        Hn(Lr), kn(e, t, a, i);
      } finally {
        Hn(u), cr.transition = s;
      }
    }
    function Do(e, t, a, i) {
      var u = ja(), s = cr.transition;
      cr.transition = null;
      try {
        Hn(Li), kn(e, t, a, i);
      } finally {
        Hn(u), cr.transition = s;
      }
    }
    function kn(e, t, a, i) {
      bt && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var u = ko(e, t, a, i);
      if (u === null) {
        ng(e, t, i, Ui, a), Jd(e, i);
        return;
      }
      if (Fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Jd(e, i), t & Oa && mh(e)) {
        for (; u !== null; ) {
          var s = zo(u);
          s !== null && zy(s);
          var f = ko(e, t, a, i);
          if (f === null && ng(e, t, i, Ui, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ng(e, t, i, null, a);
    }
    var Ui = null;
    function ko(e, t, a, i) {
      Ui = null;
      var u = xd(i), s = Xs(u);
      if (s !== null) {
        var f = va(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ge) {
            var m = ki(f);
            if (m !== null)
              return m;
            s = null;
          } else if (p === B) {
            var R = f.stateNode;
            if (df(R))
              return Oi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ui = s, null;
    }
    function hf(e) {
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
          return Lr;
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
          return Li;
        case "message": {
          var t = jc();
          switch (t) {
            case ms:
              return Lr;
            case Fl:
              return Li;
            case el:
            case Uy:
              return za;
            case Tu:
              return Fa;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function Vs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function tp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Oo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, No = null, Fu = null;
    function $l(e) {
      return Ea = e, No = $s(), !0;
    }
    function mf() {
      Ea = null, No = null, Fu = null;
    }
    function al() {
      if (Fu)
        return Fu;
      var e, t = No, a = t.length, i, u = $s(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Fu = u.slice(e, p), Fu;
    }
    function $s() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function Il(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Lo() {
      return !0;
    }
    function Is() {
      return !1;
    }
    function br(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var m = e[p];
            m ? this[p] = m(s) : this[p] = s[p];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = Lo : this.isDefaultPrevented = Is, this.isPropagationStopped = Is, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Lo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Lo);
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
        isPersistent: Lo
      }), t;
    }
    var Bn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, zi = br(Bn), Ur = st({}, Bn, {
      view: 0,
      detail: 0
    }), ra = br(Ur), yf, Ys, ju;
    function Hy(e) {
      e !== ju && (ju && e.type === "mousemove" ? (yf = e.screenX - ju.screenX, Ys = e.screenY - ju.screenY) : (yf = 0, Ys = 0), ju = e);
    }
    var ci = st({}, Ur, {
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
      getModifierState: hn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Hy(e), yf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ys;
      }
    }), np = br(ci), rp = st({}, ci, {
      dataTransfer: 0
    }), Hu = br(rp), ap = st({}, Ur, {
      relatedTarget: 0
    }), il = br(ap), gh = st({}, Bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sh = br(gh), ip = st({}, Bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), gf = br(ip), Py = st({}, Bn, {
      data: 0
    }), Eh = br(Py), Ch = Eh, Rh = {
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
    }, Pu = {
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
    function By(e) {
      if (e.key) {
        var t = Rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Il(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Pu[e.keyCode] || "Unidentified" : "";
    }
    var Mo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Mo[e];
      return i ? !!a[i] : !1;
    }
    function hn(e) {
      return Th;
    }
    var Vy = st({}, Ur, {
      key: By,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Il(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), wh = br(Vy), $y = st({}, ci, {
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
    }), bh = br($y), xh = st({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), _h = br(xh), Iy = st({}, Bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = br(Iy), lp = st({}, ci, {
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
    }), Yy = br(lp), Yl = [9, 13, 27, 32], Ws = 229, ll = Ln && "CompositionEvent" in window, Wl = null;
    Ln && "documentMode" in document && (Wl = document.documentMode);
    var up = Ln && "TextEvent" in window && !Wl, Sf = Ln && (!ll || Wl && Wl > 8 && Wl <= 11), Dh = 32, Ef = String.fromCharCode(Dh);
    function Wy() {
      mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), mt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var op = !1;
    function kh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Cf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Rf(e, t) {
      return e === "keydown" && t.keyCode === Ws;
    }
    function sp(e, t) {
      switch (e) {
        case "keyup":
          return Yl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ws;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Tf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function cp(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function wf(e, t, a, i, u) {
      var s, f;
      if (ll ? s = Cf(t) : ql ? sp(t, i) && (s = "onCompositionEnd") : Rf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sf && !cp(i) && (!ql && s === "onCompositionStart" ? ql = $l(u) : s === "onCompositionEnd" && ql && (f = al()));
      var p = Uh(a, s);
      if (p.length > 0) {
        var m = new Eh(s, t, null, i, u);
        if (e.push({
          event: m,
          listeners: p
        }), f)
          m.data = f;
        else {
          var R = Tf(i);
          R !== null && (m.data = R);
        }
      }
    }
    function fp(e, t) {
      switch (e) {
        case "compositionend":
          return Tf(t);
        case "keypress":
          var a = t.which;
          return a !== Dh ? null : (op = !0, Ef);
        case "textInput":
          var i = t.data;
          return i === Ef && op ? null : i;
        default:
          return null;
      }
    }
    function bf(e, t) {
      if (ql) {
        if (e === "compositionend" || !ll && sp(e, t)) {
          var a = al();
          return mf(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!kh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Sf && !cp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Oh(e, t, a, i, u) {
      var s;
      if (up ? s = fp(t, i) : s = bf(t, i), !s)
        return null;
      var f = Uh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ch("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function qy(e, t, a, i, u, s, f) {
      wf(e, t, a, i, u), Oh(e, t, a, i, u);
    }
    var xf = {
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
    function Nh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xf[e.type] : t === "textarea";
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
    function qs(e) {
      if (!Ln)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Qy() {
      mt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Qs(e, t, a, i) {
      mo(i);
      var u = Uh(t, "onChange");
      if (u.length > 0) {
        var s = new zi("onChange", "change", null, a, i);
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
      Qs(t, r, e, xd(e)), Iv(c, t);
    }
    function c(e) {
      hC(e, 0);
    }
    function d(e) {
      var t = Lf(e);
      if (Ti(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    Ln && (b = qs("input") && (!document.documentMode || document.documentMode > 9));
    function k(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", re);
    }
    function V() {
      n && (n.detachEvent("onpropertychange", re), n = null, r = null);
    }
    function re(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (V(), k(t, a)) : e === "focusout" && V();
    }
    function te(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function Te(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return d(t);
    }
    function Le(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function On(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || $e(e, "number", e.value);
    }
    function A(e, t, a, i, u, s, f) {
      var p = a ? Lf(a) : window, m, R;
      if (l(p) ? m = E : Nh(p) ? b ? m = Le : (m = te, R = ae) : Te(p) && (m = ke), m) {
        var T = m(t, a);
        if (T) {
          Qs(e, T, i, u);
          return;
        }
      }
      R && R(t, p, a), t === "focusout" && On(p);
    }
    function N() {
      Wt("onMouseEnter", ["mouseout", "mouseover"]), Wt("onMouseLeave", ["mouseout", "mouseover"]), Wt("onPointerEnter", ["pointerout", "pointerover"]), Wt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function F(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (p && !cs(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (Xs(R) || bp(R)))
          return;
      }
      if (!(!m && !p)) {
        var T;
        if (u.window === u)
          T = u;
        else {
          var L = u.ownerDocument;
          L ? T = L.defaultView || L.parentWindow : T = window;
        }
        var O, H;
        if (m) {
          var $ = i.relatedTarget || i.toElement;
          if (O = a, H = $ ? Xs($) : null, H !== null) {
            var Q = va(H);
            (H !== Q || H.tag !== ue && H.tag !== ne) && (H = null);
          }
        } else
          O = null, H = a;
        if (O !== H) {
          var Ee = np, Ie = "onMouseLeave", Ue = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ee = bh, Ie = "onPointerLeave", Ue = "onPointerEnter", _t = "pointer");
          var Rt = O == null ? T : Lf(O), U = H == null ? T : Lf(H), G = new Ee(Ie, _t + "leave", O, i, u);
          G.target = Rt, G.relatedTarget = U;
          var z = null, ie = Xs(u);
          if (ie === a) {
            var be = new Ee(Ue, _t + "enter", H, i, u);
            be.target = U, be.relatedTarget = Rt, z = be;
          }
          tb(e, G, z, O, H);
        }
      }
    }
    function ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : ce;
    function Be(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!xr.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Kn(e, t) {
      for (var a = Ye(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Gi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ye(tt(a));
      }
    }
    function jt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ql(e, u, s, f, p);
    }
    function Ql(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, m = 0, R = 0, T = e, L = null;
      e: for (; ; ) {
        for (var O = null; T === t && (a === 0 || T.nodeType === Gi) && (f = s + a), T === i && (u === 0 || T.nodeType === Gi) && (p = s + u), T.nodeType === Gi && (s += T.nodeValue.length), (O = T.firstChild) !== null; )
          L = T, T = O;
        for (; ; ) {
          if (T === e)
            break e;
          if (L === t && ++m === a && (f = s), L === i && ++R === u && (p = s), (O = T.nextSibling) !== null)
            break;
          T = L, L = T.parentNode;
        }
        T = O;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Gy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var m = p;
          p = f, f = m;
        }
        var R = Kn(e, f), T = Kn(e, p);
        if (R && T) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var L = a.createRange();
          L.setStart(R.node, R.offset), u.removeAllRanges(), f > p ? (u.addRange(L), u.extend(T.node, T.offset)) : (L.setEnd(T.node, T.offset), u.addRange(L));
        }
      }
    }
    function rC(e) {
      return e && e.nodeType === Gi;
    }
    function aC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : rC(e) ? !1 : rC(t) ? aC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Fw(e) {
      return e && e.ownerDocument && aC(e.ownerDocument.documentElement, e);
    }
    function jw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function iC() {
      for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
        if (jw(t))
          e = t.contentWindow;
        else
          return t;
        t = ka(e.document);
      }
      return t;
    }
    function Ky(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hw() {
      var e = iC();
      return {
        focusedElem: e,
        selectionRange: Ky(e) ? Bw(e) : null
      };
    }
    function Pw(e) {
      var t = iC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Fw(a)) {
        i !== null && Ky(a) && Vw(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Bw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = jt(e), t || {
        start: 0,
        end: 0
      };
    }
    function Vw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Gy(e, t);
    }
    var $w = Ln && "documentMode" in document && document.documentMode <= 11;
    function Iw() {
      mt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var _f = null, Xy = null, dp = null, Jy = !1;
    function Yw(e) {
      if ("selectionStart" in e && Ky(e))
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
    function Ww(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function lC(e, t, a) {
      var i = Ww(a);
      if (!(Jy || _f == null || _f !== ka(i))) {
        var u = Yw(_f);
        if (!dp || !Be(dp, u)) {
          dp = u;
          var s = Uh(Xy, "onSelect");
          if (s.length > 0) {
            var f = new zi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = _f;
          }
        }
      }
    }
    function qw(e, t, a, i, u, s, f) {
      var p = a ? Lf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Nh(p) || p.contentEditable === "true") && (_f = p, Xy = a, dp = null);
          break;
        case "focusout":
          _f = null, Xy = null, dp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Jy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jy = !1, lC(e, i, u);
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
          if ($w)
            break;
        // falls through
        case "keydown":
        case "keyup":
          lC(e, i, u);
      }
    }
    function Lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = {
      animationend: Lh("Animation", "AnimationEnd"),
      animationiteration: Lh("Animation", "AnimationIteration"),
      animationstart: Lh("Animation", "AnimationStart"),
      transitionend: Lh("Transition", "TransitionEnd")
    }, Zy = {}, uC = {};
    Ln && (uC = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Mh(e) {
      if (Zy[e])
        return Zy[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in uC)
          return Zy[e] = t[a];
      return e;
    }
    var oC = Mh("animationend"), sC = Mh("animationiteration"), cC = Mh("animationstart"), fC = Mh("transitionend"), dC = /* @__PURE__ */ new Map(), pC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ao(e, t) {
      dC.set(e, t), mt(t, [e]);
    }
    function Qw() {
      for (var e = 0; e < pC.length; e++) {
        var t = pC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ao(a, "on" + i);
      }
      Ao(oC, "onAnimationEnd"), Ao(sC, "onAnimationIteration"), Ao(cC, "onAnimationStart"), Ao("dblclick", "onDoubleClick"), Ao("focusin", "onFocus"), Ao("focusout", "onBlur"), Ao(fC, "onTransitionEnd");
    }
    function Gw(e, t, a, i, u, s, f) {
      var p = dC.get(t);
      if (p !== void 0) {
        var m = zi, R = t;
        switch (t) {
          case "keypress":
            if (Il(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            m = wh;
            break;
          case "focusin":
            R = "focus", m = il;
            break;
          case "focusout":
            R = "blur", m = il;
            break;
          case "beforeblur":
          case "afterblur":
            m = il;
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
            m = np;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Hu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = _h;
            break;
          case oC:
          case sC:
          case cC:
            m = Sh;
            break;
          case fC:
            m = Ha;
            break;
          case "scroll":
            m = ra;
            break;
          case "wheel":
            m = Yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = bh;
            break;
        }
        var T = (s & Oa) !== 0;
        {
          var L = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = Zw(a, p, i.type, T, L);
          if (O.length > 0) {
            var H = new m(p, R, null, i, u);
            e.push({
              event: H,
              listeners: O
            });
          }
        }
      }
    }
    Qw(), N(), Qy(), Iw(), Wy();
    function Kw(e, t, a, i, u, s, f) {
      Gw(e, t, a, i, u, s);
      var p = (s & bd) === 0;
      p && (F(e, t, a, i, u), A(e, t, a, i, u), qw(e, t, a, i, u), qy(e, t, a, i, u));
    }
    var pp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(pp));
    function vC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, xi(i, t, void 0, e), e.currentTarget = null;
    }
    function Xw(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, m = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          vC(e, m, p), i = f;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], L = T.instance, O = T.currentTarget, H = T.listener;
          if (L !== i && e.isPropagationStopped())
            return;
          vC(e, H, O), i = L;
        }
    }
    function hC(e, t) {
      for (var a = (t & Oa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        Xw(s, f, a);
      }
      ps();
    }
    function Jw(e, t, a, i, u) {
      var s = xd(a), f = [];
      Kw(f, e, i, a, s, t), hC(f, t);
    }
    function En(e, t) {
      eg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Dx(t), u = nb(e);
      i.has(u) || (mC(t, e, bc, a), i.add(u));
    }
    function tg(e, t, a) {
      eg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Oa), mC(a, e, i, t);
    }
    var Ah = "_reactListening" + Math.random().toString(36).slice(2);
    function vp(e) {
      if (!e[Ah]) {
        e[Ah] = !0, ct.forEach(function(a) {
          a !== "selectionchange" && (eg.has(a) || tg(a, !1, e), tg(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[Ah] || (t[Ah] = !0, tg("selectionchange", !1, t)));
      }
    }
    function mC(e, t, a, i, u) {
      var s = fr(e, t, a), f = void 0;
      ds && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? tp(e, t, s, f) : na(e, t, s) : f !== void 0 ? Oo(e, t, s, f) : Vs(e, t, s);
    }
    function yC(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function ng(e, t, a, i, u) {
      var s = i;
      if (!(t & wd) && !(t & bc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var m = p.tag;
            if (m === B || m === le) {
              var R = p.stateNode.containerInfo;
              if (yC(R, f))
                break;
              if (m === le)
                for (var T = p.return; T !== null; ) {
                  var L = T.tag;
                  if (L === B || L === le) {
                    var O = T.stateNode.containerInfo;
                    if (yC(O, f))
                      return;
                  }
                  T = T.return;
                }
              for (; R !== null; ) {
                var H = Xs(R);
                if (H === null)
                  return;
                var $ = H.tag;
                if ($ === ue || $ === ne) {
                  p = s = H;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Iv(function() {
        return Jw(e, t, a, s);
      });
    }
    function hp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Zw(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, m = [], R = e, T = null; R !== null; ) {
        var L = R, O = L.stateNode, H = L.tag;
        if (H === ue && O !== null && (T = O, p !== null)) {
          var $ = Nl(R, p);
          $ != null && m.push(hp(R, $, T));
        }
        if (u)
          break;
        R = R.return;
      }
      return m;
    }
    function Uh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var m = f, R = Nl(u, a);
          R != null && i.unshift(hp(u, R, m));
          var T = Nl(u, t);
          T != null && i.push(hp(u, T, m));
        }
        u = u.return;
      }
      return i;
    }
    function kf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function eb(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = kf(s))
        u++;
      for (var f = 0, p = i; p; p = kf(p))
        f++;
      for (; u - f > 0; )
        a = kf(a), u--;
      for (; f - u > 0; )
        i = kf(i), f--;
      for (var m = u; m--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = kf(a), i = kf(i);
      }
      return null;
    }
    function gC(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var m = p, R = m.alternate, T = m.stateNode, L = m.tag;
        if (R !== null && R === i)
          break;
        if (L === ue && T !== null) {
          var O = T;
          if (u) {
            var H = Nl(p, s);
            H != null && f.unshift(hp(p, H, O));
          } else if (!u) {
            var $ = Nl(p, s);
            $ != null && f.push(hp(p, $, O));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function tb(e, t, a, i, u) {
      var s = i && u ? eb(i, u) : null;
      i !== null && gC(e, t, i, s, !1), u !== null && a !== null && gC(e, a, u, s, !0);
    }
    function nb(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, mp = "dangerouslySetInnerHTML", zh = "suppressContentEditableWarning", Uo = "suppressHydrationWarning", SC = "autoFocus", Gs = "children", Ks = "style", Fh = "__html", rg, jh, yp, EC, Hh, CC, RC;
    rg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, jh = function(e, t) {
      Cd(e, t), Tc(e, t), Bv(e, t, {
        registrationNameDependencies: ot,
        possibleRegistrationNames: ft
      });
    }, CC = Ln && !document.documentMode, yp = function(e, t, a) {
      if (!Pa) {
        var i = Ph(a), u = Ph(t);
        u !== i && (Pa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, EC = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Hh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, RC = function(e, t) {
      var a = e.namespaceURI === Qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rb = /\r\n?/g, ab = /\u0000|\uFFFD/g;
    function Ph(e) {
      Jn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rb, `
`).replace(ab, "");
    }
    function Bh(e, t, a, i) {
      var u = Ph(t), s = Ph(e);
      if (s !== u && (i && (Pa || (Pa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Me))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function TC(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function ib() {
    }
    function Vh(e) {
      e.onclick = ib;
    }
    function lb(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ks)
            f && Object.freeze(f), Uv(t, f);
          else if (s === mp) {
            var p = f ? f[Fh] : void 0;
            p != null && Tv(t, p);
          } else if (s === Gs)
            if (typeof f == "string") {
              var m = e !== "textarea" || f !== "";
              m && fo(t, f);
            } else typeof f == "number" && fo(t, "" + f);
          else s === zh || s === Uo || s === SC || (ot.hasOwnProperty(s) ? f != null && (typeof f != "function" && Hh(s, f), s === "onScroll" && En("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function ub(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ks ? Uv(e, f) : s === mp ? Tv(e, f) : s === Gs ? fo(e, f) : _r(e, s, f, i);
      }
    }
    function ob(e, t, a, i) {
      var u, s = TC(a), f, p = i;
      if (p === Qi && (p = vd(e)), p === Qi) {
        if (u = kl(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var R = m.firstChild;
          f = m.removeChild(R);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Qi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !xr.call(rg, e) && (rg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function sb(e, t) {
      return TC(t).createTextNode(e);
    }
    function cb(e, t, a, i) {
      var u = kl(t, a);
      jh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < pp.length; f++)
            En(pp[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ri(e, a), s = co(e, a), En("invalid", e);
          break;
        case "option":
          kt(e, a), s = a;
          break;
        case "select":
          hu(e, a), s = rs(e, a), En("invalid", e);
          break;
        case "textarea":
          fd(e, a), s = cd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Cc(t, s), lb(t, e, i, s, u), t) {
        case "input":
          ni(e), P(e, a, !1);
          break;
        case "textarea":
          ni(e), Cv(e);
          break;
        case "option":
          un(e, a);
          break;
        case "select":
          od(e, a);
          break;
        default:
          typeof s.onClick == "function" && Vh(e);
          break;
      }
    }
    function fb(e, t, a, i, u) {
      jh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = co(e, a), p = co(e, i), s = [];
          break;
        case "select":
          f = rs(e, a), p = rs(e, i), s = [];
          break;
        case "textarea":
          f = cd(e, a), p = cd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Vh(e);
          break;
      }
      Cc(t, p);
      var m, R, T = null;
      for (m in f)
        if (!(p.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
          if (m === Ks) {
            var L = f[m];
            for (R in L)
              L.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else m === mp || m === Gs || m === zh || m === Uo || m === SC || (ot.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in p) {
        var O = p[m], H = f != null ? f[m] : void 0;
        if (!(!p.hasOwnProperty(m) || O === H || O == null && H == null))
          if (m === Ks)
            if (O && Object.freeze(O), H) {
              for (R in H)
                H.hasOwnProperty(R) && (!O || !O.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in O)
                O.hasOwnProperty(R) && H[R] !== O[R] && (T || (T = {}), T[R] = O[R]);
            } else
              T || (s || (s = []), s.push(m, T)), T = O;
          else if (m === mp) {
            var $ = O ? O[Fh] : void 0, Q = H ? H[Fh] : void 0;
            $ != null && Q !== $ && (s = s || []).push(m, $);
          } else m === Gs ? (typeof O == "string" || typeof O == "number") && (s = s || []).push(m, "" + O) : m === zh || m === Uo || (ot.hasOwnProperty(m) ? (O != null && (typeof O != "function" && Hh(m, O), m === "onScroll" && En("scroll", e)), !s && H !== O && (s = [])) : (s = s || []).push(m, O));
      }
      return T && (ky(T, p[Ks]), (s = s || []).push(Ks, T)), s;
    }
    function db(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && S(e, u);
      var s = kl(a, i), f = kl(a, u);
      switch (ub(e, t, s, f), a) {
        case "input":
          x(e, u);
          break;
        case "textarea":
          Ev(e, u);
          break;
        case "select":
          gc(e, u);
          break;
      }
    }
    function pb(e) {
      {
        var t = e.toLowerCase();
        return os.hasOwnProperty(t) && os[t] || null;
      }
    }
    function vb(e, t, a, i, u, s, f) {
      var p, m;
      switch (p = kl(t, a), jh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < pp.length; R++)
            En(pp[R], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ri(e, a), En("invalid", e);
          break;
        case "option":
          kt(e, a);
          break;
        case "select":
          hu(e, a), En("invalid", e);
          break;
        case "textarea":
          fd(e, a), En("invalid", e);
          break;
      }
      Cc(t, a);
      {
        m = /* @__PURE__ */ new Set();
        for (var T = e.attributes, L = 0; L < T.length; L++) {
          var O = T[L].name.toLowerCase();
          switch (O) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              m.add(T[L].name);
          }
        }
      }
      var H = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var Q = a[$];
          if ($ === Gs)
            typeof Q == "string" ? e.textContent !== Q && (a[Uo] !== !0 && Bh(e.textContent, Q, s, f), H = [Gs, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Uo] !== !0 && Bh(e.textContent, Q, s, f), H = [Gs, "" + Q]);
          else if (ot.hasOwnProperty($))
            Q != null && (typeof Q != "function" && Hh($, Q), $ === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ee = void 0, Ie = an($);
            if (a[Uo] !== !0) {
              if (!($ === zh || $ === Uo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === mp) {
                  var Ue = e.innerHTML, _t = Q ? Q[Fh] : void 0;
                  if (_t != null) {
                    var Rt = RC(e, _t);
                    Rt !== Ue && yp($, Ue, Rt);
                  }
                } else if ($ === Ks) {
                  if (m.delete($), CC) {
                    var U = _y(Q);
                    Ee = e.getAttribute("style"), U !== Ee && yp($, Ee, U);
                  }
                } else if (p)
                  m.delete($.toLowerCase()), Ee = ou(e, $, Q), Q !== Ee && yp($, Ee, Q);
                else if (!mn($, Ie, p) && !Zn($, Q, Ie, p)) {
                  var G = !1;
                  if (Ie !== null)
                    m.delete(Ie.attributeName), Ee = El(e, $, Q, Ie);
                  else {
                    var z = i;
                    if (z === Qi && (z = vd(t)), z === Qi)
                      m.delete($.toLowerCase());
                    else {
                      var ie = pb($);
                      ie !== null && ie !== $ && (G = !0, m.delete(ie)), m.delete($);
                    }
                    Ee = ou(e, $, Q);
                  }
                  var be = M;
                  !be && Q !== Ee && !G && yp($, Ee, Q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && a[Uo] !== !0 && EC(m), t) {
        case "input":
          ni(e), P(e, a, !0);
          break;
        case "textarea":
          ni(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Vh(e);
          break;
      }
      return H;
    }
    function hb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ag(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ug(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mb(e, t, a) {
      switch (t) {
        case "input":
          Y(e, a);
          return;
        case "textarea":
          Ty(e, a);
          return;
        case "select":
          sd(e, a);
          return;
      }
    }
    var gp = function() {
    }, Sp = function() {
    };
    {
      var yb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wC = [
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
      ], gb = wC.concat(["button"]), Sb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], bC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Sp = function(e, t) {
        var a = st({}, e || bC), i = {
          tag: t
        };
        return wC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Eb = function(e, t) {
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
            return Sb.indexOf(t) === -1;
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
      }, Cb = function(e, t) {
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
      }, xC = {};
      gp = function(e, t, a) {
        a = a || bC;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Eb(e, u) ? null : i, f = s ? null : Cb(e, a), p = s || f;
        if (p) {
          var m = p.tag, R = !!s + "|" + e + "|" + m;
          if (!xC[R]) {
            xC[R] = !0;
            var T = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var O = "";
              m === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, m, L, O);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, m);
          }
        }
      };
    }
    var $h = "suppressHydrationWarning", Ih = "$", Yh = "/$", Ep = "$?", Cp = "$!", Rb = "style", og = null, sg = null;
    function Tb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case md: {
          t = i === Ki ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : hd(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = hd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), m = Sp(null, p);
        return {
          namespace: a,
          ancestorInfo: m
        };
      }
    }
    function wb(e, t, a) {
      {
        var i = e, u = hd(i.namespace, t), s = Sp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function mN(e) {
      return e;
    }
    function bb(e) {
      og = Pn(), sg = Hw();
      var t = null;
      return Gn(!1), t;
    }
    function xb(e) {
      Pw(sg), Gn(og), og = null, sg = null;
    }
    function _b(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (gp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, m = Sp(f.ancestorInfo, e);
          gp(null, p, m);
        }
        s = f.namespace;
      }
      var R = ob(e, t, a, s);
      return wp(u, R), yg(R, t), R;
    }
    function Db(e, t) {
      e.appendChild(t);
    }
    function kb(e, t, a, i, u) {
      switch (cb(e, t, a, i), t) {
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
    function Ob(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, m = Sp(f.ancestorInfo, t);
          gp(null, p, m);
        }
      }
      return fb(e, t, a, i);
    }
    function cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Nb(e, t, a, i) {
      {
        var u = a;
        gp(null, e, u.ancestorInfo);
      }
      var s = sb(e, t);
      return wp(i, s), s;
    }
    function Lb() {
      var e = window.event;
      return e === void 0 ? za : hf(e.type);
    }
    var fg = typeof setTimeout == "function" ? setTimeout : void 0, Mb = typeof clearTimeout == "function" ? clearTimeout : void 0, dg = -1, _C = typeof Promise == "function" ? Promise : void 0, Ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof _C < "u" ? function(e) {
      return _C.resolve(null).then(e).catch(Ub);
    } : fg;
    function Ub(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zb(e, t, a, i) {
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
    function Fb(e, t, a, i, u, s) {
      db(e, t, a, i, u), yg(e, u);
    }
    function DC(e) {
      fo(e, "");
    }
    function jb(e, t, a) {
      e.nodeValue = a;
    }
    function Hb(e, t) {
      e.appendChild(t);
    }
    function Pb(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Vh(a);
    }
    function Bb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Vb(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $b(e, t) {
      e.removeChild(t);
    }
    function Ib(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function pg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === Yh)
            if (i === 0) {
              e.removeChild(u), zu(t);
              return;
            } else
              i--;
          else (s === Ih || s === Ep || s === Cp) && i++;
        }
        a = u;
      } while (a);
      zu(t);
    }
    function Yb(e, t) {
      e.nodeType === An ? pg(e.parentNode, t) : e.nodeType === qr && pg(e, t), zu(e);
    }
    function Wb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qb(e) {
      e.nodeValue = "";
    }
    function Qb(e, t) {
      e = e;
      var a = t[Rb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ec("display", i);
    }
    function Gb(e, t) {
      e.nodeValue = t;
    }
    function Kb(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function Xb(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Jb(e, t) {
      return t === "" || e.nodeType !== Gi ? null : e;
    }
    function Zb(e) {
      return e.nodeType !== An ? null : e;
    }
    function kC(e) {
      return e.data === Ep;
    }
    function vg(e) {
      return e.data === Cp;
    }
    function ex(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function tx(e, t) {
      e._reactRetry = t;
    }
    function Wh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Gi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === Ih || a === Cp || a === Ep)
            break;
          if (a === Yh)
            return null;
        }
      }
      return e;
    }
    function Rp(e) {
      return Wh(e.nextSibling);
    }
    function nx(e) {
      return Wh(e.firstChild);
    }
    function rx(e) {
      return Wh(e.firstChild);
    }
    function ax(e) {
      return Wh(e.nextSibling);
    }
    function ix(e, t, a, i, u, s, f) {
      wp(s, e), yg(e, a);
      var p;
      {
        var m = u;
        p = m.namespace;
      }
      var R = (s.mode & gt) !== Pe;
      return vb(e, t, a, p, i, R, f);
    }
    function lx(e, t, a, i) {
      return wp(a, e), a.mode & gt, hb(e, t);
    }
    function ux(e, t) {
      wp(t, e);
    }
    function ox(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Yh) {
            if (a === 0)
              return Rp(t);
            a--;
          } else (i === Ih || i === Cp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function OC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Ih || i === Cp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else i === Yh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function sx(e) {
      zu(e);
    }
    function cx(e) {
      zu(e);
    }
    function fx(e) {
      return e !== "head" && e !== "body";
    }
    function dx(e, t, a, i) {
      var u = !0;
      Bh(t.nodeValue, a, i, u);
    }
    function px(e, t, a, i, u, s) {
      if (t[$h] !== !0) {
        var f = !0;
        Bh(i.nodeValue, u, s, f);
      }
    }
    function vx(e, t) {
      t.nodeType === qr ? ag(e, t) : t.nodeType === An || ig(e, t);
    }
    function hx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ag(a, t) : t.nodeType === An || ig(a, t));
      }
    }
    function mx(e, t, a, i, u) {
      (u || t[$h] !== !0) && (i.nodeType === qr ? ag(a, i) : i.nodeType === An || ig(a, i));
    }
    function yx(e, t, a) {
      lg(e, t);
    }
    function gx(e, t) {
      ug(e, t);
    }
    function Sx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && lg(i, t);
      }
    }
    function Ex(e, t) {
      {
        var a = e.parentNode;
        a !== null && ug(a, t);
      }
    }
    function Cx(e, t, a, i, u, s) {
      (s || t[$h] !== !0) && lg(a, i);
    }
    function Rx(e, t, a, i, u) {
      (u || t[$h] !== !0) && ug(a, i);
    }
    function Tx(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function wx(e) {
      vp(e);
    }
    var Of = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Of, hg = "__reactProps$" + Of, Tp = "__reactContainer$" + Of, mg = "__reactEvents$" + Of, bx = "__reactListeners$" + Of, xx = "__reactHandles$" + Of;
    function _x(e) {
      delete e[Nf], delete e[hg], delete e[mg], delete e[bx], delete e[xx];
    }
    function wp(e, t) {
      t[Nf] = e;
    }
    function qh(e, t) {
      t[Tp] = e;
    }
    function NC(e) {
      e[Tp] = null;
    }
    function bp(e) {
      return !!e[Tp];
    }
    function Xs(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = OC(e); u !== null; ) {
              var s = u[Nf];
              if (s)
                return s;
              u = OC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zo(e) {
      var t = e[Nf] || e[Tp];
      return t && (t.tag === ue || t.tag === ne || t.tag === ge || t.tag === B) ? t : null;
    }
    function Lf(e) {
      if (e.tag === ue || e.tag === ne)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Qh(e) {
      return e[hg] || null;
    }
    function yg(e, t) {
      e[hg] = t;
    }
    function Dx(e) {
      var t = e[mg];
      return t === void 0 && (t = e[mg] = /* @__PURE__ */ new Set()), t;
    }
    var LC = {}, MC = y.ReactDebugCurrentFrame;
    function Gh(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        MC.setExtraStackFrame(a);
      } else
        MC.setExtraStackFrame(null);
    }
    function ul(e, t, a, i, u) {
      {
        var s = Function.call.bind(xr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var m = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (Gh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Gh(null)), p instanceof Error && !(p.message in LC) && (LC[p.message] = !0, Gh(u), g("Failed %s type: %s", a, p.message), Gh(null));
          }
      }
    }
    var gg = [], Kh;
    Kh = [];
    var Bu = -1;
    function Fo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Bu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Kh[Bu] && g("Unexpected Fiber popped."), e.current = gg[Bu], gg[Bu] = null, Kh[Bu] = null, Bu--;
    }
    function ia(e, t, a) {
      Bu++, gg[Bu] = e.current, Kh[Bu] = a, e.current = t;
    }
    var Sg;
    Sg = {};
    var fi = {};
    Object.freeze(fi);
    var Vu = Fo(fi), Gl = Fo(!1), Eg = fi;
    function Mf(e, t, a) {
      return a && Kl(t) ? Eg : Vu.current;
    }
    function AC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Af(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return fi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = et(e) || "Unknown";
          ul(i, s, "context", p);
        }
        return u && AC(e, t, s), s;
      }
    }
    function Xh() {
      return Gl.current;
    }
    function Kl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Jh(e) {
      aa(Gl, e), aa(Vu, e);
    }
    function Cg(e) {
      aa(Gl, e), aa(Vu, e);
    }
    function UC(e, t, a) {
      {
        if (Vu.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Vu, t, e), ia(Gl, a, e);
      }
    }
    function zC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = et(e) || "Unknown";
            Sg[s] || (Sg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var m = et(e) || "Unknown";
          ul(u, f, "child context", m);
        }
        return st({}, a, f);
      }
    }
    function Zh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return Eg = Vu.current, ia(Vu, a, e), ia(Gl, Gl.current, e), !0;
      }
    }
    function FC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = zC(e, t, Eg);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Gl, e), aa(Vu, e), ia(Vu, u, e), ia(Gl, a, e);
        } else
          aa(Gl, e), ia(Gl, a, e);
      }
    }
    function kx(e) {
      {
        if (!Ru(e) || e.tag !== j)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case j: {
              var a = t.type;
              if (Kl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var jo = 0, em = 1, $u = null, Rg = !1, Tg = !1;
    function jC(e) {
      $u === null ? $u = [e] : $u.push(e);
    }
    function Ox(e) {
      Rg = !0, jC(e);
    }
    function HC() {
      Rg && Ho();
    }
    function Ho() {
      if (!Tg && $u !== null) {
        Tg = !0;
        var e = 0, t = ja();
        try {
          var a = !0, i = $u;
          for (Hn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          $u = null, Rg = !1;
        } catch (s) {
          throw $u !== null && ($u = $u.slice(e + 1)), Dd(ms, Ho), s;
        } finally {
          Hn(t), Tg = !1;
        }
      }
      return null;
    }
    var Uf = [], zf = 0, tm = null, nm = 0, Fi = [], ji = 0, Js = null, Iu = 1, Yu = "";
    function Nx(e) {
      return ec(), (e.flags & _i) !== He;
    }
    function Lx(e) {
      return ec(), nm;
    }
    function Mx() {
      var e = Yu, t = Iu, a = t & ~Ax(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      ec(), Uf[zf++] = nm, Uf[zf++] = tm, tm = e, nm = t;
    }
    function PC(e, t, a) {
      ec(), Fi[ji++] = Iu, Fi[ji++] = Yu, Fi[ji++] = Js, Js = e;
      var i = Iu, u = Yu, s = rm(i) - 1, f = i & ~(1 << s), p = a + 1, m = rm(t) + s;
      if (m > 30) {
        var R = s - s % 5, T = (1 << R) - 1, L = (f & T).toString(32), O = f >> R, H = s - R, $ = rm(t) + H, Q = p << H, Ee = Q | O, Ie = L + u;
        Iu = 1 << $ | Ee, Yu = Ie;
      } else {
        var Ue = p << s, _t = Ue | f, Rt = u;
        Iu = 1 << m | _t, Yu = Rt;
      }
    }
    function wg(e) {
      ec();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), PC(e, a, i);
      }
    }
    function rm(e) {
      return 32 - Fn(e);
    }
    function Ax(e) {
      return 1 << rm(e) - 1;
    }
    function bg(e) {
      for (; e === tm; )
        tm = Uf[--zf], Uf[zf] = null, nm = Uf[--zf], Uf[zf] = null;
      for (; e === Js; )
        Js = Fi[--ji], Fi[ji] = null, Yu = Fi[--ji], Fi[ji] = null, Iu = Fi[--ji], Fi[ji] = null;
    }
    function Ux() {
      return ec(), Js !== null ? {
        id: Iu,
        overflow: Yu
      } : null;
    }
    function zx(e, t) {
      ec(), Fi[ji++] = Iu, Fi[ji++] = Yu, Fi[ji++] = Js, Iu = t.id, Yu = t.overflow, Js = e;
    }
    function ec() {
      Fr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, Hi = null, ol = !1, tc = !1, Po = null;
    function Fx() {
      ol && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function BC() {
      tc = !0;
    }
    function jx() {
      return tc;
    }
    function Hx(e) {
      var t = e.stateNode.containerInfo;
      return Hi = rx(t), zr = e, ol = !0, Po = null, tc = !1, !0;
    }
    function Px(e, t, a) {
      return Hi = ax(t), zr = e, ol = !0, Po = null, tc = !1, a !== null && zx(e, a), !0;
    }
    function VC(e, t) {
      switch (e.tag) {
        case B: {
          vx(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & gt) !== Pe;
          mx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ge: {
          var i = e.memoizedState;
          i.dehydrated !== null && hx(i.dehydrated, t);
          break;
        }
      }
    }
    function $C(e, t) {
      VC(e, t);
      var a = ID();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Na) : i.push(a);
    }
    function xg(e, t) {
      {
        if (tc)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, yx(a, i);
                break;
              case ne:
                var u = t.pendingProps;
                gx(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var m = t.type, R = t.pendingProps, T = (e.mode & gt) !== Pe;
                Cx(
                  s,
                  f,
                  p,
                  m,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ne: {
                var L = t.pendingProps, O = (e.mode & gt) !== Pe;
                Rx(
                  s,
                  f,
                  p,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case ge: {
            var H = e.memoizedState, $ = H.dehydrated;
            if ($ !== null) switch (t.tag) {
              case ue:
                var Q = t.type;
                t.pendingProps, Sx($, Q);
                break;
              case ne:
                var Ee = t.pendingProps;
                Ex($, Ee);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function IC(e, t) {
      t.flags = t.flags & -4097 | bn, xg(e, t);
    }
    function YC(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = Xb(t, a);
          return i !== null ? (e.stateNode = i, zr = e, Hi = nx(i), !0) : !1;
        }
        case ne: {
          var u = e.pendingProps, s = Jb(t, u);
          return s !== null ? (e.stateNode = s, zr = e, Hi = null, !0) : !1;
        }
        case ge: {
          var f = Zb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ux(),
              retryLane: ga
            };
            e.memoizedState = p;
            var m = YD(f);
            return m.return = e, e.child = m, zr = e, Hi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function _g(e) {
      return (e.mode & gt) !== Pe && (e.flags & je) === He;
    }
    function Dg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function kg(e) {
      if (ol) {
        var t = Hi;
        if (!t) {
          _g(e) && (xg(zr, e), Dg()), IC(zr, e), ol = !1, zr = e;
          return;
        }
        var a = t;
        if (!YC(e, t)) {
          _g(e) && (xg(zr, e), Dg()), t = Rp(a);
          var i = zr;
          if (!t || !YC(e, t)) {
            IC(zr, e), ol = !1, zr = e;
            return;
          }
          $C(i, a);
        }
      }
    }
    function Bx(e, t, a) {
      var i = e.stateNode, u = !tc, s = ix(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Vx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lx(t, a, e);
      if (i) {
        var u = zr;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & gt) !== Pe;
              dx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, m = u.memoizedProps, R = u.stateNode, T = (u.mode & gt) !== Pe;
              px(
                p,
                m,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function $x(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ux(a, e);
    }
    function Ix(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ox(a);
    }
    function WC(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== B && t.tag !== ge; )
        t = t.return;
      zr = t;
    }
    function am(e) {
      if (e !== zr)
        return !1;
      if (!ol)
        return WC(e), ol = !0, !1;
      if (e.tag !== B && (e.tag !== ue || fx(e.type) && !cg(e.type, e.memoizedProps))) {
        var t = Hi;
        if (t)
          if (_g(e))
            qC(e), Dg();
          else
            for (; t; )
              $C(e, t), t = Rp(t);
      }
      return WC(e), e.tag === ge ? Hi = Ix(e) : Hi = zr ? Rp(e.stateNode) : null, !0;
    }
    function Yx() {
      return ol && Hi !== null;
    }
    function qC(e) {
      for (var t = Hi; t; )
        VC(e, t), t = Rp(t);
    }
    function Ff() {
      zr = null, Hi = null, ol = !1, tc = !1;
    }
    function QC() {
      Po !== null && (B0(Po), Po = null);
    }
    function Fr() {
      return ol;
    }
    function Og(e) {
      Po === null ? Po = [e] : Po.push(e);
    }
    var Wx = y.ReactCurrentBatchConfig, qx = null;
    function Qx() {
      return Wx.transition;
    }
    var sl = {
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
      var Gx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Jt && (t = a), a = a.return;
        return t;
      }, nc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, xp = [], _p = [], Dp = [], kp = [], Op = [], Np = [], rc = /* @__PURE__ */ new Set();
      sl.recordUnsafeLifecycleWarnings = function(e, t) {
        rc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && _p.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && kp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && Np.push(e));
      }, sl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(O) {
          e.add(et(O) || "Component"), rc.add(O.type);
        }), xp = []);
        var t = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(O) {
          t.add(et(O) || "Component"), rc.add(O.type);
        }), _p = []);
        var a = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(O) {
          a.add(et(O) || "Component"), rc.add(O.type);
        }), Dp = []);
        var i = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(O) {
          i.add(et(O) || "Component"), rc.add(O.type);
        }), kp = []);
        var u = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(O) {
          u.add(et(O) || "Component"), rc.add(O.type);
        }), Op = []);
        var s = /* @__PURE__ */ new Set();
        if (Np.length > 0 && (Np.forEach(function(O) {
          s.add(et(O) || "Component"), rc.add(O.type);
        }), Np = []), t.size > 0) {
          var f = nc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = nc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var m = nc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var R = nc(e);
          D(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = nc(a);
          D(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var L = nc(u);
          D(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var im = /* @__PURE__ */ new Map(), GC = /* @__PURE__ */ new Set();
      sl.recordLegacyContextWarning = function(e, t) {
        var a = Gx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!GC.has(e.type)) {
          var i = im.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], im.set(a, i)), i.push(e));
        }
      }, sl.flushLegacyContextWarning = function() {
        im.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(et(s) || "Component"), GC.add(s.type);
            });
            var u = nc(i);
            try {
              Gt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              dn();
            }
          }
        });
      }, sl.discardPendingWarnings = function() {
        xp = [], _p = [], Dp = [], kp = [], Op = [], Np = [], im = /* @__PURE__ */ new Map();
      };
    }
    var Ng, Lg, Mg, Ag, Ug, KC = function(e, t) {
    };
    Ng = !1, Lg = !1, Mg = {}, Ag = {}, Ug = {}, KC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        Ag[a] || (Ag[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Kx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Lp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Jt || X) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== j) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Kx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = et(e) || "Component";
          Mg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), Mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== j)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = f;
          hi(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(L) {
            var O = m.refs;
            L === null ? delete O[R] : O[R] = L;
          };
          return T._stringRef = R, T;
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
    function lm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function um(e) {
      {
        var t = et(e) || "Component";
        if (Ug[t])
          return;
        Ug[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function XC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function JC(e) {
      function t(U, G) {
        if (e) {
          var z = U.deletions;
          z === null ? (U.deletions = [G], U.flags |= Na) : z.push(G);
        }
      }
      function a(U, G) {
        if (!e)
          return null;
        for (var z = G; z !== null; )
          t(U, z), z = z.sibling;
        return null;
      }
      function i(U, G) {
        for (var z = /* @__PURE__ */ new Map(), ie = G; ie !== null; )
          ie.key !== null ? z.set(ie.key, ie) : z.set(ie.index, ie), ie = ie.sibling;
        return z;
      }
      function u(U, G) {
        var z = dc(U, G);
        return z.index = 0, z.sibling = null, z;
      }
      function s(U, G, z) {
        if (U.index = z, !e)
          return U.flags |= _i, G;
        var ie = U.alternate;
        if (ie !== null) {
          var be = ie.index;
          return be < G ? (U.flags |= bn, G) : be;
        } else
          return U.flags |= bn, G;
      }
      function f(U) {
        return e && U.alternate === null && (U.flags |= bn), U;
      }
      function p(U, G, z, ie) {
        if (G === null || G.tag !== ne) {
          var be = OE(z, U.mode, ie);
          return be.return = U, be;
        } else {
          var Re = u(G, z);
          return Re.return = U, Re;
        }
      }
      function m(U, G, z, ie) {
        var be = z.type;
        if (be === yi)
          return T(U, G, z.props.children, ie, z.key);
        if (G !== null && (G.elementType === be || // Keep this check inline so it only runs on the false path:
        rT(G, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof be == "object" && be !== null && be.$$typeof === nt && XC(be) === G.type)) {
          var Re = u(G, z.props);
          return Re.ref = Lp(U, G, z), Re.return = U, Re._debugSource = z._source, Re._debugOwner = z._owner, Re;
        }
        var Xe = kE(z, U.mode, ie);
        return Xe.ref = Lp(U, G, z), Xe.return = U, Xe;
      }
      function R(U, G, z, ie) {
        if (G === null || G.tag !== le || G.stateNode.containerInfo !== z.containerInfo || G.stateNode.implementation !== z.implementation) {
          var be = NE(z, U.mode, ie);
          return be.return = U, be;
        } else {
          var Re = u(G, z.children || []);
          return Re.return = U, Re;
        }
      }
      function T(U, G, z, ie, be) {
        if (G === null || G.tag !== pe) {
          var Re = Xo(z, U.mode, ie, be);
          return Re.return = U, Re;
        } else {
          var Xe = u(G, z);
          return Xe.return = U, Xe;
        }
      }
      function L(U, G, z) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ie = OE("" + G, U.mode, z);
          return ie.return = U, ie;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case Dr: {
              var be = kE(G, U.mode, z);
              return be.ref = Lp(U, null, G), be.return = U, be;
            }
            case ir: {
              var Re = NE(G, U.mode, z);
              return Re.return = U, Re;
            }
            case nt: {
              var Xe = G._payload, at = G._init;
              return L(U, at(Xe), z);
            }
          }
          if (pt(G) || lt(G)) {
            var en = Xo(G, U.mode, z, null);
            return en.return = U, en;
          }
          lm(U, G);
        }
        return typeof G == "function" && um(U), null;
      }
      function O(U, G, z, ie) {
        var be = G !== null ? G.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return be !== null ? null : p(U, G, "" + z, ie);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Dr:
              return z.key === be ? m(U, G, z, ie) : null;
            case ir:
              return z.key === be ? R(U, G, z, ie) : null;
            case nt: {
              var Re = z._payload, Xe = z._init;
              return O(U, G, Xe(Re), ie);
            }
          }
          if (pt(z) || lt(z))
            return be !== null ? null : T(U, G, z, ie, null);
          lm(U, z);
        }
        return typeof z == "function" && um(U), null;
      }
      function H(U, G, z, ie, be) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var Re = U.get(z) || null;
          return p(G, Re, "" + ie, be);
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Dr: {
              var Xe = U.get(ie.key === null ? z : ie.key) || null;
              return m(G, Xe, ie, be);
            }
            case ir: {
              var at = U.get(ie.key === null ? z : ie.key) || null;
              return R(G, at, ie, be);
            }
            case nt:
              var en = ie._payload, Ht = ie._init;
              return H(U, G, z, Ht(en), be);
          }
          if (pt(ie) || lt(ie)) {
            var Xn = U.get(z) || null;
            return T(G, Xn, ie, be, null);
          }
          lm(G, ie);
        }
        return typeof ie == "function" && um(G), null;
      }
      function $(U, G, z) {
        {
          if (typeof U != "object" || U === null)
            return G;
          switch (U.$$typeof) {
            case Dr:
            case ir:
              KC(U, z);
              var ie = U.key;
              if (typeof ie != "string")
                break;
              if (G === null) {
                G = /* @__PURE__ */ new Set(), G.add(ie);
                break;
              }
              if (!G.has(ie)) {
                G.add(ie);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ie);
              break;
            case nt:
              var be = U._payload, Re = U._init;
              $(Re(be), G, z);
              break;
          }
        }
        return G;
      }
      function Q(U, G, z, ie) {
        for (var be = null, Re = 0; Re < z.length; Re++) {
          var Xe = z[Re];
          be = $(Xe, be, U);
        }
        for (var at = null, en = null, Ht = G, Xn = 0, Pt = 0, Vn = null; Ht !== null && Pt < z.length; Pt++) {
          Ht.index > Pt ? (Vn = Ht, Ht = null) : Vn = Ht.sibling;
          var ua = O(U, Ht, z[Pt], ie);
          if (ua === null) {
            Ht === null && (Ht = Vn);
            break;
          }
          e && Ht && ua.alternate === null && t(U, Ht), Xn = s(ua, Xn, Pt), en === null ? at = ua : en.sibling = ua, en = ua, Ht = Vn;
        }
        if (Pt === z.length) {
          if (a(U, Ht), Fr()) {
            var Ir = Pt;
            Zs(U, Ir);
          }
          return at;
        }
        if (Ht === null) {
          for (; Pt < z.length; Pt++) {
            var pi = L(U, z[Pt], ie);
            pi !== null && (Xn = s(pi, Xn, Pt), en === null ? at = pi : en.sibling = pi, en = pi);
          }
          if (Fr()) {
            var wa = Pt;
            Zs(U, wa);
          }
          return at;
        }
        for (var ba = i(U, Ht); Pt < z.length; Pt++) {
          var oa = H(ba, U, Pt, z[Pt], ie);
          oa !== null && (e && oa.alternate !== null && ba.delete(oa.key === null ? Pt : oa.key), Xn = s(oa, Xn, Pt), en === null ? at = oa : en.sibling = oa, en = oa);
        }
        if (e && ba.forEach(function(nd) {
          return t(U, nd);
        }), Fr()) {
          var Ju = Pt;
          Zs(U, Ju);
        }
        return at;
      }
      function Ee(U, G, z, ie) {
        var be = lt(z);
        if (typeof be != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (Lg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Lg = !0), z.entries === be && (Ng || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ng = !0);
          var Re = be.call(z);
          if (Re)
            for (var Xe = null, at = Re.next(); !at.done; at = Re.next()) {
              var en = at.value;
              Xe = $(en, Xe, U);
            }
        }
        var Ht = be.call(z);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, Pt = null, Vn = G, ua = 0, Ir = 0, pi = null, wa = Ht.next(); Vn !== null && !wa.done; Ir++, wa = Ht.next()) {
          Vn.index > Ir ? (pi = Vn, Vn = null) : pi = Vn.sibling;
          var ba = O(U, Vn, wa.value, ie);
          if (ba === null) {
            Vn === null && (Vn = pi);
            break;
          }
          e && Vn && ba.alternate === null && t(U, Vn), ua = s(ba, ua, Ir), Pt === null ? Xn = ba : Pt.sibling = ba, Pt = ba, Vn = pi;
        }
        if (wa.done) {
          if (a(U, Vn), Fr()) {
            var oa = Ir;
            Zs(U, oa);
          }
          return Xn;
        }
        if (Vn === null) {
          for (; !wa.done; Ir++, wa = Ht.next()) {
            var Ju = L(U, wa.value, ie);
            Ju !== null && (ua = s(Ju, ua, Ir), Pt === null ? Xn = Ju : Pt.sibling = Ju, Pt = Ju);
          }
          if (Fr()) {
            var nd = Ir;
            Zs(U, nd);
          }
          return Xn;
        }
        for (var cv = i(U, Vn); !wa.done; Ir++, wa = Ht.next()) {
          var au = H(cv, U, Ir, wa.value, ie);
          au !== null && (e && au.alternate !== null && cv.delete(au.key === null ? Ir : au.key), ua = s(au, ua, Ir), Pt === null ? Xn = au : Pt.sibling = au, Pt = au);
        }
        if (e && cv.forEach(function(Rk) {
          return t(U, Rk);
        }), Fr()) {
          var Ck = Ir;
          Zs(U, Ck);
        }
        return Xn;
      }
      function Ie(U, G, z, ie) {
        if (G !== null && G.tag === ne) {
          a(U, G.sibling);
          var be = u(G, z);
          return be.return = U, be;
        }
        a(U, G);
        var Re = OE(z, U.mode, ie);
        return Re.return = U, Re;
      }
      function Ue(U, G, z, ie) {
        for (var be = z.key, Re = G; Re !== null; ) {
          if (Re.key === be) {
            var Xe = z.type;
            if (Xe === yi) {
              if (Re.tag === pe) {
                a(U, Re.sibling);
                var at = u(Re, z.props.children);
                return at.return = U, at._debugSource = z._source, at._debugOwner = z._owner, at;
              }
            } else if (Re.elementType === Xe || // Keep this check inline so it only runs on the false path:
            rT(Re, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === nt && XC(Xe) === Re.type) {
              a(U, Re.sibling);
              var en = u(Re, z.props);
              return en.ref = Lp(U, Re, z), en.return = U, en._debugSource = z._source, en._debugOwner = z._owner, en;
            }
            a(U, Re);
            break;
          } else
            t(U, Re);
          Re = Re.sibling;
        }
        if (z.type === yi) {
          var Ht = Xo(z.props.children, U.mode, ie, z.key);
          return Ht.return = U, Ht;
        } else {
          var Xn = kE(z, U.mode, ie);
          return Xn.ref = Lp(U, G, z), Xn.return = U, Xn;
        }
      }
      function _t(U, G, z, ie) {
        for (var be = z.key, Re = G; Re !== null; ) {
          if (Re.key === be)
            if (Re.tag === le && Re.stateNode.containerInfo === z.containerInfo && Re.stateNode.implementation === z.implementation) {
              a(U, Re.sibling);
              var Xe = u(Re, z.children || []);
              return Xe.return = U, Xe;
            } else {
              a(U, Re);
              break;
            }
          else
            t(U, Re);
          Re = Re.sibling;
        }
        var at = NE(z, U.mode, ie);
        return at.return = U, at;
      }
      function Rt(U, G, z, ie) {
        var be = typeof z == "object" && z !== null && z.type === yi && z.key === null;
        if (be && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Dr:
              return f(Ue(U, G, z, ie));
            case ir:
              return f(_t(U, G, z, ie));
            case nt:
              var Re = z._payload, Xe = z._init;
              return Rt(U, G, Xe(Re), ie);
          }
          if (pt(z))
            return Q(U, G, z, ie);
          if (lt(z))
            return Ee(U, G, z, ie);
          lm(U, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(Ie(U, G, "" + z, ie)) : (typeof z == "function" && um(U), a(U, G));
      }
      return Rt;
    }
    var jf = JC(!0), ZC = JC(!1);
    function Xx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = dc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = dc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Jx(e, t) {
      for (var a = e.child; a !== null; )
        HD(a, t), a = a.sibling;
    }
    var zg = Fo(null), Fg;
    Fg = {};
    var om = null, Hf = null, jg = null, sm = !1;
    function cm() {
      om = null, Hf = null, jg = null, sm = !1;
    }
    function eR() {
      sm = !0;
    }
    function tR() {
      sm = !1;
    }
    function nR(e, t, a) {
      ia(zg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Hg(e, t) {
      var a = zg.current;
      aa(zg, t), e._currentValue = a;
    }
    function Pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Uu(i.childLanes, t) ? u !== null && !Uu(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zx(e, t, a) {
      e1(e, t, a);
    }
    function e1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === j) {
                var p = Os(a), m = Wu(tn, p);
                m.tag = dm;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, L = T.pending;
                  L === null ? m.next = m : (m.next = L.next, L.next = m), T.pending = m;
                }
              }
              i.lanes = ut(i.lanes, a);
              var O = i.alternate;
              O !== null && (O.lanes = ut(O.lanes, a)), Pg(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ne)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === nn) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = ut(H.lanes, a);
          var $ = H.alternate;
          $ !== null && ($.lanes = ut($.lanes, a)), Pg(H, a, e), u = i.sibling;
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
            var Q = u.sibling;
            if (Q !== null) {
              Q.return = u.return, u = Q;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Pf(e, t) {
      om = e, Hf = null, jg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function nr(e) {
      sm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (jg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (om === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, om.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var ac = null;
    function Bg(e) {
      ac === null ? ac = [e] : ac.push(e);
    }
    function t1() {
      if (ac !== null) {
        for (var e = 0; e < ac.length; e++) {
          var t = ac[e], a = t.interleaved;
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
        ac = null;
      }
    }
    function rR(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Bg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, fm(e, i);
    }
    function n1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Bg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function r1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Bg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, fm(e, i);
    }
    function Ba(e, t) {
      return fm(e, t);
    }
    var a1 = fm;
    function fm(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (bn | La)) !== He && Z0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (bn | La)) !== He && Z0(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var aR = 0, iR = 1, dm = 2, Vg = 3, pm = !1, $g, vm;
    $g = !1, vm = null;
    function Ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function lR(e, t) {
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
    function Wu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: aR,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Bo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (vm === u && !$g && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), $g = !0), nD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, a1(e, a);
      } else
        return r1(e, u, t, a);
    }
    function hm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Yd(a)) {
          var s = u.lanes;
          s = qd(s, e.pendingLanes);
          var f = ut(s, a);
          u.lanes = f, ff(e, f);
        }
      }
    }
    function Yg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var m = p;
            do {
              var R = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              f === null ? s = f = R : (f.next = R, f = R), m = m.next;
            } while (m !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function i1(e, t, a, i, u, s) {
      switch (a.tag) {
        case iR: {
          var f = a.payload;
          if (typeof f == "function") {
            eR();
            var p = f.call(s, i, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              tR();
            }
            return p;
          }
          return f;
        }
        case Vg:
          e.flags = e.flags & -65537 | je;
        // Intentional fallthrough
        case aR: {
          var m = a.payload, R;
          if (typeof m == "function") {
            eR(), R = m.call(s, i, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  m.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              tR();
            }
          } else
            R = m;
          return R == null ? i : st({}, i, R);
        }
        case dm:
          return pm = !0, i;
      }
      return i;
    }
    function mm(e, t, a, i) {
      var u = e.updateQueue;
      pm = !1, vm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var m = p, R = m.next;
        m.next = null, f === null ? s = R : f.next = R, f = m;
        var T = e.alternate;
        if (T !== null) {
          var L = T.updateQueue, O = L.lastBaseUpdate;
          O !== f && (O === null ? L.firstBaseUpdate = R : O.next = R, L.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var H = u.baseState, $ = ee, Q = null, Ee = null, Ie = null, Ue = s;
        do {
          var _t = Ue.lane, Rt = Ue.eventTime;
          if (Uu(i, _t)) {
            if (Ie !== null) {
              var G = {
                eventTime: Rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              Ie = Ie.next = G;
            }
            H = i1(e, u, Ue, H, t, a);
            var z = Ue.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== Mt) {
              e.flags |= on;
              var ie = u.effects;
              ie === null ? u.effects = [Ue] : ie.push(Ue);
            }
          } else {
            var U = {
              eventTime: Rt,
              lane: _t,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            Ie === null ? (Ee = Ie = U, Q = H) : Ie = Ie.next = U, $ = ut($, _t);
          }
          if (Ue = Ue.next, Ue === null) {
            if (p = u.shared.pending, p === null)
              break;
            var be = p, Re = be.next;
            be.next = null, Ue = Re, u.lastBaseUpdate = be, u.shared.pending = null;
          }
        } while (!0);
        Ie === null && (Q = H), u.baseState = Q, u.firstBaseUpdate = Ee, u.lastBaseUpdate = Ie;
        var Xe = u.shared.interleaved;
        if (Xe !== null) {
          var at = Xe;
          do
            $ = ut($, at.lane), at = at.next;
          while (at !== Xe);
        } else s === null && (u.shared.lanes = ee);
        iv($), e.lanes = $, e.memoizedState = H;
      }
      vm = null;
    }
    function l1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function uR() {
      pm = !1;
    }
    function ym() {
      return pm;
    }
    function oR(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, l1(f, a));
        }
    }
    var Mp = {}, Vo = Fo(Mp), Ap = Fo(Mp), gm = Fo(Mp);
    function Sm(e) {
      if (e === Mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function sR() {
      var e = Sm(gm.current);
      return e;
    }
    function Wg(e, t) {
      ia(gm, t, e), ia(Ap, e, e), ia(Vo, Mp, e);
      var a = Tb(t);
      aa(Vo, e), ia(Vo, a, e);
    }
    function Bf(e) {
      aa(Vo, e), aa(Ap, e), aa(gm, e);
    }
    function qg() {
      var e = Sm(Vo.current);
      return e;
    }
    function cR(e) {
      Sm(gm.current);
      var t = Sm(Vo.current), a = wb(t, e.type);
      t !== a && (ia(Ap, e, e), ia(Vo, a, e));
    }
    function Qg(e) {
      Ap.current === e && (aa(Vo, e), aa(Ap, e));
    }
    var u1 = 0, fR = 1, dR = 1, Up = 2, cl = Fo(u1);
    function Gg(e, t) {
      return (e & t) !== 0;
    }
    function Vf(e) {
      return e & fR;
    }
    function Kg(e, t) {
      return e & fR | t;
    }
    function o1(e, t) {
      return e | t;
    }
    function $o(e, t) {
      ia(cl, t, e);
    }
    function $f(e) {
      aa(cl, e);
    }
    function s1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ge) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || kC(i) || vg(i))
              return t;
          }
        } else if (t.tag === sn && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & je) !== He;
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
    var Va = (
      /*   */
      0
    ), dr = (
      /* */
      1
    ), Xl = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Xg = [];
    function Jg() {
      for (var e = 0; e < Xg.length; e++) {
        var t = Xg[e];
        t._workInProgressVersionPrimary = null;
      }
      Xg.length = 0;
    }
    function c1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var we = y.ReactCurrentDispatcher, zp = y.ReactCurrentBatchConfig, Zg, If;
    Zg = /* @__PURE__ */ new Set();
    var ic = ee, Zt = null, vr = null, hr = null, Cm = !1, Fp = !1, jp = 0, f1 = 0, d1 = 25, J = null, Pi = null, Io = -1, eS = !1;
    function Yt() {
      {
        var e = J;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function ve() {
      {
        var e = J;
        Pi !== null && (Io++, Pi[Io] !== e && p1(e));
      }
    }
    function Yf(e) {
      e != null && !pt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function p1(e) {
      {
        var t = et(Zt);
        if (!Zg.has(t) && (Zg.add(t), Pi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Io; u++) {
            for (var s = Pi[u], f = u === Io ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function tS(e, t) {
      if (eS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Wf(e, t, a, i, u, s) {
      ic = s, Zt = t, Pi = e !== null ? e._debugHookTypes : null, Io = -1, eS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? we.current = AR : Pi !== null ? we.current = MR : we.current = LR;
      var f = a(i, u);
      if (Fp) {
        var p = 0;
        do {
          if (Fp = !1, jp = 0, p >= d1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, eS = !1, vr = null, hr = null, t.updateQueue = null, Io = -1, we.current = UR, f = a(i, u);
        } while (Fp);
      }
      we.current = Am, t._debugHookTypes = Pi;
      var m = vr !== null && vr.next !== null;
      if (ic = ee, Zt = null, vr = null, hr = null, J = null, Pi = null, Io = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & gt) !== Pe && g("Internal React error: Expected static flag was missing. Please notify the React team."), Cm = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function qf() {
      var e = jp !== 0;
      return jp = 0, e;
    }
    function pR(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ft) !== Pe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ns(e.lanes, a);
    }
    function vR() {
      if (we.current = Am, Cm) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Cm = !1;
      }
      ic = ee, Zt = null, vr = null, hr = null, Pi = null, Io = -1, J = null, _R = !1, Fp = !1, jp = 0;
    }
    function Jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Zt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function Bi() {
      var e;
      if (vr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = Zt.memoizedState : a = hr.next, a !== null)
        hr = a, a = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? Zt.memoizedState = hr = i : hr = hr.next = i;
      }
      return hr;
    }
    function hR() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function nS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function rS(e, t, a) {
      var i = Jl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = y1.bind(null, Zt, s);
      return [i.memoizedState, f];
    }
    function aS(e, t, a) {
      var i = Bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = vr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var m = f.next, R = p.next;
          f.next = R, p.next = m;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var T = f.next, L = s.baseState, O = null, H = null, $ = null, Q = T;
        do {
          var Ee = Q.lane;
          if (Uu(ic, Ee)) {
            if ($ !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              $ = $.next = Ue;
            }
            if (Q.hasEagerState)
              L = Q.eagerState;
            else {
              var _t = Q.action;
              L = e(L, _t);
            }
          } else {
            var Ie = {
              lane: Ee,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            $ === null ? (H = $ = Ie, O = L) : $ = $.next = Ie, Zt.lanes = ut(Zt.lanes, Ee), iv(Ee);
          }
          Q = Q.next;
        } while (Q !== null && Q !== T);
        $ === null ? O = L : $.next = H, Ce(L, i.memoizedState) || qp(), i.memoizedState = L, i.baseState = O, i.baseQueue = $, u.lastRenderedState = L;
      }
      var Rt = u.interleaved;
      if (Rt !== null) {
        var U = Rt;
        do {
          var G = U.lane;
          Zt.lanes = ut(Zt.lanes, G), iv(G), U = U.next;
        } while (U !== Rt);
      } else f === null && (u.lanes = ee);
      var z = u.dispatch;
      return [i.memoizedState, z];
    }
    function iS(e, t, a) {
      var i = Bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var m = f.next, R = m;
        do {
          var T = R.action;
          p = e(p, T), R = R.next;
        } while (R !== m);
        Ce(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function yN(e, t, a) {
    }
    function gN(e, t, a) {
    }
    function lS(e, t, a) {
      var i = Zt, u = Jl(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), If || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), If = !0);
      } else {
        if (s = t(), !If) {
          var p = t();
          Ce(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
        }
        var m = Zm();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        sf(m, ic) || mR(i, t, s);
      }
      u.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return u.queue = R, xm(gR.bind(null, i, R, e), [e]), i.flags |= Gr, Hp(dr | jr, yR.bind(null, i, R, s, t), void 0, null), s;
    }
    function Rm(e, t, a) {
      var i = Zt, u = Bi(), s = t();
      if (!If) {
        var f = t();
        Ce(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
      }
      var p = u.memoizedState, m = !Ce(p, s);
      m && (u.memoizedState = s, qp());
      var R = u.queue;
      if (Bp(gR.bind(null, i, R, e), [e]), R.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        i.flags |= Gr, Hp(dr | jr, yR.bind(null, i, R, s, t), void 0, null);
        var T = Zm();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        sf(T, ic) || mR(i, t, s);
      }
      return s;
    }
    function mR(e, t, a) {
      e.flags |= Co;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Zt.updateQueue;
      if (u === null)
        u = hR(), Zt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function yR(e, t, a, i) {
      t.value = a, t.getSnapshot = i, SR(t) && ER(e);
    }
    function gR(e, t, a) {
      var i = function() {
        SR(t) && ER(e);
      };
      return a(i);
    }
    function SR(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function ER(e) {
      var t = Ba(e, Ge);
      t !== null && Sr(t, e, Ge, tn);
    }
    function Tm(e) {
      var t = Jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: nS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = g1.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function uS(e) {
      return aS(nS);
    }
    function oS(e) {
      return iS(nS);
    }
    function Hp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = hR(), Zt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function sS(e) {
      var t = Jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function wm(e) {
      var t = Bi();
      return t.memoizedState;
    }
    function Pp(e, t, a, i) {
      var u = Jl(), s = i === void 0 ? null : i;
      Zt.flags |= e, u.memoizedState = Hp(dr | t, a, void 0, s);
    }
    function bm(e, t, a, i) {
      var u = Bi(), s = i === void 0 ? null : i, f = void 0;
      if (vr !== null) {
        var p = vr.memoizedState;
        if (f = p.destroy, s !== null) {
          var m = p.deps;
          if (tS(s, m)) {
            u.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      Zt.flags |= e, u.memoizedState = Hp(dr | t, a, f, s);
    }
    function xm(e, t) {
      return (Zt.mode & Ft) !== Pe ? Pp(Di | Gr | Uc, jr, e, t) : Pp(Gr | Uc, jr, e, t);
    }
    function Bp(e, t) {
      return bm(Gr, jr, e, t);
    }
    function cS(e, t) {
      return Pp(wt, Xl, e, t);
    }
    function _m(e, t) {
      return bm(wt, Xl, e, t);
    }
    function fS(e, t) {
      var a = wt;
      return a |= Ji, (Zt.mode & Ft) !== Pe && (a |= Ml), Pp(a, pr, e, t);
    }
    function Dm(e, t) {
      return bm(wt, pr, e, t);
    }
    function CR(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function dS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = wt;
      return u |= Ji, (Zt.mode & Ft) !== Pe && (u |= Ml), Pp(u, pr, CR.bind(null, t, e), i);
    }
    function km(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return bm(wt, pr, CR.bind(null, t, e), i);
    }
    function v1(e, t) {
    }
    var Om = v1;
    function pS(e, t) {
      var a = Jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Nm(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (tS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function vS(e, t) {
      var a = Jl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Lm(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (tS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function hS(e) {
      var t = Jl();
      return t.memoizedState = e, e;
    }
    function RR(e) {
      var t = Bi(), a = vr, i = a.memoizedState;
      return wR(t, i, e);
    }
    function TR(e) {
      var t = Bi();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return wR(t, a, e);
    }
    function wR(e, t, a) {
      var i = !$d(ic);
      if (i) {
        if (!Ce(a, t)) {
          var u = Wd();
          Zt.lanes = ut(Zt.lanes, u), iv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function h1(e, t, a) {
      var i = ja();
      Hn(fh(i, Li)), e(!0);
      var u = zp.transition;
      zp.transition = {};
      var s = zp.transition;
      zp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), zp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && D("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function mS() {
      var e = Tm(!1), t = e[0], a = e[1], i = h1.bind(null, a), u = Jl();
      return u.memoizedState = i, [t, i];
    }
    function bR() {
      var e = uS(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    function xR() {
      var e = oS(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    var _R = !1;
    function m1() {
      return _R;
    }
    function yS() {
      var e = Jl(), t = Zm(), a = t.identifierPrefix, i;
      if (Fr()) {
        var u = Mx();
        i = ":" + a + "R" + u;
        var s = jp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = f1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Mm() {
      var e = Bi(), t = e.memoizedState;
      return t;
    }
    function y1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (DR(e))
        kR(t, u);
      else {
        var s = rR(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          Sr(s, e, i, f), OR(s, t, i);
        }
      }
      NR(e, i);
    }
    function g1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (DR(e))
        kR(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = we.current, we.current = fl;
            try {
              var m = t.lastRenderedState, R = f(m, a);
              if (u.hasEagerState = !0, u.eagerState = R, Ce(R, m)) {
                n1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              we.current = p;
            }
          }
        }
        var T = rR(e, t, u, i);
        if (T !== null) {
          var L = Ta();
          Sr(T, e, i, L), OR(T, t, i);
        }
      }
      NR(e, i);
    }
    function DR(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function kR(e, t) {
      Fp = Cm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function OR(e, t, a) {
      if (Yd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var u = ut(i, a);
        t.lanes = u, ff(e, u);
      }
    }
    function NR(e, t, a) {
      Cs(e, t);
    }
    var Am = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: fe
    }, LR = null, MR = null, AR = null, UR = null, Zl = null, fl = null, Um = null;
    {
      var gS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, rt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      LR = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Yt(), Yf(t), pS(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Yt(), Yf(t), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Yt(), Yf(a), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Yt(), Yf(t), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Yt(), Yf(t), fS(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Yt(), Yf(t);
          var a = we.current;
          we.current = Zl;
          try {
            return vS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Yt();
          var i = we.current;
          we.current = Zl;
          try {
            return rS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Yt(), sS(e);
        },
        useState: function(e) {
          J = "useState", Yt();
          var t = we.current;
          we.current = Zl;
          try {
            return Tm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Yt(), hS(e);
        },
        useTransition: function() {
          return J = "useTransition", Yt(), mS();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Yt(), lS(e, t, a);
        },
        useId: function() {
          return J = "useId", Yt(), yS();
        },
        unstable_isNewReconciler: fe
      }, MR = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), pS(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ve(), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), fS(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var a = we.current;
          we.current = Zl;
          try {
            return vS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ve();
          var i = we.current;
          we.current = Zl;
          try {
            return rS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), sS(e);
        },
        useState: function(e) {
          J = "useState", ve();
          var t = we.current;
          we.current = Zl;
          try {
            return Tm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), hS(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), mS();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ve(), lS(e, t, a);
        },
        useId: function() {
          return J = "useId", ve(), yS();
        },
        unstable_isNewReconciler: fe
      }, AR = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), Nm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ve(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), Dm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var a = we.current;
          we.current = fl;
          try {
            return Lm(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ve();
          var i = we.current;
          we.current = fl;
          try {
            return aS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), wm();
        },
        useState: function(e) {
          J = "useState", ve();
          var t = we.current;
          we.current = fl;
          try {
            return uS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), Om();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), RR(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), bR();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ve(), Rm(e, t);
        },
        useId: function() {
          return J = "useId", ve(), Mm();
        },
        unstable_isNewReconciler: fe
      }, UR = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), Nm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ve(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), Dm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var a = we.current;
          we.current = Um;
          try {
            return Lm(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ve();
          var i = we.current;
          we.current = Um;
          try {
            return iS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), wm();
        },
        useState: function(e) {
          J = "useState", ve();
          var t = we.current;
          we.current = Um;
          try {
            return oS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), Om();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), TR(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), xR();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ve(), Rm(e, t);
        },
        useId: function() {
          return J = "useId", ve(), Mm();
        },
        unstable_isNewReconciler: fe
      }, Zl = {
        readContext: function(e) {
          return gS(), nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", rt(), Yt(), pS(e, t);
        },
        useContext: function(e) {
          return J = "useContext", rt(), Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", rt(), Yt(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", rt(), Yt(), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", rt(), Yt(), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", rt(), Yt(), fS(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", rt(), Yt();
          var a = we.current;
          we.current = Zl;
          try {
            return vS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", rt(), Yt();
          var i = we.current;
          we.current = Zl;
          try {
            return rS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", rt(), Yt(), sS(e);
        },
        useState: function(e) {
          J = "useState", rt(), Yt();
          var t = we.current;
          we.current = Zl;
          try {
            return Tm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", rt(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", rt(), Yt(), hS(e);
        },
        useTransition: function() {
          return J = "useTransition", rt(), Yt(), mS();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", rt(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", rt(), Yt(), lS(e, t, a);
        },
        useId: function() {
          return J = "useId", rt(), Yt(), yS();
        },
        unstable_isNewReconciler: fe
      }, fl = {
        readContext: function(e) {
          return gS(), nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", rt(), ve(), Nm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", rt(), ve(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", rt(), ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", rt(), ve(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", rt(), ve(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", rt(), ve(), Dm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", rt(), ve();
          var a = we.current;
          we.current = fl;
          try {
            return Lm(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", rt(), ve();
          var i = we.current;
          we.current = fl;
          try {
            return aS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", rt(), ve(), wm();
        },
        useState: function(e) {
          J = "useState", rt(), ve();
          var t = we.current;
          we.current = fl;
          try {
            return uS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", rt(), ve(), Om();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", rt(), ve(), RR(e);
        },
        useTransition: function() {
          return J = "useTransition", rt(), ve(), bR();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", rt(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", rt(), ve(), Rm(e, t);
        },
        useId: function() {
          return J = "useId", rt(), ve(), Mm();
        },
        unstable_isNewReconciler: fe
      }, Um = {
        readContext: function(e) {
          return gS(), nr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", rt(), ve(), Nm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", rt(), ve(), nr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", rt(), ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", rt(), ve(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", rt(), ve(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", rt(), ve(), Dm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", rt(), ve();
          var a = we.current;
          we.current = fl;
          try {
            return Lm(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", rt(), ve();
          var i = we.current;
          we.current = fl;
          try {
            return iS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", rt(), ve(), wm();
        },
        useState: function(e) {
          J = "useState", rt(), ve();
          var t = we.current;
          we.current = fl;
          try {
            return oS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", rt(), ve(), Om();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", rt(), ve(), TR(e);
        },
        useTransition: function() {
          return J = "useTransition", rt(), ve(), xR();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", rt(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", rt(), ve(), Rm(e, t);
        },
        useId: function() {
          return J = "useId", rt(), ve(), Mm();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Yo = h.unstable_now, zR = 0, zm = -1, Vp = -1, Fm = -1, SS = !1, jm = !1;
    function FR() {
      return SS;
    }
    function S1() {
      jm = !0;
    }
    function E1() {
      SS = !1, jm = !1;
    }
    function C1() {
      SS = jm, jm = !1;
    }
    function jR() {
      return zR;
    }
    function HR() {
      zR = Yo();
    }
    function ES(e) {
      Vp = Yo(), e.actualStartTime < 0 && (e.actualStartTime = Yo());
    }
    function PR(e) {
      Vp = -1;
    }
    function Hm(e, t) {
      if (Vp >= 0) {
        var a = Yo() - Vp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Vp = -1;
      }
    }
    function eu(e) {
      if (zm >= 0) {
        var t = Yo() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Qe:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function CS(e) {
      if (Fm >= 0) {
        var t = Yo() - Fm;
        Fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Qe:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function tu() {
      zm = Yo();
    }
    function RS() {
      Fm = Yo();
    }
    function TS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function dl(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var wS = {}, bS, xS, _S, DS, kS, BR, Pm, OS, NS, LS, $p;
    {
      bS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), LS = /* @__PURE__ */ new Set(), $p = /* @__PURE__ */ new Set();
      var VR = /* @__PURE__ */ new Set();
      Pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          VR.has(a) || (VR.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, BR = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
          kS.has(a) || (kS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(wS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(wS);
    }
    function MS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Jt) {
          gn(!0);
          try {
            s = a(i, u);
          } finally {
            gn(!1);
          }
        }
        BR(t, s);
      }
      var f = s == null ? u : st({}, u, s);
      if (e.memoizedState = f, e.lanes === ee) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var AS = {
      isMounted: Gv,
      enqueueSetState: function(e, t, a) {
        var i = Eo(e), u = Ta(), s = Go(i), f = Wu(u, s);
        f.payload = t, a != null && (Pm(a, "setState"), f.callback = a);
        var p = Bo(i, f, s);
        p !== null && (Sr(p, i, s, u), hm(p, i, s)), Cs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Eo(e), u = Ta(), s = Go(i), f = Wu(u, s);
        f.tag = iR, f.payload = t, a != null && (Pm(a, "replaceState"), f.callback = a);
        var p = Bo(i, f, s);
        p !== null && (Sr(p, i, s, u), hm(p, i, s)), Cs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Eo(e), i = Ta(), u = Go(a), s = Wu(i, u);
        s.tag = dm, t != null && (Pm(t, "forceUpdate"), s.callback = t);
        var f = Bo(a, s, u);
        f !== null && (Sr(f, a, u, i), hm(f, a, u)), Vc(a, u);
      }
    };
    function $R(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var m = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Jt) {
            gn(!0);
            try {
              m = p.shouldComponentUpdate(i, s, f);
            } finally {
              gn(!1);
            }
          }
          m === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Be(a, i) || !Be(u, s) : !0;
    }
    function R1(e, t, a) {
      var i = e.stateNode;
      {
        var u = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !$p.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === Pe && ($p.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !$p.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === Pe && ($p.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !NS.has(t) && (NS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !_S.has(t) && (_S.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || pt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function IR(e, t) {
      t.updater = AS, e.stateNode = t, Cu(t, e), t._reactInternalInstance = wS;
    }
    function YR(e, t, a) {
      var i = !1, u = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === _ && f._context === void 0
        );
        if (!p && !LS.has(t)) {
          LS.add(t);
          var m = "";
          f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === Si ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", m);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Mf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Af(e, u) : fi;
      }
      var T = new t(a, s);
      if (e.mode & Jt) {
        gn(!0);
        try {
          T = new t(a, s);
        } finally {
          gn(!1);
        }
      }
      var L = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      IR(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var O = Dt(t) || "Component";
          xS.has(O) || (xS.add(O), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, T.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var H = null, $ = null, Q = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), H !== null || $ !== null || Q !== null) {
            var Ee = Dt(t) || "Component", Ie = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            DS.has(Ee) || (DS.add(Ee), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ee, Ie, H !== null ? `
  ` + H : "", $ !== null ? `
  ` + $ : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && AC(e, u, s), T;
    }
    function T1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), AS.enqueueReplaceState(t, t.state, null));
    }
    function WR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = et(e) || "Component";
          bS.has(s) || (bS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        AS.enqueueReplaceState(t, t.state, null);
      }
    }
    function US(e, t, a, i) {
      R1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Mf(e, t, !0);
        u.context = Af(e, f);
      }
      {
        if (u.state === a) {
          var p = Dt(t) || "Component";
          OS.has(p) || (OS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Jt && sl.recordLegacyContextWarning(e, u), sl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (MS(e, t, m, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (T1(e, u), mm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = wt;
        R |= Ji, (e.mode & Ft) !== Pe && (R |= Ml), e.flags |= R;
      }
    }
    function w1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, m = fi;
      if (typeof p == "object" && p !== null)
        m = nr(p);
      else {
        var R = Mf(e, t, !0);
        m = Af(e, R);
      }
      var T = t.getDerivedStateFromProps, L = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !L && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== m) && WR(e, u, a, m), uR();
      var O = e.memoizedState, H = u.state = O;
      if (mm(e, a, u, i), H = e.memoizedState, s === a && O === H && !Xh() && !ym()) {
        if (typeof u.componentDidMount == "function") {
          var $ = wt;
          $ |= Ji, (e.mode & Ft) !== Pe && ($ |= Ml), e.flags |= $;
        }
        return !1;
      }
      typeof T == "function" && (MS(e, t, T, a), H = e.memoizedState);
      var Q = ym() || $R(e, t, s, a, O, H, m);
      if (Q) {
        if (!L && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ee = wt;
          Ee |= Ji, (e.mode & Ft) !== Pe && (Ee |= Ml), e.flags |= Ee;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ie = wt;
          Ie |= Ji, (e.mode & Ft) !== Pe && (Ie |= Ml), e.flags |= Ie;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return u.props = a, u.state = H, u.context = m, Q;
    }
    function b1(e, t, a, i, u) {
      var s = t.stateNode;
      lR(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : dl(t.type, f);
      s.props = p;
      var m = t.pendingProps, R = s.context, T = a.contextType, L = fi;
      if (typeof T == "object" && T !== null)
        L = nr(T);
      else {
        var O = Mf(t, a, !0);
        L = Af(t, O);
      }
      var H = a.getDerivedStateFromProps, $ = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !$ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== m || R !== L) && WR(t, s, i, L), uR();
      var Q = t.memoizedState, Ee = s.state = Q;
      if (mm(t, i, s, u), Ee = t.memoizedState, f === m && Q === Ee && !Xh() && !ym())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= qn), !1;
      typeof H == "function" && (MS(t, a, H, i), Ee = t.memoizedState);
      var Ie = ym() || $R(t, a, p, i, Q, Ee, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ze;
      return Ie ? (!$ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ee, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ee, L)), typeof s.componentDidUpdate == "function" && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = i, t.memoizedState = Ee), s.props = i, s.state = Ee, s.context = L, Ie;
    }
    function lc(e, t) {
      return {
        value: e,
        source: t,
        stack: Wi(t),
        digest: null
      };
    }
    function zS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function x1(e, t) {
      return !0;
    }
    function FS(e, t) {
      try {
        var a = x1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === j)
            return;
          console.error(i);
        }
        var p = u ? et(u) : null, m = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === B)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = et(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var L = m + `
` + f + `

` + ("" + R);
        console.error(L);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var _1 = typeof WeakMap == "function" ? WeakMap : Map;
    function qR(e, t, a) {
      var i = Wu(tn, a);
      i.tag = Vg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        SD(u), FS(e, t);
      }, i;
    }
    function jS(e, t, a) {
      var i = Wu(tn, a);
      i.tag = Vg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          aT(e), FS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        aT(e), FS(e, t), typeof u != "function" && yD(this);
        var m = t.value, R = t.stack;
        this.componentDidCatch(m, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (ea(e.lanes, Ge) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), i;
    }
    function QR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ED.bind(null, e, t, a);
        Zr && lv(e, a), t.then(s, s);
      }
    }
    function D1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function k1(e, t) {
      var a = e.tag;
      if ((e.mode & gt) === Pe && (a === q || a === _e || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function GR(e) {
      var t = e;
      do {
        if (t.tag === ge && s1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function KR(e, t, a, i, u) {
      if ((e.mode & gt) === Pe) {
        if (e === t)
          e.flags |= Kr;
        else {
          if (e.flags |= je, a.flags |= Ac, a.flags &= -52805, a.tag === j) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ot;
            else {
              var f = Wu(tn, Ge);
              f.tag = dm, Bo(a, f, Ge);
            }
          }
          a.lanes = ut(a.lanes, Ge);
        }
        return e;
      }
      return e.flags |= Kr, e.lanes = u, e;
    }
    function O1(e, t, a, i, u) {
      if (a.flags |= hs, Zr && lv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        k1(a), Fr() && a.mode & gt && BC();
        var f = GR(t);
        if (f !== null) {
          f.flags &= -257, KR(f, t, a, e, u), f.mode & gt && QR(e, s, u), D1(f, e, s);
          return;
        } else {
          if (!rh(u)) {
            QR(e, s, u), yE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Fr() && a.mode & gt) {
        BC();
        var m = GR(t);
        if (m !== null) {
          (m.flags & Kr) === He && (m.flags |= Qr), KR(m, t, a, e, u), Og(lc(i, a));
          return;
        }
      }
      i = lc(i, a), sD(i);
      var R = t;
      do {
        switch (R.tag) {
          case B: {
            var T = i;
            R.flags |= Kr;
            var L = Os(u);
            R.lanes = ut(R.lanes, L);
            var O = qR(R, T, L);
            Yg(R, O);
            return;
          }
          case j:
            var H = i, $ = R.type, Q = R.stateNode;
            if ((R.flags & je) === He && (typeof $.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !G0(Q))) {
              R.flags |= Kr;
              var Ee = Os(u);
              R.lanes = ut(R.lanes, Ee);
              var Ie = jS(R, H, Ee);
              Yg(R, Ie);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function N1() {
      return null;
    }
    var Ip = y.ReactCurrentOwner, pl = !1, HS, Yp, PS, BS, VS, uc, $S, Bm, Wp;
    HS = {}, Yp = {}, PS = {}, BS = {}, VS = {}, uc = !1, $S = {}, Bm = {}, Wp = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = ZC(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function L1(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function XR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f = a.render, p = t.ref, m, R;
      Pf(t, u), ma(t);
      {
        if (Ip.current = t, Wn(!0), m = Wf(e, t, f, i, p, u), R = qf(), t.mode & Jt) {
          gn(!0);
          try {
            m = Wf(e, t, f, i, p, u), R = qf();
          } finally {
            gn(!1);
          }
        }
        Wn(!1);
      }
      return ya(), e !== null && !pl ? (pR(e, t, u), qu(e, t, u)) : (Fr() && R && wg(t), t.flags |= ii, Ca(e, t, m, u), t.child);
    }
    function JR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (FD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = td(s), t.tag = Fe, t.type = f, WS(t, s), ZR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && ul(
            p,
            i,
            // Resolved props
            "prop",
            Dt(s)
          ), a.defaultProps !== void 0) {
            var m = Dt(s) || "Unknown";
            Wp[m] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", m), Wp[m] = !0);
          }
        }
        var R = DE(a.type, null, i, t, t.mode, u);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var T = a.type, L = T.propTypes;
        L && ul(
          L,
          i,
          // Resolved props
          "prop",
          Dt(T)
        );
      }
      var O = e.child, H = JS(e, u);
      if (!H) {
        var $ = O.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Be, Q($, i) && e.ref === t.ref)
          return qu(e, t, u);
      }
      t.flags |= ii;
      var Ee = dc(O, i);
      return Ee.ref = t.ref, Ee.return = t, t.child = Ee, Ee;
    }
    function ZR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === nt) {
          var f = s, p = f._payload, m = f._init;
          try {
            s = m(p);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && ul(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Be(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (pl = !1, t.pendingProps = i = T, JS(e, u))
            (e.flags & Ac) !== He && (pl = !0);
          else return t.lanes = e.lanes, qu(e, t, u);
      }
      return IS(e, t, a, i, u);
    }
    function e0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || me)
        if ((t.mode & gt) === Pe) {
          var f = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ey(t, a);
        } else if (ea(a, ga)) {
          var L = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var O = s !== null ? s.baseLanes : a;
          ey(t, O);
        } else {
          var p = null, m;
          if (s !== null) {
            var R = s.baseLanes;
            m = ut(R, a);
          } else
            m = a;
          t.lanes = t.childLanes = ga;
          var T = {
            baseLanes: m,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, ey(t, m), null;
        }
      else {
        var H;
        s !== null ? (H = ut(s.baseLanes, a), t.memoizedState = null) : H = a, ey(t, H);
      }
      return Ca(e, t, u, a), t.child;
    }
    function M1(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function A1(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function U1(e, t, a) {
      {
        t.flags |= wt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function t0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= Ro);
    }
    function IS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f;
      {
        var p = Mf(t, a, !0);
        f = Af(t, p);
      }
      var m, R;
      Pf(t, u), ma(t);
      {
        if (Ip.current = t, Wn(!0), m = Wf(e, t, a, i, f, u), R = qf(), t.mode & Jt) {
          gn(!0);
          try {
            m = Wf(e, t, a, i, f, u), R = qf();
          } finally {
            gn(!1);
          }
        }
        Wn(!1);
      }
      return ya(), e !== null && !pl ? (pR(e, t, u), qu(e, t, u)) : (Fr() && R && wg(t), t.flags |= ii, Ca(e, t, m, u), t.child);
    }
    function n0(e, t, a, i, u) {
      {
        switch (JD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), m = p.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= je, t.flags |= Kr;
            var R = new Error("Simulated error coming from DevTools"), T = Os(u);
            t.lanes = ut(t.lanes, T);
            var L = jS(t, lc(R, t), T);
            Yg(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && ul(
            O,
            i,
            // Resolved props
            "prop",
            Dt(a)
          );
        }
      }
      var H;
      Kl(a) ? (H = !0, Zh(t)) : H = !1, Pf(t, u);
      var $ = t.stateNode, Q;
      $ === null ? ($m(e, t), YR(t, a, i), US(t, a, i, u), Q = !0) : e === null ? Q = w1(t, a, i, u) : Q = b1(e, t, a, i, u);
      var Ee = YS(e, t, a, Q, H, u);
      {
        var Ie = t.stateNode;
        Q && Ie.props !== i && (uc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), uc = !0);
      }
      return Ee;
    }
    function YS(e, t, a, i, u, s) {
      t0(e, t);
      var f = (t.flags & je) !== He;
      if (!i && !f)
        return u && FC(t, a, !1), qu(e, t, s);
      var p = t.stateNode;
      Ip.current = t;
      var m;
      if (f && typeof a.getDerivedStateFromError != "function")
        m = null, PR();
      else {
        ma(t);
        {
          if (Wn(!0), m = p.render(), t.mode & Jt) {
            gn(!0);
            try {
              p.render();
            } finally {
              gn(!1);
            }
          }
          Wn(!1);
        }
        ya();
      }
      return t.flags |= ii, e !== null && f ? L1(e, t, m, s) : Ca(e, t, m, s), t.memoizedState = p.state, u && FC(t, a, !0), t.child;
    }
    function r0(e) {
      var t = e.stateNode;
      t.pendingContext ? UC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && UC(e, t.context, !1), Wg(e, t.containerInfo);
    }
    function z1(e, t, a) {
      if (r0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      lR(e, t), mm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var m = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, R = t.updateQueue;
        if (R.baseState = m, t.memoizedState = m, t.flags & Qr) {
          var T = lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return a0(e, t, p, a, T);
        } else if (p !== s) {
          var L = lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return a0(e, t, p, a, L);
        } else {
          Hx(t);
          var O = ZC(t, null, p, a);
          t.child = O;
          for (var H = O; H; )
            H.flags = H.flags & -3 | La, H = H.sibling;
        }
      } else {
        if (Ff(), p === s)
          return qu(e, t, a);
        Ca(e, t, p, a);
      }
      return t.child;
    }
    function a0(e, t, a, i, u) {
      return Ff(), Og(u), t.flags |= Qr, Ca(e, t, a, i), t.child;
    }
    function F1(e, t, a) {
      cR(t), e === null && kg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = cg(i, u);
      return p ? f = null : s !== null && cg(i, s) && (t.flags |= li), t0(e, t), Ca(e, t, f, a), t.child;
    }
    function j1(e, t) {
      return e === null && kg(t), null;
    }
    function H1(e, t, a, i) {
      $m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, m = p(f);
      t.type = m;
      var R = t.tag = jD(m), T = dl(m, u), L;
      switch (R) {
        case q:
          return WS(t, m), t.type = m = td(m), L = IS(null, t, m, T, i), L;
        case j:
          return t.type = m = RE(m), L = n0(null, t, m, T, i), L;
        case _e:
          return t.type = m = TE(m), L = XR(null, t, m, T, i), L;
        case Ze: {
          if (t.type !== t.elementType) {
            var O = m.propTypes;
            O && ul(
              O,
              T,
              // Resolved for outer only
              "prop",
              Dt(m)
            );
          }
          return L = JR(
            null,
            t,
            m,
            dl(m.type, T),
            // The inner type can have defaults too
            i
          ), L;
        }
      }
      var H = "";
      throw m !== null && typeof m == "object" && m.$$typeof === nt && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function P1(e, t, a, i, u) {
      $m(e, t), t.tag = j;
      var s;
      return Kl(a) ? (s = !0, Zh(t)) : s = !1, Pf(t, u), YR(t, a, i), US(t, a, i, u), YS(null, t, a, !0, s, u);
    }
    function B1(e, t, a, i) {
      $m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Mf(t, a, !1);
        s = Af(t, f);
      }
      Pf(t, i);
      var p, m;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Dt(a) || "Unknown";
          HS[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), HS[R] = !0);
        }
        t.mode & Jt && sl.recordLegacyContextWarning(t, null), Wn(!0), Ip.current = t, p = Wf(null, t, a, u, s, i), m = qf(), Wn(!1);
      }
      if (ya(), t.flags |= ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var T = Dt(a) || "Unknown";
        Yp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Yp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var L = Dt(a) || "Unknown";
          Yp[L] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Yp[L] = !0);
        }
        t.tag = j, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Kl(a) ? (O = !0, Zh(t)) : O = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Ig(t), IR(t, p), US(t, a, u, i), YS(null, t, a, !0, O, i);
      } else {
        if (t.tag = q, t.mode & Jt) {
          gn(!0);
          try {
            p = Wf(null, t, a, u, s, i), m = qf();
          } finally {
            gn(!1);
          }
        }
        return Fr() && m && wg(t), Ca(null, t, p, i), WS(t, a), t.child;
      }
    }
    function WS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), VS[u] || (VS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Dt(t) || "Unknown";
          Wp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Wp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Dt(t) || "Unknown";
          BS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), BS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Dt(t) || "Unknown";
          PS[m] || (g("%s: Function components do not support contextType.", m), PS[m] = !0);
        }
      }
    }
    var qS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Mt
    };
    function QS(e) {
      return {
        baseLanes: e,
        cachePool: N1(),
        transitions: null
      };
    }
    function V1(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Gg(e, Up);
    }
    function I1(e, t) {
      return Ns(e.childLanes, t);
    }
    function i0(e, t, a) {
      var i = t.pendingProps;
      ZD(t) && (t.flags |= je);
      var u = cl.current, s = !1, f = (t.flags & je) !== He;
      if (f || $1(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = o1(u, dR)), u = Vf(u), $o(t, u), e === null) {
        kg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var m = p.dehydrated;
          if (m !== null)
            return G1(t, m);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var L = Y1(t, R, T, a), O = t.child;
          return O.memoizedState = QS(a), t.memoizedState = qS, L;
        } else
          return GS(t, R);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var $ = H.dehydrated;
          if ($ !== null)
            return K1(e, t, f, i, $, H, a);
        }
        if (s) {
          var Q = i.fallback, Ee = i.children, Ie = q1(e, t, Ee, Q, a), Ue = t.child, _t = e.child.memoizedState;
          return Ue.memoizedState = _t === null ? QS(a) : V1(_t, a), Ue.childLanes = I1(e, a), t.memoizedState = qS, Ie;
        } else {
          var Rt = i.children, U = W1(e, t, Rt, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function GS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = KS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Y1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, m;
      return (u & gt) === Pe && s !== null ? (p = s, p.childLanes = ee, p.pendingProps = f, e.mode & zt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), m = Xo(a, u, i, null)) : (p = KS(f, u), m = Xo(a, u, i, null)), p.return = e, m.return = e, p.sibling = m, e.child = p, m;
    }
    function KS(e, t, a) {
      return lT(e, t, ee, null);
    }
    function l0(e, t) {
      return dc(e, t);
    }
    function W1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = l0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & gt) === Pe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Na) : p.push(s);
      }
      return t.child = f, f;
    }
    function q1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, m = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & gt) === Pe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        R = T, R.childLanes = ee, R.pendingProps = m, t.mode & zt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = f.selfBaseDuration, R.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        R = l0(f, m), R.subtreeFlags = f.subtreeFlags & zn;
      var L;
      return p !== null ? L = dc(p, i) : (L = Xo(i, s, u, null), L.flags |= bn), L.return = t, R.return = t, R.sibling = L, t.child = R, L;
    }
    function Vm(e, t, a, i) {
      i !== null && Og(i), jf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = GS(t, s);
      return f.flags |= bn, t.memoizedState = null, f;
    }
    function Q1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = KS(f, s), m = Xo(i, s, u, null);
      return m.flags |= bn, p.return = t, m.return = t, p.sibling = m, t.child = p, (t.mode & gt) !== Pe && jf(t, e.child, null, u), m;
    }
    function G1(e, t, a) {
      return (e.mode & gt) === Pe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ge) : vg(t) ? e.lanes = Tr : e.lanes = ga, null;
    }
    function K1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Qr) {
          t.flags &= -257;
          var U = zS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Vm(e, t, f, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= je, null;
          var G = i.children, z = i.fallback, ie = Q1(e, t, G, z, f), be = t.child;
          return be.memoizedState = QS(f), t.memoizedState = qS, ie;
        }
      else {
        if (Fx(), (t.mode & gt) === Pe)
          return Vm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vg(u)) {
          var p, m, R;
          {
            var T = ex(u);
            p = T.digest, m = T.message, R = T.stack;
          }
          var L;
          m ? L = new Error(m) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = zS(L, p, R);
          return Vm(e, t, f, O);
        }
        var H = ea(f, e.childLanes);
        if (pl || H) {
          var $ = Zm();
          if ($ !== null) {
            var Q = Gd($, f);
            if (Q !== Mt && Q !== s.retryLane) {
              s.retryLane = Q;
              var Ee = tn;
              Ba(e, Q), Sr($, e, Q, Ee);
            }
          }
          yE();
          var Ie = zS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Vm(e, t, f, Ie);
        } else if (kC(u)) {
          t.flags |= je, t.child = e.child;
          var Ue = CD.bind(null, e);
          return tx(u, Ue), null;
        } else {
          Px(t, u, s.treeContext);
          var _t = i.children, Rt = GS(t, _t);
          return Rt.flags |= La, Rt;
        }
      }
    }
    function u0(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), Pg(e.return, t, a);
    }
    function X1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ge) {
          var u = i.memoizedState;
          u !== null && u0(i, a, e);
        } else if (i.tag === sn)
          u0(i, a, e);
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
    function J1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Z1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !$S[e])
        if ($S[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function e_(e, t) {
      e !== void 0 && !Bm[e] && (e !== "collapsed" && e !== "hidden" ? (Bm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Bm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function o0(e, t) {
      {
        var a = pt(e), i = !a && typeof lt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function t_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (pt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!o0(e[a], a))
              return;
        } else {
          var i = lt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!o0(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function XS(e, t, a, i, u) {
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
    function s0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Z1(u), e_(s, u), t_(f, u), Ca(e, t, f, a);
      var p = cl.current, m = Gg(p, Up);
      if (m)
        p = Kg(p, Up), t.flags |= je;
      else {
        var R = e !== null && (e.flags & je) !== He;
        R && X1(t, t.child, a), p = Vf(p);
      }
      if ($o(t, p), (t.mode & gt) === Pe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = J1(t.child), L;
            T === null ? (L = t.child, t.child = null) : (L = T.sibling, T.sibling = null), XS(
              t,
              !1,
              // isBackwards
              L,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var O = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var $ = H.alternate;
              if ($ !== null && Em($) === null) {
                t.child = H;
                break;
              }
              var Q = H.sibling;
              H.sibling = O, O = H, H = Q;
            }
            XS(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            XS(
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
    function n_(e, t, a) {
      Wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var c0 = !1;
    function r_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || c0 || (c0 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && ul(m, s, "prop", "Context.Provider");
      }
      if (nR(t, u, p), f !== null) {
        var R = f.value;
        if (Ce(R, p)) {
          if (f.children === s.children && !Xh())
            return qu(e, t, a);
        } else
          Zx(t, u, a);
      }
      var T = s.children;
      return Ca(e, t, T, a), t.child;
    }
    var f0 = !1;
    function a_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (f0 || (f0 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Pf(t, a);
      var f = nr(i);
      ma(t);
      var p;
      return Ip.current = t, Wn(!0), p = s(f), Wn(!1), ya(), t.flags |= ii, Ca(e, t, p, a), t.child;
    }
    function qp() {
      pl = !0;
    }
    function $m(e, t) {
      (t.mode & gt) === Pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bn);
    }
    function qu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), PR(), iv(t.lanes), ea(a, t.childLanes) ? (Xx(e, t), t.child) : null;
    }
    function i_(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Na) : s.push(e), a.flags |= bn, a;
      }
    }
    function JS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function l_(e, t, a) {
      switch (t.tag) {
        case B:
          r0(t), t.stateNode, Ff();
          break;
        case ue:
          cR(t);
          break;
        case j: {
          var i = t.type;
          Kl(i) && Zh(t);
          break;
        }
        case le:
          Wg(t, t.stateNode.containerInfo);
          break;
        case Ne: {
          var u = t.memoizedProps.value, s = t.type._context;
          nR(t, s, u);
          break;
        }
        case Qe:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= wt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ge: {
          var m = t.memoizedState;
          if (m !== null) {
            if (m.dehydrated !== null)
              return $o(t, Vf(cl.current)), t.flags |= je, null;
            var R = t.child, T = R.childLanes;
            if (ea(a, T))
              return i0(e, t, a);
            $o(t, Vf(cl.current));
            var L = qu(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            $o(t, Vf(cl.current));
          break;
        }
        case sn: {
          var O = (e.flags & je) !== He, H = ea(a, t.childLanes);
          if (O) {
            if (H)
              return s0(e, t, a);
            t.flags |= je;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), $o(t, cl.current), H)
            break;
          return null;
        }
        case Ve:
        case Bt:
          return t.lanes = ee, e0(e, t, a);
      }
      return qu(e, t, a);
    }
    function d0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return i_(e, t, DE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Xh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pl = !0;
        else {
          var s = JS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & je) === He)
            return pl = !1, l_(e, t, a);
          (e.flags & Ac) !== He ? pl = !0 : pl = !1;
        }
      } else if (pl = !1, Fr() && Nx(t)) {
        var f = t.index, p = Lx();
        PC(t, p, f);
      }
      switch (t.lanes = ee, t.tag) {
        case K:
          return B1(e, t, t.type, a);
        case $t: {
          var m = t.elementType;
          return H1(e, t, m, a);
        }
        case q: {
          var R = t.type, T = t.pendingProps, L = t.elementType === R ? T : dl(R, T);
          return IS(e, t, R, L, a);
        }
        case j: {
          var O = t.type, H = t.pendingProps, $ = t.elementType === O ? H : dl(O, H);
          return n0(e, t, O, $, a);
        }
        case B:
          return z1(e, t, a);
        case ue:
          return F1(e, t, a);
        case ne:
          return j1(e, t);
        case ge:
          return i0(e, t, a);
        case le:
          return n_(e, t, a);
        case _e: {
          var Q = t.type, Ee = t.pendingProps, Ie = t.elementType === Q ? Ee : dl(Q, Ee);
          return XR(e, t, Q, Ie, a);
        }
        case pe:
          return M1(e, t, a);
        case oe:
          return A1(e, t, a);
        case Qe:
          return U1(e, t, a);
        case Ne:
          return r_(e, t, a);
        case Je:
          return a_(e, t, a);
        case Ze: {
          var Ue = t.type, _t = t.pendingProps, Rt = dl(Ue, _t);
          if (t.type !== t.elementType) {
            var U = Ue.propTypes;
            U && ul(
              U,
              Rt,
              // Resolved for outer only
              "prop",
              Dt(Ue)
            );
          }
          return Rt = dl(Ue.type, Rt), JR(e, t, Ue, Rt, a);
        }
        case Fe:
          return ZR(e, t, t.type, t.pendingProps, a);
        case Ot: {
          var G = t.type, z = t.pendingProps, ie = t.elementType === G ? z : dl(G, z);
          return P1(e, t, G, ie, a);
        }
        case sn:
          return s0(e, t, a);
        case Nt:
          break;
        case Ve:
          return e0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qf(e) {
      e.flags |= wt;
    }
    function p0(e) {
      e.flags |= Cn, e.flags |= Ro;
    }
    var v0, ZS, h0, m0;
    v0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === ne)
          Db(e, u.stateNode);
        else if (u.tag !== le) {
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
    }, ZS = function(e, t) {
    }, h0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = qg(), m = Ob(f, a, s, i, u, p);
        t.updateQueue = m, m && Qf(t);
      }
    }, m0 = function(e, t, a, i) {
      a !== i && Qf(t);
    };
    function Qp(e, t) {
      if (!Fr())
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
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = He;
      if (t) {
        if ((e.mode & zt) !== Pe) {
          for (var m = e.selfBaseDuration, R = e.child; R !== null; )
            a = ut(a, ut(R.lanes, R.childLanes)), i |= R.subtreeFlags & zn, i |= R.flags & zn, m += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = m;
        } else
          for (var T = e.child; T !== null; )
            a = ut(a, ut(T.lanes, T.childLanes)), i |= T.subtreeFlags & zn, i |= T.flags & zn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & zt) !== Pe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ut(a, ut(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ut(a, ut(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function u_(e, t, a) {
      if (Yx() && (t.mode & gt) !== Pe && (t.flags & je) === He)
        return qC(t), Ff(), t.flags |= Qr | hs | Kr, !1;
      var i = am(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), Hr(t), (t.mode & zt) !== Pe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & je) === He && (t.memoizedState = null), t.flags |= wt, Hr(t), (t.mode & zt) !== Pe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return QC(), !0;
    }
    function y0(e, t, a) {
      var i = t.pendingProps;
      switch (bg(t), t.tag) {
        case K:
        case $t:
        case Fe:
        case q:
        case _e:
        case pe:
        case oe:
        case Qe:
        case Je:
        case Ze:
          return Hr(t), null;
        case j: {
          var u = t.type;
          return Kl(u) && Jh(t), Hr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (Bf(t), Cg(t), Jg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = am(t);
            if (f)
              Qf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Qr) !== He) && (t.flags |= qn, QC());
            }
          }
          return ZS(e, t), Hr(t), null;
        }
        case ue: {
          Qg(t);
          var m = sR(), R = t.type;
          if (e !== null && t.stateNode != null)
            h0(e, t, R, i, m), e.ref !== t.ref && p0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var T = qg(), L = am(t);
            if (L)
              Bx(t, m, T) && Qf(t);
            else {
              var O = _b(R, i, m, T, t);
              v0(O, t, !1, !1), t.stateNode = O, kb(O, R, i, m) && Qf(t);
            }
            t.ref !== null && p0(t);
          }
          return Hr(t), null;
        }
        case ne: {
          var H = i;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            m0(e, t, $, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = sR(), Ee = qg(), Ie = am(t);
            Ie ? Vx(t) && Qf(t) : t.stateNode = Nb(H, Q, Ee, t);
          }
          return Hr(t), null;
        }
        case ge: {
          $f(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = u_(e, t, Ue);
            if (!_t)
              return t.flags & Kr ? t : null;
          }
          if ((t.flags & je) !== He)
            return t.lanes = a, (t.mode & zt) !== Pe && TS(t), t;
          var Rt = Ue !== null, U = e !== null && e.memoizedState !== null;
          if (Rt !== U && Rt) {
            var G = t.child;
            if (G.flags |= Un, (t.mode & gt) !== Pe) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              z || Gg(cl.current, dR) ? oD() : yE();
            }
          }
          var ie = t.updateQueue;
          if (ie !== null && (t.flags |= wt), Hr(t), (t.mode & zt) !== Pe && Rt) {
            var be = t.child;
            be !== null && (t.treeBaseDuration -= be.treeBaseDuration);
          }
          return null;
        }
        case le:
          return Bf(t), ZS(e, t), e === null && wx(t.stateNode.containerInfo), Hr(t), null;
        case Ne:
          var Re = t.type._context;
          return Hg(Re, t), Hr(t), null;
        case Ot: {
          var Xe = t.type;
          return Kl(Xe) && Jh(t), Hr(t), null;
        }
        case sn: {
          $f(t);
          var at = t.memoizedState;
          if (at === null)
            return Hr(t), null;
          var en = (t.flags & je) !== He, Ht = at.rendering;
          if (Ht === null)
            if (en)
              Qp(at, !1);
            else {
              var Xn = cD() && (e === null || (e.flags & je) === He);
              if (!Xn)
                for (var Pt = t.child; Pt !== null; ) {
                  var Vn = Em(Pt);
                  if (Vn !== null) {
                    en = !0, t.flags |= je, Qp(at, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= wt), t.subtreeFlags = He, Jx(t, a), $o(t, Kg(cl.current, Up)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              at.tail !== null && Qn() > j0() && (t.flags |= je, en = !0, Qp(at, !1), t.lanes = Pd);
            }
          else {
            if (!en) {
              var Ir = Em(Ht);
              if (Ir !== null) {
                t.flags |= je, en = !0;
                var pi = Ir.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= wt), Qp(at, !0), at.tail === null && at.tailMode === "hidden" && !Ht.alternate && !Fr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - at.renderingStartTime > j0() && a !== ga && (t.flags |= je, en = !0, Qp(at, !1), t.lanes = Pd);
            }
            if (at.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var wa = at.last;
              wa !== null ? wa.sibling = Ht : t.child = Ht, at.last = Ht;
            }
          }
          if (at.tail !== null) {
            var ba = at.tail;
            at.rendering = ba, at.tail = ba.sibling, at.renderingStartTime = Qn(), ba.sibling = null;
            var oa = cl.current;
            return en ? oa = Kg(oa, Up) : oa = Vf(oa), $o(t, oa), ba;
          }
          return Hr(t), null;
        }
        case Nt:
          break;
        case Ve:
        case Bt: {
          mE(t);
          var Ju = t.memoizedState, nd = Ju !== null;
          if (e !== null) {
            var cv = e.memoizedState, au = cv !== null;
            au !== nd && (t.flags |= Un);
          }
          return !nd || (t.mode & gt) === Pe ? Hr(t) : ea(ru, ga) && (Hr(t), t.subtreeFlags & (bn | wt) && (t.flags |= Un)), null;
        }
        case Lt:
          return null;
        case At:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function o_(e, t, a) {
      switch (bg(t), t.tag) {
        case j: {
          var i = t.type;
          Kl(i) && Jh(t);
          var u = t.flags;
          return u & Kr ? (t.flags = u & -65537 | je, (t.mode & zt) !== Pe && TS(t), t) : null;
        }
        case B: {
          t.stateNode, Bf(t), Cg(t), Jg();
          var s = t.flags;
          return (s & Kr) !== He && (s & je) === He ? (t.flags = s & -65537 | je, t) : null;
        }
        case ue:
          return Qg(t), null;
        case ge: {
          $f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var p = t.flags;
          return p & Kr ? (t.flags = p & -65537 | je, (t.mode & zt) !== Pe && TS(t), t) : null;
        }
        case sn:
          return $f(t), null;
        case le:
          return Bf(t), null;
        case Ne:
          var m = t.type._context;
          return Hg(m, t), null;
        case Ve:
        case Bt:
          return mE(t), null;
        case Lt:
          return null;
        default:
          return null;
      }
    }
    function g0(e, t, a) {
      switch (bg(t), t.tag) {
        case j: {
          var i = t.type.childContextTypes;
          i != null && Jh(t);
          break;
        }
        case B: {
          t.stateNode, Bf(t), Cg(t), Jg();
          break;
        }
        case ue: {
          Qg(t);
          break;
        }
        case le:
          Bf(t);
          break;
        case ge:
          $f(t);
          break;
        case sn:
          $f(t);
          break;
        case Ne:
          var u = t.type._context;
          Hg(u, t);
          break;
        case Ve:
        case Bt:
          mE(t);
          break;
      }
    }
    var S0 = null;
    S0 = /* @__PURE__ */ new Set();
    var Im = !1, Pr = !1, s_ = typeof WeakSet == "function" ? WeakSet : Set, Oe = null, Gf = null, Kf = null;
    function c_(e) {
      Ll(null, function() {
        throw e;
      }), vs();
    }
    var f_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & zt)
        try {
          tu(), t.componentWillUnmount();
        } finally {
          eu(e);
        }
      else
        t.componentWillUnmount();
    };
    function E0(e, t) {
      try {
        Wo(pr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function eE(e, t, a) {
      try {
        f_(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function d_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function C0(e, t) {
      try {
        T0(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function Xf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (qe && ht && e.mode & zt)
              try {
                tu(), i = a(null);
              } finally {
                eu(e);
              }
            else
              i = a(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function Ym(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var R0 = !1;
    function p_(e, t) {
      bb(e.containerInfo), Oe = t, v_();
      var a = R0;
      return R0 = !1, a;
    }
    function v_() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        (e.subtreeFlags & Al) !== He && t !== null ? (t.return = e, Oe = t) : h_();
      }
    }
    function h_() {
      for (; Oe !== null; ) {
        var e = Oe;
        Gt(e);
        try {
          m_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function m_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & qn) !== He) {
        switch (Gt(e), e.tag) {
          case q:
          case _e:
          case Fe:
            break;
          case j: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !uc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : dl(e.type, i), u);
              {
                var p = S0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var m = e.stateNode;
              Kb(m.containerInfo);
            }
            break;
          }
          case ue:
          case ne:
          case le:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function vl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Va ? tl(t) : (e & pr) !== Va && ys(t), (e & Xl) !== Va && uv(!0), Ym(t, a, p), (e & Xl) !== Va && uv(!1), (e & jr) !== Va ? jl() : (e & pr) !== Va && jd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Wo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Va ? Fd(t) : (e & pr) !== Va && Pc(t);
            var f = s.create;
            (e & Xl) !== Va && uv(!0), s.destroy = f(), (e & Xl) !== Va && uv(!1), (e & jr) !== Va ? Jv() : (e & pr) !== Va && Zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var m = void 0;
                (s.tag & pr) !== He ? m = "useLayoutEffect" : (s.tag & Xl) !== He ? m = "useInsertionEffect" : m = "useEffect";
                var R = void 0;
                p === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? R = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", m, R);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function y_(e, t) {
      if ((t.flags & wt) !== He)
        switch (t.tag) {
          case Qe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = jR(), p = t.alternate === null ? "mount" : "update";
            FR() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var m = t.return;
            e: for (; m !== null; ) {
              switch (m.tag) {
                case B:
                  var R = m.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case Qe:
                  var T = m.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              m = m.return;
            }
            break;
          }
        }
    }
    function g_(e, t, a, i) {
      if ((a.flags & zl) !== He)
        switch (a.tag) {
          case q:
          case _e:
          case Fe: {
            if (!Pr)
              if (a.mode & zt)
                try {
                  tu(), Wo(pr | dr, a);
                } finally {
                  eu(a);
                }
              else
                Wo(pr | dr, a);
            break;
          }
          case j: {
            var u = a.stateNode;
            if (a.flags & wt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !uc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & zt)
                  try {
                    tu(), u.componentDidMount();
                  } finally {
                    eu(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : dl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !uc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & zt)
                  try {
                    tu(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    eu(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !uc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), oR(a, p, u));
            break;
          }
          case B: {
            var m = a.updateQueue;
            if (m !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    R = a.child.stateNode;
                    break;
                  case j:
                    R = a.child.stateNode;
                    break;
                }
              oR(a, m, R);
            }
            break;
          }
          case ue: {
            var T = a.stateNode;
            if (t === null && a.flags & wt) {
              var L = a.type, O = a.memoizedProps;
              zb(T, L, O);
            }
            break;
          }
          case ne:
            break;
          case le:
            break;
          case Qe: {
            {
              var H = a.memoizedProps, $ = H.onCommit, Q = H.onRender, Ee = a.stateNode.effectDuration, Ie = jR(), Ue = t === null ? "mount" : "update";
              FR() && (Ue = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Ue, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ie);
              {
                typeof $ == "function" && $(a.memoizedProps.id, Ue, Ee, Ie), hD(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case B:
                      var Rt = _t.stateNode;
                      Rt.effectDuration += Ee;
                      break e;
                    case Qe:
                      var U = _t.stateNode;
                      U.effectDuration += Ee;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case ge: {
            x_(e, a);
            break;
          }
          case sn:
          case Ot:
          case Nt:
          case Ve:
          case Bt:
          case At:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Cn && T0(a);
    }
    function S_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          if (e.mode & zt)
            try {
              tu(), E0(e, e.return);
            } finally {
              eu(e);
            }
          else
            E0(e, e.return);
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && d_(e, e.return, t), C0(e, e.return);
          break;
        }
        case ue: {
          C0(e, e.return);
          break;
        }
      }
    }
    function E_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Wb(u) : Qb(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === ne) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? qb(s) : Gb(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === Ve || i.tag === Bt) && i.memoizedState !== null && i !== e)) {
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
    function T0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & zt)
            try {
              tu(), u = t(i);
            } finally {
              eu(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = i;
      }
    }
    function C_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function w0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, w0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && _x(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function R_(e) {
      for (var t = e.return; t !== null; ) {
        if (b0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b0(e) {
      return e.tag === ue || e.tag === B || e.tag === le;
    }
    function x0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || b0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== ne && t.tag !== nn; ) {
          if (t.flags & bn || t.child === null || t.tag === le)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & bn))
          return t.stateNode;
      }
    }
    function T_(e) {
      var t = R_(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & li && (DC(a), t.flags &= -33);
          var i = x0(e);
          nE(e, i, a);
          break;
        }
        case B:
        case le: {
          var u = t.stateNode.containerInfo, s = x0(e);
          tE(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function tE(e, t, a) {
      var i = e.tag, u = i === ue || i === ne;
      if (u) {
        var s = e.stateNode;
        t ? Vb(a, s, t) : Pb(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          tE(f, t, a);
          for (var p = f.sibling; p !== null; )
            tE(p, t, a), p = p.sibling;
        }
      }
    }
    function nE(e, t, a) {
      var i = e.tag, u = i === ue || i === ne;
      if (u) {
        var s = e.stateNode;
        t ? Bb(a, s, t) : Hb(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          nE(f, t, a);
          for (var p = f.sibling; p !== null; )
            nE(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, hl = !1;
    function w_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Br = i.stateNode, hl = !1;
              break e;
            }
            case B: {
              Br = i.stateNode.containerInfo, hl = !0;
              break e;
            }
            case le: {
              Br = i.stateNode.containerInfo, hl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _0(e, t, a), Br = null, hl = !1;
      }
      C_(a);
    }
    function qo(e, t, a) {
      for (var i = a.child; i !== null; )
        _0(e, t, i), i = i.sibling;
    }
    function _0(e, t, a) {
      switch (Ad(a), a.tag) {
        case ue:
          Pr || Xf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ne: {
          {
            var i = Br, u = hl;
            Br = null, qo(e, t, a), Br = i, hl = u, Br !== null && (hl ? Ib(Br, a.stateNode) : $b(Br, a.stateNode));
          }
          return;
        }
        case nn: {
          Br !== null && (hl ? Yb(Br, a.stateNode) : pg(Br, a.stateNode));
          return;
        }
        case le: {
          {
            var s = Br, f = hl;
            Br = a.stateNode.containerInfo, hl = !0, qo(e, t, a), Br = s, hl = f;
          }
          return;
        }
        case q:
        case _e:
        case Ze:
        case Fe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var m = p.lastEffect;
              if (m !== null) {
                var R = m.next, T = R;
                do {
                  var L = T, O = L.destroy, H = L.tag;
                  O !== void 0 && ((H & Xl) !== Va ? Ym(a, t, O) : (H & pr) !== Va && (ys(a), a.mode & zt ? (tu(), Ym(a, t, O), eu(a)) : Ym(a, t, O), jd())), T = T.next;
                } while (T !== R);
              }
            }
          }
          qo(e, t, a);
          return;
        }
        case j: {
          if (!Pr) {
            Xf(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && eE(a, t, $);
          }
          qo(e, t, a);
          return;
        }
        case Nt: {
          qo(e, t, a);
          return;
        }
        case Ve: {
          if (
            // TODO: Remove this dead flag
            a.mode & gt
          ) {
            var Q = Pr;
            Pr = Q || a.memoizedState !== null, qo(e, t, a), Pr = Q;
          } else
            qo(e, t, a);
          break;
        }
        default: {
          qo(e, t, a);
          return;
        }
      }
    }
    function b_(e) {
      e.memoizedState;
    }
    function x_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && cx(s);
          }
        }
      }
    }
    function D0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new s_()), t.forEach(function(i) {
          var u = RD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr)
              if (Gf !== null && Kf !== null)
                lv(Kf, Gf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function __(e, t, a) {
      Gf = a, Kf = e, Gt(t), k0(t, e), Gt(t), Gf = null, Kf = null;
    }
    function ml(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            w_(e, t, s);
          } catch (m) {
            pn(s, t, m);
          }
        }
      var f = bl();
      if (t.subtreeFlags & Ul)
        for (var p = t.child; p !== null; )
          Gt(p), k0(p, e), p = p.sibling;
      Gt(f);
    }
    function k0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case q:
        case _e:
        case Ze:
        case Fe: {
          if (ml(t, e), nu(e), u & wt) {
            try {
              vl(Xl | dr, e, e.return), Wo(Xl | dr, e);
            } catch (Xe) {
              pn(e, e.return, Xe);
            }
            if (e.mode & zt) {
              try {
                tu(), vl(pr | dr, e, e.return);
              } catch (Xe) {
                pn(e, e.return, Xe);
              }
              eu(e);
            } else
              try {
                vl(pr | dr, e, e.return);
              } catch (Xe) {
                pn(e, e.return, Xe);
              }
          }
          return;
        }
        case j: {
          ml(t, e), nu(e), u & Cn && i !== null && Xf(i, i.return);
          return;
        }
        case ue: {
          ml(t, e), nu(e), u & Cn && i !== null && Xf(i, i.return);
          {
            if (e.flags & li) {
              var s = e.stateNode;
              try {
                DC(s);
              } catch (Xe) {
                pn(e, e.return, Xe);
              }
            }
            if (u & wt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, m = i !== null ? i.memoizedProps : p, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Fb(f, T, R, m, p, e);
                  } catch (Xe) {
                    pn(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case ne: {
          if (ml(t, e), nu(e), u & wt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, O = e.memoizedProps, H = i !== null ? i.memoizedProps : O;
            try {
              jb(L, H, O);
            } catch (Xe) {
              pn(e, e.return, Xe);
            }
          }
          return;
        }
        case B: {
          if (ml(t, e), nu(e), u & wt && i !== null) {
            var $ = i.memoizedState;
            if ($.isDehydrated)
              try {
                sx(t.containerInfo);
              } catch (Xe) {
                pn(e, e.return, Xe);
              }
          }
          return;
        }
        case le: {
          ml(t, e), nu(e);
          return;
        }
        case ge: {
          ml(t, e), nu(e);
          var Q = e.child;
          if (Q.flags & Un) {
            var Ee = Q.stateNode, Ie = Q.memoizedState, Ue = Ie !== null;
            if (Ee.isHidden = Ue, Ue) {
              var _t = Q.alternate !== null && Q.alternate.memoizedState !== null;
              _t || uD();
            }
          }
          if (u & wt) {
            try {
              b_(e);
            } catch (Xe) {
              pn(e, e.return, Xe);
            }
            D0(e);
          }
          return;
        }
        case Ve: {
          var Rt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & gt
          ) {
            var U = Pr;
            Pr = U || Rt, ml(t, e), Pr = U;
          } else
            ml(t, e);
          if (nu(e), u & Un) {
            var G = e.stateNode, z = e.memoizedState, ie = z !== null, be = e;
            if (G.isHidden = ie, ie && !Rt && (be.mode & gt) !== Pe) {
              Oe = be;
              for (var Re = be.child; Re !== null; )
                Oe = Re, k_(Re), Re = Re.sibling;
            }
            E_(be, ie);
          }
          return;
        }
        case sn: {
          ml(t, e), nu(e), u & wt && D0(e);
          return;
        }
        case Nt:
          return;
        default: {
          ml(t, e), nu(e);
          return;
        }
      }
    }
    function nu(e) {
      var t = e.flags;
      if (t & bn) {
        try {
          T_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & La && (e.flags &= -4097);
    }
    function D_(e, t, a) {
      Gf = a, Kf = t, Oe = e, O0(e, t, a), Gf = null, Kf = null;
    }
    function O0(e, t, a) {
      for (var i = (e.mode & gt) !== Pe; Oe !== null; ) {
        var u = Oe, s = u.child;
        if (u.tag === Ve && i) {
          var f = u.memoizedState !== null, p = f || Im;
          if (p) {
            rE(e, t, a);
            continue;
          } else {
            var m = u.alternate, R = m !== null && m.memoizedState !== null, T = R || Pr, L = Im, O = Pr;
            Im = p, Pr = T, Pr && !O && (Oe = u, O_(u));
            for (var H = s; H !== null; )
              Oe = H, O0(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            Oe = u, Im = L, Pr = O, rE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & zl) !== He && s !== null ? (s.return = u, Oe = s) : rE(e, t, a);
      }
    }
    function rE(e, t, a) {
      for (; Oe !== null; ) {
        var i = Oe;
        if ((i.flags & zl) !== He) {
          var u = i.alternate;
          Gt(i);
          try {
            g_(t, u, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          dn();
        }
        if (i === e) {
          Oe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Oe = s;
          return;
        }
        Oe = i.return;
      }
    }
    function k_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        switch (t.tag) {
          case q:
          case _e:
          case Ze:
          case Fe: {
            if (t.mode & zt)
              try {
                tu(), vl(pr, t, t.return);
              } finally {
                eu(t);
              }
            else
              vl(pr, t, t.return);
            break;
          }
          case j: {
            Xf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && eE(t, t.return, i);
            break;
          }
          case ue: {
            Xf(t, t.return);
            break;
          }
          case Ve: {
            var u = t.memoizedState !== null;
            if (u) {
              N0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Oe = a) : N0(e);
      }
    }
    function N0(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        if (t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function O_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        if (t.tag === Ve) {
          var i = t.memoizedState !== null;
          if (i) {
            L0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Oe = a) : L0(e);
      }
    }
    function L0(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        Gt(t);
        try {
          S_(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (dn(), t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function N_(e, t, a, i) {
      Oe = t, L_(t, e, a, i);
    }
    function L_(e, t, a, i) {
      for (; Oe !== null; ) {
        var u = Oe, s = u.child;
        (u.subtreeFlags & Zi) !== He && s !== null ? (s.return = u, Oe = s) : M_(e, t, a, i);
      }
    }
    function M_(e, t, a, i) {
      for (; Oe !== null; ) {
        var u = Oe;
        if ((u.flags & Gr) !== He) {
          Gt(u);
          try {
            A_(t, u, a, i);
          } catch (f) {
            pn(u, u.return, f);
          }
          dn();
        }
        if (u === e) {
          Oe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Oe = s;
          return;
        }
        Oe = u.return;
      }
    }
    function A_(e, t, a, i) {
      switch (t.tag) {
        case q:
        case _e:
        case Fe: {
          if (t.mode & zt) {
            RS();
            try {
              Wo(jr | dr, t);
            } finally {
              CS(t);
            }
          } else
            Wo(jr | dr, t);
          break;
        }
      }
    }
    function U_(e) {
      Oe = e, z_();
    }
    function z_() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        if ((Oe.flags & Na) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Oe = u, H_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Oe = e;
          }
        }
        (e.subtreeFlags & Zi) !== He && t !== null ? (t.return = e, Oe = t) : F_();
      }
    }
    function F_() {
      for (; Oe !== null; ) {
        var e = Oe;
        (e.flags & Gr) !== He && (Gt(e), j_(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function j_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          e.mode & zt ? (RS(), vl(jr | dr, e, e.return), CS(e)) : vl(jr | dr, e, e.return);
          break;
        }
      }
    }
    function H_(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        Gt(a), B_(a, t), dn();
        var i = a.child;
        i !== null ? (i.return = a, Oe = i) : P_(e);
      }
    }
    function P_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.sibling, i = t.return;
        if (w0(t), t === e) {
          Oe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Oe = a;
          return;
        }
        Oe = i;
      }
    }
    function B_(e, t) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          e.mode & zt ? (RS(), vl(jr, e, t), CS(e)) : vl(jr, e, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          try {
            Wo(pr | dr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          try {
            Wo(jr | dr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe: {
          try {
            vl(pr | dr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && eE(e, e.return, t);
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case q:
        case _e:
        case Fe:
          try {
            vl(jr | dr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Gp = Symbol.for;
      Gp("selector.component"), Gp("selector.has_pseudo_class"), Gp("selector.role"), Gp("selector.test_id"), Gp("selector.text");
    }
    var W_ = [];
    function q_() {
      W_.forEach(function(e) {
        return e();
      });
    }
    var Q_ = y.ReactCurrentActQueue;
    function G_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function M0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Q_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var K_ = Math.ceil, aE = y.ReactCurrentDispatcher, iE = y.ReactCurrentOwner, Vr = y.ReactCurrentBatchConfig, yl = y.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), A0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Vi = (
      /*                */
      4
    ), Qu = 0, Kp = 1, oc = 2, Wm = 3, Xp = 4, U0 = 5, lE = 6, xt = mr, Ra = null, Nn = null, yr = ee, ru = ee, uE = Fo(ee), gr = Qu, Jp = null, qm = ee, Zp = ee, Qm = ee, ev = null, $a = null, oE = 0, z0 = 500, F0 = 1 / 0, X_ = 500, Gu = null;
    function tv() {
      F0 = Qn() + X_;
    }
    function j0() {
      return F0;
    }
    var Gm = !1, sE = null, Jf = null, sc = !1, Qo = null, nv = ee, cE = [], fE = null, J_ = 50, rv = 0, dE = null, pE = !1, Km = !1, Z_ = 50, Zf = 0, Xm = null, av = tn, Jm = ee, H0 = !1;
    function Zm() {
      return Ra;
    }
    function Ta() {
      return (xt & ($r | Vi)) !== mr ? Qn() : (av !== tn || (av = Qn()), av);
    }
    function Go(e) {
      var t = e.mode;
      if ((t & gt) === Pe)
        return Ge;
      if ((xt & $r) !== mr && yr !== ee)
        return Os(yr);
      var a = Qx() !== qx;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Jm === Mt && (Jm = Wd()), Jm;
      }
      var u = ja();
      if (u !== Mt)
        return u;
      var s = Lb();
      return s;
    }
    function eD(e) {
      var t = e.mode;
      return (t & gt) === Pe ? Ge : ih();
    }
    function Sr(e, t, a, i) {
      wD(), H0 && g("useInsertionEffect must not schedule updates."), pE && (Km = !0), xo(e, a, i), (xt & $r) !== ee && e === Ra ? _D(t) : (Zr && Ms(e, t, a), DD(t), e === Ra && ((xt & $r) === mr && (Zp = ut(Zp, a)), gr === Xp && Ko(e, yr)), Ia(e, i), a === Ge && xt === mr && (t.mode & gt) === Pe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yl.isBatchingLegacy && (tv(), HC()));
    }
    function tD(e, t, a) {
      var i = e.current;
      i.lanes = t, xo(e, t, a), Ia(e, a);
    }
    function nD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (xt & $r) !== mr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      uf(e, t);
      var i = lf(e, e === Ra ? yr : ee);
      if (i === ee) {
        a !== null && tT(a), e.callbackNode = null, e.callbackPriority = Mt;
        return;
      }
      var u = Bl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yl.current !== null && a !== EE)) {
        a == null && s !== Ge && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && tT(a);
      var f;
      if (u === Ge)
        e.tag === jo ? (yl.isBatchingLegacy !== null && (yl.didScheduleLegacyUpdate = !0), Ox(V0.bind(null, e))) : jC(V0.bind(null, e)), yl.current !== null ? yl.current.push(Ho) : Ab(function() {
          (xt & ($r | Vi)) === mr && Ho();
        }), f = null;
      else {
        var p;
        switch (dh(i)) {
          case Lr:
            p = ms;
            break;
          case Li:
            p = Fl;
            break;
          case za:
            p = el;
            break;
          case Fa:
            p = Tu;
            break;
          default:
            p = el;
            break;
        }
        f = CE(p, P0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function P0(e, t) {
      if (E1(), av = tn, Jm = ee, (xt & ($r | Vi)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Xu();
      if (i && e.callbackNode !== a)
        return null;
      var u = lf(e, e === Ra ? yr : ee);
      if (u === ee)
        return null;
      var s = !sf(e, u) && !ah(e, u) && !t, f = s ? dD(e, u) : ty(e, u);
      if (f !== Qu) {
        if (f === oc) {
          var p = of(e);
          p !== ee && (u = p, f = vE(e, p));
        }
        if (f === Kp) {
          var m = Jp;
          throw cc(e, ee), Ko(e, u), Ia(e, Qn()), m;
        }
        if (f === lE)
          Ko(e, u);
        else {
          var R = !sf(e, u), T = e.current.alternate;
          if (R && !aD(T)) {
            if (f = ty(e, u), f === oc) {
              var L = of(e);
              L !== ee && (u = L, f = vE(e, L));
            }
            if (f === Kp) {
              var O = Jp;
              throw cc(e, ee), Ko(e, u), Ia(e, Qn()), O;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, rD(e, f, u);
        }
      }
      return Ia(e, Qn()), e.callbackNode === a ? P0.bind(null, e) : null;
    }
    function vE(e, t) {
      var a = ev;
      if (df(e)) {
        var i = cc(e, t);
        i.flags |= Qr, Tx(e.containerInfo);
      }
      var u = ty(e, t);
      if (u !== oc) {
        var s = $a;
        $a = a, s !== null && B0(s);
      }
      return u;
    }
    function B0(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function rD(e, t, a) {
      switch (t) {
        case Qu:
        case Kp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case oc: {
          fc(e, $a, Gu);
          break;
        }
        case Wm: {
          if (Ko(e, a), Au(a) && // do not delay if we're inside an act() scope
          !nT()) {
            var i = oE + z0 - Qn();
            if (i > 10) {
              var u = lf(e, ee);
              if (u !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Uu(s, a)) {
                Ta(), cf(e, s);
                break;
              }
              e.timeoutHandle = fg(fc.bind(null, e, $a, Gu), i);
              break;
            }
          }
          fc(e, $a, Gu);
          break;
        }
        case Xp: {
          if (Ko(e, a), Id(a))
            break;
          if (!nT()) {
            var f = oi(e, a), p = f, m = Qn() - p, R = TD(m) - m;
            if (R > 10) {
              e.timeoutHandle = fg(fc.bind(null, e, $a, Gu), R);
              break;
            }
          }
          fc(e, $a, Gu);
          break;
        }
        case U0: {
          fc(e, $a, Gu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function aD(e) {
      for (var t = e; ; ) {
        if (t.flags & Co) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var m = t.child;
        if (t.subtreeFlags & Co && m !== null) {
          m.return = t, t = m;
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
    function Ko(e, t) {
      t = Ns(t, Qm), t = Ns(t, Zp), oh(e, t);
    }
    function V0(e) {
      if (C1(), (xt & ($r | Vi)) !== mr)
        throw new Error("Should not already be working.");
      Xu();
      var t = lf(e, ee);
      if (!ea(t, Ge))
        return Ia(e, Qn()), null;
      var a = ty(e, t);
      if (e.tag !== jo && a === oc) {
        var i = of(e);
        i !== ee && (t = i, a = vE(e, i));
      }
      if (a === Kp) {
        var u = Jp;
        throw cc(e, ee), Ko(e, t), Ia(e, Qn()), u;
      }
      if (a === lE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, fc(e, $a, Gu), Ia(e, Qn()), null;
    }
    function iD(e, t) {
      t !== ee && (ff(e, ut(t, Ge)), Ia(e, Qn()), (xt & ($r | Vi)) === mr && (tv(), Ho()));
    }
    function hE(e, t) {
      var a = xt;
      xt |= A0;
      try {
        return e(t);
      } finally {
        xt = a, xt === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yl.isBatchingLegacy && (tv(), HC());
      }
    }
    function lD(e, t, a, i, u) {
      var s = ja(), f = Vr.transition;
      try {
        return Vr.transition = null, Hn(Lr), e(t, a, i, u);
      } finally {
        Hn(s), Vr.transition = f, xt === mr && tv();
      }
    }
    function Ku(e) {
      Qo !== null && Qo.tag === jo && (xt & ($r | Vi)) === mr && Xu();
      var t = xt;
      xt |= A0;
      var a = Vr.transition, i = ja();
      try {
        return Vr.transition = null, Hn(Lr), e ? e() : void 0;
      } finally {
        Hn(i), Vr.transition = a, xt = t, (xt & ($r | Vi)) === mr && Ho();
      }
    }
    function $0() {
      return (xt & ($r | Vi)) !== mr;
    }
    function ey(e, t) {
      ia(uE, ru, e), ru = ut(ru, t);
    }
    function mE(e) {
      ru = uE.current, aa(uE, e);
    }
    function cc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== dg && (e.timeoutHandle = dg, Mb(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          g0(u, i), i = i.return;
        }
      Ra = e;
      var s = dc(e.current, null);
      return Nn = s, yr = ru = t, gr = Qu, Jp = null, qm = ee, Zp = ee, Qm = ee, ev = null, $a = null, t1(), sl.discardPendingWarnings(), s;
    }
    function I0(e, t) {
      do {
        var a = Nn;
        try {
          if (cm(), vR(), dn(), iE.current = null, a === null || a.return === null) {
            gr = Kp, Jp = t, Nn = null;
            return;
          }
          if (qe && a.mode & zt && Hm(a, !0), Ke)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ni(a, i, yr);
            } else
              gs(a, t, yr);
          O1(e, a.return, a, t, yr), Q0(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function Y0() {
      var e = aE.current;
      return aE.current = Am, e === null ? Am : e;
    }
    function W0(e) {
      aE.current = e;
    }
    function uD() {
      oE = Qn();
    }
    function iv(e) {
      qm = ut(e, qm);
    }
    function oD() {
      gr === Qu && (gr = Wm);
    }
    function yE() {
      (gr === Qu || gr === Wm || gr === oc) && (gr = Xp), Ra !== null && (ks(qm) || ks(Zp)) && Ko(Ra, yr);
    }
    function sD(e) {
      gr !== Xp && (gr = oc), ev === null ? ev = [e] : ev.push(e);
    }
    function cD() {
      return gr === Qu;
    }
    function ty(e, t) {
      var a = xt;
      xt |= $r;
      var i = Y0();
      if (Ra !== e || yr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (lv(e, yr), u.clear()), sh(e, t);
        }
        Gu = Kd(), cc(e, t);
      }
      _u(t);
      do
        try {
          fD();
          break;
        } catch (s) {
          I0(e, s);
        }
      while (!0);
      if (cm(), xt = a, W0(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bc(), Ra = null, yr = ee, gr;
    }
    function fD() {
      for (; Nn !== null; )
        q0(Nn);
    }
    function dD(e, t) {
      var a = xt;
      xt |= $r;
      var i = Y0();
      if (Ra !== e || yr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (lv(e, yr), u.clear()), sh(e, t);
        }
        Gu = Kd(), tv(), cc(e, t);
      }
      _u(t);
      do
        try {
          pD();
          break;
        } catch (s) {
          I0(e, s);
        }
      while (!0);
      return cm(), W0(i), xt = a, Nn !== null ? (eh(), Qu) : (Bc(), Ra = null, yr = ee, gr);
    }
    function pD() {
      for (; Nn !== null && !kd(); )
        q0(Nn);
    }
    function q0(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & zt) !== Pe ? (ES(e), a = gE(t, e, ru), Hm(e, !0)) : a = gE(t, e, ru), dn(), e.memoizedProps = e.pendingProps, a === null ? Q0(e) : Nn = a, iE.current = null;
    }
    function Q0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & hs) === He) {
          Gt(t);
          var u = void 0;
          if ((t.mode & zt) === Pe ? u = y0(a, t, ru) : (ES(t), u = y0(a, t, ru), Hm(t, !1)), dn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = o_(a, t);
          if (s !== null) {
            s.flags &= Qv, Nn = s;
            return;
          }
          if ((t.mode & zt) !== Pe) {
            Hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= hs, i.subtreeFlags = He, i.deletions = null;
          else {
            gr = lE, Nn = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          Nn = m;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      gr === Qu && (gr = U0);
    }
    function fc(e, t, a) {
      var i = ja(), u = Vr.transition;
      try {
        Vr.transition = null, Hn(Lr), vD(e, t, a, i);
      } finally {
        Vr.transition = u, Hn(i);
      }
      return null;
    }
    function vD(e, t, a, i) {
      do
        Xu();
      while (Qo !== null);
      if (bD(), (xt & ($r | Vi)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ud(s), u === null)
        return zd(), null;
      if (s === ee && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Mt;
      var f = ut(u.lanes, u.childLanes);
      Qd(e, f), e === Ra && (Ra = null, Nn = null, yr = ee), ((u.subtreeFlags & Zi) !== He || (u.flags & Zi) !== He) && (sc || (sc = !0, fE = a, CE(el, function() {
        return Xu(), null;
      })));
      var p = (u.subtreeFlags & (Al | Ul | zl | Zi)) !== He, m = (u.flags & (Al | Ul | zl | Zi)) !== He;
      if (p || m) {
        var R = Vr.transition;
        Vr.transition = null;
        var T = ja();
        Hn(Lr);
        var L = xt;
        xt |= Vi, iE.current = null, p_(e, u), HR(), __(e, u, s), xb(e.containerInfo), e.current = u, Ss(s), D_(u, e, s), Es(), Od(), xt = L, Hn(T), Vr.transition = R;
      } else
        e.current = u, HR();
      var O = sc;
      if (sc ? (sc = !1, Qo = e, nv = s) : (Zf = 0, Xm = null), f = e.pendingLanes, f === ee && (Jf = null), O || J0(e.current, !1), Ld(u.stateNode, i), Zr && e.memoizedUpdaters.clear(), q_(), Ia(e, Qn()), t !== null)
        for (var H = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var Q = t[$], Ee = Q.stack, Ie = Q.digest;
          H(Q.value, {
            componentStack: Ee,
            digest: Ie
          });
        }
      if (Gm) {
        Gm = !1;
        var Ue = sE;
        throw sE = null, Ue;
      }
      return ea(nv, Ge) && e.tag !== jo && Xu(), f = e.pendingLanes, ea(f, Ge) ? (S1(), e === dE ? rv++ : (rv = 0, dE = e)) : rv = 0, Ho(), zd(), null;
    }
    function Xu() {
      if (Qo !== null) {
        var e = dh(nv), t = Us(za, e), a = Vr.transition, i = ja();
        try {
          return Vr.transition = null, Hn(t), mD();
        } finally {
          Hn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function hD(e) {
      cE.push(e), sc || (sc = !0, CE(el, function() {
        return Xu(), null;
      }));
    }
    function mD() {
      if (Qo === null)
        return !1;
      var e = fE;
      fE = null;
      var t = Qo, a = nv;
      if (Qo = null, nv = ee, (xt & ($r | Vi)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      pE = !0, Km = !1, xu(a);
      var i = xt;
      xt |= Vi, U_(t.current), N_(t, t.current, a, e);
      {
        var u = cE;
        cE = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          y_(t, f);
        }
      }
      Hd(), J0(t.current, !0), xt = i, Ho(), Km ? t === Xm ? Zf++ : (Zf = 0, Xm = t) : Zf = 0, pE = !1, Km = !1, Md(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function G0(e) {
      return Jf !== null && Jf.has(e);
    }
    function yD(e) {
      Jf === null ? Jf = /* @__PURE__ */ new Set([e]) : Jf.add(e);
    }
    function gD(e) {
      Gm || (Gm = !0, sE = e);
    }
    var SD = gD;
    function K0(e, t, a) {
      var i = lc(a, t), u = qR(e, i, Ge), s = Bo(e, u, Ge), f = Ta();
      s !== null && (xo(s, Ge, f), Ia(s, f));
    }
    function pn(e, t, a) {
      if (c_(a), uv(!1), e.tag === B) {
        K0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          K0(i, e, a);
          return;
        } else if (i.tag === j) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !G0(s)) {
            var f = lc(a, e), p = jS(i, f, Ge), m = Bo(i, p, Ge), R = Ta();
            m !== null && (xo(m, Ge, R), Ia(m, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ED(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      cf(e, a), kD(e), Ra === e && Uu(yr, a) && (gr === Xp || gr === Wm && Au(yr) && Qn() - oE < z0 ? cc(e, ee) : Qm = ut(Qm, a)), Ia(e, u);
    }
    function X0(e, t) {
      t === Mt && (t = eD(e));
      var a = Ta(), i = Ba(e, t);
      i !== null && (xo(i, t, a), Ia(i, a));
    }
    function CD(e) {
      var t = e.memoizedState, a = Mt;
      t !== null && (a = t.retryLane), X0(e, a);
    }
    function RD(e, t) {
      var a = Mt, i;
      switch (e.tag) {
        case ge:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case sn:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), X0(e, a);
    }
    function TD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : K_(e / 1960) * 1960;
    }
    function wD() {
      if (rv > J_)
        throw rv = 0, dE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Zf > Z_ && (Zf = 0, Xm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function bD() {
      sl.flushLegacyContextWarning(), sl.flushPendingUnsafeLifecycleWarnings();
    }
    function J0(e, t) {
      Gt(e), ny(e, Ml, I_), t && ny(e, Di, Y_), ny(e, Ml, V_), t && ny(e, Di, $_), dn();
    }
    function ny(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== He ? i = i.child : ((i.flags & t) !== He && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var ry = null;
    function Z0(e) {
      {
        if ((xt & $r) !== mr || !(e.mode & gt))
          return;
        var t = e.tag;
        if (t !== K && t !== B && t !== j && t !== q && t !== _e && t !== Ze && t !== Fe)
          return;
        var a = et(e) || "ReactComponent";
        if (ry !== null) {
          if (ry.has(a))
            return;
          ry.add(a);
        } else
          ry = /* @__PURE__ */ new Set([a]);
        var i = ur;
        try {
          Gt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : dn();
        }
      }
    }
    var gE;
    {
      var xD = null;
      gE = function(e, t, a) {
        var i = uT(xD, t);
        try {
          return d0(e, t, a);
        } catch (s) {
          if (jx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (cm(), vR(), g0(e, t), uT(t, i), t.mode & zt && ES(t), Ll(null, d0, null, e, t, a), Xi()) {
            var u = vs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var eT = !1, SE;
    SE = /* @__PURE__ */ new Set();
    function _D(e) {
      if (Ci && !m1())
        switch (e.tag) {
          case q:
          case _e:
          case Fe: {
            var t = Nn && et(Nn) || "Unknown", a = t;
            if (!SE.has(a)) {
              SE.add(a);
              var i = et(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case j: {
            eT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), eT = !0);
            break;
          }
        }
    }
    function lv(e, t) {
      if (Zr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ms(e, i, t);
        });
      }
    }
    var EE = {};
    function CE(e, t) {
      {
        var a = yl.current;
        return a !== null ? (a.push(t), EE) : Dd(e, t);
      }
    }
    function tT(e) {
      if (e !== EE)
        return Kv(e);
    }
    function nT() {
      return yl.current !== null;
    }
    function DD(e) {
      {
        if (e.mode & gt) {
          if (!M0())
            return;
        } else if (!G_() || xt !== mr || e.tag !== q && e.tag !== _e && e.tag !== Fe)
          return;
        if (yl.current === null) {
          var t = ur;
          try {
            Gt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Gt(e) : dn();
          }
        }
      }
    }
    function kD(e) {
      e.tag !== jo && M0() && yl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function uv(e) {
      H0 = e;
    }
    var $i = null, ed = null, OD = function(e) {
      $i = e;
    };
    function td(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function RE(e) {
      return td(e);
    }
    function TE(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = td(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Z,
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
    function rT(e, t) {
      {
        if ($i === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case j: {
            typeof i == "function" && (u = !0);
            break;
          }
          case q: {
            (typeof i == "function" || s === nt) && (u = !0);
            break;
          }
          case _e: {
            (s === Z || s === nt) && (u = !0);
            break;
          }
          case Ze:
          case Fe: {
            (s === it || s === nt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = $i(a);
          if (f !== void 0 && f === $i(i))
            return !0;
        }
        return !1;
      }
    }
    function aT(e) {
      {
        if ($i === null || typeof WeakSet != "function")
          return;
        ed === null && (ed = /* @__PURE__ */ new WeakSet()), ed.add(e);
      }
    }
    var ND = function(e, t) {
      {
        if ($i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Xu(), Ku(function() {
          wE(e.current, i, a);
        });
      }
    }, LD = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Xu(), Ku(function() {
          ov(t, e, null, null);
        });
      }
    };
    function wE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, m = null;
        switch (f) {
          case q:
          case Fe:
          case j:
            m = p;
            break;
          case _e:
            m = p.render;
            break;
        }
        if ($i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (m !== null) {
          var L = $i(m);
          L !== void 0 && (a.has(L) ? T = !0 : t.has(L) && (f === j ? T = !0 : R = !0));
        }
        if (ed !== null && (ed.has(e) || i !== null && ed.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var O = Ba(e, Ge);
          O !== null && Sr(O, e, Ge, tn);
        }
        u !== null && !T && wE(u, t, a), s !== null && wE(s, t, a);
      }
    }
    var MD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return bE(e.current, i, a), a;
      }
    };
    function bE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case q:
          case Fe:
          case j:
            p = f;
            break;
          case _e:
            p = f.render;
            break;
        }
        var m = !1;
        p !== null && t.has(p) && (m = !0), m ? AD(e, a) : i !== null && bE(i, t, a), u !== null && bE(u, t, a);
      }
    }
    function AD(e, t) {
      {
        var a = UD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function UD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
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
    var xE;
    {
      xE = !1;
      try {
        var iT = Object.preventExtensions({});
      } catch {
        xE = !0;
      }
    }
    function zD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new zD(e, t, a, i);
    };
    function _E(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function FD(e) {
      return typeof e == "function" && !_E(e) && e.defaultProps === void 0;
    }
    function jD(e) {
      if (typeof e == "function")
        return _E(e) ? j : q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Z)
          return _e;
        if (t === it)
          return Ze;
      }
      return K;
    }
    function dc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case K:
        case q:
        case Fe:
          a.type = td(e.type);
          break;
        case j:
          a.type = RE(e.type);
          break;
        case _e:
          a.type = TE(e.type);
          break;
      }
      return a;
    }
    function HD(e, t) {
      e.flags &= zn | bn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function PD(e, t, a) {
      var i;
      return e === em ? (i = gt, t === !0 && (i |= Jt, i |= Ft)) : i = Pe, Zr && (i |= zt), di(B, null, null, i);
    }
    function DE(e, t, a, i, u, s) {
      var f = K, p = e;
      if (typeof e == "function")
        _E(e) ? (f = j, p = RE(p)) : p = td(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case yi:
            return Xo(a.children, u, s, t);
          case Ka:
            f = oe, u |= Jt, (u & gt) !== Pe && (u |= Ft);
            break;
          case gi:
            return BD(a, u, s, t);
          case ye:
            return VD(a, u, s, t);
          case De:
            return $D(a, u, s, t);
          case wn:
            return lT(a, u, s, t);
          case ln:
          // eslint-disable-next-line no-fallthrough
          case Et:
          // eslint-disable-next-line no-fallthrough
          case fn:
          // eslint-disable-next-line no-fallthrough
          case lr:
          // eslint-disable-next-line no-fallthrough
          case yt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Si:
                  f = Ne;
                  break e;
                case _:
                  f = Je;
                  break e;
                case Z:
                  f = _e, p = TE(p);
                  break e;
                case it:
                  f = Ze;
                  break e;
                case nt:
                  f = $t, p = null;
                  break e;
              }
            var m = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? et(i) : null;
              R && (m += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
          }
        }
      var T = di(f, a, t, u);
      return T.elementType = e, T.type = p, T.lanes = s, T._debugOwner = i, T;
    }
    function kE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = DE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xo(e, t, a, i) {
      var u = di(pe, e, i, t);
      return u.lanes = a, u;
    }
    function BD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = di(Qe, e, i, t | zt);
      return u.elementType = gi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function VD(e, t, a, i) {
      var u = di(ge, e, i, t);
      return u.elementType = ye, u.lanes = a, u;
    }
    function $D(e, t, a, i) {
      var u = di(sn, e, i, t);
      return u.elementType = De, u.lanes = a, u;
    }
    function lT(e, t, a, i) {
      var u = di(Ve, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function OE(e, t, a) {
      var i = di(ne, e, null, t);
      return i.lanes = a, i;
    }
    function ID() {
      var e = di(ue, null, null, Pe);
      return e.elementType = "DELETED", e;
    }
    function YD(e) {
      var t = di(nn, null, null, Pe);
      return t.stateNode = e, t;
    }
    function NE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = di(le, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function uT(e, t) {
      return e === null && (e = di(K, null, null, Pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function WD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Mt, this.eventTimes = Ls(ee), this.expirationTimes = Ls(tn), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Ls(ee), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Du; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case em:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case jo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function oT(e, t, a, i, u, s, f, p, m, R) {
      var T = new WD(e, t, a, p, m), L = PD(t, s);
      T.current = L, L.stateNode = T;
      {
        var O = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = O;
      }
      return Ig(L), T;
    }
    var LE = "18.3.1";
    function qD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ir,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var ME, AE;
    ME = !1, AE = {};
    function sT(e) {
      if (!e)
        return fi;
      var t = Eo(e), a = kx(t);
      if (t.tag === j) {
        var i = t.type;
        if (Kl(i))
          return zC(t, i, a);
      }
      return a;
    }
    function QD(e, t) {
      {
        var a = Eo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Xr(a);
        if (u === null)
          return null;
        if (u.mode & Jt) {
          var s = et(a) || "Component";
          if (!AE[s]) {
            AE[s] = !0;
            var f = ur;
            try {
              Gt(u), a.mode & Jt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : dn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function cT(e, t, a, i, u, s, f, p) {
      var m = !1, R = null;
      return oT(e, t, m, R, a, i, u, s, f);
    }
    function fT(e, t, a, i, u, s, f, p, m, R) {
      var T = !0, L = oT(a, i, T, e, u, s, f, p, m);
      L.context = sT(null);
      var O = L.current, H = Ta(), $ = Go(O), Q = Wu(H, $);
      return Q.callback = t ?? null, Bo(O, Q, $), tD(L, $, H), L;
    }
    function ov(e, t, a, i) {
      Nd(t, e);
      var u = t.current, s = Ta(), f = Go(u);
      Sn(f);
      var p = sT(a);
      t.context === null ? t.context = p : t.pendingContext = p, Ci && ur !== null && !ME && (ME = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(ur) || "Unknown"));
      var m = Wu(s, f);
      m.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
      var R = Bo(u, m, f);
      return R !== null && (Sr(R, u, f, s), hm(R, u, f)), f;
    }
    function ay(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function GD(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (df(t)) {
            var a = nh(t);
            iD(t, a);
          }
          break;
        }
        case ge: {
          Ku(function() {
            var u = Ba(e, Ge);
            if (u !== null) {
              var s = Ta();
              Sr(u, e, Ge, s);
            }
          });
          var i = Ge;
          UE(e, i);
          break;
        }
      }
    }
    function dT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = uh(a.retryLane, t));
    }
    function UE(e, t) {
      dT(e, t);
      var a = e.alternate;
      a && dT(a, t);
    }
    function KD(e) {
      if (e.tag === ge) {
        var t = xs, a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Sr(a, e, t, i);
        }
        UE(e, t);
      }
    }
    function XD(e) {
      if (e.tag === ge) {
        var t = Go(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Sr(a, e, t, i);
        }
        UE(e, t);
      }
    }
    function pT(e) {
      var t = vn(e);
      return t === null ? null : t.stateNode;
    }
    var vT = function(e) {
      return null;
    };
    function JD(e) {
      return vT(e);
    }
    var hT = function(e) {
      return !1;
    };
    function ZD(e) {
      return hT(e);
    }
    var mT = null, yT = null, gT = null, ST = null, ET = null, CT = null, RT = null, TT = null, wT = null;
    {
      var bT = function(e, t, a) {
        var i = t[a], u = pt(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (pt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = bT(e[i], t, a + 1), u);
      }, xT = function(e, t) {
        return bT(e, t, 0);
      }, _T = function(e, t, a, i) {
        var u = t[i], s = pt(e) ? e.slice() : st({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], pt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = _T(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, DT = function(e, t, a) {
        if (t.length !== a.length) {
          D("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              D("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return _T(e, t, a, 0);
      }, kT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = pt(e) ? e.slice() : st({}, e);
        return s[u] = kT(e[u], t, a + 1, i), s;
      }, OT = function(e, t, a) {
        return kT(e, t, 0, a);
      }, zE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      mT = function(e, t, a, i) {
        var u = zE(e, t);
        if (u !== null) {
          var s = OT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Ba(e, Ge);
          f !== null && Sr(f, e, Ge, tn);
        }
      }, yT = function(e, t, a) {
        var i = zE(e, t);
        if (i !== null) {
          var u = xT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = st({}, e.memoizedProps);
          var s = Ba(e, Ge);
          s !== null && Sr(s, e, Ge, tn);
        }
      }, gT = function(e, t, a, i) {
        var u = zE(e, t);
        if (u !== null) {
          var s = DT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Ba(e, Ge);
          f !== null && Sr(f, e, Ge, tn);
        }
      }, ST = function(e, t, a) {
        e.pendingProps = OT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ge);
        i !== null && Sr(i, e, Ge, tn);
      }, ET = function(e, t) {
        e.pendingProps = xT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Ge);
        a !== null && Sr(a, e, Ge, tn);
      }, CT = function(e, t, a) {
        e.pendingProps = DT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ge);
        i !== null && Sr(i, e, Ge, tn);
      }, RT = function(e) {
        var t = Ba(e, Ge);
        t !== null && Sr(t, e, Ge, tn);
      }, TT = function(e) {
        vT = e;
      }, wT = function(e) {
        hT = e;
      };
    }
    function ek(e) {
      var t = Xr(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return ur;
    }
    function rk(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return To({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: mT,
        overrideHookStateDeletePath: yT,
        overrideHookStateRenamePath: gT,
        overrideProps: ST,
        overridePropsDeletePath: ET,
        overridePropsRenamePath: CT,
        setErrorHandler: TT,
        setSuspenseHandler: wT,
        scheduleUpdate: RT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ek,
        findFiberByHostInstance: t || tk,
        // React Refresh
        findHostInstancesForRefresh: MD,
        scheduleRefresh: ND,
        scheduleRoot: LD,
        setRefreshHandler: OD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: nk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: LE
      });
    }
    var NT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FE(e) {
      this._internalRoot = e;
    }
    iy.prototype.render = FE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ly(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = pT(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ov(e, t, null, null);
    }, iy.prototype.unmount = FE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $0() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ku(function() {
          ov(null, e, null, null);
        }), NC(t);
      }
    };
    function ak(e, t) {
      if (!ly(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      LT(e);
      var a = !1, i = !1, u = "", s = NT;
      t != null && (t.hydrate ? D("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Dr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = cT(e, em, null, a, i, u, s);
      qh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return vp(p), new FE(f);
    }
    function iy(e) {
      this._internalRoot = e;
    }
    function ik(e) {
      e && yh(e);
    }
    iy.prototype.unstable_scheduleHydration = ik;
    function lk(e, t, a) {
      if (!ly(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      LT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", m = NT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (m = a.onRecoverableError));
      var R = fT(t, null, e, em, i, s, f, p, m);
      if (qh(R.current, e), vp(e), u)
        for (var T = 0; T < u.length; T++) {
          var L = u[T];
          c1(R, L);
        }
      return new iy(R);
    }
    function ly(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ki || e.nodeType === md));
    }
    function sv(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ki || e.nodeType === md || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function LT(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), bp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = y.ReactCurrentOwner, MT;
    MT = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = pT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = jE(e), u = !!(i && zo(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function jE(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function AT() {
    }
    function ok(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var O = ay(f);
            s.call(O);
          };
        }
        var f = fT(
          t,
          i,
          e,
          jo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          AT
        );
        e._reactRootContainer = f, qh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return vp(p), Ku(), f;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var O = ay(T);
            R.call(O);
          };
        }
        var T = cT(
          e,
          jo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          AT
        );
        e._reactRootContainer = T, qh(T.current, e);
        var L = e.nodeType === An ? e.parentNode : e;
        return vp(L), Ku(function() {
          ov(t, T, a, i);
        }), T;
      }
    }
    function sk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function uy(e, t, a, i, u) {
      MT(a), sk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ok(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var m = ay(f);
            p.call(m);
          };
        }
        ov(t, f, e, u);
      }
      return ay(f);
    }
    var UT = !1;
    function ck(e) {
      {
        UT || (UT = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : QD(e, "findDOMNode");
    }
    function fk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return uy(null, e, t, !0, a);
    }
    function dk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return uy(null, e, t, !1, a);
    }
    function pk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ay(e))
        throw new Error("parentComponent must be a valid React Component");
      return uy(e, t, a, !1, i);
    }
    var zT = !1;
    function vk(e) {
      if (zT || (zT = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !sv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = bp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = jE(e), i = a && !zo(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ku(function() {
          uy(null, null, e, !1, function() {
            e._reactRootContainer = null, NC(e);
          });
        }), !0;
      } else {
        {
          var u = jE(e), s = !!(u && zo(u)), f = e.nodeType === qr && sv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(GD), _o(KD), ph(XD), Fs(ja), Xd(ch), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Dc(mb), My(hE, lD, Ku);
    function hk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ly(t))
        throw new Error("Target container is not a DOM element.");
      return qD(e, t, null, a);
    }
    function mk(e, t, a, i) {
      return pk(e, t, a, i);
    }
    var HE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zo, Lf, Qh, mo, kc, hE]
    };
    function yk(e, t) {
      return HE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t);
    }
    function gk(e, t, a) {
      return HE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lk(e, t, a);
    }
    function Sk(e) {
      return $0() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ku(e);
    }
    var Ek = rk({
      findFiberByHostInstance: Xs,
      bundleType: 1,
      version: LE,
      rendererPackageName: "react-dom"
    });
    if (!Ek && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var FT = window.location.protocol;
      /^(https?|file):$/.test(FT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (FT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HE, Wa.createPortal = hk, Wa.createRoot = yk, Wa.findDOMNode = ck, Wa.flushSync = Sk, Wa.hydrate = fk, Wa.hydrateRoot = gk, Wa.render = dk, Wa.unmountComponentAtNode = vk, Wa.unstable_batchedUpdates = hE, Wa.unstable_renderSubtreeIntoContainer = mk, Wa.version = LE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wa;
}
var GT;
function Mk() {
  if (GT) return cy.exports;
  GT = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (h) {
        console.error(h);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (v(), cy.exports = Nk()) : cy.exports = Lk(), cy.exports;
}
var KT;
function Ak() {
  if (KT) return rd;
  KT = 1;
  var v = Mk();
  if (process.env.NODE_ENV === "production")
    rd.createRoot = v.createRoot, rd.hydrateRoot = v.hydrateRoot;
  else {
    var h = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    rd.createRoot = function(y, C) {
      h.usingClientEntryPoint = !0;
      try {
        return v.createRoot(y, C);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    }, rd.hydrateRoot = function(y, C, w) {
      h.usingClientEntryPoint = !0;
      try {
        return v.hydrateRoot(y, C, w);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    };
  }
  return rd;
}
var Uk = Ak();
const zk = /* @__PURE__ */ Tk(Uk);
var Zu = mv();
const JE = "/logo.png", Fk = ({ messages: v, firstMessageSent: h }) => /* @__PURE__ */ vt.jsx("div", { className: "max-w-md mx-auto flex flex-col h-[76vh] rounded relative", children: /* @__PURE__ */ vt.jsx("div", { className: "flex-grow overflow-y-auto p-4 space-y-4 pb-20 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100", children: /* @__PURE__ */ vt.jsx("ul", { className: "list-none p-0 m-0", children: v.map((y, C) => /* @__PURE__ */ vt.jsxs(
  "li",
  {
    className: `flex items-start space-x-2 mb-4 ${y.sender === "assistant" ? "justify-start" : "justify-end"}`,
    children: [
      y.sender === "assistant" && /* @__PURE__ */ vt.jsx(
        "img",
        {
          src: JE,
          alt: "Assistant",
          className: "h-8 w-8 rounded-full"
        }
      ),
      /* @__PURE__ */ vt.jsxs(
        "div",
        {
          className: `p-4 rounded-lg ${y.sender === "assistant" ? "bg-blue-50 text-black" : "bg-white text-black border border-gray-300 shadow-sm"}`,
          children: [
            /* @__PURE__ */ vt.jsx("p", { children: y.text }),
            y.sender === "assistant" && h && C === 0 && /* @__PURE__ */ vt.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              /* @__PURE__ */ vt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "What are your services?" }),
              /* @__PURE__ */ vt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "How can I book?" }),
              /* @__PURE__ */ vt.jsx("button", { className: "text-blue-700 border text-sm bg-white border-blue-700 rounded-md px-2 py-0.5", children: "What are the rates?" })
            ] })
          ]
        }
      )
    ]
  },
  C
)) }) }) }), dw = "http://localhost:8000", jk = ({ isOpen: v, onClose: h, threadId: y, assistantId: C }) => {
  const [w, D] = Zu.useState([]), [g, I] = Zu.useState(""), [q, j] = Zu.useState(!1);
  Zu.useEffect(() => {
    D([
      {
        text: "Hello! I'm Xeko, your AI. How can I help you today?",
        sender: "assistant"
      }
    ]), j(!0);
  }, [y, C]);
  const K = async () => {
    if (!(!g.trim() || !y || !C)) {
      D((B) => [
        ...B,
        { text: g, sender: "user" }
      ]), I("");
      try {
        const B = await fetch(`${dw}/send_message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            thread_id: y,
            assistant_id: C,
            text: g
          })
        });
        if (!B.body) throw new Error("No response body from server");
        const le = B.body.getReader(), ue = new TextDecoder("utf-8");
        let ne = "";
        for (D((pe) => [
          ...pe,
          { text: "", sender: "assistant" }
        ]); ; ) {
          const { done: pe, value: oe } = await le.read();
          if (pe) break;
          const Je = ue.decode(oe, { stream: !0 });
          ne += Je, D((Ne) => {
            const _e = Ne.length - 1, Qe = Ne[_e];
            if (Qe.sender === "assistant") {
              const ge = [...Ne];
              return ge[_e] = {
                ...Qe,
                text: ne
              }, ge;
            }
            return Ne;
          });
        }
      } catch (B) {
        console.error("Error receiving streamed message:", B), D((le) => [
          ...le,
          { text: "Something went wrong. Please try again.", sender: "assistant" }
        ]);
      }
    }
  };
  return v ? /* @__PURE__ */ vt.jsx("div", { className: "fixed inset-0 flex justify-center items-center md:justify-end md:items-end mb-5 p-4 bg-opacity-75 z-50", children: /* @__PURE__ */ vt.jsxs(
    "div",
    {
      className: "relative align-middle bg-white h-[90vh] mr-2 rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-md flex flex-col",
      "aria-labelledby": "modal-headline",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ vt.jsxs("header", { className: "w-full h-[100px] bg-gradient-to-tr from-blue-400 via-blue-400 to-blue-600 text-white text-center flex items-center justify-between p-4", children: [
          /* @__PURE__ */ vt.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ vt.jsx("div", { children: /* @__PURE__ */ vt.jsx("img", { src: JE, className: "w-[70px]", alt: "" }) }),
            /* @__PURE__ */ vt.jsxs("div", { children: [
              /* @__PURE__ */ vt.jsx("p", { children: "Xeko Assistant AI" }),
              /* @__PURE__ */ vt.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ vt.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
                /* @__PURE__ */ vt.jsx("p", { children: "User name" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ vt.jsx("div", { className: "h-9 w-9 bg-blue-400 hover:bg-blue-300 p-2 rounded-full flex justify-center items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105", children: /* @__PURE__ */ vt.jsx(
            "button",
            {
              className: "text-white bg-transparent border-none text-2xl font-bold",
              onClick: h,
              "aria-label": "Close",
              children: "×"
            }
          ) })
        ] }),
        /* @__PURE__ */ vt.jsx("div", { className: "flex-grow overflow-y-auto p-4", children: /* @__PURE__ */ vt.jsx(Fk, { messages: w, firstMessageSent: q }) }),
        /* @__PURE__ */ vt.jsx("div", { className: "p-4 bg-white border-t border-b border-gray-300", children: /* @__PURE__ */ vt.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ vt.jsx(
            "input",
            {
              type: "text",
              value: g,
              onChange: (B) => I(B.target.value),
              className: "w-full p-2 text-sm bg-gray-200 border rounded-lg focus:outline-none focus:border-transparent",
              placeholder: "Type a message..."
            }
          ),
          /* @__PURE__ */ vt.jsx("div", { onClick: K, children: /* @__PURE__ */ vt.jsx(
            "img",
            {
              src: "https://i.ibb.co/mcphR4S/Design-sans-titre-33.png",
              className: "w-12 cursor-pointer rounded-full p-2 bg-blue-500",
              alt: ""
            }
          ) })
        ] }) }),
        /* @__PURE__ */ vt.jsx("footer", { className: "p-4", children: /* @__PURE__ */ vt.jsx("p", { className: "text-center text-gray-500 text-xs", children: "Powered by Xeko.ai" }) })
      ]
    }
  ) }) : null;
};
function pw(v, h) {
  return function() {
    return v.apply(h, arguments);
  };
}
const { toString: Hk } = Object.prototype, { getPrototypeOf: ZE } = Object, yy = /* @__PURE__ */ ((v) => (h) => {
  const y = Hk.call(h);
  return v[y] || (v[y] = y.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gl = (v) => (v = v.toLowerCase(), (h) => yy(h) === v), gy = (v) => (h) => typeof h === v, { isArray: ad } = Array, hv = gy("undefined");
function Pk(v) {
  return v !== null && !hv(v) && v.constructor !== null && !hv(v.constructor) && vi(v.constructor.isBuffer) && v.constructor.isBuffer(v);
}
const vw = gl("ArrayBuffer");
function Bk(v) {
  let h;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? h = ArrayBuffer.isView(v) : h = v && v.buffer && vw(v.buffer), h;
}
const Vk = gy("string"), vi = gy("function"), hw = gy("number"), Sy = (v) => v !== null && typeof v == "object", $k = (v) => v === !0 || v === !1, dy = (v) => {
  if (yy(v) !== "object")
    return !1;
  const h = ZE(v);
  return (h === null || h === Object.prototype || Object.getPrototypeOf(h) === null) && !(Symbol.toStringTag in v) && !(Symbol.iterator in v);
}, Ik = gl("Date"), Yk = gl("File"), Wk = gl("Blob"), qk = gl("FileList"), Qk = (v) => Sy(v) && vi(v.pipe), Gk = (v) => {
  let h;
  return v && (typeof FormData == "function" && v instanceof FormData || vi(v.append) && ((h = yy(v)) === "formdata" || // detect form-data instance
  h === "object" && vi(v.toString) && v.toString() === "[object FormData]"));
}, Kk = gl("URLSearchParams"), [Xk, Jk, Zk, eO] = ["ReadableStream", "Request", "Response", "Headers"].map(gl), tO = (v) => v.trim ? v.trim() : v.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yv(v, h, { allOwnKeys: y = !1 } = {}) {
  if (v === null || typeof v > "u")
    return;
  let C, w;
  if (typeof v != "object" && (v = [v]), ad(v))
    for (C = 0, w = v.length; C < w; C++)
      h.call(null, v[C], C, v);
  else {
    const D = y ? Object.getOwnPropertyNames(v) : Object.keys(v), g = D.length;
    let I;
    for (C = 0; C < g; C++)
      I = D[C], h.call(null, v[I], I, v);
  }
}
function mw(v, h) {
  h = h.toLowerCase();
  const y = Object.keys(v);
  let C = y.length, w;
  for (; C-- > 0; )
    if (w = y[C], h === w.toLowerCase())
      return w;
  return null;
}
const pc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yw = (v) => !hv(v) && v !== pc;
function WE() {
  const { caseless: v } = yw(this) && this || {}, h = {}, y = (C, w) => {
    const D = v && mw(h, w) || w;
    dy(h[D]) && dy(C) ? h[D] = WE(h[D], C) : dy(C) ? h[D] = WE({}, C) : ad(C) ? h[D] = C.slice() : h[D] = C;
  };
  for (let C = 0, w = arguments.length; C < w; C++)
    arguments[C] && yv(arguments[C], y);
  return h;
}
const nO = (v, h, y, { allOwnKeys: C } = {}) => (yv(h, (w, D) => {
  y && vi(w) ? v[D] = pw(w, y) : v[D] = w;
}, { allOwnKeys: C }), v), rO = (v) => (v.charCodeAt(0) === 65279 && (v = v.slice(1)), v), aO = (v, h, y, C) => {
  v.prototype = Object.create(h.prototype, C), v.prototype.constructor = v, Object.defineProperty(v, "super", {
    value: h.prototype
  }), y && Object.assign(v.prototype, y);
}, iO = (v, h, y, C) => {
  let w, D, g;
  const I = {};
  if (h = h || {}, v == null) return h;
  do {
    for (w = Object.getOwnPropertyNames(v), D = w.length; D-- > 0; )
      g = w[D], (!C || C(g, v, h)) && !I[g] && (h[g] = v[g], I[g] = !0);
    v = y !== !1 && ZE(v);
  } while (v && (!y || y(v, h)) && v !== Object.prototype);
  return h;
}, lO = (v, h, y) => {
  v = String(v), (y === void 0 || y > v.length) && (y = v.length), y -= h.length;
  const C = v.indexOf(h, y);
  return C !== -1 && C === y;
}, uO = (v) => {
  if (!v) return null;
  if (ad(v)) return v;
  let h = v.length;
  if (!hw(h)) return null;
  const y = new Array(h);
  for (; h-- > 0; )
    y[h] = v[h];
  return y;
}, oO = /* @__PURE__ */ ((v) => (h) => v && h instanceof v)(typeof Uint8Array < "u" && ZE(Uint8Array)), sO = (v, h) => {
  const C = (v && v[Symbol.iterator]).call(v);
  let w;
  for (; (w = C.next()) && !w.done; ) {
    const D = w.value;
    h.call(v, D[0], D[1]);
  }
}, cO = (v, h) => {
  let y;
  const C = [];
  for (; (y = v.exec(h)) !== null; )
    C.push(y);
  return C;
}, fO = gl("HTMLFormElement"), dO = (v) => v.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(y, C, w) {
    return C.toUpperCase() + w;
  }
), XT = (({ hasOwnProperty: v }) => (h, y) => v.call(h, y))(Object.prototype), pO = gl("RegExp"), gw = (v, h) => {
  const y = Object.getOwnPropertyDescriptors(v), C = {};
  yv(y, (w, D) => {
    let g;
    (g = h(w, D, v)) !== !1 && (C[D] = g || w);
  }), Object.defineProperties(v, C);
}, vO = (v) => {
  gw(v, (h, y) => {
    if (vi(v) && ["arguments", "caller", "callee"].indexOf(y) !== -1)
      return !1;
    const C = v[y];
    if (vi(C)) {
      if (h.enumerable = !1, "writable" in h) {
        h.writable = !1;
        return;
      }
      h.set || (h.set = () => {
        throw Error("Can not rewrite read-only method '" + y + "'");
      });
    }
  });
}, hO = (v, h) => {
  const y = {}, C = (w) => {
    w.forEach((D) => {
      y[D] = !0;
    });
  };
  return ad(v) ? C(v) : C(String(v).split(h)), y;
}, mO = () => {
}, yO = (v, h) => v != null && Number.isFinite(v = +v) ? v : h, VE = "abcdefghijklmnopqrstuvwxyz", JT = "0123456789", Sw = {
  DIGIT: JT,
  ALPHA: VE,
  ALPHA_DIGIT: VE + VE.toUpperCase() + JT
}, gO = (v = 16, h = Sw.ALPHA_DIGIT) => {
  let y = "";
  const { length: C } = h;
  for (; v--; )
    y += h[Math.random() * C | 0];
  return y;
};
function SO(v) {
  return !!(v && vi(v.append) && v[Symbol.toStringTag] === "FormData" && v[Symbol.iterator]);
}
const EO = (v) => {
  const h = new Array(10), y = (C, w) => {
    if (Sy(C)) {
      if (h.indexOf(C) >= 0)
        return;
      if (!("toJSON" in C)) {
        h[w] = C;
        const D = ad(C) ? [] : {};
        return yv(C, (g, I) => {
          const q = y(g, w + 1);
          !hv(q) && (D[I] = q);
        }), h[w] = void 0, D;
      }
    }
    return C;
  };
  return y(v, 0);
}, CO = gl("AsyncFunction"), RO = (v) => v && (Sy(v) || vi(v)) && vi(v.then) && vi(v.catch), Ew = ((v, h) => v ? setImmediate : h ? ((y, C) => (pc.addEventListener("message", ({ source: w, data: D }) => {
  w === pc && D === y && C.length && C.shift()();
}, !1), (w) => {
  C.push(w), pc.postMessage(y, "*");
}))(`axios@${Math.random()}`, []) : (y) => setTimeout(y))(
  typeof setImmediate == "function",
  vi(pc.postMessage)
), TO = typeof queueMicrotask < "u" ? queueMicrotask.bind(pc) : typeof process < "u" && process.nextTick || Ew, W = {
  isArray: ad,
  isArrayBuffer: vw,
  isBuffer: Pk,
  isFormData: Gk,
  isArrayBufferView: Bk,
  isString: Vk,
  isNumber: hw,
  isBoolean: $k,
  isObject: Sy,
  isPlainObject: dy,
  isReadableStream: Xk,
  isRequest: Jk,
  isResponse: Zk,
  isHeaders: eO,
  isUndefined: hv,
  isDate: Ik,
  isFile: Yk,
  isBlob: Wk,
  isRegExp: pO,
  isFunction: vi,
  isStream: Qk,
  isURLSearchParams: Kk,
  isTypedArray: oO,
  isFileList: qk,
  forEach: yv,
  merge: WE,
  extend: nO,
  trim: tO,
  stripBOM: rO,
  inherits: aO,
  toFlatObject: iO,
  kindOf: yy,
  kindOfTest: gl,
  endsWith: lO,
  toArray: uO,
  forEachEntry: sO,
  matchAll: cO,
  isHTMLForm: fO,
  hasOwnProperty: XT,
  hasOwnProp: XT,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gw,
  freezeMethods: vO,
  toObjectSet: hO,
  toCamelCase: dO,
  noop: mO,
  toFiniteNumber: yO,
  findKey: mw,
  global: pc,
  isContextDefined: yw,
  ALPHABET: Sw,
  generateString: gO,
  isSpecCompliantForm: SO,
  toJSONObject: EO,
  isAsyncFn: CO,
  isThenable: RO,
  setImmediate: Ew,
  asap: TO
};
function St(v, h, y, C, w) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = v, this.name = "AxiosError", h && (this.code = h), y && (this.config = y), C && (this.request = C), w && (this.response = w, this.status = w.status ? w.status : null);
}
W.inherits(St, Error, {
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
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Cw = St.prototype, Rw = {};
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
].forEach((v) => {
  Rw[v] = { value: v };
});
Object.defineProperties(St, Rw);
Object.defineProperty(Cw, "isAxiosError", { value: !0 });
St.from = (v, h, y, C, w, D) => {
  const g = Object.create(Cw);
  return W.toFlatObject(v, g, function(q) {
    return q !== Error.prototype;
  }, (I) => I !== "isAxiosError"), St.call(g, v.message, h, y, C, w), g.cause = v, g.name = v.name, D && Object.assign(g, D), g;
};
const wO = null;
function qE(v) {
  return W.isPlainObject(v) || W.isArray(v);
}
function Tw(v) {
  return W.endsWith(v, "[]") ? v.slice(0, -2) : v;
}
function ZT(v, h, y) {
  return v ? v.concat(h).map(function(w, D) {
    return w = Tw(w), !y && D ? "[" + w + "]" : w;
  }).join(y ? "." : "") : h;
}
function bO(v) {
  return W.isArray(v) && !v.some(qE);
}
const xO = W.toFlatObject(W, {}, null, function(h) {
  return /^is[A-Z]/.test(h);
});
function Ey(v, h, y) {
  if (!W.isObject(v))
    throw new TypeError("target must be an object");
  h = h || new FormData(), y = W.toFlatObject(y, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(pe, oe) {
    return !W.isUndefined(oe[pe]);
  });
  const C = y.metaTokens, w = y.visitor || K, D = y.dots, g = y.indexes, q = (y.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(h);
  if (!W.isFunction(w))
    throw new TypeError("visitor must be a function");
  function j(ne) {
    if (ne === null) return "";
    if (W.isDate(ne))
      return ne.toISOString();
    if (!q && W.isBlob(ne))
      throw new St("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(ne) || W.isTypedArray(ne) ? q && typeof Blob == "function" ? new Blob([ne]) : Buffer.from(ne) : ne;
  }
  function K(ne, pe, oe) {
    let Je = ne;
    if (ne && !oe && typeof ne == "object") {
      if (W.endsWith(pe, "{}"))
        pe = C ? pe : pe.slice(0, -2), ne = JSON.stringify(ne);
      else if (W.isArray(ne) && bO(ne) || (W.isFileList(ne) || W.endsWith(pe, "[]")) && (Je = W.toArray(ne)))
        return pe = Tw(pe), Je.forEach(function(_e, Qe) {
          !(W.isUndefined(_e) || _e === null) && h.append(
            // eslint-disable-next-line no-nested-ternary
            g === !0 ? ZT([pe], Qe, D) : g === null ? pe : pe + "[]",
            j(_e)
          );
        }), !1;
    }
    return qE(ne) ? !0 : (h.append(ZT(oe, pe, D), j(ne)), !1);
  }
  const B = [], le = Object.assign(xO, {
    defaultVisitor: K,
    convertValue: j,
    isVisitable: qE
  });
  function ue(ne, pe) {
    if (!W.isUndefined(ne)) {
      if (B.indexOf(ne) !== -1)
        throw Error("Circular reference detected in " + pe.join("."));
      B.push(ne), W.forEach(ne, function(Je, Ne) {
        (!(W.isUndefined(Je) || Je === null) && w.call(
          h,
          Je,
          W.isString(Ne) ? Ne.trim() : Ne,
          pe,
          le
        )) === !0 && ue(Je, pe ? pe.concat(Ne) : [Ne]);
      }), B.pop();
    }
  }
  if (!W.isObject(v))
    throw new TypeError("data must be an object");
  return ue(v), h;
}
function ew(v) {
  const h = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(v).replace(/[!'()~]|%20|%00/g, function(C) {
    return h[C];
  });
}
function eC(v, h) {
  this._pairs = [], v && Ey(v, this, h);
}
const ww = eC.prototype;
ww.append = function(h, y) {
  this._pairs.push([h, y]);
};
ww.toString = function(h) {
  const y = h ? function(C) {
    return h.call(this, C, ew);
  } : ew;
  return this._pairs.map(function(w) {
    return y(w[0]) + "=" + y(w[1]);
  }, "").join("&");
};
function _O(v) {
  return encodeURIComponent(v).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function bw(v, h, y) {
  if (!h)
    return v;
  const C = y && y.encode || _O;
  W.isFunction(y) && (y = {
    serialize: y
  });
  const w = y && y.serialize;
  let D;
  if (w ? D = w(h, y) : D = W.isURLSearchParams(h) ? h.toString() : new eC(h, y).toString(C), D) {
    const g = v.indexOf("#");
    g !== -1 && (v = v.slice(0, g)), v += (v.indexOf("?") === -1 ? "?" : "&") + D;
  }
  return v;
}
class tw {
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
  use(h, y, C) {
    return this.handlers.push({
      fulfilled: h,
      rejected: y,
      synchronous: C ? C.synchronous : !1,
      runWhen: C ? C.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(h) {
    this.handlers[h] && (this.handlers[h] = null);
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
  forEach(h) {
    W.forEach(this.handlers, function(C) {
      C !== null && h(C);
    });
  }
}
const xw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, DO = typeof URLSearchParams < "u" ? URLSearchParams : eC, kO = typeof FormData < "u" ? FormData : null, OO = typeof Blob < "u" ? Blob : null, NO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: DO,
    FormData: kO,
    Blob: OO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, tC = typeof window < "u" && typeof document < "u", QE = typeof navigator == "object" && navigator || void 0, LO = tC && (!QE || ["ReactNative", "NativeScript", "NS"].indexOf(QE.product) < 0), MO = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", AO = tC && window.location.href || "http://localhost", UO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: tC,
  hasStandardBrowserEnv: LO,
  hasStandardBrowserWebWorkerEnv: MO,
  navigator: QE,
  origin: AO
}, Symbol.toStringTag, { value: "Module" })), sa = {
  ...UO,
  ...NO
};
function zO(v, h) {
  return Ey(v, new sa.classes.URLSearchParams(), Object.assign({
    visitor: function(y, C, w, D) {
      return sa.isNode && W.isBuffer(y) ? (this.append(C, y.toString("base64")), !1) : D.defaultVisitor.apply(this, arguments);
    }
  }, h));
}
function FO(v) {
  return W.matchAll(/\w+|\[(\w*)]/g, v).map((h) => h[0] === "[]" ? "" : h[1] || h[0]);
}
function jO(v) {
  const h = {}, y = Object.keys(v);
  let C;
  const w = y.length;
  let D;
  for (C = 0; C < w; C++)
    D = y[C], h[D] = v[D];
  return h;
}
function _w(v) {
  function h(y, C, w, D) {
    let g = y[D++];
    if (g === "__proto__") return !0;
    const I = Number.isFinite(+g), q = D >= y.length;
    return g = !g && W.isArray(w) ? w.length : g, q ? (W.hasOwnProp(w, g) ? w[g] = [w[g], C] : w[g] = C, !I) : ((!w[g] || !W.isObject(w[g])) && (w[g] = []), h(y, C, w[g], D) && W.isArray(w[g]) && (w[g] = jO(w[g])), !I);
  }
  if (W.isFormData(v) && W.isFunction(v.entries)) {
    const y = {};
    return W.forEachEntry(v, (C, w) => {
      h(FO(C), w, y, 0);
    }), y;
  }
  return null;
}
function HO(v, h, y) {
  if (W.isString(v))
    try {
      return (h || JSON.parse)(v), W.trim(v);
    } catch (C) {
      if (C.name !== "SyntaxError")
        throw C;
    }
  return (0, JSON.stringify)(v);
}
const gv = {
  transitional: xw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(h, y) {
    const C = y.getContentType() || "", w = C.indexOf("application/json") > -1, D = W.isObject(h);
    if (D && W.isHTMLForm(h) && (h = new FormData(h)), W.isFormData(h))
      return w ? JSON.stringify(_w(h)) : h;
    if (W.isArrayBuffer(h) || W.isBuffer(h) || W.isStream(h) || W.isFile(h) || W.isBlob(h) || W.isReadableStream(h))
      return h;
    if (W.isArrayBufferView(h))
      return h.buffer;
    if (W.isURLSearchParams(h))
      return y.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), h.toString();
    let I;
    if (D) {
      if (C.indexOf("application/x-www-form-urlencoded") > -1)
        return zO(h, this.formSerializer).toString();
      if ((I = W.isFileList(h)) || C.indexOf("multipart/form-data") > -1) {
        const q = this.env && this.env.FormData;
        return Ey(
          I ? { "files[]": h } : h,
          q && new q(),
          this.formSerializer
        );
      }
    }
    return D || w ? (y.setContentType("application/json", !1), HO(h)) : h;
  }],
  transformResponse: [function(h) {
    const y = this.transitional || gv.transitional, C = y && y.forcedJSONParsing, w = this.responseType === "json";
    if (W.isResponse(h) || W.isReadableStream(h))
      return h;
    if (h && W.isString(h) && (C && !this.responseType || w)) {
      const g = !(y && y.silentJSONParsing) && w;
      try {
        return JSON.parse(h);
      } catch (I) {
        if (g)
          throw I.name === "SyntaxError" ? St.from(I, St.ERR_BAD_RESPONSE, this, null, this.response) : I;
      }
    }
    return h;
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
    FormData: sa.classes.FormData,
    Blob: sa.classes.Blob
  },
  validateStatus: function(h) {
    return h >= 200 && h < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (v) => {
  gv.headers[v] = {};
});
const PO = W.toObjectSet([
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
]), BO = (v) => {
  const h = {};
  let y, C, w;
  return v && v.split(`
`).forEach(function(g) {
    w = g.indexOf(":"), y = g.substring(0, w).trim().toLowerCase(), C = g.substring(w + 1).trim(), !(!y || h[y] && PO[y]) && (y === "set-cookie" ? h[y] ? h[y].push(C) : h[y] = [C] : h[y] = h[y] ? h[y] + ", " + C : C);
  }), h;
}, nw = Symbol("internals");
function pv(v) {
  return v && String(v).trim().toLowerCase();
}
function py(v) {
  return v === !1 || v == null ? v : W.isArray(v) ? v.map(py) : String(v);
}
function VO(v) {
  const h = /* @__PURE__ */ Object.create(null), y = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let C;
  for (; C = y.exec(v); )
    h[C[1]] = C[2];
  return h;
}
const $O = (v) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(v.trim());
function $E(v, h, y, C, w) {
  if (W.isFunction(C))
    return C.call(this, h, y);
  if (w && (h = y), !!W.isString(h)) {
    if (W.isString(C))
      return h.indexOf(C) !== -1;
    if (W.isRegExp(C))
      return C.test(h);
  }
}
function IO(v) {
  return v.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (h, y, C) => y.toUpperCase() + C);
}
function YO(v, h) {
  const y = W.toCamelCase(" " + h);
  ["get", "set", "has"].forEach((C) => {
    Object.defineProperty(v, C + y, {
      value: function(w, D, g) {
        return this[C].call(this, h, w, D, g);
      },
      configurable: !0
    });
  });
}
class qa {
  constructor(h) {
    h && this.set(h);
  }
  set(h, y, C) {
    const w = this;
    function D(I, q, j) {
      const K = pv(q);
      if (!K)
        throw new Error("header name must be a non-empty string");
      const B = W.findKey(w, K);
      (!B || w[B] === void 0 || j === !0 || j === void 0 && w[B] !== !1) && (w[B || q] = py(I));
    }
    const g = (I, q) => W.forEach(I, (j, K) => D(j, K, q));
    if (W.isPlainObject(h) || h instanceof this.constructor)
      g(h, y);
    else if (W.isString(h) && (h = h.trim()) && !$O(h))
      g(BO(h), y);
    else if (W.isHeaders(h))
      for (const [I, q] of h.entries())
        D(q, I, C);
    else
      h != null && D(y, h, C);
    return this;
  }
  get(h, y) {
    if (h = pv(h), h) {
      const C = W.findKey(this, h);
      if (C) {
        const w = this[C];
        if (!y)
          return w;
        if (y === !0)
          return VO(w);
        if (W.isFunction(y))
          return y.call(this, w, C);
        if (W.isRegExp(y))
          return y.exec(w);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(h, y) {
    if (h = pv(h), h) {
      const C = W.findKey(this, h);
      return !!(C && this[C] !== void 0 && (!y || $E(this, this[C], C, y)));
    }
    return !1;
  }
  delete(h, y) {
    const C = this;
    let w = !1;
    function D(g) {
      if (g = pv(g), g) {
        const I = W.findKey(C, g);
        I && (!y || $E(C, C[I], I, y)) && (delete C[I], w = !0);
      }
    }
    return W.isArray(h) ? h.forEach(D) : D(h), w;
  }
  clear(h) {
    const y = Object.keys(this);
    let C = y.length, w = !1;
    for (; C--; ) {
      const D = y[C];
      (!h || $E(this, this[D], D, h, !0)) && (delete this[D], w = !0);
    }
    return w;
  }
  normalize(h) {
    const y = this, C = {};
    return W.forEach(this, (w, D) => {
      const g = W.findKey(C, D);
      if (g) {
        y[g] = py(w), delete y[D];
        return;
      }
      const I = h ? IO(D) : String(D).trim();
      I !== D && delete y[D], y[I] = py(w), C[I] = !0;
    }), this;
  }
  concat(...h) {
    return this.constructor.concat(this, ...h);
  }
  toJSON(h) {
    const y = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (C, w) => {
      C != null && C !== !1 && (y[w] = h && W.isArray(C) ? C.join(", ") : C);
    }), y;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([h, y]) => h + ": " + y).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(h) {
    return h instanceof this ? h : new this(h);
  }
  static concat(h, ...y) {
    const C = new this(h);
    return y.forEach((w) => C.set(w)), C;
  }
  static accessor(h) {
    const C = (this[nw] = this[nw] = {
      accessors: {}
    }).accessors, w = this.prototype;
    function D(g) {
      const I = pv(g);
      C[I] || (YO(w, g), C[I] = !0);
    }
    return W.isArray(h) ? h.forEach(D) : D(h), this;
  }
}
qa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
W.reduceDescriptors(qa.prototype, ({ value: v }, h) => {
  let y = h[0].toUpperCase() + h.slice(1);
  return {
    get: () => v,
    set(C) {
      this[y] = C;
    }
  };
});
W.freezeMethods(qa);
function IE(v, h) {
  const y = this || gv, C = h || y, w = qa.from(C.headers);
  let D = C.data;
  return W.forEach(v, function(I) {
    D = I.call(y, D, w.normalize(), h ? h.status : void 0);
  }), w.normalize(), D;
}
function Dw(v) {
  return !!(v && v.__CANCEL__);
}
function id(v, h, y) {
  St.call(this, v ?? "canceled", St.ERR_CANCELED, h, y), this.name = "CanceledError";
}
W.inherits(id, St, {
  __CANCEL__: !0
});
function kw(v, h, y) {
  const C = y.config.validateStatus;
  !y.status || !C || C(y.status) ? v(y) : h(new St(
    "Request failed with status code " + y.status,
    [St.ERR_BAD_REQUEST, St.ERR_BAD_RESPONSE][Math.floor(y.status / 100) - 4],
    y.config,
    y.request,
    y
  ));
}
function WO(v) {
  const h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(v);
  return h && h[1] || "";
}
function qO(v, h) {
  v = v || 10;
  const y = new Array(v), C = new Array(v);
  let w = 0, D = 0, g;
  return h = h !== void 0 ? h : 1e3, function(q) {
    const j = Date.now(), K = C[D];
    g || (g = j), y[w] = q, C[w] = j;
    let B = D, le = 0;
    for (; B !== w; )
      le += y[B++], B = B % v;
    if (w = (w + 1) % v, w === D && (D = (D + 1) % v), j - g < h)
      return;
    const ue = K && j - K;
    return ue ? Math.round(le * 1e3 / ue) : void 0;
  };
}
function QO(v, h) {
  let y = 0, C = 1e3 / h, w, D;
  const g = (j, K = Date.now()) => {
    y = K, w = null, D && (clearTimeout(D), D = null), v.apply(null, j);
  };
  return [(...j) => {
    const K = Date.now(), B = K - y;
    B >= C ? g(j, K) : (w = j, D || (D = setTimeout(() => {
      D = null, g(w);
    }, C - B)));
  }, () => w && g(w)];
}
const hy = (v, h, y = 3) => {
  let C = 0;
  const w = qO(50, 250);
  return QO((D) => {
    const g = D.loaded, I = D.lengthComputable ? D.total : void 0, q = g - C, j = w(q), K = g <= I;
    C = g;
    const B = {
      loaded: g,
      total: I,
      progress: I ? g / I : void 0,
      bytes: q,
      rate: j || void 0,
      estimated: j && I && K ? (I - g) / j : void 0,
      event: D,
      lengthComputable: I != null,
      [h ? "download" : "upload"]: !0
    };
    v(B);
  }, y);
}, rw = (v, h) => {
  const y = v != null;
  return [(C) => h[0]({
    lengthComputable: y,
    total: v,
    loaded: C
  }), h[1]];
}, aw = (v) => (...h) => W.asap(() => v(...h)), GO = sa.hasStandardBrowserEnv ? /* @__PURE__ */ ((v, h) => (y) => (y = new URL(y, sa.origin), v.protocol === y.protocol && v.host === y.host && (h || v.port === y.port)))(
  new URL(sa.origin),
  sa.navigator && /(msie|trident)/i.test(sa.navigator.userAgent)
) : () => !0, KO = sa.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(v, h, y, C, w, D) {
      const g = [v + "=" + encodeURIComponent(h)];
      W.isNumber(y) && g.push("expires=" + new Date(y).toGMTString()), W.isString(C) && g.push("path=" + C), W.isString(w) && g.push("domain=" + w), D === !0 && g.push("secure"), document.cookie = g.join("; ");
    },
    read(v) {
      const h = document.cookie.match(new RegExp("(^|;\\s*)(" + v + ")=([^;]*)"));
      return h ? decodeURIComponent(h[3]) : null;
    },
    remove(v) {
      this.write(v, "", Date.now() - 864e5);
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
function XO(v) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(v);
}
function JO(v, h) {
  return h ? v.replace(/\/?\/$/, "") + "/" + h.replace(/^\/+/, "") : v;
}
function Ow(v, h) {
  return v && !XO(h) ? JO(v, h) : h;
}
const iw = (v) => v instanceof qa ? { ...v } : v;
function hc(v, h) {
  h = h || {};
  const y = {};
  function C(j, K, B, le) {
    return W.isPlainObject(j) && W.isPlainObject(K) ? W.merge.call({ caseless: le }, j, K) : W.isPlainObject(K) ? W.merge({}, K) : W.isArray(K) ? K.slice() : K;
  }
  function w(j, K, B, le) {
    if (W.isUndefined(K)) {
      if (!W.isUndefined(j))
        return C(void 0, j, B, le);
    } else return C(j, K, B, le);
  }
  function D(j, K) {
    if (!W.isUndefined(K))
      return C(void 0, K);
  }
  function g(j, K) {
    if (W.isUndefined(K)) {
      if (!W.isUndefined(j))
        return C(void 0, j);
    } else return C(void 0, K);
  }
  function I(j, K, B) {
    if (B in h)
      return C(j, K);
    if (B in v)
      return C(void 0, j);
  }
  const q = {
    url: D,
    method: D,
    data: D,
    baseURL: g,
    transformRequest: g,
    transformResponse: g,
    paramsSerializer: g,
    timeout: g,
    timeoutMessage: g,
    withCredentials: g,
    withXSRFToken: g,
    adapter: g,
    responseType: g,
    xsrfCookieName: g,
    xsrfHeaderName: g,
    onUploadProgress: g,
    onDownloadProgress: g,
    decompress: g,
    maxContentLength: g,
    maxBodyLength: g,
    beforeRedirect: g,
    transport: g,
    httpAgent: g,
    httpsAgent: g,
    cancelToken: g,
    socketPath: g,
    responseEncoding: g,
    validateStatus: I,
    headers: (j, K, B) => w(iw(j), iw(K), B, !0)
  };
  return W.forEach(Object.keys(Object.assign({}, v, h)), function(K) {
    const B = q[K] || w, le = B(v[K], h[K], K);
    W.isUndefined(le) && B !== I || (y[K] = le);
  }), y;
}
const Nw = (v) => {
  const h = hc({}, v);
  let { data: y, withXSRFToken: C, xsrfHeaderName: w, xsrfCookieName: D, headers: g, auth: I } = h;
  h.headers = g = qa.from(g), h.url = bw(Ow(h.baseURL, h.url), v.params, v.paramsSerializer), I && g.set(
    "Authorization",
    "Basic " + btoa((I.username || "") + ":" + (I.password ? unescape(encodeURIComponent(I.password)) : ""))
  );
  let q;
  if (W.isFormData(y)) {
    if (sa.hasStandardBrowserEnv || sa.hasStandardBrowserWebWorkerEnv)
      g.setContentType(void 0);
    else if ((q = g.getContentType()) !== !1) {
      const [j, ...K] = q ? q.split(";").map((B) => B.trim()).filter(Boolean) : [];
      g.setContentType([j || "multipart/form-data", ...K].join("; "));
    }
  }
  if (sa.hasStandardBrowserEnv && (C && W.isFunction(C) && (C = C(h)), C || C !== !1 && GO(h.url))) {
    const j = w && D && KO.read(D);
    j && g.set(w, j);
  }
  return h;
}, ZO = typeof XMLHttpRequest < "u", eN = ZO && function(v) {
  return new Promise(function(y, C) {
    const w = Nw(v);
    let D = w.data;
    const g = qa.from(w.headers).normalize();
    let { responseType: I, onUploadProgress: q, onDownloadProgress: j } = w, K, B, le, ue, ne;
    function pe() {
      ue && ue(), ne && ne(), w.cancelToken && w.cancelToken.unsubscribe(K), w.signal && w.signal.removeEventListener("abort", K);
    }
    let oe = new XMLHttpRequest();
    oe.open(w.method.toUpperCase(), w.url, !0), oe.timeout = w.timeout;
    function Je() {
      if (!oe)
        return;
      const _e = qa.from(
        "getAllResponseHeaders" in oe && oe.getAllResponseHeaders()
      ), ge = {
        data: !I || I === "text" || I === "json" ? oe.responseText : oe.response,
        status: oe.status,
        statusText: oe.statusText,
        headers: _e,
        config: v,
        request: oe
      };
      kw(function(Fe) {
        y(Fe), pe();
      }, function(Fe) {
        C(Fe), pe();
      }, ge), oe = null;
    }
    "onloadend" in oe ? oe.onloadend = Je : oe.onreadystatechange = function() {
      !oe || oe.readyState !== 4 || oe.status === 0 && !(oe.responseURL && oe.responseURL.indexOf("file:") === 0) || setTimeout(Je);
    }, oe.onabort = function() {
      oe && (C(new St("Request aborted", St.ECONNABORTED, v, oe)), oe = null);
    }, oe.onerror = function() {
      C(new St("Network Error", St.ERR_NETWORK, v, oe)), oe = null;
    }, oe.ontimeout = function() {
      let Qe = w.timeout ? "timeout of " + w.timeout + "ms exceeded" : "timeout exceeded";
      const ge = w.transitional || xw;
      w.timeoutErrorMessage && (Qe = w.timeoutErrorMessage), C(new St(
        Qe,
        ge.clarifyTimeoutError ? St.ETIMEDOUT : St.ECONNABORTED,
        v,
        oe
      )), oe = null;
    }, D === void 0 && g.setContentType(null), "setRequestHeader" in oe && W.forEach(g.toJSON(), function(Qe, ge) {
      oe.setRequestHeader(ge, Qe);
    }), W.isUndefined(w.withCredentials) || (oe.withCredentials = !!w.withCredentials), I && I !== "json" && (oe.responseType = w.responseType), j && ([le, ne] = hy(j, !0), oe.addEventListener("progress", le)), q && oe.upload && ([B, ue] = hy(q), oe.upload.addEventListener("progress", B), oe.upload.addEventListener("loadend", ue)), (w.cancelToken || w.signal) && (K = (_e) => {
      oe && (C(!_e || _e.type ? new id(null, v, oe) : _e), oe.abort(), oe = null);
    }, w.cancelToken && w.cancelToken.subscribe(K), w.signal && (w.signal.aborted ? K() : w.signal.addEventListener("abort", K)));
    const Ne = WO(w.url);
    if (Ne && sa.protocols.indexOf(Ne) === -1) {
      C(new St("Unsupported protocol " + Ne + ":", St.ERR_BAD_REQUEST, v));
      return;
    }
    oe.send(D || null);
  });
}, tN = (v, h) => {
  const { length: y } = v = v ? v.filter(Boolean) : [];
  if (h || y) {
    let C = new AbortController(), w;
    const D = function(j) {
      if (!w) {
        w = !0, I();
        const K = j instanceof Error ? j : this.reason;
        C.abort(K instanceof St ? K : new id(K instanceof Error ? K.message : K));
      }
    };
    let g = h && setTimeout(() => {
      g = null, D(new St(`timeout ${h} of ms exceeded`, St.ETIMEDOUT));
    }, h);
    const I = () => {
      v && (g && clearTimeout(g), g = null, v.forEach((j) => {
        j.unsubscribe ? j.unsubscribe(D) : j.removeEventListener("abort", D);
      }), v = null);
    };
    v.forEach((j) => j.addEventListener("abort", D));
    const { signal: q } = C;
    return q.unsubscribe = () => W.asap(I), q;
  }
}, nN = function* (v, h) {
  let y = v.byteLength;
  if (y < h) {
    yield v;
    return;
  }
  let C = 0, w;
  for (; C < y; )
    w = C + h, yield v.slice(C, w), C = w;
}, rN = async function* (v, h) {
  for await (const y of aN(v))
    yield* nN(y, h);
}, aN = async function* (v) {
  if (v[Symbol.asyncIterator]) {
    yield* v;
    return;
  }
  const h = v.getReader();
  try {
    for (; ; ) {
      const { done: y, value: C } = await h.read();
      if (y)
        break;
      yield C;
    }
  } finally {
    await h.cancel();
  }
}, lw = (v, h, y, C) => {
  const w = rN(v, h);
  let D = 0, g, I = (q) => {
    g || (g = !0, C && C(q));
  };
  return new ReadableStream({
    async pull(q) {
      try {
        const { done: j, value: K } = await w.next();
        if (j) {
          I(), q.close();
          return;
        }
        let B = K.byteLength;
        if (y) {
          let le = D += B;
          y(le);
        }
        q.enqueue(new Uint8Array(K));
      } catch (j) {
        throw I(j), j;
      }
    },
    cancel(q) {
      return I(q), w.return();
    }
  }, {
    highWaterMark: 2
  });
}, Cy = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Lw = Cy && typeof ReadableStream == "function", iN = Cy && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((v) => (h) => v.encode(h))(new TextEncoder()) : async (v) => new Uint8Array(await new Response(v).arrayBuffer())), Mw = (v, ...h) => {
  try {
    return !!v(...h);
  } catch {
    return !1;
  }
}, lN = Lw && Mw(() => {
  let v = !1;
  const h = new Request(sa.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return v = !0, "half";
    }
  }).headers.has("Content-Type");
  return v && !h;
}), uw = 64 * 1024, GE = Lw && Mw(() => W.isReadableStream(new Response("").body)), my = {
  stream: GE && ((v) => v.body)
};
Cy && ((v) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !my[h] && (my[h] = W.isFunction(v[h]) ? (y) => y[h]() : (y, C) => {
      throw new St(`Response type '${h}' is not supported`, St.ERR_NOT_SUPPORT, C);
    });
  });
})(new Response());
const uN = async (v) => {
  if (v == null)
    return 0;
  if (W.isBlob(v))
    return v.size;
  if (W.isSpecCompliantForm(v))
    return (await new Request(sa.origin, {
      method: "POST",
      body: v
    }).arrayBuffer()).byteLength;
  if (W.isArrayBufferView(v) || W.isArrayBuffer(v))
    return v.byteLength;
  if (W.isURLSearchParams(v) && (v = v + ""), W.isString(v))
    return (await iN(v)).byteLength;
}, oN = async (v, h) => {
  const y = W.toFiniteNumber(v.getContentLength());
  return y ?? uN(h);
}, sN = Cy && (async (v) => {
  let {
    url: h,
    method: y,
    data: C,
    signal: w,
    cancelToken: D,
    timeout: g,
    onDownloadProgress: I,
    onUploadProgress: q,
    responseType: j,
    headers: K,
    withCredentials: B = "same-origin",
    fetchOptions: le
  } = Nw(v);
  j = j ? (j + "").toLowerCase() : "text";
  let ue = tN([w, D && D.toAbortSignal()], g), ne;
  const pe = ue && ue.unsubscribe && (() => {
    ue.unsubscribe();
  });
  let oe;
  try {
    if (q && lN && y !== "get" && y !== "head" && (oe = await oN(K, C)) !== 0) {
      let ge = new Request(h, {
        method: "POST",
        body: C,
        duplex: "half"
      }), Ze;
      if (W.isFormData(C) && (Ze = ge.headers.get("content-type")) && K.setContentType(Ze), ge.body) {
        const [Fe, $t] = rw(
          oe,
          hy(aw(q))
        );
        C = lw(ge.body, uw, Fe, $t);
      }
    }
    W.isString(B) || (B = B ? "include" : "omit");
    const Je = "credentials" in Request.prototype;
    ne = new Request(h, {
      ...le,
      signal: ue,
      method: y.toUpperCase(),
      headers: K.normalize().toJSON(),
      body: C,
      duplex: "half",
      credentials: Je ? B : void 0
    });
    let Ne = await fetch(ne);
    const _e = GE && (j === "stream" || j === "response");
    if (GE && (I || _e && pe)) {
      const ge = {};
      ["status", "statusText", "headers"].forEach((Ot) => {
        ge[Ot] = Ne[Ot];
      });
      const Ze = W.toFiniteNumber(Ne.headers.get("content-length")), [Fe, $t] = I && rw(
        Ze,
        hy(aw(I), !0)
      ) || [];
      Ne = new Response(
        lw(Ne.body, uw, Fe, () => {
          $t && $t(), pe && pe();
        }),
        ge
      );
    }
    j = j || "text";
    let Qe = await my[W.findKey(my, j) || "text"](Ne, v);
    return !_e && pe && pe(), await new Promise((ge, Ze) => {
      kw(ge, Ze, {
        data: Qe,
        headers: qa.from(Ne.headers),
        status: Ne.status,
        statusText: Ne.statusText,
        config: v,
        request: ne
      });
    });
  } catch (Je) {
    throw pe && pe(), Je && Je.name === "TypeError" && /fetch/i.test(Je.message) ? Object.assign(
      new St("Network Error", St.ERR_NETWORK, v, ne),
      {
        cause: Je.cause || Je
      }
    ) : St.from(Je, Je && Je.code, v, ne);
  }
}), KE = {
  http: wO,
  xhr: eN,
  fetch: sN
};
W.forEach(KE, (v, h) => {
  if (v) {
    try {
      Object.defineProperty(v, "name", { value: h });
    } catch {
    }
    Object.defineProperty(v, "adapterName", { value: h });
  }
});
const ow = (v) => `- ${v}`, cN = (v) => W.isFunction(v) || v === null || v === !1, Aw = {
  getAdapter: (v) => {
    v = W.isArray(v) ? v : [v];
    const { length: h } = v;
    let y, C;
    const w = {};
    for (let D = 0; D < h; D++) {
      y = v[D];
      let g;
      if (C = y, !cN(y) && (C = KE[(g = String(y)).toLowerCase()], C === void 0))
        throw new St(`Unknown adapter '${g}'`);
      if (C)
        break;
      w[g || "#" + D] = C;
    }
    if (!C) {
      const D = Object.entries(w).map(
        ([I, q]) => `adapter ${I} ` + (q === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let g = h ? D.length > 1 ? `since :
` + D.map(ow).join(`
`) : " " + ow(D[0]) : "as no adapter specified";
      throw new St(
        "There is no suitable adapter to dispatch the request " + g,
        "ERR_NOT_SUPPORT"
      );
    }
    return C;
  },
  adapters: KE
};
function YE(v) {
  if (v.cancelToken && v.cancelToken.throwIfRequested(), v.signal && v.signal.aborted)
    throw new id(null, v);
}
function sw(v) {
  return YE(v), v.headers = qa.from(v.headers), v.data = IE.call(
    v,
    v.transformRequest
  ), ["post", "put", "patch"].indexOf(v.method) !== -1 && v.headers.setContentType("application/x-www-form-urlencoded", !1), Aw.getAdapter(v.adapter || gv.adapter)(v).then(function(C) {
    return YE(v), C.data = IE.call(
      v,
      v.transformResponse,
      C
    ), C.headers = qa.from(C.headers), C;
  }, function(C) {
    return Dw(C) || (YE(v), C && C.response && (C.response.data = IE.call(
      v,
      v.transformResponse,
      C.response
    ), C.response.headers = qa.from(C.response.headers))), Promise.reject(C);
  });
}
const Uw = "1.7.9", Ry = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((v, h) => {
  Ry[v] = function(C) {
    return typeof C === v || "a" + (h < 1 ? "n " : " ") + v;
  };
});
const cw = {};
Ry.transitional = function(h, y, C) {
  function w(D, g) {
    return "[Axios v" + Uw + "] Transitional option '" + D + "'" + g + (C ? ". " + C : "");
  }
  return (D, g, I) => {
    if (h === !1)
      throw new St(
        w(g, " has been removed" + (y ? " in " + y : "")),
        St.ERR_DEPRECATED
      );
    return y && !cw[g] && (cw[g] = !0, console.warn(
      w(
        g,
        " has been deprecated since v" + y + " and will be removed in the near future"
      )
    )), h ? h(D, g, I) : !0;
  };
};
Ry.spelling = function(h) {
  return (y, C) => (console.warn(`${C} is likely a misspelling of ${h}`), !0);
};
function fN(v, h, y) {
  if (typeof v != "object")
    throw new St("options must be an object", St.ERR_BAD_OPTION_VALUE);
  const C = Object.keys(v);
  let w = C.length;
  for (; w-- > 0; ) {
    const D = C[w], g = h[D];
    if (g) {
      const I = v[D], q = I === void 0 || g(I, D, v);
      if (q !== !0)
        throw new St("option " + D + " must be " + q, St.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (y !== !0)
      throw new St("Unknown option " + D, St.ERR_BAD_OPTION);
  }
}
const vy = {
  assertOptions: fN,
  validators: Ry
}, iu = vy.validators;
class vc {
  constructor(h) {
    this.defaults = h, this.interceptors = {
      request: new tw(),
      response: new tw()
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
  async request(h, y) {
    try {
      return await this._request(h, y);
    } catch (C) {
      if (C instanceof Error) {
        let w = {};
        Error.captureStackTrace ? Error.captureStackTrace(w) : w = new Error();
        const D = w.stack ? w.stack.replace(/^.+\n/, "") : "";
        try {
          C.stack ? D && !String(C.stack).endsWith(D.replace(/^.+\n.+\n/, "")) && (C.stack += `
` + D) : C.stack = D;
        } catch {
        }
      }
      throw C;
    }
  }
  _request(h, y) {
    typeof h == "string" ? (y = y || {}, y.url = h) : y = h || {}, y = hc(this.defaults, y);
    const { transitional: C, paramsSerializer: w, headers: D } = y;
    C !== void 0 && vy.assertOptions(C, {
      silentJSONParsing: iu.transitional(iu.boolean),
      forcedJSONParsing: iu.transitional(iu.boolean),
      clarifyTimeoutError: iu.transitional(iu.boolean)
    }, !1), w != null && (W.isFunction(w) ? y.paramsSerializer = {
      serialize: w
    } : vy.assertOptions(w, {
      encode: iu.function,
      serialize: iu.function
    }, !0)), vy.assertOptions(y, {
      baseUrl: iu.spelling("baseURL"),
      withXsrfToken: iu.spelling("withXSRFToken")
    }, !0), y.method = (y.method || this.defaults.method || "get").toLowerCase();
    let g = D && W.merge(
      D.common,
      D[y.method]
    );
    D && W.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (ne) => {
        delete D[ne];
      }
    ), y.headers = qa.concat(g, D);
    const I = [];
    let q = !0;
    this.interceptors.request.forEach(function(pe) {
      typeof pe.runWhen == "function" && pe.runWhen(y) === !1 || (q = q && pe.synchronous, I.unshift(pe.fulfilled, pe.rejected));
    });
    const j = [];
    this.interceptors.response.forEach(function(pe) {
      j.push(pe.fulfilled, pe.rejected);
    });
    let K, B = 0, le;
    if (!q) {
      const ne = [sw.bind(this), void 0];
      for (ne.unshift.apply(ne, I), ne.push.apply(ne, j), le = ne.length, K = Promise.resolve(y); B < le; )
        K = K.then(ne[B++], ne[B++]);
      return K;
    }
    le = I.length;
    let ue = y;
    for (B = 0; B < le; ) {
      const ne = I[B++], pe = I[B++];
      try {
        ue = ne(ue);
      } catch (oe) {
        pe.call(this, oe);
        break;
      }
    }
    try {
      K = sw.call(this, ue);
    } catch (ne) {
      return Promise.reject(ne);
    }
    for (B = 0, le = j.length; B < le; )
      K = K.then(j[B++], j[B++]);
    return K;
  }
  getUri(h) {
    h = hc(this.defaults, h);
    const y = Ow(h.baseURL, h.url);
    return bw(y, h.params, h.paramsSerializer);
  }
}
W.forEach(["delete", "get", "head", "options"], function(h) {
  vc.prototype[h] = function(y, C) {
    return this.request(hc(C || {}, {
      method: h,
      url: y,
      data: (C || {}).data
    }));
  };
});
W.forEach(["post", "put", "patch"], function(h) {
  function y(C) {
    return function(D, g, I) {
      return this.request(hc(I || {}, {
        method: h,
        headers: C ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: D,
        data: g
      }));
    };
  }
  vc.prototype[h] = y(), vc.prototype[h + "Form"] = y(!0);
});
class nC {
  constructor(h) {
    if (typeof h != "function")
      throw new TypeError("executor must be a function.");
    let y;
    this.promise = new Promise(function(D) {
      y = D;
    });
    const C = this;
    this.promise.then((w) => {
      if (!C._listeners) return;
      let D = C._listeners.length;
      for (; D-- > 0; )
        C._listeners[D](w);
      C._listeners = null;
    }), this.promise.then = (w) => {
      let D;
      const g = new Promise((I) => {
        C.subscribe(I), D = I;
      }).then(w);
      return g.cancel = function() {
        C.unsubscribe(D);
      }, g;
    }, h(function(D, g, I) {
      C.reason || (C.reason = new id(D, g, I), y(C.reason));
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
  subscribe(h) {
    if (this.reason) {
      h(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(h) : this._listeners = [h];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(h) {
    if (!this._listeners)
      return;
    const y = this._listeners.indexOf(h);
    y !== -1 && this._listeners.splice(y, 1);
  }
  toAbortSignal() {
    const h = new AbortController(), y = (C) => {
      h.abort(C);
    };
    return this.subscribe(y), h.signal.unsubscribe = () => this.unsubscribe(y), h.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let h;
    return {
      token: new nC(function(w) {
        h = w;
      }),
      cancel: h
    };
  }
}
function dN(v) {
  return function(y) {
    return v.apply(null, y);
  };
}
function pN(v) {
  return W.isObject(v) && v.isAxiosError === !0;
}
const XE = {
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
Object.entries(XE).forEach(([v, h]) => {
  XE[h] = v;
});
function zw(v) {
  const h = new vc(v), y = pw(vc.prototype.request, h);
  return W.extend(y, vc.prototype, h, { allOwnKeys: !0 }), W.extend(y, h, null, { allOwnKeys: !0 }), y.create = function(w) {
    return zw(hc(v, w));
  }, y;
}
const rr = zw(gv);
rr.Axios = vc;
rr.CanceledError = id;
rr.CancelToken = nC;
rr.isCancel = Dw;
rr.VERSION = Uw;
rr.toFormData = Ey;
rr.AxiosError = St;
rr.Cancel = rr.CanceledError;
rr.all = function(h) {
  return Promise.all(h);
};
rr.spread = dN;
rr.isAxiosError = pN;
rr.mergeConfig = hc;
rr.AxiosHeaders = qa;
rr.formToJSON = (v) => _w(W.isHTMLForm(v) ? new FormData(v) : v);
rr.getAdapter = Aw.getAdapter;
rr.HttpStatusCode = XE;
rr.default = rr;
const vN = () => {
  const [v, h] = Zu.useState(!1), [y, C] = Zu.useState(null), [w, D] = Zu.useState(!0), [g, I] = Zu.useState(null);
  Zu.useEffect(() => {
    const le = new URLSearchParams(window.location.search).get("assistant_id") || "asst_79azoCwz4RXE6luvA1xQdvLo";
    I(le);
  }, []);
  const q = async () => {
    try {
      if (!g)
        throw new Error("Assistant ID is missing.");
      const le = (await rr.get(`${dw}/get_thread_id/${g}`)).data.thread_id;
      C(le), h(!0), D(!1);
    } catch (B) {
      console.error("Failed to fetch thread ID:", B), alert("Unable to start chat. Please try again later.");
    }
  }, j = () => {
    h(!1), C(null), D(!0);
  }, K = () => {
    D(!1);
  };
  return /* @__PURE__ */ vt.jsxs(vt.Fragment, { children: [
    w && /* @__PURE__ */ vt.jsxs("div", { className: "bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-500 h-[130px] w-[180px] p-4 flex flex-col justify-center items-center rounded-tl-3xl rounded-bl-3xl transition-all duration-500 ease-in-out relative", children: [
      /* @__PURE__ */ vt.jsx(
        "button",
        {
          onClick: K,
          className: "absolute top-0 left-1 text-gray-200 hover:text-white font-bold text-md p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer",
          children: "X"
        }
      ),
      /* @__PURE__ */ vt.jsx(
        "img",
        {
          src: JE,
          alt: "logo",
          className: "h-24 animate__animated animate__fadeIn relative top-[-10px] w-[80px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        }
      ),
      /* @__PURE__ */ vt.jsx(
        "button",
        {
          className: "bg-white hover:bg-gray-100 text-blue-400 font-bold py-2 text-sm px-4 rounded mb-8 transition duration-300 ease-in-out transform hover:scale-105",
          onClick: q,
          children: "Any Questions?"
        }
      )
    ] }),
    v && y && /* @__PURE__ */ vt.jsx(
      jk,
      {
        isOpen: v,
        onClose: j,
        threadId: y,
        assistantId: g || ""
      }
    )
  ] });
};
function hN() {
  return /* @__PURE__ */ vt.jsx("div", { className: "h-screen flex flex-col justify-center items-end mr-2 bg-transparent", children: /* @__PURE__ */ vt.jsx(vN, {}) });
}
zk.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ vt.jsx(hN, {})
);
