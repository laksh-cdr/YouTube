const pupil = document.querySelector('.pupil');
const eye = document.querySelector('.eye');
const eyeWidth = eye.offsetWidth;

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX - innerWidth/2;
  const mouseY = e.clientY - innerHeight/2;

  const distance = Math.hypot(mouseX, mouseY);
  if (distance > eyeWidth/2) {
    const angle = Math.atan2(mouseY, mouseX);
    const multiplier = (eyeWidth/4) - 6;;

    pupil.style.transition = 'none';
    pupil.style.transform = `translate(${Math.cos(angle)*multiplier}px, ${Math.sin(angle) * multiplier}px)`;
  } else {
    pupil.style.transition = 'transform 0.1s ease';
    pupil.style.transform = 'translate(0, 0)';
  }
})