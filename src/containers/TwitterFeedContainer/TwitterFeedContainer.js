import React, { Component } from 'react';
import TwitterSearch from '../../components/TwitterSearch/TwitterSearch';
import TwitterFeed from '../../components/TwitterFeed/TwitterFeed';

class TwitterFeedContainer extends Component {
  render () {
    return (
      <div>
        <p>Twitter Feed Container</p>
        <TwitterSearch />
        <TwitterFeed />
      </div>
    );
  }
};

export default TwitterFeedContainer;