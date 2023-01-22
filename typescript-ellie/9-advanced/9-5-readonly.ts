{
  type Todo = {
    title: string;
    description: string;
  }

  function display(todo: ToDo) {
    todo.title = 'jaja'; // 이렇게 가변성, 수정이가능한 object의 type을 여기저기 전달하는 것은 위험하다
    // 항상 불변성을 보장하는것이 좋다.
  }

  // 사실 mapped type에 대해선 타입스크립트 자체에서 이미 만들어놓은것이 많이 있다.
  // 대표적으로 readonly
  function display2(todo: Readonly<Todo>) {
    todo.title = 'asdf'
  }
}