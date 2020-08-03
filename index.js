document.addEventListener("DOMContentLoaded", function() {
  let hamburger = document.getElementById("hamburger");
  let hamburgerPanel = document.getElementById("hamburgerPanel");
  hamburger.onclick = function(e) {
    if (hamburgerPanel.classList.contains("hide")) {
      hamburgerPanel.classList.remove("hide");
    } else {
      hamburgerPanel.classList.add("hide");
    }
  };
});
