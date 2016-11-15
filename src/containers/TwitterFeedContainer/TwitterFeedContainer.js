import React, { Component } from 'react';
import { connect } from 'react-redux'
import TwitterSearch from '../../components/TwitterSearch/TwitterSearch';
import TwitterFeed from '../../components/TwitterFeed/TwitterFeed';
import {fetchTweets} from '../../actions/index.js'

class TwitterFeedContainer extends Component {
  
  componentDidMount() {
    const { dispatch, query } = this.props
    dispatch(fetchTweets(query))
  }

  render () {

    const {items} = this.props

    return (
      <div>
        <p>Feed Container</p>
        <TwitterSearch />
        <TwitterFeed feed={items}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log('TwitterFeedContainer state', state)
  const { query, tweets } = state;
  const {
    isFetching,
    lastUpdated,
    items
  } = tweets || {
    isFetching: true,
    items: []
  }

  return {
    query,
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(TwitterFeedContainer);