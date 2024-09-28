const { produce } = require('immer')

const initialState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case 'LOG_IN_REQUEST':
        draft.data = null
        draft.isLoggingIn = true
        break;
      case 'LOG_IN_SUCCESS':
        draft.data = action.data
        draft.isLoggingIn = false
        break;
      case 'LOG_OUT':
          data: null
        draft.isLoggingIn = false
        break;
      default:
        break;
    }
  })
};

module.exports = userReducer;