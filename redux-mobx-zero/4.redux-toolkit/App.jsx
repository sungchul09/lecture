import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './actions/user'
import { userSlice } from './reducers/user'
import { addPost } from './actions/post'
 
const App = () => {
  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'seongcheol',
      password: '1234',
    }))
  }, [])

  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut())
  }, [])
  
  const onAddPost = useCallback(() => {
    dispatch(addPost())
  }, [])
  return (
    <>
      <b>
        {user ? `${user.nickName}님 환영합니다!` : '로그인을 진행해주세요 🙆🏻‍♂️'}
      </b>
      <div>
        {
          !user 
          ? <button onClick={onClick}>로그인</button> 
          : <button onClick={onLogOut}>로그아웃</button>
        }
        <button onClick={onAddPost}>게시글 작성</button>
      </div>
    </>
  )
}

export default App