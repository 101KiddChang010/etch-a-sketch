
const getContainerDiv = document.getElementById("container");


for (let x = 0; x < 256; x++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("draw");
    getContainerDiv.appendChild(createDiv);
}
