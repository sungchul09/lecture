type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface {
  x: number;
  y: number;
}

// obj
const obj1: PositionType = {
  x: 1,
  y: 1
}

const obj2: PositionType = {
  x: 1,
  y: 1
}

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  z: number;
  x: number;
  y: number;
}

interface  ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number }

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type은 불가능
type PositionType {

}

// only type can use computed properties
type Person = {
  name: string,
  age: number
}

type Name = Person['name']; // string

type NumberType = number;
// union type
type Direction = 'left' | 'right'

// interface
// 규격사항
// 다른 사람들(object와 object)간 의사소통 할 때 
// 정해진 interface를 통해 서로 간 상호작용 하도록
// 구현이 목적이면 interface 데이터를 담는게 목적이면 types

// types
// 어떤 데이터를 담을 때 데이터의 타입을 정하는 것

interface InterfaceParent {
  x: string | number
}


const test: InterfaceParent = { x: 123 }

type IntersectedChild1 = InterfaceParent & { 
  x: string
}

const test1: IntersectedChild1 = { x: 123 } // Type 'number' is not assignable to type 'string'

type IntersectedChild2 = InterfaceParent & { // works well, 하지만 never로 변형됨
  x: undefined 
}
const test2: IntersectedChild2 = { x: undefined } // Type 'number' is not assignable to type 'never'

type IntersectedChild3 = InterfaceParent & {
    x: string | number | boolean // 해당 타입으로 오버로드된다.
}