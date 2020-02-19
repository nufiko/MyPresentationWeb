var expSections = document.querySelectorAll(".experience > section");
var numberOfExpSections = expSections.length;
var sectionMaxHeight = 0;
var sectionWidth = 0;
var expIdToShow = 0;

function getMaxHeight() {
    sectionMaxHeight = 0;
    expSections.forEach(section => {
        section.style.height = "";
        let height = section.getBoundingClientRect().height;
        sectionMaxHeight <  height ? sectionMaxHeight = height : sectionMaxHeight;
    });
};

function getWidth() {
    expSections.forEach(section => {
        section.style.width = "";
    });
    let sizes = expSections[expIdToShow].getBoundingClientRect();
    sectionWidth = sizes.width + 100;
};

function removeStyling() {
    expSections.forEach(section => {
        section.style.border = "none";
        section.style.display = "none";
        section.style.position = "relative";
        section.style.transition = "left 1s";
        section.style.width = sectionWidth - 100 + "px";
        section.style.height = sectionMaxHeight + "px";
    });
}

function distributeSections(id) {
    let middle = document.querySelector("#exp" + id);
    let right = document.querySelector("#exp" +  ((id + 1) % numberOfExpSections));
    let left = document.querySelector("#exp" + ((numberOfExpSections + id - 1) % numberOfExpSections));
    middle.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    middle.style.left = "0px";
    right.style.left = "-" + sectionWidth + "px";
    left.style.left = "-" + sectionWidth + "px";
    middle.style.position = "relative";
    right.style.position = "absolute";
    left.style.position = "absolute";
}

function hideExp(id) {
    var sectionToHide = document.querySelector("#exp" + id);
    sectionToHide.style.display = "none";
}

function changeExp(direction) {
    expIdToShow = (numberOfExpSections + (expIdToShow + direction)) % numberOfExpSections;
    distributeSections(expIdToShow);
}

var leftArrow = document.querySelector("#left");
var rightArrow = document.querySelector("#right");

window.onload = () => {
    getMaxHeight();
    getWidth();
    removeStyling();
    distributeSections(expIdToShow);
};

window.onresize = () => window.onload();

leftArrow.onclick = () => changeExp(-1);
rightArrow.onclick = () => changeExp(1);
