const drawingSize = 960;
const container = document.querySelector(".container");

let isDrawing = false;

// initial grid
createGrid();

function createGrid(gridSize = 16) {
    const grid = document.createElement("div");
    const squareSize = drawingSize / gridSize;

    for (let i = 0; i < gridSize**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", `square ${i}`);
        square.setAttribute("style", `flex: 1 0 calc(100% / ${gridSize}); border: calc(32px / ${gridSize}) solid #eeeeee;`);
        container.appendChild(square);
    
        square.addEventListener("mousedown", (event) => {
            event.preventDefault(); 
            isDrawing = true;
            square.style.backgroundColor = "#3D3D3D";
        });
    
        square.addEventListener("mousemove", () => {
            if (isDrawing) {
                square.style.backgroundColor = "#3D3D3D";
            }
        });
    
        square.addEventListener("mouseup", () => {
            isDrawing = false;
        })
    }
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", () => {
    let sizeEntered = parseInt(prompt("Enter grid size n"));

    if (Number.isNaN(sizeEntered)) {
        return;
    }
    
    let newGridSize = sizeEntered > 100 ? 100 : sizeEntered;
    deleteGrid();
    createGrid(newGridSize);

});
