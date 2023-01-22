interface Employee {
  pay(): void
}

class FullTimeEmp implements Employee {
  pay() {
    console.log(`full time!`)
  }
  workFullTime() {

  }
}

class PartTimeEmp implements Employee {
  pay() {
    console.log(`part time!`)
  }
  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// generic이지만 Employee를 확장한 아이만 된다!
function pay<T extends Employee>(employee: T): T {
  employee.pay
  return employee
}

const ellie = new FullTimeEmp();
const bob = new PartTimeEmp();

ellie.workFullTime();
bob.workPartTime();

// pay()에 fulltime, parttime을 넣으면 함수 실행은 잘 되지만
// return시 fulltime, partime 구분을 할 수 없다.
// ellie가 fulltime인지 parttime인지 세부 정보를 잃어버리게된다.
// as 를 쓰는 방법은 이 현상을 해결할 순 있지만 지양하는게 좋다.

const ellieAfterPayBad = payBad(ellie) as FullTimeEmp;
const bobAfterPay = payBad(bob);

const obj = {
  name: 'ellie',
  age: 20
}

const obj2 = {
  animal: '🐕'
}

console.log(getValue(obj, 'name'))
console.log(getValue(obj, 'age'))
console.log(getValue(obj2, 'animal'))

// keyof : K라는 object 안에있는 key 중에 하나
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}