const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
person1.firstName = "Simon";
const person2 = person1;

// Facendo in questo modo ho modificato la prima constante aggiungendo "Simon", senza andare a creare un altro oggetto.

console.log(person1);
console.log(person2);
