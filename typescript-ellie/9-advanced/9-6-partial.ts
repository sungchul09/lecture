{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  }
  // Partial 타입을 사용하면 엉뚱한 key, value를 업데이트 할 수 없고 Todo에 있는것만 가능
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return {...todo, ...fieldsToUpdate}
  }

  type Person = {
    name: string;
    age: number;
  }
  
  function partialExample(person: Person, update: Partial<Person>): Person {
    return { ...person, ...update }
  }

  const todo: Todo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high'
  }

  const updated = updateTodo(todo, { priority: 'c' })
  console.log(updated)
}