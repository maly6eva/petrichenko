let result = '*';
const length = 7;
console.log(result)


for(let i = 0; i < 7; i++){
    result = result + result;
    console.log(result)
    for(let j = 0; j <  length; j++){
        result = result + result
        console.log(result)
    }

}