"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Component/Product.js":
/*!******************************!*\
  !*** ./Component/Product.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_image_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/image.module.css */ \"./styles/image.module.css\");\n/* harmony import */ var _styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context */ \"./Context/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Product = function(param) {\n    var price = param.price, dis = param.dis, image = param.image, name = param.name, id = param.id;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n    var token = cookie.token;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_3__.UserContext), selectedProduct = ref.selectedProduct, setSlectedProduct = ref.setSlectedProduct;\n    var addProduct = function() {\n        setSlectedProduct(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prev).concat([\n                id\n            ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: {\n                        pathname: \"/[id]/\",\n                        query: {\n                            id: id\n                        }\n                    },\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                        src: image,\n                        className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().IGM),\n                        alt: \"product image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 40,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().name),\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().paragraph),\n                    children: dis\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().price),\n                    children: [\n                        \" \",\n                        \"Rs: \".concat(price)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this),\n                !token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartButton),\n                    children: [\n                        \"  \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"Add To Cart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                                lineNumber: 58,\n                                columnNumber: 71\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                            lineNumber: 58,\n                            columnNumber: 51\n                        }, _this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartButton),\n                        onClick: addProduct,\n                        children: \"Add To Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n            lineNumber: 38,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"zv1lI1Q9Am1lWoNg2BfEdsk/Sqw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c1 = function() {\n    return Promise.resolve(Product);\n}, {\n    ssr: false\n}));\nfunction getServerSideProps(context) {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        return C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", {\n                        props: {}\n                    });\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50L1Byb2R1Y3QuanM/OWFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbWFnZS5tb2R1bGUuY3NzXCJcclxuXHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXN9ZnJvbSBcIm5vb2tpZXNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHtwcmljZSxkaXMsaW1hZ2UsbmFtZSxpZH0pID0+IHtcclxuICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICBcclxuICBjb25zdCBjb29raWUgPSBwYXJzZUNvb2tpZXMoKVxyXG4gIGNvbnN0IHRva2VuID0gY29va2llLnRva2VuXHJcbiAgXHJcblxyXG5cclxuY29uc3Qge3NlbGVjdGVkUHJvZHVjdCxzZXRTbGVjdGVkUHJvZHVjdH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxyXG5jb25zdCBhZGRQcm9kdWN0ID0gKCkgPT57XHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG4gIHNldFNsZWN0ZWRQcm9kdWN0KHByZXY9PlsuLi5wcmV2LGlkXSlcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGVzLmltYWdlfSA+XHJcbiAgICBcclxuICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICBcclxuICAgICAgICBwYXRobmFtZTogYC9baWRdL2AsIFxyXG4gICAgICAgIHF1ZXJ5OiB7aWQ6IGlkfSxcclxuICAgICAgXHJcbiAgICAgICAgIC8vIFdpbGwgcGFzcyBgP2xhbmc9ZW5gIGFzIHF1ZXJ5IHBhcmFtXHJcbiAgICB9fSAgcGFzc0hyZWY+IFxyXG4gICAgICBcclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtTdHlsZXMuSUdNfSBhbHQ9J3Byb2R1Y3QgaW1hZ2UnIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT57bmFtZX08L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGVzLnBhcmFncmFwaH0+e2Rpc308L3A+XHJcbiAgICAgICAgPCBwIGNsYXNzTmFtZT17U3R5bGVzLnByaWNlfT4ge2BSczogJHtwcmljZX1gfTwvcD5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHshdG9rZW4/KFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGVzLmNhcnRCdXR0b259PiAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkFkZCBUbyBDYXJ0PC9hPjwvTGluaz4gPC9idXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICAgICAgOig8PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY2FydEJ1dHRvbn0gb25DbGljaz17IGFkZFByb2R1Y3R9PkFkZCBUbyBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC8+KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMgKCgpID0+IFByb21pc2UucmVzb2x2ZShQcm9kdWN0KSwge3NzcjogZmFsc2V9KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gIHByb3BzOiB7fSxcclxuICB9O1xyXG4gIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdHlsZXMiLCJVc2VyQ29udGV4dCIsInBhcnNlQ29va2llcyIsInVzZVJvdXRlciIsIkxpbmsiLCJkeW5hbWljIiwiUHJvZHVjdCIsInByaWNlIiwiZGlzIiwiaW1hZ2UiLCJuYW1lIiwiaWQiLCJyb3V0ZXIiLCJjb29raWUiLCJ0b2tlbiIsInNlbGVjdGVkUHJvZHVjdCIsInNldFNsZWN0ZWRQcm9kdWN0IiwiYWRkUHJvZHVjdCIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwicGF0aG5hbWUiLCJxdWVyeSIsInBhc3NIcmVmIiwiSW1hZ2UiLCJzcmMiLCJJR00iLCJhbHQiLCJoNCIsInAiLCJwYXJhZ3JhcGgiLCJidXR0b24iLCJjYXJ0QnV0dG9uIiwiYSIsIm9uQ2xpY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Component/Product.js\n"));

/***/ })

});