/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/api/api */ \"./src/features/api/api.js\");\n/* harmony import */ var _features_properties_propertiesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/properties/propertiesSlice */ \"./src/features/properties/propertiesSlice.js\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_features_api_api__WEBPACK_IMPORTED_MODULE_1__.api.reducerPath]: _features_api_api__WEBPACK_IMPORTED_MODULE_1__.api.reducer,\n        properties: _features_properties_propertiesSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_features_api_api__WEBPACK_IMPORTED_MODULE_1__.api.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDMkI7QUFFOUQsTUFBTUcsS0FBSyxHQUFHSCxnRUFBYyxDQUFDO0lBQ2hDSSxPQUFPLEVBQUU7UUFDTCxDQUFDSCw4REFBZSxDQUFDLEVBQUVBLDBEQUFXO1FBQzlCSyxVQUFVLEVBQUVKLDRFQUFlO0tBRTlCO0lBQ0RLLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FDN0JBLG9CQUFvQixFQUFFLENBQUNDLE1BQU0sQ0FBQ1IsNkRBQWMsQ0FBQztDQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvYXBwL3N0b3JlLmpzPzU4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2FwaS9hcGlcIjtcbmltcG9ydCBwcm9wZXJ0aWVzU2xpY2UgZnJvbSBcIi4uL2ZlYXR1cmVzL3Byb3BlcnRpZXMvcHJvcGVydGllc1NsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFthcGkucmVkdWNlclBhdGhdOiBhcGkucmVkdWNlcixcbiAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1NsaWNlLFxuICAgICAgICBcbiAgICB9LFxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYXBpLm1pZGRsZXdhcmUpLFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhcGkiLCJwcm9wZXJ0aWVzU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsInByb3BlcnRpZXMiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/components/common/ScrollTop.jsx":
/*!*********************************************!*\
  !*** ./src/components/common/ScrollTop.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ScrollToTop() {\n    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Top: 0 takes us all the way back to the top of the page\n    // Behavior: smooth keeps it smooth!\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Button is displayed after scrolling for 500 pixels\n        const toggleVisibility = ()=>{\n            if (window.pageYOffset > 500) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>window.removeEventListener(\"scroll\", toggleVisibility);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scrollToHome\",\n                onClick: scrollToTop,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"flaticon-arrows\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/ScrollTop.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/ScrollTop.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTdCLFNBQVNFLFdBQVcsR0FBRztJQUNwQyxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUVqRCwwREFBMEQ7SUFDMUQsb0NBQW9DO0lBQ3BDLE1BQU1JLFdBQVcsR0FBRyxJQUFNO1FBQ3hCQyxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUNkQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRURULGdEQUFTLENBQUMsSUFBTTtRQUNkLHFEQUFxRDtRQUNyRCxNQUFNVSxnQkFBZ0IsR0FBRyxJQUFNO1lBQzdCLElBQUlKLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLEdBQUcsRUFBRTtnQkFDNUJQLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixPQUFPO2dCQUNMQSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNILENBQUM7UUFFREUsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVGLGdCQUFnQixDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFNSixNQUFNLENBQUNPLG1CQUFtQixDQUFDLFFBQVEsRUFBRUgsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTtrQkFDR1AsU0FBUyxrQkFDUjtzQkFDRSw0RUFBQ1csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGNBQWM7Z0JBQUNDLE9BQU8sRUFBRVgsV0FBVzswQkFDaEQsNEVBQUNZLEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxpQkFBaUI7Ozs7O3dCQUFLOzs7OztvQkFDL0I7eUJBQ0w7cUJBRUosQ0FDSDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wLmpzeD81ODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFRvVG9wKCkge1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIFRvcDogMCB0YWtlcyB1cyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcclxuICAvLyBCZWhhdmlvcjogc21vb3RoIGtlZXBzIGl0IHNtb290aCFcclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQnV0dG9uIGlzIGRpc3BsYXllZCBhZnRlciBzY3JvbGxpbmcgZm9yIDUwMCBwaXhlbHNcclxuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiA1MDApIHtcclxuICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlVmlzaWJpbGl0eSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsVG9Ib21lXCIgb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1hcnJvd3NcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2Nyb2xsVG9Ub3AiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0b2dnbGVWaXNpYmlsaXR5IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/ScrollTop.jsx\n");

/***/ }),

