
let  numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '');
let film = prompt('Один из последних просмотренных фильмов?', '');
let grade = +prompt('На сколько оцените его?');
let film2 = prompt('Один из последних просмотренных фильмов?', '');
let grade2 = +prompt('На сколько оцените его?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[film] = grade;
personalMovieDB.movies[film2] = grade2;


console.log(personalMovieDB);