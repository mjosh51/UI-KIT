const backwardBtn = document.querySelector('#backward-button');
const forwardBtn = document.querySelector('#forward-button');
const carouselWrapper = document.querySelector('#carousel-wrapper');
const carousel = document.querySelectorAll('#carousel-container');
const title = carouselWrapper.querySelectorAll('#title');
const textBody = carouselWrapper.querySelectorAll('#text-body');

const headings = ['Beatae', 'Consequatur', 'Excepturi', 'Totam'];

const testimonies = [
  'Beatae obcaecati, minima hic, voluptatem voluptas laborum, dignissimos alias magnam nisi culpa soluta enim officia rerum numquam deleniti exercitationem blanditiis ut delectus? Quis autem eaque iste incidunt ducimus eius, obcaecati nam, exercitationem tempora nisi libero eveniet ipsa sit illum voluptate consequatur odio nobis neque. Beatae iusto odit maiores, nulla nam rerum tenetur?',
  'Consequatur nobis voluptate, obcaecati debitis repellat possimus distinctio tenetur nam recusandae mollitia consectetur voluptatum cumque doloribus dignissimos vero nostrum maiores quos nesciunt! Magnam sapiente esse natus illum, dolorem cumque id possimus saepe, accusantium harum facilis quisquam quod illo cupiditate assumenda ullam. Provident non odit at nihil sequi ut veniam rerum cupiditate saepe?',
  'Excepturi obcaecati ad voluptates natus esse tenetur? Autem libero impedit illo quas sapiente iure reiciendis minus odio asperiores vero, commodi aut dolores? Eius repellat veritatis quae voluptas, qui dolor molestias, sequi dolorum, ullam eveniet repudiandae ea ad omnis accusamus corrupti unde sit quis nisi aut? Consequatur, autem et. Doloribus recusandae libero sunt?',
  'Totam quo corporis odio repellendus incidunt ex pariatur maiores ipsa ullam aspernatur impedit earum, aperiam nulla eveniet libero facilis distinctio quibusdam. Totam.Expedita rem consequatur unde aliquid ad quisquam ab soluta iusto dicta repellendus ipsa ex veritatis qui veniam ipsum nisi aliquam facere, labore facilis assumenda modi eveniet in! Dolores, totam ipsam?',
];

title.forEach((t, index) => {
  t.innerText = headings[index];
});

textBody.forEach((t, index) => {
  t.innerText = testimonies[index];
});

function defaultStyle() {
  let first = carousel[0];
  first.setAttribute('style', 'opacity: 1; right: 0;');
}
defaultStyle();

// STOP

let index = 0;
const totalIndex = carousel.length;

function updateBackwardIndex() {
  carousel[index].style.opacity = 1;
  carousel[index].style.right = '0';
  carousel[index + 1].style.opacity = 0;
  carousel[index + 1].style.right = '-100px';
}
function updateForwardIndex() {
  carousel[index].style.opacity = 1;
  carousel[index].style.right = '0';
  carousel[index - 1].style.opacity = 0;
  carousel[index - 1].style.right = '-100px';
}
//
function nextSlide() {
  index = index === totalIndex - 1 ? (index = 0) : index + 1;
  if (carousel[totalIndex - 1].hasAttribute('style')) {
    carousel[totalIndex - 1].removeAttribute('style');
  }
  if (index === 0) {
    carousel[index].style.opacity = 1;
    carousel[index].style.right = 0;
  } else {
    updateForwardIndex();
  }
}

function previousSlide() {
  index = index === 0 ? totalIndex - 1 : index - 1;
  if (carousel[0].hasAttribute('style')) {
    carousel[0].removeAttribute('style');
  }

  if (index === totalIndex - 1) {
    carousel[index].style.opacity = 1;
    carousel[index].style.right = 0;
  } else {
    updateBackwardIndex();
  }
}

backwardBtn.addEventListener('click', previousSlide);
forwardBtn.addEventListener('click', nextSlide);
