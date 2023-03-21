const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

// Modify the property firstName of the person2 in "Simon".

console.log(person1);
console.log(person2);

// indicando person2 = person1 si effettua copia by reference dell'oggetto per questo modificando il value firstName di person2 viene sovrascritto anche per person1.