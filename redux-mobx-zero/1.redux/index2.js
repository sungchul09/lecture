const { createStore } = require('redux')

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      }
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      }
    case 'ADD_POST':
        return {
          ...prevState,
          post: [...prevState.posts, ...action.data],
        }
    default:
      return prevState
  }
}

const initialState = {
  user: null,
  posts: [],
}



// 이렇게 변경 불가능
// initialState.compA = 'b'

const store = createStore(reducer, initialState)
store.subscribe(() => {
  console.log('changed')
})

console.log('1st', store.getState())

const login = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}
const logOut = (data) => {
  return {
    type: 'LOG_OUT',
  }
}

const addPost = () => {
  return {
    type: 'ADD_POST',
    data,
  }
}

store.dispatch(logIn({
  id: 1,
  name: 'sungchul',
  admin: true,
}))

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요. 리덕스',
}))

store.dispatch(logOut())

console.log('2nd', store.getState())

