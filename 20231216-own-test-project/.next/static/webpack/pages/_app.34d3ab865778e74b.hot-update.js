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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    // ===============================\n    const isBrowser = \"object\" !== \"undefined\";\n    const initialStoredActivities = localStorage.getItem(\"activities\") !== null ? localStorage.getItem(\"activities\") : [];\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"activities\", {\n        default: initialStoredActivities\n    });\n    // const sampleData = [\n    //   { id: \"abcdefg12\", name: \"Jürgen\", isForGoodWeather: true },\n    //   { id: \"34abcdefg\", name: \"Markus\", isForGoodWeather: false },\n    //   { id: \"hijklmn65\", name: \"Verena\", isForGoodWeather: true },\n    //   { id: \"78hijklmn\", name: \"Kerstin\", isForGoodWeather: true },\n    //   { id: \"opqrstu90\", name: \"Jassi\", isForGoodWeather: true },\n    //   { id: \"12opqrstu\", name: \"Marvin\", isForGoodWeather: false },\n    // ];\n    const stringifiedSampleData = JSON.stringify(sampleData);\n    const parsedSampleData = JSON.parse(stringifiedSampleData);\n    console.log(parsedSampleData);\n    setStoredActivities(stringifiedSampleData);\n    // setStoredActivities([]);\n    // const initialLocalStorageState = isBrowser\n    //   ? localStorage.getItem(\"activities\") !== null\n    //     ? localStorage.getItem(\"activities\")\n    //     : []\n    //   : [];\n    // ===============================\n    // useEffect(() => {\n    //   // Only run this code in the browser\n    //   if (isBrowser) {\n    //     // Convert the state to a JSON string before storing it in local storage\n    //     const activitiesJSON = JSON.stringify(storedActivities);\n    //     // Update local storage with the latest activities\n    //     localStorage.setItem(\"activities\", activitiesJSON);\n    //   }\n    // }, [storedActivities, isBrowser]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                storedActivities: storedActivities\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"TDe2SQ619xwmPn5qWG0V9VcM7HY=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLGtDQUFrQztJQUNsQyxNQUFNQyxZQUFZLGFBQWtCO0lBQ3BDLE1BQU1DLDBCQUNKQyxhQUFhQyxRQUFRLGtCQUFrQixPQUNuQ0QsYUFBYUMsUUFBUSxnQkFDckIsRUFBRTtJQUNSLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1QsbUVBQW9CQSxDQUNsRSxjQUNBO1FBQUVVLFNBQVNMO0lBQXdCO0lBR3JDLHVCQUF1QjtJQUN2QixpRUFBaUU7SUFDakUsa0VBQWtFO0lBQ2xFLGlFQUFpRTtJQUNqRSxrRUFBa0U7SUFDbEUsZ0VBQWdFO0lBQ2hFLGtFQUFrRTtJQUNsRSxLQUFLO0lBRUwsTUFBTU0sd0JBQXdCQyxLQUFLQyxVQUFVQztJQUM3QyxNQUFNQyxtQkFBbUJILEtBQUtJLE1BQU1MO0lBQ3BDTSxRQUFRQyxJQUFJSDtJQUNaTixvQkFBb0JFO0lBQ3BCLDJCQUEyQjtJQUUzQiw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsVUFBVTtJQUVWLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQiwrRUFBK0U7SUFDL0UsK0RBQStEO0lBRS9ELHlEQUF5RDtJQUN6RCwwREFBMEQ7SUFDMUQsTUFBTTtJQUNOLHFDQUFxQztJQUVyQyxxQkFDRTs7MEJBQ0UsOERBQUNaLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVLLGtCQUFrQkE7Ozs7Ozs7O0FBR2xEO0dBbkR3QlA7O1FBTzBCRCwrREFBb0JBOzs7S0FQOUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuICBjb25zdCBpbml0aWFsU3RvcmVkQWN0aXZpdGllcyA9XG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpICE9PSBudWxsXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZpdGllc1wiKVxuICAgICAgOiBbXTtcbiAgY29uc3QgW3N0b3JlZEFjdGl2aXRpZXMsIHNldFN0b3JlZEFjdGl2aXRpZXNdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXG4gICAgXCJhY3Rpdml0aWVzXCIsXG4gICAgeyBkZWZhdWx0OiBpbml0aWFsU3RvcmVkQWN0aXZpdGllcyB9XG4gICk7XG5cbiAgLy8gY29uc3Qgc2FtcGxlRGF0YSA9IFtcbiAgLy8gICB7IGlkOiBcImFiY2RlZmcxMlwiLCBuYW1lOiBcIkrDvHJnZW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAvLyAgIHsgaWQ6IFwiMzRhYmNkZWZnXCIsIG5hbWU6IFwiTWFya3VzXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4gIC8vICAgeyBpZDogXCJoaWprbG1uNjVcIiwgbmFtZTogXCJWZXJlbmFcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAvLyAgIHsgaWQ6IFwiNzhoaWprbG1uXCIsIG5hbWU6IFwiS2Vyc3RpblwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gIC8vICAgeyBpZDogXCJvcHFyc3R1OTBcIiwgbmFtZTogXCJKYXNzaVwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gIC8vICAgeyBpZDogXCIxMm9wcXJzdHVcIiwgbmFtZTogXCJNYXJ2aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UgfSxcbiAgLy8gXTtcblxuICBjb25zdCBzdHJpbmdpZmllZFNhbXBsZURhdGEgPSBKU09OLnN0cmluZ2lmeShzYW1wbGVEYXRhKTtcbiAgY29uc3QgcGFyc2VkU2FtcGxlRGF0YSA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWRTYW1wbGVEYXRhKTtcbiAgY29uc29sZS5sb2cocGFyc2VkU2FtcGxlRGF0YSk7XG4gIHNldFN0b3JlZEFjdGl2aXRpZXMoc3RyaW5naWZpZWRTYW1wbGVEYXRhKTtcbiAgLy8gc2V0U3RvcmVkQWN0aXZpdGllcyhbXSk7XG5cbiAgLy8gY29uc3QgaW5pdGlhbExvY2FsU3RvcmFnZVN0YXRlID0gaXNCcm93c2VyXG4gIC8vICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2aXRpZXNcIikgIT09IG51bGxcbiAgLy8gICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpXG4gIC8vICAgICA6IFtdXG4gIC8vICAgOiBbXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gT25seSBydW4gdGhpcyBjb2RlIGluIHRoZSBicm93c2VyXG4gIC8vICAgaWYgKGlzQnJvd3Nlcikge1xuICAvLyAgICAgLy8gQ29udmVydCB0aGUgc3RhdGUgdG8gYSBKU09OIHN0cmluZyBiZWZvcmUgc3RvcmluZyBpdCBpbiBsb2NhbCBzdG9yYWdlXG4gIC8vICAgICBjb25zdCBhY3Rpdml0aWVzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZEFjdGl2aXRpZXMpO1xuXG4gIC8vICAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIHRoZSBsYXRlc3QgYWN0aXZpdGllc1xuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3Rpdml0aWVzXCIsIGFjdGl2aXRpZXNKU09OKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtzdG9yZWRBY3Rpdml0aWVzLCBpc0Jyb3dzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc3RvcmVkQWN0aXZpdGllcz17c3RvcmVkQWN0aXZpdGllc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNCcm93c2VyIiwiaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkQWN0aXZpdGllcyIsInNldFN0b3JlZEFjdGl2aXRpZXMiLCJkZWZhdWx0Iiwic3RyaW5naWZpZWRTYW1wbGVEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhbXBsZURhdGEiLCJwYXJzZWRTYW1wbGVEYXRhIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});