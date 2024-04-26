(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6], {
        9789: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return reset_password
                }
            });
            var n = r(3283),
                s = r(2095),
                i = r(5529),
                o = r(4235),
                a = r(5036),
                c = r(4610),
                u = r(1443),
                l = r(5387),
                d = r(2317),
                f = r(2710),
                m = r(5605),
                h = r(676),
                p = r(4228),
                w = r(8213),
                j = r(4202),
                b = r.n(j),
                y = r(7458);

            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var reset_password = function() {
                var e = (0, h.c)({
                        initialValues: {
                            email: ""
                        },
                        validate: {
                            email: (0, p.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Provide a valid email")
                        }
                    }),
                    t = s.S.auth.requestReset.useMutation({
                        onSuccess: function(t) {
                            "REQUESTED" === t.status && (e.reset(), w.N9.show({
                                title: "Password reset sent",
                                message: "Please check your email for a password reset",
                                color: "green"
                            }))
                        },
                        onError: function(t) {
                            t.data && t.data.validation && e.setErrors(t.data.validation), e.resetDirty()
                        }
                    });
                return (0, y.jsx)(i.M, {
                    h: "100vh",
                    children: (0, y.jsx)(o.W, {
                        my: 40,
                        w: 400,
                        children: (0, y.jsxs)(a.X, {
                            withBorder: !0,
                            shadow: "md",
                            p: 30,
                            mt: 30,
                            radius: "md",
                            children: [(0, y.jsx)(i.M, {
                                my: 30,
                                children: (0, y.jsx)(c.E, {
                                    radius: "md",
                                    width: 250,
                                    height: 120,
                                    fit: "contain",
                                    src: "/images/logo.png",
                                    alt: "Loader.live Logo"
                                })
                            }), (0, y.jsxs)("form", {
                                children: [(0, y.jsx)(u.o, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                                            (0, n.Z)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({
                                    label: "Email",
                                    required: !0,
                                    mt: "md"
                                }, e.getInputProps("email"))), (0, y.jsxs)(l.Z, {
                                    justify: "space-between",
                                    mt: "lg",
                                    children: [(0, y.jsx)(d.x, {
                                        size: "sm",
                                        children: "Remember it?"
                                    }), (0, y.jsx)(f.e, {
                                        component: b(),
                                        href: "/",
                                        size: "sm",
                                        children: "Login"
                                    })]
                                }), (0, y.jsx)(m.z, {
                                    fullWidth: !0,
                                    mt: "xl",
                                    variant: "default",
                                    type: "submit",
                                    disabled: t.isLoading,
                                    onClick: e.onSubmit(function(e) {
                                        t.mutate({
                                            email: e.email
                                        })
                                    }),
                                    children: "Send Link"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        8987: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/reset-password", function() {
                return r(9789)
            }])
        },
        4228: function(e, t, r) {
            "use strict";

            function matches(e, t) {
                let r = t || !0;
                return t => "string" != typeof t ? r : e.test(t) ? null : r
            }
            r.d(t, {
                w: function() {
                    return matches
                }
            })
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 8987)
        }), _N_E = e.O()
    }
]);