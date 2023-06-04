const { produce } = require('immer')

const initialState = []

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {

    switch (action.type) {
      case 'ADD_POST':
        isDraft.push(action.data)
        break;
        default:
          break;
    }
  })
}

