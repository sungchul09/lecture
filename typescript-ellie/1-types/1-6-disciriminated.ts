  {
    // union 타입을 만들 때 공통적인 프로퍼티를 갖게 하는 방법
    // 조금 더 구분하기 쉽게 만들 수 있다.
    type SuccessState = {
      result: 'success'
      response: {
        body: string;
      }
    }
  
    type FailState ={
      result: 'fail'
      reason: string;
    }
    type LoginState = SuccessState | FailState
    function login(): LoginState {
      return {
        result: "success",
        response: {
          body: 'logged in!'
        }
      }
    }

    function printLoginState(state: LoginState) {
    // if('response' in state) { //state 안에 response라는 키가 있다면
    //   console.log(`${state.response.body}`)
    // } else{
    //   console.log(`${state.reason}`)
    // }
    if(state.result === 'success') { 
      console.log(`${state.response.body}`)
    } else{
      console.log(`${state.reason}`)
    }
  }
}