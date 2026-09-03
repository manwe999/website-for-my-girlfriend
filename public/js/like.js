document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const span = btn.querySelector('span');
    span.textContent = parseInt(span.textContent) + 1;
    btn.querySelector('i').classList.replace('fa-regular', 'fa-solid');
  });
});
