/******************************************
 *  Author : Emir Selimovic   
 *  Created On : Wed Jan 08 2020
 *  File : script.js
 *******************************************/

const gridContainer = document.querySelector(".gameContainer")
let gridContainerHeight = gridContainer.clientHeight;

let color = "black";

createGrid(16);

function createGrid(gridNmbr) {
    if (!isInputCorrect(gridNmbr)) {
        createGrid(prompt("Please use numbers between 0 and 101"))
        return;
    }
    for (let x = 0; x < gridNmbr; x++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.height = (gridContainerHeight / gridNmbr) + "px";

        for (let y = 0; y < gridNmbr; y++) {
            let cell = document.createElement("div");
            cell.className = "gridcell";
            row.appendChild(cell);
            cell.addEventListener("mouseover", function () {
                switch (colorChoice) {
                    case "black":
                        color = "black";
                        break;
                    case "rnd":
                        color = getRndColor();
                        break;
                    case "shaded":
                        color = shadedColor(cell);
                        break;

                }
                cellColor(cell, color);
            });
        }
        gridContainer.appendChild(row);
    }
}

function getRndColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

function shadedColor(cell) {
    if (!cell.style.background.includes("rgba")) {
        console.log("doesnt include");
        return "rgba(0,0,0,0.1)";
    }
    let alpha = cell.style.background.split(',')[3];
    alpha = alpha.substr(0, alpha.length - 1);
    alpha = +alpha;
    alpha += 0.1;
    if (alpha >= 1) alpha = 0.99; // -> so ugly (for some reason setting rgba to alpha 1 it gets set to rgb without alpha)
    console.log(alpha);
    return "rgba(0,0,0," + alpha + ")";
}

function cellColor(cell, color) {
    cell.style.background = color;
}

///
//get button for clearing grid
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    let allRows = document.querySelectorAll(".row");
    allRows.forEach(row => {
        gridContainer.removeChild(row);
    });
    createGrid(prompt("What size you want your grid?"));
}
///


function isInputCorrect(gridNmbr) {
    if (isNaN(gridNmbr) || gridNmbr < 1 || gridNmbr > 100) return false;
    return true;
}

var rad = document.getElementsByName("colorchoice");
var colorChoice = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].onclick = function () {
        (colorChoice) ? console.log(""): null;
        if (this !== colorChoice) {
            colorChoice = this;
        }
        colorChoice = this.value;
    };
}