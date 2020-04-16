
let labelEl = document.querySelector('.button');

labelEl.classList.add('hide');

console.log(shadesEl.classList.contains('hide')); // true

coolButton.addEventListener('click', () => {
  labelEl.classList.toggle('hide');
});
