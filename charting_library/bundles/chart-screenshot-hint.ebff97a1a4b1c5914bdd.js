;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [92],
  {
    97754: (e, t) => {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var a = typeof r
              if ('string' === a || 'number' === a) e.push(r)
              else if (Array.isArray(r) && r.length) {
                var i = o.apply(null, r)
                i && e.push(i)
              } else if ('object' === a) for (var s in r) n.call(r, s) && r[s] && e.push(s)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function () {
                return o
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    45350: (e) => {
      e.exports = {
        'nav-button': 'nav-button-znwuaSC1',
        link: 'link-znwuaSC1',
        background: 'background-znwuaSC1',
        icon: 'icon-znwuaSC1',
        'flip-icon': 'flip-icon-znwuaSC1',
        'size-large': 'size-large-znwuaSC1',
        'preserve-paddings': 'preserve-paddings-znwuaSC1',
        'size-medium': 'size-medium-znwuaSC1',
        'size-small': 'size-small-znwuaSC1',
        'size-xsmall': 'size-xsmall-znwuaSC1',
        'size-xxsmall': 'size-xxsmall-znwuaSC1',
        'visually-hidden': 'visually-hidden-znwuaSC1',
      }
    },
    48535: (e) => {
      e.exports = {
        container: 'container-TCHLKPuQ',
        'container-danger': 'container-danger-TCHLKPuQ',
        icon: 'icon-TCHLKPuQ',
        header: 'header-TCHLKPuQ',
        'container-warning': 'container-warning-TCHLKPuQ',
        'container-success': 'container-success-TCHLKPuQ',
        'container-default': 'container-default-TCHLKPuQ',
        'text-wrap': 'text-wrap-TCHLKPuQ',
        'close-button': 'close-button-TCHLKPuQ',
        informerBody: 'informerBody-TCHLKPuQ',
        mainProblem: 'mainProblem-TCHLKPuQ',
        'header-inline': 'header-inline-TCHLKPuQ',
        'header-new-line': 'header-new-line-TCHLKPuQ',
      }
    },
    12658: (e) => {
      e.exports = {
        container: 'container-E3kDq0JU',
        bottomPadding: 'bottomPadding-E3kDq0JU',
        centerElement: 'centerElement-E3kDq0JU',
        notice: 'notice-E3kDq0JU',
        'notice-showed': 'notice-showed-E3kDq0JU',
      }
    },
    64388: (e, t, r) => {
      'use strict'
      r.d(t, { NavButton: () => c })
      var n = r(50959),
        o = r(97754),
        a = r(9745),
        i = r(45350)
      function s(e) {
        const { size: t = 'large', preservePaddings: r, isLink: n, flipIconOnRtl: a, className: s } = e
        return o(i['nav-button'], i[`size-${t}`], r && i['preserve-paddings'], a && i['flip-icon'], n && i.link, s)
      }
      function u(e) {
        const { children: t, icon: r } = e
        return n.createElement(
          n.Fragment,
          null,
          n.createElement('span', { className: i.background }),
          n.createElement(a.Icon, { icon: r, className: i.icon, 'aria-hidden': !0 }),
          t && n.createElement('span', { className: i['visually-hidden'] }, t)
        )
      }
      const c = (0, n.forwardRef)((e, t) => {
        const { icon: r, type: o = 'button', preservePaddings: a, flipIconOnRtl: i, size: c, 'aria-label': l, ...f } = e
        return n.createElement(
          'button',
          { ...f, className: s({ ...e, children: l }), ref: t, type: o },
          n.createElement(u, { icon: r }, l)
        )
      })
      c.displayName = 'NavButton'
      var l = r(21593),
        f = r(53017)
      ;(0, n.forwardRef)((e, t) => {
        const { icon: r, renderComponent: o, 'aria-label': a, ...i } = e,
          c = null != o ? o : l.CustomComponentDefaultLink
        return n.createElement(
          c,
          { ...i, className: s({ ...e, children: a, isLink: !0 }), reference: (0, f.isomorphicRef)(t) },
          n.createElement(u, { icon: r }, a)
        )
      }).displayName = 'NavAnchorButton'
    },
    38952: (e, t, r) => {
      'use strict'
      function n(e) {
        const { reference: t, ...r } = e
        return { ...r, ref: t }
      }
      r.d(t, { renameRef: () => n })
    },
    21593: (e, t, r) => {
      'use strict'
      r.d(t, { CustomComponentDefaultLink: () => a })
      var n = r(50959),
        o = r(38952)
      function a(e) {
        return n.createElement('a', { ...(0, o.renameRef)(e) })
      }
      n.PureComponent
    },
    9745: (e, t, r) => {
      'use strict'
      r.d(t, { Icon: () => o })
      var n = r(50959)
      const o = n.forwardRef((e, t) => {
        const { icon: r = '', ...o } = e
        return n.createElement('span', { ...o, ref: t, dangerouslySetInnerHTML: { __html: r } })
      })
    },
    90186: (e, t, r) => {
      'use strict'
      function n(e) {
        return a(e, i)
      }
      function o(e) {
        return a(e, s)
      }
      function a(e, t) {
        const r = Object.entries(e).filter(t),
          n = {}
        for (const [e, t] of r) n[e] = t
        return n
      }
      function i(e) {
        const [t, r] = e
        return 0 === t.indexOf('data-') && 'string' == typeof r
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      r.d(t, {
        filterAriaProps: () => o,
        filterDataProps: () => n,
        filterProps: () => a,
        isAriaAttribute: () => s,
        isDataAttribute: () => i,
      })
    },
    53017: (e, t, r) => {
      'use strict'
      function n(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t)
          })
        }
      }
      function o(e) {
        return n([e])
      }
      r.d(t, { isomorphicRef: () => o, mergeRefs: () => n })
    },
    81573: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { ChartScreenshotHintRenderer: () => S })
      var n = r(50959),
        o = r(962),
        a = r(12481),
        i = r(97754),
        s = r(9745),
        u = r(64388),
        c = r(17105),
        l = r(15130),
        f = r(38822),
        d = r(63346),
        p = r(34983)
      function m(e = 'large') {
        switch (e) {
          case 'large':
            return c
          case 'medium':
          default:
            return l
          case 'small':
            return f
          case 'xsmall':
            return d
          case 'xxsmall':
            return p
        }
      }
      const h = n.forwardRef((e, t) => n.createElement(u.NavButton, { ...e, ref: t, icon: m(e.size) }))
      var w = r(90186),
        v = r(30162),
        y = r(27941),
        g = r(99084),
        b = r(48535),
        _ = r.n(b)
      const C = { danger: v, warning: v, success: g, default: y }
      function x(e) {
        const {
          informerIntent: t,
          content: r,
          className: o,
          header: a,
          isIconShown: u = !0,
          isCloseButtonShown: c,
          icon: l,
          onCloseClick: f,
          closeButtonLabel: d = 'Close',
          headerPlacement: p = 'inline',
          children: m,
        } = e
        return n.createElement(
          'div',
          {
            className: i(_().container, _()[`container-${t}`], o),
            ...(0, w.filterDataProps)(e),
            ...(0, w.filterAriaProps)(e),
          },
          n.createElement(
            'div',
            { className: _().informerBody },
            r &&
              n.createElement(
                'div',
                { className: _().mainProblem },
                u && n.createElement(s.Icon, { className: _().icon, icon: null != l ? l : C[t] }),
                n.createElement(
                  'div',
                  { className: _()['text-wrap'] },
                  a && n.createElement('span', { className: i(_().header, _()[`header-${p}`]) }, a),
                  ' ',
                  r
                )
              ),
            m
          ),
          c &&
            n.createElement(h, {
              'aria-label': d,
              onClick: f,
              className: _()['close-button'],
              size: 'xsmall',
              preservePaddings: !0,
            })
        )
      }
      var E = r(12658)
      function k(e) {
        const [t, r] = (0, n.useState)(!1)
        return (
          (0, n.useLayoutEffect)(() => {
            const e = setTimeout(() => r(!0), 50),
              t = setTimeout(() => r(!1), 2500)
            return () => {
              clearTimeout(e), clearTimeout(t)
            }
          }, []),
          n.createElement(
            'div',
            { className: i(E.container, e.bottomPadding && E.bottomPadding) },
            n.createElement(
              'div',
              { className: E.centerElement },
              n.createElement(x, {
                content: e.text,
                informerIntent: 'success',
                className: i(E.notice, t && E['notice-showed']),
              })
            )
          )
        )
      }
      class S {
        constructor(e, t) {
          ;(this._showed = !1),
            (this._wrap = document.createElement('div')),
            (this._container = e),
            (this._debouncedHide = (0, a.default)(() => this.hide(), 3e3)),
            (this._bottomPadding = t.bottomPadding)
        }
        show(e) {
          this._wrap &&
            !this._showed &&
            ((this._showed = !0),
            this._container.append(this._wrap),
            o.render(n.createElement(k, { text: e, bottomPadding: this._bottomPadding }), this._wrap),
            this._debouncedHide())
        }
        hide() {
          this._wrap && ((this._showed = !1), o.unmountComponentAtNode(this._wrap), this._wrap.remove())
        }
        destroy() {
          this.hide(), delete this._wrap
        }
      }
    },
    95257: (e, t) => {
      'use strict'
      var r = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        a = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        s = Symbol.for('react.provider'),
        u = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
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
        h = Object.assign,
        w = {}
      function v(e, t, r) {
        ;(this.props = e), (this.context = t), (this.refs = w), (this.updater = r || m)
      }
      function y() {}
      function g(e, t, r) {
        ;(this.props = e), (this.context = t), (this.refs = w), (this.updater = r || m)
      }
      ;(v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (y.prototype = v.prototype)
      var b = (g.prototype = new y())
      ;(b.constructor = g), h(b, v.prototype), (b.isPureReactComponent = !0)
      var _ = Array.isArray,
        C = Object.prototype.hasOwnProperty,
        x = { current: null },
        E = { key: !0, ref: !0, __self: !0, __source: !0 }
      function k(e, t, n) {
        var o,
          a = {},
          i = null,
          s = null
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            C.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o])
        var u = arguments.length - 2
        if (1 === u) a.children = n
        else if (1 < u) {
          for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2]
          a.children = c
        }
        if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o])
        return { $$typeof: r, type: e, key: i, ref: s, props: a, _owner: x.current }
      }
      function S(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r
      }
      var P = /\/+/g
      function R(e, t) {
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
      function z(e, t, o, a, i) {
        var s = typeof e
        ;('undefined' !== s && 'boolean' !== s) || (e = null)
        var u = !1
        if (null === e) u = !0
        else
          switch (s) {
            case 'string':
            case 'number':
              u = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case r:
                case n:
                  u = !0
              }
          }
        if (u)
          return (
            (i = i((u = e))),
            (e = '' === a ? '.' + R(u, 0) : a),
            _(i)
              ? ((o = ''),
                null != e && (o = e.replace(P, '$&/') + '/'),
                z(i, t, o, '', function (e) {
                  return e
                }))
              : null != i &&
                (S(i) &&
                  (i = (function (e, t) {
                    return { $$typeof: r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
                  })(i, o + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(P, '$&/') + '/') + e)),
                t.push(i)),
            1
          )
        if (((u = 0), (a = '' === a ? '.' : a + ':'), _(e)))
          for (var c = 0; c < e.length; c++) {
            var l = a + R((s = e[c]), c)
            u += z(s, t, o, l, i)
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
          for (e = l.call(e), c = 0; !(s = e.next()).done; ) u += z((s = s.value), t, o, (l = a + R(s, c++)), i)
        else if ('object' === s)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          )
        return u
      }
      function N(e, t, r) {
        if (null == e) return e
        var n = [],
          o = 0
        return (
          z(e, n, '', '', function (e) {
            return t.call(r, e, o++)
          }),
          n
        )
      }
      function $(e) {
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
      var L = { current: null },
        T = { transition: null },
        j = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: T, ReactCurrentOwner: x }
      ;(t.Children = {
        map: N,
        forEach: function (e, t, r) {
          N(
            e,
            function () {
              t.apply(this, arguments)
            },
            r
          )
        },
        count: function (e) {
          var t = 0
          return (
            N(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!S(e)) throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = g),
        (t.StrictMode = a),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
          var o = h({}, e.props),
            a = e.key,
            i = e.ref,
            s = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (s = x.current)),
              void 0 !== t.key && (a = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps
            for (c in t) C.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
          }
          var c = arguments.length - 2
          if (1 === c) o.children = n
          else if (1 < c) {
            u = Array(c)
            for (var l = 0; l < c; l++) u[l] = arguments[l + 2]
            o.children = u
          }
          return { $$typeof: r, type: e.type, key: a, ref: i, props: o, _owner: s }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: u,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          )
        }),
        (t.createElement = k),
        (t.createFactory = function (e) {
          var t = k.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e }
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: $ }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = T.transition
          T.transition = {}
          try {
            e()
          } finally {
            T.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error('act(...) is not supported in production builds of React.')
        }),
        (t.useCallback = function (e, t) {
          return L.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return L.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return L.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return L.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return L.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return L.current.useImperativeHandle(e, t, r)
        }),
        (t.useInsertionEffect = function (e, t) {
          return L.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return L.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return L.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, r) {
          return L.current.useReducer(e, t, r)
        }),
        (t.useRef = function (e) {
          return L.current.useRef(e)
        }),
        (t.useState = function (e) {
          return L.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return L.current.useSyncExternalStore(e, t, r)
        }),
        (t.useTransition = function () {
          return L.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, r) => {
      'use strict'
      e.exports = r(95257)
    },
    99084: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>'
    },
    30162: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'
    },
    27941: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'
    },
    17105: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>'
    },
    15130: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>'
    },
    38822: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'
    },
    63346: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'
    },
    34983: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>'
    },
  },
])
