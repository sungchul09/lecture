{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup; 
  }
  // 추상 클래스는 말그대로 추상적인것이다.
  // 추상 클래스를 선언한곳에서 내용을 명시하면안된다.
  // 추상 클래스를 상속받는곳에서 해당 내용을 구현한다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; 
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

    protected abstract extract(shots: number): CoffeeCup 

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

    protected extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ...🍵`)
      return {
        shots,
        hasMilk: false,
      }
    }  
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // 추상클래스를 쓰면 이렇게 super를 부르면서 하지않아도 된다. 
    // makeCoffe(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   return {
    //     ...coffee,
    //     hasSugar: true,
    //   }
    // }
    protected extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ...🍵`)
      return {
        shots,
        hasMilk: false,
      }
    } 
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ]

  machines.forEach(machine => {
    console.log('------------------------------');
    // 다형성의 장점
    // 다양한 인스턴스가 있지만 동일한 함수를 어떤 class인지 구분하지않고 공통된 API를 호출할 수 있다는게 큰 장점 
    machine.makeCoffee(1);
  });

  const machine = new CoffeeMachine(22)
  const latteMachine = new CafeLatteMachine(23, 'S15E');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee)
  console.log(latteMachine.serialNumber)
}