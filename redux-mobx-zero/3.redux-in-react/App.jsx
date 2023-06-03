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
      <p>
        user정보: {user ? user.nickName : <b>현재 유저 정보가 존재하지 않습니다.</b>}
      </p>
      <div>
        <button onClick={onClick}>로그인</button>
      </div>
    </>
  )
}

export default App