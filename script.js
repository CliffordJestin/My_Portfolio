AOS.init();
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get the element you want to animate
const profileSection = document.getElementById('profile');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // Define the start and end of the transition range
  const startScroll = 150; // When the effect should start
  const endScroll = 380;   // When the effect should be at full strength
  const scrollRange = endScroll - startScroll;

  // Calculate the progress of the scroll within the defined range
  let scrollProgress = (scrollY - startScroll) / scrollRange;

  // Clamp the value between 0 and 1
  if (scrollProgress < 0) {
    scrollProgress = 0;
  }
  if (scrollProgress > 1) {
    scrollProgress = 1;
  }

  // Calculate the new opacity and blur values
  // Opacity: from 1 to 0.1
  const newOpacity = 1 - (scrollProgress * 0.9); // 1 - (1 * 0.9) = 0.1
  // Blur: from 0px to 5px
  const newBlur = scrollProgress * 5; // 1 * 5 = 5

  // Apply the new values directly to the element's style
  profileSection.style.opacity = newOpacity;
  profileSection.style.filter = `blur(${newBlur}px)`;
});