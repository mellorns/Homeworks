// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.


function determineAgeGroup() {
    const age = +prompt("Enter your age: ")

    if (age < 0 || isNaN(age)) {
        alert("Please, enter a valid age")
        return
    }

    if (age === 0) {
        return
    }

    const outputElem = document.getElementById('task1')

    switch (true) {
        case age > 0 && age < 12:
            outputElem.innerText = "You are a child"
            break
        case age >= 12 && age < 18:
            outputElem.innerText = "You are a teenager"
            break
        case age >= 18 && age < 60:
            outputElem.innerText = "You are an adult"
            break
        default:
            outputElem.innerText = "You are a senior"
    }
}


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function specSymbol() {
    const num = +prompt("Enter your number from 0 - 9: ")

    if (num < 0 || num > 9 || isNaN(num)) {
        alert("Please, enter a valid number")
        return
    }

    const outputElem = document.getElementById('task2')


    switch (num) {
        case 1:
            outputElem.innerText = '!'
            break
        case 2:
            outputElem.innerText = '@'
            break
        case 3:
            outputElem.innerText = '#'
            break
        case 4:
            outputElem.innerText = '$'
            break
        case 5:
            outputElem.innerText = '%'
            break
        case 6:
            outputElem.innerText = '^'
            break
        case 7:
            outputElem.innerText = '&'
            break
        case 8:
            outputElem.innerText = '*'
            break
        case 9:
            outputElem.innerText = '('
            break
        case 0:
            outputElem.innerText = ')'
            break
        default:
            outputElem.innerText = 'There are no symbols for this number!'

    }


}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function countDiapasonSum() {
    const num1 = +prompt("Enter your first number: ")
    const num2 = +prompt("Enter your second number: ")

    const outputElem = document.getElementById('task3')


    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter a valid numbers!")
    } else if (num1 === num2) {
        alert("Enter different numbers!")
    }

    const index = num1 < num2 ? (num1 - num2) * -1 : num1 - num2
    let sum = 0;
    if (num1 < num2) {
        for (let i = 0; i <= index; i++) {
            sum += num1 + i
        }
    } else {
        for (let i = 0; i <= index; i++) {
            sum += num2 + i
        }
    }

    outputElem.innerText = `${sum}`
}


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function findMaxDivider() {
    const num1 = +prompt("Enter your first number: ")
    const num2 = +prompt("Enter your second number: ")

    const outputElem = document.getElementById('task4')

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter a valid numbers!")
        return
    } else if (num1 === num2) {
        alert("Enter different numbers!")
        return
    }

    const maxNumber = num1 > num2 ? num1 : num2

    let maxDivider = 1;

    for (let i = 1; i < maxNumber; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            maxDivider = i
        }
    }

    outputElem.innerText = maxDivider
}

// Запитай у користувача число і виведи всі дільники цього числа.

function findAllDividers() {
    const num1 = +prompt("Enter your number: ")

    const outputElem = document.getElementById('task5')

    if (isNaN(num1)) {
        alert("Enter a valid number!")
        return
    }

    const arr = []

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            arr.push(i)
        }
    }

    outputElem.innerText = arr
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

function isNumPolindrom() {
    const num = +prompt("Enter your number: ")
    if (isNaN(num)) {
        alert("Enter a valid number!")
        return
    }
    const outputElem = document.getElementById('task6')


    const num1 = (num - num % 10000) / 10000


    const num2 = (num % 10000 - num % 1000) / 1000

    const num4 = (num % 100 - num % 10) / 10

    const num5 = num % 10


    if (num1 === num5 && num2 === num4) {
        outputElem.innerText = `Так, ${num} поліфіл`
    } else {
        outputElem.innerText = `Ні, ${num} не поліфіл`
    }

}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

