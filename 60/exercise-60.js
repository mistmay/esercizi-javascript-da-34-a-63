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

const jobs = [{
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];
const promise1 = function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
        resolve(person)
      } else {
        reject(new Error("Wrong id"));
      }
    }, 2000);
  });
};
const promise2 = function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      if (job) {
        resolve(job)
      } else {
        reject(new Error("Wrong id"));
      }
    }, 1000);
  });
};
let id = 2;
Promise.all([promise1(id), promise2(id)]).then((values) => {
    let [a, b] = values;
    let obj = {
      ...a,
      ...b
    };
    console.log(obj);
  })
  .catch((err) => {
    console.log(err.message);
  });