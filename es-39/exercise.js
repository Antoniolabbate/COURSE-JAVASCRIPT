function multiplyByTwo(value) {
  let number = 2;
  function inner(value2){
    let number = 4;
    return value2 * value;
  }
  return inner;
}
const result = multiplyByTwo(4)(2);
console.log(result);
