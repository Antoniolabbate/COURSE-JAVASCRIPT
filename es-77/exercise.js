const isLogged = true;
function firstPromise(arg) {
    return new Promise((resolve, reject) => {
        if (isLogged == true) {
            resolve(Math.random())
        } else {
            reject("error")
        }
    })
}
function secondPromise(arg) {
    return new Promise((resolve, reject) => {
        if (arg > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            reject("error 104")
        }
    })
}
firstPromise().then(element1 => secondPromise(element1)) .then(element => console.log(element)) .catch(err => console.log(err)) 
 


