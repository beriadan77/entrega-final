// Scroll page script
window.addEventListener("scroll", function() {
  const scrollPos = window.pageYOffset;

  // Get all elements with the "parallax" class
  const parallaxElements = document.querySelectorAll(".parallax");

  // Loop through all the parallax elements and apply the effect
  for (let i = 0; i < parallaxElements.length; i++) {
    const element = parallaxElements[i];
    const speed = element.getAttribute("data-speed");
    const yPos = -scrollPos * speed;

    // Set the background position of the element
    element.style.backgroundPositionY = `${yPos}px`;
  }
});
