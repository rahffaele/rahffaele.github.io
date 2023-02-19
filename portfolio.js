//----------- COVER HOVER FUNCTIONS ------------

$(document).ready(function(){
    $("#first_project").hover(function(){
        $("#cxmap-cover").removeClass("hide");
    }, function(){
        $("#cxmap-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#second_project").hover(function(){
        $("#cmik-cover").removeClass("hide");
    }, function(){
        $("#cmik-cover").addClass("hide");
    });
});

$(document).ready(function(){
    $("#third_project").hover(function(){
        $("#orto-cover").removeClass("hide");
    }, function(){
        $("#orto-cover").addClass("hide");
    });
});

//----------- CLICKABLE DIVS FUNCTIONS ------------


document.addEventListener("DOMContentLoaded", function() {
  var firstProject = document.getElementById("first_project");
  firstProject.addEventListener("click", function() {
    window.location.href = "https://rahffaele.github.io/cx-map.html";
  });
});
