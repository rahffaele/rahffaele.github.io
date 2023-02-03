var circ = document.getElementsByClassName("archive_card");
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

circ.forEach(function circ(myclass) {
  var newq = newPosition();
  $(myclass).animate({ 
    top: newq[0], left: newq[1] 
    },
    newq[2],   function(){
    circ(myclass);        
  });
});
