const dropdownContainer = document.getElementById('dropdown-container');
const menuButton = document.getElementById('menu');
const container = document.getElementById('container');
const modal = document.getElementById('modal');
const alert = document.getElementById('alert');
const navBar = document.getElementById('navbar');
const carousel = document.getElementById('carousel');

// Tooltip elements
const tooltipIcon = document.getElementById('tooltip-icon');
const tooltipDrop = document.getElementById('tooltip-drop');

// Popover elements
const popOverIcon = document.getElementById('popover-icon');
const popOver = document.getElementById('popover');
const popOverDown = document.getElementById('popover-down');
const popOverLeft = document.getElementById('popover-left');
const popOverRight = document.getElementById('popover-right');
const popOverUp = document.getElementById('popover-up');

const mainBody = document.getElementById('main-body');
const toolTipDown = document.getElementById('tooltip-down');
const toolTipUp = document.getElementById('tooltip-up');
const toolTipLeft = document.getElementById('tooltip-left');
const toolTipRight = document.getElementById('tooltip-right');

//Add First and Second frame to DOM
const iframe = document.createElement('iframe');
iframe.setAttribute('class', 'tooltip-frame');
mainBody.appendChild(iframe);
const iframe2 = document.createElement('iframe');
iframe2.setAttribute('class', 'tooltip-frame-second');
iframe2.setAttribute('id', 'tooltip-frame');
mainBody.appendChild(iframe2);

function Dropdown() {
  dropdownContainer.classList.toggle('show');
  container.classList.toggle('remove-shadow');
}

function defaultFrame() {
  //First frame
  iframe.src = './tooltip/down/down.html';

  //Second iframe
  iframe2.style.visibility = 'visible';
  iframe2.src = 'https://www.thiscodeworks.com/embed/638b7a5ef3febd0015d3b6bf';
}

defaultFrame();

toolTipUp.onclick = () => {
  iframe.setAttribute('src', './tooltip/up/up.html');
  iframe2.src = 'https://www.thiscodeworks.com/embed/638b8478f3febd0015d3b6c2';
  const framesec = document.getElementById('tooltip-frame');

  console.log(framesec);
};

toolTipLeft.onclick = () => {
  iframe.setAttribute('src', './tooltip/left/left.html');
  iframe2.src = 'https://www.thiscodeworks.com/embed/638b7522f3febd0015d3b6bb';
};

toolTipRight.onclick = () => {
  iframe.setAttribute('src', './tooltip/right/right.html');
  iframe2.src = 'https://www.thiscodeworks.com/embed/638b69c6f3febd0015d3b6b8';
};

toolTipDown.onclick = () => {
  iframe.setAttribute('src', './tooltip/down/down.html');
  iframe2.src = 'https://www.thiscodeworks.com/embed/638b7a5ef3febd0015d3b6bf';
};

tooltipIcon.onclick = (e) => {
  tooltipDrop.classList.toggle('hide-tooltip-drop');
  e.target.classList.toggle('rotate-icon');
};

popOverIcon.onclick = (e) => {
  popOver.classList.toggle('hide-tooltip-drop');
  e.target.classList.toggle('rotate-icon');
};

popOverDown.onclick = () => {
  iframe.src = './popover/down/down.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/638c80c864a84f001579a491';
};

popOverLeft.onclick = () => {
  iframe.src = './popover/left/left.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/638c8bf364a84f001579a49d';
};

popOverRight.onclick = () => {
  iframe.src = './popover/right/right.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/638c8e9564a84f001579a49f';
};

popOverUp.onclick = () => {
  iframe.src = './popover/up/up.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/638c990a64a84f001579a4a2';
};

modal.onclick = () => {
  iframe.src = './modal/index.html';
  iframe.style.height = '35rem';
  iframe2.src = 'https://www.thiscodeworks.com/embed/6391ddca9e30ca0015ef9bbe';
};

alert.onclick = () => {
  iframe.src = './alert/index.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/6391ea409e30ca0015ef9bcb';
};

navBar.onclick = () => {
  iframe.src = './navbar/index.html';
  iframe2.src = 'https://www.thiscodeworks.com/embed/6391eca19e30ca0015ef9bcf';
};

//menu button
popOverIcon.onclick = (e) => {
  popOver.classList.toggle('menu');
  e.target.classList.toggle('menu');
};

menuButton.addEventListener('click', Dropdown);
