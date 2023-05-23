/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/createcategory";
exports.ids = ["pages/createcategory"];
exports.modules = {

/***/ "./styles/Register.module.css":
/*!************************************!*\
  !*** ./styles/Register.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Register_container__nzxtn\",\n\t\"formController\": \"Register_formController__KHLP7\",\n\t\"inputField\": \"Register_inputField__HkN5I\",\n\t\"Btn\": \"Register_Btn__xsIif\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rmcm9udC8uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuY3NzPzVmYWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUmVnaXN0ZXJfY29udGFpbmVyX19uenh0blwiLFxuXHRcImZvcm1Db250cm9sbGVyXCI6IFwiUmVnaXN0ZXJfZm9ybUNvbnRyb2xsZXJfX0tITFA3XCIsXG5cdFwiaW5wdXRGaWVsZFwiOiBcIlJlZ2lzdGVyX2lucHV0RmllbGRfX0hrTjVJXCIsXG5cdFwiQnRuXCI6IFwiUmVnaXN0ZXJfQnRuX194c0lpZlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Register.module.css\n");

/***/ }),

/***/ "./Component/Backend.js":
/*!******************************!*\
  !*** ./Component/Backend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = process.env.LOCAL_URL;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvQmFja2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUUsTUFBTUEsR0FBRyxHQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztBQUMvQixpRUFBZUgsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rmcm9udC8uL0NvbXBvbmVudC9CYWNrZW5kLmpzPzkyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiICBjb25zdCBBUEk9cHJvY2Vzcy5lbnYuTE9DQUxfVVJMXHJcbiAgZXhwb3J0IGRlZmF1bHQgQVBJIl0sIm5hbWVzIjpbIkFQSSIsInByb2Nlc3MiLCJlbnYiLCJMT0NBTF9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Backend.js\n");

/***/ }),

