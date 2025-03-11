const container = document.querySelector(".container");
let isDrawing = false;

for (let i = 0; i < 255; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", `square ${i}`)
    container.appendChild(square);



    square.addEventListener("mousedown", () => {
        event.preventDefault(); 
        isDrawing = true;
        square.style.backgroundColor = "black";
    });

    square.addEventListener("mousemove", () => {
        if (isDrawing) {
            square.style.backgroundColor = "black";
        }
    });

    square.addEventListener("mouseup", () => {
        isDrawing = false;
    })
}