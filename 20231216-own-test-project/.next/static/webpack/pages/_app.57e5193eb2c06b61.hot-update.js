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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"activities\", {\n        default: []\n    });\n    // const sampleData = [\n    //   { id: \"abcdefg12\", name: \"Jürgen\", isForGoodWeather: true },\n    //   { id: \"34abcdefg\", name: \"Markus\", isForGoodWeather: false },\n    //   { id: \"hijklmn65\", name: \"Verena\", isForGoodWeather: true },\n    //   { id: \"78hijklmn\", name: \"Kerstin\", isForGoodWeather: true },\n    //   { id: \"opqrstu90\", name: \"Jassi\", isForGoodWeather: true },\n    //   { id: \"12opqrstu\", name: \"Marvin\", isForGoodWeather: false },\n    // ];\n    // setStoredActivities(sampleData);\n    const initialStoredActivities =  true ? localStorage.getItem(\"activities\") !== null ? localStorage.getItem(\"activities\") : [] : 0;\n    // console.log(JSON.parse(initialStoredActivities));\n    console.log(initialStoredActivities);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                storedActivities: storedActivities\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n_s(App, \"TDe2SQ619xwmPn5qWG0V9VcM7HY=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wsbUVBQW9CQSxDQUNsRSxjQUNBO1FBQUVNLFNBQVMsRUFBRTtJQUFDO0lBRWhCLHVCQUF1QjtJQUN2QixpRUFBaUU7SUFDakUsa0VBQWtFO0lBQ2xFLGlFQUFpRTtJQUNqRSxrRUFBa0U7SUFDbEUsZ0VBQWdFO0lBQ2hFLGtFQUFrRTtJQUNsRSxLQUFLO0lBQ0wsbUNBQW1DO0lBRW5DLE1BQU1DLDBCQUNKLEtBQTZCLEdBQ3pCQyxhQUFhQyxRQUFRLGtCQUFrQixPQUNyQ0QsYUFBYUMsUUFBUSxnQkFDckIsRUFBRSxHQUNKLENBQUU7SUFFUixvREFBb0Q7SUFDcERDLFFBQVFDLElBQUlKO0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDUiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTO2dCQUFFQyxrQkFBa0JBOzs7Ozs7OztBQUdsRCxFQUVBLGlFQUFpRTtHQWhDekNIOztRQUMwQkQsK0RBQW9CQTs7O0tBRDlDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZVN0YXRlIGZyb20gXCJ1c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtzdG9yZWRBY3Rpdml0aWVzLCBzZXRTdG9yZWRBY3Rpdml0aWVzXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKFxuICAgIFwiYWN0aXZpdGllc1wiLFxuICAgIHsgZGVmYXVsdDogW10gfVxuICApO1xuICAvLyBjb25zdCBzYW1wbGVEYXRhID0gW1xuICAvLyAgIHsgaWQ6IFwiYWJjZGVmZzEyXCIsIG5hbWU6IFwiSsO8cmdlblwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gIC8vICAgeyBpZDogXCIzNGFiY2RlZmdcIiwgbmFtZTogXCJNYXJrdXNcIiwgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UgfSxcbiAgLy8gICB7IGlkOiBcImhpamtsbW42NVwiLCBuYW1lOiBcIlZlcmVuYVwiLCBpc0Zvckdvb2RXZWF0aGVyOiB0cnVlIH0sXG4gIC8vICAgeyBpZDogXCI3OGhpamtsbW5cIiwgbmFtZTogXCJLZXJzdGluXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgLy8gICB7IGlkOiBcIm9wcXJzdHU5MFwiLCBuYW1lOiBcIkphc3NpXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgLy8gICB7IGlkOiBcIjEyb3BxcnN0dVwiLCBuYW1lOiBcIk1hcnZpblwiLCBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSB9LFxuICAvLyBdO1xuICAvLyBzZXRTdG9yZWRBY3Rpdml0aWVzKHNhbXBsZURhdGEpO1xuXG4gIGNvbnN0IGluaXRpYWxTdG9yZWRBY3Rpdml0aWVzID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZpdGllc1wiKSAhPT0gbnVsbFxuICAgICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZpdGllc1wiKVxuICAgICAgICA6IFtdXG4gICAgICA6IFtdO1xuXG4gIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMpKTtcbiAgY29uc29sZS5sb2coaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc3RvcmVkQWN0aXZpdGllcz17c3RvcmVkQWN0aXZpdGllc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZJWEVEIENPREUgQkVMT1dcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmVkQWN0aXZpdGllcyIsInNldFN0b3JlZEFjdGl2aXRpZXMiLCJkZWZhdWx0IiwiaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});