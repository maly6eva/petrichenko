let  numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', '');
    let grade = prompt('На сколько оцените его?');


    if(film != null && grade != null  && film.length < 50){
        personalMovieDB.movies[film] = grade
        console.log('done')
    } else {
        console.log('error');
        i--
    }
}
console.log(personalMovieDB)

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
}else {
    console.log('Произошла ошибка')
}