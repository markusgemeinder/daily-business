"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ \"./node_modules/uid/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Form(param) {\n    let { storedActivities } = param;\n    _s();\n    // ===============================\n    const formDataDefault = {\n        name: \"\",\n        isForGoodWeather: false\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    // ===============================\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.getElementById(\"form\").reset();\n        document.getElementById(\"name\").focus();\n    }, [\n        formData\n    ]);\n    // ===============================\n    const onAddActivity = (event)=>{\n        event.preventDefault();\n        // const formData = new FormData(event.target);\n        // const data = Object.fromEntries(formData);\n        // const newActivity = [{ id: uid(), ...data }];\n        // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n        const newActivity = [\n            {\n                id: (0,uid__WEBPACK_IMPORTED_MODULE_2__.uid)(),\n                name: formData.name,\n                isForGoodWeather: formData.isForGoodWeather\n            }\n        ];\n        const updatedStoredActivities = Array.isArray(storedActivities) ? [\n            newActivity,\n            ...storedActivities\n        ] : [\n            newActivity\n        ];\n        localStorage.setItem(\"activities\", JSON.stringify(updatedStoredActivities));\n        setFormData(formDataDefault);\n        return updatedStoredActivities;\n    };\n    // ===============================\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onAddActivity,\n                id: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add new activity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: formData.name,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                name: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"isForGoodWeather\",\n                        children: \"Good-weather activity: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"isForGoodWeather\",\n                        name: \"isForGoodWeather\",\n                        checked: formData.isForGoodWeather,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                isForGoodWeather: event.target.checked\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>localStorage.clear(),\n                    children: \"clear localStorage\"\n                }, void 0, false, {\n                    fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n // import { useState, useEffect } from \"react\";\n // import { uid } from \"uid\";\n // export default function Form({ storedActivities }) {\n //   // ===============================\n //   const formDataDefault = {\n //     name: \"\",\n //     isForGoodWeather: false,\n //   };\n //   const [formData, setFormData] = useState(formDataDefault);\n //   // ===============================\n //   useEffect(() => {\n //     document.getElementById(\"form\").reset();\n //     document.getElementById(\"name\").focus();\n //   }, [formData]);\n //   // ===============================\n //   const onAddActivity = (event) => {\n //     event.preventDefault();\n //     // const formData = new FormData(event.target);\n //     // const data = Object.fromEntries(formData);\n //     // const newActivity = [{ id: uid(), ...data }];\n //     // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n //     const newActivity = [\n //       {\n //         id: uid(),\n //         name: formData.name,\n //         isForGoodWeather: formData.isForGoodWeather,\n //       },\n //     ];\n //     const updatedStoredActivities = Array.isArray(storedActivities)\n //       ? [newActivity, ...storedActivities]\n //       : [newActivity];\n //     localStorage.setItem(\"activities\", JSON.stringify(updatedStoredActivities));\n //     setFormData(formDataDefault);\n //     return updatedStoredActivities;\n //   };\n //   // ===============================\n //   return (\n //     <>\n //       <form onSubmit={onAddActivity} id=\"form\">\n //         <h2>Add new activity</h2>\n //         <label htmlFor=\"name\">Name: </label>\n //         <input\n //           type=\"text\"\n //           id=\"name\"\n //           name=\"name\"\n //           value={formData.name}\n //           onChange={(event) =>\n //             setFormData({ ...formData, name: event.target.value })\n //           }\n //         ></input>\n //         <br />\n //         <br />\n //         <label htmlFor=\"isForGoodWeather\">Good-weather activity: </label>\n //         <input\n //           type=\"checkbox\"\n //           id=\"isForGoodWeather\"\n //           name=\"isForGoodWeather\"\n //           checked={formData.isForGoodWeather}\n //           onChange={(event) =>\n //             setFormData({\n //               ...formData,\n //               isForGoodWeather: event.target.checked,\n //             })\n //           }\n //         ></input>\n //         <br />\n //         <br />\n //         <button>submit</button>\n //       </form>\n //       <div>\n //         <button onClick={() => localStorage.clear()}>clear localStorage</button>\n //       </div>\n //     </>\n //   );\n // }\n_s(Form, \"sOJrEBpVL7UgilI0S6MhlJ1+XbM=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztDQUV2QyxhQUFhO0NBQ2IsU0FBUztDQUNULGtEQUFrRDtDQUNsRCxvQ0FBb0M7Q0FDcEMsK0NBQStDO0NBQy9DLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QixrQ0FBa0M7Q0FDbEMsaUNBQWlDO0NBQ2pDLHFFQUFxRTtDQUNyRSxjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsNEVBQTRFO0NBQzVFLGlCQUFpQjtDQUNqQiw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLG9DQUFvQztDQUNwQyxnREFBZ0Q7Q0FDaEQsaUNBQWlDO0NBQ2pDLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0Isd0RBQXdEO0NBQ3hELGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsa0NBQWtDO0NBQ2xDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsbUZBQW1GO0NBQ25GLGVBQWU7Q0FDZixVQUFVO0NBQ1YsT0FBTztDQUNQLElBQUk7R0E3S29CdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzPzZjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdWlkIH0gZnJvbSBcInVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHsgc3RvcmVkQWN0aXZpdGllcyB9KSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgZm9ybURhdGFEZWZhdWx0ID0ge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UsXG4gIH07XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuZm9jdXMoKTtcbiAgfSwgW2Zvcm1EYXRhXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0IG9uQWRkQWN0aXZpdHkgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAvLyBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgICAvLyBjb25zdCBuZXdBY3Rpdml0eSA9IFt7IGlkOiB1aWQoKSwgLi4uZGF0YSB9XTtcbiAgICAvLyBkZWxpdmVycyBjaGVja2JveCBhcyBzdHJpbmcgPj4+IGlmIGNoZWNrZWQgPSBcIm9uXCIsIGlmIG5vdCBjaGVja2VkIG5vdGhpbmdcblxuICAgIGNvbnN0IG5ld0FjdGl2aXR5ID0gW1xuICAgICAge1xuICAgICAgICBpZDogdWlkKCksXG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgIGlzRm9yR29vZFdlYXRoZXI6IGZvcm1EYXRhLmlzRm9yR29vZFdlYXRoZXIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB1cGRhdGVkU3RvcmVkQWN0aXZpdGllcyA9IEFycmF5LmlzQXJyYXkoc3RvcmVkQWN0aXZpdGllcylcbiAgICAgID8gW25ld0FjdGl2aXR5LCAuLi5zdG9yZWRBY3Rpdml0aWVzXVxuICAgICAgOiBbbmV3QWN0aXZpdHldO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3Rpdml0aWVzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdG9yZWRBY3Rpdml0aWVzKSk7XG5cbiAgICBzZXRGb3JtRGF0YShmb3JtRGF0YURlZmF1bHQpO1xuICAgIHJldHVybiB1cGRhdGVkU3RvcmVkQWN0aXZpdGllcztcbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uQWRkQWN0aXZpdHl9IGlkPVwiZm9ybVwiPlxuICAgICAgICA8aDI+QWRkIG5ldyBhY3Rpdml0eTwvaDI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzRm9yR29vZFdlYXRoZXJcIj5Hb29kLXdlYXRoZXIgYWN0aXZpdHk6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgaWQ9XCJpc0Zvckdvb2RXZWF0aGVyXCJcbiAgICAgICAgICBuYW1lPVwiaXNGb3JHb29kV2VhdGhlclwiXG4gICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuaXNGb3JHb29kV2VhdGhlcn1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgaXNGb3JHb29kV2VhdGhlcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9jYWxTdG9yYWdlLmNsZWFyKCl9PmNsZWFyIGxvY2FsU3RvcmFnZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGSVhFRCBDT0RFIEJFTE9XXG5cbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IHN0b3JlZEFjdGl2aXRpZXMgfSkge1xuLy8gICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgIGNvbnN0IGZvcm1EYXRhRGVmYXVsdCA9IHtcbi8vICAgICBuYW1lOiBcIlwiLFxuLy8gICAgIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlLFxuLy8gICB9O1xuLy8gICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhRGVmYXVsdCk7XG5cbi8vICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLnJlc2V0KCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmZvY3VzKCk7XG4vLyAgIH0sIFtmb3JtRGF0YV0pO1xuXG4vLyAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gICBjb25zdCBvbkFkZEFjdGl2aXR5ID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIC8vIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4vLyAgICAgLy8gY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4vLyAgICAgLy8gY29uc3QgbmV3QWN0aXZpdHkgPSBbeyBpZDogdWlkKCksIC4uLmRhdGEgfV07XG4vLyAgICAgLy8gZGVsaXZlcnMgY2hlY2tib3ggYXMgc3RyaW5nID4+PiBpZiBjaGVja2VkID0gXCJvblwiLCBpZiBub3QgY2hlY2tlZCBub3RoaW5nXG5cbi8vICAgICBjb25zdCBuZXdBY3Rpdml0eSA9IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgaWQ6IHVpZCgpLFxuLy8gICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuLy8gICAgICAgICBpc0Zvckdvb2RXZWF0aGVyOiBmb3JtRGF0YS5pc0Zvckdvb2RXZWF0aGVyLFxuLy8gICAgICAgfSxcbi8vICAgICBdO1xuXG4vLyAgICAgY29uc3QgdXBkYXRlZFN0b3JlZEFjdGl2aXRpZXMgPSBBcnJheS5pc0FycmF5KHN0b3JlZEFjdGl2aXRpZXMpXG4vLyAgICAgICA/IFtuZXdBY3Rpdml0eSwgLi4uc3RvcmVkQWN0aXZpdGllc11cbi8vICAgICAgIDogW25ld0FjdGl2aXR5XTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZpdGllc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkU3RvcmVkQWN0aXZpdGllcykpO1xuXG4vLyAgICAgc2V0Rm9ybURhdGEoZm9ybURhdGFEZWZhdWx0KTtcbi8vICAgICByZXR1cm4gdXBkYXRlZFN0b3JlZEFjdGl2aXRpZXM7XG4vLyAgIH07XG5cbi8vICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkFkZEFjdGl2aXR5fSBpZD1cImZvcm1cIj5cbi8vICAgICAgICAgPGgyPkFkZCBuZXcgYWN0aXZpdHk8L2gyPlxuLy8gICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgaWQ9XCJuYW1lXCJcbi8vICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4vLyAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4vLyAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbi8vICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPjwvaW5wdXQ+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc0Zvckdvb2RXZWF0aGVyXCI+R29vZC13ZWF0aGVyIGFjdGl2aXR5OiA8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuLy8gICAgICAgICAgIGlkPVwiaXNGb3JHb29kV2VhdGhlclwiXG4vLyAgICAgICAgICAgbmFtZT1cImlzRm9yR29vZFdlYXRoZXJcIlxuLy8gICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLmlzRm9yR29vZFdlYXRoZXJ9XG4vLyAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbi8vICAgICAgICAgICAgIHNldEZvcm1EYXRhKHtcbi8vICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4vLyAgICAgICAgICAgICAgIGlzRm9yR29vZFdlYXRoZXI6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID48L2lucHV0PlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxidXR0b24+c3VibWl0PC9idXR0b24+XG4vLyAgICAgICA8L2Zvcm0+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvY2FsU3RvcmFnZS5jbGVhcigpfT5jbGVhciBsb2NhbFN0b3JhZ2U8L2J1dHRvbj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidWlkIiwiRm9ybSIsInN0b3JlZEFjdGl2aXRpZXMiLCJmb3JtRGF0YURlZmF1bHQiLCJuYW1lIiwiaXNGb3JHb29kV2VhdGhlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzZXQiLCJmb2N1cyIsIm9uQWRkQWN0aXZpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3QWN0aXZpdHkiLCJpZCIsInVwZGF0ZWRTdG9yZWRBY3Rpdml0aWVzIiwiQXJyYXkiLCJpc0FycmF5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtIiwib25TdWJtaXQiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJiciIsImNoZWNrZWQiLCJidXR0b24iLCJkaXYiLCJvbkNsaWNrIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});