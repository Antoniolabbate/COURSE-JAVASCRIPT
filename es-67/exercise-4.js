function sum(...num) {
  const numTot = num.reduce((acc, currentValue)=>acc + currentValue)
  return numTot
}


const numbers = [1, 2, 3];
console.log(sum(...numbers));