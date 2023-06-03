// sync action creator
const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data: {
      id: 'seongcheol',
      password: '1234',
    }
  }
} 

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  }
}

// async action creator
const logIn = (data) => { 
  return (dispatch, getState) => {
    dispatch(logInRequest())
    setTimeout(() => {
      dispatch(logInSuccess({
        userId: 'seongcheol',
        nickName: '성철'
      }))
    }, 2000)
  }
}

const logOut = (data) => {
  return {
    type: 'LOG_OUT',
  }
}

module.exports = {
  logIn,
  logOut,
}