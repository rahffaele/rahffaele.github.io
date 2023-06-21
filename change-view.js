let simpleView = false;

function changeView() {
const eyeIcon = document.getElementById("eye-icon");
    const completeViewWidgts = document.getElementsByClassName("complete-view-widg");

    if (simpleView) {
        simpleView = false;
        eyeIcon.src = "../rahdio/assets/generic-icons/eye-open.svg";
        document.getElementById("traffic-widget").style.display = "inherit";
        document.getElementById("air-widget").style.display = "inherit";
    
    } else {
        simpleView = true;
        eyeIcon.src = "../rahdio/assets/generic-icons/eye-off.svg";
        document.getElementById("traffic-widget").style.display = "none";
        document.getElementById("air-widget").style.display = "none";
    }
}

window.addEventListener("load", (event) => {
    changeView();
});

        