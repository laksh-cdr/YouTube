const inp = document.getElementById('inp');

document.addEventListener('click', () => {
  if (inp === document.activeElement) {
    let value = inp.value;
    
    if (inp.value.startsWith('$')) {
      value = inp.value.slice(1);
    }
    inp.value = '$' + value;
  }
});

// Making the button go away from mouse cursor

const btn = document.getElementById('btn');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const btnRect = btn.getBoundingClientRect();
  
  if (inp.value !== '' && x >= btnRect.left-20 && x <= btnRect.right+20 && y >= btnRect.top-20 && y <= btnRect.bottom+20) {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    // if (newX + btnRect.width > window.innerWidth) {
    //   newX = window.innerWidth - btnRect.width;
    // }
    // if (newY + btnRect.height > window.innerHeight) {
    //   newY = window.innerHeight - btnRect.height;
    // }

    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
  }
})