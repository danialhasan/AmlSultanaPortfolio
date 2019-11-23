var burger = document.getElementById("burger");
var navContainer = document.getElementById("navBar");
var count = 0;
burger.addEventListener("click", function () {
    if (count == 0) {
        navContainer.style.display = "block"
        count = 1
    } else if (count == 1) {
        navContainer.style.display = "none"
        count = 0
    }
});

function animateMenuBar(x) {
    x.classList.toggle("change");
}
