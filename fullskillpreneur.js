/* ====== Educational Packages Carousel ====== */
const track = document.getElementById('track');
const cards = document.querySelectorAll('.plan-card');
const total = cards.length;
let index = 0;

const dotsContainer = document.getElementById('dots');
cards.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function moveSlide(step) {
  index = (index + step + total) % total;
  updateSlide();
}

function goToSlide(i) {
  index = i;
  updateSlide();
}

function updateSlide() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

let autoScroll = setInterval(() => moveSlide(1), 3000);

const carousel = document.getElementById('carousel');
let startX = 0;

carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  clearInterval(autoScroll);
});

carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) moveSlide(1);
  if (endX - startX > 50) moveSlide(-1);
  autoScroll = setInterval(() => moveSlide(1), 3000);
});

/* ====== Testimonials Slider ====== */
let tIndex = 0;
const slides = document.getElementById('slides');
const tTotal = slides.children.length;

function showSlide() {
  slides.style.transform = `translateX(${-tIndex * 100}%)`;
}

function nextSlide() {
  tIndex = (tIndex + 1) % tTotal;
  showSlide();
}

function prevSlide() {
  tIndex = (tIndex - 1 + tTotal) % tTotal;
  showSlide();
}

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

// Currently, all accordion functionality is handled by Bootstrap’s JS.
// If you want to add custom FAQ or Support Section interactivity, put it here.

// Example: Console message on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("FAQ & Support Page Loaded");
});

