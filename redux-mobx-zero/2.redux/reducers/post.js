const initialState = []

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
      case 'ADD_POST':
        return {
          posts: [...prevState.posts, action.data],
        }
      default:
        return prevState
  }
}

