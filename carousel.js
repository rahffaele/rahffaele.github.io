const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');

const prevBtn = document.createElement('button');
prevBtn.classList.add('carousel-btn', 'prev');
prevBtn.innerText = 'Prev';
carousel.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.classList.add('carousel-btn', 'next');
nextBtn.innerText = 'Next';
carousel.appendChild(nextBtn);

let currentIndex = 0;
let itemWidth = items[0].offsetWidth;
let containerWidth = itemWidth * items.length;
container.style.width = `${containerWidth}px`;

function moveCarousel() {
  container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex === items.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  moveCarousel();
  updateButtons();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  moveCarousel();
  updateButtons();
});

updateButtons();
