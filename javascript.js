//set the number of rows and columns
let gridNumber = 16;
let numOfSquares = gridNumber * gridNumber;
//for each gridNumber, create gridNumber x gridNumber div squares

function addClass () {
    for (i=0; i<numOfSquares; i++) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}
//and then style the container as a grid with gridNumber rows and gridNumber columns
function createGrid () {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
}

//when mouse hovers over square, change color permanently to black
function drawEffect () {
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.addEventListener("mouseover", function (e) {
        square.style.backgroundColor = "black";
    }))
}
//if reset button is pressed, prompt for # of squares and return as gridNumber

const btn = document.querySelector('.reset');
btn.addEventListener("click", function (e) {
    const square = document.querySelectorAll('.square');
    square.forEach(e => e.remove());
    let input = window.prompt("Number of squares per side for new grid");
    gridNumber = parseInt(input)
    numOfSquares = gridNumber * gridNumber;
    addClass(numOfSquares)
    createGrid(gridNumber)
    drawEffect()


})
addClass()
createGrid()
drawEffect()
