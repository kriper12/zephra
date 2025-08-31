// Scroll slider buttons
function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  const scrollAmount = 220; // width of card + gap
  slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Drag / swipe functionality for sliders
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events
  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile swipe
  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
});

// Lazy load images
const images = document.querySelectorAll('.movie-card img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});