/***/ "./src/components/common/seo.js":
/*!**************************************!*\
  !*** ./src/components/common/seo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Seo = ({ pageTitle , font  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: pageTitle && `${pageTitle} || FindHouse - Real Estate React Template}`\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    httpEquiv: \"x-ua-compatible\",\n                    content: \"ie=edge\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"keywords\",\n                    content: \"advanced custom search, agency, agent, business, clean, corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"description\",\n                    content: \"FindHouse - Real Estate React Template\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"ibthemes\",\n                    content: \"ATFN\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, undefined),\n                font && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: font,\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 24,\n                    columnNumber: 16\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/components/common/seo.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vc2VvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFFN0IsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxJQUFJLEdBQUUsaUJBQzlCO2tCQUNFLDRFQUFDSCxrREFBSTs7OEJBQ0gsOERBQUNJLE9BQUs7OEJBQ0hGLFNBQVMsSUFBSSxDQUFDLEVBQUVBLFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQzs7Ozs7NkJBQ2pFOzhCQUNSLDhEQUFDRyxNQUFJO29CQUFDQyxTQUFTLEVBQUMsaUJBQWlCO29CQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7NkJBQUc7OEJBQ3RELDhEQUFDRixNQUFJO29CQUNIRyxJQUFJLEVBQUMsVUFBVTtvQkFDZkQsT0FBTyxFQUFDLDBPQUEwTzs7Ozs7NkJBQ2xQOzhCQUNGLDhEQUFDRixNQUFJO29CQUNIRyxJQUFJLEVBQUMsYUFBYTtvQkFDbEJELE9BQU8sRUFBQyx3Q0FBd0M7Ozs7OzZCQUNoRDs4QkFDRiw4REFBQ0YsTUFBSTtvQkFBQ0csSUFBSSxFQUFDLFVBQVU7b0JBQUNELE9BQU8sRUFBQyxNQUFNOzs7Ozs2QkFBRzs4QkFDdkMsOERBQUNGLE1BQUk7b0JBQ0hHLElBQUksRUFBQyxVQUFVO29CQUNmRCxPQUFPLEVBQUMsdURBQXVEOzs7Ozs2QkFDL0Q7Z0JBRURKLElBQUksa0JBQUksOERBQUNNLE1BQUk7b0JBQUNDLElBQUksRUFBRVAsSUFBSTtvQkFBRVEsR0FBRyxFQUFDLFlBQVk7Ozs7OzZCQUFHOzhCQUM5Qyw4REFBQ0YsTUFBSTtvQkFBQ0UsR0FBRyxFQUFDLE1BQU07b0JBQUNELElBQUksRUFBQyxhQUFhOzs7Ozs2QkFBRzs7Ozs7O3FCQUNqQztxQkFDTjtBQUdMLGlFQUFlVCxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vc2VvLmpzPzlkMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBTZW8gPSAoeyBwYWdlVGl0bGUsIGZvbnQgfSkgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlxuICAgICAgICB7cGFnZVRpdGxlICYmIGAke3BhZ2VUaXRsZX0gfHwgRmluZEhvdXNlIC0gUmVhbCBFc3RhdGUgUmVhY3QgVGVtcGxhdGV9YH1cbiAgICAgIDwvdGl0bGU+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxuICAgICAgICBjb250ZW50PVwiYWR2YW5jZWQgY3VzdG9tIHNlYXJjaCwgYWdlbmN5LCBhZ2VudCwgYnVzaW5lc3MsIGNsZWFuLCBjb3Jwb3JhdGUsIGRpcmVjdG9yeSwgZ29vZ2xlIG1hcHMsIGhvbWVzLCBpZHggYWdlbnQsIGxpc3RpbmcgcHJvcGVydGllcywgbWVtYmVyc2hpcCBwYWNrYWdlcywgcHJvcGVydHksIHJlYWwgYnJva2VyLCByZWFsIGVzdGF0ZSwgcmVhbCBlc3RhdGUgYWdlbnQsIHJlYWwgZXN0YXRlIGFnZW5jeSwgcmVhbHRvclwiXG4gICAgICAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD1cIkZpbmRIb3VzZSAtIFJlYWwgRXN0YXRlIFJlYWN0IFRlbXBsYXRlXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiaWJ0aGVtZXNcIiBjb250ZW50PVwiQVRGTlwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgLz5cblxuICAgICAge2ZvbnQgJiYgPGxpbmsgaHJlZj17Zm9udH0gcmVsPVwic3R5bGVzaGVldFwiIC8+fVxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbztcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwicGFnZVRpdGxlIiwiZm9udCIsInRpdGxlIiwibWV0YSIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJuYW1lIiwibGluayIsImhyZWYiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/seo.js\n");

/***/ }),

