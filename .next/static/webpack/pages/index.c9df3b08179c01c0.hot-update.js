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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_image_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/image.module.css */ \"./styles/image.module.css\");\n/* harmony import */ var _styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context */ \"./Context/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Product = function(param) {\n    var price = param.price, dis = param.dis, image = param.image, name = param.name, id = param.id;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)();\n    var token = cookie.token;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_4__.UserContext), selectedProduct = ref.selectedProduct, setSlectedProduct = ref.setSlectedProduct;\n    var addProduct = function() {\n        setSlectedProduct(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(prev).concat([\n                id\n            ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().image),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    href: {\n                        pathname: \"/[id]/\",\n                        query: {\n                            id: id\n                        }\n                    },\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: image,\n                        className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().IGM),\n                        alt: \"product image\",\n                        width: 500,\n                        height: 70\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 41,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().name),\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().paragraph),\n                    children: dis\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),\n                    children: [\n                        \" \",\n                        \"Rs: \".concat(price)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                !token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartButton),\n                    children: [\n                        \"  \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"Add To Cart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                                lineNumber: 64,\n                                columnNumber: 71\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                            lineNumber: 64,\n                            columnNumber: 51\n                        }, _this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: (_styles_image_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartButton),\n                        onClick: addProduct,\n                        children: \"Add To Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n            lineNumber: 39,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\Component\\\\Product.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"zv1lI1Q9Am1lWoNg2BfEdsk/Sqw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c1 = function() {\n    return Promise.resolve(Product);\n}, {\n    ssr: false\n}));\nfunction getServerSideProps(context) {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        return C_Users_DELL_Desktop_FinalDeliverables_testfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", {\n                        props: {}\n                    });\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7aURBQ3pDO3dCQUNQQyxLQUFLLEVBQUUsRUFBRTtxQkFDUjs7Ozs7O0tBQ0E7V0FKbUJGLG1CQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnQvUHJvZHVjdC5qcz85YWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ29udGV4dCwgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2ltYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXHJcbmltcG9ydCB7cGFyc2VDb29raWVzfWZyb20gXCJub29raWVzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7cHJpY2UsZGlzLGltYWdlLG5hbWUsaWR9KSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgY29va2llID0gcGFyc2VDb29raWVzKClcclxuICBjb25zdCB0b2tlbiA9IGNvb2tpZS50b2tlblxyXG4gIFxyXG5cclxuXHJcbmNvbnN0IHtzZWxlY3RlZFByb2R1Y3Qsc2V0U2xlY3RlZFByb2R1Y3R9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+e1xyXG4gIFxyXG5cclxuICBcclxuICBcclxuICBzZXRTbGVjdGVkUHJvZHVjdChwcmV2PT5bLi4ucHJldixpZF0pXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlcy5pbWFnZX0gPlxyXG4gICAgXHJcbiAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0aG5hbWU6IGAvW2lkXS9gLCBcclxuICAgICAgICBxdWVyeToge2lkOiBpZH0sXHJcbiAgICAgIFxyXG4gICAgICAgICAvLyBXaWxsIHBhc3MgYD9sYW5nPWVuYCBhcyBxdWVyeSBwYXJhbVxyXG4gICAgfX0gIHBhc3NIcmVmPiBcclxuICAgICAgXHJcbiAgICAgICAgPEltYWdlICBzcmM9e2ltYWdlfSBjbGFzc05hbWU9e1N0eWxlcy5JR019IFxyXG4gICAgICAgIGFsdD0ncHJvZHVjdCBpbWFnZScgXHJcbiAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PntuYW1lfTwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXMucGFyYWdyYXBofT57ZGlzfTwvcD5cclxuICAgICAgICA8IHAgY2xhc3NOYW1lPXtTdHlsZXMucHJpY2V9PiB7YFJzOiAke3ByaWNlfWB9PC9wPlxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgeyF0b2tlbj8oXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY2FydEJ1dHRvbn0+ICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+QWRkIFRvIENhcnQ8L2E+PC9MaW5rPiA8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgICA6KDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlcy5jYXJ0QnV0dG9ufSBvbkNsaWNrPXsgYWRkUHJvZHVjdH0+QWRkIFRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz4pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIFxyXG4gICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYyAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFByb2R1Y3QpLCB7c3NyOiBmYWxzZX0pXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgcHJvcHM6IHt9LFxyXG4gIH07XHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0eWxlcyIsIkltYWdlIiwiVXNlckNvbnRleHQiLCJwYXJzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiZHluYW1pYyIsIlByb2R1Y3QiLCJwcmljZSIsImRpcyIsImltYWdlIiwibmFtZSIsImlkIiwicm91dGVyIiwiY29va2llIiwidG9rZW4iLCJzZWxlY3RlZFByb2R1Y3QiLCJzZXRTbGVjdGVkUHJvZHVjdCIsImFkZFByb2R1Y3QiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJwYXNzSHJlZiIsInNyYyIsIklHTSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDQiLCJwIiwicGFyYWdyYXBoIiwiYnV0dG9uIiwiY2FydEJ1dHRvbiIsImEiLCJvbkNsaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Product.js\n"));

/***/ })

});