const container = document.querySelector(".container");

for (let i = 0; i < 255; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", `square ${i}`)
    container.appendChild(square);
}