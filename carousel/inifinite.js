const backward = document.getElementById('control-btn-left');
const forward = document.getElementById('control-btn-right');
const carousel = document.querySelector('.carousel');

let index;

forward.onclick = () => {
  index = -1;
  carousel.style.transform = 'translateX(-25%)';
  carousel.style.justifyContent = 'flex-start';
};

backward.onclick = () => {
  if (index === -1) {
    index = 1;
    carousel.appendChild(carousel.firstElementChild);
  }

  carousel.style.transform = 'translateX(-25%)';
  carousel.style.justifyContent = 'flex-end';
};

carousel.addEventListener('transitionend', () => {
  if (index === -1) {
    carousel.appendChild(carousel.firstElementChild);
  } else if (index === 1) {
    carousel.prepend(carousel.lastElementChild);
  }
  carousel.style.transition = 'none';
  carousel.style.transform = 'translate(0)';
  setTimeout(function () {
    carousel.style.transition = 'transform 0.1s ease-in-out';
  });
});
