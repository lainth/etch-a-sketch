//HELPER
const getColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const colorGrid = () => {
  const square = document.getElementsByClassName("grid-item");
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", () => {
      square[i].style.cssText = "background-color: #" + getColor();
    });
  }
};

const fillGrid = (size) => {
  const gridSquare = size * size;
  for (let i = 0; i < gridSquare; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    container.appendChild(item);
  }
  container.style.cssText = "grid-template-columns: repeat(" + size + ", 1fr);";
};

const delGrid = (elementName) => {
  [...document.getElementsByClassName(elementName)].map((n) => n && n.remove());
};

// LOGIC
const container = document.querySelector(".container");
fillGrid(16);
colorGrid();

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
  delGrid("grid-item");
  fillGrid(userEntry);
  colorGrid();
});
