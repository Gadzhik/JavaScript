"use strict";

// console.log(document.body);

// получаем html со всем содержимым
console.log(document.documentElement);

// получаем дочерние узлы body(в псевдомассив)
console.log(document.body.childNodes);

// получаем либо первого ребенка(body) либо последнего
console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// аналог предыдущей команды
console.log(document.body.firstElementChild);

// команда для получения соседей, родителей и детей
console.log(document.querySelector('#current').parentNode.parentNode);

// аналог предыдущей команды - получаем элемент
console.log(document.querySelector('#current').parentElement);

// получаем атрибут htmp(nextSibling - получаем следующего соседа(ноду))
console.log(document.querySelector(' [data-current="3"]').nextSibling);

// получаем элемент htmp(nextElementSibling - получаем следующего соседа(Элемент))
console.log(document.querySelector(' [data-current="3"]').nextElementSibling);

// получаем только элементы, перебираем все childNodes и избавляемся от всех текстовых нод
// let node - это каждая нода лежащая в document.body.childNodes
for (let node of document.body.childNodes) {
    // если при переборе childNodes мы натыкаемся на тесктовую ноду, то нам надо
    // остановить повторение цикла
    if (node.nodeName == '#text') {
        // этот оператор позволяет остановить повторение цикла и начать его 
        // заново с каким то новым элементом
        continue;
    }
    console.log(node);
}















