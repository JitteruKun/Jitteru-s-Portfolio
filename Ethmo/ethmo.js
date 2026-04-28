function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle i');
  
  if (body.classList.contains('light-mode')) {
    // Switch to dark mode
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    themeToggle.className = 'bx bx-moon';
  } else {
    // Switch to light mode
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    themeToggle.className = 'bx bx-sun';
  }
}

// Initialize theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themeToggle = document.querySelector('.theme-toggle i');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.className = 'bx bx-sun';
  } else {
    document.body.classList.remove('light-mode');
    themeToggle.className = 'bx bx-moon';
  }
});

// Medicare Page Carousel
let pcIndex = 0;
const pcSlides = document.querySelectorAll('.pc-slide');
const pcDots = document.querySelectorAll('.pc-dot');

function pcShow(index) {
  pcSlides.forEach(s => s.classList.remove('active'));
  pcDots.forEach(d => d.classList.remove('active'));
  pcSlides[index].classList.add('active');
  pcDots[index].classList.add('active');
}

function pcNext() {
  pcIndex = (pcIndex + 1) % pcSlides.length;
  pcShow(pcIndex);
}

function pcPrev() {
  pcIndex = (pcIndex - 1 + pcSlides.length) % pcSlides.length;
  pcShow(pcIndex);
}

function pcGoto(i) {
  pcIndex = i;
  pcShow(pcIndex);
}

// Auto-play
let pcAuto = setInterval(pcNext, 4000);
const pcCarousel = document.querySelector('.project-carousel');
if (pcCarousel) {
  pcCarousel.addEventListener('mouseenter', () => clearInterval(pcAuto));
  pcCarousel.addEventListener('mouseleave', () => { pcAuto = setInterval(pcNext, 4000); });
}