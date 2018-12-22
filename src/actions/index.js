import { LOAD_INITIAL_USER_STATE } from './types.js'
import { fetchLoginUser, fetchCurrentUser } from '../adapters/index.js'

export const loadInitialUserState = (id) => {
  return (dispatch) => {
    fetchCurrentUser(id).then(resp =>
    {
      dispatch(setUser(resp.user))
    })

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
