import { ADD_USER } from '../actions/user'

const initialState = {
  userValue: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
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
