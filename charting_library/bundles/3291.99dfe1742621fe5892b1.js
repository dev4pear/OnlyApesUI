;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3291],
  {
    59142: function (e, t) {
      var n, r, o
      ;(r = [t]),
        (n = function (e) {
          'use strict'
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
              return n
            }
            return Array.from(e)
          }
          Object.defineProperty(e, '__esModule', { value: !0 })
          var n = !1
          if ('undefined' != typeof window) {
            var r = {
              get passive() {
                n = !0
              },
            }
            window.addEventListener('testPassive', null, r), window.removeEventListener('testPassive', null, r)
          }
          var o =
              'undefined' != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            a = [],
            i = !1,
            u = -1,
            c = void 0,
            s = void 0,
            l = function (e) {
              return a.some(function (t) {
                return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
              })
            },
            f = function (e) {
              var t = e || window.event
              return !!l(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
            },
            d = function () {
              setTimeout(function () {
                void 0 !== s && ((document.body.style.paddingRight = s), (s = void 0)),
                  void 0 !== c && ((document.body.style.overflow = c), (c = void 0))
              })
            }
          ;(e.disableBodyScroll = function (e, r) {
            if (o) {
              if (!e)
                return void console.error(
                  'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                )
              if (
                e &&
                !a.some(function (t) {
                  return t.targetElement === e
                })
              ) {
                var d = { targetElement: e, options: r || {} }
                ;(a = [].concat(t(a), [d])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length && (u = e.targetTouches[0].clientY)
                  }),
                  (e.ontouchmove = function (t) {
                    var n, r, o, a
                    1 === t.targetTouches.length &&
                      ((r = e),
                      (a = (n = t).targetTouches[0].clientY - u),
                      !l(n.target) &&
                        ((r && 0 === r.scrollTop && 0 < a) ||
                        ((o = r) && o.scrollHeight - o.scrollTop <= o.clientHeight && a < 0)
                          ? f(n)
                          : n.stopPropagation()))
                  }),
                  i || (document.addEventListener('touchmove', f, n ? { passive: !1 } : void 0), (i = !0))
              }
            } else {
              ;(m = r),
                setTimeout(function () {
                  if (void 0 === s) {
                    var e = !!m && !0 === m.reserveScrollBarGap,
                      t = window.innerWidth - document.documentElement.clientWidth
                    e &&
                      0 < t &&
                      ((s = document.body.style.paddingRight), (document.body.style.paddingRight = t + 'px'))
                  }
                  void 0 === c && ((c = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
                })
              var p = { targetElement: e, options: r || {} }
              a = [].concat(t(a), [p])
            }
            var m
          }),
            (e.clearAllBodyScrollLocks = function () {
              o
                ? (a.forEach(function (e) {
                    ;(e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null)
                  }),
                  i && (document.removeEventListener('touchmove', f, n ? { passive: !1 } : void 0), (i = !1)),
                  (a = []),
                  (u = -1))
                : (d(), (a = []))
            }),
            (e.enableBodyScroll = function (e) {
              if (o) {
                if (!e)
                  return void console.error(
                    'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                  )
                ;(e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (a = a.filter(function (t) {
                    return t.targetElement !== e
                  })),
                  i &&
                    0 === a.length &&
                    (document.removeEventListener('touchmove', f, n ? { passive: !1 } : void 0), (i = !1))
              } else
                1 === a.length && a[0].targetElement === e
                  ? (d(), (a = []))
                  : (a = a.filter(function (t) {
                      return t.targetElement !== e
                    }))
            })
        }),
        void 0 === (o = 'function' == typeof n ? n.apply(t, r) : n) || (e.exports = o)
    },
    97754: (e, t) => {
      var n
      !(function () {
        'use strict'
        var r = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t]
            if (n) {
              var a = typeof n
              if ('string' === a || 'number' === a) e.push(n)
              else if (Array.isArray(n) && n.length) {
                var i = o.apply(null, n)
                i && e.push(i)
              } else if ('object' === a) for (var u in n) r.call(n, u) && n[u] && e.push(u)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o
              }.apply(t, [])) || (e.exports = n)
      })()
    },
    25650: (e) => {
      e.exports = {
        loader: 'loader-UL6iwcBa',
        static: 'static-UL6iwcBa',
        item: 'item-UL6iwcBa',
        'tv-button-loader': 'tv-button-loader-UL6iwcBa',
        medium: 'medium-UL6iwcBa',
        small: 'small-UL6iwcBa',
        black: 'black-UL6iwcBa',
        white: 'white-UL6iwcBa',
        gray: 'gray-UL6iwcBa',
        primary: 'primary-UL6iwcBa',
        'loader-initial': 'loader-initial-UL6iwcBa',
        'loader-appear': 'loader-appear-UL6iwcBa',
      }
    },
    92910: (e) => {
      e.exports = {
        separator: 'separator-QjUlCDId',
        small: 'small-QjUlCDId',
        normal: 'normal-QjUlCDId',
        large: 'large-QjUlCDId',
      }
    },
    39416: (e, t, n) => {
      'use strict'
      n.d(t, { useFunctionalRefObject: () => a })
      var r = n(50959),
        o = n(43010)
      function a(e) {
        const t = (0, r.useMemo)(
            () =>
              (function (e) {
                const t = (n) => {
                  e(n), (t.current = n)
                }
                return (t.current = null), t
              })((e) => {
                u.current(e)
              }),
            []
          ),
          n = (0, r.useRef)(null),
          a = (t) => {
            if (null === t) return i(n.current, t), void (n.current = null)
            n.current !== e && ((n.current = e), i(n.current, t))
          },
          u = (0, r.useRef)(a)
        return (
          (u.current = a),
          (0, o.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current) return u.current(t.current), () => u.current(null)
          }, [e]),
          t
        )
      }
      function i(e, t) {
        null !== e && ('function' == typeof e ? e(t) : (e.current = t))
      }
    },
    43010: (e, t, n) => {
      'use strict'
      n.d(t, { useIsomorphicLayoutEffect: () => o })
      var r = n(50959)
      function o(e, t) {
        ;('undefined' == typeof window ? r.useEffect : r.useLayoutEffect)(e, t)
      }
    },
    26996: (e, t, n) => {
      'use strict'
      n.d(t, { Loader: () => s })
      var r,
        o = n(50959),
        a = n(97754),
        i = n(74991),
        u = n(25650),
        c = n.n(u)
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(r || (r = {}))
      class s extends o.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: r.Initial })
        }
        render() {
          const { className: e, color: t = 'black', size: n = 'medium', staticPosition: r } = this.props,
            i = a(c().item, c()[t], c()[n])
          return o.createElement(
            'span',
            { className: a(c().loader, r && c().static, this._getStateClass(), e) },
            o.createElement('span', { className: i }),
            o.createElement('span', { className: i }),
            o.createElement('span', { className: i })
          )
        }
        componentDidMount() {
          this.setState({ state: r.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: r.Active })
            }, 2 * i.dur))
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case r.Initial:
              return c()['loader-initial']
            case r.Appear:
              return c()['loader-appear']
            default:
              return ''
          }
        }
      }
    },
    47201: (e, t, n) => {
      'use strict'
      function r(...e) {
        return (t) => {
          for (const n of e) void 0 !== n && n(t)
        }
      }
      n.d(t, { createSafeMulticastEventHandler: () => r })
    },
    50238: (e, t, n) => {
      'use strict'
      n.d(t, { useRovingTabindexElement: () => i })
      var r = n(50959),
        o = n(39416),
        a = n(16838)
      function i(e, t = []) {
        const [n, i] = (0, r.useState)(!1),
          u = (0, o.useFunctionalRefObject)(e)
        return (
          (0, r.useEffect)(() => {
            if (!a.PLATFORM_ACCESSIBILITY_ENABLED) return
            const e = u.current
            if (null === e) return
            const t = (e) => {
              switch (e.type) {
                case 'roving-tabindex:main-element':
                  i(!0)
                  break
                case 'roving-tabindex:secondary-element':
                  i(!1)
              }
            }
            return (
              e.addEventListener('roving-tabindex:main-element', t),
              e.addEventListener('roving-tabindex:secondary-element', t),
              () => {
                e.removeEventListener('roving-tabindex:main-element', t),
                  e.removeEventListener('roving-tabindex:secondary-element', t)
              }
            )
          }, t),
          [u, a.PLATFORM_ACCESSIBILITY_ENABLED ? (n ? 0 : -1) : void 0]
        )
      }
    },
    51613: (e, t, n) => {
      'use strict'
      n.d(t, { PopupMenuSeparator: () => u })
      var r = n(50959),
        o = n(97754),
        a = n.n(o),
        i = n(92910)
      function u(e) {
        const { size: t = 'normal', className: n, ariaHidden: o = !1 } = e
        return r.createElement('div', {
          className: a()(
            i.separator,
            'small' === t && i.small,
            'normal' === t && i.normal,
            'large' === t && i.large,
            n
          ),
          role: 'separator',
          'aria-hidden': o,
        })
      }
    },
    40173: (e, t, n) => {
      'use strict'
      function r(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const r = Object.assign({}, t)
            for (const o of Object.keys(t)) {
              const a = n[o] || o
              a in e && (r[o] = [e[a], t[o]].join(' '))
            }
            return r
          })(e, t, n)
        )
      }
      n.d(t, { mergeThemes: () => r })
    },
    6132: (e, t, n) => {
      'use strict'
      var r = n(22134)
      function o() {}
      function a() {}
      ;(a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((u.name = 'Invariant Violation'), u)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          }
          return (n.PropTypes = n), n
        })
    },
    19036: (e, t, n) => {
      e.exports = n(6132)()
    },
    22134: (e) => {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    95257: (e, t) => {
      'use strict'
      var n = Symbol.for('react.element'),
        r = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        a = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        u = Symbol.for('react.provider'),
        c = Symbol.for('react.context'),
        s = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        f = Symbol.for('react.memo'),
        d = Symbol.for('react.lazy'),
        p = Symbol.iterator
      var m = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = Object.assign,
        y = {}
      function h(e, t, n) {
        ;(this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m)
      }
      function E() {}
      function b(e, t, n) {
        ;(this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m)
      }
      ;(h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (h.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (E.prototype = h.prototype)
      var g = (b.prototype = new E())
      ;(g.constructor = b), v(g, h.prototype), (g.isPureReactComponent = !0)
      var _ = Array.isArray,
        T = Object.prototype.hasOwnProperty,
        S = { current: null },
        w = { key: !0, ref: !0, __self: !0, __source: !0 }
      function L(e, t, r) {
        var o,
          a = {},
          i = null,
          u = null
        if (null != t)
          for (o in (void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            T.call(t, o) && !w.hasOwnProperty(o) && (a[o] = t[o])
        var c = arguments.length - 2
        if (1 === c) a.children = r
        else if (1 < c) {
          for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2]
          a.children = s
        }
        if (e && e.defaultProps) for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o])
        return { $$typeof: n, type: e, key: i, ref: u, props: a, _owner: S.current }
      }
      function C(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n
      }
      var I = /\/+/g
      function A(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' }
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e]
                })
              )
            })('' + e.key)
          : t.toString(36)
      }
      function R(e, t, o, a, i) {
        var u = typeof e
        ;('undefined' !== u && 'boolean' !== u) || (e = null)
        var c = !1
        if (null === e) c = !0
        else
          switch (u) {
            case 'string':
            case 'number':
              c = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case n:
                case r:
                  c = !0
              }
          }
        if (c)
          return (
            (i = i((c = e))),
            (e = '' === a ? '.' + A(c, 0) : a),
            _(i)
              ? ((o = ''),
                null != e && (o = e.replace(I, '$&/') + '/'),
                R(i, t, o, '', function (e) {
                  return e
                }))
              : null != i &&
                (C(i) &&
                  (i = (function (e, t) {
                    return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
                  })(i, o + (!i.key || (c && c.key === i.key) ? '' : ('' + i.key).replace(I, '$&/') + '/') + e)),
                t.push(i)),
            1
          )
        if (((c = 0), (a = '' === a ? '.' : a + ':'), _(e)))
          for (var s = 0; s < e.length; s++) {
            var l = a + A((u = e[s]), s)
            c += R(u, t, o, l, i)
          }
        else if (
          ((l = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
              ? e
              : null
          })(e)),
          'function' == typeof l)
        )
          for (e = l.call(e), s = 0; !(u = e.next()).done; ) c += R((u = u.value), t, o, (l = a + A(u, s++)), i)
        else if ('object' === u)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          )
        return c
      }
      function B(e, t, n) {
        if (null == e) return e
        var r = [],
          o = 0
        return (
          R(e, r, '', '', function (e) {
            return t.call(n, e, o++)
          }),
          r
        )
      }
      function O(e) {
        if (-1 === e._status) {
          var t = e._result
          ;(t = t()).then(
            function (t) {
              ;(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t))
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t))
        }
        if (1 === e._status) return e._result.default
        throw e._result
      }
      var x = { current: null },
        k = { transition: null },
        P = { ReactCurrentDispatcher: x, ReactCurrentBatchConfig: k, ReactCurrentOwner: S }
      ;(t.Children = {
        map: B,
        forEach: function (e, t, n) {
          B(
            e,
            function () {
              t.apply(this, arguments)
            },
            n
          )
        },
        count: function (e) {
          var t = 0
          return (
            B(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            B(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
        (t.Component = h),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = b),
        (t.StrictMode = a),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
          var o = v({}, e.props),
            a = e.key,
            i = e.ref,
            u = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (u = S.current)),
              void 0 !== t.key && (a = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps
            for (s in t) T.call(t, s) && !w.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
          }
          var s = arguments.length - 2
          if (1 === s) o.children = r
          else if (1 < s) {
            c = Array(s)
            for (var l = 0; l < s; l++) c[l] = arguments[l + 2]
            o.children = c
          }
          return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: u }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: c,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: u, _context: e }),
            (e.Consumer = e)
          )
        }),
        (t.createElement = L),
        (t.createFactory = function (e) {
          var t = L.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e }
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: O }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = k.transition
          k.transition = {}
          try {
            e()
          } finally {
            k.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error('act(...) is not supported in production builds of React.')
        }),
        (t.useCallback = function (e, t) {
          return x.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return x.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return x.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return x.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return x.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return x.current.useImperativeHandle(e, t, n)
        }),
        (t.useInsertionEffect = function (e, t) {
          return x.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return x.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return x.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, n) {
          return x.current.useReducer(e, t, n)
        }),
        (t.useRef = function (e) {
          return x.current.useRef(e)
        }),
        (t.useState = function (e) {
          return x.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return x.current.useSyncExternalStore(e, t, n)
        }),
        (t.useTransition = function () {
          return x.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, n) => {
      'use strict'
      e.exports = n(95257)
    },
    44242: (e) => {
      e.exports = { title: 'title-u3QJgF_p' }
    },
    71468: (e, t, n) => {
      'use strict'
      function r(e) {
        e.dispatchEvent(new CustomEvent('roving-tabindex:main-element'))
      }
      function o(e) {
        e.dispatchEvent(new CustomEvent('roving-tabindex:secondary-element'))
      }
      n.d(t, { becomeMainElement: () => r, becomeSecondaryElement: () => o })
    },
    36898: (e, t, n) => {
      'use strict'
      n.d(t, { useMouseClickAutoBlur: () => i })
      var r = n(50959),
        o = n(76460),
        a = n(16838)
      function i(e) {
        ;(0, r.useEffect)(() => {
          if (!a.PLATFORM_ACCESSIBILITY_ENABLED) return
          const t = (t) => {
            const n = e.current
            null !== n &&
              document.activeElement instanceof HTMLElement &&
              ((0, o.isKeyboardClick)(t) ||
                (n.contains(document.activeElement) &&
                  'INPUT' !== document.activeElement.tagName &&
                  document.activeElement.blur()))
          }
          return window.addEventListener('click', t, !0), () => window.removeEventListener('click', t, !0)
        }, [])
      }
    },
    82962: (e, t, n) => {
      'use strict'
      n.d(t, { ToolWidgetMenuSummary: () => i })
      var r = n(50959),
        o = n(97754),
        a = n(44242)
      function i(e) {
        return r.createElement('div', { className: o(e.className, a.title) }, e.children)
      }
    },
    88066: (e, t, n) => {
      'use strict'
      n.d(t, { DEFAULT_TOOLBAR_BUTTON_THEME: () => u, ToolbarButton: () => c })
      var r = n(50959),
        o = n(31409),
        a = n(50238),
        i = n(16838)
      const u = o.DEFAULT_TOOL_WIDGET_BUTTON_THEME,
        c = (0, r.forwardRef)(function (e, t) {
          const { tooltip: n, ...u } = e,
            [c, s] = (0, a.useRovingTabindexElement)(t)
          return r.createElement(o.ToolWidgetButton, {
            'aria-label': i.PLATFORM_ACCESSIBILITY_ENABLED ? n : void 0,
            ...u,
            tag: i.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
            ref: c,
            tabIndex: s,
            'data-tooltip': n,
          })
        })
    },
    48889: (e, t, n) => {
      'use strict'
      n.d(t, { ToolbarIconButton: () => u })
      var r = n(50959),
        o = n(50238),
        a = n(16838),
        i = n(50813)
      const u = (0, r.forwardRef)(function (e, t) {
        const { tooltip: n, ...u } = e,
          [c, s] = (0, o.useRovingTabindexElement)(t)
        return r.createElement(i.ToolWidgetIconButton, {
          'aria-label': a.PLATFORM_ACCESSIBILITY_ENABLED ? n : void 0,
          ...u,
          tag: a.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
          ref: c,
          tabIndex: s,
          'data-tooltip': n,
        })
      })
    },
    50298: (e, t, n) => {
      'use strict'
      n.d(t, { ToolbarMenuButton: () => p, queryMenuElements: () => y })
      var r = n(50959),
        o = n(39416),
        a = n(50151),
        i = n(3343),
        u = n(8087),
        c = n(50238),
        s = n(16838),
        l = n(71468),
        f = n(36898)
      const d = [37, 39, 38, 40],
        p = (0, r.forwardRef)(function (e, t) {
          const { tooltip: n, menuReference: p = null, ...E } = e,
            [b, g] = (0, c.useRovingTabindexElement)(null),
            _ = (0, o.useFunctionalRefObject)(p)
          return (
            (0, f.useMouseClickAutoBlur)(_),
            r.createElement(u.ToolWidgetMenu, {
              'aria-label': s.PLATFORM_ACCESSIBILITY_ENABLED ? n : void 0,
              ...E,
              ref: t,
              tag: s.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
              reference: b,
              tabIndex: g,
              'data-tooltip': n,
              menuReference: _,
              onMenuKeyDown: function (e) {
                if (!s.PLATFORM_ACCESSIBILITY_ENABLED) return
                if (e.defaultPrevented) return
                const t = (0, i.hashFromEvent)(e)
                if (!d.includes(t)) return
                const n = document.activeElement
                if (!(document.activeElement instanceof HTMLElement)) return
                const r = y(e.currentTarget).sort(s.navigationOrderComparator)
                if (0 === r.length) return
                const o = document.activeElement.closest('[data-role="menuitem"]')
                if (!(o instanceof HTMLElement)) return
                const a = r.indexOf(o)
                if (-1 === a) return
                const u = h(o),
                  c = u.indexOf(document.activeElement),
                  f = -1 !== c,
                  p = (e) => {
                    n && (0, l.becomeSecondaryElement)(n), (0, l.becomeMainElement)(e), e.focus()
                  }
                switch (t) {
                  case 37:
                    if (!u.length) return
                    e.preventDefault(), p(0 === c ? r[a] : f ? m(u, c, -1) : u[u.length - 1])
                    break
                  case 39:
                    if (!u.length) return
                    e.preventDefault(), c === u.length - 1 ? p(r[a]) : p(f ? m(u, c, 1) : u[0])
                    break
                  case 38: {
                    e.preventDefault()
                    const t = m(r, a, -1)
                    if (f) {
                      const e = v(t, c)
                      p(e || t)
                      break
                    }
                    p(t)
                    break
                  }
                  case 40: {
                    e.preventDefault()
                    const t = m(r, a, 1)
                    if (f) {
                      const e = v(t, c)
                      p(e || t)
                      break
                    }
                    p(t)
                  }
                }
              },
              onMenuFocus: function (e) {
                if (!e.target || !s.PLATFORM_ACCESSIBILITY_ENABLED) return
                const [t] = y(e.target)
                t &&
                  ((0, l.becomeSecondaryElement)((0, a.ensureNotNull)(b.current)),
                  (0, l.becomeMainElement)(t),
                  t.focus())
              },
            })
          )
        })
      function m(e, t, n) {
        return e[(t + e.length + n) % e.length]
      }
      function v(e, t) {
        const n = h(e)
        return n.length ? n[(t + n.length) % n.length] : null
      }
      function y(e) {
        return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled], [aria-disabled])')).filter(
          (0, s.createScopedVisibleElementFilter)(e)
        )
      }
      function h(e) {
        return Array.from(e.querySelectorAll('[tabindex]:not([disabled], [aria-disabled])')).filter(
          (0, s.createScopedVisibleElementFilter)(e)
        )
      }
    },
    5962: (e, t, n) => {
      'use strict'
      n.d(t, { RegistryProvider: () => c, registryContextType: () => s, validateRegistry: () => u })
      var r = n(50959),
        o = n(19036),
        a = n.n(o)
      const i = r.createContext({})
      function u(e, t) {
        a().checkPropTypes(t, e, 'context', 'RegistryContext')
      }
      function c(e) {
        const { validation: t, value: n } = e
        return u(n, t), r.createElement(i.Provider, { value: n }, e.children)
      }
      function s() {
        return i
      }
    },
  },
])
