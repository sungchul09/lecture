// 다른언어의 this = 만들어진 객체 그 자신
// 자바스크립트 this = genie와 비슷. (누가 부르냐에따라 this가 달라짐)
  // 호출한 객체가 주인느낌으로


  console.log(this)

  function simpleFunc() {
    console.log(this)
  }

  simpleFunc()

  class Counter {
    count = 0
    increase = function () {
      console.log(this) // Counter를 가리킨다
    }
  }

  const counter = new Counter()
  counter.increase() // Counter가 잘 나온다.
  const caller = counter.increase;
  caller(); 
  // undefined로 나온다 
  // (counter의 increase pointer를 count의 caller로 할당했기때문에)
  // -------------------------------------
  // javascript에서 함수를 정의하면 global 객체에서 접근이 가능하다.
  function helloWorld() {
    console.log('hello')
  }
  window.helloWorld() // global 객체에서 바로 접근 가능

  // 하지만 const, let등을 사용해 함수, 변수를 선언하면 window에 등록되지않는다.
  const ellie = 'ellie'
  let bob = 'bob'

  window.ellie
  window.bob

  // var 키워드는 window에 등록된다. 
  // 하지만 hoisting문제, 재정의 등의 다양한 문제로 사용 안하는 것이 좋다.
  // -------------------------------------------

  class Bob {

  }
  const bob2 = new Bob();
  bob2.run = counter.increase.bind(counter);
  bob2.run(); // increase안의 this에서 Bob 자체가 출력된다.
  // run이라는 함수를 bob2가 불렀기 때문이다 ㅠㅠ

  // 이처럼 자바스크립트는 this라는 정보를 다른 함수로 할당하는 순간 잃어버릴 수 있기 때문에
  // 이것을 꽁꽁 묶어주려면 binding을 써야한다.
  // counter.increase.bind(counter)
  // 또는 increase를 arraw function으로 처리하면 된다.