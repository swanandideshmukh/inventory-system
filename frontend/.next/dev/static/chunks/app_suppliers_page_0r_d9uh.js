(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/suppliers/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Suppliers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const API = ("TURBOPACK compile-time value", "https://inventory-backend.onrender.com") || 'http://localhost:5000';
function Suppliers() {
    _s();
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        rating: '5'
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchSuppliers = ()=>{
        fetch(`${API}/api/suppliers`).then((r)=>r.json()).then(setSuppliers).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Suppliers.useEffect": ()=>{
            fetchSuppliers();
        }
    }["Suppliers.useEffect"], []);
    const handleAdd = async ()=>{
        try {
            await fetch(`${API}/api/suppliers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            setStatus('✅ Supplier added!');
            setForm({
                name: '',
                email: '',
                phone: '',
                address: '',
                rating: '5'
            });
            fetchSuppliers();
        } catch  {
            setStatus('⚠️ Could not connect to backend');
        }
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
    const sampleSuppliers = [
        {
            id: 1,
            name: 'TechSupply Co.',
            email: 'contact@techsupply.com',
            phone: '+1-555-0101',
            rating: 5
        },
        {
            id: 2,
            name: 'Global Parts Inc.',
            email: 'info@globalparts.com',
            phone: '+1-555-0102',
            rating: 4
        },
        {
            id: 3,
            name: 'FastShip Ltd.',
            email: 'orders@fastship.com',
            phone: '+1-555-0103',
            rating: 3
        }
    ];
    const displaySuppliers = suppliers.length > 0 ? suppliers : sampleSuppliers;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '22px',
                    marginBottom: '6px'
                },
                children: "Supplier Management"
            }, void 0, false, {
                fileName: "[project]/app/suppliers/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666',
                    marginBottom: '24px',
                    fontSize: '14px'
                },
                children: "Manage your supply chain partners"
            }, void 0, false, {
                fileName: "[project]/app/suppliers/page.js",
                lineNumber: 40,
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
                        children: "Add New Supplier"
                    }, void 0, false, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '12px',
                            marginBottom: '16px'
                        },
                        children: [
                            [
                                'name',
                                'Supplier Name'
                            ],
                            [
                                'email',
                                'Email'
                            ],
                            [
                                'phone',
                                'Phone'
                            ],
                            [
                                'address',
                                'Address'
                            ]
                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: labelStyle,
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/suppliers/page.js",
                                        lineNumber: 47,
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
                                        fileName: "[project]/app/suppliers/page.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/app/suppliers/page.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: labelStyle,
                                children: "Rating (1-5)"
                            }, void 0, false, {
                                fileName: "[project]/app/suppliers/page.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: {
                                    ...inputStyle,
                                    width: '100px'
                                },
                                type: "number",
                                min: "1",
                                max: "5",
                                value: form.rating,
                                onChange: (e)=>setForm({
                                        ...form,
                                        rating: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/app/suppliers/page.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 52,
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
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 56,
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
                        children: "Add Supplier"
                    }, void 0, false, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/suppliers/page.js",
                lineNumber: 42,
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
                            "All Suppliers (",
                            displaySuppliers.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 63,
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
                                        'Email',
                                        'Phone',
                                        'Rating'
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '10px',
                                                textAlign: 'left',
                                                borderBottom: '2px solid #dee2e6',
                                                color: '#555'
                                            },
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/app/suppliers/page.js",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/suppliers/page.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/suppliers/page.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: displaySuppliers.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            background: i % 2 === 0 ? 'white' : '#f8f9fa'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    fontWeight: 'bold'
                                                },
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/suppliers/page.js",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#666'
                                                },
                                                children: s.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/suppliers/page.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#666'
                                                },
                                                children: s.phone
                                            }, void 0, false, {
                                                fileName: "[project]/app/suppliers/page.js",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '10px',
                                                    borderBottom: '1px solid #dee2e6',
                                                    color: '#f39c12'
                                                },
                                                children: '⭐'.repeat(s.rating)
                                            }, void 0, false, {
                                                fileName: "[project]/app/suppliers/page.js",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/app/suppliers/page.js",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/suppliers/page.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/suppliers/page.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/suppliers/page.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/suppliers/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Suppliers, "UWSW7g4Dp8U9C12numO3VNYi62U=");
_c = Suppliers;
var _c;
__turbopack_context__.k.register(_c, "Suppliers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_suppliers_page_0r_d9uh.js.map