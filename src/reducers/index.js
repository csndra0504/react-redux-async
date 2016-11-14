// import { combineReducers } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION':
      return {
        ...state,
        isUpdated: true
      }
    default:
      return state
  }
}

// const rootReducer = combineReducers({
//   reducer.
//   ...
// })

export default reducer;