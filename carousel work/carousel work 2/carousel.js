const BackwardBtn = document.querySelector('#backward-button');
const ForwardBtn = document.querySelector('#forward-button');
const CarouselWrapper = document.querySelector('#carousel-wrapper');
const carousel = document.querySelectorAll('#carousel-container');

const testimonies = [
  'Beatae obcaecati, minima hic, voluptatem voluptas laborum, dignissimos alias magnam nisi culpa soluta enim officia rerum numquam deleniti exercitationem blanditiis ut delectus? Quis autem eaque iste incidunt ducimus eius, obcaecati nam, exercitationem tempora nisi libero eveniet ipsa sit illum voluptate consequatur odio nobis neque. Beatae iusto odit maiores, nulla nam rerum tenetur?',
  'Consequatur nobis voluptate, obcaecati debitis repellat possimus distinctio tenetur nam recusandae mollitia consectetur voluptatum cumque doloribus dignissimos vero nostrum maiores quos nesciunt! Magnam sapiente esse natus illum, dolorem cumque id possimus saepe, accusantium harum facilis quisquam quod illo cupiditate assumenda ullam. Provident non odit at nihil sequi ut veniam rerum cupiditate saepe?',
  'Excepturi obcaecati ad voluptates natus esse tenetur? Autem libero impedit illo quas sapiente iure reiciendis minus odio asperiores vero, commodi aut dolores? Eius repellat veritatis quae voluptas, qui dolor molestias, sequi dolorum, ullam eveniet repudiandae ea ad omnis accusamus corrupti unde sit quis nisi aut? Consequatur, autem et. Doloribus recusandae libero sunt?',
  'Totam quo corporis odio repellendus incidunt ex pariatur maiores ipsa ullam aspernatur impedit earum, aperiam nulla eveniet libero facilis distinctio quibusdam. Totam.Expedita rem consequatur unde aliquid ad quisquam ab soluta iusto dicta repellendus ipsa ex veritatis qui veniam ipsum nisi aliquam facere, labore facilis assumenda modi eveniet in! Dolores, totam ipsam?',
];

carousel.forEach((c, index) => {
  c.innerText = testimonies[index];
});

function toggleAnime() {
  CarouselWrapper.removeAttribute('style');
}

let selected = false;
BackwardBtn.addEventListener('click', () => {
  const lastChild = CarouselWrapper.lastElementChild;

  if (!CarouselWrapper.hasAttribute('style')) {
    // CarouselWrapper.setAttribute(
    //   'style',
    //   'transform: translateX(40px); opacity: 0.6; transition: all 0.2s linear',
    // );
  }
  CarouselWrapper.classList.add('animate');
  lastChild.classList.add('animate-carousel');
});

CarouselWrapper.addEventListener('animationend', () => {
  const lastChild = CarouselWrapper.lastElementChild;
  // CarouselWrapper.removeAttribute('style');
  CarouselWrapper.classList.remove('animate');
  lastChild.classList.remove('animate-carousel');
  CarouselWrapper.prepend(lastChild);
});

ForwardBtn.addEventListener('click', () => {
  const firstChild = CarouselWrapper.firstElementChild;
  CarouselWrapper.append(firstChild);
});
