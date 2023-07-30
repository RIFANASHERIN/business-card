const mainContainer = document.querySelector("#main");
const locationsContainer = document.querySelector("#locations");
const locationButton = document.querySelector("#location-button");
const closeButton = document.querySelector("#close-button");
var isMain = true;

function toggleLocationDisplay() {
  if (isMain) {
    mainContainer.classList.remove("flex");
    mainContainer.classList.add("hidden");
    locationsContainer.classList.remove("hidden");
    locationsContainer.classList.add("fade-in");
    locationsContainer.classList.add("flex");
  } else {
    mainContainer.classList.remove("hidden");
    mainContainer.classList.add("flex");
    mainContainer.classList.add("fade-in");
    locationsContainer.classList.remove("flex");
    locationsContainer.classList.add("hidden");
  }
  isMain = !isMain;
}

locationButton.addEventListener("click", toggleLocationDisplay);
closeButton.addEventListener("click", toggleLocationDisplay);
