{
  // JavaScript 간단 복습
  // let (var는 hoisting 등 문제가 있으므로 사용하지 않도록 한다)
  let testName = 'hello';
  testName = 'hi';

  // const
  const testAge = 13;

  // type 명시
  // primitive type - number, string, boolean
  const num:number = 12; 
  const str:string = 'hello'; 
  const bool:boolean = false; 
  
  // primitive type - undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // return number 또는 undefined
  }

  // primitive type - null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 - any와 마찬가지로 가능하면 사용하지 않는다.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 - unknown과 마찬가지로 가능하면 사용하지 않는다.
  // 타입을 지정하는 방법이 정말 없을 때, 어쩔 수 없을 때만 사용하도록 한다
  let anything: any = 0;
  anything = 'hello'

  // void - void는 생략하기도한다. (컨벤션에따라 다르다)
  function print(): void {
    console.log('hello');
    return;
  }

  // never
  function throwError(message: string): never {
    // never에는 return을 작성 할 수 없고 무한루프나 throw로 error처리를 하는것만가능
    // while(true) {}
    // throw new Error(message)
  }

  // object 💩 - object도 구체적으로 타입을 명시하는게 좋다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
}