"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Напиши всі можливі варіанти створення функцій.
function someFunc1() {}

var someFunc2 = function someFunc2() {};

var someFunc3 = function someFunc3() {};

function getOutputElem(id) {
  return document.getElementById(id);
}

function getNumbers(amount) {
  var arr = [];

  for (var i = 0; i < amount; i++) {
    arr[i] = +prompt("Enter a number");
  }

  return arr.length === 1 ? arr[0] : arr;
} // Створи функцію, яка буде виводити кількість переданих їй аргументів.


function countOwnAgr() {
  return arguments.length;
}

function countArg(arg) {
  return arg.length;
}

function output() {
  var amoutArg = countArg(arguments);
  return amoutArg;
} // Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.


function isPositive(firstNumber, secondNumber) {
  return firstNumber === secondNumber ? 0 : firstNumber > secondNumber ? 1 : -1;
}

function showOutput() {
  var _getNumbers = getNumbers(2);

  var _getNumbers2 = _slicedToArray(_getNumbers, 2);

  num1 = _getNumbers2[0];
  num2 = _getNumbers2[1];
  var output = getOutputElem("task1");
  var result = isPositive(num1, num2);
  output.innerText = result;
} // Напиши функцію, яка обчислює факторіал переданого їй числа.


function getFactorial(number) {
  var total = 1;

  for (var i = 1; i <= number; i++) {
    total *= i;
  }

  return total;
}

function showOutput2() {
  var num = getNumbers(1);
  var output = getOutputElem("task2");
  var result = getFactorial(num);
  output.innerText = result;
} // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function createNumber(fNumber, sNumber, tNumber) {
  return "".concat(fNumber * 100 + sNumber * 10 + tNumber);
}

function showOutput3() {
  var _getNumbers3 = getNumbers(3),
      _getNumbers4 = _slicedToArray(_getNumbers3, 3),
      num1 = _getNumbers4[0],
      num2 = _getNumbers4[1],
      num3 = _getNumbers4[2];

  var output = getOutputElem("task3");
  var result = createNumber(num1, num2, num3);
  output.innerText = result;
} // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function caclRectArea(fSide) {
  var sSide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fSide;
  if (sSide === null || sSide === 0) sSide = fSide;
  return fSide * sSide;
}

function showOutput4() {
  var _getNumbers5 = getNumbers(2),
      _getNumbers6 = _slicedToArray(_getNumbers5, 2),
      num1 = _getNumbers6[0],
      num2 = _getNumbers6[1];

  var output = getOutputElem("task4");
  var result = caclRectArea(num1, num2);
  output.innerText = result;
} // Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}

function showOutput5() {
  var num1 = getNumbers(1);
  var output = getOutputElem("task5");
  var result = isPerfectNumber(num1);
  output.innerText = result ? 'Так' : "Ні";
} // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


function isPerfectNumberRange(from, to) {
  var perfectNumbers = '';

  for (var i = from; i <= to; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers += "".concat(i, " ");
    }
  }

  return perfectNumbers;
}

function showOutput6() {
  var _getNumbers7 = getNumbers(2),
      _getNumbers8 = _slicedToArray(_getNumbers7, 2),
      num1 = _getNumbers8[0],
      num2 = _getNumbers8[1];

  var output = getOutputElem("task6");
  var result = isPerfectNumberRange(num1, num2);
  output.innerText = result;
}