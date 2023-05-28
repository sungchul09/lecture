const { createStore } = require('redux')

const reducer = () => {}
const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
}

// 이렇게 변경 불가능
// initialState.compA = 'b'

const store = createStore(reducer, initialState)

console.log(store.getState())