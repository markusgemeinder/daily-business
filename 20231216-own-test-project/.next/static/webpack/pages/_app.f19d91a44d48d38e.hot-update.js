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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"activities\", {\n        default: []\n    });\n    const sampleData = [\n        {\n            id: \"abcdefg12\",\n            name: \"J\\xfcrgen\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"34abcdefg\",\n            name: \"Markus\",\n            isForGoodWeather: false\n        },\n        {\n            id: \"hijklmn65\",\n            name: \"Verena\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"78hijklmn\",\n            name: \"Kerstin\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"opqrstu90\",\n            name: \"Jassi\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"12opqrstu\",\n            name: \"Marvin\",\n            isForGoodWeather: false\n        }\n    ];\n    const stringifiedStoredData = JSON.stringify(sampleData);\n    setStoredActivities(stringifiedStoredData);\n    const initialStoredActivities =  true ? localStorage.getItem(\"activities\") !== null ? localStorage.getItem(\"activities\") : [] : 0;\n    console.log(initialStoredActivities);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                storedActivities: storedActivities\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n //   // setStoredActivities([]);\n //   return (\n //     <>\n //       <GlobalStyle />\n //       <Component {...pageProps} storedActivities={storedActivities} />\n //     </>\n //   );\n // }\n_s(App, \"TDe2SQ619xwmPn5qWG0V9VcM7HY=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wsbUVBQW9CQSxDQUNsRSxjQUNBO1FBQUVNLFNBQVMsRUFBRTtJQUFDO0lBRWhCLE1BQU1DLGFBQWE7UUFDakI7WUFBRUMsSUFBSTtZQUFhQyxNQUFNO1lBQVVDLGtCQUFrQjtRQUFLO1FBQzFEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFVQyxrQkFBa0I7UUFBTTtRQUMzRDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQUs7UUFDMUQ7WUFBRUYsSUFBSTtZQUFhQyxNQUFNO1lBQVdDLGtCQUFrQjtRQUFLO1FBQzNEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFTQyxrQkFBa0I7UUFBSztRQUN6RDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQU07S0FDNUQ7SUFDRCxNQUFNQyx3QkFBd0JDLEtBQUtDLFVBQVVOO0lBQzdDRixvQkFBb0JNO0lBRXBCLE1BQU1HLDBCQUNKLEtBQTZCLEdBQ3pCQyxhQUFhQyxRQUFRLGtCQUFrQixPQUNyQ0QsYUFBYUMsUUFBUSxnQkFDckIsRUFBRSxHQUNKLENBQUU7SUFFUkMsUUFBUUMsSUFBSUo7SUFDWixxQkFDRTs7MEJBQ0UsOERBQUNmLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVDLGtCQUFrQkE7Ozs7Ozs7O0FBR2xELEVBRUEsaUVBQWlFO0NBRWpFLGdDQUFnQztDQUVoQyxhQUFhO0NBQ2IsU0FBUztDQUNULHdCQUF3QjtDQUN4Qix5RUFBeUU7Q0FDekUsVUFBVTtDQUNWLE9BQU87Q0FDUCxJQUFJO0dBMUNvQkg7O1FBQzBCRCwrREFBb0JBOzs7S0FEOUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3N0b3JlZEFjdGl2aXRpZXMsIHNldFN0b3JlZEFjdGl2aXRpZXNdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXG4gICAgXCJhY3Rpdml0aWVzXCIsXG4gICAgeyBkZWZhdWx0OiBbXSB9XG4gICk7XG4gIGNvbnN0IHNhbXBsZURhdGEgPSBbXG4gICAgeyBpZDogXCJhYmNkZWZnMTJcIiwgbmFtZTogXCJKw7xyZ2VuXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICB7IGlkOiBcIjM0YWJjZGVmZ1wiLCBuYW1lOiBcIk1hcmt1c1wiLCBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSB9LFxuICAgIHsgaWQ6IFwiaGlqa2xtbjY1XCIsIG5hbWU6IFwiVmVyZW5hXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICB7IGlkOiBcIjc4aGlqa2xtblwiLCBuYW1lOiBcIktlcnN0aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwib3BxcnN0dTkwXCIsIG5hbWU6IFwiSmFzc2lcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwiMTJvcHFyc3R1XCIsIG5hbWU6IFwiTWFydmluXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4gIF07XG4gIGNvbnN0IHN0cmluZ2lmaWVkU3RvcmVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNhbXBsZURhdGEpO1xuICBzZXRTdG9yZWRBY3Rpdml0aWVzKHN0cmluZ2lmaWVkU3RvcmVkRGF0YSk7XG5cbiAgY29uc3QgaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpICE9PSBudWxsXG4gICAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpXG4gICAgICAgIDogW11cbiAgICAgIDogW107XG5cbiAgY29uc29sZS5sb2coaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc3RvcmVkQWN0aXZpdGllcz17c3RvcmVkQWN0aXZpdGllc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZJWEVEIENPREUgQkVMT1dcblxuLy8gICAvLyBzZXRTdG9yZWRBY3Rpdml0aWVzKFtdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8R2xvYmFsU3R5bGUgLz5cbi8vICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc3RvcmVkQWN0aXZpdGllcz17c3RvcmVkQWN0aXZpdGllc30gLz5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmVkQWN0aXZpdGllcyIsInNldFN0b3JlZEFjdGl2aXRpZXMiLCJkZWZhdWx0Iiwic2FtcGxlRGF0YSIsImlkIiwibmFtZSIsImlzRm9yR29vZFdlYXRoZXIiLCJzdHJpbmdpZmllZFN0b3JlZERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});