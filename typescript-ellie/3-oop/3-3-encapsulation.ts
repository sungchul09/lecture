{
  // public, private, protected를 사용해 캡슐화를 한다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class 안의 변수를 사용할때는 const, let, function 등의 키워드를 사용하지 않는다.
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup { 
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
  maker.fillCoffeeBeans(3);
  maker.fillCoffeeBeans(34); // 아주 invalid한 상황이므로 private 해주어야한다

  // getter, setter
  // constructor에서 fullName을 받으면 이미 생성할떄 지정돼버린 firstName, lastName으로 fullName이 고정돼버린다.
  class User {
    private firstName: string; // 아주 private 선언하고 난리인데 이것을 쉽게할 수 있다. (User2 확인)
    private lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`
    } 
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName)
  // user.firstName = 'ellie';
  console.log(user.fullName);

  // 그래서 getter를 사용하여 받는 것이 좋다.
  // get은 선언할때는 함수처럼 선언하지만 사용할떄는 변수처럼 사용가능하다
    // user2.fullName
  class User2 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge
    }

    set age(num: number) {
      if(num < 0) {
        // 
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      // constructor에 private로 생성하면 this.firstName = firstname과 같다.
    } 
  }

  const user2 = new User2('Steve', 'Jobs');
  console.log(user2.fullName)
  user2.firstName = 'ellie';
  console.log(user2.fullName);
}