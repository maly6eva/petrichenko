
let question = prompt('Сколько фильмов вы уже посмотрели?', '');
let numberOfFilms = +question;
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};