window.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("popUpBtn");
    let popUp = document.getElementById("popUp");
    let close = document.getElementById("close");

    btn.onclick = () => popUp.classList.remove("hidden");
    close.onclick = () => popUp.classList.add("hidden");

});