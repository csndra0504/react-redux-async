import { combineReducers } from 'redux';
import {
  REQUEST_TWEETS,
  RECEIVE_TWEETS
} from '../actions/index.js'

const query = (state = 'reactjs', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.query
    default:
      return state
  }
}

const tweets = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TWEETS:
      console.log('requesting')
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_TWEETS:
      console.log('receiving', action.posts)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  query,
  tweets
})

export default rootReducer;