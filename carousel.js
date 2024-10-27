console.log('carousel.js loaded');
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOMContentLoaded event fired');

  let currentSlide = 0;

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.athlete');
    const totalSlides = slides.length;

    // Update currentSlide based on index bounds
    if (index >= totalSlides) {
      currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
      currentSlide = totalSlides - 1; // Loop to the last slide
    } else {
      currentSlide = index;
    }

    // Log currentSlide for debugging
    console.log(`Current Slide Index: ${currentSlide}`);

    const slider = document.querySelector('.athlete-slider');
    const slideWidth = slides[0].offsetWidth; // Width of each slide
    console.log(`Slide Width: ${slideWidth}`); // Log slide width for debugging

    // Apply the translation to show the current slide
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  }

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  }

  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  // Check if buttons are correctly selected
  if (!nextButton) {
    console.error('Next button not found');
  } else {
    nextButton.addEventListener('click', nextSlide);
  }

  if (!prevButton) {
    console.error('Previous button not found');
  } else {
    prevButton.addEventListener('click', prevSlide);
  }

  console.log('Event listeners attached');

  // Initial display of the first slide with a small delay to ensure DOM rendering
  setTimeout(() => {
    showSlide(0);
  }, 50);
});