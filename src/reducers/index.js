import { LOAD_INITIAL_USER_STATE } from '../actions/types'


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

    default:
     return state
  }


}
