;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2842, 8180, 2215],
  {
    59255: (t, e, r) => {
      'use strict'
      r.r(e), r.d(e, { default: () => I })
      var n = (function () {
          if ('undefined' != typeof Map) return Map
          function t(t, e) {
            var r = -1
            return (
              t.some(function (t, n) {
                return t[0] === e && ((r = n), !0)
              }),
              r
            )
          }
          return (function () {
            function e() {
              this.__entries__ = []
            }
            return (
              Object.defineProperty(e.prototype, 'size', {
                get: function () {
                  return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var r = t(this.__entries__, e),
                  n = this.__entries__[r]
                return n && n[1]
              }),
              (e.prototype.set = function (e, r) {
                var n = t(this.__entries__, e)
                ~n ? (this.__entries__[n][1] = r) : this.__entries__.push([e, r])
              }),
              (e.prototype.delete = function (e) {
                var r = this.__entries__,
                  n = t(r, e)
                ~n && r.splice(n, 1)
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e)
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0)
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null)
                for (var r = 0, n = this.__entries__; r < n.length; r++) {
                  var o = n[r]
                  t.call(e, o[1], o[0])
                }
              }),
              e
            )
          })()
        })(),
        o = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
        i =
          void 0 !== r.g && r.g.Math === Math
            ? r.g
            : 'undefined' != typeof self && self.Math === Math
            ? self
            : 'undefined' != typeof window && window.Math === Math
            ? window
            : Function('return this')(),
        s =
          'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(i)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now())
                }, 1e3 / 60)
              }
      var a = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
        c = 'undefined' != typeof MutationObserver,
        u = (function () {
          function t() {
            ;(this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var r = !1,
                  n = !1,
                  o = 0
                function i() {
                  r && ((r = !1), t()), n && c()
                }
                function a() {
                  s(i)
                }
                function c() {
                  var t = Date.now()
                  if (r) {
                    if (t - o < 2) return
                    n = !0
                  } else (r = !0), (n = !1), setTimeout(a, e)
                  o = t
                }
                return c
              })(this.refresh.bind(this), 20))
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                r = e.indexOf(t)
              ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh()
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive()
              })
              return (
                t.forEach(function (t) {
                  return t.broadcastActive()
                }),
                t.length > 0
              )
            }),
            (t.prototype.connect_ = function () {
              o &&
                !this.connected_ &&
                (document.addEventListener('transitionend', this.onTransitionEnd_),
                window.addEventListener('resize', this.refresh),
                c
                  ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener('DOMSubtreeModified', this.refresh), (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0))
            }),
            (t.prototype.disconnect_ = function () {
              o &&
                this.connected_ &&
                (document.removeEventListener('transitionend', this.onTransitionEnd_),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1))
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                r = void 0 === e ? '' : e
              a.some(function (t) {
                return !!~r.indexOf(t)
              }) && this.refresh()
            }),
            (t.getInstance = function () {
              return this.instance_ || (this.instance_ = new t()), this.instance_
            }),
            (t.instance_ = null),
            t
          )
        })(),
        l = function (t, e) {
          for (var r = 0, n = Object.keys(e); r < n.length; r++) {
            var o = n[r]
            Object.defineProperty(t, o, { value: e[o], enumerable: !1, writable: !1, configurable: !0 })
          }
          return t
        },
        f = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || i
        },
        h = _(0, 0, 0, 0)
      function d(t) {
        return parseFloat(t) || 0
      }
      function p(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
        return e.reduce(function (e, r) {
          return e + d(t['border-' + r + '-width'])
        }, 0)
      }
      function v(t) {
        var e = t.clientWidth,
          r = t.clientHeight
        if (!e && !r) return h
        var n = f(t).getComputedStyle(t),
          o = (function (t) {
            for (var e = {}, r = 0, n = ['top', 'right', 'bottom', 'left']; r < n.length; r++) {
              var o = n[r],
                i = t['padding-' + o]
              e[o] = d(i)
            }
            return e
          })(n),
          i = o.left + o.right,
          s = o.top + o.bottom,
          a = d(n.width),
          c = d(n.height)
        if (
          ('border-box' === n.boxSizing &&
            (Math.round(a + i) !== e && (a -= p(n, 'left', 'right') + i),
            Math.round(c + s) !== r && (c -= p(n, 'top', 'bottom') + s)),
          !(function (t) {
            return t === f(t).document.documentElement
          })(t))
        ) {
          var u = Math.round(a + i) - e,
            l = Math.round(c + s) - r
          1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(l) && (c -= l)
        }
        return _(o.left, o.top, a, c)
      }
      var m =
        'undefined' != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof f(t).SVGGraphicsElement
            }
          : function (t) {
              return t instanceof f(t).SVGElement && 'function' == typeof t.getBBox
            }
      function y(t) {
        return o
          ? m(t)
            ? (function (t) {
                var e = t.getBBox()
                return _(0, 0, e.width, e.height)
              })(t)
            : v(t)
          : h
      }
      function _(t, e, r, n) {
        return { x: t, y: e, width: r, height: n }
      }
      var g = (function () {
          function t(t) {
            ;(this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = _(0, 0, 0, 0)),
              (this.target = t)
          }
          return (
            (t.prototype.isActive = function () {
              var t = y(this.target)
              return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_
              return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
            }),
            t
          )
        })(),
        b = function (t, e) {
          var r,
            n,
            o,
            i,
            s,
            a,
            c,
            u =
              ((n = (r = e).x),
              (o = r.y),
              (i = r.width),
              (s = r.height),
              (a = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
              (c = Object.create(a.prototype)),
              l(c, { x: n, y: o, width: i, height: s, top: o, right: n + i, bottom: s + o, left: n }),
              c)
          l(this, { target: t, contentRect: u })
        },
        S = (function () {
          function t(t, e, r) {
            if (((this.activeObservations_ = []), (this.observations_ = new n()), 'function' != typeof t))
              throw new TypeError('The callback provided as parameter 1 is not a function.')
            ;(this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r)
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
                var e = this.observations_
                e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh())
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
                var e = this.observations_
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }),
            (t.prototype.gatherActive = function () {
              var t = this
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e)
                })
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new b(t.target, t.broadcastRect())
                  })
                this.callback_.call(t, e, t), this.clearActive()
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0)
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0
            }),
            t
          )
        })(),
        w = 'undefined' != typeof WeakMap ? new WeakMap() : new n(),
        O = function t(e) {
          if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.')
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
          var r = u.getInstance(),
            n = new S(e, r, this)
          w.set(this, n)
        }
      ;['observe', 'unobserve', 'disconnect'].forEach(function (t) {
        O.prototype[t] = function () {
          var e
          return (e = w.get(this))[t].apply(e, arguments)
        }
      })
      const I = void 0 !== i.ResizeObserver ? i.ResizeObserver : O
    },
    97754: (t, e) => {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) t.push(r)
              else if (Array.isArray(r) && r.length) {
                var s = o.apply(null, r)
                s && t.push(s)
              } else if ('object' === i) for (var a in r) n.call(r, a) && r[a] && t.push(a)
            }
          }
          return t.join(' ')
        }
        t.exports
          ? ((o.default = o), (t.exports = o))
          : void 0 ===
              (r = function () {
                return o
              }.apply(e, [])) || (t.exports = r)
      })()
    },
    20037: (t, e, r) => {
      'use strict'
      function n() {
        return (
          (n =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          n.apply(this, arguments)
        )
      }
      function o(t, e) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          o(t, e)
        )
      }
      function i(t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), o(t, e)
      }
      function s(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      r.d(e, { FixedSizeList: () => I, VariableSizeList: () => O })
      var a =
        Number.isNaN ||
        function (t) {
          return 'number' == typeof t && t != t
        }
      function c(t, e) {
        if (t.length !== e.length) return !1
        for (var r = 0; r < t.length; r++) if (((n = t[r]), (o = e[r]), !(n === o || (a(n) && a(o))))) return !1
        var n, o
        return !0
      }
      const u = function (t, e) {
        var r
        void 0 === e && (e = c)
        var n,
          o = [],
          i = !1
        return function () {
          for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a]
          return (i && r === this && e(s, o)) || ((n = t.apply(this, s)), (i = !0), (r = this), (o = s)), n
        }
      }
      var l = r(50959),
        f =
          'object' == typeof performance && 'function' == typeof performance.now
            ? function () {
                return performance.now()
              }
            : function () {
                return Date.now()
              }
      function h(t) {
        cancelAnimationFrame(t.id)
      }
      function d(t, e) {
        var r = f()
        var n = {
          id: requestAnimationFrame(function o() {
            f() - r >= e ? t.call(null) : (n.id = requestAnimationFrame(o))
          }),
        }
        return n
      }
      var p = null
      function v(t) {
        if ((void 0 === t && (t = !1), null === p || t)) {
          var e = document.createElement('div'),
            r = e.style
          ;(r.width = '50px'), (r.height = '50px'), (r.overflow = 'scroll'), (r.direction = 'rtl')
          var n = document.createElement('div'),
            o = n.style
          return (
            (o.width = '100px'),
            (o.height = '100px'),
            e.appendChild(n),
            document.body.appendChild(e),
            e.scrollLeft > 0
              ? (p = 'positive-descending')
              : ((e.scrollLeft = 1), (p = 0 === e.scrollLeft ? 'negative' : 'positive-ascending')),
            document.body.removeChild(e),
            p
          )
        }
        return p
      }
      var m = function (t, e) {
        return t
      }
      function y(t) {
        var e,
          r,
          o = t.getItemOffset,
          a = t.getEstimatedTotalSize,
          c = t.getItemSize,
          f = t.getOffsetForIndexAndAlignment,
          p = t.getStartIndexForOffset,
          y = t.getStopIndexForStartIndex,
          g = t.initInstanceProps,
          b = t.shouldResetStyleCacheOnItemSizeChange,
          S = t.validateProps
        return (
          (r = e =
            (function (t) {
              function e(e) {
                var r
                return (
                  ((r = t.call(this, e) || this)._instanceProps = g(r.props, s(s(r)))),
                  (r._outerRef = void 0),
                  (r._resetIsScrollingTimeoutId = null),
                  (r.state = {
                    instance: s(s(r)),
                    isScrolling: !1,
                    scrollDirection: 'forward',
                    scrollOffset: 'number' == typeof r.props.initialScrollOffset ? r.props.initialScrollOffset : 0,
                    scrollUpdateWasRequested: !1,
                  }),
                  (r._callOnItemsRendered = void 0),
                  (r._callOnItemsRendered = u(function (t, e, n, o) {
                    return r.props.onItemsRendered({
                      overscanStartIndex: t,
                      overscanStopIndex: e,
                      visibleStartIndex: n,
                      visibleStopIndex: o,
                    })
                  })),
                  (r._callOnScroll = void 0),
                  (r._callOnScroll = u(function (t, e, n) {
                    return r.props.onScroll({ scrollDirection: t, scrollOffset: e, scrollUpdateWasRequested: n })
                  })),
                  (r._getItemStyle = void 0),
                  (r._getItemStyle = function (t) {
                    var e,
                      n = r.props,
                      i = n.direction,
                      s = n.itemSize,
                      a = n.layout,
                      u = r._getItemStyleCache(b && s, b && a, b && i)
                    if (u.hasOwnProperty(t)) e = u[t]
                    else {
                      var l = o(r.props, t, r._instanceProps),
                        f = c(r.props, t, r._instanceProps),
                        h = 'horizontal' === i || 'horizontal' === a,
                        d = 'rtl' === i,
                        p = h ? l : 0
                      u[t] = e = {
                        position: 'absolute',
                        left: d ? void 0 : p,
                        right: d ? p : void 0,
                        top: h ? 0 : l,
                        height: h ? '100%' : f,
                        width: h ? f : '100%',
                      }
                    }
                    return e
                  }),
                  (r._getItemStyleCache = void 0),
                  (r._getItemStyleCache = u(function (t, e, r) {
                    return {}
                  })),
                  (r._onScrollHorizontal = function (t) {
                    var e = t.currentTarget,
                      n = e.clientWidth,
                      o = e.scrollLeft,
                      i = e.scrollWidth
                    r.setState(function (t) {
                      if (t.scrollOffset === o) return null
                      var e = r.props.direction,
                        s = o
                      if ('rtl' === e)
                        switch (v()) {
                          case 'negative':
                            s = -o
                            break
                          case 'positive-descending':
                            s = i - n - o
                        }
                      return (
                        (s = Math.max(0, Math.min(s, i - n))),
                        {
                          isScrolling: !0,
                          scrollDirection: t.scrollOffset < o ? 'forward' : 'backward',
                          scrollOffset: s,
                          scrollUpdateWasRequested: !1,
                        }
                      )
                    }, r._resetIsScrollingDebounced)
                  }),
                  (r._onScrollVertical = function (t) {
                    var e = t.currentTarget,
                      n = e.clientHeight,
                      o = e.scrollHeight,
                      i = e.scrollTop
                    r.setState(function (t) {
                      if (t.scrollOffset === i) return null
                      var e = Math.max(0, Math.min(i, o - n))
                      return {
                        isScrolling: !0,
                        scrollDirection: t.scrollOffset < e ? 'forward' : 'backward',
                        scrollOffset: e,
                        scrollUpdateWasRequested: !1,
                      }
                    }, r._resetIsScrollingDebounced)
                  }),
                  (r._outerRefSetter = function (t) {
                    var e = r.props.outerRef
                    ;(r._outerRef = t),
                      'function' == typeof e
                        ? e(t)
                        : null != e && 'object' == typeof e && e.hasOwnProperty('current') && (e.current = t)
                  }),
                  (r._resetIsScrollingDebounced = function () {
                    null !== r._resetIsScrollingTimeoutId && h(r._resetIsScrollingTimeoutId),
                      (r._resetIsScrollingTimeoutId = d(r._resetIsScrolling, 150))
                  }),
                  (r._resetIsScrolling = function () {
                    ;(r._resetIsScrollingTimeoutId = null),
                      r.setState({ isScrolling: !1 }, function () {
                        r._getItemStyleCache(-1, null)
                      })
                  }),
                  r
                )
              }
              i(e, t),
                (e.getDerivedStateFromProps = function (t, e) {
                  return _(t, e), S(t), null
                })
              var r = e.prototype
              return (
                (r.scrollTo = function (t) {
                  ;(t = Math.max(0, t)),
                    this.setState(function (e) {
                      return e.scrollOffset === t
                        ? null
                        : {
                            scrollDirection: e.scrollOffset < t ? 'forward' : 'backward',
                            scrollOffset: t,
                            scrollUpdateWasRequested: !0,
                          }
                    }, this._resetIsScrollingDebounced)
                }),
                (r.scrollToItem = function (t, e) {
                  void 0 === e && (e = 'auto')
                  var r = this.props.itemCount,
                    n = this.state.scrollOffset
                  ;(t = Math.max(0, Math.min(t, r - 1))), this.scrollTo(f(this.props, t, e, n, this._instanceProps))
                }),
                (r.componentDidMount = function () {
                  var t = this.props,
                    e = t.direction,
                    r = t.initialScrollOffset,
                    n = t.layout
                  if ('number' == typeof r && null != this._outerRef) {
                    var o = this._outerRef
                    'horizontal' === e || 'horizontal' === n ? (o.scrollLeft = r) : (o.scrollTop = r)
                  }
                  this._callPropsCallbacks()
                }),
                (r.componentDidUpdate = function () {
                  var t = this.props,
                    e = t.direction,
                    r = t.layout,
                    n = this.state,
                    o = n.scrollOffset
                  if (n.scrollUpdateWasRequested && null != this._outerRef) {
                    var i = this._outerRef
                    if ('horizontal' === e || 'horizontal' === r)
                      if ('rtl' === e)
                        switch (v()) {
                          case 'negative':
                            i.scrollLeft = -o
                            break
                          case 'positive-ascending':
                            i.scrollLeft = o
                            break
                          default:
                            var s = i.clientWidth,
                              a = i.scrollWidth
                            i.scrollLeft = a - s - o
                        }
                      else i.scrollLeft = o
                    else i.scrollTop = o
                  }
                  this._callPropsCallbacks()
                }),
                (r.componentWillUnmount = function () {
                  null !== this._resetIsScrollingTimeoutId && h(this._resetIsScrollingTimeoutId)
                }),
                (r.render = function () {
                  var t = this.props,
                    e = t.children,
                    r = t.className,
                    o = t.direction,
                    i = t.height,
                    s = t.innerRef,
                    c = t.innerElementType,
                    u = t.innerTagName,
                    f = t.itemCount,
                    h = t.itemData,
                    d = t.itemKey,
                    p = void 0 === d ? m : d,
                    v = t.layout,
                    y = t.outerElementType,
                    _ = t.outerTagName,
                    g = t.style,
                    b = t.useIsScrolling,
                    S = t.width,
                    w = this.state.isScrolling,
                    O = 'horizontal' === o || 'horizontal' === v,
                    I = O ? this._onScrollHorizontal : this._onScrollVertical,
                    M = this._getRangeToRender(),
                    E = M[0],
                    x = M[1],
                    R = []
                  if (f > 0)
                    for (var z = E; z <= x; z++)
                      R.push(
                        (0, l.createElement)(e, {
                          data: h,
                          key: p(z, h),
                          index: z,
                          isScrolling: b ? w : void 0,
                          style: this._getItemStyle(z),
                        })
                      )
                  var C = a(this.props, this._instanceProps)
                  return (0, l.createElement)(
                    y || _ || 'div',
                    {
                      className: r,
                      onScroll: I,
                      ref: this._outerRefSetter,
                      style: n(
                        {
                          position: 'relative',
                          height: i,
                          width: S,
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          willChange: 'transform',
                          direction: o,
                        },
                        g
                      ),
                    },
                    (0, l.createElement)(c || u || 'div', {
                      children: R,
                      ref: s,
                      style: { height: O ? '100%' : C, pointerEvents: w ? 'none' : void 0, width: O ? C : '100%' },
                    })
                  )
                }),
                (r._callPropsCallbacks = function () {
                  if ('function' == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
                    var t = this._getRangeToRender(),
                      e = t[0],
                      r = t[1],
                      n = t[2],
                      o = t[3]
                    this._callOnItemsRendered(e, r, n, o)
                  }
                  if ('function' == typeof this.props.onScroll) {
                    var i = this.state,
                      s = i.scrollDirection,
                      a = i.scrollOffset,
                      c = i.scrollUpdateWasRequested
                    this._callOnScroll(s, a, c)
                  }
                }),
                (r._getRangeToRender = function () {
                  var t = this.props,
                    e = t.itemCount,
                    r = t.overscanCount,
                    n = this.state,
                    o = n.isScrolling,
                    i = n.scrollDirection,
                    s = n.scrollOffset
                  if (0 === e) return [0, 0, 0, 0]
                  var a = p(this.props, s, this._instanceProps),
                    c = y(this.props, a, s, this._instanceProps),
                    u = o && 'backward' !== i ? 1 : Math.max(1, r),
                    l = o && 'forward' !== i ? 1 : Math.max(1, r)
                  return [Math.max(0, a - u), Math.max(0, Math.min(e - 1, c + l)), a, c]
                }),
                e
              )
            })(l.PureComponent)),
          (e.defaultProps = {
            direction: 'ltr',
            itemData: void 0,
            layout: 'vertical',
            overscanCount: 2,
            useIsScrolling: !1,
          }),
          r
        )
      }
      var _ = function (t, e) {
          t.children, t.direction, t.height, t.layout, t.innerTagName, t.outerTagName, t.width, e.instance
        },
        g = function (t, e, r) {
          var n = t.itemSize,
            o = r.itemMetadataMap,
            i = r.lastMeasuredIndex
          if (e > i) {
            var s = 0
            if (i >= 0) {
              var a = o[i]
              s = a.offset + a.size
            }
            for (var c = i + 1; c <= e; c++) {
              var u = n(c)
              ;(o[c] = { offset: s, size: u }), (s += u)
            }
            r.lastMeasuredIndex = e
          }
          return o[e]
        },
        b = function (t, e, r, n, o) {
          for (; n <= r; ) {
            var i = n + Math.floor((r - n) / 2),
              s = g(t, i, e).offset
            if (s === o) return i
            s < o ? (n = i + 1) : s > o && (r = i - 1)
          }
          return n > 0 ? n - 1 : 0
        },
        S = function (t, e, r, n) {
          for (var o = t.itemCount, i = 1; r < o && g(t, r, e).offset < n; ) (r += i), (i *= 2)
          return b(t, e, Math.min(r, o - 1), Math.floor(r / 2), n)
        },
        w = function (t, e) {
          var r = t.itemCount,
            n = e.itemMetadataMap,
            o = e.estimatedItemSize,
            i = e.lastMeasuredIndex,
            s = 0
          if ((i >= r && (i = r - 1), i >= 0)) {
            var a = n[i]
            s = a.offset + a.size
          }
          return s + (r - i - 1) * o
        },
        O = y({
          getItemOffset: function (t, e, r) {
            return g(t, e, r).offset
          },
          getItemSize: function (t, e, r) {
            return r.itemMetadataMap[e].size
          },
          getEstimatedTotalSize: w,
          getOffsetForIndexAndAlignment: function (t, e, r, n, o) {
            var i = t.direction,
              s = t.height,
              a = t.layout,
              c = t.width,
              u = 'horizontal' === i || 'horizontal' === a ? c : s,
              l = g(t, e, o),
              f = w(t, o),
              h = Math.max(0, Math.min(f - u, l.offset)),
              d = Math.max(0, l.offset - u + l.size)
            switch (('smart' === r && (r = n >= d - u && n <= h + u ? 'auto' : 'center'), r)) {
              case 'start':
                return h
              case 'end':
                return d
              case 'center':
                return Math.round(d + (h - d) / 2)
              default:
                return n >= d && n <= h ? n : n < d ? d : h
            }
          },
          getStartIndexForOffset: function (t, e, r) {
            return (function (t, e, r) {
              var n = e.itemMetadataMap,
                o = e.lastMeasuredIndex
              return (o > 0 ? n[o].offset : 0) >= r ? b(t, e, o, 0, r) : S(t, e, Math.max(0, o), r)
            })(t, r, e)
          },
          getStopIndexForStartIndex: function (t, e, r, n) {
            for (
              var o = t.direction,
                i = t.height,
                s = t.itemCount,
                a = t.layout,
                c = t.width,
                u = 'horizontal' === o || 'horizontal' === a ? c : i,
                l = g(t, e, n),
                f = r + u,
                h = l.offset + l.size,
                d = e;
              d < s - 1 && h < f;

            )
              d++, (h += g(t, d, n).size)
            return d
          },
          initInstanceProps: function (t, e) {
            var r = { itemMetadataMap: {}, estimatedItemSize: t.estimatedItemSize || 50, lastMeasuredIndex: -1 }
            return (
              (e.resetAfterIndex = function (t, n) {
                void 0 === n && (n = !0),
                  (r.lastMeasuredIndex = Math.min(r.lastMeasuredIndex, t - 1)),
                  e._getItemStyleCache(-1),
                  n && e.forceUpdate()
              }),
              r
            )
          },
          shouldResetStyleCacheOnItemSizeChange: !1,
          validateProps: function (t) {
            t.itemSize
          },
        }),
        I = y({
          getItemOffset: function (t, e) {
            return e * t.itemSize
          },
          getItemSize: function (t, e) {
            return t.itemSize
          },
          getEstimatedTotalSize: function (t) {
            var e = t.itemCount
            return t.itemSize * e
          },
          getOffsetForIndexAndAlignment: function (t, e, r, n) {
            var o = t.direction,
              i = t.height,
              s = t.itemCount,
              a = t.itemSize,
              c = t.layout,
              u = t.width,
              l = 'horizontal' === o || 'horizontal' === c ? u : i,
              f = Math.max(0, s * a - l),
              h = Math.min(f, e * a),
              d = Math.max(0, e * a - l + a)
            switch (('smart' === r && (r = n >= d - l && n <= h + l ? 'auto' : 'center'), r)) {
              case 'start':
                return h
              case 'end':
                return d
              case 'center':
                var p = Math.round(d + (h - d) / 2)
                return p < Math.ceil(l / 2) ? 0 : p > f + Math.floor(l / 2) ? f : p
              default:
                return n >= d && n <= h ? n : n < d ? d : h
            }
          },
          getStartIndexForOffset: function (t, e) {
            var r = t.itemCount,
              n = t.itemSize
            return Math.max(0, Math.min(r - 1, Math.floor(e / n)))
          },
          getStopIndexForStartIndex: function (t, e, r) {
            var n = t.direction,
              o = t.height,
              i = t.itemCount,
              s = t.itemSize,
              a = t.layout,
              c = t.width,
              u = e * s,
              l = 'horizontal' === n || 'horizontal' === a ? c : o,
              f = Math.ceil((l + r - u) / s)
            return Math.max(0, Math.min(i - 1, e + f - 1))
          },
          initInstanceProps: function (t) {},
          shouldResetStyleCacheOnItemSizeChange: !0,
          validateProps: function (t) {
            t.itemSize
          },
        })
    },
    95257: (t, e) => {
      'use strict'
      var r = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        c = Symbol.for('react.context'),
        u = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        f = Symbol.for('react.memo'),
        h = Symbol.for('react.lazy'),
        d = Symbol.iterator
      var p = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = Object.assign,
        m = {}
      function y(t, e, r) {
        ;(this.props = t), (this.context = e), (this.refs = m), (this.updater = r || p)
      }
      function _() {}
      function g(t, e, r) {
        ;(this.props = t), (this.context = e), (this.refs = m), (this.updater = r || p)
      }
      ;(y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (t, e) {
          if ('object' != typeof t && 'function' != typeof t && null != t)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            )
          this.updater.enqueueSetState(this, t, e, 'setState')
        }),
        (y.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
        }),
        (_.prototype = y.prototype)
      var b = (g.prototype = new _())
      ;(b.constructor = g), v(b, y.prototype), (b.isPureReactComponent = !0)
      var S = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        O = { current: null },
        I = { key: !0, ref: !0, __self: !0, __source: !0 }
      function M(t, e, n) {
        var o,
          i = {},
          s = null,
          a = null
        if (null != e)
          for (o in (void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (s = '' + e.key), e))
            w.call(e, o) && !I.hasOwnProperty(o) && (i[o] = e[o])
        var c = arguments.length - 2
        if (1 === c) i.children = n
        else if (1 < c) {
          for (var u = Array(c), l = 0; l < c; l++) u[l] = arguments[l + 2]
          i.children = u
        }
        if (t && t.defaultProps) for (o in (c = t.defaultProps)) void 0 === i[o] && (i[o] = c[o])
        return { $$typeof: r, type: t, key: s, ref: a, props: i, _owner: O.current }
      }
      function E(t) {
        return 'object' == typeof t && null !== t && t.$$typeof === r
      }
      var x = /\/+/g
      function R(t, e) {
        return 'object' == typeof t && null !== t && null != t.key
          ? (function (t) {
              var e = { '=': '=0', ':': '=2' }
              return (
                '$' +
                t.replace(/[=:]/g, function (t) {
                  return e[t]
                })
              )
            })('' + t.key)
          : e.toString(36)
      }
      function z(t, e, o, i, s) {
        var a = typeof t
        ;('undefined' !== a && 'boolean' !== a) || (t = null)
        var c = !1
        if (null === t) c = !0
        else
          switch (a) {
            case 'string':
            case 'number':
              c = !0
              break
            case 'object':
              switch (t.$$typeof) {
                case r:
                case n:
                  c = !0
              }
          }
        if (c)
          return (
            (s = s((c = t))),
            (t = '' === i ? '.' + R(c, 0) : i),
            S(s)
              ? ((o = ''),
                null != t && (o = t.replace(x, '$&/') + '/'),
                z(s, e, o, '', function (t) {
                  return t
                }))
              : null != s &&
                (E(s) &&
                  (s = (function (t, e) {
                    return { $$typeof: r, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner }
                  })(s, o + (!s.key || (c && c.key === s.key) ? '' : ('' + s.key).replace(x, '$&/') + '/') + t)),
                e.push(s)),
            1
          )
        if (((c = 0), (i = '' === i ? '.' : i + ':'), S(t)))
          for (var u = 0; u < t.length; u++) {
            var l = i + R((a = t[u]), u)
            c += z(a, e, o, l, s)
          }
        else if (
          ((l = (function (t) {
            return null === t || 'object' != typeof t
              ? null
              : 'function' == typeof (t = (d && t[d]) || t['@@iterator'])
              ? t
              : null
          })(t)),
          'function' == typeof l)
        )
          for (t = l.call(t), u = 0; !(a = t.next()).done; ) c += z((a = a.value), e, o, (l = i + R(a, u++)), s)
        else if ('object' === a)
          throw (
            ((e = String(t)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          )
        return c
      }
      function C(t, e, r) {
        if (null == t) return t
        var n = [],
          o = 0
        return (
          z(t, n, '', '', function (t) {
            return e.call(r, t, o++)
          }),
          n
        )
      }
      function T(t) {
        if (-1 === t._status) {
          var e = t._result
          ;(e = e()).then(
            function (e) {
              ;(0 !== t._status && -1 !== t._status) || ((t._status = 1), (t._result = e))
            },
            function (e) {
              ;(0 !== t._status && -1 !== t._status) || ((t._status = 2), (t._result = e))
            }
          ),
            -1 === t._status && ((t._status = 0), (t._result = e))
        }
        if (1 === t._status) return t._result.default
        throw t._result
      }
      var k = { current: null },
        P = { transition: null },
        A = { ReactCurrentDispatcher: k, ReactCurrentBatchConfig: P, ReactCurrentOwner: O }
      ;(e.Children = {
        map: C,
        forEach: function (t, e, r) {
          C(
            t,
            function () {
              e.apply(this, arguments)
            },
            r
          )
        },
        count: function (t) {
          var e = 0
          return (
            C(t, function () {
              e++
            }),
            e
          )
        },
        toArray: function (t) {
          return (
            C(t, function (t) {
              return t
            }) || []
          )
        },
        only: function (t) {
          if (!E(t)) throw Error('React.Children.only expected to receive a single React element child.')
          return t
        },
      }),
        (e.Component = y),
        (e.Fragment = o),
        (e.Profiler = s),
        (e.PureComponent = g),
        (e.StrictMode = i),
        (e.Suspense = l),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (e.cloneElement = function (t, e, n) {
          if (null == t)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.')
          var o = v({}, t.props),
            i = t.key,
            s = t.ref,
            a = t._owner
          if (null != e) {
            if (
              (void 0 !== e.ref && ((s = e.ref), (a = O.current)),
              void 0 !== e.key && (i = '' + e.key),
              t.type && t.type.defaultProps)
            )
              var c = t.type.defaultProps
            for (u in e) w.call(e, u) && !I.hasOwnProperty(u) && (o[u] = void 0 === e[u] && void 0 !== c ? c[u] : e[u])
          }
          var u = arguments.length - 2
          if (1 === u) o.children = n
          else if (1 < u) {
            c = Array(u)
            for (var l = 0; l < u; l++) c[l] = arguments[l + 2]
            o.children = c
          }
          return { $$typeof: r, type: t.type, key: i, ref: s, props: o, _owner: a }
        }),
        (e.createContext = function (t) {
          return (
            ((t = {
              $$typeof: c,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: a, _context: t }),
            (t.Consumer = t)
          )
        }),
        (e.createElement = M),
        (e.createFactory = function (t) {
          var e = M.bind(null, t)
          return (e.type = t), e
        }),
        (e.createRef = function () {
          return { current: null }
        }),
        (e.forwardRef = function (t) {
          return { $$typeof: u, render: t }
        }),
        (e.isValidElement = E),
        (e.lazy = function (t) {
          return { $$typeof: h, _payload: { _status: -1, _result: t }, _init: T }
        }),
        (e.memo = function (t, e) {
          return { $$typeof: f, type: t, compare: void 0 === e ? null : e }
        }),
        (e.startTransition = function (t) {
          var e = P.transition
          P.transition = {}
          try {
            t()
          } finally {
            P.transition = e
          }
        }),
        (e.unstable_act = function () {
          throw Error('act(...) is not supported in production builds of React.')
        }),
        (e.useCallback = function (t, e) {
          return k.current.useCallback(t, e)
        }),
        (e.useContext = function (t) {
          return k.current.useContext(t)
        }),
        (e.useDebugValue = function () {}),
        (e.useDeferredValue = function (t) {
          return k.current.useDeferredValue(t)
        }),
        (e.useEffect = function (t, e) {
          return k.current.useEffect(t, e)
        }),
        (e.useId = function () {
          return k.current.useId()
        }),
        (e.useImperativeHandle = function (t, e, r) {
          return k.current.useImperativeHandle(t, e, r)
        }),
        (e.useInsertionEffect = function (t, e) {
          return k.current.useInsertionEffect(t, e)
        }),
        (e.useLayoutEffect = function (t, e) {
          return k.current.useLayoutEffect(t, e)
        }),
        (e.useMemo = function (t, e) {
          return k.current.useMemo(t, e)
        }),
        (e.useReducer = function (t, e, r) {
          return k.current.useReducer(t, e, r)
        }),
        (e.useRef = function (t) {
          return k.current.useRef(t)
        }),
        (e.useState = function (t) {
          return k.current.useState(t)
        }),
        (e.useSyncExternalStore = function (t, e, r) {
          return k.current.useSyncExternalStore(t, e, r)
        }),
        (e.useTransition = function () {
          return k.current.useTransition()
        }),
        (e.version = '18.2.0')
    },
    50959: (t, e, r) => {
      'use strict'
      t.exports = r(95257)
    },
  },
])
