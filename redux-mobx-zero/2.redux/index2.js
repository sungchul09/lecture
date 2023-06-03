const { createStore, applyMiddleware } = require('redux')
const reducer = require('./reducers')
const { addPost } = require('./actions/post')
const { logIn, logOut } = require('./actions/user')

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
}
const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('액션 로깅', action)
  dispatch(action)
}

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return dispatch(action)
}

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware)

const store = createStore(reducer, initialState, enhancer)
store.subscribe(() => {
  console.log('changed')
})

console.log('1st', store.getState())

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

