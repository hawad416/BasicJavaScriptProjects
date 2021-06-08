'use strict';

var btn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

btn.forEach(function (b) {
  b.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//tutorial solution ( same bascially just using for loop)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      console.log('bye moda');
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
