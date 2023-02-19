var boardSize = 10;
var numLinks = 10;
var linkLocations = [];


window.onload = function() {
  function generateBoard() {
  var gameBoard = document.getElementById("gameBoard");
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", handleCellClick);
      gameBoard.appendChild(cell);
    }
    gameBoard.appendChild(document.createElement("br"));
  }
  placeLinks();
}

function placeLinks() {
  for (var i = 0; i < numLinks; i++) {
    var row = Math.floor(Math.random() * boardSize);
    var col = Math.floor(Math.random() * boardSize);
    if (!linkLocations.includes(row + "," + col)) {
      linkLocations.push(row + "," + col);
    }
  }
}

function handleCellClick(event) {
  var cell = event.target;
  var row = cell.dataset.row;
  var col = cell.dataset.col;
  if (linkLocations.includes(row + "," + col)) {
    window.location.href = "https://example.com";
  } else {
    cell.classList.add("clicked");
  }
}

generateBoard();
};
