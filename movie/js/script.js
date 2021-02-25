"use strict";

let numberOfFilm;

function start() {
    numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const q1 = prompt("Один из последних просмотренных фильмов?", ""),
              q2 = prompt("На сколько вы его оцените?", "");
    
        if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
            personalMovieDB.movies[q1] = q2;
            console.log("All ok!!!");
        } else {
            console.log("ERROR!!!");
            i--;
        }
    }
 }

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Quite a few movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a movie fan");
    } else {
        console.log("An error has occurred!!!");
    }
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is numbered ${i}`);
    }
}

writeYourGenres();

