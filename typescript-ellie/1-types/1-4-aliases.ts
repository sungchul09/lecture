{
  // type aliases
  // 타입스크립트의 가장 강력한 기능 중 하나이다.
  // 새로운 타입을 내가 정의할 수 있다.
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'Korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  }
  const student: Student = {
    // aniaml: 'dd' 
    name: 'ellie',
    age: 12
  }

  // string literal types
  // 문자열 자체를 타입으로 지정할 수 있다. (bool 자체도 지정할 수 있다.)
  type Name = 'name';
  let ellieName: Name;
  type JSON = 'json'
  const json: JSON = 'json'
}