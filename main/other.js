var Timer;

function setTimer() {
    Timer = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapper").style.display = "inline-block";
}
