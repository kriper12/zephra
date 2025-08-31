function scrollSlider(id, direction) {
      const slider = document.getElementById(id);
      const scrollAmount = 220; // width of card + gap
      slider.scrollBy({left: direction * scrollAmount, behavior: 'smooth'});
    }
