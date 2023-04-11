function  printAsyncName(callback,str){
    setTimeout(()=>{
        callback()
    },1000);
    setTimeout(()=>{
        console.log(str)
    },2000);
}
function hello(){
    console.log("Hello")
}
printAsyncName(hello, "antonio")
