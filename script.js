const DEFAULT_COLOR = '#444'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

const grid = document.getElementById("grid");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const resetButton = document.getElementById("resetButton");
const colorPicker = document.getElementById('colorPicker')

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
resetButton.onclick = () => resetGrid();
colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function changeSize(size) {
    currentSize = size;
    updateSizeValue(size);
    reloadGrid();
}

function updateSizeValue(size) {
    sizeValue.textContent = `${size} x ${size}`;
}

function reloadGrid() {
    grid.innerHTML = "";
    createGrid(currentSize);
}

function resetGrid() {
    var cells = grid.childNodes;
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "var(--primary-light)";
    }
}

function changeColour(e) {
    e.target.style.backgroundColor = currentColor;
}

function setCurrentColor(color) {
    currentColor = color;
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

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}