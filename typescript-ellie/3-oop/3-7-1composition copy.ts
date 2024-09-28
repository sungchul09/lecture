{
  // 상속의 문제점
  // 족보가 꼬인다라는 말처럼 상속의 깊이가 깊어질수록 서로의 관계가 복잡해질 수 있다.
  // 상속은 수직적인 관계가 형성되는것이다.
  // 부모클래스의 행동을 수정하게되면 수정된 사항떄문에 모든 자식클래스에 영향을 미치는 치명적인 단점이 있다.
  // 상속할떄는 한가지 이상 부모 클래스를 상속 받을 수 없다.
  // 그래서 composition을 사용하는것이 더 좋다
  // composition: 필요한것을 가져와서 조립해나가는 것
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup; 
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0;

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

  class CaffeLatteMachine extends CoffeeMachine {
    // 자식 클래스에서 constructor 사용시 super를 꼭 사용해줘야한다.
    constructor(
      beans: number, 
      public readonly serialNumber: string, 
      private milkFother: MilkFrother
      ) {
      super(beans)
    }
    
    // overriding - 상속받은 동일 함수를 덮어써서 정의하는 방법
    private steamMilk(): void {
      console.log('Steaming some milk...🥛')
    }
    makeCoffee(shots: number): CoffeeCup { 
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return this.milkFother.makeMilk(coffee) 
    } 
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛')
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛')
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛')
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar 🍯');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  // 필요한 기능을 가져와서, 외부에서 주입받아서 코드의 재사용을 할 수 있게 한다.
  // 하지만 이렇게 composition을 구현한 코드의 경우 CheapMilkSteamer와 AutomaticSugarMixer와 굉장히 강하게 커플링되어있다.
  // class와 class간에 서로 잘 알고지내는것(관계짓는것)은 좋지 않다.
  // 이렇게 class간 의사소통 해야하는 경우는 계약서로 의사소통 해야한다.
  // 계약서란 interface를 말한다.
  // interface를 통해 서로 의사소통을 진행. 즉, 디커플링을 진행한다.
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number, 
      private milk: MilkFrother, 
      private sugar: SugarProvider
    ){
      super(beans)
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: CandySugarMixer) {
      super(beans)
    };

    makeCoffe(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  
  // Sugar
  const candySugar = new CandySugarMixer()
  const sugar = new SugarMixer()

  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  
  
  const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, 'SS', coldMilkMaker);
  const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar
  )
}