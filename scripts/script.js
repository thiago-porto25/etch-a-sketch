const divsContainer = document.querySelector("#divsContainer");
const newGameButton = document.querySelector("button");

newGameButton.addEventListener("click", newGame);



function newGame() {
    let squares;

    while (divsContainer.firstChild) {
        divsContainer.removeChild(divsContainer.lastChild);
    }

    while (isNaN(squares) || squares > 100) {
        squares = prompt("Please, enter how many squares per side would you like!", "");

        if (squares === undefined) return;
    }

    squares *= squares;
    divCreator(squares);
}



function divCreator(squares) {
    divsContainer.style.setProperty("--grid-height", Math.sqrt(squares));
    divsContainer.style.setProperty("--grid-length", Math.sqrt(squares));

    for (i = 0; i < squares; i++) {
        const div = document.createElement("div");
        divsContainer.appendChild(div);

        if (Math.floor(Math.random()*10) === 5) {
            div.addEventListener("mouseover", () => div.style.backgroundColor = "black");
        }
        else {
            div.addEventListener("mouseover", () => div.style.backgroundColor = colorCreator());
        }
    }
}

function colorCreator() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

divCreator(256);