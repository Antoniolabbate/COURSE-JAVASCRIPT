function printName() {
  var helloName = "Hello John";
  function inner() {
    return helloName;
  }
  setTimeout(function() {
    console.log(inner());
  }, 1000);
}

printName();