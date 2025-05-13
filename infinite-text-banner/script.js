// I N I T
document.addEventListener("DOMContentLoaded", () => {
  repeatTicker();
  console.log("Document Ready");
});

// F U N C T I O N S

// text banner
const speed = 50;

// get our html container
let target = document.querySelector(".banner");
let original_html = target.innerHTML;
let new_html = "<div class='ticker-items'>" + original_html + "</div>";

// repeat elements to fill page width
function repeatTicker() {
  target.innerHTML = new_html; // Reset the ticker content

  let bannerWidth = target.offsetWidth; // get banner width
  let tickerWidth = document.querySelector(".ticker-items").offsetWidth; // get elements width

  // how often do we need to repeat the ticker items?
  let repeatCount = Math.ceil(bannerWidth / tickerWidth) + 1; // +1 for safety

  // add the repeated items
  let repeatedHTML = new_html.repeat(repeatCount);
  target.innerHTML = repeatedHTML;

  // animation duration
  let initDuration = tickerWidth / speed;

  // gsap
  gsap.to(".ticker-items", {
    duration: initDuration,
    xPercent: -100,
    ease: "none",
    repeat: -1, // Repeat infinitely
  });
}

// recalculate on resize
window.addEventListener("resize", repeatTicker);
