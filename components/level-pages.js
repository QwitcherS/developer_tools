import { initRenderLevelGame } from './page-level.js'

export function renderRadioComponents() {
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

    function levelNumCards(gameData) {
        switch (gameData.difficulty) {
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
            levelNumCards()
        })
    })

    gameButton.addEventListener('click', () => {
        levelGame(levelData.difficulty)
    })

    function levelGame(difficulty) {
        console.log(`Запуск игры с уровнем сложности "${difficulty}"`)
        initRenderLevelGame(difficulty)
    }
}
