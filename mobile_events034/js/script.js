"use strict";

// события для мобильных устройств

// touchstart - срабатывает при возникновении касания к элементу
// touchmove - при движении пальца по элементу
// touchend - при прекращении касания пальца элемента
/*  touchenter - ведем пальцем по экрану и наскакиваем(наскальзываем) 
на элемент, на который подвешено это событие */
  /* touchleave - когда палец уходит за пределы элемента, 
  на который подвешено это событие */
/* touchcancel - возникает тогда, когда точка соприкосновения больше
не регистрируется на поверхности */

window.addEventListener('DOMContentLoaded', () => {
    // получаем элемент .box из index.html
    const box = document.querySelector('.box');

    // назначаем обработчик события, связанный с мобильными устройствами
    // callback функция выполняется строго после выполнения события
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // обращаемся к конкретному пальцу, в данном случае к первому
        console.log(e.touches[0].pageX);
    });

});

/* Существует 3 главных свойства при работе с сенсорными устройствами:
1. touches - список всех пальцев взаимодействующих с экраном
2. targetTouches - все пальцы, взаимодействующие с конкретным элементом
3. changedTouches - список пальцев учавствующих в текущем событии */










