/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/** 
 * dropdown menu:
 * click the button triggers show/hide submenu
 * 
 */
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttributeValue('id');
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};
(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); //initialisation of dropdown method for static html page

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLenght = Object.keys(this).length;
  for (let i = 0; i < objLenght; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const siblings = [...parent.children];
  const findMyIndex = item => {
    return item == this[0];
  };
  return siblings.findIndex(findMyIndex);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLenght = Object.keys(this).length;
  for (; numberOfItems < objLenght; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }
  this.length = counter;
  const objLenght = Object.keys(this).length;
  for (; counter < objLenght; counter++) {
    delete this[counter];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLenght = Object.keys(this).length;
  for (; numberOfItems < objLenght; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttribute = function (attribute, value = '') {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      if (!attribute) {
        return this;
      }
      this[i].setAttribute(attribute, value);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttributeValue = function (attribute) {
  return this[0].getAttribute(attribute);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttributeValue = function (attribute, value = '') {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      if (!attribute) {
        return this;
      }
      if (this[i].hasAttribute(attribute)) {
        this[i].setAttribute(attribute, value);
      }
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttributeValue = function (attribute, value = '') {
  for (let i = 0; i < this.length; i++) {
    if (!attribute) {
      return this;
    } else {
      if (this[i].hasAttribute(attribute)) {
        if (this[i].getAttribute(attribute) == value) {
          this[i].setAttribute(attribute, value = '');
        }
        if (value == '' || !value) {
          this[i].setAttribute(attribute, value = '');
        }
      }
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttributeValue = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      if (this[i].hasAttribute(attribute)) {
        if (this[i].getAttribute(attribute) !== value) {
          this[i].setAttribute(attribute, value);
        } else {
          this[i].setAttribute(attribute, value = '');
        }
      }
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...classNames);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart;
    let completion = Math.min(timeElapsed / dur, 1);
    cb(completion);
    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';
    let startOpacity = this[i].style.opacity === '' ? 0 : Number(this[i].style.opacity);
    const _fadeIn = completion => {
      // this[i].style.display = display || 'block';
      // let startOpacity = this[i].style.opacity === '' ? 0 : Number(this[i].style.opacity);
      this[i].style.opacity = Math.min(completion + startOpacity, 1);
    };
    const animate = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(animate);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    let startOpacity = this[i].style.opacity === '' ? 1 : Number(this[i].style.opacity);
    const _fadeOut = completion => {
      this[i].style.opacity = Math.max(1 - (completion + startOpacity), 0);
      if (completion === 1) {
        this[i].style.display = 'none';
      }
    };
    const animate = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(animate);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur);
    } else {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur, display, fin);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


// $('div').hide().show();
// $('.active').toggle().toggle();
// $('.active').addClass('hello', 'world');
// $('.active').toggleClass('hello');
// $('.active').on('click', sayHello);
// $('.active').off('click', sayHello);
// $('.active').click(sayHello);

// function sayHello() {
// 	console.log('hello');
// }
// $('button').addAttribute('data-modal');
// $('button').addAttributeValue('data-modal', '5');
// $('div').addAttribute('data-private', 'true');

// $('button').on('click', function() { 
// 	// $(this).hide().show().toggleClass('active');
// 	// console.log($('div').getAttributeValue('data-private'));

// 	// $('[data-modal]').addAttribute('data-name', 'name');
// 	// $('button').addAttributeValue('data-name', 'new');
// 	// $('button').toggleAttributeValue('data-modal', 'toggle');
// 	// $('[data-private]').removeAttributeValue('data-private', 'false');
// 	$('div').eq(1).toggleClass('active');
// });

// $('button').html('YES');

// $('div').click(function() {
// 	console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
// ($('.more').closest('.findme').addClass('hello'));
// console.log($('.more').eq(0).siblings());
// console.log($('.findme').siblings());

// $('.list').fadeOut(1800);
// $('button').fadeOut(1800);

// $('button').fadeOut(2800);
// setTimeout(()=> {$('button').fadeIn(1800)}, 4000);

//buttons hide show text

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('section div').eq(0).fadeToggle(800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('section div').eq(1).fadeToggle(800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('section.fadeToggle button').eq(2).on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('section div.w-500px').fadeToggle(800);
});

// console.log($('.dropdown-toggle').getAttributeValue('id'));

//dropdown menu dynamicly generated:
/* $('.wrapper-dropdown').html(
	`
	<div class="dropdown">
		<button class="btn btn_primary dropdown-toggle" id='dropdownMenuButton'>Dropdown button</button>
		<ul class="dropdown-list" data-toggle-id="dropdownMenuButton">
			<li class="dropdown-item"><a href="#">Action #1</a></li>
			<li class="dropdown-item"><a href="#">Action #2</a></li>
			<li class="dropdown-item"><a href="#">Action #3</a></li>
		</ul>
	</div>
	<div class="dropdown">
		<button class="btn btn_primary dropdown-toggle" id='dropdownMenu2Button'>Dropdown button</button>
		<ul class="dropdown-list" data-toggle-id="dropdownMenu2Button">
			<li class="dropdown-item"><a href="#">Action #1</a></li>
			<li class="dropdown-item"><a href="#">Action #2</a></li>
			<li class="dropdown-item"><a href="#">Action #3</a></li>
		</ul>
	</div>
	`
)
$('.dropdown-toggle').dropdown(); */
/******/ })()
;
//# sourceMappingURL=script.js.map