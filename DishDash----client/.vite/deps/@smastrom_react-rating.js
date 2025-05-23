"use client";
import {
  require_react
} from "./chunk-VUPZMC2T.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x2) {
            var match = x2.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x2.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x2.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x2) {
                      var control = x2;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent)
          );
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x2) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                  validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                );
            else validateChildKeys(children, type);
        } else {
          children = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
          console.error(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            isStaticChildren,
            children
          );
        }
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k2) {
            return "key" !== k2;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i2 = 0; i2 < node.length; i2++) {
              var child = node[i2];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (null === node || "object" !== typeof node ? i2 = null : (i2 = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i2 = "function" === typeof i2 ? i2 : null), "function" === typeof i2 && i2 !== node.entries && (i2 = i2.call(node), i2 !== node))
            for (; !(node = i2.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, false, source, self);
      };
      exports.jsxs = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, true, source, self);
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/@smastrom/react-rating/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var d = (r2) => {
};
var h = "undefined" == typeof window ? import_react.useEffect : import_react.useLayoutEffect;
var m = (r2) => "number" == typeof r2 && r2 > 0;
var p = (r2) => m(r2) ? r2 : 0;
var L = (r2) => Math.round(100 * r2) / 100;
var O = (r2) => Math.round(2 * r2) / 2;
var g = (r2) => 0 === r2 ? 0 : -1 * L(r2);
var y = {};
var b = "rr--group";
var S = "rr--box";
var R = "rr--svg";
var M = "rr--reset";
var A = "rr--focus-reset";
var E = "rr--svg-stop-1";
var v = "rr--svg-stop-2";
var B = "rr--on";
var I = "rr--off";
var x = { ZOOM: "rr--fx-zoom", POSITION: "rr--fx-position", OPACITY: "rr--fx-opacity", COLORS: "rr--fx-colors" };
var C = { SMALL: "rr--rx-sm", MEDIUM: "rr--rx-md", LARGE: "rr--rx-lg", FULL: "rr--rx-full" };
var w = { SMALL: "rr--gap-sm", MEDIUM: "rr--gap-md", LARGE: "rr--gap-lg" };
var D = { SMALL: "rr--space-sm", MEDIUM: "rr--space-md", LARGE: "rr--space-lg" };
var N = "rr--pointer";
var $ = "rr--disabled";
var k = "rr--dir-y";
var F = "rr--dir-x";
var T = "rr--has-stroke";
var U = "rr--has-border";
var W = "rr--hf-box-on";
var P = "rr--hf-box-int";
var G = "rr--hf-box-off";
var K = "rr--hf-svg-on";
var X = "rr--hf-svg-off";
var Z = { FILL: "--rr--fill-on-color", BOX: "--rr--box-on-color", BORDER: "--rr--border-on-color", STROKE: "--rr--stroke-on-color" };
var H = { FILL: "--rr--fill-off-color", BOX: "--rr--box-off-color", BORDER: "--rr--border-off-color", STROKE: "--rr--stroke-off-color" };
var V = "--rr--border-width";
var j = "horizontal";
var Y = "vertical";
var z = "svg";
var q = "box";
var J = { NONE: "none", SMALL: "small", MEDIUM: "medium", LARGE: "large", FULL: "full" };
var Q = { NONE: "none", ZOOM: "zoom", POSITION: "position", OPACITY: "opacity", COLORS: "colors" };
var _ = { FILL: "activeFillColor", BOX: "activeBoxColor", BORDER: "activeBoxBorderColor", STROKE: "activeStrokeColor" };
var rr = { FILL: "inactiveFillColor", BOX: "inactiveBoxColor", BORDER: "inactiveBoxBorderColor", STROKE: "inactiveStrokeColor" };
function er({ itemShapes: t2, testId: n2, itemStrokeWidth: c2 = 0, orientation: l2 = j, hasHF: u2 = false }) {
  const f2 = c2 > 0 ? -c2 / 2 : 0, d2 = c2 > 0 ? `${f2} ${f2}` : "0 0", m2 = (0, import_react.useId)(), p2 = (0, import_react.useRef)(null), [O2, y2] = (0, import_react.useState)(null), [b2, S2] = (0, import_react.useState)(false), M2 = (0, import_react.useRef)(null), A2 = (0, import_react.useRef)(null), B2 = (0, import_react.useCallback)((r2) => {
    const { width: e2, height: t3, x: n3, y: o2 } = r2.getBBox();
    if (((...r3) => r3.every((r4) => "number" == typeof r4))(e2, t3, n3, o2)) {
      const r3 = `${d2} ${L(e2 + c2)} ${L(t3 + c2)}`, i2 = `${g(n3)} ${g(o2)}`;
      y2({ viewBox: r3, translateData: i2 });
    }
  }, [c2, d2]);
  return h(() => {
    if (p2.current) {
      const { width: r2, height: e2, x: t3, y: n3 } = p2.current.getBBox();
      if (0 === r2 && 0 === e2 && 0 === t3 && 0 === n3) {
        const r3 = function(r4) {
          if (!r4 || !r4.parentElement)
            return null;
          let e3 = r4 == null ? void 0 : r4.parentElement;
          for (; e3 && "none" !== window.getComputedStyle(e3).display; )
            e3 = e3.parentElement;
          return e3;
        }(p2.current);
        r3 && (A2.current = r3, S2(true));
      } else
        S2(false);
      B2(p2.current);
    }
  }, [t2, c2, u2]), h(() => {
    if (b2 && A2.current)
      return M2.current = new MutationObserver((r2, e2) => {
        r2.forEach(() => {
          "none" === window.getComputedStyle(A2.current).display || (B2(p2.current), e2.disconnect());
        });
      }), M2.current.observe(A2.current, { attributes: true }), () => {
        var _a;
        (_a = M2.current) == null ? void 0 : _a.disconnect();
      };
  }, [b2, B2]), (0, import_jsx_runtime.jsxs)("svg", { "aria-hidden": "true", className: R, xmlns: "http://www.w3.org/2000/svg", viewBox: O2 ? O2.viewBox : "0 0 0 0", preserveAspectRatio: "xMidYMid meet", ...c2 > 0 ? { strokeWidth: c2 } : {}, ...n2, children: [u2 && (0, import_jsx_runtime.jsx)("defs", { children: (0, import_jsx_runtime.jsxs)("linearGradient", { id: m2, ...l2 === Y ? { gradientTransform: "rotate(90)" } : {}, children: [(0, import_jsx_runtime.jsx)("stop", { className: E, offset: "50%" }), (0, import_jsx_runtime.jsx)("stop", { className: v, offset: "50%" })] }) }), (0, import_jsx_runtime.jsx)("g", { ref: p2, shapeRendering: "geometricPrecision", ...function() {
    if (O2) {
      const r2 = `translate(${O2 == null ? void 0 : O2.translateData})`;
      return "translate(0 0)" === r2 ? {} : { transform: r2 };
    }
    return { transform: void 0 };
  }(), ...u2 ? { fill: `url('#${m2}')` } : {}, children: t2 })] });
}
function tr(r2, e2, t2) {
  switch (e2) {
    case _.FILL:
      return r2[Z.FILL] = t2, true;
    case _.BOX:
      return r2[Z.BOX] = t2, true;
    case _.BORDER:
      return r2[Z.BORDER] = t2, true;
    case _.STROKE:
      return r2[Z.STROKE] = t2, true;
  }
  return false;
}
function nr(r2, e2, t2) {
  if (!tr(r2, e2, t2))
    switch (e2) {
      case rr.FILL:
        r2[H.FILL] = t2;
        break;
      case rr.BOX:
        r2[H.BOX] = t2;
        break;
      case rr.BORDER:
        r2[H.BORDER] = t2;
        break;
      case rr.STROKE:
        r2[H.STROKE] = t2;
    }
}
function or(r2, e2, t2) {
  const n2 = {};
  let o2;
  for (const [t3, o3] of Object.entries(r2))
    tr(n2, t3, o3[e2]);
  return t2 ? (o2 = Array(e2).fill({}), o2.push(n2)) : o2 = Array(e2 + 1).fill(n2), o2;
}
var ir = (r2) => `${r2} ${x.COLORS}`;
function ar({ className: r2, radius: e2, readOnly: t2, isDisabled: n2, isDynamic: o2, transition: i2, orientation: a2, absoluteBoxBorderWidth: s2, absoluteStrokeWidth: c2, spaceBetween: l2, spaceInside: u2 }) {
  const f2 = o2 ? N : "", d2 = function(r3) {
    switch (r3) {
      case J.SMALL:
        return w.SMALL;
      case J.MEDIUM:
        return w.MEDIUM;
      case J.LARGE:
        return w.LARGE;
      default:
        return "";
    }
  }(l2), h2 = function(r3) {
    switch (r3) {
      case J.SMALL:
        return D.SMALL;
      case J.MEDIUM:
        return D.MEDIUM;
      case J.LARGE:
        return D.LARGE;
      default:
        return "";
    }
  }(u2), m2 = !t2 && n2 ? $ : "", p2 = o2 && i2 !== Q.NONE ? function(r3) {
    switch (r3) {
      case Q.ZOOM:
        return ir(x.ZOOM);
      case Q.POSITION:
        return ir(x.POSITION);
      case Q.OPACITY:
        return ir(x.OPACITY);
      case Q.COLORS:
        return x.COLORS;
      default:
        return "";
    }
  }(i2) : "", L2 = a2 === Y ? k : F, O2 = function(r3) {
    switch (r3) {
      case J.SMALL:
        return C.SMALL;
      case J.MEDIUM:
        return C.MEDIUM;
      case J.LARGE:
        return C.LARGE;
      case J.FULL:
        return C.FULL;
      default:
        return "";
    }
  }(e2);
  return `${b} ${L2} ${c2 > 0 ? T : ""} ${s2 > 0 ? U : ""}
${p2} ${O2} ${f2} ${m2} ${d2}
${h2} ${r2}`.replace(/  +/g, " ").trimEnd();
}
function sr(r2, e2, t2) {
  return Array.from({ length: e2 }, (e3, n2) => r2 ? n2 === t2 ? B : I : n2 <= t2 ? B : I);
}
function cr(r2, e2, t2) {
  const n2 = Math.floor(O(r2));
  return Array.from({ length: e2 }, (r3, e3) => "box" === t2 ? e3 > n2 ? G : e3 === n2 ? P : W : e3 > n2 ? X : K);
}
function lr(r2, e2) {
  const t2 = {};
  m(e2) && (t2[V] = `${e2}px`);
  const n2 = Object.entries(r2);
  if (n2.length > 0)
    for (const [r3, e3] of n2)
      nr(t2, r3, e3);
  return t2;
}
var ur = [_.FILL, _.BOX, _.STROKE, _.BORDER];
function fr(r2, e2, t2 = false) {
  return Array.from({ length: r2 }, (n2, o2) => t2 && e2 < 0 ? o2 === r2 - 1 ? 0 : -1 : e2 <= 0 ? 0 === o2 ? 0 : -1 : e2 > 0 ? o2 === e2 ? 0 : -1 : void 0);
}
var dr = "@smastrom/react-rating";
var hr = (r2) => `[${dr}] - Nothing's returned from rendering. Reason: ${r2}.`;
function mr(r2, e2) {
  return r2.shouldRender = false, r2.reason = hr(e2), r2;
}
var pr = "itemShapes is not a valid JSX element";
var Lr = (0, import_jsx_runtime.jsx)("polygon", { points: "25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02" });
var Or = (0, import_jsx_runtime.jsx)("path", { d: "M12.5,18.16l-7.73,5.61,2.95-9.08L0,9.07H9.55S12.5,0,12.5,0l2.95,9.07h9.55l-7.73,5.62,2.95,9.08-7.73-5.61Z" });
var gr = (0, import_jsx_runtime.jsx)("path", { d: "M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z" });
var yr = (0, import_jsx_runtime.jsx)("path", { d: "M22.72,8.24h-6.68L13.97,1.88c-.81-2.51-2.13-2.51-2.95,0l-2.07,6.36H2.28c-2.63,0-3.04,1.25-.91,2.8l5.41,3.93-2.06,6.36c-.81,2.51,.25,3.28,2.39,1.73l5.41-3.93,5.41,3.93c2.13,1.55,3.2,.77,2.39-1.73l-2.07-6.36,5.41-3.93c2.13-1.55,1.72-2.8-.91-2.8Z" });
var br = (0, import_jsx_runtime.jsx)("path", { d: "M11.58,.77c.51-1.02,1.33-1.02,1.84,0l2.34,4.73c.5,1.02,1.84,2,2.98,2.16l5.22,.76c1.13,.17,1.39,.95,.57,1.75l-3.78,3.68c-.82,.8-1.33,2.37-1.14,3.5l.89,5.2c.19,1.13-.48,1.61-1.49,1.08l-4.67-2.45c-1.01-.53-2.67-.53-3.68,0l-4.67,2.46c-1.01,.53-1.68,.05-1.49-1.08l.89-5.2c.19-1.13-.32-2.7-1.14-3.5L.48,10.17c-.82-.8-.56-1.58,.57-1.75l5.22-.76c1.13-.16,2.47-1.14,2.98-2.16L11.58,.77h0Z" });
var Sr = (0, import_jsx_runtime.jsx)("path", { d: "M19.29,1.61c-2.15-2.15-5.63-2.15-7.78,0,0,0,0,0,0,0l-1.06,1.06-1.06-1.06C7.24-.54,3.76-.54,1.61,1.61-.54,3.76-.54,7.24,1.61,9.39l1.06,1.06,7.78,7.78,7.78-7.78,1.06-1.06c2.15-2.15,2.15-5.63,0-7.78,0,0,0,0,0,0Z" });
var Rr = { itemShapes: Lr, itemStrokeWidth: 2, activeFillColor: "#ffb23f", inactiveFillColor: "#fff7ed", activeStrokeColor: "#e17b21", inactiveStrokeColor: "#eda76a" };
var Mr = (0, import_react.forwardRef)(({ value: n2, items: o2 = 5, readOnly: l2 = false, onChange: m2 = d, onHoverChange: L2 = d, onFocus: g2 = d, onBlur: b2 = d, preventDefault: R2 = "all", isDisabled: E2 = false, highlightOnlySelected: v2 = false, orientation: B2 = j, spaceBetween: I2 = J.NONE, spaceInside: x2 = J.SMALL, radius: C2 = J.NONE, transition: w2 = Q.COLORS, itemStyles: D2 = Rr, isRequired: N2 = false, halfFillMode: $2 = z, visibleLabelId: k2, visibleItemLabelIds: F2, invisibleItemLabels: T2, invisibleLabel: U2 = l2 ? n2 > 0 ? `Rated ${n2} on ${o2}` : "Not rated" : "Rating Selection", resetLabel: W2 = "Reset rating", id: P2, className: G2, style: K2 }, X2) => {
  const Z2 = Array.from({ length: o2 }, (r2, e2) => e2 + 1), H2 = l2 && !Number.isInteger(n2), V2 = H2 && !v2, Y2 = H2 && v2 ? Math.round(n2) : n2, _2 = !l2 && !E2, rr2 = Y2 >= 0.25, tr2 = "string" == typeof G2 ? G2 : "", nr2 = $2 === q ? q : z, ir2 = V2 && !((r2) => Number.isInteger(O(r2)))(Y2), dr2 = !N2 && !l2, hr2 = N2 ? o2 : o2 + 1, Lr2 = V2 ? function(r2, e2) {
    const t2 = O(e2);
    return Number.isInteger(t2) ? r2.indexOf(t2) : Math.floor(t2);
  }(Z2, Y2) : Z2.indexOf(Y2), { staticColors: Or2, arrayColors: gr2, itemShapes: yr2, absoluteStrokeWidth: br2, absoluteBoxBorderWidth: Sr2 } = (0, import_react.useMemo)(() => {
    const { itemShapes: r2, itemStrokeWidth: e2, boxBorderWidth: t2, ...n3 } = D2, o3 = function(r3) {
      const e3 = { ...r3 }, t3 = {}, n4 = Object.entries(e3);
      if (n4.length > 0)
        for (const [r4, o4] of n4)
          if (Array.isArray(o4) || "string" == typeof o4) {
            if (Array.isArray(o4))
              for (const n5 of ur)
                if (n5 === r4) {
                  const n6 = o4.filter((r5) => "string" == typeof r5);
                  n6.length > 0 && (t3[r4] = n6, delete e3[r4]);
                } else
                  delete e3[r4];
          } else
            delete e3[r4];
      return { arrayColors: t3, staticColors: e3 };
    }(n3);
    return { itemShapes: r2, absoluteStrokeWidth: p(e2), absoluteBoxBorderWidth: p(t2), ...o3 };
  }, [D2]), Mr2 = Object.keys(gr2).length > 0, Ar = (0, import_react.useCallback)((r2, e2) => ({ dynamicClassNames: ir2 ? cr(Y2, o2, nr2) : sr(v2, o2, r2), dynamicCssVars: e2 && Mr2 ? or(gr2, r2, v2) : [] }), [gr2, Mr2, v2, nr2, ir2, o2, Y2]), Er = (0, import_react.useCallback)(() => $r(fr(hr2, Lr2, !N2)), [Lr2, hr2, N2]), vr = (0, import_react.useRef)(true), Br = (0, import_react.useRef)(true), Ir = (0, import_react.useRef)(null), xr = (0, import_react.useRef)([]), Cr = (0, import_react.useRef)(false), [wr, Dr] = (0, import_react.useState)({ staticCssVars: lr(Or2, Sr2), ...Ar(Lr2, rr2) }), [Nr, $r] = (0, import_react.useState)(() => _2 ? fr(hr2, Lr2, !N2) : []);
  h(() => {
    _2 && xr.current && (Cr.current = function(r2) {
      if (r2)
        return "rtl" === getComputedStyle(r2).getPropertyValue("direction");
      return false;
    }(xr.current[0]));
  }, [_2]), (0, import_react.useEffect)(() => {
    if (!vr.current)
      return Dr({ staticCssVars: lr(Or2, Sr2), ...Ar(Lr2, rr2) });
    vr.current = false;
  }, [Or2, Ar, Sr2, Lr2, rr2]), (0, import_react.useEffect)(() => {
    if (!Br.current && _2)
      return Er();
    Br.current = false;
  }, [_2, Er]);
  const { shouldRender: kr, reason: Fr } = function({ items: r2, itemShapes: e2 }) {
    const t2 = { shouldRender: true, reason: "" };
    if ("number" != typeof r2 || r2 < 1 || r2 > 10)
      return mr(t2, "items is invalid");
    if (!e2)
      return mr(t2, "itemStyles needs at least the property itemShapes set");
    if (!Array.isArray(e2) && !(0, import_react.isValidElement)(e2))
      return mr(t2, pr);
    if (Array.isArray(e2)) {
      if (e2.length !== r2)
        return mr(t2, "itemShapes length mismatch");
      if (!e2.every((r3) => (0, import_react.isValidElement)(r3)))
        return mr(t2, pr);
    }
    return t2;
  }({ items: o2, itemShapes: yr2 });
  if (!kr)
    return console.error(Fr), null;
  function Tr(r2, e2, t2 = () => {
  }) {
    xr.current.some((e3) => e3 === r2.relatedTarget) ? t2() : e2();
  }
  function Ur() {
    L2(0), Er();
  }
  function Wr(r2) {
    Tr(r2, () => {
      Ur();
    }), Dr({ ...wr, ...Ar(Lr2, rr2) });
  }
  function Pr(r2) {
    Tr(r2, () => {
      Ur(), b2();
    });
  }
  function Gr(r2, e2) {
    const t2 = !N2 && e2 === Z2.length ? 0 : e2 + 1;
    Tr(r2, () => {
      g2(), L2(t2);
    }, () => {
      L2(t2);
    });
  }
  function Kr(r2) {
    $r(fr(hr2, r2, !N2)), xr.current[r2].focus();
  }
  const Xr = ar({ className: tr2, radius: C2, readOnly: l2, isDisabled: E2, isDynamic: _2, transition: w2, orientation: B2, absoluteBoxBorderWidth: Sr2, absoluteStrokeWidth: br2, spaceBetween: I2, spaceInside: x2 });
  function Zr(r2) {
    return { ref: (e2) => xr.current[r2] = e2 };
  }
  function Hr(r2) {
    return { tabIndex: Nr[r2], onKeyDown: (e2) => function(r3, e3) {
      let t2 = 0;
      const n3 = N2 ? Z2.length - 1 : Z2.length, o3 = e3 - 1, i2 = e3 + 1, a2 = !N2 && e3 === Z2.length, s2 = 0 === e3 ? n3 : o3, c2 = n3 === e3 ? 0 : i2;
      switch (r3.code) {
        case "Shift":
        case "Tab":
          return true;
        case "ArrowDown":
        case "ArrowRight":
          return t2 = Cr.current ? s2 : c2, Kr(t2);
        case "ArrowUp":
        case "ArrowLeft":
          return t2 = Cr.current ? c2 : s2, Kr(t2);
        case "Enter":
        case "Space":
          return "all" !== R2 && "click" !== R2 || r3.preventDefault(), m2(a2 ? 0 : e3 + 1);
      }
      r3.stopPropagation();
    }(e2, r2) };
  }
  function Vr(r2) {
    return { onClick: (e2) => function(r3, e3) {
      "all" !== R2 && "keydown" !== R2 || r3.preventDefault(), r3.stopPropagation(), m2(N2 || Lr2 !== e3 ? e3 + 1 : 0);
    }(e2, r2), onMouseEnter: () => function(r3) {
      L2(r3 + 1), Dr({ ...wr, ...Ar(r3, true) });
    }(r2), onMouseLeave: Wr };
  }
  function jr(r2) {
    if (l2)
      return {};
    const e2 = {};
    if (Array.isArray(F2))
      e2["aria-labelledby"] = F2[r2];
    else {
      const t2 = Array.isArray(T2) ? T2 : Z2.map((r3, e3) => `Rate ${e3 + 1}`);
      e2["aria-label"] = t2[r2];
    }
    return E2 && (e2["aria-disabled"] = "true"), { role: "radio", "aria-checked": r2 + 1 === Y2, ...e2 };
  }
  function Yr(r2) {
    const e2 = { itemShapes: Array.isArray(yr2) ? yr2[r2] : yr2, itemStrokeWidth: br2, orientation: B2, hasHF: false, testId: {} };
    return ir2 && nr2 === z && (e2.hasHF = r2 === Lr2), e2;
  }
  return (0, import_jsx_runtime.jsx)("div", { id: P2, className: Xr, style: { ...K2, ...wr.staticCssVars }, ref: function(r2) {
    _2 && !N2 && (Ir.current = r2), X2 && (X2.current = r2);
  }, ...function() {
    if (!l2) {
      const r2 = N2 && !E2, e2 = { role: "radiogroup", "aria-required": r2 };
      return r2 && (e2["aria-invalid"] = Y2 <= 0), "string" == typeof k2 && k2.length > 0 ? e2["aria-labelledby"] = k2 : e2["aria-label"] = U2, e2;
    }
    return { role: "img", "aria-label": U2 };
  }(), ...y, children: Z2.map((t2, n3) => {
    return (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { className: `${S} ${wr.dynamicClassNames[n3]}`, style: wr.dynamicCssVars[n3], ...jr(n3), ...(i2 = n3, _2 ? { ...Zr(i2), ...Hr(i2), ...Vr(i2), onFocus: (r2) => Gr(r2, i2), onBlur: (r2) => Pr(r2) } : {}), children: (0, import_jsx_runtime.jsx)(er, { ...Yr(n3) }) }), dr2 && n3 === Z2.length - 1 && (0, import_jsx_runtime.jsx)("div", { ...(o3 = n3 + 1, { className: M, role: "radio", "aria-label": W2, "aria-checked": 0 === Y2, onClick: () => m2(0), onFocus: (r2) => {
      var _a;
      Gr(r2, o3), (_a = Ir.current) == null ? void 0 : _a.classList.add(A);
    }, onBlur: (r2) => {
      var _a;
      Pr(r2), (_a = Ir.current) == null ? void 0 : _a.classList.remove(A);
    }, ...Hr(o3), ...Zr(o3), ...E2 ? { "aria-disabled": "true" } : {} }) })] }, t2);
    var o3, i2;
  }) });
});
Mr.displayName = "Rating";
export {
  Sr as Heart,
  Mr as Rating,
  gr as RoundedStar,
  Lr as Star,
  br as StickerStar,
  yr as ThinRoundedStar,
  Or as ThinStar
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@smastrom_react-rating.js.map
