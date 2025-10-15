// Wait for page to load fully
document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".intro-text");
  const logo = document.querySelector(".logo");
  const navbar = document.querySelector(".navbar");
  const content = document.querySelector(".content");

  // Step 1: Fade in the intro text
  setTimeout(() => {
    introText.style.opacity = "1";
    introText.style.transform = "translateY(0)";
  }, 500);

  // Step 2: Show logo after text
  setTimeout(() => {
    logo.style.opacity = "1";
    logo.style.transform = "scale(1)";
  }, 2000);

  // Step 3: Hide intro and show main site
  setTimeout(() => {
    introText.style.opacity = "0";
    logo.style.opacity = "0";
    document.querySelector(".intro").style.display = "none";

    // Fade in navbar and content
    navbar.style.opacity = "1";
    content.style.opacity = "1";
  }, 4000);
});

// Navbar hover animation
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "translateY(-3px)";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "translateY(0)";
  });
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
