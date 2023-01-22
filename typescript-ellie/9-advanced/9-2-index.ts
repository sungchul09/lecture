{
  // 타입스크립트에서 객체 인덱싱 방법
  const obj = {
    name: 'ellie',
  }

  obj.name;
  obj['name'];

  type Animal =  {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name'] // string
  const text: Name = 'hello' 
  
  type Gender = Animal['gender'] // 'male' | 'female'

  type Keys = keyof Animal // 'name' | 'age' | 'gender'
  const key: Keys = 'gender'

  type Person = {
    name: string;
    gender: Animal['gender']
  }

  const person: Person = {
    name: 'ellie',
    gender: 'male'
  }
}