/***/ "./src/features/api/api.js":
/*!*********************************!*\
  !*** ./src/features/api/api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"api\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:3000/api\"\n    }),\n    endpoints: (builder)=>({})\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYXBpL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUU7QUFFbEUsTUFBTUUsR0FBRyxHQUFHRix1RUFBUyxDQUFDO0lBQ3pCRyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsU0FBUyxFQUFFSCw0RUFBYyxDQUFDO1FBQ3RCSSxPQUFPLEVBQUUsMkJBQTJCO0tBQ3ZDLENBQUM7SUFDRkMsU0FBUyxFQUFFLENBQUNDLE9BQU8sR0FBSyxDQUFDLEVBQUUsQ0FBQztDQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvZmVhdHVyZXMvYXBpL2FwaS5qcz84NWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcbiAgICByZWR1Y2VyUGF0aDogXCJhcGlcIixcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICAgICAgYmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCIsXG4gICAgfSksXG4gICAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHt9KSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/api/api.js\n");

/***/ }),

/***/ "./src/features/properties/propertiesSlice.js":
/*!****************************************************!*\
  !*** ./src/features/properties/propertiesSlice.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBlockNumber\": () => (/* binding */ addBlockNumber),\n/* harmony export */   \"addFlatType\": () => (/* binding */ addFlatType),\n/* harmony export */   \"addStreetName\": () => (/* binding */ addStreetName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"propertiesSlice\": () => (/* binding */ propertiesSlice),\n/* harmony export */   \"selectBlockNumber\": () => (/* binding */ selectBlockNumber),\n/* harmony export */   \"selectFilteredFlats\": () => (/* binding */ selectFilteredFlats),\n/* harmony export */   \"selectFlatType\": () => (/* binding */ selectFlatType),\n/* harmony export */   \"selectStreetName\": () => (/* binding */ selectStreetName),\n/* harmony export */   \"storeFilteredFlats\": () => (/* binding */ storeFilteredFlats)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selectFlatType = (state)=>state.properties.flatType;\nconst selectStreetName = (state)=>state.properties.streetName;\nconst selectBlockNumber = (state)=>state.properties.blockNumber;\nconst selectFilteredFlats = (state)=>state.properties.filteredFlats;\nconst initialState = {\n    streetName: \"\",\n    blockNumber: \"\",\n    flatType: \"\",\n    filteredFlats: [],\n    length: 0\n};\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"properties\",\n    initialState,\n    reducers: {\n        addStreetName: (state, action)=>{\n            state.streetName = action.payload;\n        },\n        addBlockNumber: (state, action)=>{\n            state.blockNumber = action.payload;\n        },\n        addFlatType: (state, action)=>{\n            state.flatType = action.payload;\n        },\n        // Define the storeFilteredFlats action\n        storeFilteredFlats: (state, action)=>{\n            state.filteredFlats = action.payload;\n        }\n    }\n});\nconst { addStreetName , addBlockNumber , addFlatType , storeFilteredFlats  } = propertiesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (propertiesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLGNBQWMsR0FBRyxDQUFDQyxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxRQUFRLENBQUM7QUFDNUQsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0gsS0FBSyxHQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0csVUFBVSxDQUFDO0FBQ2hFLE1BQU1DLGlCQUFpQixHQUFHLENBQUNMLEtBQUssR0FBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNLLFdBQVcsQ0FBQztBQUNsRSxNQUFNQyxtQkFBbUIsR0FBRyxDQUFDUCxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDTyxhQUFhLENBQUM7QUFFN0UsTUFBTUMsWUFBWSxHQUFHO0lBQ2pCTCxVQUFVLEVBQUUsRUFBRTtJQUNkRSxXQUFXLEVBQUUsRUFBRTtJQUNmSixRQUFRLEVBQUUsRUFBRTtJQUNaTSxhQUFhLEVBQUUsRUFBRTtJQUNqQkUsTUFBTSxFQUFFLENBQUM7Q0FDWjtBQUVNLE1BQU1DLGVBQWUsR0FBR2IsNkRBQVcsQ0FBQztJQUN2Q2MsSUFBSSxFQUFFLFlBQVk7SUFDbEJILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ05DLGFBQWEsRUFBRSxDQUFDZCxLQUFLLEVBQUVlLE1BQU0sR0FBSztZQUM5QmYsS0FBSyxDQUFDSSxVQUFVLEdBQUdXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ3RDLENBQUM7UUFDREMsY0FBYyxFQUFFLENBQUNqQixLQUFLLEVBQUVlLE1BQU0sR0FBSztZQUMvQmYsS0FBSyxDQUFDTSxXQUFXLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ3ZDLENBQUM7UUFDREUsV0FBVyxFQUFFLENBQUNsQixLQUFLLEVBQUVlLE1BQU0sR0FBSztZQUM1QmYsS0FBSyxDQUFDRSxRQUFRLEdBQUdhLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BDLENBQUM7UUFDRCx1Q0FBdUM7UUFDdkNHLGtCQUFrQixFQUFFLENBQUNuQixLQUFLLEVBQUVlLE1BQU0sR0FBSztZQUN2Q2YsS0FBSyxDQUFDUSxhQUFhLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ3ZDLENBQUM7S0FDRjtDQUNKLENBQUMsQ0FBQztBQUVJLE1BQU0sRUFDVEYsYUFBYSxHQUNiRyxjQUFjLEdBQ2RDLFdBQVcsR0FBRUMsa0JBQWtCLEdBQ2xDLEdBQUdSLGVBQWUsQ0FBQ1MsT0FBTyxDQUFDO0FBQzVCLGlFQUFlVCxlQUFlLENBQUNVLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmRob3VzZS8uL3NyYy9mZWF0dXJlcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXNTbGljZS5qcz9kYjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEZsYXRUeXBlID0gKHN0YXRlKSA9PiBzdGF0ZS5wcm9wZXJ0aWVzLmZsYXRUeXBlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFN0cmVldE5hbWUgPSAoc3RhdGUpID0+IHN0YXRlLnByb3BlcnRpZXMuc3RyZWV0TmFtZTtcbmV4cG9ydCBjb25zdCBzZWxlY3RCbG9ja051bWJlciA9IChzdGF0ZSkgPT4gc3RhdGUucHJvcGVydGllcy5ibG9ja051bWJlcjtcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJlZEZsYXRzID0gKHN0YXRlKSA9PiBzdGF0ZS5wcm9wZXJ0aWVzLmZpbHRlcmVkRmxhdHM7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzdHJlZXROYW1lOiBcIlwiLFxuICAgIGJsb2NrTnVtYmVyOiBcIlwiLFxuICAgIGZsYXRUeXBlOiBcIlwiLFxuICAgIGZpbHRlcmVkRmxhdHM6IFtdLCAvLyBBZGQgZmlsdGVyZWRGbGF0cyB0byB5b3VyIGluaXRpYWxTdGF0ZVxuICAgIGxlbmd0aDogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJwcm9wZXJ0aWVzXCIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGFkZFN0cmVldE5hbWU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdHJlZXROYW1lID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEJsb2NrTnVtYmVyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuYmxvY2tOdW1iZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRmxhdFR5cGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5mbGF0VHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICAvLyBEZWZpbmUgdGhlIHN0b3JlRmlsdGVyZWRGbGF0cyBhY3Rpb25cbiAgICAgICAgc3RvcmVGaWx0ZXJlZEZsYXRzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5maWx0ZXJlZEZsYXRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgICBhZGRTdHJlZXROYW1lLFxuICAgIGFkZEJsb2NrTnVtYmVyLFxuICAgIGFkZEZsYXRUeXBlLCBzdG9yZUZpbHRlcmVkRmxhdHNcbn0gPSBwcm9wZXJ0aWVzU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IHByb3BlcnRpZXNTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwic2VsZWN0RmxhdFR5cGUiLCJzdGF0ZSIsInByb3BlcnRpZXMiLCJmbGF0VHlwZSIsInNlbGVjdFN0cmVldE5hbWUiLCJzdHJlZXROYW1lIiwic2VsZWN0QmxvY2tOdW1iZXIiLCJibG9ja051bWJlciIsInNlbGVjdEZpbHRlcmVkRmxhdHMiLCJmaWx0ZXJlZEZsYXRzIiwiaW5pdGlhbFN0YXRlIiwibGVuZ3RoIiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkU3RyZWV0TmFtZSIsImFjdGlvbiIsInBheWxvYWQiLCJhZGRCbG9ja051bWJlciIsImFkZEZsYXRUeXBlIiwic3RvcmVGaWx0ZXJlZEZsYXRzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/properties/propertiesSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/ScrollTop */ \"./src/components/common/ScrollTop.jsx\");\n/* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/seo */ \"./src/components/common/seo.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_common_blog_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/blog/pagination.css */ \"./src/components/common/blog/pagination.css\");\n/* harmony import */ var _components_common_blog_pagination_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_common_blog_pagination_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_my_favourites_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/my-favourites/styles.css */ \"./src/pages/my-favourites/styles.css\");\n/* harmony import */ var _pages_my_favourites_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_my_favourites_styles_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nif (false) {}\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                font: \"https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap\"\n            }, void 0, false, {\n                fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n                store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tanjinghan/Documents/GitHub/SC2006/jfcproperty/src/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ0Y7QUFDb0I7QUFDZDtBQUNwQjtBQUMyQjtBQUNSO0FBTTFDLElBQUksS0FBNkIsRUFBRSxFQUVsQztBQUVELFNBQVNLLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFOzswQkFDRSw4REFBQ0osOERBQUc7Z0JBQ0ZLLElBQUksRUFDRixrRkFBa0Y7Ozs7O29CQUVwRjswQkFDRiw4REFBQ1IsaURBQVE7Z0JBQUNDLEtBQUssRUFBRUEsNkNBQUs7MEJBQ3BCLDRFQUFDSyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDbkI7MEJBRVgsOERBQUNMLG9FQUFXOzs7O29CQUFHOztvQkFDZCxDQUNIO0FBQ0osQ0FBQztBQUVELGlFQUFlRyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9zZW9cIjtcbmltcG9ydCBcIi4uL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2Jsb2cvcGFnaW5hdGlvbi5jc3NcIjtcbmltcG9ydFwiLi4vcGFnZXMvbXktZmF2b3VyaXRlcy9zdHlsZXMuY3NzXCI7XG5cblxuXG5cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgcmVxdWlyZShcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcFwiKTtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgZm9udD17XG4gICAgICAgICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw0MDBpLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJTY3JvbGxUb1RvcCIsIlNlbyIsInJlcXVpcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImZvbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/components/common/blog/pagination.css":
/*!***************************************************!*\
  !*** ./src/components/common/blog/pagination.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/my-favourites/styles.css":
/*!********************************************!*\
  !*** ./src/pages/my-favourites/styles.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();