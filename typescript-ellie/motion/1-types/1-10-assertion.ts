{
  // type assertions 💩
  // 타입을 강제하는 방법으로 사용하지 않는 것이 좋다.
  function jsStrFunc(): any {
    return 'dasdf';
  }

  // jsStrFunc는 any 타입이지만 문자열을 return할것을 무조건 알고있다.
  // 하지만 jsStrFunc는 any 타입이라 string 관련 API를 사용할 수 없다.
  // type assertion을 사용해 이를 가능하도록 한다.
  const result = jsStrFunc(); 
  console.log((result as string).length) // 만약 result 값이 string이 아니면 ? undefined가 나올것이다
  console.log((<string>result).length) // 이 방법으로도 assertion을 사용 가능하다
  // 정말 다행히도 이 코드는 에러를 띄우진않지만 정말 정말 그 값의 타입에대해 100% 장담할때만 사용하는 것이 좋다.

  // ! (assertion) 사용
  // ?(optional parameter)는 null일수도있고 값일수도있다라는 뜻이라면
  // !는 반대다. 무조건 null이 아니야! 라는 뜻이다.
  // 상황상 진짜 100% 장담할 수 있을때 쓰는 것이 좋다. (그 외에는 쓰지 않는 것을 추천)
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers.push(2) // Object is possibly 'undefined' 에러가 발생한다
  numbers!.push(2) // 절대적으로 값이 있어! 라고 확신할 때 사용한다

  // 이렇게 dom을 다룰때 조건문으로 해당 dom 요소가 있는지 확인하는데 이를 간편하게 할 수 있다.
  const button = document.querySelector('class');
  if(button){
    button.nodeValue;
  }
  const button2 = document.querySelector('class')!;
}