const divsContainer = document.querySelector("#divsContainer");
const newGameButton = document.querySelector("button");

newGameButton.addEventListener("click", newGame);

function newGame() {
    let squares;

    while (divsContainer.firstChild) {
        divsContainer.removeChild(divsContainer.lastChild);
    }

    while (isNaN(squares) || squares > 100) {
        squares = prompt("Please, enter a how many squares per side would you like!", "");

        if (squares === undefined) return;
    }

    squares = squares * squares;
    divCreator(squares);
}

function divCreator(squares) {
    divsContainer.style.setProperty("--grid-height", Math.sqrt(squares));
    divsContainer.style.setProperty("--grid-length", Math.sqrt(squares));

    for (i = 0; i < squares; i++) {
        const div = document.createElement("div");
        divsContainer.appendChild(div);
        div.addEventListener("mouseover", () => div.style.backgroundColor = "black");
    }
}

divCreator(256);