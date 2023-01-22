{
  type Video = {
    title: string;
    author: string;
    description: string;
  }

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonlyauthor: string;
  // }

  // 이런 과정을 쉽게 해주는게 Mapped Type
  // 타입을 새로운 타입으로 변환해 주는 문법을 의미
  // 마치 자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과
  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  }

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
  }

  type Animal = {
    name: string;
    age: number;
  }

  // 방법 1
  type AnimalOptional = Optional<Animal>;

  const animal: AnimalOptional = {
    name: 'asdf',
    // animal: 'dd',
    age: 24
  }

  // 방법 2
  const animal2: Optional<Animal> = {
    name: 'asdf',
    // animal: 'dd',
    age: 24
  }

  type Nullable<T> = { [P in keyof T]: T[P] | null }

  const obj2: Nullable<Video> = {
    title: null, // 본연의 타입 또는 null 사용 가능
    author: null
  }

  const nullable: Nullable<Person> = {
    name: null,
    age: null
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [P in keyof  T]: Proxy<T[P]>
  }
}