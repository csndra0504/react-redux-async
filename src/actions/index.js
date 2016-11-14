// require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export const requestTweets = query => ({
  type: REQUEST_TWEETS,
  query
})

export const receiveTweets = (query, json) => ({
  type: RECEIVE_TWEETS,
  query,
  posts: json.map(child => child.title),
  receivedAt: Date.now()
})

export const fetchTweets = query => dispatch => {
  dispatch(requestTweets(query))
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => {
      console.log('dispatch receiveTweets');
      dispatch(receiveTweets(query, json))
      console.log('dispatched receiveTweets');
    })
}