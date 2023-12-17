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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ \"./node_modules/uid/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form(param) {\n    let { storedActivities } = param;\n    _s();\n    // ===============================\n    const formDataDefault = {\n        name: \"\",\n        isForGoodWeather: false\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    // ===============================\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.getElementById(\"form\").reset();\n        document.getElementById(\"name\").focus();\n    }, [\n        formData\n    ]);\n    // ===============================\n    const onAddActivity = (event)=>{\n        event.preventDefault();\n        // const formData = new FormData(event.target);\n        // const data = Object.fromEntries(formData);\n        // const newActivity = [{ id: uid(), ...data }];\n        // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n        const newActivity = [\n            {\n                id: (0,uid__WEBPACK_IMPORTED_MODULE_2__.uid)(),\n                name: formData.name,\n                isForGoodWeather: formData.isForGoodWeather\n            }\n        ];\n        const updatedStoredActivities = Array.isArray(storedActivities) ? [\n            newActivity,\n            ...storedActivities\n        ] : [\n            newActivity\n        ];\n        localStorage.setItem(\"activities\", JSON.stringify(updatedStoredActivities));\n        setFormData(formDataDefault);\n        return updatedStoredActivities;\n    };\n    // ===============================\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onAddActivity,\n                id: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add new activity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: formData.name,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                name: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"isForGoodWeather\",\n                        children: \"Good-weather activity: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"isForGoodWeather\",\n                        name: \"isForGoodWeather\",\n                        checked: formData.isForGoodWeather,\n                        onChange: (event)=>setFormData({\n                                ...formData,\n                                isForGoodWeather: event.target.checked\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>localStorage.clear(),\n                    children: \"clear localStorage\"\n                }, void 0, false, {\n                    fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/daily-business/20231216-own-test-project/components/Form/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // ============================================= FIXED CODE BELOW\n // import { useState, useEffect } from \"react\";\n // import { uid } from \"uid\";\n // export default function Form() {\n //   const formDataDefault = {\n //     name: \"\",\n //     isForGoodWeather: false,\n //   };\n //   const [formData, setFormData] = useState(formDataDefault);\n //   const [activityEntries, setActivityEntries] = useState([]);\n //   // ===============================\n //   useEffect(() => {\n //     document.getElementById(\"form\").reset();\n //     document.getElementById(\"name\").focus();\n //   }, [formData]);\n //   // ===============================\n //   useEffect(() => {\n //     console.clear();\n //     console.log(\"Updated activityEntries:\", activityEntries);\n //   }, [activityEntries]);\n //   // ===============================\n //   const onAddActivity = (event) => {\n //     event.preventDefault();\n //     // ===============================\n //     // const formData = new FormData(event.target);\n //     // const data = Object.fromEntries(formData);\n //     // const newActivity = [{ id: uid(), ...data }];\n //     // delivers checkbox as string >>> if checked = \"on\", if not checked nothing\n //     const newActivity = [\n //       {\n //         id: uid(),\n //         name: formData.name,\n //         isForGoodWeather: formData.isForGoodWeather,\n //       },\n //     ];\n //     // ===============================\n //     console.log(\"newActivity is:\", newActivity);\n //     setFormData(formDataDefault);\n //     handleActivityEntries(newActivity);\n //   };\n //   function handleActivityEntries(newActivity) {\n //     setActivityEntries([newActivity, ...activityEntries]);\n //   }\n //   return (\n //     <>\n //       <form onSubmit={onAddActivity} id=\"form\">\n //         <h2>Add new activity</h2>\n //         <label htmlFor=\"name\">Name: </label>\n //         <input\n //           type=\"text\"\n //           id=\"name\"\n //           name=\"name\"\n //           value={formData.name}\n //           onChange={(event) =>\n //             setFormData({ ...formData, name: event.target.value })\n //           }\n //         ></input>\n //         <br />\n //         <br />\n //         <label htmlFor=\"isForGoodWeather\">Good-weather activity: </label>\n //         <input\n //           type=\"checkbox\"\n //           id=\"isForGoodWeather\"\n //           name=\"isForGoodWeather\"\n //           checked={formData.isForGoodWeather}\n //           onChange={(event) =>\n //             setFormData({\n //               ...formData,\n //               isForGoodWeather: event.target.checked,\n //             })\n //           }\n //         ></input>\n //         <br />\n //       j  <br />\n //         <button>submit</button>\n //       </form>\n //       <div>\n //         <button onClick={() => setActivityEntries([])}>\n //           reset activityEntries\n //         </button>\n //       </div>\n //     </>\n //   );\n // }\n_s(Form, \"sOJrEBpVL7UgilI0S6MhlJ1+XbM=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekMsbURBQW1EO0NBQ25ELG9DQUFvQztDQUNwQywwQ0FBMEM7Q0FDMUMsT0FBTztDQUVQLGtEQUFrRDtDQUNsRCw2REFBNkQ7Q0FDN0QsTUFBTTtDQUVOLGFBQWE7Q0FDYixTQUFTO0NBQ1Qsa0RBQWtEO0NBQ2xELG9DQUFvQztDQUNwQywrQ0FBK0M7Q0FDL0MsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsd0JBQXdCO0NBQ3hCLGtDQUFrQztDQUNsQyxpQ0FBaUM7Q0FDakMscUVBQXFFO0NBQ3JFLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQiw0RUFBNEU7Q0FDNUUsaUJBQWlCO0NBQ2pCLDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMsb0NBQW9DO0NBQ3BDLGdEQUFnRDtDQUNoRCxpQ0FBaUM7Q0FDakMsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3Qix3REFBd0Q7Q0FDeEQsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQ0FBa0M7Q0FDbEMsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCwwREFBMEQ7Q0FDMUQsa0NBQWtDO0NBQ2xDLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsVUFBVTtDQUNWLE9BQU87Q0FDUCxJQUFJO0dBckxvQnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGVcIjtcbmltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IHN0b3JlZEFjdGl2aXRpZXMgfSkge1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGZvcm1EYXRhRGVmYXVsdCA9IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGlzRm9yR29vZFdlYXRoZXI6IGZhbHNlLFxuICB9O1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhRGVmYXVsdCk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmZvY3VzKCk7XG4gIH0sIFtmb3JtRGF0YV0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdCBvbkFkZEFjdGl2aXR5ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgLy8gY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgLy8gY29uc3QgbmV3QWN0aXZpdHkgPSBbeyBpZDogdWlkKCksIC4uLmRhdGEgfV07XG4gICAgLy8gZGVsaXZlcnMgY2hlY2tib3ggYXMgc3RyaW5nID4+PiBpZiBjaGVja2VkID0gXCJvblwiLCBpZiBub3QgY2hlY2tlZCBub3RoaW5nXG5cbiAgICBjb25zdCBuZXdBY3Rpdml0eSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICBpc0Zvckdvb2RXZWF0aGVyOiBmb3JtRGF0YS5pc0Zvckdvb2RXZWF0aGVyLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgdXBkYXRlZFN0b3JlZEFjdGl2aXRpZXMgPSBBcnJheS5pc0FycmF5KHN0b3JlZEFjdGl2aXRpZXMpXG4gICAgICA/IFtuZXdBY3Rpdml0eSwgLi4uc3RvcmVkQWN0aXZpdGllc11cbiAgICAgIDogW25ld0FjdGl2aXR5XTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZpdGllc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkU3RvcmVkQWN0aXZpdGllcykpO1xuXG4gICAgc2V0Rm9ybURhdGEoZm9ybURhdGFEZWZhdWx0KTtcbiAgICByZXR1cm4gdXBkYXRlZFN0b3JlZEFjdGl2aXRpZXM7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkFkZEFjdGl2aXR5fSBpZD1cImZvcm1cIj5cbiAgICAgICAgPGgyPkFkZCBuZXcgYWN0aXZpdHk8L2gyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc0Zvckdvb2RXZWF0aGVyXCI+R29vZC13ZWF0aGVyIGFjdGl2aXR5OiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPVwiaXNGb3JHb29kV2VhdGhlclwiXG4gICAgICAgICAgbmFtZT1cImlzRm9yR29vZFdlYXRoZXJcIlxuICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLmlzRm9yR29vZFdlYXRoZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgIGlzRm9yR29vZFdlYXRoZXI6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24+c3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvY2FsU3RvcmFnZS5jbGVhcigpfT5jbGVhciBsb2NhbFN0b3JhZ2U8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRklYRUQgQ09ERSBCRUxPV1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdWlkIH0gZnJvbSBcInVpZFwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuLy8gICBjb25zdCBmb3JtRGF0YURlZmF1bHQgPSB7XG4vLyAgICAgbmFtZTogXCJcIixcbi8vICAgICBpc0Zvckdvb2RXZWF0aGVyOiBmYWxzZSxcbi8vICAgfTtcbi8vICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtRGF0YURlZmF1bHQpO1xuLy8gICBjb25zdCBbYWN0aXZpdHlFbnRyaWVzLCBzZXRBY3Rpdml0eUVudHJpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4vLyAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5yZXNldCgpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS5mb2N1cygpO1xuLy8gICB9LCBbZm9ybURhdGFdKTtcblxuLy8gICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zb2xlLmNsZWFyKCk7XG4vLyAgICAgY29uc29sZS5sb2coXCJVcGRhdGVkIGFjdGl2aXR5RW50cmllczpcIiwgYWN0aXZpdHlFbnRyaWVzKTtcbi8vICAgfSwgW2FjdGl2aXR5RW50cmllc10pO1xuXG4vLyAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gICBjb25zdCBvbkFkZEFjdGl2aXR5ID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgICAvLyBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuLy8gICAgIC8vIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuLy8gICAgIC8vIGNvbnN0IG5ld0FjdGl2aXR5ID0gW3sgaWQ6IHVpZCgpLCAuLi5kYXRhIH1dO1xuLy8gICAgIC8vIGRlbGl2ZXJzIGNoZWNrYm94IGFzIHN0cmluZyA+Pj4gaWYgY2hlY2tlZCA9IFwib25cIiwgaWYgbm90IGNoZWNrZWQgbm90aGluZ1xuXG4vLyAgICAgY29uc3QgbmV3QWN0aXZpdHkgPSBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGlkOiB1aWQoKSxcbi8vICAgICAgICAgbmFtZTogZm9ybURhdGEubmFtZSxcbi8vICAgICAgICAgaXNGb3JHb29kV2VhdGhlcjogZm9ybURhdGEuaXNGb3JHb29kV2VhdGhlcixcbi8vICAgICAgIH0sXG4vLyAgICAgXTtcblxuLy8gICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gICAgIGNvbnNvbGUubG9nKFwibmV3QWN0aXZpdHkgaXM6XCIsIG5ld0FjdGl2aXR5KTtcbi8vICAgICBzZXRGb3JtRGF0YShmb3JtRGF0YURlZmF1bHQpO1xuLy8gICAgIGhhbmRsZUFjdGl2aXR5RW50cmllcyhuZXdBY3Rpdml0eSk7XG4vLyAgIH07XG5cbi8vICAgZnVuY3Rpb24gaGFuZGxlQWN0aXZpdHlFbnRyaWVzKG5ld0FjdGl2aXR5KSB7XG4vLyAgICAgc2V0QWN0aXZpdHlFbnRyaWVzKFtuZXdBY3Rpdml0eSwgLi4uYWN0aXZpdHlFbnRyaWVzXSk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25BZGRBY3Rpdml0eX0gaWQ9XCJmb3JtXCI+XG4vLyAgICAgICAgIDxoMj5BZGQgbmV3IGFjdGl2aXR5PC9oMj5cbi8vICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbi8vICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgIGlkPVwibmFtZVwiXG4vLyAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuLy8gICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4vLyAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID48L2lucHV0PlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXNGb3JHb29kV2VhdGhlclwiPkdvb2Qtd2VhdGhlciBhY3Rpdml0eTogPC9sYWJlbD5cbi8vICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbi8vICAgICAgICAgICBpZD1cImlzRm9yR29vZFdlYXRoZXJcIlxuLy8gICAgICAgICAgIG5hbWU9XCJpc0Zvckdvb2RXZWF0aGVyXCJcbi8vICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc0Zvckdvb2RXZWF0aGVyfVxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4vLyAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7XG4vLyAgICAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuLy8gICAgICAgICAgICAgICBpc0Zvckdvb2RXZWF0aGVyOiBldmVudC50YXJnZXQuY2hlY2tlZCxcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+PC9pbnB1dD5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICBqICA8YnIgLz5cbi8vICAgICAgICAgPGJ1dHRvbj5zdWJtaXQ8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZpdHlFbnRyaWVzKFtdKX0+XG4vLyAgICAgICAgICAgcmVzZXQgYWN0aXZpdHlFbnRyaWVzXG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsInVpZCIsIkZvcm0iLCJzdG9yZWRBY3Rpdml0aWVzIiwiZm9ybURhdGFEZWZhdWx0IiwibmFtZSIsImlzRm9yR29vZFdlYXRoZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0IiwiZm9jdXMiLCJvbkFkZEFjdGl2aXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0FjdGl2aXR5IiwiaWQiLCJ1cGRhdGVkU3RvcmVkQWN0aXZpdGllcyIsIkFycmF5IiwiaXNBcnJheSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZm9ybSIsIm9uU3VibWl0IiwiaDIiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnIiLCJjaGVja2VkIiwiYnV0dG9uIiwiZGl2Iiwib25DbGljayIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});