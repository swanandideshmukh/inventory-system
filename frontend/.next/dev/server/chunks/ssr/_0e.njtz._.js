module.exports = [
"[project]/components/AlertBadge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AlertBadge({ type, message, time, onRead }) {
    const colors = {
        LOW_STOCK: '#e74c3c',
        OVERSTOCK: '#f39c12',
        INFO: '#3498db'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'white',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            borderLeft: `4px solid ${colors[type] || '#ddd'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '12px',
                            color: colors[type],
                            fontWeight: 'bold'
                        },
                        children: type
                    }, void 0, false, {
                        fileName: "[project]/components/AlertBadge.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#333',
                            marginTop: '4px',
                            fontSize: '14px'
                        },
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/AlertBadge.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#999',
                            fontSize: '12px',
                            marginTop: '4px'
                        },
                        children: time
                    }, void 0, false, {
                        fileName: "[project]/components/AlertBadge.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AlertBadge.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRead,
                style: {
                    background: '#ecf0f1',
                    color: '#666',
                    border: '1px solid #ddd',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                },
                children: "Mark Read"
            }, void 0, false, {
                fileName: "[project]/components/AlertBadge.js",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AlertBadge.js",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/alerts/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Alerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AlertBadge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AlertBadge.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const API = ("TURBOPACK compile-time value", "https://inventory-backend.onrender.com") || 'http://localhost:5000';
function Alerts() {
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchAlerts = ()=>{
        fetch(`${API}/api/alerts`).then((r)=>r.json()).then(setAlerts).catch(()=>{
            setAlerts([
                {
                    id: 1,
                    type: 'LOW_STOCK',
                    message: 'Wireless Mouse has only 5 units left!',
                    created_at: new Date().toISOString(),
                    is_read: false
                },
                {
                    id: 2,
                    type: 'LOW_STOCK',
                    message: 'Office Chair stock is below minimum!',
                    created_at: new Date().toISOString(),
                    is_read: false
                },
                {
                    id: 3,
                    type: 'INFO',
                    message: 'New supplier added successfully',
                    created_at: new Date().toISOString(),
                    is_read: true
                }
            ]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAlerts();
    }, []);
    const markRead = async (id)=>{
        try {
            await fetch(`${API}/api/alerts/${id}/read`, {
                method: 'PUT'
            });
            fetchAlerts();
        } catch  {
            setAlerts(alerts.map((a)=>a.id === id ? {
                    ...a,
                    is_read: true
                } : a));
        }
    };
    const unread = alerts.filter((a)=>!a.is_read);
    const read = alerts.filter((a)=>a.is_read);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '22px',
                    marginBottom: '6px'
                },
                children: "Alerts"
            }, void 0, false, {
                fileName: "[project]/app/alerts/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666',
                    marginBottom: '24px',
                    fontSize: '14px'
                },
                children: "Automated stock and supply chain notifications"
            }, void 0, false, {
                fileName: "[project]/app/alerts/page.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            unread.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '15px',
                            color: '#e74c3c',
                            marginBottom: '12px'
                        },
                        children: [
                            "⚠️ Unread Alerts (",
                            unread.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/alerts/page.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    unread.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AlertBadge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            type: alert.type,
                            message: alert.message,
                            time: new Date(alert.created_at).toLocaleString(),
                            onRead: ()=>markRead(alert.id)
                        }, alert.id, false, {
                            fileName: "[project]/app/alerts/page.js",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/alerts/page.js",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            read.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '15px',
                            color: '#999',
                            marginBottom: '12px'
                        },
                        children: [
                            "✅ Read (",
                            read.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/alerts/page.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    read.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AlertBadge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                type: alert.type,
                                message: alert.message,
                                time: new Date(alert.created_at).toLocaleString(),
                                onRead: ()=>{}
                            }, void 0, false, {
                                fileName: "[project]/app/alerts/page.js",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, alert.id, false, {
                            fileName: "[project]/app/alerts/page.js",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/alerts/page.js",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            alerts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'white',
                    borderRadius: '8px',
                    padding: '40px',
                    border: '1px solid #ddd',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '32px',
                            marginBottom: '12px'
                        },
                        children: "✅"
                    }, void 0, false, {
                        fileName: "[project]/app/alerts/page.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#999'
                        },
                        children: "No alerts — everything is fine!"
                    }, void 0, false, {
                        fileName: "[project]/app/alerts/page.js",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/alerts/page.js",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/alerts/page.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0e.njtz._.js.map