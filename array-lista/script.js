let fridge = [
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone', 
    'fragola'
]

fridge.push("pesca");
// console.log (fridge)

for (let i = 0; i < fridge.length; i++){
    let cocomero = 'cocomero';
    if (cocomero === fridge[i]){
        console.log(cocomero, 'Trovato! Devo solo preparare il cocktail.');
    }
    console.log('Oh no, devo uscire a comprare il cocomero!')
}