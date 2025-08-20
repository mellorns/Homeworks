"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
// і наступні методи для роботи з цим об'єктом:
// 1) Метод, який виводить на екран інформацію про автомобіль.
// 2) Додавання ім’я водія у список
// 3) Перевірка водія на наявність його ім’я у списку
// 4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// 5) Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
var listCar = document.getElementById('car-propetries');
var task1 = document.getElementById('task1');
var car = {
  manufacturer: "Lotus",
  model: "Exige",
  year: 2022,
  avgSpeed: 150,
  engine: 3.5,
  fuel100: 10,
  drivers: ["Maks"],
  showProperties: function showProperties() {
    Object.entries(this).forEach(function (el) {
      if (['string', 'number', 'object'].includes(_typeof(el[1]))) listCar.innerHTML += "<li>".concat(el[0], ": ").concat(el[1], "</li>");
    });
  },
  addDriver: function addDriver() {
    var driver = prompt("Enter the driver's name");
    this.drivers.push(driver);
  },
  isDriver: function isDriver() {
    var driver = prompt("Enter the driver's name");
    return this.drivers.includes(driver) ? alert("Так") : alert("Ні");
  },
  countTimeToPoint: function countTimeToPoint() {
    var distance = 0;
    var temp = true;

    do {
      distance = +prompt("Enter the distance");

      if (isNaN(distance)) {
        alert('Wrong distance, plese enter only munbers');
      } else {
        temp = false;
      }
    } while (temp);

    var time = distance / this.avgSpeed;
    var fuel = this.fuel100 / 100 * distance;
    var breaks = Math.floor(time / 4);
    task1.innerText = "\u0427\u0430\u0441 \u0434\u043E \u0442\u043E\u0447\u043A\u0438: ".concat(time + breaks, " \u0442\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430 ").concat(fuel);
  }
}; // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21:00: 15», а не «20: 59: 75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var task2 = document.getElementById('task2');
var input2 = document.getElementById('input2');
var time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

function showTime(obj) {
  task2.innerHTML = "\n    ".concat(obj.hours < 10 ? '0' + obj.hours : obj.hours, ".").concat(obj.minutes < 10 ? '0' + obj.minutes : obj.minutes, ".").concat(obj.seconds < 10 ? '0' + obj.seconds : obj.seconds);
}

function addSeconds() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var prevSec = timeToSec(obj);
  var newTime = secToTime(sec + prevSec);
  return newTime;
}

function addHours(obj, hour) {
  var prevSec = timeToSec(obj);
  var newTime = secToTime(hour * 3600 + prevSec);
  return newTime;
}

function addMinutes(obj, min) {
  var prevSec = timeToSec(obj);
  var newTime = secToTime(min * 60 + prevSec);
  return newTime;
}

function secToTime(sec) {
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor((sec - hours * 3600) / 60);
  var seconds = sec - (hours * 3600 + minutes * 60);
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function timeToSec(_ref) {
  var _ref$hours = _ref.hours,
      hours = _ref$hours === void 0 ? 0 : _ref$hours,
      _ref$minutes = _ref.minutes,
      minutes = _ref$minutes === void 0 ? 0 : _ref$minutes,
      _ref$seconds = _ref.seconds,
      seconds = _ref$seconds === void 0 ? 0 : _ref$seconds;
  return hours * 3600 + minutes * 60 + seconds;
}

function askAddShowSeconds() {
  var sec = +prompt("Enter seconds to add");
  var newTime = addSeconds(time, sec);
  showTime(newTime);
}

function askAddShowMinutes() {
  var min = +prompt("Enter minutes to add");
  var newTime = addMinutes(time, min);
  showTime(newTime);
}

function askAddShowHours() {
  var hour = +prompt("Enter hours to add");
  var newTime = addHours(time, hour);
  showTime(newTime);
} // Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1) Складання 2-х об'єктів-дробів.
// 2) Віднімання 2-х об'єктів-дробів.
// 3) Множення 2-х об'єктів-дробів.
// 4) Ділення 2-х об'єктів-дробів.
// 5) Скорочення об'єкта-дробу.


var fractional1 = document.getElementById('fractional1');
var fractional2 = document.getElementById('fractional2');
var fractional3 = document.getElementById('fractional3');
var fractional4 = document.getElementById('fractional4');
var outputElem = document.getElementById('task3');
var drob = {
  numerator: 1,
  denominator: 1
};
var operateDrob = {
  getNumbers: function getNumbers() {
    return [{
      numerator: +fractional1.value,
      denominator: +fractional2.value
    }, {
      numerator: +fractional3.value,
      denominator: +fractional4.value
    }];
  },
  mutualDivider: function mutualDivider(num1, num2) {
    var maxNumber = num1 > num2 ? num1 : num2;
    var minDivider = maxNumber;

    while (true) {
      if (minDivider % num1 === 0 && minDivider % num2 === 0) {
        break;
      }

      minDivider++;
    }

    return minDivider;
  },
  showResult: function showResult(func) {
    var res = func();
    outputElem.innerText = res.toFixed(3);
  },
  sumDrobs: function sumDrobs() {
    var _this$getNumbers = this.getNumbers(),
        _this$getNumbers2 = _slicedToArray(_this$getNumbers, 2),
        oper1 = _this$getNumbers2[0],
        oper2 = _this$getNumbers2[1];

    var minDivider = this.mutualDivider(oper1.denominator, oper2.denominator);
    var firstMult = minDivider / oper1.denominator;
    var secondMult = minDivider / oper2.denominator;
    var sum = (oper1.numerator * firstMult + oper2.numerator * secondMult) / minDivider;
    console.log(sum);
    return sum;
  },
  subtraction: function subtraction() {
    var _this$getNumbers3 = this.getNumbers(),
        _this$getNumbers4 = _slicedToArray(_this$getNumbers3, 2),
        oper1 = _this$getNumbers4[0],
        oper2 = _this$getNumbers4[1];

    var minDivider = this.mutualDivider(oper1.denominator, oper2.denominator);
    var firstMult = minDivider / oper1.denominator;
    var secondMult = minDivider / oper2.denominator;
    var sum = (oper1.numerator * firstMult - oper2.numerator * secondMult) / minDivider;
    return sum;
  },
  multiplication: function multiplication() {
    var _this$getNumbers5 = this.getNumbers(),
        _this$getNumbers6 = _slicedToArray(_this$getNumbers5, 2),
        oper1 = _this$getNumbers6[0],
        oper2 = _this$getNumbers6[1];

    return oper1.numerator * oper2.numerator / (oper1.denominator * oper2.denominator);
  },
  division: function division() {
    var _this$getNumbers7 = this.getNumbers(),
        _this$getNumbers8 = _slicedToArray(_this$getNumbers7, 2),
        oper1 = _this$getNumbers8[0],
        oper2 = _this$getNumbers8[1];

    return oper1.numerator * oper2.denominator / (oper1.denominator * oper2.numerator);
  },
  reduction: function reduction(oper) {
    var divider = 1;

    for (var i = 1; i < oper.denominator; i++) {
      if (oper.numerator % i === 0 && oper.denominator % i === 0) {
        divider = i;
      }
    }

    return {
      numerator: oper.numerator / divider,
      denominator: oper.denominator / divider
    };
  }
}; // console.log(operateDrob.reduction({ numerator: 3, denominator: 6 }, { numerator: 2, denominator: 1 }));

console.log(operateDrob.getNumbers());