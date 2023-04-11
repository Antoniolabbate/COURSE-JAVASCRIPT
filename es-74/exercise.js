function repeatHello(callback){
    setTimeout(()=> callback(),1000)}
    clearInterval((callback)=>{

    },5000)
function hello(){
    console.log("hello");
}
repeatHello(hello)