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
  var firstProject = document.getElementById("cxmap-project");
  firstProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/cx-map.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var secondProject = document.getElementById("orto-project");
  secondProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/orto-botanico-padova.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var thirdProject = document.getElementById("cmik-project");
  thirdProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/cmik.html";
  });
});
