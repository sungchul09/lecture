{
  // function
  // 함수에 타입을 기입함으로써 좀 더 안정적으로 프로그래밍을 하도록 도와주며 문서화를 하는 효과도 볼 수 있다.
  // js
  function jsAdd(num1, num2) {
    return num1 + num2
  }

  // ts
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Promise function
  // js
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // ts
  function tsFetchNum(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100)
    })
  }

  // javascript => typescript
  // Optional Parameter
  // lastName은 문자열 타입으로 전달해도 되고 안해도 된다
  function printNameOptional(firstName: string, lastName?: string) { 
    console.log(firstName)
    console.log(lastName)
  }

  // lastName은 문자열 타입으로 전달해도 되고 undefined로 전달해도된다. (단, string, undefined 둘 만 가능)
  // 보통은 이 방식을 사용하지 않고 옵셔널로 많이 사용한다,
  function printNameOr(firstName: string, lastName: string | undefined) { 
    console.log(firstName)
    console.log(lastName)
  }
  printNameOptional('steve', 'kim')
  printNameOptional('ellie')
  printNameOr('ellie')
  printNameOptional('anna', undefined)
  printNameOr('anna', undefined)

  // default parameter
  // optional chaining과 비슷하지만 optional chaining은 기입하지않으면 undefined가 들어간다.
  // default parameter를 이용하면 기입하지않았을 때 default parameter 값이 들어간다.
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  // 갯수와 상관없이 동일한 타입의 인자를 여러개 전달할 때 rest parameter를 이용해 간단하게 배열 형태로 받을 수 있다.
  function addNumbers(...numbers: number[]): number {

  }
  console.log(addNumbers(1, 2))
  console.log(addNumbers(1, 2, 3, 4))
  console.log(addNumbers(1, 2, 3, 4, 5, 0))
}