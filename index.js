const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // відключити спостереження після першої появи
    }
  });
}, {
  threshold: 0.1 // спрацює, коли видно хоча б 10% елемента
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
