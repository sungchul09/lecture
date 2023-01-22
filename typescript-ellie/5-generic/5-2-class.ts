{
  interface EitherBad {
    left: () => number;
    right: () => number;
  }

  // number가 아니라 유연한 어떤 다른 타입을 받을 수 있도록 하려면 generic을 활용하면 된다.
  class SimpleEitherBad implements EitherBad {
    constructor(private leftValue: number, private rightValue: number){}
    left(): number {
      return this.leftValue
    }
    right(): number {
      return this.rightValue
    }
  }

  interface Either<L, R>{
    left: () => L;
    right: () => R;
  }

  class SimpleEitherBad2<L, R> implements Either<L, R> {
    // generic을 사용하는데 number만 들어가는 상황이기때문에 number 타입만 들어가는건 안된다고 에러
    constructor(private leftValueBad: number, private rightValue: R){}
    left(): L {
      return this.leftValueBad
    }
    right(): R {
      return this.rightValue
    }
  }

  class SimpleEither<L, R> implements Either<L, R> {
    // generic을 사용하는데 number만 들어가는 상황이기때문에 number 타입만 들어가는건 안된다고 에러
    constructor(private leftValueBad: L, private rightValue: R){}
    left(): L {
      return this.leftValueBad
    }
    right(): R {
      return this.rightValue
    }
  }


  const eitherBad = new SimpleEither(4,5);
  eitherBad.left()
  eitherBad.right()
  // interface Either 타입으로 타입 지정
  const either: Either<number, number> = new SimpleEither(4, 5);
  either.left();
  either.right();
  const best = new SimpleEither({name: 'ellie'}, 'hello')
}