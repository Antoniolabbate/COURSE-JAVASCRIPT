function sum(...num) {
    return num.reduce ((acc, num) => acc + num)
}

console.log(sum(1, 2, 3, 4, 5));