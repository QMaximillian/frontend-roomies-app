import { LOAD_INITIAL_USER_STATE, LOGOUT_USER_STATE } from './types.js'
import { fetchCurrentUser } from '../adapters/index.js'

export const loadInitialUserState = (id) => {
  return (dispatch) => {
    fetchCurrentUser(id).then(resp =>
    {
      dispatch(setUser(resp.user))
    })
  }
}

export const logoutUserState = () => {
  return (dispatch) => {
    dispatch(logoutUser())
  }
  }


export const setUser = (user) => {
  return {
    type: LOAD_INITIAL_USER_STATE,
    payload: {
      currentUser: user
    }
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER_STATE,
    payload: {
      currentUser: {
        id: null
      }
    }
  }
}
