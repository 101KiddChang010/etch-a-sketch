
const getContainerDiv = document.getElementById("container-draw");
let oneIncrementedByOne = 1;


for (let x = 0; x < 256; x++) {
    let gridID = "draw";
    gridID += oneIncrementedByOne.toString();

    const createDiv = document.createElement("div");
    createDiv.setAttribute("id",gridID);
    createDiv.classList.add("draw");
    getContainerDiv.appendChild(createDiv);

    document.getElementById(gridID).addEventListener("mouseover", function() {
        document.getElementById(gridID).style.backgroundColor = "black";
    });

    oneIncrementedByOne++;
}

document.getElementById("btn").addEventListener("click", function() {
    let getInputPixel = document.getElementById("inputPixel").value;
    const textMultiplier = document.getElementById("text-multiplier");
    const newTextMultipler = (getInputPixel+"x"+getInputPixel);
    
    if (getInputPixel > 0 && getInputPixel < 101) {
        oneIncrementedByOne = 1;

        textMultiplier.textContent = newTextMultipler;

        document.getElementById("container-draw").style.gridTemplateColumns = "repeat(" + getInputPixel.toString() + ", 1fr)";
        document.getElementById("container-draw").style.gridTemplateRows = "repeat(" + getInputPixel.toString() + ", 1fr)";

        getInputPixel *= getInputPixel;

        while (getContainerDiv.firstChild) {
            getContainerDiv.removeChild(getContainerDiv.lastChild)
        }

        for (let x = 0; x < getInputPixel; x++) {
            let gridID = "draw";
            gridID += oneIncrementedByOne.toString();

            const createDiv = document.createElement("div");
            createDiv.setAttribute("id",gridID);
            createDiv.classList.add("draw");
            getContainerDiv.appendChild(createDiv);

            document.getElementById(gridID).addEventListener("mouseover", function() {
                document.getElementById(gridID).style.backgroundColor = "black";
            });

            oneIncrementedByOne++;
        }
    }
});