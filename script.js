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
                        console.log(color);
                        break;
                    case "rnd":
                        color = getRndColor();
                        console.log(color);
                        break;
                    case "shaded":
                        color = shadedColor();
                        console.log(color);
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

function shadedColor() {
    return "blue";
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