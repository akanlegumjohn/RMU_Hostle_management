// Code to toggle navbar on smaller devices
const navbarToggle = document.querySelector(".navbar--toggle");
const navbarItems = document.querySelector(".navbar--items");
const closeBtn = document.querySelector(".close--button");

navbarToggle.addEventListener("click", function () {
  navbarItems.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
  navbarItems.classList.remove("active");
  navbarToggle.classList.remove("active");
});


// Scroll Effect of the navbar and the target section
// Get all the nav links
const navLinks = document.querySelectorAll('.nav--link');

// Function to handle the scrolling and update the active link
function handleNavScroll() {
  const scrollPosition = window.scrollY;

  // Loop through each section and check if it's in the viewport
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all nav links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Find the corresponding nav link based on the section ID and add the active class
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav--link[href="#${sectionId}"]`);
      activeLink.classList.add('active');
    }
  });
}

// Add event listener for scroll event
window.addEventListener('scroll', handleNavScroll);



// typewriter effect code

const words = ["faster   ", "easier   "];
let currentWordIndex = 0;
let currentWord = words[currentWordIndex];
let isDeleting = false;
let typingSpeed = 800;
let deleteSpeed = 200;
let cursorBlinkSpeed = 10;

function typewriterEffect() {
  const typewriterElement = document.getElementById("typewriter");
  const word = currentWord;
  let currentText = typewriterElement.textContent;
  let newText = "";

  if (isDeleting) {
    newText = word.slice(0, currentText.length - 1);
    typewriterElement.textContent = newText;
    typingSpeed = deleteSpeed;
  } else {
    newText = word.slice(0, currentText.length + 1);
    typewriterElement.textContent = newText;
    typingSpeed = 150;
  }

  if (!isDeleting && newText === word) {
    isDeleting = true;
    typingSpeed = cursorBlinkSpeed;
  } else if (isDeleting && newText === "") {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentWord = words[currentWordIndex];
    typingSpeed = 150;
  }

  setTimeout(typewriterEffect, typingSpeed);
}

typewriterEffect();

