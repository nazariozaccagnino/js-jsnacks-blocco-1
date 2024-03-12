function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let usernumber = parseInt(prompt("Inserire quanti numeri dovrà contenere l'array"));

let emptyArray =[];

for (let i = 0; i < usernumber; i++){
    emptyArray.push(getRndInteger(1, 100))
    
}console.log(emptyArray);
