// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const accurateNumber = +(0.1 + 0.2).toFixed(1)
const accurateNumber1 = (0.1 * 10 + 0.2 * 10) / 10


// Що повернуть вирази:

2 && 0 && 3 // 0

2 || 0 || 3 // 2

2 && 0 || 3 // 3

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const str1 = '1';
const num1 = 2;

const res1 = parseInt(str1) + num1;

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


function countFiles() {
    const sizeUSB = 1024;

    const sizeFile = 820;

    const sizeUserUSB = +prompt("Enter your USB memory")

    const res2 = Math.floor(sizeUserUSB * sizeUSB / sizeFile)

    document.getElementById("task1").value = res2

}






// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

function getChocolate() {

    const moneyUser = +prompt('Enter the sum of money')
    const chocolatePrice = +prompt('Enter the price of one chocolate')

    const chocolateAmount = countChocolate(moneyUser, chocolatePrice)

    const moneyUserLeft = countMoney(moneyUser, chocolateAmount, chocolatePrice)

    document.getElementById('task2_1').innerText = `${chocolateAmount}`
    document.getElementById('task2_2').innerText = `${moneyUserLeft}`

}

function countMoney(moneyUser, chocolateAmount, chocolatePrice) {
    return moneyUser - (chocolateAmount * chocolatePrice)
}

function countChocolate(moneyUser, chocolatePrice) {
    return Math.floor(moneyUser / chocolatePrice)
}




// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).



function reversedNumber() {
    const number = +prompt('Enter three-digit number')

    const num1 = (number - number % 100) / 100

    const num2 = (number % 100 - number % 10) / 10

    const num3 = number % 10

    const reversedNumber = '' + num3 + num2 + num1
    document.getElementById('task3').innerText = `${reversedNumber}`

}


// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


let opts = ``

for (let i = 1; i <= 12; i++) {
    opts += `<option value='${i}'>${i}</option>`
}
document.getElementById('selectDuration').innerHTML = opts


function culcEarnings() {
    const yearRate = 5;
    const duration = 2;

    const money = prompt("Enter money to lend:")

    const currentRate = (yearRate / 12 * duration)

    const result = ((money / 100) * currentRate).toFixed(4)

    document.getElementById('task4').innerText = `${result}`
}


// Modifed function

function culcEarningsM() {

    const duration = +document.getElementById('selectDuration').value;
    let money = +document.getElementById('moneyLend').value;
    const yearRate = chooseRate(duration)

    const monthRate = (yearRate / 12)

    for (let i = 0; i < duration; i++) {
        money += ((money / 100) * monthRate)
    }

    document.getElementById('task4_M').innerText = `${money.toFixed(5)}`
}


function chooseRate(duration) {

    duration = +document.getElementById('selectDuration').value;


    let objRates = {
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
    }
    document.getElementById('rate').innerText = `${objRates[duration]}%`



    return objRates[duration]
}
