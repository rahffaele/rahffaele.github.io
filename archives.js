window.onload = function() {

const archiveCards = document.querySelectorAll('.archive_card');
const cover = document.querySelectorAll('.cover');


// function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to check if a card element overlaps with any other card
function checkOverlap(card) {
  let overlapping = false;

  cards.forEach(otherCard => {
    if (card === otherCard) return;

    const cardRect = card.getBoundingClientRect();
    const otherCardRect = otherCard.getBoundingClientRect();

    overlapping = !(cardRect.right <= otherCardRect.left || 
                   cardRect.left >= otherCardRect.right || 
                   cardRect.bottom <= otherCardRect.top || 
                   cardRect.top >= otherCardRect.bottom);

    if (overlapping) return;
  });

  return overlapping;
}

// loop through each card element
archiveCards.forEach(card => {
  let overlapping = true;
  
  // repeat until no overlapping occurs
  while (overlapping) {
    // generate random values for top and left positions
    const randomTop = getRandomNumber(0, window.innerHeight - card.offsetHeight);
    const randomLeft = getRandomNumber(300, window.innerWidth - card.offsetWidth);
    
    // set the generated random values as top and left positions for the card
    card.style.top = `${randomTop}px`;
    card.style.left = `${randomLeft}px`;
    
    // check if the card overlaps with any other card
    overlapping = checkOverlap(card);
  }
});

$(document).ready(function(){
    $(".archive_card").hover(function(){
        $(".archive_card").addClass("hide");
        $(this).removeClass("hide");
    }, function(){
        $(".archive_card").removeClass("hide");
    });
});

$(document).ready(function(){
    $("#scifi-ui").hover(function(){
        $("#scifi-ui-cover").removeClass("hide");
    }, function(){
        $("#scifi-ui-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#fractals").hover(function(){
        $("#fractal-cover").removeClass("hide");
    }, function(){
        $("#fractal-cover").addClass("hide");
    });
});

function triggerScrolling() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const cursorX = window.event.clientX;
  const cursorY = window.event.clientY;
  const scrollDistance = 50;

  if (cursorX > windowWidth - scrollDistance) {
    window.scrollBy(scrollDistance, 0);
    document.style.cursor = "e-resize"
  }

  if (cursorY > windowHeight - scrollDistance) {
    window.scrollBy(0, scrollDistance);
    document.style.cursor = "s-resize"
  }
}

document.addEventListener("mousemove", triggerScrolling);


};



  
