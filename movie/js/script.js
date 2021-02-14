"use strict";

const numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Quite a few movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a movie fan");
} else {
    console.log("An error has occurred!!!");
}

console.log(personalMovieDB);


