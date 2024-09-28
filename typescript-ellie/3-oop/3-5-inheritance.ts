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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class 안의 변수를 사용할때는 const, let, function 등의 키워드를 사용하지 않는다.
    private coffeeBeans: number = 0;

    // 생성자를 protected로 선언하면 사용하는 자식에게는 pulbic이다.
    public constructor(coffeeBeans: number) {
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
    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log('heating up ...🔥')
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ...🍵`)
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

  class CafeLatteMachine extends CoffeeMachine {
    // 자식 클래스에서 constructor 사용시 super를 꼭 사용해줘야한다.
    constructor(beans: number, public serialNumber: string) {
      super(beans)
    }
    
    // overriding - 상속받은 동일 함수를 덮어써서 정의하는 방법
    private steamMilk(): void {
      console.log('Steaming some milk...🥛')
    }
    makeCoffee(shots: number): CoffeeCup { 
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { 
      ...coffee, 
        hasMilk: true 
      } 
    } 
  }

  const machine = new CoffeeMachine(22)
  const latteMachine = new CafeLatteMachine(23, 'S15E');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee)
  console.log(latteMachine.serialNumber)
}