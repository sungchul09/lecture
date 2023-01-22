{
  // public, private, protected를 사용해 캡슐화를 한다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // interface를 사용하여 사용할 수 있는 메서드를 지정할 수 있다.
  interface CoffeeMaker {
    // interface를 implements하는 클래스는 interface에서 선언한 모든 함수에대해 정의해두어야한다.
    makeCoffee(shots: number): CoffeeCup; 
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean();
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class 안의 변수를 사용할때는 const, let, function 등의 키워드를 사용하지 않는다.
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...🧼')
    }

    // 이 같은 
    grindBeans(shots) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log('heating up ... ')
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... `)
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup { 
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 클래스형 타입을 사용하면 해당 클래스의 메서드를 모두 사용 가능
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(3);
  maker.makeCoffee(34); // 아주 invalid한 상황이므로 private 해주어야한다

  // 인터페이스형 타입을 사용하면 해당 인터페이스에 선언된 메서드만 사용 가능
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(3);
  maker2.makeCoffee(34); // 아주 invalid한 상황이므로 private 해주어야한다

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.clean();
  maker3.makeCoffee(34); // 아주 invalid한 상황이므로 private 해주어야한다

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
      makeCoffee() {
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
      }
  }

  class Probarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  // 동일한 object의 인스턴스일지라도 object는 두가지 인스턴스를 구현하기때문에
  // AmateurUser, Probarista는 CoffeeMachine을 받아오는게 아니라
  // CoffeeMaker라는 인터페이스를 (AmateurUser의)생성자에서 받아오고
  // CommercialCoffeeMaker라는 인터페이스를 (Probarista의)생성자에서 받아오기때문에
  // 클래스보다 좀 더 좁은 범위의, 인터페이스에서 규약된 범위만 접근할 수 있는것을 볼 수 있다.
  const person: CoffeeMachine = CoffeeMachine.makeMachine(22);
  const amateur = new AmateurUser(person);
  const pro = new Probarista(person);
}