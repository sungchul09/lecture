const x = {}
const y = {}
// proto 를 상속받으며 그 안에 있는 모든 프로퍼티 사용 가능
console.log(x)
console.log(y)

// x, y에 있는 __proto__가 같은 이유는 
  // 모두 동일한 "object의 proto"를 상속하고있기 때문
console.log(x.__proto__ === y.__proto__)
// ------------------------------
const array = [];
// "array의 proto"를 상속하고 있다.
console.log(array)

// "array proto" 내부에는 "object proto"도 들어있다
// 즉, array는 "array의 proto"를 상속하고,
// "array의 proto"가 "object proto"를 상속하고 있다
// ------------------------------
// prototype을 이용해 클래스 개념 비슷하게 해보기
function CoffeeMachine(beans) {
  this.beans = beans;
  this.makeCoffee = (shots) => {
    console.log('making... ')
  }
} 

// beans, makeCoffe는 만드는 인스턴스마다 들어있다. (instance member level)
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1)
console.log(machine2)
// ------------------------------
function CoffeeMachine2(beans) {
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log('making... ')
  // }
} 

// makeCoffee를 prototype memeber level로 변경한다.
CoffeeMachine2.prototype.makeCoffee = (shots) => {
  console.log('making... ')
}

const machine3 = new CoffeeMachine2(10);
console.log(machine3)
// ------------------------------
function LatteMachine(milk) {
  this.milk = milk
}
// lattemachine 내부에 프로토가 있고 프로토에는 contructor가 들어있다.
const latteMachine = new LatteMachine(123)
console.log(latteMachine)

// makeCoffee를 상속해보자
// LatteMachine에 CoffeeMachine의 prototype을 연결하는 것이다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

const latteMachine2 = new LatteMachine(123)
console.log(latteMachine2)
latteMachine2.makeCoffee

// typescript라면 class LatteMachine extends coffeeMachine { }
// 으로 가능하다