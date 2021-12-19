/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon122021/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const cartCloseBtn = cartModal.querySelector('.cart-close');\r\n\r\n    const openCart = () => cartModal.style.display = 'flex';\r\n    const closeCart = () => cartModal.style.display = '';\r\n\r\n    cartBtn.addEventListener('click', openCart);\r\n    cartCloseBtn.addEventListener('click', closeCart);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button>button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogItems = catalogModal.querySelectorAll('li');\r\n    let isOpen = false;\r\n    btnCatalog.addEventListener('click', event => {\r\n        isOpen = !isOpen;\r\n        catalogModal.style.display = isOpen ? 'block' : '';\r\n    });\r\n\r\n    catalogItems.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            const text = item.textContent;\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalog);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/db.js":
/*!***************************!*\
  !*** ./src/modules/db.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst dbUrl = 'https://ozone-197c6-default-rtdb.firebaseio.com/goods.json';\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbUrl);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/db.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": function() { return /* binding */ searchFilter; },\n/* harmony export */   \"categoryFilter\": function() { return /* binding */ categoryFilter; },\n/* harmony export */   \"priceFilter\": function() { return /* binding */ priceFilter; }\n/* harmony export */ });\n\r\n\r\nconst searchFilter = (goods, value) => {\r\n    return goods.filter(item => {\r\n        return item.title.toLowerCase().includes(value.toLowerCase());\r\n    });\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter(item => {\r\n        return item.category === value;\r\n    });\r\n};\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n    return goods.filter(item => {\r\n        return item.price >= min && item.price <= max;\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/modules/db.js\");\n\r\n\r\n\r\n\r\nconst getData = () => {\r\n    // return fetch(`${dbUrl}${search ? `?search=${search}` : ''}`)\r\n    return fetch(_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n        .then((response) => response.json());\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    });\r\n\r\n    // cartBtn.addEventListener('click', () => {\r\n    //     getData().then(data => {\r\n    //         renderGoods(data);\r\n    //     });\r\n    // });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (load);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    const $min = document.getElementById('min');\r\n    const $max = document.getElementById('max');\r\n\r\n    [$min, $max].forEach(item => {\r\n        item.addEventListener('input', event => {\r\n            const min = $min.value ? $min.value : 0;\r\n            const max = $max.value ? $max.value : 100000;\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, min, max));\r\n            });\r\n        });\r\n\r\n    });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (price);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    goodsWrapper.innerHTML = '';\r\n    goods.forEach(item => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\">\r\n                    ${item.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${item.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${item.price} ₽</div>\r\n                        <h5 class=\"card-title\">${item.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `);\r\n\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n    searchInput.addEventListener('input', event => {\r\n        const value = event.target.value;\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n        });\r\n\r\n    });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\r\n\n\n//# sourceURL=webpack://ozon122021/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;