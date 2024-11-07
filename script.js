// 1

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        console.log('Не понятна ваша запись');
}

// 1

let num = 23;
if (num > 10) {
    console.log(num + 100);
} else {
    console.log(num - 30);
}

// 2

let num1 = 16;
if (num1 % 2 == 0) {
    console.log(num1 / 2);
} else {
    console.log(num1 * 3);
}

// 3
let num2 = 16;
if (num2 >= 50) {
    console.log(num2 * num2);
}else if (num2 > 10 && num2 < 30) {
    console.log(0);
} else {
    console.log('Ошибка');
}

// 4

let numb = 12;
let numb2 = 15;
if (numb > numb2) {
    console.log(numb);
} else {
    console.log(numb2);
}

// 5

let a = 33;
let b = 12;
if(a - b == 100) {
    console.log('yes');
} else {
    console.log('no');
}

// 6 
let a1 = 55;
let b1 = 33;
if (a1 - b1 == 20) {
    console.log('yes');
} else {
    console.log('no');
}

// 7

let month = 3;
if (month == 12 || month == 1 || month == 2) {
    console.log('зима');
}else if (month == 3 || month == 4 || month == 5) {
     console.log('весна');
}else if (month == 6 || month == 7 || month == 8) {
    console.log('лето');
}else if (month == 9 || month == 10 || month == 11) {
     console.log('осень');
} else {
    console.log('ошибка');
}

// 8

let number1 = 22;
let number2 = 33;
let number3 = 44;
// наибольшее число

if (number1 > number2 && number1 > number3) {
    console.log(number1);
} else if (number2 > number1 && number3 > number2) {
    console.log(number2);
} else if (number3 > number1 && number3 > number2) {
     console.log(number3);
}

// наименьшее число

if (number1 < number2 && number1 < number3) {
    console.log(number1);
} else if (number2 < number1 && number3 < number2) {
    console.log(number2);
} else if (number3 < number1 && number3 < number2) {
     console.log(number3);
}

