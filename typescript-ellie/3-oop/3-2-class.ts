{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    // 이런 변수들은 인스턴스를 만들때마다 중복적으로 만들어지기때문에 메모리 낭비가 될 수 있다.
    // static을 붙여 class level로 지정한다. (static을 붙이지않으면 instance level이다)
    static BEANS_GRAMM_PER_SHOT: number = 7; // class 안의 변수를 사용할때는 const, let, function 등의 키워드를 사용하지 않는다.
    coffeeBeans: number = 0;

    // 클래스를 이용해 인스턴스를 만들 때 항상 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 외부에서 new CoffeeMaker()를 하지않고 해당 함수로 인스턴스 생성 가능
    // static으로 선언해 클래스 레벨 변수이기떄문에 외부에서도 바로 사용 가능
    // const machine1 = CoffeeMaker.makeMachine(63)
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup { 
      // if(this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {   // 인스턴스 레벨 변수를 사용할땐 this를 사용
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { // 클래스 레벨 변수이므로 클래스명을 사용 
        throw new Error('Not enough coffee beans!');
      }
  
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      }
    }
  }



  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(24);
  const coffee = makeCoffee(2)
  console.log(coffee)
}