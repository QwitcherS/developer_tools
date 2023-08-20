/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/game-unit.ts":
/*!*********************************!*\
  !*** ./components/game-unit.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cards = [
    {
        front: './static/images/6s.png',
        back: './static/images/card_back.png',
        name: 'card1',
    },
    {
        front: './static/images/6s.png',
        back: './static/images/card_back.png',
        name: 'card1',
    },
    {
        front: './static/images/6c.png',
        back: './static/images/card_back.png',
        name: 'card2',
    },
    {
        front: './static/images/6c.png',
        back: './static/images/card_back.png',
        name: 'card2',
    },
    {
        front: './static/images/6h.png',
        back: './static/images/card_back.png',
        name: 'card3',
    },
    {
        front: './static/images/6h.png',
        back: './static/images/card_back.png',
        name: 'card3',
    },
    {
        front: './static/images/6d.png',
        back: './static/images/card_back.png',
        name: 'card4',
    },
    {
        front: './static/images/6d.png',
        back: './static/images/card_back.png',
        name: 'card4',
    },
    {
        front: './static/images/7d.png',
        back: './static/images/card_back.png',
        name: 'card5',
    },
    {
        front: './static/images/7d.png',
        back: './static/images/card_back.png',
        name: 'card5',
    },
    {
        front: './static/images/7h.png',
        back: './static/images/card_back.png',
        name: 'card6',
    },
    {
        front: './static/images/7h.png',
        back: './static/images/card_back.png',
        name: 'card6',
    },
    {
        front: './static/images/7c.png',
        back: './static/images/card_back.png',
        name: 'card7',
    },
    {
        front: './static/images/7c.png',
        back: './static/images/card_back.png',
        name: 'card7',
    },
    {
        front: './static/images/7s.png',
        back: './static/images/card_back.png',
        name: 'card8',
    },
    {
        front: './static/images/7s.png',
        back: './static/images/card_back.png',
        name: 'card8',
    },
    {
        front: './static/images/8c.png',
        back: './static/images/card_back.png',
        name: 'card9',
    },
    {
        front: './static/images/8c.png',
        back: './static/images/card_back.png',
        name: 'card9',
    },
    {
        front: './static/images/8s.png',
        back: './static/images/card_back.png',
        name: 'card10',
    },
    {
        front: './static/images/8s.png',
        back: './static/images/card_back.png',
        name: 'card10',
    },
    {
        front: './static/images/8h.png',
        back: './static/images/card_back.png',
        name: 'card11',
    },
    {
        front: './static/images/8h.png',
        back: './static/images/card_back.png',
        name: 'card11',
    },
    {
        front: './static/images/8d.png',
        back: './static/images/card_back.png',
        name: 'card12',
    },
    {
        front: './static/images/8d.png',
        back: './static/images/card_back.png',
        name: 'card12',
    },
    {
        front: './static/images/9d.png',
        back: './static/images/card_back.png',
        name: 'card13',
    },
    {
        front: './static/images/9d.png',
        back: './static/images/card_back.png',
        name: 'card13',
    },
    {
        front: './static/images/9h.png',
        back: './static/images/card_back.png',
        name: 'card14',
    },
    {
        front: './static/images/9h.png',
        back: './static/images/card_back.png',
        name: 'card14',
    },
    {
        front: './static/images/9c.png',
        back: './static/images/card_back.png',
        name: 'card15',
    },
    {
        front: './static/images/9c.png',
        back: './static/images/card_back.png',
        name: 'card15',
    },
    {
        front: './static/images/9s.png',
        back: './static/images/card_back.png',
        name: 'card16',
    },
    {
        front: './static/images/9s.png',
        back: './static/images/card_back.png',
        name: 'card16',
    },
    {
        front: './static/images/10s.png',
        back: './static/images/card_back.png',
        name: 'card17',
    },
    {
        front: './static/images/10s.png',
        back: './static/images/card_back.png',
        name: 'card17',
    },
    {
        front: './static/images/10c.png',
        back: './static/images/card_back.png',
        name: 'card18',
    },
    {
        front: './static/images/10c.png',
        back: './static/images/card_back.png',
        name: 'card18',
    },
    {
        front: './static/images/10h.png',
        back: './static/images/card_back.png',
        name: 'card19',
    },
    {
        front: './static/images/10h.png',
        back: './static/images/card_back.png',
        name: 'card19',
    },
    {
        front: './static/images/10d.png',
        back: './static/images/card_back.png',
        name: 'card20',
    },
    {
        front: './static/images/10d.png',
        back: './static/images/card_back.png',
        name: 'card20',
    },
    {
        front: './static/images/Jd.png',
        back: './static/images/card_back.png',
        name: 'card21',
    },
    {
        front: './static/images/Jd.png',
        back: './static/images/card_back.png',
        name: 'card21',
    },
    {
        front: './static/images/Jh.png',
        back: './static/images/card_back.png',
        name: 'card22',
    },
    {
        front: './static/images/Jh.png',
        back: './static/images/card_back.png',
        name: 'card22',
    },
    {
        front: './static/images/Jc.png',
        back: './static/images/card_back.png',
        name: 'card23',
    },
    {
        front: './static/images/Jc.png',
        back: './static/images/card_back.png',
        name: 'card23',
    },
    {
        front: './static/images/Js.png',
        back: './static/images/card_back.png',
        name: 'card24',
    },
    {
        front: './static/images/Js.png',
        back: './static/images/card_back.png',
        name: 'card24',
    },
    {
        front: './static/images/Qs.png',
        back: './static/images/card_back.png',
        name: 'card25',
    },
    {
        front: './static/images/Qs.png',
        back: './static/images/card_back.png',
        name: 'card25',
    },
    {
        front: './static/images/Qc.png',
        back: './static/images/card_back.png',
        name: 'card26',
    },
    {
        front: './static/images/Qc.png',
        back: './static/images/card_back.png',
        name: 'card26',
    },
    {
        front: './static/images/Qh.png',
        back: './static/images/card_back.png',
        name: 'card27',
    },
    {
        front: './static/images/Qh.png',
        back: './static/images/card_back.png',
        name: 'card27',
    },
    {
        front: './static/images/Qd.png',
        back: './static/images/card_back.png',
        name: 'card28',
    },
    {
        front: './static/images/Qd.png',
        back: './static/images/card_back.png',
        name: 'card28',
    },
    {
        front: './static/images/Kd.png',
        back: './static/images/card_back.png',
        name: 'card29',
    },
    {
        front: './static/images/Kd.png',
        back: './static/images/card_back.png',
        name: 'card29',
    },
    {
        front: './static/images/Kh.png',
        back: './static/images/card_back.png',
        name: 'card30',
    },
    {
        front: './static/images/Kh.png',
        back: './static/images/card_back.png',
        name: 'card30',
    },
    {
        front: './static/images/Kc.png',
        back: './static/images/card_back.png',
        name: 'card31',
    },
    {
        front: './static/images/Kc.png',
        back: './static/images/card_back.png',
        name: 'card31',
    },
    {
        front: './static/images/Ks.png',
        back: './static/images/card_back.png',
        name: 'card32',
    },
    {
        front: './static/images/Ks.png',
        back: './static/images/card_back.png',
        name: 'card32',
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./components/level-pages.ts":
/*!***********************************!*\
  !*** ./components/level-pages.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderRadioComponents: () => (/* binding */ renderRadioComponents)
