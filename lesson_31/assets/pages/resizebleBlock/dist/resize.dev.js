"use strict";

document.getElementById('drag_point').addEventListener('mousedown', function (e) {
  var pBlock = e.target.parentElement;

  function resizeBlock(e) {
    var x = e.pageX;
    var y = e.pageY;
    pBlock.style.width = x + 'px';
    pBlock.style.height = y + 'px';
  }

  function stopResize() {
    document.removeEventListener('mouseup', resizeBlock);
    document.removeEventListener('mousemove', resizeBlock);
  }

  document.addEventListener('mousemove', resizeBlock);
  document.addEventListener('mouseup', stopResize);
});