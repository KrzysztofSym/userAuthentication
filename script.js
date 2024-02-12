document.addEventListener("DOMContentLoaded", function() {
    var bubblesDiv = document.querySelector(".bubbles");
    var spans = bubblesDiv.querySelectorAll("span");
    var spanWidth = spans[0].offsetWidth;
    var gap = spanWidth * 1.3;

    for (var i = 0; i < spans.length; i++) {
        spans[i].style.left = i * gap + "px";
    }
});