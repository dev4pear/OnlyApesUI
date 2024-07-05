;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8643],
  {
    59142: function (e, t) {
      var n, o, r
      ;(o = [t]),
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
            var o = {
              get passive() {
                n = !0
              },
            }
            window.addEventListener('testPassive', null, o), window.removeEventListener('testPassive', null, o)
          }
          var r =
              'undefined' != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            a = [],
            s = !1,
            i = -1,
            l = void 0,
            c = void 0,
            d = function (e) {
              return a.some(function (t) {
                return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
              })
            },
            u = function (e) {
              var t = e || window.event
              return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
            },
            m = function () {
              setTimeout(function () {
                void 0 !== c && ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== l && ((document.body.style.overflow = l), (l = void 0))
              })
            }
          ;(e.disableBodyScroll = function (e, o) {
            if (r) {
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
                var m = { targetElement: e, options: o || {} }
                ;(a = [].concat(t(a), [m])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length && (i = e.targetTouches[0].clientY)
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, r, a
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (a = (n = t).targetTouches[0].clientY - i),
                      !d(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < a) ||
                        ((r = o) && r.scrollHeight - r.scrollTop <= r.clientHeight && a < 0)
                          ? u(n)
                          : n.stopPropagation()))
                  }),
                  s || (document.addEventListener('touchmove', u, n ? { passive: !1 } : void 0), (s = !0))
              }
            } else {
              ;(v = o),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!v && !0 === v.reserveScrollBarGap,
                      t = window.innerWidth - document.documentElement.clientWidth
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight), (document.body.style.paddingRight = t + 'px'))
                  }
                  void 0 === l && ((l = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
                })
              var p = { targetElement: e, options: o || {} }
              a = [].concat(t(a), [p])
            }
            var v
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (a.forEach(function (e) {
                    ;(e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null)
                  }),
                  s && (document.removeEventListener('touchmove', u, n ? { passive: !1 } : void 0), (s = !1)),
                  (a = []),
                  (i = -1))
                : (m(), (a = []))
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                  )
                ;(e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (a = a.filter(function (t) {
                    return t.targetElement !== e
                  })),
                  s &&
                    0 === a.length &&
                    (document.removeEventListener('touchmove', u, n ? { passive: !1 } : void 0), (s = !1))
              } else
                1 === a.length && a[0].targetElement === e
                  ? (m(), (a = []))
                  : (a = a.filter(function (t) {
                      return t.targetElement !== e
                    }))
            })
        }),
        void 0 === (r = 'function' == typeof n ? n.apply(t, o) : n) || (e.exports = r)
    },
    66076: (e) => {
      e.exports = {
        'default-drawer-min-top-distance': '100px',
        wrap: 'wrap-_HnK0UIN',
        positionBottom: 'positionBottom-_HnK0UIN',
        backdrop: 'backdrop-_HnK0UIN',
        drawer: 'drawer-_HnK0UIN',
        positionLeft: 'positionLeft-_HnK0UIN',
      }
    },
    37558: (e, t, n) => {
      'use strict'
      n.d(t, { DrawerContext: () => s, DrawerManager: () => a })
      var o = n(50959),
        r = n(99054)
      class a extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }))
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }))
            }),
            (this.state = { stack: [] })
        }
        componentDidUpdate(e, t) {
          !t.stack.length && this.state.stack.length && ((0, r.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, r.setFixedBodyState)(!1), (this._isBodyFixed = !1))
        }
        componentWillUnmount() {
          this.state.stack.length && this._isBodyFixed && (0, r.setFixedBodyState)(!1)
        }
        render() {
          return o.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null,
              },
            },
            this.props.children
          )
        }
      }
      const s = o.createContext(null)
    },
    41590: (e, t, n) => {
      'use strict'
      n.d(t, { Drawer: () => m })
      var o = n(50959),
        r = n(50151),
        a = n(97754),
        s = n(36174),
        i = n(65718),
        l = n(37558),
        c = n(29197),
        d = n(86656),
        u = n(66076)
      function m(e) {
        const { position: t = 'Bottom', onClose: n, children: d, className: m, theme: v = u } = e,
          f = (0, r.ensureNotNull)((0, o.useContext)(l.DrawerContext)),
          [h] = (0, o.useState)(() => (0, s.randomHash)()),
          g = (0, o.useRef)(null),
          w = (0, o.useContext)(c.CloseDelegateContext)
        return (
          (0, o.useLayoutEffect)(
            () => (
              (0, r.ensureNotNull)(g.current).focus({ preventScroll: !0 }),
              w.subscribe(f, n),
              f.addDrawer(h),
              () => {
                f.removeDrawer(h), w.unsubscribe(f, n)
              }
            ),
            []
          ),
          o.createElement(
            i.Portal,
            null,
            o.createElement(
              'div',
              { className: a(u.wrap, u[`position${t}`]) },
              h === f.currentDrawer && o.createElement('div', { className: u.backdrop, onClick: n }),
              o.createElement(
                p,
                { className: a(v.drawer, u[`position${t}`], m), ref: g, 'data-name': e['data-name'] },
                d
              )
            )
          )
        )
      }
      const p = (0, o.forwardRef)((e, t) => {
        const { className: n, ...r } = e
        return o.createElement(d.TouchScrollContainer, { className: a(u.drawer, n), tabIndex: -1, ref: t, ...r })
      })
    },
    20520: (e, t, n) => {
      'use strict'
      n.d(t, { PopupMenu: () => m })
      var o = n(50959),
        r = n(962),
        a = n(62942),
        s = n(65718),
        i = n(27317),
        l = n(29197)
      const c = o.createContext(void 0)
      var d = n(36383)
      const u = o.createContext({ setMenuMaxWidth: !1 })
      function m(e) {
        const {
            controller: t,
            children: n,
            isOpened: m,
            closeOnClickOutside: p = !0,
            doNotCloseOn: v,
            onClickOutside: f,
            onClose: h,
            onKeyboardClose: g,
            'data-name': w = 'popup-menu-container',
            ...E
          } = e,
          y = (0, o.useContext)(l.CloseDelegateContext),
          x = o.useContext(u),
          C = (0, o.useContext)(c),
          b = (0, d.useOutsideEvent)({
            handler: function (e) {
              f && f(e)
              if (!p) return
              const t = (0, a.default)(v) ? v() : null == v ? [] : [v]
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = r.findDOMNode(n)
                  if (t instanceof Node && t.contains(e.target)) return
                }
              h()
            },
            mouseDown: !0,
            touchStart: !0,
          })
        return m
          ? o.createElement(
              s.Portal,
              { top: '0', left: '0', right: '0', bottom: '0', pointerEvents: 'none' },
              o.createElement(
                'span',
                { ref: b, style: { pointerEvents: 'auto' } },
                o.createElement(
                  i.Menu,
                  {
                    ...E,
                    onClose: h,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: n } = e
                      n && n(t)
                    },
                    customCloseDelegate: y,
                    customRemeasureDelegate: C,
                    ref: t,
                    'data-name': w,
                    limitMaxWidth: x.setMenuMaxWidth,
                  },
                  n
                )
              )
            )
          : null
      }
    },
    86656: (e, t, n) => {
      'use strict'
      n.d(t, { TouchScrollContainer: () => i })
      var o = n(50959),
        r = n(59142),
        a = n(50151),
        s = n(49483)
      const i = (0, o.forwardRef)((e, t) => {
        const { children: n, ...a } = e,
          i = (0, o.useRef)(null)
        return (
          (0, o.useImperativeHandle)(t, () => i.current),
          (0, o.useLayoutEffect)(() => {
            if (s.CheckMobile.iOS())
              return (
                null !== i.current && (0, r.disableBodyScroll)(i.current, { allowTouchMove: l(i) }),
                () => {
                  null !== i.current && (0, r.enableBodyScroll)(i.current)
                }
              )
          }, []),
          o.createElement('div', { ref: i, ...a }, n)
        )
      })
      function l(e) {
        return (t) => {
          const n = (0, a.ensureNotNull)(e.current),
            o = document.activeElement
          return !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
        }
      }
    },
    64165: (e) => {
      e.exports = {
        'css-value-small-size': '18px',
        'css-value-medium-size': '22px',
        'css-value-large-size': '28px',
        'css-value-border-radius-small-size': '9px',
        'css-value-border-radius-medium-size': '11px',
        'css-value-border-radius-large-size': '8px',
        'css-value-vertical-padding-size': '12px',
        'css-value-horizontal-padding-size': '14px',
        popupWidget: 'popupWidget-Wu2pIo3E',
        large: 'large-Wu2pIo3E',
        desc: 'desc-Wu2pIo3E',
        icon: 'icon-Wu2pIo3E',
        small: 'small-Wu2pIo3E',
        medium: 'medium-Wu2pIo3E',
        title: 'title-Wu2pIo3E',
        text: 'text-Wu2pIo3E',
        item: 'item-Wu2pIo3E',
        boldItem: 'boldItem-Wu2pIo3E',
        action: 'action-Wu2pIo3E',
        additionalWidget: 'additionalWidget-Wu2pIo3E',
      }
    },
    52685: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { render: () => x })
      var o = n(50959),
        r = n(962),
        a = n(20520),
        s = n(90692),
        i = n(41590),
        l = n(37558),
        c = n(36174),
        d = n(97754),
        u = n(50151),
        m = n(9745),
        p = n(77975),
        v = n(1722),
        f = n(64165)
      const h = new WeakMap(),
        g = new WeakMap()
      function w(e) {
        const t = (0, p.useWatchedValueReadonly)({ watchedValue: e.info })
        if (null === t) return null
        const n = t.map((t) => {
          const { title: n, titleColor: r, icon: a, iconClassName: s, html: i, action: l, size: p } = t
          h.has(t) || h.set(t, (0, c.randomHash)())
          let w = []
          return (
            void 0 !== e.additionalWidgets &&
              (w = e.additionalWidgets.map(
                (e) => (
                  g.has(e) || g.set(e, (0, c.randomHash)()),
                  e.renderer((0, u.ensureDefined)(g.get(e)), f.additionalWidget)
                )
              )),
            o.createElement(
              'div',
              { key: h.get(t), className: d(f.popupWidget, f[p]) },
              o.createElement(m.Icon, { className: d(f.icon, s, f[p]), icon: a || void 0 }),
              o.createElement(
                'div',
                { className: f.desc },
                o.createElement('span', { style: { color: r || void 0 }, className: d(f.title, f[p]) }, n),
                i &&
                  o.createElement(
                    'p',
                    { className: d(f.text, f[p]) },
                    i.map((e, t) => {
                      let n, r
                      return (
                        (0, v.isObject)(e) ? ((n = e.text), (r = e.bold)) : (n = e),
                        o.createElement('span', {
                          key: `html_item_${t}`,
                          className: d(f.item, r && f.boldItem),
                          dangerouslySetInnerHTML: { __html: n },
                        })
                      )
                    })
                  ),
                l &&
                  o.createElement(
                    'span',
                    {
                      className: d(l.tooltip && 'apply-common-tooltip', f.action, f[p]),
                      onClick: () => {
                        e.onClose(), null == l || l.onClick()
                      },
                      title: l.tooltip,
                    },
                    l.text
                  ),
                w
              )
            )
          )
        })
        return o.createElement(o.Fragment, null, n)
      }
      const E = new WeakMap()
      function y(e) {
        const { statusWidgetInfos: t, matchMediaRule: n = 'screen and (max-width: 430px)' } = e,
          r = t
            .filter((e) => e.visible.value())
            .map(
              (t) => (
                E.has(t) || E.set(t, (0, c.randomHash)()),
                o.createElement(w, {
                  key: E.get(t),
                  info: t.model.fullInfo(),
                  onClose: e.onClose,
                  additionalWidgets: t.additionalWidgets,
                })
              )
            )
        return o.createElement(
          l.DrawerManager,
          null,
          o.createElement(s.MatchMedia, { rule: n }, (t) =>
            t
              ? o.createElement(i.Drawer, { onClose: e.onClose, position: 'Bottom' }, r)
              : o.createElement(
                  a.PopupMenu,
                  { isOpened: !0, onClose: e.onClose, position: e.position, doNotCloseOn: e.rendererButton },
                  r
                )
          )
        )
      }
      function x(e) {
        const { opened: t, container: n, ...a } = e
        t ? r.render(o.createElement(y, { ...a }), n) : r.unmountComponentAtNode(n)
      }
    },
  },
])
