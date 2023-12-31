import { initRenderLevelGame } from './page-level'

export function renderRadioComponents() {
    const app = document.getElementById('app') as HTMLInputElement
    const appHtml = `
<header class="header center">
<form class="header__form ">
    <h1 class="header__name">
        Выбери сложность
    </h1>
        <div class="header__toolbar"> 
            <input type="radio" id="radio1" name="difficulty" value="easy">
            <label for="radio1">1</label>
            
            <input type="radio" id="radio2" name="difficulty" value="medium">
            <label for="radio2">2</label>
            
            <input type="radio" id="radio3" name="difficulty" value="hard">
            <label for="radio3">3</label>
        </div> 
    <button id="game-button" class="header__button">Старт</button>
</form>
</header>
`

    app.innerHTML = appHtml

    const levelData = {
        difficulty: 'medium',
        numCards: 12,
    }

    const difficultyInputs = document.querySelectorAll(
        '.header__toolbar input[name="difficulty"]',
    )

    const gameButton = document.getElementById(
        'game-button',
    ) as HTMLInputElement

    function levelNumCards() {
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
            levelData.difficulty = (input as HTMLInputElement).value
            levelNumCards()
        })
    })

    gameButton.addEventListener('click', () => {
        levelGame(levelData.difficulty)
    })

    function levelGame(difficulty: string) {
        initRenderLevelGame(difficulty)
    }
}
