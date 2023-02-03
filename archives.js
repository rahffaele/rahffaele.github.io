var cars = document.getElementsByClassName("archive_card");
var newq;
let h,w,nh,nw,s; 

function newPosition(){   
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  s = Math.floor(Math.random()*1000) + 500
  return [nh,nw,s];       
}

card.forEach(function card(myclass) {
  var newq = newPosition();
  $(myclass).animate({ 
    top: nh, left: nw; 
    },
    newq[2],   function(){
    card(myclass);        
  });
});
