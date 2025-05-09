// Открытие картинки в полный экран
document.querySelectorAll('.zoom-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style = `
      position: fixed; top: 0; left: 0; width: 100%;
      height: 100%; background-color: rgba(0,0,0,0.8);
      display: flex; justify-content: center; align-items: center;
      z-index: 9999;
    `;
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style = 'max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 0 20px rgba(255,255,255,0.3);';
    modal.appendChild(fullImg);
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});