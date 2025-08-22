"use strict";

document.addEventListener('keydown', function (e) {
  if (document.querySelector('.card-text')) {
    if (e.key === 'e' && e.ctrlKey) {
      var div = document.querySelector('.card-text');
      var textArea = document.createElement('textarea');
      textArea.id = 'textarea';
      textArea.value = div.innerText;
      div.replaceWith(textArea);
    }
  }
});
document.addEventListener('keydown', function (e) {
  if (document.getElementById('textarea')) {
    if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      var textArea = document.getElementById('textarea');
      var div = document.createElement('div');
      div.classList.add('card-text');
      div.innerText = textArea.value;
      textArea.replaceWith(div);
    }
  }
});