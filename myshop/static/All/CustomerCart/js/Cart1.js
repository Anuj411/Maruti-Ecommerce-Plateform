jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(t, e, i, n, o) {
			return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
		},
		easeInQuad: function(t, e, i, n, o) {
			return n * (e /= o) * e + i
		},
		easeOutQuad: function(t, e, i, n, o) {
			return -n * (e /= o) * (e - 2) + i
		},
		easeInOutQuad: function(t, e, i, n, o) {
			return(e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
		},
		easeInCubic: function(t, e, i, n, o) {
			return n * (e /= o) * e * e + i
		},
		easeOutCubic: function(t, e, i, n, o) {
			return n * ((e = e / o - 1) * e * e + 1) + i
		},
		easeInOutCubic: function(t, e, i, n, o) {
			return(e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
		},
		easeInQuart: function(t, e, i, n, o) {
			return n * (e /= o) * e * e * e + i
		},
		easeOutQuart: function(t, e, i, n, o) {
			return -n * ((e = e / o - 1) * e * e * e - 1) + i
		},
		easeInOutQuart: function(t, e, i, n, o) {
			return(e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
		},
		easeInQuint: function(t, e, i, n, o) {
			return n * (e /= o) * e * e * e * e + i
		},
		easeOutQuint: function(t, e, i, n, o) {
			return n * ((e = e / o - 1) * e * e * e * e + 1) + i
		},
		easeInOutQuint: function(t, e, i, n, o) {
			return(e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
		},
		easeInSine: function(t, e, i, n, o) {
			return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
		},
		easeOutSine: function(t, e, i, n, o) {
			return n * Math.sin(e / o * (Math.PI / 2)) + i
		},
		easeInOutSine: function(t, e, i, n, o) {
			return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
		},
		easeInExpo: function(t, e, i, n, o) {
			return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
		},
		easeOutExpo: function(t, e, i, n, o) {
			return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i
		},
		easeInOutExpo: function(t, e, i, n, o) {
			return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
		},
		easeInCirc: function(t, e, i, n, o) {
			return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
		},
		easeOutCirc: function(t, e, i, n, o) {
			return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
		},
		easeInOutCirc: function(t, e, i, n, o) {
			return(e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
		},
		easeInElastic: function(t, e, i, n, o) {
			var a = 1.70158,
				r = 0,
				s = n;
			if(0 == e) return i;
			if(1 == (e /= o)) return i + n;
			if(r || (r = .3 * o), s < Math.abs(n)) {
				s = n;
				a = r / 4
			} else a = r / (2 * Math.PI) * Math.asin(n / s);
			return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) + i
		},
		easeOutElastic: function(t, e, i, n, o) {
			var a = 1.70158,
				r = 0,
				s = n;
			if(0 == e) return i;
			if(1 == (e /= o)) return i + n;
			if(r || (r = .3 * o), s < Math.abs(n)) {
				s = n;
				a = r / 4
			} else a = r / (2 * Math.PI) * Math.asin(n / s);
			return s * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / r) + n + i
		},
		easeInOutElastic: function(t, e, i, n, o) {
			var a = 1.70158,
				r = 0,
				s = n;
			if(0 == e) return i;
			if(2 == (e /= o / 2)) return i + n;
			if(r || (r = o * (.3 * 1.5)), s < Math.abs(n)) {
				s = n;
				a = r / 4
			} else a = r / (2 * Math.PI) * Math.asin(n / s);
			return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) * -.5 + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) * .5 + n + i
		},
		easeInBack: function(t, e, i, n, o, a) {
			return null == a && (a = 1.70158), n * (e /= o) * e * ((a + 1) * e - a) + i
		},
		easeOutBack: function(t, e, i, n, o, a) {
			return null == a && (a = 1.70158), n * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + i
		},
		easeInOutBack: function(t, e, i, n, o, a) {
			return null == a && (a = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + i : n / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + i
		},
		easeInBounce: function(t, e, i, n, o) {
			return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
		},
		easeOutBounce: function(t, e, i, n, o) {
			return(e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
		},
		easeInOutBounce: function(t, e, i, n, o) {
			return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
		}
	}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
		function e(t) {
			var e = t.length,
				n = i.type(t);
			return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
		}
		if(!t.jQuery) {
			var i = function(t, e) {
				return new i.fn.init(t, e)
			};
			i.isWindow = function(t) {
				return null != t && t == t.window
			}, i.type = function(t) {
				return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[r.call(t)] || "object" : typeof t
			}, i.isArray = Array.isArray || function(t) {
				return "array" === i.type(t)
			}, i.isPlainObject = function(t) {
				var e;
				if(!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
				try {
					if(t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
				} catch(t) {
					return !1
				}
				for(e in t);
				return void 0 === e || a.call(t, e)
			}, i.each = function(t, i, n) {
				var o = 0,
					a = t.length,
					r = e(t);
				if(n) {
					if(r)
						for(; a > o && !1 !== i.apply(t[o], n); o++);
					else
						for(o in t)
							if(!1 === i.apply(t[o], n)) break
				} else if(r)
					for(; a > o && !1 !== i.call(t[o], o, t[o]); o++);
				else
					for(o in t)
						if(!1 === i.call(t[o], o, t[o])) break; return t
			}, i.data = function(t, e, o) {
				if(void 0 === o) {
					var a = (r = t[i.expando]) && n[r];
					if(void 0 === e) return a;
					if(a && e in a) return a[e]
				} else if(void 0 !== e) {
					var r = t[i.expando] || (t[i.expando] = ++i.uuid);
					return n[r] = n[r] || {}, n[r][e] = o, o
				}
			}, i.removeData = function(t, e) {
				var o = t[i.expando],
					a = o && n[o];
				a && i.each(e, function(t, e) {
					delete a[e]
				})
			}, i.extend = function() {
				var t, e, n, o, a, r, s = arguments[0] || {},
					l = 1,
					c = arguments.length,
					u = !1;
				for("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
					if(null != (a = arguments[l]))
						for(o in a) t = s[o], s !== (n = a[o]) && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, r = t && i.isArray(t) ? t : []) : r = t && i.isPlainObject(t) ? t : {}, s[o] = i.extend(u, r, n)) : void 0 !== n && (s[o] = n));
				return s
			}, i.queue = function(t, n, o) {
				if(t) {
					n = (n || "fx") + "queue";
					var a = i.data(t, n);
					return o ? (!a || i.isArray(o) ? a = i.data(t, n, function(t, i) {
						var n = i || [];
						return null != t && (e(Object(t)) ? function(t, e) {
							for(var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
							if(i != i)
								for(; void 0 !== e[n];) t[o++] = e[n++];
							t.length = o
						}(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
					}(o)) : a.push(o), a) : a || []
				}
			}, i.dequeue = function(t, e) {
				i.each(t.nodeType ? [t] : t, function(t, n) {
					e = e || "fx";
					var o = i.queue(n, e),
						a = o.shift();
					"inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function() {
						i.dequeue(n, e)
					}))
				})
			}, i.fn = i.prototype = {
				init: function(t) {
					if(t.nodeType) return this[0] = t, this;
					throw new Error("Not a DOM node.")
				},
				offset: function() {
					var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
						top: 0,
						left: 0
					};
					return {
						top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
						left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
					}
				},
				position: function() {
					function t() {
						for(var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
						return t || document
					}
					var e = this[0],
						t = t.apply(e),
						n = this.offset(),
						o = /^(?:body|html)$/i.test(t.nodeName) ? {
							top: 0,
							left: 0
						} : i(t).offset();
					return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
						top: n.top - o.top,
						left: n.left - o.left
					}
				}
			};
			var n = {};
			i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
			for(var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
			i.fn.init.prototype = i.fn, t.Velocity = {
				Utilities: i
			}
		}
	}(window), function(t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
	}(function() {
		return function(t, e, i, n) {
			function o(t) {
				return p.isWrapped(t) ? t = [].slice.call(t) : p.isNode(t) && (t = [t]), t
			}

			function a(t) {
				var e = u.data(t, "velocity");
				return null === e ? n : e
			}

			function r(t, i, n, o) {
				function a(t, e) {
					return 1 - 3 * e + 3 * t
				}

				function r(t, e) {
					return 3 * e - 6 * t
				}

				function s(t) {
					return 3 * t
				}

				function l(t, e, i) {
					return((a(e, i) * t + r(e, i)) * t + s(e)) * t
				}

				function c(t, e, i) {
					return 3 * a(e, i) * t * t + 2 * r(e, i) * t + s(e)
				}

				function u(e, i) {
					for(var o = 0; p > o; ++o) {
						var a = c(i, t, n);
						if(0 === a) return i;
						i -= (l(i, t, n) - e) / a
					}
					return i
				}

				function d(e, i, o) {
					var a, r, s = 0;
					do {
						(a = l(r = i + (o - i) / 2, t, n) - e) > 0 ? o = r : i = r
					} while (Math.abs(a) > m && ++s < v);
					return r
				}

				function h() {
					k = !0, (t != i || n != o) && function() {
						for(var e = 0; g > e; ++e) w[e] = l(e * b, t, n)
					}()
				}
				var p = 4,
					f = .001,
					m = 1e-7,
					v = 10,
					g = 11,
					b = 1 / (g - 1),
					y = "Float32Array" in e;
				if(4 !== arguments.length) return !1;
				for(var x = 0; 4 > x; ++x)
					if("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
				t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
				var w = y ? new Float32Array(g) : new Array(g),
					k = !1,
					C = function(e) {
						return k || h(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(function(e) {
							for(var i = 0, o = 1, a = g - 1; o != a && w[o] <= e; ++o) i += b;
							var r = i + (e - w[--o]) / (w[o + 1] - w[o]) * b,
								s = c(r, t, n);
							return s >= f ? u(e, r) : 0 == s ? r : d(e, i, i + b)
						}(e), i, o)
					};
				C.getControlPoints = function() {
					return [{
						x: t,
						y: i
					}, {
						x: n,
						y: o
					}]
				};
				var S = "generateBezier(" + [t, i, n, o] + ")";
				return C.toString = function() {
					return S
				}, C
			}

			function s(t, e) {
				var i = t;
				return p.isString(t) ? g.Easings[t] || (i = !1) : i = p.isArray(t) && 1 === t.length ? function(t) {
					return function(e) {
						return Math.round(e * t) * (1 / t)
					}
				}.apply(null, t) : p.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!p.isArray(t) || 4 !== t.length) && r.apply(null, t), !1 === i && (i = g.Easings[g.defaults.easing] ? g.defaults.easing : v), i
			}

			function l(t) {
				if(t) {
					var e = (new Date).getTime(),
						i = g.State.calls.length;
					i > 1e4 && (g.State.calls = function(t) {
						for(var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
							var o = t[e];
							o && n.push(o)
						}
						return n
					}(g.State.calls));
					for(var o = 0; i > o; o++)
						if(g.State.calls[o]) {
							var r = g.State.calls[o],
								s = r[0],
								d = r[2],
								h = r[3],
								f = !!h,
								m = null;
							h || (h = g.State.calls[o][3] = e - 16);
							for(var v = Math.min((e - h) / d.duration, 1), b = 0, x = s.length; x > b; b++) {
								var k = s[b],
									C = k.element;
								if(a(C)) {
									var S = !1;
									if(d.display !== n && null !== d.display && "none" !== d.display) {
										if("flex" === d.display) {
											u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(t, e) {
												y.setPropertyValue(C, "display", e)
											})
										}
										y.setPropertyValue(C, "display", d.display)
									}
									for(var M in d.visibility !== n && "hidden" !== d.visibility && y.setPropertyValue(C, "visibility", d.visibility), k)
										if("element" !== M) {
											var T, O = k[M],
												_ = p.isString(O.easing) ? g.Easings[O.easing] : O.easing;
											if(1 === v) T = O.endValue;
											else {
												var P = O.endValue - O.startValue;
												if(T = O.startValue + P * _(v, d, P), !f && T === O.currentValue) continue
											}
											if(O.currentValue = T, "tween" === M) m = T;
											else {
												if(y.Hooks.registered[M]) {
													var A = y.Hooks.getRoot(M),
														I = a(C).rootPropertyValueCache[A];
													I && (O.rootPropertyValue = I)
												}
												var $ = y.setPropertyValue(C, M, O.currentValue + (0 === parseFloat(T) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
												y.Hooks.registered[M] && (a(C).rootPropertyValueCache[A] = y.Normalizations.registered[A] ? y.Normalizations.registered[A]("extract", null, $[1]) : $[1]), "transform" === $[0] && (S = !0)
											}
										}
									d.mobileHA && a(C).transformCache.translate3d === n && (a(C).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && y.flushTransformCache(C)
								}
							}
							d.display !== n && "none" !== d.display && (g.State.calls[o][2].display = !1), d.visibility !== n && "hidden" !== d.visibility && (g.State.calls[o][2].visibility = !1), d.progress && d.progress.call(r[1], r[1], v, Math.max(0, h + d.duration - e), h, m), 1 === v && c(o)
						}
				}
				g.State.isTicking && w(l)
			}

			function c(t, e) {
				if(!g.State.calls[t]) return !1;
				for(var i = g.State.calls[t][0], o = g.State.calls[t][1], r = g.State.calls[t][2], s = g.State.calls[t][4], l = !1, c = 0, d = i.length; d > c; c++) {
					var h = i[c].element;
					if(e || r.loop || ("none" === r.display && y.setPropertyValue(h, "display", r.display), "hidden" === r.visibility && y.setPropertyValue(h, "visibility", r.visibility)), !0 !== r.loop && (u.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(u.queue(h)[1])) && a(h)) {
						a(h).isAnimating = !1, a(h).rootPropertyValueCache = {};
						var p = !1;
						u.each(y.Lists.transforms3D, function(t, e) {
							var i = /^scale/.test(e) ? 1 : 0,
								o = a(h).transformCache[e];
							a(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (p = !0, delete a(h).transformCache[e])
						}), r.mobileHA && (p = !0, delete a(h).transformCache.translate3d), p && y.flushTransformCache(h), y.Values.removeClass(h, "velocity-animating")
					}
					if(!e && r.complete && !r.loop && c === d - 1) try {
						r.complete.call(o, o)
					} catch(t) {
						setTimeout(function() {
							throw t
						}, 1)
					}
					s && !0 !== r.loop && s(o), a(h) && !0 === r.loop && !e && (u.each(a(h).tweensContainer, function(t, e) {
						/^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
					}), g(h, "reverse", {
						loop: !0,
						delay: r.delay
					})), !1 !== r.queue && u.dequeue(h, r.queue)
				}
				g.State.calls[t] = !1;
				for(var f = 0, m = g.State.calls.length; m > f; f++)
					if(!1 !== g.State.calls[f]) {
						l = !0;
						break
					}!1 === l && (g.State.isTicking = !1, delete g.State.calls, g.State.calls = [])
			}
			var u, d = function() {
					if(i.documentMode) return i.documentMode;
					for(var t = 7; t > 4; t--) {
						var e = i.createElement("div");
						if(e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
					}
					return n
				}(),
				h = function() {
					var t = 0;
					return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
						var i, n = (new Date).getTime();
						return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
							e(n + i)
						}, i)
					}
				}(),
				p = {
					isString: function(t) {
						return "string" == typeof t
					},
					isArray: Array.isArray || function(t) {
						return "[object Array]" === Object.prototype.toString.call(t)
					},
					isFunction: function(t) {
						return "[object Function]" === Object.prototype.toString.call(t)
					},
					isNode: function(t) {
						return t && t.nodeType
					},
					isNodeList: function(t) {
						return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
					},
					isWrapped: function(t) {
						return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
					},
					isSVG: function(t) {
						return e.SVGElement && t instanceof e.SVGElement
					},
					isEmptyObject: function(t) {
						for(var e in t) return !1;
						return !0
					}
				},
				f = !1;
			if(t.fn && t.fn.jquery ? (u = t, f = !0) : u = e.Velocity.Utilities, 8 >= d && !f) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			if(!(7 >= d)) {
				var m = 400,
					v = "swing",
					g = {
						State: {
							isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
							isAndroid: /Android/i.test(navigator.userAgent),
							isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
							isChrome: e.chrome,
							isFirefox: /Firefox/i.test(navigator.userAgent),
							prefixElement: i.createElement("div"),
							prefixMatches: {},
							scrollAnchor: null,
							scrollPropertyLeft: null,
							scrollPropertyTop: null,
							isTicking: !1,
							calls: []
						},
						CSS: {},
						Utilities: u,
						Redirects: {},
						Easings: {},
						Promise: e.Promise,
						defaults: {
							queue: "",
							duration: m,
							easing: v,
							begin: n,
							complete: n,
							progress: n,
							display: n,
							visibility: n,
							loop: !1,
							delay: !1,
							mobileHA: !0,
							_cacheValues: !0
						},
						init: function(t) {
							u.data(t, "velocity", {
								isSVG: p.isSVG(t),
								isAnimating: !1,
								computedStyle: null,
								tweensContainer: null,
								rootPropertyValueCache: {},
								transformCache: {}
							})
						},
						hook: null,
						mock: !1,
						version: {
							major: 1,
							minor: 2,
							patch: 2
						},
						debug: !1
					};
				e.pageYOffset !== n ? (g.State.scrollAnchor = e, g.State.scrollPropertyLeft = "pageXOffset", g.State.scrollPropertyTop = "pageYOffset") : (g.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, g.State.scrollPropertyLeft = "scrollLeft", g.State.scrollPropertyTop = "scrollTop");
				var b = function() {
					function t(t) {
						return -t.tension * t.x - t.friction * t.v
					}

					function e(e, i, n) {
						var o = {
							x: e.x + n.dx * i,
							v: e.v + n.dv * i,
							tension: e.tension,
							friction: e.friction
						};
						return {
							dx: o.v,
							dv: t(o)
						}
					}

					function i(i, n) {
						var o = {
								dx: i.v,
								dv: t(i)
							},
							a = e(i, .5 * n, o),
							r = e(i, .5 * n, a),
							s = e(i, n, r),
							l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx),
							c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);
						return i.x = i.x + l * n, i.v = i.v + c * n, i
					}
					return function t(e, n, o) {
						var a, r, s, l = {
								x: -1,
								v: 0,
								tension: null,
								friction: null
							},
							c = [0],
							u = 0;
						for(e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, (a = null !== o) ? r = (u = t(e, n)) / o * .016 : r = .016; s = i(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
						return a ? function(t) {
							return c[t * (c.length - 1) | 0]
						} : u
					}
				}();
				g.Easings = {
					linear: function(t) {
						return t
					},
					swing: function(t) {
						return .5 - Math.cos(t * Math.PI) / 2
					},
					spring: function(t) {
						return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
					}
				}, u.each([
					["ease", [.25, .1, .25, 1]],
					["ease-in", [.42, 0, 1, 1]],
					["ease-out", [0, 0, .58, 1]],
					["ease-in-out", [.42, 0, .58, 1]],
					["easeInSine", [.47, 0, .745, .715]],
					["easeOutSine", [.39, .575, .565, 1]],
					["easeInOutSine", [.445, .05, .55, .95]],
					["easeInQuad", [.55, .085, .68, .53]],
					["easeOutQuad", [.25, .46, .45, .94]],
					["easeInOutQuad", [.455, .03, .515, .955]],
					["easeInCubic", [.55, .055, .675, .19]],
					["easeOutCubic", [.215, .61, .355, 1]],
					["easeInOutCubic", [.645, .045, .355, 1]],
					["easeInQuart", [.895, .03, .685, .22]],
					["easeOutQuart", [.165, .84, .44, 1]],
					["easeInOutQuart", [.77, 0, .175, 1]],
					["easeInQuint", [.755, .05, .855, .06]],
					["easeOutQuint", [.23, 1, .32, 1]],
					["easeInOutQuint", [.86, 0, .07, 1]],
					["easeInExpo", [.95, .05, .795, .035]],
					["easeOutExpo", [.19, 1, .22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [.6, .04, .98, .335]],
					["easeOutCirc", [.075, .82, .165, 1]],
					["easeInOutCirc", [.785, .135, .15, .86]]
				], function(t, e) {
					g.Easings[e[0]] = r.apply(null, e[1])
				});
				var y = g.CSS = {
					RegEx: {
						isHex: /^#([A-f\d]{3}){1,2}$/i,
						valueUnwrap: /^[A-z]+\((.*)\)$/i,
						wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
						valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
					},
					Lists: {
						colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
						transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
						transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
					},
					Hooks: {
						templates: {
							textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
							boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
							clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
							backgroundPosition: ["X Y", "0% 0%"],
							transformOrigin: ["X Y Z", "50% 50% 0px"],
							perspectiveOrigin: ["X Y", "50% 50%"]
						},
						registered: {},
						register: function() {
							for(var t = 0; t < y.Lists.colors.length; t++) {
								var e = "color" === y.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
								y.Hooks.templates[y.Lists.colors[t]] = ["Red Green Blue Alpha", e]
							}
							var i, n, o;
							if(d)
								for(i in y.Hooks.templates) {
									o = (n = y.Hooks.templates[i])[0].split(" ");
									var a = n[1].match(y.RegEx.valueSplit);
									"Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), y.Hooks.templates[i] = [o.join(" "), a.join(" ")])
								}
							for(i in y.Hooks.templates)
								for(var t in o = (n = y.Hooks.templates[i])[0].split(" ")) {
									var r = i + o[t],
										s = t;
									y.Hooks.registered[r] = [i, s]
								}
						},
						getRoot: function(t) {
							var e = y.Hooks.registered[t];
							return e ? e[0] : t
						},
						cleanRootPropertyValue: function(t, e) {
							return y.RegEx.valueUnwrap.test(e) && (e = e.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(e) && (e = y.Hooks.templates[t][1]), e
						},
						extractValue: function(t, e) {
							var i = y.Hooks.registered[t];
							if(i) {
								var n = i[0],
									o = i[1];
								return(e = y.Hooks.cleanRootPropertyValue(n, e)).toString().match(y.RegEx.valueSplit)[o]
							}
							return e
						},
						injectValue: function(t, e, i) {
							var n = y.Hooks.registered[t];
							if(n) {
								var o, a = n[0],
									r = n[1];
								return(o = (i = y.Hooks.cleanRootPropertyValue(a, i)).toString().match(y.RegEx.valueSplit))[r] = e, o.join(" ")
							}
							return i
						}
					},
					Normalizations: {
						registered: {
							clip: function(t, e, i) {
								switch(t) {
									case "name":
										return "clip";
									case "extract":
										var n;
										return y.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(y.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
									case "inject":
										return "rect(" + i + ")"
								}
							},
							blur: function(t, e, i) {
								switch(t) {
									case "name":
										return g.State.isFirefox ? "filter" : "-webkit-filter";
									case "extract":
										var n = parseFloat(i);
										if(!n && 0 !== n) {
											var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
											n = o ? o[1] : 0
										}
										return n;
									case "inject":
										return parseFloat(i) ? "blur(" + i + ")" : "none"
								}
							},
							opacity: function(t, e, i) {
								if(8 >= d) switch(t) {
									case "name":
										return "filter";
									case "extract":
										var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
										return n ? n[1] / 100 : 1;
									case "inject":
										return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
								} else switch(t) {
									case "name":
										return "opacity";
									case "extract":
									case "inject":
										return i
								}
							}
						},
						register: function() {
							9 >= d || g.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
							for(var t = 0; t < y.Lists.transformsBase.length; t++) ! function() {
								var e = y.Lists.transformsBase[t];
								y.Normalizations.registered[e] = function(t, i, o) {
									switch(t) {
										case "name":
											return "transform";
										case "extract":
											return a(i) === n || a(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : a(i).transformCache[e].replace(/[()]/g, "");
										case "inject":
											var r = !1;
											switch(e.substr(0, e.length - 1)) {
												case "translate":
													r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
													break;
												case "scal":
												case "scale":
													g.State.isAndroid && a(i).transformCache[e] === n && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
													break;
												case "skew":
													r = !/(deg|\d)$/i.test(o);
													break;
												case "rotate":
													r = !/(deg|\d)$/i.test(o)
											}
											return r || (a(i).transformCache[e] = "(" + o + ")"), a(i).transformCache[e]
									}
								}
							}();
							for(t = 0; t < y.Lists.colors.length; t++) ! function() {
								var e = y.Lists.colors[t];
								y.Normalizations.registered[e] = function(t, i, o) {
									switch(t) {
										case "name":
											return e;
										case "extract":
											var a;
											if(y.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
											else {
												var r, s = {
													black: "rgb(0, 0, 0)",
													blue: "rgb(0, 0, 255)",
													gray: "rgb(128, 128, 128)",
													green: "rgb(0, 128, 0)",
													red: "rgb(255, 0, 0)",
													white: "rgb(255, 255, 255)"
												};
												/^[A-z]+$/i.test(o) ? r = s[o] !== n ? s[o] : s.black : y.RegEx.isHex.test(o) ? r = "rgb(" + y.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
											}
											return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
										case "inject":
											return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
									}
								}
							}()
						}
					},
					Names: {
						camelCase: function(t) {
							return t.replace(/-(\w)/g, function(t, e) {
								return e.toUpperCase()
							})
						},
						SVGAttribute: function(t) {
							var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
							return(d || g.State.isAndroid && !g.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
						},
						prefixCheck: function(t) {
							if(g.State.prefixMatches[t]) return [g.State.prefixMatches[t], !0];
							for(var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
								var o;
								if(o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
										return t.toUpperCase()
									}), p.isString(g.State.prefixElement.style[o])) return g.State.prefixMatches[t] = o, [o, !0]
							}
							return [t, !1]
						}
					},
					Values: {
						hexToRgb: function(t) {
							var e;
							return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
								return e + e + i + i + n + n
							}), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
						},
						isCSSNullValue: function(t) {
							return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
						},
						getUnitType: function(t) {
							return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
						},
						getDisplayType: function(t) {
							var e = t && t.tagName.toString().toLowerCase();
							return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
						},
						addClass: function(t, e) {
							t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
						},
						removeClass: function(t, e) {
							t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
						}
					},
					getPropertyValue: function(t, i, o, r) {
						function s(t, i) {
							function o() {
								h && y.setPropertyValue(t, "display", "none")
							}
							var l = 0;
							if(8 >= d) l = u.css(t, i);
							else {
								var c, h = !1;
								if(/^(width|height)$/.test(i) && 0 === y.getPropertyValue(t, "display") && (h = !0, y.setPropertyValue(t, "display", y.Values.getDisplayType(t))), !r) {
									if("height" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
										var p = t.offsetHeight - (parseFloat(y.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingBottom")) || 0);
										return o(), p
									}
									if("width" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
										var f = t.offsetWidth - (parseFloat(y.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingRight")) || 0);
										return o(), f
									}
								}
								c = a(t) === n ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === d && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = t.style[i]), o()
							}
							if("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
								var m = s(t, "position");
								("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = u(t).position()[i] + "px")
							}
							return l
						}
						var l;
						if(y.Hooks.registered[i]) {
							var c = i,
								h = y.Hooks.getRoot(c);
							o === n && (o = y.getPropertyValue(t, y.Names.prefixCheck(h)[0])), y.Normalizations.registered[h] && (o = y.Normalizations.registered[h]("extract", t, o)), l = y.Hooks.extractValue(c, o)
						} else if(y.Normalizations.registered[i]) {
							var p, f;
							"transform" !== (p = y.Normalizations.registered[i]("name", t)) && (f = s(t, y.Names.prefixCheck(p)[0]), y.Values.isCSSNullValue(f) && y.Hooks.templates[i] && (f = y.Hooks.templates[i][1])), l = y.Normalizations.registered[i]("extract", t, f)
						}
						if(!/^[\d-]/.test(l))
							if(a(t) && a(t).isSVG && y.Names.SVGAttribute(i))
								if(/^(height|width)$/i.test(i)) try {
									l = t.getBBox()[i]
								} catch(t) {
									l = 0
								} else l = t.getAttribute(i);
								else l = s(t, y.Names.prefixCheck(i)[0]);
						return y.Values.isCSSNullValue(l) && (l = 0), g.debug >= 2 && console.log("Get " + i + ": " + l), l
					},
					setPropertyValue: function(t, i, n, o, r) {
						var s = i;
						if("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n);
						else if(y.Normalizations.registered[i] && "transform" === y.Normalizations.registered[i]("name", t)) y.Normalizations.registered[i]("inject", t, n), s = "transform", n = a(t).transformCache[i];
						else {
							if(y.Hooks.registered[i]) {
								var l = i,
									c = y.Hooks.getRoot(i);
								o = o || y.getPropertyValue(t, c), n = y.Hooks.injectValue(l, n, o), i = c
							}
							if(y.Normalizations.registered[i] && (n = y.Normalizations.registered[i]("inject", t, n), i = y.Normalizations.registered[i]("name", t)), s = y.Names.prefixCheck(i)[0], 8 >= d) try {
								t.style[s] = n
							} catch(t) {
								g.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
							} else a(t) && a(t).isSVG && y.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
							g.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
						}
						return [s, n]
					},
					flushTransformCache: function(t) {
						function e(e) {
							return parseFloat(y.getPropertyValue(t, e))
						}
						var i = "";
						if((d || g.State.isAndroid && !g.State.isChrome) && a(t).isSVG) {
							var n = {
								translate: [e("translateX"), e("translateY")],
								skewX: [e("skewX")],
								skewY: [e("skewY")],
								scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
								rotate: [e("rotateZ"), 0, 0]
							};
							u.each(a(t).transformCache, function(t) {
								/^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
							})
						} else {
							var o, r;
							u.each(a(t).transformCache, function(e) {
								return o = a(t).transformCache[e], "transformPerspective" === e ? (r = o, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(i += e + o + " "))
							}), r && (i = "perspective" + r + " " + i)
						}
						y.setPropertyValue(t, "transform", i)
					}
				};
				y.Hooks.register(), y.Normalizations.register(), g.hook = function(t, e, i) {
					var r = n;
					return t = o(t), u.each(t, function(t, o) {
						if(a(o) === n && g.init(o), i === n) r === n && (r = g.CSS.getPropertyValue(o, e));
						else {
							var s = g.CSS.setPropertyValue(o, e, i);
							"transform" === s[0] && g.CSS.flushTransformCache(o), r = s
						}
					}), r
				};
				var x = function() {
					function t() {
						return d ? O.promise || null : h
					}

					function r() {
						function t(t) {
							function h(t, e) {
								var i = n,
									o = n,
									a = n;
								return p.isArray(t) ? (i = t[0], !p.isArray(t[1]) && /^[\d-]/.test(t[1]) || p.isFunction(t[1]) || y.RegEx.isHex.test(t[1]) ? a = t[1] : (p.isString(t[1]) && !y.RegEx.isHex.test(t[1]) || p.isArray(t[1])) && (o = e ? t[1] : s(t[1], c.duration), t[2] !== n && (a = t[2]))) : i = t, e || (o = o || c.easing), p.isFunction(i) && (i = i.call(r, S, C)), p.isFunction(a) && (a = a.call(r, S, C)), [i || 0, o, a]
							}

							function f(t, e) {
								var i, n;
								return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
									return i = t, ""
								}), i || (i = y.Values.getUnitType(t)), [n, i]
							}

							function m() {
								var t = {
										myParent: r.parentNode || i.body,
										position: y.getPropertyValue(r, "position"),
										fontSize: y.getPropertyValue(r, "fontSize")
									},
									n = t.position === E.lastPosition && t.myParent === E.lastParent,
									o = t.fontSize === E.lastFontSize;
								E.lastParent = t.myParent, E.lastPosition = t.position, E.lastFontSize = t.fontSize;
								var s = 100,
									l = {};
								if(o && n) l.emToPx = E.lastEmToPx, l.percentToPxWidth = E.lastPercentToPxWidth, l.percentToPxHeight = E.lastPercentToPxHeight;
								else {
									var c = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
									g.init(c), t.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(t, e) {
										g.CSS.setPropertyValue(c, e, "hidden")
									}), g.CSS.setPropertyValue(c, "position", t.position), g.CSS.setPropertyValue(c, "fontSize", t.fontSize), g.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
										g.CSS.setPropertyValue(c, e, s + "%")
									}), g.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = E.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = E.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = E.lastEmToPx = (parseFloat(y.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
								}
								return null === E.remToPx && (E.remToPx = parseFloat(y.getPropertyValue(i.body, "fontSize")) || 16), null === E.vwToPx && (E.vwToPx = parseFloat(e.innerWidth) / 100, E.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = E.remToPx, l.vwToPx = E.vwToPx, l.vhToPx = E.vhToPx, g.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
							}
							if(c.begin && 0 === S) try {
								c.begin.call(v, v)
							} catch(t) {
								setTimeout(function() {
									throw t
								}, 1)
							}
							if("scroll" === T) {
								var x, k, M, _ = /^x$/i.test(c.axis) ? "Left" : "Top",
									P = parseFloat(c.offset) || 0;
								c.container ? p.isWrapped(c.container) || p.isNode(c.container) ? (c.container = c.container[0] || c.container, M = (x = c.container["scroll" + _]) + u(r).position()[_.toLowerCase()] + P) : c.container = null : (x = g.State.scrollAnchor[g.State["scrollProperty" + _]], k = g.State.scrollAnchor[g.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]], M = u(r).offset()[_.toLowerCase()] + P), d = {
									scroll: {
										rootPropertyValue: !1,
										startValue: x,
										currentValue: x,
										endValue: M,
										unitType: "",
										easing: c.easing,
										scrollData: {
											container: c.container,
											direction: _,
											alternateValue: k
										}
									},
									element: r
								}, g.debug && console.log("tweensContainer (scroll): ", d.scroll, r)
							} else if("reverse" === T) {
								if(!a(r).tweensContainer) return void u.dequeue(r, c.queue);
								"none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, w.easing || delete c.easing, w.duration || delete c.duration, c = u.extend({}, a(r).opts, c);
								var A = u.extend(!0, {}, a(r).tweensContainer);
								for(var I in A)
									if("element" !== I) {
										var $ = A[I].startValue;
										A[I].startValue = A[I].currentValue = A[I].endValue, A[I].endValue = $, p.isEmptyObject(w) || (A[I].easing = c.easing), g.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(A[I]), r)
									}
								d = A
							} else if("start" === T) {
								for(var D in a(r).tweensContainer && !0 === a(r).isAnimating && (A = a(r).tweensContainer), u.each(b, function(t, e) {
										if(RegExp("^" + y.Lists.colors.join("$|^") + "$").test(t)) {
											var i = h(e, !0),
												o = i[0],
												a = i[1],
												r = i[2];
											if(y.RegEx.isHex.test(o)) {
												for(var s = ["Red", "Green", "Blue"], l = y.Values.hexToRgb(o), c = r ? y.Values.hexToRgb(r) : n, u = 0; u < s.length; u++) {
													var d = [l[u]];
													a && d.push(a), c !== n && d.push(c[u]), b[t + s[u]] = d
												}
												delete b[t]
											}
										}
									}), b) {
									var F = h(b[D]),
										R = F[0],
										W = F[1],
										V = F[2];
									D = y.Names.camelCase(D);
									var H = y.Hooks.getRoot(D),
										z = !1;
									if(a(r).isSVG || "tween" === H || !1 !== y.Names.prefixCheck(H)[1] || y.Normalizations.registered[H] !== n) {
										(c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(D) && !V && 0 !== R && (V = 0), c._cacheValues && A && A[D] ? (V === n && (V = A[D].endValue + A[D].unitType), z = a(r).rootPropertyValueCache[H]) : y.Hooks.registered[D] ? V === n ? (z = y.getPropertyValue(r, H), V = y.getPropertyValue(r, D, z)) : z = y.Hooks.templates[H][1] : V === n && (V = y.getPropertyValue(r, D));
										var N, B, j, Y = !1;
										if(V = (N = f(D, V))[0], j = N[1], R = (N = f(D, R))[0].replace(/^([+-\/*])=/, function(t, e) {
												return Y = e, ""
											}), B = N[1], V = parseFloat(V) || 0, R = parseFloat(R) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(D) ? (R /= 100, B = "em") : /^scale/.test(D) ? (R /= 100, B = "") : /(Red|Green|Blue)$/i.test(D) && (R = R / 100 * 255, B = "")), /[\/*]/.test(Y)) B = j;
										else if(j !== B && 0 !== V)
											if(0 === R) B = j;
											else {
												o = o || m();
												var q = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
												switch(j) {
													case "%":
														V *= "x" === q ? o.percentToPxWidth : o.percentToPxHeight;
														break;
													case "px":
														break;
													default:
														V *= o[j + "ToPx"]
												}
												switch(B) {
													case "%":
														V *= 1 / ("x" === q ? o.percentToPxWidth : o.percentToPxHeight);
														break;
													case "px":
														break;
													default:
														V *= 1 / o[B + "ToPx"]
												}
											}
										switch(Y) {
											case "+":
												R = V + R;
												break;
											case "-":
												R = V - R;
												break;
											case "*":
												R *= V;
												break;
											case "/":
												R = V / R
										}
										d[D] = {
											rootPropertyValue: z,
											startValue: V,
											currentValue: V,
											endValue: R,
											unitType: B,
											easing: W
										}, g.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(d[D]), r)
									} else g.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
								}
								d.element = r
							}
							d.element && (y.Values.addClass(r, "velocity-animating"), L.push(d), "" === c.queue && (a(r).tweensContainer = d, a(r).opts = c), a(r).isAnimating = !0, S === C - 1 ? (g.State.calls.push([L, v, c, null, O.resolver]), !1 === g.State.isTicking && (g.State.isTicking = !0, l())) : S++)
						}
						var o, r = this,
							c = u.extend({}, g.defaults, w),
							d = {};
						switch(a(r) === n && g.init(r), parseFloat(c.delay) && !1 !== c.queue && u.queue(r, c.queue, function(t) {
							g.velocityQueueEntryFlag = !0, a(r).delayTimer = {
								setTimeout: setTimeout(t, parseFloat(c.delay)),
								next: t
							}
						}), c.duration.toString().toLowerCase()) {
							case "fast":
								c.duration = 200;
								break;
							case "normal":
								c.duration = m;
								break;
							case "slow":
								c.duration = 600;
								break;
							default:
								c.duration = parseFloat(c.duration) || 1
						}!1 !== g.mock && (!0 === g.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(g.mock) || 1, c.delay *= parseFloat(g.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !p.isFunction(c.begin) && (c.begin = null), c.progress && !p.isFunction(c.progress) && (c.progress = null), c.complete && !p.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = g.CSS.Values.getDisplayType(r))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && g.State.isMobile && !g.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(t, c.delay) : t() : u.queue(r, c.queue, function(e, i) {
							return !0 === i ? (O.promise && O.resolver(v), !0) : (g.velocityQueueEntryFlag = !0, void t())
						}), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(r)[0] || u.dequeue(r)
					}
					var d, h, f, v, b, w, k = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
					if(p.isWrapped(this) ? (d = !1, f = 0, v = this, h = this) : (d = !0, f = 1, v = k ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
						k ? (b = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (b = arguments[f], w = arguments[f + 1]);
						var C = v.length,
							S = 0;
						if(!/^(stop|finish)$/i.test(b) && !u.isPlainObject(w)) {
							w = {};
							for(var M = f + 1; M < arguments.length; M++) p.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? p.isString(arguments[M]) || p.isArray(arguments[M]) ? w.easing = arguments[M] : p.isFunction(arguments[M]) && (w.complete = arguments[M]) : w.duration = arguments[M]
						}
						var T, O = {
							promise: null,
							resolver: null,
							rejecter: null
						};
						switch(d && g.Promise && (O.promise = new g.Promise(function(t, e) {
							O.resolver = t, O.rejecter = e
						})), b) {
							case "scroll":
								T = "scroll";
								break;
							case "reverse":
								T = "reverse";
								break;
							case "finish":
							case "stop":
								u.each(v, function(t, e) {
									a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
								});
								var _ = [];
								return u.each(g.State.calls, function(t, e) {
									e && u.each(e[1], function(i, o) {
										var r = w === n ? "" : w;
										return !0 !== r && e[2].queue !== r && (w !== n || !1 !== e[2].queue) || void u.each(v, function(i, n) {
											n === o && ((!0 === w || p.isString(w)) && (u.each(u.queue(n, p.isString(w) ? w : ""), function(t, e) {
												p.isFunction(e) && e(null, !0)
											}), u.queue(n, p.isString(w) ? w : "", [])), "stop" === b ? (a(n) && a(n).tweensContainer && !1 !== r && u.each(a(n).tweensContainer, function(t, e) {
												e.endValue = e.currentValue
											}), _.push(t)) : "finish" === b && (e[2].duration = 1))
										})
									})
								}), "stop" === b && (u.each(_, function(t, e) {
									c(e, !0)
								}), O.promise && O.resolver(v)), t();
							default:
								if(!u.isPlainObject(b) || p.isEmptyObject(b)) {
									if(p.isString(b) && g.Redirects[b]) {
										var P = (D = u.extend({}, w)).duration,
											A = D.delay || 0;
										return !0 === D.backwards && (v = u.extend(!0, [], v).reverse()), u.each(v, function(t, e) {
											parseFloat(D.stagger) ? D.delay = A + parseFloat(D.stagger) * t : p.isFunction(D.stagger) && (D.delay = A + D.stagger.call(e, t, C)), D.drag && (D.duration = parseFloat(P) || (/^(callout|transition)/.test(b) ? 1e3 : m), D.duration = Math.max(D.duration * (D.backwards ? 1 - t / C : (t + 1) / C), .75 * D.duration, 200)), g.Redirects[b].call(e, e, D || {}, t, C, v, O.promise ? O : n)
										}), t()
									}
									var I = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
									return O.promise ? O.rejecter(new Error(I)) : console.log(I), t()
								}
								T = "start"
						}
						var $, D, E = {
								lastParent: null,
								lastPosition: null,
								lastFontSize: null,
								lastPercentToPxWidth: null,
								lastPercentToPxHeight: null,
								lastEmToPx: null,
								remToPx: null,
								vwToPx: null,
								vhToPx: null
							},
							L = [];
						if(u.each(v, function(t, e) {
								p.isNode(e) && r.call(e)
							}), (D = u.extend({}, g.defaults, w)).loop = parseInt(D.loop), $ = 2 * D.loop - 1, D.loop)
							for(var F = 0; $ > F; F++) {
								var R = {
									delay: D.delay,
									progress: D.progress
								};
								F === $ - 1 && (R.display = D.display, R.visibility = D.visibility, R.complete = D.complete), x(v, "reverse", R)
							}
						return t()
					}
				};
				(g = u.extend(x, g)).animate = x;
				var w = e.requestAnimationFrame || h;
				return g.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
					i.hidden ? (w = function(t) {
						return setTimeout(function() {
							t(!0)
						}, 16)
					}, l()) : w = e.requestAnimationFrame || h
				}), t.Velocity = g, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = g.defaults), u.each(["Down", "Up"], function(t, e) {
					g.Redirects["slide" + e] = function(t, i, o, a, r, s) {
						var l = u.extend({}, i),
							c = l.begin,
							d = l.complete,
							h = {
								height: "",
								marginTop: "",
								marginBottom: "",
								paddingTop: "",
								paddingBottom: ""
							},
							p = {};
						l.display === n && (l.display = "Down" === e ? "inline" === g.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
							for(var i in c && c.call(r, r), h) {
								p[i] = t.style[i];
								var n = g.CSS.getPropertyValue(t, i);
								h[i] = "Down" === e ? [n, 0] : [0, n]
							}
							p.overflow = t.style.overflow, t.style.overflow = "hidden"
						}, l.complete = function() {
							for(var e in p) t.style[e] = p[e];
							d && d.call(r, r), s && s.resolver(r)
						}, g(t, h, l)
					}
				}), u.each(["In", "Out"], function(t, e) {
					g.Redirects["fade" + e] = function(t, i, o, a, r, s) {
						var l = u.extend({}, i),
							c = {
								opacity: "In" === e ? 1 : 0
							},
							d = l.complete;
						l.complete = o !== a - 1 ? l.begin = null : function() {
							d && d.call(r, r), s && s.resolver(r)
						}, l.display === n && (l.display = "In" === e ? "auto" : "none"), g(this, c, l)
					}
				}), g
			}
			jQuery.fn.velocity = jQuery.fn.animate
		}(window.jQuery || window.Zepto || window, window, document)
	})),
	function(t) {
		if("object" == typeof exports && "undefined" != typeof module) module.exports = t();
		else if("function" == typeof define && define.amd) define([], t);
		else {
			("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
		}
	}(function() {
		return function() {
			return function t(e, i, n) {
				function o(r, s) {
					if(!i[r]) {
						if(!e[r]) {
							var l = "function" == typeof require && require;
							if(!s && l) return l(r, !0);
							if(a) return a(r, !0);
							var c = new Error("Cannot find module '" + r + "'");
							throw c.code = "MODULE_NOT_FOUND", c
						}
						var u = i[r] = {
							exports: {}
						};
						e[r][0].call(u.exports, function(t) {
							return o(e[r][1][t] || t)
						}, u, u.exports, t, e, i, n)
					}
					return i[r].exports
				}
				for(var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
				return o
			}
		}()({
			1: [function(t, e, i) {}, {}],
			2: [function(t, e, i) {
				var n = t(6);

				function o(t) {
					if(t) {
						var e = [0, 0, 0],
							i = 1,
							o = t.match(/^#([a-fA-F0-9]{3})$/i);
						if(o) {
							o = o[1];
							for(var a = 0; a < e.length; a++) e[a] = parseInt(o[a] + o[a], 16)
						} else if(o = t.match(/^#([a-fA-F0-9]{6})$/i)) {
							o = o[1];
							for(a = 0; a < e.length; a++) e[a] = parseInt(o.slice(2 * a, 2 * a + 2), 16)
						} else if(o = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for(a = 0; a < e.length; a++) e[a] = parseInt(o[a + 1]);
							i = parseFloat(o[4])
						} else if(o = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for(a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(o[a + 1]));
							i = parseFloat(o[4])
						} else if(o = t.match(/(\w+)/)) {
							if("transparent" == o[1]) return [0, 0, 0, 0];
							if(!(e = n[o[1]])) return
						}
						for(a = 0; a < e.length; a++) e[a] = u(e[a], 0, 255);
						return i = i || 0 == i ? u(i, 0, 1) : 1, e[3] = i, e
					}
				}

				function a(t) {
					if(t) {
						var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if(e) {
							var i = parseFloat(e[4]);
							return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
						}
					}
				}

				function r(t) {
					if(t) {
						var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if(e) {
							var i = parseFloat(e[4]);
							return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
						}
					}
				}

				function s(t, e) {
					return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
				}

				function l(t, e) {
					return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
				}

				function c(t, e) {
					return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
				}

				function u(t, e, i) {
					return Math.min(Math.max(e, t), i)
				}

				function d(t) {
					var e = t.toString(16).toUpperCase();
					return e.length < 2 ? "0" + e : e
				}
				e.exports = {
					getRgba: o,
					getHsla: a,
					getRgb: function(t) {
						var e = o(t);
						return e && e.slice(0, 3)
					},
					getHsl: function(t) {
						var e = a(t);
						return e && e.slice(0, 3)
					},
					getHwb: r,
					getAlpha: function(t) {
						var e = o(t);
						if(e) return e[3];
						if(e = a(t)) return e[3];
						if(e = r(t)) return e[3]
					},
					hexString: function(t) {
						return "#" + d(t[0]) + d(t[1]) + d(t[2])
					},
					rgbString: function(t, e) {
						if(e < 1 || t[3] && t[3] < 1) return s(t, e);
						return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
					},
					rgbaString: s,
					percentString: function(t, e) {
						if(e < 1 || t[3] && t[3] < 1) return l(t, e);
						var i = Math.round(t[0] / 255 * 100),
							n = Math.round(t[1] / 255 * 100),
							o = Math.round(t[2] / 255 * 100);
						return "rgb(" + i + "%, " + n + "%, " + o + "%)"
					},
					percentaString: l,
					hslString: function(t, e) {
						if(e < 1 || t[3] && t[3] < 1) return c(t, e);
						return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
					},
					hslaString: c,
					hwbString: function(t, e) {
						void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
						return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
					},
					keyword: function(t) {
						return h[t.slice(0, 3)]
					}
				};
				var h = {};
				for(var p in n) h[n[p]] = p
			}, {
				6: 6
			}],
			3: [function(t, e, i) {
				var n = t(5),
					o = t(2),
					a = function(t) {
						return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
							rgb: [0, 0, 0],
							hsl: [0, 0, 0],
							hsv: [0, 0, 0],
							hwb: [0, 0, 0],
							cmyk: [0, 0, 0, 0],
							alpha: 1
						}, void("string" == typeof t ? (e = o.getRgba(t)) ? this.setValues("rgb", e) : (e = o.getHsla(t)) ? this.setValues("hsl", e) : (e = o.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new a(t);
						var e
					};
				a.prototype = {
					isValid: function() {
						return this.valid
					},
					rgb: function() {
						return this.setSpace("rgb", arguments)
					},
					hsl: function() {
						return this.setSpace("hsl", arguments)
					},
					hsv: function() {
						return this.setSpace("hsv", arguments)
					},
					hwb: function() {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function() {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function() {
						return this.values.rgb
					},
					hslArray: function() {
						return this.values.hsl
					},
					hsvArray: function() {
						return this.values.hsv
					},
					hwbArray: function() {
						var t = this.values;
						return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
					},
					cmykArray: function() {
						return this.values.cmyk
					},
					rgbaArray: function() {
						var t = this.values;
						return t.rgb.concat([t.alpha])
					},
					hslaArray: function() {
						var t = this.values;
						return t.hsl.concat([t.alpha])
					},
					alpha: function(t) {
						return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
					},
					red: function(t) {
						return this.setChannel("rgb", 0, t)
					},
					green: function(t) {
						return this.setChannel("rgb", 1, t)
					},
					blue: function(t) {
						return this.setChannel("rgb", 2, t)
					},
					hue: function(t) {
						return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
					},
					saturation: function(t) {
						return this.setChannel("hsl", 1, t)
					},
					lightness: function(t) {
						return this.setChannel("hsl", 2, t)
					},
					saturationv: function(t) {
						return this.setChannel("hsv", 1, t)
					},
					whiteness: function(t) {
						return this.setChannel("hwb", 1, t)
					},
					blackness: function(t) {
						return this.setChannel("hwb", 2, t)
					},
					value: function(t) {
						return this.setChannel("hsv", 2, t)
					},
					cyan: function(t) {
						return this.setChannel("cmyk", 0, t)
					},
					magenta: function(t) {
						return this.setChannel("cmyk", 1, t)
					},
					yellow: function(t) {
						return this.setChannel("cmyk", 2, t)
					},
					black: function(t) {
						return this.setChannel("cmyk", 3, t)
					},
					hexString: function() {
						return o.hexString(this.values.rgb)
					},
					rgbString: function() {
						return o.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function() {
						return o.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function() {
						return o.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function() {
						return o.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function() {
						return o.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function() {
						return o.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function() {
						return o.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function() {
						var t = this.values.rgb;
						return t[0] << 16 | t[1] << 8 | t[2]
					},
					luminosity: function() {
						for(var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
							var n = t[i] / 255;
							e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
						}
						return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
					},
					contrast: function(t) {
						var e = this.luminosity(),
							i = t.luminosity();
						return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
					},
					level: function(t) {
						var e = this.contrast(t);
						return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
					},
					dark: function() {
						var t = this.values.rgb;
						return(299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
					},
					light: function() {
						return !this.dark()
					},
					negate: function() {
						for(var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
						return this.setValues("rgb", t), this
					},
					lighten: function(t) {
						var e = this.values.hsl;
						return e[2] += e[2] * t, this.setValues("hsl", e), this
					},
					darken: function(t) {
						var e = this.values.hsl;
						return e[2] -= e[2] * t, this.setValues("hsl", e), this
					},
					saturate: function(t) {
						var e = this.values.hsl;
						return e[1] += e[1] * t, this.setValues("hsl", e), this
					},
					desaturate: function(t) {
						var e = this.values.hsl;
						return e[1] -= e[1] * t, this.setValues("hsl", e), this
					},
					whiten: function(t) {
						var e = this.values.hwb;
						return e[1] += e[1] * t, this.setValues("hwb", e), this
					},
					blacken: function(t) {
						var e = this.values.hwb;
						return e[2] += e[2] * t, this.setValues("hwb", e), this
					},
					greyscale: function() {
						var t = this.values.rgb,
							e = .3 * t[0] + .59 * t[1] + .11 * t[2];
						return this.setValues("rgb", [e, e, e]), this
					},
					clearer: function(t) {
						var e = this.values.alpha;
						return this.setValues("alpha", e - e * t), this
					},
					opaquer: function(t) {
						var e = this.values.alpha;
						return this.setValues("alpha", e + e * t), this
					},
					rotate: function(t) {
						var e = this.values.hsl,
							i = (e[0] + t) % 360;
						return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
					},
					mix: function(t, e) {
						var i = t,
							n = void 0 === e ? .5 : e,
							o = 2 * n - 1,
							a = this.alpha() - i.alpha(),
							r = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
							s = 1 - r;
						return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
					},
					toJSON: function() {
						return this.rgb()
					},
					clone: function() {
						var t, e, i = new a,
							n = this.values,
							o = i.values;
						for(var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
						return i
					}
				}, a.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, a.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, a.prototype.getValues = function(t) {
					for(var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
					return 1 !== e.alpha && (i.a = e.alpha), i
				}, a.prototype.setValues = function(t, e) {
					var i, o, a = this.values,
						r = this.spaces,
						s = this.maxes,
						l = 1;
					if(this.valid = !0, "alpha" === t) l = e;
					else if(e.length) a[t] = e.slice(0, t.length), l = e[t.length];
					else if(void 0 !== e[t.charAt(0)]) {
						for(i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
						l = e.a
					} else if(void 0 !== e[r[t][0]]) {
						var c = r[t];
						for(i = 0; i < t.length; i++) a[t][i] = e[c[i]];
						l = e.alpha
					}
					if(a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
					for(i = 0; i < t.length; i++) o = Math.max(0, Math.min(s[t][i], a[t][i])), a[t][i] = Math.round(o);
					for(var u in r) u !== t && (a[u] = n[t][u](a[t]));
					return !0
				}, a.prototype.setSpace = function(t, e) {
					var i = e[0];
					return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
				}, a.prototype.setChannel = function(t, e, i) {
					var n = this.values[t];
					return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
				}, "undefined" != typeof window && (window.Color = a), e.exports = a
			}, {
				2: 2,
				5: 5
			}],
			4: [function(t, e, i) {
				function n(t) {
					var e, i, n = t[0] / 255,
						o = t[1] / 255,
						a = t[2] / 255,
						r = Math.min(n, o, a),
						s = Math.max(n, o, a),
						l = s - r;
					return s == r ? e = 0 : n == s ? e = (o - a) / l : o == s ? e = 2 + (a - n) / l : a == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
				}

				function o(t) {
					var e, i, n = t[0],
						o = t[1],
						a = t[2],
						r = Math.min(n, o, a),
						s = Math.max(n, o, a),
						l = s - r;
					return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (o - a) / l : o == s ? e = 2 + (a - n) / l : a == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
				}

				function a(t) {
					var e = t[0],
						i = t[1],
						o = t[2];
					return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, o))), 100 * (o = 1 - 1 / 255 * Math.max(e, Math.max(i, o)))]
				}

				function s(t) {
					var e, i = t[0] / 255,
						n = t[1] / 255,
						o = t[2] / 255;
					return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - o))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
				}

				function l(t) {
					return M[JSON.stringify(t)]
				}

				function c(t) {
					var e = t[0] / 255,
						i = t[1] / 255,
						n = t[2] / 255;
					return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
				}

				function u(t) {
					var e = c(t),
						i = e[0],
						n = e[1],
						o = e[2];
					return n /= 100, o /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
				}

				function d(t) {
					var e, i, n, o, a, r = t[0] / 360,
						s = t[1] / 100,
						l = t[2] / 100;
					if(0 == s) return [a = 255 * l, a, a];
					e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
					for(var c = 0; c < 3; c++)(n = r + 1 / 3 * -(c - 1)) < 0 && n++, n > 1 && n--, a = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, o[c] = 255 * a;
					return o
				}

				function h(t) {
					var e = t[0] / 60,
						i = t[1] / 100,
						n = t[2] / 100,
						o = Math.floor(e) % 6,
						a = e - Math.floor(e),
						r = 255 * n * (1 - i),
						s = 255 * n * (1 - i * a),
						l = 255 * n * (1 - i * (1 - a));
					n *= 255;
					switch(o) {
						case 0:
							return [n, l, r];
						case 1:
							return [s, n, r];
						case 2:
							return [r, n, l];
						case 3:
							return [r, s, n];
						case 4:
							return [l, r, n];
						case 5:
							return [n, r, s]
					}
				}

				function p(t) {
					var e, i, n, o, a = t[0] / 360,
						s = t[1] / 100,
						l = t[2] / 100,
						c = s + l;
					switch(c > 1 && (s /= c, l /= c), n = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (n = 1 - n), o = s + n * ((i = 1 - l) - s), e) {
						default:
							case 6:
							case 0:
							r = i,
						g = o,
						b = s;
						break;
						case 1:
								r = o,
							g = i,
							b = s;
							break;
						case 2:
								r = s,
							g = i,
							b = o;
							break;
						case 3:
								r = s,
							g = o,
							b = i;
							break;
						case 4:
								r = o,
							g = s,
							b = i;
							break;
						case 5:
								r = i,
							g = s,
							b = o
					}
					return [255 * r, 255 * g, 255 * b]
				}

				function f(t) {
					var e = t[0] / 100,
						i = t[1] / 100,
						n = t[2] / 100,
						o = t[3] / 100;
					return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))]
				}

				function m(t) {
					var e, i, n, o = t[0] / 100,
						a = t[1] / 100,
						r = t[2] / 100;
					return i = -.9689 * o + 1.8758 * a + .0415 * r, n = .0557 * o + -.204 * a + 1.057 * r, e = (e = 3.2406 * o + -1.5372 * a + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
				}

				function v(t) {
					var e = t[0],
						i = t[1],
						n = t[2];
					return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
				}

				function y(t) {
					var e, i, n, o, a = t[0],
						r = t[1],
						s = t[2];
					return a <= 8 ? o = (i = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((a + 16) / 116, 3), o = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + o, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
				}

				function x(t) {
					var e, i = t[0],
						n = t[1],
						o = t[2];
					return(e = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + o * o), e]
				}

				function w(t) {
					return m(y(t))
				}

				function k(t) {
					var e, i = t[0],
						n = t[1];
					return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
				}

				function C(t) {
					return S[t]
				}
				e.exports = {
					rgb2hsl: n,
					rgb2hsv: o,
					rgb2hwb: a,
					rgb2cmyk: s,
					rgb2keyword: l,
					rgb2xyz: c,
					rgb2lab: u,
					rgb2lch: function(t) {
						return x(u(t))
					},
					hsl2rgb: d,
					hsl2hsv: function(t) {
						var e = t[0],
							i = t[1] / 100,
							n = t[2] / 100;
						if(0 === n) return [0, 0, 0];
						return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
					},
					hsl2hwb: function(t) {
						return a(d(t))
					},
					hsl2cmyk: function(t) {
						return s(d(t))
					},
					hsl2keyword: function(t) {
						return l(d(t))
					},
					hsv2rgb: h,
					hsv2hsl: function(t) {
						var e, i, n = t[0],
							o = t[1] / 100,
							a = t[2] / 100;
						return e = o * a, [n, 100 * (e = (e /= (i = (2 - o) * a) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
					},
					hsv2hwb: function(t) {
						return a(h(t))
					},
					hsv2cmyk: function(t) {
						return s(h(t))
					},
					hsv2keyword: function(t) {
						return l(h(t))
					},
					hwb2rgb: p,
					hwb2hsl: function(t) {
						return n(p(t))
					},
					hwb2hsv: function(t) {
						return o(p(t))
					},
					hwb2cmyk: function(t) {
						return s(p(t))
					},
					hwb2keyword: function(t) {
						return l(p(t))
					},
					cmyk2rgb: f,
					cmyk2hsl: function(t) {
						return n(f(t))
					},
					cmyk2hsv: function(t) {
						return o(f(t))
					},
					cmyk2hwb: function(t) {
						return a(f(t))
					},
					cmyk2keyword: function(t) {
						return l(f(t))
					},
					keyword2rgb: C,
					keyword2hsl: function(t) {
						return n(C(t))
					},
					keyword2hsv: function(t) {
						return o(C(t))
					},
					keyword2hwb: function(t) {
						return a(C(t))
					},
					keyword2cmyk: function(t) {
						return s(C(t))
					},
					keyword2lab: function(t) {
						return u(C(t))
					},
					keyword2xyz: function(t) {
						return c(C(t))
					},
					xyz2rgb: m,
					xyz2lab: v,
					xyz2lch: function(t) {
						return x(v(t))
					},
					lab2xyz: y,
					lab2rgb: w,
					lab2lch: x,
					lch2lab: k,
					lch2xyz: function(t) {
						return y(k(t))
					},
					lch2rgb: function(t) {
						return w(k(t))
					}
				};
				var S = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					M = {};
				for(var T in S) M[JSON.stringify(S[T])] = T
			}, {}],
			5: [function(t, e, i) {
				var n = t(4),
					o = function() {
						return new c
					};
				for(var a in n) {
					o[a + "Raw"] = function(t) {
						return function(e) {
							return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
						}
					}(a);
					var r = /(\w+)2(\w+)/.exec(a),
						s = r[1],
						l = r[2];
					(o[s] = o[s] || {})[l] = o[a] = function(t) {
						return function(e) {
							"number" == typeof e && (e = Array.prototype.slice.call(arguments));
							var i = n[t](e);
							if("string" == typeof i || void 0 === i) return i;
							for(var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
							return i
						}
					}(a)
				}
				var c = function() {
					this.convs = {}
				};
				c.prototype.routeSpace = function(t, e) {
					var i = e[0];
					return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
				}, c.prototype.setValues = function(t, e) {
					return this.space = t, this.convs = {}, this.convs[t] = e, this
				}, c.prototype.getValues = function(t) {
					var e = this.convs[t];
					if(!e) {
						var i = this.space,
							n = this.convs[i];
						e = o[i][t](n), this.convs[t] = e
					}
					return e
				}, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
					c.prototype[t] = function(e) {
						return this.routeSpace(t, arguments)
					}
				}), e.exports = o
			}, {
				4: 4
			}],
			6: [function(t, e, i) {
				"use strict";
				e.exports = {
					aliceblue: [240, 248, 255],
					antiquewhite: [250, 235, 215],
					aqua: [0, 255, 255],
					aquamarine: [127, 255, 212],
					azure: [240, 255, 255],
					beige: [245, 245, 220],
					bisque: [255, 228, 196],
					black: [0, 0, 0],
					blanchedalmond: [255, 235, 205],
					blue: [0, 0, 255],
					blueviolet: [138, 43, 226],
					brown: [165, 42, 42],
					burlywood: [222, 184, 135],
					cadetblue: [95, 158, 160],
					chartreuse: [127, 255, 0],
					chocolate: [210, 105, 30],
					coral: [255, 127, 80],
					cornflowerblue: [100, 149, 237],
					cornsilk: [255, 248, 220],
					crimson: [220, 20, 60],
					cyan: [0, 255, 255],
					darkblue: [0, 0, 139],
					darkcyan: [0, 139, 139],
					darkgoldenrod: [184, 134, 11],
					darkgray: [169, 169, 169],
					darkgreen: [0, 100, 0],
					darkgrey: [169, 169, 169],
					darkkhaki: [189, 183, 107],
					darkmagenta: [139, 0, 139],
					darkolivegreen: [85, 107, 47],
					darkorange: [255, 140, 0],
					darkorchid: [153, 50, 204],
					darkred: [139, 0, 0],
					darksalmon: [233, 150, 122],
					darkseagreen: [143, 188, 143],
					darkslateblue: [72, 61, 139],
					darkslategray: [47, 79, 79],
					darkslategrey: [47, 79, 79],
					darkturquoise: [0, 206, 209],
					darkviolet: [148, 0, 211],
					deeppink: [255, 20, 147],
					deepskyblue: [0, 191, 255],
					dimgray: [105, 105, 105],
					dimgrey: [105, 105, 105],
					dodgerblue: [30, 144, 255],
					firebrick: [178, 34, 34],
					floralwhite: [255, 250, 240],
					forestgreen: [34, 139, 34],
					fuchsia: [255, 0, 255],
					gainsboro: [220, 220, 220],
					ghostwhite: [248, 248, 255],
					gold: [255, 215, 0],
					goldenrod: [218, 165, 32],
					gray: [128, 128, 128],
					green: [0, 128, 0],
					greenyellow: [173, 255, 47],
					grey: [128, 128, 128],
					honeydew: [240, 255, 240],
					hotpink: [255, 105, 180],
					indianred: [205, 92, 92],
					indigo: [75, 0, 130],
					ivory: [255, 255, 240],
					khaki: [240, 230, 140],
					lavender: [230, 230, 250],
					lavenderblush: [255, 240, 245],
					lawngreen: [124, 252, 0],
					lemonchiffon: [255, 250, 205],
					lightblue: [173, 216, 230],
					lightcoral: [240, 128, 128],
					lightcyan: [224, 255, 255],
					lightgoldenrodyellow: [250, 250, 210],
					lightgray: [211, 211, 211],
					lightgreen: [144, 238, 144],
					lightgrey: [211, 211, 211],
					lightpink: [255, 182, 193],
					lightsalmon: [255, 160, 122],
					lightseagreen: [32, 178, 170],
					lightskyblue: [135, 206, 250],
					lightslategray: [119, 136, 153],
					lightslategrey: [119, 136, 153],
					lightsteelblue: [176, 196, 222],
					lightyellow: [255, 255, 224],
					lime: [0, 255, 0],
					limegreen: [50, 205, 50],
					linen: [250, 240, 230],
					magenta: [255, 0, 255],
					maroon: [128, 0, 0],
					mediumaquamarine: [102, 205, 170],
					mediumblue: [0, 0, 205],
					mediumorchid: [186, 85, 211],
					mediumpurple: [147, 112, 219],
					mediumseagreen: [60, 179, 113],
					mediumslateblue: [123, 104, 238],
					mediumspringgreen: [0, 250, 154],
					mediumturquoise: [72, 209, 204],
					mediumvioletred: [199, 21, 133],
					midnightblue: [25, 25, 112],
					mintcream: [245, 255, 250],
					mistyrose: [255, 228, 225],
					moccasin: [255, 228, 181],
					navajowhite: [255, 222, 173],
					navy: [0, 0, 128],
					oldlace: [253, 245, 230],
					olive: [128, 128, 0],
					olivedrab: [107, 142, 35],
					orange: [255, 165, 0],
					orangered: [255, 69, 0],
					orchid: [218, 112, 214],
					palegoldenrod: [238, 232, 170],
					palegreen: [152, 251, 152],
					paleturquoise: [175, 238, 238],
					palevioletred: [219, 112, 147],
					papayawhip: [255, 239, 213],
					peachpuff: [255, 218, 185],
					peru: [205, 133, 63],
					pink: [255, 192, 203],
					plum: [221, 160, 221],
					powderblue: [176, 224, 230],
					purple: [128, 0, 128],
					rebeccapurple: [102, 51, 153],
					red: [255, 0, 0],
					rosybrown: [188, 143, 143],
					royalblue: [65, 105, 225],
					saddlebrown: [139, 69, 19],
					salmon: [250, 128, 114],
					sandybrown: [244, 164, 96],
					seagreen: [46, 139, 87],
					seashell: [255, 245, 238],
					sienna: [160, 82, 45],
					silver: [192, 192, 192],
					skyblue: [135, 206, 235],
					slateblue: [106, 90, 205],
					slategray: [112, 128, 144],
					slategrey: [112, 128, 144],
					snow: [255, 250, 250],
					springgreen: [0, 255, 127],
					steelblue: [70, 130, 180],
					tan: [210, 180, 140],
					teal: [0, 128, 128],
					thistle: [216, 191, 216],
					tomato: [255, 99, 71],
					turquoise: [64, 224, 208],
					violet: [238, 130, 238],
					wheat: [245, 222, 179],
					white: [255, 255, 255],
					whitesmoke: [245, 245, 245],
					yellow: [255, 255, 0],
					yellowgreen: [154, 205, 50]
				}
			}, {}],
			7: [function(t, e, i) {
				var n = t(30)();
				n.helpers = t(46), t(28)(n), n.Animation = t(22), n.animationService = t(23), n.defaults = t(26), n.Element = t(27), n.elements = t(41), n.Interaction = t(29), n.layouts = t(31), n.platform = t(49), n.plugins = t(32), n.Scale = t(33), n.scaleService = t(34), n.Ticks = t(35), n.Tooltip = t(36), t(24)(n), t(25)(n), t(56)(n), t(54)(n), t(55)(n), t(57)(n), t(58)(n), t(59)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
				var o = t(50);
				for(var a in o) o.hasOwnProperty(a) && n.plugins.register(o[a]);
				n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = o.legend._element, n.Title = o.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
			}, {
				10: 10,
				11: 11,
				12: 12,
				13: 13,
				14: 14,
				15: 15,
				16: 16,
				17: 17,
				18: 18,
				19: 19,
				20: 20,
				21: 21,
				22: 22,
				23: 23,
				24: 24,
				25: 25,
				26: 26,
				27: 27,
				28: 28,
				29: 29,
				30: 30,
				31: 31,
				32: 32,
				33: 33,
				34: 34,
				35: 35,
				36: 36,
				41: 41,
				46: 46,
				49: 49,
				50: 50,
				54: 54,
				55: 55,
				56: 56,
				57: 57,
				58: 58,
				59: 59,
				8: 8,
				9: 9
			}],
			8: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Bar = function(e, i) {
						return i.type = "bar", new t(e, i)
					}
				}
			}, {}],
			9: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Bubble = function(e, i) {
						return i.type = "bubble", new t(e, i)
					}
				}
			}, {}],
			10: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Doughnut = function(e, i) {
						return i.type = "doughnut", new t(e, i)
					}
				}
			}, {}],
			11: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Line = function(e, i) {
						return i.type = "line", new t(e, i)
					}
				}
			}, {}],
			12: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.PolarArea = function(e, i) {
						return i.type = "polarArea", new t(e, i)
					}
				}
			}, {}],
			13: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Radar = function(e, i) {
						return i.type = "radar", new t(e, i)
					}
				}
			}, {}],
			14: [function(t, e, i) {
				"use strict";
				e.exports = function(t) {
					t.Scatter = function(e, i) {
						return i.type = "scatter", new t(e, i)
					}
				}
			}, {}],
			15: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("bar", {
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							categoryPercentage: .8,
							barPercentage: .9,
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}],
						yAxes: [{
							type: "linear"
						}]
					}
				}), n._set("horizontalBar", {
					hover: {
						mode: "index",
						axis: "y"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							position: "left",
							type: "category",
							categoryPercentage: .8,
							barPercentage: .9,
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}]
					},
					elements: {
						rectangle: {
							borderSkipped: "left"
						}
					},
					tooltips: {
						callbacks: {
							title: function(t, e) {
								var i = "";
								return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
							},
							label: function(t, e) {
								return(e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
							}
						},
						mode: "index",
						axis: "y"
					}
				}), e.exports = function(t) {
					t.controllers.bar = t.DatasetController.extend({
						dataElementType: o.Rectangle,
						initialize: function() {
							var e;
							t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
						},
						update: function(t) {
							var e, i, n = this.getMeta().data;
							for(this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
						},
						updateElement: function(t, e, i) {
							var n = this,
								o = n.chart,
								r = n.getMeta(),
								s = n.getDataset(),
								l = t.custom || {},
								c = o.options.elements.rectangle;
							t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
								datasetLabel: s.label,
								label: o.data.labels[e],
								borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped,
								backgroundColor: l.backgroundColor ? l.backgroundColor : a.valueAtIndexOrDefault(s.backgroundColor, e, c.backgroundColor),
								borderColor: l.borderColor ? l.borderColor : a.valueAtIndexOrDefault(s.borderColor, e, c.borderColor),
								borderWidth: l.borderWidth ? l.borderWidth : a.valueAtIndexOrDefault(s.borderWidth, e, c.borderWidth)
							}, n.updateElementGeometry(t, e, i), t.pivot()
						},
						updateElementGeometry: function(t, e, i) {
							var n = this,
								o = t._model,
								a = n.getValueScale(),
								r = a.getBasePixel(),
								s = a.isHorizontal(),
								l = n._ruler || n.getRuler(),
								c = n.calculateBarValuePixels(n.index, e),
								u = n.calculateBarIndexPixels(n.index, e, l);
							o.horizontal = s, o.base = i ? r : c.base, o.x = s ? i ? r : c.head : u.center, o.y = s ? u.center : i ? r : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
						},
						getValueScaleId: function() {
							return this.getMeta().yAxisID
						},
						getIndexScaleId: function() {
							return this.getMeta().xAxisID
						},
						getValueScale: function() {
							return this.getScaleForId(this.getValueScaleId())
						},
						getIndexScale: function() {
							return this.getScaleForId(this.getIndexScaleId())
						},
						_getStacks: function(t) {
							var e, i, n = this.chart,
								o = this.getIndexScale().options.stacked,
								a = void 0 === t ? n.data.datasets.length : t + 1,
								r = [];
							for(e = 0; e < a; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === r.indexOf(i.stack) || void 0 === o && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
							return r
						},
						getStackCount: function() {
							return this._getStacks().length
						},
						getStackIndex: function(t, e) {
							var i = this._getStacks(t),
								n = void 0 !== e ? i.indexOf(e) : -1;
							return -1 === n ? i.length - 1 : n
						},
						getRuler: function() {
							var t, e, i = this.getIndexScale(),
								n = this.getStackCount(),
								o = this.index,
								r = i.isHorizontal(),
								s = r ? i.left : i.top,
								l = s + (r ? i.width : i.height),
								c = [];
							for(t = 0, e = this.getMeta().data.length; t < e; ++t) c.push(i.getPixelForValue(null, t, o));
							return {
								min: a.isNullOrUndef(i.options.barThickness) ? function(t, e) {
									var i, n, o, a, r = t.isHorizontal() ? t.width : t.height,
										s = t.getTicks();
									for(o = 1, a = e.length; o < a; ++o) r = Math.min(r, e[o] - e[o - 1]);
									for(o = 0, a = s.length; o < a; ++o) n = t.getPixelForTick(o), r = o > 0 ? Math.min(r, n - i) : r, i = n;
									return r
								}(i, c) : -1,
								pixels: c,
								start: s,
								end: l,
								stackCount: n,
								scale: i
							}
						},
						calculateBarValuePixels: function(t, e) {
							var i, n, o, a, r, s, l = this.chart,
								c = this.getMeta(),
								u = this.getValueScale(),
								d = l.data.datasets,
								h = u.getRightValue(d[t].data[e]),
								p = u.options.stacked,
								f = c.stack,
								m = 0;
							if(p || void 0 === p && void 0 !== f)
								for(i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === f && n.controller.getValueScaleId() === u.id && l.isDatasetVisible(i) && (o = u.getRightValue(d[i].data[e]), (h < 0 && o < 0 || h >= 0 && o > 0) && (m += o));
							return a = u.getPixelForValue(m), {
								size: s = ((r = u.getPixelForValue(m + h)) - a) / 2,
								base: a,
								head: r,
								center: r + s / 2
							}
						},
						calculateBarIndexPixels: function(t, e, i) {
							var n = i.scale.options,
								o = "flex" === n.barThickness ? function(t, e, i) {
									var n, o = e.pixels,
										a = o[t],
										r = t > 0 ? o[t - 1] : null,
										s = t < o.length - 1 ? o[t + 1] : null,
										l = i.categoryPercentage;
									return null === r && (r = a - (null === s ? e.end - a : s - a)), null === s && (s = a + a - r), n = a - (a - r) / 2 * l, {
										chunk: (s - r) / 2 * l / e.stackCount,
										ratio: i.barPercentage,
										start: n
									}
								}(e, i, n) : function(t, e, i) {
									var n, o, r = i.barThickness,
										s = e.stackCount,
										l = e.pixels[t];
									return a.isNullOrUndef(r) ? (n = e.min * i.categoryPercentage, o = i.barPercentage) : (n = r * s, o = 1), {
										chunk: n / s,
										ratio: o,
										start: l - n / 2
									}
								}(e, i, n),
								r = this.getStackIndex(t, this.getMeta().stack),
								s = o.start + o.chunk * r + o.chunk / 2,
								l = Math.min(a.valueOrDefault(n.maxBarThickness, 1 / 0), o.chunk * o.ratio);
							return {
								base: s - l / 2,
								head: s + l / 2,
								center: s,
								size: l
							}
						},
						draw: function() {
							var t = this.chart,
								e = this.getValueScale(),
								i = this.getMeta().data,
								n = this.getDataset(),
								o = i.length,
								r = 0;
							for(a.canvas.clipArea(t.ctx, t.chartArea); r < o; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
							a.canvas.unclipArea(t.ctx)
						}
					}), t.controllers.horizontalBar = t.controllers.bar.extend({
						getValueScaleId: function() {
							return this.getMeta().xAxisID
						},
						getIndexScaleId: function() {
							return this.getMeta().yAxisID
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			16: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("bubble", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							position: "left",
							id: "y-axis-0"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								var i = e.datasets[t.datasetIndex].label || "",
									n = e.datasets[t.datasetIndex].data[t.index];
								return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
							}
						}
					}
				}), e.exports = function(t) {
					t.controllers.bubble = t.DatasetController.extend({
						dataElementType: o.Point,
						update: function(t) {
							var e = this,
								i = e.getMeta().data;
							a.each(i, function(i, n) {
								e.updateElement(i, n, t)
							})
						},
						updateElement: function(t, e, i) {
							var n = this,
								o = n.getMeta(),
								a = t.custom || {},
								r = n.getScaleForId(o.xAxisID),
								s = n.getScaleForId(o.yAxisID),
								l = n._resolveElementOptions(t, e),
								c = n.getDataset().data[e],
								u = n.index,
								d = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof c ? c : NaN, e, u),
								h = i ? s.getBasePixel() : s.getPixelForValue(c, e, u);
							t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
								backgroundColor: l.backgroundColor,
								borderColor: l.borderColor,
								borderWidth: l.borderWidth,
								hitRadius: l.hitRadius,
								pointStyle: l.pointStyle,
								rotation: l.rotation,
								radius: i ? 0 : l.radius,
								skip: a.skip || isNaN(d) || isNaN(h),
								x: d,
								y: h
							}, t.pivot()
						},
						setHoverStyle: function(t) {
							var e = t._model,
								i = t._options;
							t.$previousStyle = {
								backgroundColor: e.backgroundColor,
								borderColor: e.borderColor,
								borderWidth: e.borderWidth,
								radius: e.radius
							}, e.backgroundColor = a.valueOrDefault(i.hoverBackgroundColor, a.getHoverColor(i.backgroundColor)), e.borderColor = a.valueOrDefault(i.hoverBorderColor, a.getHoverColor(i.borderColor)), e.borderWidth = a.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
						},
						_resolveElementOptions: function(t, e) {
							var i, n, o, r = this.chart,
								s = r.data.datasets[this.index],
								l = t.custom || {},
								c = r.options.elements.point,
								u = a.options.resolve,
								d = s.data[e],
								h = {},
								p = {
									chart: r,
									dataIndex: e,
									dataset: s,
									datasetIndex: this.index
								},
								f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
							for(i = 0, n = f.length; i < n; ++i) h[o = f[i]] = u([l[o], s[o], c[o]], p, e);
							return h.radius = u([l.radius, d ? d.r : void 0, s.radius, c.radius], p, e), h
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			17: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("doughnut", {
					animation: {
						animateRotate: !0,
						animateScale: !1
					},
					hover: {
						mode: "single"
					},
					legendCallback: function(t) {
						var e = [];
						e.push('<ul class="' + t.id + '-legend">');
						var i = t.data,
							n = i.datasets,
							o = i.labels;
						if(n.length)
							for(var a = 0; a < n[0].data.length; ++a) e.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
						return e.push("</ul>"), e.join("")
					},
					legend: {
						labels: {
							generateLabels: function(t) {
								var e = t.data;
								return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
									var o = t.getDatasetMeta(0),
										r = e.datasets[0],
										s = o.data[n],
										l = s && s.custom || {},
										c = a.valueAtIndexOrDefault,
										u = t.options.elements.arc;
									return {
										text: i,
										fillStyle: l.backgroundColor ? l.backgroundColor : c(r.backgroundColor, n, u.backgroundColor),
										strokeStyle: l.borderColor ? l.borderColor : c(r.borderColor, n, u.borderColor),
										lineWidth: l.borderWidth ? l.borderWidth : c(r.borderWidth, n, u.borderWidth),
										hidden: isNaN(r.data[n]) || o.data[n].hidden,
										index: n
									}
								}) : []
							}
						},
						onClick: function(t, e) {
							var i, n, o, a = e.index,
								r = this.chart;
							for(i = 0, n = (r.data.datasets || []).length; i < n; ++i)(o = r.getDatasetMeta(i)).data[a] && (o.data[a].hidden = !o.data[a].hidden);
							r.update()
						}
					},
					cutoutPercentage: 50,
					rotation: -.5 * Math.PI,
					circumference: 2 * Math.PI,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								var i = e.labels[t.index],
									n = ": " + e.datasets[t.datasetIndex].data[t.index];
								return a.isArray(i) ? (i = i.slice())[0] += n : i += n, i
							}
						}
					}
				}), n._set("pie", a.clone(n.doughnut)), n._set("pie", {
					cutoutPercentage: 0
				}), e.exports = function(t) {
					t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
						dataElementType: o.Arc,
						linkScales: a.noop,
						getRingIndex: function(t) {
							for(var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
							return e
						},
						update: function(t) {
							var e = this,
								i = e.chart,
								n = i.chartArea,
								o = i.options,
								r = o.elements.arc,
								s = n.right - n.left - r.borderWidth,
								l = n.bottom - n.top - r.borderWidth,
								c = Math.min(s, l),
								u = {
									x: 0,
									y: 0
								},
								d = e.getMeta(),
								h = o.cutoutPercentage,
								p = o.circumference;
							if(p < 2 * Math.PI) {
								var f = o.rotation % (2 * Math.PI),
									m = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + p,
									v = {
										x: Math.cos(f),
										y: Math.sin(f)
									},
									g = {
										x: Math.cos(m),
										y: Math.sin(m)
									},
									b = f <= 0 && m >= 0 || f <= 2 * Math.PI && 2 * Math.PI <= m,
									y = f <= .5 * Math.PI && .5 * Math.PI <= m || f <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
									x = f <= -Math.PI && -Math.PI <= m || f <= Math.PI && Math.PI <= m,
									w = f <= .5 * -Math.PI && .5 * -Math.PI <= m || f <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
									k = h / 100,
									C = {
										x: x ? -1 : Math.min(v.x * (v.x < 0 ? 1 : k), g.x * (g.x < 0 ? 1 : k)),
										y: w ? -1 : Math.min(v.y * (v.y < 0 ? 1 : k), g.y * (g.y < 0 ? 1 : k))
									},
									S = {
										x: b ? 1 : Math.max(v.x * (v.x > 0 ? 1 : k), g.x * (g.x > 0 ? 1 : k)),
										y: y ? 1 : Math.max(v.y * (v.y > 0 ? 1 : k), g.y * (g.y > 0 ? 1 : k))
									},
									M = {
										width: .5 * (S.x - C.x),
										height: .5 * (S.y - C.y)
									};
								c = Math.min(s / M.width, l / M.height), u = {
									x: -.5 * (S.x + C.x),
									y: -.5 * (S.y + C.y)
								}
							}
							i.borderWidth = e.getMaxBorderWidth(d.data), i.outerRadius = Math.max((c - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, d.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), a.each(d.data, function(i, n) {
								e.updateElement(i, n, t)
							})
						},
						updateElement: function(t, e, i) {
							var n = this,
								o = n.chart,
								r = o.chartArea,
								s = o.options,
								l = s.animation,
								c = (r.left + r.right) / 2,
								u = (r.top + r.bottom) / 2,
								d = s.rotation,
								h = s.rotation,
								p = n.getDataset(),
								f = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(p.data[e]) * (s.circumference / (2 * Math.PI)),
								m = i && l.animateScale ? 0 : n.innerRadius,
								v = i && l.animateScale ? 0 : n.outerRadius,
								g = a.valueAtIndexOrDefault;
							a.extend(t, {
								_datasetIndex: n.index,
								_index: e,
								_model: {
									x: c + o.offsetX,
									y: u + o.offsetY,
									startAngle: d,
									endAngle: h,
									circumference: f,
									outerRadius: v,
									innerRadius: m,
									label: g(p.label, e, o.data.labels[e])
								}
							});
							var b = t._model,
								y = t.custom || {},
								x = a.valueAtIndexOrDefault,
								w = this.chart.options.elements.arc;
							b.backgroundColor = y.backgroundColor ? y.backgroundColor : x(p.backgroundColor, e, w.backgroundColor), b.borderColor = y.borderColor ? y.borderColor : x(p.borderColor, e, w.borderColor), b.borderWidth = y.borderWidth ? y.borderWidth : x(p.borderWidth, e, w.borderWidth), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
						},
						calculateTotal: function() {
							var t, e = this.getDataset(),
								i = this.getMeta(),
								n = 0;
							return a.each(i.data, function(i, o) {
								t = e.data[o], isNaN(t) || i.hidden || (n += Math.abs(t))
							}), n
						},
						calculateCircumference: function(t) {
							var e = this.getMeta().total;
							return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
						},
						getMaxBorderWidth: function(t) {
							for(var e, i, n = 0, o = this.index, a = t.length, r = 0; r < a; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
							return n
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			18: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("line", {
					showLines: !0,
					spanGaps: !1,
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							id: "y-axis-0"
						}]
					}
				}), e.exports = function(t) {
					function e(t, e) {
						return a.valueOrDefault(t.showLine, e.showLines)
					}
					t.controllers.line = t.DatasetController.extend({
						datasetElementType: o.Line,
						dataElementType: o.Point,
						update: function(t) {
							var i, n, o, r = this,
								s = r.getMeta(),
								l = s.dataset,
								c = s.data || [],
								u = r.chart.options,
								d = u.elements.line,
								h = r.getScaleForId(s.yAxisID),
								p = r.getDataset(),
								f = e(p, u);
							for(f && (o = l.custom || {}, void 0 !== p.tension && void 0 === p.lineTension && (p.lineTension = p.tension), l._scale = h, l._datasetIndex = r.index, l._children = c, l._model = {
									spanGaps: p.spanGaps ? p.spanGaps : u.spanGaps,
									tension: o.tension ? o.tension : a.valueOrDefault(p.lineTension, d.tension),
									backgroundColor: o.backgroundColor ? o.backgroundColor : p.backgroundColor || d.backgroundColor,
									borderWidth: o.borderWidth ? o.borderWidth : p.borderWidth || d.borderWidth,
									borderColor: o.borderColor ? o.borderColor : p.borderColor || d.borderColor,
									borderCapStyle: o.borderCapStyle ? o.borderCapStyle : p.borderCapStyle || d.borderCapStyle,
									borderDash: o.borderDash ? o.borderDash : p.borderDash || d.borderDash,
									borderDashOffset: o.borderDashOffset ? o.borderDashOffset : p.borderDashOffset || d.borderDashOffset,
									borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : p.borderJoinStyle || d.borderJoinStyle,
									fill: o.fill ? o.fill : void 0 !== p.fill ? p.fill : d.fill,
									steppedLine: o.steppedLine ? o.steppedLine : a.valueOrDefault(p.steppedLine, d.stepped),
									cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.valueOrDefault(p.cubicInterpolationMode, d.cubicInterpolationMode)
								}, l.pivot()), i = 0, n = c.length; i < n; ++i) r.updateElement(c[i], i, t);
							for(f && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = c.length; i < n; ++i) c[i].pivot()
						},
						getPointBackgroundColor: function(t, e) {
							var i = this.chart.options.elements.point.backgroundColor,
								n = this.getDataset(),
								o = t.custom || {};
							return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
						},
						getPointBorderColor: function(t, e) {
							var i = this.chart.options.elements.point.borderColor,
								n = this.getDataset(),
								o = t.custom || {};
							return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
						},
						getPointBorderWidth: function(t, e) {
							var i = this.chart.options.elements.point.borderWidth,
								n = this.getDataset(),
								o = t.custom || {};
							return isNaN(o.borderWidth) ? !isNaN(n.pointBorderWidth) || a.isArray(n.pointBorderWidth) ? i = a.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = o.borderWidth, i
						},
						getPointRotation: function(t, e) {
							var i = this.chart.options.elements.point.rotation,
								n = this.getDataset(),
								o = t.custom || {};
							return isNaN(o.rotation) ? isNaN(n.pointRotation) && !a.isArray(n.pointRotation) || (i = a.valueAtIndexOrDefault(n.pointRotation, e, i)) : i = o.rotation, i
						},
						updateElement: function(t, e, i) {
							var n, o, r = this,
								s = r.getMeta(),
								l = t.custom || {},
								c = r.getDataset(),
								u = r.index,
								d = c.data[e],
								h = r.getScaleForId(s.yAxisID),
								p = r.getScaleForId(s.xAxisID),
								f = r.chart.options.elements.point;
							void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), n = p.getPixelForValue("object" == typeof d ? d : NaN, e, u), o = i ? h.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = p, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
								x: n,
								y: o,
								skip: l.skip || isNaN(n) || isNaN(o),
								radius: l.radius || a.valueAtIndexOrDefault(c.pointRadius, e, f.radius),
								pointStyle: l.pointStyle || a.valueAtIndexOrDefault(c.pointStyle, e, f.pointStyle),
								rotation: r.getPointRotation(t, e),
								backgroundColor: r.getPointBackgroundColor(t, e),
								borderColor: r.getPointBorderColor(t, e),
								borderWidth: r.getPointBorderWidth(t, e),
								tension: s.dataset._model ? s.dataset._model.tension : 0,
								steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
								hitRadius: l.hitRadius || a.valueAtIndexOrDefault(c.pointHitRadius, e, f.hitRadius)
							}
						},
						calculatePointY: function(t, e, i) {
							var n, o, a, r = this.chart,
								s = this.getMeta(),
								l = this.getScaleForId(s.yAxisID),
								c = 0,
								u = 0;
							if(l.options.stacked) {
								for(n = 0; n < i; n++)
									if(o = r.data.datasets[n], "line" === (a = r.getDatasetMeta(n)).type && a.yAxisID === l.id && r.isDatasetVisible(n)) {
										var d = Number(l.getRightValue(o.data[e]));
										d < 0 ? u += d || 0 : c += d || 0
									}
								var h = Number(l.getRightValue(t));
								return h < 0 ? l.getPixelForValue(u + h) : l.getPixelForValue(c + h)
							}
							return l.getPixelForValue(t)
						},
						updateBezierControlPoints: function() {
							var t, e, i, n, o = this.getMeta(),
								r = this.chart.chartArea,
								s = o.data || [];

							function l(t, e, i) {
								return Math.max(Math.min(t, i), e)
							}
							if(o.dataset._model.spanGaps && (s = s.filter(function(t) {
									return !t._model.skip
								})), "monotone" === o.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(s);
							else
								for(t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = a.splineCurve(a.previousItem(s, t)._model, i, a.nextItem(s, t)._model, o.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
							if(this.chart.options.elements.line.capBezierPoints)
								for(t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
						},
						draw: function() {
							var t, i = this.chart,
								n = this.getMeta(),
								o = n.data || [],
								r = i.chartArea,
								s = o.length,
								l = 0;
							for(e(this.getDataset(), i.options) && (t = (n.dataset._model.borderWidth || 0) / 2, a.canvas.clipArea(i.ctx, {
									left: r.left,
									right: r.right,
									top: r.top - t,
									bottom: r.bottom + t
								}), n.dataset.draw(), a.canvas.unclipArea(i.ctx)); l < s; ++l) o[l].draw(r)
						},
						setHoverStyle: function(t) {
							var e = this.chart.data.datasets[t._datasetIndex],
								i = t._index,
								n = t.custom || {},
								o = t._model;
							t.$previousStyle = {
								backgroundColor: o.backgroundColor,
								borderColor: o.borderColor,
								borderWidth: o.borderWidth,
								radius: o.radius
							}, o.backgroundColor = n.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth), o.radius = n.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			19: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("polarArea", {
					scale: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						gridLines: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						ticks: {
							beginAtZero: !0
						}
					},
					animation: {
						animateRotate: !0,
						animateScale: !0
					},
					startAngle: -.5 * Math.PI,
					legendCallback: function(t) {
						var e = [];
						e.push('<ul class="' + t.id + '-legend">');
						var i = t.data,
							n = i.datasets,
							o = i.labels;
						if(n.length)
							for(var a = 0; a < n[0].data.length; ++a) e.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
						return e.push("</ul>"), e.join("")
					},
					legend: {
						labels: {
							generateLabels: function(t) {
								var e = t.data;
								return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
									var o = t.getDatasetMeta(0),
										r = e.datasets[0],
										s = o.data[n].custom || {},
										l = a.valueAtIndexOrDefault,
										c = t.options.elements.arc;
									return {
										text: i,
										fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, c.backgroundColor),
										strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, c.borderColor),
										lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, c.borderWidth),
										hidden: isNaN(r.data[n]) || o.data[n].hidden,
										index: n
									}
								}) : []
							}
						},
						onClick: function(t, e) {
							var i, n, o, a = e.index,
								r = this.chart;
							for(i = 0, n = (r.data.datasets || []).length; i < n; ++i)(o = r.getDatasetMeta(i)).data[a].hidden = !o.data[a].hidden;
							r.update()
						}
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								return e.labels[t.index] + ": " + t.yLabel
							}
						}
					}
				}), e.exports = function(t) {
					t.controllers.polarArea = t.DatasetController.extend({
						dataElementType: o.Arc,
						linkScales: a.noop,
						update: function(t) {
							var e, i, n, o = this,
								r = o.getDataset(),
								s = o.getMeta(),
								l = o.chart.options.startAngle || 0,
								c = o._starts = [],
								u = o._angles = [];
							for(o._updateRadius(), s.count = o.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) c[e] = l, n = o._computeAngle(e), u[e] = n, l += n;
							a.each(s.data, function(e, i) {
								o.updateElement(e, i, t)
							})
						},
						_updateRadius: function() {
							var t = this,
								e = t.chart,
								i = e.chartArea,
								n = e.options,
								o = n.elements.arc,
								a = Math.min(i.right - i.left, i.bottom - i.top);
							e.outerRadius = Math.max((a - o.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
						},
						updateElement: function(t, e, i) {
							var n = this,
								o = n.chart,
								r = n.getDataset(),
								s = o.options,
								l = s.animation,
								c = o.scale,
								u = o.data.labels,
								d = c.xCenter,
								h = c.yCenter,
								p = s.startAngle,
								f = t.hidden ? 0 : c.getDistanceFromCenterForValue(r.data[e]),
								m = n._starts[e],
								v = m + (t.hidden ? 0 : n._angles[e]),
								g = l.animateScale ? 0 : c.getDistanceFromCenterForValue(r.data[e]);
							a.extend(t, {
								_datasetIndex: n.index,
								_index: e,
								_scale: c,
								_model: {
									x: d,
									y: h,
									innerRadius: 0,
									outerRadius: i ? g : f,
									startAngle: i && l.animateRotate ? p : m,
									endAngle: i && l.animateRotate ? p : v,
									label: a.valueAtIndexOrDefault(u, e, u[e])
								}
							});
							var b = this.chart.options.elements.arc,
								y = t.custom || {},
								x = a.valueAtIndexOrDefault,
								w = t._model;
							w.backgroundColor = y.backgroundColor ? y.backgroundColor : x(r.backgroundColor, e, b.backgroundColor), w.borderColor = y.borderColor ? y.borderColor : x(r.borderColor, e, b.borderColor), w.borderWidth = y.borderWidth ? y.borderWidth : x(r.borderWidth, e, b.borderWidth), t.pivot()
						},
						countVisibleElements: function() {
							var t = this.getDataset(),
								e = this.getMeta(),
								i = 0;
							return a.each(e.data, function(e, n) {
								isNaN(t.data[n]) || e.hidden || i++
							}), i
						},
						_computeAngle: function(t) {
							var e = this,
								i = this.getMeta().count,
								n = e.getDataset(),
								o = e.getMeta();
							if(isNaN(n.data[t]) || o.data[t].hidden) return 0;
							var r = {
								chart: e.chart,
								dataIndex: t,
								dataset: n,
								datasetIndex: e.index
							};
							return a.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / i], r, t)
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			20: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("radar", {
					scale: {
						type: "radialLinear"
					},
					elements: {
						line: {
							tension: 0
						}
					}
				}), e.exports = function(t) {
					t.controllers.radar = t.DatasetController.extend({
						datasetElementType: o.Line,
						dataElementType: o.Point,
						linkScales: a.noop,
						update: function(t) {
							var e = this,
								i = e.getMeta(),
								n = i.dataset,
								o = i.data,
								r = n.custom || {},
								s = e.getDataset(),
								l = e.chart.options.elements.line,
								c = e.chart.scale;
							void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a.extend(i.dataset, {
								_datasetIndex: e.index,
								_scale: c,
								_children: o,
								_loop: !0,
								_model: {
									tension: r.tension ? r.tension : a.valueOrDefault(s.lineTension, l.tension),
									backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
									borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
									borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
									fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
									borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
									borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
									borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
									borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
								}
							}), i.dataset.pivot(), a.each(o, function(i, n) {
								e.updateElement(i, n, t)
							}, e), e.updateBezierControlPoints()
						},
						updateElement: function(t, e, i) {
							var n = this,
								o = t.custom || {},
								r = n.getDataset(),
								s = n.chart.scale,
								l = n.chart.options.elements.point,
								c = s.getPointPositionForValue(e, r.data[e]);
							void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), a.extend(t, {
								_datasetIndex: n.index,
								_index: e,
								_scale: s,
								_model: {
									x: i ? s.xCenter : c.x,
									y: i ? s.yCenter : c.y,
									tension: o.tension ? o.tension : a.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
									radius: o.radius ? o.radius : a.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
									backgroundColor: o.backgroundColor ? o.backgroundColor : a.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
									borderColor: o.borderColor ? o.borderColor : a.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
									borderWidth: o.borderWidth ? o.borderWidth : a.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
									pointStyle: o.pointStyle ? o.pointStyle : a.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
									rotation: o.rotation ? o.rotation : a.valueAtIndexOrDefault(r.pointRotation, e, l.rotation),
									hitRadius: o.hitRadius ? o.hitRadius : a.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
								}
							}), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
						},
						updateBezierControlPoints: function() {
							var t = this.chart.chartArea,
								e = this.getMeta();
							a.each(e.data, function(i, n) {
								var o = i._model,
									r = a.splineCurve(a.previousItem(e.data, n, !0)._model, o, a.nextItem(e.data, n, !0)._model, o.tension);
								o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
							})
						},
						setHoverStyle: function(t) {
							var e = this.chart.data.datasets[t._datasetIndex],
								i = t.custom || {},
								n = t._index,
								o = t._model;
							t.$previousStyle = {
								backgroundColor: o.backgroundColor,
								borderColor: o.borderColor,
								borderWidth: o.borderWidth,
								radius: o.radius
							}, o.radius = i.hoverRadius ? i.hoverRadius : a.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, a.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : a.valueAtIndexOrDefault(e.pointHoverBorderColor, n, a.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : a.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth)
						}
					})
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			21: [function(t, e, i) {
				"use strict";
				t(26)._set("scatter", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							id: "x-axis-1",
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							id: "y-axis-1",
							type: "linear",
							position: "left"
						}]
					},
					showLines: !1,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t) {
								return "(" + t.xLabel + ", " + t.yLabel + ")"
							}
						}
					}
				}), e.exports = function(t) {
					t.controllers.scatter = t.controllers.line
				}
			}, {
				26: 26
			}],
			22: [function(t, e, i) {
				"use strict";
				var n = t(27);
				i = e.exports = n.extend({
					chart: null,
					currentStep: 0,
					numSteps: 60,
					easing: "",
					render: null,
					onAnimationProgress: null,
					onAnimationComplete: null
				});
				Object.defineProperty(i.prototype, "animationObject", {
					get: function() {
						return this
					}
				}), Object.defineProperty(i.prototype, "chartInstance", {
					get: function() {
						return this.chart
					},
					set: function(t) {
						this.chart = t
					}
				})
			}, {
				27: 27
			}],
			23: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(46);
				n._set("global", {
					animation: {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: o.noop,
						onComplete: o.noop
					}
				}), e.exports = {
					frameDuration: 17,
					animations: [],
					dropFrames: 0,
					request: null,
					addAnimation: function(t, e, i, n) {
						var o, a, r = this.animations;
						for(e.chart = t, n || (t.animating = !0), o = 0, a = r.length; o < a; ++o)
							if(r[o].chart === t) return void(r[o] = e);
						r.push(e), 1 === r.length && this.requestAnimationFrame()
					},
					cancelAnimation: function(t) {
						var e = o.findIndex(this.animations, function(e) {
							return e.chart === t
						}); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
					},
					requestAnimationFrame: function() {
						var t = this;
						null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
							t.request = null, t.startDigest()
						}))
					},
					startDigest: function() {
						var t = this,
							e = Date.now(),
							i = 0;
						t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
						var n = Date.now();
						t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
					},
					advance: function(t) {
						for(var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
					}
				}
			}, {
				26: 26,
				46: 46
			}],
			24: [function(t, e, i) {
				"use strict";
				var n = t(22),
					o = t(23),
					a = t(26),
					r = t(46),
					s = t(29),
					l = t(31),
					c = t(49),
					u = t(32),
					d = t(34),
					h = t(36);
				e.exports = function(t) {
					function e(t) {
						return "top" === t || "bottom" === t
					}
					t.types = {}, t.instances = {}, t.controllers = {}, r.extend(t.prototype, {
						construct: function(e, i) {
							var n = this;
							i = function(t) {
								var e = (t = t || {}).data = t.data || {};
								return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = r.configMerge(a.global, a[t.type], t.options || {}), t
							}(i);
							var o = c.acquireContext(e, i),
								s = o && o.canvas,
								l = s && s.height,
								u = s && s.width;
							n.id = r.uid(), n.ctx = o, n.canvas = s, n.config = i, n.width = u, n.height = l, n.aspectRatio = l ? u / l : null, n.options = i.options, n._bufferedRender = !1, n.chart = n, n.controller = n, t.instances[n.id] = n, Object.defineProperty(n, "data", {
								get: function() {
									return n.config.data
								},
								set: function(t) {
									n.config.data = t
								}
							}), o && s ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
						},
						initialize: function() {
							var t = this;
							return u.notify(t, "beforeInit"), r.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), u.notify(t, "afterInit"), t
						},
						clear: function() {
							return r.canvas.clear(this), this
						},
						stop: function() {
							return o.cancelAnimation(this), this
						},
						resize: function(t) {
							var e = this,
								i = e.options,
								n = e.canvas,
								o = i.maintainAspectRatio && e.aspectRatio || null,
								a = Math.max(0, Math.floor(r.getMaximumWidth(n))),
								s = Math.max(0, Math.floor(o ? a / o : r.getMaximumHeight(n)));
							if((e.width !== a || e.height !== s) && (n.width = e.width = a, n.height = e.height = s, n.style.width = a + "px", n.style.height = s + "px", r.retinaScale(e, i.devicePixelRatio), !t)) {
								var l = {
									width: a,
									height: s
								};
								u.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
									duration: e.options.responsiveAnimationDuration
								})
							}
						},
						ensureScalesHaveIDs: function() {
							var t = this.options,
								e = t.scales || {},
								i = t.scale;
							r.each(e.xAxes, function(t, e) {
								t.id = t.id || "x-axis-" + e
							}), r.each(e.yAxes, function(t, e) {
								t.id = t.id || "y-axis-" + e
							}), i && (i.id = i.id || "scale")
						},
						buildOrUpdateScales: function() {
							var t = this,
								i = t.options,
								n = t.scales || {},
								o = [],
								a = Object.keys(n).reduce(function(t, e) {
									return t[e] = !1, t
								}, {});
							i.scales && (o = o.concat((i.scales.xAxes || []).map(function(t) {
								return {
									options: t,
									dtype: "category",
									dposition: "bottom"
								}
							}), (i.scales.yAxes || []).map(function(t) {
								return {
									options: t,
									dtype: "linear",
									dposition: "left"
								}
							}))), i.scale && o.push({
								options: i.scale,
								dtype: "radialLinear",
								isDefault: !0,
								dposition: "chartArea"
							}), r.each(o, function(i) {
								var o = i.options,
									s = o.id,
									l = r.valueOrDefault(o.type, i.dtype);
								e(o.position) !== e(i.dposition) && (o.position = i.dposition), a[s] = !0;
								var c = null;
								if(s in n && n[s].type === l)(c = n[s]).options = o, c.ctx = t.ctx, c.chart = t;
								else {
									var u = d.getScaleConstructor(l);
									if(!u) return;
									c = new u({
										id: s,
										type: l,
										options: o,
										ctx: t.ctx,
										chart: t
									}), n[c.id] = c
								}
								c.mergeTicksOptions(), i.isDefault && (t.scale = c)
							}), r.each(a, function(t, e) {
								t || delete n[e]
							}), t.scales = n, d.addScalesToLayout(this)
						},
						buildOrUpdateControllers: function() {
							var e = this,
								i = [],
								n = [];
							return r.each(e.data.datasets, function(o, a) {
								var r = e.getDatasetMeta(a),
									s = o.type || e.config.type;
								if(r.type && r.type !== s && (e.destroyDatasetMeta(a), r = e.getDatasetMeta(a)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(a), r.controller.linkScales();
								else {
									var l = t.controllers[r.type];
									if(void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
									r.controller = new l(e, a), n.push(r.controller)
								}
							}, e), n
						},
						resetElements: function() {
							var t = this;
							r.each(t.data.datasets, function(e, i) {
								t.getDatasetMeta(i).controller.reset()
							}, t)
						},
						reset: function() {
							this.resetElements(), this.tooltip.initialize()
						},
						update: function(e) {
							var i, n, o = this;
							if(e && "object" == typeof e || (e = {
									duration: e,
									lazy: arguments[1]
								}), n = (i = o).options, r.each(i.scales, function(t) {
									l.removeBox(i, t)
								}), n = r.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), u._invalidate(o), !1 !== u.notify(o, "beforeUpdate")) {
								o.tooltip._data = o.data;
								var a = o.buildOrUpdateControllers();
								r.each(o.data.datasets, function(t, e) {
									o.getDatasetMeta(e).controller.buildOrUpdateElements()
								}, o), o.updateLayout(), o.options.animation && o.options.animation.duration && r.each(a, function(t) {
									t.reset()
								}), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], u.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
									duration: e.duration,
									easing: e.easing,
									lazy: e.lazy
								} : o.render(e)
							}
						},
						updateLayout: function() {
							!1 !== u.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), u.notify(this, "afterScaleUpdate"), u.notify(this, "afterLayout"))
						},
						updateDatasets: function() {
							if(!1 !== u.notify(this, "beforeDatasetsUpdate")) {
								for(var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
								u.notify(this, "afterDatasetsUpdate")
							}
						},
						updateDataset: function(t) {
							var e = this.getDatasetMeta(t),
								i = {
									meta: e,
									index: t
								};
							!1 !== u.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), u.notify(this, "afterDatasetUpdate", [i]))
						},
						render: function(t) {
							var e = this;
							t && "object" == typeof t || (t = {
								duration: t,
								lazy: arguments[1]
							});
							var i = t.duration,
								a = t.lazy;
							if(!1 !== u.notify(e, "beforeRender")) {
								var s = e.options.animation,
									l = function(t) {
										u.notify(e, "afterRender"), r.callback(s && s.onComplete, [t], e)
									};
								if(s && (void 0 !== i && 0 !== i || void 0 === i && 0 !== s.duration)) {
									var c = new n({
										numSteps: (i || s.duration) / 16.66,
										easing: t.easing || s.easing,
										render: function(t, e) {
											var i = r.easing.effects[e.easing],
												n = e.currentStep,
												o = n / e.numSteps;
											t.draw(i(o), o, n)
										},
										onAnimationProgress: s.onProgress,
										onAnimationComplete: l
									});
									o.addAnimation(e, c, i, a)
								} else e.draw(), l(new n({
									numSteps: 0,
									chart: e
								}));
								return e
							}
						},
						draw: function(t) {
							var e = this;
							e.clear(), r.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== u.notify(e, "beforeDraw", [t]) && (r.each(e.boxes, function(t) {
								t.draw(e.chartArea)
							}, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), u.notify(e, "afterDraw", [t]))
						},
						transition: function(t) {
							for(var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
							this.tooltip.transition(t)
						},
						drawDatasets: function(t) {
							var e = this;
							if(!1 !== u.notify(e, "beforeDatasetsDraw", [t])) {
								for(var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
								u.notify(e, "afterDatasetsDraw", [t])
							}
						},
						drawDataset: function(t, e) {
							var i = this.getDatasetMeta(t),
								n = {
									meta: i,
									index: t,
									easingValue: e
								};
							!1 !== u.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), u.notify(this, "afterDatasetDraw", [n]))
						},
						_drawTooltip: function(t) {
							var e = this.tooltip,
								i = {
									tooltip: e,
									easingValue: t
								};
							!1 !== u.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), u.notify(this, "afterTooltipDraw", [i]))
						},
						getElementAtEvent: function(t) {
							return s.modes.single(this, t)
						},
						getElementsAtEvent: function(t) {
							return s.modes.label(this, t, {
								intersect: !0
							})
						},
						getElementsAtXAxis: function(t) {
							return s.modes["x-axis"](this, t, {
								intersect: !0
							})
						},
						getElementsAtEventForMode: function(t, e, i) {
							var n = s.modes[e];
							return "function" == typeof n ? n(this, t, i) : []
						},
						getDatasetAtEvent: function(t) {
							return s.modes.dataset(this, t, {
								intersect: !0
							})
						},
						getDatasetMeta: function(t) {
							var e = this.data.datasets[t];
							e._meta || (e._meta = {});
							var i = e._meta[this.id];
							return i || (i = e._meta[this.id] = {
								type: null,
								data: [],
								dataset: null,
								controller: null,
								hidden: null,
								xAxisID: null,
								yAxisID: null
							}), i
						},
						getVisibleDatasetCount: function() {
							for(var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
							return t
						},
						isDatasetVisible: function(t) {
							var e = this.getDatasetMeta(t);
							return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
						},
						generateLegend: function() {
							return this.options.legendCallback(this)
						},
						destroyDatasetMeta: function(t) {
							var e = this.id,
								i = this.data.datasets[t],
								n = i._meta && i._meta[e];
							n && (n.controller.destroy(), delete i._meta[e])
						},
						destroy: function() {
							var e, i, n = this,
								o = n.canvas;
							for(n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
							o && (n.unbindEvents(), r.canvas.clear(n), c.releaseContext(n.ctx), n.canvas = null, n.ctx = null), u.notify(n, "destroy"), delete t.instances[n.id]
						},
						toBase64Image: function() {
							return this.canvas.toDataURL.apply(this.canvas, arguments)
						},
						initToolTip: function() {
							var t = this;
							t.tooltip = new h({
								_chart: t,
								_chartInstance: t,
								_data: t.data,
								_options: t.options.tooltips
							}, t)
						},
						bindEvents: function() {
							var t = this,
								e = t._listeners = {},
								i = function() {
									t.eventHandler.apply(t, arguments)
								};
							r.each(t.options.events, function(n) {
								c.addEventListener(t, n, i), e[n] = i
							}), t.options.responsive && (i = function() {
								t.resize()
							}, c.addEventListener(t, "resize", i), e.resize = i)
						},
						unbindEvents: function() {
							var t = this,
								e = t._listeners;
							e && (delete t._listeners, r.each(e, function(e, i) {
								c.removeEventListener(t, i, e)
							}))
						},
						updateHoverStyle: function(t, e, i) {
							var n, o, a, r = i ? "setHoverStyle" : "removeHoverStyle";
							for(o = 0, a = t.length; o < a; ++o)(n = t[o]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
						},
						eventHandler: function(t) {
							var e = this,
								i = e.tooltip;
							if(!1 !== u.notify(e, "beforeEvent", [t])) {
								e._bufferedRender = !0, e._bufferedRequest = null;
								var n = e.handleEvent(t);
								i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), u.notify(e, "afterEvent", [t]);
								var o = e._bufferedRequest;
								return o ? e.render(o) : n && !e.animating && (e.stop(), e.render({
									duration: e.options.hover.animationDuration,
									lazy: !0
								})), e._bufferedRender = !1, e._bufferedRequest = null, e
							}
						},
						handleEvent: function(t) {
							var e, i = this,
								n = i.options || {},
								o = n.hover;
							return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), r.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !r.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
						}
					}), t.Controller = t
				}
			}, {
				22: 22,
				23: 23,
				26: 26,
				29: 29,
				31: 31,
				32: 32,
				34: 34,
				36: 36,
				46: 46,
				49: 49
			}],
			25: [function(t, e, i) {
				"use strict";
				var n = t(46);
				e.exports = function(t) {
					var e = ["push", "pop", "shift", "splice", "unshift"];

					function i(t, i) {
						var n = t._chartjs;
						if(n) {
							var o = n.listeners,
								a = o.indexOf(i); - 1 !== a && o.splice(a, 1), o.length > 0 || (e.forEach(function(e) {
								delete t[e]
							}), delete t._chartjs)
						}
					}
					t.DatasetController = function(t, e) {
						this.initialize(t, e)
					}, n.extend(t.DatasetController.prototype, {
						datasetElementType: null,
						dataElementType: null,
						initialize: function(t, e) {
							this.chart = t, this.index = e, this.linkScales(), this.addElements()
						},
						updateIndex: function(t) {
							this.index = t
						},
						linkScales: function() {
							var t = this,
								e = t.getMeta(),
								i = t.getDataset();
							null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
						},
						getDataset: function() {
							return this.chart.data.datasets[this.index]
						},
						getMeta: function() {
							return this.chart.getDatasetMeta(this.index)
						},
						getScaleForId: function(t) {
							return this.chart.scales[t]
						},
						reset: function() {
							this.update(!0)
						},
						destroy: function() {
							this._data && i(this._data, this)
						},
						createMetaDataset: function() {
							var t = this.datasetElementType;
							return t && new t({
								_chart: this.chart,
								_datasetIndex: this.index
							})
						},
						createMetaData: function(t) {
							var e = this.dataElementType;
							return e && new e({
								_chart: this.chart,
								_datasetIndex: this.index,
								_index: t
							})
						},
						addElements: function() {
							var t, e, i = this.getMeta(),
								n = this.getDataset().data || [],
								o = i.data;
							for(t = 0, e = n.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
							i.dataset = i.dataset || this.createMetaDataset()
						},
						addElementAndReset: function(t) {
							var e = this.createMetaData(t);
							this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
						},
						buildOrUpdateElements: function() {
							var t, o, a = this,
								r = a.getDataset(),
								s = r.data || (r.data = []);
							a._data !== s && (a._data && i(a._data, a), o = a, (t = s)._chartjs ? t._chartjs.listeners.push(o) : (Object.defineProperty(t, "_chartjs", {
								configurable: !0,
								enumerable: !1,
								value: {
									listeners: [o]
								}
							}), e.forEach(function(e) {
								var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
									o = t[e];
								Object.defineProperty(t, e, {
									configurable: !0,
									enumerable: !1,
									value: function() {
										var e = Array.prototype.slice.call(arguments),
											a = o.apply(this, e);
										return n.each(t._chartjs.listeners, function(t) {
											"function" == typeof t[i] && t[i].apply(t, e)
										}), a
									}
								})
							})), a._data = s), a.resyncElements()
						},
						update: n.noop,
						transition: function(t) {
							for(var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
							e.dataset && e.dataset.transition(t)
						},
						draw: function() {
							var t = this.getMeta(),
								e = t.data || [],
								i = e.length,
								n = 0;
							for(t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
						},
						removeHoverStyle: function(t) {
							n.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
						},
						setHoverStyle: function(t) {
							var e = this.chart.data.datasets[t._datasetIndex],
								i = t._index,
								o = t.custom || {},
								a = n.valueAtIndexOrDefault,
								r = n.getHoverColor,
								s = t._model;
							t.$previousStyle = {
								backgroundColor: s.backgroundColor,
								borderColor: s.borderColor,
								borderWidth: s.borderWidth
							}, s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : a(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : a(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : a(e.hoverBorderWidth, i, s.borderWidth)
						},
						resyncElements: function() {
							var t = this.getMeta(),
								e = this.getDataset().data,
								i = t.data.length,
								n = e.length;
							n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
						},
						insertElements: function(t, e) {
							for(var i = 0; i < e; ++i) this.addElementAndReset(t + i)
						},
						onDataPush: function() {
							this.insertElements(this.getDataset().data.length - 1, arguments.length)
						},
						onDataPop: function() {
							this.getMeta().data.pop()
						},
						onDataShift: function() {
							this.getMeta().data.shift()
						},
						onDataSplice: function(t, e) {
							this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
						},
						onDataUnshift: function() {
							this.insertElements(0, arguments.length)
						}
					}), t.DatasetController.extend = n.inherits
				}
			}, {
				46: 46
			}],
			26: [function(t, e, i) {
				"use strict";
				var n = t(46);
				e.exports = {
					_set: function(t, e) {
						return n.merge(this[t] || (this[t] = {}), e)
					}
				}
			}, {
				46: 46
			}],
			27: [function(t, e, i) {
				"use strict";
				var n = t(3),
					o = t(46);
				var a = function(t) {
					o.extend(this, t), this.initialize.apply(this, arguments)
				};
				o.extend(a.prototype, {
					initialize: function() {
						this.hidden = !1
					},
					pivot: function() {
						var t = this;
						return t._view || (t._view = o.clone(t._model)), t._start = {}, t
					},
					transition: function(t) {
						var e = this,
							i = e._model,
							o = e._start,
							a = e._view;
						return i && 1 !== t ? (a || (a = e._view = {}), o || (o = e._start = {}), function(t, e, i, o) {
							var a, r, s, l, c, u, d, h, p, f = Object.keys(i);
							for(a = 0, r = f.length; a < r; ++a)
								if(u = i[s = f[a]], e.hasOwnProperty(s) || (e[s] = u), (l = e[s]) !== u && "_" !== s[0]) {
									if(t.hasOwnProperty(s) || (t[s] = l), (d = typeof u) == typeof(c = t[s]))
										if("string" === d) {
											if((h = n(c)).valid && (p = n(u)).valid) {
												e[s] = p.mix(h, o).rgbString();
												continue
											}
										} else if("number" === d && isFinite(c) && isFinite(u)) {
										e[s] = c + (u - c) * o;
										continue
									}
									e[s] = u
								}
						}(o, a, i, t), e) : (e._view = i, e._start = null, e)
					},
					tooltipPosition: function() {
						return {
							x: this._model.x,
							y: this._model.y
						}
					},
					hasValue: function() {
						return o.isNumber(this._model.x) && o.isNumber(this._model.y)
					}
				}), a.extend = o.inherits, e.exports = a
			}, {
				3: 3,
				46: 46
			}],
			28: [function(t, e, i) {
				"use strict";
				var n = t(3),
					o = t(26),
					a = t(46),
					r = t(34);
				e.exports = function() {
					function t(t, e, i) {
						var n;
						return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
					}

					function e(t) {
						return null != t && "none" !== t
					}

					function i(i, n, o) {
						var r = document.defaultView,
							s = a._getParentNode(i),
							l = r.getComputedStyle(i)[n],
							c = r.getComputedStyle(s)[n],
							u = e(l),
							d = e(c),
							h = Number.POSITIVE_INFINITY;
						return u || d ? Math.min(u ? t(l, i, o) : h, d ? t(c, s, o) : h) : "none"
					}
					a.configMerge = function() {
						return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
							merger: function(t, e, i, n) {
								var o = e[t] || {},
									s = i[t];
								"scales" === t ? e[t] = a.scaleMerge(o, s) : "scale" === t ? e[t] = a.merge(o, [r.getScaleDefaults(s.type), s]) : a._merger(t, e, i, n)
							}
						})
					}, a.scaleMerge = function() {
						return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
							merger: function(t, e, i, n) {
								if("xAxes" === t || "yAxes" === t) {
									var o, s, l, c = i[t].length;
									for(e[t] || (e[t] = []), o = 0; o < c; ++o) l = i[t][o], s = a.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || l.type && l.type !== e[t][o].type ? a.merge(e[t][o], [r.getScaleDefaults(s), l]) : a.merge(e[t][o], l)
								} else a._merger(t, e, i, n)
							}
						})
					}, a.where = function(t, e) {
						if(a.isArray(t) && Array.prototype.filter) return t.filter(e);
						var i = [];
						return a.each(t, function(t) {
							e(t) && i.push(t)
						}), i
					}, a.findIndex = Array.prototype.findIndex ? function(t, e, i) {
						return t.findIndex(e, i)
					} : function(t, e, i) {
						i = void 0 === i ? t : i;
						for(var n = 0, o = t.length; n < o; ++n)
							if(e.call(i, t[n], n, t)) return n;
						return -1
					}, a.findNextWhere = function(t, e, i) {
						a.isNullOrUndef(i) && (i = -1);
						for(var n = i + 1; n < t.length; n++) {
							var o = t[n];
							if(e(o)) return o
						}
					}, a.findPreviousWhere = function(t, e, i) {
						a.isNullOrUndef(i) && (i = t.length);
						for(var n = i - 1; n >= 0; n--) {
							var o = t[n];
							if(e(o)) return o
						}
					}, a.isNumber = function(t) {
						return !isNaN(parseFloat(t)) && isFinite(t)
					}, a.almostEquals = function(t, e, i) {
						return Math.abs(t - e) < i
					}, a.almostWhole = function(t, e) {
						var i = Math.round(t);
						return i - e < t && i + e > t
					}, a.max = function(t) {
						return t.reduce(function(t, e) {
							return isNaN(e) ? t : Math.max(t, e)
						}, Number.NEGATIVE_INFINITY)
					}, a.min = function(t) {
						return t.reduce(function(t, e) {
							return isNaN(e) ? t : Math.min(t, e)
						}, Number.POSITIVE_INFINITY)
					}, a.sign = Math.sign ? function(t) {
						return Math.sign(t)
					} : function(t) {
						return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
					}, a.log10 = Math.log10 ? function(t) {
						return Math.log10(t)
					} : function(t) {
						var e = Math.log(t) * Math.LOG10E,
							i = Math.round(e);
						return t === Math.pow(10, i) ? i : e
					}, a.toRadians = function(t) {
						return t * (Math.PI / 180)
					}, a.toDegrees = function(t) {
						return t * (180 / Math.PI)
					}, a.getAngleFromPoint = function(t, e) {
						var i = e.x - t.x,
							n = e.y - t.y,
							o = Math.sqrt(i * i + n * n),
							a = Math.atan2(n, i);
						return a < -.5 * Math.PI && (a += 2 * Math.PI), {
							angle: a,
							distance: o
						}
					}, a.distanceBetweenPoints = function(t, e) {
						return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
					}, a.aliasPixel = function(t) {
						return t % 2 == 0 ? 0 : .5
					}, a.splineCurve = function(t, e, i, n) {
						var o = t.skip ? e : t,
							a = e,
							r = i.skip ? e : i,
							s = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
							l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
							c = s / (s + l),
							u = l / (s + l),
							d = n * (c = isNaN(c) ? 0 : c),
							h = n * (u = isNaN(u) ? 0 : u);
						return {
							previous: {
								x: a.x - d * (r.x - o.x),
								y: a.y - d * (r.y - o.y)
							},
							next: {
								x: a.x + h * (r.x - o.x),
								y: a.y + h * (r.y - o.y)
							}
						}
					}, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function(t) {
						var e, i, n, o, r, s, l, c, u, d = (t || []).map(function(t) {
								return {
									model: t._model,
									deltaK: 0,
									mK: 0
								}
							}),
							h = d.length;
						for(e = 0; e < h; ++e)
							if(!(n = d[e]).model.skip) {
								if(i = e > 0 ? d[e - 1] : null, (o = e < h - 1 ? d[e + 1] : null) && !o.model.skip) {
									var p = o.model.x - n.model.x;
									n.deltaK = 0 !== p ? (o.model.y - n.model.y) / p : 0
								}!i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
							}
						for(e = 0; e < h - 1; ++e) n = d[e], o = d[e + 1], n.model.skip || o.model.skip || (a.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (r = n.mK / n.deltaK, s = o.mK / n.deltaK, (c = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(c), n.mK = r * l * n.deltaK, o.mK = s * l * n.deltaK)));
						for(e = 0; e < h; ++e)(n = d[e]).model.skip || (i = e > 0 ? d[e - 1] : null, o = e < h - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), o && !o.model.skip && (u = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
					}, a.nextItem = function(t, e, i) {
						return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
					}, a.previousItem = function(t, e, i) {
						return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
					}, a.niceNum = function(t, e) {
						var i = Math.floor(a.log10(t)),
							n = t / Math.pow(10, i);
						return(e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
					}, a.requestAnimFrame = "undefined" == typeof window ? function(t) {
						t()
					} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
						return window.setTimeout(t, 1e3 / 60)
					}, a.getRelativePosition = function(t, e) {
						var i, n, o = t.originalEvent || t,
							r = t.target || t.srcElement,
							s = r.getBoundingClientRect(),
							l = o.touches;
						l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = o.clientX, n = o.clientY);
						var c = parseFloat(a.getStyle(r, "padding-left")),
							u = parseFloat(a.getStyle(r, "padding-top")),
							d = parseFloat(a.getStyle(r, "padding-right")),
							h = parseFloat(a.getStyle(r, "padding-bottom")),
							p = s.right - s.left - c - d,
							f = s.bottom - s.top - u - h;
						return {
							x: i = Math.round((i - s.left - c) / p * r.width / e.currentDevicePixelRatio),
							y: n = Math.round((n - s.top - u) / f * r.height / e.currentDevicePixelRatio)
						}
					}, a.getConstraintWidth = function(t) {
						return i(t, "max-width", "clientWidth")
					}, a.getConstraintHeight = function(t) {
						return i(t, "max-height", "clientHeight")
					}, a._calculatePadding = function(t, e, i) {
						return(e = a.getStyle(t, e)).indexOf("%") > -1 ? i / parseInt(e, 10) : parseInt(e, 10)
					}, a._getParentNode = function(t) {
						var e = t.parentNode;
						return e && e.host && (e = e.host), e
					}, a.getMaximumWidth = function(t) {
						var e = a._getParentNode(t);
						if(!e) return t.clientWidth;
						var i = e.clientWidth,
							n = i - a._calculatePadding(e, "padding-left", i) - a._calculatePadding(e, "padding-right", i),
							o = a.getConstraintWidth(t);
						return isNaN(o) ? n : Math.min(n, o)
					}, a.getMaximumHeight = function(t) {
						var e = a._getParentNode(t);
						if(!e) return t.clientHeight;
						var i = e.clientHeight,
							n = i - a._calculatePadding(e, "padding-top", i) - a._calculatePadding(e, "padding-bottom", i),
							o = a.getConstraintHeight(t);
						return isNaN(o) ? n : Math.min(n, o)
					}, a.getStyle = function(t, e) {
						return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
					}, a.retinaScale = function(t, e) {
						var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
						if(1 !== i) {
							var n = t.canvas,
								o = t.height,
								a = t.width;
							n.height = o * i, n.width = a * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = o + "px", n.style.width = a + "px")
						}
					}, a.fontString = function(t, e, i) {
						return e + " " + t + "px " + i
					}, a.longestText = function(t, e, i, n) {
						var o = (n = n || {}).data = n.data || {},
							r = n.garbageCollect = n.garbageCollect || [];
						n.font !== e && (o = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
						var s = 0;
						a.each(i, function(e) {
							null != e && !0 !== a.isArray(e) ? s = a.measureText(t, o, r, s, e) : a.isArray(e) && a.each(e, function(e) {
								null == e || a.isArray(e) || (s = a.measureText(t, o, r, s, e))
							})
						});
						var l = r.length / 2;
						if(l > i.length) {
							for(var c = 0; c < l; c++) delete o[r[c]];
							r.splice(0, l)
						}
						return s
					}, a.measureText = function(t, e, i, n, o) {
						var a = e[o];
						return a || (a = e[o] = t.measureText(o).width, i.push(o)), a > n && (n = a), n
					}, a.numberOfLabelLines = function(t) {
						var e = 1;
						return a.each(t, function(t) {
							a.isArray(t) && t.length > e && (e = t.length)
						}), e
					}, a.color = n ? function(t) {
						return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
					} : function(t) {
						return console.error("Color.js not found!"), t
					}, a.getHoverColor = function(t) {
						return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString()
					}
				}
			}, {
				26: 26,
				3: 3,
				34: 34,
				46: 46
			}],
			29: [function(t, e, i) {
				"use strict";
				var n = t(46);

				function o(t, e) {
					return t.native ? {
						x: t.x,
						y: t.y
					} : n.getRelativePosition(t, e)
				}

				function a(t, e) {
					var i, n, o, a, r;
					for(n = 0, a = t.data.datasets.length; n < a; ++n)
						if(t.isDatasetVisible(n))
							for(o = 0, r = (i = t.getDatasetMeta(n)).data.length; o < r; ++o) {
								var s = i.data[o];
								s._view.skip || e(s)
							}
				}

				function r(t, e) {
					var i = [];
					return a(t, function(t) {
						t.inRange(e.x, e.y) && i.push(t)
					}), i
				}

				function s(t, e, i, n) {
					var o = Number.POSITIVE_INFINITY,
						r = [];
					return a(t, function(t) {
						if(!i || t.inRange(e.x, e.y)) {
							var a = t.getCenterPoint(),
								s = n(e, a);
							s < o ? (r = [t], o = s) : s === o && r.push(t)
						}
					}), r
				}

				function l(t) {
					var e = -1 !== t.indexOf("x"),
						i = -1 !== t.indexOf("y");
					return function(t, n) {
						var o = e ? Math.abs(t.x - n.x) : 0,
							a = i ? Math.abs(t.y - n.y) : 0;
						return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
					}
				}

				function c(t, e, i) {
					var n = o(e, t);
					i.axis = i.axis || "x";
					var a = l(i.axis),
						c = i.intersect ? r(t, n) : s(t, n, !1, a),
						u = [];
					return c.length ? (t.data.datasets.forEach(function(e, i) {
						if(t.isDatasetVisible(i)) {
							var n = t.getDatasetMeta(i).data[c[0]._index];
							n && !n._view.skip && u.push(n)
						}
					}), u) : []
				}
				e.exports = {
					modes: {
						single: function(t, e) {
							var i = o(e, t),
								n = [];
							return a(t, function(t) {
								if(t.inRange(i.x, i.y)) return n.push(t), n
							}), n.slice(0, 1)
						},
						label: c,
						index: c,
						dataset: function(t, e, i) {
							var n = o(e, t);
							i.axis = i.axis || "xy";
							var a = l(i.axis),
								c = i.intersect ? r(t, n) : s(t, n, !1, a);
							return c.length > 0 && (c = t.getDatasetMeta(c[0]._datasetIndex).data), c
						},
						"x-axis": function(t, e) {
							return c(t, e, {
								intersect: !1
							})
						},
						point: function(t, e) {
							return r(t, o(e, t))
						},
						nearest: function(t, e, i) {
							var n = o(e, t);
							i.axis = i.axis || "xy";
							var a = l(i.axis),
								r = s(t, n, i.intersect, a);
							return r.length > 1 && r.sort(function(t, e) {
								var i = t.getArea() - e.getArea();
								return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
							}), r.slice(0, 1)
						},
						x: function(t, e, i) {
							var n = o(e, t),
								r = [],
								s = !1;
							return a(t, function(t) {
								t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
							}), i.intersect && !s && (r = []), r
						},
						y: function(t, e, i) {
							var n = o(e, t),
								r = [],
								s = !1;
							return a(t, function(t) {
								t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
							}), i.intersect && !s && (r = []), r
						}
					}
				}
			}, {
				46: 46
			}],
			30: [function(t, e, i) {
				"use strict";
				t(26)._set("global", {
					responsive: !0,
					responsiveAnimationDuration: 0,
					maintainAspectRatio: !0,
					events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
					hover: {
						onHover: null,
						mode: "nearest",
						intersect: !0,
						animationDuration: 400
					},
					onClick: null,
					defaultColor: "rgba(0,0,0,0.1)",
					defaultFontColor: "#666",
					defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: "normal",
					showLines: !0,
					elements: {},
					layout: {
						padding: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}
					}
				}), e.exports = function() {
					var t = function(t, e) {
						return this.construct(t, e), this
					};
					return t.Chart = t, t
				}
			}, {
				26: 26
			}],
			31: [function(t, e, i) {
				"use strict";
				var n = t(46);

				function o(t, e) {
					return n.where(t, function(t) {
						return t.position === e
					})
				}

				function a(t, e) {
					t.forEach(function(t, e) {
						return t._tmpIndex_ = e, t
					}), t.sort(function(t, i) {
						var n = e ? i : t,
							o = e ? t : i;
						return n.weight === o.weight ? n._tmpIndex_ - o._tmpIndex_ : n.weight - o.weight
					}), t.forEach(function(t) {
						delete t._tmpIndex_
					})
				}
				e.exports = {
					defaults: {},
					addBox: function(t, e) {
						t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
					},
					removeBox: function(t, e) {
						var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
					},
					configure: function(t, e, i) {
						for(var n, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) n = o[r], i.hasOwnProperty(n) && (e[n] = i[n])
					},
					update: function(t, e, i) {
						if(t) {
							var r = t.options.layout || {},
								s = n.options.toPadding(r.padding),
								l = s.left,
								c = s.right,
								u = s.top,
								d = s.bottom,
								h = o(t.boxes, "left"),
								p = o(t.boxes, "right"),
								f = o(t.boxes, "top"),
								m = o(t.boxes, "bottom"),
								v = o(t.boxes, "chartArea");
							a(h, !0), a(p, !1), a(f, !0), a(m, !1);
							var g = e - l - c,
								b = i - u - d,
								y = b / 2,
								x = (e - g / 2) / (h.length + p.length),
								w = (i - y) / (f.length + m.length),
								k = g,
								C = b,
								S = [];
							n.each(h.concat(p, f, m), function(t) {
								var e, i = t.isHorizontal();
								i ? (e = t.update(t.fullWidth ? g : k, w), C -= e.height) : (e = t.update(x, C), k -= e.width), S.push({
									horizontal: i,
									minSize: e,
									box: t
								})
							});
							var M = 0,
								T = 0,
								O = 0,
								_ = 0;
							n.each(f.concat(m), function(t) {
								if(t.getPadding) {
									var e = t.getPadding();
									M = Math.max(M, e.left), T = Math.max(T, e.right)
								}
							}), n.each(h.concat(p), function(t) {
								if(t.getPadding) {
									var e = t.getPadding();
									O = Math.max(O, e.top), _ = Math.max(_, e.bottom)
								}
							});
							var P = l,
								A = c,
								I = u,
								$ = d;
							n.each(h.concat(p), V), n.each(h, function(t) {
								P += t.width
							}), n.each(p, function(t) {
								A += t.width
							}), n.each(f.concat(m), V), n.each(f, function(t) {
								I += t.height
							}), n.each(m, function(t) {
								$ += t.height
							}), n.each(h.concat(p), function(t) {
								var e = n.findNextWhere(S, function(e) {
										return e.box === t
									}),
									i = {
										left: 0,
										right: 0,
										top: I,
										bottom: $
									};
								e && t.update(e.minSize.width, C, i)
							}), P = l, A = c, I = u, $ = d, n.each(h, function(t) {
								P += t.width
							}), n.each(p, function(t) {
								A += t.width
							}), n.each(f, function(t) {
								I += t.height
							}), n.each(m, function(t) {
								$ += t.height
							});
							var D = Math.max(M - P, 0);
							P += D, A += Math.max(T - A, 0);
							var E = Math.max(O - I, 0);
							I += E, $ += Math.max(_ - $, 0);
							var L = i - I - $,
								F = e - P - A;
							F === k && L === C || (n.each(h, function(t) {
								t.height = L
							}), n.each(p, function(t) {
								t.height = L
							}), n.each(f, function(t) {
								t.fullWidth || (t.width = F)
							}), n.each(m, function(t) {
								t.fullWidth || (t.width = F)
							}), C = L, k = F);
							var R = l + D,
								W = u + E;
							n.each(h.concat(f), H), R += k, W += C, n.each(p, H), n.each(m, H), t.chartArea = {
								left: P,
								top: I,
								right: P + k,
								bottom: I + C
							}, n.each(v, function(e) {
								e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, C)
							})
						}

						function V(t) {
							var e = n.findNextWhere(S, function(e) {
								return e.box === t
							});
							if(e)
								if(t.isHorizontal()) {
									var i = {
										left: Math.max(P, M),
										right: Math.max(A, T),
										top: 0,
										bottom: 0
									};
									t.update(t.fullWidth ? g : k, b / 2, i)
								} else t.update(e.minSize.width, C)
						}

						function H(t) {
							t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - c : P + k, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = R, t.right = R + t.width, t.top = I, t.bottom = I + C, R = t.right)
						}
					}
				}
			}, {
				46: 46
			}],
			32: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(46);
				n._set("global", {
					plugins: {}
				}), e.exports = {
					_plugins: [],
					_cacheId: 0,
					register: function(t) {
						var e = this._plugins;
						[].concat(t).forEach(function(t) {
							-1 === e.indexOf(t) && e.push(t)
						}), this._cacheId++
					},
					unregister: function(t) {
						var e = this._plugins;
						[].concat(t).forEach(function(t) {
							var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
						}), this._cacheId++
					},
					clear: function() {
						this._plugins = [], this._cacheId++
					},
					count: function() {
						return this._plugins.length
					},
					getAll: function() {
						return this._plugins
					},
					notify: function(t, e, i) {
						var n, o, a, r, s, l = this.descriptors(t),
							c = l.length;
						for(n = 0; n < c; ++n)
							if("function" == typeof(s = (a = (o = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(o.options), !1 === s.apply(a, r))) return !1;
						return !0
					},
					descriptors: function(t) {
						var e = t.$plugins || (t.$plugins = {});
						if(e.id === this._cacheId) return e.descriptors;
						var i = [],
							a = [],
							r = t && t.config || {},
							s = r.options && r.options.plugins || {};
						return this._plugins.concat(r.plugins || []).forEach(function(t) {
							if(-1 === i.indexOf(t)) {
								var e = t.id,
									r = s[e];
								!1 !== r && (!0 === r && (r = o.clone(n.global.plugins[e])), i.push(t), a.push({
									plugin: t,
									options: r || {}
								}))
							}
						}), e.descriptors = a, e.id = this._cacheId, a
					},
					_invalidate: function(t) {
						delete t.$plugins
					}
				}
			}, {
				26: 26,
				46: 46
			}],
			33: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46),
					r = t(35);

				function s(t) {
					var e, i, n = [];
					for(e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
					return n
				}

				function l(t, e, i) {
					var n = t.getPixelForTick(e);
					return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
				}

				function c(t, e, i) {
					return a.isArray(e) ? a.longestText(t, i, e) : t.measureText(e).width
				}

				function u(t) {
					var e = a.valueOrDefault,
						i = n.global,
						o = e(t.fontSize, i.defaultFontSize),
						r = e(t.fontStyle, i.defaultFontStyle),
						s = e(t.fontFamily, i.defaultFontFamily);
					return {
						size: o,
						style: r,
						family: s,
						font: a.fontString(o, r, s)
					}
				}

				function d(t) {
					return a.options.toLineHeight(a.valueOrDefault(t.lineHeight, 1.2), a.valueOrDefault(t.fontSize, n.global.defaultFontSize))
				}
				n._set("scale", {
					display: !0,
					position: "left",
					offset: !1,
					gridLines: {
						display: !0,
						color: "rgba(0, 0, 0, 0.1)",
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0,0,0,0.25)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0
					},
					scaleLabel: {
						display: !1,
						labelString: "",
						lineHeight: 1.2,
						padding: {
							top: 4,
							bottom: 4
						}
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: r.formatters.values,
						minor: {},
						major: {}
					}
				}), e.exports = o.extend({
					getPadding: function() {
						return {
							left: this.paddingLeft || 0,
							top: this.paddingTop || 0,
							right: this.paddingRight || 0,
							bottom: this.paddingBottom || 0
						}
					},
					getTicks: function() {
						return this._ticks
					},
					mergeTicksOptions: function() {
						var t = this.options.ticks;
						for(var e in !1 === t.minor && (t.minor = {
								display: !1
							}), !1 === t.major && (t.major = {
								display: !1
							}), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
					},
					beforeUpdate: function() {
						a.callback(this.options.beforeUpdate, [this])
					},
					update: function(t, e, i) {
						var n, o, r, s, l, c, u = this;
						for(u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = a.extend({
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), l = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), r = u.convertTicksToLabels(l) || u.ticks, u.afterTickToLabelConversion(), u.ticks = r, n = 0, o = r.length; n < o; ++n) s = r[n], (c = l[n]) ? c.label = s : l.push(c = {
							label: s,
							major: !1
						});
						return u._ticks = l, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
					},
					afterUpdate: function() {
						a.callback(this.options.afterUpdate, [this])
					},
					beforeSetDimensions: function() {
						a.callback(this.options.beforeSetDimensions, [this])
					},
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
					},
					afterSetDimensions: function() {
						a.callback(this.options.afterSetDimensions, [this])
					},
					beforeDataLimits: function() {
						a.callback(this.options.beforeDataLimits, [this])
					},
					determineDataLimits: a.noop,
					afterDataLimits: function() {
						a.callback(this.options.afterDataLimits, [this])
					},
					beforeBuildTicks: function() {
						a.callback(this.options.beforeBuildTicks, [this])
					},
					buildTicks: a.noop,
					afterBuildTicks: function() {
						a.callback(this.options.afterBuildTicks, [this])
					},
					beforeTickToLabelConversion: function() {
						a.callback(this.options.beforeTickToLabelConversion, [this])
					},
					convertTicksToLabels: function() {
						var t = this.options.ticks;
						this.ticks = this.ticks.map(t.userCallback || t.callback, this)
					},
					afterTickToLabelConversion: function() {
						a.callback(this.options.afterTickToLabelConversion, [this])
					},
					beforeCalculateTickRotation: function() {
						a.callback(this.options.beforeCalculateTickRotation, [this])
					},
					calculateTickRotation: function() {
						var t = this,
							e = t.ctx,
							i = t.options.ticks,
							n = s(t._ticks),
							o = u(i);
						e.font = o.font;
						var r = i.minRotation || 0;
						if(n.length && t.options.display && t.isHorizontal())
							for(var l, c = a.longestText(e, o.font, n, t.longestTextCache), d = c, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > h && r < i.maxRotation;) {
								var p = a.toRadians(r);
								if(l = Math.cos(p), Math.sin(p) * c > t.maxHeight) {
									r--;
									break
								}
								r++, d = l * c
							}
						t.labelRotation = r
					},
					afterCalculateTickRotation: function() {
						a.callback(this.options.afterCalculateTickRotation, [this])
					},
					beforeFit: function() {
						a.callback(this.options.beforeFit, [this])
					},
					fit: function() {
						var t = this,
							e = t.minSize = {
								width: 0,
								height: 0
							},
							i = s(t._ticks),
							n = t.options,
							o = n.ticks,
							r = n.scaleLabel,
							l = n.gridLines,
							h = n.display,
							p = t.isHorizontal(),
							f = u(o),
							m = n.gridLines.tickMarkLength;
						if(e.width = p ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && l.drawTicks ? m : 0, e.height = p ? h && l.drawTicks ? m : 0 : t.maxHeight, r.display && h) {
							var v = d(r) + a.options.toPadding(r.padding).height;
							p ? e.height += v : e.width += v
						}
						if(o.display && h) {
							var g = a.longestText(t.ctx, f.font, i, t.longestTextCache),
								b = a.numberOfLabelLines(i),
								y = .5 * f.size,
								x = t.options.ticks.padding;
							if(p) {
								t.longestLabelWidth = g;
								var w = a.toRadians(t.labelRotation),
									k = Math.cos(w),
									C = Math.sin(w) * g + f.size * b + y * (b - 1) + y;
								e.height = Math.min(t.maxHeight, e.height + C + x), t.ctx.font = f.font;
								var S = c(t.ctx, i[0], f.font),
									M = c(t.ctx, i[i.length - 1], f.font);
								0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? k * S + 3 : k * y + 3, t.paddingRight = "bottom" === n.position ? k * y + 3 : k * M + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = M / 2 + 3)
							} else o.mirror ? g = 0 : g += x + y, e.width = Math.min(t.maxWidth, e.width + g), t.paddingTop = f.size / 2, t.paddingBottom = f.size / 2
						}
						t.handleMargins(), t.width = e.width, t.height = e.height
					},
					handleMargins: function() {
						var t = this;
						t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
					},
					afterFit: function() {
						a.callback(this.options.afterFit, [this])
					},
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					isFullWidth: function() {
						return this.options.fullWidth
					},
					getRightValue: function(t) {
						if(a.isNullOrUndef(t)) return NaN;
						if("number" == typeof t && !isFinite(t)) return NaN;
						if(t)
							if(this.isHorizontal()) {
								if(void 0 !== t.x) return this.getRightValue(t.x)
							} else if(void 0 !== t.y) return this.getRightValue(t.y);
						return t
					},
					getLabelForIndex: a.noop,
					getPixelForValue: a.noop,
					getValueForPixel: a.noop,
					getPixelForTick: function(t) {
						var e = this,
							i = e.options.offset;
						if(e.isHorizontal()) {
							var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
								o = n * t + e.paddingLeft;
							i && (o += n / 2);
							var a = e.left + Math.round(o);
							return a += e.isFullWidth() ? e.margins.left : 0
						}
						var r = e.height - (e.paddingTop + e.paddingBottom);
						return e.top + t * (r / (e._ticks.length - 1))
					},
					getPixelForDecimal: function(t) {
						var e = this;
						if(e.isHorizontal()) {
							var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
								n = e.left + Math.round(i);
							return n += e.isFullWidth() ? e.margins.left : 0
						}
						return e.top + t * e.height
					},
					getBasePixel: function() {
						return this.getPixelForValue(this.getBaseValue())
					},
					getBaseValue: function() {
						var t = this.min,
							e = this.max;
						return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
					},
					_autoSkip: function(t) {
						var e, i, n, o, r = this,
							s = r.isHorizontal(),
							l = r.options.ticks.minor,
							c = t.length,
							u = a.toRadians(r.labelRotation),
							d = Math.cos(u),
							h = r.longestLabelWidth * d,
							p = [];
						for(l.maxTicksLimit && (o = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * c > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * c / (r.width - (r.paddingLeft + r.paddingRight)))), o && c > o && (e = Math.max(e, Math.floor(c / o)))), i = 0; i < c; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= c) && i !== c - 1 && delete n.label, p.push(n);
						return p
					},
					draw: function(t) {
						var e = this,
							i = e.options;
						if(i.display) {
							var o = e.ctx,
								r = n.global,
								s = i.ticks.minor,
								c = i.ticks.major || s,
								h = i.gridLines,
								p = i.scaleLabel,
								f = 0 !== e.labelRotation,
								m = e.isHorizontal(),
								v = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
								g = a.valueOrDefault(s.fontColor, r.defaultFontColor),
								b = u(s),
								y = a.valueOrDefault(c.fontColor, r.defaultFontColor),
								x = u(c),
								w = h.drawTicks ? h.tickMarkLength : 0,
								k = a.valueOrDefault(p.fontColor, r.defaultFontColor),
								C = u(p),
								S = a.options.toPadding(p.padding),
								M = a.toRadians(e.labelRotation),
								T = [],
								O = e.options.gridLines.lineWidth,
								_ = "right" === i.position ? e.left : e.right - O - w,
								P = "right" === i.position ? e.left + w : e.right,
								A = "bottom" === i.position ? e.top + O : e.bottom - w - O,
								I = "bottom" === i.position ? e.top + O + w : e.bottom + O;
							if(a.each(v, function(n, o) {
									if(!a.isNullOrUndef(n.label)) {
										var c, u, d, p, g, b, y, x, k, C, S, $, D, E, L = n.label;
										o === e.zeroLineIndex && i.offset === h.offsetGridLines ? (c = h.zeroLineWidth, u = h.zeroLineColor, d = h.zeroLineBorderDash, p = h.zeroLineBorderDashOffset) : (c = a.valueAtIndexOrDefault(h.lineWidth, o), u = a.valueAtIndexOrDefault(h.color, o), d = a.valueOrDefault(h.borderDash, r.borderDash), p = a.valueOrDefault(h.borderDashOffset, r.borderDashOffset));
										var F = "middle",
											R = "middle",
											W = s.padding;
										if(m) {
											var V = w + W;
											"bottom" === i.position ? (R = f ? "middle" : "top", F = f ? "right" : "center", E = e.top + V) : (R = f ? "middle" : "bottom", F = f ? "left" : "center", E = e.bottom - V);
											var H = l(e, o, h.offsetGridLines && v.length > 1);
											H < e.left && (u = "rgba(0,0,0,0)"), H += a.aliasPixel(c), D = e.getPixelForTick(o) + s.labelOffset, g = y = k = S = H, b = A, x = I, C = t.top, $ = t.bottom + O
										} else {
											var z, N = "left" === i.position;
											s.mirror ? (F = N ? "left" : "right", z = W) : (F = N ? "right" : "left", z = w + W), D = N ? e.right - z : e.left + z;
											var B = l(e, o, h.offsetGridLines && v.length > 1);
											B < e.top && (u = "rgba(0,0,0,0)"), B += a.aliasPixel(c), E = e.getPixelForTick(o) + s.labelOffset, g = _, y = P, k = t.left, S = t.right + O, b = x = C = $ = B
										}
										T.push({
											tx1: g,
											ty1: b,
											tx2: y,
											ty2: x,
											x1: k,
											y1: C,
											x2: S,
											y2: $,
											labelX: D,
											labelY: E,
											glWidth: c,
											glColor: u,
											glBorderDash: d,
											glBorderDashOffset: p,
											rotation: -1 * M,
											label: L,
											major: n.major,
											textBaseline: R,
											textAlign: F
										})
									}
								}), a.each(T, function(t) {
									if(h.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), h.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
										o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? x.font : b.font, o.fillStyle = t.major ? y : g, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
										var i = t.label;
										if(a.isArray(i))
											for(var n = i.length, r = 1.5 * b.size, l = e.isHorizontal() ? 0 : -r * (n - 1) / 2, c = 0; c < n; ++c) o.fillText("" + i[c], 0, l), l += r;
										else o.fillText(i, 0, 0);
										o.restore()
									}
								}), p.display) {
								var $, D, E = 0,
									L = d(p) / 2;
								if(m) $ = e.left + (e.right - e.left) / 2, D = "bottom" === i.position ? e.bottom - L - S.bottom : e.top + L + S.top;
								else {
									var F = "left" === i.position;
									$ = F ? e.left + L + S.top : e.right - L - S.top, D = e.top + (e.bottom - e.top) / 2, E = F ? -.5 * Math.PI : .5 * Math.PI
								}
								o.save(), o.translate($, D), o.rotate(E), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = k, o.font = C.font, o.fillText(p.labelString, 0, 0), o.restore()
							}
							if(h.drawBorder) {
								o.lineWidth = a.valueAtIndexOrDefault(h.lineWidth, 0), o.strokeStyle = a.valueAtIndexOrDefault(h.color, 0);
								var R = e.left,
									W = e.right + O,
									V = e.top,
									H = e.bottom + O,
									z = a.aliasPixel(o.lineWidth);
								m ? (V = H = "top" === i.position ? e.bottom : e.top, V += z, H += z) : (R = W = "left" === i.position ? e.right : e.left, R += z, W += z), o.beginPath(), o.moveTo(R, V), o.lineTo(W, H), o.stroke()
							}
						}
					}
				})
			}, {
				26: 26,
				27: 27,
				35: 35,
				46: 46
			}],
			34: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(46),
					a = t(31);
				e.exports = {
					constructors: {},
					defaults: {},
					registerScaleType: function(t, e, i) {
						this.constructors[t] = e, this.defaults[t] = o.clone(i)
					},
					getScaleConstructor: function(t) {
						return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
					},
					getScaleDefaults: function(t) {
						return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
					},
					updateScaleDefaults: function(t, e) {
						this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
					},
					addScalesToLayout: function(t) {
						o.each(t.scales, function(e) {
							e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, a.addBox(t, e)
						})
					}
				}
			}, {
				26: 26,
				31: 31,
				46: 46
			}],
			35: [function(t, e, i) {
				"use strict";
				var n = t(46);
				e.exports = {
					formatters: {
						values: function(t) {
							return n.isArray(t) ? t : "" + t
						},
						linear: function(t, e, i) {
							var o = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
							Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
							var a = n.log10(Math.abs(o)),
								r = "";
							if(0 !== t)
								if(Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
									var s = n.log10(Math.abs(t));
									r = t.toExponential(Math.floor(s) - Math.floor(a))
								} else {
									var l = -1 * Math.floor(a);
									l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
								} else r = "0";
							return r
						},
						logarithmic: function(t, e, i) {
							var o = t / Math.pow(10, Math.floor(n.log10(t)));
							return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === e || e === i.length - 1 ? t.toExponential() : ""
						}
					}
				}
			}, {
				46: 46
			}],
			36: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46);
				n._set("global", {
					tooltips: {
						enabled: !0,
						custom: null,
						mode: "nearest",
						position: "average",
						intersect: !0,
						backgroundColor: "rgba(0,0,0,0.8)",
						titleFontStyle: "bold",
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: "#fff",
						titleAlign: "left",
						bodySpacing: 2,
						bodyFontColor: "#fff",
						bodyAlign: "left",
						footerFontStyle: "bold",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: "#fff",
						footerAlign: "left",
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						callbacks: {
							beforeTitle: a.noop,
							title: function(t, e) {
								var i = "",
									n = e.labels,
									o = n ? n.length : 0;
								if(t.length > 0) {
									var a = t[0];
									a.xLabel ? i = a.xLabel : o > 0 && a.index < o && (i = n[a.index])
								}
								return i
							},
							afterTitle: a.noop,
							beforeBody: a.noop,
							beforeLabel: a.noop,
							label: function(t, e) {
								var i = e.datasets[t.datasetIndex].label || "";
								return i && (i += ": "), i += t.yLabel
							},
							labelColor: function(t, e) {
								var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
								return {
									borderColor: i.borderColor,
									backgroundColor: i.backgroundColor
								}
							},
							labelTextColor: function() {
								return this._options.bodyFontColor
							},
							afterLabel: a.noop,
							afterBody: a.noop,
							beforeFooter: a.noop,
							footer: a.noop,
							afterFooter: a.noop
						}
					}
				});
				var r = {
					average: function(t) {
						if(!t.length) return !1;
						var e, i, n = 0,
							o = 0,
							a = 0;
						for(e = 0, i = t.length; e < i; ++e) {
							var r = t[e];
							if(r && r.hasValue()) {
								var s = r.tooltipPosition();
								n += s.x, o += s.y, ++a
							}
						}
						return {
							x: Math.round(n / a),
							y: Math.round(o / a)
						}
					},
					nearest: function(t, e) {
						var i, n, o, r = e.x,
							s = e.y,
							l = Number.POSITIVE_INFINITY;
						for(i = 0, n = t.length; i < n; ++i) {
							var c = t[i];
							if(c && c.hasValue()) {
								var u = c.getCenterPoint(),
									d = a.distanceBetweenPoints(e, u);
								d < l && (l = d, o = c)
							}
						}
						if(o) {
							var h = o.tooltipPosition();
							r = h.x, s = h.y
						}
						return {
							x: r,
							y: s
						}
					}
				};

				function s(t, e) {
					var i = a.color(t);
					return i.alpha(e * i.alpha()).rgbaString()
				}

				function l(t, e) {
					return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
				}

				function c(t) {
					return("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
				}

				function u(t) {
					var e = n.global,
						i = a.valueOrDefault;
					return {
						xPadding: t.xPadding,
						yPadding: t.yPadding,
						xAlign: t.xAlign,
						yAlign: t.yAlign,
						bodyFontColor: t.bodyFontColor,
						_bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
						_bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
						_bodyAlign: t.bodyAlign,
						bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
						bodySpacing: t.bodySpacing,
						titleFontColor: t.titleFontColor,
						_titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
						_titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
						titleFontSize: i(t.titleFontSize, e.defaultFontSize),
						_titleAlign: t.titleAlign,
						titleSpacing: t.titleSpacing,
						titleMarginBottom: t.titleMarginBottom,
						footerFontColor: t.footerFontColor,
						_footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
						_footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
						footerFontSize: i(t.footerFontSize, e.defaultFontSize),
						_footerAlign: t.footerAlign,
						footerSpacing: t.footerSpacing,
						footerMarginTop: t.footerMarginTop,
						caretSize: t.caretSize,
						cornerRadius: t.cornerRadius,
						backgroundColor: t.backgroundColor,
						opacity: 0,
						legendColorBackground: t.multiKeyBackground,
						displayColors: t.displayColors,
						borderColor: t.borderColor,
						borderWidth: t.borderWidth
					}
				}

				function d(t) {
					return l([], c(t))
				}(e.exports = o.extend({
					initialize: function() {
						this._model = u(this._options), this._lastActive = []
					},
					getTitle: function() {
						var t = this._options.callbacks,
							e = t.beforeTitle.apply(this, arguments),
							i = t.title.apply(this, arguments),
							n = t.afterTitle.apply(this, arguments),
							o = [];
						return o = l(o, c(e)), o = l(o, c(i)), o = l(o, c(n))
					},
					getBeforeBody: function() {
						return d(this._options.callbacks.beforeBody.apply(this, arguments))
					},
					getBody: function(t, e) {
						var i = this,
							n = i._options.callbacks,
							o = [];
						return a.each(t, function(t) {
							var a = {
								before: [],
								lines: [],
								after: []
							};
							l(a.before, c(n.beforeLabel.call(i, t, e))), l(a.lines, n.label.call(i, t, e)), l(a.after, c(n.afterLabel.call(i, t, e))), o.push(a)
						}), o
					},
					getAfterBody: function() {
						return d(this._options.callbacks.afterBody.apply(this, arguments))
					},
					getFooter: function() {
						var t = this._options.callbacks,
							e = t.beforeFooter.apply(this, arguments),
							i = t.footer.apply(this, arguments),
							n = t.afterFooter.apply(this, arguments),
							o = [];
						return o = l(o, c(e)), o = l(o, c(i)), o = l(o, c(n))
					},
					update: function(t) {
						var e, i, n, o, s, l, c, d = this,
							h = d._options,
							p = d._model,
							f = d._model = u(h),
							m = d._active,
							v = d._data,
							g = {
								xAlign: p.xAlign,
								yAlign: p.yAlign
							},
							b = {
								x: p.x,
								y: p.y
							},
							y = {
								width: p.width,
								height: p.height
							},
							x = {
								x: p.caretX,
								y: p.caretY
							};
						if(m.length) {
							f.opacity = 1;
							var w = [],
								k = [];
							x = r[h.position].call(d, m, d._eventPosition);
							var C = [];
							for(e = 0, i = m.length; e < i; ++e) C.push((n = m[e], o = void 0, s = void 0, l = void 0, c = void 0, o = n._xScale, s = n._yScale || n._scale, l = n._index, c = n._datasetIndex, {
								xLabel: o ? o.getLabelForIndex(l, c) : "",
								yLabel: s ? s.getLabelForIndex(l, c) : "",
								index: l,
								datasetIndex: c,
								x: n._model.x,
								y: n._model.y
							}));
							h.filter && (C = C.filter(function(t) {
								return h.filter(t, v)
							})), h.itemSort && (C = C.sort(function(t, e) {
								return h.itemSort(t, e, v)
							})), a.each(C, function(t) {
								w.push(h.callbacks.labelColor.call(d, t, d._chart)), k.push(h.callbacks.labelTextColor.call(d, t, d._chart))
							}), f.title = d.getTitle(C, v), f.beforeBody = d.getBeforeBody(C, v), f.body = d.getBody(C, v), f.afterBody = d.getAfterBody(C, v), f.footer = d.getFooter(C, v), f.x = Math.round(x.x), f.y = Math.round(x.y), f.caretPadding = h.caretPadding, f.labelColors = w, f.labelTextColors = k, f.dataPoints = C, y = function(t, e) {
								var i = t._chart.ctx,
									n = 2 * e.yPadding,
									o = 0,
									r = e.body,
									s = r.reduce(function(t, e) {
										return t + e.before.length + e.lines.length + e.after.length
									}, 0);
								s += e.beforeBody.length + e.afterBody.length;
								var l = e.title.length,
									c = e.footer.length,
									u = e.titleFontSize,
									d = e.bodyFontSize,
									h = e.footerFontSize;
								n += l * u, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * d, n += s ? (s - 1) * e.bodySpacing : 0, n += c ? e.footerMarginTop : 0, n += c * h, n += c ? (c - 1) * e.footerSpacing : 0;
								var p = 0,
									f = function(t) {
										o = Math.max(o, i.measureText(t).width + p)
									};
								return i.font = a.fontString(u, e._titleFontStyle, e._titleFontFamily), a.each(e.title, f), i.font = a.fontString(d, e._bodyFontStyle, e._bodyFontFamily), a.each(e.beforeBody.concat(e.afterBody), f), p = e.displayColors ? d + 2 : 0, a.each(r, function(t) {
									a.each(t.before, f), a.each(t.lines, f), a.each(t.after, f)
								}), p = 0, i.font = a.fontString(h, e._footerFontStyle, e._footerFontFamily), a.each(e.footer, f), {
									width: o += 2 * e.xPadding,
									height: n
								}
							}(this, f), b = function(t, e, i, n) {
								var o = t.x,
									a = t.y,
									r = t.caretSize,
									s = t.caretPadding,
									l = t.cornerRadius,
									c = i.xAlign,
									u = i.yAlign,
									d = r + s,
									h = l + s;
								return "right" === c ? o -= e.width : "center" === c && ((o -= e.width / 2) + e.width > n.width && (o = n.width - e.width), o < 0 && (o = 0)), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === c ? o += d : "right" === c && (o -= d) : "left" === c ? o -= h : "right" === c && (o += h), {
									x: o,
									y: a
								}
							}(f, y, g = function(t, e) {
								var i, n, o, a, r, s = t._model,
									l = t._chart,
									c = t._chart.chartArea,
									u = "center",
									d = "center";
								s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
								var h = (c.left + c.right) / 2,
									p = (c.top + c.bottom) / 2;
								"center" === d ? (i = function(t) {
									return t <= h
								}, n = function(t) {
									return t > h
								}) : (i = function(t) {
									return t <= e.width / 2
								}, n = function(t) {
									return t >= l.width - e.width / 2
								}), o = function(t) {
									return t + e.width + s.caretSize + s.caretPadding > l.width
								}, a = function(t) {
									return t - e.width - s.caretSize - s.caretPadding < 0
								}, r = function(t) {
									return t <= p ? "top" : "bottom"
								}, i(s.x) ? (u = "left", o(s.x) && (u = "center", d = r(s.y))) : n(s.x) && (u = "right", a(s.x) && (u = "center", d = r(s.y)));
								var f = t._options;
								return {
									xAlign: f.xAlign ? f.xAlign : u,
									yAlign: f.yAlign ? f.yAlign : d
								}
							}(this, y), d._chart)
						} else f.opacity = 0;
						return f.xAlign = g.xAlign, f.yAlign = g.yAlign, f.x = b.x, f.y = b.y, f.width = y.width, f.height = y.height, f.caretX = x.x, f.caretY = x.y, d._model = f, t && h.custom && h.custom.call(d, f), d
					},
					drawCaret: function(t, e) {
						var i = this._chart.ctx,
							n = this._view,
							o = this.getCaretPosition(t, e, n);
						i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3)
					},
					getCaretPosition: function(t, e, i) {
						var n, o, a, r, s, l, c = i.caretSize,
							u = i.cornerRadius,
							d = i.xAlign,
							h = i.yAlign,
							p = t.x,
							f = t.y,
							m = e.width,
							v = e.height;
						if("center" === h) s = f + v / 2, "left" === d ? (o = (n = p) - c, a = n, r = s + c, l = s - c) : (o = (n = p + m) + c, a = n, r = s - c, l = s + c);
						else if("left" === d ? (n = (o = p + u + c) - c, a = o + c) : "right" === d ? (n = (o = p + m - u - c) - c, a = o + c) : (n = (o = i.caretX) - c, a = o + c), "top" === h) s = (r = f) - c, l = r;
						else {
							s = (r = f + v) + c, l = r;
							var g = a;
							a = n, n = g
						}
						return {
							x1: n,
							x2: o,
							x3: a,
							y1: r,
							y2: s,
							y3: l
						}
					},
					drawTitle: function(t, e, i, n) {
						var o = e.title;
						if(o.length) {
							i.textAlign = e._titleAlign, i.textBaseline = "top";
							var r, l, c = e.titleFontSize,
								u = e.titleSpacing;
							for(i.fillStyle = s(e.titleFontColor, n), i.font = a.fontString(c, e._titleFontStyle, e._titleFontFamily), r = 0, l = o.length; r < l; ++r) i.fillText(o[r], t.x, t.y), t.y += c + u, r + 1 === o.length && (t.y += e.titleMarginBottom - u)
						}
					},
					drawBody: function(t, e, i, n) {
						var o = e.bodyFontSize,
							r = e.bodySpacing,
							l = e.body;
						i.textAlign = e._bodyAlign, i.textBaseline = "top", i.font = a.fontString(o, e._bodyFontStyle, e._bodyFontFamily);
						var c = 0,
							u = function(e) {
								i.fillText(e, t.x + c, t.y), t.y += o + r
							};
						i.fillStyle = s(e.bodyFontColor, n), a.each(e.beforeBody, u);
						var d = e.displayColors;
						c = d ? o + 2 : 0, a.each(l, function(r, l) {
							var c = s(e.labelTextColors[l], n);
							i.fillStyle = c, a.each(r.before, u), a.each(r.lines, function(a) {
								d && (i.fillStyle = s(e.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = s(e.labelColors[l].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = s(e.labelColors[l].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = c), u(a)
							}), a.each(r.after, u)
						}), c = 0, a.each(e.afterBody, u), t.y -= r
					},
					drawFooter: function(t, e, i, n) {
						var o = e.footer;
						o.length && (t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = s(e.footerFontColor, n), i.font = a.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), a.each(o, function(n) {
							i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
						}))
					},
					drawBackground: function(t, e, i, n, o) {
						i.fillStyle = s(e.backgroundColor, o), i.strokeStyle = s(e.borderColor, o), i.lineWidth = e.borderWidth;
						var a = e.xAlign,
							r = e.yAlign,
							l = t.x,
							c = t.y,
							u = n.width,
							d = n.height,
							h = e.cornerRadius;
						i.beginPath(), i.moveTo(l + h, c), "top" === r && this.drawCaret(t, n), i.lineTo(l + u - h, c), i.quadraticCurveTo(l + u, c, l + u, c + h), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(l + u, c + d - h), i.quadraticCurveTo(l + u, c + d, l + u - h, c + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(l + h, c + d), i.quadraticCurveTo(l, c + d, l, c + d - h), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(l, c + h), i.quadraticCurveTo(l, c, l + h, c), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
					},
					draw: function() {
						var t = this._chart.ctx,
							e = this._view;
						if(0 !== e.opacity) {
							var i = {
									width: e.width,
									height: e.height
								},
								n = {
									x: e.x,
									y: e.y
								},
								o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
								a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
							this._options.enabled && a && (this.drawBackground(n, e, t, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o))
						}
					},
					handleEvent: function(t) {
						var e, i = this,
							n = i._options;
						return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !a.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
							x: t.x,
							y: t.y
						}, i.update(!0), i.pivot())), e
					}
				})).positioners = r
			}, {
				26: 26,
				27: 27,
				46: 46
			}],
			37: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46);
				n._set("global", {
					elements: {
						arc: {
							backgroundColor: n.global.defaultColor,
							borderColor: "#fff",
							borderWidth: 2
						}
					}
				}), e.exports = o.extend({
					inLabelRange: function(t) {
						var e = this._view;
						return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
					},
					inRange: function(t, e) {
						var i = this._view;
						if(i) {
							for(var n = a.getAngleFromPoint(i, {
									x: t,
									y: e
								}), o = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
							for(; o > l;) o -= 2 * Math.PI;
							for(; o < s;) o += 2 * Math.PI;
							var c = o >= s && o <= l,
								u = r >= i.innerRadius && r <= i.outerRadius;
							return c && u
						}
						return !1
					},
					getCenterPoint: function() {
						var t = this._view,
							e = (t.startAngle + t.endAngle) / 2,
							i = (t.innerRadius + t.outerRadius) / 2;
						return {
							x: t.x + Math.cos(e) * i,
							y: t.y + Math.sin(e) * i
						}
					},
					getArea: function() {
						var t = this._view;
						return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
					},
					tooltipPosition: function() {
						var t = this._view,
							e = t.startAngle + (t.endAngle - t.startAngle) / 2,
							i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
						return {
							x: t.x + Math.cos(e) * i,
							y: t.y + Math.sin(e) * i
						}
					},
					draw: function() {
						var t = this._chart.ctx,
							e = this._view,
							i = e.startAngle,
							n = e.endAngle;
						t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
					}
				})
			}, {
				26: 26,
				27: 27,
				46: 46
			}],
			38: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46),
					r = n.global;
				n._set("global", {
					elements: {
						line: {
							tension: .4,
							backgroundColor: r.defaultColor,
							borderWidth: 3,
							borderColor: r.defaultColor,
							borderCapStyle: "butt",
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: "miter",
							capBezierPoints: !0,
							fill: !0
						}
					}
				}), e.exports = o.extend({
					draw: function() {
						var t, e, i, n, o = this._view,
							s = this._chart.ctx,
							l = o.spanGaps,
							c = this._children.slice(),
							u = r.elements.line,
							d = -1;
						for(this._loop && c.length && c.push(c[0]), s.save(), s.lineCap = o.borderCapStyle || u.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || u.borderDash), s.lineDashOffset = o.borderDashOffset || u.borderDashOffset, s.lineJoin = o.borderJoinStyle || u.borderJoinStyle, s.lineWidth = o.borderWidth || u.borderWidth, s.strokeStyle = o.borderColor || r.defaultColor, s.beginPath(), d = -1, t = 0; t < c.length; ++t) e = c[t], i = a.previousItem(c, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), d = t) : (i = -1 === d ? i : c[d], n.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(n.x, n.y) : a.canvas.lineTo(s, i._view, e._view), d = t));
						s.stroke(), s.restore()
					}
				})
			}, {
				26: 26,
				27: 27,
				46: 46
			}],
			39: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46),
					r = n.global.defaultColor;

				function s(t) {
					var e = this._view;
					return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
				}
				n._set("global", {
					elements: {
						point: {
							radius: 3,
							pointStyle: "circle",
							backgroundColor: r,
							borderColor: r,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1
						}
					}
				}), e.exports = o.extend({
					inRange: function(t, e) {
						var i = this._view;
						return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
					},
					inLabelRange: s,
					inXRange: s,
					inYRange: function(t) {
						var e = this._view;
						return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
					},
					getCenterPoint: function() {
						var t = this._view;
						return {
							x: t.x,
							y: t.y
						}
					},
					getArea: function() {
						return Math.PI * Math.pow(this._view.radius, 2)
					},
					tooltipPosition: function() {
						var t = this._view;
						return {
							x: t.x,
							y: t.y,
							padding: t.radius + t.borderWidth
						}
					},
					draw: function(t) {
						var e = this._view,
							i = this._model,
							o = this._chart.ctx,
							s = e.pointStyle,
							l = e.rotation,
							c = e.radius,
							u = e.x,
							d = e.y;
						e.skip || (void 0 === t || i.x >= t.left && 1.01 * t.right >= i.x && i.y >= t.top && 1.01 * t.bottom >= i.y) && (o.strokeStyle = e.borderColor || r, o.lineWidth = a.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), o.fillStyle = e.backgroundColor || r, a.canvas.drawPoint(o, s, c, u, d, l))
					}
				})
			}, {
				26: 26,
				27: 27,
				46: 46
			}],
			40: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27);

				function a(t) {
					return void 0 !== t._view.width
				}

				function r(t) {
					var e, i, n, o, r = t._view;
					if(a(t)) {
						var s = r.width / 2;
						e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base)
					} else {
						var l = r.height / 2;
						e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, o = r.y + l
					}
					return {
						left: e,
						top: n,
						right: i,
						bottom: o
					}
				}
				n._set("global", {
					elements: {
						rectangle: {
							backgroundColor: n.global.defaultColor,
							borderColor: n.global.defaultColor,
							borderSkipped: "bottom",
							borderWidth: 0
						}
					}
				}), e.exports = o.extend({
					draw: function() {
						var t, e, i, n, o, a, r, s = this._chart.ctx,
							l = this._view,
							c = l.borderWidth;
						if(l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, o = e > t ? 1 : -1, a = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, o = 1, a = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), c) {
							var u = Math.min(Math.abs(t - e), Math.abs(i - n)),
								d = (c = c > u ? u : c) / 2,
								h = t + ("left" !== r ? d * o : 0),
								p = e + ("right" !== r ? -d * o : 0),
								f = i + ("top" !== r ? d * a : 0),
								m = n + ("bottom" !== r ? -d * a : 0);
							h !== p && (i = f, n = m), f !== m && (t = h, e = p)
						}
						s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = c;
						var v = [
								[t, n],
								[t, i],
								[e, i],
								[e, n]
							],
							g = ["bottom", "left", "top", "right"].indexOf(r, 0);

						function b(t) {
							return v[(g + t) % 4]
						} - 1 === g && (g = 0);
						var y = b(0);
						s.moveTo(y[0], y[1]);
						for(var x = 1; x < 4; x++) y = b(x), s.lineTo(y[0], y[1]);
						s.fill(), c && s.stroke()
					},
					height: function() {
						var t = this._view;
						return t.base - t.y
					},
					inRange: function(t, e) {
						var i = !1;
						if(this._view) {
							var n = r(this);
							i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
						}
						return i
					},
					inLabelRange: function(t, e) {
						if(!this._view) return !1;
						var i = r(this);
						return a(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
					},
					inXRange: function(t) {
						var e = r(this);
						return t >= e.left && t <= e.right
					},
					inYRange: function(t) {
						var e = r(this);
						return t >= e.top && t <= e.bottom
					},
					getCenterPoint: function() {
						var t, e, i = this._view;
						return a(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
							x: t,
							y: e
						}
					},
					getArea: function() {
						var t = this._view;
						return t.width * Math.abs(t.y - t.base)
					},
					tooltipPosition: function() {
						var t = this._view;
						return {
							x: t.x,
							y: t.y
						}
					}
				})
			}, {
				26: 26,
				27: 27
			}],
			41: [function(t, e, i) {
				"use strict";
				e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
			}, {
				37: 37,
				38: 38,
				39: 39,
				40: 40
			}],
			42: [function(t, e, i) {
				"use strict";
				var n = t(43);
				i = e.exports = {
					clear: function(t) {
						t.ctx.clearRect(0, 0, t.width, t.height)
					},
					roundedRect: function(t, e, i, n, o, a) {
						if(a) {
							var r = Math.min(a, o / 2 - 1e-7, n / 2 - 1e-7);
							t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.arcTo(e + n, i, e + n, i + r, r), t.lineTo(e + n, i + o - r), t.arcTo(e + n, i + o, e + n - r, i + o, r), t.lineTo(e + r, i + o), t.arcTo(e, i + o, e, i + o - r, r), t.lineTo(e, i + r), t.arcTo(e, i, e + r, i, r), t.closePath(), t.moveTo(e, i)
						} else t.rect(e, i, n, o)
					},
					drawPoint: function(t, e, i, n, o, a) {
						var r, s, l, c, u, d;
						if(a = a || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
							if(!(isNaN(i) || i <= 0)) {
								switch(t.save(), t.translate(n, o), t.rotate(a * Math.PI / 180), t.beginPath(), e) {
									default: t.arc(0, 0, i, 0, 2 * Math.PI),
									t.closePath();
									break;
									case "triangle":
											u = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2,
										t.moveTo(-s / 2, u / 3),
										t.lineTo(s / 2, u / 3),
										t.lineTo(0, -2 * u / 3),
										t.closePath();
										break;
									case "rect":
											d = 1 / Math.SQRT2 * i,
										t.rect(-d, -d, 2 * d, 2 * d);
										break;
									case "rectRounded":
											var h = i / Math.SQRT2,
											p = -h,
											f = -h,
											m = Math.SQRT2 * i;this.roundedRect(t, p, f, m, m, .425 * i);
										break;
									case "rectRot":
											d = 1 / Math.SQRT2 * i,
										t.moveTo(-d, 0),
										t.lineTo(0, d),
										t.lineTo(d, 0),
										t.lineTo(0, -d),
										t.closePath();
										break;
									case "cross":
											t.moveTo(0, i),
										t.lineTo(0, -i),
										t.moveTo(-i, 0),
										t.lineTo(i, 0);
										break;
									case "crossRot":
											l = Math.cos(Math.PI / 4) * i,
										c = Math.sin(Math.PI / 4) * i,
										t.moveTo(-l, -c),
										t.lineTo(l, c),
										t.moveTo(-l, c),
										t.lineTo(l, -c);
										break;
									case "star":
											t.moveTo(0, i),
										t.lineTo(0, -i),
										t.moveTo(-i, 0),
										t.lineTo(i, 0),
										l = Math.cos(Math.PI / 4) * i,
										c = Math.sin(Math.PI / 4) * i,
										t.moveTo(-l, -c),
										t.lineTo(l, c),
										t.moveTo(-l, c),
										t.lineTo(l, -c);
										break;
									case "line":
											t.moveTo(-i, 0),
										t.lineTo(i, 0);
										break;
									case "dash":
											t.moveTo(0, 0),
										t.lineTo(i, 0)
								}
								t.fill(), t.stroke(), t.restore()
							}
						} else t.drawImage(e, n - e.width / 2, o - e.height / 2, e.width, e.height)
					},
					clipArea: function(t, e) {
						t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
					},
					unclipArea: function(t) {
						t.restore()
					},
					lineTo: function(t, e, i, n) {
						if(i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
						i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
					}
				};
				n.clear = i.clear, n.drawRoundedRectangle = function(t) {
					t.beginPath(), i.roundedRect.apply(i, arguments)
				}
			}, {
				43: 43
			}],
			43: [function(t, e, i) {
				"use strict";
				var n, o = {
					noop: function() {},
					uid: (n = 0, function() {
						return n++
					}),
					isNullOrUndef: function(t) {
						return null == t
					},
					isArray: Array.isArray ? Array.isArray : function(t) {
						return "[object Array]" === Object.prototype.toString.call(t)
					},
					isObject: function(t) {
						return null !== t && "[object Object]" === Object.prototype.toString.call(t)
					},
					valueOrDefault: function(t, e) {
						return void 0 === t ? e : t
					},
					valueAtIndexOrDefault: function(t, e, i) {
						return o.valueOrDefault(o.isArray(t) ? t[e] : t, i)
					},
					callback: function(t, e, i) {
						if(t && "function" == typeof t.call) return t.apply(i, e)
					},
					each: function(t, e, i, n) {
						var a, r, s;
						if(o.isArray(t))
							if(r = t.length, n)
								for(a = r - 1; a >= 0; a--) e.call(i, t[a], a);
							else
								for(a = 0; a < r; a++) e.call(i, t[a], a);
						else if(o.isObject(t))
							for(r = (s = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[s[a]], s[a])
					},
					arrayEquals: function(t, e) {
						var i, n, a, r;
						if(!t || !e || t.length !== e.length) return !1;
						for(i = 0, n = t.length; i < n; ++i)
							if(a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
								if(!o.arrayEquals(a, r)) return !1
							} else if(a !== r) return !1;
						return !0
					},
					clone: function(t) {
						if(o.isArray(t)) return t.map(o.clone);
						if(o.isObject(t)) {
							for(var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = o.clone(t[i[a]]);
							return e
						}
						return t
					},
					_merger: function(t, e, i, n) {
						var a = e[t],
							r = i[t];
						o.isObject(a) && o.isObject(r) ? o.merge(a, r, n) : e[t] = o.clone(r)
					},
					_mergerIf: function(t, e, i) {
						var n = e[t],
							a = i[t];
						o.isObject(n) && o.isObject(a) ? o.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = o.clone(a))
					},
					merge: function(t, e, i) {
						var n, a, r, s, l, c = o.isArray(e) ? e : [e],
							u = c.length;
						if(!o.isObject(t)) return t;
						for(n = (i = i || {}).merger || o._merger, a = 0; a < u; ++a)
							if(e = c[a], o.isObject(e))
								for(l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
						return t
					},
					mergeIf: function(t, e) {
						return o.merge(t, e, {
							merger: o._mergerIf
						})
					},
					extend: function(t) {
						for(var e = function(e, i) {
								t[i] = e
							}, i = 1, n = arguments.length; i < n; ++i) o.each(arguments[i], e);
						return t
					},
					inherits: function(t) {
						var e = this,
							i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
								return e.apply(this, arguments)
							},
							n = function() {
								this.constructor = i
							};
						return n.prototype = e.prototype, i.prototype = new n, i.extend = o.inherits, t && o.extend(i.prototype, t), i.__super__ = e.prototype, i
					}
				};
				e.exports = o, o.callCallback = o.callback, o.indexOf = function(t, e, i) {
					return Array.prototype.indexOf.call(t, e, i)
				}, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault
			}, {}],
			44: [function(t, e, i) {
				"use strict";
				var n = t(43),
					o = {
						linear: function(t) {
							return t
						},
						easeInQuad: function(t) {
							return t * t
						},
						easeOutQuad: function(t) {
							return -t * (t - 2)
						},
						easeInOutQuad: function(t) {
							return(t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
						},
						easeInCubic: function(t) {
							return t * t * t
						},
						easeOutCubic: function(t) {
							return(t -= 1) * t * t + 1
						},
						easeInOutCubic: function(t) {
							return(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
						},
						easeInQuart: function(t) {
							return t * t * t * t
						},
						easeOutQuart: function(t) {
							return -((t -= 1) * t * t * t - 1)
						},
						easeInOutQuart: function(t) {
							return(t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
						},
						easeInQuint: function(t) {
							return t * t * t * t * t
						},
						easeOutQuint: function(t) {
							return(t -= 1) * t * t * t * t + 1
						},
						easeInOutQuint: function(t) {
							return(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
						},
						easeInSine: function(t) {
							return 1 - Math.cos(t * (Math.PI / 2))
						},
						easeOutSine: function(t) {
							return Math.sin(t * (Math.PI / 2))
						},
						easeInOutSine: function(t) {
							return -.5 * (Math.cos(Math.PI * t) - 1)
						},
						easeInExpo: function(t) {
							return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
						},
						easeOutExpo: function(t) {
							return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
						},
						easeInOutExpo: function(t) {
							return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
						},
						easeInCirc: function(t) {
							return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
						},
						easeOutCirc: function(t) {
							return Math.sqrt(1 - (t -= 1) * t)
						},
						easeInOutCirc: function(t) {
							return(t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
						},
						easeInElastic: function(t) {
							var e = 1.70158,
								i = 0,
								n = 1;
							return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
						},
						easeOutElastic: function(t) {
							var e = 1.70158,
								i = 0,
								n = 1;
							return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
						},
						easeInOutElastic: function(t) {
							var e = 1.70158,
								i = 0,
								n = 1;
							return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
						},
						easeInBack: function(t) {
							var e = 1.70158;
							return t * t * ((e + 1) * t - e)
						},
						easeOutBack: function(t) {
							var e = 1.70158;
							return(t -= 1) * t * ((e + 1) * t + e) + 1
						},
						easeInOutBack: function(t) {
							var e = 1.70158;
							return(t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
						},
						easeInBounce: function(t) {
							return 1 - o.easeOutBounce(1 - t)
						},
						easeOutBounce: function(t) {
							return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
						},
						easeInOutBounce: function(t) {
							return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
						}
					};
				e.exports = {
					effects: o
				}, n.easingEffects = o
			}, {
				43: 43
			}],
			45: [function(t, e, i) {
				"use strict";
				var n = t(43);
				e.exports = {
					toLineHeight: function(t, e) {
						var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
						if(!i || "normal" === i[1]) return 1.2 * e;
						switch(t = +i[2], i[3]) {
							case "px":
								return t;
							case "%":
								t /= 100
						}
						return e * t
					},
					toPadding: function(t) {
						var e, i, o, a;
						return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, o = +t.bottom || 0, a = +t.left || 0) : e = i = o = a = +t || 0, {
							top: e,
							right: i,
							bottom: o,
							left: a,
							height: e + o,
							width: a + i
						}
					},
					resolve: function(t, e, i) {
						var o, a, r;
						for(o = 0, a = t.length; o < a; ++o)
							if(void 0 !== (r = t[o]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
					}
				}
			}, {
				43: 43
			}],
			46: [function(t, e, i) {
				"use strict";
				e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
			}, {
				42: 42,
				43: 43,
				44: 44,
				45: 45
			}],
			47: [function(t, e, i) {
				e.exports = {
					acquireContext: function(t) {
						return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
					}
				}
			}, {}],
			48: [function(t, e, i) {
				"use strict";
				var n = t(46),
					o = "$chartjs",
					a = "chartjs-",
					r = a + "render-monitor",
					s = a + "render-animation",
					l = ["animationstart", "webkitAnimationStart"],
					c = {
						touchstart: "mousedown",
						touchmove: "mousemove",
						touchend: "mouseup",
						pointerenter: "mouseenter",
						pointerdown: "mousedown",
						pointermove: "mousemove",
						pointerup: "mouseup",
						pointerleave: "mouseout",
						pointerout: "mouseout"
					};

				function u(t, e) {
					var i = n.getStyle(t, e),
						o = i && i.match(/^(\d+)(\.\d+)?px$/);
					return o ? Number(o[1]) : void 0
				}
				var d = !! function() {
					var t = !1;
					try {
						var e = Object.defineProperty({}, "passive", {
							get: function() {
								t = !0
							}
						});
						window.addEventListener("e", null, e)
					} catch(t) {}
					return t
				}() && {
					passive: !0
				};

				function h(t, e, i) {
					t.addEventListener(e, i, d)
				}

				function p(t, e, i) {
					t.removeEventListener(e, i, d)
				}

				function f(t, e, i, n, o) {
					return {
						type: t,
						chart: e,
						native: o || null,
						x: void 0 !== i ? i : null,
						y: void 0 !== n ? n : null
					}
				}

				function m(t, e, i) {
					var c, u, d, p, m = t[o] || (t[o] = {}),
						v = m.resizer = function(t) {
							var e = document.createElement("div"),
								i = a + "size-monitor",
								n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
							e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
							var o = e.childNodes[0],
								r = e.childNodes[1];
							e._reset = function() {
								o.scrollLeft = 1e6, o.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
							};
							var s = function() {
								e._reset(), t()
							};
							return h(o, "scroll", s.bind(o, "expand")), h(r, "scroll", s.bind(r, "shrink")), e
						}((c = function() {
							if(m.resizer) return e(f("resize", i))
						}, d = !1, p = [], function() {
							p = Array.prototype.slice.call(arguments), u = u || this, d || (d = !0, n.requestAnimFrame.call(window, function() {
								d = !1, c.apply(u, p)
							}))
						}));
					! function(t, e) {
						var i = t[o] || (t[o] = {}),
							a = i.renderProxy = function(t) {
								t.animationName === s && e()
							};
						n.each(l, function(e) {
							h(t, e, a)
						}), i.reflow = !!t.offsetParent, t.classList.add(r)
					}(t, function() {
						if(m.resizer) {
							var e = t.parentNode;
							e && e !== v.parentNode && e.insertBefore(v, e.firstChild), v._reset()
						}
					})
				}

				function v(t) {
					var e = t[o] || {},
						i = e.resizer;
					delete e.resizer,
						function(t) {
							var e = t[o] || {},
								i = e.renderProxy;
							i && (n.each(l, function(e) {
								p(t, e, i)
							}), delete e.renderProxy), t.classList.remove(r)
						}(t), i && i.parentNode && i.parentNode.removeChild(i)
				}
				e.exports = {
					_enabled: "undefined" != typeof window && "undefined" != typeof document,
					initialize: function() {
						var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
						e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
					},
					acquireContext: function(t, e) {
						"string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
						var i = t && t.getContext && t.getContext("2d");
						return i && i.canvas === t ? (function(t, e) {
							var i = t.style,
								n = t.getAttribute("height"),
								a = t.getAttribute("width");
							if(t[o] = {
									initial: {
										height: n,
										width: a,
										style: {
											display: i.display,
											height: i.height,
											width: i.width
										}
									}
								}, i.display = i.display || "block", null === a || "" === a) {
								var r = u(t, "width");
								void 0 !== r && (t.width = r)
							}
							if(null === n || "" === n)
								if("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
								else {
									var s = u(t, "height");
									void 0 !== r && (t.height = s)
								}
						}(t, e), i) : null
					},
					releaseContext: function(t) {
						var e = t.canvas;
						if(e[o]) {
							var i = e[o].initial;
							["height", "width"].forEach(function(t) {
								var o = i[t];
								n.isNullOrUndef(o) ? e.removeAttribute(t) : e.setAttribute(t, o)
							}), n.each(i.style || {}, function(t, i) {
								e.style[i] = t
							}), e.width = e.width, delete e[o]
						}
					},
					addEventListener: function(t, e, i) {
						var a = t.canvas;
						if("resize" !== e) {
							var r = i[o] || (i[o] = {});
							h(a, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) {
								i(function(t, e) {
									var i = c[t.type] || t.type,
										o = n.getRelativePosition(t, e);
									return f(i, e, o.x, o.y, t)
								}(e, t))
							})
						} else m(a, i, t)
					},
					removeEventListener: function(t, e, i) {
						var n = t.canvas;
						if("resize" !== e) {
							var a = ((i[o] || {}).proxies || {})[t.id + "_" + e];
							a && p(n, e, a)
						} else v(n)
					}
				}, n.addEvent = h, n.removeEvent = p
			}, {
				46: 46
			}],
			49: [function(t, e, i) {
				"use strict";
				var n = t(46),
					o = t(47),
					a = t(48),
					r = a._enabled ? a : o;
				e.exports = n.extend({
					initialize: function() {},
					acquireContext: function() {},
					releaseContext: function() {},
					addEventListener: function() {},
					removeEventListener: function() {}
				}, r)
			}, {
				46: 46,
				47: 47,
				48: 48
			}],
			50: [function(t, e, i) {
				"use strict";
				e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
			}, {
				51: 51,
				52: 52,
				53: 53
			}],
			51: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(41),
					a = t(46);
				n._set("global", {
					plugins: {
						filler: {
							propagate: !0
						}
					}
				});
				var r = {
					dataset: function(t) {
						var e = t.fill,
							i = t.chart,
							n = i.getDatasetMeta(e),
							o = n && i.isDatasetVisible(e) && n.dataset._children || [],
							a = o.length || 0;
						return a ? function(t, e) {
							return e < a && o[e]._view || null
						} : null
					},
					boundary: function(t) {
						var e = t.boundary,
							i = e ? e.x : null,
							n = e ? e.y : null;
						return function(t) {
							return {
								x: null === i ? t.x : i,
								y: null === n ? t.y : n
							}
						}
					}
				};

				function s(t, e, i) {
					var n, o = t._model || {},
						a = o.fill;
					if(void 0 === a && (a = !!o.backgroundColor), !1 === a || null === a) return !1;
					if(!0 === a) return "origin";
					if(n = parseFloat(a, 10), isFinite(n) && Math.floor(n) === n) return "-" !== a[0] && "+" !== a[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
					switch(a) {
						case "bottom":
							return "start";
						case "top":
							return "end";
						case "zero":
							return "origin";
						case "origin":
						case "start":
						case "end":
							return a;
						default:
							return !1
					}
				}

				function l(t) {
					var e, i = t.el._model || {},
						n = t.el._scale || {},
						o = t.fill,
						a = null;
					if(isFinite(o)) return null;
					if("start" === o ? a = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === o ? a = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? a = i.scaleZero : n.getBasePosition ? a = n.getBasePosition() : n.getBasePixel && (a = n.getBasePixel()), null != a) {
						if(void 0 !== a.x && void 0 !== a.y) return a;
						if("number" == typeof a && isFinite(a)) return {
							x: (e = n.isHorizontal()) ? a : null,
							y: e ? null : a
						}
					}
					return null
				}

				function c(t, e, i) {
					var n, o = t[e].fill,
						a = [e];
					if(!i) return o;
					for(; !1 !== o && -1 === a.indexOf(o);) {
						if(!isFinite(o)) return o;
						if(!(n = t[o])) return !1;
						if(n.visible) return o;
						a.push(o), o = n.fill
					}
					return !1
				}

				function u(t) {
					var e = t.fill,
						i = "dataset";
					return !1 === e ? null : (isFinite(e) || (i = "boundary"), r[i](t))
				}

				function d(t) {
					return t && !t.skip
				}

				function h(t, e, i, n, o) {
					var r;
					if(n && o) {
						for(t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) a.canvas.lineTo(t, e[r - 1], e[r]);
						for(t.lineTo(i[o - 1].x, i[o - 1].y), r = o - 1; r > 0; --r) a.canvas.lineTo(t, i[r], i[r - 1], !0)
					}
				}
				e.exports = {
					id: "filler",
					afterDatasetsUpdate: function(t, e) {
						var i, n, a, r, d = (t.data.datasets || []).length,
							h = e.propagate,
							p = [];
						for(n = 0; n < d; ++n) r = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof o.Line && (r = {
							visible: t.isDatasetVisible(n),
							fill: s(a, n, d),
							chart: t,
							el: a
						}), i.$filler = r, p.push(r);
						for(n = 0; n < d; ++n)(r = p[n]) && (r.fill = c(p, n, h), r.boundary = l(r), r.mapper = u(r))
					},
					beforeDatasetDraw: function(t, e) {
						var i = e.meta.$filler;
						if(i) {
							var o = t.ctx,
								r = i.el,
								s = r._view,
								l = r._children || [],
								c = i.mapper,
								u = s.backgroundColor || n.global.defaultColor;
							c && u && l.length && (a.canvas.clipArea(o, t.chartArea), function(t, e, i, n, o, a) {
								var r, s, l, c, u, p, f, m = e.length,
									v = n.spanGaps,
									g = [],
									b = [],
									y = 0,
									x = 0;
								for(t.beginPath(), r = 0, s = m + !!a; r < s; ++r) u = i(c = e[l = r % m]._view, l, n), p = d(c), f = d(u), p && f ? (y = g.push(c), x = b.push(u)) : y && x && (v ? (p && g.push(c), f && b.push(u)) : (h(t, g, b, y, x), y = x = 0, g = [], b = []));
								h(t, g, b, y, x), t.closePath(), t.fillStyle = o, t.fill()
							}(o, l, c, s, u, r._loop), a.canvas.unclipArea(o))
						}
					}
				}
			}, {
				26: 26,
				41: 41,
				46: 46
			}],
			52: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46),
					r = t(31),
					s = a.noop;

				function l(t, e) {
					return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
				}
				n._set("global", {
					legend: {
						display: !0,
						position: "top",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function(t, e) {
							var i = e.datasetIndex,
								n = this.chart,
								o = n.getDatasetMeta(i);
							o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update()
						},
						onHover: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function(t) {
								var e = t.data;
								return a.isArray(e.datasets) ? e.datasets.map(function(e, i) {
									return {
										text: e.label,
										fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
										hidden: !t.isDatasetVisible(i),
										lineCap: e.borderCapStyle,
										lineDash: e.borderDash,
										lineDashOffset: e.borderDashOffset,
										lineJoin: e.borderJoinStyle,
										lineWidth: e.borderWidth,
										strokeStyle: e.borderColor,
										pointStyle: e.pointStyle,
										datasetIndex: i
									}
								}, this) : []
							}
						}
					},
					legendCallback: function(t) {
						var e = [];
						e.push('<ul class="' + t.id + '-legend">');
						for(var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
						return e.push("</ul>"), e.join("")
					}
				});
				var c = o.extend({
					initialize: function(t) {
						a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
					},
					beforeUpdate: s,
					update: function(t, e, i) {
						var n = this;
						return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
					},
					afterUpdate: s,
					beforeSetDimensions: s,
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: s,
					beforeBuildLabels: s,
					buildLabels: function() {
						var t = this,
							e = t.options.labels || {},
							i = a.callback(e.generateLabels, [t.chart], t) || [];
						e.filter && (i = i.filter(function(i) {
							return e.filter(i, t.chart.data)
						})), t.options.reverse && i.reverse(), t.legendItems = i
					},
					afterBuildLabels: s,
					beforeFit: s,
					fit: function() {
						var t = this,
							e = t.options,
							i = e.labels,
							o = e.display,
							r = t.ctx,
							s = n.global,
							c = a.valueOrDefault,
							u = c(i.fontSize, s.defaultFontSize),
							d = c(i.fontStyle, s.defaultFontStyle),
							h = c(i.fontFamily, s.defaultFontFamily),
							p = a.fontString(u, d, h),
							f = t.legendHitBoxes = [],
							m = t.minSize,
							v = t.isHorizontal();
						if(v ? (m.width = t.maxWidth, m.height = o ? 10 : 0) : (m.width = o ? 10 : 0, m.height = t.maxHeight), o)
							if(r.font = p, v) {
								var g = t.lineWidths = [0],
									b = t.legendItems.length ? u + i.padding : 0;
								r.textAlign = "left", r.textBaseline = "top", a.each(t.legendItems, function(e, n) {
									var o = l(i, u) + u / 2 + r.measureText(e.text).width;
									g[g.length - 1] + o + i.padding >= t.width && (b += u + i.padding, g[g.length] = t.left), f[n] = {
										left: 0,
										top: 0,
										width: o,
										height: u
									}, g[g.length - 1] += o + i.padding
								}), m.height += b
							} else {
								var y = i.padding,
									x = t.columnWidths = [],
									w = i.padding,
									k = 0,
									C = 0,
									S = u + y;
								a.each(t.legendItems, function(t, e) {
									var n = l(i, u) + u / 2 + r.measureText(t.text).width;
									C + S > m.height && (w += k + i.padding, x.push(k), k = 0, C = 0), k = Math.max(k, n), C += S, f[e] = {
										left: 0,
										top: 0,
										width: n,
										height: u
									}
								}), w += k, x.push(k), m.width += w
							}
						t.width = m.width, t.height = m.height
					},
					afterFit: s,
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					draw: function() {
						var t = this,
							e = t.options,
							i = e.labels,
							o = n.global,
							r = o.elements.line,
							s = t.width,
							c = t.lineWidths;
						if(e.display) {
							var u, d = t.ctx,
								h = a.valueOrDefault,
								p = h(i.fontColor, o.defaultFontColor),
								f = h(i.fontSize, o.defaultFontSize),
								m = h(i.fontStyle, o.defaultFontStyle),
								v = h(i.fontFamily, o.defaultFontFamily),
								g = a.fontString(f, m, v);
							d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = p, d.fillStyle = p, d.font = g;
							var b = l(i, f),
								y = t.legendHitBoxes,
								x = t.isHorizontal();
							u = x ? {
								x: t.left + (s - c[0]) / 2,
								y: t.top + i.padding,
								line: 0
							} : {
								x: t.left + i.padding,
								y: t.top + i.padding,
								line: 0
							};
							var w = f + i.padding;
							a.each(t.legendItems, function(n, l) {
								var p = d.measureText(n.text).width,
									m = b + f / 2 + p,
									v = u.x,
									g = u.y;
								x ? v + m >= s && (g = u.y += w, u.line++, v = u.x = t.left + (s - c[u.line]) / 2) : g + w > t.bottom && (v = u.x = v + t.columnWidths[u.line] + i.padding, g = u.y = t.top + i.padding, u.line++),
									function(t, i, n) {
										if(!(isNaN(b) || b <= 0)) {
											d.save(), d.fillStyle = h(n.fillStyle, o.defaultColor), d.lineCap = h(n.lineCap, r.borderCapStyle), d.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), d.lineJoin = h(n.lineJoin, r.borderJoinStyle), d.lineWidth = h(n.lineWidth, r.borderWidth), d.strokeStyle = h(n.strokeStyle, o.defaultColor);
											var s = 0 === h(n.lineWidth, r.borderWidth);
											if(d.setLineDash && d.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
												var l = f * Math.SQRT2 / 2,
													c = l / Math.SQRT2,
													u = t + c,
													p = i + c;
												a.canvas.drawPoint(d, n.pointStyle, l, u, p)
											} else s || d.strokeRect(t, i, b, f), d.fillRect(t, i, b, f);
											d.restore()
										}
									}(v, g, n), y[l].left = v, y[l].top = g,
									function(t, e, i, n) {
										var o = f / 2,
											a = b + o + t,
											r = e + o;
										d.fillText(i.text, a, r), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(a, r), d.lineTo(a + n, r), d.stroke())
									}(v, g, n, p), x ? u.x += m + i.padding : u.y += w
							})
						}
					},
					handleEvent: function(t) {
						var e = this,
							i = e.options,
							n = "mouseup" === t.type ? "click" : t.type,
							o = !1;
						if("mousemove" === n) {
							if(!i.onHover) return
						} else {
							if("click" !== n) return;
							if(!i.onClick) return
						}
						var a = t.x,
							r = t.y;
						if(a >= e.left && a <= e.right && r >= e.top && r <= e.bottom)
							for(var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
								var c = s[l];
								if(a >= c.left && a <= c.left + c.width && r >= c.top && r <= c.top + c.height) {
									if("click" === n) {
										i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
										break
									}
									if("mousemove" === n) {
										i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
										break
									}
								}
							}
						return o
					}
				});

				function u(t, e) {
					var i = new c({
						ctx: t.ctx,
						options: e,
						chart: t
					});
					r.configure(t, i, e), r.addBox(t, i), t.legend = i
				}
				e.exports = {
					id: "legend",
					_element: c,
					beforeInit: function(t) {
						var e = t.options.legend;
						e && u(t, e)
					},
					beforeUpdate: function(t) {
						var e = t.options.legend,
							i = t.legend;
						e ? (a.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.legend)
					},
					afterEvent: function(t, e) {
						var i = t.legend;
						i && i.handleEvent(e)
					}
				}
			}, {
				26: 26,
				27: 27,
				31: 31,
				46: 46
			}],
			53: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(27),
					a = t(46),
					r = t(31),
					s = a.noop;
				n._set("global", {
					title: {
						display: !1,
						fontStyle: "bold",
						fullWidth: !0,
						lineHeight: 1.2,
						padding: 10,
						position: "top",
						text: "",
						weight: 2e3
					}
				});
				var l = o.extend({
					initialize: function(t) {
						a.extend(this, t), this.legendHitBoxes = []
					},
					beforeUpdate: s,
					update: function(t, e, i) {
						var n = this;
						return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
					},
					afterUpdate: s,
					beforeSetDimensions: s,
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: s,
					beforeBuildLabels: s,
					buildLabels: s,
					afterBuildLabels: s,
					beforeFit: s,
					fit: function() {
						var t = this,
							e = a.valueOrDefault,
							i = t.options,
							o = i.display,
							r = e(i.fontSize, n.global.defaultFontSize),
							s = t.minSize,
							l = a.isArray(i.text) ? i.text.length : 1,
							c = a.options.toLineHeight(i.lineHeight, r),
							u = o ? l * c + 2 * i.padding : 0;
						t.isHorizontal() ? (s.width = t.maxWidth, s.height = u) : (s.width = u, s.height = t.maxHeight), t.width = s.width, t.height = s.height
					},
					afterFit: s,
					isHorizontal: function() {
						var t = this.options.position;
						return "top" === t || "bottom" === t
					},
					draw: function() {
						var t = this,
							e = t.ctx,
							i = a.valueOrDefault,
							o = t.options,
							r = n.global;
						if(o.display) {
							var s, l, c, u = i(o.fontSize, r.defaultFontSize),
								d = i(o.fontStyle, r.defaultFontStyle),
								h = i(o.fontFamily, r.defaultFontFamily),
								p = a.fontString(u, d, h),
								f = a.options.toLineHeight(o.lineHeight, u),
								m = f / 2 + o.padding,
								v = 0,
								g = t.top,
								b = t.left,
								y = t.bottom,
								x = t.right;
							e.fillStyle = i(o.fontColor, r.defaultFontColor), e.font = p, t.isHorizontal() ? (l = b + (x - b) / 2, c = g + m, s = x - b) : (l = "left" === o.position ? b + m : x - m, c = g + (y - g) / 2, s = y - g, v = Math.PI * ("left" === o.position ? -.5 : .5)), e.save(), e.translate(l, c), e.rotate(v), e.textAlign = "center", e.textBaseline = "middle";
							var w = o.text;
							if(a.isArray(w))
								for(var k = 0, C = 0; C < w.length; ++C) e.fillText(w[C], 0, k, s), k += f;
							else e.fillText(w, 0, 0, s);
							e.restore()
						}
					}
				});

				function c(t, e) {
					var i = new l({
						ctx: t.ctx,
						options: e,
						chart: t
					});
					r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i
				}
				e.exports = {
					id: "title",
					_element: l,
					beforeInit: function(t) {
						var e = t.options.title;
						e && c(t, e)
					},
					beforeUpdate: function(t) {
						var e = t.options.title,
							i = t.titleBlock;
						e ? (a.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : c(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock)
					}
				}
			}, {
				26: 26,
				27: 27,
				31: 31,
				46: 46
			}],
			54: [function(t, e, i) {
				"use strict";
				var n = t(33),
					o = t(34);
				e.exports = function() {
					var t = n.extend({
						getLabels: function() {
							var t = this.chart.data;
							return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
						},
						determineDataLimits: function() {
							var t, e = this,
								i = e.getLabels();
							e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
						},
						buildTicks: function() {
							var t = this,
								e = t.getLabels();
							t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
						},
						getLabelForIndex: function(t, e) {
							var i = this,
								n = i.chart.data,
								o = i.isHorizontal();
							return n.yLabels && !o ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
						},
						getPixelForValue: function(t, e) {
							var i, n = this,
								o = n.options.offset,
								a = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
							if(null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
								t = i || t;
								var r = n.getLabels().indexOf(t);
								e = -1 !== r ? r : e
							}
							if(n.isHorizontal()) {
								var s = n.width / a,
									l = s * (e - n.minIndex);
								return o && (l += s / 2), n.left + Math.round(l)
							}
							var c = n.height / a,
								u = c * (e - n.minIndex);
							return o && (u += c / 2), n.top + Math.round(u)
						},
						getPixelForTick: function(t) {
							return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
						},
						getValueForPixel: function(t) {
							var e = this,
								i = e.options.offset,
								n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
								o = e.isHorizontal(),
								a = (o ? e.width : e.height) / n;
							return t -= o ? e.left : e.top, i && (t -= a / 2), (t <= 0 ? 0 : Math.round(t / a)) + e.minIndex
						},
						getBasePixel: function() {
							return this.bottom
						}
					});
					o.registerScaleType("category", t, {
						position: "bottom"
					})
				}
			}, {
				33: 33,
				34: 34
			}],
			55: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(46),
					a = t(34),
					r = t(35);
				e.exports = function(t) {
					var e = {
							position: "left",
							ticks: {
								callback: r.formatters.linear
							}
						},
						i = t.LinearScaleBase.extend({
							determineDataLimits: function() {
								var t = this,
									e = t.options,
									i = t.chart,
									n = i.data.datasets,
									a = t.isHorizontal();

								function r(e) {
									return a ? e.xAxisID === t.id : e.yAxisID === t.id
								}
								t.min = null, t.max = null;
								var s = e.stacked;
								if(void 0 === s && o.each(n, function(t, e) {
										if(!s) {
											var n = i.getDatasetMeta(e);
											i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
										}
									}), e.stacked || s) {
									var l = {};
									o.each(n, function(n, a) {
										var s = i.getDatasetMeta(a),
											c = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
										void 0 === l[c] && (l[c] = {
											positiveValues: [],
											negativeValues: []
										});
										var u = l[c].positiveValues,
											d = l[c].negativeValues;
										i.isDatasetVisible(a) && r(s) && o.each(n.data, function(i, n) {
											var o = +t.getRightValue(i);
											isNaN(o) || s.data[n].hidden || (u[n] = u[n] || 0, d[n] = d[n] || 0, e.relativePoints ? u[n] = 100 : o < 0 ? d[n] += o : u[n] += o)
										})
									}), o.each(l, function(e) {
										var i = e.positiveValues.concat(e.negativeValues),
											n = o.min(i),
											a = o.max(i);
										t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a)
									})
								} else o.each(n, function(e, n) {
									var a = i.getDatasetMeta(n);
									i.isDatasetVisible(n) && r(a) && o.each(e.data, function(e, i) {
										var n = +t.getRightValue(e);
										isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
									})
								});
								t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
							},
							getTickLimit: function() {
								var t, e = this.options.ticks;
								if(this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
								else {
									var i = o.valueOrDefault(e.fontSize, n.global.defaultFontSize);
									t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
								}
								return t
							},
							handleDirectionalChanges: function() {
								this.isHorizontal() || this.ticks.reverse()
							},
							getLabelForIndex: function(t, e) {
								return +this.getRightValue(this.chart.data.datasets[e].data[t])
							},
							getPixelForValue: function(t) {
								var e = this,
									i = e.start,
									n = +e.getRightValue(t),
									o = e.end - i;
								return e.isHorizontal() ? e.left + e.width / o * (n - i) : e.bottom - e.height / o * (n - i)
							},
							getValueForPixel: function(t) {
								var e = this,
									i = e.isHorizontal(),
									n = i ? e.width : e.height,
									o = (i ? t - e.left : e.bottom - t) / n;
								return e.start + (e.end - e.start) * o
							},
							getPixelForTick: function(t) {
								return this.getPixelForValue(this.ticksAsNumbers[t])
							}
						});
					a.registerScaleType("linear", i, e)
				}
			}, {
				26: 26,
				34: 34,
				35: 35,
				46: 46
			}],
			56: [function(t, e, i) {
				"use strict";
				var n = t(46),
					o = t(33);
				e.exports = function(t) {
					var e = n.noop;
					t.LinearScaleBase = o.extend({
						getRightValue: function(t) {
							return "string" == typeof t ? +t : o.prototype.getRightValue.call(this, t)
						},
						handleTickRangeOptions: function() {
							var t = this,
								e = t.options.ticks;
							if(e.beginAtZero) {
								var i = n.sign(t.min),
									o = n.sign(t.max);
								i < 0 && o < 0 ? t.max = 0 : i > 0 && o > 0 && (t.min = 0)
							}
							var a = void 0 !== e.min || void 0 !== e.suggestedMin,
								r = void 0 !== e.max || void 0 !== e.suggestedMax;
							void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
						},
						getTickLimit: e,
						handleDirectionalChanges: e,
						buildTicks: function() {
							var t = this,
								e = t.options.ticks,
								i = t.getTickLimit(),
								o = {
									maxTicks: i = Math.max(2, i),
									min: e.min,
									max: e.max,
									precision: e.precision,
									stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
								},
								a = t.ticks = function(t, e) {
									var i, o, a, r = [];
									if(t.stepSize && t.stepSize > 0) a = t.stepSize;
									else {
										var s = n.niceNum(e.max - e.min, !1);
										a = n.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (o = t.precision) && (i = Math.pow(10, o), a = Math.ceil(a * i) / i)
									}
									var l = Math.floor(e.min / a) * a,
										c = Math.ceil(e.max / a) * a;
									n.isNullOrUndef(t.min) || n.isNullOrUndef(t.max) || !t.stepSize || n.almostWhole((t.max - t.min) / t.stepSize, a / 1e3) && (l = t.min, c = t.max);
									var u = (c - l) / a;
									u = n.almostEquals(u, Math.round(u), a / 1e3) ? Math.round(u) : Math.ceil(u), o = 1, a < 1 && (o = Math.pow(10, 1 - Math.floor(n.log10(a))), l = Math.round(l * o) / o, c = Math.round(c * o) / o), r.push(void 0 !== t.min ? t.min : l);
									for(var d = 1; d < u; ++d) r.push(Math.round((l + d * a) * o) / o);
									return r.push(void 0 !== t.max ? t.max : c), r
								}(o, t);
							t.handleDirectionalChanges(), t.max = n.max(a), t.min = n.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
						},
						convertTicksToLabels: function() {
							var t = this;
							t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), o.prototype.convertTicksToLabels.call(t)
						}
					})
				}
			}, {
				33: 33,
				46: 46
			}],
			57: [function(t, e, i) {
				"use strict";
				var n = t(46),
					o = t(33),
					a = t(34),
					r = t(35);
				e.exports = function(t) {
					var e = {
							position: "left",
							ticks: {
								callback: r.formatters.logarithmic
							}
						},
						i = o.extend({
							determineDataLimits: function() {
								var t = this,
									e = t.options,
									i = t.chart,
									o = i.data.datasets,
									a = t.isHorizontal();

								function r(e) {
									return a ? e.xAxisID === t.id : e.yAxisID === t.id
								}
								t.min = null, t.max = null, t.minNotZero = null;
								var s = e.stacked;
								if(void 0 === s && n.each(o, function(t, e) {
										if(!s) {
											var n = i.getDatasetMeta(e);
											i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
										}
									}), e.stacked || s) {
									var l = {};
									n.each(o, function(o, a) {
										var s = i.getDatasetMeta(a),
											c = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
										i.isDatasetVisible(a) && r(s) && (void 0 === l[c] && (l[c] = []), n.each(o.data, function(e, i) {
											var n = l[c],
												o = +t.getRightValue(e);
											isNaN(o) || s.data[i].hidden || o < 0 || (n[i] = n[i] || 0, n[i] += o)
										}))
									}), n.each(l, function(e) {
										if(e.length > 0) {
											var i = n.min(e),
												o = n.max(e);
											t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? o : Math.max(t.max, o)
										}
									})
								} else n.each(o, function(e, o) {
									var a = i.getDatasetMeta(o);
									i.isDatasetVisible(o) && r(a) && n.each(e.data, function(e, i) {
										var n = +t.getRightValue(e);
										isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
									})
								});
								this.handleTickRangeOptions()
							},
							handleTickRangeOptions: function() {
								var t = this,
									e = t.options.ticks,
									i = n.valueOrDefault;
								t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1)
							},
							buildTicks: function() {
								var t = this,
									e = t.options.ticks,
									i = !t.isHorizontal(),
									o = {
										min: e.min,
										max: e.max
									},
									a = t.ticks = function(t, e) {
										var i, o, a = [],
											r = n.valueOrDefault,
											s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
											l = Math.floor(n.log10(e.max)),
											c = Math.ceil(e.max / Math.pow(10, l));
										0 === s ? (i = Math.floor(n.log10(e.minNotZero)), o = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(s), s = o * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), o = Math.floor(s / Math.pow(10, i)));
										var u = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
										do {
											a.push(s), 10 == ++o && (o = 1, u = ++i >= 0 ? 1 : u), s = Math.round(o * Math.pow(10, i) * u) / u
										} while (i < l || i === l && o < c);
										var d = r(t.max, s);
										return a.push(d), a
									}(o, t);
								t.max = n.max(a), t.min = n.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
							},
							convertTicksToLabels: function() {
								this.tickValues = this.ticks.slice(), o.prototype.convertTicksToLabels.call(this)
							},
							getLabelForIndex: function(t, e) {
								return +this.getRightValue(this.chart.data.datasets[e].data[t])
							},
							getPixelForTick: function(t) {
								return this.getPixelForValue(this.tickValues[t])
							},
							_getFirstTickValue: function(t) {
								var e = Math.floor(n.log10(t));
								return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
							},
							getPixelForValue: function(e) {
								var i, o, a, r, s, l = this,
									c = l.options.ticks.reverse,
									u = n.log10,
									d = l._getFirstTickValue(l.minNotZero),
									h = 0;
								return e = +l.getRightValue(e), c ? (a = l.end, r = l.start, s = -1) : (a = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, o = c ? l.right : l.left) : (i = l.height, s *= -1, o = c ? l.top : l.bottom), e !== a && (0 === a && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), a = d), 0 !== e && (h += i / (u(r) - u(a)) * (u(e) - u(a))), o += s * h), o
							},
							getValueForPixel: function(e) {
								var i, o, a, r, s = this,
									l = s.options.ticks.reverse,
									c = n.log10,
									u = s._getFirstTickValue(s.minNotZero);
								if(l ? (o = s.end, a = s.start) : (o = s.start, a = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== o) {
									if(0 === o) {
										var d = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
										r -= d, i -= d, o = u
									}
									r *= c(a) - c(o), r /= i, r = Math.pow(10, c(o) + r)
								}
								return r
							}
						});
					a.registerScaleType("logarithmic", i, e)
				}
			}, {
				33: 33,
				34: 34,
				35: 35,
				46: 46
			}],
			58: [function(t, e, i) {
				"use strict";
				var n = t(26),
					o = t(46),
					a = t(34),
					r = t(35);
				e.exports = function(t) {
					var e = n.global,
						i = {
							display: !0,
							animate: !0,
							position: "chartArea",
							angleLines: {
								display: !0,
								color: "rgba(0, 0, 0, 0.1)",
								lineWidth: 1
							},
							gridLines: {
								circular: !1
							},
							ticks: {
								showLabelBackdrop: !0,
								backdropColor: "rgba(255,255,255,0.75)",
								backdropPaddingY: 2,
								backdropPaddingX: 2,
								callback: r.formatters.linear
							},
							pointLabels: {
								display: !0,
								fontSize: 10,
								callback: function(t) {
									return t
								}
							}
						};

					function s(t) {
						var e = t.options;
						return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
					}

					function l(t) {
						var i = t.options.pointLabels,
							n = o.valueOrDefault(i.fontSize, e.defaultFontSize),
							a = o.valueOrDefault(i.fontStyle, e.defaultFontStyle),
							r = o.valueOrDefault(i.fontFamily, e.defaultFontFamily);
						return {
							size: n,
							style: a,
							family: r,
							font: o.fontString(n, a, r)
						}
					}

					function c(t, e, i, n, o) {
						return t === n || t === o ? {
							start: e - i / 2,
							end: e + i / 2
						} : t < n || t > o ? {
							start: e - i - 5,
							end: e
						} : {
							start: e,
							end: e + i + 5
						}
					}

					function u(t) {
						return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
					}

					function d(t, e, i, n) {
						if(o.isArray(e))
							for(var a = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, a), a += r;
						else t.fillText(e, i.x, i.y)
					}

					function h(t, e, i) {
						90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
					}

					function p(t) {
						return o.isNumber(t) ? t : 0
					}
					var f = t.LinearScaleBase.extend({
						setDimensions: function() {
							var t = this,
								i = t.options,
								n = i.ticks;
							t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
							var a = o.min([t.height, t.width]),
								r = o.valueOrDefault(n.fontSize, e.defaultFontSize);
							t.drawingArea = i.display ? a / 2 - (r / 2 + n.backdropPaddingY) : a / 2
						},
						determineDataLimits: function() {
							var t = this,
								e = t.chart,
								i = Number.POSITIVE_INFINITY,
								n = Number.NEGATIVE_INFINITY;
							o.each(e.data.datasets, function(a, r) {
								if(e.isDatasetVisible(r)) {
									var s = e.getDatasetMeta(r);
									o.each(a.data, function(e, o) {
										var a = +t.getRightValue(e);
										isNaN(a) || s.data[o].hidden || (i = Math.min(a, i), n = Math.max(a, n))
									})
								}
							}), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
						},
						getTickLimit: function() {
							var t = this.options.ticks,
								i = o.valueOrDefault(t.fontSize, e.defaultFontSize);
							return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
						},
						convertTicksToLabels: function() {
							var e = this;
							t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
						},
						getLabelForIndex: function(t, e) {
							return +this.getRightValue(this.chart.data.datasets[e].data[t])
						},
						fit: function() {
							var t, e;
							this.options.pointLabels.display ? function(t) {
								var e, i, n, a = l(t),
									r = Math.min(t.height / 2, t.width / 2),
									u = {
										r: t.width,
										l: 0,
										t: t.height,
										b: 0
									},
									d = {};
								t.ctx.font = a.font, t._pointLabelSizes = [];
								var h, p, f, m = s(t);
								for(e = 0; e < m; e++) {
									n = t.getPointPosition(e, r), h = t.ctx, p = a.size, f = t.pointLabels[e] || "", i = o.isArray(f) ? {
										w: o.longestText(h, h.font, f),
										h: f.length * p + 1.5 * (f.length - 1) * p
									} : {
										w: h.measureText(f).width,
										h: p
									}, t._pointLabelSizes[e] = i;
									var v = t.getIndexAngle(e),
										g = o.toDegrees(v) % 360,
										b = c(g, n.x, i.w, 0, 180),
										y = c(g, n.y, i.h, 90, 270);
									b.start < u.l && (u.l = b.start, d.l = v), b.end > u.r && (u.r = b.end, d.r = v), y.start < u.t && (u.t = y.start, d.t = v), y.end > u.b && (u.b = y.end, d.b = v)
								}
								t.setReductions(r, u, d)
							}(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
						},
						setReductions: function(t, e, i) {
							var n = e.l / Math.sin(i.l),
								o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
								a = -e.t / Math.cos(i.t),
								r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
							n = p(n), o = p(o), a = p(a), r = p(r), this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (a + r) / 2)), this.setCenterPoint(n, o, a, r)
						},
						setCenterPoint: function(t, e, i, n) {
							var o = this,
								a = o.width - e - o.drawingArea,
								r = t + o.drawingArea,
								s = i + o.drawingArea,
								l = o.height - n - o.drawingArea;
							o.xCenter = Math.round((r + a) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
						},
						getIndexAngle: function(t) {
							return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
						},
						getDistanceFromCenterForValue: function(t) {
							var e = this;
							if(null === t) return 0;
							var i = e.drawingArea / (e.max - e.min);
							return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
						},
						getPointPosition: function(t, e) {
							var i = this.getIndexAngle(t) - Math.PI / 2;
							return {
								x: Math.round(Math.cos(i) * e) + this.xCenter,
								y: Math.round(Math.sin(i) * e) + this.yCenter
							}
						},
						getPointPositionForValue: function(t, e) {
							return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
						},
						getBasePosition: function() {
							var t = this.min,
								e = this.max;
							return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
						},
						draw: function() {
							var t = this,
								i = t.options,
								n = i.gridLines,
								a = i.ticks,
								r = o.valueOrDefault;
							if(i.display) {
								var c = t.ctx,
									p = this.getIndexAngle(0),
									f = r(a.fontSize, e.defaultFontSize),
									m = r(a.fontStyle, e.defaultFontStyle),
									v = r(a.fontFamily, e.defaultFontFamily),
									g = o.fontString(f, m, v);
								o.each(t.ticks, function(i, l) {
									if(l > 0 || a.reverse) {
										var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
										if(n.display && 0 !== l && function(t, e, i, n) {
												var a = t.ctx;
												if(a.strokeStyle = o.valueAtIndexOrDefault(e.color, n - 1), a.lineWidth = o.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
												else {
													var r = s(t);
													if(0 === r) return;
													a.beginPath();
													var l = t.getPointPosition(0, i);
													a.moveTo(l.x, l.y);
													for(var c = 1; c < r; c++) l = t.getPointPosition(c, i), a.lineTo(l.x, l.y);
													a.closePath(), a.stroke()
												}
											}(t, n, u, l), a.display) {
											var d = r(a.fontColor, e.defaultFontColor);
											if(c.font = g, c.save(), c.translate(t.xCenter, t.yCenter), c.rotate(p), a.showLabelBackdrop) {
												var h = c.measureText(i).width;
												c.fillStyle = a.backdropColor, c.fillRect(-h / 2 - a.backdropPaddingX, -u - f / 2 - a.backdropPaddingY, h + 2 * a.backdropPaddingX, f + 2 * a.backdropPaddingY)
											}
											c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = d, c.fillText(i, 0, -u), c.restore()
										}
									}
								}), (i.angleLines.display || i.pointLabels.display) && function(t) {
									var i = t.ctx,
										n = t.options,
										a = n.angleLines,
										r = n.pointLabels;
									i.lineWidth = a.lineWidth, i.strokeStyle = a.color;
									var c = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
										p = l(t);
									i.textBaseline = "top";
									for(var f = s(t) - 1; f >= 0; f--) {
										if(a.display) {
											var m = t.getPointPosition(f, c);
											i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(m.x, m.y), i.stroke(), i.closePath()
										}
										if(r.display) {
											var v = t.getPointPosition(f, c + 5),
												g = o.valueAtIndexOrDefault(r.fontColor, f, e.defaultFontColor);
											i.font = p.font, i.fillStyle = g;
											var b = t.getIndexAngle(f),
												y = o.toDegrees(b);
											i.textAlign = u(y), h(y, t._pointLabelSizes[f], v), d(i, t.pointLabels[f] || "", v, p.size)
										}
									}
								}(t)
							}
						}
					});
					a.registerScaleType("radialLinear", f, i)
				}
			}, {
				26: 26,
				34: 34,
				35: 35,
				46: 46
			}],
			59: [function(t, e, i) {
				"use strict";
				var n = t(1);
				n = "function" == typeof n ? n : window.moment;
				var o = t(26),
					a = t(46),
					r = t(33),
					s = t(34),
					l = Number.MIN_SAFE_INTEGER || -9007199254740991,
					c = Number.MAX_SAFE_INTEGER || 9007199254740991,
					u = {
						millisecond: {
							common: !0,
							size: 1,
							steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
						},
						second: {
							common: !0,
							size: 1e3,
							steps: [1, 2, 5, 10, 15, 30]
						},
						minute: {
							common: !0,
							size: 6e4,
							steps: [1, 2, 5, 10, 15, 30]
						},
						hour: {
							common: !0,
							size: 36e5,
							steps: [1, 2, 3, 6, 12]
						},
						day: {
							common: !0,
							size: 864e5,
							steps: [1, 2, 5]
						},
						week: {
							common: !1,
							size: 6048e5,
							steps: [1, 2, 3, 4]
						},
						month: {
							common: !0,
							size: 2628e6,
							steps: [1, 2, 3]
						},
						quarter: {
							common: !1,
							size: 7884e6,
							steps: [1, 2, 3, 4]
						},
						year: {
							common: !0,
							size: 3154e7
						}
					},
					d = Object.keys(u);

				function h(t, e) {
					return t - e
				}

				function p(t) {
					var e, i, n, o = {},
						a = [];
					for(e = 0, i = t.length; e < i; ++e) o[n = t[e]] || (o[n] = !0, a.push(n));
					return a
				}

				function f(t, e, i, n) {
					var o = function(t, e, i) {
							for(var n, o, a, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
								if(o = t[(n = r + s >> 1) - 1] || null, a = t[n], !o) return {
									lo: null,
									hi: a
								};
								if(a[e] < i) r = n + 1;
								else {
									if(!(o[e] > i)) return {
										lo: o,
										hi: a
									};
									s = n - 1
								}
							}
							return {
								lo: a,
								hi: null
							}
						}(t, e, i),
						a = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
						r = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
						s = r[e] - a[e],
						l = s ? (i - a[e]) / s : 0,
						c = (r[n] - a[n]) * l;
					return a[n] + c
				}

				function m(t, e) {
					var i = e.parser,
						o = e.parser || e.format;
					return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof o ? n(t, o) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof o ? o(t) : t)
				}

				function v(t, e) {
					if(a.isNullOrUndef(t)) return null;
					var i = e.options.time,
						n = m(e.getRightValue(t), i);
					return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
				}

				function g(t) {
					for(var e = d.indexOf(t) + 1, i = d.length; e < i; ++e)
						if(u[d[e]].common) return d[e]
				}

				function b(t, e, i, o) {
					var r, s = o.time,
						l = s.unit || function(t, e, i, n) {
							var o, a, r, s = d.length;
							for(o = d.indexOf(t); o < s - 1; ++o)
								if(r = (a = u[d[o]]).steps ? a.steps[a.steps.length - 1] : c, a.common && Math.ceil((i - e) / (r * a.size)) <= n) return d[o];
							return d[s - 1]
						}(s.minUnit, t, e, i),
						h = g(l),
						p = a.valueOrDefault(s.stepSize, s.unitStepSize),
						f = "week" === l && s.isoWeekday,
						m = o.ticks.major.enabled,
						v = u[l],
						b = n(t),
						y = n(e),
						x = [];
					for(p || (p = function(t, e, i, n) {
							var o, a, r, s = e - t,
								l = u[i],
								c = l.size,
								d = l.steps;
							if(!d) return Math.ceil(s / (n * c));
							for(o = 0, a = d.length; o < a && (r = d[o], !(Math.ceil(s / (c * r)) <= n)); ++o);
							return r
						}(t, e, l, i)), f && (b = b.isoWeekday(f), y = y.isoWeekday(f)), b = b.startOf(f ? "day" : l), (y = y.startOf(f ? "day" : l)) < e && y.add(1, l), r = n(b), m && h && !f && !s.round && (r.startOf(h), r.add(~~((b - r) / (v.size * p)) * p, l)); r < y; r.add(p, l)) x.push(+r);
					return x.push(+r), x
				}
				e.exports = function() {
					var t = r.extend({
						initialize: function() {
							if(!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
							this.mergeTicksOptions(), r.prototype.initialize.call(this)
						},
						update: function() {
							var t = this.options;
							return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), r.prototype.update.apply(this, arguments)
						},
						getRightValue: function(t) {
							return t && void 0 !== t.t && (t = t.t), r.prototype.getRightValue.call(this, t)
						},
						determineDataLimits: function() {
							var t, e, i, o, r, s, u = this,
								d = u.chart,
								f = u.options.time,
								m = f.unit || "day",
								g = c,
								b = l,
								y = [],
								x = [],
								w = [];
							for(t = 0, i = d.data.labels.length; t < i; ++t) w.push(v(d.data.labels[t], u));
							for(t = 0, i = (d.data.datasets || []).length; t < i; ++t)
								if(d.isDatasetVisible(t))
									if(r = d.data.datasets[t].data, a.isObject(r[0]))
										for(x[t] = [], e = 0, o = r.length; e < o; ++e) s = v(r[e], u), y.push(s), x[t][e] = s;
									else y.push.apply(y, w), x[t] = w.slice(0);
							else x[t] = [];
							w.length && (w = p(w).sort(h), g = Math.min(g, w[0]), b = Math.max(b, w[w.length - 1])), y.length && (y = p(y).sort(h), g = Math.min(g, y[0]), b = Math.max(b, y[y.length - 1])), g = v(f.min, u) || g, b = v(f.max, u) || b, g = g === c ? +n().startOf(m) : g, b = b === l ? +n().endOf(m) + 1 : b, u.min = Math.min(g, b), u.max = Math.max(g + 1, b), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
								data: y,
								datasets: x,
								labels: w
							}
						},
						buildTicks: function() {
							var t, e, i, o = this,
								a = o.min,
								r = o.max,
								s = o.options,
								l = s.time,
								c = [],
								h = [];
							switch(s.ticks.source) {
								case "data":
									c = o._timestamps.data;
									break;
								case "labels":
									c = o._timestamps.labels;
									break;
								case "auto":
								default:
									c = b(a, r, o.getLabelCapacity(a), s)
							}
							for("ticks" === s.bounds && c.length && (a = c[0], r = c[c.length - 1]), a = v(l.min, o) || a, r = v(l.max, o) || r, t = 0, e = c.length; t < e; ++t)(i = c[t]) >= a && i <= r && h.push(i);
							return o.min = a, o.max = r, o._unit = l.unit || function(t, e, i, o) {
									var a, r, s = n.duration(n(o).diff(n(i)));
									for(a = d.length - 1; a >= d.indexOf(e); a--)
										if(r = d[a], u[r].common && s.as(r) >= t.length) return r;
									return d[e ? d.indexOf(e) : 0]
								}(h, l.minUnit, o.min, o.max), o._majorUnit = g(o._unit), o._table = function(t, e, i, n) {
									if("linear" === n || !t.length) return [{
										time: e,
										pos: 0
									}, {
										time: i,
										pos: 1
									}];
									var o, a, r, s, l, c = [],
										u = [e];
									for(o = 0, a = t.length; o < a; ++o)(s = t[o]) > e && s < i && u.push(s);
									for(u.push(i), o = 0, a = u.length; o < a; ++o) l = u[o + 1], r = u[o - 1], s = u[o], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || c.push({
										time: s,
										pos: o / (a - 1)
									});
									return c
								}(o._timestamps.data, a, r, s.distribution), o._offsets = function(t, e, i, n, o) {
									var a, r, s = 0,
										l = 0;
									return o.offset && e.length && (o.time.min || (a = e.length > 1 ? e[1] : n, r = e[0], s = (f(t, "time", a, "pos") - f(t, "time", r, "pos")) / 2), o.time.max || (a = e[e.length - 1], r = e.length > 1 ? e[e.length - 2] : i, l = (f(t, "time", a, "pos") - f(t, "time", r, "pos")) / 2)), {
										left: s,
										right: l
									}
								}(o._table, h, a, r, s), o._labelFormat = function(t, e) {
									var i, n, o, a = t.length;
									for(i = 0; i < a; i++) {
										if(0 !== (n = m(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
										0 === n.second() && 0 === n.minute() && 0 === n.hour() || (o = !0)
									}
									return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
								}(o._timestamps.data, l),
								function(t, e) {
									var i, o, a, r, s = [];
									for(i = 0, o = t.length; i < o; ++i) a = t[i], r = !!e && a === +n(a).startOf(e), s.push({
										value: a,
										major: r
									});
									return s
								}(h, o._majorUnit)
						},
						getLabelForIndex: function(t, e) {
							var i = this.chart.data,
								n = this.options.time,
								o = i.labels && t < i.labels.length ? i.labels[t] : "",
								r = i.datasets[e].data[t];
							return a.isObject(r) && (o = this.getRightValue(r)), n.tooltipFormat ? m(o, n).format(n.tooltipFormat) : "string" == typeof o ? o : m(o, n).format(this._labelFormat)
						},
						tickFormatFunction: function(t, e, i, n) {
							var o = this.options,
								r = t.valueOf(),
								s = o.time.displayFormats,
								l = s[this._unit],
								c = this._majorUnit,
								u = s[c],
								d = t.clone().startOf(c).valueOf(),
								h = o.ticks.major,
								p = h.enabled && c && u && r === d,
								f = t.format(n || (p ? u : l)),
								m = p ? h : o.ticks.minor,
								v = a.valueOrDefault(m.callback, m.userCallback);
							return v ? v(f, e, i) : f
						},
						convertTicksToLabels: function(t) {
							var e, i, o = [];
							for(e = 0, i = t.length; e < i; ++e) o.push(this.tickFormatFunction(n(t[e].value), e, t));
							return o
						},
						getPixelForOffset: function(t) {
							var e = this,
								i = e._horizontal ? e.width : e.height,
								n = e._horizontal ? e.left : e.top,
								o = f(e._table, "time", t, "pos");
							return n + i * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right)
						},
						getPixelForValue: function(t, e, i) {
							var n = null;
							if(void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = v(t, this)), null !== n) return this.getPixelForOffset(n)
						},
						getPixelForTick: function(t) {
							var e = this.getTicks();
							return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
						},
						getValueForPixel: function(t) {
							var e = this,
								i = e._horizontal ? e.width : e.height,
								o = e._horizontal ? e.left : e.top,
								a = (i ? (t - o) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
								r = f(e._table, "pos", a, "time");
							return n(r)
						},
						getLabelWidth: function(t) {
							var e = this.options.ticks,
								i = this.ctx.measureText(t).width,
								n = a.toRadians(e.maxRotation),
								r = Math.cos(n),
								s = Math.sin(n);
							return i * r + a.valueOrDefault(e.fontSize, o.global.defaultFontSize) * s
						},
						getLabelCapacity: function(t) {
							var e = this,
								i = e.options.time.displayFormats.millisecond,
								o = e.tickFormatFunction(n(t), 0, [], i),
								a = e.getLabelWidth(o),
								r = e.isHorizontal() ? e.width : e.height,
								s = Math.floor(r / a);
							return s > 0 ? s : 1
						}
					});
					s.registerScaleType("time", t, {
						position: "bottom",
						distribution: "linear",
						bounds: "data",
						time: {
							parser: !1,
							format: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: "millisecond",
							displayFormats: {
								millisecond: "h:mm:ss.SSS a",
								second: "h:mm:ss a",
								minute: "h:mm a",
								hour: "hA",
								day: "MMM D",
								week: "ll",
								month: "MMM YYYY",
								quarter: "[Q]Q - YYYY",
								year: "YYYY"
							}
						},
						ticks: {
							autoSkip: !1,
							source: "auto",
							major: {
								enabled: !1
							}
						}
					})
				}
			}, {
				1: 1,
				26: 26,
				33: 33,
				34: 34,
				46: 46
			}]
		}, {}, [7])(7)
	}),
	function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("chart.js")) : "function" == typeof define && define.amd ? define(["chart.js"], e) : (t = t || self).ChartDataLabels = e(t.Chart)
	}(this, function(t) {
		"use strict";
		var e = (t = t && t.hasOwnProperty("default") ? t.default : t).helpers,
			i = function() {
				if("undefined" != typeof window) {
					if(window.devicePixelRatio) return window.devicePixelRatio;
					var t = window.screen;
					if(t) return(t.deviceXDPI || 1) / (t.logicalXDPI || 1)
				}
				return 1
			}(),
			n = {
				toTextLines: function(t) {
					var i, n = [];
					for(t = [].concat(t); t.length;) "string" == typeof(i = t.pop()) ? n.unshift.apply(n, i.split("\n")) : Array.isArray(i) ? t.push.apply(t, i) : e.isNullOrUndef(t) || n.unshift("" + i);
					return n
				},
				toFontString: function(t) {
					return !t || e.isNullOrUndef(t.size) || e.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
				},
				textSize: function(t, e, i) {
					var n, o = [].concat(e),
						a = o.length,
						r = t.font,
						s = 0;
					for(t.font = i.string, n = 0; n < a; ++n) s = Math.max(t.measureText(o[n]).width, s);
					return t.font = r, {
						height: a * i.lineHeight,
						width: s
					}
				},
				parseFont: function(i) {
					var o = t.defaults.global,
						a = e.valueOrDefault(i.size, o.defaultFontSize),
						r = {
							family: e.valueOrDefault(i.family, o.defaultFontFamily),
							lineHeight: e.options.toLineHeight(i.lineHeight, a),
							size: a,
							style: e.valueOrDefault(i.style, o.defaultFontStyle),
							weight: e.valueOrDefault(i.weight, null),
							string: ""
						};
					return r.string = n.toFontString(r), r
				},
				bound: function(t, e, i) {
					return Math.max(t, Math.min(e, i))
				},
				arrayDiff: function(t, e) {
					var i, n, o, a, r = t.slice(),
						s = [];
					for(i = 0, o = e.length; i < o; ++i) a = e[i], -1 === (n = r.indexOf(a)) ? s.push([a, 1]) : r.splice(n, 1);
					for(i = 0, o = r.length; i < o; ++i) s.push([r[i], -1]);
					return s
				},
				rasterize: function(t) {
					return Math.round(t * i) / i
				}
			};

		function o(t, e) {
			var i = e.x,
				n = e.y;
			if(null === i) return {
				x: 0,
				y: -1
			};
			if(null === n) return {
				x: 1,
				y: 0
			};
			var o = t.x - i,
				a = t.y - n,
				r = Math.sqrt(o * o + a * a);
			return {
				x: r ? o / r : 0,
				y: r ? a / r : -1
			}
		}
		var a = 0,
			r = 1,
			s = 2,
			l = 4,
			c = 8;

		function u(t, e, i) {
			var n = a;
			return t < i.left ? n |= r : t > i.right && (n |= s), e < i.top ? n |= c : e > i.bottom && (n |= l), n
		}

		function d(t, e) {
			var i, n, o = e.anchor,
				a = t;
			return e.clamp && (a = function(t, e) {
					for(var i, n, o, a = t.x0, d = t.y0, h = t.x1, p = t.y1, f = u(a, d, e), m = u(h, p, e); f | m && !(f & m);)(i = f || m) & c ? (n = a + (h - a) * (e.top - d) / (p - d), o = e.top) : i & l ? (n = a + (h - a) * (e.bottom - d) / (p - d), o = e.bottom) : i & s ? (o = d + (p - d) * (e.right - a) / (h - a), n = e.right) : i & r && (o = d + (p - d) * (e.left - a) / (h - a), n = e.left), i === f ? f = u(a = n, d = o, e) : m = u(h = n, p = o, e);
					return {
						x0: a,
						x1: h,
						y0: d,
						y1: p
					}
				}(a, e.area)), "start" === o ? (i = a.x0, n = a.y0) : "end" === o ? (i = a.x1, n = a.y1) : (i = (a.x0 + a.x1) / 2, n = (a.y0 + a.y1) / 2),
				function(t, e, i, n, o) {
					switch(o) {
						case "center":
							i = n = 0;
							break;
						case "bottom":
							i = 0, n = 1;
							break;
						case "right":
							i = 1, n = 0;
							break;
						case "left":
							i = -1, n = 0;
							break;
						case "top":
							i = 0, n = -1;
							break;
						case "start":
							i = -i, n = -n;
							break;
						case "end":
							break;
						default:
							o *= Math.PI / 180, i = Math.cos(o), n = Math.sin(o)
					}
					return {
						x: t,
						y: e,
						vx: i,
						vy: n
					}
				}(i, n, t.vx, t.vy, e.align)
		}
		var h = {
				arc: function(t, e) {
					var i = (t.startAngle + t.endAngle) / 2,
						n = Math.cos(i),
						o = Math.sin(i),
						a = t.innerRadius,
						r = t.outerRadius;
					return d({
						x0: t.x + n * a,
						y0: t.y + o * a,
						x1: t.x + n * r,
						y1: t.y + o * r,
						vx: n,
						vy: o
					}, e)
				},
				point: function(t, e) {
					var i = o(t, e.origin),
						n = i.x * t.radius,
						a = i.y * t.radius;
					return d({
						x0: t.x - n,
						y0: t.y - a,
						x1: t.x + n,
						y1: t.y + a,
						vx: i.x,
						vy: i.y
					}, e)
				},
				rect: function(t, e) {
					var i = o(t, e.origin),
						n = t.x,
						a = t.y,
						r = 0,
						s = 0;
					return t.horizontal ? (n = Math.min(t.x, t.base), r = Math.abs(t.base - t.x)) : (a = Math.min(t.y, t.base), s = Math.abs(t.base - t.y)), d({
						x0: n,
						y0: a + s,
						x1: n + r,
						y1: a,
						vx: i.x,
						vy: i.y
					}, e)
				},
				fallback: function(t, e) {
					var i = o(t, e.origin);
					return d({
						x0: t.x,
						y0: t.y,
						x1: t.x,
						y1: t.y,
						vx: i.x,
						vy: i.y
					}, e)
				}
			},
			p = t.helpers,
			f = n.rasterize;

		function m(t) {
			var e = t._model.horizontal,
				i = t._scale || e && t._xScale || t._yScale;
			if(!i) return null;
			if(void 0 !== i.xCenter && void 0 !== i.yCenter) return {
				x: i.xCenter,
				y: i.yCenter
			};
			var n = i.getBasePixel();
			return e ? {
				x: n,
				y: null
			} : {
				x: null,
				y: n
			}
		}

		function v(t, e, i) {
			var n = t.shadowBlur,
				o = i.stroked,
				a = f(i.x),
				r = f(i.y),
				s = f(i.w);
			o && t.strokeText(e, a, r, s), i.filled && (n && o && (t.shadowBlur = 0), t.fillText(e, a, r, s), n && o && (t.shadowBlur = n))
		}
		var g = function(t, e, i, n) {
			var o = this;
			o._config = t, o._index = n, o._model = null, o._rects = null, o._ctx = e, o._el = i
		};
		p.extend(g.prototype, {
			_modelize: function(e, i, o, a) {
				var r, s = this._index,
					l = p.options.resolve,
					c = n.parseFont(l([o.font, {}], a, s)),
					u = l([o.color, t.defaults.global.defaultFontColor], a, s);
				return {
					align: l([o.align, "center"], a, s),
					anchor: l([o.anchor, "center"], a, s),
					area: a.chart.chartArea,
					backgroundColor: l([o.backgroundColor, null], a, s),
					borderColor: l([o.borderColor, null], a, s),
					borderRadius: l([o.borderRadius, 0], a, s),
					borderWidth: l([o.borderWidth, 0], a, s),
					clamp: l([o.clamp, !1], a, s),
					clip: l([o.clip, !1], a, s),
					color: u,
					display: e,
					font: c,
					lines: i,
					offset: l([o.offset, 0], a, s),
					opacity: l([o.opacity, 1], a, s),
					origin: m(this._el),
					padding: p.options.toPadding(l([o.padding, 0], a, s)),
					positioner: (r = this._el, r instanceof t.elements.Arc ? h.arc : r instanceof t.elements.Point ? h.point : r instanceof t.elements.Rectangle ? h.rect : h.fallback),
					rotation: l([o.rotation, 0], a, s) * (Math.PI / 180),
					size: n.textSize(this._ctx, i, c),
					textAlign: l([o.textAlign, "start"], a, s),
					textShadowBlur: l([o.textShadowBlur, 0], a, s),
					textShadowColor: l([o.textShadowColor, u], a, s),
					textStrokeColor: l([o.textStrokeColor, u], a, s),
					textStrokeWidth: l([o.textStrokeWidth, 0], a, s)
				}
			},
			update: function(t) {
				var e, i, o, a = this,
					r = null,
					s = null,
					l = a._index,
					c = a._config,
					u = p.options.resolve([c.display, !0], t, l);
				u && (e = t.dataset.data[l], i = p.valueOrDefault(p.callback(c.formatter, [e, t]), e), (o = p.isNullOrUndef(i) ? [] : n.toTextLines(i)).length && (s = function(t) {
					var e = t.borderWidth || 0,
						i = t.padding,
						n = t.size.height,
						o = t.size.width,
						a = -o / 2,
						r = -n / 2;
					return {
						frame: {
							x: a - i.left - e,
							y: r - i.top - e,
							w: o + i.width + 2 * e,
							h: n + i.height + 2 * e
						},
						text: {
							x: a,
							y: r,
							w: o,
							h: n
						}
					}
				}(r = a._modelize(u, o, c, t)))), a._model = r, a._rects = s
			},
			geometry: function() {
				return this._rects ? this._rects.frame : {}
			},
			rotation: function() {
				return this._model ? this._model.rotation : 0
			},
			visible: function() {
				return this._model && this._model.opacity
			},
			model: function() {
				return this._model
			},
			draw: function(t, e) {
				var i, o = t.ctx,
					a = this._model,
					r = this._rects;
				this.visible() && (o.save(), a.clip && (i = a.area, o.beginPath(), o.rect(i.left, i.top, i.right - i.left, i.bottom - i.top), o.clip()), o.globalAlpha = n.bound(0, a.opacity, 1), o.translate(f(e.x), f(e.y)), o.rotate(a.rotation), function(t, e, i) {
					var n = i.backgroundColor,
						o = i.borderColor,
						a = i.borderWidth;
					(n || o && a) && (t.beginPath(), p.canvas.roundedRect(t, f(e.x) + a / 2, f(e.y) + a / 2, f(e.w) - a, f(e.h) - a, i.borderRadius), t.closePath(), n && (t.fillStyle = n, t.fill()), o && a && (t.strokeStyle = o, t.lineWidth = a, t.lineJoin = "miter", t.stroke()))
				}(o, r.frame, a), function(t, e, i, n) {
					var o, a = n.textAlign,
						r = n.color,
						s = !!r,
						l = n.font,
						c = e.length,
						u = n.textStrokeColor,
						d = n.textStrokeWidth,
						h = u && d;
					if(c && (s || h))
						for(i = function(t, e, i) {
								var n = i.lineHeight,
									o = t.w,
									a = t.x;
								return "center" === e ? a += o / 2 : "end" !== e && "right" !== e || (a += o), {
									h: n,
									w: o,
									x: a,
									y: t.y + n / 2
								}
							}(i, a, l), t.font = l.string, t.textAlign = a, t.textBaseline = "middle", t.shadowBlur = n.textShadowBlur, t.shadowColor = n.textShadowColor, s && (t.fillStyle = r), h && (t.lineJoin = "round", t.lineWidth = d, t.strokeStyle = u), o = 0, c = e.length; o < c; ++o) v(t, e[o], {
							stroked: h,
							filled: s,
							w: i.w,
							x: i.x,
							y: i.y + i.h * o
						})
				}(o, a.lines, r.text, a), o.restore())
			}
		});
		var b = t.helpers,
			y = Number.MIN_SAFE_INTEGER || -9007199254740991,
			x = Number.MAX_SAFE_INTEGER || 9007199254740991;

		function w(t, e, i) {
			var n = Math.cos(i),
				o = Math.sin(i),
				a = e.x,
				r = e.y;
			return {
				x: a + n * (t.x - a) - o * (t.y - r),
				y: r + o * (t.x - a) + n * (t.y - r)
			}
		}

		function k(t, e) {
			var i, n, o, a, r, s = x,
				l = y,
				c = e.origin;
			for(i = 0; i < t.length; ++i) o = (n = t[i]).x - c.x, a = n.y - c.y, r = e.vx * o + e.vy * a, s = Math.min(s, r), l = Math.max(l, r);
			return {
				min: s,
				max: l
			}
		}

		function C(t, e) {
			var i = e.x - t.x,
				n = e.y - t.y,
				o = Math.sqrt(i * i + n * n);
			return {
				vx: (e.x - t.x) / o,
				vy: (e.y - t.y) / o,
				origin: t,
				ln: o
			}
		}
		var S = function() {
			this._rotation = 0, this._rect = {
				x: 0,
				y: 0,
				w: 0,
				h: 0
			}
		};

		function M(t, e, i) {
			var n = e.positioner(t, e),
				o = n.vx,
				a = n.vy;
			if(!o && !a) return {
				x: n.x,
				y: n.y
			};
			var r = i.w,
				s = i.h,
				l = e.rotation,
				c = Math.abs(r / 2 * Math.cos(l)) + Math.abs(s / 2 * Math.sin(l)),
				u = Math.abs(r / 2 * Math.sin(l)) + Math.abs(s / 2 * Math.cos(l)),
				d = 1 / Math.max(Math.abs(o), Math.abs(a));
			return c *= o * d, u *= a * d, c += e.offset * o, u += e.offset * a, {
				x: n.x + c,
				y: n.y + u
			}
		}
		b.extend(S.prototype, {
			center: function() {
				var t = this._rect;
				return {
					x: t.x + t.w / 2,
					y: t.y + t.h / 2
				}
			},
			update: function(t, e, i) {
				this._rotation = i, this._rect = {
					x: e.x + t.x,
					y: e.y + t.y,
					w: e.w,
					h: e.h
				}
			},
			contains: function(t) {
				var e = this._rect;
				return !((t = w(t, this.center(), -this._rotation)).x < e.x - 1 || t.y < e.y - 1 || t.x > e.x + e.w + 2 || t.y > e.y + e.h + 2)
			},
			intersects: function(t) {
				var e, i, n, o = this._points(),
					a = t._points(),
					r = [C(o[0], o[1]), C(o[0], o[3])];
				for(this._rotation !== t._rotation && r.push(C(a[0], a[1]), C(a[0], a[3])), e = 0; e < r.length; ++e)
					if(i = k(o, r[e]), n = k(a, r[e]), i.max < n.min || n.max < i.min) return !1;
				return !0
			},
			_points: function() {
				var t = this._rect,
					e = this._rotation,
					i = this.center();
				return [w({
					x: t.x,
					y: t.y
				}, i, e), w({
					x: t.x + t.w,
					y: t.y
				}, i, e), w({
					x: t.x + t.w,
					y: t.y + t.h
				}, i, e), w({
					x: t.x,
					y: t.y + t.h
				}, i, e)]
			}
		});
		var T = {
				prepare: function(t) {
					var e, i, n, o, a, r = [];
					for(e = 0, n = t.length; e < n; ++e)
						for(i = 0, o = t[e].length; i < o; ++i) a = t[e][i], r.push(a), a.$layout = {
							_box: new S,
							_hidable: !1,
							_visible: !0,
							_set: e,
							_idx: i
						};
					return r.sort(function(t, e) {
						var i = t.$layout,
							n = e.$layout;
						return i._idx === n._idx ? n._set - i._set : n._idx - i._idx
					}), this.update(r), r
				},
				update: function(t) {
					var e, i, n, o, a, r = !1;
					for(e = 0, i = t.length; e < i; ++e) o = (n = t[e]).model(), (a = n.$layout)._hidable = o && "auto" === o.display, a._visible = n.visible(), r |= a._hidable;
					r && function(t) {
						var e, i, n, o, a, r;
						for(e = 0, i = t.length; e < i; ++e)(o = (n = t[e]).$layout)._visible && (a = n.geometry(), r = M(n._el._model, n.model(), a), o._box.update(r, a, n.rotation()));
						(function(t, e) {
							var i, n, o, a;
							for(i = t.length - 1; i >= 0; --i)
								for(o = t[i].$layout, n = i - 1; n >= 0 && o._visible; --n)(a = t[n].$layout)._visible && o._box.intersects(a._box) && e(o, a)
						})(t, function(t, e) {
							var i = t._hidable,
								n = e._hidable;
							i && n || n ? e._visible = !1 : i && (t._visible = !1)
						})
					}(t)
				},
				lookup: function(t, e) {
					var i, n;
					for(i = t.length - 1; i >= 0; --i)
						if((n = t[i].$layout) && n._visible && n._box.contains(e)) return t[i];
					return null
				},
				draw: function(t, e) {
					var i, n, o, a, r, s;
					for(i = 0, n = e.length; i < n; ++i)(a = (o = e[i]).$layout)._visible && (r = o.geometry(), s = M(o._el._view, o.model(), r), a._box.update(s, r, o.rotation()), o.draw(t, s))
				}
			},
			O = t.helpers,
			_ = {
				align: "center",
				anchor: "center",
				backgroundColor: null,
				borderColor: null,
				borderRadius: 0,
				borderWidth: 0,
				clamp: !1,
				clip: !1,
				color: void 0,
				display: !0,
				font: {
					family: void 0,
					lineHeight: 1.2,
					size: void 0,
					style: void 0,
					weight: null
				},
				formatter: function(t) {
					if(O.isNullOrUndef(t)) return null;
					var e, i, n, o = t;
					if(O.isObject(t))
						if(O.isNullOrUndef(t.label))
							if(O.isNullOrUndef(t.r))
								for(o = "", n = 0, i = (e = Object.keys(t)).length; n < i; ++n) o += (0 !== n ? ", " : "") + e[n] + ": " + t[e[n]];
							else o = t.r;
					else o = t.label;
					return "" + o
				},
				labels: void 0,
				listeners: {},
				offset: 4,
				opacity: 1,
				padding: {
					top: 4,
					right: 4,
					bottom: 4,
					left: 4
				},
				rotation: 0,
				textAlign: "start",
				textStrokeColor: void 0,
				textStrokeWidth: 0,
				textShadowBlur: 0,
				textShadowColor: void 0
			},
			P = t.helpers,
			A = "$datalabels",
			I = "$default";

		function $(t, e, i) {
			if(e) {
				var n, o = i.$context,
					a = i.$groups;
				e[a._set] && (n = e[a._set][a._key]) && !0 === P.callback(n, [o]) && (t[A]._dirty = !0, i.update(o))
			}
		}

		function D(t, e) {
			var i, n, o = t[A],
				a = o._listeners;
			if(a.enter || a.leave) {
				if("mousemove" === e.type) n = T.lookup(o._labels, e);
				else if("mouseout" !== e.type) return;
				i = o._hovered, o._hovered = n,
					function(t, e, i, n) {
						var o, a;
						(i || n) && (i ? n ? i !== n && (a = o = !0) : a = !0 : o = !0, a && $(t, e.leave, i), o && $(t, e.enter, n))
					}(t, a, i, n)
			}
		}
		t.defaults.global.plugins.datalabels = _;
		var E = {
			id: "datalabels",
			beforeInit: function(t) {
				t[A] = {
					_actives: []
				}
			},
			beforeUpdate: function(t) {
				var e = t[A];
				e._listened = !1, e._listeners = {}, e._datasets = [], e._labels = []
			},
			afterDatasetUpdate: function(t, e, i) {
				var n, o, a, r, s, l, c, u, d = e.index,
					h = t[A],
					p = h._datasets[d] = [],
					f = t.isDatasetVisible(d),
					m = t.data.datasets[d],
					v = function(t, e) {
						var i, n, o, a = t.datalabels,
							r = [];
						return !1 === a ? null : (!0 === a && (a = {}), e = P.merge({}, [e, a]), n = e.labels || {}, o = Object.keys(n), delete e.labels, o.length ? o.forEach(function(t) {
							n[t] && r.push(P.merge({}, [e, n[t], {
								_key: t
							}]))
						}) : r.push(e), i = r.reduce(function(t, e) {
							return P.each(e.listeners || {}, function(i, n) {
								t[n] = t[n] || {}, t[n][e._key || I] = i
							}), delete e.listeners, t
						}, {}), {
							labels: r,
							listeners: i
						})
					}(m, i),
					b = e.meta.data || [],
					y = t.ctx;
				for(y.save(), n = 0, a = b.length; n < a; ++n)
					if((c = b[n])[A] = [], f && c && !c.hidden && !c._model.skip)
						for(o = 0, r = v.labels.length; o < r; ++o) l = (s = v.labels[o])._key, (u = new g(s, y, c, n)).$groups = {
							_set: d,
							_key: l || I
						}, u.$context = {
							active: !1,
							chart: t,
							dataIndex: n,
							dataset: m,
							datasetIndex: d
						}, u.update(u.$context), c[A].push(u), p.push(u);
				y.restore(), P.merge(h._listeners, v.listeners, {
					merger: function(t, i, n) {
						i[t] = i[t] || {}, i[t][e.index] = n[t], h._listened = !0
					}
				})
			},
			afterUpdate: function(t, e) {
				t[A]._labels = T.prepare(t[A]._datasets, e)
			},
			afterDatasetsDraw: function(t) {
				T.draw(t, t[A]._labels)
			},
			beforeEvent: function(t, e) {
				if(t[A]._listened) switch(e.type) {
					case "mousemove":
					case "mouseout":
						D(t, e);
						break;
					case "click":
						! function(t, e) {
							var i = t[A],
								n = i._listeners.click,
								o = n && T.lookup(i._labels, e);
							o && $(t, n, o)
						}(t, e)
				}
			},
			afterEvent: function(e) {
				var i, o, a, r, s, l, c, u = e[A],
					d = u._actives,
					h = u._actives = e.lastActive || [],
					p = n.arrayDiff(d, h);
				for(i = 0, o = p.length; i < o; ++i)
					if((s = p[i])[1])
						for(a = 0, r = (c = s[0][A] || []).length; a < r; ++a)(l = c[a]).$context.active = 1 === s[1], l.update(l.$context);
					(u._dirty || p.length) && (T.update(u._labels), function(e) {
						if(!e.animating) {
							for(var i = t.animationService.animations, n = 0, o = i.length; n < o; ++n)
								if(i[n].chart === e) return;
							e.render({
								duration: 1,
								lazy: !0
							})
						}
					}(e)), delete u._dirty
			}
		};
		return t.plugins.unregister(E), E
	}), jQuery(function(t) {
		var e = function() {
				function e() {}
				return e.prototype.init = function() {
					t(".wow").wow()
				}, e
			}(),
			i = function() {
				function e(t, e) {
					this.$wowElement = t, this.customization = e, this.animated = !0, this.options = this.assignElementCustomization()
				}
				var i = e.prototype;
				return i.init = function() {
					var e = this;
					t(window).scroll(function() {
						e.animated ? e.hide() : e.mdbWow()
					}), this.appear()
				}, i.assignElementCustomization = function() {
					return {
						animationName: this.$wowElement.css("animation-name"),
						offset: 100,
						iteration: this.fallback().or(this.$wowElement.data("wow-iteration")).or(1).value(),
						duration: this.fallback().or(this.$wowElement.data("wow-duration")).or(1e3).value(),
						delay: this.fallback().or(this.$wowElement.data("wow-delay")).or(0).value()
					}
				}, i.mdbWow = function() {
					var t = this;
					"visible" !== this.$wowElement.css("visibility") && this.shouldElementBeVisible(!0) && (setTimeout(function() {
						return t.$wowElement.removeClass("animated")
					}, this.countRemoveTime()), this.appear())
				}, i.appear = function() {
					this.$wowElement.addClass("animated"), this.$wowElement.css({
						visibility: "visible",
						"animation-name": this.options.animationName,
						"animation-iteration-count": this.options.iteration,
						"animation-duration": this.options.duration,
						"animation-delay": this.options.delay
					})
				}, i.hide = function() {
					var t = this;
					this.shouldElementBeVisible(!1) ? (this.$wowElement.removeClass("animated"), this.$wowElement.css({
						"animation-name": "none",
						visibility: "hidden"
					})) : setTimeout(function() {
						t.$wowElement.removeClass("animated")
					}, this.countRemoveTime()), this.mdbWow(), this.animated = !this.animated
				}, i.shouldElementBeVisible = function(e) {
					var i = this.getOffset(this.$wowElement[0]),
						n = this.$wowElement.height(),
						o = t(document).height(),
						a = window.innerHeight,
						r = window.scrollY,
						s = a + r - this.options.offset > i,
						l = a + r - this.options.offset > i + n,
						c = r < i,
						u = r < i + n,
						d = a + r === o,
						h = i + this.options.offset > o,
						p = a + r - this.options.offset < i,
						f = r > i + this.options.offset,
						m = r < i + this.options.offset,
						v = i + n > o - this.options.offset;
					return e ? s && c || l && u || d && h : s && f || p && m || v
				}, i.countRemoveTime = function() {
					var t = 1e3 * this.$wowElement.css("animation-duration").slice(0, -1),
						e = 0;
					return this.options.duration && (e = t + this.checkOptionsStringFormat(this.options.duration)), this.options.delay && (e += this.checkOptionsStringFormat(this.options.delay)), e
				}, i.checkOptionsStringFormat = function(t) {
					var e;
					if("s" === t.toString().slice(-1)) e = t.toString().slice(0, -1);
					else {
						if(isNaN(t.toString().slice(-1))) return console.log("Not supported animation customization format.");
						e = t
					}
					return e
				}, i.getOffset = function(t) {
					var e = t.getBoundingClientRect(),
						i = document.body,
						n = document.documentElement,
						o = window.pageYOffset || n.scrollTop || i.scrollTop,
						a = n.clientTop || i.clientTop || 0,
						r = e.top + o - a;
					return Math.round(r)
				}, i.fallback = function() {
					return {
						_value: void 0,
						or: function(t) {
							return void 0 !== t && void 0 === this._value && (this._value = t), this
						},
						value: function() {
							return this._value
						}
					}
				}, e
			}();
		t.fn.wow = function(e) {
			this.each(function() {
				new i(t(this), e).init()
			})
		}, window.WOW = e
	}), jQuery(function(t) {
		t(window).on("scroll", function() {
			var e = t(".navbar");
			e.length && t(".scrolling-navbar")[e.offset().top > 50 ? "addClass" : "removeClass"]("top-nav-collapse")
		})
	}),
	function(t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define([], function() {
			return t.Waves = e.call(t), t.Waves
		}) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
	}("object" == typeof window ? window : this, function() {
		"use strict";
		var t = t || {},
			e = document.querySelectorAll.bind(document),
			i = Object.prototype.toString,
			n = "ontouchstart" in window;

		function o(t) {
			var e = typeof t;
			return "function" === e || "object" === e && !!t
		}

		function a(t) {
			var n, a = i.call(t);
			return "[object String]" === a ? e(t) : o(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a) && t.hasOwnProperty("length") ? t : o(n = t) && n.nodeType > 0 ? [t] : []
		}

		function r(t) {
			var e, i, n = {
					top: 0,
					left: 0
				},
				o = t && t.ownerDocument;
			return e = o.documentElement, void 0 !== t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = function(t) {
				return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
				var e
			}(o), {
				top: n.top + i.pageYOffset - e.clientTop,
				left: n.left + i.pageXOffset - e.clientLeft
			}
		}

		function s(t) {
			var e = "";
			for(var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
			return e
		}
		var l = {
				duration: 750,
				delay: 200,
				show: function(t, e, i) {
					if(2 === t.button) return !1;
					e = e || this;
					var n = document.createElement("div");
					n.className = "waves-ripple waves-rippling", e.appendChild(n);
					var o = r(e),
						a = 0,
						c = 0;
					"touches" in t && t.touches.length ? (a = t.touches[0].pageY - o.top, c = t.touches[0].pageX - o.left) : (a = t.pageY - o.top, c = t.pageX - o.left), c = c >= 0 ? c : 0, a = a >= 0 ? a : 0;
					var u = "scale(" + e.clientWidth / 100 * 3 + ")",
						d = "translate(0,0)";
					i && (d = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", c), n.setAttribute("data-y", a), n.setAttribute("data-scale", u), n.setAttribute("data-translate", d);
					var h = {
						top: a + "px",
						left: c + "px"
					};
					n.classList.add("waves-notransition"), n.setAttribute("style", s(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + d, h["-moz-transform"] = u + " " + d, h["-ms-transform"] = u + " " + d, h["-o-transform"] = u + " " + d, h.transform = u + " " + d, h.opacity = "1";
					var p = "mousemove" === t.type ? 2500 : l.duration;
					h["-webkit-transition-duration"] = p + "ms", h["-moz-transition-duration"] = p + "ms", h["-o-transition-duration"] = p + "ms", h["transition-duration"] = p + "ms", n.setAttribute("style", s(h))
				},
				hide: function(t, e) {
					for(var i = (e = e || this).getElementsByClassName("waves-rippling"), o = 0, a = i.length; o < a; o++) u(t, e, i[o]);
					n && (e.removeEventListener("touchend", l.hide), e.removeEventListener("touchcancel", l.hide)), e.removeEventListener("mouseup", l.hide), e.removeEventListener("mouseleave", l.hide)
				}
			},
			c = {
				input: function(t) {
					var e = t.parentNode;
					if("span" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
						var i = document.createElement("span");
						i.className = "waves-input-wrapper", e.replaceChild(i, t), i.appendChild(t)
					}
				},
				img: function(t) {
					var e = t.parentNode;
					if("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
						var i = document.createElement("i");
						e.replaceChild(i, t), i.appendChild(t)
					}
				}
			};

		function u(t, e, i) {
			if(i) {
				i.classList.remove("waves-rippling");
				var n = i.getAttribute("data-x"),
					o = i.getAttribute("data-y"),
					a = i.getAttribute("data-scale"),
					r = i.getAttribute("data-translate"),
					c = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
				c < 0 && (c = 0), "mousemove" === t.type && (c = 150);
				var u = "mousemove" === t.type ? 2500 : l.duration;
				setTimeout(function() {
					var t = {
						top: o + "px",
						left: n + "px",
						opacity: "0",
						"-webkit-transition-duration": u + "ms",
						"-moz-transition-duration": u + "ms",
						"-o-transition-duration": u + "ms",
						"transition-duration": u + "ms",
						"-webkit-transform": a + " " + r,
						"-moz-transform": a + " " + r,
						"-ms-transform": a + " " + r,
						"-o-transform": a + " " + r,
						transform: a + " " + r
					};
					i.setAttribute("style", s(t)), setTimeout(function() {
						try {
							e.removeChild(i)
						} catch(t) {
							return !1
						}
					}, u)
				}, c)
			}
		}
		var d = {
			touches: 0,
			allowEvent: function(t) {
				var e = !0;
				return /^(mousedown|mousemove)$/.test(t.type) && d.touches && (e = !1), e
			},
			registerEvent: function(t) {
				var e = t.type;
				"touchstart" === e ? d.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
					d.touches && (d.touches -= 1)
				}, 500)
			}
		};

		function h(t) {
			var e = function(t) {
				if(!1 === d.allowEvent(t)) return null;
				for(var e = null, i = t.target || t.srcElement; i.parentElement;) {
					if(!(i instanceof SVGElement) && i.classList.contains("waves-effect")) {
						e = i;
						break
					}
					i = i.parentElement
				}
				return e
			}(t);
			if(null !== e) {
				if(e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
				if(d.registerEvent(t), "touchstart" === t.type && l.delay) {
					var i = !1,
						o = setTimeout(function() {
							o = null, l.show(t, e)
						}, l.delay),
						a = function(n) {
							o && (clearTimeout(o), o = null, l.show(t, e)), i || (i = !0, l.hide(n, e)), s()
						},
						r = function(t) {
							o && (clearTimeout(o), o = null), a(t), s()
						};
					e.addEventListener("touchmove", r, !1), e.addEventListener("touchend", a, !1), e.addEventListener("touchcancel", a, !1);
					var s = function() {
						e.removeEventListener("touchmove", r), e.removeEventListener("touchend", a), e.removeEventListener("touchcancel", a)
					}
				} else l.show(t, e), n && (e.addEventListener("touchend", l.hide, !1), e.addEventListener("touchcancel", l.hide, !1)), e.addEventListener("mouseup", l.hide, !1), e.addEventListener("mouseleave", l.hide, !1)
			}
		}
		return t.init = function(t) {
			var e = document.body;
			"duration" in (t = t || {}) && (l.duration = t.duration), "delay" in t && (l.delay = t.delay), n && (e.addEventListener("touchstart", h, !1), e.addEventListener("touchcancel", d.registerEvent, !1), e.addEventListener("touchend", d.registerEvent, !1)), e.addEventListener("mousedown", h, !1)
		}, t.attach = function(t, e) {
			var n, o;
			t = a(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
			for(var r = 0, s = t.length; r < s; r++) o = (n = t[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
		}, t.ripple = function(t, e) {
			var i = (t = a(t)).length;
			if((e = e || {}).wait = e.wait || 0, e.position = e.position || null, i)
				for(var n, o, s, c = {}, u = 0, d = {
						type: "mousedown",
						button: 1
					}, h = function(t, e) {
						return function() {
							l.hide(t, e)
						}
					}; u < i; u++)
					if(n = t[u], o = e.position || {
							x: n.clientWidth / 2,
							y: n.clientHeight / 2
						}, s = r(n), c.x = s.left + o.x, c.y = s.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, n), e.wait >= 0 && null !== e.wait) {
						setTimeout(h({
							type: "mouseup",
							button: 1
						}, n), e.wait)
					}
		}, t.calm = function(t) {
			for(var e = {
					type: "mouseup",
					button: 1
				}, i = 0, n = (t = a(t)).length; i < n; i++) l.hide(e, t[i])
		}, t.displayEffect = function(e) {
			console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
		}, t
	}), $(document).ready(function() {
		Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
	}), jQuery(function(t) {
		(new(function() {
			function e() {
				this.inputSelector = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(t) {
					return "input[type=" + t + "]"
				}).join(", ") + ", textarea", this.textAreaSelector = ".materialize-textarea", this.$text = t(".md-textarea-auto"), this.$body = t("body"), this.$document = t(document)
			}
			var i = e.prototype;
			return i.init = function() {
				var e, i = this;
				this.$text.length && (e = window.attachEvent ? function(t, e, i) {
					t.attachEvent("on" + e, i)
				} : function(t, e, i) {
					t.addEventListener(e, i, !1)
				}, this.$text.each(function() {
					var t = this;

					function i() {
						t.style.height = "auto", t.style.height = t.scrollHeight + "px"
					}

					function n() {
						window.setTimeout(i, 0)
					}
					e(t, "change", i), e(t, "cut", n), e(t, "paste", n), e(t, "drop", n), e(t, "keydown", n), i()
				}));
				t(this.inputSelector).each(function(e, n) {
					var o = t(n),
						a = n.validity.badInput;
					i.updateTextFields(o), a && i.toggleActiveClass(o, "add")
				}), this.addOnFocusEvent(), this.addOnBlurEvent(), this.addOnChangeEvent(), this.addOnResetEvent(), this.appendHiddenDiv(), this.ChangeDateInputType(), this.makeActiveAutofocus(), t(this.textAreaSelector).each(this.textAreaAutoResize), this.$body.on("keyup keydown", this.textAreaSelector, this.textAreaAutoResize)
			}, i.makeActiveAutofocus = function() {
				this.toggleActiveClass(t("input[autofocus]"), "add")
			}, i.toggleActiveClass = function(t, e) {
				var i;
				e += "Class", i = t.parent().hasClass("timepicker") ? "label" : "label, i, .input-prefix", t.siblings(i)[e]("active")
			}, i.addOnFocusEvent = function() {
				var e = this;
				this.$document.on("focus", this.inputSelector, function(i) {
					e.toggleActiveClass(t(i.target), "add")
				})
			}, i.addOnBlurEvent = function() {
				var e = this;
				this.$document.on("blur", this.inputSelector, function(i) {
					var n = t(i.target),
						o = !n.val(),
						a = !i.target.validity.badInput,
						r = void 0 === n.attr("placeholder");
					o && a && r && e.toggleActiveClass(n, "remove"), !o && a && r && n.siblings("i, .input-prefix").removeClass("active"), e.validateField(n)
				})
			}, i.addOnChangeEvent = function() {
				var e = this;
				this.$document.on("change", this.inputSelector, function(i) {
					var n = t(i.target);
					e.updateTextFields(n), e.validateField(n)
				})
			}, i.addOnResetEvent = function() {
				var e = this;
				this.$document.on("reset", function(i) {
					var n = t(i.target);
					n.is("form") && (n.find(e.inputSelector).removeClass("valid invalid").each(function(i, n) {
						var o = t(n),
							a = !o.val(),
							r = !o.attr("placeholder");
						a && r && e.toggleActiveClass(o, "remove")
					}), n.find("select.initialized").each(function(e, i) {
						var n = t(i),
							o = n.siblings("input.select-dropdown"),
							a = n.children("[selected]").val();
						n.val(a), o.val(a)
					}))
				})
			}, i.appendHiddenDiv = function() {
				if(!t(".hiddendiv").first().length) {
					var e = t('<div class="hiddendiv common"></div>');
					this.$body.append(e)
				}
			}, i.updateTextFields = function(t) {
				var e = Boolean(t.val().length),
					i = Boolean(t.attr("placeholder")),
					n = e || i ? "add" : "remove";
				this.toggleActiveClass(t, n)
			}, i.validateField = function(t) {
				if(t.hasClass("validate")) {
					var e = t.val(),
						i = !e.length,
						n = !t[0].validity.badInput;
					if(i && n) t.removeClass("valid").removeClass("invalid");
					else {
						var o = t[0].validity.valid,
							a = Number(t.attr("length")) || 0;
						o && (!a || a > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
					}
				}
			}, i.ChangeDateInputType = function() {
				var e = t('input[type="date"]');
				e.each(function(t, e) {
					e.type = "text"
				}), e.on("focus", function(t) {
					t.target.type = "date"
				}), e.on("blur", function(e) {
					e.target.type = "text", 0 === e.target.value.length && t("label[for=" + e.target.id + "]").removeClass("active")
				})
			}, i.textAreaAutoResize = function() {
				var e = t(this);
				if(e.val().length) {
					var i = t(".hiddendiv"),
						n = e.css("font-family"),
						o = e.css("font-size");
					o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
					var a = i.html().replace(/\n/g, "<br>");
					i.html(a), i.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", i.height())
				}
			}, e
		}())).init()
	});
var loader_path = "./dev/dist/mdb-addons/preloader.html",
	windowLoaded = !1;

function preloaderFading() {
	$("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
}

function ownKeys(t, e) {
	var i = Object.keys(t);
	if(Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(t);
		e && (n = n.filter(function(e) {
			return Object.getOwnPropertyDescriptor(t, e).enumerable
		})), i.push.apply(i, n)
	}
	return i
}

function _objectSpread(t) {
	for(var e = 1; e < arguments.length; e++) {
		var i = null != arguments[e] ? arguments[e] : {};
		e % 2 ? ownKeys(i, !0).forEach(function(e) {
			_defineProperty(t, e, i[e])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(e) {
			Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
		})
	}
	return t
}

function _defineProperty(t, e, i) {
	return e in t ? Object.defineProperty(t, e, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : t[e] = i, t
}

function _defineProperties(t, e) {
	for(var i = 0; i < e.length; i++) {
		var n = e[i];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	}
}

function _createClass(t, e, i) {
	return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}
$(window).on("load", function() {
		windowLoaded = !0
	}), jQuery(function(t) {
		t("body").attr("aria-busy", !0), t("#preloader-markup").load(loader_path, function() {
			windowLoaded ? preloaderFading() : t(window).on("load", function() {
				preloaderFading()
			})
		})
	}), jQuery(function(t) {
		t(document).on("click.card", ".card", function(n) {
			var o = t(this).find(".card-reveal");
			if(o.length) {
				var a = t(n.target),
					r = a.is(".card-reveal .card-title"),
					s = a.is(".card-reveal .card-title i"),
					l = a.is(".card .activator"),
					c = a.is(".card .activator i");
				r || s ? i(o) : (l || c) && e(o)
			}
		});
		var e = function(t) {
				t.css({
					display: "block"
				}).velocity({
					translateY: "-100%"
				}, {
					duration: 300,
					queue: !1,
					easing: "easeInOutQuad"
				})
			},
			i = function(t) {
				t.velocity({
					translateY: 0
				}, {
					duration: 225,
					queue: !1,
					easing: "easeInOutQuad",
					complete: function() {
						t.css({
							display: "none"
						})
					}
				})
			};
		t(".rotate-btn").on("click", function() {
			t(this).closest(".card").toggleClass("flipped")
		}), t(window).on("load", function() {
			t(".card-rotating").each(function() {
				var e = t(this),
					i = e.parent(),
					n = e.find(".front"),
					o = e.find(".back"),
					a = e.find(".front").outerHeight(),
					r = e.find(".back").outerHeight();
				a > r ? t(i, o).height(a) : a < r ? t(i, n).height(r) : t(i).height(r)
			})
		}), t(".card-share > a").on("click", function(e) {
			e.preventDefault(), t(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
		}), t(".map-card").on("click", function() {
			t(this).find(".card-body").toggleClass("closed")
		})
	}), jQuery(function(t) {
		function e() {
			var e = t(this),
				i = Number(e.attr("length")),
				n = Number(e.val().length),
				o = n <= i;
			e.parent().find('span[class="character-counter"]').html(n + "/" + i),
				function(t, e) {
					var i = e.hasClass("invalid");
					t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
				}(o, e)
		}

		function i() {
			t(this).parent().find('span[class="character-counter"]').html("")
		}
		t.fn.characterCounter = function() {
			return this.each(function() {
				var n, o, a = t(this);
				void 0 !== a.attr("length") && (a.on("input focus", e), a.on("blur", i), n = a, o = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), n.parent().append(o))
			})
		}, t(document).ready(function() {
			t("input, textarea").characterCounter()
		})
	}),
	function(t) {
		t(["jquery"], function(t) {
			return function() {
				var e, i, n, o = 0,
					a = {
						error: "error",
						info: "info",
						success: "success",
						warning: "warning"
					},
					r = {
						clear: function(i, n) {
							var o = d();
							e || s(o);
							l(i, o, n) || function(i) {
								for(var n = e.children(), o = n.length - 1; o >= 0; o--) l(t(n[o]), i)
							}(o)
						},
						remove: function(i) {
							var n = d();
							e || s(n);
							if(i && 0 === t(":focus", i).length) return void h(i);
							e.children().length && e.remove()
						},
						error: function(t, e, i) {
							return u({
								type: a.error,
								iconClass: d().iconClasses.error,
								message: t,
								optionsOverride: i,
								title: e
							})
						},
						getContainer: s,
						info: function(t, e, i) {
							return u({
								type: a.info,
								iconClass: d().iconClasses.info,
								message: t,
								optionsOverride: i,
								title: e
							})
						},
						options: {},
						subscribe: function(t) {
							i = t
						},
						success: function(t, e, i) {
							return u({
								type: a.success,
								iconClass: d().iconClasses.success,
								message: t,
								optionsOverride: i,
								title: e
							})
						},
						version: "2.1.1",
						warning: function(t, e, i) {
							return u({
								type: a.warning,
								iconClass: d().iconClasses.warning,
								message: t,
								optionsOverride: i,
								title: e
							})
						}
					};
				return r;

				function s(i, n) {
					return i || (i = d()), (e = t("#" + i.containerId)).length ? e : (n && (e = function(i) {
						return(e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(t(i.target)), e
					}(i)), e)
				}

				function l(e, i, n) {
					var o = !(!n || !n.force) && n.force;
					return !(!e || !o && 0 !== t(":focus", e).length) && (e[i.hideMethod]({
						duration: i.hideDuration,
						easing: i.hideEasing,
						complete: function() {
							h(e)
						}
					}), !0)
				}

				function c(t) {
					i && i(t)
				}

				function u(i) {
					var a = d(),
						r = i.iconClass || a.iconClass;
					if(void 0 !== i.optionsOverride && (a = t.extend(a, i.optionsOverride), r = i.optionsOverride.iconClass || r), ! function(t, e) {
							if(t.preventDuplicates) {
								if(e.message === n) return !0;
								n = e.message
							}
							return !1
						}(a, i)) {
						o++, e = s(a, !0);
						var l = null,
							u = t("<div/>"),
							p = t("<div/>"),
							f = t("<div/>"),
							m = t("<div/>"),
							v = t(a.closeHtml),
							g = {
								intervalId: null,
								hideEta: null,
								maxHideTime: null
							},
							b = {
								toastId: o,
								state: "visible",
								startTime: new Date,
								options: a,
								map: i
							};
						return i.iconClass && u.addClass(a.toastClass).addClass(r), i.title && (p.append(i.title).addClass(a.titleClass), u.append(p)), i.message && (f.append(i.message).addClass(a.messageClass), u.append(f)), a.closeButton && (v.addClass("md-toast-close-button").attr("role", "button"), u.prepend(v)), a.progressBar && (m.addClass("md-toast-progress"), u.prepend(m)), a.newestOnTop ? e.prepend(u) : e.append(u), u.hide(), u[a.showMethod]({
								duration: a.showDuration,
								easing: a.showEasing,
								complete: a.onShown
							}), a.timeOut > 0 && (l = setTimeout(y, a.timeOut), g.maxHideTime = parseFloat(a.timeOut), g.hideEta = (new Date).getTime() + g.maxHideTime, a.progressBar && (g.intervalId = setInterval(k, 10))),
							function() {
								u.hover(w, x), !a.onclick && a.tapToDismiss && u.click(y);
								a.closeButton && v && v.click(function(t) {
									t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), y(!0)
								});
								a.onclick && u.click(function() {
									a.onclick(), y()
								})
							}(), c(b), a.debug && console && console.log(b), u
					}

					function y(e) {
						if(!t(":focus", u).length || e) return clearTimeout(g.intervalId), u[a.hideMethod]({
							duration: a.hideDuration,
							easing: a.hideEasing,
							complete: function() {
								h(u), a.onHidden && "hidden" !== b.state && a.onHidden(), b.state = "hidden", b.endTime = new Date, c(b)
							}
						})
					}

					function x() {
						(a.timeOut > 0 || a.extendedTimeOut > 0) && (l = setTimeout(y, a.extendedTimeOut), g.maxHideTime = parseFloat(a.extendedTimeOut), g.hideEta = (new Date).getTime() + g.maxHideTime)
					}

					function w() {
						clearTimeout(l), g.hideEta = 0, u.stop(!0, !0)[a.showMethod]({
							duration: a.showDuration,
							easing: a.showEasing
						})
					}

					function k() {
						var t = (g.hideEta - (new Date).getTime()) / g.maxHideTime * 100;
						m.width(t + "%")
					}
				}

				function d() {
					return t.extend({}, {
						tapToDismiss: !0,
						toastClass: "md-toast",
						containerId: "toast-container",
						debug: !1,
						showMethod: "fadeIn",
						showDuration: 300,
						showEasing: "swing",
						onShown: void 0,
						hideMethod: "fadeOut",
						hideDuration: 1e3,
						hideEasing: "swing",
						onHidden: void 0,
						extendedTimeOut: 1e3,
						iconClasses: {
							error: "md-toast-error",
							info: "md-toast-info",
							success: "md-toast-success",
							warning: "md-toast-warning"
						},
						iconClass: "md-toast-info",
						positionClass: "md-toast-top-right",
						timeOut: 5e3,
						titleClass: "md-toast-title",
						messageClass: "md-toast-message",
						target: "body",
						closeHtml: '<button type="button">&times;</button>',
						newestOnTop: !0,
						preventDuplicates: !1,
						progressBar: !1
					}, r.options)
				}

				function h(t) {
					e || (e = s()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), n = void 0))
				}
			}()
		})
	}("function" == typeof define && define.amd ? define : function(t, e) {
		"undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
	}), jQuery(function() {
		$(".smooth-scroll").on("click", "a", function(t) {
			t.preventDefault();
			var e = $(this),
				i = e.attr("href");
			if(void 0 !== typeof i && 0 === i.indexOf("#")) {
				var n = $(this).attr("data-offset") || 0;
				$("body,html").animate({
					scrollTop: $(i).offset().top - n
				}, 700);
				var o = e.parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
				void 0 !== typeof o && !1 !== o && history.replaceState(null, null, i)
			}
		})
	}), jQuery(function(t) {
		var e = "ontouchstart" in document.documentElement,
			i = function(t, e) {
				(e && !t.hasClass("active") || !e && t.hasClass("active")) && (t[e ? "addClass" : "removeClass"]("active"), document.querySelectorAll("ul .btn-floating").forEach(function(t) {
					return t.classList[e ? "add" : "remove"]("shown")
				}))
			},
			n = t(".fixed-action-btn:not(.smooth-scroll) > .btn-floating");
		n.on("mouseenter", function(n) {
			e || i(t(n.currentTarget).parent(), !0)
		}), n.parent().on("mouseleave", function(e) {
			return i(t(e.currentTarget), !1)
		}), n.on("click", function(e) {
			var n;
			e.preventDefault(), (n = t(e.currentTarget).parent()).hasClass("active") ? i(n, !1) : i(n, !0)
		}), t.fn.extend({
			openFAB: function() {
				i(t(this), !0)
			},
			closeFAB: function() {
				i(t(this), !1)
			}
		})
	}), jQuery(function(t) {
		var e = function() {
			function e(e, i) {
				this.settings = {
					menuLeftMinBorder: .3,
					menuLeftMaxBorder: -.5,
					menuRightMinBorder: -.3,
					menuRightMaxBorder: .5,
					menuVelocityOffset: 10
				}, this.defaults = {
					menuWidth: 240,
					edge: "left",
					closeOnClick: !1,
					breakpoint: 1440,
					timeDurationOpen: 500,
					timeDurationClose: 500,
					timeDurationOverlayOpen: 200,
					timeDurationOverlayClose: 200,
					easingOpen: "easeInOutQuad",
					easingClose: "easeInOutQuad",
					showOverlay: !0,
					showCloseButton: !1,
					slim: !1,
					onOpen: null,
					onClose: null
				}, this.$element = e, this.$elementCloned = e.clone().css({
					display: "inline-block",
					lineHeight: "24px"
				}).html('<i class="fas fa-times"></i>'), this.options = this.assignOptions(i), this.menuOut = !1, this.lastTouchVelocity = {
					x: {
						startPosition: 0,
						startTime: 0,
						endPosition: 0,
						endTime: 0
					}
				}, this.$body = t("body"), this.$menu = t("#" + this.$element.attr("data-activates")), this.$sidenavOverlay = t("#sidenav-overlay"), this.$dragTarget = t('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget)
			}
			var i = e.prototype;
			return i.assignOptions = function(e) {
				return t.extend({}, this.defaults, e)
			}, i.init = function() {
				this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick(), !0 === this.options.slim && this.handleSlim(), this.onOpen(), this.onClose(), this.options[0] + this.options[1] + this.options[2] + this.options[3] === "show" && !1 === this.menuOut && this.$element.trigger("click"), this.options[0] + this.options[1] + this.options[2] + this.options[3] === "hide" && !0 === this.menuOut && this.removeMenu()
			}, i.setMenuWidth = function() {
				var e = t("#" + this.$menu.attr("id")).find("> .sidenav-bg");
				this.$menu.css("width", this.options.menuWidth), e.css("width", this.options.menuWidth)
			}, i.setMenuTranslation = function() {
				var e = this;
				"left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
					left: 0
				})) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
					right: 0
				})), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint ? (this.menuOut = !0, this.$menu.css("transform", "translateX(0)")) : this.menuOut = !1, this.$menu.find("input[type=text]").on("touchstart", function() {
					e.$menu.addClass("transform-fix-input")
				}), t(window).on("resize", function() {
					if(t(".fixed-sn main, .fixed-sn footer").css("padding-left", e.options.menuWidth), window.innerWidth > e.options.breakpoint) e.$sidenavOverlay.length ? (e.removeMenu(!0), t(".fixed-sn main, .fixed-sn footer").css("padding-left", e.options.menuWidth)) : (!1 === e.menuOut && t(e).trigger("sidenav_open", [e.options.onOpen]), e.$menu.css("transform", "translateX(0%)"), e.menuOut = !0);
					else if(!1 === e.menuOut) {
						var i = "left" === e.options.edge ? "-100" : "100";
						e.$menu.css("transform", "translateX(" + i + "%)"), e.removeMenu(!0)
					} else e.menuOut = !1, e.removeMenu(!0)
				}))
			}, i.closeOnClick = function() {
				var t = this;
				!0 === this.options.closeOnClick && (this.$menu.on("click", "a:not(.collapsible-header)", function() {
					return t.removeMenu()
				}), "translateX(0)" === this.$menu.css("transform") && this.$menu.on("click", function() {
					return t.removeMenu()
				}))
			}, i.onOpen = function(e) {
				t(this).on("sidenav_open", function(t, e) {
					"function" == typeof e && e()
				})
			}, i.onClose = function(e) {
				t(this).on("sidenav_close", function(t, e) {
					"function" == typeof e && e()
				})
			}, i.openOnClick = function() {
				var e = this;
				this.$element.on("click", function(i) {
					if(i.preventDefault(), !0 === e.menuOut) return e.removeMenu();
					t(e).trigger("sidenav_open", [e.options.onOpen]), !0 === e.options.showOverlay ? t("#sidenav-overlay").length || e.showSidenavOverlay() : e.showCloseButton();
					var n = [];
					n = "left" === e.options.edge ? [0, -1 * e.options.menuWidth] : [0, e.options.menuWidth], "matrix(1, 0, 0, 1, 0, 0)" !== e.$menu.css("transform") && e.$menu.velocity({
						translateX: n
					}, {
						duration: e.options.timeDurationOpen,
						queue: !1,
						easing: e.options.easingOpen
					}), e.$sidenavOverlay.on("touchmove", e.touchmoveEventHandler.bind(e)), e.$menu.on("touchmove", function(t) {
						t.preventDefault(), e.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
					}), !1 === e.options.showOverlay && (e.menuOut = !0)
				})
			}, i.bindTouchEvents = function() {
				var t = this;
				this.$dragTarget.on("click", function() {
					t.menuOut && t.removeMenu()
				}), this.$dragTarget.on("touchstart", function(e) {
					t.lastTouchVelocity.x.startPosition = e.touches[0].clientX, t.lastTouchVelocity.x.startTime = Date.now()
				}), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
			}, i.showCloseButton = function() {
				!0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
					borderTop: "1px solid rgba(153,153,153,.3)"
				}))
			}, i.inputOnClick = function() {
				var t = this;
				this.$menu.find("input[type=text]").on("touchstart", function() {
					return t.$menu.css("transform", "translateX(0)")
				})
			}, i.removeMenu = function(e) {
				var i = this;
				this.$body.css({
					overflow: "",
					width: ""
				}), this.$menu.velocity({
					translateX: "left" === this.options.edge ? "-100%" : "100%"
				}, {
					duration: this.options.timeDurationClose,
					queue: !1,
					easing: this.options.easingClose,
					complete: function() {
						!0 === e && (i.$menu.removeAttr("style"), i.$menu.css("width", i.options.menuWidth))
					}
				}), this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1, t(".fixed-sn .double-nav").css("padding-left", "unset"), t(".fixed-sn main, .fixed-sn footer").css({
					"padding-left": "0"
				}), t(this).trigger("sidenav_close", [this.options.onClose])
			}, i.handleSlim = function() {
				var e = this;
				t("#toggle").on("click", function() {
					e.$menu.hasClass("slim") ? (e.$menu.removeClass("slim"), t(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), t(".fixed-sn .double-nav").css({
						transition: "all .3s ease-in-out",
						"padding-left": "15.9rem"
					}), t(".fixed-sn main, .fixed-sn footer").css({
						transition: "all .3s ease-in-out",
						"padding-left": "15rem"
					})) : (e.$menu.addClass("slim"), t(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), t(".fixed-sn .double-nav").css("padding-left", "4.6rem"), t(".fixed-sn main, .fixed-sn footer").css({
						"padding-left": "3.7rem"
					}))
				})
			}, i.touchmoveEventHandler = function(t) {
				if("touchmove" === t.type) {
					var e = t.touches[0],
						i = e.clientX;
					Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = e.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (i > this.options.menuWidth ? i = this.options.menuWidth : i < 0 && (i = 0)), this.translateSidenavX(i), this.updateOverlayOpacity(i)
				}
			}, i.calculateTouchVelocityX = function() {
				return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
			}, i.touchendEventHandler = function(t) {
				if("touchend" === t.type) {
					var e = t.changedTouches[0];
					this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = e.clientX;
					var i = this.calculateTouchVelocityX(),
						n = e.clientX,
						o = n - this.options.menuWidth,
						a = n - this.options.menuWidth / 2;
					o > 0 && (o = 0), a < 0 && (a = 0), "left" === this.options.edge ? (this.menuOut || i <= this.settings.menuLeftMinBorder || i < this.options.menuLeftMaxBorder ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || i > this.settings.menuLeftMinBorder) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.menuWidth - this.options.menuVelocityOffset, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
						width: "10px",
						right: "",
						left: 0
					})) : this.menuOut && i >= this.settings.menuRightMinBorder || i > this.settings.menuRightMaxBorder ? (this.translateMenuX([0, a], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
						width: "50%",
						right: "",
						left: 0
					})) : (!this.menuOut || i < this.settings.menuRightMinBorder) && (this.enableScrolling(), this.translateMenuX([this.options.menuWidth + this.options.menuVelocityOffset, a], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
						width: "10px",
						right: 0,
						left: ""
					}))
				}
			}, i.buildSidenavOverlay = function() {
				var e = this;
				!0 === this.options.showOverlay && (this.$sidenavOverlay = t('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function() {
					return e.removeMenu()
				}), this.$body.append(this.$sidenavOverlay))
			}, i.disableScrolling = function() {
				var t = this.$body.innerWidth();
				this.$body.css("overflow", "hidden"), this.$body.width(t)
			}, i.enableScrolling = function() {
				this.$body.css({
					overflow: "",
					width: ""
				})
			}, i.translateMenuX = function(t, e) {
				this.$menu.velocity({
					translateX: t
				}, {
					duration: "string" == typeof e ? Number(e) : e,
					queue: !1,
					easing: this.options.easingOpen
				})
			}, i.translateSidenavX = function(t) {
				if("left" === this.options.edge) {
					var e = t >= this.options.menuWidth / 2;
					this.menuOut = e, this.$menu.css("transform", "translateX(" + (t - this.options.menuWidth) + "px)")
				} else {
					var i = t < window.innerWidth - this.options.menuWidth / 2;
					this.menuOut = i;
					var n = t - this.options.menuWidth / 2;
					n < 0 && (n = 0), this.$menu.css("transform", "translateX(" + n + "px)")
				}
			}, i.updateOverlayOpacity = function(t) {
				var e;
				e = "left" === this.options.edge ? t / this.options.menuWidth : Math.abs((t - window.innerWidth) / this.options.menuWidth), this.$sidenavOverlay.velocity({
					opacity: e
				}, {
					duration: 10,
					queue: !1,
					easing: this.options.easingOpen
				})
			}, i.showSidenavOverlay = function() {
				!0 !== this.options.showOverlay || t("#sidenav-overlay").length || this.buildSidenavOverlay(), this.$sidenavOverlay.velocity({
					opacity: 1
				}, {
					duration: this.options.timeDurationOverlayOpen,
					queue: !1,
					easing: this.options.easingOpen
				})
			}, i.hideSidenavOverlay = function() {
				this.$sidenavOverlay.velocity({
					opacity: 0
				}, {
					duration: this.options.timeDurationOverlayClose,
					queue: !1,
					easing: this.options.easingOpen,
					complete: function() {
						t(this).remove()
					}
				})
			}, e
		}();
		t.fn.sideNav = function(i) {
			t(this).each(function() {
				new e(t(this), i).init()
			})
		}, t(".side-nav").on("touchmove", function(t) {
			t.stopPropagation()
		}, !1)
	}), jQuery(function(t) {
		function e(e, n) {
			var o = e.find("> li > .collapsible-header");
			i(n), o.not(n).removeClass("active").parent().removeClass("active").children(".collapsible-body").stop(!0, !1).slideUp({
				duration: 350,
				easing: "easeOutQuart",
				queue: !1,
				complete: function() {
					t(this).css("height", "")
				}
			})
		}

		function i(e) {
			e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
				duration: 350,
				easing: "easeOutQuart",
				queue: !1,
				complete: function() {
					t(this).css("height", "")
				}
			}) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
				duration: 350,
				easing: "easeOutQuart",
				queue: !1,
				complete: function() {
					t(this).css("height", "")
				}
			})
		}

		function n(t) {
			return o(t).length > 0
		}

		function o(t) {
			return t.closest("li > .collapsible-header")
		}
		t.fn.collapsible = function(a) {
			var r = {
				accordion: void 0
			};
			return a = t.extend(r, a), this.each(function() {
				var r = t(this),
					s = r.find("> li > .collapsible-header"),
					l = r.data("collapsible");
				r.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), a.accordion || "accordion" === l || void 0 === l ? (s.on("click.collapse", function(i) {
					var a = t(i.target);
					n(a) && (a = o(a)), a.toggleClass("active"), e(r, a)
				}), e(r, s.filter(".active").first())) : s.each(function() {
					t(this).on("click.collapse", function(e) {
						var a = t(e.target);
						n(a) && (a = o(a)), a.toggleClass("active"), i(a)
					}), t(this).hasClass("active") && i(t(this))
				})
			})
		}, t(".collapsible").collapsible()
	}), jQuery(function(t) {
		var e = "input[type=range]:not(.custom-range):not(.multi-range)",
			i = '<span class="thumb" style="margin-left: 7px"><span class="value"></span></span>',
			n = !1;

		function o(t, e) {
			var i = t.attr("min"),
				n = t.attr("max"),
				o = t.width() - 13.5,
				a = o / (n - i),
				r = a * t.val() - a * i;
			r < 0 ? r = 0 : r > o && (r = o), e.addClass("active").css("left", r)
		}

		function a(t, e, i, n, o, a, r) {
			t.velocity({
				height: e,
				width: i,
				top: n,
				marginLeft: o
			}, {
				duration: a,
				easing: r || "swing"
			})
		}

		function r(t) {
			a(t, "30px", "30px", "-27px", "-7px", 200, "easeOutExpo")
		}

		function s(t) {
			a(t, "0", "0", "10px", "7px", 200)
		}
		t(document).on("change", e, function() {
			var e = t(this);
			e.siblings(".thumb").find(".value").html(e.val())
		}), t(document).on("mousedown touchstart contextmenu", e, function(a) {
			var s = t(this),
				l = !s.siblings(".thumb").length,
				c = "contextmenu" === a.type;
			l && function() {
				var n = t(i);
				t(e).after(n)
			}();
			var u = s.siblings(".thumb");
			n = !c, s.addClass("active"), u.hasClass("active") || r(u), o(t(this), u), u.find(".value").html(s.val())
		}), t(document).on("mouseup touchend", ".range-field", function() {
			var e = t(this).children(".thumb");
			n = !1, e.hasClass("active") && s(e), e.removeClass("active")
		}), t(document).on("input mousemove touchmove", ".range-field", function() {
			var i = t(this).children(".thumb");
			n && (i.hasClass("active") || r(i), o(t(this).children(e), i), i.find(".value").html(i.siblings(e).val()))
		}), t(document).on("mouseout touchleave", ".range-field", function() {
			if(!n) {
				var e = t(this).children(".thumb");
				e.hasClass("active") && s(e), e.removeClass("active")
			}
		})
	}), jQuery(function(t) {
		t(document).on("change", '.file-field input[type="file"]', function() {
			var e = t(this);
			console.log(e);
			var i = e.closest(".file-field").find("input.file-path"),
				n = e.get(0).files,
				o = [];
			o = Array.isArray(n) ? n.map(function(t) {
				return t.name
			}) : Object.values(n).map(function(t) {
				return t.name
			}), i.val(o.join(", ")), i.trigger("change")
		})
	}), jQuery(function(t) {
		var e = function() {
			function e(e, i) {
				void 0 === i && (i = {}), this.$activator = e, this.$activates = t("#" + e.attr("data-activates")), this.options = {
					inDuration: this.fallback().or(e.data("induration")).or(e.attr("data-in-duration")).or(i.inDuration).or(300).value(),
					outDuration: this.fallback().or(e.data("outduration")).or(e.attr("data-out-duration")).or(i.outDuration).or(225).value(),
					easingEffectIn: this.fallback().or(e.data("easingeffectin")).or(e.attr("data-easing-effect-in")).or(i.easingEffectIn).or("easeOutCubic").value(),
					easingEffectOut: this.fallback().or(e.data("easingeffectout")).or(e.attr("data-easing-effect-out")).or(i.easingEffectOut).or("swing").value(),
					constrainWidth: this.fallback().or(e.data("constrainwidth")).or(e.attr("data-constrain-width")).or(i.constrainWidth).or(!0).value(),
					hover: this.fallback().or(e.data("hover")).or(e.attr("data-hover")).or(i.hover).or(!1).value(),
					gutter: this.fallback().or(e.data("gutter")).or(e.attr("data-gutter")).or(i.gutter).or(0).value(),
					belowOrigin: this.fallback().or(e.data("beloworigin")).or(e.attr("data-below-origin")).or(i.belowOrigin).or(!1).value(),
					alignment: this.fallback().or(e.data("alignment")).or(e.attr("data-alignment")).or(i.alignment).or("left").value(),
					maxHeight: this.fallback().or(e.data("maxheight")).or(e.attr("data-max-height")).or(i.maxHeight).or("").value(),
					resetScroll: this.fallback().or(e.data("resetscroll")).or(e.attr("data-reset-scroll")).or(i.resetScroll).or(!0).value()
				}, this.isFocused = !1
			}
			e.mdbDropdownAutoInit = function() {
				t(".dropdown-button").dropdown(), this.bindMultiLevelDropdownEvents(), this.bindBootstrapEvents()
			}, e.bindMultiLevelDropdownEvents = function() {
				t(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter", function(e) {
					var i = t(this);
					t(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"), i.next(".dropdown-menu").addClass("show"), e.stopPropagation()
				}), t(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown", function() {
					t(".multi-level-dropdown .dropdown-menu.show").removeClass("show")
				})
			}, e.bindBootstrapEvents = function() {
				var e = this;
				t(".dropdown, .dropup").on({
					"show.bs.dropdown": function(i) {
						var n = t(i.target),
							o = e._getDropdownEffects(n);
						e._dropdownEffectStart(n, o.effectIn)
					},
					"shown.bs.dropdown": function(i) {
						var n = t(i.target),
							o = e._getDropdownEffects(n);
						o.effectIn && o.effectOut && e._dropdownEffectEnd(n, o)
					},
					"hide.bs.dropdown": function(i) {
						var n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
							o = t(i.target),
							a = e._getDropdownEffects(o);
						a.effectOut && (n || i.preventDefault(), e._dropdownEffectStart(o, a.effectOut), e._dropdownEffectEnd(o, a, function() {
							o.removeClass("show"), o.find(".dropdown-menu").removeClass("show")
						}))
					}
				})
			}, e._getDropdownEffects = function(t) {
				var e = "fadeIn",
					i = "fadeOut",
					n = t.find(".dropdown-menu"),
					o = t.parents("ul.nav");
				return o.height > 0 && (e = o.data("dropdown-in") || null, i = o.data("dropdown-out") || null), {
					effectIn: n.data("dropdown-in") || e,
					effectOut: n.data("dropdown-out") || i
				}
			}, e._dropdownEffectStart = function(t, e) {
				e && (t.addClass("dropdown-animating"), t.find(".dropdown-menu").addClass(["animated", e].join(" ")))
			}, e._dropdownEffectEnd = function(t, e, i) {
				t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
					t.removeClass("dropdown-animating"), t.find(".dropdown-menu").removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof i && i()
				})
			};
			var i = e.prototype;
			return i.returnPublicInterface = function() {
				return {
					$activator: this.$activator,
					$activates: this.$activates,
					updatePosition: this.updatePosition.bind(this)
				}
			}, i.init = function() {
				this.appendDropdownToActivator(), this.options.hover ? this.handleHoverableDropdown() : this.handleClickableDropdown(), this.bindEvents()
			}, i.appendDropdownToActivator = function() {
				this.$activator.after(this.$activates)
			}, i.handleHoverableDropdown = function() {
				var e = this,
					i = !1;
				this.$activator.unbind("click." + this.$activator.attr("id")), this.$activator.on("mouseenter", function() {
					!1 === i && (e.placeDropdown(), i = !0)
				}), this.$activator.on("mouseleave", function(n) {
					var o = n.toElement || n.relatedTarget;
					t(o).closest(".dropdown-content").is(e.$activates) || (e.$activates.stop(!0, !0), e.hideDropdown(), i = !1)
				}), this.$activates.on("mouseleave", function(n) {
					var o = n.toElement || n.relatedTarget;
					t(o).closest(".dropdown-button").is(e.$activator) || (e.$activates.stop(!0, !0), e.hideDropdown(), i = !1)
				})
			}, i.handleClickableDropdown = function() {
				var e = this;
				this.$activator.unbind("click." + this.$activator.attr("id")), this.$activator.bind("click." + this.$activator.attr("id"), function(i) {
					if(!e.isFocused) {
						var n = e.$activator.get(0) === i.currentTarget,
							o = e.$activator.hasClass("active"),
							a = 0 !== t(i.target).closest(".dropdown-content").length;
						!n || o || a ? o && (e.hideDropdown(), t(document).unbind("click." + e.$activates.attr("id") + " touchstart." + e.$activates.attr("id"))) : (i.preventDefault(), e.placeDropdown("click")), e.$activates.hasClass("active") && t(document).bind("click." + e.$activates.attr("id") + " touchstart." + e.$activates.attr("id"), function(i) {
							!e.$activates.is(i.target) && !e.$activator.is(i.target) && !e.$activator.find(i.target).length && (e.hideDropdown(), t(document).unbind("click." + e.$activates.attr("id") + " touchstart." + e.$activates.attr("id")))
						})
					}
				})
			}, i.bindEvents = function() {
				var t = this;
				this.$activator.on("open", function(e, i) {
					t.placeDropdown(i)
				}), this.$activator.on("close", this.hideDropdown.bind(this))
			}, i.placeDropdown = function(t) {
				"focus" === t && (this.isFocused = !0), this.$activates.addClass("active"), this.$activator.addClass("active"), !0 === this.options.constrainWidth ? this.$activates.css("width", this.$activator.outerWidth()) : this.$activates.css("white-space", "nowrap"), this.updatePosition(), this.showDropdown()
			}, i.showDropdown = function() {
				this.$activates.stop(!0, !0).css("opacity", 0).slideDown({
					queue: !1,
					duration: this.options.inDuration,
					easing: this.options.easingEffectIn,
					complete: function() {
						t(this).css("height", "")
					}
				}).animate(_objectSpread({
					opacity: 1
				}, this.options.resetScroll && {
					scrollTop: 0
				}), {
					queue: !1,
					duration: this.options.inDuration,
					easing: "easeOutSine"
				})
			}, i.hideDropdown = function() {
				var t = this;
				this.isFocused = !1, this.$activates.fadeOut({
					durations: this.options.outDuration,
					easing: this.options.easingEffectOut
				}), this.$activates.removeClass("active"), this.$activator.removeClass("active"), setTimeout(function() {
					t.$activates.css("max-height", t.options.maxHeight)
				}, this.options.outDuration)
			}, i.updatePosition = function() {
				var e = window.innerHeight,
					i = this.$activator.innerHeight(),
					n = this.$activator.offset().top - t(window).scrollTop(),
					o = this._getHorizontalAlignment(),
					a = 0,
					r = 0,
					s = this.$activator.parent(),
					l = this.options.belowOrigin ? i : 0,
					c = !s.is("body") && s.get(0).scrollHeight > s.get(0).clientHeight ? s.get(0).scrollTop : 0,
					u = n + this.$activates.innerHeight() > e,
					d = n + i - this.$activates.innerHeight() < 0;
				if(u && d) {
					var h = e - n - l;
					this.$activates.css("max-height", h)
				} else u && (l || (l += i), l -= this.$activates.innerHeight());
				if("left" === o) a = this.options.gutter, r = this.$activator.position().left + a;
				else if("right" === o) {
					r = this.$activator.position().left + this.$activator.outerWidth() - this.$activates.outerWidth() + (a = -this.options.gutter)
				}
				this.$activates.css({
					position: "absolute",
					top: this.$activator.position().top + l + c,
					left: r
				})
			}, i._getHorizontalAlignment = function() {
				var e = this.$activator.offset().left;
				return e + this.$activates.innerWidth() > t(window).width() ? "right" : e - this.$activates.innerWidth() + this.$activator.innerWidth() < 0 ? "left" : this.options.alignment
			}, i.fallback = function() {
				return {
					_value: void 0,
					or: function(t) {
						return void 0 !== t && void 0 === this._value && (this._value = t), this
					},
					value: function() {
						return this._value
					}
				}
			}, e
		}();
		t.fn.scrollTo = function(e) {
			return this.scrollTop(this.scrollTop() - this.offset().top + t(e).offset().top), this
		}, t.fn.dropdown = function(t) {
			if(this.length > 1) {
				var i = [];
				return this.each(function() {
					var n = new e(this, t);
					n.init(), i.push(n.returnPublicInterface())
				}), i
			}
			var n = new e(this, t);
			return n.init(), n.returnPublicInterface()
		}, t.dropdown = {
			initAnimations: function() {
				e.bindBootstrapEvents()
			}
		}, e.mdbDropdownAutoInit()
	}), jQuery(function(t) {
		var e = function() {
			function e(t, e) {
				void 0 === e && (e = {}), this.$searchWrappers = t, this.options = {
					color: this.fallback().or(e.color).or("#000").value(),
					backgroundColor: this.fallback().or(e.backgroundColor).or("").value(),
					fontSize: this.fallback().or(e.fontSize).or(".9rem").value(),
					fontWeight: this.fallback().or(e.fontWeight).or("400").value(),
					borderRadius: this.fallback().or(e.borderRadius).or("").value(),
					borderColor: this.fallback().or(e.borderColor).or("").value(),
					margin: this.fallback().or(e.margin).or("").value()
				}
			}
			var i = e.prototype;
			return i.init = function() {
				return this.bindSearchEvents(), this.$searchWrappers.css({
					color: this.options.color,
					backgroundColor: this.options.backgroundColor,
					fontSize: this.options.fontSize,
					fontWeight: this.options.fontWeight,
					borderRadius: this.options.borderRadius,
					borderColor: this.options.borderColor,
					margin: this.options.margin
				})
			}, i.bindSearchEvents = function() {
				this.$searchWrappers.each(function() {
					var e = t(this).find("input").first();
					e.on("keyup", function() {
						e.closest("div[id]").find("a, li").each(function() {
							var i = t(this);
							i.html().toLowerCase().indexOf(e.val().toLowerCase()) > -1 ? i.css({
								display: ""
							}) : i.css({
								display: "none"
							})
						})
					})
				})
			}, i.fallback = function() {
				return {
					_value: void 0,
					or: function(t) {
						return void 0 !== t && void 0 === this._value && (this._value = t), this
					},
					value: function() {
						return this._value
					}
				}
			}, e
		}();
		t.fn.mdbDropSearch = function(t) {
			return new e(this, t).init()
		}
	});
var MaterialSelectViewRenderer = function() {
	function t(t) {
		this.view = t
	}
	var e = t.prototype;
	return e.destroy = function() {
		var t = this.view.$nativeSelect.data("select-id");
		this.view.$nativeSelect.data("select-id", null).removeClass("initialized"), this.view.$nativeSelect.parent().find("span.caret").remove(), this.view.$nativeSelect.parent().find("input").remove(), this.view.$nativeSelect.hasClass("select-wrapper") && this.view.$nativeSelect.find("select").unwrap(), $("ul#select-options-" + t).remove()
	}, e.render = function() {
		this.setWrapperClasses(), this.setMaterialSelectInitialValue(), this.view.$nativeSelect.data("select-id", this.view.properties.id), this.view.$nativeSelect.before(this.view.$selectWrapper), this.view.options.showResetButton && this.appendResetButton(), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSelectLabel(), this.appendCustomTemplateParts(), this.shouldValidate && this.appendValidationFeedbackElements(), this.isRequired && this.enableValidation(), this.isDisabled || (this.setMaterialOptionsListMaxHeight(), this.view.dropdown = this.view.$materialSelect.dropdown({
			hover: !1,
			closeOnClick: !1,
			resetScroll: !1
		})), this.shouldInheritTabindex && this.view.$materialSelect.attr("tabindex", this.view.$nativeSelect.attr("tabindex")), this.isDefaultMaterialInput && this.view.$mainLabel.css("top", "-7px"), this.isCustomSelect && this.view.$materialSelect.css({
			display: "inline-block",
			width: "100%",
			height: "calc(1.5em + .75rem + 2px)",
			padding: ".375rem 1.75rem .375rem .75rem",
			fontSize: "1rem",
			lineHeight: "1.5",
			backgroundColor: "#fff",
			border: "1px solid #ced4da"
		}), this.addAccessibilityAttributes(), this.markInitialized()
	}, e.setWrapperClasses = function() {
		this.isDefaultMaterialInput ? this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter(function(t) {
			return "md-form" !== t
		}).join(" ")).css({
			marginTop: "1.5rem",
			marginBottom: "1.5rem"
		}) : this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))
	}, e.setMaterialSelectInitialValue = function() {
		if(this.view.options.placeholder) this.view.$materialSelect.attr("placeholder", this.view.options.placeholder), this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length || this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
		else {
			var t = this.view.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
			this.view.$materialSelect.val(t)
		}
	}, e.appendDropdownIcon = function() {
		this.isDisabled && this.view.$dropdownIcon.addClass("disabled"), this.view.$selectWrapper.append(this.view.$dropdownIcon)
	}, e.appendResetButton = function() {
		this.isDisabled && this.view.$btnReset.addClass("disabled"), -1 === this.view.$nativeSelect.get(0).selectedIndex && this.view.$btnReset.hide(), this.view.$selectWrapper.append(this.view.$btnReset)
	}, e.appendMaterialSelect = function() {
		this.view.$selectWrapper.append(this.view.$materialSelect)
	}, e.appendMaterialOptionsList = function() {
		this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.view.$selectWrapper.append(this.view.$materialOptionsList)
	}, e.appendNativeSelect = function() {
		this.view.$nativeSelect.appendTo(this.view.$selectWrapper)
	}, e.appendSelectLabel = function() {
		(this.view.$materialSelect.val() || this.view.options.placeholder) && this.view.$mainLabel.addClass("active"), this.view.$mainLabel[this.isDisabled ? "addClass" : "removeClass"]("disabled"), this.view.$mainLabel.appendTo(this.view.$selectWrapper)
	}, e.appendCustomTemplateParts = function() {
		var t = this;
		this.view.$customTemplateParts.each(function(e, i) {
			$(i).appendTo(t.view.$materialOptionsList).wrap("<li></li>")
		}), this.view.$btnSave.appendTo(this.view.$selectWrapper).clone().appendTo(this.view.$materialOptionsList)
	}, e.appendValidationFeedbackElements = function() {
		this.view.$validFeedback.insertAfter(this.view.$selectWrapper), this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)
	}, e.enableValidation = function() {
		this.view.$nativeSelect.css({
			position: "absolute",
			top: "1rem",
			left: "0",
			height: "0",
			width: "0",
			opacity: "0",
			padding: "0",
			"pointer-events": "none"
		}), -1 === this.view.$nativeSelect.attr("style").indexOf("inline!important") && this.view.$nativeSelect.attr("style", this.view.$nativeSelect.attr("style") + " display: inline!important;"), this.view.$nativeSelect.attr("tabindex", -1), this.view.$nativeSelect.data("inherit-tabindex", !1)
	}, e.setMaterialOptionsListMaxHeight = function() {
		var t = $("<div />").appendTo($("body"));
		t.css({
			position: "absolute !important",
			visibility: "hidden !important",
			display: "block !important"
		}), this.view.$materialOptionsList.show();
		var e = this.view.$materialOptionsList.clone().appendTo(t),
			i = this.view.options.visibleOptions,
			n = 0,
			o = e.find("li").not(".disabled"),
			a = "" === o.first().text().trim() ? o.eq(1).height() : o.first().height(),
			r = o.length;
		if(this.isSearchable && (n += this.view.$searchInput.height()), this.isMultiple && (n += this.view.$toggleAll.height()), this.view.$materialOptionsList.hide(), t.remove(), i >= 0 && i < r) {
			var s = a * i + n;
			this.view.$materialOptionsList.css("max-height", s), this.view.$materialSelect.data("maxheight", s)
		}
	}, e.addAccessibilityAttributes = function() {
		this.view.$materialSelect.attr({
			role: this.isSearchable ? "combobox" : "listbox",
			"aria-multiselectable": this.isMultiple,
			"aria-disabled": this.isDisabled,
			"aria-required": this.isRequired,
			"aria-labelledby": this.view.$mainLabel.attr("id"),
			"aria-haspopup": !0,
			"aria-expanded": !1
		}), this.view.$searchInput && this.view.$searchInput.attr("role", "searchbox"), this.view.$materialOptionsList.find("li").each(function() {
			var t = $(this);
			t.attr({
				role: "option",
				"aria-selected": t.hasClass("active"),
				"aria-disabled": t.hasClass("disabled")
			})
		})
	}, e.markInitialized = function() {
		this.view.$nativeSelect.addClass("initialized")
	}, e.appendSearchInputOption = function() {
		var t = this.view.$nativeSelect.attr("searchable"),
			e = this.isDefaultMaterialInput ? "" : "md-form",
			i = this.isDefaultMaterialInput ? "select-default mb-2" : "";
		this.view.$searchInput = $('<span class="search-wrap ml-2"><div class="' + e + ' mt-0"><input type="text" class="search w-100 d-block ' + i + '" tabindex="-1" placeholder="' + t + '"></div></span>'), this.view.$materialOptionsList.append(this.view.$searchInput), this.view.$searchInput.on("click", function(t) {
			return t.stopPropagation()
		})
	}, e.appendAddOptionBtn = function() {
		this.view.$searchInput.append(this.view.$addOptionBtn)
	}, e.buildMaterialOptions = function() {
		var t = this;
		this.view.$nativeSelectChildren.each(function(e, i) {
			var n = $(i);
			if(n.is("option")) t.buildSingleOption(n, t.isMultiple ? "multiple" : "");
			else if(n.is("optgroup")) {
				var o = $('<li class="optgroup"><span>' + n.attr("label") + "</span></li>");
				t.view.$materialOptionsList.append(o), n.children("option").each(function(e, i) {
					t.buildSingleOption($(i), "optgroup-option")
				})
			}
		})
	}, e.appendToggleAllCheckbox = function() {
		var t = this.view.$materialOptionsList.find("li").first();
		t.hasClass("disabled") && t.find("input").prop("disabled") ? t.after(this.view.$toggleAll) : this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)
	}, e.addNewOption = function() {
		var t = this.view.$searchInput.find("input").val(),
			e = $('<option value="' + t.toLowerCase() + '" selected>' + t + "</option>").prop("selected", !0);
		this.isMultiple || this.view.$nativeSelectChildren.each(function(t, e) {
			$(e).attr("selected", !1)
		}), this.view.$nativeSelect.append(e)
	}, e.buildSingleOption = function(t, e) {
		var i = t.is(":disabled") ? "disabled" : "",
			n = t.is(":selected") ? "active" : "",
			o = "optgroup-option" === e ? "optgroup-option" : "",
			a = t.data("icon"),
			r = t.data("fas") ? '<i class="fa-pull-right m-2 fas fa-' + t.data("fas") + " " + this.view.options.fasClasses + '"></i> ' : "",
			s = t.data("far") ? '<i class="fa-pull-right m-2 far fa-' + t.data("far") + " " + this.view.options.farClasses + '"></i> ' : "",
			l = t.data("fab") ? '<i class="fa-pull-right m-2 fab fa-' + t.data("fab") + " " + this.view.options.fabClasses + '"></i> ' : "",
			c = t.attr("class"),
			u = a ? '<img alt="" src="' + a + '" class="' + c + '">' : "",
			d = this.isMultiple ? '<input type="checkbox" class="form-check-input" ' + i + "/><label></label>" : "",
			h = t.data("secondary-text") ? '<p class="text-muted pt-0 mb-0" disabled>' + t.data("secondary-text") + "</p>" : "";
		this.view.$materialOptionsList.append($('<li class="' + i + " " + n + " " + o + '">' + u + '<span class="filtrable ' + (this.view.options.copyClassesOption ? c : "") + '">' + d + " " + t.html() + " " + r + " " + s + " " + l + " " + h + "</span></li>"))
	}, _createClass(t, [{
		key: "shouldValidate",
		get: function() {
			return this.view.options.validate
		}
	}, {
		key: "shouldInheritTabindex",
		get: function() {
			return !1 !== this.view.$nativeSelect.data("inherit-tabindex")
		}
	}, {
		key: "isMultiple",
		get: function() {
			return this.view.isMultiple
		}
	}, {
		key: "isSearchable",
		get: function() {
			return this.view.isSearchable
		}
	}, {
		key: "isRequired",
		get: function() {
			return this.view.isRequired
		}
	}, {
		key: "isEditable",
		get: function() {
			return this.view.isEditable
		}
	}, {
		key: "isDisabled",
		get: function() {
			return this.view.isDisabled
		}
	}, {
		key: "isDefaultMaterialInput",
		get: function() {
			return this.view.options.defaultMaterialInput
		}
	}, {
		key: "isCustomSelect",
		get: function() {
			return this.view.$materialSelect.hasClass("custom-select") && this.view.$materialSelect.hasClass("select-dropdown")
		}
	}]), t
}();

function _defineProperties(t, e) {
	for(var i = 0; i < e.length; i++) {
		var n = e[i];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	}
}

function _createClass(t, e, i) {
	return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}
var MaterialSelectView = function() {
	function t(t, e) {
		var i = e.options,
			n = e.properties.id;
		this.properties = {
			id: n,
			isMultiple: Boolean(t.attr("multiple")),
			isSearchable: Boolean(t.attr("searchable")),
			isRequired: Boolean(t.attr("required")),
			isEditable: Boolean(t.attr("editable"))
		}, this.options = this._copyOptions(i), this.$nativeSelect = t, this.$selectWrapper = $('<div class="select-wrapper"></div>'), this.$materialOptionsList = $('<ul id="select-options-' + this.properties.id + '" class="dropdown-content select-dropdown w-100 ' + (this.properties.isMultiple ? "multiple-select-dropdown" : "") + '"></ul>'), this.$materialSelectInitialOption = t.find("option:selected").text() || t.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = $('<input type="text" class="' + (this.options.defaultMaterialInput ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control") + '" ' + (!this.options.validate && 'readonly="true"') + ' required="' + (this.options.validate ? "true" : "false") + '" ' + (this.$nativeSelect.is(" :disabled") ? "disabled" : "") + ' data-activates="select-options-' + this.properties.id + '" value=""/>'), this.$dropdownIcon = this.options.defaultMaterialInput ? "" : $('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$noSearchResultsInfo = $("<li><span><i>" + this.options.labels.noSearchResults + "</i></span></li>"), this.$toggleAll = $('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>' + this.options.labels.selectAll + "</label></span></li>"), this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>'), this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"), $("label[for='" + this.properties.id + "']")), this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil("select", ".mdb-select-template-part"), $("[data-mdb-select-template-part-for='" + this.properties.id + "']")), this.$btnSave = this.$nativeSelect.nextUntil("select", ".btn-save"), this.$btnReset = $('<span class="reset-select-btn">&times;</span>'), this.$validFeedback = $('<div class="valid-feedback">' + this.options.labels.validFeedback + "</div>"), this.$invalidFeedback = $('<div class="invalid-feedback">' + this.options.labels.invalidFeedback + "</div>"), this.keyCodes = {
			tab: 9,
			enter: 13,
			shift: 16,
			alt: 18,
			esc: 27,
			space: 32,
			end: 35,
			home: 36,
			arrowUp: 38,
			arrowDown: 40
		}, this.renderer = new MaterialSelectViewRenderer(this), this.dropdown = null
	}
	var e = t.prototype;
	return e.destroy = function() {
		this.renderer.destroy()
	}, e.render = function() {
		this.renderer.render()
	}, e.selectPreselectedOptions = function(t) {
		var e = this;
		if(this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function(i, n) {
			var o = n.index;
			t(o), e._isPlaceholderPresent() && (o -= 1), e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(o).addClass("selected active").find(":checkbox").prop("checked", !0)
		});
		else {
			var i = this.$nativeSelect.find("option:selected").first(),
				n = this.$nativeSelect.find("option").index(i.get(0));
			i.get(0) && "disabled" !== i.attr("disabled") && t(n)
		}
	}, e.bindResetButtonClick = function(t) {
		var e = this;
		this.$btnReset.on("click", function(i) {
			i.preventDefault(), e.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-novalue]').length || (e._toggleResetButton(!0), e.$materialSelect.val(e.isMultiple ? [] : ""), e.$materialSelect.trigger("close"), e.$mainLabel.removeClass("active"), e.$materialOptionsList.find("li.active, li.selected").removeClass("active").removeClass("selected"), e.$materialOptionsList.find('li[aria-selected="true"]').attr("aria-selected", "false"), e.$materialOptionsList.find('input[type="checkbox"]').prop("checked", !1), t())
		})
	}, e.bindAddNewOptionClick = function() {
		this.$addOptionBtn.on("click", this.renderer.addNewOption.bind(this.renderer))
	}, e.bindMaterialSelectFocus = function() {
		var t = this;
		this.$materialSelect.on("focus", function(e) {
			var i = $(e.target);
			if(i.parent().addClass("active"), $("ul.select-dropdown").not(t.$materialOptionsList.get(0)).is(":visible") && $("input.select-dropdown").trigger("close"), t.$mainLabel.addClass("active"), !t.$materialOptionsList.is(":visible")) {
				var n = i.val(),
					o = t.$materialOptionsList.find("li").filter(function() {
						return $(this).text().toLowerCase() === n.toLowerCase()
					}).get(0);
				t._selectSingleOption(o)
			}
			t.isMultiple || t.$mainLabel.addClass("active")
		})
	}, e.bindMaterialSelectClick = function() {
		var t = this;
		this.$materialSelect.on("mousedown", function(t) {
			3 === t.which && t.preventDefault()
		}), this.$materialSelect.on("click", function(e) {
			e.stopPropagation(), t.$mainLabel.addClass("active"), t._updateDropdownScrollTop()
		})
	}, e.bindMaterialSelectBlur = function() {
		var t = this;
		this.$materialSelect.on("blur", function(e) {
			var i = $(e.target);
			i.parent().removeClass("active"), t.isMultiple || t.isSearchable || i.trigger("close"), t.$materialOptionsList.find("li.selected").removeClass("selected")
		})
	}, e.bindMaterialOptionsListTouchstart = function() {
		this.$materialOptionsList.on("touchstart", function(t) {
			return t.stopPropagation()
		})
	}, e.bindMaterialSelectKeydown = function() {
		var t = this;
		this.$materialSelect.on("keydown", function(e) {
			var i = $(e.target),
				n = e.which === t.keyCodes.tab,
				o = e.which === t.keyCodes.arrowUp,
				a = e.which === t.keyCodes.arrowDown,
				r = e.which === t.keyCodes.enter,
				s = e.which === t.keyCodes.esc,
				l = a && e.altKey,
				c = o && e.altKey,
				u = e.which === t.keyCodes.home,
				d = e.which === t.keyCodes.end,
				h = e.which === t.keyCodes.space,
				p = t.$materialOptionsList.is(":visible");
			switch(!0) {
				case n:
					return t._handleTabKey(i);
				case !p && (r || l):
				case t.isMultiple && !p && (a || o):
					return i.trigger("open"), t._updateDropdownScrollTop();
				case p && (s || c):
					return i.trigger("close");
				case !p && (a || o):
					return t._handleClosedArrowUpDownKey(e.which);
				case p && (a || o):
					return t._handleArrowUpDownKey(e.which);
				case p && u:
					return t._handleHomeKey();
				case p && d:
					return t._handleEndKey();
				case p && (r || h):
					return t._handleEnterKey(i);
				default:
					return t._handleLetterKey(e)
			}
		})
	}, e.bindMaterialSelectDropdownToggle = function() {
		var t = this;
		this.$materialSelect.on("open", function() {
			return t.$materialSelect.attr("aria-expanded", "true")
		}), this.$materialSelect.on("close", function() {
			return t.$materialSelect.attr("aria-expanded", "false")
		})
	}, e.bindToggleAllClick = function(t) {
		var e = this;
		this.$toggleAll.on("click", function(i) {
			var n = $(e.$toggleAll).find('input[type="checkbox"]').first(),
				o = Boolean($(n).prop("checked")),
				a = !o;
			$(n).prop("checked", !o), e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each(function(i, n) {
				var o = $(n),
					r = o.find('input[type="checkbox"]');
				o.attr("aria-selected", a), a && r.is(":checked") || !a && !r.is(":checked") || $(n).is(":hidden") || $(n).is(".disabled") || (r.prop("checked", a), e.$nativeSelect.find("option").eq(i).prop("selected", a), o.toggleClass("active"), e._selectOption(n), t(i))
			}), e.$nativeSelect.data("stop-refresh", !0), e._triggerChangeOnNativeSelect(), e.$nativeSelect.removeData("stop-refresh"), i.stopPropagation()
		})
	}, e.bindMaterialOptionMousedown = function() {
		var t = this;
		this.$materialOptionsList.on("mousedown", function(e) {
			var i = e.target;
			$(".modal-content").find(t.$materialOptionsList).length && i.scrollHeight > i.offsetHeight && e.preventDefault()
		})
	}, e.bindMaterialOptionClick = function(t) {
		var e = this;
		this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(i, n) {
			$(n).on("click", function(o) {
				o.stopPropagation(), e._toggleResetButton(!1);
				var a = $(n);
				if(!a.hasClass("disabled") && !a.hasClass("optgroup")) {
					var r = !0;
					if(e.isMultiple) {
						a.find('input[type="checkbox"]').prop("checked", function(t, e) {
							return !e
						});
						var s = Boolean(e.$nativeSelect.find("optgroup").length),
							l = e._isToggleAllPresent() && !e._isPlaceholderPresent() ? a.index() - 1 : a.index();
						switch(!0) {
							case e.isSearchable && s:
								r = t(l - a.prevAll(".optgroup").length - 1);
								break;
							case e.isSearchable:
								r = t(l - 1);
								break;
							case s:
								r = t(l - a.prevAll(".optgroup").length);
								break;
							default:
								r = t(l)
						}
						e._isToggleAllPresent() && e._updateToggleAllOption(), e.$materialSelect.trigger("focus")
					} else {
						e.$materialOptionsList.find("li").removeClass("active").attr("aria-selected", "false");
						var c = a.children().last()[0].childNodes[0];
						e.$materialSelect.val($(c).text().replace(/  +/g, " ").trim()), e.$materialSelect.trigger("close")
					}
					a.toggleClass("active");
					var u = a.attr("aria-selected");
					a.attr("aria-selected", "true" === u ? "false" : "true"), e._selectSingleOption(a), e.$nativeSelect.data("stop-refresh", !0);
					var d = e._isPlaceholderPresent() ? i + 1 : i;
					e.$nativeSelect.find("option").eq(d).prop("selected", r), e.$nativeSelect.removeData("stop-refresh"), e._triggerChangeOnNativeSelect(), e.$materialSelect.val() && e.$mainLabel.addClass("active"), a.hasClass("li-added") && e.renderer.buildSingleOption(a, "")
				}
			})
		})
	}, e.bindSingleMaterialOptionClick = function() {
		var t = this;
		this.$materialOptionsList.find("li").on("click", function() {
			t.$materialSelect.trigger("close")
		})
	}, e.bindSearchInputKeyup = function() {
		var t = this;
		this.$searchInput.find(".search").on("keyup", function(e) {
			var i = $(e.target),
				n = e.which === t.keyCodes.tab,
				o = e.which === t.keyCodes.esc,
				a = e.which === t.keyCodes.enter,
				r = a && e.shiftKey,
				s = e.which === t.keyCodes.arrowUp;
			if(e.which === t.keyCodes.arrowDown || n || o || s) return t.$materialSelect.focus(), void t._handleArrowUpDownKey(e.which);
			var l = i.closest("ul"),
				c = i.val(),
				u = l.find("li span.filtrable"),
				d = !1;
			if(u.each(function() {
					var t = $(this);
					if("string" == typeof this.outerHTML) {
						var e = this.textContent.toLowerCase();
						e.includes(c.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide(), e.trim() === c.toLowerCase() && (d = !0)
					}
				}), a) return t.isEditable && !d ? void t.renderer.addNewOption() : (r && t._handleEnterWithShiftKey(i), void t.$materialSelect.trigger("open"));
			t.$addOptionBtn[c && t.isEditable && !d ? "show" : "hide"](), 0 !== u.filter(function(t, e) {
				return $(e).is(":visible") && !$(e).parent().hasClass("disabled")
			}).length ? (t.$toggleAll.show(), t.$materialOptionsList.find(t.$noSearchResultsInfo).remove(), t._updateToggleAllOption()) : (t.$toggleAll.hide(), t.$materialOptionsList.append(t.$noSearchResultsInfo)), t.dropdown.updatePosition(t.$materialSelect, t.$materialOptionsList)
		})
	}, e.bindHtmlClick = function() {
		var t = this;
		$("html").on("click", function(e) {
			$(e.target).closest("#select-options-" + t.properties.id).length || $(e.target).hasClass("mdb-select") || !$("#select-options-" + t.properties.id).hasClass("active") || (t.$materialSelect.trigger("close"), t.$materialSelect.val() || t.options.placeholder || t.$mainLabel.removeClass("active")), t.isSearchable && null !== t.$searchInput && t.$materialOptionsList.hasClass("active") && t.$materialOptionsList.find(".search-wrap input.search").focus()
		})
	}, e.bindMobileDevicesMousedown = function() {
		$("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", function(e) {
			t.isMobileDevice && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
		})
	}, e.bindSaveBtnClick = function() {
		var t = this;
		this.$btnSave.on("click", function() {
			t.$materialSelect.trigger("close")
		})
	}, e._toggleResetButton = function(t) {
		var e = this.$nativeSelect.data("stop-refresh");
		this.$nativeSelect.attr("data-stop-refresh", "true"), t ? this.$nativeSelect.prepend('<option value="" selected disabled data-mdb-novalue></option>') : this.$nativeSelect.find("option[data-mdb-novalue]").remove(), this.$nativeSelect.attr("data-stop-refresh", e), this.$btnReset[t ? "hide" : "show"]()
	}, e._isToggleAllPresent = function() {
		return this.$materialOptionsList.find(this.$toggleAll).length
	}, e._isPlaceholderPresent = function() {
		return !(!this.$nativeSelect.attr("data-placeholder") && !this.options.placeholder)
	}, e._updateToggleAllOption = function() {
		var t = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
			e = t.filter(":checked"),
			i = this.$toggleAll.find("[type=checkbox]").is(":checked");
		e.length !== t.length || i ? e.length < t.length && i && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
	}, e._handleTabKey = function(t) {
		this._handleEscKey(t)
	}, e._handleEnterWithShiftKey = function(t) {
		this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(t)
	}, e._handleEnterKey = function(t) {
		this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this._removeKeyboardActiveClass(), this.isMultiple || t.trigger("close")
	}, e._handleArrowUpDownKey = function(t) {
		var e = this._getArrowMatchedActiveOptions(t, !1),
			i = e.$matchedMaterialOption,
			n = e.$activeOption;
		this._selectSingleOption(i), this._removeKeyboardActiveClass(), i.find("input").is(":checked") || i.removeClass(this.options.keyboardActiveClass), n.hasClass("selected") || n.find("input").is(":checked") || !this.isMultiple || n.removeClass("active", this.options.keyboardActiveClass), i.addClass(this.options.keyboardActiveClass), i.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + i.position().top)
	}, e._handleClosedArrowUpDownKey = function(t) {
		var e = this._getArrowMatchedActiveOptions(t, !0).$matchedMaterialOption;
		e.trigger("click").addClass("active"), this._updateDropdownScrollTop(), this._selectSingleOption(e)
	}, e._getArrowMatchedActiveOptions = function(t, e) {
		var i = this,
			n = e ? "" : ":visible",
			o = this.$materialOptionsList.find("li" + n).not(".disabled, .select-toggle-all"),
			a = o.first(),
			r = o.last(),
			s = this.$materialOptionsList.find("li.selected").length > 0,
			l = null,
			c = null;
		if(t === this.keyCodes.arrowUp) {
			var u = s ? this.$materialOptionsList.find("li.selected").first() : r,
				d = u.prev("li" + n + ":not(.disabled, .select-toggle-all)");
			c = d, o.each(function(t, e) {
				$(e).hasClass(i.options.keyboardActiveClass) && (d = o.eq(t - 1), c = o.eq(t))
			}), l = u.is(a) || !s ? u : d
		} else {
			var h = s ? this.$materialOptionsList.find("li.selected").first() : a,
				p = h.next("li" + n + ":not(.disabled, .select-toggle-all)");
			c = p, o.each(function(t, e) {
				$(e).hasClass(i.options.keyboardActiveClass) && (p = o.eq(t + 1), c = o.eq(t))
			}), l = h.is(r) || !s ? h : p
		}
		return {
			$matchedMaterialOption: l,
			$activeOption: c
		}
	}, e._handleHomeKey = function() {
		this._selectBoundaryOption("first")
	}, e._handleEndKey = function() {
		this._selectBoundaryOption("last")
	}, e._selectBoundaryOption = function(t) {
		void 0 === t && (t = "");
		var e = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all")[t]();
		this._selectSingleOption(e), this._removeKeyboardActiveClass(), e.find("input").is(":checked") || e.removeClass(this.options.keyboardActiveClass), e.addClass(this.options.keyboardActiveClass), e.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + e.position().top)
	}, e._handleEscKey = function(t) {
		this._removeKeyboardActiveClass(), t.trigger("close")
	}, e._handleLetterKey = function(t) {
		var e = this;
		if(this._removeKeyboardActiveClass(), this.isSearchable) {
			var i = t.which > 46 && t.which < 91,
				n = t.which > 93 && t.which < 106,
				o = 8 === t.which;
			(i || n) && this.$searchInput.find("input").focus(), o && this.$searchInput.find("input").val("").focus()
		} else {
			var a = "",
				r = String.fromCharCode(t.which).toLowerCase(),
				s = Object.keys(this.keyCodes).map(function(t) {
					return e.keyCodes[t]
				});
			if(r && -1 === s.indexOf(t.which)) {
				a += r;
				var l = this.$materialOptionsList.find("li").filter(function(t, e) {
					return $(e).text().toLowerCase().includes(a)
				}).first();
				this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), l.addClass("active"), this._selectSingleOption(l), this._updateDropdownScrollTop()
			}
		}
	}, e._removeKeyboardActiveClass = function() {
		this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)
	}, e._triggerChangeOnNativeSelect = function() {
		var t = new KeyboardEvent("change", {
			bubbles: !0,
			cancelable: !0
		});
		this.$nativeSelect.get(0).dispatchEvent(t)
	}, e._selectSingleOption = function(t) {
		this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(t)
	}, e._updateDropdownScrollTop = function() {
		var t = this.$materialOptionsList.find("li.active").not(".disabled").first();
		t.length ? this.$materialOptionsList.scrollTo(t) : this.$materialOptionsList.scrollTop(0)
	}, e._selectOption = function(t) {
		$(t).addClass("selected")
	}, e._copyOptions = function(t) {
		return $.extend({}, t)
	}, e._jQueryFallback = function() {
		for(var t = null, e = 0; e < arguments.length; e++)
			if((t = e < 0 || arguments.length <= e ? void 0 : arguments[e]).length) return t;
		return t
	}, _createClass(t, [{
		key: "isMultiple",
		get: function() {
			return this.properties.isMultiple
		}
	}, {
		key: "isSearchable",
		get: function() {
			return this.properties.isSearchable
		}
	}, {
		key: "isRequired",
		get: function() {
			return this.properties.isRequired
		}
	}, {
		key: "isEditable",
		get: function() {
			return this.properties.isEditable
		}
	}, {
		key: "isDisabled",
		get: function() {
			return this.$nativeSelect.is(":disabled")
		}
	}], [{
		key: "isMobileDevice",
		get: function() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		}
	}]), t
}();

function _defineProperties(t, e) {
	for(var i = 0; i < e.length; i++) {
		var n = e[i];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	}
}

function _createClass(t, e, i) {
	return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}
jQuery(function(t) {
		var e, i = function() {
			function e(t, i) {
				void 0 === i && (i = {}), this.options = {
					destroy: this.fallback().or(i.destroy).or(!1).value(),
					validate: this.fallback().or(t.attr("data-validate")).or(i.validate).or(!1).value(),
					selectId: this.fallback().or(t.attr("data-select-id")).or(i.selectId).or(null).value(),
					defaultMaterialInput: this.fallback().or(t.attr("data-default-material-input")).or(i.defaultMaterialInput).or(!1).value(),
					fasClasses: this.fallback().or(t.attr("data-fas-classes")).or(i.fasClasses).or("").value(),
					farClasses: this.fallback().or(t.attr("data-far-classes")).or(i.farClasses).or("").value(),
					fabClasses: this.fallback().or(t.attr("data-fab-classes")).or(i.fabClasses).or("").value(),
					copyClassesOption: this.fallback().or(t.attr("data-copy-classes-option")).or(i.copyClassesOption).or(!1).value(),
					labels: {
						selectAll: this.fallback().or(t.attr("data-label-select-all")).or((i.labels || {}).selectAll).or("Select all").value(),
						optionsSelected: this.fallback().or(t.attr("data-label-options-selected")).or((i.labels || {}).optionsSelected).or("options selected").value(),
						validFeedback: this.fallback().or(t.attr("data-label-valid-feedback")).or((i.labels || {}).validFeedback).or("Ok").value(),
						invalidFeedback: this.fallback().or(t.attr("data-label-invalid-feedback")).or((i.labels || {}).invalidFeedback).or("Incorrect value").value(),
						noSearchResults: this.fallback().or(t.attr("data-label-no-search-results")).or((i.labels || {}).noSearchResults).or("No results").value()
					},
					keyboardActiveClass: this.fallback().or(t.attr("data-keyboard-active-class")).or(i.keyboardActiveClass).or("heavy-rain-gradient").value(),
					placeholder: this.fallback().or(t.attr("data-placeholder")).or(i.placeholder).or(null).value(),
					visibleOptions: this.fallback().or(t.attr("data-visible-options")).or(i.visibleOptions).or(5).value(),
					maxSelectedOptions: this.fallback().or(t.attr("data-max-selected-options")).or(i.maxSelectedOptions).or(5).value(),
					showResetButton: this.fallback().or(t.attr("data-show-reset-button")).or(i.showResetButton).or(!1).value()
				}, this.uuid = t.attr("id") || this.options.selectId || this._randomUUID(), this.view = new MaterialSelectView(t, {
					options: this.options,
					properties: {
						id: this.uuid
					}
				}), this.selectedOptionsIndexes = [], e.mutationObservers = []
			}
			e.clearMutationObservers = function() {
				e.mutationObservers.forEach(function(t) {
					t.disconnect(), t.customStatus = "stopped"
				})
			}, e.mdbSelectAutoInit = function() {
				t(".mdb-select.mdb-select-autoinit").materialSelect()
			};
			var i = e.prototype;
			return i.init = function() {
				var t = this;
				this.options.destroy ? this.view.destroy() : (this.isInitialized && this.view.destroy(), this.view.render(), this.view.selectPreselectedOptions(function(e) {
					return t._toggleSelectedValue(e)
				}), this.bindEvents())
			}, i.bindEvents = function() {
				var t = this;
				this.bindMutationObserverChange(), this.view.isEditable && this.view.isSearchable && this.view.bindResetButtonClick(function() {
					return t._resetSelection()
				}), this.view.bindAddNewOptionClick(), this.view.bindMaterialSelectFocus(), this.view.bindMaterialSelectClick(), this.view.bindMaterialSelectBlur(), this.view.bindMaterialOptionsListTouchstart(), this.view.bindMaterialSelectKeydown(), this.view.bindMaterialSelectDropdownToggle(), this.view.bindToggleAllClick(function(e) {
					return t._toggleSelectedValue(e)
				}), this.view.bindMaterialOptionMousedown(), this.view.bindMaterialOptionClick(function(e) {
					return t._toggleSelectedValue(e)
				}), !this.view.isMultiple && this.view.isSearchable && this.view.bindSingleMaterialOptionClick(), this.view.isSearchable && this.view.bindSearchInputKeyup(), this.view.bindHtmlClick(), this.view.bindMobileDevicesMousedown(), this.view.bindSaveBtnClick()
			}, i.bindMutationObserverChange = function() {
				var t = new MutationObserver(this._onMutationObserverChange.bind(this));
				t.observe(this.view.$nativeSelect.get(0), {
					attributes: !0,
					childList: !0,
					characterData: !0,
					subtree: !0
				}), t.customId = this.uuid, t.customStatus = "observing", e.clearMutationObservers(), e.mutationObservers.push(t)
			}, i._onMutationObserverChange = function(e) {
				e.forEach(function(e) {
					var i = t(e.target).closest("select");
					!0 !== i.data("stop-refresh") && ("childList" === e.type || "attributes" === e.type && t(e.target).is("option")) && (i.materialSelect({
						destroy: !0
					}), i.materialSelect())
				})
			}, i._resetSelection = function() {
				this.selectedOptionsIndexes = [], this.view.$nativeSelect.find("option").prop("selected", !1)
			}, i._toggleSelectedValue = function(t) {
				var e = this.selectedOptionsIndexes.indexOf(t),
					i = -1 !== e;
				return i ? this.selectedOptionsIndexes.splice(e, 1) : this.selectedOptionsIndexes.push(t), this.view.$nativeSelect.find("option").eq(t).prop("selected", !i), this._setValueToMaterialSelect(), !i
			}, i._setValueToMaterialSelect = function() {
				var t = this,
					e = "",
					i = this.selectedOptionsIndexes.length;
				this.selectedOptionsIndexes.forEach(function(i) {
					return e += ", " + t.view.$nativeSelect.find("option").eq(i).text().replace(/  +/g, " ").trim()
				}), 0 === (e = this.options.maxSelectedOptions >= 0 && i > this.options.maxSelectedOptions ? i + " " + this.options.labels.optionsSelected : e.substring(2)).length && (e = this.view.$nativeSelect.find("option:disabled").eq(0).text()), this.view.$nativeSelect.siblings(this.options.defaultMaterialInput ? "input.multi-bs-select" : "input.select-dropdown").val(e)
			}, i._randomUUID = function() {
				var t = (new Date).getTime();
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var i = (t + 16 * Math.random()) % 16 | 0;
					return t = Math.floor(t / 16), ("x" === e ? i : 3 & i | 8).toString(16)
				})
			}, i.fallback = function() {
				return {
					_value: void 0,
					or: function(t) {
						return void 0 !== t && void 0 === this._value && (this._value = t), this
					},
					value: function() {
						return this._value
					}
				}
			}, _createClass(e, [{
				key: "isInitialized",
				get: function() {
					return Boolean(this.view.$nativeSelect.data("select-id")) && this.view.$nativeSelect.hasClass("initialized")
				}
			}]), e
		}();
		t.fn.materialSelect = function(e) {
			t(this).not(".browser-default").not(".custom-select").each(function() {
				new i(t(this), e).init()
			})
		}, e = t.fn.val, t.fn.val = function(t) {
			if(!arguments.length) return e.call(this);
			if(!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
				i.clearMutationObservers(), this.materialSelect({
					destroy: !0
				});
				var n = e.call(this, t);
				return this.materialSelect(), n
			}
			return e.call(this, t)
		}, i.mdbSelectAutoInit()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : window.Picker = t(jQuery)
	}(function(t) {
		var e = t(window),
			i = t(document),
			n = t(document.documentElement),
			o = null != document.documentElement.style.transition;

		function a(e, n, c, d) {
			if(!e) return a;
			var h = !1,
				p = {
					id: e.id || "P" + Math.abs(~~(Math.random() * new Date)),
					handlingOpen: !1
				},
				f = c ? t.extend(!0, {}, c.defaults, d) : d || {},
				m = t.extend({}, a.klasses(), f.klass),
				v = t(e),
				g = 2,
				b = function() {
					return this.start()
				},
				y = b.prototype = {
					constructor: b,
					$node: v,
					start: function() {
						return p && p.start ? y : (p.methods = {}, p.start = !0, p.open = !1, p.type = e.type, e.autofocus = e == u(), e.readOnly = !f.editable, e.id = e.id || p.id, "text" != e.type && (e.type = "text"), y.component = new c(y, f), y.$root = t('<div class="' + m.picker + '" id="' + e.id + '_root" />'), l(y.$root[0], "hidden", !0), y.$holder = t(x()).appendTo(y.$root), w(), f.formatSubmit && function() {
							var i;
							!0 === f.hiddenName ? (i = e.name, e.name = "") : i = (i = ["string" == typeof f.hiddenPrefix ? f.hiddenPrefix : "", "string" == typeof f.hiddenSuffix ? f.hiddenSuffix : "_submit"])[0] + e.name + i[1];
							y._hidden = t('<input type=hidden name="' + i + '"' + (v.data("value") || e.value ? ' value="' + y.get("select", f.formatSubmit) + '"' : "") + ">")[0], v.on("change." + p.id, function() {
								y._hidden.value = e.value ? y.get("select", f.formatSubmit) : ""
							})
						}(), function() {
							v.data(n, y).addClass(m.input).val(v.data("value") ? y.get("select", f.format) : e.value).on("focus." + p.id + " click." + p.id, (i = function(t) {
								t.preventDefault(), y.open()
							}, o = 100, function() {
								var t = this,
									e = arguments,
									n = a && !r;
								clearTimeout(r), r = setTimeout(function() {
									r = null, a || i.apply(t, e)
								}, o), n && i.apply(t, e)
							})).on("mousedown", function() {
								p.handlingOpen = !0;
								var e = function() {
									setTimeout(function() {
										t(document).off("mouseup", e), p.handlingOpen = !1
									}, 0)
								};
								t(document).on("mouseup", e)
							}), f.editable || v.on("keydown." + p.id, C);
							var i, o, a, r;
							l(e, {
								haspopup: !0,
								expanded: !1,
								readonly: !1,
								owns: e.id + "_root"
							})
						}(), f.containerHidden ? t(f.containerHidden).append(y._hidden) : v.after(y._hidden), f.container ? t(f.container).append(y.$root) : v.after(y.$root), y.on({
							start: y.component.onStart,
							render: y.component.onRender,
							stop: y.component.onStop,
							open: y.component.onOpen,
							close: y.component.onClose,
							set: y.component.onSet
						}).on({
							start: f.onStart,
							render: f.onRender,
							stop: f.onStop,
							open: f.onOpen,
							close: f.onClose,
							set: f.onSet
						}), h = function(t) {
							var e;
							t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position);
							return "fixed" == e
						}(y.$holder[0]), e.autofocus && y.open(), y.trigger("start").trigger("render"))
					},
					render: function(e) {
						return e ? (y.$holder = t(x()), w(), y.$root.html(y.$holder)) : y.$root.find("." + m.box).html(y.component.nodes(p.open)), y.trigger("render")
					},
					stop: function() {
						return p.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), v.removeClass(m.input).removeData(n), setTimeout(function() {
							v.off("." + p.id)
						}, 0), e.type = p.type, e.readOnly = !1, y.trigger("stop"), p.methods = {}, p.start = !1, y) : y
					},
					open: function(n) {
						return g++, p.open ? y : g < 4 && f.editable ? y : (setTimeout(function() {
							y.$root.addClass(m.opened), l(y.$root[0], "hidden", !1)
						}, 0), !1 !== n && (p.open = !0, h && t("body").css("overflow", "hidden").css("padding-right", "+=" + r()), h && o ? y.$holder.find("." + m.frame).one("transitionend", function() {
							y.$holder.eq(0).focus()
						}) : setTimeout(function() {
							y.$holder.eq(0).focus()
						}, 0), i.on("click." + p.id + " focusin." + p.id, function(t) {
							if(!p.handlingOpen) {
								var i = s(t, e);
								t.isSimulated || i == e || i == document || 3 == t.which || y.close(i === y.$holder[0])
							}
						}).on("keydown." + p.id, function(i) {
							var n = i.keyCode,
								o = y.component.key[n],
								r = s(i, e);
							27 == n ? y.close(!0) : r != y.$holder[0] || !o && 13 != n ? t.contains(y.$root[0], r) && 13 == n && (i.preventDefault(), r.click()) : (i.preventDefault(), o ? a._.trigger(y.component.key.go, y, [a._.trigger(o)]) : y.$root.find("." + m.highlighted).hasClass(m.disabled) || (y.set("select", y.component.item.highlight), f.closeOnSelect && y.close(!0)))
						})), y.trigger("open"))
					},
					close: function(n) {
						return g = 0, p.open ? (n && (f.editable ? e.click() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function() {
							y.$holder.on("focus.toOpen", k)
						}, 0))), v.removeClass(m.active), l(e, "expanded", !1), setTimeout(function() {
							y.$root.removeClass(m.opened + " " + m.focused), l(y.$root[0], "hidden", !0)
						}, 0), h && t("body").css("overflow", "").css("padding-right", "-=" + r()), document.activeElement.blur(), i.off("." + p.id), p.open = !1, y.trigger("close")) : y
					},
					clear: function(t) {
						return document.activeElement.blur(), y.set("clear", null, t)
					},
					set: function(e, i, n) {
						var o, a, r = t.isPlainObject(e),
							s = r ? e : {};
						if(n = r && t.isPlainObject(i) ? i : n || {}, e) {
							for(o in r || (s[e] = i), s) a = s[o], o in y.component.item && (void 0 === a && (a = null), y.component.set(o, a, n)), "select" != o && "clear" != o || !f.updateInput || v.val("clear" == o ? "" : y.get(o, f.format)).trigger("change");
							y.render()
						}
						return n.muted ? y : y.trigger("set", s)
					},
					get: function(t, i) {
						if(null != p[t = t || "value"]) return p[t];
						if("valueSubmit" == t) {
							if(y._hidden) return y._hidden.value;
							t = "value"
						}
						if("value" == t) return e.value;
						if(t in y.component.item) {
							if("string" == typeof i) {
								var n = y.component.get(t);
								return n ? a._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
							}
							return y.component.get(t)
						}
					},
					on: function(e, i, n) {
						var o, a, r = t.isPlainObject(e),
							s = r ? e : {};
						if(e)
							for(o in r || (s[e] = i), s) a = s[o], n && (o = "_" + o), p.methods[o] = p.methods[o] || [], p.methods[o].push(a);
						return y
					},
					off: function() {
						var t, e, i = arguments;
						for(t = 0, namesCount = i.length; t < namesCount; t += 1)(e = i[t]) in p.methods && delete p.methods[e];
						return y
					},
					trigger: function(t, e) {
						var i = function(t) {
							var i = p.methods[t];
							i && i.map(function(t) {
								a._.trigger(t, y, [e])
							})
						};
						return i("_" + t), i(t), y
					}
				};

			function x() {
				return a._.node("div", a._.node("div", a._.node("div", a._.node("div", y.component.nodes(p.open), m.box), m.wrap), m.frame), m.holder, 'tabindex="-1"')
			}

			function w() {
				y.$holder.on({
					keydown: C,
					"focus.toOpen": k,
					blur: function() {
						v.removeClass(m.target)
					},
					focusin: function(t) {
						y.$root.removeClass(m.focused), t.stopPropagation()
					},
					"mousedown click": function(i) {
						var n = s(i, e);
						n != y.$holder[0] && (i.stopPropagation(), "mousedown" != i.type || t(n).is("input, select, textarea, button, option") || (i.preventDefault(), y.$holder.eq(0).focus()))
					}
				}).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
					var e = t(this),
						i = e.data(),
						n = e.hasClass(m.navDisabled) || e.hasClass(m.disabled),
						o = u();
					o = o && (o.type || o.href ? o : null), (n || o && !t.contains(y.$root[0], o)) && y.$holder.eq(0).focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
						nav: i.nav
					}) : !n && "pick" in i ? (y.set("select", i.pick), f.closeOnSelect && y.close(!0)) : i.clear ? (y.clear(), f.closeOnClear && y.close(!0)) : i.close && y.close(!0)
				})
			}

			function k(t) {
				t.stopPropagation(), v.addClass(m.target), y.$root.addClass(m.focused), y.open()
			}

			function C(t) {
				var e = t.keyCode,
					i = /^(8|46)$/.test(e);
				if(27 == e) return y.close(!0), !1;
				(32 == e || i || !p.open && y.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? y.clear().close() : y.open())
			}
			return new b
		}

		function r() {
			if(n.height() <= e.height()) return 0;
			var i = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
				o = i[0].offsetWidth;
			i.css("overflow", "scroll");
			var a = t('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
			return i.remove(), o - a
		}

		function s(t, e) {
			var i = [];
			return t.path && (i = t.path), t.originalEvent && t.originalEvent.path && (i = t.originalEvent.path), i && i.length > 0 ? e && i.indexOf(e) >= 0 ? e : i[0] : t.target
		}

		function l(e, i, n) {
			if(t.isPlainObject(i))
				for(var o in i) c(e, o, i[o]);
			else c(e, i, n)
		}

		function c(t, e, i) {
			t.setAttribute(("role" == e ? "" : "aria-") + e, i)
		}

		function u() {
			try {
				return document.activeElement
			} catch(t) {}
		}
		return a.klasses = function(t) {
			return {
				picker: t = t || "picker",
				opened: t + "--opened",
				focused: t + "--focused",
				input: t + "__input",
				active: t + "__input--active",
				target: t + "__input--target",
				holder: t + "__holder",
				frame: t + "__frame",
				wrap: t + "__wrap",
				box: t + "__box"
			}
		}, a._ = {
			group: function(t) {
				for(var e, i = "", n = a._.trigger(t.min, t); n <= a._.trigger(t.max, t, [n]); n += t.i) e = a._.trigger(t.item, t, [n]), i += a._.node(t.node, e[0], e[1], e[2]);
				return i
			},
			node: function(e, i, n, o) {
				return i ? "<" + e + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + (i = t.isArray(i) ? i.join("") : i) + "</" + e + ">" : ""
			},
			lead: function(t) {
				return(t < 10 ? "0" : "") + t
			},
			trigger: function(t, e, i) {
				return "function" == typeof t ? t.apply(e, i || []) : t
			},
			digits: function(t) {
				return /\d/.test(t[1]) ? 2 : 1
			},
			isDate: function(t) {
				return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
			},
			isInteger: function(t) {
				return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
			},
			ariaAttr: function(e, i) {
				t.isPlainObject(e) || (e = {
					attribute: i
				});
				for(var n in i = "", e) {
					var o = ("role" == n ? "" : "aria-") + n,
						a = e[n];
					i += null == a ? "" : o + '="' + e[n] + '"'
				}
				return i
			}
		}, a.extend = function(e, i) {
			t.fn[e] = function(n, o) {
				var r = this.data(e);
				return "picker" == n ? r : r && "string" == typeof n ? a._.trigger(r[n], r, [o]) : this.each(function() {
					t(this).data(e) || new a(this, e, i, n)
				})
			}, t.fn[e].defaults = i.defaults
		}, a
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
	}(function(t, e) {
		var i, n = t._;

		function o(t, e) {
			var i, n = this,
				o = t.$node[0],
				a = o.value,
				r = t.$node.data("value"),
				s = r || a,
				l = r ? e.formatSubmit : e.format,
				c = function() {
					return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
				};
			n.settings = e, n.$node = t.$node, n.queue = {
				min: "measure create",
				max: "measure create",
				now: "now create",
				select: "parse create validate",
				highlight: "parse navigate create validate",
				view: "parse create validate viewset",
				disable: "deactivate",
				enable: "activate"
			}, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", e.min).set("max", e.max).set("now"), s ? n.set("select", s, {
				format: l,
				defaultValue: !0
			}) : n.set("select", null).set("highlight", n.item.now), n.key = {
				40: 7,
				38: -7,
				39: function() {
					return c() ? -1 : 1
				},
				37: function() {
					return c() ? 1 : -1
				},
				go: function(t) {
					var e = n.item.highlight,
						i = new Date(e.year, e.month, e.date + t);
					n.set("highlight", i, {
						interval: t
					}), this.render()
				}
			}, t.on("render", function() {
				t.$root.find("." + e.klass.selectMonth).on("change", function() {
					var i = this.value;
					i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
				}), t.$root.find("." + e.klass.selectYear).on("change", function() {
					var i = this.value;
					i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
				})
			}, 1).on("open", function() {
				var i = "";
				n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
			}, 1).on("close", function() {
				t.$root.find("button, select").attr("disabled", !0)
			}, 1)
		}
		o.prototype.set = function(t, e, i) {
			var n = this,
				o = n.item;
			return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function(o) {
				return e = n[o](t, e, i)
			}).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
		}, o.prototype.get = function(t) {
			return this.item[t]
		}, o.prototype.create = function(t, i, o) {
			var a;
			return(i = void 0 === i ? t : i) == -1 / 0 || i == 1 / 0 ? a = i : e.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : this.create().obj) : i = n.isInteger(i) || n.isDate(i) ? this.normalize(new Date(i), o) : this.now(t, i, o), {
				year: a || i.getFullYear(),
				month: a || i.getMonth(),
				date: a || i.getDate(),
				day: a || i.getDay(),
				obj: a || i,
				pick: a || i.getTime()
			}
		}, o.prototype.createRange = function(t, i) {
			var o = this,
				a = function(t) {
					return !0 === t || e.isArray(t) || n.isDate(t) ? o.create(t) : t
				};
			return n.isInteger(t) || (t = a(t)), n.isInteger(i) || (i = a(i)), n.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : n.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
				from: a(t),
				to: a(i)
			}
		}, o.prototype.withinRange = function(t, e) {
			return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
		}, o.prototype.overlapRanges = function(t, e) {
			return t = this.createRange(t.from, t.to), e = this.createRange(e.from, e.to), this.withinRange(t, e.from) || this.withinRange(t, e.to) || this.withinRange(e, t.from) || this.withinRange(e, t.to)
		}, o.prototype.now = function(t, e, i) {
			return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
		}, o.prototype.navigate = function(t, i, n) {
			var o, a, r, s, l = e.isArray(i),
				c = e.isPlainObject(i),
				u = this.item.view;
			if(l || c) {
				for(c ? (a = i.year, r = i.month, s = i.date) : (a = +i[0], r = +i[1], s = +i[2]), n && n.nav && u && u.month !== r && (a = u.year, r = u.month), a = (o = new Date(a, r + (n && n.nav ? n.nav : 0), 1)).getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r;) s -= 1;
				i = [a, r, s]
			}
			return i
		}, o.prototype.normalize = function(t) {
			return t.setHours(0, 0, 0, 0), t
		}, o.prototype.measure = function(t, e) {
			return n.isInteger(e) ? e = this.now(t, e, {
				rel: e
			}) : e ? "string" == typeof e && (e = this.parse(t, e)) : e = "min" == t ? -1 / 0 : 1 / 0, e
		}, o.prototype.viewset = function(t, e) {
			return this.create([e.year, e.month, 1])
		}, o.prototype.validate = function(t, i, o) {
			var a, r, s, l, c = this,
				u = i,
				d = o && o.interval ? o.interval : 1,
				h = -1 === c.item.enable,
				p = c.item.min,
				f = c.item.max,
				m = h && c.item.disable.filter(function(t) {
					if(e.isArray(t)) {
						var o = c.create(t).pick;
						o < i.pick ? a = !0 : o > i.pick && (r = !0)
					}
					return n.isInteger(t)
				}).length;
			if((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(i) || h && c.disabled(i) && (m || a || r) || !h && (i.pick <= p.pick || i.pick >= f.pick)))
				for(h && !m && (!r && d > 0 || !a && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= p.pick ? (s = !0, d = 1, i = c.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, d = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
			return i
		}, o.prototype.disabled = function(t) {
			var i = this,
				o = i.item.disable.filter(function(o) {
					return n.isInteger(o) ? t.day === (i.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || n.isDate(o) ? t.pick === i.create(o).pick : e.isPlainObject(o) ? i.withinRange(o, t) : void 0
				});
			return o = o.length && !o.filter(function(t) {
				return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
			}).length, -1 === i.item.enable ? !o : o || t.pick < i.item.min.pick || t.pick > i.item.max.pick
		}, o.prototype.parse = function(t, e, i) {
			var o = this,
				a = {};
			return e && "string" == typeof e ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function(t) {
				var i = o.formats[t],
					r = i ? n.trigger(i, o, [e, a]) : t.replace(/^!/, "").length;
				i && (a[t] = e.substr(0, r)), e = e.substr(r)
			}), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e
		}, o.prototype.formats = function() {
			function t(t, e, i) {
				var n = t.match(/[^\x00-\x7F]+|\w+/)[0];
				return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
			}

			function e(t) {
				return t.match(/\w+/)[0].length
			}
			return {
				d: function(t, e) {
					return t ? n.digits(t) : e.date
				},
				dd: function(t, e) {
					return t ? 2 : n.lead(e.date)
				},
				ddd: function(t, i) {
					return t ? e(t) : this.settings.weekdaysShort[i.day]
				},
				dddd: function(t, i) {
					return t ? e(t) : this.settings.weekdaysFull[i.day]
				},
				m: function(t, e) {
					return t ? n.digits(t) : e.month + 1
				},
				mm: function(t, e) {
					return t ? 2 : n.lead(e.month + 1)
				},
				mmm: function(e, i) {
					var n = this.settings.monthsShort;
					return e ? t(e, n, i) : n[i.month]
				},
				mmmm: function(e, i) {
					var n = this.settings.monthsFull;
					return e ? t(e, n, i) : n[i.month]
				},
				yy: function(t, e) {
					return t ? 2 : ("" + e.year).slice(2)
				},
				yyyy: function(t, e) {
					return t ? 4 : e.year
				},
				toArray: function(t) {
					return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
				},
				toString: function(t, e) {
					var i = this;
					return i.formats.toArray(t).map(function(t) {
						return n.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
					}).join("")
				}
			}
		}(), o.prototype.isDateExact = function(t, i) {
			return n.isInteger(t) && n.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (n.isDate(t) || e.isArray(t)) && (n.isDate(i) || e.isArray(i)) ? this.create(t).pick === this.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && (this.isDateExact(t.from, i.from) && this.isDateExact(t.to, i.to))
		}, o.prototype.isDateOverlap = function(t, i) {
			var o = this.settings.firstDay ? 1 : 0;
			return n.isInteger(t) && (n.isDate(i) || e.isArray(i)) ? (t = t % 7 + o) === this.create(i).day + 1 : n.isInteger(i) && (n.isDate(t) || e.isArray(t)) ? (i = i % 7 + o) === this.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && this.overlapRanges(t, i)
		}, o.prototype.flipEnable = function(t) {
			var e = this.item;
			e.enable = t || (-1 == e.enable ? 1 : -1)
		}, o.prototype.deactivate = function(t, i) {
			var o = this,
				a = o.item.disable.slice(0);
			return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), a = []) : !0 === i ? (o.flipEnable(-1), a = []) : i.map(function(t) {
				for(var i, r = 0; r < a.length; r += 1)
					if(o.isDateExact(t, a[r])) {
						i = !0;
						break
					}
				i || (n.isInteger(t) || n.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t)
			}), a
		}, o.prototype.activate = function(t, i) {
			var o = this,
				a = o.item.disable,
				r = a.length;
			return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), a = []) : !1 === i ? (o.flipEnable(-1), a = []) : i.map(function(t) {
				var i, s, l, c;
				for(l = 0; l < r; l += 1) {
					if(s = a[l], o.isDateExact(s, t)) {
						i = a[l] = null, c = !0;
						break
					}
					if(o.isDateOverlap(s, t)) {
						e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t)[3] || i.push("inverted") : n.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
						break
					}
				}
				if(i)
					for(l = 0; l < r; l += 1)
						if(o.isDateExact(a[l], t)) {
							a[l] = null;
							break
						}
				if(c)
					for(l = 0; l < r; l += 1)
						if(o.isDateOverlap(a[l], t)) {
							a[l] = null;
							break
						}
				i && a.push(i)
			}), a.filter(function(t) {
				return null != t
			})
		}, o.prototype.nodes = function(t) {
			var e, i, o = this,
				a = o.settings,
				r = o.item,
				s = r.now,
				l = r.select,
				c = r.highlight,
				u = r.view,
				d = r.disable,
				h = r.min,
				p = r.max,
				f = (e = (a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), i = a.weekdaysFull.slice(0), a.firstDay && (e.push(e.shift()), i.push(i.shift())), n.node("thead", n.node("tr", n.group({
					min: 0,
					max: 6,
					i: 1,
					node: "th",
					item: function(t) {
						return [e[t], a.klass.weekdays, 'scope=col title="' + i[t] + '"']
					}
				})))),
				m = function(t) {
					return n.node("button", " ", a.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= p.year && u.month >= p.month || !t && u.year <= h.year && u.month <= h.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + n.ariaAttr({
						role: "button",
						controls: o.$node[0].id + "_table"
					}) + ' title="' + (t ? a.labelMonthNext : a.labelMonthPrev) + '"')
				},
				v = function() {
					var e = a.showMonthsShort ? a.monthsShort : a.monthsFull;
					return a.selectMonths ? n.node("select", n.group({
						min: 0,
						max: 11,
						i: 1,
						node: "option",
						item: function(t) {
							return [e[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == h.year && t < h.month || u.year == p.year && t > p.month ? " disabled" : "")]
						}
					}), a.klass.selectMonth, (t ? "" : "disabled") + " " + n.ariaAttr({
						controls: o.$node[0].id + "_table"
					}) + ' title="' + a.labelMonthSelect + '"') : n.node("div", e[u.month], a.klass.month)
				},
				g = function() {
					var e = u.year,
						i = !0 === a.selectYears ? 5 : ~~(a.selectYears / 2);
					if(i) {
						var r = h.year,
							s = p.year,
							l = e - i,
							c = e + i;
						if(r > l && (c += r - l, l = r), s < c) {
							var d = l - r,
								f = c - s;
							l -= d > f ? f : d, c = s
						}
						return n.node("select", n.group({
							min: l,
							max: c,
							i: 1,
							node: "option",
							item: function(t) {
								return [t, 0, "value=" + t + (e == t ? " selected" : "")]
							}
						}), a.klass.selectYear, (t ? "" : "disabled") + " " + n.ariaAttr({
							controls: o.$node[0].id + "_table"
						}) + ' title="' + a.labelYearSelect + '"')
					}
					return n.node("div", e, a.klass.year)
				};
			return n.node("div", (a.selectYears ? g() + v() : v() + g()) + m() + m(1), a.klass.header) + n.node("table", f + n.node("tbody", n.group({
				min: 0,
				max: 5,
				i: 1,
				node: "tr",
				item: function(t) {
					var e = a.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
					return [n.group({
						min: 7 * t - u.day + e + 1,
						max: function() {
							return this.min + 7 - 1
						},
						i: 1,
						node: "td",
						item: function(t) {
							t = o.create([u.year, u.month, t + (a.firstDay ? 1 : 0)]);
							var e, i = l && l.pick == t.pick,
								r = c && c.pick == t.pick,
								f = d && o.disabled(t) || t.pick < h.pick || t.pick > p.pick,
								m = n.trigger(o.formats.toString, o, [a.format, t]);
							return [n.node("div", t.date, (e = [a.klass.day], e.push(u.month == t.month ? a.klass.infocus : a.klass.outfocus), s.pick == t.pick && e.push(a.klass.now), i && e.push(a.klass.selected), r && e.push(a.klass.highlighted), f && e.push(a.klass.disabled), e.join(" ")), "data-pick=" + t.pick + " " + n.ariaAttr({
								role: "gridcell",
								label: m,
								selected: !(!i || o.$node.val() !== m) || null,
								activedescendant: !!r || null,
								disabled: !!f || null
							})), "", n.ariaAttr({
								role: "presentation"
							})]
						}
					})]
				}
			})), a.klass.table, 'id="' + o.$node[0].id + '_table" ' + n.ariaAttr({
				role: "grid",
				controls: o.$node[0].id,
				readonly: !0
			})) + n.node("div", n.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + s.pick + (t && !o.disabled(s) ? "" : " disabled") + " " + n.ariaAttr({
				controls: o.$node[0].id
			})) + n.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + n.ariaAttr({
				controls: o.$node[0].id
			})) + n.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + n.ariaAttr({
				controls: o.$node[0].id
			})), a.klass.footer)
		}, o.defaults = {
			labelMonthNext: "Next month",
			labelMonthPrev: "Previous month",
			labelMonthSelect: "Select a month",
			labelYearSelect: "Select a year",
			monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			today: "Today",
			clear: "Clear",
			close: "Close",
			closeOnSelect: !0,
			closeOnClear: !0,
			updateInput: !0,
			format: "d mmmm, yyyy",
			klass: {
				table: (i = t.klasses().picker + "__") + "table",
				header: i + "header",
				navPrev: i + "nav--prev btn btn-flat",
				navNext: i + "nav--next btn btn-flat",
				navDisabled: i + "nav--disabled",
				month: i + "month",
				year: i + "year",
				selectMonth: i + "select--month",
				selectYear: i + "select--year",
				weekdays: i + "weekday",
				day: i + "day",
				disabled: i + "day--disabled",
				selected: i + "day--selected",
				highlighted: i + "day--highlighted",
				now: i + "day--today",
				infocus: i + "day--infocus",
				outfocus: i + "day--outfocus",
				footer: i + "footer",
				buttonClear: i + "button--clear",
				buttonToday: i + "button--today",
				buttonClose: i + "button--close"
			}
		}, t.extend("pickadate", o)
	}), $.extend($.fn.pickadate.defaults, {
		selectMonths: !0,
		selectYears: 15,
		onRender: function() {
			var t = this.$root,
				e = this.get("highlight", "yyyy"),
				i = this.get("highlight", "dd"),
				n = this.get("highlight", "mmm"),
				o = this.get("highlight", "dddd").slice(0, 3),
				a = n.charAt(0).toUpperCase() + n.slice(1);
			t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + ', </div><div class="picker__month-display"><div>' + a + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>")
		}
	}), $(".picker-opener").on("click", function(t) {
		t.preventDefault(), t.stopPropagation();
		const e = t.target.dataset.open;
		$(`#${e}`).pickadate().pickadate("picker").open()
	}),
	function() {
		var t, e, i, n = window.jQuery,
			o = n(window),
			a = n(document),
			r = "http://www.w3.org/2000/svg",
			s = "SVGAngle" in window && ((e = document.createElement("div")).innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == r, e.innerHTML = "", t),
			l = "transition" in (i = document.createElement("div").style) || "WebkitTransition" in i || "MozTransition" in i || "msTransition" in i || "OTransition" in i,
			c = "ontouchstart" in window,
			u = "mousedown" + (c ? " touchstart" : ""),
			d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
			h = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
			p = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

		function f(t) {
			return document.createElementNS(r, t)
		}

		function m(t, e, i) {
			var n;
			return function() {
				var o = this,
					a = arguments,
					r = i && !n;
				clearTimeout(n), n = setTimeout(function() {
					n = null, i || t.apply(o, a)
				}, e), r && t.apply(o, a)
			}
		}

		function v(t) {
			return(t < 10 ? "0" : "") + t
		}
		var g = 0;
		var b = 135,
			y = 110,
			x = 80,
			w = 20,
			k = 2 * b,
			C = l ? 350 : 1,
			S = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

		function M(t, e) {
			var i, o, r = n(S),
				l = r.find(".clockpicker-plate"),
				c = r.find(".picker__holder"),
				p = r.find(".clockpicker-hours"),
				M = r.find(".clockpicker-minutes"),
				O = r.find(".clockpicker-am-pm-block"),
				_ = "INPUT" === t.prop("tagName"),
				P = _ ? t : t.find("input"),
				A = (P.prop("type"), n("label[for=" + P.attr("id") + "]")),
				I = this;
			this.id = (o = ++g + "", (i = "cp") ? i + o : o), this.element = t, this.holder = c, this.options = e, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = _, this.input = P, this.label = A, this.popover = r, this.plate = l, this.hoursView = p, this.minutesView = M, this.amPmBlock = O, this.spanHours = r.find(".clockpicker-span-hours"), this.spanMinutes = r.find(".clockpicker-span-minutes"), this.spanAmPm = r.find(".clockpicker-span-am-pm"), this.footer = r.find(".picker__footer"), this.amOrPm = "", this.isTwelvehour = e.twelvehour, this.minTime = 0, this.maxTime = 0, this.minMinutes = 0, this.maxMinutes = 59, this.minHours = 0, this.maxHours = 23, this.isInvalidTimeScope = !1;
			const $ = t => {
				const i = t + "Time";
				if(this[i] = e[t].split(":"), 4 === this[i][1].length) {
					const t = this[i][1].replace(/\d+/g, "").toUpperCase();
					this[i][1] = this[i][1].replace(/\D+/g, ""), "PM" === t && (this[i][0] = parseInt(this[i][0]) + 12)
				}
				if(2 !== this[i].length) this[i] = null;
				else
					for(let t = 0; t < this[i].length; t++) this[i][t] = +this[i][t]
			};
			if(e.min && ($("min"), this.minMinutes = this.minTime[1], this.minHours = this.minTime[0]), e.max && ($("max"), this.minHours > this.maxHours || this.minHours === this.maxHours && this.minMinutes >= this.maxMinutes ? this.maxTime = 0 : (this.maxMinutes = this.maxTime[1], this.maxHours = this.maxTime[0])), e.twelvehour) {
				var D = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
				n(D);
				const t = t => {
					let e = "pm";
					"PM" === t && (e = "am"), I.amOrPm = t, I.amPmBlock.children(`.${e}-button`).removeClass("active"), I.amPmBlock.children(`.${t.toLowerCase()}-button`).addClass("active"), I.spanAmPm.empty().append(t), this.disableOutOfRangeElements()
				};
				e.ampmclickable ? (this.spanAmPm.empty(), n('<div id="click-am">AM</div>').on("click", function() {
					I.spanAmPm.children("#click-am").addClass("text-primary"), I.spanAmPm.children("#click-pm").removeClass("text-primary"), I.amOrPm = "AM"
				}).appendTo(this.spanAmPm), n('<div id="click-pm">PM</div>').on("click", function() {
					I.spanAmPm.children("#click-pm").addClass("text-primary"), I.spanAmPm.children("#click-am").removeClass("text-primary"), I.amOrPm = "PM"
				}).appendTo(this.spanAmPm)) : (n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
					t("AM")
				}).appendTo(this.amPmBlock), n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
					t("PM")
				}).appendTo(this.amPmBlock))
			}
			e.darktheme && r.addClass("darktheme"), n('<button type="button" class="btn btn-flat clockpicker-button done-button" tabindex="' + (e.twelvehour ? "3" : "1") + '">' + e.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(this.footer), n('<button type="button" class="btn btn-flat clockpicker-button clear-button" tabindex="' + (e.twelvehour ? "4" : "2") + '">' + e.cleartext + "</button>").click(n.proxy(this.clearInput, this)).appendTo(this.footer), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), P.on("click.clockpicker", m(n.proxy(this.show, this), 100));
			var E, L, F, R, W = n('<div class="clockpicker-tick"></div>');
			if(e.twelvehour)
				for(E = 0; E < 12; E += e.hourstep) L = W.clone(), F = E / 6 * Math.PI, R = y, L.css("font-size", "140%"), L.css({
					left: b + Math.sin(F) * R - w,
					top: b - Math.cos(F) * R - w
				}), L.html(0 === E ? 12 : E), p.append(L), L.on(u, z), this.disableOutOfRangeElements();
			else
				for(E = 0; E < 24; E += e.hourstep) {
					L = W.clone(), F = E / 6 * Math.PI;
					var V = E > 0 && E < 13;
					R = V ? x : y, L.css({
						left: b + Math.sin(F) * R - w,
						top: b - Math.cos(F) * R - w
					}), V && L.css("font-size", "120%"), L.html(0 === E ? "00" : E), p.append(L), L.on(u, z), this.disableOutOfRangeElements()
				}
			var H = Math.max(e.minutestep, 5);
			for(E = 0; E < 60; E += H)
				for(E = 0; E < 60; E += 5) L = W.clone(), F = E / 30 * Math.PI, L.css({
					left: b + Math.sin(F) * y - w,
					top: b - Math.cos(F) * y - w
				}), L.css("font-size", "140%"), L.html(v(E)), M.append(L), L.on(u, z);

			function z(t, i) {
				var n = l.offset(),
					o = /^touch/.test(t.type),
					r = n.left + b,
					c = n.top + b,
					u = (o ? t.originalEvent.touches[0] : t).pageX - r,
					p = (o ? t.originalEvent.touches[0] : t).pageY - c,
					f = Math.sqrt(u * u + p * p),
					m = !1;
				if(!i || !(f < y - w || f > y + w)) {
					t.preventDefault();
					var v = setTimeout(function() {
						I.popover.addClass("clockpicker-moving")
					}, 200);
					s && l.append(I.canvas), I.setHand(u, p, !i, !0), a.off(d).on(d, function(t) {
						t.preventDefault();
						var e = /^touch/.test(t.type),
							i = (e ? t.originalEvent.touches[0] : t).pageX - r,
							n = (e ? t.originalEvent.touches[0] : t).pageY - c;
						(m || i !== u || n !== p) && (m = !0, I.setHand(i, n, !1, !0))
					}), a.off(h).on(h, function(t) {
						a.off(h), t.preventDefault();
						var n = /^touch/.test(t.type),
							o = (n ? t.originalEvent.changedTouches[0] : t).pageX - r,
							s = (n ? t.originalEvent.changedTouches[0] : t).pageY - c;
						(i || m) && o === u && s === p && I.setHand(o, s);
						let {
							hours: f,
							minutes: g,
							amOrPm: b,
							maxHours: y,
							minHours: x,
							maxMinutes: w,
							minMinutes: k
						} = I;
						"PM" === b && (x < 12 && (x = 0), x > 12 && (x -= 12), y > 12 && (y -= 12)), I.isInvalidTimeScope ? (I.isInvalidTimeScope = !1, t.stopPropagation()) : "hours" === I.currentView ? I.toggleView("minutes", C / 2) : "hours" != I.currentView && e.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
							I.done()
						}, C / 2), I.currentHours = 0), l.prepend(N), clearTimeout(v), I.popover.removeClass("clockpicker-moving"), a.off(d)
					}), I.disableOutOfRangeElements()
				}
			}
			if(l.on(u, function(t) {
					0 === n(t.target).closest(".clockpicker-tick").length && z(t, !0)
				}), s) {
				var N = r.find(".clockpicker-canvas"),
					B = f("svg");
				B.setAttribute("class", "clockpicker-svg"), B.setAttribute("width", k), B.setAttribute("height", k);
				var j = f("g");
				j.setAttribute("transform", "translate(" + b + "," + b + ")");
				var Y = f("circle");
				Y.setAttribute("class", "clockpicker-canvas-bearing"), Y.setAttribute("cx", 0), Y.setAttribute("cy", 0), Y.setAttribute("r", 2);
				var q = f("line");
				q.setAttribute("x1", 0), q.setAttribute("y1", 0);
				var X = f("circle");
				X.setAttribute("class", "clockpicker-canvas-bg"), X.setAttribute("r", w);
				var U = f("circle");
				U.setAttribute("class", "clockpicker-canvas-fg"), U.setAttribute("r", 5), j.appendChild(q), j.appendChild(X), j.appendChild(U), j.appendChild(Y), B.appendChild(j), N.append(B), this.hand = q, this.bg = X, this.fg = U, this.bearing = Y, this.g = j, this.canvas = N
			}
			T(this.options.init)
		}

		function T(t) {
			t && "function" == typeof t && t()
		}
		M.DEFAULTS = {
			default: "",
			fromnow: 0,
			donetext: "Done",
			cleartext: "Clear",
			autoclose: !1,
			ampmclickable: !1,
			darktheme: !1,
			twelvehour: !1,
			vibrate: !0,
			hourstep: 1,
			minutestep: 1,
			ampmSubmit: !1,
			container: "body"
		}, M.prototype.toggle = function() {
			this[this.isShown ? "hide" : "show"]()
		}, M.prototype.locate = function() {
			var t = this.element;
			n(this.options.container).append(this.popover), t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
			this.popover.show()
		}, M.prototype.parseInputValue = function() {
			var t = this.input.prop("value") || this.options.default || "";
			if("now" === t && (t = new Date(+new Date + this.options.fromnow)), t instanceof Date && (t = t.getHours() + ":" + t.getMinutes()), t = t.split(":"), this.hours = +t[0] || 0, this.minutes = +(t[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
				var e = (t[1] + "").replace(/\d+/g, "").toLowerCase();
				this.amOrPm = this.hours > 12 || "pm" === e ? "PM" : "AM"
			}
		}, M.prototype.show = function(t) {
			if(!this.isShown) {
				T(this.options.beforeShow), n(":input").each(function() {
					n(this).attr("tabindex", -1)
				});
				var e = this;
				this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), n(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "AM", this.options.ampmclickable ? (this.spanAmPm.children("#click-am").addClass("text-primary"), this.spanAmPm.children("#click-pm").removeClass("text-primary")) : (this.amPmBlock.children(".pm-button").removeClass("active"), this.amPmBlock.children(".am-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function() {
					e.isShown && e.locate()
				}), this.isAppended = !0), this.parseInputValue(), 0 === this.hours && (this.hours = this.minHours), this.spanHours.html(v(this.hours)), this.spanMinutes.html(v(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.disableOutOfRangeElements(), this.toggleView("hours"), this.locate(), this.isShown = !0, a.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, m(function(t) {
					var i = n(t.target);
					0 === i.closest(e.popover.find(".picker__wrap")).length && 0 === i.closest(e.input).length && e.hide()
				}, 100)), a.on("keyup.clockpicker." + this.id, m(function(t) {
					27 === t.keyCode && e.hide()
				}, 100)), T(this.options.afterShow)
			}
		}, M.prototype.hide = function() {
			T(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), n(document.body).css("overflow", "visible"), this.isShown = !1, n(":input").each(function(t) {
				n(this).attr("tabindex", t + 1)
			}), a.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), a.off("keyup.clockpicker." + this.id), this.popover.hide(), T(this.options.afterHide)
		}, M.prototype.disableOutOfRangeElements = function() {
			let {
				hours: t,
				minutes: e,
				currentView: i,
				isTwelvehour: o,
				amOrPm: a,
				maxHours: r,
				minHours: s,
				maxMinutes: l,
				minMinutes: c
			} = this;
			const u = n(".clockpicker-hours").children(),
				d = n(".clockpicker-minutes").children(),
				h = n(".am-button"),
				p = n(".pm-button"),
				f = n(".done-button");
			o && "minutes" === i && (f.removeClass("grey-text disabled"), "AM" !== a || t + 12 <= r ? "PM" !== a || t >= s || h.addClass("disabled") : p.addClass("disabled")), o && "PM" === a && (s < 12 && (s = 0), s > 12 && (s -= 12), r > 12 && (r -= 12)), o && "hours" === i && (h.removeClass("disabled"), p.removeClass("disabled"), ("AM" !== a || t >= s && t <= r) && ("PM" !== a || t >= s && t <= r) ? f.removeClass("grey-text disabled") : f.addClass("grey-text disabled")), "minutes" === i && (t === s && e < c || t === r && e > l ? f.addClass("grey-text disabled") : f.removeClass("grey-text disabled")), "hours" === i && u.each((t, e) => {
				let i = e.innerHTML;
				this.isTwelvehour && 12 == i && (i = 0), i > r || i < s ? n(e).addClass("grey-text disabled") : n(e).removeClass("grey-text disabled")
			}), "minutes" === i && d.each((e, i) => {
				s == t && i.innerHTML < c ? n(i).addClass("grey-text disabled") : r == t && i.innerHTML > l ? n(i).addClass("grey-text disabled") : n(i).removeClass("grey-text disabled")
			})
		}, M.prototype.toggleView = function(t, e) {
			var i = !1;
			"minutes" === t && "visible" === n(this.hoursView).css("visibility") && (T(this.options.beforeHourSelect), i = !0);
			var o = "hours" === t,
				a = o ? this.hoursView : this.minutesView,
				r = o ? this.minutesView : this.hoursView;
			this.currentView = t, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), r.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
				r.css("visibility", "hidden")
			}, C), this.disableOutOfRangeElements(), i && T(this.options.afterHourSelect)
		}, M.prototype.resetClock = function(t) {
			var e = this.currentView,
				i = this[e],
				n = "hours" === e,
				o = i * (Math.PI / (n ? 6 : 30)),
				a = n && i > 0 && i < 13 ? x : y,
				r = Math.sin(o) * a,
				l = -Math.cos(o) * a,
				c = this;
			s && t ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
				c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(r, l)
			}, t)) : this.setHand(r, l)
		}, M.prototype.setHand = function(t, e, i, o) {
			var a, r, l = Math.atan2(t, -e),
				c = "hours" === this.currentView,
				u = Math.sqrt(t * t + e * e),
				d = this.options,
				h = c && u < (y + x) / 2,
				f = h ? x : y;
			a = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (f = y), l < 0 && (l = 2 * Math.PI + l), l = (r = Math.round(l / a)) * a, c ? (r *= d.hourstep, d.twelvehour || !h != r > 0 || (r += 12), d.twelvehour && 0 === r && (r = 12), 24 === r && (r = 0)) : 60 === (r *= d.minutestep) && (r = 0);
			let {
				minHours: m,
				maxHours: g,
				minMinutes: b,
				maxMinutes: w,
				amOrPm: k
			} = this;
			if(c) {
				let t = r;
				if("PM" === this.amOrPm && (m < 12 && (m = 0), m > 12 && (m -= 12), g > 12 && (g -= 12)), this.isTwelvehour && 12 == t && (t = 0), t < m || t > g) return void(this.isInvalidTimeScope = !0);
				if(this.isTwelvehour && 12 === t) return void(this.isInvalidTimeScope = !0)
			} else {
				let {
					hours: t
				} = this;
				if("PM" === k && (t += 12), t == m && r < b || t == g && r > w) return void(this.isInvalidTimeScope = !0)
			}
			if(c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : r % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== r && p && this.options.vibrate && (this.vibrateTimer || (navigator[p](10), this.vibrateTimer = setTimeout(n.proxy(function() {
					this.vibrateTimer = null
				}, this), 100))), this[this.currentView] = r, this[c ? "spanHours" : "spanMinutes"].html(v(r)), s) {
				o || !c && r % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
				var C = Math.sin(l) * f,
					S = -Math.cos(l) * f;
				this.hand.setAttribute("x2", C), this.hand.setAttribute("y2", S), this.bg.setAttribute("cx", C), this.bg.setAttribute("cy", S), this.fg.setAttribute("cx", C), this.fg.setAttribute("cy", S)
			} else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
				var t = n(this);
				t.toggleClass("active", r === +t.html())
			})
		}, M.prototype.clearInput = function() {
			this.input.val(""), this.hide(), this.options.afterDone && "function" == typeof this.options.afterDone && this.options.afterDone(this.input, null)
		}, M.prototype.getTime = function(t) {
			this.parseInputValue();
			var e = this.hours;
			this.options.twelvehour && e < 12 && "PM" === this.amOrPm && (e += 12);
			var i = new Date;
			return i.setMinutes(this.minutes), i.setHours(e), i.setSeconds(0), t && t.apply(this.element, i) || i
		}, M.prototype.done = function() {
			T(this.options.beforeDone), this.hide(), this.label.addClass("active");
			var t = this.input.prop("value"),
				e = this.hours,
				i = ":" + v(this.minutes);
			this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (e += 12), 12 === this.hours && "AM" === this.amOrPm && (e = 0)), i = v(e) + i, !this.isHTML5 && this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== t && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), T(this.options.afterDone)
		}, M.prototype.remove = function() {
			this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
		}, n.fn.pickatime = function(t) {
			var e = Array.prototype.slice.call(arguments, 1);

			function i() {
				var i = n(this),
					o = i.data("clockpicker");
				if(o) "function" == typeof o[t] && o[t].apply(o, e);
				else {
					var a = n.extend({}, M.DEFAULTS, i.data(), "object" == typeof t && t);
					i.data("clockpicker", new M(i, a))
				}
			}
			if(1 == this.length) {
				var o = i.apply(this[0]);
				return void 0 !== o ? o : this
			}
			return this.each(i)
		}, n(".time-picker-opener").on("click", t => {
			t.stopPropagation(), t.preventDefault();
			const e = t.target.dataset.open;
			n(`#${e}`).pickatime("picker").data("clockpicker").show()
		})
	}(), jQuery(t => {
		t.fn.dateTimePicker = function(e = ", ") {
			const i = t(this)[0];
			let n = t(`.picker-opener[data-open='${i.dataset.open}']`);
			const o = t(`.timepicker[data-open='${i.dataset.open}']`),
				a = t(`#${i.dataset.open}`);
			a.pickadate({
				onClose: function() {
					o.pickatime({
						afterHide: () => {
							o.trigger("change")
						}
					}).pickatime("picker").data("clockpicker").show()
				},
				format: "yyyy/mm/dd",
				formatSubmit: "yyyy/mm/dd"
			}), a.on("change", () => {
				let t = o.val(),
					i = a.val();
				n[0].value = `${i}${""!==t&&""!==i?e:""}${t}`
			}), o.on("change", () => {
				let t = o.val(),
					i = a.val();
				n[0].value = `${i}${""!==t&&""!==i?e:""}${t}`
			})
		}
	}),
	function(t, e) {
		"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : window.PhotoSwipe = e()
	}(0, function() {
		"use strict";
		return function(t, e, i, n) {
			var o = {
				features: null,
				bind: function(t, e, i, n) {
					var o = (n ? "remove" : "add") + "EventListener";
					e = e.split(" ");
					for(var a = 0; a < e.length; a++) e[a] && t[o](e[a], i, !1)
				},
				isArray: function(t) {
					return t instanceof Array
				},
				createEl: function(t, e) {
					var i = document.createElement(e || "div");
					return t && (i.className = t), i
				},
				getScrollY: function() {
					var t = window.pageYOffset;
					return void 0 !== t ? t : document.documentElement.scrollTop
				},
				unbind: function(t, e, i) {
					o.bind(t, e, i, !0)
				},
				removeClass: function(t, e) {
					var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
					t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
				},
				addClass: function(t, e) {
					o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
				},
				hasClass: function(t, e) {
					return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
				},
				getChildByClass: function(t, e) {
					for(var i = t.firstChild; i;) {
						if(o.hasClass(i, e)) return i;
						i = i.nextSibling
					}
				},
				arraySearch: function(t, e, i) {
					for(var n = t.length; n--;)
						if(t[n][i] === e) return n;
					return -1
				},
				extend: function(t, e, i) {
					for(var n in e)
						if(e.hasOwnProperty(n)) {
							if(i && t.hasOwnProperty(n)) continue;
							t[n] = e[n]
						}
				},
				easing: {
					sine: {
						out: function(t) {
							return Math.sin(t * (Math.PI / 2))
						},
						inOut: function(t) {
							return -(Math.cos(Math.PI * t) - 1) / 2
						}
					},
					cubic: {
						out: function(t) {
							return --t * t * t + 1
						}
					}
				},
				detectFeatures: function() {
					if(o.features) return o.features;
					var t = o.createEl().style,
						e = "",
						i = {};
					if(i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
						var n = navigator.userAgent;
						if(/iP(hone|od)/.test(navigator.platform)) {
							var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
							a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
						}
						var r = n.match(/Android\s([0-9\.]*)/),
							s = r ? r[1] : 0;
						(s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
					}
					for(var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
						e = d[h];
						for(var p = 0; 3 > p; p++) l = u[p], c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in t && (i[l] = c);
						e && !i.raf && (e = e.toLowerCase(), i.raf = window[e + "RequestAnimationFrame"], i.raf && (i.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
					}
					if(!i.raf) {
						var f = 0;
						i.raf = function(t) {
							var e = (new Date).getTime(),
								i = Math.max(0, 16 - (e - f)),
								n = window.setTimeout(function() {
									t(e + i)
								}, i);
							return f = e + i, n
						}, i.caf = function(t) {
							clearTimeout(t)
						}
					}
					return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
				}
			};
			o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, i, n) {
				e = e.split(" ");
				for(var o, a = (n ? "detach" : "attach") + "Event", r = function() {
						i.handleEvent.call(i)
					}, s = 0; s < e.length; s++)
					if(o = e[s])
						if("object" == typeof i && i.handleEvent) {
							if(n) {
								if(!i["oldIE" + o]) return !1
							} else i["oldIE" + o] = r;
							t[a]("on" + o, i["oldIE" + o])
						} else t[a]("on" + o, i)
			});
			var a = this,
				r = {
					allowPanToNext: !0,
					spacing: .12,
					bgOpacity: 1,
					mouseUsed: !1,
					loop: !0,
					pinchToClose: !0,
					closeOnScroll: !0,
					closeOnVerticalDrag: !0,
					verticalDragRange: .75,
					hideAnimationDuration: 333,
					showAnimationDuration: 333,
					showHideOpacity: !1,
					focus: !0,
					escKey: !0,
					arrowKeys: !0,
					mainScrollEndFriction: .35,
					panEndFriction: .35,
					isClickableElement: function(t) {
						return "A" === t.tagName
					},
					getDoubleTapZoom: function(t, e) {
						return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
					},
					maxSpreadZoom: 1.33,
					modal: !0,
					scaleMode: "fit"
				};
			o.extend(r, n);
			var s, l, c, u, d, h, p, f, m, v, g, b, y, x, w, k, C, S, M, T, O, _, P, A, I, $, D, E, L, F, R, W, V, H, z, N, B, j, Y, q, X, U, K, Q, Z, G, J, tt, et, it, nt, ot, at, rt, st, lt = {
					x: 0,
					y: 0
				},
				ct = {
					x: 0,
					y: 0
				},
				ut = {
					x: 0,
					y: 0
				},
				dt = {},
				ht = 0,
				pt = {},
				ft = {
					x: 0,
					y: 0
				},
				mt = 0,
				vt = !0,
				gt = [],
				bt = {},
				yt = !1,
				xt = function(t, e) {
					o.extend(a, e.publicMethods), gt.push(t)
				},
				wt = function(t) {
					var e = He();
					return t > e - 1 ? t - e : 0 > t ? e + t : t
				},
				kt = {},
				Ct = function(t, e) {
					return kt[t] || (kt[t] = []), kt[t].push(e)
				},
				St = function(t) {
					var e = kt[t];
					if(e) {
						var i = Array.prototype.slice.call(arguments);
						i.shift();
						for(var n = 0; n < e.length; n++) e[n].apply(a, i)
					}
				},
				Mt = function() {
					return(new Date).getTime()
				},
				Tt = function(t) {
					at = t, a.bg.style.opacity = t * r.bgOpacity
				},
				Ot = function(t, e, i, n, o) {
					(!yt || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), t[_] = b + e + "px, " + i + "px" + y + " scale(" + n + ")"
				},
				_t = function(t) {
					tt && (t && (v > a.currItem.fitRatio ? yt || (Ke(a.currItem, !1, !0), yt = !0) : yt && (Ke(a.currItem), yt = !1)), Ot(tt, ut.x, ut.y, v))
				},
				Pt = function(t) {
					t.container && Ot(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
				},
				At = function(t, e) {
					e[_] = b + t + "px, 0px" + y
				},
				It = function(t, e) {
					if(!r.loop && e) {
						var i = u + (ft.x * ht - t) / ft.x,
							n = Math.round(t - ce.x);
						(0 > i && n > 0 || i >= He() - 1 && 0 > n) && (t = ce.x + n * r.mainScrollEndFriction)
					}
					ce.x = t, At(t, d)
				},
				$t = function(t, e) {
					var i = ue[t] - pt[t];
					return ct[t] + lt[t] + i - i * (e / g)
				},
				Dt = function(t, e) {
					t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
				},
				Et = function(t) {
					t.x = Math.round(t.x), t.y = Math.round(t.y)
				},
				Lt = null,
				Ft = function() {
					Lt && (o.unbind(document, "mousemove", Ft), o.addClass(t, "pswp--has_mouse"), r.mouseUsed = !0, St("mouseUsed")), Lt = setTimeout(function() {
						Lt = null
					}, 100)
				},
				Rt = function(t, e) {
					var i = Ye(a.currItem, dt, t);
					return e && (J = i), i
				},
				Wt = function(t) {
					return t || (t = a.currItem), t.initialZoomLevel
				},
				Vt = function(t) {
					return t || (t = a.currItem), t.w > 0 ? r.maxSpreadZoom : 1
				},
				Ht = function(t, e, i, n) {
					return n === a.currItem.initialZoomLevel ? (i[t] = a.currItem.initialPosition[t], !0) : (i[t] = $t(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0))
				},
				zt = function(t) {
					var e = "";
					r.escKey && 27 === t.keyCode ? e = "close" : r.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]()))
				},
				Nt = function(t) {
					t && (X || q || et || N) && (t.preventDefault(), t.stopPropagation())
				},
				Bt = function() {
					a.setScrollOffset(0, o.getScrollY())
				},
				jt = {},
				Yt = 0,
				qt = function(t) {
					jt[t] && (jt[t].raf && $(jt[t].raf), Yt--, delete jt[t])
				},
				Xt = function(t) {
					jt[t] && qt(t), jt[t] || (Yt++, jt[t] = {})
				},
				Ut = function() {
					for(var t in jt) jt.hasOwnProperty(t) && qt(t)
				},
				Kt = function(t, e, i, n, o, a, r) {
					var s, l = Mt();
					Xt(t);
					var c = function() {
						if(jt[t]) {
							if((s = Mt() - l) >= n) return qt(t), a(i), void(r && r());
							a((i - e) * o(s / n) + e), jt[t].raf = I(c)
						}
					};
					c()
				},
				Qt = {
					shout: St,
					listen: Ct,
					viewportSize: dt,
					options: r,
					isMainScrollAnimating: function() {
						return et
					},
					getZoomLevel: function() {
						return v
					},
					getCurrentIndex: function() {
						return u
					},
					isDragging: function() {
						return j
					},
					isZooming: function() {
						return Z
					},
					setScrollOffset: function(t, e) {
						pt.x = t, F = pt.y = e, St("updateScrollOffset", pt)
					},
					applyZoomPan: function(t, e, i, n) {
						ut.x = e, ut.y = i, v = t, _t(n)
					},
					init: function() {
						if(!s && !l) {
							var i;
							a.framework = o, a.template = t, a.bg = o.getChildByClass(t, "pswp__bg"), D = t.className, s = !0, R = o.detectFeatures(), I = R.raf, $ = R.caf, _ = R.transform, L = R.oldIE, a.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = k = [{
									el: a.container.children[0],
									wrap: 0,
									index: -1
								}, {
									el: a.container.children[1],
									wrap: 0,
									index: -1
								}, {
									el: a.container.children[2],
									wrap: 0,
									index: -1
								}], k[0].el.style.display = k[2].el.style.display = "none",
								function() {
									if(_) {
										var e = R.perspective && !A;
										return b = "translate" + (e ? "3d(" : "("), void(y = R.perspective ? ", 0px)" : ")")
									}
									_ = "left", o.addClass(t, "pswp--ie"), At = function(t, e) {
										e.left = t + "px"
									}, Pt = function(t) {
										var e = t.fitRatio > 1 ? 1 : t.fitRatio,
											i = t.container.style,
											n = e * t.w,
											o = e * t.h;
										i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
									}, _t = function() {
										if(tt) {
											var t = tt,
												e = a.currItem,
												i = e.fitRatio > 1 ? 1 : e.fitRatio,
												n = i * e.w,
												o = i * e.h;
											t.width = n + "px", t.height = o + "px", t.left = ut.x + "px", t.top = ut.y + "px"
										}
									}
								}(), m = {
									resize: a.updateSize,
									scroll: Bt,
									keydown: zt,
									click: Nt
								};
							var n = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
							for(R.animationName && R.transform && !n || (r.showAnimationDuration = r.hideAnimationDuration = 0), i = 0; i < gt.length; i++) a["init" + gt[i]]();
							e && (a.ui = new e(a, o)).init(), St("firstUpdate"), u = u || r.index || 0, (isNaN(u) || 0 > u || u >= He()) && (u = 0), a.currItem = Ve(u), (R.isOldIOSPhone || R.isOldAndroid) && (vt = !1), t.setAttribute("aria-hidden", "false"), r.modal && (vt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === F && (St("initialLayout"), F = E = o.getScrollY());
							var c = "pswp--open ";
							for(r.mainClass && (c += r.mainClass + " "), r.showHideOpacity && (c += "pswp--animate_opacity "), c += A ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", o.addClass(t, c), a.updateSize(), h = -1, mt = null, i = 0; 3 > i; i++) At((i + h) * ft.x, k[i].el.style);
							L || o.bind(a.scrollWrap, f, a), Ct("initialZoomInEnd", function() {
								a.setContent(k[0], u - 1), a.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", r.focus && t.focus(), o.bind(document, "keydown", a), R.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", Ft), o.bind(window, "resize scroll", a), St("bindEvents")
							}), a.setContent(k[1], u), a.updateCurrItem(), St("afterInit"), vt || (x = setInterval(function() {
								Yt || j || Z || v !== a.currItem.initialZoomLevel || a.updateSize()
							}, 1e3)), o.addClass(t, "pswp--visible")
						}
					},
					close: function() {
						s && (s = !1, l = !0, St("close"), o.unbind(window, "resize", a), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Ft), R.transform && o.unbind(a.scrollWrap, "click", a), j && o.unbind(window, p, a), St("unbindEvents"), ze(a.currItem, null, !0, a.destroy))
					},
					destroy: function() {
						St("destroy"), Le && clearTimeout(Le), t.setAttribute("aria-hidden", "true"), t.className = D, x && clearInterval(x), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), pe(), Ut(), kt = null
					},
					panTo: function(t, e, i) {
						i || (t > J.min.x ? t = J.min.x : t < J.max.x && (t = J.max.x), e > J.min.y ? e = J.min.y : e < J.max.y && (e = J.max.y)), ut.x = t, ut.y = e, _t()
					},
					handleEvent: function(t) {
						t = t || window.event, m[t.type] && m[t.type](t)
					},
					goTo: function(t) {
						var e = (t = wt(t)) - u;
						mt = e, u = t, a.currItem = Ve(u), ht -= e, It(ft.x * ht), Ut(), et = !1, a.updateCurrItem()
					},
					next: function() {
						a.goTo(u + 1)
					},
					prev: function() {
						a.goTo(u - 1)
					},
					updateCurrZoomItem: function(t) {
						if(t && St("beforeChange", 0), k[1].el.children.length) {
							var e = k[1].el.children[0];
							tt = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
						} else tt = null;
						J = a.currItem.bounds, g = v = a.currItem.initialZoomLevel, ut.x = J.center.x, ut.y = J.center.y, t && St("afterChange")
					},
					invalidateCurrItems: function() {
						w = !0;
						for(var t = 0; 3 > t; t++) k[t].item && (k[t].item.needsUpdate = !0)
					},
					updateCurrItem: function(t) {
						if(0 !== mt) {
							var e, i = Math.abs(mt);
							if(!(t && 2 > i)) {
								a.currItem = Ve(u), yt = !1, St("beforeChange", mt), i >= 3 && (h += mt + (mt > 0 ? -3 : 3), i = 3);
								for(var n = 0; i > n; n++) mt > 0 ? (e = k.shift(), k[2] = e, At((++h + 2) * ft.x, e.el.style), a.setContent(e, u - i + n + 1 + 1)) : (e = k.pop(), k.unshift(e), At(--h * ft.x, e.el.style), a.setContent(e, u + i - n - 1 - 1));
								if(tt && 1 === Math.abs(mt)) {
									var o = Ve(C);
									o.initialZoomLevel !== v && (Ye(o, dt), Ke(o), Pt(o))
								}
								mt = 0, a.updateCurrZoomItem(), C = u, St("afterChange")
							}
						}
					},
					updateSize: function(e) {
						if(!vt && r.modal) {
							var i = o.getScrollY();
							if(F !== i && (t.style.top = i + "px", F = i), !e && bt.x === window.innerWidth && bt.y === window.innerHeight) return;
							bt.x = window.innerWidth, bt.y = window.innerHeight, t.style.height = bt.y + "px"
						}
						if(dt.x = a.scrollWrap.clientWidth, dt.y = a.scrollWrap.clientHeight, Bt(), ft.x = dt.x + Math.round(dt.x * r.spacing), ft.y = dt.y, It(ft.x * ht), St("beforeResize"), void 0 !== h) {
							for(var n, s, l, c = 0; 3 > c; c++) n = k[c], At((c + h) * ft.x, n.el.style), l = u + c - 1, r.loop && He() > 2 && (l = wt(l)), (s = Ve(l)) && (w || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(n, l), 1 === c && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l), s && s.container && (Ye(s, dt), Ke(s), Pt(s));
							w = !1
						}
						g = v = a.currItem.initialZoomLevel, (J = a.currItem.bounds) && (ut.x = J.center.x, ut.y = J.center.y, _t(!0)), St("resize")
					},
					zoomTo: function(t, e, i, n, a) {
						e && (g = v, ue.x = Math.abs(e.x) - ut.x, ue.y = Math.abs(e.y) - ut.y, Dt(ct, ut));
						var r = Rt(t, !1),
							s = {};
						Ht("x", r, s, t), Ht("y", r, s, t);
						var l = v,
							c = ut.x,
							u = ut.y;
						Et(s);
						var d = function(e) {
							1 === e ? (v = t, ut.x = s.x, ut.y = s.y) : (v = (t - l) * e + l, ut.x = (s.x - c) * e + c, ut.y = (s.y - u) * e + u), a && a(e), _t(1 === e)
						};
						i ? Kt("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
					}
				},
				Zt = {},
				Gt = {},
				Jt = {},
				te = {},
				ee = {},
				ie = [],
				ne = {},
				oe = [],
				ae = {},
				re = 0,
				se = {
					x: 0,
					y: 0
				},
				le = 0,
				ce = {
					x: 0,
					y: 0
				},
				ue = {
					x: 0,
					y: 0
				},
				de = {
					x: 0,
					y: 0
				},
				he = function(t, e) {
					return ae.x = Math.abs(t.x - e.x), ae.y = Math.abs(t.y - e.y), Math.sqrt(ae.x * ae.x + ae.y * ae.y)
				},
				pe = function() {
					U && ($(U), U = null)
				},
				fe = function() {
					j && (U = I(fe), _e())
				},
				me = function(t, e) {
					return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : me(t.parentNode, e))
				},
				ve = {},
				ge = function(t, e) {
					return ve.prevent = !me(t.target, r.isClickableElement), St("preventDragEvent", t, e, ve), ve.prevent
				},
				be = function(t, e) {
					return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
				},
				ye = function(t, e, i) {
					i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
				},
				xe = function() {
					var t = ut.y - a.currItem.initialPosition.y;
					return 1 - Math.abs(t / (dt.y / 2))
				},
				we = {},
				ke = {},
				Ce = [],
				Se = function(t) {
					for(; Ce.length > 0;) Ce.pop();
					return P ? (st = 0, ie.forEach(function(t) {
						0 === st ? Ce[0] = t : 1 === st && (Ce[1] = t), st++
					})) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Ce[0] = be(t.touches[0], we), t.touches.length > 1 && (Ce[1] = be(t.touches[1], ke))) : (we.x = t.pageX, we.y = t.pageY, we.id = "", Ce[0] = we), Ce
				},
				Me = function(t, e) {
					var i, n, o, s, l = ut[t] + e[t],
						c = e[t] > 0,
						u = ce.x + e.x,
						d = ce.x - ne.x;
					return i = l > J.min[t] || l < J.max[t] ? r.panEndFriction : 1, l = ut[t] + e[t] * i, !r.allowPanToNext && v !== a.currItem.initialZoomLevel || (tt ? "h" !== it || "x" !== t || q || (c ? (l > J.min[t] && (i = r.panEndFriction, J.min[t], n = J.min[t] - ct[t]), (0 >= n || 0 > d) && He() > 1 ? (s = u, 0 > d && u > ne.x && (s = ne.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[t] && (i = r.panEndFriction, J.max[t], n = ct[t] - J.max[t]), (0 >= n || d > 0) && He() > 1 ? (s = u, d > 0 && u < ne.x && (s = ne.x)) : J.min.x !== J.max.x && (o = l))) : s = u, "x" !== t) ? void(et || K || v > a.currItem.fitRatio && (ut[t] += e[t] * i)) : (void 0 !== s && (It(s, !0), K = s !== ne.x), J.min.x !== J.max.x && (void 0 !== o ? ut.x = o : K || (ut.x += e.x * i)), void 0 !== s)
				},
				Te = function(t) {
					if(!("mousedown" === t.type && t.button > 0)) {
						if(We) return void t.preventDefault();
						if(!B || "mousedown" !== t.type) {
							if(ge(t, !0) && t.preventDefault(), St("pointerDown"), P) {
								var e = o.arraySearch(ie, t.pointerId, "id");
								0 > e && (e = ie.length), ie[e] = {
									x: t.pageX,
									y: t.pageY,
									id: t.pointerId
								}
							}
							var i = Se(t),
								n = i.length;
							Q = null, Ut(), j && 1 !== n || (j = nt = !0, o.bind(window, p, a), z = rt = ot = N = K = X = Y = q = !1, it = null, St("firstTouchStart", i), Dt(ct, ut), lt.x = lt.y = 0, Dt(te, i[0]), Dt(ee, te), ne.x = ft.x * ht, oe = [{
								x: te.x,
								y: te.y
							}], V = W = Mt(), Rt(v, !0), pe(), fe()), !Z && n > 1 && !et && !K && (g = v, q = !1, Z = Y = !0, lt.y = lt.x = 0, Dt(ct, ut), Dt(Zt, i[0]), Dt(Gt, i[1]), ye(Zt, Gt, de), ue.x = Math.abs(de.x) - ut.x, ue.y = Math.abs(de.y) - ut.y, G = he(Zt, Gt))
						}
					}
				},
				Oe = function(t) {
					if(t.preventDefault(), P) {
						var e = o.arraySearch(ie, t.pointerId, "id");
						if(e > -1) {
							var i = ie[e];
							i.x = t.pageX, i.y = t.pageY
						}
					}
					if(j) {
						var n = Se(t);
						if(it || X || Z) Q = n;
						else if(ce.x !== ft.x * ht) it = "h";
						else {
							var a = Math.abs(n[0].x - te.x) - Math.abs(n[0].y - te.y);
							Math.abs(a) >= 10 && (it = a > 0 ? "h" : "v", Q = n)
						}
					}
				},
				_e = function() {
					if(Q) {
						var t = Q.length;
						if(0 !== t)
							if(Dt(Zt, Q[0]), Jt.x = Zt.x - te.x, Jt.y = Zt.y - te.y, Z && t > 1) {
								if(te.x = Zt.x, te.y = Zt.y, !Jt.x && !Jt.y && function(t, e) {
										return t.x === e.x && t.y === e.y
									}(Q[1], Gt)) return;
								Dt(Gt, Q[1]), q || (q = !0, St("zoomGestureStarted"));
								var e = he(Zt, Gt),
									i = De(e);
								i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (rt = !0);
								var n = 1,
									o = Wt(),
									s = Vt();
								if(o > i)
									if(r.pinchToClose && !rt && g <= a.currItem.initialZoomLevel) {
										var l = 1 - (o - i) / (o / 1.2);
										Tt(l), St("onPinchClose", l), ot = !0
									} else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
								else i > s && ((n = (i - s) / (6 * o)) > 1 && (n = 1), i = s + n * o);
								0 > n && (n = 0), ye(Zt, Gt, se), lt.x += se.x - de.x, lt.y += se.y - de.y, Dt(de, se), ut.x = $t("x", i), ut.y = $t("y", i), z = i > v, v = i, _t()
							} else {
								if(!it) return;
								if(nt && (nt = !1, Math.abs(Jt.x) >= 10 && (Jt.x -= Q[0].x - ee.x), Math.abs(Jt.y) >= 10 && (Jt.y -= Q[0].y - ee.y)), te.x = Zt.x, te.y = Zt.y, 0 === Jt.x && 0 === Jt.y) return;
								if("v" === it && r.closeOnVerticalDrag && "fit" === r.scaleMode && v === a.currItem.initialZoomLevel) {
									lt.y += Jt.y, ut.y += Jt.y;
									var c = xe();
									return N = !0, St("onVerticalDrag", c), Tt(c), void _t()
								}(function(t, e, i) {
									if(t - V > 50) {
										var n = oe.length > 2 ? oe.shift() : {};
										n.x = e, n.y = i, oe.push(n), V = t
									}
								})(Mt(), Zt.x, Zt.y), X = !0, J = a.currItem.bounds, Me("x", Jt) || (Me("y", Jt), Et(ut), _t())
							}
					}
				},
				Pe = function(t) {
					if(R.isOldAndroid) {
						if(B && "mouseup" === t.type) return;
						t.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function() {
							B = 0
						}, 600))
					}
					var e;
					if(St("pointerUp"), ge(t, !1) && t.preventDefault(), P) {
						var i = o.arraySearch(ie, t.pointerId, "id");
						i > -1 && (e = ie.splice(i, 1)[0], navigator.pointerEnabled ? e.type = t.pointerType || "mouse" : (e.type = {
							4: "mouse",
							2: "touch",
							3: "pen"
						}[t.pointerType], e.type || (e.type = t.pointerType || "mouse")))
					}
					var n, s = Se(t),
						l = s.length;
					if("mouseup" === t.type && (l = 0), 2 === l) return Q = null, !0;
					1 === l && Dt(ee, s[0]), 0 !== l || it || et || (e || ("mouseup" === t.type ? e = {
						x: t.pageX,
						y: t.pageY,
						type: "mouse"
					} : t.changedTouches && t.changedTouches[0] && (e = {
						x: t.changedTouches[0].pageX,
						y: t.changedTouches[0].pageY,
						type: "touch"
					})), St("touchRelease", t, e));
					var c = -1;
					if(0 === l && (j = !1, o.unbind(window, p, a), pe(), Z ? c = 0 : -1 !== le && (c = Mt() - le)), le = 1 === l ? Mt() : -1, n = -1 !== c && 150 > c ? "zoom" : "swipe", Z && 2 > l && (Z = !1, 1 === l && (n = "zoomPointerUp"), St("zoomGestureEnded")), Q = null, X || q || et || N)
						if(Ut(), H || (H = Ae()), H.calculateSwipeSpeed("x"), N)
							if(xe() < r.verticalDragRange) a.close();
							else {
								var u = ut.y,
									d = at;
								Kt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(t) {
									ut.y = (a.currItem.initialPosition.y - u) * t + u, Tt((1 - d) * t + d), _t()
								}), St("onVerticalDrag", 1)
							} else {
						if((K || et) && 0 === l) {
							if($e(n, H)) return;
							n = "zoomPointerUp"
						}
						if(!et) return "swipe" !== n ? void Ee() : void(!K && v > a.currItem.fitRatio && Ie(H))
					}
				},
				Ae = function() {
					var t, e, i = {
						lastFlickOffset: {},
						lastFlickDist: {},
						lastFlickSpeed: {},
						slowDownRatio: {},
						slowDownRatioReverse: {},
						speedDecelerationRatio: {},
						speedDecelerationRatioAbs: {},
						distanceOffset: {},
						backAnimDestination: {},
						backAnimStarted: {},
						calculateSwipeSpeed: function(n) {
							oe.length > 1 ? (t = Mt() - V + 50, e = oe[oe.length - 2][n]) : (t = Mt() - W, e = ee[n]), i.lastFlickOffset[n] = te[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
						},
						calculateOverBoundsAnimOffset: function(t, e) {
							i.backAnimStarted[t] || (ut[t] > J.min[t] ? i.backAnimDestination[t] = J.min[t] : ut[t] < J.max[t] && (i.backAnimDestination[t] = J.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, Kt("bounceZoomPan" + t, ut[t], i.backAnimDestination[t], e || 300, o.easing.sine.out, function(e) {
								ut[t] = e, _t()
							}))))
						},
						calculateAnimOffset: function(t) {
							i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, ut[t] += i.distanceOffset[t])
						},
						panAnimLoop: function() {
							return jt.zoomPan && (jt.zoomPan.raf = I(i.panAnimLoop), i.now = Mt(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), _t(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (ut.x = Math.round(ut.x), ut.y = Math.round(ut.y), _t(), void qt("zoomPan")) : void 0
						}
					};
					return i
				},
				Ie = function(t) {
					return t.calculateSwipeSpeed("y"), J = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Xt("zoomPan"), t.lastNow = Mt(), void t.panAnimLoop())
				},
				$e = function(t, e) {
					var i, n, s;
					if(et || (re = u), "swipe" === t) {
						var l = te.x - ee.x,
							c = e.lastFlickDist.x < 10;
						l > 30 && (c || e.lastFlickOffset.x > 20) ? n = -1 : -30 > l && (c || e.lastFlickOffset.x < -20) && (n = 1)
					}
					n && (0 > (u += n) ? (u = r.loop ? He() - 1 : 0, s = !0) : u >= He() && (u = r.loop ? 0 : He() - 1, s = !0), (!s || r.loop) && (mt += n, ht -= n, i = !0));
					var d, h = ft.x * ht,
						p = Math.abs(h - ce.x);
					return i || h > ce.x == e.lastFlickSpeed.x > 0 ? (d = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, re === u && (i = !1), et = !0, St("mainScrollAnimStart"), Kt("mainScroll", ce.x, h, d, o.easing.cubic.out, It, function() {
						Ut(), et = !1, re = -1, (i || re !== u) && a.updateCurrItem(), St("mainScrollAnimComplete")
					}), i && a.updateCurrItem(!0), i
				},
				De = function(t) {
					return 1 / G * t * g
				},
				Ee = function() {
					var t = v,
						e = Wt(),
						i = Vt();
					e > v ? t = e : v > i && (t = i);
					var n, r = at;
					return ot && !z && !rt && e > v ? (a.close(), !0) : (ot && (n = function(t) {
						Tt((1 - r) * t + r)
					}), a.zoomTo(t, 0, 200, o.easing.cubic.out, n), !0)
				};
			xt("Gestures", {
				publicMethods: {
					initGestures: function() {
						var t = function(t, e, i, n, o) {
							S = t + e, M = t + i, T = t + n, O = o ? t + o : ""
						};
						(P = R.pointerEvent) && R.touch && (R.touch = !1), P ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (t("touch", "start", "move", "end", "cancel"), A = !0) : t("mouse", "down", "move", "up"), p = M + " " + T + " " + O, f = S, P && !A && (A = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = A, m[S] = Te, m[M] = Oe, m[T] = Pe, O && (m[O] = m[T]), R.touch && (f += " mousedown", p += " mousemove mouseup", m.mousedown = m[S], m.mousemove = m[M], m.mouseup = m[T]), A || (r.allowPanToNext = !1)
					}
				}
			});
			var Le, Fe, Re, We, Ve, He, ze = function(e, i, n, s) {
					var l;
					Le && clearTimeout(Le), We = !0, Re = !0, e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = r.getThumbBoundsFn && r.getThumbBoundsFn(u);
					var d = n ? r.hideAnimationDuration : r.showAnimationDuration,
						h = function() {
							qt("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Tt(1), i && (i.style.display = "block"), o.addClass(t, "pswp--animated-in"), St("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), We = !1
						};
					if(!d || !l || void 0 === l.x) return St("initialZoom" + (n ? "Out" : "In")), v = e.initialZoomLevel, Dt(ut, e.initialPosition), _t(), t.style.opacity = n ? 0 : 1, Tt(1), void(d ? setTimeout(function() {
						h()
					}, d) : h());
					! function() {
						var i = c,
							s = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
						e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = l.w / e.w, ut.x = l.x, ut.y = l.y - E, a[s ? "template" : "bg"].style.opacity = .001, _t()), Xt("initialZoom"), n && !i && o.removeClass(t, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() {
							o.addClass(t, "pswp--animate_opacity")
						}, 30)), Le = setTimeout(function() {
							if(St("initialZoom" + (n ? "Out" : "In")), n) {
								var a = l.w / e.w,
									r = {
										x: ut.x,
										y: ut.y
									},
									c = v,
									u = at,
									p = function(e) {
										1 === e ? (v = a, ut.x = l.x, ut.y = l.y - F) : (v = (a - c) * e + c, ut.x = (l.x - r.x) * e + r.x, ut.y = (l.y - F - r.y) * e + r.y), _t(), s ? t.style.opacity = 1 - e : Tt(u - e * u)
									};
								i ? Kt("initialZoom", 0, 1, d, o.easing.cubic.out, p, h) : (p(1), Le = setTimeout(h, d + 20))
							} else v = e.initialZoomLevel, Dt(ut, e.initialPosition), _t(), Tt(1), s ? t.style.opacity = 1 : Tt(1), Le = setTimeout(h, d + 20)
						}, n ? 25 : 90)
					}()
				},
				Ne = {},
				Be = [],
				je = {
					index: 0,
					errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
					forceProgressiveLoading: !1,
					preload: [1, 1],
					getNumItemsFn: function() {
						return Fe.length
					}
				},
				Ye = function(t, e, i) {
					if(t.src && !t.loadError) {
						var n = !i;
						if(n && (t.vGap || (t.vGap = {
								top: 0,
								bottom: 0
							}), St("parseVerticalMargin", t)), Ne.x = e.x, Ne.y = e.y - t.vGap.top - t.vGap.bottom, n) {
							var o = Ne.x / t.w,
								a = Ne.y / t.h;
							t.fitRatio = a > o ? o : a;
							var s = r.scaleMode;
							"orig" === s ? i = 1 : "fit" === s && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = {
								center: {
									x: 0,
									y: 0
								},
								max: {
									x: 0,
									y: 0
								},
								min: {
									x: 0,
									y: 0
								}
							})
						}
						if(!i) return;
						return function(t, e, i) {
							var n = t.bounds;
							n.center.x = Math.round((Ne.x - e) / 2), n.center.y = Math.round((Ne.y - i) / 2) + t.vGap.top, n.max.x = e > Ne.x ? Math.round(Ne.x - e) : n.center.x, n.max.y = i > Ne.y ? Math.round(Ne.y - i) + t.vGap.top : n.center.y, n.min.x = e > Ne.x ? 0 : n.center.x, n.min.y = i > Ne.y ? t.vGap.top : n.center.y
						}(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
					}
					return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {
						center: {
							x: 0,
							y: 0
						},
						max: {
							x: 0,
							y: 0
						},
						min: {
							x: 0,
							y: 0
						}
					}, t.initialPosition = t.bounds.center, t.bounds
				},
				qe = function(t, e, i, n, o, r) {
					e.loadError || n && (e.imageAppended = !0, Ke(e, n, e === a.currItem && yt), i.appendChild(n), r && setTimeout(function() {
						e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
					}, 500))
				},
				Xe = function(t) {
					t.loading = !0, t.loaded = !1;
					var e = t.img = o.createEl("pswp__img", "img"),
						i = function() {
							t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
						};
					return e.onload = i, e.onerror = function() {
						t.loadError = !0, i()
					}, e.src = t.src, e
				},
				Ue = function(t, e) {
					return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = r.errorMsg.replace("%url%", t.src), !0) : void 0
				},
				Ke = function(t, e, i) {
					if(t.src) {
						e || (e = t.container.lastChild);
						var n = i ? t.w : Math.round(t.w * t.fitRatio),
							o = i ? t.h : Math.round(t.h * t.fitRatio);
						t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px"
					}
				},
				Qe = function() {
					if(Be.length) {
						for(var t, e = 0; e < Be.length; e++)(t = Be[e]).holder.index === t.index && qe(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
						Be = []
					}
				};
			xt("Controller", {
				publicMethods: {
					lazyLoadItem: function(t) {
						t = wt(t);
						var e = Ve(t);
						e && (!e.loaded && !e.loading || w) && (St("gettingData", t, e), e.src && Xe(e))
					},
					initController: function() {
						o.extend(r, je, !0), a.items = Fe = i, Ve = a.getItemAt, He = r.getNumItemsFn, r.loop, He() < 3 && (r.loop = !1), Ct("beforeChange", function(t) {
							var e, i = r.preload,
								n = null === t || t >= 0,
								o = Math.min(i[0], He()),
								s = Math.min(i[1], He());
							for(e = 1;
								(n ? s : o) >= e; e++) a.lazyLoadItem(u + e);
							for(e = 1;
								(n ? o : s) >= e; e++) a.lazyLoadItem(u - e)
						}), Ct("initialLayout", function() {
							a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(u)
						}), Ct("mainScrollAnimComplete", Qe), Ct("initialZoomInEnd", Qe), Ct("destroy", function() {
							for(var t, e = 0; e < Fe.length; e++)(t = Fe[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
							Be = null
						})
					},
					getItemAt: function(t) {
						return t >= 0 && void 0 !== Fe[t] && Fe[t]
					},
					allowProgressiveImg: function() {
						return r.forceProgressiveLoading || !A || r.mouseUsed || screen.width > 1200
					},
					setContent: function(t, e) {
						r.loop && (e = wt(e));
						var i = a.getItemAt(t.index);
						i && (i.container = null);
						var n, l = a.getItemAt(e);
						if(l) {
							St("gettingData", e, l), t.index = e, t.item = l;
							var c = l.container = o.createEl("pswp__zoom-wrap");
							if(!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Ue(l), Ye(l, dt), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((n = o.createEl("pswp__img", "img")).style.opacity = 1, n.src = l.src, Ke(l, n), qe(0, l, c, n));
							else {
								if(l.loadComplete = function(i) {
										if(s) {
											if(t && t.index === e) {
												if(Ue(i, !0)) return i.loadComplete = i.img = null, Ye(i, dt), Pt(i), void(t.index === u && a.updateCurrZoomItem());
												i.imageAppended ? !We && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : R.transform && (et || We) ? Be.push({
													item: i,
													baseDiv: c,
													img: i.img,
													index: e,
													holder: t,
													clearPlaceholder: !0
												}) : qe(0, i, c, i.img, 0, !0)
											}
											i.loadComplete = null, i.img = null, St("imageLoadComplete", e, i)
										}
									}, o.features.transform) {
									var d = "pswp__img pswp__img--placeholder";
									d += l.msrc ? "" : " pswp__img--placeholder--blank";
									var h = o.createEl(d, l.msrc ? "img" : "");
									l.msrc && (h.src = l.msrc), Ke(l, h), c.appendChild(h), l.placeholder = h
								}
								l.loading || Xe(l), a.allowProgressiveImg() && (!Re && R.transform ? Be.push({
									item: l,
									baseDiv: c,
									img: l.img,
									index: e,
									holder: t
								}) : qe(0, l, c, l.img, 0, !0))
							}
							Re || e !== u ? Pt(l) : (tt = c.style, ze(l, n || l.img)), t.el.innerHTML = "", t.el.appendChild(c)
						} else t.el.innerHTML = ""
					},
					cleanSlide: function(t) {
						t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
					}
				}
			});
			var Ze, Ge, Je = {},
				ti = function(t, e, i) {
					var n = document.createEvent("CustomEvent"),
						o = {
							origEvent: t,
							target: t.target,
							releasePoint: e,
							pointerType: i || "touch"
						};
					n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n)
				};
			xt("Tap", {
				publicMethods: {
					initTap: function() {
						Ct("firstTouchStart", a.onTapStart), Ct("touchRelease", a.onTapRelease), Ct("destroy", function() {
							Je = {}, Ze = null
						})
					},
					onTapStart: function(t) {
						t.length > 1 && (clearTimeout(Ze), Ze = null)
					},
					onTapRelease: function(t, e) {
						if(e && !X && !Y && !Yt) {
							var i = e;
							if(Ze && (clearTimeout(Ze), Ze = null, function(t, e) {
									return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
								}(i, Je))) return void St("doubleTap", i);
							if("mouse" === e.type) return void ti(t, e, "mouse");
							if("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap")) return void ti(t, e);
							Dt(Je, i), Ze = setTimeout(function() {
								ti(t, e), Ze = null
							}, 300)
						}
					}
				}
			}), xt("DesktopZoom", {
				publicMethods: {
					initDesktopZoom: function() {
						L || (A ? Ct("mouseUsed", function() {
							a.setupDesktopZoom()
						}) : a.setupDesktopZoom(!0))
					},
					setupDesktopZoom: function(e) {
						Ge = {};
						var i = "wheel mousewheel DOMMouseScroll";
						Ct("bindEvents", function() {
							o.bind(t, i, a.handleMouseWheel)
						}), Ct("unbindEvents", function() {
							Ge && o.unbind(t, i, a.handleMouseWheel)
						}), a.mouseZoomedIn = !1;
						var n, r = function() {
								a.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > v ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
							},
							s = function() {
								n && (o.removeClass(t, "pswp--dragging"), n = !1)
							};
						Ct("resize", r), Ct("afterChange", r), Ct("pointerDown", function() {
							a.mouseZoomedIn && (n = !0, o.addClass(t, "pswp--dragging"))
						}), Ct("pointerUp", s), e || r()
					},
					handleMouseWheel: function(t) {
						if(v <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || Yt || j ? t.preventDefault() : _ && Math.abs(t.deltaY) > 2 && (c = !0, a.close())), !0;
						if(t.stopPropagation(), Ge.x = 0, "deltaX" in t) 1 === t.deltaMode ? (Ge.x = 18 * t.deltaX, Ge.y = 18 * t.deltaY) : (Ge.x = t.deltaX, Ge.y = t.deltaY);
						else if("wheelDelta" in t) t.wheelDeltaX && (Ge.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? Ge.y = -.16 * t.wheelDeltaY : Ge.y = -.16 * t.wheelDelta;
						else {
							if(!("detail" in t)) return;
							Ge.y = t.detail
						}
						Rt(v, !0);
						var e = ut.x - Ge.x,
							i = ut.y - Ge.y;
						(r.modal || e <= J.min.x && e >= J.max.x && i <= J.min.y && i >= J.max.y) && t.preventDefault(), a.panTo(e, i)
					},
					toggleDesktopZoom: function(e) {
						e = e || {
							x: dt.x / 2 + pt.x,
							y: dt.y / 2 + pt.y
						};
						var i = r.getDoubleTapZoom(!0, a.currItem),
							n = v === i;
						a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, e, 333), o[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
					}
				}
			});
			var ei, ii, ni, oi, ai, ri, si, li, ci, ui, di, hi, pi = {
					history: !0,
					galleryUID: 1
				},
				fi = function() {
					return di.hash.substring(1)
				},
				mi = function() {
					ei && clearTimeout(ei), ni && clearTimeout(ni)
				},
				vi = function() {
					var t = fi(),
						e = {};
					if(t.length < 5) return e;
					var i, n = t.split("&");
					for(i = 0; i < n.length; i++)
						if(n[i]) {
							var o = n[i].split("=");
							o.length < 2 || (e[o[0]] = o[1])
						}
					if(r.galleryPIDs) {
						var a = e.pid;
						for(e.pid = 0, i = 0; i < Fe.length; i++)
							if(Fe[i].pid === a) {
								e.pid = i;
								break
							}
					} else e.pid = parseInt(e.pid, 10) - 1;
					return e.pid < 0 && (e.pid = 0), e
				},
				gi = function() {
					if(ni && clearTimeout(ni), Yt || j) ni = setTimeout(gi, 500);
					else {
						oi ? clearTimeout(ii) : oi = !0;
						var t = u + 1,
							e = Ve(u);
						e.hasOwnProperty("pid") && (t = e.pid);
						var i = si + "&gid=" + r.galleryUID + "&pid=" + t;
						li || -1 === di.hash.indexOf(i) && (ui = !0);
						var n = di.href.split("#")[0] + "#" + i;
						hi ? "#" + i !== window.location.hash && history[li ? "replaceState" : "pushState"]("", document.title, n) : li ? di.replace(n) : di.hash = i, li = !0, ii = setTimeout(function() {
							oi = !1
						}, 60)
					}
				};
			xt("History", {
				publicMethods: {
					initHistory: function() {
						if(o.extend(r, pi, !0), r.history) {
							di = window.location, ui = !1, ci = !1, li = !1, si = fi(), hi = "pushState" in history, si.indexOf("gid=") > -1 && (si = (si = si.split("&gid=")[0]).split("?gid=")[0]), Ct("afterChange", a.updateURL), Ct("unbindEvents", function() {
								o.unbind(window, "hashchange", a.onHashChange)
							});
							var t = function() {
								ri = !0, ci || (ui ? history.back() : si ? di.hash = si : hi ? history.pushState("", document.title, di.pathname + di.search) : di.hash = ""), mi()
							};
							Ct("unbindEvents", function() {
								c && t()
							}), Ct("destroy", function() {
								ri || t()
							}), Ct("firstUpdate", function() {
								u = vi().pid
							});
							var e = si.indexOf("pid=");
							e > -1 && "&" === (si = si.substring(0, e)).slice(-1) && (si = si.slice(0, -1)), setTimeout(function() {
								s && o.bind(window, "hashchange", a.onHashChange)
							}, 40)
						}
					},
					onHashChange: function() {
						return fi() === si ? (ci = !0, void a.close()) : void(oi || (ai = !0, a.goTo(vi().pid), ai = !1))
					},
					updateURL: function() {
						mi(), ai || (li ? ei = setTimeout(gi, 800) : gi())
					}
				}
			}), o.extend(a, Qt)
		}
	}),
	function(t, e) {
		"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : window.PhotoSwipeUI_Default = e()
	}(0, function() {
		"use strict";
		return function(t, e) {
			var i, n, o, a, r, s, l, c, u, d, h, p, f, m, v, g, b, y, x = this,
				w = !1,
				k = !0,
				C = !0,
				S = {
					barsSize: {
						top: 44,
						bottom: "auto"
					},
					closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
					timeToIdle: 4e3,
					timeToIdleOutside: 1e3,
					loadingIndicatorDelay: 1e3,
					addCaptionHTMLFn: function(t, e) {
						return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
					},
					closeEl: !0,
					captionEl: !0,
					fullscreenEl: !0,
					zoomEl: !0,
					shareEl: !0,
					counterEl: !0,
					arrowEl: !0,
					preloaderEl: !0,
					tapToClose: !1,
					tapToToggleControls: !0,
					clickToCloseNonZoomable: !0,
					shareButtons: [{
						id: "facebook",
						label: "Share on Facebook",
						url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
					}, {
						id: "twitter",
						label: "Tweet",
						url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
					}, {
						id: "pinterest",
						label: "Pin it",
						url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
					}, {
						id: "download",
						label: "Download image",
						url: "{{raw_image_url}}",
						download: !0
					}],
					getImageURLForShare: function() {
						return t.currItem.src || ""
					},
					getPageURLForShare: function() {
						return window.location.href
					},
					getTextForShare: function() {
						return t.currItem.title || ""
					},
					indexIndicatorSep: " / ",
					fitControlsWidth: 1200
				},
				M = function(t) {
					if(g) return !0;
					t = t || window.event, v.timeToIdle && v.mouseUsed && !u && L();
					for(var i, n, o = (t.target || t.srcElement).getAttribute("class") || "", a = 0; a < V.length; a++)(i = V[a]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
					if(n) {
						t.stopPropagation && t.stopPropagation(), g = !0;
						var r = e.features.isOldAndroid ? 600 : 30;
						setTimeout(function() {
							g = !1
						}, r)
					}
				},
				T = function() {
					return !t.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
				},
				O = function(t, i, n) {
					e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i)
				},
				_ = function() {
					var t = 1 === v.getNumItemsFn();
					t !== m && (O(n, "ui--one-slide", t), m = t)
				},
				P = function() {
					O(l, "share-modal--hidden", C)
				},
				A = function() {
					return(C = !C) ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
						C && P()
					}, 300)) : (P(), setTimeout(function() {
						C || e.addClass(l, "pswp__share-modal--fade-in")
					}, 30)), C || $(), !1
				},
				I = function(e) {
					var i = (e = e || window.event).target || e.srcElement;
					return t.shout("shareLinkClick", e, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || A(), 1))
				},
				$ = function() {
					for(var t, e, i, n, o = "", a = 0; a < v.shareButtons.length; a++) t = v.shareButtons[a], e = v.getImageURLForShare(t), i = v.getPageURLForShare(t), n = v.getTextForShare(t), o += '<a href="' + t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(e)).replace("{{raw_image_url}}", e).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", v.parseShareButtonOut && (o = v.parseShareButtonOut(t, o));
					l.children[0].innerHTML = o, l.children[0].onclick = I
				},
				D = function(t) {
					for(var i = 0; i < v.closeElClasses.length; i++)
						if(e.hasClass(t, "pswp__" + v.closeElClasses[i])) return !0
				},
				E = 0,
				L = function() {
					clearTimeout(y), E = 0, u && x.setIdle(!1)
				},
				F = function(t) {
					var e = (t = t || window.event).relatedTarget || t.toElement;
					e && "HTML" !== e.nodeName || (clearTimeout(y), y = setTimeout(function() {
						x.setIdle(!0)
					}, v.timeToIdleOutside))
				},
				R = function(t) {
					p !== t && (O(h, "preloader--active", !t), p = t)
				},
				W = function(t) {
					var i = t.vGap;
					if(T()) {
						var r = v.barsSize;
						if(v.captionEl && "auto" === r.bottom)
							if(a || ((a = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")), n.insertBefore(a, o), e.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(t, a, !0)) {
								var s = a.clientHeight;
								i.bottom = parseInt(s, 10) || 44
							} else i.bottom = r.top;
						else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
						i.top = r.top
					} else i.top = i.bottom = 0
				},
				V = [{
					name: "caption",
					option: "captionEl",
					onInit: function(t) {
						o = t
					}
				}, {
					name: "share-modal",
					option: "shareEl",
					onInit: function(t) {
						l = t
					},
					onTap: function() {
						A()
					}
				}, {
					name: "button--share",
					option: "shareEl",
					onInit: function(t) {
						s = t
					},
					onTap: function() {
						A()
					}
				}, {
					name: "button--zoom",
					option: "zoomEl",
					onTap: t.toggleDesktopZoom
				}, {
					name: "counter",
					option: "counterEl",
					onInit: function(t) {
						r = t
					}
				}, {
					name: "button--close",
					option: "closeEl",
					onTap: t.close
				}, {
					name: "button--arrow--left",
					option: "arrowEl",
					onTap: t.prev
				}, {
					name: "button--arrow--right",
					option: "arrowEl",
					onTap: t.next
				}, {
					name: "button--fs",
					option: "fullscreenEl",
					onTap: function() {
						i.isFullscreen() ? i.exit() : i.enter()
					}
				}, {
					name: "preloader",
					option: "preloaderEl",
					onInit: function(t) {
						h = t
					}
				}];
			x.init = function() {
				e.extend(t.options, S, !0), v = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), d = t.listen,
					function() {
						var t;
						d("onVerticalDrag", function(t) {
							k && .95 > t ? x.hideControls() : !k && t >= .95 && x.showControls()
						}), d("onPinchClose", function(e) {
							k && .9 > e ? (x.hideControls(), t = !0) : t && !k && e > .9 && x.showControls()
						}), d("zoomGestureEnded", function() {
							(t = !1) && !k && x.showControls()
						})
					}(), d("beforeChange", x.update), d("doubleTap", function(e) {
						var i = t.currItem.initialZoomLevel;
						t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(v.getDoubleTapZoom(!1, t.currItem), e, 333)
					}), d("preventDragEvent", function(t, e, i) {
						var n = t.target || t.srcElement;
						n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
					}), d("bindEvents", function() {
						e.bind(n, "pswpTap click", M), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
					}), d("unbindEvents", function() {
						C || A(), b && clearInterval(b), e.unbind(document, "mouseout", F), e.unbind(document, "mousemove", L), e.unbind(n, "pswpTap click", M), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), i && (e.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null)
					}), d("destroy", function() {
						v.captionEl && (a && n.removeChild(a), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
					}), v.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", function() {
						v.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden")
					}), d("initialZoomOut", function() {
						e.addClass(n, "pswp__ui--hidden")
					}), d("parseVerticalMargin", W),
					function() {
						var t, i, o, a = function(n) {
							if(n)
								for(var a = n.length, r = 0; a > r; r++) {
									t = n[r], i = t.className;
									for(var s = 0; s < V.length; s++) o = V[s], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
								}
						};
						a(n.children);
						var r = e.getChildByClass(n, "pswp__top-bar");
						r && a(r.children)
					}(), v.shareEl && s && l && (C = !0), _(), v.timeToIdle && d("mouseUsed", function() {
						e.bind(document, "mousemove", L), e.bind(document, "mouseout", F), b = setInterval(function() {
							2 == ++E && x.setIdle(!0)
						}, v.timeToIdle / 2)
					}), v.fullscreenEl && !e.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (e.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")), v.preloaderEl && (R(!0), d("beforeChange", function() {
						clearTimeout(f), f = setTimeout(function() {
							t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && R(!1) : R(!0)
						}, v.loadingIndicatorDelay)
					}), d("imageLoadComplete", function(e, i) {
						t.currItem === i && R(!0)
					}))
			}, x.setIdle = function(t) {
				u = t, O(n, "ui--idle", t)
			}, x.update = function() {
				k && t.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(t.currItem, o), O(o, "caption--empty", !t.currItem.title)), w = !0) : w = !1, C || A(), _()
			}, x.updateFullscreen = function(n) {
				n && setTimeout(function() {
					t.setScrollOffset(0, e.getScrollY())
				}, 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
			}, x.updateIndexIndicator = function() {
				v.counterEl && (r.innerHTML = t.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
			}, x.onGlobalTap = function(i) {
				var n = (i = i || window.event).target || i.srcElement;
				if(!g)
					if(i.detail && "mouse" === i.detail.pointerType) {
						if(D(n)) return void t.close();
						e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? v.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint))
					} else if(v.tapToToggleControls && (k ? x.hideControls() : x.showControls()), v.tapToClose && (e.hasClass(n, "pswp__img") || D(n))) return void t.close()
			}, x.onMouseOver = function(t) {
				var e = (t = t || window.event).target || t.srcElement;
				O(n, "ui--over-close", D(e))
			}, x.hideControls = function() {
				e.addClass(n, "pswp__ui--hidden"), k = !1
			}, x.showControls = function() {
				k = !0, w || x.update(), e.removeClass(n, "pswp__ui--hidden")
			}, x.supportsFullscreen = function() {
				var t = document;
				return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
			}, x.getFullscreenAPI = function() {
				var e, i = document.documentElement,
					n = "fullscreenchange";
				return i.requestFullscreen ? e = {
					enterK: "requestFullscreen",
					exitK: "exitFullscreen",
					elementK: "fullscreenElement",
					eventK: n
				} : i.mozRequestFullScreen ? e = {
					enterK: "mozRequestFullScreen",
					exitK: "mozCancelFullScreen",
					elementK: "mozFullScreenElement",
					eventK: "moz" + n
				} : i.webkitRequestFullscreen ? e = {
					enterK: "webkitRequestFullscreen",
					exitK: "webkitExitFullscreen",
					elementK: "webkitFullscreenElement",
					eventK: "webkit" + n
				} : i.msRequestFullscreen && (e = {
					enterK: "msRequestFullscreen",
					exitK: "msExitFullscreen",
					elementK: "msFullscreenElement",
					eventK: "MSFullscreenChange"
				}), e && (e.enter = function() {
					return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
				}, e.exit = function() {
					return v.closeOnScroll = c, document[this.exitK]()
				}, e.isFullscreen = function() {
					return document[this.elementK]
				}), e
			}
		}
	});
var initPhotoSwipeFromDOM = function(t) {
	for(var e = function(t) {
			(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1;
			var e = function t(e, i) {
				return e && (i(e) ? e : t(e.parentNode, i))
			}(t.target || t.srcElement, function(t) {
				return t.tagName && "FIGURE" === t.tagName.toUpperCase()
			});
			if(e) {
				for(var n, o = e.parentNode, a = e.parentNode.childNodes, r = a.length, s = 0, l = 0; l < r; l++)
					if(1 === a[l].nodeType) {
						if(a[l] === e) {
							n = s;
							break
						}
						s++
					}
				return n >= 0 && i(n, o), !1
			}
		}, i = function(t, e, i, n) {
			var o, a, r = document.querySelectorAll(".pswp")[0];
			if(a = function(t) {
					for(var e, i, n, o, a = t.childNodes, r = a.length, s = [], l = 0; l < r; l++) 1 === (e = a[l]).nodeType && (n = (i = e.children[0]).getAttribute("data-size").split("x"), o = {
						src: i.getAttribute("href"),
						w: parseInt(n[0], 10),
						h: parseInt(n[1], 10)
					}, e.children.length > 1 && (o.title = e.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = e, s.push(o));
					return s
				}(e), o = {
					galleryUID: e.getAttribute("data-pswp-uid"),
					getThumbBoundsFn: function(t) {
						var e = a[t].el.getElementsByTagName("img")[0],
							i = window.pageYOffset || document.documentElement.scrollTop,
							n = e.getBoundingClientRect();
						return {
							x: n.left,
							y: n.top + i,
							w: n.width
						}
					}
				}, n)
				if(o.galleryPIDs) {
					for(var s = 0; s < a.length; s++)
						if(a[s].pid == t) {
							o.index = s;
							break
						}
				} else o.index = parseInt(t, 10) - 1;
			else o.index = parseInt(t, 10);
			isNaN(o.index) || (i && (o.showAnimationDuration = 0), new PhotoSwipe(r, PhotoSwipeUI_Default, a, o).init())
		}, n = document.querySelectorAll(t), o = 0, a = n.length; o < a; o++) n[o].setAttribute("data-pswp-uid", o + 1), n[o].onclick = e;
	var r = function() {
		var t = window.location.hash.substring(1),
			e = {};
		if(t.length < 5) return e;
		for(var i = t.split("&"), n = 0; n < i.length; n++)
			if(i[n]) {
				var o = i[n].split("=");
				o.length < 2 || (e[o[0]] = o[1])
			}
		return e.gid && (e.gid = parseInt(e.gid, 10)), e
	}();
	r.pid && r.gid && i(r.pid, n[r.gid - 1], !0, !0)
};

function _defineProperties(t, e) {
	for(var i = 0; i < e.length; i++) {
		var n = e[i];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	}
}

function _createClass(t, e, i) {
	return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}
initPhotoSwipeFromDOM(".mdb-lightbox"),
	function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).PerfectScrollbar = e()
	}(this, function() {
		"use strict";

		function t(t) {
			return getComputedStyle(t)
		}

		function e(t, e) {
			for(var i in e) {
				var n = e[i];
				"number" == typeof n && (n += "px"), t.style[i] = n
			}
			return t
		}

		function i(t) {
			var e = document.createElement("div");
			return e.className = t, e
		}
		var n = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

		function o(t, e) {
			if(!n) throw new Error("No element matching method supported");
			return n.call(t, e)
		}

		function a(t) {
			t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}

		function r(t, e) {
			return Array.prototype.filter.call(t.children, function(t) {
				return o(t, e)
			})
		}
		var s = {
				main: "ps",
				rtl: "ps__rtl",
				element: {
					thumb: function(t) {
						return "ps__thumb-" + t
					},
					rail: function(t) {
						return "ps__rail-" + t
					},
					consuming: "ps__child--consume"
				},
				state: {
					focus: "ps--focus",
					clicking: "ps--clicking",
					active: function(t) {
						return "ps--active-" + t
					},
					scrolling: function(t) {
						return "ps--scrolling-" + t
					}
				}
			},
			l = {
				x: null,
				y: null
			};

		function c(t, e) {
			var i = t.element.classList,
				n = s.state.scrolling(e);
			i.contains(n) ? clearTimeout(l[e]) : i.add(n)
		}

		function u(t, e) {
			l[e] = setTimeout(function() {
				return t.isAlive && t.element.classList.remove(s.state.scrolling(e))
			}, t.settings.scrollingThreshold)
		}
		var d = function(t) {
				this.element = t, this.handlers = {}
			},
			h = {
				isEmpty: {
					configurable: !0
				}
			};
		d.prototype.bind = function(t, e) {
			void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
		}, d.prototype.unbind = function(t, e) {
			var i = this;
			this.handlers[t] = this.handlers[t].filter(function(n) {
				return !(!e || n === e) || (i.element.removeEventListener(t, n, !1), !1)
			})
		}, d.prototype.unbindAll = function() {
			for(var t in this.handlers) this.unbind(t)
		}, h.isEmpty.get = function() {
			var t = this;
			return Object.keys(this.handlers).every(function(e) {
				return 0 === t.handlers[e].length
			})
		}, Object.defineProperties(d.prototype, h);
		var p = function() {
			this.eventElements = []
		};

		function f(t) {
			if("function" == typeof window.CustomEvent) return new CustomEvent(t);
			var e = document.createEvent("CustomEvent");
			return e.initCustomEvent(t, !1, !1, void 0), e
		}

		function m(t, e, i, n, o) {
			var a;
			if(void 0 === n && (n = !0), void 0 === o && (o = !1), "top" === e) a = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
			else {
				if("left" !== e) throw new Error("A proper axis should be provided");
				a = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
			}! function(t, e, i, n, o) {
				var a = i[0],
					r = i[1],
					s = i[2],
					l = i[3],
					d = i[4],
					h = i[5];
				void 0 === n && (n = !0);
				void 0 === o && (o = !1);
				var p = t.element;
				t.reach[l] = null, p[s] < 1 && (t.reach[l] = "start");
				p[s] > t[a] - t[r] - 1 && (t.reach[l] = "end");
				e && (p.dispatchEvent(f("ps-scroll-" + l)), e < 0 ? p.dispatchEvent(f("ps-scroll-" + d)) : e > 0 && p.dispatchEvent(f("ps-scroll-" + h)), n && function(t, e) {
					c(t, e), u(t, e)
				}(t, l));
				t.reach[l] && (e || o) && p.dispatchEvent(f("ps-" + l + "-reach-" + t.reach[l]))
			}(t, i, a, n, o)
		}

		function v(t) {
			return parseInt(t, 10) || 0
		}
		p.prototype.eventElement = function(t) {
			var e = this.eventElements.filter(function(e) {
				return e.element === t
			})[0];
			return e || (e = new d(t), this.eventElements.push(e)), e
		}, p.prototype.bind = function(t, e, i) {
			this.eventElement(t).bind(e, i)
		}, p.prototype.unbind = function(t, e, i) {
			var n = this.eventElement(t);
			n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
		}, p.prototype.unbindAll = function() {
			this.eventElements.forEach(function(t) {
				return t.unbindAll()
			}), this.eventElements = []
		}, p.prototype.once = function(t, e, i) {
			var n = this.eventElement(t),
				o = function(t) {
					n.unbind(e, o), i(t)
				};
			n.bind(e, o)
		};
		var g = {
			isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
			supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
			supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
			isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
		};

		function b(t) {
			var i = t.element,
				n = Math.floor(i.scrollTop),
				o = i.getBoundingClientRect();
			t.containerWidth = Math.ceil(o.width), t.containerHeight = Math.ceil(o.height), t.contentWidth = i.scrollWidth, t.contentHeight = i.scrollHeight, i.contains(t.scrollbarXRail) || (r(i, s.element.rail("x")).forEach(function(t) {
					return a(t)
				}), i.appendChild(t.scrollbarXRail)), i.contains(t.scrollbarYRail) || (r(i, s.element.rail("y")).forEach(function(t) {
					return a(t)
				}), i.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = y(t, v(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = v((t.negativeScrollAdjustment + i.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = y(t, v(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = v(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
				function(t, i) {
					var n = {
							width: i.railXWidth
						},
						o = Math.floor(t.scrollTop);
					i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : n.left = t.scrollLeft;
					i.isScrollbarXUsingBottom ? n.bottom = i.scrollbarXBottom - o : n.top = i.scrollbarXTop + o;
					e(i.scrollbarXRail, n);
					var a = {
						top: o,
						height: i.railYHeight
					};
					i.isScrollbarYUsingRight ? i.isRtl ? a.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9 : a.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? a.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : a.left = i.scrollbarYLeft + t.scrollLeft;
					e(i.scrollbarYRail, a), e(i.scrollbarX, {
						left: i.scrollbarXLeft,
						width: i.scrollbarXWidth - i.railBorderXWidth
					}), e(i.scrollbarY, {
						top: i.scrollbarYTop,
						height: i.scrollbarYHeight - i.railBorderYWidth
					})
				}(i, t), t.scrollbarXActive ? i.classList.add(s.state.active("x")) : (i.classList.remove(s.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, i.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? i.classList.add(s.state.active("y")) : (i.classList.remove(s.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, i.scrollTop = 0)
		}

		function y(t, e) {
			return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
		}

		function x(t, e) {
			var i = e[0],
				n = e[1],
				o = e[2],
				a = e[3],
				r = e[4],
				l = e[5],
				d = e[6],
				h = e[7],
				p = e[8],
				f = t.element,
				m = null,
				v = null,
				g = null;

			function y(e) {
				e.touches && e.touches[0] && (e[o] = e.touches[0].pageY), f[d] = m + g * (e[o] - v), c(t, h), b(t), e.stopPropagation(), e.preventDefault()
			}

			function x() {
				u(t, h), t[p].classList.remove(s.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", y)
			}

			function w(e, r) {
				m = f[d], r && e.touches && (e[o] = e.touches[0].pageY), v = e[o], g = (t[n] - t[i]) / (t[a] - t[l]), r ? t.event.bind(t.ownerDocument, "touchmove", y) : (t.event.bind(t.ownerDocument, "mousemove", y), t.event.once(t.ownerDocument, "mouseup", x), e.preventDefault()), t[p].classList.add(s.state.clicking), e.stopPropagation()
			}
			t.event.bind(t[r], "mousedown", function(t) {
				w(t)
			}), t.event.bind(t[r], "touchstart", function(t) {
				w(t, !0)
			})
		}
		var w = {
				"click-rail": function(t) {
					t.element, t.event.bind(t.scrollbarY, "mousedown", function(t) {
						return t.stopPropagation()
					}), t.event.bind(t.scrollbarYRail, "mousedown", function(e) {
						var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
						t.element.scrollTop += i * t.containerHeight, b(t), e.stopPropagation()
					}), t.event.bind(t.scrollbarX, "mousedown", function(t) {
						return t.stopPropagation()
					}), t.event.bind(t.scrollbarXRail, "mousedown", function(e) {
						var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
						t.element.scrollLeft += i * t.containerWidth, b(t), e.stopPropagation()
					})
				},
				"drag-thumb": function(t) {
					x(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), x(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
				},
				keyboard: function(t) {
					var e = t.element;
					t.event.bind(t.ownerDocument, "keydown", function(i) {
						if(!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (o(e, ":hover") || o(t.scrollbarX, ":focus") || o(t.scrollbarY, ":focus"))) {
							var n, a = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
							if(a) {
								if("IFRAME" === a.tagName) a = a.contentDocument.activeElement;
								else
									for(; a.shadowRoot;) a = a.shadowRoot.activeElement;
								if(o(n = a, "input,[contenteditable]") || o(n, "select,[contenteditable]") || o(n, "textarea,[contenteditable]") || o(n, "button,[contenteditable]")) return
							}
							var r = 0,
								s = 0;
							switch(i.which) {
								case 37:
									r = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
									break;
								case 38:
									s = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
									break;
								case 39:
									r = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
									break;
								case 40:
									s = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
									break;
								case 32:
									s = i.shiftKey ? t.containerHeight : -t.containerHeight;
									break;
								case 33:
									s = t.containerHeight;
									break;
								case 34:
									s = -t.containerHeight;
									break;
								case 36:
									s = t.contentHeight;
									break;
								case 35:
									s = -t.contentHeight;
									break;
								default:
									return
							}
							t.settings.suppressScrollX && 0 !== r || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += r, b(t), function(i, n) {
								var o = Math.floor(e.scrollTop);
								if(0 === i) {
									if(!t.scrollbarYActive) return !1;
									if(0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
								}
								var a = e.scrollLeft;
								if(0 === n) {
									if(!t.scrollbarXActive) return !1;
									if(0 === a && i < 0 || a >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
								}
								return !0
							}(r, s) && i.preventDefault())
						}
					})
				},
				wheel: function(e) {
					var i = e.element;

					function n(n) {
						var o = function(t) {
								var e = t.deltaX,
									i = -1 * t.deltaY;
								return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
							}(n),
							a = o[0],
							r = o[1];
						if(! function(e, n, o) {
								if(!g.isWebKit && i.querySelector("select:focus")) return !0;
								if(!i.contains(e)) return !1;
								for(var a = e; a && a !== i;) {
									if(a.classList.contains(s.element.consuming)) return !0;
									var r = t(a);
									if(o && r.overflowY.match(/(scroll|auto)/)) {
										var l = a.scrollHeight - a.clientHeight;
										if(l > 0 && (a.scrollTop > 0 && o < 0 || a.scrollTop < l && o > 0)) return !0
									}
									if(n && r.overflowX.match(/(scroll|auto)/)) {
										var c = a.scrollWidth - a.clientWidth;
										if(c > 0 && (a.scrollLeft > 0 && n < 0 || a.scrollLeft < c && n > 0)) return !0
									}
									a = a.parentNode
								}
								return !1
							}(n.target, a, r)) {
							var l = !1;
							e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (r ? i.scrollTop -= r * e.settings.wheelSpeed : i.scrollTop += a * e.settings.wheelSpeed, l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a ? i.scrollLeft += a * e.settings.wheelSpeed : i.scrollLeft -= r * e.settings.wheelSpeed, l = !0) : (i.scrollTop -= r * e.settings.wheelSpeed, i.scrollLeft += a * e.settings.wheelSpeed), b(e), (l = l || function(t, n) {
								var o = Math.floor(i.scrollTop),
									a = 0 === i.scrollTop,
									r = o + i.offsetHeight === i.scrollHeight,
									s = 0 === i.scrollLeft,
									l = i.scrollLeft + i.offsetWidth === i.scrollWidth;
								return !(Math.abs(n) > Math.abs(t) ? a || r : s || l) || !e.settings.wheelPropagation
							}(a, r)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
						}
					}
					void 0 !== window.onwheel ? e.event.bind(i, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(i, "mousewheel", n)
				},
				touch: function(e) {
					if(g.supportsTouch || g.supportsIePointer) {
						var i = e.element,
							n = {},
							o = 0,
							a = {},
							r = null;
						g.supportsTouch ? (e.event.bind(i, "touchstart", d), e.event.bind(i, "touchmove", h), e.event.bind(i, "touchend", p)) : g.supportsIePointer && (window.PointerEvent ? (e.event.bind(i, "pointerdown", d), e.event.bind(i, "pointermove", h), e.event.bind(i, "pointerup", p)) : window.MSPointerEvent && (e.event.bind(i, "MSPointerDown", d), e.event.bind(i, "MSPointerMove", h), e.event.bind(i, "MSPointerUp", p)))
					}

					function l(t, n) {
						i.scrollTop -= n, i.scrollLeft -= t, b(e)
					}

					function c(t) {
						return t.targetTouches ? t.targetTouches[0] : t
					}

					function u(t) {
						return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
					}

					function d(t) {
						if(u(t)) {
							var e = c(t);
							n.pageX = e.pageX, n.pageY = e.pageY, o = (new Date).getTime(), null !== r && clearInterval(r)
						}
					}

					function h(r) {
						if(u(r)) {
							var d = c(r),
								h = {
									pageX: d.pageX,
									pageY: d.pageY
								},
								p = h.pageX - n.pageX,
								f = h.pageY - n.pageY;
							if(function(e, n, o) {
									if(!i.contains(e)) return !1;
									for(var a = e; a && a !== i;) {
										if(a.classList.contains(s.element.consuming)) return !0;
										var r = t(a);
										if(o && r.overflowY.match(/(scroll|auto)/)) {
											var l = a.scrollHeight - a.clientHeight;
											if(l > 0 && (a.scrollTop > 0 && o < 0 || a.scrollTop < l && o > 0)) return !0
										}
										if(n && r.overflowX.match(/(scroll|auto)/)) {
											var c = a.scrollWidth - a.clientWidth;
											if(c > 0 && (a.scrollLeft > 0 && n < 0 || a.scrollLeft < c && n > 0)) return !0
										}
										a = a.parentNode
									}
									return !1
								}(r.target, p, f)) return;
							l(p, f), n = h;
							var m = (new Date).getTime(),
								v = m - o;
							v > 0 && (a.x = p / v, a.y = f / v, o = m),
								function(t, n) {
									var o = Math.floor(i.scrollTop),
										a = i.scrollLeft,
										r = Math.abs(t),
										s = Math.abs(n);
									if(s > r) {
										if(n < 0 && o === e.contentHeight - e.containerHeight || n > 0 && 0 === o) return 0 === window.scrollY && n > 0 && g.isChrome
									} else if(r > s && (t < 0 && a === e.contentWidth - e.containerWidth || t > 0 && 0 === a)) return !0;
									return !0
								}(p, f) && r.preventDefault()
						}
					}

					function p() {
						e.settings.swipeEasing && (clearInterval(r), r = setInterval(function() {
							e.isInitialized ? clearInterval(r) : a.x || a.y ? Math.abs(a.x) < .01 && Math.abs(a.y) < .01 ? clearInterval(r) : (l(30 * a.x, 30 * a.y), a.x *= .8, a.y *= .8) : clearInterval(r)
						}, 10))
					}
				}
			},
			k = function(n, o) {
				var a = this;
				if(void 0 === o && (o = {}), "string" == typeof n && (n = document.querySelector(n)), !n || !n.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
				for(var r in this.element = n, n.classList.add(s.main), this.settings = {
						handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
						maxScrollbarLength: null,
						minScrollbarLength: null,
						scrollingThreshold: 1e3,
						scrollXMarginOffset: 0,
						scrollYMarginOffset: 0,
						suppressScrollX: !1,
						suppressScrollY: !1,
						swipeEasing: !0,
						useBothWheelAxes: !1,
						wheelPropagation: !0,
						wheelSpeed: 1
					}, o) this.settings[r] = o[r];
				this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
				var l, c, u = function() {
						return n.classList.add(s.state.focus)
					},
					d = function() {
						return n.classList.remove(s.state.focus)
					};
				this.isRtl = "rtl" === t(n).direction, !0 === this.isRtl && n.classList.add(s.rtl), this.isNegativeScroll = (c = n.scrollLeft, n.scrollLeft = -1, l = n.scrollLeft < 0, n.scrollLeft = c, l), this.negativeScrollAdjustment = this.isNegativeScroll ? n.scrollWidth - n.clientWidth : 0, this.event = new p, this.ownerDocument = n.ownerDocument || document, this.scrollbarXRail = i(s.element.rail("x")), n.appendChild(this.scrollbarXRail), this.scrollbarX = i(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", u), this.event.bind(this.scrollbarX, "blur", d), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
				var h = t(this.scrollbarXRail);
				this.scrollbarXBottom = parseInt(h.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = v(h.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = v(h.borderLeftWidth) + v(h.borderRightWidth), e(this.scrollbarXRail, {
					display: "block"
				}), this.railXMarginWidth = v(h.marginLeft) + v(h.marginRight), e(this.scrollbarXRail, {
					display: ""
				}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(s.element.rail("y")), n.appendChild(this.scrollbarYRail), this.scrollbarY = i(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", u), this.event.bind(this.scrollbarY, "blur", d), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
				var f = t(this.scrollbarYRail);
				this.scrollbarYRight = parseInt(f.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = v(f.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(e) {
					var i = t(e);
					return v(i.width) + v(i.paddingLeft) + v(i.paddingRight) + v(i.borderLeftWidth) + v(i.borderRightWidth)
				}(this.scrollbarY) : null, this.railBorderYWidth = v(f.borderTopWidth) + v(f.borderBottomWidth), e(this.scrollbarYRail, {
					display: "block"
				}), this.railYMarginHeight = v(f.marginTop) + v(f.marginBottom), e(this.scrollbarYRail, {
					display: ""
				}), this.railYHeight = null, this.railYRatio = null, this.reach = {
					x: n.scrollLeft <= 0 ? "start" : n.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
					y: n.scrollTop <= 0 ? "start" : n.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
				}, this.isAlive = !0, this.settings.handlers.forEach(function(t) {
					return w[t](a)
				}), this.lastScrollTop = Math.floor(n.scrollTop), this.lastScrollLeft = n.scrollLeft, this.event.bind(this.element, "scroll", function(t) {
					return a.onScroll(t)
				}), b(this)
			};
		return k.prototype.update = function() {
			this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
				display: "block"
			}), e(this.scrollbarYRail, {
				display: "block"
			}), this.railXMarginWidth = v(t(this.scrollbarXRail).marginLeft) + v(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = v(t(this.scrollbarYRail).marginTop) + v(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
				display: "none"
			}), e(this.scrollbarYRail, {
				display: "none"
			}), b(this), m(this, "top", 0, !1, !0), m(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
				display: ""
			}), e(this.scrollbarYRail, {
				display: ""
			}))
		}, k.prototype.onScroll = function(t) {
			this.isAlive && (b(this), m(this, "top", this.element.scrollTop - this.lastScrollTop), m(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
		}, k.prototype.destroy = function() {
			this.isAlive && (this.event.unbindAll(), a(this.scrollbarX), a(this.scrollbarY), a(this.scrollbarXRail), a(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
		}, k.prototype.removePsClasses = function() {
			this.element.className = this.element.className.split(" ").filter(function(t) {
				return !t.match(/^ps([-_].+|)$/)
			}).join(" ")
		}, k
	}), jQuery(function(t) {
		t(document).on("click", ".chip .close", function() {
			var e = t(this);
			e.closest(".chips").data("initialized") || e.closest(".chip").remove()
		});
		var e = function() {
			function e(e, i) {
				void 0 === i && (i = {}), this.$chipsWrapper = e, this.options = "string" == typeof i ? i : {
					data: this.fallback().or(i.data).or([]).value(),
					dataChip: this.fallback().or(i.dataChip).or([]).value(),
					placeholder: this.fallback().or(e.attr("data-placeholder")).or(i.placeholder).or("").value(),
					secondaryPlaceholder: this.fallback().or(e.attr("data-secondary-placeholder")).or(i.secondaryPlaceholder).or("").value(),
					sortAutocompleteData: this.fallback().or(e.attr("data-sort-autocomplete-data")).or(i.sortAutocompleteData).or(!0).value(),
					autocompleteDataCompareFn: this.fallback().or(i.autocompleteDataCompareFn).or(void 0).value()
				}, this.$autocompleteList = t('<ul class="chip-ul z-depth-1" tabindex="0"></ul>'), this.keyCodes = {
					backspace: 8,
					enter: 13,
					arrowLeft: 37,
					arrowRight: 39,
					delete: 46,
					comma: 188
				}
			}
			var i = e.prototype;
			return i.getSelectedChip = function() {
				return this.$chipsWrapper.find(".chip.selected")
			}, i.returnPublicInterface = function() {
				return "data" === this.options ? this.$chipsWrapper.data("chips") : "options" === this.options ? this.$chipsWrapper.data("options") : this.$chipsWrapper
			}, i.init = function() {
				this.isPublicInterfaceCall || (this.assignOptions(), this.isInitialized || (this.$chipsWrapper.data({
					chips: this.options.data.slice(),
					index: this.$chipsWrapper.index(),
					initialized: !0
				}), this.$chipsWrapper.attr("tabindex", 0), this.$chipsWrapper.hasClass(".chips") || this.$chipsWrapper.addClass("chips"), this.renderChips(), this.bindEvents()))
			}, i.assignOptions = function() {
				Array.isArray(this.options.data) || (this.options.data = []), this.$chipsWrapper.data("options", Object.assign({}, this.options))
			}, i.bindEvents = function() {
				this.bindChipsWrapperClick(), this.bindChipsWrapperBlur(), this.bindSingleChipClick(), this.bindChipsWrapperKeydown(), this.bindChipsInputClick(), this.bindChipsInputFocusout(), this.bindChipsInputKeydown(), this.bindDeleteButtonClick(), this.bindAutocompleteInputKeyup(), this.bindAutocompleteOptionClick()
			}, i.bindChipsWrapperClick = function() {
				this.$chipsWrapper.on("click", function(e) {
					return t(e.target).find("input").focus().addClass("active")
				})
			}, i.bindChipsWrapperBlur = function() {
				var e = this;
				this.$chipsWrapper.on("blur", function(i) {
					setTimeout(function() {
						return e.$autocompleteList.removeClass("active").hide()
					}, 100), t(i.target).removeClass("active"), e.getSelectedChip().removeClass("selected")
				})
			}, i.bindSingleChipClick = function() {
				var e = this;
				this.$chipsWrapper.on("click", ".chip", function(i) {
					var n = t(i.target),
						o = n.index();
					e.$chipsWrapper.find(".chip.selected").not(n).removeClass("selected"), e.selectChip(o)
				})
			}, i.bindChipsWrapperKeydown = function() {
				var t = this;
				this.$chipsWrapper.on("keydown", function(e) {
					var i = e.which === t.keyCodes.backspace,
						n = e.which === t.keyCodes.delete,
						o = e.which === t.keyCodes.arrowLeft,
						a = e.which === t.keyCodes.arrowRight;
					if((i || n) && t.getSelectedChip().length) {
						e.preventDefault();
						var r = t.deleteSelectedChip();
						t.selectChip(r)
					} else o ? t.selectLeftChip() : a && t.selectRightChip()
				})
			}, i.bindChipsInputClick = function() {
				var e = this;
				this.$chipsWrapper.find("input").on("click", function(i) {
					t(i.target).addClass("active"), e.$chipsWrapper.addClass("focus"), e.$chipsWrapper.find(".chip").removeClass("selected")
				})
			}, i.bindChipsInputFocusout = function() {
				var t = this;
				this.$chipsWrapper.on("focusout", "input", function() {
					return t.$chipsWrapper.removeClass("focus")
				})
			}, i.bindChipsInputKeydown = function() {
				var e = this;
				this.$chipsWrapper.on("keydown", "input", function(i) {
					var n = t(i.target),
						o = i.which === e.keyCodes.enter,
						a = i.which === e.keyCodes.comma,
						r = i.which === e.keyCodes.backspace;
					if((o || a) && !e.$autocompleteList.find("li").hasClass("selected")) return i.preventDefault(), e.addChip({
						tag: n.val()
					}), void n.val("");
					if("" === n.val() && r && !e.$chipsWrapper.find(".chip").hasClass("selected")) {
						var s = e.$chipsWrapper.find(".chip-position-wrapper .chip").last().index();
						e.deleteChip(s)
					}
				})
			}, i.bindDeleteButtonClick = function() {
				var e = this;
				this.$chipsWrapper.on("click", ".chip i.close", function(i) {
					i.stopPropagation();
					var n = t(i.target).closest(".chip").index();
					e.deleteChip(n), e.$chipsWrapper.find("input").focus()
				})
			}, i.bindAutocompleteInputKeyup = function() {
				var e = this,
					i = this.$chipsWrapper.find(".chip-position-wrapper").find("input");
				i.on("keyup", function(n) {
					var o = i.val();
					e.$autocompleteList.empty(), o.length ? (e.options.dataChip.forEach(function(i) {
						i.toLowerCase().includes(o.toLowerCase()) && e.$chipsWrapper.find(".chip-position-wrapper").append(e.$autocompleteList.append(t("<li>" + i + "</li>")))
					}), e.$autocompleteList.addClass("active").show()) : e.$autocompleteList.removeClass("active").hide();
					var a = n.which === e.keyCodes.enter,
						r = n.which === e.keyCodes.comma,
						s = e.$chipsWrapper.find(".chip-position-wrapper .chip").last().text();
					!a && !r || e.options.dataChip.includes(s) ? (a || r) && e.$autocompleteList.remove() : (e.options.dataChip.push(s), e.options.sortAutocompleteData && e.options.dataChip.sort(e.options.autocompleteDataCompareFn))
				})
			}, i.bindAutocompleteOptionClick = function() {
				var e = this;
				this.$chipsWrapper.on("click", "li", function(i) {
					i.preventDefault();
					var n = t(i.target);
					e.addChip({
						tag: n.text()
					}), e.$chipsWrapper.find(".chip-position-wrapper").find("input").val(""), e.$autocompleteList.remove()
				})
			}, i.deleteSelectedChip = function() {
				var t = this.getSelectedChip(),
					e = t.siblings(".chip").length,
					i = t.index();
				this.deleteChip(i);
				var n = -1;
				return i < e - 1 ? n = i : i !== e && i !== e - 1 || (n = e - 1), e || this.$chipsWrapper.find("input").focus(), n
			}, i.selectLeftChip = function() {
				this.selectLeftRightChip(!0)
			}, i.selectRightChip = function() {
				this.selectLeftRightChip(!1)
			}, i.selectLeftRightChip = function(t) {
				var e = this.getSelectedChip(),
					i = e.index(),
					n = e.siblings(".chip").length,
					o = t ? i - 1 : i + 1;
				if(t && o < 0) o = this.$chipsWrapper.find(".chip").length - 1;
				else if(!t && o > n) return void this.$chipsWrapper.find("input").focus();
				this.$chipsWrapper.find(".chip").removeClass("selected"), this.selectChip(o)
			}, i.renderChips = function() {
				var t = this,
					e = "";
				this.$chipsWrapper.data("chips").forEach(function(i) {
					e += t.getSingleChipTemplate(i)
				}), this.$chipsWrapper.hasClass("chips-autocomplete") ? e += '<span class="chip-position-wrapper position-relative"><input class="input" placeholder=""></span>' : e += '<input class="input" placeholder="">', this.$chipsWrapper.html(e), this.setPlaceholder()
			}, i.getSingleChipTemplate = function(t) {
				if(!t.tag) return "";
				var e = '<div class="chip">' + t.tag;
				return t.image && (e += ' <img src="' + t.image + '" /> '), e += '<i class="close fas fa-times"></i>', e += "</div>"
			}, i.setPlaceholder = function() {
				this.$chipsWrapper.find("input").prop("placeholder", this.options.data.length ? this.options.placeholder : this.options.secondaryPlaceholder)
			}, i.addChip = function(e) {
				if(this.isValid(e)) {
					var i = t(this.getSingleChipTemplate(e));
					this.$chipsWrapper.data("chips").push(e), this.options.data.push(e), this.$chipsWrapper.hasClass("chips-autocomplete") && this.$chipsWrapper.find(".chip").length > 0 ? i.insertAfter(this.$chipsWrapper.find(".chip").last()) : i.insertBefore(this.$chipsWrapper.find("input")), this.$chipsWrapper.trigger("chip.add", e), this.setPlaceholder()
				}
			}, i.isValid = function(t) {
				return "" !== t.tag && !this.options.data.some(function(e) {
					return e.tag === t.tag
				})
			}, i.deleteChip = function(t) {
				var e = this.$chipsWrapper.data("chips")[t];
				this.$chipsWrapper.find(".chip").eq(t).remove(), this.$chipsWrapper.data("chips").splice(t, 1), this.options.data.splice(t, 1), this.$chipsWrapper.trigger("chip.delete", e), this.setPlaceholder()
			}, i.selectChip = function(t) {
				var e = this.$chipsWrapper.find(".chip").eq(t);
				e && !e.hasClass("selected") && (e.addClass("selected"), this.$chipsWrapper.trigger("chip.select", this.$chipsWrapper.data("chips")[t]))
			}, i.fallback = function() {
				return {
					_value: void 0,
					or: function(t) {
						return void 0 !== t && void 0 === this._value && (this._value = t), this
					},
					value: function() {
						return this._value
					}
				}
			}, _createClass(e, [{
				key: "isPublicInterfaceCall",
				get: function() {
					return "string" == typeof this.options
				}
			}, {
				key: "isInitialized",
				get: function() {
					return this.$chipsWrapper.data("initialized")
				}
			}]), e
		}();
		t.fn.materialChip = function(i) {
			if(this.length > 1) {
				var n = [];
				return this.each(function() {
					var o = new e(t(this), i);
					o.init(), n.push(o.returnPublicInterface())
				}), n
			}
			var o = new e(t(this), i);
			return o.init(), o.returnPublicInterface()
		}
	});
var objectFitImages = function() {
	"use strict";
	var t = "bfred-it:object-fit-images",
		e = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
		i = "undefined" == typeof Image ? {
			style: {
				"object-position": 1
			}
		} : new Image,
		n = "object-fit" in i.style,
		o = "object-position" in i.style,
		a = "background-size" in i.style,
		r = "string" == typeof i.currentSrc,
		s = i.getAttribute,
		l = i.setAttribute,
		c = !1;

	function u(t, e, i) {
		var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
		s.call(t, "src") !== n && l.call(t, "src", n)
	}

	function d(t, e) {
		t.naturalWidth ? e(t) : setTimeout(d, 100, t, e)
	}

	function h(i) {
		var o = function(t) {
				for(var i, n = getComputedStyle(t).fontFamily, o = {}; null !== (i = e.exec(n));) o[i[1]] = i[2];
				return o
			}(i),
			a = i[t];
		if(o["object-fit"] = o["object-fit"] || "fill", !a.img) {
			if("fill" === o["object-fit"]) return;
			if(!a.skipTest && n && !o["object-position"]) return
		}
		if(!a.img) {
			a.img = new Image(i.width, i.height), a.img.srcset = s.call(i, "data-ofi-srcset") || i.srcset, a.img.src = s.call(i, "data-ofi-src") || i.src, l.call(i, "data-ofi-src", i.src), i.srcset && l.call(i, "data-ofi-srcset", i.srcset), u(i, i.naturalWidth || i.width, i.naturalHeight || i.height), i.srcset && (i.srcset = "");
			try {
				! function(e) {
					var i = {
						get: function(i) {
							return e[t].img[i || "src"]
						},
						set: function(i, n) {
							return e[t].img[n || "src"] = i, l.call(e, "data-ofi-" + n, i), h(e), i
						}
					};
					Object.defineProperty(e, "src", i), Object.defineProperty(e, "currentSrc", {
						get: function() {
							return i.get("currentSrc")
						}
					}), Object.defineProperty(e, "srcset", {
						get: function() {
							return i.get("srcset")
						},
						set: function(t) {
							return i.set(t, "srcset")
						}
					})
				}(i)
			} catch(t) {
				window.console && console.warn("https://bit.ly/ofi-old-browser")
			}
		}! function(t) {
			if(t.srcset && !r && window.picturefill) {
				var e = window.picturefill._;
				t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
					reselect: !0
				}), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
					reselect: !0
				})), t.currentSrc = t[e.ns].curSrc || t.src
			}
		}(a.img), i.style.backgroundImage = 'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")', i.style.backgroundPosition = o["object-position"] || "center", i.style.backgroundRepeat = "no-repeat", i.style.backgroundOrigin = "content-box", /scale-down/.test(o["object-fit"]) ? d(a.img, function() {
			a.img.naturalWidth > i.width || a.img.naturalHeight > i.height ? i.style.backgroundSize = "contain" : i.style.backgroundSize = "auto"
		}) : i.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), d(a.img, function(t) {
			u(i, t.naturalWidth, t.naturalHeight)
		})
	}

	function p(e, i) {
		var n = !c && !e;
		if(i = i || {}, e = e || "img", o && !i.skipTest || !a) return !1;
		"img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
		for(var r = 0; r < e.length; r++) e[r][t] = e[r][t] || {
			skipTest: i.skipTest
		}, h(e[r]);
		n && (document.body.addEventListener("load", function(t) {
			"IMG" === t.target.tagName && p(t.target, {
				skipTest: i.skipTest
			})
		}, !0), c = !0, e = "img"), i.watchMQ && window.addEventListener("resize", p.bind(null, e, {
			skipTest: i.skipTest
		}))
	}
	return p.supportsObjectFit = n, p.supportsObjectPosition = o,
		function() {
			function e(e, i) {
				return e[t] && e[t].img && ("src" === i || "srcset" === i) ? e[t].img : e
			}
			o || (HTMLImageElement.prototype.getAttribute = function(t) {
				return s.call(e(this, t), t)
			}, HTMLImageElement.prototype.setAttribute = function(t, i) {
				return l.call(e(this, t), t, String(i))
			})
		}(), p
}();
! function(t) {
	var e = {};

	function i(n) {
		if(e[n]) return e[n].exports;
		var o = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
	}
	i.m = t, i.c = e, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if(1 & e && (t = i(t)), 8 & e) return t;
		if(4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if(i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for(var o in t) i.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 11)
}([, , function(t, e, i) {
	"use strict";
	t.exports = function(t) {
		"complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
			"interactive" === document.readyState && t.call()
		}) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
	}
}, , function(t, e, i) {
	"use strict";
	(function(e) {
		var i;
		i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
	}).call(this, i(5))
}, function(t, e, i) {
	"use strict";
	var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch(t) {
		"object" === ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
	}
	t.exports = n
}, , , , , , function(t, e, i) {
	t.exports = i(12)
}, function(t, e, i) {
	"use strict";
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		o = s(i(2)),
		a = i(4),
		r = s(i(13));

	function s(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var l = a.window.jarallax;
	if(a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
			return a.window.jarallax = l, this
		}, void 0 !== a.jQuery) {
		var c = function() {
			var t = arguments || [];
			Array.prototype.unshift.call(t, this);
			var e = r.default.apply(a.window, t);
			return "object" !== (void 0 === e ? "undefined" : n(e)) ? e : this
		};
		c.constructor = r.default.constructor;
		var u = a.jQuery.fn.jarallax;
		a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
			return a.jQuery.fn.jarallax = u, this
		}
	}(0, o.default)(function() {
		(0, r.default)(document.querySelectorAll("[data-jarallax]"))
	})
}, function(t, e, i) {
	"use strict";
	(function(t) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function() {
				return function(t, e) {
					if(Array.isArray(t)) return t;
					if(Symbol.iterator in Object(t)) return function(t, e) {
						var i = [],
							n = !0,
							o = !1,
							a = void 0;
						try {
							for(var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
						} catch(t) {
							o = !0, a = t
						} finally {
							try {
								!n && s.return && s.return()
							} finally {
								if(o) throw a
							}
						}
						return i
					}(t, e);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			o = function() {
				function t(t, e) {
					for(var i = 0; i < e.length; i++) {
						var n = e[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}
				return function(e, i, n) {
					return i && t(e.prototype, i), n && t(e, n), e
				}
			}(),
			a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			r = c(i(2)),
			s = c(i(14)),
			l = i(4);

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var u = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1,
			d = function() {
				for(var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i++)
					if(e && void 0 !== e.style[t[i]]) return t[i];
				return !1
			}(),
			h = void 0,
			p = void 0,
			f = void 0,
			m = !1,
			v = !1;

		function g(t) {
			h = l.window.innerWidth || document.documentElement.clientWidth, p = l.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === t ? "undefined" : a(t)) || "load" !== t.type && "dom-loaded" !== t.type || (m = !0)
		}
		g(), l.window.addEventListener("resize", g), l.window.addEventListener("orientationchange", g), l.window.addEventListener("load", g), (0, r.default)(function() {
			g({
				type: "dom-loaded"
			})
		});
		var b = [],
			y = !1;

		function x() {
			if(b.length) {
				f = void 0 !== l.window.pageYOffset ? l.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
				var t = m || !y || y.width !== h || y.height !== p,
					e = v || t || !y || y.y !== f;
				m = !1, v = !1, (t || e) && (b.forEach(function(i) {
					t && i.onResize(), e && i.onScroll()
				}), y = {
					width: h,
					height: p,
					y: f
				}), (0, s.default)(x)
			}
		}
		var w = !!t.ResizeObserver && new t.ResizeObserver(function(t) {
				t && t.length && (0, s.default)(function() {
					t.forEach(function(t) {
						t.target && t.target.jarallax && (m || t.target.jarallax.onResize(), v = !0)
					})
				})
			}),
			k = 0,
			C = function() {
				function t(e, i) {
					! function(t, e) {
						if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var o = this;
					o.instanceID = k++, o.$item = e, o.defaults = {
						type: "scroll",
						speed: .5,
						imgSrc: null,
						imgElement: ".jarallax-img",
						imgSize: "cover",
						imgPosition: "50% 50%",
						imgRepeat: "no-repeat",
						keepImg: !1,
						elementInViewport: null,
						zIndex: -100,
						disableParallax: !1,
						disableVideo: !1,
						automaticResize: !0,
						videoSrc: null,
						videoStartTime: 0,
						videoEndTime: 0,
						videoVolume: 0,
						videoPlayOnlyVisible: !0,
						onScroll: null,
						onInit: null,
						onDestroy: null,
						onCoverImage: null
					};
					var r = o.$item.getAttribute("data-jarallax"),
						s = JSON.parse(r || "{}");
					r && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
					var l = o.$item.dataset || {},
						c = {};
					if(Object.keys(l).forEach(function(t) {
							var e = t.substr(0, 1).toLowerCase() + t.substr(1);
							e && void 0 !== o.defaults[e] && (c[e] = l[t])
						}), o.options = o.extend({}, o.defaults, s, c, i), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function(t) {
							"true" === o.options[t] ? o.options[t] = !0 : "false" === o.options[t] && (o.options[t] = !1)
						}), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
						var u = o.options.disableParallax;
						o.options.disableParallax = function() {
							return u.test(navigator.userAgent)
						}
					}
					if("function" != typeof o.options.disableParallax && (o.options.disableParallax = function() {
							return !1
						}), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
						var d = o.options.disableVideo;
						o.options.disableVideo = function() {
							return d.test(navigator.userAgent)
						}
					}
					"function" != typeof o.options.disableVideo && (o.options.disableVideo = function() {
						return !1
					});
					var h = o.options.elementInViewport;
					h && "object" === (void 0 === h ? "undefined" : a(h)) && void 0 !== h.length && (h = n(h, 1)[0]);
					h instanceof Element || (h = null), o.options.elementInViewport = h, o.image = {
						src: o.options.imgSrc || null,
						$container: null,
						useImgTag: !1,
						position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
					}, o.initImg() && o.canInitParallax() && o.init()
				}
				return o(t, [{
					key: "css",
					value: function(t, e) {
						return "string" == typeof e ? l.window.getComputedStyle(t).getPropertyValue(e) : (e.transform && d && (e[d] = e.transform), Object.keys(e).forEach(function(i) {
							t.style[i] = e[i]
						}), t)
					}
				}, {
					key: "extend",
					value: function(t) {
						var e = arguments;
						return t = t || {}, Object.keys(arguments).forEach(function(i) {
							e[i] && Object.keys(e[i]).forEach(function(n) {
								t[n] = e[i][n]
							})
						}), t
					}
				}, {
					key: "getWindowData",
					value: function() {
						return {
							width: h,
							height: p,
							y: f
						}
					}
				}, {
					key: "initImg",
					value: function() {
						var t = this.options.imgElement;
						return t && "string" == typeof t && (t = this.$item.querySelector(t)), t instanceof Element || (t = null), t && (this.options.keepImg ? this.image.$item = t.cloneNode(!0) : (this.image.$item = t, this.image.$itemParent = t.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!this.image.src || "none" === this.image.src))
					}
				}, {
					key: "canInitParallax",
					value: function() {
						return d && !this.options.disableParallax()
					}
				}, {
					key: "init",
					value: function() {
						var t = {
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								overflow: "hidden",
								pointerEvents: "none"
							},
							e = {};
						if(!this.options.keepImg) {
							var i = this.$item.getAttribute("style");
							if(i && this.$item.setAttribute("data-jarallax-original-styles", i), this.image.useImgTag) {
								var n = this.image.$item.getAttribute("style");
								n && this.image.$item.setAttribute("data-jarallax-original-styles", n)
							}
						}
						if("static" === this.css(this.$item, "position") && this.css(this.$item, {
								position: "relative"
							}), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {
								zIndex: 0
							}), this.image.$container = document.createElement("div"), this.css(this.image.$container, t), this.css(this.image.$container, {
								"z-index": this.options.zIndex
							}), u && this.css(this.image.$container, {
								opacity: .9999
							}), this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID), this.$item.appendChild(this.image.$container), this.image.useImgTag ? e = this.extend({
								"object-fit": this.options.imgSize,
								"object-position": this.options.imgPosition,
								"font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";",
								"max-width": "none"
							}, t, e) : (this.image.$item = document.createElement("div"), this.image.src && (e = this.extend({
								"background-position": this.options.imgPosition,
								"background-size": this.options.imgSize,
								"background-repeat": this.options.imgRepeat,
								"background-image": 'url("' + this.image.src + '")'
							}, t, e))), "opacity" !== this.options.type && "scale" !== this.options.type && "scale-opacity" !== this.options.type && 1 !== this.options.speed || (this.image.position = "absolute"), "fixed" === this.image.position)
							for(var o = 0, a = this.$item; null !== a && a !== document && 0 === o;) {
								var r = this.css(a, "-webkit-transform") || this.css(a, "-moz-transform") || this.css(a, "transform");
								r && "none" !== r && (o = 1, this.image.position = "absolute"), a = a.parentNode
							}
						e.position = this.image.position, this.css(this.image.$item, e), this.image.$container.appendChild(this.image.$item), this.onResize(), this.onScroll(!0), this.options.automaticResize && w && w.observe(this.$item), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {
							"background-image": "none"
						}), this.addToParallaxList()
					}
				}, {
					key: "addToParallaxList",
					value: function() {
						b.push(this), 1 === b.length && x()
					}
				}, {
					key: "removeFromParallaxList",
					value: function() {
						var t = this;
						b.forEach(function(e, i) {
							e.instanceID === t.instanceID && b.splice(i, 1)
						})
					}
				}, {
					key: "destroy",
					value: function() {
						this.removeFromParallaxList();
						var t = this.$item.getAttribute("data-jarallax-original-styles");
						if(this.$item.removeAttribute("data-jarallax-original-styles"), t ? this.$item.setAttribute("style", t) : this.$item.removeAttribute("style"), this.image.useImgTag) {
							var e = this.image.$item.getAttribute("data-jarallax-original-styles");
							this.image.$item.removeAttribute("data-jarallax-original-styles"), e ? this.image.$item.setAttribute("style", t) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
						}
						this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
					}
				}, {
					key: "clipContainer",
					value: function() {
						if("fixed" === this.image.position) {
							var t = this.image.$container.getBoundingClientRect(),
								e = t.width,
								i = t.height;
							if(!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
							var n = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + e + "px " + i + "px 0);\n           clip: rect(0, " + e + "px, " + i + "px, 0);\n        }";
							this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = n : this.$clipStyles.innerHTML = n
						}
					}
				}, {
					key: "coverImage",
					value: function() {
						var t = this.image.$container.getBoundingClientRect(),
							e = t.height,
							i = this.options.speed,
							n = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
							o = 0,
							a = e,
							r = 0;
						return n && (o = i < 0 ? i * Math.max(e, p) : i * (e + p), i > 1 ? a = Math.abs(o - p) : i < 0 ? a = o / i + Math.abs(o) : a += Math.abs(p - e) * (1 - i), o /= 2), this.parallaxScrollDistance = o, r = n ? (p - a) / 2 : (e - a) / 2, this.css(this.image.$item, {
							height: a + "px",
							marginTop: r + "px",
							left: "fixed" === this.image.position ? t.left + "px" : "0",
							width: t.width + "px"
						}), this.options.onCoverImage && this.options.onCoverImage.call(this), {
							image: {
								height: a,
								marginTop: r
							},
							container: t
						}
					}
				}, {
					key: "isVisible",
					value: function() {
						return this.isElementInViewport || !1
					}
				}, {
					key: "onScroll",
					value: function(t) {
						var e = this.$item.getBoundingClientRect(),
							i = e.top,
							n = e.height,
							o = {},
							a = e;
						if(this.options.elementInViewport && (a = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = a.bottom >= 0 && a.right >= 0 && a.top <= p && a.left <= h, t || this.isElementInViewport) {
							var r = Math.max(0, i),
								s = Math.max(0, n + i),
								l = Math.max(0, -i),
								c = Math.max(0, i + n - p),
								u = Math.max(0, n - (i + n - p)),
								d = Math.max(0, -i + p - n),
								f = 1 - 2 * (p - i) / (p + n),
								m = 1;
							if(n < p ? m = 1 - (l || c) / n : s <= p ? m = s / p : u <= p && (m = u / p), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = m), "scale" === this.options.type || "scale-opacity" === this.options.type) {
								var v = 1;
								this.options.speed < 0 ? v -= this.options.speed * m : v += this.options.speed * (1 - m), o.transform = "scale(" + v + ") translate3d(0,0,0)"
							}
							if("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
								var g = this.parallaxScrollDistance * f;
								"absolute" === this.image.position && (g -= i), o.transform = "translate3d(0," + g + "px,0)"
							}
							this.css(this.image.$item, o), this.options.onScroll && this.options.onScroll.call(this, {
								section: e,
								beforeTop: r,
								beforeTopEnd: s,
								afterTop: l,
								beforeBottom: c,
								beforeBottomEnd: u,
								afterBottom: d,
								visiblePercent: m,
								fromViewportCenter: f
							})
						}
					}
				}, {
					key: "onResize",
					value: function() {
						this.coverImage(), this.clipContainer()
					}
				}]), t
			}(),
			S = function(t) {
				("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : a(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
				for(var e = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = t.length, o = 0, r = void 0; o < n; o++)
					if("object" === (void 0 === e ? "undefined" : a(e)) || void 0 === e ? t[o].jarallax || (t[o].jarallax = new C(t[o], e)) : t[o].jarallax && (r = t[o].jarallax[e].apply(t[o].jarallax, i)), void 0 !== r) return r;
				return t
			};
		S.constructor = C, e.default = S
	}).call(this, i(5))
}, function(t, e, i) {
	"use strict";
	var n = i(4),
		o = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function(t) {
			var e = +new Date,
				i = Math.max(0, 16 - (e - a)),
				n = setTimeout(t, i);
			return a = e, n
		},
		a = +new Date;
	var r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
	Function.prototype.bind && (o = o.bind(n), r = r.bind(n)), (t.exports = o).cancel = r
}]),
function(t) {
	var e = {};

	function i(n) {
		if(e[n]) return e[n].exports;
		var o = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
	}
	i.m = t, i.c = e, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if(1 & e && (t = i(t)), 8 & e) return t;
		if(4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if(i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for(var o in t) i.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 6)
}([, , function(t, e, i) {
	"use strict";
	t.exports = function(t) {
		"complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
			"interactive" === document.readyState && t.call()
		}) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
	}
}, , function(t, e, i) {
	"use strict";
	(function(e) {
		var i;
		i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
	}).call(this, i(5))
}, function(t, e, i) {
	"use strict";
	var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch(t) {
		"object" === ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
	}
	t.exports = n
}, function(t, e, i) {
	t.exports = i(7)
}, function(t, e, i) {
	"use strict";
	var n = s(i(8)),
		o = s(i(4)),
		a = s(i(2)),
		r = s(i(10));

	function s(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	o.default.VideoWorker = o.default.VideoWorker || n.default, (0, r.default)(), (0, a.default)(function() {
		"undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
	})
}, function(t, e, i) {
	"use strict";
	t.exports = i(9)
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		o = function() {
			function t(t, e) {
				for(var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}();

	function a() {
		this._done = [], this._fail = []
	}
	a.prototype = {
		execute: function(t, e) {
			var i = t.length;
			for(e = Array.prototype.slice.call(e); i--;) t[i].apply(null, e)
		},
		resolve: function() {
			this.execute(this._done, arguments)
		},
		reject: function() {
			this.execute(this._fail, arguments)
		},
		done: function(t) {
			this._done.push(t)
		},
		fail: function(t) {
			this._fail.push(t)
		}
	};
	var r = 0,
		s = 0,
		l = 0,
		c = 0,
		u = 0,
		d = new a,
		h = new a,
		p = function() {
			function t(e, i) {
				! function(t, e) {
					if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				this.url = e, this.options_default = {
					autoplay: !1,
					loop: !1,
					mute: !1,
					volume: 100,
					showContols: !0,
					startTime: 0,
					endTime: 0
				}, this.options = this.extend({}, this.options_default, i), this.videoID = this.parseURL(e), this.videoID && (this.ID = r++, this.loadAPI(), this.init())
			}
			return o(t, [{
				key: "extend",
				value: function(t) {
					var e = arguments;
					return t = t || {}, Object.keys(arguments).forEach(function(i) {
						e[i] && Object.keys(e[i]).forEach(function(n) {
							t[n] = e[i][n]
						})
					}), t
				}
			}, {
				key: "parseURL",
				value: function(t) {
					var e, i, n, o, a = !(!(e = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== e[1].length) && e[1],
						r = function(t) {
							var e = t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
							return !(!e || !e[3]) && e[3]
						}(t),
						s = (i = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, o = 0, i.forEach(function(t) {
							var e = t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
							e && e[1] && e[2] && (n["ogv" === e[1] ? "ogg" : e[1]] = e[2], o = 1)
						}), !!o && n);
					return a ? (this.type = "youtube", a) : r ? (this.type = "vimeo", r) : !!s && (this.type = "local", s)
				}
			}, {
				key: "isValid",
				value: function() {
					return !!this.videoID
				}
			}, {
				key: "on",
				value: function(t, e) {
					this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
				}
			}, {
				key: "off",
				value: function(t, e) {
					var i = this;
					this.userEventsList && this.userEventsList[t] && (e ? this.userEventsList[t].forEach(function(n, o) {
						n === e && (i.userEventsList[t][o] = !1)
					}) : delete this.userEventsList[t])
				}
			}, {
				key: "fire",
				value: function(t) {
					var e = this,
						i = [].slice.call(arguments, 1);
					this.userEventsList && void 0 !== this.userEventsList[t] && this.userEventsList[t].forEach(function(t) {
						t && t.apply(e, i)
					})
				}
			}, {
				key: "play",
				value: function(t) {
					var e = this;
					e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), YT.PlayerState.PLAYING !== e.player.getPlayerState() && e.player.playVideo()), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then(function(t) {
						t && e.player.play()
					})), "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.paused && e.player.play()))
				}
			}, {
				key: "pause",
				value: function() {
					var t = this;
					t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function(e) {
						e || t.player.pause()
					}), "local" === t.type && (t.player.paused || t.player.pause()))
				}
			}, {
				key: "mute",
				value: function() {
					this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0), "local" === this.type && (this.$video.muted = !0))
				}
			}, {
				key: "unmute",
				value: function() {
					this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(this.options.volume), "local" === this.type && (this.$video.muted = !1))
				}
			}, {
				key: "setVolume",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.player && t && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(t), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(t), "local" === this.type && (this.$video.volume = t / 100))
				}
			}, {
				key: "getVolume",
				value: function(t) {
					this.player ? ("youtube" === this.type && this.player.getVolume && t(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
						t(e)
					}), "local" === this.type && t(100 * this.$video.volume)) : t(!1)
				}
			}, {
				key: "getMuted",
				value: function(t) {
					this.player ? ("youtube" === this.type && this.player.isMuted && t(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
						t(!!e)
					}), "local" === this.type && t(this.$video.muted)) : t(null)
				}
			}, {
				key: "getImageURL",
				value: function(t) {
					var e = this;
					if(e.videoImage) t(e.videoImage);
					else {
						if("youtube" === e.type) {
							var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
								n = 0,
								o = new Image;
							o.onload = function() {
								120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg", t(e.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg")
							}, o.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"
						}
						if("vimeo" === e.type) {
							var a = new XMLHttpRequest;
							a.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), a.onreadystatechange = function() {
								if(4 === this.readyState && this.status >= 200 && this.status < 400) {
									var i = JSON.parse(this.responseText);
									e.videoImage = i[0].thumbnail_large, t(e.videoImage)
								}
							}, a.send(), a = null
						}
					}
				}
			}, {
				key: "getIframe",
				value: function(t) {
					this.getVideo(t)
				}
			}, {
				key: "getVideo",
				value: function(t) {
					var e = this;
					e.$video ? t(e.$video) : e.onAPIready(function() {
						var i = void 0;
						if(e.$video || ((i = document.createElement("div")).style.display = "none"), "youtube" === e.type) {
							e.playerOptions = {}, e.playerOptions.videoId = e.videoID, e.playerOptions.playerVars = {
								autohide: 1,
								rel: 0,
								autoplay: 0,
								playsinline: 1
							}, e.options.showContols || (e.playerOptions.playerVars.iv_load_policy = 3, e.playerOptions.playerVars.modestbranding = 1, e.playerOptions.playerVars.controls = 0, e.playerOptions.playerVars.showinfo = 0, e.playerOptions.playerVars.disablekb = 1);
							var n = void 0,
								o = void 0;
							e.playerOptions.events = {
								onReady: function(t) {
									e.options.mute ? t.target.mute() : e.options.volume && t.target.setVolume(e.options.volume), e.options.autoplay && e.play(e.options.startTime), e.fire("ready", t), setInterval(function() {
										e.getVolume(function(i) {
											e.options.volume !== i && (e.options.volume = i, e.fire("volumechange", t))
										})
									}, 150)
								},
								onStateChange: function(t) {
									e.options.loop && t.data === YT.PlayerState.ENDED && e.play(e.options.startTime), n || t.data !== YT.PlayerState.PLAYING || (n = 1, e.fire("started", t)), t.data === YT.PlayerState.PLAYING && e.fire("play", t), t.data === YT.PlayerState.PAUSED && e.fire("pause", t), t.data === YT.PlayerState.ENDED && e.fire("ended", t), t.data === YT.PlayerState.PLAYING ? o = setInterval(function() {
										e.fire("timeupdate", t), e.options.endTime && e.player.getCurrentTime() >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
									}, 150) : clearInterval(o)
								}
							};
							var a = !e.$video;
							if(a) {
								var r = document.createElement("div");
								r.setAttribute("id", e.playerID), i.appendChild(r), document.body.appendChild(i)
							}
							e.player = e.player || new window.YT.Player(e.playerID, e.playerOptions), a && (e.$video = document.getElementById(e.playerID), e.videoWidth = parseInt(e.$video.getAttribute("width"), 10) || 1280, e.videoHeight = parseInt(e.$video.getAttribute("height"), 10) || 720)
						}
						if("vimeo" === e.type) {
							e.playerOptions = "", e.playerOptions += "player_id=" + e.playerID, e.playerOptions += "&autopause=0", e.playerOptions += "&transparent=0", e.options.showContols || (e.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), e.playerOptions += "&autoplay=" + (e.options.autoplay ? "1" : "0"), e.playerOptions += "&loop=" + (e.options.loop ? 1 : 0), e.$video || (e.$video = document.createElement("iframe"), e.$video.setAttribute("id", e.playerID), e.$video.setAttribute("src", "https://player.vimeo.com/video/" + e.videoID + "?" + e.playerOptions), e.$video.setAttribute("frameborder", "0"), i.appendChild(e.$video), document.body.appendChild(i)), e.player = e.player || new Vimeo.Player(e.$video), e.player.getVideoWidth().then(function(t) {
								e.videoWidth = t || 1280
							}), e.player.getVideoHeight().then(function(t) {
								e.videoHeight = t || 720
							}), e.options.startTime && e.options.autoplay && e.player.setCurrentTime(e.options.startTime), e.options.mute ? e.player.setVolume(0) : e.options.volume && e.player.setVolume(e.options.volume);
							var s = void 0;
							e.player.on("timeupdate", function(t) {
								s || (e.fire("started", t), s = 1), e.fire("timeupdate", t), e.options.endTime && e.options.endTime && t.seconds >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
							}), e.player.on("play", function(t) {
								e.fire("play", t), e.options.startTime && 0 === t.seconds && e.play(e.options.startTime)
							}), e.player.on("pause", function(t) {
								e.fire("pause", t)
							}), e.player.on("ended", function(t) {
								e.fire("ended", t)
							}), e.player.on("loaded", function(t) {
								e.fire("ready", t)
							}), e.player.on("volumechange", function(t) {
								e.fire("volumechange", t)
							})
						}
						if("local" === e.type) {
							e.$video || (e.$video = document.createElement("video"), e.options.showContols && (e.$video.controls = !0), e.options.mute ? e.$video.muted = !0 : e.$video.volume && (e.$video.volume = e.options.volume / 100), e.options.loop && (e.$video.loop = !0), e.$video.setAttribute("playsinline", ""), e.$video.setAttribute("webkit-playsinline", ""), e.$video.setAttribute("id", e.playerID), i.appendChild(e.$video), document.body.appendChild(i), Object.keys(e.videoID).forEach(function(t) {
								var i, n, o, a;
								i = e.$video, n = e.videoID[t], o = "video/" + t, (a = document.createElement("source")).src = n, a.type = o, i.appendChild(a)
							})), e.player = e.player || e.$video;
							var l = void 0;
							e.player.addEventListener("playing", function(t) {
								l || e.fire("started", t), l = 1
							}), e.player.addEventListener("timeupdate", function(t) {
								e.fire("timeupdate", t), e.options.endTime && e.options.endTime && this.currentTime >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
							}), e.player.addEventListener("play", function(t) {
								e.fire("play", t)
							}), e.player.addEventListener("pause", function(t) {
								e.fire("pause", t)
							}), e.player.addEventListener("ended", function(t) {
								e.fire("ended", t)
							}), e.player.addEventListener("loadedmetadata", function() {
								e.videoWidth = this.videoWidth || 1280, e.videoHeight = this.videoHeight || 720, e.fire("ready"), e.options.autoplay && e.play(e.options.startTime)
							}), e.player.addEventListener("volumechange", function(t) {
								e.getVolume(function(t) {
									e.options.volume = t
								}), e.fire("volumechange", t)
							})
						}
						t(e.$video)
					})
				}
			}, {
				key: "init",
				value: function() {
					this.playerID = "VideoWorker-" + this.ID
				}
			}, {
				key: "loadAPI",
				value: function() {
					if(!s || !l) {
						var t = "";
						if("youtube" !== this.type || s || (s = 1, t = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || l || (l = 1, t = "https://player.vimeo.com/api/player.js"), t) {
							var e = document.createElement("script"),
								i = document.getElementsByTagName("head")[0];
							e.src = t, i.appendChild(e), i = null, e = null
						}
					}
				}
			}, {
				key: "onAPIready",
				value: function(t) {
					if("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || c ? "object" === ("undefined" == typeof YT ? "undefined" : n(YT)) && 1 === YT.loaded ? t() : d.done(function() {
							t()
						}) : (c = 1, window.onYouTubeIframeAPIReady = function() {
							window.onYouTubeIframeAPIReady = null, d.resolve("done"), t()
						})), "vimeo" === this.type)
						if("undefined" != typeof Vimeo || u) "undefined" != typeof Vimeo ? t() : h.done(function() {
							t()
						});
						else {
							u = 1;
							var e = setInterval(function() {
								"undefined" != typeof Vimeo && (clearInterval(e), h.resolve("done"), t())
							}, 20)
						}
						"local" === this.type && t()
				}
			}]), t
		}();
	e.default = p
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = function() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.jarallax;
		if(void 0 === t) return;
		var e = t.constructor,
			i = e.prototype.init;
		e.prototype.init = function() {
			var t = this;
			i.apply(t), t.video && !t.options.disableVideo() && t.video.getVideo(function(e) {
				var i = e.parentNode;
				t.css(e, {
					position: t.image.position,
					top: "0px",
					left: "0px",
					right: "0px",
					bottom: "0px",
					width: "100%",
					height: "100%",
					maxWidth: "none",
					maxHeight: "none",
					margin: 0,
					zIndex: -1
				}), t.$video = e, t.image.$container.appendChild(e), i.parentNode.removeChild(i)
			})
		};
		var a = e.prototype.coverImage;
		e.prototype.coverImage = function() {
			var t = a.apply(this),
				e = !!this.image.$item && this.image.$item.nodeName;
			if(t && this.video && e && ("IFRAME" === e || "VIDEO" === e)) {
				var i = t.image.height,
					n = i * this.image.width / this.image.height,
					o = (t.container.width - n) / 2,
					r = t.image.marginTop;
				t.container.width > n && (n = t.container.width, i = n * this.image.height / this.image.width, o = 0, r += (t.image.height - i) / 2), "IFRAME" === e && (i += 400, r -= 200), this.css(this.$video, {
					width: n + "px",
					marginLeft: o + "px",
					height: i + "px",
					marginTop: r + "px"
				})
			}
			return t
		};
		var r = e.prototype.initImg;
		e.prototype.initImg = function() {
			var t = r.apply(this);
			return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc ? (this.defaultInitImgResult = t, !0) : t
		};
		var s = e.prototype.canInitParallax;
		e.prototype.canInitParallax = function() {
			var t = this,
				e = s.apply(t);
			if(!t.options.videoSrc) return e;
			var i = new n.default(t.options.videoSrc, {
				autoplay: !0,
				loop: !0,
				showContols: !1,
				startTime: t.options.videoStartTime || 0,
				endTime: t.options.videoEndTime || 0,
				mute: t.options.videoVolume ? 0 : 1,
				volume: t.options.videoVolume || 0
			});
			if(i.isValid())
				if(e) {
					if(i.on("ready", function() {
							if(t.options.videoPlayOnlyVisible) {
								var e = t.onScroll;
								t.onScroll = function() {
									e.apply(t), t.isVisible() ? i.play() : i.pause()
								}
							} else i.play()
						}), i.on("started", function() {
							t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.video.videoWidth || 1280, t.image.height = t.video.videoHeight || 720, t.options.imgWidth = t.image.width, t.options.imgHeight = t.image.height, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
						}), t.video = i, !t.defaultInitImgResult) return "local" !== i.type ? (i.getImageURL(function(e) {
						t.image.src = e, t.init()
					}), !1) : (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
				} else t.defaultInitImgResult || i.getImageURL(function(e) {
					var i = t.$item.getAttribute("style");
					i && t.$item.setAttribute("data-jarallax-original-styles", i), t.css(t.$item, {
						"background-image": 'url("' + e + '")',
						"background-position": "center",
						"background-size": "cover"
					})
				});
			return e
		};
		var l = e.prototype.destroy;
		e.prototype.destroy = function() {
			this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), l.apply(this)
		}
	};
	var n = a(i(8)),
		o = a(i(4));

	function a(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
}]),
function(t) {
	var e = function() {
		function e(e, i) {
			this.defaults = {
				data: {},
				dataColor: "",
				closeColor: "#4285f4",
				closeBlurColor: "#ced4da",
				inputFocus: "1px solid #4285f4",
				inputBlur: "1px solid #ced4da",
				inputFocusShadow: "0 1px 0 0 #4285f4",
				inputBlurShadow: "",
				visibleOptions: 5
			}, this.enterCharCode = 13, this.homeCharCode = 36, this.endCharCode = 35, this.arrowUpCharCode = 38, this.arrowDownCharCode = 40, this.count = -1, this.nextScrollHeight = -45, this.$input = e, this.options = this.assignOptions(i), this.$clearButton = this.$input.next(".mdb-autocomplete-clear"), this.$autocompleteWrap = t('<ul class="mdb-autocomplete-wrap"></ul>')
		}
		var i = e.prototype;
		return i.init = function() {
			this.handleEvents()
		}, i.handleEvents = function() {
			this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete(), this.setAutocompleteWrapHeight()
		}, i.assignOptions = function(e) {
			return t.extend({}, this.defaults, e)
		}, i.setAutocompleteWrapHeight = function() {
			this.$autocompleteWrap.css("max-height", 45 * this.options.visibleOptions + "px")
		}, i.setData = function() {
			Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
		}, i.inputFocus = function() {
			var t = this;
			this.$input.on("focus", function() {
				t.changeSVGcolors(), t.$input.css("border-bottom", t.options.inputFocus), t.$input.css("box-shadow", t.options.inputFocusShadow)
			})
		}, i.inputBlur = function() {
			var t = this;
			this.$input.on("blur", function() {
				t.$input.css("border-bottom", t.options.inputBlur), t.$input.css("box-shadow", t.options.inputBlurShadow)
			})
		}, i.inputKeyupData = function() {
			var t = this;
			this.$input.on("keyup", function(e) {
				if(e.which === t.enterCharCode) return t.options.data.includes(t.$input.val()) || t.options.data.push(t.$input.val()), t.$autocompleteWrap.find(".selected").trigger("click"), t.$autocompleteWrap.empty(), t.inputBlur(), t.count = -1, t.nextScrollHeight = -45, t.count;
				var i = t.$input.val();
				if(t.$autocompleteWrap.empty(), i.length) {
					t.appendOptions(t.options.data, i);
					var n = t.$autocompleteWrap,
						o = t.$autocompleteWrap.find("li"),
						a = o.eq(t.count).outerHeight(),
						r = o.eq(t.count - 1).outerHeight();
					e.which === t.homeCharCode && t.homeHandler(n, o), e.which === t.endCharCode && t.endHandler(n, o), e.which === t.arrowDownCharCode ? t.arrowDownHandler(n, o, a) : e.which === t.arrowUpCharCode && t.arrowUpHandler(n, o, a, r), 0 === i.length ? t.$clearButton.css("visibility", "hidden") : t.$clearButton.css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
				} else t.$clearButton.css("visibility", "hidden")
			})
		}, i.endHandler = function(t, e) {
			this.count = e.length - 1, this.nextScrollHeight = 45 * e.length - 45, t.scrollTop(45 * e.length), e.eq(-1).addClass("selected")
		}, i.homeHandler = function(t, e) {
			this.count = 0, this.nextScrollHeight = -45, t.scrollTop(0), e.eq(0).addClass("selected")
		}, i.arrowDownHandler = function(t, e, i) {
			if(this.count > e.length - 2) return this.count = -1, e.scrollTop(0), void(this.nextScrollHeight = -45);
			this.count++, this.nextScrollHeight += i, t.scrollTop(this.nextScrollHeight), e.eq(this.count).addClass("selected")
		}, i.arrowUpHandler = function(t, e, i, n) {
			this.count < 1 ? (this.count = e.length, t.scrollTop(t.prop("scrollHeight")), this.nextScrollHeight = t.prop("scrollHeight") - i) : this.count--, this.nextScrollHeight -= n, t.scrollTop(this.nextScrollHeight), e.eq(this.count).addClass("selected")
		}, i.appendOptions = function(e, i) {
			for(var n in e)
				if(-1 !== e[n].toLowerCase().indexOf(i.toLowerCase())) {
					var o = t("<li>" + e[n] + "</li>");
					this.$autocompleteWrap.append(o)
				}
		}, i.inputLiClick = function() {
			var e = this;
			this.$autocompleteWrap.on("click", "li", function(i) {
				i.preventDefault(), e.$input.val(t(i.target).text()), e.$autocompleteWrap.empty()
			})
		}, i.clearAutocomplete = function() {
			var e = this;
			this.$clearButton.on("click", function(i) {
				i.preventDefault(), e.count = -1, e.nextScrollHeight = -45;
				var n = t(i.currentTarget);
				n.parent().find(".mdb-autocomplete").val(""), n.css("visibility", "hidden"), e.$autocompleteWrap.empty(), n.parent().find("label").removeClass("active")
			})
		}, i.changeSVGcolors = function() {
			var t = this;
			this.$input.hasClass("mdb-autocomplete") && (this.$input.on("keyup", function(e) {
				t.fillSVG(e, t.options.closeColor)
			}), this.$input.on("blur", function(e) {
				t.fillSVG(e, t.options.closeBlurColor)
			}))
		}, i.fillSVG = function(e, i) {
			e.preventDefault(), t(e.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", i)
		}, e
	}();
	t.fn.mdbAutocomplete = function(i) {
		return this.each(function() {
			new e(t(this), i).init()
		})
	}
}(jQuery),
function(t) {
	t("body").on("shown.bs.modal", ".modal", function() {
		t(".modal-backdrop").length || ($modal_dialog = t(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (t(this).addClass("modal-scrolling"), t("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (t(this).addClass("modal-content-clickable"), t("body").addClass("scrollable")))
	}), t("body").on("hidden.bs.modal", ".modal", function() {
		t("body").removeClass("scrollable")
	})
}(jQuery), jQuery(function(t) {
		t.fn.mdbTreeview = function() {
			var e = t(this);
			e.hasClass("treeview") && function(e) {
				e.find(".rotate").each(function() {
					var e = t(this);
					e.off("click"), e.on("click", function() {
						var e = t(this);
						e.siblings(".nested").toggleClass("active"), e.toggleClass("down")
					})
				})
			}(e), e.hasClass("treeview-animated") && function(e) {
				var i = e.find(".treeview-animated-element"),
					n = e.find(".closed");
				e.find(".nested").hide(), n.off("click"), n.on("click", function() {
					var e = t(this),
						i = e.siblings(".nested"),
						n = e.children(".fa-angle-right");
					e.toggleClass("open"), n.toggleClass("down"), i.hasClass("active") ? i.removeClass("active").slideUp() : i.addClass("active").slideDown()
				}), i.off("click"), i.on("click", function() {
					var e = t(this);
					e.hasClass("opened") ? e.removeClass("opened") : (i.removeClass("opened"), e.addClass("opened"))
				})
			}(e), e.hasClass("treeview-colorful") && function(e) {
				var i = e.find(".treeview-colorful-element"),
					n = e.find(".treeview-colorful-items-header");
				e.find(".nested").hide(), n.off("click"), n.on("click", function() {
					var e = t(this),
						i = e.siblings(".nested"),
						n = e.children(".fa-plus-circle"),
						o = e.children(".fa-minus-circle");
					e.toggleClass("open"), n.removeClass("fa-plus-circle"), n.addClass("fa-minus-circle"), o.removeClass("fa-minus-circle"), o.addClass("fa-plus-circle"), i.hasClass("active") ? i.removeClass("active").slideUp() : i.addClass("active").slideDown()
				}), i.off("click"), i.on("click", function() {
					var e = t(this);
					e.hasClass("opened") ? i.removeClass("opened") : (i.removeClass("opened"), e.addClass("opened"))
				})
			}(e)
		}
	}),
	function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).bsCustomFileInput = e()
	}(this, function() {
		"use strict";
		var t = {
				CUSTOMFILE: '.custom-file input[type="file"]',
				CUSTOMFILELABEL: ".custom-file-label",
				FORM: "form",
				INPUT: "input"
			},
			e = function(e) {
				var i = "",
					n = e.parentNode.querySelector(t.CUSTOMFILELABEL);
				return n && (i = n.innerHTML), i
			},
			i = function(t) {
				if(t.childNodes.length > 0)
					for(var e = [].slice.call(t.childNodes), i = 0; i < e.length; i++) {
						var n = e[i];
						if(3 !== n.nodeType) return n
					}
				return t
			},
			n = function(e) {
				var n = e.bsCustomFileInput.defaultText,
					o = e.parentNode.querySelector(t.CUSTOMFILELABEL);
				o && (i(o).innerHTML = n)
			},
			o = !!window.File,
			a = function(t) {
				if(t.hasAttribute("multiple") && o) return [].slice.call(t.files).map(function(t) {
					return t.name
				}).join(", ");
				if(-1 !== t.value.indexOf("fakepath")) {
					var e = t.value.split("\\");
					return e[e.length - 1]
				}
				return t.value
			};

		function r() {
			var e = this.parentNode.querySelector(t.CUSTOMFILELABEL);
			if(e) {
				var o = i(e),
					r = a(this);
				r.length ? o.innerHTML = r : n(this)
			}
		}

		function s() {
			for(var e = [].slice.call(this.querySelectorAll(t.INPUT)).filter(function(t) {
					return !!t.bsCustomFileInput
				}), i = 0, o = e.length; i < o; i++) n(e[i])
		}
		var l = "reset",
			c = "change";
		return {
			init: function(i, n) {
				void 0 === i && (i = t.CUSTOMFILE), void 0 === n && (n = t.FORM);
				for(var o = [].slice.call(document.querySelectorAll(i)), a = [].slice.call(document.querySelectorAll(n)), u = 0, d = o.length; u < d; u++) {
					var h = o[u];
					Object.defineProperty(h, "bsCustomFileInput", {
						value: {
							defaultText: e(h)
						},
						writable: !0
					}), r.call(h), h.addEventListener(c, r)
				}
				for(var p = 0, f = a.length; p < f; p++) a[p].addEventListener(l, s), Object.defineProperty(a[p], "bsCustomFileInput", {
					value: !0,
					writable: !0
				})
			},
			destroy: function() {
				for(var e = [].slice.call(document.querySelectorAll(t.FORM)).filter(function(t) {
						return !!t.bsCustomFileInput
					}), i = [].slice.call(document.querySelectorAll(t.INPUT)).filter(function(t) {
						return !!t.bsCustomFileInput
					}), o = 0, a = i.length; o < a; o++) {
					var u = i[o];
					n(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, r)
				}
				for(var d = 0, h = e.length; d < h; d++) e[d].removeEventListener(l, s), e[d].bsCustomFileInput = void 0
			}
		}
	}), document.addEventListener("DOMContentLoaded", function() {
		bsCustomFileInput.init()
	}), jQuery(function(t) {
		var e = function() {
			function e(e, i) {
				this.defaults = {
					topSpacing: 0,
					zIndex: !1,
					stopper: "#footer",
					stickyClass: !1,
					startScrolling: "top",
					minWidth: !1
				}, this.$element = e, this.options = this.assignOptions(i), this.$window = t(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.initialScrollTop = this.$element.offset().top, this.$placeholder = t('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
			}
			var i = e.prototype;
			return i.hasZIndex = function() {
				return "number" == typeof this.options.zIndex
			}, i.hasStopper = function() {
				return t(this.options.stopper).length || "number" == typeof this.options.stopper
			}, i.isScreenHeightEnough = function() {
				return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
			}, i.assignOptions = function(e) {
				return t.extend({}, this.defaults, e)
			}, i.setPushPoint = function() {
				"bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.initialScrollTop - this.options.topSpacing : this.$pushPoint = this.initialScrollTop + this.$element.outerHeight(!0) - this.$window.height()
			}, i.setStopperPosition = function() {
				"string" == typeof this.options.stopper ? this.stopPoint = t(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
			}, i.bindEvents = function() {
				this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
			}, i.handleResize = function() {
				var t = this.$element.parent();
				this.elementWidth = t.width(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
			}, i.init = function() {
				if(this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
				"bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
			}, i.appendPlaceholder = function() {
				this.$element.after(this.$placeholder), this.$placeholder.css({
					width: this.elementWidth,
					height: this.elementHeight
				})
			}, i.stickyStart = function() {
				this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
				var t = this.$element.get(0).scrollHeight;
				this.$element.get(0).style.overflow = "", this.$element.css({
					position: "fixed",
					width: this.elementWidth,
					height: t
				}), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
					top: this.options.topSpacing
				}) : this.$element.css({
					bottom: 0,
					top: ""
				}), this.hasZIndex() && this.$element.css({
					zIndex: this.options.zIndex
				})
			}, i.stickyEnd = function() {
				this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
					position: "static",
					top: this.options.topSpacing,
					width: "",
					height: ""
				})
			}, i.stop = function() {
				this.stopPoint < t(this.$element).offset().top - this.options.topSpacing + this.$element.outerHeight(!0) && this.$element.css({
					position: "absolute",
					bottom: 0,
					top: ""
				})
			}, e
		}();
		t.fn.sticky = function(i) {
			t(this).each(function() {
				new e(t(this), i).init()
			})
		}
	});