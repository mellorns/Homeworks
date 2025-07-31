"use strict";

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.
function determineAgeGroup() {
  var age = +prompt("Enter your age: ");

  if (age < 0 || isNaN(age)) {
    alert("Please, enter a valid age");
    return;
  }

  if (age === 0) {
    return;
  }

  var outputElem = document.getElementById('task1');

  switch (true) {
    case age > 0 && age < 12:
      outputElem.innerText = "You are a child";
      break;

    case age >= 12 && age < 18:
      outputElem.innerText = "You are a teenager";
      break;

    case age >= 18 && age < 60:
      outputElem.innerText = "You are an adult";
      break;

    default:
      outputElem.innerText = "You are a senior";
  }
} // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function specSymbol() {
  var num = +prompt("Enter your number from 0 - 9: ");

  if (num < 0 || num > 9 || isNaN(num)) {
    alert("Please, enter a valid number");
    return;
  }

  var outputElem = document.getElementById('task2');

  switch (num) {
    case 1:
      outputElem.innerText = '!';
      break;

    case 2:
      outputElem.innerText = '@';
      break;

    case 3:
      outputElem.innerText = '#';
      break;

    case 4:
      outputElem.innerText = '$';
      break;

    case 5:
      outputElem.innerText = '%';
      break;

    case 6:
      outputElem.innerText = '^';
      break;

    case 7:
      outputElem.innerText = '&';
      break;

    case 8:
      outputElem.innerText = '*';
      break;

    case 9:
      outputElem.innerText = '(';
      break;

    case 0:
      outputElem.innerText = ')';
      break;

    default:
      outputElem.innerText = 'There are no symbols for this number!';
  }
} // Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function countDiapasonSum() {
  var num1 = +prompt("Enter your first number: ");
  var num2 = +prompt("Enter your second number: ");
  var outputElem = document.getElementById('task3');

  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter a valid numbers!");
  } else if (num1 === num2) {
    alert("Enter different numbers!");
  }

  var index = num1 < num2 ? (num1 - num2) * -1 : num1 - num2;
  var sum = 0;

  if (num1 < num2) {
    for (var i = 0; i <= index; i++) {
      sum += num1 + i;
    }
  } else {
    for (var _i = 0; _i <= index; _i++) {
      sum += num2 + _i;
    }
  }

  outputElem.innerText = "".concat(sum);
} // Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function findMaxDivider() {
  var num1 = +prompt("Enter your first number: ");
  var num2 = +prompt("Enter your second number: ");
  var outputElem = document.getElementById('task4');

  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter a valid numbers!");
    return;
  } else if (num1 === num2) {
    alert("Enter different numbers!");
    return;
  }

  var maxNumber = num1 > num2 ? num1 : num2;
  var maxDivider = 1;

  for (var i = 1; i < maxNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxDivider = i;
    }
  }

  outputElem.innerText = maxDivider;
} // Запитай у користувача число і виведи всі дільники цього числа.


function findAllDividers() {
  var num1 = +prompt("Enter your number: ");
  var outputElem = document.getElementById('task5');

  if (isNaN(num1)) {
    alert("Enter a valid number!");
    return;
  }

  var arr = [];

  for (var i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      arr.push(i);
    }
  }

  outputElem.innerText = arr;
} // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function isNumPolindrom() {
  var num = +prompt("Enter your number: ");

  if (isNaN(num)) {
    alert("Enter a valid number!");
    return;
  }

  var outputElem = document.getElementById('task6');
  var num1 = (num - num % 10000) / 10000;
  var num2 = (num % 10000 - num % 1000) / 1000;
  var num4 = (num % 100 - num % 10) / 10;
  var num5 = num % 10;

  if (num1 === num5 && num2 === num4) {
    outputElem.innerText = "\u0422\u0430\u043A, ".concat(num, " \u043F\u043E\u043B\u0456\u0444\u0456\u043B");
  } else {
    outputElem.innerText = "\u041D\u0456, ".concat(num, " \u043D\u0435 \u043F\u043E\u043B\u0456\u0444\u0456\u043B");
  }
} // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


function countDiscount() {
  var num = +prompt("Enter your sum: ");

  if (isNaN(num)) {
    alert("Enter a valid number!");
    return;
  }

  var outputElem = document.getElementById('task7');
  var discount = 0;

  switch (true) {
    case num >= 200 && num < 300:
      discount = 3;
      break;

    case num >= 300 && num < 500:
      discount = 5;
      break;

    case num >= 500:
      discount = 7;
      break;
  }

  var discountSum = discount * num / 100;
  var totalSum = num - discountSum;
  outputElem.innerText = totalSum;
} // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


