class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toJson() {
    return JSON.stringify(this);
  }
  fromJson(json) {
    let {
      id,
      firstName,
      lastName,
      age
    } = JSON.parse(json);
    return new Person(id, firstName, lastName, age);
  }
}
const person = new Person();
const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = person.fromJson(json);
console.log(developer);