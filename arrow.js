

const btnarrow = document.querySelector('.btnarrow');
const content = document.querySelector('.grid-item-text');
const hiddenText = document.querySelector('.hidden-text');

let isTextVisible = false;

btnarrow.addEventListener('click', () => {
  if (isTextVisible) {
    content.style.transform = 'translateY(0)';
    hiddenText.style.display = 'none';
  } else {
    content.style.transform = 'translateY(-50%)';
    hiddenText.style.display = 'block';
  }

  isTextVisible = !isTextVisible;
});// JavaScript Document