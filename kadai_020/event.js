const addBtn = document.getElementById('btn');

const addText = document.getElementById('add-text');

const nonText = document.getElementById('text');

addBtn.addEventListener('click', () => {
  const childList =document.createElement("div");
  addText.textContent = "ボタンをクリックしました";
  nonText.style.display = 'none';
});