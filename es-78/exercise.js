const isLogged = true;
function firstPromise(arg) {
    return new Promise((resolve, reject) => {
        if (isLogged == true) {
            resolve(Math.random())
        } else {
            throw new Error("Whoops!")
        }
    })
}
function secondPromise(arg) {
    return new Promise((resolve, reject) => {
        if (arg > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            throw new Error("Whoops!")
        }
    })
}
firstPromise().then(element1 => secondPromise(element1)) .then(element => console.log(element)) .catch(err => console.log(err)) 
 
