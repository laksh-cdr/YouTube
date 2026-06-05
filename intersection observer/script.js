const container = document.querySelectorAll('.item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
}, {})

container.forEach(item => {
  observer.observe(item);
})