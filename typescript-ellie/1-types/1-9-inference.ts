{
  // type inference
  // 타입 추론을 자동으로해줘서 꼬박 꼬박 타입을 작성할 필요가 없다.
  // 하지만 이러한 타입 추론이 정말 좋은것일까 ?
  // 간단한 예제정도는 간편하지만 프로젝트가 크다면 타입을 명시하는게 좋다.
    // void 같은 경우는 생략 가능
  // 어떤 타입이든 올 수 있다.
  // 타입 추론 등을 사용하는 것도 좋지만 일관성있게 코딩해나가는것이 더 중요하다
  let text = 'hello'
  function print(message) {
    console.log(message)
  }
  print('hello')
  print(1)
  
  function print2(message = 'hello') { // default parameter로 인해 string으로 타입 추론
    console.log(message)
  }

  function add(a: number, b: number){ 
    return a + b // number 타입인 a, b의 더하기 때문에 number로 타입 추론
  }
}