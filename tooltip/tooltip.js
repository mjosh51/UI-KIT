const defaultBtn = document.getElementById('default-button');
const toolTip = document.getElementById('tooltip');
const downBtn = document.getElementById('down');
const upBtn = document.getElementById('up');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

function toggleToolTip() {
  toolTip.classList.toggle('show-tooltip');
}

upBtn.onclick = (e) => {
  e.target.classList.add('bg-btn');
  downBtn.classList.remove('bg-btn');
  leftBtn.classList.remove('bg-btn');
  rightBtn.classList.remove('bg-btn');
  toolTip.classList.toggle('tooltip-up');
  toolTip.classList.remove('tooltip-left');
  toolTip.classList.remove('tooltip-right');
  toolTip.classList.remove('tooltip-down');
  defaultBtn.innerText = 'up pink';
};

leftBtn.onclick = (e) => {
  e.target.classList.add('bg-btn');
  upBtn.classList.remove('bg-btn');
  downBtn.classList.remove('bg-btn');
  rightBtn.classList.remove('bg-btn');
  toolTip.classList.toggle('tooltip-left');
  toolTip.classList.remove('tooltip-up');
  toolTip.classList.remove('tooltip-right');
  toolTip.classList.remove('tooltip-down');
  defaultBtn.innerText = 'left pink';
};

rightBtn.onclick = (e) => {
  e.target.classList.add('bg-btn');
  leftBtn.classList.remove('bg-btn');
  upBtn.classList.remove('bg-btn');
  downBtn.classList.remove('bg-btn');
  toolTip.classList.toggle('tooltip-right');
  toolTip.classList.remove('tooltip-left');
  toolTip.classList.remove('tooltip-up');
  toolTip.classList.remove('tooltip-down');
  defaultBtn.innerText = 'right pink';
};

downBtn.onclick = (e) => {
  e.target.classList.add('bg-btn');
  rightBtn.classList.remove('bg-btn');
  leftBtn.classList.remove('bg-btn');
  upBtn.classList.remove('bg-btn');
  toolTip.classList.toggle('tooltip-down');
  toolTip.classList.remove('tooltip-left');
  toolTip.classList.remove('tooltip-right');
  toolTip.classList.remove('tooltip-up');
  defaultBtn.innerText = 'down pink';
};

defaultBtn.onmouseenter = toggleToolTip;
defaultBtn.onmouseout = toggleToolTip;
