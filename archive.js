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
    //window.location.href = "https://example.com";
    cell.classList.add("clicked_link");
  } else {
    var adjacentLinkCount = getAdjacentLinkCount(row, col);
    if (adjacentLinkCount > 0) {
      cell.innerText = adjacentLinkCount;
    }
    cell.classList.add("clicked");
  }
}

generateBoard();

function getAdjacentLinkCount(row, col) {
  var linkCount = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var checkRow = parseInt(row) + i;
      var checkCol = parseInt(col) + j;
      if (checkRow >= 0 && checkRow < boardSize && checkCol >= 0 && checkCol < boardSize) {
        if (linkLocations.includes(checkRow + "," + checkCol)) {
          linkCount++;
        }
      }
    }
  }
  return linkCount;
}
};
