const btn = document.querySelector('.btn');
const text = document.querySelector('.text-container');

btn.addEventListener('click', () => {
  text.classList.toggle('show');
});
