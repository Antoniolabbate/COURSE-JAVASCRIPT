function repeatHello(callback){
   let timerId = setInterval(()=>{
    callback()
   },1000);
   setTimeout(()=>{
    clearInterval(timerId);
    console.log("stop");
   },5000)
}
    
function hello(){
    console.log("hello");
}
repeatHello(hello)
