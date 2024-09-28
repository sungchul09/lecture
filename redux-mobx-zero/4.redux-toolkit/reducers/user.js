const { createSlice } = require('@reduxjs/toolkit');
const { logIn } = require('../actions/user');

const initialState = {
  isLoggingIn: true,
  data: null,
  email: '',
  password: '',
  prices: Array(100).fill().map((v, i) => (i + 1) * 100)
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // postReducer 내부 actions 또는 동기적인 actions
  reducers: {
    logOut(state, action) {
      state.data = null
    }
  },
  // postReducer 바깥 actions 또는 비동기적인 actions
  extraReducers: {
    [logIn.pending](state, action){
      state.isLoggingIn = true
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload
      state.isLoggingIn = false
    },
    [logIn.rejected](state, action) {
      state.data = null
      state.isLoggingIn = false
    }
  }
})

module.exports = { 
  userSlice
}