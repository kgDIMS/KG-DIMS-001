
// Wait for page to fully load
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const introText = document.querySelector(".intro-text");
  const logo = document.querySelector(".logo");
  const navbar = document.querySelector(".navbar");
  const content = document.querySelector(".content");

  // Make sure all main elements start hidden
  if (navbar) navbar.style.opacity = "0";
  if (content) content.style.opacity = "0";

  // Step 1: Fade in the intro text
  setTimeout(() => {
    if (introText) {
      introText.style.opacity = "1";
      introText.style.transform = "translateY(0)";
    }
  }, 500);

  // Step 2: Show logo after text appears
  setTimeout(() => {
    if (logo) {
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }
  }, 2000);

  // Step 3: Hide intro and show main site
  setTimeout(() => {
    if (intro) intro.style.display = "none";

    // Fade in navbar and content
    if (navbar) navbar.style.opacity = "1";
    if (content) content.style.opacity = "1";
  }, 4000);
});

// Navbar hover animation (move up slightly on hover)
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "translateY(-3px)";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "translateY(0)";
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
