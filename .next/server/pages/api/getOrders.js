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
exports.id = "pages/api/getOrders";
exports.ids = ["pages/api/getOrders"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conn\": () => (/* binding */ conn)\n/* harmony export */ });\n// import { Pool } from \"pg\";\n// let conn;\n// if(!conn){\n//     conn = new Pool({\n//         user: 'postgres',\n//         password: 'Thebalochcoder',\n//         host: 'localhost',\n//         port: 5432,\n//         database: 'testphase'\n//     });\n// }\n// export { conn };\n//  CLOUDE CONNECTION \nvar pg = __webpack_require__(/*! pg */ \"pg\");\n//or native libpq bindings\n//var pg = require('pg').native\nvar conString = process.env.DATABASE_URL //Can be found in the Details page\n;\nvar conn = new pg.Client(conString);\nconn.connect(function(err) {\n    if (err) {\n        console.error(\"could not connect to postgres\", err);\n        return conn = null;\n    }\n    conn.query('SELECT NOW() AS \"theTime\"', function(err, result) {\n        if (err) {\n            return console.error(\"error running query\", err);\n        }\n        console.log(\"DATABASE CONNECTED\");\n    // >> output: 2018-08-23T14:02:57.117Z\n    });\n});\n // CONNECTION POLLING METHOD\n // const { Pool } = require(\"pg\")\n // const pool = new Pool()\n // async function conn() {\n //   const client = await pool.connect()\n //   try {\n //     const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1])\n //     console.log(res.rows[0])\n //   } finally {\n //     await client.release()\n //     await client.end()\n //   }\n // }\n // export {conn}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUE2QjtBQUU3QixZQUFZO0FBQ1osYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFFVixJQUFJO0FBRUosbUJBQW1CO0FBR25CLHNCQUFzQjtBQUN0QixJQUFJQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBQ3RCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFFL0IsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDLGtDQUFrQztBQUFuQztBQUN4QyxJQUFJQyxJQUFJLEdBQUksSUFBSU4sRUFBRSxDQUFDTyxNQUFNLENBQUNMLFNBQVMsQ0FBQztBQUNuQ0ksSUFBSSxDQUFDRSxPQUFPLENBQUMsU0FBU0MsR0FBRyxFQUFFO0lBQzFCLElBQUdBLEdBQUcsRUFBRTtRQUNOQyxPQUFPLENBQUNDLEtBQUssQ0FBQywrQkFBK0IsRUFBRUYsR0FBRyxDQUFDLENBQUM7UUFDcEQsT0FBT0gsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtJQUNDQSxJQUFJLENBQUNNLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxTQUFTSCxHQUFHLEVBQUVJLE1BQU0sRUFBRTtRQUM5RCxJQUFHSixHQUFHLEVBQUU7WUFDTixPQUFPQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUYsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFDQ0MsT0FBTyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFPbkMsc0NBQXNDO0tBRXZDLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUdhLENBRWhCLDRCQUE0QjtDQUc1QixpQ0FBaUM7Q0FDakMsMEJBQTBCO0NBRTFCLDBCQUEwQjtDQUMxQix3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLCtFQUErRTtDQUMvRSwrQkFBK0I7Q0FDL0IsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLElBQUk7Q0FDSixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0ZnJvbnQvLi9wYWdlcy9hcGkvZGIuanM/YjgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XHJcblxyXG4vLyBsZXQgY29ubjtcclxuLy8gaWYoIWNvbm4pe1xyXG4vLyAgICAgY29ubiA9IG5ldyBQb29sKHtcclxuLy8gICAgICAgICB1c2VyOiAncG9zdGdyZXMnLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkOiAnVGhlYmFsb2NoY29kZXInLFxyXG4vLyAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4vLyAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbi8vICAgICAgICAgZGF0YWJhc2U6ICd0ZXN0cGhhc2UnXHJcbi8vICAgICB9KTtcclxuIFxyXG4vLyB9XHJcbiAgXHJcbi8vIGV4cG9ydCB7IGNvbm4gfTtcclxuICAgXHJcblxyXG4vLyAgQ0xPVURFIENPTk5FQ1RJT04gXHJcbnZhciBwZyA9IHJlcXVpcmUoJ3BnJylcclxuLy9vciBuYXRpdmUgbGlicHEgYmluZGluZ3NcclxuLy92YXIgcGcgPSByZXF1aXJlKCdwZycpLm5hdGl2ZVxyXG5cclxudmFyIGNvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCAvL0NhbiBiZSBmb3VuZCBpbiB0aGUgRGV0YWlscyBwYWdlXHJcbnZhciBjb25uICA9IG5ldyBwZy5DbGllbnQoY29uU3RyaW5nKTtcclxuIGNvbm4uY29ubmVjdChmdW5jdGlvbihlcnIpIHtcclxuICBpZihlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2NvdWxkIG5vdCBjb25uZWN0IHRvIHBvc3RncmVzJywgZXJyKTtcclxuICAgIHJldHVybiBjb25uID0gbnVsbDtcclxuICB9XHJcbiAgICBjb25uLnF1ZXJ5KCdTRUxFQ1QgTk9XKCkgQVMgXCJ0aGVUaW1lXCInLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xyXG4gICAgaWYoZXJyKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBydW5uaW5nIHF1ZXJ5JywgZXJyKTtcclxuICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJEQVRBQkFTRSBDT05ORUNURURcIilcclxuICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAvLyA+PiBvdXRwdXQ6IDIwMTgtMDgtMjNUMTQ6MDI6NTcuMTE3WlxyXG4gXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IGNvbm4gfTtcclxuXHJcbi8vIENPTk5FQ1RJT04gUE9MTElORyBNRVRIT0RcclxuXHJcblxyXG4vLyBjb25zdCB7IFBvb2wgfSA9IHJlcXVpcmUoXCJwZ1wiKVxyXG4vLyBjb25zdCBwb29sID0gbmV3IFBvb2woKVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gY29ubigpIHtcclxuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBwb29sLmNvbm5lY3QoKVxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGlkID0gJDFcIiwgWzFdKVxyXG4vLyAgICAgY29uc29sZS5sb2cocmVzLnJvd3NbMF0pXHJcbi8vICAgfSBmaW5hbGx5IHtcclxuLy8gICAgIGF3YWl0IGNsaWVudC5yZWxlYXNlKClcclxuLy8gICAgIGF3YWl0IGNsaWVudC5lbmQoKVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQge2Nvbm59Il0sIm5hbWVzIjpbInBnIiwicmVxdWlyZSIsImNvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJjb25uIiwiQ2xpZW50IiwiY29ubmVjdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXJ5IiwicmVzdWx0IiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getOrders.js":
/*!********************************!*\
  !*** ./pages/api/getOrders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./pages/api/db.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const allOrders = await _db__WEBPACK_IMPORTED_MODULE_0__.conn.query(\"SELECT * from orders\");\n            res.status(200).json(allOrders.rows);\n        } catch (error) {\n            res.status(401).json(error);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0T3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBR1osZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUM3QyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDckIsSUFBSTtZQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFNTCwyQ0FBVSxDQUFDLHNCQUFzQixDQUFDO1lBQzFERyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxTQUFTLENBQUNJLElBQUksQ0FBQztTQUN2QyxDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaUCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLLENBQUM7U0FDOUI7S0FDSDtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGZyb250Ly4vcGFnZXMvYXBpL2dldE9yZGVycy5qcz8zN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm4gfSBmcm9tIFwiLi9kYlwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuIGlmKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhbGxPcmRlcnMgPSBhd2FpdCBjb25uLnF1ZXJ5KCdTRUxFQ1QgKiBmcm9tIG9yZGVycycpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsT3JkZXJzLnJvd3MpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKGVycm9yKVxyXG4gICAgfVxyXG4gfVxyXG59Il0sIm5hbWVzIjpbImNvbm4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYWxsT3JkZXJzIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwicm93cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getOrders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getOrders.js"));
module.exports = __webpack_exports__;

})();