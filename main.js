
// let filmsCount;
//
// do {
//     filmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');
// } while (!filmsCount);




let  numberOfFilms
function start() {
    numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms) ) {
        numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '')
        return

    }
}
start()


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', '').trim();
        let grade = prompt('На сколько оцените его?');


        if(film != null && grade != null  && film.length < 50){
            personalMovieDB.movies[film] = grade
            console.log('done')
        } else {
            console.log('error');
            i--
        }
    }
}
rememberMyfilms()

function detectPerson() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    }else {
        console.log('Произошла ошибка')
    }
}

detectPerson()

console.log(personalMovieDB)



function showMyDB() {
    if ( personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}
showMyDB()


function writeYourGenres() {

    for(let i = 1; i <= 3; i++){
        let q = prompt(`Ваш любимый жанр под номером ${i}`, "")
        personalMovieDB.genres[i] = q
        console.log(q)

    }
}
writeYourGenres()