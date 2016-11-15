import React, { Component } from 'react';

class TwitterFeed extends Component {
  render () {
    const {feed} = this.props
    console.log('TwitterFeed items',feed)
    return (
        <div>
          {feed.map(item => <p key={item}>{item}</p>)}
        </div>
      );
  }
};

export default TwitterFeed;