"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BoxWithStyledComponents/BoxWithStyledComponents.js":
/*!***********************************************************************!*\
  !*** ./components/BoxWithStyledComponents/BoxWithStyledComponents.js ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoxWithStyledComponents; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100px;\\n  height: 100px;\\n  background-color: \",\n        \";\\n  margin: 2rem;\\n  &:hover {\\n    background-color: red;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"BoxWithStyledComponents__StyledBox\",\n    componentId: \"sc-d57b83af-0\"\n})(_templateObject(), (param)=>{\n    let { $isBlack } = param;\n    return $isBlack ? \"black\" : \"green\";\n});\n_c = StyledBox;\n// higher order component: in this case only useful for renaming\n// the isBlack prop to $isBlack to prevent the prop from being passed\n// to the DOM\nfunction BoxWithStyledComponents(param) {\n    let { isBlack, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledBox, {\n        ...props,\n        $isBlack: isBlack\n    }, void 0, false, {\n        fileName: \"/Users/markusgemeinder/Documents/Privat/Projekte/2023-2024_neuefische_Bootcamp_Web_Development/_DEVELOP/react-styled-components_box/components/BoxWithStyledComponents/BoxWithStyledComponents.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n} // const StyledBox = styled.div`\n //   width: 100px;\n //   height: 100px;\n //   background-color: ${({ $backgroundColor }) => $backgroundColor || \"black\"};\n //   margin: 2rem;\n //   &:hover {\n //     background-color: red;\n //   }\n // `;\n // export default function BoxWithStyledComponents({\n //   backgroundColor,\n //   ...props\n // }) {\n //   return <StyledBox {...props} $backgroundColor={backgroundColor}></StyledBox>;\n // }\n_c1 = BoxWithStyledComponents;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledBox\");\n$RefreshReg$(_c1, \"BoxWithStyledComponents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JveFdpdGhTdHlsZWRDb21wb25lbnRzL0JveFdpdGhTdHlsZWRDb21wb25lbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRXZDLE1BQU1DLFlBQVlELDZEQUFVRTs7O3NCQUdOO1FBQUMsRUFBRUMsUUFBUSxFQUFFO1dBQU1BLFdBQVcsVUFBVTtBQUFNO0tBSDlERjtBQVVOLGdFQUFnRTtBQUNoRSxxRUFBcUU7QUFDckUsYUFBYTtBQUVFLFNBQVNHLHdCQUF3QixLQUFxQjtRQUFyQixFQUFFQyxPQUFPLEVBQUUsR0FBR0MsT0FBTyxHQUFyQjtJQUM5QyxxQkFBTyw4REFBQ0w7UUFBVyxHQUFHSyxLQUFLO1FBQUVILFVBQVVFOzs7Ozs7QUFDekMsRUFFQSxnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnRkFBZ0Y7Q0FDaEYsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0IsTUFBTTtDQUNOLEtBQUs7Q0FFTCxvREFBb0Q7Q0FDcEQscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixPQUFPO0NBQ1Asa0ZBQWtGO0NBQ2xGLElBQUk7TUFuQm9CRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JveFdpdGhTdHlsZWRDb21wb25lbnRzL0JveFdpdGhTdHlsZWRDb21wb25lbnRzLmpzPzNiYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7ICRpc0JsYWNrIH0pID0+ICgkaXNCbGFjayA/IFwiYmxhY2tcIiA6IFwiZ3JlZW5cIil9O1xuICBtYXJnaW46IDJyZW07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuYDtcblxuLy8gaGlnaGVyIG9yZGVyIGNvbXBvbmVudDogaW4gdGhpcyBjYXNlIG9ubHkgdXNlZnVsIGZvciByZW5hbWluZ1xuLy8gdGhlIGlzQmxhY2sgcHJvcCB0byAkaXNCbGFjayB0byBwcmV2ZW50IHRoZSBwcm9wIGZyb20gYmVpbmcgcGFzc2VkXG4vLyB0byB0aGUgRE9NXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveFdpdGhTdHlsZWRDb21wb25lbnRzKHsgaXNCbGFjaywgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gPFN0eWxlZEJveCB7Li4ucHJvcHN9ICRpc0JsYWNrPXtpc0JsYWNrfT48L1N0eWxlZEJveD47XG59XG5cbi8vIGNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiAxMDBweDtcbi8vICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyAkYmFja2dyb3VuZENvbG9yIH0pID0+ICRiYWNrZ3JvdW5kQ29sb3IgfHwgXCJibGFja1wifTtcbi8vICAgbWFyZ2luOiAycmVtO1xuLy8gICAmOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveFdpdGhTdHlsZWRDb21wb25lbnRzKHtcbi8vICAgYmFja2dyb3VuZENvbG9yLFxuLy8gICAuLi5wcm9wc1xuLy8gfSkge1xuLy8gICByZXR1cm4gPFN0eWxlZEJveCB7Li4ucHJvcHN9ICRiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0+PC9TdHlsZWRCb3g+O1xuLy8gfVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZEJveCIsImRpdiIsIiRpc0JsYWNrIiwiQm94V2l0aFN0eWxlZENvbXBvbmVudHMiLCJpc0JsYWNrIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BoxWithStyledComponents/BoxWithStyledComponents.js\n"));

/***/ })

});