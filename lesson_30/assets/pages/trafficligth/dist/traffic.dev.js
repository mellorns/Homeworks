"use strict";

var colors = ['red', 'yellow', 'green'];
var index = 0;

function nextColor() {
  var liList = document.querySelectorAll('.traffic-ligth li');
  liList.forEach(function (el, ind) {
    if (ind === index) {
      el.style.backgroundColor = colors[ind];
    } else {
      el.style.backgroundColor = 'azure';
    }
  });

  if (index === 2) {
    index = 0;
  } else {
    index++;
  }
}