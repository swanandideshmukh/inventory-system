(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StockCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StockCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StockCard({ title, value, icon, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            border: '1px solid #ddd',
            flex: 1,
            minWidth: '180px',
            borderTop: `4px solid ${color}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '13px',
                    color: '#666',
                    marginBottom: '8px'
                },
                children: [
                    icon,
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/StockCard.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '26px',
                    fontWeight: 'bold',
                    color: '#333'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/StockCard.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StockCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = StockCard;
var _c;
__turbopack_context__.k.register(_c, "StockCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StockCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StockCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const API = ("TURBOPACK compile-time value", "https://inventory-backend.onrender.com") || 'http://localhost:5000';
function Dashboard() {
    _s();
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total_items: 0,
        low_stock: 0,
        total_value: 0,
        categories: 0
    });
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            fetch(`${API}/api/inventory/summary`).then({
                "Dashboard.useEffect": (r)=>r.json()
            }["Dashboard.useEffect"]).then(setSummary).catch({
                "Dashboard.useEffect": ()=>{}
            }["Dashboard.useEffect"]);
            fetch(`${API}/api/inventory`).then({
                "Dashboard.useEffect": (r)=>r.json()
            }["Dashboard.useEffect"]).then(setInventory).catch({
                "Dashboard.useEffect": ()=>{}
            }["Dashboard.useEffect"]);
        }
    }["Dashboard.useEffect"], []);
    const sampleInventory = [
        {
            id: 1,
            name: 'Laptop Pro X',
            category: 'Electronics',
            stock_level: 45,
            min_stock: 10,
            unit_price: 999
        },
        {
            id: 2,
            name: 'Office Chair',
            category: 'Furniture',
            stock_level: 8,
            min_stock: 10,
            unit_price: 299
        },
        {
            id: 3,
            name: 'Printer Paper',
            category: 'Stationery',
            stock_level: 200,
            min_stock: 50,
            unit_price: 12
        },
        {
            id: 4,
            name: 'Wireless Mouse',
            category: 'Electronics',
            stock_level: 5,
            min_stock: 15,
            unit_price: 49
        }
    ];
    const displayInventory = inventory.length > 0 ? inventory : sampleInventory;
    const displaySummary = summary.total_items > 0 ? summary : {
        total_items: 156,
        low_stock: 12,
        total_value: '48,250',
        categories: 8
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '22px',
                    marginBottom: '6px'
                },
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666',
                    marginBottom: '24px',
                    fontSize: '14px'
                },
                children: "Welcome to your inventory management system"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    marginBottom: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StockCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Total Items",
                        value: displaySummary.total_items,
                        icon: "📦",
                        color: "#3498db"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StockCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Low Stock",
                        value: displaySummary.low_stock,
                        icon: "⚠️",
                        color: "#e74c3c"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StockCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Total Value",
                        value: `$${displaySummary.total_value}`,
                        icon: "💰",
                        color: "#2ecc71"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StockCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Categories",
                        value: displaySummary.categories,
                        icon: "🏷️",
                        color: "#9b59b6"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    border: '1px solid #ddd'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '16px',
                            marginBottom: '16px'
                        },
                        children: "Stock Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: '#f8f9fa'
                                    },
                                    children: [
                                        'Product',
                                        'Category',
                                        'Stock',
                                        'Min Stock',
                                        'Price',
                                        'Status'
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '10px',
                                                textAlign: 'left',
                                                borderBottom: '2px solid #dee2e6',
                                                color: '#555'
                                            },
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: displayInventory.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            background: i % 2 === 0 ? 'white' : '#f8f9fa'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6'
                                                },
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#666'
                                                },
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    fontWeight: 'bold'
                                                },
                                                children: item.stock_level
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#666'
                                                },
                                                children: item.min_stock
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#666'
                                                },
                                                children: [
                                                    "$",
                                                    item.unit_price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: item.stock_level <= item.min_stock ? '#fdecea' : '#eafaf1',
                                                        color: item.stock_level <= item.min_stock ? '#e74c3c' : '#27ae60',
                                                        padding: '3px 8px',
                                                        borderRadius: '4px',
                                                        fontSize: '12px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: item.stock_level <= item.min_stock ? '⚠️ Low' : '✅ OK'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "KlhYHC3jjoMKN+CggZd4n1Txy+o=");
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_11.cnvx._.js.map