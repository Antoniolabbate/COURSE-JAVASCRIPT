const number = 15;
const promise = new Promise((resolve,reject)=>{
    if(number > 10){
        resolve("result")
    }else{
        reject("error")
    }
})
promise.then(element => console.log(element))
promise.catch(err => console.log(err))