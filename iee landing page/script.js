
const testimonySlides = document.querySelectorAll('.testimonial-slide');


let currentSlide = 0;


function showCurrentSlide() {
  testimonySlides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonySlides.length;
  showCurrentSlide();
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonySlides.length) % testimonySlides.length;
  showCurrentSlide();
}


document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);

showCurrentSlide();

