{
  // js는 상수를 정의할때 const MAX_NUM = 6 과 같이 대문자 형태로 const 변수로 정의한다.
  // js
  // 관련 있는 상수를 하나로 묶을 수 없다
  const MONDAY = 0
  const TUESDAY = 1
  const WEDNESDAY = 2
  // 그래서 freeze를 써서 최대한 비슷하게 선언한다. (object를 한 번 정의하고 나면 수정할 수 없게) 한다
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
  const dayOfToday = DAYS_ENUM.MONDAY;

  // ts
  // enum을 사용하면 쉽게 사용가능하다.
  // enum 사용 시 앞 글자만 대문자로 선언한다. (DAYS x,  Days o)
  // enum에 값을 정하지 않으면 자동으로 하나씩 숫자가 증가해 자동으로 계산된다.
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thusday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday)

  // 그런데,,, 상수들을 묶는 방법으로는 enum은 사용하지 않는 것이 좋다!!
    // enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는게 문제다
  let day: Days = Days.Saturday;
  day = Days.Thusday; // OK
  day = 10; // Noooooooo (but 에러가 나지 않음 ... 타입 보장이 힘들다)

  // union type을 사용하자
  // enum을 굳이 쓰지않고 union type을 이용해 타입을 보장하면서 사용하도록한다
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
  let dayOfWeek: DaysOfWeek = 'Monday'
}