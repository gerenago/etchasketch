//set the number of rows and columns
let gridNumber = 16;
let numOfSquares = gridNumber * gridNumber;
//for each gridNumber, create gridNumber x gridNumber div squares

for (i=0; i<numOfSquares; i++) {
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}
//and then style the container as a grid with gridNumber rows and gridNumber columns
const container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;

//when mouse hovers over square, change color permanently to black
const square = document.querySelectorAll('.square');
square.forEach(square => square.addEventListener("mouseover", function (e) {
    square.style.backgroundColor = "black";
}))
//if reset button is pressed, prompt for # of squares and return as gridNumber
