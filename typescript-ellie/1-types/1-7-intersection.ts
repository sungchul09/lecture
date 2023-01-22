{
  // intersection은 and
  // union이 or 같은 개념이었다면 intersection은 and 같은 개념이다.
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work())
  }

  const test: Student & Worker = {
    name: 'asdf',
    score: 123,
    employeeId: 123,
    work: () => {}
  }

  internWork(test)
}