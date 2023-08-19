/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/game-unit.js":
/*!*********************************!*\
  !*** ./components/game-unit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cards = [
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
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./components/level-pages.js":
/*!***********************************!*\
  !*** ./components/level-pages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderRadioComponents: () => (/* binding */ renderRadioComponents)
/* harmony export */ });
/* harmony import */ var _page_level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-level.js */ "./components/page-level.js");


function renderRadioComponents() {
    const app = document.getElementById('app')
    const appHtml = `
    <form class="header__form">
    <h1 class="nav__name">
        Выбери сложность
    </h1>
        <div class="radio-toolbar"> 
            <input type="radio" id="radio1" name="difficulty" value="easy">
            <label for="radio1">1</label>
            
            <input type="radio" id="radio2" name="difficulty" value="medium">
            <label for="radio2">2</label>
            
            <input type="radio" id="radio3" name="difficulty" value="hard">
            <label for="radio3">3</label>
        </div> 
    <button id="game-button" class="nav__button">Старт</button>
</form>
`

    app.innerHTML = appHtml

    const levelData = {
        difficulty: 'medium',
        numCards: 12,
    }

    const difficultyInputs = document.querySelectorAll(
        '.radio-toolbar input[name="difficulty"]',
    )

    const gameButton = document.querySelector('#game-button')

    function levelNumCards(levelData) {
        switch (levelData.difficulty) {
            case 'easy':
                levelData.numCards = 6
                break
            case 'medium':
                levelData.numCards = 12
                break
            case 'hard':
                levelData.numCards = 18
                break
        }
    }

    difficultyInputs.forEach((input) => {
        input.addEventListener('change', () => {
            levelData.difficulty = input.value
            levelNumCards(levelData)
        })
    })

    gameButton.addEventListener('click', () => {
        levelGame(levelData.difficulty)
    })

    function levelGame(difficulty) {
        console.log(`Запуск игры с уровнем сложности "${difficulty}"`)
        ;(0,_page_level_js__WEBPACK_IMPORTED_MODULE_0__.initRenderLevelGame)(difficulty)
    }
}


/***/ }),

/***/ "./components/page-level.js":
/*!**********************************!*\
  !*** ./components/page-level.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRenderLevelGame: () => (/* binding */ initRenderLevelGame)
/* harmony export */ });
/* harmony import */ var _game_unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-unit.js */ "./components/game-unit.js");


function initRenderLevelGame(difficulty) {
    const app = document.getElementById('app')
    let memoryTimeoutId
    const shuffledCards = shuffle([..._game_unit_js__WEBPACK_IMPORTED_MODULE_0__["default"], ..._game_unit_js__WEBPACK_IMPORTED_MODULE_0__["default"]])

    const appHtml = `
    <div class="top-container center">
  <header class="container center">
           <div class="head__box">
          <span class="head__time-new">min </span>
          <span class="head__time-new">sek</span>
          </div> 
          <div class="head center"> 
          <span class="head__time" id="seconds">00.00</span>
          <button id="start-button" class="nav__button">Начать заново</button>
          </div> 
          </header>
    <div id="card" class="cards">
     ${renderCards(difficulty, shuffledCards)}
       </div>
       </div>
       `
    app.innerHTML = appHtml

    const cardElements = document.querySelectorAll('.card')

    cardElements.forEach((card) => {
        card.addEventListener('click', flipCard)
    })

    memoryTimeoutId = setTimeout(() => {
        cardElements.forEach((card) => {
            card.classList.remove('flipped')
        })
    }, 5000)

    cardElements.forEach((card) => {
        card.classList.add('flipped')
    })

    const startTime = new Date().getTime()
    const headTime = document.querySelector('.head__time')
    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime()
        const elapsedTime = currentTime - startTime
        const minutes = Math.floor(elapsedTime / 60000)
        const seconds = Math.floor((elapsedTime % 60000) / 1000)
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
            seconds,
        ).padStart(2, '0')}`
        headTime.textContent = formattedTime
    }, 1000)

    const startButton = document.getElementById('start-button')
    startButton.addEventListener('click', () => {
        clearInterval(timerInterval)
        clearTimeout(memoryTimeoutId)
        cardElements.forEach((card) => {
            card.classList.remove('flipped')
        })
        initRenderLevelGame(difficulty)
    })

    function renderCards(difficulty, cards) {
        const numCards = getNumCards(difficulty) * 2
        const selectedCards = cards.slice(0, Math.floor(numCards / 2))
        const duplicatedCards = [...selectedCards, ...selectedCards]
        const shuffledCards = shuffle(duplicatedCards)
        let cardsHtml = ''
        for (let i = 0; i < shuffledCards.length; i++) {
            const card = shuffledCards[i]
            const cardHtml = `
    <div data-name="${card.name}"  class="card">
      <div  class="card__back">
        <img src="${card.front}" alt="">
      </div>
      <div class="card__front">
        <img src="${card.back}" alt="">
      </div>
    </div>
  `
            cardsHtml += cardHtml
        }
        return cardsHtml
    }
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}
function getNumCards(difficulty) {
    switch (difficulty) {
        case 'easy':
            return 6
        case 'medium':
            return 12
        case 'hard':
            return 18
        default:
            return 6
    }
}

function flipCard(event) {
    const currentCard = event.currentTarget

    if (
        currentCard.classList.contains('flipped') ||
        document.querySelectorAll('.flipped').length === 2
    ) {
        return
    }

    currentCard.classList.toggle('flipped')

    const flippedCards = document.querySelectorAll('.flipped')

    if (flippedCards.length === 2) {
        const flippedCard1 = flippedCards[0]
        const flippedCard2 = flippedCards[1]

        if (flippedCard1.dataset.cardName === flippedCard2.dataset.cardName) {
            alert('Вы победили!')
        } else {
            alert('Вы проиграли!')
            // setTimeout(() => {
            //     flippedCards.forEach((card) => {
            //         card.classList.toggle('flipped', false)
            //     })
            // }, 1000)
        }
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
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_level_pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/level-pages.js */ "./components/level-pages.js");


(0,_components_level_pages_js__WEBPACK_IMPORTED_MODULE_0__.renderRadioComponents)()

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map