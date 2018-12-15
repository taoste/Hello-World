var p4f = {
    'v1': function(c, g) {
        return c == g;
    },
    'm': function(c, g) {
        return c / g;
    },
    'w': function(c, g) {
        return c == g;
    },
    'c1': function(c, g) {
        return c == g;
    },
    'i1': function(c, g) {
        return c < g;
    },
    'N1': function(c, g) {
        return c <= g;
    },
    'L1': function(c, g) {
        return c < g;
    },
    'B': function(c, g) {
        return c < g;
    },
    'k1': function(c, g) {
        return c / g;
    },
    'r': function(c, g) {
        return c != g;
    },
    'p0': (function(m0) {
        return (function(R0, k0) {
            return (function(a0) {
                return {
                    T0: a0
                };
            })(function(G0) {
                var Z0, Q0 = 0;
                for (var b0 = R0; Q0 < G0["length"]; Q0++) {
                    var M0 = k0(G0, Q0);
                    Z0 = Q0 === 0 ? M0: Z0 ^ M0;
                }
                return Z0 ? b0: !b0;
            });
        })((function(Y0, K0, P0, o0) {
            var C0 = 25;
            return 1;
        })(parseInt, Date, (function(K0) {
            return ('' + K0)["substring"](1, (K0 + '')["length"] - 1);
        })('_getTime2'),
        function(K0, P0) {
            return new K0()[P0]();
        }),
        function(G0, Q0) {
            var z0 = parseInt(G0["charAt"](Q0), 16)["toString"](2);
            return z0["charAt"](z0["length"] - 1);
        });
    })('9a1im7500'),
    'H2': function(c, g, d) {
        return c / g * d;
    },
    'R': function(c, g) {
        return c == g;
    },
    'W2': function(c, g) {
        return c / g;
    },
    'E': function(c, g) {
        return c < g;
    },
    'P': function(c, g) {
        return c - g;
    },
    'J': function(c, g) {
        return c == g;
    },
    'K1': function(c, g, d) {
        return c - g - d;
    },
    'B1': function(c, g) {
        return c == g;
    },
    'H1': function(c, g) {
        return c / g;
    },
    'a1': function(c, g) {
        return c / g;
    },
    'c2': function(c, g) {
        return c < g;
    },
    'p1': function(c, g) {
        return c / g;
    },
    'O1': function(c, g) {
        return c == g;
    },
    'o1': function(c, g) {
        return c / g;
    },
    'D1': function(c, g) {
        return c != g;
    },
    'G1': function(c, g) {
        return c > g;
    },
    'i': function(c, g) {
        return c == g;
    },
    'n': function(c, g) {
        return c < g;
    },
    'V1': function(c, g) {
        return c == g;
    },
    'Z': function(c, g) {
        return c == g;
    },
    'I1': function(c, g) {
        return c != g;
    }
}; (function(f, e2) {
    var u = p4f.p0.T0("a4d") ? "length": "set",
    P1 = p4f.p0.T0("4b") ? 100 : "picturepost",
    C1 = p4f.p0.T0("e231") ? "isInit": "gotoPage",
    f2 = p4f.p0.T0("766") ? 200 : "",
    h1 = p4f.p0.T0("3adb") ? "isInit": "setNav",
    s1 = p4f.p0.T0("46") ? "removeClass": "pageAnimate",
    W1 = p4f.p0.T0("ea") ? "ease": "to",
    m1 = p4f.p0.T0("3132") ? "prev": "jQuery",
    Y1 = "next",
    e1 = p4f.p0.T0("56") ? "refresh": "isInit",
    j = p4f.p0.T0("b2d") ? "pageHeight": "addClass",
    S1 = "eq",
    g2 = ".navitem",
    L = p4f.p0.T0("e2ec") ? "currentPage": "active",
    v = p4f.p0.T0("31f2") ? "removeClass": "hash",
    d2 = p4f.p0.T0("c15") ? "Main": "hash",
    l2 = "location",
    w1 = "nav",
    O = "easeOut",
    M = "currentPageIndex",
    A1 = "#viewlist",
    Z1 = "set",
    q = 2,
    f1 = "top",
    b = "css",
    h = p4f.p0.T0("bc52") ? "ease": "viewHeight",
    o = "data",
    F = "each",
    a = p4f.p0.T0("7ee") ? ".at_desc": "window",
    t = p4f.p0.T0("66c") ? "on": "pageHeight",
    B2 = 7,
    z = 0,
    g1 = "",
    s = "height",
    l1 = "width",
    W = 1,
    l = {
        isInit: !W,
        windowWidth: f(window)[l1](),
        windowHeight: f(window)[s](),
        currentPage: g1,
        currentPageIndex: z,
        totalPage: B2,
        pageHeight: z,
        nav: [],
        getTransform: function() {},
        reSize: function() {
            var H = p4f.p0.T0("fa7") ? "force3D": ".iPage";
            var X = p4f.p0.T0("3cc") ?
            function() {
                var c = 160;
                var g = p4f.p0.T0("f2") ? "P": "mode";
                l[t] = p4f[g](f(window)[s](), c);
            }: "slider";
            X();
            f(H)[s](l[t]);
            f(a)[F](function(c, g) {
                var d = "m";
                f(this)[o](h) || f(this)[o](h, f(g)[s]());
                f(g)[b](f1, p4f[d]((l[t] - f(g)[s]()), q));
            });
            TweenMax[Z1](A1, {
                y: -l[t] * l[M],
                force3D: W,
                ease: Expo[O]
            });
        },
        setNav: function() {
            var d = ".navitem.active";
            var H = function() {
                var c = p4f.p0.T0("cb7") ? 50 : "/";
                var g = "#/";
                V = g + l[w1][l[M]] + c;
            };
            var X = p4f.p0.T0("cc") ? ".iPage": function(c) {
                document[l2][d2] = c;
            };
            var V = p4f.p0.T0("27") ? g1: " %";
            f(d)[v](L);
            H();
            f(g2)[S1](l[M])[j](L);
            X(V);
        },
        gotoPage: function(g) {
            var d = p4f.p0.T0("6a8") ? "g": "setNav";
            var H = "n";
            var X = p4f.p0.T0("a5") ? "r": "done";
            var V = p4f.p0.T0("17d") ? "E": "Main";
            var T = p4f.p0.T0("c6a6") ? "force3D": "w";
            var G = p4f.p0.T0("38ae") ? "totalPage": "attr";
            var Q = p4f.p0.T0("5d5") ? "B": "append";
            var K = p4f.p0.T0("7cd") ? "setNav": "R";
            var p = p4f.p0.T0("1ee5") ? "windowWidth": "currentPage";
            var C = "Z";
            var k = "isTweening";
            if (!TweenMax[k](A1) || p4f[C](e1, g)) {
                var D = p4f.p0.T0("65a") ?
                function(c) {
                    l[M] = c;
                }: "viewHeight";
                var S = p4f.p0.T0("ebcc") ?
                function(c) {
                    l[p] = p4f.p0.T0("13") ? ".bx-controls.bx-has-pager": c[w1][l[M]];
                }: "#logo";
                if (p4f[K](Y1, g)) if (p4f[Q](l[M], l[G] - W)) l[M]++;
                else return;
                else if (p4f[T](m1, g)) if (p4f[V](z, l[M])) l[M]--;
                else return;
                else if (p4f[X](e1, g)) if (g = parseInt(g), -W < g && -W < g && p4f[H](g, l[G])) D(g);
                else return;
                TweenMax[W1](A1, W, {
                    y: -l[t] * l[M],
                    force3D: W,
                    ease: Expo[O]
                });
                S(l);
                if (l[p] && l[s1][l[p]]) l[s1][l[p]]();
                l[d]();
            }
        },
        pageAnimate: {
            wedding: function() {
                var c = null;
                var g = p4f.p0.T0("ca5") ? 0.2 : 400;
                var d = "#wedding .content";
                var H = "wedding";
                var X = function() {
                    l[s1][H][h1] = p4f.p0.T0("7be") ? '<a id="adtop" href="#"><span></span></a>': !z;
                };
                TweenMax[Z1](d, {
                    y: f2
                });
                TweenMax[W1](d, W, {
                    y: z,
                    delay: g,
                    ease: Expo[O],
                    onComplete: function() {}
                });
                X();
                this[H] = c;
            }
        },
        Main: function() {
            var X2 = p4f.p0.T0("ba6f") ? "round": "mousewheel";
            var V2 = "resize";
            var j1 = p4f.p0.T0("a35") ? "e": "bind";
            var S2 = p4f.p0.T0("35d") ? "submit": "d";
            var T2 = "#consultSO form";
            var p2 = "#eventcontent .slideitem";
            var z2 = ".teamitem";
            var E1 = p4f.p0.T0("744a") ? "hover": "Math";
            var Q2 = p4f.p0.T0("4c4") ? 400 : "#activity .slideitem";
            var G2 = ".adshow";
            var U1 = "target";
            var P2 = ".videoshow";
            var U = "blur";
            var T1 = "off";
            var z1 = p4f.p0.T0("14f4") ? "onSliderResize": "windowWidth";
            var r1 = p4f.p0.T0("1c4") ? " .fixed-container": "#eventcontent .slideitem";
            var b1 = p4f.p0.T0("6b") ? "load": "css";
            var t1 = "id";
            var R1 = ".popuphtml";
            var K2 = ".pictureshow";
            var Y2 = "iPage";
            var m2 = "#index .bx-viewport,#activity .bx-viewport,#eventcontent  .bx-viewport";
            var C2 = '<div class="bgdot"></div>';
            var Z2 = "append";
            var o2 = "#index .bx-viewport";
            var N = "href";
            var A = "attr";
            var e = "show";
            var X1 = p4f.p0.T0("87") ? "on": "easeOut";
            var k2 = p4f.p0.T0("d61a") ? "fade": "#viewlist > div";
            var b2 = p4f.p0.T0("b36") ? "<span></span>": "<span></span>";
            var y1 = p4f.p0.T0("c5d") ? "location": "html";
            var M2 = ".bx-wrapper .bx-controls-direction a";
            var x1 = p4f.p0.T0("3e") ? "slider": "index";
            var q1 = "hasClass";
            var n1 = ".yy-slider";
            var Q1 = "hide";
            var R2 = ".yy-slider img.coverimg";
            var a2 = "#logo";
            var Y = "click";
            var F1 = "index";
            var s2 = "slice";
            var u1 = "reSize";
            var t2 = function() {
                l[h1] = !z;
            };
            l[u1]();
            var J1 = document[l2][d2][s2](q, -W) || F1;
            f(g2)[F](function(g, d) {
                var H = "J";
                var X = "push";
                var V = "page";
                var T = f(this)[o](V);
                l[w1][X](f(this)[o](V));
                J1 && p4f[H](J1, T) && (l[M] = g);
                f(d)[Y](function(c) {
                    l[C1](g);
                    return ! W;
                });
            });
            f(a2)[Y](function(c) {
                l[C1](z);
                return ! W;
            });
            f(R2)[Q1]();
            f(n1)[F](function(d, H) {
                var X = "100%";
                var V = "relative";
                var T = ".bx-controls.bx-has-pager";
                var G = "fade";
                var Q = "i";
                var K = "bxSlider";
                var p = "onSliderResize";
                var C = "wdslider";
                var k = "auto";
                var D = "horizontal";
                var S = "mode";
                var I = "pager";
                var M1 = "controls";
                var d1 = {
                    controls: f(H)[o](M1) || z,
                    pager: f(H)[o](I) || z,
                    mode: f(H)[o](S) || D,
                    auto: f(H)[o](k) || z
                };
                f(H)[q1](C) && (d1[p] = function() {
                    var c = ".wdslider li a";
                    var g = "#wedding .bx-wrapper .bx-controls-direction a";
                    f(g)[s](f(c)[s]());
                });
                var y2 = f(H)[K](d1);
                f(H)[o](x1, y2);
                if (d1[p]) d1[p]();
                p4f[Q](G, d1[S]) && (f(T)[b]({
                    position: V,
                    "z-index": P1
                }), f(H)[b](l1, X));
            });
            f(M2)[y1](b2);
            f(k2)[F](function(D, S) {
                var I = ".subnav li";
                var M1 = ".subitem:gt(0)";
                f(M1, S)[Q1]();
                f(I, S)[X1](Y,
                function() {
                    var H = ".navmore";
                    var X = 1E3;
                    var V = "fadeIn";
                    var T = "redrawSlider";
                    var G = "li";
                    var Q = "c1";
                    var K = ".subitem";
                    var p = ".subnav li.active";
                    if (!f(this)[q1](L)) {
                        f(p, S)[v](L);
                        f(this)[j](L);
                        var C = f(this)[F1]();
                        f(K, S)[Q1]();
                        var k = f(n1, f(K, S)[S1](C));
                        k[u] && p4f[Q](P1, f(G, k)[l1]()) && (f(K, S)[S1](C)[e](), k[o](x1)[T](), f(a, k)[F](function(c, g) {
                            var d = "H1";
                            f(g)[b](f1, p4f[d]((l[t] - f(g)[s]()), q));
                        }), f(K, S)[S1](C)[Q1]());
                        f(K, S)[S1](C)[V](X);
                        f(H, S)[u] && f(H, S)[A](N, f(this)[o](N));
                    }
                });
            });
            f(o2)[Z2](C2);
            f(m2)[j](Y2);
            f(K2)[Y](function(K) {
                var p = "#picturepost";
                var C = "picturepost";
                f(R1)[A](t1, C);
                f(p)[j](e);
                f(p)[b1](f(this)[A](N) + r1,
                function() {
                    var d = ".fixed-back";
                    var H = 0.7;
                    var X = "#picturepost .fixed-container";
                    var V = "fromTo";
                    var T = "scroll";
                    var G = "overflow-y";
                    var Q = "#picturepost .fixed-cbr";
                    f(Q)[b](G, T);
                    TweenMax[V](f(X), H, {
                        x: l[z1]
                    },
                    {
                        x: z,
                        ease: Expo[O],
                        force3D: W
                    });
                    f(d)[Y](function(c) {
                        var g = "hidden";
                        f(Q)[b](G, g);
                        TweenMax[W1](f(X), W, {
                            x: -l[z1] - f2,
                            ease: Expo[O],
                            force3D: W,
                            onComplete: function() {
                                f(p)[y1](g1);
                                f(p)[v](e);
                            }
                        });
                        f(this)[T1](Y);
                        f(this)[U]();
                        return ! W;
                    });
                });
                f(this)[U]();
                return ! W;
            });
            f(P2)[Y](function(d) {
                var H = '"></iframe></div>';
                var X = '<div class="fixed-container"><iframe frameborder="0" src="';
                var V = "#videopost";
                var T = "videopost";
                f(R1)[A](t1, T)[j](e);
                f(V)[y1](X + f(this)[A](N) + H);
                f(V)[X1](Y,
                function(c) {
                    var g = "V1";
                    p4f[g](c[U1], f(this)[z]) && f(V)[T1](Y)[v](e)[y1](g1);
                });
                f(this)[U]();
                return ! W;
            });
            f(G2)[Y](function(k) {
                var D = "a";
                var S = "#adpost";
                var I = "adpost";
                f(R1)[A](t1, I);
                f(S)[j](e);
                f(S)[b1](f(D, this)[A](N) + r1,
                function() {
                    var T = "#adtop";
                    var G = "scrollTop";
                    var Q = "#adclose";
                    var K = '<a id="adclose" href="#"><span></span></a>';
                    var p = '<a id="adtop" href="#"><span></span></a>';
                    var C = "prepend";
                    f(S)[C](p);
                    f(S)[C](K);
                    f(Q)[X1](Y,
                    function(c) {
                        f(S)[G](z);
                        f(this)[T1](Y);
                        f(S)[v](e)[y1](g1);
                        f(this)[U]();
                        return ! W;
                    });
                    f(T)[X1](Y,
                    function(d) {
                        var H = 0.1;
                        var X = "G1";
                        var V = function() {
                            var c = 2E4;
                            var g = "p1";
                            d = p4f[g](f(S)[G](), c);
                        };
                        V();
                        p4f[X](H, d) && (d = H);
                        TweenMax[W1](S, d, {
                            scrollTop: z
                        });
                        f(this)[U]();
                        return ! W;
                    });
                });
                f(this)[U]();
                return ! W;
            });
            f(Q2)[E1](function() {
                var c = 55;
                var g = "K1";
                f(a, this)[b](f1, p4f[g](l[t], f(a, this)[o](h), c));
            },
            function() {
                var c = "o1";
                f(a, this)[b](f1, p4f[c]((l[t] - f(a, this)[o](h)), q));
            });
            f(z2)[Y](function(c) {
                var g = " #teampost-container";
                var d = "#teampost";
                var H = ".teamitem.active";
                f(H)[v](L);
                f(this)[j](L);
                f(d)[b1](f(this)[A](N) + g,
                function() {});
                f(this)[U]();
                return ! W;
            });
            f(p2)[E1](function() {
                var c = 50;
                var g = "k1";
                f(a, this)[b](f1, p4f[g]((l[t] - f(a, this)[o](h) - c), q));
            },
            function() {
                var c = "a1";
                f(a, this)[b](f1, p4f[c]((l[t] - f(a, this)[o](h)), q));
            });
            f(T2)[S2](function(X) {
                var V = "serialize";
                var T = "action";
                var G = "post";
                var Q = "val";
                var K = ".inputitem input";
                var p = z;
                f(K, this)[F](function(c, g) {
                    f(this)[Q]() && p++;
                });
                p && f[G](f(this)[A](T), f(this)[V](),
                function() {
                    var d = "#mresult";
                    var H = "#consultSO form .inputitem input";
                    f(H)[Q](g1);
                    f(d)[j](e);
                    f(d)[X1](Y,
                    function(c) {
                        var g = "B1";
                        p4f[g](c[U1], f(this)[z]) && f(d)[T1](Y)[v](e);
                    });
                });
                return ! W;
            });
            f(window)[j1](V2,
            function() {
                var c = "windowHeight";
                var g = "I1";
                var d = "D1";
                if (p4f[d](l[z1], f(window)[l1]()) || p4f[g](l[c], f(window)[s]())) l[z1] = f(window)[l1](),
                l[c] = f(window)[s](),
                l[u1]();
            });
            f(window)[j1](X2,
            function(c, g) {
                var d = "c2";
                var H = 5;
                var X = "i1";
                var V = "O1";
                var T = 4;
                var G = "N1";
                var Q = "v1";
                var K = "L1";
                var p = ".fixed.show";
                if (!f(p)[u]) {
                    var C = p4f[K](z, g) ? m1: Y1;
                    p4f[Q](Y1, C) && p4f[G](T, l[M]) || p4f[V](m1, C) && p4f[X](H, l[M]) || l[C1](p4f[d](z, g) ? m1: Y1);
                }
            });
            t2();
        }
    };
    f(function() {
        var D = "imagesLoaded",
        S = "img";
        function I() {
            var d = 400,
            H = "fadeOut",
            X = "#loading",
            V = 60,
            T = "#footer",
            G = "#header",
            Q = "Main";
            l[Q]();
            TweenMax[Z1](G, {
                y: -P1,
                opacity: z,
                force3D: W
            });
            TweenMax[Z1](T, {
                y: V,
                opacity: z,
                force3D: W
            });
            f(X)[H](d,
            function() {
                var c = "#header,#footer",
                g = "remove";
                f(this)[g]();
                TweenMax[W1](c, W, {
                    y: z,
                    force3D: W,
                    opacity: W,
                    ease: Expo[O]
                });
                l[C1](e1);
            });
        }
        f(S)[D]({
            done: function(c) {},
            fail: function(c, g, d) {},
            always: function() {
                I();
            },
            progress: function(c, g, d, H) {
                var X = "%",
                V = "W2",
                T = "#loading .line",
                G = " %",
                Q = "Loading... ",
                K = "text",
                p = "#loadtxt span",
                C = "H2",
                k = "round";
                c = Math[k](p4f[C]((d[u] + H[u]), g[u], P1));
                f(p)[K](Q + c + G);
                f(T)[b](l1, p4f[V](c, q) + X);
            }
        });
    });
})(jQuery);
/*var a = document.location.href;
if (a.indexOf("www") < 0) {
    document.location.href = a.replace("loveniwed", "www.loveniwed");
}*/