"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/ "./pages/_app.js":
    /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage-state */ "./node_modules/use-local-storage-state/index.js");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    // ===============================\n    const isBrowser = "object" !== "undefined";\n    const [storedActivities, setStoredActivities] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__["default"])("activities", {\n        default: []\n    });\n    const sampleData = [\n        {\n            id: "abcdefg12",\n            name: "J\\xfcrgen",\n            isForGoodWeather: true\n        },\n        {\n            id: "34abcdefg",\n            name: "Markus",\n            isForGoodWeather: false\n        },\n        {\n            id: "hijklmn65",\n            name: "Verena",\n            isForGoodWeather: true\n        },\n        {\n            id: "78hijklmn",\n            name: "Kerstin",\n            isForGoodWeather: true\n        },\n        {\n            id: "opqrstu90",\n            name: "Jassi",\n            isForGoodWeather: true\n        },\n        {\n            id: "12opqrstu",\n            name: "Marvin",\n            isForGoodWeather: false\n        }\n    ];\n    const stringifiedSampleData = JSON.stringify(sampleData);\n    const parsedSampleData = JSON.parse(stringifiedSampleData);\n    console.log(parsedSampleData);\n    setStoredActivities(stringifiedSampleData);\n    // setEntriesLocalStorage([]);\n    // const initialLocalStorageState = isBrowser\n    //   ? localStorage.getItem("activities") !== null\n    //     ? localStorage.getItem("activities")\n    //     : []\n    //   : [];\n    // const initialLocalStorageState = localStorage.getItem("activities") !== null\n    //     ? localStorage.getItem("activities")\n    //     : []\n    // ===============================\n    // useEffect(() => {\n    //   // Only run this code in the browser\n    //   if (isBrowser) {\n    //     // Convert the state to a JSON string before storing it in local storage\n    //     const activitiesJSON = JSON.stringify(storedActivities);\n    //     // Update local storage with the latest activities\n    //     localStorage.setItem("activities", activitiesJSON);\n    //   }\n    // }, [storedActivities, isBrowser]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {\n                fileName: "/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                entriesLocalStorage: entriesLocalStorage\n            }, void 0, false, {\n                fileName: "/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/pages/_app.js",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, "E4dwtqJzth7Elb/zanVuniravqs=", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_3__["default"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, "App");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNFO0FBQ3VCO0FBRTVDLFNBQVNHLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQzFCLGtDQUFrQztJQUNsQyxNQUFNQyxZQUFZLGFBQWtCO0lBQ3BDLE1BQU0sQ0FBQ0Msd0JBQXdCQywwQkFBMEIsR0FDdkROLG1FQUFvQkEsQ0FBQyxjQUFjO1FBQUVPLFNBQVMsRUFBRTtJQUFDO0lBRW5ELE1BQU1DLGFBQWE7UUFDakI7WUFBRUMsSUFBSTtZQUFhQyxNQUFNO1lBQVVDLGtCQUFrQjtRQUFLO1FBQzFEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFVQyxrQkFBa0I7UUFBTTtRQUMzRDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQUs7UUFDMUQ7WUFBRUYsSUFBSTtZQUFhQyxNQUFNO1lBQVdDLGtCQUFrQjtRQUFLO1FBQzNEO1lBQUVGLElBQUk7WUFBYUMsTUFBTTtZQUFTQyxrQkFBa0I7UUFBSztRQUN6RDtZQUFFRixJQUFJO1lBQWFDLE1BQU07WUFBVUMsa0JBQWtCO1FBQU07S0FDNUQ7SUFFRCxNQUFNQyx3QkFBd0JDLEtBQUtDLFVBQVVOO0lBQzdDLE1BQU1PLG1CQUFtQkYsS0FBS0csTUFBTUo7SUFDcENLLFFBQVFDLElBQUlIO0lBQ1pULDBCQUEwQk07SUFDMUIsOEJBQThCO0lBRTlCLDZDQUE2QztJQUM3QyxrREFBa0Q7SUFDbEQsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsK0VBQStFO0lBQy9FLDJDQUEyQztJQUMzQyxXQUFXO0lBRVgsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLCtFQUErRTtJQUMvRSxxRUFBcUU7SUFFckUseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCxNQUFNO0lBQ04sMkNBQTJDO0lBRTNDLHFCQUNFOzswQkFDRSw4REFBQ2IsK0NBQVdBOzs7OzswQkFDWiw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUztnQkFBRWdCLHFCQUFxQkE7Ozs7Ozs7O0FBR3JEO0dBaER3QmxCOztRQUlwQkQsK0RBQW9CQTs7O0tBSkFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuICBjb25zdCBbYWN0aXZpdGllc0xvY2FsU3RvcmFnZSwgc2V0QWN0aXZpdGllc0xvY2FsU3RvcmFnZV0gPVxuICAgIHVzZUxvY2FsU3RvcmFnZVN0YXRlKFwiYWN0aXZpdGllc1wiLCB7IGRlZmF1bHQ6IFtdIH0pO1xuXG4gIGNvbnN0IHNhbXBsZURhdGEgPSBbXG4gICAgeyBpZDogXCJhYmNkZWZnMTJcIiwgbmFtZTogXCJKw7xyZ2VuXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICB7IGlkOiBcIjM0YWJjZGVmZ1wiLCBuYW1lOiBcIk1hcmt1c1wiLCBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSB9LFxuICAgIHsgaWQ6IFwiaGlqa2xtbjY1XCIsIG5hbWU6IFwiVmVyZW5hXCIsIGlzRm9yR29vZFdlYXRoZXI6IHRydWUgfSxcbiAgICB7IGlkOiBcIjc4aGlqa2xtblwiLCBuYW1lOiBcIktlcnN0aW5cIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwib3BxcnN0dTkwXCIsIG5hbWU6IFwiSmFzc2lcIiwgaXNGb3JHb29kV2VhdGhlcjogdHJ1ZSB9LFxuICAgIHsgaWQ6IFwiMTJvcHFyc3R1XCIsIG5hbWU6IFwiTWFydmluXCIsIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlIH0sXG4gIF07XG5cbiAgY29uc3Qgc3RyaW5naWZpZWRTYW1wbGVEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2FtcGxlRGF0YSk7XG4gIGNvbnN0IHBhcnNlZFNhbXBsZURhdGEgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkU2FtcGxlRGF0YSk7XG4gIGNvbnNvbGUubG9nKHBhcnNlZFNhbXBsZURhdGEpO1xuICBzZXRBY3Rpdml0aWVzTG9jYWxTdG9yYWdlKHN0cmluZ2lmaWVkU2FtcGxlRGF0YSk7XG4gIC8vIHNldEVudHJpZXNMb2NhbFN0b3JhZ2UoW10pO1xuXG4gIC8vIGNvbnN0IGluaXRpYWxMb2NhbFN0b3JhZ2VTdGF0ZSA9IGlzQnJvd3NlclxuICAvLyAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3Rpdml0aWVzXCIpICE9PSBudWxsXG4gIC8vICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZpdGllc1wiKVxuICAvLyAgICAgOiBbXVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGluaXRpYWxMb2NhbFN0b3JhZ2VTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZpdGllc1wiKSAhPT0gbnVsbFxuICAvLyAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2aXRpZXNcIilcbiAgLy8gICAgIDogW11cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gT25seSBydW4gdGhpcyBjb2RlIGluIHRoZSBicm93c2VyXG4gIC8vICAgaWYgKGlzQnJvd3Nlcikge1xuICAvLyAgICAgLy8gQ29udmVydCB0aGUgc3RhdGUgdG8gYSBKU09OIHN0cmluZyBiZWZvcmUgc3RvcmluZyBpdCBpbiBsb2NhbCBzdG9yYWdlXG4gIC8vICAgICBjb25zdCBhY3Rpdml0aWVzSlNPTiA9IEpTT04uc3RyaW5naWZ5KGFjdGl2aXRpZXNMb2NhbFN0b3JhZ2UpO1xuXG4gIC8vICAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIHRoZSBsYXRlc3QgYWN0aXZpdGllc1xuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3Rpdml0aWVzXCIsIGFjdGl2aXRpZXNKU09OKTtcbiAgLy8gICB9XG4gIC8vIH0sIFthY3Rpdml0aWVzTG9jYWxTdG9yYWdlLCBpc0Jyb3dzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZW50cmllc0xvY2FsU3RvcmFnZT17ZW50cmllc0xvY2FsU3RvcmFnZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNCcm93c2VyIiwiYWN0aXZpdGllc0xvY2FsU3RvcmFnZSIsInNldEFjdGl2aXRpZXNMb2NhbFN0b3JhZ2UiLCJkZWZhdWx0Iiwic2FtcGxlRGF0YSIsImlkIiwibmFtZSIsImlzRm9yR29vZFdlYXRoZXIiLCJzdHJpbmdpZmllZFNhbXBsZURhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2VkU2FtcGxlRGF0YSIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImVudHJpZXNMb2NhbFN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n'
        )
      );

      /***/
    },
});
