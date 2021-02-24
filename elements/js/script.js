'use strict';

/* // Используем СТАРЫЕ методы получения элементов
// Помещаем сюда элемент, который хотим получить со страницы
// получаем элемент по id, который должен быть 1 на странице
const box = document.getElementById('box');

console.log(box);

// получаем все кнопки(в HTMLCollection) на странице
const btns = document.getElementsByTagName('button');

// получаем одну какую то кнопу по id
// 1-й способ
// const btns = document.getElementsByTagName('button')[1];

// 2-й способ
// console.log(btns[2]);

console.log(btns);

// Используем классы(в HTMLCollection) для получения элементов ос страницы
const circles = document.getElementsByClassName('circle');

console.log(circles);

// Используем НОВЫЕ методы получения элементов
// помещаем в querySelectorAll() любой css-селектор, который нам нужен
const hearts = document.querySelectorAll('.heart');

/* // используем forEach для получения всех элементов в псевдомассиве
hearts.forEach(item => {
    console.log(item);
}); */

/* console.log(hearts);

// Получаем только первый попавшийся на странице элемент в псевдомассиве
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
 */ 

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      
console.dir(box);

/* // Меняем цвет фона
box.style.backgroundColor = 'yellow';
// задаем ширину
box.style.width = '600px'; */

// быстрое формирование инлайн стилей css
box.style.cssText = `background-color: blue; width: 600px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/* // производим одно действие над многими объектами при помощи цикла
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}
 */
// производим одно действие над многими объектами
// при помощи перебирающих методов
// называем каждое сердце как item
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

// МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛЕМЕНТАМИ СТРАНИЦЫ

// создаем элементы для верстки в js
const div = document.createElement('div');

/* // создаем текстовые узлы - это элементы без оболочки тега
const text = document.createTextNode('temp...'); */

div.classList.add('black');

// document.querySelector('.wrapper').append(div);
document.body.append(div);

/* // метод который вставляет элемент в начало
wrapper.prepend(div); */

/* // методы для манипулирования положением элементов
hearts[0].before(div);
hearts[0].after(div); */

/* // метод для удаление элемента со страницы
circles[0].remove(); */

/* // метод для замены одного элемента другим
hearts[0].replaceWith(circles[0]); */

// добавляем HTML или текст в элемент
// 1-й метод
div.innerHTML = "<h1>Hi dude!</h1>";

/* // 2-й метод - работает только с текстом
div.textContent = "Just text!"; */

div.insertAdjacentHTML('afterbegin', '<h2>Some text!</h2>');












