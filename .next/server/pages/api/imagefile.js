"use strict";
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
exports.id = "pages/api/imagefile";
exports.ids = ["pages/api/imagefile"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./pages/api/imagefile.js":
/*!********************************!*\
  !*** ./pages/api/imagefile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: process.env.CLOUDINARY_NAME,\n    api_key: process.env.CLOUDINARY_KEY,\n    api_secret: process.env.CLOUDINARY_SECRET\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    const data = await new Promise(function(resolve, reject) {\n        const form = new (formidable__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)({\n            keepExtensions: true\n        });\n        form.parse(req, function(err, fields, files) {\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const imgResult = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().uploader.upload(data.files.image.path);\n    console.log(\"upload image url =>\", imgResult);\n    res.json({\n        url: imgResult.secure_url,\n        public_id: imgResult.public_id\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2VmaWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNDO0FBRXBDQSx3REFBaUIsQ0FBQztJQUNkRyxVQUFVLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0lBQ3ZDQyxPQUFPLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxjQUFjO0lBQ25DQyxVQUFVLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxpQkFBaUI7Q0FDMUMsQ0FBQyxDQUFDO0FBQ0ksTUFBTVIsTUFBTSxHQUFHO0lBQ3BCUyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDO0FBR2EsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxNQUFNQyxJQUFJLEdBQUcsTUFBTSxJQUFJQyxPQUFPLENBQUMsU0FBVUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFDeEQsTUFBTUMsSUFBSSxHQUFHLElBQUluQixnRUFBdUIsQ0FBQztZQUFFcUIsY0FBYyxFQUFFLElBQUk7U0FBRSxDQUFDO1FBQ2xFRixJQUFJLENBQUNHLEtBQUssQ0FBQ1QsR0FBRyxFQUFFLFNBQVVVLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7WUFDNUMsSUFBSUYsR0FBRyxFQUFFLE9BQU9MLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLENBQUM7WUFDNUJOLE9BQU8sQ0FBQztnQkFBRU8sTUFBTTtnQkFBRUMsS0FBSzthQUFFLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7S0FFSixDQUFDO0lBRUYsTUFBTUMsU0FBUyxHQUFJLE1BQU0zQixpRUFBMEIsQ0FBQ2dCLElBQUksQ0FBQ1UsS0FBSyxDQUFDSSxLQUFLLENBQUNDLElBQUksQ0FBQztJQUN4RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUVOLFNBQVMsQ0FBQyxDQUFDO0lBQzlDWixHQUFHLENBQUNtQixJQUFJLENBQUM7UUFDTEMsR0FBRyxFQUFFUixTQUFTLENBQUNTLFVBQVU7UUFDeEJDLFNBQVMsRUFBRVYsU0FBUyxDQUFDVSxTQUFTO0tBQy9CLENBQUM7Q0FJUiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rmcm9udC8uL3BhZ2VzL2FwaS9pbWFnZWZpbGUuanM/NTBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvdWRpbmFyeSBmcm9tIFwiY2xvdWRpbmFyeVwiXHJcbmltcG9ydCBmb3JtaWRhYmxlIGZyb20gJ2Zvcm1pZGFibGUnO1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gICAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9OQU1FLFxyXG4gICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9LRVksXHJcbiAgICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX1NFQ1JFVFxyXG4gIH0pO1xyXG4gIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oeyBrZWVwRXh0ZW5zaW9uczogdHJ1ZSB9KTtcclxuICAgICAgZm9ybS5wYXJzZShyZXEsIGZ1bmN0aW9uIChlcnIsIGZpZWxkcywgZmlsZXMpIHtcclxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbWdSZXN1bHQgPSAgYXdhaXQgY2xvdWRpbmFyeS51cGxvYWRlci51cGxvYWQoZGF0YS5maWxlcy5pbWFnZS5wYXRoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1cGxvYWQgaW1hZ2UgdXJsID0+XCIsIGltZ1Jlc3VsdCk7XHJcbiAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgIHVybDogaW1nUmVzdWx0LnNlY3VyZV91cmwsXHJcbiAgICAgICAgICAgcHVibGljX2lkOiBpbWdSZXN1bHQucHVibGljX2lkICAgICBcclxuICAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcblxyXG4gIH1cclxuXHJcbiJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5IiwiZm9ybWlkYWJsZSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ0xPVURJTkFSWV9OQU1FIiwiYXBpX2tleSIsIkNMT1VESU5BUllfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfU0VDUkVUIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwia2VlcEV4dGVuc2lvbnMiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiaW1nUmVzdWx0IiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJpbWFnZSIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInVybCIsInNlY3VyZV91cmwiLCJwdWJsaWNfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/imagefile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/imagefile.js"));
module.exports = __webpack_exports__;

})();