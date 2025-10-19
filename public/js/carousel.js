let index = 0;
const imgs = document.querySelectorAll('.sidebar-carousel img');
setInterval(() => {
  imgs.forEach(img => img.style.display = 'none');
  imgs[index].style.display = 'block';
  index = (index + 1) % imgs.length;
}, 3000);
