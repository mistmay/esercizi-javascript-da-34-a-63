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

const fetchbyId = (id, collection, reject, timeOut) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = collection.find(item => item.id === id);
      if (item) {
        return resolve(item);
      }
      return reject();
    })
  }, timeOut);
}
const fetchPersonById = (id, persons) => {
  const timeOut = 1000;
  const reject = () => {
    return Promise.reject("There is not person with this id");
  };
  return fetchbyId(id, persons, reject, timeOut);
};
const fetchJobById = (id, jobs) => {
  const timeOut = 500;
  const reject = () => {
    return Promise.reject("There is not jot with this id");
  };
  return fetchbyId(id, jobs, reject, timeOut);
};
Promise.all([fetchPersonById(2, persons), fetchJobById(2, jobs)])
  .then(value => {
    const [a, b] = value;
    console.log({
      ...a,
      ...b
    });
  })
  .catch(error => console.log(error))