"use strict";

// Now we have one big object
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
     },
     detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Quite a few movies watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic spectator");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are a movie fan");
        } else {
            console.log("An error has occurred!!!");
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre is numbered ${i}`);

            if (genre === "" || genre == null) {
                console.log("You entered incorrect data!");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

           /*  // Alternative solution method
            let genres = prompt(`Enter your favorite genres separated by commas`);

            if (genres === "" || genres == null) {
                console.log("You entered incorrect data!");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
        } */

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i + 1} is ${item}`)
        });
    }
};













