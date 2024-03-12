function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let usernumber = parseInt(prompt("Inserire quanti numeri dovrà contenere l'array"));

let emptyArray =[];

for (let i = 0; i < usernumber; i++){
    emptyArray.push(getRndInteger(1, 100))
    if (usernumber < 5){
       console.log('Devi inserire almeno 5 numeri')
    } 
}
// for(let k = usernumber; k < 5; k--){
//     console.log(emptyArray[k]);
// }
console.log(emptyArray, 'pieno');
let last5items = emptyArray[emptyArray.length -1], emptyArray[emptyArray.length -2];
console.log(last5items)