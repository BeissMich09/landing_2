document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.getElementById("hamburger");
  var hamburgerPanel = document.getElementById("hamburgerPanel");
  hamburger.onclick = function(e) {
    if (hamburgerPanel.classList.contains("hide")) {
      hamburgerPanel.classList.remove("hide");
    } else {
      hamburgerPanel.classList.add("hide");
    }
  };
});
