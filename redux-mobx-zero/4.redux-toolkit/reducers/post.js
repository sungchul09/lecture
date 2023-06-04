const { createSlice } = require('@reduxjs/toolkit')
const { addPost } = require('../actions/post')
const initialState = []

const postSlice = createSlice({
  name: 'post',
  initialState,
  // postReducer 내부 actions 또는 동기적인 actions
  reducers: {
    clearPost(state, action) {
      state.data = []
    }
  },
  // postReducer 바깥 actions 또는 비동기적인 actions
  extraReducers: {
    [addPost.pending](state, action) {

    },
    [addPost.fullfilled](state, action) {
      
    },
    [addPost.rejected](state, action) {
      
    }
  }
})

module.exports = {
  postSlice
}
