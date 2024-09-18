document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuButton = document.getElementById('closeMenu');
  
    // Toggle the mobile menu
    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('-translate-y-full')) {
        mobileMenu.classList.remove('-translate-y-full');
        mobileMenu.classList.add('translate-y-0'); // Slide the menu to the full height
      } else {
        mobileMenu.classList.add('-translate-y-full'); // Hide the menu
        mobileMenu.classList.remove('translate-y-0');
      }
    });
  
    // Close menu function when clicking on the close button
    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-y-full');
      mobileMenu.classList.remove('translate-y-0');
    });
  
    // Close menu when clicking on a nav link
    const navLinks = mobileMenu.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const projectSlides = document.querySelectorAll('.carousel-item');
    const prevSlideBtn = document.getElementById('prevSlide');
    const nextSlideBtn = document.getElementById('nextSlide');
    const carouselInner = document.querySelector('.carousel-inner'); // Container for slides

    let currentProjectIndex = 0;

    function changeProjectSlide(index) {
      // Update current slide
      currentProjectIndex = (index + projectSlides.length) % projectSlides.length;
      const offset = -currentProjectIndex * 100; // Calculate the offset for the current slide
      carouselInner.style.transform = `translateX(${offset}%)`; // Apply the transform to slide the carousel
      
      updateIndicators(currentProjectIndex); // Update indicators
    }

    function updateIndicators(index) {
      document.querySelectorAll('.indicator-button').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }

    function changeImageCarousel(projectIndex, imageIndex) {
      const imagesInner = projectSlides[projectIndex].querySelector('.carousel-images-inner');
      const indicators = projectSlides[projectIndex].querySelectorAll('.indicator-button');
      imagesInner.style.transform = `translateX(-${imageIndex * 100}%)`;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === imageIndex);
      });
    }

    prevSlideBtn.addEventListener('click', function() {
      changeProjectSlide(currentProjectIndex - 1);
    });

    nextSlideBtn.addEventListener('click', function() {
      changeProjectSlide(currentProjectIndex + 1);
    });

    projectSlides.forEach((slide, projectIndex) => {
      const indicators = slide.querySelectorAll('.indicator-button');

      indicators.forEach((indicator, imageIndex) => {
        indicator.addEventListener('click', function() {
          changeImageCarousel(projectIndex, imageIndex);
        });
      });
    });

    // Initialize view
    changeProjectSlide(currentProjectIndex);
});



  
  