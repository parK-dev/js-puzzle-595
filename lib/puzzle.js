// /////////////
// // Rehearsal
// /////////////

// 1. Select elements: button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on the button)
button.addEventListener("click", (event) => {
  // 3. Change the DOM (show the hint)
  hint.classList.add("active");
});

// /////////////
// The GAME!
// /////////////

const checkWin = (cells) => {
  const order = [];
  cells.forEach((cell) => {
    order.push(cell.innerText);
  });
  console.log(order.join());
  return (order.join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,");
};

const swapCells = (clickedCell) => {
  const empty = document.querySelector('.empty');
  // copy the innerText of clicked cell to empty cell
  empty.innerText = clickedCell.innerText;
  // add class .empty cell to clicked cell
  clickedCell.classList.add("empty");
  // remove class .empty from empty cell
  empty.classList.remove("empty");
  // remove innerText from clicked cell
  clickedCell.innerText = '';
};

const checkIfEmptyNearby = (clickedCell) => {
  // get cell indexes of clickedCell
  const clickedCellRow = clickedCell.parentElement.rowIndex;
  const clickedCellCol = clickedCell.cellIndex;
  
  // get cell indexes of empty cell
  const empty = document.querySelector(".empty");
  const emptyRow = empty.parentElement.rowIndex;
  const emptyCol = empty.cellIndex;
  // check if next to each other
  const rowDiff = clickedCellRow - emptyRow;
  const colDiff = clickedCellCol - emptyCol;
  // Almost good 👇😅 but...
  // return (Math.abs(rowDiff) == 1 && Math.abs(colDiff) == 1 );
  return (Math.abs(rowDiff) + Math.abs(colDiff)) == 1 ;
};

// 1. Select all element (all title and cell)
const cells = document.querySelectorAll("td");
// 2. Iterate
cells.forEach((cell) => {
  // 3. Listen to an event (click)
  cell.addEventListener("click", (event) => {
    // 4. Check if empty space near the clicked cell
    const clickedCell = event.currentTarget;
    if (checkIfEmptyNearby(clickedCell)) {
      // 5. Swap clicked cell with empty cell
      swapCells(clickedCell);
      // 6. Check if win
      if ( checkWin(cells) ) {
        alert("We won!");
      }
    }
  });
});