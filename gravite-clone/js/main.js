// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Smooth Testimonial Slider with fade
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

showTestimonial(index);

setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 4500);
