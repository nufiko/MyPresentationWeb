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
    sectionWidth = document.querySelector(".experience").getBoundingClientRect().width - 60;
};

function removeStyling() {
    expSections.forEach(section => {
        section.style.border = "none";
        section.style.position = "relative";
        section.style.transition = "left 1s";
        section.style.display = "inline-block";
        section.style.width = sectionWidth + "px";
        section.style.height = sectionMaxHeight + "px";
        section.style.marginRight = "30px";
    });
    document.querySelector(".experience nav").style.clear = "both";
}

function distributeSections(id) {
    let offset = sectionWidth + 30;
    expSections.forEach(section => section.style.left = (-1) * id * offset + "px");
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
