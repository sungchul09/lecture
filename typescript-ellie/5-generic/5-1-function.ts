{
  // 타입별로 check 함수를 만들어야하는 코드. bad
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!')
    }
    return arg;
  }

  // any로 하면 타입에 대한 정보가 없어진다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!')
    }
    return arg;
  }

  // generic을 쓰면 어떤 타입이든지 받을 수 있고, 코딩을 할 때(사용할 때) 타입이 결정된다.
  // 타입을 보장받을 수 있다.
  // 아 이 함수는 제네릭 함수구나, T 또는 null을 인자로 받아 T를 다시 리턴 하는구나! 라고 이해
  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}