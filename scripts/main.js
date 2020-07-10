window.onload = function () {
    var btn = document.getElementById("navbar-toggler-btn");
    var target = btn.getAttribute("data-target").substr(1);
    var elem = document.getElementById(target);
    btn.addEventListener("click", function () {
        if (elem.classList.contains("show")) {
            elem.classList.remove("show");
        } else {
            elem.classList.add("show");
        }
    });
};