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
            cell.addEventListener("mouseover", () => cell.style.background = color);
        }
        gridContainer.appendChild(row);
    }
}
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    let allRows = document.querySelectorAll(".row");
    allRows.forEach(row => {
        gridContainer.removeChild(row);
    });
    createGrid(prompt("What size you want your grid?"));
}

function isInputCorrect(gridNmbr) {
    if (isNaN(gridNmbr) || gridNmbr < 1 || gridNmbr > 100) return false;
    return true;
}