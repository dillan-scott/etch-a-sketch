const grid = document.getElementById("grid");


function changeColour(e) {
    e.target.style.backgroundColor = "#457b9d";
}


function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        var cell = document.createElement("div");
        // cell.style.border = "1px solid grey";
        cell.addEventListener("mouseover", changeColour);
        cell.addEventListener("mousedown", changeColour);
        grid.appendChild(cell);
    }
}

createGrid(16);