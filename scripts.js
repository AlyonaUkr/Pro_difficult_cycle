// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

const result = [];

for (let i = 20; i <= 30; i+=0.5) {
    result.push(i);
}

const joined = result.join(' ');

console.log(joined);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let resultUah;

for (let d = 10; d <= 100; d = d + 10){
    resultUah = d * 27;
    console.log(''+d+'$ * 27='+resultUah+'UAH');
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let n = 50;

for (let sq = 1; sq <= 100; sq++) {
    sqResult = sq * sq;
    if (sqResult < n) {
        console.log(sq);
    }
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let simpleNumber = 11;
let simpleArrey = [];
const b = 2;

for (let a = 1; a <= simpleNumber; a++) {
    if (simpleNumber % a == 0) {
        simpleArrey.push(a);
    }
}

if (simpleArrey.length <= b) {
     console.log('' + simpleNumber + ' is simple number');
} else {
    console.log('' + simpleNumber + ' is not simple number');
}

// Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let threeNumber = 81;
let threeArrey = [];

for (let c = 1; c <= threeNumber; c++) {
    if (threeNumber % c == 0) {
        threeArrey.push(c);
    }
}

if (threeArrey[1] % 3 == 0) {
     console.log(''+threeNumber+' можна одержати шляхом зведення числа 3 у деякий ступінь');
} else {
    console.log(''+threeNumber+' не можна одержати шляхом зведення числа 3 у деякий ступінь');
}
