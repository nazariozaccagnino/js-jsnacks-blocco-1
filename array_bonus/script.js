function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let majorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minorArray = [1, 2, 3, 4, 5, 6];

let big = majorArray.length;
let small = minorArray.length;
console.log( big, small);
if (big-small != 0){
    let size = big-small;
    console.log(size)
    for (i = 0; i< size; i++){
        minorArray.push(getRndInteger(90, 100));
    }
    console.log(minorArray, 'array completato con numeri mancanti random')    
}