function countDiscount() {
    const num = +prompt("Enter your sum: ")
    if (isNaN(num)) {
        alert("Enter a valid number!")
        return
    }
    const outputElem = document.getElementById('task7')

    let discount = 0;

    switch (true) {
        case num >= 200 && num < 300:
            discount = 3
            break
        case num >= 300 && num < 500:
            discount = 5
            break
        case num >= 500:
            discount = 7
            break
    }

    const discountSum = discount * num / 100

    const totalSum = num - discountSum

    outputElem.innerText = totalSum
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

function countNumbers() {


    const outputElem = document.getElementById('task8')

    let posNumbers = '';

    let negNumbers = '';

    let zeroNumbers = '';

    let evenNumbers = '';

    let oddNumbers = '';

    for (let i = 0; i < 3; i++) {
        let num = +prompt("Enter 1 number")

        // if (num % 2 === 0) {
        //     evenNumbers += 1
        // } else {
        //     oddNumbers += 1
        // }

        switch (true) {
            case num === 0:
                zeroNumbers += num
                break
            case num > 0:
                posNumbers += num;
                isEven(num) ? evenNumbers += num : oddNumbers += num
                break
            case num < 0:
                negNumbers += (num * -1);
                isEven(num) ? evenNumbers += (num * -1) : oddNumbers += (num * -1)
                break
        }
    }

    outputElem.innerText = `Додатніх чисел: ${posNumbers.length}, 
    відʼємних чисел: ${negNumbers.length}, 
    нулів: ${zeroNumbers.length}, 
    парних: ${evenNumbers.length}, 
    непарних: ${oddNumbers.length}`

}

function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function seemonthDays() {


    const monday = 'Monday';
    const tuesday = 'Tuesday';
    const wednesday = 'Wednesday';
    const thursday = 'Thursday';
    const friday = 'Friday';
    const saturday = 'Saturday';
    const sunday = 'Sunday';


    const arr = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]


    let today = '';
    let num = 1;


    let cond;
    do {
        switch (num) {
            case 1:
                today = monday
                break
            case 2:
                today = tuesday
                break
            case 3:
                today = wednesday
                break
            case 4:
                today = thursday
                break
            case 5:
                today = friday
                break
            case 6:
                today = saturday
                break
            case 7:
                today = sunday
                break
        }

        if (num > 7) {
            num = 1
        }
        cond = confirm(`Today is ${today}. Wanna see next day?`)
        num++

        console.log(num);

    } while (cond);

}



// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


function guessNumber() {

    const num = +prompt("Enter a number from 0 to 100")
    let maxNum = 100;
    let minNum = 0;


    let range = Math.floor(maxNum / 2);

    let quess;

    while (quess !== num) {

        quess = prompt(`Ваше число більше ${range}, менше ${range} або дорівнює ${range}? Будь ласка, вкажіть >, < або ==`)


        switch (quess) {

            case '>':
                minNum = range
                range = Math.floor(minNum + (maxNum - minNum) / 2);
                break
            case '<':
                maxNum = range
                range = Math.ceil(minNum + (maxNum - minNum) / 2);
                break
            case '==':
                quess = num
                break
            case null:

                break
        }
        console.log(range);
    }

    alert("Ваше числа знайдене!")
}


// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

function multNumberTable() {
    const outputElem = document.getElementById('mult-table')

    let res = ''

    for (let i = 2; i <= 9; i++) {

        res += `<div>`
        for (let j = 1; j <= 10; j++) {
            res += `<div>${i} * ${j} = ${i * j} </div>`
        }
        res += '</div>'
    }

    outputElem.innerHTML = res

}

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

function nextDate() {
    const outputElem = document.getElementById('task12')


    const userDay = +prompt("Enter your day")
    const userMonth = +prompt("Enter your month")
    const userYear = +prompt("Enter your year")


    let monthDays;
    let nextDay;
    let nextMonth;
    let nextYear;


    switch (userMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            monthDays = 31
            break
        case 4:
        case 6:
        case 9:
        case 11:
            monthDays = 30
            break
        case 2:
            if (leapYear(userYear)) {
                monthDays = 29
            } else {
                monthDays = 28
            }
            break
    }

    if (userDay > monthDays) {
        alert("Invalid days in a month")
        return
    }

    if (userDay === monthDays) {
        nextDay = 1
        nextMonth = userMonth + 1
        nextYear = userYear
        if (nextMonth > 12) {
            nextMonth = 1
            nextYear = userYear + 1
        }
    } else {
        nextDay = userDay + 1
        nextMonth = userMonth
        nextYear = userYear
    }


    if (nextDay < 10) {
        nextDay = '0' + nextDay
    }
    if (nextMonth < 10) {
        nextMonth = '0' + nextMonth
    }


    outputElem.innerText = `${nextDay}.${nextMonth}.${nextYear}`
}


function leapYear(year) {

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    } else {
        return false
    }


}
