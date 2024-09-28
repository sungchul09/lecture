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
  extraReducers: (builder) => builder
  .addCase(addPost.pending, (state, action) => {

  })
  .addCase(addPost.fulfilled, (state, action) => {

  })
  .addCase(addPost.rejected, (state, action) => {

  })
  .addMatcher((action) => {
    return action.type.includes('/pending')
  }, (state, action) => {
    state.isLoading = true
  })
  .addDefaultCase((state, action) => {

  })
})

module.exports = {
  postSlice
}