/* harmony export */ });
/* harmony import */ var _page_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-level */ "./components/page-level.ts");

function renderRadioComponents() {
    var app = document.getElementById('app');
    var appHtml = "\n<header class=\"header center\">\n<form class=\"header__form \">\n    <h1 class=\"header__name\">\n        \u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\n    </h1>\n        <div class=\"header__toolbar\"> \n            <input type=\"radio\" id=\"radio1\" name=\"difficulty\" value=\"easy\">\n            <label for=\"radio1\">1</label>\n            \n            <input type=\"radio\" id=\"radio2\" name=\"difficulty\" value=\"medium\">\n            <label for=\"radio2\">2</label>\n            \n            <input type=\"radio\" id=\"radio3\" name=\"difficulty\" value=\"hard\">\n            <label for=\"radio3\">3</label>\n        </div> \n    <button id=\"game-button\" class=\"header__button\">\u0421\u0442\u0430\u0440\u0442</button>\n</form>\n</header>\n";
    app.innerHTML = appHtml;
    var levelData = {
        difficulty: 'medium',
        numCards: 12,
    };
    var difficultyInputs = document.querySelectorAll('.header__toolbar input[name="difficulty"]');
    var gameButton = document.getElementById('game-button');
    function levelNumCards() {
        switch (levelData.difficulty) {
            case 'easy':
                levelData.numCards = 6;
                break;
            case 'medium':
                levelData.numCards = 12;
                break;
            case 'hard':
                levelData.numCards = 18;
                break;
        }
    }
    difficultyInputs.forEach(function (input) {
        input.addEventListener('change', function () {
            levelData.difficulty = input.value;
            levelNumCards();
        });
    });
    gameButton.addEventListener('click', function () {
        levelGame(levelData.difficulty);
    });
    function levelGame(difficulty) {
        (0,_page_level__WEBPACK_IMPORTED_MODULE_0__.initRenderLevelGame)(difficulty);
    }
}


