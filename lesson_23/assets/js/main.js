/*  
Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
*/

let userName;
let userFullName;
let user_FullName;
let $userFullName;

// let 2fullName; 
// let my-Name = 'asdas'; 
// let full&name
// let full name  
// let full*Name

// Написання змінних за допомогою camelCase 

// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

function getName() {
    let userName = prompt("Enter your name, please: ")
    alert("Привіт, " + userName + "!")
}

//Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

function countAge() {
    let date = new Date();
    const currentYear = 2025;
    let userBirthDate = prompt("Enter your age, please: ")
    alert("Your age is " + (date.getFullYear() - userBirthDate))
}

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

function countPerimeterSquare() {
    let sideLength = prompt("Enter the length of one side")
    alert(`The perimetr of your square is ${sideLength * 4}`)
}

//Запитай у користувача радіус кола і виведи площу такої окружності.

function countCircleArea() {
    let radiusLength = prompt("Enter the length of one side")
    alert(`The area of your circle is ${Math.PI * (radiusLength ** 2)}`)
}

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

function countSpeed() {
    let distanceBetweenCities = prompt("Enter the distance between cities in km")
    let hoursToArrive = prompt("Enter the hours you want to get there")
    alert(`The area of your circle is ${distanceBetweenCities / hoursToArrive}`)
}

//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

function convertorUSD_EUR() {
    const ratio = 0.85;
    let amountToConvert = prompt("Enter the amount you want to convert")
    alert(`The area of your circle is ${amountToConvert * ratio}`)
}
