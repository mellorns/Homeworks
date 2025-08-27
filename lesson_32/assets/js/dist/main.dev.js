"use strict";

var myChart = new EasyPieChart(document.querySelector('.chart'), {
  barColor: '#13E28D',
  trackColor: '#B7BACD',
  scaleColor: '#dfe0e0',
  scaleLength: 0,
  lineCap: 'round',
  lineWidth: 3,
  trackWidth: 1,
  size: 75,
  rotate: 0,
  // in degrees
  animate: {
    duration: 1000,
    enabled: true
  },
  easing: function easing(x, t, b, c, d) {
    // easing function
    t = t / (d / 2);

    if (t < 1) {
      return c / 2 * t * t + b;
    }

    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
});
$(function () {
  $("#tabs").tabs();
});