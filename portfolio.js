//----------- COVER HOVER FUNCTIONS ------------

$(document).ready(function(){
    $("#cxmap-project").hover(function(){
        $("#cxmap-cover").removeClass("hide");
    }, function(){
        $("#cxmap-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#orto-project").hover(function(){
        $("#orto-cover").removeClass("hide");
    }, function(){
        $("#orto-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#stemmin-project").hover(function(){
        $("#stemming-cover").removeClass("hide");
    }, function(){
        $("#stemming-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#cmik-project").hover(function(){
        $("#cmik-cover").removeClass("hide");
    }, function(){
        $("#cmik-cover").addClass("hide");
    });
});

//----------- CLICKABLE DIVS FUNCTIONS ------------


document.addEventListener("DOMContentLoaded", function() {
  var cxmapProject = document.getElementById("cxmap-project");
  cxmapProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/cx-map.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var ortoProject = document.getElementById("orto-project");
  ortoProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/orto-botanico-padova.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var stemmingProject = document.getElementById("stemming-project");
  stemmingProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/stemming.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var cmikProject = document.getElementById("cmik-project");
  cmikProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/cmik.html";
  });
});