/***/ }),

/***/ "./components/page-level.ts":
/*!**********************************!*\
  !*** ./components/page-level.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRenderLevelGame: () => (/* binding */ initRenderLevelGame)
/* harmony export */ });
/* harmony import */ var _game_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-unit */ "./components/game-unit.ts");
/* harmony import */ var _level_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-pages */ "./components/level-pages.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


function initRenderLevelGame(difficulty) {
    var app = document.getElementById('app');
    // let formattedTime: string
    var shuffledCards = shuffle(__spreadArray(__spreadArray([], _game_unit__WEBPACK_IMPORTED_MODULE_0__["default"], true), _game_unit__WEBPACK_IMPORTED_MODULE_0__["default"], true));
    var appHtml = "\n    <div class=\"top-container center\">\n  <header class=\"container\">\n           <div class=\"head__box\">\n          <span class=\"head__time-new\">min </span>\n          <span class=\"head__time-new\">sek</span>\n          </div> \n          <div class=\"head\"> \n          <span class=\"head__time\" id=\"seconds\">00.00</span>\n          <button id=\"start-button\" class=\"header__button\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n          </div> \n          </header>\n    <div id=\"card\" class=\"cards\">\n     ".concat(renderCards(difficulty, shuffledCards), "\n       </div>\n       </header>\n       </div>\n       ");
    app.innerHTML = appHtml;
    var cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function (card) {
        card.addEventListener('click', function (event) {
            return flipCard(event, timerInterval);
        });
    });
    var memoryTimeoutId = setTimeout(function () {
        cardElements.forEach(function (card) {
            card.classList.remove('flipped');
        });
    }, 5000);
    cardElements.forEach(function (card) {
        card.classList.add('flipped');
    });
    var startTime = new Date().getTime();
    var headTime = document.querySelector('.head__time');
    var timerInterval = setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);
        var formattedTime = "".concat(String(minutes).padStart(2, '0'), ":").concat(String(seconds).padStart(2, '0'));
        headTime.textContent = formattedTime;
    }, 1000);
    var startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function () {
        clearInterval(timerInterval);
        clearTimeout(memoryTimeoutId);
        cardElements.forEach(function (card) {
            card.classList.remove('flipped');
        });
        initRenderLevelGame(difficulty);
    });
    function renderCards(difficulty, cards) {
        var numCards = getNumCards(difficulty) * 2;
        var selectedCards = cards.slice(0, Math.floor(numCards / 2));
        var duplicatedCards = __spreadArray(__spreadArray([], selectedCards, true), selectedCards, true);
        var shuffledCards = shuffle(duplicatedCards);
        var cardsHtml = '';
        for (var i = 0; i < shuffledCards.length; i++) {
            var card = shuffledCards[i];
            var cardHtml = "\n    <div data-card-name=\"".concat(card.name, "\" class=\"card\">\n      <div  class=\"card__front\">\n        <img src=\"").concat(card.front, "\" alt=\"\">\n      </div>\n      <div class=\"card__back\">\n        <img src=\"").concat(card.back, "\" alt=\"\">\n      </div>\n    </div>\n  ");
            cardsHtml += cardHtml;
        }
        return cardsHtml;
    }
}
function shuffle(array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = [
            array[randomIndex],
            array[currentIndex],
        ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
}
function getNumCards(difficulty) {
    switch (difficulty) {
        case 'easy':
            return 3;
        case 'medium':
            return 6;
        case 'hard':
            return 9;
        default:
            return 3;
    }
}
var currentCard = null;
var previousCard = null;
var isFlippingCards = false;
function flipCard(event, timerInterval) {
    var _a, _b, _c, _d;
    if (isFlippingCards) {
        return;
    }
    var card = event.currentTarget;
    if (card.classList.contains('flipped')) {
        return;
    }
    if (currentCard === null) {
        currentCard = card;
        card.classList.toggle('flipped');
    }
    else if (previousCard === null && currentCard !== card) {
        previousCard = card;
        card.classList.toggle('flipped');
        isFlippingCards = true;
        var currentCardFront = (_a = currentCard
            .querySelector('.card__front img')) === null || _a === void 0 ? void 0 : _a.getAttribute('src');
        var previousCardFront = (_b = previousCard
            .querySelector('.card__front img')) === null || _b === void 0 ? void 0 : _b.getAttribute('src');
        if (currentCardFront === previousCardFront) {
            currentCard.isMatched = true;
            previousCard.isMatched = true;
            var allCards = document.querySelectorAll('.card');
            var allMatched = Array.prototype.slice
                .call(allCards)
                .every(function (card) { return card.isMatched; });
            if (allMatched) {
                var formattedTime = (_c = document.querySelector('.head__time')) === null || _c === void 0 ? void 0 : _c.textContent;
                clearInterval(timerInterval);
                if (formattedTime) {
                    renderWinPage(formattedTime, true);
                }
            }
            currentCard = null;
            previousCard = null;
            isFlippingCards = false;
        }
        else {
            var formattedTime = (_d = document.querySelector('.head__time')) === null || _d === void 0 ? void 0 : _d.textContent;
            clearInterval(timerInterval);
            if (formattedTime) {
                renderWinPage(formattedTime, false);
            }
            setTimeout(function () {
                clearInterval(timerInterval);
                // currentCard.classList.remove('flipped')
                // previousCard.classList.remove('flipped')
                currentCard = null;
                previousCard = null;
                isFlippingCards = false;
            }, 1000);
        }
    }
}
function renderWinPage(formattedTime, gameResult) {
    var app = document.querySelector('#app');
    var winPageHtml = "\n    <div class=\"fin__game\">\n        <div class=\"fin__game-container\">\n            <div class=\"fin__game-nav\">\n                ".concat(gameResult
        ? '<span class="fin__game_imgwin"></span>'
        : '<span class="fin__game_imgconq"></span>', "\n                <div class=\"fin__game_window\"> \n                    <p class=\"fin__game_text\">").concat(gameResult ? 'Вы выиграли!' : 'Вы проиграли!', "</p>\n                </div> \n                <div class=\"fin__game_tex\"> \n                    <p class=\"fin__game_text2\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n                    <div>\n                    <p class=\"fin__game_time\">").concat(formattedTime, "</p>  \n                </div>          \n                    <button id=\"restart-button\" class=\"header__button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n                </div>\n            </div>\n        </div>\n    </div>\n  ");
    app.innerHTML = winPageHtml;
    var reStartGame = document.querySelector('#restart-button');
    reStartGame.addEventListener('click', function () {
        reStartGameButton();
    });
    function reStartGameButton() {
        (0,_level_pages__WEBPACK_IMPORTED_MODULE_1__.renderRadioComponents)();
    }
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_level_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/level-pages */ "./components/level-pages.ts");

(0,_components_level_pages__WEBPACK_IMPORTED_MODULE_0__.renderRadioComponents)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map