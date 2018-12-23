import { LOAD_INITIAL_USER_STATE, LOGOUT_USER_STATE } from '../actions/types'


export const initialState = {
  currentUser: {},
  currentDuty: {},
  currentHome: {},
  userDuties: [],
  auth: {}
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_INITIAL_USER_STATE:
    return {
      ...state,
      currentUser: action.payload.currentUser
    }

    case LOGOUT_USER_STATE:
    return {
      ...state,
      currentUser: {
        id: action.payload.currentUser.id
      }
    }

    default:
     return state
  }


}
