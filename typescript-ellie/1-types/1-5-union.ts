{
  // union types: OR
  // 모든 가능한 케이스 중에 딱 하나만 가능한 타입을 만들고 싶을 때  사용
  type Direction = 'left' | 'right' | 'up' | 'down'
  function move(direction: Direction) {
    console.log(direction)
  }
  move('down')

  type TileSize = 8 | 16 | 32
  const tile: TileSize = 16
  type SuccessState = {
    response: {
      body: string;
    }
  }

  type FailState ={
    reason: string;
  }
  type LoginState = SuccessState | FailState
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // printLoginState(state)
  // 별로 좋지않은 방식이다. 그래서 discriminated union을 사용하자 (1-6으로)
  function printLoginState(state: LoginState) {
    if('response' in state) { //state 안에 response라는 키가 있다면
      console.log(`${state.response.body}`)
    } else{
      console.log(`${state.reason}`)
    }
  }
}