
const getContainerDiv = document.getElementById("container");
let OneIncrementedByOne = 1;


for (let x = 0; x < 256; x++) {
    let gridID = "draw";
    gridID += OneIncrementedByOne.toString();
    const createDiv = document.createElement("div");
    
    createDiv.setAttribute("id",gridID);
    createDiv.classList.add("draw");

    getContainerDiv.appendChild(createDiv);

    document.getElementById(gridID).addEventListener("mouseout", function() {
        document.getElementById(gridID).style.backgroundColor = "black";
    })

    OneIncrementedByOne++;
}

