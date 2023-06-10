import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './actions/user'
import { userSlice } from './reducers/user'
import { addPost } from './actions/post'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'

// useMemo는 컴포넌트 단위에서 캐싱을 한다.
// 캐싱을 할 때 기존 배열과 계산된 값이 바꼈는지 비교를 하게되는데
// 그자체만으로도 성능 부담이 느껴지는 상황이 존재한다.
// 컴포넌트 밖에서 캐싱을 처리하기위해 createSelector를 사용하면 좋다.
const priceSelector = (state) => state.user.prices
const sumPriceSelector = createSelector(
  priceSelector,
  (prices) => prices.reduce((a, c) => a + c, 0)
)
 
const App = () => {
  const user = useSelector((state) => state.user)
  const email = useSelector((state) => state.user.email)
  const password = useSelector((state) => state.user.password)
  const prices = useSelector((state) => state.user.prices)
  const totalPrice = useSelector(sumPriceSelector)
  // const totalPrice = useMemo(() => {
  //   console.log('memo')
  //   return prices.reduce((a, c) => a + c, 0)
  // }, [prices])
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
        <div><b>{totalPrice}원</b></div>
        <button onClick={onAddPost}>게시글 작성</button>
      </div>
    </>
  )
}

export default App