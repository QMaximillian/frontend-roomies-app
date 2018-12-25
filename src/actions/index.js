import { LOAD_INITIAL_USER_STATE, LOGOUT_USER_STATE, SET_HOME } from './types.js'
import { fetchCurrentUser, fetchCreateHome } from '../adapters/index.js'

export const loadInitialUserState = (id) => {
  return (dispatch) => {
    fetchCurrentUser(id).then(resp =>
    {
      dispatch(setUser(resp.user))
    })
  }
}

export const createAndLoadHouse = (params) => {
  return (dispatch) => {
    fetchCreateHome(params).then(resp => {
      dispatch(setHouse(resp))
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

export const logoutUserState = () => {
  return (dispatch) => {
    dispatch(logoutUser())
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



export const setHouse = (home) => {
  return {
    type: SET_HOME,
    payload: {
      currentHome: home
    }
  }
}
