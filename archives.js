var card = document.getElementsByClassName("archive_card");

var posx = Math.floor(Math.random()*(innerWidth-200));
var posy = Math.floor(Math.random()*(innerHeight-200));


card.style.left = posx + 'px';
card.style.top = posy + 'px';

