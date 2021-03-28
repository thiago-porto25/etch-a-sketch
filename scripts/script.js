//preciso saber como fazer os divs ficarem em grid certinho
//aprender como mudar a cor pra sempre depois do mouse passar por cima

const divsContainer = document.querySelector("#divsContainer");
const newGameButton = document.querySelector("button");

newGameButton.addEventListener("click", newGame);

function newGame() {
    let squares;

    while (divsContainer.firstChild) {
        divsContainer.removeChild(divsContainer.lastChild);
    }

    while (isNaN(squares)) {
        squares = prompt("Please, enter a how many squares per side would you like!", "");

        if(squares === undefined) return;
    }

    squares = squares * squares;
    divCreator(squares);
}

function divCreator(squares) {

    for (i = 0; i < squares; i++) {
        const div = document.createElement("div");
        divsContainer.appendChild(div);
    }
}

divCreator(36);