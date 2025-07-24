const userInput = document.getElementById('userInput');
const sentBtn = document.getElementById('sentBtn');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const count = document.getElementById('count');
const colorBtn = document.getElementById('colorBtn');
const sentColor = document.getElementById('sentColor');

let liveCount = 0;
count.innerHTML = liveCount;

sentBtn.addEventListener('click', () => {
  liveCount = parseInt(userInput.value) || 0;
  count.innerHTML = liveCount;
});

sentColor.addEventListener('click', () => {
  count.style.color = colorBtn.value;
});

incrementBtn.addEventListener('click', () => {
  liveCount++;
  count.innerHTML = liveCount;
});

decrementBtn.addEventListener('click', () => {
  liveCount--;
  count.innerHTML = liveCount;
});