/***/ "./pages/createcategory.js":
/*!*********************************!*\
  !*** ./pages/createcategory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Register.module.css */ \"./styles/Register.module.css\");\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Component_Backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Component/Backend */ \"./Component/Backend.js\");\n\n\n\n\n\n\nconst Createcategory = ()=>{\n    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addCategory = async ()=>{\n        try {\n            const content = {\n                category\n            };\n            const data = await fetch(`/api/category`, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(content)\n            });\n            const newdata = await data.json();\n            if (newdata.success.false) {\n                setCategory(\"\");\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(newdata.success.false);\n            } else {\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Category is created sucessfully\");\n            }\n            router.push(\"/admain\");\n            rou;\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().formController),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create Category\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                        lineNumber: 43,\n                        columnNumber: 46\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField),\n                                value: category,\n                                onChange: (e)=>setCategory(e.target.value),\n                                type: \"text\",\n                                resource: \"\",\n                                placeholder: \"add category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().Btn),\n                            onClick: addCategory,\n                            children: \"Add Category\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                            lineNumber: 64,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\createcategory.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps(ctx) {\n    const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);\n    const token = cookie.token;\n    const user = cookie.user ? JSON.parse(cookie.user) : \"\";\n    if (!token) {\n        const { res  } = ctx;\n        res.writeHead(302, {\n            location: \"/login\"\n        });\n        res.end();\n    }\n    if (token && user.user_role !== 1) {\n        const { res: res1  } = ctx;\n        res1.writeHead(302, {\n            location: \"/\"\n        });\n        res1.end();\n    }\n    if (token && user.user_role == 1) {\n        const { res: res2  } = ctx;\n        res2.writeHead(302, {\n            location: \"/login\"\n        });\n        res2.end();\n    }\n    return {\n        props: {}\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Createcategory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLElBQUtDLElBQUksQ0FBQ00sU0FBUyxLQUFLLENBQUMsRUFBQztRQUNoQyxNQUFNLEVBQUNKLEdBQUcsRUFBSEEsSUFBRyxHQUFDLEdBQUdMLEdBQUc7UUFDakJLLElBQUcsQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsRUFBQztZQUFDQyxRQUFRLEVBQUMsR0FBRztTQUFDLENBQUM7UUFDakNGLElBQUcsQ0FBQ0csR0FBRyxFQUFFO0tBQ1Y7SUFDQyxJQUFHTixLQUFLLElBQUlDLElBQUksQ0FBQ00sU0FBUyxJQUFJLENBQUMsRUFBQztRQUM5QixNQUFNLEVBQUNKLEdBQUcsRUFBSEEsSUFBRyxHQUFDLEdBQUdMLEdBQUc7UUFDakJLLElBQUcsQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsRUFBQztZQUFDQyxRQUFRLEVBQUMsUUFBUTtTQUFDLENBQUM7UUFDdENGLElBQUcsQ0FBQ0csR0FBRyxFQUFFO0tBQ1Y7SUFFRCxPQUFNO1FBQ0pFLEtBQUssRUFBRSxFQUFFO0tBQ1Y7Q0FDRjtBQUdELGlFQUFlbkQsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rmcm9udC8uL3BhZ2VzL2NyZWF0ZWNhdGVnb3J5LmpzP2NlMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlfWZyb20ncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHt0b2FzdH1mcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxyXG5pbXBvcnQge3BhcnNlQ29va2llc31mcm9tIFwibm9va2llc1wiXHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vQ29tcG9uZW50L0JhY2tlbmQnXHJcblxyXG5jb25zdCBDcmVhdGVjYXRlZ29yeSA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFtjYXRlZ29yeSxzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJylcclxuICBcclxuY29uc3QgYWRkQ2F0ZWdvcnkgPSBhc3luYygpID0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHtjYXRlZ29yeX1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgL2FwaS9jYXRlZ29yeWAse1xyXG4gICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgXHJcbiAgICAgfSxcclxuICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IG5ld2RhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG5cclxuICAgIGlmIChuZXdkYXRhLnN1Y2Nlc3MuZmFsc2Upe1xyXG4gICAgICBzZXRDYXRlZ29yeShcIlwiKVxyXG4gICAgICB0b2FzdC5lcnJvcihuZXdkYXRhLnN1Y2Nlc3MuZmFsc2UpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkNhdGVnb3J5IGlzIGNyZWF0ZWQgc3VjZXNzZnVsbHlcIilcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKCcvYWRtYWluJylcclxuICAgcm91XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxuXHJcbn1cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDw+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2xsZXJ9PjxoMT5DcmVhdGUgQ2F0ZWdvcnk8L2gxPlxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxwPlxyXG4gICAgIGNhdGVnb3J5XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9IFxyXG4gICAgICB2YWx1ZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICB0eXBlPVwidGV4dFwiICByZXNvdXJjZT0nJyBwbGFjZWhvbGRlcj0nYWRkIGNhdGVnb3J5Jy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgIFxyXG4gICAgICBcclxuIFxyXG4gICAgICBcclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLkJ0bn0gb25DbGljaz17YWRkQ2F0ZWdvcnl9PkFkZCBDYXRlZ29yeTwvYnV0dG9uPlxyXG5cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgY29uc3QgY29va2llICA9IHBhcnNlQ29va2llcyhjdHgpXHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWUudG9rZW5cclxuIGNvbnN0IHVzZXIgPSBjb29raWUudXNlciA/IEpTT04ucGFyc2UoY29va2llLnVzZXIpOiBcIlwiXHJcbiBpZighdG9rZW4pe1xyXG4gIGNvbnN0IHtyZXN9ID0gY3R4XHJcbiAgcmVzLndyaXRlSGVhZCgzMDIse2xvY2F0aW9uOlwiL2xvZ2luXCJ9KVxyXG4gIHJlcy5lbmQoKVxyXG59XHJcbmlmKHRva2VuICAmJiB1c2VyLnVzZXJfcm9sZSAhPT0gMSl7XHJcbiAgY29uc3Qge3Jlc30gPSBjdHhcclxuICByZXMud3JpdGVIZWFkKDMwMix7bG9jYXRpb246XCIvXCJ9KVxyXG4gIHJlcy5lbmQoKVxyXG59XHJcbiAgaWYodG9rZW4gJiYgdXNlci51c2VyX3JvbGUgPT0gMSl7XHJcbiAgICBjb25zdCB7cmVzfSA9IGN0eFxyXG4gICAgcmVzLndyaXRlSGVhZCgzMDIse2xvY2F0aW9uOlwiL2xvZ2luXCJ9KVxyXG4gICAgcmVzLmVuZCgpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybntcclxuICAgIHByb3BzOiB7fVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZWNhdGVnb3J5Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ0b2FzdCIsInBhcnNlQ29va2llcyIsIkFQSSIsIkNyZWF0ZWNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImFkZENhdGVnb3J5IiwiY29udGVudCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld2RhdGEiLCJqc29uIiwic3VjY2VzcyIsImZhbHNlIiwiZXJyb3IiLCJyb3V0ZXIiLCJwdXNoIiwicm91IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvcm1Db250cm9sbGVyIiwiaDEiLCJwIiwiaW5wdXQiLCJpbnB1dEZpZWxkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicmVzb3VyY2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIkJ0biIsIm9uQ2xpY2siLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJjb29raWUiLCJ0b2tlbiIsInVzZXIiLCJwYXJzZSIsInJlcyIsIndyaXRlSGVhZCIsImxvY2F0aW9uIiwiZW5kIiwidXNlcl9yb2xlIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/createcategory.js\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/createcategory.js"));
module.exports = __webpack_exports__;

})();