'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          // получаем элементы с которыми хотим работать(form.add - берется из верстки, файл index.html)
          addForm = document.querySelector('form.add'),
          // обращаемся к форме с которой работаем(.adding__input - берется из верстки, файл index.html)
          // т.к это класс, то ставим перед ним точку .adding__input
          addInput = addForm.querySelector('.adding__input'),
          // добавляем checkbox в addForm и ищем их через html атрибуты
          checkbox = addForm.querySelector('[type="checkbox"]');

    // Назначаем обработчик события на форму
    addForm.addEventListener('submit', (event) => {
        // отменяем стандартное поведение браузера
        event.preventDefault();

        // чтобы получить новый фильм и обращаемся к нашему вводу с которым взаимодействовал пользователь
        let newFilm = addInput.value;
        // проверяем отмечен ли checkbox
        const favorite = checkbox.checked;

        if (newFilm) {

            // урезаем длинну названия до 21 символа
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            // добавляем любимый фильм
            if (favorite) {
                console.log("Add favorite film!");
            }

            // помещаем введенный фильм в нашу базу данных и сразу отсортируем
            movieDB.movies.push(newFilm);
            elementSort(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        // очищаем форму
        event.target.reset();

    });

    // функция удаления рекламы со страницы
    // arr - элемент, который определяется во время вызова функции
    const advRemove = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // различные изменения на странице
    const differentChangesOnPage = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    // сортировка, которая принимает в качестве аргумента массив
    const elementSort = (arr) => {
        arr.sort();
    };
    
     /* передаем аргументы в функцию (films - фильмы с которыми будет работать 
     функция и parent - родительский блок на странице, который будет 
     использовать все эти фильмы) */
    function createMovieList(films, parent) {
        // очищаем родительский элемент
        parent.innerHTML = "";
        elementSort(films);
        
        // помещаем в него фильмы
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>
            `;
        });

    // удаляем элементы из корзины
    // получаем все элементы и перебираем с помощью forEach()
    // btn - корзинка, i - номер элемента в списке
    document.querySelectorAll('.delete').forEach((btn, i) => {
        // обращаемся к каждой корзинке и навешиваем обработчик события
        btn.addEventListener('click', () => {
            // btn -> обращение к родительскому элементу -> удаляем со страницы
            btn.parentElement.remove();
            // удаляем элемент с базы данных
             /* splice - метод который вырезает определенный элемент из массива
             i - элемент, который мы только что удалили, 
             1 - сколько элементов нужно удалить */
            movieDB.movies.splice(i, 1);

            // исправляем нумерацию после удаления элементов
            createMovieList(films, parent);
        });

    });

    }

    advRemove(adv);
    differentChangesOnPage();
    /* вызываем функцию (movieDB.movies - это фильмы которые мы будем перебирать, 
    movieList - куда мы помещаем фильмы) */
    createMovieList(movieDB.movies, movieList);

});













