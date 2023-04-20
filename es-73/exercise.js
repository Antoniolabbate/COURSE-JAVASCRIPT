printAsyncName = (callback, string) => {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(string), 2000)
}

sayHello = () => {console.log("Hello")}

printAsyncName(sayHello, "Antonio")