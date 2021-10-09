import { ADD_USER } from '../actions/user'

const initialState = {
  userValue: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userValue: action.playload
      }

    default:
      return state
  }
}
