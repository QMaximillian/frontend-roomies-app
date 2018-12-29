import { LOAD_INITIAL_USER_STATE, LOGOUT_USER_STATE, SET_HOME } from './types.js'
import { fetchCurrentUser, fetchGetHome, fetchCreateHome, fetchCreateUserHome } from '../adapters/index.js'

export const loadInitialUserState = (id) => {
  return (dispatch) => {
    fetchCurrentUser(id).then(resp =>
    {
      dispatch(setUser(resp.user))
    })
  }
}

export const loadHouse = (uuid, id) => {
  return (dispatch) => {
  fetchGetHome(uuid)
  .then(resp => dispatch(setHouse(resp)))
  .then(resp => fetchCreateUserHome(id, resp.payload.currentHome.id))
}
}

export const createAndLoadHouse = (params, id) => {
  return (dispatch) => {
    fetchCreateHome(params)
    .then(resp => dispatch(setHouse(resp)))
    .then(resp => fetchCreateUserHome(id, resp.payload.currentHome.id))

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
