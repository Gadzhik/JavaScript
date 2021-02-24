// для обработки события мы должны назначить обработчик
// Обработчик - это функция которая срабатывает как только событие произошло
// есть три способа назначить обработчик события

// 1 и 2 методы почти не используются
/* // 1 - добавляем прямо в код кнопки в index.html
<body>
    <button onclick="alert('Click')" id="btn">Press Me</button>
</body> */

// 2 получаем элемент на который мы повесим обработчик события
// первая кнопка которая есть на странице
const btns = document.querySelectorAll('button');

/* // устанавливаем элемент на который хотим повесить событие
// и записываем в это свойство какое-то значение(function, которая содержит код
// который выполниться после клика)
btn.onclick = function() {
    alert('Some text!');
}; */

/* // 3 Мы можем назначать несколько действий на одно событие
// события в js выполняются по очереди, сперва одно, а потом другое
btn.addEventListener('click', () => {
    alert('Cliiik!');
});
// второе событие
btn.addEventListener('click', () => {
    alert('Another Click!');
}); */

// еще одно событие, наведение мышью
/* e(event) - это объект событие(описывает, что произошло с элементом), он всегда передается первым, 
после него можно передавать еще аргументы  */
/* btn.addEventListener('click', (e) => {
    // смотрим содержание e(event)
    console.log(e); */
   /*  // target - элемент на котором произошло событие
    console.log(e.target); */
    /* // Удаляем элемент со страницы(для примера)
    e.target.remove(); */
    // console.log('Hover');
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    /* console.log(e.type);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    } */
};

// btn.addEventListener('click', deleteElement);

// Навешиваем один функционал на несколько элементов
// {once: true} - это опция(3 элемент который можно передать)
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});


/* Всплытие событий - это к.огда обработчик события срабатывает
на самом вложенном элементе, а затем поднимается все выше по 
иерархии */

// Отмена стандартного поведения браузера
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    // Отмена стандартного события - он всегда помещается в самое начало
    event.preventDefault();

    console.log(event.target);
});










