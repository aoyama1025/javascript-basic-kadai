const btn = document.getElementById('btn');
const text = document.getElementById('text');
const addtext = document.getElementById('add-text');

btn.addEventListener('click', () => {
  setTimeout(() => {
  const childList = document.createElement('div');
  addtext.textContent = "ボタンをクリックしました";
  text.style.display = 'none';
  },2000);
  });