function countNumbers() {
  var outputElem = document.getElementById('task8');
  var posNumbers = '';
  var negNumbers = '';
  var zeroNumbers = '';
  var evenNumbers = '';
  var oddNumbers = '';

  for (var i = 0; i < 3; i++) {
    var num = +prompt("Enter 1 number"); // if (num % 2 === 0) {
    //     evenNumbers += 1
    // } else {
    //     oddNumbers += 1
    // }

    switch (true) {
      case num === 0:
        zeroNumbers += num;
        break;

      case num > 0:
        posNumbers += num;
        isEven(num) ? evenNumbers += num : oddNumbers += num;
        break;

      case num < 0:
        negNumbers += num * -1;
        isEven(num) ? evenNumbers += num * -1 : oddNumbers += num * -1;
        break;
    }
  }

  outputElem.innerText = "\u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(posNumbers.length, ", \n    \u0432\u0456\u0434\u02BC\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(negNumbers.length, ", \n    \u043D\u0443\u043B\u0456\u0432: ").concat(zeroNumbers.length, ", \n    \u043F\u0430\u0440\u043D\u0438\u0445: ").concat(evenNumbers.length, ", \n    \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445: ").concat(oddNumbers.length);
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
} // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function seemonthDays() {
  var monday = 'Monday';
  var tuesday = 'Tuesday';
  var wednesday = 'Wednesday';
  var thursday = 'Thursday';
  var friday = 'Friday';
  var saturday = 'Saturday';
  var sunday = 'Sunday';
  var arr = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
  var today = '';
  var num = 1;
  var cond;

  do {
    switch (num) {
      case 1:
        today = monday;
        break;

      case 2:
        today = tuesday;
        break;

      case 3:
        today = wednesday;
        break;

      case 4:
        today = thursday;
        break;

      case 5:
        today = friday;
        break;

      case 6:
        today = saturday;
        break;

      case 7:
        today = sunday;
        break;
    }

    if (num > 7) {
      num = 1;
    }

    cond = confirm("Today is ".concat(today, ". Wanna see next day?"));
    num++;
    console.log(num);
  } while (cond);
} // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


function guessNumber() {
  var num = +prompt("Enter a number from 0 to 100");
  var maxNum = 100;
  var minNum = 0;
  var range = Math.floor(maxNum / 2);
  var quess;

  while (quess !== num) {
    quess = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 ".concat(range, ", \u043C\u0435\u043D\u0448\u0435 ").concat(range, " \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(range, "? \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C >, < \u0430\u0431\u043E =="));

    switch (quess) {
      case '>':
        minNum = range;
        range = Math.floor(minNum + (maxNum - minNum) / 2);
        break;

      case '<':
        maxNum = range;
        range = Math.ceil(minNum + (maxNum - minNum) / 2);
        break;

      case '==':
        quess = num;
        break;

      case null:
        break;
    }

    console.log(range);
  }

  alert("Ваше числа знайдене!");
} // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


function multNumberTable() {
  var outputElem = document.getElementById('mult-table');
  var res = '';

  for (var i = 2; i <= 9; i++) {
    res += "<div>";

    for (var j = 1; j <= 10; j++) {
      res += "<div>".concat(i, " * ").concat(j, " = ").concat(i * j, " </div>");
    }

    res += '</div>';
  }

  outputElem.innerHTML = res;
} // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


function nextDate() {
  var outputElem = document.getElementById('task12');
  var userDay = +prompt("Enter your day");
  var userMonth = +prompt("Enter your month");
  var userYear = +prompt("Enter your year");
  var monthDays;
  var nextDay;
  var nextMonth;
  var nextYear;

  switch (userMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      monthDays = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      monthDays = 30;
      break;

    case 2:
      if (leapYear(userYear)) {
        monthDays = 29;
      } else {
        monthDays = 28;
      }

      break;
  }

  if (userDay > monthDays) {
    alert("Invalid days in a month");
    return;
  }

  if (userDay === monthDays) {
    nextDay = 1;
    nextMonth = userMonth + 1;
    nextYear = userYear;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = userYear + 1;
    }
  } else {
    nextDay = userDay + 1;
    nextMonth = userMonth;
    nextYear = userYear;
  }

  if (nextDay < 10) {
    nextDay = '0' + nextDay;
  }

  if (nextMonth < 10) {
    nextMonth = '0' + nextMonth;
  }

  outputElem.innerText = "".concat(nextDay, ".").concat(nextMonth, ".").concat(nextYear);
}

function leapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}