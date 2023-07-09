{
  // 배열
  // 배열을 정의할 땐 두가지 방식 모두 사용한다 (어느게 더 좋고 나쁘고는 없다.)
  // 단, readonly를 쓸때는 전자를 사용한다
    // readonly는 굉장히 많이 쓰이기 때문에 코드를 일관성있게 작성하려면 string[] 형태를 추천
  const fruits: string[] = ['사과', '바나나']
  const scores: Array<number> = [1, 3, 4]

  function printArray(fruits: readonly string[]) {

  }

  // Tuple
  // 결론적으로 말하자면 tuple 사용은 비추천한다.
  // 첫번째로 데이터 접근 시 index로 접근하는건 정말 가독성이 떨어진다
  // 그래서 tuple 대신에 오브젝트나 클래스 형태를 추천한다. (student.name,  student.age) 등
    // tuple 사용자리에 interface, type alias, class등으로 대체하여 사용하는 편이다. 
  let student: [string, number]
  student = ['name', 123]
  student[0] // name
  student[1] // 123

  // 또는 object destructuring을 사용한다
  const [name, age] = student;
  
}