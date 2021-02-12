"use strict";

const numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const quest1 = prompt("Один из последних просмотренных фильмов?", ""),
quest2 = prompt("На сколько вы его оцените?", ""),
quest3 = prompt("Один из последних просмотренных фильмов?", ""),
quest4 = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[quest1] = quest2;
personalMovieDB.movies[quest3] = quest4;

console.log(personalMovieDB);


