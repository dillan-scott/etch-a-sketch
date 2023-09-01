const DEFAULT_COLOR = "#444444";
const DEFAULT_MODE = "draw";
const DEFAULT_SIZE = 32;

let canvasColor = "var(--primary-light)";
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const resetButton = document.getElementById("resetButton");
const colorPicker = document.getElementById("colorPicker");
const eraseButton = document.getElementById("eraseButton");
const drawButton = document.getElementById("drawButton");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
resetButton.onclick = () => resetGrid();
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
eraseButton.onclick = () => setCurrentMode("erase");
drawButton.onclick = () => setCurrentMode("draw");

function setCurrentMode(mode) {
    if (currentMode === "draw") {
        drawButton.classList.remove("active");
    } else if (currentMode === "erase") {
        eraseButton.classList.remove("active");
    }

    if (mode === "draw") {
        drawButton.classList.add("active");
    } else if (mode === "erase") {
        eraseButton.classList.add("active");
    }

    currentMode = mode;
}

function changeSize(size) {
    currentSize = size;
    updateSizeValue(size);
    reloadGrid();
}

function updateSizeValue(size) {
    sizeValue.textContent = `${size} x ${size}`;
}

function reloadGrid() {
    setCurrentMode(DEFAULT_MODE);
    grid.innerHTML = "";
    createGrid(currentSize);
}

function resetGrid() {
    setCurrentMode(DEFAULT_MODE);
    var cells = grid.childNodes;
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = canvasColor;
    }
}

function changeColour(e) {
    if (currentMode == "draw") {
        e.target.style.backgroundColor = currentColor;
    } else {
        e.target.style.backgroundColor = canvasColor;
    }
    
}

function setCurrentColor(color) {
    currentColor = color;
    setCurrentMode("draw");
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
