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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"activities\", {\n        default: []\n    });\n    const sampleData = [\n        {\n            id: \"abcdefg12\",\n            name: \"J\\xfcrgen\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"34abcdefg\",\n            name: \"Markus\",\n            isForGoodWeather: false\n        },\n        // { id: \"hijklmn65\", name: \"Verena\", isForGoodWeather: true },\n        // { id: \"78hijklmn\", name: \"Kerstin\", isForGoodWeather: true },\n        {\n            id: \"opqrstu90\",\n            name: \"Jassi\",\n            isForGoodWeather: true\n        },\n        {\n            id: \"12opqrstu\",\n            name: \"Marvin\",\n            isForGoodWeather: false\n        }\n    ];\n    setStoredActivities(sampleData);\n    // const initialStoredActivities =\n    //   typeof window !== \"undefined\"\n    //     ? localStorage.getItem(\"activities\") !== null\n    //       ? localStorage.getItem(\"activities\")\n    //       : \"[]\"\n    //     : \"[]\";\n    // console.log(JSON.parse(initialStoredActivities));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                storedActivities: storedActivities\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n // import { useEffect } from \"react\";\n // import GlobalStyle from \"../styles\";\n // import useLocalStorageState from \"use-local-storage-state\";\n // export default function App({ Component, pageProps }) {\n //   const [storedActivities, setStoredActivities] = useLocalStorageState(\n //     \"activities\",\n //     { default: [] }\n //   );\n //   // const sampleData = [\n //   //   { id: \"abcdefg12\", name: \"Jürgen\", isForGoodWeather: true },\n //   //   { id: \"34abcdefg\", name: \"Markus\", isForGoodWeather: false },\n //   //   { id: \"hijklmn65\", name: \"Verena\", isForGoodWeather: true },\n //   //   { id: \"78hijklmn\", name: \"Kerstin\", isForGoodWeather: true },\n //   //   { id: \"opqrstu90\", name: \"Jassi\", isForGoodWeather: true },\n //   //   { id: \"12opqrstu\", name: \"Marvin\", isForGoodWeather: false },\n //   // ];\n //   // setStoredActivities(sampleData);\n //   const initialStoredActivities =\n //     typeof window !== \"undefined\"\n //       ? localStorage.getItem(\"activities\") !== null\n //         ? localStorage.getItem(\"activities\")\n //         : \"[]\"\n //       : \"[]\";\n //   console.log(JSON.parse(initialStoredActivities));\n //   return (\n //     <>\n //       <GlobalStyle />\n //       <Component {...pageProps} storedActivities={storedActivities} />\n //     </>\n //   );\n // }\n_s(App, \"TDe2SQ619xwmPn5qWG0V9VcM7HY=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wsbUVBQW9CQSxDQUNsRSxjQUNBO1FBQUVNLFNBQVMsRUFBRTtJQUFDO0lBRWhCLE1BQU1DLGFBQWE7UUFDakI7WUFBRUMsSUFBSTtZQUFhQyxNQUFNO1lBQVVDLGtCQUFrQjtRQUFLO1FBQzFEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFVQyxrQkFBa0I7UUFBTTtRQUMzRCwrREFBK0Q7UUFDL0QsZ0VBQWdFO1FBQ2hFO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFTQyxrQkFBa0I7UUFBSztRQUN6RDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQU07S0FDNUQ7SUFDREwsb0JBQW9CRTtJQUVwQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLG9EQUFvRDtJQUNwRCw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGNBQWM7SUFFZCxvREFBb0Q7SUFFcEQscUJBQ0U7OzBCQUNFLDhEQUFDUiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTO2dCQUFFQyxrQkFBa0JBOzs7Ozs7OztBQUdsRCxFQUVBLGlFQUFpRTtDQUNqRSxxQ0FBcUM7Q0FDckMsdUNBQXVDO0NBQ3ZDLDhEQUE4RDtDQUU5RCwwREFBMEQ7Q0FDMUQsMEVBQTBFO0NBQzFFLG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEIsT0FBTztDQUNQLDRCQUE0QjtDQUM1QixzRUFBc0U7Q0FDdEUsdUVBQXVFO0NBQ3ZFLHNFQUFzRTtDQUN0RSx1RUFBdUU7Q0FDdkUscUVBQXFFO0NBQ3JFLHVFQUF1RTtDQUN2RSxVQUFVO0NBQ1Ysd0NBQXdDO0NBRXhDLG9DQUFvQztDQUNwQyxvQ0FBb0M7Q0FDcEMsc0RBQXNEO0NBQ3RELCtDQUErQztDQUMvQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBRWhCLHNEQUFzRDtDQUN0RCxhQUFhO0NBQ2IsU0FBUztDQUNULHdCQUF3QjtDQUN4Qix5RUFBeUU7Q0FDekUsVUFBVTtDQUNWLE9BQU87Q0FDUCxJQUFJO0dBbEVvQkg7O1FBQzBCRCwrREFBb0JBOzs7S0FEOUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3N0b3JlZEFjdGl2aXRpZXMsIHNldFN0b3JlZEFjdGl2aXRpZXNdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXG4gICAgXCJhY3Rpdml0aWVzXCIsXG4gICAgeyBkZWZhdWx0OiBbXSB9XG4gICk7XG4gIGNvbnN0IHNhbXBsZURhdGEgPSBbXG4gICAgeyBpZDogXCJhYmNkZWZnMTJcIiwgbmFtZTogXCJKw7xyZ2VuXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICB7IGlkOiBcIjM0YWJjZGVmZ1wiLCBuYW1lOiBcIk1hcmt1c1wiLCBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSB9LFxuICAgIC8vIHsgaWQ6IFwiaGlqa2xtbjY1XCIsIG5hbWU6IFwiVmVyZW5hXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICAvLyB7IGlkOiBcIjc4aGlqa2xtblwiLCBuYW1lOiBcIktlcnN0aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwib3BxcnN0dTkwXCIsIG5hbWU6IFwiSmFzc2lcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwiMTJvcHFyc3R1XCIsIG5hbWU6IFwiTWFydmluXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4gIF07XG4gIHNldFN0b3JlZEFjdGl2aXRpZXMoc2FtcGxlRGF0YSk7XG5cbiAgLy8gY29uc3QgaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMgPVxuICAvLyAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgLy8gICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpICE9PSBudWxsXG4gIC8vICAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpXG4gIC8vICAgICAgIDogXCJbXVwiXG4gIC8vICAgICA6IFwiW11cIjtcblxuICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGluaXRpYWxTdG9yZWRBY3Rpdml0aWVzKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHN0b3JlZEFjdGl2aXRpZXM9e3N0b3JlZEFjdGl2aXRpZXN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGSVhFRCBDT0RFIEJFTE9XXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG4vLyBpbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbi8vICAgY29uc3QgW3N0b3JlZEFjdGl2aXRpZXMsIHNldFN0b3JlZEFjdGl2aXRpZXNdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXG4vLyAgICAgXCJhY3Rpdml0aWVzXCIsXG4vLyAgICAgeyBkZWZhdWx0OiBbXSB9XG4vLyAgICk7XG4vLyAgIC8vIGNvbnN0IHNhbXBsZURhdGEgPSBbXG4vLyAgIC8vICAgeyBpZDogXCJhYmNkZWZnMTJcIiwgbmFtZTogXCJKw7xyZ2VuXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbi8vICAgLy8gICB7IGlkOiBcIjM0YWJjZGVmZ1wiLCBuYW1lOiBcIk1hcmt1c1wiLCBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSB9LFxuLy8gICAvLyAgIHsgaWQ6IFwiaGlqa2xtbjY1XCIsIG5hbWU6IFwiVmVyZW5hXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbi8vICAgLy8gICB7IGlkOiBcIjc4aGlqa2xtblwiLCBuYW1lOiBcIktlcnN0aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuLy8gICAvLyAgIHsgaWQ6IFwib3BxcnN0dTkwXCIsIG5hbWU6IFwiSmFzc2lcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuLy8gICAvLyAgIHsgaWQ6IFwiMTJvcHFyc3R1XCIsIG5hbWU6IFwiTWFydmluXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4vLyAgIC8vIF07XG4vLyAgIC8vIHNldFN0b3JlZEFjdGl2aXRpZXMoc2FtcGxlRGF0YSk7XG5cbi8vICAgY29uc3QgaW5pdGlhbFN0b3JlZEFjdGl2aXRpZXMgPVxuLy8gICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbi8vICAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpICE9PSBudWxsXG4vLyAgICAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpXG4vLyAgICAgICAgIDogXCJbXVwiXG4vLyAgICAgICA6IFwiW11cIjtcblxuLy8gICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGluaXRpYWxTdG9yZWRBY3Rpdml0aWVzKSk7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuLy8gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBzdG9yZWRBY3Rpdml0aWVzPXtzdG9yZWRBY3Rpdml0aWVzfSAvPlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkdsb2JhbFN0eWxlIiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZWRBY3Rpdml0aWVzIiwic2V0U3RvcmVkQWN0aXZpdGllcyIsImRlZmF1bHQiLCJzYW1wbGVEYXRhIiwiaWQiLCJuYW1lIiwiaXNGb3JHb29kV2VhdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});