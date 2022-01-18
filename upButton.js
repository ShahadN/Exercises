window.onload = scrol();
let upButton = document.getElementById('scrollTop');
window.onscroll = function () {
    displayFunction();
};
function displayFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop >650) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}
function scrol () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
