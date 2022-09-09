
//global variables
const getContainerDiv = document.getElementById("container-draw");
let oneIncrementedByOne = 1;

//creates initial 16x16 grid 
for (let x = 0; x < 256; x++) {
    
    //creates an ID number for each grid pixel
    let gridID = "draw";
    gridID += oneIncrementedByOne.toString();

    //creates grid; adds class & unique ID for each grid; appends grid div as a child to parent
    const createDiv = document.createElement("div");
    createDiv.setAttribute("id",gridID);
    createDiv.classList.add("draw");
    getContainerDiv.appendChild(createDiv);

    //event listener for mouse hovering over grid
    document.getElementById(gridID).addEventListener("mouseover", function() {
        document.getElementById(gridID).style.backgroundColor = "black";
    });

    oneIncrementedByOne++;
}

//event listener for clicking submit button
document.getElementById("btn").addEventListener("click", function() {
    
    //variables grabbed
    let getInputPixel = document.getElementById("inputPixel").value;
    const textMultiplier = document.getElementById("text-multiplier");
    //creates new text for text-multiplier
    const newTextMultipler = (getInputPixel+"x"+getInputPixel);
    
    //only activates if user text input is between 1-100
    if (getInputPixel > 0 && getInputPixel < 101) {
        
        //redeclare to have a value of 1
        oneIncrementedByOne = 1;

        //changes text content of text-multiplier
        textMultiplier.textContent = newTextMultipler;

        //changes style of grid column and rows to accomodate new pixel size
        document.getElementById("container-draw").style.gridTemplateColumns = "repeat(" + getInputPixel.toString() + ", 1fr)";
        document.getElementById("container-draw").style.gridTemplateRows = "repeat(" + getInputPixel.toString() + ", 1fr)";

        //gets total amount of pixels 
        getInputPixel *= getInputPixel;

        //deletes all child elements of containerdiv
        while (getContainerDiv.firstChild) {
            getContainerDiv.removeChild(getContainerDiv.lastChild)
        }

        //creates grid based on user text input
        for (let x = 0; x < getInputPixel; x++) {
            
            //creates an ID number for each grid pixel
            let gridID = "draw";
            gridID += oneIncrementedByOne.toString();

            //creates grid; adds class & unique ID for each grid; appends grid div as a child to parent
            const createDiv = document.createElement("div");
            createDiv.setAttribute("id",gridID);
            createDiv.classList.add("draw");
            getContainerDiv.appendChild(createDiv);

            //event listener for mouse hovering over grid
            document.getElementById(gridID).addEventListener("mouseover", function() {
                document.getElementById(gridID).style.backgroundColor = "black";
            });

            oneIncrementedByOne++;
        }
    }
});