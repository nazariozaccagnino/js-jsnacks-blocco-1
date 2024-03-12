function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let usernumber = parseInt(prompt("Inserire quanti numeri dovrà contenere l'array"));

let emptyArray =[];

for (let i = 0; i < usernumber; i++){
    emptyArray.push(getRndInteger(1, 100))
}
if (usernumber < 5){
    console.log('Devi inserire almeno 5 numeri')
 }  else{ 
    let last5items = [emptyArray[emptyArray.length -1], emptyArray[emptyArray.length -2],emptyArray[emptyArray.length -3],emptyArray[emptyArray.length -4], emptyArray[emptyArray.length -5]]
    console.log(last5items, 'Questi sono gli ultimi 5 numeri dell\'array') 
 }
console.log(emptyArray, 'Questo è l\'array completo');
