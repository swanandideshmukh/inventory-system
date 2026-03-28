(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/inventory/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Inventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const API = ("TURBOPACK compile-time value", "https://inventory-backend.onrender.com") || 'http://localhost:5000';
function Inventory() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        category: '',
        stock_level: '',
        min_stock: '',
        max_stock: '',
        unit_price: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchItems = ()=>{
        fetch(`${API}/api/inventory`).then((r)=>r.json()).then(setItems).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Inventory.useEffect": ()=>{
            fetchItems();
        }
    }["Inventory.useEffect"], []);
    const handleAdd = async ()=>{
        try {
            await fetch(`${API}/api/inventory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            setStatus('✅ Item added successfully!');
            setForm({
                name: '',
                category: '',
                stock_level: '',
                min_stock: '',
                max_stock: '',
                unit_price: ''
            });
            fetchItems();
        } catch  {
            setStatus('⚠️ Could not connect to backend');
        }
    };
    const handleDelete = async (id)=>{
        try {
            await fetch(`${API}/api/inventory/${id}`, {
                method: 'DELETE'
            });
            fetchItems();
        } catch  {}
    };
    const inputStyle = {
        width: '100%',
        padding: '8px 10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px'
    };
    const labelStyle = {
        fontSize: '13px',
        color: '#555',
        marginBottom: '4px',
        display: 'block'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '22px',
                    marginBottom: '6px'
                },
                children: "Inventory Management"
            }, void 0, false, {
                fileName: "[project]/app/inventory/page.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666',
                    marginBottom: '24px',
                    fontSize: '14px'
                },
                children: "Add and manage your stock items"
            }, void 0, false, {
                fileName: "[project]/app/inventory/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '16px',
                            marginBottom: '16px'
                        },
                        children: "Add New Item"
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '12px',
                            marginBottom: '16px'
                        },
                        children: [
                            [
                                'name',
                                'Product Name'
                            ],
                            [
                                'category',
                                'Category'
                            ],
                            [
                                'stock_level',
                                'Stock Level'
                            ],
                            [
                                'min_stock',
                                'Min Stock'
                            ],
                            [
                                'max_stock',
                                'Max Stock'
                            ],
                            [
                                'unit_price',
                                'Unit Price ($)'
                            ]
                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: labelStyle,
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/inventory/page.js",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: inputStyle,
                                        value: form[key],
                                        onChange: (e)=>setForm({
                                                ...form,
                                                [key]: e.target.value
                                            }),
                                        placeholder: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/inventory/page.js",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/app/inventory/page.js",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: status.includes('✅') ? 'green' : 'orange',
                            marginBottom: '12px',
                            fontSize: '14px'
                        },
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 51,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        style: {
                            background: '#3498db',
                            color: 'white',
                            border: 'none',
                            padding: '10px 24px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        },
                        children: "Add Item"
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inventory/page.js",
                lineNumber: 41,
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
                        children: [
                            "All Items (",
                            items.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 58,
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
                                        'Name',
                                        'Category',
                                        'Stock',
                                        'Min',
                                        'Price',
                                        'Action'
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '10px',
                                                textAlign: 'left',
                                                borderBottom: '2px solid #dee2e6',
                                                color: '#555'
                                            },
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/app/inventory/page.js",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.js",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
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
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 70,
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
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: '10px',
                                                        borderBottom: '1px solid #dee2e6',
                                                        color: item.stock_level <= item.min_stock ? '#e74c3c' : '#27ae60',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: item.stock_level
                                                }, void 0, false, {
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 72,
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
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 73,
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
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: '10px',
                                                        borderBottom: '1px solid #dee2e6'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(item.id),
                                                        style: {
                                                            background: '#fdecea',
                                                            color: '#e74c3c',
                                                            border: '1px solid #e74c3c',
                                                            padding: '4px 10px',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer',
                                                            fontSize: '12px'
                                                        },
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.js",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/inventory/page.js",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/app/inventory/page.js",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)),
                                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            style: {
                                                padding: '20px',
                                                textAlign: 'center',
                                                color: '#999'
                                            },
                                            children: "No items yet. Add your first item above!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.js",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/inventory/page.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/inventory/page.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inventory/page.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/inventory/page.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Inventory, "koOvBwN7b831qYNj2MHRtUeuWDE=");
_c = Inventory;
var _c;
__turbopack_context__.k.register(_c, "Inventory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_inventory_page_11nut5e.js.map