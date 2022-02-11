const persons = [{
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  const person = persons.find(item => item.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person) {
        resolve(person);
      } else {
        reject(new Error("Err: Wrong id"));
      }
    }, 2000);
  });
}

fetchPersonById(2).then((person) => console.log(person)).catch((err) => console.log(err.message));