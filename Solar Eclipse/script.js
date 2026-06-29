const container = document.querySelector('.container');
const moon = document.querySelector('.moon');

let offsetX, offsetY;
let isMouseDown = false;

const moonCenter = {
  x: moon.offsetWidth / 2,
  y: moon.offsetHeight / 2
}

moon.addEventListener('mousedown', (e) => {
  isMouseDown = true;

  offsetX = e.clientX - moon.offsetLeft;
  offsetY = e.clientY - moon.offsetTop;
})

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  moon.style.top = y + 'px';
  moon.style.left = x + 'px';

  let distance = Math.hypot(
    (x + moonCenter.x) - (container.offsetWidth / 2),
    (y + moonCenter.y) - (container.offsetHeight / 2)
  );

  distance = Math.min(distance, 200);

  container.style.background = `
  hsl(197, 55%, ${distance / 4}%)
  `;
})

document.addEventListener('mouseup', () => {
  isMouseDown = false;
})