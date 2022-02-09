const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
person.toJSON = function () {
  let {
    firstName,
    lastName,
    ...other
  } = this;
  return other;
}
const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }