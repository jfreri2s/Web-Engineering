function showDiv(x) {
    var x = document.getElementById('task' + x);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}