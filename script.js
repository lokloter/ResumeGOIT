const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('enlarged');
  });
});