;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7260],
  {
    22436: (e) => {
      e.exports = {
        item: 'item-GJX1EXhk',
        interactive: 'interactive-GJX1EXhk',
        hovered: 'hovered-GJX1EXhk',
        disabled: 'disabled-GJX1EXhk',
        active: 'active-GJX1EXhk',
        shortcut: 'shortcut-GJX1EXhk',
        normal: 'normal-GJX1EXhk',
        big: 'big-GJX1EXhk',
        iconCell: 'iconCell-GJX1EXhk',
        icon: 'icon-GJX1EXhk',
        checkmark: 'checkmark-GJX1EXhk',
        content: 'content-GJX1EXhk',
        label: 'label-GJX1EXhk',
        checked: 'checked-GJX1EXhk',
        toolbox: 'toolbox-GJX1EXhk',
        showToolboxOnHover: 'showToolboxOnHover-GJX1EXhk',
        arrowIcon: 'arrowIcon-GJX1EXhk',
        subMenu: 'subMenu-GJX1EXhk',
        invisibleHotkey: 'invisibleHotkey-GJX1EXhk',
      }
    },
    29122: (e) => {
      e.exports = {
        item: 'item-WJDah4zD',
        emptyIcons: 'emptyIcons-WJDah4zD',
        loading: 'loading-WJDah4zD',
        disabled: 'disabled-WJDah4zD',
        interactive: 'interactive-WJDah4zD',
        hovered: 'hovered-WJDah4zD',
        normal: 'normal-WJDah4zD',
        big: 'big-WJDah4zD',
        icon: 'icon-WJDah4zD',
        label: 'label-WJDah4zD',
        title: 'title-WJDah4zD',
        nested: 'nested-WJDah4zD',
        shortcut: 'shortcut-WJDah4zD',
        remove: 'remove-WJDah4zD',
      }
    },
    45719: (e) => {
      e.exports = { separator: 'separator-Pf4rIzEt' }
    },
    4618: (e) => {
      e.exports = {
        tabs: 'tabs-NGf0gcnH',
        tab: 'tab-NGf0gcnH',
        noBorder: 'noBorder-NGf0gcnH',
        disabled: 'disabled-NGf0gcnH',
        active: 'active-NGf0gcnH',
        defaultCursor: 'defaultCursor-NGf0gcnH',
        slider: 'slider-NGf0gcnH',
        content: 'content-NGf0gcnH',
      }
    },
    42142: (e, t, s) => {
      'use strict'
      s.d(t, { FragmentMap: () => i })
      var a = s(50959)
      function i(e) {
        if (e.map) {
          return a.Children.toArray(e.children).map(e.map)
        }
        return e.children
      }
    },
    99025: (e, t, s) => {
      'use strict'
      s.d(t, { Hint: () => r })
      var a = s(50959),
        i = s(97754),
        n = s.n(i),
        o = s(22436)
      function r(e) {
        const { text: t = '', className: s } = e
        return a.createElement('span', { className: n()(o.shortcut, s) }, t)
      }
    },
    23829: (e, t, s) => {
      'use strict'
      s.d(t, { ContextMenuItem: () => p })
      var a = s(50959),
        i = s(97754),
        n = s.n(i),
        o = s(9745),
        r = s(26996),
        l = s(54627),
        c = s(99025),
        d = s(39750),
        h = s(79978),
        u = s(69311),
        m = s(29122)
      function p(e) {
        const {
            className: t,
            isTitle: s,
            isLoading: i,
            isHovered: p,
            active: g,
            checkable: b,
            disabled: _,
            checked: v,
            icon: f,
            iconChecked: y,
            hint: S,
            subItems: C,
            label: k,
            onClick: x,
            children: E,
            toolbox: M,
            jsxLabel: z,
            size: T = 'normal',
          } = e,
          A = (0, a.useContext)(l.EmptyIconsContext),
          w = !!C.length
        return i
          ? a.createElement('li', { className: n()(t, m.item, m.loading, m[T]) }, a.createElement(r.Loader, null))
          : a.createElement(
              'li',
              {
                className: n()(
                  t,
                  m.item,
                  m.interactive,
                  s && m.title,
                  _ && m.disabled,
                  p && m.hovered,
                  g && m.active,
                  A && m.emptyIcons,
                  m[T]
                ),
                onClick: x,
              },
              a.createElement(o.Icon, {
                className: n()(m.icon),
                icon: (function () {
                  if (b && v) return y || f || d
                  return f
                })(),
              }),
              a.createElement('span', { className: n()(m.label) }, null != z ? z : k),
              !!M &&
                a.createElement(o.Icon, {
                  onClick: function () {
                    M && M.action()
                  },
                  className: m.remove,
                  icon: u,
                }),
              !w && S && a.createElement(c.Hint, { className: m.shortcut, text: S }),
              w && a.createElement(o.Icon, { className: m.nested, icon: h }),
              E
            )
      }
    },
    54627: (e, t, s) => {
      'use strict'
      s.d(t, { EmptyIconsContext: () => a })
      const a = s(50959).createContext(!1)
    },
    1109: (e, t, s) => {
      'use strict'
      s.d(t, { Separator: () => o })
      var a = s(50959),
        i = s(97754),
        n = s(45719)
      function o(e) {
        return a.createElement('div', { className: i(n.separator, e.className) })
      }
    },
    64264: (e) => {
      e.exports = {
        toolbar: 'toolbar-BXXUwft2',
        dateRangeWrapper: 'dateRangeWrapper-BXXUwft2',
        seriesControlWrapper: 'seriesControlWrapper-BXXUwft2',
        dateRangeExpanded: 'dateRangeExpanded-BXXUwft2',
        dateRangeCollapsed: 'dateRangeCollapsed-BXXUwft2',
        item: 'item-BXXUwft2',
        first: 'first-BXXUwft2',
        last: 'last-BXXUwft2',
        inline: 'inline-BXXUwft2',
        timezone: 'timezone-BXXUwft2',
        session: 'session-BXXUwft2',
        icon: 'icon-BXXUwft2',
        hidden: 'hidden-BXXUwft2',
        collapsed: 'collapsed-BXXUwft2',
      }
    },
    7458: (e) => {
      e.exports = { button: 'button-Hfju7pW_', separator: 'separator-Hfju7pW_' }
    },
    50242: (e) => {
      e.exports = { button: 'button-uToIfRbZ' }
    },
    56812: (e) => {
      e.exports = { separator: 'separator-yDfG9Ccu' }
    },
    97086: (e) => {
      e.exports = { headerMenuText: 'headerMenuText-AcJrLng7' }
    },
    85616: (e) => {
      e.exports = {
        button: 'button-x1dCOTP3',
        disabled: 'disabled-x1dCOTP3',
        hover: 'hover-x1dCOTP3',
        accessible: 'accessible-x1dCOTP3',
      }
    },
    91348: (e) => {
      e.exports = { item: 'item-SqYYy1zF', isFirst: 'isFirst-SqYYy1zF', isLast: 'isLast-SqYYy1zF' }
    },
    22586: (e) => {
      e.exports = { slider: 'slider-3kCW6DWs', inner: 'inner-3kCW6DWs' }
    },
    21648: (e) => {
      e.exports = { sliderRow: 'sliderRow-k2h4OAz8' }
    },
    54079: (e, t, s) => {
      'use strict'
      s.d(t, { Toolbar: () => h })
      var a = s(50959),
        i = s(50151),
        n = s(47201),
        o = s(3343),
        r = s(16838),
        l = s(71468),
        c = s(39416),
        d = s(36898)
      const h = (0, a.forwardRef)(function (e, t) {
        const { onKeyDown: s, orientation: h, ...m } = e,
          p = r.PLATFORM_ACCESSIBILITY_ENABLED ? { role: 'toolbar', 'aria-orientation': h } : {},
          g = (0, c.useFunctionalRefObject)(t)
        return (
          (0, a.useEffect)(() => {
            if (!r.PLATFORM_ACCESSIBILITY_ENABLED) return
            const e = (0, i.ensureNotNull)(g.current),
              t = () => {
                const t = (function (e) {
                  return Array.from(
                    e.querySelectorAll(
                      'button:not([disabled], [aria-disabled], [tabindex="-1"]), [tabindex]:not([disabled], [aria-disabled], [tabindex="-1"])'
                    )
                  ).filter((0, r.createScopedVisibleElementFilter)(e))
                })(e).sort(r.navigationOrderComparator)
                if (0 === t.length) {
                  const [t] = u(e).sort(r.navigationOrderComparator)
                  if (void 0 === t) return
                  ;(0, l.becomeMainElement)(t)
                }
                if (t.length > 1) {
                  const [, ...e] = t
                  for (const t of e) (0, l.becomeSecondaryElement)(t)
                }
              }
            return (
              window.addEventListener('keyboard-navigation-activation', t),
              () => window.removeEventListener('keyboard-navigation-activation', t)
            )
          }, []),
          (0, d.useMouseClickAutoBlur)(g),
          a.createElement('div', {
            ...m,
            ...p,
            ref: g,
            onKeyDown: (0, n.createSafeMulticastEventHandler)(function (e) {
              if (!r.PLATFORM_ACCESSIBILITY_ENABLED) return
              if (e.defaultPrevented) return
              if (!(document.activeElement instanceof HTMLElement)) return
              const t = (0, o.hashFromEvent)(e)
              if (27 === t) return e.preventDefault(), void document.activeElement.blur()
              if ('vertical' !== h && 37 !== t && 39 !== t) return
              if ('vertical' === h && 38 !== t && 40 !== t) return
              const s = u(e.currentTarget).sort(r.navigationOrderComparator)
              if (0 === s.length) return
              const a = s.indexOf(document.activeElement)
              if (-1 === a) return
              e.preventDefault()
              const i = () => {
                  const e = (a + s.length - 1) % s.length
                  ;(0, l.becomeSecondaryElement)(s[a]), (0, l.becomeMainElement)(s[e]), s[e].focus()
                },
                n = () => {
                  const e = (a + s.length + 1) % s.length
                  ;(0, l.becomeSecondaryElement)(s[a]), (0, l.becomeMainElement)(s[e]), s[e].focus()
                }
              switch (t) {
                case 37:
                  'vertical' !== h && i()
                  break
                case 39:
                  'vertical' !== h && n()
                  break
                case 38:
                  'vertical' === h && i()
                  break
                case 40:
                  'vertical' === h && n()
              }
            }, s),
          })
        )
      })
      function u(e) {
        return Array.from(
          e.querySelectorAll('button:not([disabled], [aria-disabled]), [tabindex]:not([disabled], [aria-disabled])')
        ).filter((0, r.createScopedVisibleElementFilter)(e))
      }
    },
    92861: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { BottomToolbarRenderer: () => at })
      var a = s(50959),
        i = s(962),
        n = s(44352),
        o = s(19036),
        r = s(97754),
        l = s(14483),
        c = s(50298),
        d = s(12811),
        h = s(59064),
        u = s(90692),
        m = s(16396),
        p = s(51613),
        g = s(50151),
        b = s(51768),
        _ = s(5962),
        v = s(57898),
        f = s.n(v)
      class y {
        constructor(e) {
          ;(this._state = { ranges: [] }),
            (this._change = new (f())()),
            (this._rangeChangedListenerBound = this._onRangeChanged.bind(this))
          const { chartWidget: t } = (this._context = e)
          t.withModel(null, () => {
            const e = t.model(),
              s = e.mainSeries()
            s.onStatusChanged().subscribe(this, this._updateAvailableRanges),
              l.enabled('update_timeframes_set_on_symbol_resolve') &&
                s.dataEvents().symbolResolved().subscribe(this, this._updateAvailableRanges),
              s.priceScale().properties().childs().lockScale.subscribe(this, this._updateAvailableRanges)
            const a = e.model().appliedTimeFrame()
            a.subscribe(this._rangeChangedListenerBound),
              this._rangeChangedListenerBound(a.value()),
              this._updateAvailableRanges()
          })
        }
        state() {
          return this._state
        }
        onChange() {
          return this._change
        }
        selectRange(e) {
          this._setState({ activeRange: e.value.value })
          const { chartWidgetCollection: t } = this._context,
            s = { val: e.value, res: e.targetResolution }
          t.setTimeFrame(s)
        }
        destroy() {
          const { chartWidget: e } = this._context
          e.withModel(null, () => {
            const t = e.model(),
              s = t.mainSeries()
            s.onStatusChanged().unsubscribe(this, this._updateAvailableRanges),
              l.enabled('update_timeframes_set_on_symbol_resolve') &&
                s.dataEvents().symbolResolved().unsubscribe(this, this._updateAvailableRanges),
              s.priceScale().properties().childs().lockScale.unsubscribe(this, this._updateAvailableRanges),
              t.model().appliedTimeFrame().unsubscribe(this._rangeChangedListenerBound)
          }),
            this._change.destroy()
        }
        _setState(e) {
          ;(this._state = Object.assign({}, this._state, e)), this._change.fire(this._state)
        }
        _onRangeChanged(e) {
          let t
          null !== e && 'period-back' === e.val.type && (t = e.val.value), this._setState({ activeRange: t })
        }
        _updateAvailableRanges() {
          const { availableTimeFrames: e, chartWidget: t } = this._context
          if (!t.hasModel()) return
          const s = t.model().mainSeries(),
            a = s.status()
          if (2 === a || 1 === a) return
          const i = e(s.symbolInfo(), s.status())
          0 !== i.length && this._setState({ ranges: i })
        }
      }
      const S = (0, _.registryContextType)()
      function C(e) {
        var t
        return (
          ((t = class extends a.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._handleUpdate = (e) => {
                  this.setState(e)
                }),
                (this._handleSelectRange = (e) => {
                  var t, s
                  ;(0, b.trackEvent)('GUI', 'Chart Bottom Toolbar', `range ${e.value}`),
                    null === (s = (t = this.props).onSelectRange) || void 0 === s || s.call(t, e),
                    this._binding.selectRange(e)
                }),
                (0, _.validateRegistry)(t, {
                  availableTimeFrames: o.any.isRequired,
                  chartWidgetCollection: o.any.isRequired,
                  chartWidget: o.any.isRequired,
                }),
                k.has(t.chartWidget) || k.set(t.chartWidget, new y(t))
              const s = (this._binding = (0, g.ensureDefined)(k.get(t.chartWidget)))
              this.state = s.state()
            }
            componentDidMount() {
              this._binding.onChange().subscribe(this, this._handleUpdate)
            }
            componentWillUnmount() {
              this._binding.onChange().unsubscribe(this, this._handleUpdate)
            }
            render() {
              return a.createElement(e, {
                goToDateButton: this.props.goToDateButton,
                className: this.props.className,
                ranges: this.state.ranges,
                activeRange: this.state.activeRange,
                onSelectRange: this._handleSelectRange,
              })
            }
          }).contextType = S),
          t
        )
      }
      const k = new WeakMap()
      var x = s(64358),
        E = s(23829),
        M = s(1109),
        z = s(53180),
        T = s(90752),
        A = s(7458)
      function w(e) {
        const { ranges: t, activeRange: s, onSelectRange: i } = e
        return a.createElement(
          a.Fragment,
          null,
          t.map((e) =>
            a.createElement(E.ContextMenuItem, {
              key: e.value.value,
              label: e.description || e.text,
              active: s === e.value.value,
              checked: s === e.value.value,
              checkable: !0,
              disabled: !1,
              onClick: n.bind(null, e),
              doNotCloseOnClick: !1,
              subItems: [],
            })
          )
        )
        function n(e) {
          e && i && i(e), (0, h.globalCloseMenu)()
        }
      }
      function D(e) {
        const { onGoToDateClick: t } = e
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(M.Separator, { className: A.separator }),
          a.createElement(E.ContextMenuItem, {
            icon: T,
            label: (0, z.appendEllipsis)(n.t(null, void 0, s(369))),
            onClick: t,
            active: !1,
            checked: !1,
            checkable: !1,
            disabled: !1,
            doNotCloseOnClick: !1,
            subItems: [],
          })
        )
      }
      const j = { title: n.t(null, void 0, s(60222)), goToDate: (0, z.appendEllipsis)(n.t(null, void 0, s(369))) },
        W = (0, _.registryContextType)()
      class R extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleGoToDateClick = () => {
              const { chartWidget: e } = this.context
              ;(0, x.showGoToDateDialog)(e), (0, h.globalCloseMenu)()
            }),
            (this._handleRangeSelect = (e) => {
              e && this.props.onSelectRange && this.props.onSelectRange(e), (0, h.globalCloseMenu)()
            }),
            (this._renderChildren = (e) => {
              const { ranges: t, activeRange: s, goToDateButton: i } = this.props
              return e
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(w, { ranges: t, activeRange: s, onSelectRange: this._handleRangeSelect }),
                    i && a.createElement(D, { onGoToDateClick: this._handleGoToDateClick })
                  )
                : a.createElement(
                    a.Fragment,
                    null,
                    t.map((e) =>
                      a.createElement(m.PopupMenuItem, {
                        key: e.value.value,
                        label: e.description || e.text,
                        isActive: s === e.value.value,
                        onClick: this._handleRangeSelect,
                        onClickArg: e,
                      })
                    ),
                    i && a.createElement(p.PopupMenuSeparator, null),
                    i && a.createElement(m.PopupMenuItem, { label: j.goToDate, onClick: this._handleGoToDateClick })
                  )
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired })
        }
        render() {
          return a.createElement(u.MatchMedia, { rule: 'screen and (max-width: 430px)' }, (e) =>
            a.createElement(
              c.ToolbarMenuButton,
              {
                className: A.button,
                content: j.title,
                arrow: !0,
                verticalAttachEdge: d.VerticalAttachEdge.Top,
                verticalDropDirection: d.VerticalDropDirection.FromBottomToTop,
                horizontalMargin: 4,
                'data-name': 'date-ranges-menu',
                isDrawer: e,
                onClick: this._trackClick,
              },
              this._renderChildren(e)
            )
          )
        }
        _trackClick() {
          0
        }
      }
      R.contextType = W
      const B = C(R)
      var L = s(4618)
      const N = L
      function I(e) {
        return class extends a.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null })
          }
          componentDidUpdate() {
            ;((0, g.ensureNotNull)(this._slider).style.transition = 'transform 350ms'), this._componentDidUpdate()
          }
          componentDidMount() {
            this._componentDidUpdate()
          }
          render() {
            const { className: t } = this.props,
              s = this._generateTabs()
            return a.createElement(
              'div',
              { className: r(t, L.tabs), 'data-name': this.props['data-name'] },
              s,
              a.createElement(e, {
                reference: (e) => {
                  this._slider = e
                },
              })
            )
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              a.Children.map(this.props.children, (e) => {
                const t = e,
                  s = Boolean(t.props.isActive),
                  i = {
                    reference: (e) => {
                      s && (this.activeTab.current = e), t.props.reference && t.props.reference(e)
                    },
                  }
                return a.cloneElement(t, i)
              })
            )
          }
          _componentDidUpdate() {
            const e = (0, g.ensureNotNull)(this._slider).style
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                s = this.activeTab.current.offsetLeft
              ;(e.transform = `translateX(${s}px)`), (e.width = `${t}px`), (e.opacity = '1')
            } else e.opacity = '0'
          }
        }
      }
      I(function (e) {
        return a.createElement('div', { className: L.slider, ref: e.reference })
      })
      var H = s(40173),
        P = s(88066),
        F = s(91348)
      ;(0, H.mergeThemes)(P.DEFAULT_TOOLBAR_BUTTON_THEME, F)
      function U(e) {
        const {
            reference: t,
            text: s,
            tooltip: i,
            isActive: n,
            isFirst: o,
            isLast: l,
            className: c,
            onClick: d,
            theme: h = F,
            ...u
          } = e,
          m = r(c, h.item, { [h.isActive]: n, [h.isFirst]: o, [h.isLast]: l })
        return a.createElement(P.ToolbarButton, {
          ...u,
          ref: t,
          text: s,
          isActive: n,
          tooltip: i,
          className: m,
          isGrouped: !0,
          onClick: d,
        })
      }
      var X = s(22586)
      const G = (0, H.mergeThemes)(N, X)
      var O = s(21648)
      const q = I(function (e) {
        return a.createElement(
          'div',
          { className: r(e.className, G.slider), ref: e.reference },
          a.createElement('div', { className: G.inner })
        )
      })
      const V = C(function (e) {
        const { className: t, ranges: s, activeRange: i, onSelectRange: n } = e
        return a.createElement(
          q,
          { className: r(O.sliderRow, t), 'data-name': 'date-ranges-tabs' },
          s.map((e, t) =>
            a.createElement(U, {
              key: e.value.value,
              value: e.value.value,
              'data-name': `date-range-tab-${e.value.value}`,
              isFirst: 0 === t,
              isLast: t === s.length - 1,
              isActive: i === e.value.value,
              onClick: n && n.bind(null, e),
              text: e.text,
              tooltip: e.description || e.text,
            })
          )
        )
      })
      var J = s(61814),
        Y = s(68335),
        Z = s(48889),
        K = s(15270),
        $ = s(50242)
      const Q = (0, J.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Alt, !1), 'G'],
          text: '{0} + {1}',
        }),
        ee = (0, _.registryContextType)()
      class te extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidget: e } = this.context
              ;(0, b.trackEvent)('GUI', 'Chart Bottom Toolbar', 'go to'), (0, x.showGoToDateDialog)(e)
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired })
        }
        render() {
          const { className: e, ranges: t } = this.props
          return (
            t.length > 0 &&
            a.createElement(Z.ToolbarIconButton, {
              icon: K,
              onClick: this._handleClick,
              'data-tooltip-hotkey': Q,
              tooltip: n.t(null, void 0, s(369)),
              'data-name': 'go-to-date',
              isGrouped: !0,
              className: r($.button, e),
            })
          )
        }
      }
      te.contextType = ee
      const se = C(te)
      var ae = s(88270),
        ie = s(79206),
        ne = s(39347),
        oe = s(41249),
        re = s(92216),
        le = s(16164),
        ce = s(10643),
        de = s(85616)
      const he = (0, H.mergeThemes)(P.DEFAULT_TOOLBAR_BUTTON_THEME, { isDisabled: de.disabled, button: de.button })
      const ue = (0, _.registryContextType)()
      class me extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._timeFormatter = new ie.TimeFormatter(
              (0, re.getHourMinuteSecondFormat)(le.timeHoursFormatProperty.value())
            )),
            (this._tickInterval = void 0),
            (this._element = null),
            (this._menuShown = !1),
            (this._preventShowingMenu = !1),
            (this._tickClock = () => {
              const { chartApiInstance: e } = this.context
              if (void 0 !== this._timezone) {
                const t = (0, oe.utc_to_cal)(this._timezone, e.serverTime())
                this.setState({
                  time: this._timeFormatter.format(t),
                })
              }
            }),
            (this._getActions = () => {
              if (!this.props.withMenu) return []
              const { chartWidget: e } = this.context
              return (function (e) {
                e.updateActions()
                const t = e.actions()
                return t && t.applyTimeZone instanceof ne.Action ? t.applyTimeZone.getSubItems() : []
              })(e)
            }),
            (this._handleRef = (e) => {
              this._element = e
            }),
            (this._onMouseDown = () => {
              this._preventShowingMenu = this._menuShown
            }),
            (this._showMenu = () => {
              if (this._preventShowingMenu) return void ce.ContextMenuManager.hideAll()
              const e = (0, g.ensureNotNull)(this._element),
                t = this._getActions()
              if (0 === t.length) return
              const s = e.getBoundingClientRect()
              ce.ContextMenuManager.showMenu(
                t,
                { clientX: s.left, clientY: s.top, attachToYBy: 'bottom' },
                { returnFocus: !0, takeFocus: !0 },
                { menuName: 'TimezoneMenuContextMenu' },
                () => {
                  this._menuShown = !1
                }
              ).then(() => {
                this._menuShown = !0
              })
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired, chartApiInstance: o.any.isRequired }),
            (this.state = { time: '' })
        }
        componentDidMount() {
          const { chartWidget: e } = this.context
          ;(this._tickInterval = setInterval(this._tickClock, 1e3)),
            e.withModel(null, () => {
              const t = e.model()
              t.model().mainSeries().dataEvents().symbolResolved().subscribe(this, this.updateTimezonesButton),
                t.model().properties().childs().timezone.subscribe(this, this.updateTimezonesButton),
                le.timeHoursFormatProperty.subscribe(this, this._timeHoursFormatPropertyChanged)
            })
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context
          clearInterval(this._tickInterval),
            e.withModel(null, () => {
              const t = e.model()
              t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(this, this.updateTimezonesButton),
                t.model().properties().childs().timezone.unsubscribe(this, this.updateTimezonesButton),
                le.timeHoursFormatProperty.unsubscribe(this, this._timeHoursFormatPropertyChanged)
            })
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { time: i } = this.state,
            o = void 0 !== this._timezone ? (0, ae.parseTzOffset)(this._timezone.name()).string : null
          return a.createElement(P.ToolbarButton, {
            onMouseDown: this._onMouseDown,
            ref: this._handleRef,
            onClick: this._showMenu,
            isDisabled: !t,
            theme: he,
            'data-name': 'time-zone-menu',
            tooltip: t ? n.t(null, void 0, s(87492)) : void 0,
            className: e,
            text: i && o && `${i} (${o})`,
          })
        }
        updateTimezonesButton() {
          const { chartWidget: e } = this.context
          if (!e.hasModel()) return
          if (null === e.model().mainSeries().symbolInfo()) return
          let t = e.model().model().timezone()
          if ('exchange' === t) {
            const s = (0, g.ensureNotNull)(e.model().mainSeries().symbolInfo()).timezone
            s && (t = s)
          }
          ;(this._timezone = (0, oe.get_timezone)(t)), this._tickClock()
        }
        _timeHoursFormatPropertyChanged() {
          ;(this._timeFormatter = new ie.TimeFormatter(
            (0, re.getHourMinuteSecondFormat)(le.timeHoursFormatProperty.value())
          )),
            this.updateTimezonesButton()
        }
      }
      me.contextType = ue
      var pe = s(56812)
      function ge(e) {
        return a.createElement('span', { className: r(pe.separator, e.className) })
      }
      var be = s(54079),
        _e = s(36298),
        ve = s(49483)
      class fe {
        constructor(e, t, s) {
          ;(this._highlighted = !1),
            (this._chartWidget = e),
            (this._priceScaleGetter = t),
            (this._owner = s),
            (this._setHighlight = this._setHighlight.bind(this)),
            (this._removeHighlight = this._removeHighlight.bind(this))
        }
        destroy() {
          this._highlighted && this._removeHighlight()
        }
        handlers() {
          const e = ve.CheckMobile.any()
          return { onMouseEnter: e ? void 0 : this._setHighlight, onMouseLeave: e ? void 0 : this._removeHighlight }
        }
        _setHighlight() {
          if (!this._chartWidget.hasModel()) return
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries()),
            s = this._priceScaleGetter()
          if (null === t || null === s) return
          const a = this._chartWidget.paneByState(t)
          if (null !== a) {
            const t = a.rightPriceAxisesContainer().findAxisWidgetForScale(s)
            let i = null
            null !== t && (i = t.axisInfo())
            const n = a.leftPriceAxisesContainer().findAxisWidgetForScale(s)
            null !== n && (i = n.axisInfo())
            const o = a.highlightedPriceAxis()
            null !== i &&
              o.value().axis !== i &&
              (o.setValue({ owner: this._owner, axis: i }), e.lightUpdate(), (this._highlighted = !0))
          }
        }
        _removeHighlight() {
          if (!this._chartWidget.hasModel()) return
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries())
          if (null === t) return
          const s = this._chartWidget.paneByState(t)
          if (null !== s) {
            const t = s.highlightedPriceAxis(),
              a = t.value()
            null !== a.axis &&
              a.owner === this._owner &&
              (t.setValue({ owner: this._owner, axis: null }), e.lightUpdate(), (this._highlighted = !1))
          }
        }
      }
      const ye = (0, _.registryContextType)(),
        Se = new _e.TranslatedString('toggle log scale', n.t(null, void 0, s(60166)))
      const Ce = (0, _.registryContextType)(),
        ke = new _e.TranslatedString('toggle auto scale', n.t(null, void 0, s(63060)))
      const xe = (0, _.registryContextType)(),
        Ee = new _e.TranslatedString('toggle percentage scale', n.t(null, void 0, s(68642)))
      const Me = (0, _.registryContextType)()
      var ze = s(42142),
        Te = s(21861),
        Ae = s(82962),
        we = s(11678),
        De = s(97086)
      const je = new _e.TranslatedString('change session', n.t(null, void 0, s(65303))),
        We = { hint: n.t(null, void 0, s(25866)), headerMenuText: n.t(null, void 0, s(44794)) },
        Re = (0, _.registryContextType)()
      class Be extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired, chartApiInstance: o.any.isRequired }),
            (this.state = { availableSessions: [] })
        }
        componentDidMount() {
          const { chartWidget: e } = this.context
          e.withModel(null, () => {
            const t = e.model()
            t.model().mainSeries().dataEvents().symbolResolved().subscribe(this, this.updateSessionButton),
              t.model().mainSeries().properties().childs().sessionId.subscribe(this, this.updateSessionButton),
              this.updateSessionButton()
          })
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context
          e.withModel(null, () => {
            const t = e.model()
            t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(this, this.updateSessionButton),
              t.model().mainSeries().properties().childs().sessionId.unsubscribe(this, this.updateSessionButton)
          })
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { sessionName: s } = this.state
          return a.createElement(
            c.ToolbarMenuButton,
            {
              arrow: !1,
              isDisabled: !t,
              content: s,
              className: e,
              closeOnClickOutside: !0,
              tooltip: t ? We.hint : void 0,
              'data-name': 'session-menu',
              verticalDropDirection: d.VerticalDropDirection.FromBottomToTop,
              verticalAttachEdge: d.VerticalAttachEdge.Top,
              onClick: this._trackClick,
            },
            this._menuItems()
          )
        }
        updateSessionButton() {
          var e, t
          const { chartWidget: s } = this.context
          if (!s.model()) return
          const a = s.model().mainSeries().symbolInfo()
          if (null === a) return
          const i = a.subsession_id,
            n =
              null !== (t = null === (e = a.subsessions) || void 0 === e ? void 0 : e.filter((e) => !e.private)) &&
              void 0 !== t
                ? t
                : [],
            o = n.find((e) => e.id === i)
          this.setState({
            sessionId: i,
            sessionName: (0, we.translateSessionShortDescription)((null == o ? void 0 : o.description) || ''),
            availableSessions: n,
          })
        }
        _menuItems() {
          if (!this.props.withMenu) return []
          const { chartWidget: e } = this.context,
            { availableSessions: t } = this.state
          if (!e.model()) return []
          const s = e.model().mainSeries(),
            i = [
              a.createElement(
                Ae.ToolWidgetMenuSummary,
                { key: 'header_menu_text', className: De.headerMenuText },
                We.headerMenuText.toUpperCase()
              ),
            ]
          for (const n of t) {
            const t = { category: 'SetSession', event: n.id },
              o = () => {
                e.model().setProperty(s.properties().childs().sessionId, n.id, je)
              }
            i.push(
              a.createElement(m.PopupMenuItem, {
                key: n.id,
                label: (0, we.translateSessionDescription)(n.description),
                isActive: this.state.sessionId === n.id,
                trackEventObject: t,
                onClick: o,
              })
            )
          }
          return i
        }
        _trackClick() {
          0
        }
      }
      Be.contextType = Re
      var Le = s(21868),
        Ne = s(83863),
        Ie = s(64264)
      const He = {
          extLabel: n.t(null, void 0, s(8877)),
          extHint: n.t(null, void 0, s(41421)),
          percentageHint: n.t(null, void 0, s(43737)),
          logLabel: n.t(null, { context: 'scale' }, s(885)),
          logHint: n.t(null, void 0, s(21329)),
          autoLabel: n.t(null, { context: 'scale' }, s(99247)),
          autoHint: n.t(null, void 0, s(60879)),
          fullscreenHint: n.t(null, void 0, s(98948)),
          adjLabel: n.t(null, { context: 'adjustments' }, s(38219)),
          adjHint: n.t(null, void 0, s(9994)),
          adjForDividendsOnlyHint: n.t(null, void 0, s(1217)),
          adjForSplitsOnlyHint: n.t(null, void 0, s(27662)),
          backAdjustLabel: n.t(null, { context: 'adjustments' }, s(53457)),
          backAdjustHint: n.t(null, void 0, s(10989)),
          settlementAsCloseLabel: n.t(null, { context: 'adjustments' }, s(17077)),
          settlementAsCloseHint: n.t(null, void 0, s(99983)),
        },
        Pe =
          ((Fe = (e) =>
            a.createElement(P.ToolbarButton, {
              text: He.logLabel,
              tooltip: He.logHint,
              className: e.className,
              isActive: e.isLogarithm,
              'aria-pressed': e.isLogarithm,
              isGrouped: !0,
              onClick: Ke(e.onClick, 'log', e.isLogarithm),
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              'data-name': 'logarithm',
            })),
          ((Ue = class extends a.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._priceScale = null),
                (this._handleSelect = () => {
                  const e = this.context.chartWidget.model(),
                    t = (0, g.ensureNotNull)(this.state.series),
                    s = t.priceScale(),
                    a = s.mode()
                  t.priceScale().isLockScale() || e.setPriceScaleMode({ log: !a.log }, s, Se)
                }),
                (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired }),
                (this.state = { isActive: !1, series: null }),
                (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, 'logarithm'))
            }
            componentDidMount() {
              const e = this.context.chartWidget
              e.withModel(null, () => {
                const t = e.model().mainSeries(),
                  s = t.priceScale()
                this._handleMainSeriesPriceScaleChanged(s),
                  t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                  this._handleModeChanged({}, s.mode()),
                  this.setState({ isActive: t.priceScale().isLog(), series: t })
              })
            }
            componentWillUnmount() {
              const e = this.context.chartWidget
              e.withModel(null, () => {
                e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                this._priceAxisHighlighter.destroy()
            }
            render() {
              const { className: e } = this.props,
                { isActive: t, series: s } = this.state
              return a.createElement(Fe, {
                ...this._priceAxisHighlighter.handlers(),
                className: e,
                isLogarithm: t,
                isDisabled: null === s,
                onClick: this._handleSelect,
              })
            }
            _handleMainSeriesPriceScaleChanged(e) {
              null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged),
                (this._priceScale = e),
                this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                this._handleModeChanged({}, e.mode())
            }
            _handleModeChanged(e, t) {
              Boolean(t.log) !== this.state.isActive && this.setState({ isActive: Boolean(t.log) })
            }
          }).contextType = ye),
          Ue)
      var Fe, Ue
      const Xe = (function (e) {
          var t
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, g.ensureNotNull)(this.state.series).priceScale(),
                      s = t.mode()
                    e.setPriceScaleMode({ autoScale: !s.autoScale }, t, ke)
                  }),
                  (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, 'auto'))
              }
              componentDidMount() {
                const e = this.context.chartWidget
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    s = t.priceScale()
                  this._handleMainSeriesPriceScaleChanged(s),
                    t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleModeChanged({}, s.mode()),
                    this.setState({ isActive: t.priceScale().isAutoScale(), series: t })
                })
              }
              componentWillUnmount() {
                const e = this.context.chartWidget
                e.withModel(null, () => {
                  e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy()
              }
              render() {
                const { className: t } = this.props,
                  { isActive: s, series: i } = this.state
                return a.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isAuto: s,
                  isDisabled: null === i,
                  onClick: this._handleSelect,
                })
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged),
                  (this._priceScale = e),
                  this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                  this._handleModeChanged({}, e.mode())
              }
              _handleModeChanged(e, t) {
                Boolean(t.autoScale) !== this.state.isActive && this.setState({ isActive: Boolean(t.autoScale) })
              }
            }).contextType = Ce),
            t
          )
        })((e) =>
          a.createElement(P.ToolbarButton, {
            text: He.autoLabel,
            tooltip: He.autoHint,
            className: e.className,
            isActive: e.isAuto,
            'aria-pressed': e.isAuto,
            isGrouped: !0,
            onClick: Ke(e.onClick, 'auto', e.isAuto),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            'data-name': 'auto',
          })
        ),
        Ge = (function (e) {
          var t
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, g.ensureNotNull)(this.state.series),
                      s = t.priceScale(),
                      a = s.mode()
                    t.priceScale().isLockScale() || e.setPriceScaleMode({ percentage: !a.percentage }, s, Ee)
                  }),
                  (0, _.validateRegistry)(t, {
                    chartWidget: o.any.isRequired,
                  }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, 'percentage'))
              }
              componentDidMount() {
                const e = this.context.chartWidget
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    s = t.priceScale()
                  this._handleMainSeriesPriceScaleChanged(s),
                    t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleScaleChange({}, s.mode()),
                    this.setState({ isActive: t.priceScale().isPercentage(), series: t })
                })
              }
              componentWillUnmount() {
                const e = this.context.chartWidget
                e.withModel(null, () => {
                  e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy()
              }
              render() {
                const { className: t } = this.props,
                  { isActive: s, series: i } = this.state
                return a.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isPercentage: s,
                  isDisabled: null === i,
                  onClick: this._handleSelect,
                })
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleScaleChange),
                  (this._priceScale = e),
                  this._priceScale.modeChanged().subscribe(this, this._handleScaleChange),
                  this._handleScaleChange({}, e.mode())
              }
              _handleScaleChange(e, t) {
                Boolean(t.percentage) !== this.state.isActive && this.setState({ isActive: Boolean(t.percentage) })
              }
            }).contextType = xe),
            t
          )
        })((e) =>
          a.createElement(P.ToolbarButton, {
            icon: Le,
            tooltip: He.percentageHint,
            className: e.className,
            isActive: e.isPercentage,
            'aria-pressed': e.isPercentage,
            isDisabled: e.isDisabled,
            isGrouped: !0,
            onClick: Ke(e.onClick, 'percent', e.isPercentage),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            'data-name': 'percentage',
          })
        )
      const Oe = (0, J.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Alt, !1), 'Enter'],
          text: '{0} + {1}',
        }),
        qe = (function (e) {
          var t
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._handleClick = (e) => {
                    const { resizerDetacher: t, chartWidgetCollection: s } = this.context
                    e.shiftKey && t.detachable.value()
                      ? t.detach()
                      : this.state.isFullscreen
                      ? t.exitFullscreen()
                      : t.requestFullscreen()
                  }),
                  (this._handleLayoutChange = (e) => {
                    this.setState({ isFullscreen: e })
                  }),
                  (this._handlePhoneSize = () => {
                    0
                  }),
                  (0, _.validateRegistry)(t, {
                    chartWidgetCollection: o.any.isRequired,
                    resizerDetacher: o.any.isRequired,
                  })
                const { resizerDetacher: s } = t
                this.state = { isFullscreen: s.fullscreen.value(), isChangeLayoutButton: this._isChangeLayoutButton() }
              }
              componentDidMount() {
                const { resizerDetacher: e, chartWidgetCollection: t } = this.context,
                  { mobileChangeLayoutEnabled: s } = this.props
                e.fullscreen.subscribe(this._handleLayoutChange)
              }
              componentWillUnmount() {
                const { resizerDetacher: e, chartWidgetCollection: t } = this.context,
                  { mobileChangeLayoutEnabled: s } = this.props
                e.fullscreen.unsubscribe(this._handleLayoutChange)
              }
              render() {
                const { className: t } = this.props,
                  { isFullscreen: s, isChangeLayoutButton: i } = this.state
                return a.createElement(e, { className: t, isFullscreen: s, onClick: this._handleClick })
              }
              _isChangeLayoutButton() {
                return !1
              }
            }).contextType = Me),
            t
          )
        })((e) =>
          a.createElement(P.ToolbarButton, {
            icon: Ne,
            tooltip: He.fullscreenHint,
            className: e.className,
            isActive: e.isFullscreen,
            onClick: Ke(e.onClick, 'maximize chart', e.isFullscreen),
            'data-tooltip-hotkey': Oe,
            'data-name': 'fullscreen',
          })
        ),
        Ve = { properties: !0, fullscreen: !0, preventPhoneLayout: !0 },
        Je = {
          fullscreen: Number.MIN_SAFE_INTEGER,
          preventPhoneLayout: Number.MIN_SAFE_INTEGER,
          properties: Number.MIN_SAFE_INTEGER,
          separator: -2,
          timeZones: -1,
          auto: 0,
          logarithm: 1,
          percentage: 2,
          session: 3,
          adj: 4,
          backAdj: 5,
          settlementAsClose: 6,
        },
        Ye = (() => {
          const e = new Map()
          return (
            e.set(Pe, 'logarithm'),
            e.set(Ge, 'percentage'),
            e.set(Xe, 'auto'),
            e.set(Be, 'session'),
            e.set(qe, 'fullscreen'),
            e
          )
        })()
      function Ze(e) {
        0
      }
      function Ke(e, t, s) {
        return (t) => {
          e(t)
        }
      }
      const $e = {
          dateRangeMode: 'hidden',
          separator: !0,
          timeZones: !0,
          fullscreen: !0,
          preventPhoneLayout: !0,
          properties: !0,
          auto: !0,
          logarithm: !0,
          percentage: !0,
          session: !0,
          adj: !0,
          backAdj: !0,
          settlementAsClose: !0,
        },
        Qe = (0, _.registryContextType)()
      class et extends a.PureComponent {
        constructor(e, t) {
          var s, n
          super(e, t),
            (this._timezoneButtonRef = null),
            (this._layout = Object.assign({}, $e)),
            (this._raf = null),
            (this._toolbar = null),
            (this._rangeExpanded = null),
            (this._rangeCollapsed = null),
            (this._seriesComponents = {}),
            (this._resizeObserver = null),
            (this._injector =
              ((s = () => this._layout),
              (n = (e, t) => (this._seriesComponents[t] = e)),
              (e, t, i) => {
                if (a.isValidElement(e) && 'string' != typeof e.type) {
                  const { props: o } = e
                  if ('string' == typeof o.className) {
                    const l = { className: r(o.className, 0 === t && Ie.first, t === i.length - 1 && Ie.last) },
                      c = s(),
                      d = (0, g.ensureDefined)(Ye.get(e.type))
                    return a.createElement(
                      'div',
                      {
                        key: null === e.key ? void 0 : e.key,
                        className: r(Ie.inline, c[d] && Ie.collapsed),
                        ref: (e) => n(e, d),
                        onClick: () => Ze(),
                      },
                      a.cloneElement(e, l)
                    )
                  }
                }
                return e
              })),
            (this._updateButtonsVisibility = () => {
              const { chartWidget: e } = this.context,
                t = e.model().model(),
                s = t.mainSeries(),
                a = s.symbolInfo(),
                i = !s.isDWMProperty().value()
              if (s.symbolResolvingActive().value())
                return void this._setStateWithResize({ intervalAllowsSessionButton: i })
              const n = ((null == a ? void 0 : a.subsessions) || []).filter((e) => !e.private).length > 1
              this._setStateWithResize({ intervalAllowsSessionButton: i, symbolAllowsSessionButton: n })
            }),
            (this._handleResize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const e = this._layout,
                    t = (0, g.ensureNotNull)(this._toolbar),
                    s = (0, g.ensureNotNull)(this._rangeExpanded),
                    a =
                      ((n = (function (e) {
                        const t = {}
                        return (
                          Object.keys(e).forEach((s) => {
                            const a = e[s]
                            if (null !== a) {
                              const e = i.findDOMNode(a)
                              null !== e && (t[s] = e)
                            }
                          }),
                          t
                        )
                      })(this._seriesComponents)),
                      Object.keys(n)
                        .map((e) => ({ name: e, width: n[e].offsetWidth }))
                        .sort((e, t) => Je[e.name] - Je[t.name]))
                  var n
                  const o = t.offsetWidth,
                    r = a.reduce((e, t) => e + t.width, 0),
                    l = s.offsetWidth,
                    c = !Boolean(s.textContent) || o - r - l <= 0 ? 'collapsed' : 'expanded'
                  if ((Object.assign(e, { dateRangeMode: c }), 'expanded' !== c)) {
                    const t = o - (0, g.ensureNotNull)(this._rangeCollapsed).offsetWidth - 0
                    let s = 0,
                      i = 0
                    for (const n of a)
                      (s += n.width),
                        n.name in Ve
                          ? ((i += n.width), Object.assign(e, { [n.name]: !1 }))
                          : Object.assign(e, { [n.name]: t <= s })
                    t <= i && Object.assign(e, { dateRangeMode: 'hidden' })
                  } else
                    Object.assign(e, {
                      separator: !1,
                      timeZones: !1,
                      fullscreen: !1,
                      preventPhoneLayout: !1,
                      properties: !1,
                      auto: !1,
                      logarithm: !1,
                      percentage: !1,
                      session: !1,
                      adj: !1,
                      settlementAsClose: !1,
                      backAdj: !1,
                    })
                  this._applyResizing(), (this._raf = null)
                }))
            }),
            (this._handleTimezoneButtonRef = (e) => {
              this._timezoneButtonRef = e
            }),
            (this._handleMeasure = () => {
              null !== this._toolbar && this.resizeUI()
            }),
            (this._handleFullscreenableChange = (e) => {
              this._setStateWithResize({ isFullscreenable: e })
            }),
            (this._handlePreventPhoneLayoutButtonVisibility = () => {
              0
            }),
            (this._handleToolbarRef = (e) => (this._toolbar = e)),
            (this._handleRangeCollapsedRef = (e) => (this._rangeCollapsed = e)),
            (this._handleRangeExpandedRef = (e) => {
              this._updateResizeObserver(this._rangeExpanded, e), (this._rangeExpanded = e)
            }),
            (this._handleTimeZonesRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.timeZones, e), (this._seriesComponents.timeZones = e)
            }),
            (this._handleSessionsRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.session, e), (this._seriesComponents.session = e)
            }),
            (this._handleSeparatorRef = (e) => {
              this._seriesComponents.separator = e
            }),
            (this._updateResizeObserver = (e, t) => {
              this._resizeObserver &&
                e !== t &&
                (e && this._resizeObserver.unobserve(e), t && this._resizeObserver.observe(t))
            }),
            (0, _.validateRegistry)(t, {
              onContentBoxChanged: o.any.isRequired,
              chartApiInstance: o.any.isRequired,
              chartWidget: o.any.isRequired,
              chartWidgetCollection: o.any.isRequired,
              resizerDetacher: o.any.isRequired,
            })
          const { resizerDetacher: l } = this.context
          ;(this.state = {
            isFullscreenable: l.fullscreenable.value(),
            isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton(),
          }),
            (this._resizeObserver = new ResizeObserver(this._handleMeasure))
        }
        componentDidMount() {
          const { onContentBoxChanged: e, resizerDetacher: t, chartWidgetCollection: s, chartWidget: a } = this.context
          e.subscribe(this, this._handleResize),
            t.fullscreenable.subscribe(this._handleFullscreenableChange),
            a.withModel(null, () => {
              const e = a.model(),
                t = e.model()
              e.mainSeries().isDWMProperty().subscribe(this, this._updateButtonsVisibility),
                t.symbolSourceResolvingActive().subscribe(this._updateButtonsVisibility),
                t.symbolSourceCollectionChanged().subscribe(this, this._updateButtonsVisibility),
                this._updateButtonsVisibility()
            }),
            this.updateTimezonesButton(),
            this.resizeUI()
        }
        componentWillUnmount() {
          var e
          const { onContentBoxChanged: t, resizerDetacher: s, chartWidgetCollection: a, chartWidget: i } = this.context
          t.unsubscribe(this, this._handleResize),
            s.fullscreenable.unsubscribe(this._handleFullscreenableChange),
            null === (e = this._resizeObserver) || void 0 === e || e.disconnect(),
            i.withModel(null, () => {
              const e = i.model(),
                t = e.model()
              e.mainSeries().isDWMProperty().unsubscribe(this, this._updateButtonsVisibility),
                e.mainSeries().isBackAdjustmentForbiddenProperty().unsubscribe(this, this._updateButtonsVisibility),
                e.mainSeries().isSettlementAsCloseForbiddenProperty().unsubscribe(this, this._updateButtonsVisibility),
                t.symbolSourceCollectionChanged().unsubscribe(this, this._updateButtonsVisibility),
                t.symbolSourceResolvingActive().unsubscribe(this._updateButtonsVisibility)
            }),
            null !== this._raf && (cancelAnimationFrame(this._raf), (this._raf = null))
        }
        render() {
          const e = this._layout,
            {
              timeFramesWidgetEnabled: t,
              timeWidgetEnabled: s,
              percentageScaleButtonEnabled: i,
              logScaleButtonEnabled: n,
              autoScaleButtonEnabled: o,
              fullscreenButtonEnabled: c,
            } = this.props
          return a.createElement(
            be.Toolbar,
            { className: Ie.toolbar, onContextMenu: Te.preventDefault, ref: this._handleToolbarRef },
            t &&
              a.createElement(
                ze.FragmentMap,
                null,
                a.createElement(
                  'div',
                  {
                    className: r(Ie.dateRangeWrapper, 'collapsed' !== e.dateRangeMode && Ie.collapsed),
                    ref: this._handleRangeCollapsedRef,
                  },
                  a.createElement(
                    'div',
                    { className: r(Ie.dateRangeCollapsed) },
                    a.createElement(B, { goToDateButton: this.props.goToDateEnabled })
                  )
                ),
                a.createElement(
                  'div',
                  {
                    className: r(Ie.dateRangeWrapper, 'expanded' !== e.dateRangeMode && Ie.collapsed),
                    ref: this._handleRangeExpandedRef,
                  },
                  a.createElement(
                    'div',
                    { className: r(Ie.dateRangeExpanded) },
                    a.createElement(V, { onSelectRange: this._trackRangeButtonClick }),
                    this.props.goToDateEnabled && a.createElement(ge, null),
                    this.props.goToDateEnabled && a.createElement(se, null)
                  )
                )
              ),
            a.createElement(
              'div',
              { className: Ie.seriesControlWrapper },
              s &&
                a.createElement(
                  'div',
                  { className: r(Ie.inline, e.timeZones && Ie.collapsed), ref: this._handleTimeZonesRef },
                  a.createElement(
                    'div',
                    { className: Ie.inline, onClick: this._trackTimezonesButtonClick },
                    a.createElement(me, {
                      className: Ie.timezone,
                      withMenu: this.props.timezoneMenuEnabled,
                      ref: this._handleTimezoneButtonRef,
                    })
                  )
                ),
              this.props.sessionIdButtonEnabled &&
                this.state.symbolAllowsSessionButton &&
                this.state.intervalAllowsSessionButton &&
                a.createElement(
                  'div',
                  { className: r(Ie.inline, e.session && Ie.collapsed), ref: this._handleSessionsRef },
                  a.createElement(
                    'div',
                    { className: Ie.inline },
                    a.createElement(Be, { className: Ie.session, withMenu: this.props.sessionIdButtonEnabled })
                  )
                ),
              a.createElement(
                'div',
                { ref: this._handleSeparatorRef, className: r(Ie.inline, e.separator && Ie.collapsed) },
                a.createElement(ge, null)
              ),
              a.createElement(
                ze.FragmentMap,
                { map: this._injector },
                !1,
                !1,
                !1,
                i && !l.enabled('fundamental_widget') && a.createElement(Ge, { className: Ie.icon }),
                n && a.createElement(Pe, { className: Ie.item }),
                o && a.createElement(Xe, { className: Ie.item }),
                c &&
                  this.state.isFullscreenable &&
                  a.createElement(qe, {
                    className: Ie.icon,
                    mobileChangeLayoutEnabled: this.props.mobileChangeLayoutEnabled,
                  }),
                !1
              )
            )
          )
        }
        updateTimezonesButton() {
          null !== this._timezoneButtonRef && this._timezoneButtonRef.updateTimezonesButton()
        }
        resizeUI() {
          this._handleResize()
        }
        _trackRangeButtonClick(e) {
          0
        }
        _trackTimezonesButtonClick() {
          Ze()
        }
        _setStateWithResize(e) {
          Object.assign(this._layout, $e), this._applyResizing(), this.setState(e, () => this._handleResize())
        }
        _applyResizing() {
          const { dateRangeMode: e, ...t } = this._layout
          this._rangeExpanded && this._rangeExpanded.classList.toggle(Ie.collapsed, 'expanded' !== e),
            this._rangeCollapsed && this._rangeCollapsed.classList.toggle(Ie.collapsed, 'collapsed' !== e),
            Object.keys(t).forEach((e) => {
              const s = e,
                a = this._seriesComponents[s]
              a && a.classList.toggle(Ie.collapsed, t[s])
            })
        }
        _isPreventPhoneLayoutButton() {
          return !1
        }
      }
      et.contextType = Qe
      const tt = {
        onContentBoxChanged: o.any,
        computeContentBox: o.any,
        chartWidget: o.any,
        chartApiInstance: o.any,
        chartWidgetCollection: o.any,
        resizerDetacher: o.any,
        availableTimeFrames: o.any,
      }
      class st extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._setActiveChart = (e) => {
              this._defineRegistry(e), this.setState({ chartWidget: e })
            })
          const t = this.props.chartWidgetCollection.activeChartWidget.value()
          ;(this.state = { chartWidget: t }), this._defineRegistry(t)
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._setActiveChart)
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._setActiveChart)
        }
        render() {
          const { chartWidget: e } = this.state
          if (!e) return null
          const { options: t } = this.props,
            s = {
              timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
              goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
              timeWidgetEnabled: t.timeWidgetEnabled,
              timezoneMenuEnabled: t.timeWidget && t.timeWidget.timezoneMenuEnabled,
              sessionIdButtonEnabled: t.sessionIdButtonEnabled,
              backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
              settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
              adjustForDividendsButtonEnabled: t.adjustForDividendsButtonEnabled,
              logScaleButtonEnabled: t.logScaleButtonEnabled,
              percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
              autoScaleButtonEnabled: t.autoScaleButtonEnabled,
              fullscreenButtonEnabled: t.fullscreenButtonEnabled,
              mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled,
            }
          return a.createElement(
            _.RegistryProvider,
            { validation: tt, value: this._registry },
            a.createElement(et, { key: e.id(), ...s })
          )
        }
        _defineRegistry(e) {
          const {
              onContentBoxChanged: t,
              computeContentBox: s,
              chartApiInstance: a,
              chartWidgetCollection: i,
              options: { timeFramesWidgetEnabled: n, timeFramesWidget: o },
            } = this.props,
            r = n ? o.availableTimeFrames : void 0
          this._registry = {
            onContentBoxChanged: t,
            computeContentBox: s,
            chartWidget: e,
            availableTimeFrames: r,
            chartApiInstance: a,
            chartWidgetCollection: i,
            resizerDetacher: e.getResizerDetacher(),
          }
        }
      }
      class at {
        constructor(e, t, s, n, o, r, l) {
          this._container = e
          const c = a.createElement(st, {
            onContentBoxChanged: t,
            computeContentBox: s,
            chartWidgetCollection: n,
            chartApiInstance: o,
            chartWidgetOptions: r,
            options: l,
          })
          i.render(c, e), e.setAttribute('data-initialized', 'true')
        }
        destroy() {
          i.unmountComponentAtNode(this._container), this._container.removeAttribute('data-initialized')
        }
      }
    },
    79978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    },
    83863: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>'
    },
    21868: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>'
    },
    39750: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
    },
    69311: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
    },
    90752: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>'
    },
    15270: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>'
    },
    38219: (e) => {
      e.exports = {
        ar: ['تعديل'],
        ca_ES: ['aj'],
        cs: 'adj',
        de: ['Anp.'],
        el: 'adj',
        en: 'adj',
        es: ['aj'],
        fa: 'adj',
        fr: 'adj',
        he_IL: ['התאם'],
        hu_HU: 'adj',
        id_ID: ['penyesuaian'],
        it: ['adg'],
        ja: ['調整'],
        ko: ['조정'],
        ms_MY: ['laras'],
        nl_NL: 'adj',
        pl: 'adj',
        pt: ['ajustes'],
        ro: 'adj',
        ru: ['коррект.'],
        sv: 'adj',
        th: 'adj',
        tr: ['dzlt'],
        vi: ['đ.chỉnh'],
        zh: ['调整'],
        zh_TW: ['調整'],
      }
    },
    53457: (e) => {
      e.exports = {
        ar: 'b-adj',
        ca_ES: 'b-adj',
        cs: 'b-adj',
        de: 'b-adj',
        el: 'b-adj',
        en: 'b-adj',
        es: 'b-adj',
        fa: 'b-adj',
        fr: 'b-adj',
        he_IL: 'b-adj',
        hu_HU: 'b-adj',
        id_ID: 'b-adj',
        it: ['b-adg'],
        ja: 'b-adj',
        ko: 'b-adj',
        ms_MY: 'b-adj',
        nl_NL: 'b-adj',
        pl: 'b-adj',
        pt: 'b-adj',
        ro: 'b-adj',
        ru: ['корр'],
        sv: 'b-adj',
        th: 'b-adj',
        tr: 'b-adj',
        vi: 'b-adj',
        zh: ['b-调整'],
        zh_TW: ['b-調整'],
      }
    },
    17077: (e) => {
      e.exports = {
        ar: ['ضبط'],
        ca_ES: 'set',
        cs: 'set',
        de: ['setzen'],
        el: 'set',
        en: 'set',
        es: 'set',
        fa: 'set',
        fr: ['fixer'],
        he_IL: ['הגדר'],
        hu_HU: 'set',
        id_ID: ['SET'],
        it: 'set',
        ja: 'set',
        ko: ['셋'],
        ms_MY: 'set',
        nl_NL: 'set',
        pl: ['ustaw'],
        pt: ['definir'],
        ro: 'set',
        ru: ['расч.цена'],
        sv: ['ställ in'],
        th: 'set',
        tr: 'set',
        vi: 'set',
        zh: ['清算价'],
        zh_TW: ['清算價'],
      }
    },
    99247: (e) => {
      e.exports = {
        ar: ['تلقائي'],
        ca_ES: 'auto',
        cs: ['automatické'],
        de: 'auto',
        el: ['αυτοματο'],
        en: 'auto',
        es: 'auto',
        fa: ['خودکار'],
        fr: ['automatique'],
        he_IL: ['אוטומטי'],
        hu_HU: 'auto',
        id_ID: 'auto',
        it: 'auto',
        ja: ['自動'],
        ko: ['자동'],
        ms_MY: 'auto',
        nl_NL: 'auto',
        pl: 'auto',
        pt: 'auto',
        ro: 'auto',
        ru: ['авто'],
        sv: 'auto',
        th: ['อัตโนมัติ'],
        tr: ['otomatik'],
        vi: ['tự động'],
        zh: ['自动'],
        zh_TW: ['自動'],
      }
    },
    885: (e) => {
      e.exports = {
        ar: ['لوغاريتمي'],
        ca_ES: 'log',
        cs: 'log',
        de: 'log',
        el: 'log',
        en: 'log',
        es: 'log',
        fa: 'log',
        fr: 'log',
        he_IL: ['לוג'],
        hu_HU: 'log',
        id_ID: 'log',
        it: 'log',
        ja: ['ログスケール'],
        ko: ['로그'],
        ms_MY: 'log',
        nl_NL: 'log',
        pl: 'log',
        pt: 'log',
        ro: 'log',
        ru: ['лог'],
        sv: ['logg'],
        th: ['ล็อก'],
        tr: 'log',
        vi: 'log',
        zh: 'log',
        zh_TW: 'log',
      }
    },
    9994: (e) => {
      e.exports = {
        ar: ['تعديل البيانات لأرباح الأسهم'],
        ca_ES: ['Ajusta dades dels dividends'],
        cs: 'Adjust data for dividends',
        de: ['Daten für Dividenden anpassen'],
        el: 'Adjust data for dividends',
        en: 'Adjust data for dividends',
        es: ['Ajustar datos de los dividendos'],
        fa: 'Adjust data for dividends',
        fr: ['Ajuster les données pour les dividendes'],
        he_IL: ['התאם נתונים לדיבידנדים'],
        hu_HU: 'Adjust data for dividends',
        id_ID: ['Sesuaikan data untuk dividen'],
        it: ['Adegua i dati a seconda dei dividendi'],
        ja: ['配当でデータを調整'],
        ko: ['배당에 따른 데이터 조정'],
        ms_MY: ['Laras data untuk dividen'],
        nl_NL: 'Adjust data for dividends',
        pl: ['Dopasuj dane według dywidend'],
        pt: ['Ajustar dados de dividendos'],
        ro: 'Adjust data for dividends',
        ru: ['Корректировать данные на дивиденды'],
        sv: ['Justera data för utdelning'],
        th: ['ปรับเปลี่ยนข้อมูลเนื่องจากเงินปันผล'],
        tr: ['Verileri temettülere göre düzelt'],
        vi: ['Điều chỉnh dữ liệu cho Cổ tức'],
        zh: ['调整股息数据'],
        zh_TW: ['調整股息數據'],
      }
    },
    10989: (e) => {
      e.exports = {
        ar: ['ضبط لتغييرات العقود'],
        ca_ES: ['Ajusta els canvis dels contractes'],
        cs: 'Adjust for contract changes',
        de: ['Veränderungen der Kontraktgrößen und Verfalltage'],
        el: 'Adjust for contract changes',
        en: 'Adjust for contract changes',
        es: ['Ajustar cambios de contrato'],
        fa: 'Adjust for contract changes',
        fr: ['Ajustement pour les changements de contrat'],
        he_IL: ['התאם לשינויים בחוזה'],
        hu_HU: 'Adjust for contract changes',
        id_ID: ['Penyesuaian untuk perubahan kontrak'],
        it: ['Incorpora variazioni dovute al cambio di contratto'],
        ja: ['限月の切り替えを調整'],
        ko: ['컨트랙트 변경 조절'],
        ms_MY: ['Laraskan untuk perubahan-perubahan kontrak'],
        nl_NL: 'Adjust for contract changes',
        pl: ['Dostosuj do zmian w kontrakcie'],
        pt: ['Ajustes para mudanças no contrato'],
        ro: 'Adjust for contract changes',
        ru: ['Корректировать с учётом изменений контрактов'],
        sv: ['Förändringar i avtalens storlek och datum för upphörande'],
        th: ['ปรับตามการเปลี่ยนแปลงสัญญา'],
        tr: ['Sözleşme değişiklikleri için ayarlama'],
        vi: ['Điều chỉnh để thay đổi hợp đồng'],
        zh: ['根据合约变更调整'],
        zh_TW: ['調整合約變更'],
      }
    },
    369: (e) => {
      e.exports = {
        ar: ['الذهاب إلى'],
        ca_ES: ['Anar a'],
        cs: 'Go to',
        de: ['Gehe zu'],
        el: 'Go to',
        en: 'Go to',
        es: ['Ir a'],
        fa: ['برو به'],
        fr: ['Aller à'],
        he_IL: ['עבור ל'],
        hu_HU: ['Ugrás ide:'],
        id_ID: ['Menuju ke'],
        it: ['Vai a'],
        ja: ['移動'],
        ko: ['가기'],
        ms_MY: ['Pergi ke'],
        nl_NL: 'Go to',
        pl: ['Idź do...'],
        pt: ['Ir para'],
        ro: 'Go to',
        ru: ['Перейти к дате'],
        sv: ['Gå till'],
        th: ['ไปที่'],
        tr: ['Tarihe git'],
        vi: ['Đến'],
        zh: ['前往到'],
        zh_TW: ['前往到'],
      }
    },
    41421: (e) => {
      e.exports = {
        ar: ['ساعات التداول المُمددة متاحة فقط على النطاقات الصغرى خلال اليوم للرسوم البيانية'],
        ca_ES: ["L'horari ampliat només està disponible per a gràfics intradia"],
        cs: 'Extended Hours is available only for intraday charts',
        de: ['Verlängerte Handelszeiten sind nur für Intraday-Charts verfügbar'],
        el: 'Extended Hours is available only for intraday charts',
        en: 'Extended Hours is available only for intraday charts',
        es: ['El horario ampliado solo se encuentra disponible para gráficos intradía'],
        fa: 'Extended Hours is available only for intraday charts',
        fr: ["L'option Horaires étendus est disponible uniquement pour les graphiques intrajournaliers"],
        he_IL: ['שעות מורחבות זמינות רק עבור גרפים תוך-יומיים'],
        hu_HU: 'Extended Hours is available only for intraday charts',
        id_ID: ['Jam Perpanjangan hanya tersedia bagi chart intrahari'],
        it: ['Gli orari di negoziazione estesi sono disponibili solo per i grafici intraday'],
        ja: ['時間外取引の機能は、イントラデイのチャートでのみ利用できます'],
        ko: ['확장시간은 인트라데이 차트에서만 가능합니다'],
        ms_MY: ['Waktu Dilanjutkan hanya tersedia untuk carta intra hari'],
        nl_NL: 'Extended Hours is available only for intraday charts',
        pl: ['Sesja rozszerzona dostępna jest wyłącznie dla wykresów intraday'],
        pt: ['O Horário Estendido está disponível apenas para gráficos intradiário'],
        ro: 'Extended Hours is available only for intraday charts',
        ru: ['Функция расширенных торговых часов доступна только для внутридневных графиков'],
        sv: ['Utökade timmar är endast tillgänglig för intradagsdiagram'],
        th: ['ชั่วโมงที่เพิ่มเติมขึ้นมาใช้ได้สำหรับกราฟแบบระหว่างวันเท่านั้น'],
        tr: ['Uzatılmış saatler sadece gün içi grafiklerde kullanılabilir'],
        vi: ['Tính năng Thời gian Giao dịch Ngoài giờ chỉ có sẵn cho các biểu đồ trong ngày'],
        zh: ['延长时段仅适用于日内图表'],
        zh_TW: ['延長時段僅適用於日內圖表'],
      }
    },
    1217: (e) => {
      e.exports = {
        ar: ['يتم ضبط بيانات الرمز الرئيسي لتوزيعات الأرباح فقط'],
        ca_ES: ["Les dades del símbol principal s'ajusten només als dividends"],
        cs: 'Main symbol data is adjusted for dividends only',
        de: ['Die Daten des Hauptsymbols sind nur für die Dividenden angepasst'],
        el: 'Main symbol data is adjusted for dividends only',
        en: 'Main symbol data is adjusted for dividends only',
        es: ['Los datos del símbolo principal se ajustan solo a los dividendos'],
        fa: 'Main symbol data is adjusted for dividends only',
        fr: ['Les données du symbole principal sont ajustées pour les dividendes uniquement'],
        he_IL: ['הנתונים של הסימול הראשי מותאמים לדיבידנדים בלבד'],
        hu_HU: 'Main symbol data is adjusted for dividends only',
        id_ID: ['Data simbol utama disesuaikan hanya untuk deviden'],
        it: ['I dati del simbolo principale sono adeguati solo per lo stacco dei dividendi'],
        ja: ['メインシンボルのデータは配当のみで調整されています'],
        ko: ['메인 심볼 데이터는 디비든드에 대해서만 조정됩니다'],
        ms_MY: ['Data utama simbol adalah diselaraskan untuk dividend sahaja'],
        nl_NL: 'Main symbol data is adjusted for dividends only',
        pl: ['Dane głównego symbolu są dostosowywane tylko do dywidend'],
        pt: ['Os dados do símbolo principal são ajustados apenas para dividendos'],
        ro: 'Main symbol data is adjusted for dividends only',
        ru: ['Данные по основному инструменту корректируются только для дивидендов'],
        sv: ['Uppgifterna om huvudsymbolen justeras endast för utdelningar.'],
        th: ['ข้อมูลสัญลักษณ์หลักถูกปรับเป็นเงินปันผลเท่านั้น'],
        tr: ['Ana sembol verileri yalnızca temettüler için ayarlanır'],
        vi: ['Dữ liệu của mã chính chỉ được điều chỉnh cho cổ tức'],
        zh: ['主要商品数据仅针对股息进行调整'],
        zh_TW: ['主要商品數據僅針對股息進行調整'],
      }
    },
    27662: (e) => {
      e.exports = {
        ar: ['يتم ضبط بيانات الرمز الرئيسي للتقسيمات فقط'],
        ca_ES: ["Les dades del símbol principal s'ajusten només als splits"],
        cs: 'Main symbol data is adjusted for splits only',
        de: ['Die Daten des Hauptsymbols werden nur für Splits angepasst'],
        el: 'Main symbol data is adjusted for splits only',
        en: 'Main symbol data is adjusted for splits only',
        es: ['Los datos del símbolo principal se ajustan solo a los splits'],
        fa: 'Main symbol data is adjusted for splits only',
        fr: ['Les données du symbole principal sont ajustées pour les fractions uniquement'],
        he_IL: ['הנתונים של הסימול הראשי מותאמים לספליטים בלבד'],
        hu_HU: 'Main symbol data is adjusted for splits only',
        id_ID: ['Data simbol utama disesuaikan hanya untuk pecahan.'],
        it: ['I dati del simbolo principale sono adeguati solo per i frazionamenti'],
        ja: ['メインシンボルのデータは株式分割でのみ調整されています'],
        ko: ['메인 심볼 데이터는 스플릿에 대해서만 조정됩니다'],
        ms_MY: ['Data utama simbol adalah diselaraskan untuk pembahagian sahaja'],
        nl_NL: 'Main symbol data is adjusted for splits only',
        pl: ['Dane głównego symbolu są dostosowywane tylko do podziałów'],
        pt: ['Os dados do símbolo principal são ajustados apenas para desdobramentos'],
        ro: 'Main symbol data is adjusted for splits only',
        ru: ['Данные по основному инструменту корректируются только для сплитов'],
        sv: ['Uppgifter om huvudsymbolen justeras endast för splits.'],
        th: ['ข้อมูลสัญลักษณ์หลักถูกปรับสำหรับการแยกเท่านั้น'],
        tr: ['Ana sembol verileri yalnızca bölmeler için ayarlanır'],
        vi: ['Dữ liệu của mã chính chỉ được điều chỉnh để tách'],
        zh: ['主要商品数据仅针对拆分进行调整'],
        zh_TW: ['主要商品數據僅針對拆分進行調整'],
      }
    },
    44794: (e) => {
      e.exports = {
        ar: ['الجلسات'],
        ca_ES: 'Sessions',
        cs: 'Sessions',
        de: 'Sessions',
        el: 'Sessions',
        en: 'Sessions',
        es: ['Sesiones'],
        fa: 'Sessions',
        fr: 'Sessions',
        he_IL: ['סשנים'],
        hu_HU: 'Sessions',
        id_ID: ['Sesi'],
        it: ['Sessioni'],
        ja: ['セッション'],
        ko: ['세션'],
        ms_MY: ['Sesi-sesi'],
        nl_NL: 'Sessions',
        pl: ['Sesje'],
        pt: ['Sessões'],
        ro: 'Sessions',
        ru: ['Сессии'],
        sv: ['Sessioner'],
        th: ['เซสชั่น'],
        tr: ['Oturum'],
        vi: ['Phiên'],
        zh: ['交易时段'],
        zh_TW: ['交易時段'],
      }
    },
    98948: (e) => {
      e.exports = {
        ar: ['تبديل تكبير الرسم البياني'],
        ca_ES: ['Alterna maximitzar gràfic'],
        cs: 'Toggle Maximize Chart',
        de: ['Auf maximierten Chart umschalten'],
        el: 'Toggle Maximize Chart',
        en: 'Toggle Maximize Chart',
        es: ['Alternar maximizar gráfico'],
        fa: 'Toggle Maximize Chart',
        fr: ['Agrandir le graphique'],
        he_IL: ['החלף לגרף מקסימלי'],
        hu_HU: ['Maximális Chat Kiterjesztése'],
        id_ID: ['Toggle Memperbesar Chart'],
        it: ['Espandi/riduci grafico'],
        ja: ['チャート最大化切り替え'],
        ko: ['차트최대화토글'],
        ms_MY: ['Carta Memaksimumkan Togol'],
        nl_NL: 'Toggle Maximize Chart',
        pl: ['Maksymalizuj wykres'],
        pt: ['Alternar para gráfico maximizado'],
        ro: 'Toggle Maximize Chart',
        ru: ['Развернуть/свернуть график'],
        sv: ['Slå på/av maximering av diagram'],
        th: ['สลับเป็นชาร์ตขนาดใหญ่ที่สุด'],
        tr: ['Grafik Maksimize Değiştir'],
        vi: ['Chuyển đổi Tối đa hoá Biểu đồ'],
        zh: ['切换为最大化图表'],
        zh_TW: ['切換最大化圖表'],
      }
    },
    60879: (e) => {
      e.exports = {
        ar: ['نطاق قياس تلقائي'],
        ca_ES: ["Alterna l'escala automàtica"],
        cs: ['Přepnout na Auto Stupnici'],
        de: ['Auf automatische Skalierung umschalten'],
        el: ['Αυτόματη κλίμακα'],
        en: 'Toggle Auto Scale',
        es: ['Alternar escala automática'],
        fa: 'Toggle Auto Scale',
        fr: ["Mise à l'échelle automatique"],
        he_IL: ['הפעל/כבה קנה מידה אוטומטיות'],
        hu_HU: ['Váltás Automata Méretezés'],
        id_ID: ['Toggle Skala Otomatis'],
        it: ['Seleziona/deseleziona scala automatica'],
        ja: ['自動スケール切り替え'],
        ko: ['자동눈금토글'],
        ms_MY: ['Skala Auto Togol'],
        nl_NL: ['Schakel autoschaal'],
        pl: ['Włącz skalę automatyczną'],
        pt: ['Alternar Para Escala Automática'],
        ro: 'Toggle Auto Scale',
        ru: ['Автоматический масштаб вкл/выкл'],
        sv: ['Växla skala automatiskt'],
        th: ['สลับเป็นสเกลอัตโนมัติ'],
        tr: ['Otomatik Ölçeklendirmeyi Aç/Kapat'],
        vi: ['Chuyển đổi Tỷ lệ tự động'],
        zh: ['切换为自动坐标'],
        zh_TW: ['切換為自動刻度'],
      }
    },
    21329: (e) => {
      e.exports = {
        ar: ['نطاق قياس لوغاريتمي'],
        ca_ES: ["Alterna l'escala logarítmica"],
        cs: ['Přepnout Log Měřítko'],
        de: ['Auf logarithmische Skalierung umschalten'],
        el: ['Λογαριθμική κλίμακα'],
        en: 'Toggle Log Scale',
        es: ['Alternar escala logarítmica'],
        fa: 'Toggle Log Scale',
        fr: ["Mise à l'échelle logarithmique"],
        he_IL: ['הפעל/כבה סקאלה לוגריתמית'],
        hu_HU: ['Váltás Log Skála'],
        id_ID: ['Toggle Skala Log'],
        it: ['Seleziona/Deseleziona scala logaritmica'],
        ja: ['ログスケール切り替え'],
        ko: ['로그눈금토글'],
        ms_MY: ['Skala Log Togol'],
        nl_NL: ['Schakel log schaal'],
        pl: ['Przełącz na skalę logarytmiczną'],
        pt: ['Alternar Para Escala Logarítmica'],
        ro: 'Toggle Log Scale',
        ru: ['Логарифмическая шкала вкл/выкл'],
        sv: ['Slå på/av Log-skala'],
        th: ['สลับเป็นมาตราแบบล๊อก'],
        tr: ['Logaritmik Ölçeklendirmeyi Aç/Kapat'],
        vi: ['Chuyển đổi Quy mô Đăng nhập'],
        zh: ['切换为对数坐标'],
        zh_TW: ['切換為對數刻度'],
      }
    },
    43737: (e) => {
      e.exports = {
        ar: ['نطاق قياس النسبة المئوية'],
        ca_ES: ['Altarna percentatge'],
        cs: ['Přepnout na Procenta'],
        de: ['Auf Prozent umschalten'],
        el: ['Ποσοστιαία κλίμακα'],
        en: 'Toggle Percentage',
        es: ['Alternar porcentaje'],
        fa: 'Toggle Percentage',
        fr: ['Echelle en pourcentage'],
        he_IL: ['החלף אחוזים'],
        hu_HU: ['Váltás Százalék'],
        id_ID: ['Toggle Persentase'],
        it: ['Seleziona/Deseleziona percentuale'],
        ja: ['％スケール切り替え'],
        ko: ['백분율토글'],
        ms_MY: ['Peratusan Togol'],
        nl_NL: ['Schakel percentage'],
        pl: ['Włącz skalę procentową'],
        pt: ['Alternar Para Percentagem'],
        ro: 'Toggle Percentage',
        ru: ['Процентная шкала вкл/выкл'],
        sv: ['Slå på/av procentsats'],
        th: ['สลับเป็นเปอร์เซ็นต์'],
        tr: ['Yüzde Olarak Değiştir'],
        vi: ['Chuyển đồi Phần trăm'],
        zh: ['切换为百分比坐标'],
        zh_TW: ['切換為百分比'],
      }
    },
    87492: (e) => {
      e.exports = {
        ar: ['توقيت'],
        ca_ES: ['Zona horària'],
        cs: ['Časové pásmo'],
        de: ['Zeitzone'],
        el: 'Timezone',
        en: 'Timezone',
        es: ['Zona horaria'],
        fa: 'Timezone',
        fr: ['Fuseau horaire'],
        he_IL: ['אזור זמן'],
        hu_HU: ['Időzóna'],
        id_ID: ['Zona waktu'],
        it: ['Fuso orario'],
        ja: ['タイムゾーン'],
        ko: ['타임존'],
        ms_MY: ['Zon Waktu'],
        nl_NL: 'Timezone',
        pl: ['Strefa czasowa'],
        pt: ['Fuso Horário'],
        ro: 'Timezone',
        ru: ['Часовой пояс'],
        sv: ['Tidszon'],
        th: ['เขตเวลา'],
        tr: ['Saat Dilimi'],
        vi: ['Múi giờ'],
        zh: ['时区'],
        zh_TW: ['時區'],
      }
    },
    99983: (e) => {
      e.exports = {
        ar: ['استخدم التسوية في أقرب وقت على الفاصل الزمني اليومي'],
        ca_ES: ['Fer servir la liquidació com a tancament en intervals diaris'],
        cs: 'Use settlement as close on daily interval',
        de: ['Settlement als Schlusskurs im Tagesintervall verwenden'],
        el: 'Use settlement as close on daily interval',
        en: 'Use settlement as close on daily interval',
        es: ['Utilizar la liquidación como cierre en intervalos diarios'],
        fa: 'Use settlement as close on daily interval',
        fr: ["Utiliser le règlement comme proche de l'intervalle quotidien"],
        he_IL: ['השתמש בסליקה כסגירה באינטרוול יומי'],
        hu_HU: 'Use settlement as close on daily interval',
        id_ID: ['Gunakan penyelesaian sedekat mungkin pada interval harian'],
        it: ['Usa il settlement come chiusura nel giornaliero'],
        ja: ['日足で清算価格を終値として利用'],
        ko: ['데일리 클로즈를 청산가로 쓰기'],
        ms_MY: ['Gunakan penyelesaian sebagai penutup pada selang masa harian'],
        nl_NL: 'Use settlement as close on daily interval',
        pl: ['Użyj ceny rozliczenia jako dziennej ceny zamknięcia'],
        pt: ['Usar a liquidação como fechamento no intervalo diário'],
        ro: 'Use settlement as close on daily interval',
        ru: ['Использовать расчетную цену для цены закрытия на дневном интервале'],
        sv: ['Använd avräkning så nära daglig intervallängd'],
        th: ['ใช้การชำระราคาที่ใกล้เคียงกันในแต่ละวัน'],
        tr: ['Ödemeyi günlük aralıklarla yakın olarak kullanma'],
        vi: ['Sử dụng giải quyết càng gần vào khoảng thời gian hàng ngày'],
        zh: ['使用结算价作为每日周期的收盘价'],
        zh_TW: ['使用結算價做為日圖的收盤價'],
      }
    },
    8877: (e) => {
      e.exports = {
        ar: 'ext',
        ca_ES: 'ext',
        cs: 'ext',
        de: ['verl.'],
        el: 'ext',
        en: 'ext',
        es: 'ext',
        fa: 'ext',
        fr: 'ext',
        he_IL: ['הרחב'],
        hu_HU: 'ext',
        id_ID: ['perp'],
        it: ['est'],
        ja: ['時間外'],
        ko: ['확장'],
        ms_MY: ['dilanjutkan'],
        nl_NL: 'ext',
        pl: ['rozsz'],
        pt: ['est'],
        ro: 'ext',
        ru: ['расш'],
        sv: ['utökad'],
        th: ['ต่อ'],
        tr: ['ek'],
        vi: ['mở rộng'],
        zh: ['延时'],
        zh_TW: ['延時'],
      }
    },
  },
])
