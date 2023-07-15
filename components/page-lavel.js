export function initRenderLevelGame(difficulty) {
    const appHtml = `<div class="conteiner center">
  <form class="content">
    <h1 class="heading" id="headingLevel">Уровень сложности: ${difficulty}</h1>
    <div class="radio-toolbar">
      
    </div>
    <button type="submit" class="button" id="btnStart">Старт</button>
  </form>
</div>`
    app.innerHTML = appHtml
}
