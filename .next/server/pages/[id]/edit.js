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
exports.id = "pages/[id]/edit";
exports.ids = ["pages/[id]/edit"];
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

/***/ "./pages/[id]/edit.js":
/*!****************************!*\
  !*** ./pages/[id]/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Register.module.css */ \"./styles/Register.module.css\");\n/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Component_Backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Component/Backend */ \"./Component/Backend.js\");\n\n\n\n\n\n\nconst EditCategory = ({ update  })=>{\n    const { cate_name  } = update[0];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const id = router.query.id;\n    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cate_name);\n    const updateCategory = async ()=>{\n        try {\n            const content = {\n                category\n            };\n            const data = await fetch(`http://localhost:3000/api/cate/${id}`, {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(content)\n            });\n            const newdata = await data.json();\n            if (newdata.success.false) {\n                setCategory(\"\");\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(newdata.success.false);\n            } else {\n                router.push(\"/Managecategory\");\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Category is created sucessfully\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().formController),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Update Category\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                        lineNumber: 46,\n                        columnNumber: 46\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField),\n                                value: category,\n                                onChange: (e)=>setCategory(e.target.value),\n                                type: \"text\",\n                                resource: \"\",\n                                placeholder: \"add category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                                lineNumber: 55,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_5___default().Btn),\n                            onClick: updateCategory,\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                            lineNumber: 67,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\FinalDeliverables\\\\testfront\\\\pages\\\\[id]\\\\edit.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps({ params  }) {\n    const id = params.id;\n    console.log(id);\n    const res = await fetch(`http://localhost:3000/api/cate/${id}`, {\n        method: \"GET\"\n    });\n    const updateData = await res.json();\n    console.log(updateData);\n    return {\n        props: {\n            update: updateData\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditCategory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxDQUNBO0lBQ0YsTUFBTWtDLFVBQVUsR0FBRyxNQUFNRCxHQUFHLENBQUMzQixJQUFJLEVBQUU7SUFDbkNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsVUFBVSxDQUFDO0lBQ3BCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQUM5QyxNQUFNLEVBQUM2QyxVQUFVO1NBQUM7S0FDM0I7Q0FDRjtBQUNILGlFQUFlOUMsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rmcm9udC8uL3BhZ2VzL1tpZF0vZWRpdC5qcz9iNWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX1mcm9tJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7dG9hc3R9ZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL0NvbXBvbmVudC9CYWNrZW5kJ1xyXG5cclxuY29uc3QgRWRpdENhdGVnb3J5ID0gKHt1cGRhdGV9KSA9PiB7XHJcbiBjb25zdCB7Y2F0ZV9uYW1lfSA9IHVwZGF0ZVswXVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWRcclxuXHJcblxyXG5jb25zdCBbY2F0ZWdvcnksc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoY2F0ZV9uYW1lKSBcclxuY29uc3QgdXBkYXRlQ2F0ZWdvcnkgPSBhc3luYygpID0+e1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0ge2NhdGVnb3J5fVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhdGUvJHtpZH1gLHtcclxuICAgICAgbWV0aG9kOlwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgXHJcbiAgICAgfSxcclxuICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IG5ld2RhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG5cclxuICAgIGlmIChuZXdkYXRhLnN1Y2Nlc3MuZmFsc2Upe1xyXG4gICAgICBzZXRDYXRlZ29yeShcIlwiKVxyXG4gICAgICB0b2FzdC5lcnJvcihuZXdkYXRhLnN1Y2Nlc3MuZmFsc2UpXHJcbiAgICAgIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZWNhdGVnb3J5XCIpXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDYXRlZ29yeSBpcyBjcmVhdGVkIHN1Y2Vzc2Z1bGx5XCIpXHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcblxyXG59XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250cm9sbGVyfT48aDE+VXBkYXRlIENhdGVnb3J5PC9oMT5cclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8cD5cclxuICAgICBjYXRlZ29yeVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfSBcclxuICAgICAgdmFsdWU9e2NhdGVnb3J5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgdHlwZT1cInRleHRcIiAgcmVzb3VyY2U9JycgcGxhY2Vob2xkZXI9J2FkZCBjYXRlZ29yeScvPlxyXG4gICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICBcclxuICAgICAgXHJcbiBcclxuICAgICAgXHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5CdG59IG9uQ2xpY2s9e3VwZGF0ZUNhdGVnb3J5fT5VcGRhdGU8L2J1dHRvbj5cclxuXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xyXG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkXHJcbiAgY29uc29sZS5sb2coaWQpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2F0ZS8ke2lkfWAse1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfVxyXG4gIClcclxuIGNvbnN0IHVwZGF0ZURhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiBjb25zb2xlLmxvZyh1cGRhdGVEYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHt1cGRhdGU6dXBkYXRlRGF0YX0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgRWRpdENhdGVnb3J5ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJBUEkiLCJFZGl0Q2F0ZWdvcnkiLCJ1cGRhdGUiLCJjYXRlX25hbWUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInVwZGF0ZUNhdGVnb3J5IiwiY29udGVudCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld2RhdGEiLCJqc29uIiwic3VjY2VzcyIsImZhbHNlIiwiZXJyb3IiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvcm1Db250cm9sbGVyIiwiaDEiLCJwIiwiaW5wdXQiLCJpbnB1dEZpZWxkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicmVzb3VyY2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIkJ0biIsIm9uQ2xpY2siLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXMiLCJ1cGRhdGVEYXRhIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/edit.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id]/edit.js"));
module.exports = __webpack_exports__;

})();