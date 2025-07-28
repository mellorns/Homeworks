"use strict";

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var accurateNumber = +(0.1 + 0.2).toFixed(1);
var accurateNumber1 = (0.1 * 10 + 0.2 * 10) / 10; // Що повернуть вирази:

2 && 0 && 3; // 0

2 || 0 || 3; // 2

2 && 0 || 3; // 3
// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var str1 = '1';
var num1 = 2;
var res1 = parseInt(str1) + num1; // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

function countFiles() {
  var sizeUSB = 1024;
  var sizeFile = 820;
  var sizeUserUSB = +prompt("Enter your USB memory");
  var res2 = Math.floor(sizeUserUSB * sizeUSB / sizeFile);
  document.getElementById("task1").value = res2;
} // Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


function getChocolate() {
  var moneyUser = +prompt('Enter the sum of money');
  var chocolatePrice = +prompt('Enter the price of one chocolate');
  var chocolateAmount = countChocolate(moneyUser, chocolatePrice);
  var moneyUserLeft = countMoney(moneyUser, chocolateAmount, chocolatePrice);
  document.getElementById('task2_1').innerText = "".concat(chocolateAmount);
  document.getElementById('task2_2').innerText = "".concat(moneyUserLeft);
}

function countMoney(moneyUser, chocolateAmount, chocolatePrice) {
  return moneyUser - chocolateAmount * chocolatePrice;
}

function countChocolate(moneyUser, chocolatePrice) {
  return Math.floor(moneyUser / chocolatePrice);
} // Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


function reversedNumber() {
  var number = +prompt('Enter three-digit number');
  var num1 = (number - number % 100) / 100;
  var num2 = (number % 100 - number % 10) / 10;
  var num3 = number % 10;
  var reversedNumber = '' + num3 + num2 + num1;
  document.getElementById('task3').innerText = "".concat(reversedNumber);
} // Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


var opts = "";

for (var i = 1; i <= 12; i++) {
  opts += "<option value='".concat(i, "'>").concat(i, "</option>");
}

document.getElementById('selectDuration').innerHTML = opts;

function culcEarnings() {
  var yearRate = 5;
  var duration = 2;
  var money = prompt("Enter money to lend:");
  var currentRate = yearRate / 12 * duration;
  var result = (money / 100 * currentRate).toFixed(4);
  document.getElementById('task4').innerText = "".concat(result);
} // Modifed function


function culcEarningsM() {
  var duration = +document.getElementById('selectDuration').value;
  var money = +document.getElementById('moneyLend').value;
  var yearRate = chooseRate(duration);
  var monthRate = yearRate / 12;

  for (var _i = 0; _i < duration; _i++) {
    money += money / 100 * monthRate;
  }

  document.getElementById('task4_M').innerText = "".concat(money.toFixed(5));
}

function chooseRate(duration) {
  duration = +document.getElementById('selectDuration').value;
  var objRates = {
    1: 5,
    2: 5,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8.2,
    9: 9,
    10: 10,
    11: 11,
    12: 12
  };
  document.getElementById('rate').innerText = "".concat(objRates[duration], "%");
  return objRates[duration];
}