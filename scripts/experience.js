var expSections = document.querySelectorAll(".experience > section");
var numberOfExpSections = expSections.length;
var sectionMaxHeight = 0;

function getMaxHeight() {
    expSections.forEach(section => {
        let height = section.getBoundingClientRect().height
        sectionMaxHeight <  height ? sectionMaxHeight = height : sectionMaxHeight;
    });
};

function hideAllSections() {
    expSections.forEach(element => element.style.display = "none");
}

function showAllSections () {
    expSections.forEach( element => element.style.display = "");
    getMaxHeight();
}

var leftArrow = document.querySelector("#left");
var rightArrow = document.querySelector("#right");

var expIdToShow = 0;

function showExp(id) {
    showAllSections();
    hideAllSections();
    var sectionToShow = document.querySelector("#exp" + id);
    sectionToShow.style.display = "";
    sectionToShow.style.height = sectionMaxHeight + "px";
}

function hideExp(id) {
    var sectionToHide = document.querySelector("#exp" + id);
    sectionToHide.style.display = "none";
}

function changeExp(direction) {
    expIdToShow = Math.abs((expIdToShow + direction) % numberOfExpSections);
    showExp(expIdToShow);
}

window.onload = () => showExp(expIdToShow);
window.onresize = () => showExp(expIdToShow);

leftArrow.onclick = () => changeExp(-1);
rightArrow.onclick = () => changeExp(1);
