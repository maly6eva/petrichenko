// пример
//  for(let i = 0; i< 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j)
//     }
// }


//1задачка звездочка

// let result = '';
// const length = 7;
//
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result = result + '*';
//
//     }
//     result = result + '\n'
//
// }
// console.log(result)

// или можно решить одним циклом
// let result = '';
// const length = 7;
// let rez = '*';
//
// for (let i = 0; i < length; i++) {
//         result = result + '\n' + rez.repeat(i + 1);
// }
// console.log(result)

// import {printChar} from "./printChar";
// const print1 = printChar('#', 10);
// console.log(print1.join("\n"))

// каламбур
first: for(let i = 0; i < 5; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 3) break first
            console.log(`Third level: ${k}`);
        }
    }
}
//
// let rez = '';
// let dog = 10;
//
//
// for(let i = 1; i < dog; i++) {
//     for(let j = 0; j < i; j++) {
//         rez = rez +'#' + '*'
//     }
//     rez = rez + '\n' + 6;
// }
// console.log(rez)