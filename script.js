// Theme Toggle Functionality
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

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play carousel every 5 seconds
let autoPlayInterval = setInterval(nextSlide, 5000);

// Pause auto-play on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
});

carousel.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(nextSlide, 5000);
});

// Project Data
const projects = [
  {
    title: "ClimitiGate",
    image: "pictures/climitigate.jpg",
    description: "A climate change awareness and action platform...",
    tags: ["Environment", "Web App", "Data Visualization"],
    link: "Climitigate/climitigate.html"
  },
  {
    title: "Ethmo",
    image: "pictures/ethmo.png",
    description: "An ethnography research platform...",
    tags: ["Research", "SaaS", "Collaboration"],
    link: "Ethmo/ethmo.html"
  },
  {
    title: "Medicare",
    image: "pictures/medicare.jpg",
    description: "An ESP32-S2 powered smart health monitoring system with AI-generated health insights via Gemini 2.0 Flash.",
    tags: ["Healthcare", "ESP32", "AI"],
    link: "Medicare/medicare.html"
  }
];

// Open Project Modal
function openProject(index) {
  const project = projects[index];
  const modal = document.getElementById("projectModal");

  document.getElementById("modalImg").src = project.image;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;

  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");

  const btn = modal.querySelector('.modal-button');
  btn.onclick = () => window.location.href = project.link;

  modal.classList.add("show");
}

// Close Project Modal
function closeProject() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("show");
}

// Open Achievements Modal
function openAchievements() {
  const modal = document.getElementById("achievementsModal");
  modal.classList.add("show");
}

// Close Achievements Modal
function closeAchievements() {
  const modal = document.getElementById("achievementsModal");
  modal.classList.remove("show");
}

// Open Contacts Modal
function openContacts() {
  const modal = document.getElementById("contactsModal");
  modal.classList.add("show");
}

// Close Contacts Modal
function closeContacts() {
  const modal = document.getElementById("contactsModal");
  modal.classList.remove("show");
}

// Open Project Form Modal
function openProjectForm() {
  const modal = document.getElementById("projectFormModal");
  modal.classList.add("show");
}

// Close Project Form Modal
function closeProjectForm() {
  const modal = document.getElementById("projectFormModal");
  modal.classList.remove("show");
}

// Open Resume
function openResume() {
  const resumePath = "Jeter's Resume.pdf";
  window.open(resumePath, '_blank');
}

// Open Certificate Modal
function openCert(imgSrc, title, issuer) {
  const modal = document.getElementById("certModal");
  document.getElementById("certModalImg").src = imgSrc;
  document.getElementById("certModalTitle").textContent = title;
  document.getElementById("certModalIssuer").textContent = issuer;
  modal.classList.add("show");
}

// Close Certificate Modal
function closeCert() {
  const modal = document.getElementById("certModal");
  modal.classList.remove("show");
}

// Handle Project Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const projectForm = document.getElementById("projectForm");
  
  if (projectForm) {
    projectForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        contact: document.getElementById("contact").value,
        school: document.getElementById("school").value,
        schoolLevel: document.getElementById("schoolLevel").value,
        projectType: document.getElementById("projectType").value
      };
      
      // Log the form data (for now - can be replaced with actual backend call)
      console.log("Project Inquiry Submitted:", formData);
      
      // Show success message
      alert("Thank you for your inquiry! I'll get back to you soon.");
      
      // Reset form and close modal
      projectForm.reset();
      closeProjectForm();
    });
  }
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  const projectModal = document.getElementById("projectModal");
  const achievementsModal = document.getElementById("achievementsModal");
  const contactsModal = document.getElementById("contactsModal");
  const projectFormModal = document.getElementById("projectFormModal");
  const certModal = document.getElementById("certModal");
  
  if (event.target === projectModal) {
    closeProject();
  }
  if (event.target === achievementsModal) {
    closeAchievements();
  }
  if (event.target === contactsModal) {
    closeContacts();
  }
  if (event.target === projectFormModal) {
    closeProjectForm();
  }
  if (event.target === certModal) {
    closeCert();
  }
});

