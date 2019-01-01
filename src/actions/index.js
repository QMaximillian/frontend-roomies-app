import { LOAD_INITIAL_USER_STATE, LOGOUT_USER_STATE, SET_HOME_TASKS, SET_HOME } from './types.js'
import { fetchCurrentUser, fetchGetHome, fetchCreateHome, fetchCreateUserHome, fetchGetHouseTasks } from '../adapters/index.js'


export const loadHouseTasks = (home_id) => {
  return (dispatch) => {
    fetchGetHouseTasks(home_id).then(resp => {
      dispatch(setHomeTasks(resp))
    })
  }
}

export const createAndLoadUserHome = ( user_id, home_id) => {
  return (dispatch) => {
    fetchCreateUserHome(user_id, home_id)
    .then(resp => console.log(resp))
  }

}



export const loadInitialUserState = (id) => {
  return (dispatch) => {
    fetchCurrentUser(id).then(resp =>
    {
      dispatch(setUser(resp))
    })
  }
}

export const loadHouse = (id, uuid) => {
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

export const setUser = (resp) => {
  return {

    type: LOAD_INITIAL_USER_STATE,
    payload: {
      currentUser: resp.user,
      currentUserHome: resp.user_homes
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

export const setHomeTasks = (homeTasks) => {
  return {
    type: SET_HOME_TASKS,
    payload: {
      homeTasks: homeTasks
    }
  }
}



export const setHouse = (resp) => {
  console.log(resp)
  return {
    type: SET_HOME,
    payload: {
      currentHome: resp.home,
      tasks: resp.tasks

    }
  }
}
