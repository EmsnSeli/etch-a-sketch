/******************************************
 *  Author : Emir Selimovic   
 *  Created On : Wed Jan 08 2020
 *  File : script.js
 *******************************************/

const gridContainer = document.querySelector(".gameContainer")
let gridContainerHeight = gridContainer.clientHeight;

function createGrid(gridNmbr) {
    for (let x = 0; x < gridNmbr; x++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.height = (gridContainerHeight / gridNmbr) + "px";

        for (let y = 0; y < gridNmbr; y++) {
            let cell = document.createElement("div");
            cell.className = "gridcell";
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

}