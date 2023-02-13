const defaultBtn = document.getElementById('default-button');
const popOver = document.getElementById('pop-over');
const downBtn = document.getElementById('down');
const upBtn = document.getElementById('up');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

function togglePopOver() {
  popOver.classList.toggle('pop-over-up');
}

upBtn.onclick = (e) => {
  e.target.classList.add('btn-background');
  downBtn.classList.remove('first-btn');
  leftBtn.classList.remove('btn-background');
  rightBtn.classList.remove('btn-background');
  popOver.classList.remove('pop-over-down');
  popOver.classList.remove('pop-over-right');
  popOver.classList.remove('pop-over-left');
  defaultBtn.onclick = () => popOver.classList.toggle('pop-over-up');
};

leftBtn.onclick = (e) => {
  e.target.classList.add('btn-background');
  downBtn.classList.remove('first-btn');
  upBtn.classList.remove('btn-background');
  rightBtn.classList.remove('btn-background');
  popOver.classList.remove('pop-over-down');
  popOver.classList.remove('pop-over-up');
  popOver.classList.remove('pop-over-right');
  defaultBtn.onclick = () => popOver.classList.toggle('pop-over-left');
};

rightBtn.onclick = (e) => {
  e.target.classList.add('btn-background');
  downBtn.classList.remove('first-btn');
  leftBtn.classList.remove('btn-background');
  upBtn.classList.remove('btn-background');
  popOver.classList.remove('pop-over-down');
  popOver.classList.remove('pop-over-up');
  popOver.classList.remove('pop-over-left');
  defaultBtn.onclick = () => popOver.classList.toggle('pop-over-right');
};

downBtn.onclick = (e) => {
  e.target.classList.add('first-btn');
  upBtn.classList.remove('btn-background');
  leftBtn.classList.remove('btn-background');
  rightBtn.classList.remove('btn-background');
  popOver.classList.remove('pop-over-up');
  popOver.classList.remove('pop-over-left');
  popOver.classList.remove('pop-over-right');
  defaultBtn.onclick = () => popOver.classList.toggle('pop-over-down');
};
defaultBtn.onclick = () => popOver.classList.toggle('pop-over-down');
