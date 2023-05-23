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
exports.id = "pages/api/cartId";
exports.ids = ["pages/api/cartId"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./pages/api/cartId.js":
/*!*****************************!*\
  !*** ./pages/api/cartId.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./pages/api/db.js\");\n\nasync function handler(req, res) {\n    const { ids  } = await req.query;\n    // const   num  = Array.from(String(ids),Number).filter(num => Number(num))\n    const arr = ids.split(\",\").map(Number);\n    if (req.method == \"GET\") {\n        try {\n            const oneProduct = await _db__WEBPACK_IMPORTED_MODULE_0__.conn.query(\"select * from products where product_id = ANY($1 ::int[])\", [\n                arr\n            ]);\n            res.status(200).json(oneProduct.rows);\n        } catch (error) {\n            console.log(error);\n            res.status(400).json(\"error accourd\", error);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydElkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRCO0FBRWIsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxNQUFNLEVBQUNDLEdBQUcsR0FBQyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csS0FBSztJQUc3QiwyRUFBMkU7SUFDM0UsTUFBTUMsR0FBRyxHQUFJRixHQUFHLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUM7SUFJdkMsSUFBR1AsR0FBRyxDQUFDUSxNQUFNLElBQUksS0FBSyxFQUFDO1FBQ25CLElBQUk7WUFHSSxNQUFNQyxVQUFVLEdBQUcsTUFBTVgsMkNBQVUsQ0FBQywyREFBMkQsRUFBQztnQkFBQ00sR0FBRzthQUFDLENBQUM7WUFFdEdILEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0csSUFBSSxDQUFDO1NBRXhDLENBR0osT0FBT0MsS0FBSyxFQUFFO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7WUFDbEJaLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFDRSxLQUFLLENBQUM7U0FDOUM7S0FDSjtDQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGZyb250Ly4vcGFnZXMvYXBpL2NhcnRJZC5qcz83YThiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjb25uIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7aWRzfSA9IGF3YWl0IHJlcS5xdWVyeVxyXG5cclxuICAgIFxyXG4gICAgLy8gY29uc3QgICBudW0gID0gQXJyYXkuZnJvbShTdHJpbmcoaWRzKSxOdW1iZXIpLmZpbHRlcihudW0gPT4gTnVtYmVyKG51bSkpXHJcbiAgICBjb25zdCBhcnIgPSAgaWRzLnNwbGl0KCcsJykubWFwKE51bWJlcikgXHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgaWYocmVxLm1ldGhvZCA9PSBcIkdFVFwiKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uZVByb2R1Y3QgPSBhd2FpdCBjb25uLnF1ZXJ5KCdzZWxlY3QgKiBmcm9tIHByb2R1Y3RzIHdoZXJlIHByb2R1Y3RfaWQgPSBBTlkoJDEgOjppbnRbXSknLFthcnJdKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9uZVByb2R1Y3Qucm93cylcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oXCJlcnJvciBhY2NvdXJkXCIsZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4iXSwibmFtZXMiOlsiY29ubiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZHMiLCJxdWVyeSIsImFyciIsInNwbGl0IiwibWFwIiwiTnVtYmVyIiwibWV0aG9kIiwib25lUHJvZHVjdCIsInN0YXR1cyIsImpzb24iLCJyb3dzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/cartId.js\n");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conn\": () => (/* binding */ conn)\n/* harmony export */ });\n// import { Pool } from \"pg\";\n// let conn;\n// if(!conn){\n//     conn = new Pool({\n//         user: 'postgres',\n//         password: 'Thebalochcoder',\n//         host: 'localhost',\n//         port: 5432,\n//         database: 'testphase'\n//     });\n// }\n// export { conn };\n//  CLOUDE CONNECTION \nvar pg = __webpack_require__(/*! pg */ \"pg\");\n//or native libpq bindings\n//var pg = require('pg').native\nvar conString = process.env.DATABASE_URL //Can be found in the Details page\n;\nvar conn = new pg.Client(conString);\nconn.connect(function(err) {\n    if (err) {\n        console.error(\"could not connect to postgres\", err);\n        return conn = null;\n    }\n    conn.query('SELECT NOW() AS \"theTime\"', function(err, result) {\n        if (err) {\n            return console.error(\"error running query\", err);\n        }\n        console.log(\"DATABASE CONNECTED\");\n    // >> output: 2018-08-23T14:02:57.117Z\n    });\n});\n // CONNECTION POLLING METHOD\n // const { Pool } = require(\"pg\")\n // const pool = new Pool()\n // async function conn() {\n //   const client = await pool.connect()\n //   try {\n //     const res = await client.query(\"SELECT * FROM users WHERE id = $1\", [1])\n //     console.log(res.rows[0])\n //   } finally {\n //     await client.release()\n //     await client.end()\n //   }\n // }\n // export {conn}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUE2QjtBQUU3QixZQUFZO0FBQ1osYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFFVixJQUFJO0FBRUosbUJBQW1CO0FBR25CLHNCQUFzQjtBQUN0QixJQUFJQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBQ3RCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFFL0IsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDLGtDQUFrQztBQUFuQztBQUN4QyxJQUFJQyxJQUFJLEdBQUksSUFBSU4sRUFBRSxDQUFDTyxNQUFNLENBQUNMLFNBQVMsQ0FBQztBQUNuQ0ksSUFBSSxDQUFDRSxPQUFPLENBQUMsU0FBU0MsR0FBRyxFQUFFO0lBQzFCLElBQUdBLEdBQUcsRUFBRTtRQUNOQyxPQUFPLENBQUNDLEtBQUssQ0FBQywrQkFBK0IsRUFBRUYsR0FBRyxDQUFDLENBQUM7UUFDcEQsT0FBT0gsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtJQUNDQSxJQUFJLENBQUNNLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxTQUFTSCxHQUFHLEVBQUVJLE1BQU0sRUFBRTtRQUM5RCxJQUFHSixHQUFHLEVBQUU7WUFDTixPQUFPQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUYsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFDQ0MsT0FBTyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFPbkMsc0NBQXNDO0tBRXZDLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUdhLENBRWhCLDRCQUE0QjtDQUc1QixpQ0FBaUM7Q0FDakMsMEJBQTBCO0NBRTFCLDBCQUEwQjtDQUMxQix3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLCtFQUErRTtDQUMvRSwrQkFBK0I7Q0FDL0IsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLElBQUk7Q0FDSixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0ZnJvbnQvLi9wYWdlcy9hcGkvZGIuanM/YjgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XHJcblxyXG4vLyBsZXQgY29ubjtcclxuLy8gaWYoIWNvbm4pe1xyXG4vLyAgICAgY29ubiA9IG5ldyBQb29sKHtcclxuLy8gICAgICAgICB1c2VyOiAncG9zdGdyZXMnLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkOiAnVGhlYmFsb2NoY29kZXInLFxyXG4vLyAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4vLyAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbi8vICAgICAgICAgZGF0YWJhc2U6ICd0ZXN0cGhhc2UnXHJcbi8vICAgICB9KTtcclxuIFxyXG4vLyB9XHJcbiAgXHJcbi8vIGV4cG9ydCB7IGNvbm4gfTtcclxuICAgXHJcblxyXG4vLyAgQ0xPVURFIENPTk5FQ1RJT04gXHJcbnZhciBwZyA9IHJlcXVpcmUoJ3BnJylcclxuLy9vciBuYXRpdmUgbGlicHEgYmluZGluZ3NcclxuLy92YXIgcGcgPSByZXF1aXJlKCdwZycpLm5hdGl2ZVxyXG5cclxudmFyIGNvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCAvL0NhbiBiZSBmb3VuZCBpbiB0aGUgRGV0YWlscyBwYWdlXHJcbnZhciBjb25uICA9IG5ldyBwZy5DbGllbnQoY29uU3RyaW5nKTtcclxuIGNvbm4uY29ubmVjdChmdW5jdGlvbihlcnIpIHtcclxuICBpZihlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2NvdWxkIG5vdCBjb25uZWN0IHRvIHBvc3RncmVzJywgZXJyKTtcclxuICAgIHJldHVybiBjb25uID0gbnVsbDtcclxuICB9XHJcbiAgICBjb25uLnF1ZXJ5KCdTRUxFQ1QgTk9XKCkgQVMgXCJ0aGVUaW1lXCInLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xyXG4gICAgaWYoZXJyKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdlcnJvciBydW5uaW5nIHF1ZXJ5JywgZXJyKTtcclxuICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJEQVRBQkFTRSBDT05ORUNURURcIilcclxuICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAvLyA+PiBvdXRwdXQ6IDIwMTgtMDgtMjNUMTQ6MDI6NTcuMTE3WlxyXG4gXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IGNvbm4gfTtcclxuXHJcbi8vIENPTk5FQ1RJT04gUE9MTElORyBNRVRIT0RcclxuXHJcblxyXG4vLyBjb25zdCB7IFBvb2wgfSA9IHJlcXVpcmUoXCJwZ1wiKVxyXG4vLyBjb25zdCBwb29sID0gbmV3IFBvb2woKVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gY29ubigpIHtcclxuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBwb29sLmNvbm5lY3QoKVxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGlkID0gJDFcIiwgWzFdKVxyXG4vLyAgICAgY29uc29sZS5sb2cocmVzLnJvd3NbMF0pXHJcbi8vICAgfSBmaW5hbGx5IHtcclxuLy8gICAgIGF3YWl0IGNsaWVudC5yZWxlYXNlKClcclxuLy8gICAgIGF3YWl0IGNsaWVudC5lbmQoKVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQge2Nvbm59Il0sIm5hbWVzIjpbInBnIiwicmVxdWlyZSIsImNvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJjb25uIiwiQ2xpZW50IiwiY29ubmVjdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXJ5IiwicmVzdWx0IiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cartId.js"));
module.exports = __webpack_exports__;

})();