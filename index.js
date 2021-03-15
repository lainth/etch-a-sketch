// globals
let gridSize = 16;
const divToCreate = gridSize * gridSize;

//helper
const getColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

// program logic
const container = document.querySelector(".container");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const userEntry = window.prompt("Choose a grid size", "Max. value 100");
  if (userEntry > 100) {
    alert("Number must be within range 1-100");
    const userEntry = window.prompt("Choose a grid size", "Max. value 100");
  } else if (isNaN(userEntry)) {
    alert("You must enter a number only");
    const userEntry = window.prompt("Choose a grid size", "Max. value 100");
  }
});

container.style.cssText =
  "grid-template-columns: repeat(" + gridSize + ", 1fr);";

for (let i = 0; i < divToCreate; i++) {
  const item = document.createElement("div");
  item.classList.add("grid-item");
  container.appendChild(item);
}

const square = document.getElementsByClassName("grid-item");
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseenter", () => {
    square[i].style.cssText = "background-color: #" + getColor();
  });
}
