// Напиши всі можливі варіанти створення функцій.

function someFunc1() {

}

const someFunc2 = function () {

}

const someFunc3 = () => {

}



function getOutputElem(id) {
    return document.getElementById(id)
}



function getNumbers(amount) {

    const arr = []

    for (let i = 0; i < amount; i++) {
        arr[i] = +prompt(`Enter a number`)
    }

    return arr.length === 1  ?  arr[0] : arr

}

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countOwnAgr() {
    return arguments.length
}

function countArg(arg) {
    return arg.length
}


function output() {
    const amoutArg = countArg(arguments)
    return amoutArg
}



// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.


function isPositive(firstNumber, secondNumber) {
    return firstNumber === secondNumber ? 0 : firstNumber > secondNumber ? 1 : -1
}

function showOutput() {

    [num1, num2] = getNumbers(2)


    const output = getOutputElem("task1")
    const result = isPositive(num1, num2)


    output.innerText = result
}




// Напиши функцію, яка обчислює факторіал переданого їй числа.



function getFactorial(number) {
    let total = 1;
    for (let i = 1; i <= number; i++) {
        total *= i
    }
    return total
}



function showOutput2() {


    const num = getNumbers(1)

    const output = getOutputElem("task2")
    const result = getFactorial(num)


    output.innerText = result

}


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function createNumber(fNumber, sNumber, tNumber) {
    return `${fNumber * 100 + sNumber * 10 + tNumber}`
}


function showOutput3() {

    const [num1, num2, num3] = getNumbers(3)

    const output = getOutputElem("task3")
    const result = createNumber(num1, num2, num3)

    output.innerText = result
}



// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function caclRectArea(fSide, sSide = fSide) {
    if (sSide === null || sSide === 0) sSide = fSide
    return fSide * sSide
}

function showOutput4() {

    const [num1, num2] = getNumbers(2)
    const output = getOutputElem("task4")
    const result = caclRectArea(num1, num2)

    output.innerText = result
}

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i
        }
    }

    return sum === number
}


function showOutput5() {

    const num1 = getNumbers(1)
    const output = getOutputElem("task5")
    const result = isPerfectNumber(num1)

    output.innerText = result ? 'Так' : "Ні"
}

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function isPerfectNumberRange(from, to) {
    let perfectNumbers = '';

    for (let i = from; i <= to; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers += `${i} `
        }
    }

    return perfectNumbers
}


function showOutput6() {


    const [num1, num2] = getNumbers(2)
    const output = getOutputElem("task6")
    const result = isPerfectNumberRange(num1, num2)

    output.innerText = result

}


