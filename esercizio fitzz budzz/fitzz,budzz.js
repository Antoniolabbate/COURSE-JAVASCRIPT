const numeri = [2, 5, 7, 8, 10, 12, 15, 20];
function esercizio(numPD) {
    for (let x = 0; x < numPD.length; x++) { 
        if (x % 2 === 0) {
            console.log(`${x} pari`)
        } else if (
            x % 2 !== 0) {
            console.log(`${x} dispari`)
        }
    }
}
esercizio(numeri)