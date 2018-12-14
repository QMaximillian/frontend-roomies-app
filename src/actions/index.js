import { LOAD_INITIAL_USER_STATE }

export const loadInitialUserState = () => {
  return (dispatch) => {
    fetchUser().then(resp => console.log(resp))
  }
}
