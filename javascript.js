//set the number of rows and columns
let gridNumber = 64;
let numOfSquares = gridNumber * gridNumber;
//for each gridNumber, create gridNumber x gridNumber div squares

for (i=0; i<numOfSquares; i++) {
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(square);
}
//and then style the container as a grid with gridNumber rows and gridNumber columns
//if reset button is pressed, prompt for # of squares and return as gridNumber
