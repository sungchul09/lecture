import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './actions/user'
 
const App = () => {
  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch()
  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'seongcheol',
      password: '1234',
    }))
  }, [])
  return (
    <>
      <b>
        {user ? `${user.nickName}님 환영합니다!` : '로그인을 진행해주세요 🙆🏻‍♂️'}
      </b>
      <div>
        <button onClick={onClick}>로그인</button>
      </div>
    </>
  )
}

export default App