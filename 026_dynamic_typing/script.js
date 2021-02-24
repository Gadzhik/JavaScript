"use strict";

let num = 5;

console.log("https://somesite.con/catalog/" + num);

const fontSize = 26 + 'px';

// Динамическая типизация
// To number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px"), 10));

// Преобразовываем в число с помощью унарного плюса
let answ = +prompt("Hello", "");

// To boolean
// 1)
// Все перечисленное является false
// 0, '', null, undefined, NaN;
// Пример:
// False
let switcher = null;

if (switcher) {
    console.log('some action...');
}

// True
switcher = 1;

if (switcher) {
    console.log('some action...');
}

// 2)
console.log(typeof(Boolean('5')));

// 3)
console.log(typeof(!!"8987"));

