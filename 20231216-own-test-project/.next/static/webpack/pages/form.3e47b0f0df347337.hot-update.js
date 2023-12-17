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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ \"./node_modules/uid/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form(param) {\n    let { storedActivities } = param;\n    _s();\n    // ===============================\n    const formDataDefault = {\n        name: \"\",\n        isForGoodWeather: false\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    // ===============================\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.getElementById(\"form\").reset();\n        document.getElementById(\"name\").focus();\n    }, [\n        formData\n    ]);\n    // ===============================\n    const onAddActivity = (event)=>{\n        event.preventDefault();\n        // const formData = new FormData(event.target);\n        // const data = Object.fromEntries(formData);\n        // const newActivity = [{ id: uid(), ...data }];\n        // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n        const newActivity = [\n            {\n                id: (0,uid__WEBPACK_IMPORTED_MODULE_2__.uid)(),\n                name: formData.name,\n                isForGoodWeather: formData.isForGoodWeather\n            }\n        ];\n        const updatedStoredActivities = Array.isArray(storedActivities) ? [\n            newActivity,\n            ...storedActivities\n        ] : [\n            newActivity\n        ];\n        localStorage.setItem(\"activities\", JSON.stringify(updatedStoredActivities));\n        setFormData(formDataDefault);\n    };\n    // ===============================\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onAddActivity,\n                id: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add new activity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: formData.name,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                name: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"isForGoodWeather\",\n                        children: \"Good-weather activity: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"isForGoodWeather\",\n                        name: \"isForGoodWeather\",\n                        checked: formData.isForGoodWeather,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                isForGoodWeather: event.target.checked\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>localStorage.clear(),\n                    children: \"clear localStorage\"\n                }, void 0, false, {\n                    fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n // import { useState, useEffect } from \"react\";\n // import { uid } from \"uid\";\n // export default function Form() {\n //   const formDataDefault = {\n //     name: \"\",\n //     isForGoodWeather: false,\n //   };\n //   const [formData, setFormData] = useState(formDataDefault);\n //   const [activityEntries, setActivityEntries] = useState([]);\n //   // ===============================\n //   useEffect(() => {\n //     document.getElementById(\"form\").reset();\n //     document.getElementById(\"name\").focus();\n //   }, [formData]);\n //   // ===============================\n //   useEffect(() => {\n //     console.clear();\n //     console.log(\"Updated activityEntries:\", activityEntries);\n //   }, [activityEntries]);\n //   // ===============================\n //   const onAddActivity = (event) => {\n //     event.preventDefault();\n //     // ===============================\n //     // const formData = new FormData(event.target);\n //     // const data = Object.fromEntries(formData);\n //     // const newActivity = [{ id: uid(), ...data }];\n //     // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n //     const newActivity = [\n //       {\n //         id: uid(),\n //         name: formData.name,\n //         isForGoodWeather: formData.isForGoodWeather,\n //       },\n //     ];\n //     // ===============================\n //     console.log(\"newActivity is:\", newActivity);\n //     setFormData(formDataDefault);\n //     handleActivityEntries(newActivity);\n //   };\n //   function handleActivityEntries(newActivity) {\n //     setActivityEntries([newActivity, ...activityEntries]);\n //   }\n //   return (\n //     <>\n //       <form onSubmit={onAddActivity} id=\"form\">\n //         <h2>Add new activity</h2>\n //         <label htmlFor=\"name\">Name: </label>\n //         <input\n //           type=\"text\"\n //           id=\"name\"\n //           name=\"name\"\n //           value={formData.name}\n //           onChange={(event) =>\n //             setFormData({ ...formData, name: event.target.value })\n //           }\n //         ></input>\n //         <br />\n //         <br />\n //         <label htmlFor=\"isForGoodWeather\">Good-weather activity: </label>\n //         <input\n //           type=\"checkbox\"\n //           id=\"isForGoodWeather\"\n //           name=\"isForGoodWeather\"\n //           checked={formData.isForGoodWeather}\n //           onChange={(event) =>\n //             setFormData({\n //               ...formData,\n //               isForGoodWeather: event.target.checked,\n //             })\n //           }\n //         ></input>\n //         <br />\n //       j  <br />\n //         <button>submit</button>\n //       </form>\n //       <div>\n //         <button onClick={() => setActivityEntries([])}>\n //           reset activityEntries\n //         </button>\n //       </div>\n //     </>\n //   );\n // }\n_s(Form, \"sOJrEBpVL7UgilI0S6MhlJ1+XbM=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDbkQsb0NBQW9DO0NBQ3BDLDBDQUEwQztDQUMxQyxPQUFPO0NBRVAsa0RBQWtEO0NBQ2xELDZEQUE2RDtDQUM3RCxNQUFNO0NBRU4sYUFBYTtDQUNiLFNBQVM7Q0FDVCxrREFBa0Q7Q0FDbEQsb0NBQW9DO0NBQ3BDLCtDQUErQztDQUMvQyxpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsa0NBQWtDO0NBQ2xDLGlDQUFpQztDQUNqQyxxRUFBcUU7Q0FDckUsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDRFQUE0RTtDQUM1RSxpQkFBaUI7Q0FDakIsNEJBQTRCO0NBQzVCLGtDQUFrQztDQUNsQyxvQ0FBb0M7Q0FDcEMsZ0RBQWdEO0NBQ2hELGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLHdEQUF3RDtDQUN4RCxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtDQUFrQztDQUNsQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLDBEQUEwRDtDQUMxRCxrQ0FBa0M7Q0FDbEMsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsT0FBTztDQUNQLElBQUk7R0FwTG9CdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzPzZjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZVN0YXRlIGZyb20gXCJ1c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdWlkIH0gZnJvbSBcInVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHsgc3RvcmVkQWN0aXZpdGllcyB9KSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgZm9ybURhdGFEZWZhdWx0ID0ge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UsXG4gIH07XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuZm9jdXMoKTtcbiAgfSwgW2Zvcm1EYXRhXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0IG9uQWRkQWN0aXZpdHkgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAvLyBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgICAvLyBjb25zdCBuZXdBY3Rpdml0eSA9IFt7IGlkOiB1aWQoKSwgLi4uZGF0YSB9XTtcbiAgICAvLyBkZWxpdmVycyBjaGVja2JveCBhcyBzdHJpbmcgPj4+IGlmIGNoZWNrZWQgPSBcIm9uXCIsIGlmIG5vdCBjaGVja2VkIG5vdGhpbmdcblxuICAgIGNvbnN0IG5ld0FjdGl2aXR5ID0gW1xuICAgICAge1xuICAgICAgICBpZDogdWlkKCksXG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgIGlzRm9yR29vZFdlYXRoZXI6IGZvcm1EYXRhLmlzRm9yR29vZFdlYXRoZXIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB1cGRhdGVkU3RvcmVkQWN0aXZpdGllcyA9IEFycmF5LmlzQXJyYXkoc3RvcmVkQWN0aXZpdGllcylcbiAgICAgID8gW25ld0FjdGl2aXR5LCAuLi5zdG9yZWRBY3Rpdml0aWVzXVxuICAgICAgOiBbbmV3QWN0aXZpdHldO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3Rpdml0aWVzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdG9yZWRBY3Rpdml0aWVzKSk7XG5cbiAgICBzZXRGb3JtRGF0YShmb3JtRGF0YURlZmF1bHQpO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25BZGRBY3Rpdml0eX0gaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxoMj5BZGQgbmV3IGFjdGl2aXR5PC9oMj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXNGb3JHb29kV2VhdGhlclwiPkdvb2Qtd2VhdGhlciBhY3Rpdml0eTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBpZD1cImlzRm9yR29vZFdlYXRoZXJcIlxuICAgICAgICAgIG5hbWU9XCJpc0Zvckdvb2RXZWF0aGVyXCJcbiAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc0Zvckdvb2RXZWF0aGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgICBpc0Zvckdvb2RXZWF0aGVyOiBldmVudC50YXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKX0+Y2xlYXIgbG9jYWxTdG9yYWdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZJWEVEIENPREUgQkVMT1dcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbi8vICAgY29uc3QgZm9ybURhdGFEZWZhdWx0ID0ge1xuLy8gICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgaXNGb3JHb29kV2VhdGhlcjogZmFsc2UsXG4vLyAgIH07XG4vLyAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcbi8vICAgY29uc3QgW2FjdGl2aXR5RW50cmllcywgc2V0QWN0aXZpdHlFbnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuLy8gICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucmVzZXQoKTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuZm9jdXMoKTtcbi8vICAgfSwgW2Zvcm1EYXRhXSk7XG5cbi8vICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5jbGVhcigpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCBhY3Rpdml0eUVudHJpZXM6XCIsIGFjdGl2aXR5RW50cmllcyk7XG4vLyAgIH0sIFthY3Rpdml0eUVudHJpZXNdKTtcblxuLy8gICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICAgY29uc3Qgb25BZGRBY3Rpdml0eSA9IChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgLy8gY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbi8vICAgICAvLyBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbi8vICAgICAvLyBjb25zdCBuZXdBY3Rpdml0eSA9IFt7IGlkOiB1aWQoKSwgLi4uZGF0YSB9XTtcbi8vICAgICAvLyBkZWxpdmVycyBjaGVja2JveCBhcyBzdHJpbmcgPj4+IGlmIGNoZWNrZWQgPSBcIm9uXCIsIGlmIG5vdCBjaGVja2VkIG5vdGhpbmdcblxuLy8gICAgIGNvbnN0IG5ld0FjdGl2aXR5ID0gW1xuLy8gICAgICAge1xuLy8gICAgICAgICBpZDogdWlkKCksXG4vLyAgICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4vLyAgICAgICAgIGlzRm9yR29vZFdlYXRoZXI6IGZvcm1EYXRhLmlzRm9yR29vZFdlYXRoZXIsXG4vLyAgICAgICB9LFxuLy8gICAgIF07XG5cbi8vICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICAgICBjb25zb2xlLmxvZyhcIm5ld0FjdGl2aXR5IGlzOlwiLCBuZXdBY3Rpdml0eSk7XG4vLyAgICAgc2V0Rm9ybURhdGEoZm9ybURhdGFEZWZhdWx0KTtcbi8vICAgICBoYW5kbGVBY3Rpdml0eUVudHJpZXMobmV3QWN0aXZpdHkpO1xuLy8gICB9O1xuXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZUFjdGl2aXR5RW50cmllcyhuZXdBY3Rpdml0eSkge1xuLy8gICAgIHNldEFjdGl2aXR5RW50cmllcyhbbmV3QWN0aXZpdHksIC4uLmFjdGl2aXR5RW50cmllc10pO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGZvcm0gb25TdWJtaXQ9e29uQWRkQWN0aXZpdHl9IGlkPVwiZm9ybVwiPlxuLy8gICAgICAgICA8aDI+QWRkIG5ldyBhY3Rpdml0eTwvaDI+XG4vLyAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICBpZD1cIm5hbWVcIlxuLy8gICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbi8vICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbi8vICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuLy8gICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+PC9pbnB1dD5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzRm9yR29vZFdlYXRoZXJcIj5Hb29kLXdlYXRoZXIgYWN0aXZpdHk6IDwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4vLyAgICAgICAgICAgaWQ9XCJpc0Zvckdvb2RXZWF0aGVyXCJcbi8vICAgICAgICAgICBuYW1lPVwiaXNGb3JHb29kV2VhdGhlclwiXG4vLyAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuaXNGb3JHb29kV2VhdGhlcn1cbi8vICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuLy8gICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xuLy8gICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbi8vICAgICAgICAgICAgICAgaXNGb3JHb29kV2VhdGhlcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPjwvaW5wdXQ+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgaiAgPGJyIC8+XG4vLyAgICAgICAgIDxidXR0b24+c3VibWl0PC9idXR0b24+XG4vLyAgICAgICA8L2Zvcm0+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2aXR5RW50cmllcyhbXSl9PlxuLy8gICAgICAgICAgIHJlc2V0IGFjdGl2aXR5RW50cmllc1xuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJ1aWQiLCJGb3JtIiwic3RvcmVkQWN0aXZpdGllcyIsImZvcm1EYXRhRGVmYXVsdCIsIm5hbWUiLCJpc0Zvckdvb2RXZWF0aGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNldCIsImZvY3VzIiwib25BZGRBY3Rpdml0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdBY3Rpdml0eSIsImlkIiwidXBkYXRlZFN0b3JlZEFjdGl2aXRpZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcm0iLCJvblN1Ym1pdCIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJyIiwiY2hlY2tlZCIsImJ1dHRvbiIsImRpdiIsIm9uQ2xpY2siLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});