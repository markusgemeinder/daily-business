"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"activities\", {\n        default: []\n    });\n    const sampleData = [\n        {\n            id: \"abcdefg12\",\n            name: \"J\\xfcrgen\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"34abcdefg\",\n            name: \"Markus\",\n            isForGoodWeather: false\n        },\n        {\n            id: \"hijklmn65\",\n            name: \"Verena\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"78hijklmn\",\n            name: \"Kerstin\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"opqrstu90\",\n            name: \"Jassi\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"12opqrstu\",\n            name: \"Marvin\",\n            isForGoodWeather: false\n        }\n    ];\n    // const stringifiedStoredData = JSON.stringify(sampleData);\n    // setStoredActivities(stringifiedStoredData);\n    setStoredActivities(sampleData);\n    const initialStoredActivities =  true ? localStorage.getItem(\"activities\") !== null ? localStorage.getItem(\"activities\") : [] : 0;\n    console.log(JSON.parse(initialStoredActivities));\n    // console.log(initialStoredActivities);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                storedActivities: storedActivities\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n_s(App, \"TDe2SQ619xwmPn5qWG0V9VcM7HY=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wsbUVBQW9CQSxDQUNsRSxjQUNBO1FBQUVNLFNBQVMsRUFBRTtJQUFDO0lBRWhCLE1BQU1DLGFBQWE7UUFDakI7WUFBRUMsSUFBSTtZQUFhQyxNQUFNO1lBQVVDLGtCQUFrQjtRQUFLO1FBQzFEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFVQyxrQkFBa0I7UUFBTTtRQUMzRDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQUs7UUFDMUQ7WUFBRUYsSUFBSTtZQUFhQyxNQUFNO1lBQVdDLGtCQUFrQjtRQUFLO1FBQzNEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFTQyxrQkFBa0I7UUFBSztRQUN6RDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQU07S0FDNUQ7SUFDRCw0REFBNEQ7SUFDNUQsOENBQThDO0lBQzlDTCxvQkFBb0JFO0lBRXBCLE1BQU1JLDBCQUNKLEtBQTZCLEdBQ3pCQyxhQUFhQyxRQUFRLGtCQUFrQixPQUNyQ0QsYUFBYUMsUUFBUSxnQkFDckIsRUFBRSxHQUNKLENBQUU7SUFFUkMsUUFBUUMsSUFBSUMsS0FBS0MsTUFBTU47SUFDdkIsd0NBQXdDO0lBQ3hDLHFCQUNFOzswQkFDRSw4REFBQ1osK0NBQVdBOzs7OzswQkFDWiw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUztnQkFBRUMsa0JBQWtCQTs7Ozs7Ozs7QUFHbEQsRUFFQSxpRUFBaUU7R0FsQ3pDSDs7UUFDMEJELCtEQUFvQkE7OztLQUQ5Q0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbc3RvcmVkQWN0aXZpdGllcywgc2V0U3RvcmVkQWN0aXZpdGllc10gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShcbiAgICBcImFjdGl2aXRpZXNcIixcbiAgICB7IGRlZmF1bHQ6IFtdIH1cbiAgKTtcbiAgY29uc3Qgc2FtcGxlRGF0YSA9IFtcbiAgICB7IGlkOiBcImFiY2RlZmcxMlwiLCBuYW1lOiBcIkrDvHJnZW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwiMzRhYmNkZWZnXCIsIG5hbWU6IFwiTWFya3VzXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4gICAgeyBpZDogXCJoaWprbG1uNjVcIiwgbmFtZTogXCJWZXJlbmFcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwiNzhoaWprbG1uXCIsIG5hbWU6IFwiS2Vyc3RpblwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gICAgeyBpZDogXCJvcHFyc3R1OTBcIiwgbmFtZTogXCJKYXNzaVwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gICAgeyBpZDogXCIxMm9wcXJzdHVcIiwgbmFtZTogXCJNYXJ2aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UgfSxcbiAgXTtcbiAgLy8gY29uc3Qgc3RyaW5naWZpZWRTdG9yZWREYXRhID0gSlNPTi5zdHJpbmdpZnkoc2FtcGxlRGF0YSk7XG4gIC8vIHNldFN0b3JlZEFjdGl2aXRpZXMoc3RyaW5naWZpZWRTdG9yZWREYXRhKTtcbiAgc2V0U3RvcmVkQWN0aXZpdGllcyhzYW1wbGVEYXRhKTtcblxuICBjb25zdCBpbml0aWFsU3RvcmVkQWN0aXZpdGllcyA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2aXRpZXNcIikgIT09IG51bGxcbiAgICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2aXRpZXNcIilcbiAgICAgICAgOiBbXVxuICAgICAgOiBbXTtcblxuICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGluaXRpYWxTdG9yZWRBY3Rpdml0aWVzKSk7XG4gIC8vIGNvbnNvbGUubG9nKGluaXRpYWxTdG9yZWRBY3Rpdml0aWVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHN0b3JlZEFjdGl2aXRpZXM9e3N0b3JlZEFjdGl2aXRpZXN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGSVhFRCBDT0RFIEJFTE9XXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiR2xvYmFsU3R5bGUiLCJ1c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlZEFjdGl2aXRpZXMiLCJzZXRTdG9yZWRBY3Rpdml0aWVzIiwiZGVmYXVsdCIsInNhbXBsZURhdGEiLCJpZCIsIm5hbWUiLCJpc0Zvckdvb2RXZWF0aGVyIiwiaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});