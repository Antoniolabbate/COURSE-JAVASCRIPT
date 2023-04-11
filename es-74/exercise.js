function repeatHello(callback){
    setTimeout(()=> callback(),1000)
}
function hello(){
    console.log("hello");
}
repeatHello(hello)