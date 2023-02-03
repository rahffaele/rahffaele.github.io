var card = document.getElementsByClassName("archive_card");

var posx = getRandomNumber(); 
var posy = getRandomNumber(); 


function newPos() {
  card.style.left = posx;
  card.style.top = posy;
}
