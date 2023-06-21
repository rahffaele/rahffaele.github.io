let simpleView = false;

function changeView() {
const eyeIcon = document.getElementById("eye-icon");
    const completeViewWidgts = document.getElementsByClassName("complete-view-widg");

    if (simpleView) {
        simpleView = false;
        eyeIcon.src = "../rahdio/assets/generic-icons/eye-open.svg";

        for (let i = 0; i < completeViewWidgts.length; i++) {
            completeViewWidgts[i].classList.remove("hide");
        }
    } else {
        simpleView = true;
        eyeIcon.src = "../rahdio/assets/generic-icons/eye-off.svg";

        for (let i = 0; i < completeViewWidgts.length; i++) {
            completeViewWidgts[i].classList.add("hide");
        }
    }
}

window.addEventListener("load", (event) => {
    changeView();
});

        