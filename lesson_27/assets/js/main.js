// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
// і наступні методи для роботи з цим об'єктом:
// 1) Метод, який виводить на екран інформацію про автомобіль.
// 2) Додавання ім’я водія у список
// 3) Перевірка водія на наявність його ім’я у списку
// 4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// 5) Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 



const listCar = document.getElementById('car-propetries')
const task1 = document.getElementById('task1')

const car = {
    manufacturer: "Lotus",
    model: "Exige",
    year: 2022,
    avgSpeed: 150,
    engine: 3.5,
    fuel100: 10,
    drivers: ["Maks"],

    showProperties() {
        Object.entries(this).forEach(el => {
            if (['string', 'number', 'object'].includes(typeof el[1]))
                listCar.innerHTML += `<li>${el[0]}: ${el[1]}</li>`
        })
    },

    addDriver() {
        const driver = prompt("Enter the driver's name")
        this.drivers.push(driver)
    },

    isDriver() {
        const driver = prompt("Enter the driver's name")
        return this.drivers.includes(driver) ? alert("Так") : alert("Ні")
    },
    countTimeToPoint() {
        let distance = 0;
        let temp = true
        do {
            distance = +prompt("Enter the distance")
            if (isNaN(distance)) {
                alert('Wrong distance, plese enter only munbers')
            } else {
                temp = false
            }
        } while (temp)

        const time = distance / this.avgSpeed
        const fuel = (this.fuel100 / 100) * distance
        const breaks = Math.floor(time / 4)

        task1.innerText = `Час до точки: ${time + breaks} та кількість палива ${fuel}`
    }
}


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21:00: 15», а не «20: 59: 75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const task2 = document.getElementById('task2')
const input2 = document.getElementById('input2')

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

function showTime(obj) {
    task2.innerHTML = `
    ${obj.hours < 10 ? '0' + obj.hours : obj.hours}.${obj.minutes < 10 ? '0' + obj.minutes : obj.minutes}.${obj.seconds < 10 ? '0' + obj.seconds : obj.seconds}`
}


function addSeconds(obj = {}, sec = 0) {

    const prevSec = timeToSec(obj)
    const newTime = secToTime(sec + prevSec)

    return newTime
}

function addHours(obj, hour) {
    const prevSec = timeToSec(obj)
    const newTime = secToTime(hour * 3600 + prevSec)

    return newTime
}

function addMinutes(obj, min) {

    const prevSec = timeToSec(obj)
    const newTime = secToTime(min * 60 + prevSec)

    return newTime
}

function secToTime(sec) {

    const hours = Math.floor(sec / 3600)

    const minutes = Math.floor((sec - hours * 3600) / 60)

    const seconds = (sec - (hours * 3600 + minutes * 60))

    return {
        hours,
        minutes,
        seconds,
    }

}

function timeToSec({ hours = 0, minutes = 0, seconds = 0 }) {
    return hours * 3600 + minutes * 60 + seconds
}


function askAddShowSeconds() {
    const sec = +prompt("Enter seconds to add")

    const newTime = addSeconds(time, sec)

    showTime(newTime)
}

function askAddShowMinutes() {
    const min = +prompt("Enter minutes to add")

    const newTime = addMinutes(time, min)

    showTime(newTime)
}

function askAddShowHours() {
    const hour = +prompt("Enter hours to add")

    const newTime = addHours(time, hour)

    showTime(newTime)
}


// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1) Складання 2-х об'єктів-дробів.
// 2) Віднімання 2-х об'єктів-дробів.
// 3) Множення 2-х об'єктів-дробів.
// 4) Ділення 2-х об'єктів-дробів.
// 5) Скорочення об'єкта-дробу.


const fractional1 = document.getElementById('fractional1')
const fractional2 = document.getElementById('fractional2')
const fractional3 = document.getElementById('fractional3')
const fractional4 = document.getElementById('fractional4')
const outputElem = document.getElementById('task3')

const drob = {
    numerator: 1,
    denominator: 1,
}


const operateDrob = {

    getNumbers() {
        return [{ numerator: +fractional1.value, denominator: +fractional2.value },
        { numerator: +fractional3.value, denominator: +fractional4.value }]
    },

    mutualDivider(num1, num2) {
        const maxNumber = num1 > num2 ? num1 : num2
        let minDivider = maxNumber;


        while (true) {
            if (minDivider % num1 === 0 && minDivider % num2 === 0) {
                break
            }
            minDivider++
        }
        return minDivider
    },


    showResult(func) {

        const res = func()

        outputElem.innerText = res.toFixed(3)
    },

    sumDrobs() {

        const [oper1, oper2] = this.getNumbers()

        const minDivider = this.mutualDivider(oper1.denominator, oper2.denominator)

        const firstMult = minDivider / oper1.denominator
        const secondMult = minDivider / oper2.denominator

        const sum = (oper1.numerator * firstMult + oper2.numerator * secondMult) / minDivider

        console.log(sum)


        return sum
    },

    subtraction() {
        const [oper1, oper2] = this.getNumbers()

        const minDivider = this.mutualDivider(oper1.denominator, oper2.denominator)

        const firstMult = minDivider / oper1.denominator
        const secondMult = minDivider / oper2.denominator

        const sum = (oper1.numerator * firstMult - oper2.numerator * secondMult) / minDivider

        return sum
    },
    multiplication() {
        const [oper1, oper2] = this.getNumbers()
        return (oper1.numerator * oper2.numerator) / (oper1.denominator * oper2.denominator)
    },

    division() {
        const [oper1, oper2] = this.getNumbers()
        return (oper1.numerator * oper2.denominator) / (oper1.denominator * oper2.numerator)
    },


    reduction(oper) {

        let divider = 1;

        for (let i = 1; i < oper.denominator; i++) {
            if (oper.numerator % i === 0 && oper.denominator % i === 0) {
                divider = i
            }
        }

        return {
            numerator: oper.numerator / divider,
            denominator: oper.denominator / divider
        }
    }

}


// console.log(operateDrob.reduction({ numerator: 3, denominator: 6 }, { numerator: 2, denominator: 1 }));

console.log(operateDrob.getNumbers());
