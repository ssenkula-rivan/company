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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"gsap/ScrollTrigger\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nif (false) {}\nfunction App({ Component, pageProps }) {\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Delay to ensure DOM is ready\n        const timer = setTimeout(()=>{\n            // Smooth scrolling for navigation links\n            const setupSmoothScrolling = ()=>{\n                document.querySelectorAll('a[href^=\"#\"]').forEach((anchor)=>{\n                    anchor.addEventListener(\"click\", function(e) {\n                        e.preventDefault();\n                        const target = document.querySelector(this.getAttribute(\"href\"));\n                        if (target) {\n                            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(window, {\n                                duration: 1.5,\n                                scrollTo: {\n                                    y: target.offsetTop - 80,\n                                    autoKill: false,\n                                    ease: \"power2.inOut\"\n                                }\n                            });\n                        }\n                    });\n                });\n            };\n            // Sticky sections\n            const setupStickySections = ()=>{\n                gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.toArray(\".sticky-section\").forEach((section)=>{\n                    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({\n                        trigger: section,\n                        start: \"top top\",\n                        end: \"bottom top\",\n                        pin: true,\n                        pinSpacing: 0\n                    });\n                });\n            };\n            // Parallax elements\n            const setupParallax = ()=>{\n                gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.toArray(\".parallax-element\").forEach((element)=>{\n                    const depth = element.dataset.depth || 0.5;\n                    gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(element, {\n                        scrollTrigger: {\n                            trigger: element,\n                            start: \"top bottom\",\n                            end: \"bottom top\",\n                            scrub: 1\n                        },\n                        yPercent: -50 * depth,\n                        ease: \"none\"\n                    });\n                });\n            };\n            // Intersection Observer for animations\n            const setupIntersectionObserver = ()=>{\n                const observerOptions = {\n                    threshold: 0.1,\n                    rootMargin: \"0px 0px -100px 0px\"\n                };\n                const observer = new IntersectionObserver((entries)=>{\n                    entries.forEach((entry)=>{\n                        if (entry.isIntersecting) {\n                            entry.target.classList.add(\"animate-in\");\n                            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(entry.target, {\n                                opacity: 1,\n                                y: 0,\n                                scale: 1,\n                                duration: 0.8,\n                                ease: \"power3.out\"\n                            });\n                        }\n                    });\n                }, observerOptions);\n                const animatedElements = document.querySelectorAll(\".animate-on-scroll\");\n                animatedElements.forEach((el)=>observer.observe(el));\n                return ()=>observer.disconnect();\n            };\n            setupSmoothScrolling();\n            setupStickySections();\n            setupParallax();\n            setupIntersectionObserver();\n        }, 100);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        ref: containerRef,\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 0.5\n        },\n        className: \"page-content min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/QCL-LTD.UG-main/pages/_app.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/QCL-LTD.UG-main/pages/_app.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBRTtRQUN0QlUsU0FBUztZQUFFVixTQUFTO1FBQUU7UUFDdEJXLFlBQVk7WUFBRTdDLFVBQVU7UUFBSTtRQUM1QjhDLFdBQVU7a0JBRVYsNEVBQUNoRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1vZHotcHJvcGVydGllcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRGVsYXkgdG8gZW5zdXJlIERPTSBpcyByZWFkeVxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBTbW9vdGggc2Nyb2xsaW5nIGZvciBuYXZpZ2F0aW9uIGxpbmtzXG4gICAgICBjb25zdCBzZXR1cFNtb290aFNjcm9sbGluZyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKVxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICAgIHk6IHRhcmdldC5vZmZzZXRUb3AgLSA4MCxcbiAgICAgICAgICAgICAgICAgIGF1dG9LaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIuaW5PdXQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFN0aWNreSBzZWN0aW9uc1xuICAgICAgY29uc3Qgc2V0dXBTdGlja3lTZWN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgZ3NhcC51dGlscy50b0FycmF5KCcuc3RpY2t5LXNlY3Rpb24nKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICAgICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgZW5kOiAnYm90dG9tIHRvcCcsXG4gICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgICBwaW5TcGFjaW5nOiAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gUGFyYWxsYXggZWxlbWVudHNcbiAgICAgIGNvbnN0IHNldHVwUGFyYWxsYXggPSAoKSA9PiB7XG4gICAgICAgIGdzYXAudXRpbHMudG9BcnJheSgnLnBhcmFsbGF4LWVsZW1lbnQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlcHRoID0gZWxlbWVudC5kYXRhc2V0LmRlcHRoIHx8IDAuNVxuICAgICAgICAgIGdzYXAudG8oZWxlbWVudCwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICB0cmlnZ2VyOiBlbGVtZW50LFxuICAgICAgICAgICAgICBzdGFydDogJ3RvcCBib3R0b20nLFxuICAgICAgICAgICAgICBlbmQ6ICdib3R0b20gdG9wJyxcbiAgICAgICAgICAgICAgc2NydWI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5UGVyY2VudDogLTUwICogZGVwdGgsXG4gICAgICAgICAgICBlYXNlOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgZm9yIGFuaW1hdGlvbnNcbiAgICAgIGNvbnN0IHNldHVwSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuMSxcbiAgICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtMTAwcHggMHB4J1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWluJylcbiAgICAgICAgICAgICAgZ3NhcC50byhlbnRyeS50YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICAgICAgICBlYXNlOiAncG93ZXIzLm91dCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCBvYnNlcnZlck9wdGlvbnMpXG5cbiAgICAgICAgY29uc3QgYW5pbWF0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlLW9uLXNjcm9sbCcpXG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSlcblxuICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICB9XG5cbiAgICAgIHNldHVwU21vb3RoU2Nyb2xsaW5nKClcbiAgICAgIHNldHVwU3RpY2t5U2VjdGlvbnMoKVxuICAgICAgc2V0dXBQYXJhbGxheCgpXG4gICAgICBzZXR1cEludGVyc2VjdGlvbk9ic2VydmVyKClcbiAgICB9LCAxMDApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IFxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgbWluLWgtc2NyZWVuXCJcbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJyZWdpc3RlclBsdWdpbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRhaW5lclJlZiIsInRpbWVyIiwic2V0VGltZW91dCIsInNldHVwU21vb3RoU2Nyb2xsaW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidG8iLCJ3aW5kb3ciLCJkdXJhdGlvbiIsInNjcm9sbFRvIiwieSIsIm9mZnNldFRvcCIsImF1dG9LaWxsIiwiZWFzZSIsInNldHVwU3RpY2t5U2VjdGlvbnMiLCJ1dGlscyIsInRvQXJyYXkiLCJzZWN0aW9uIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwicGluIiwicGluU3BhY2luZyIsInNldHVwUGFyYWxsYXgiLCJlbGVtZW50IiwiZGVwdGgiLCJkYXRhc2V0Iiwic2Nyb2xsVHJpZ2dlciIsInNjcnViIiwieVBlcmNlbnQiLCJzZXR1cEludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXJPcHRpb25zIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImNsYXNzTGlzdCIsImFkZCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGVkRWxlbWVudHMiLCJlbCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwicmVmIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "gsap/ScrollTrigger":
/*!*************************************!*\
  !*** external "gsap/ScrollTrigger" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap/ScrollTrigger");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();