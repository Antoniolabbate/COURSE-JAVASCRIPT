class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(`{firstName: ${developer.firstName}, lastName: ${developer.lastName}}`); 

