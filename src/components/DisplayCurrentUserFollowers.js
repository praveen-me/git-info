import React, { Component } from 'react';
import FollowerCard from './FollowerCard';

class DisplayCurrentUserFollowers extends Component {
  render() { 
    const {userFollowers}= this.props;

    let item;

    if(userFollowers.length > 0) {
      item =  userFollowers.map(follower => (
              <FollowerCard follower={follower} currentUser={this.props.currentUser}/>
              ))
    } else {
      item = "No followers"
    }

    return (
      <div className="CurrentUserFollowers">
        <div className="followers-header-container">
          <h3 className="followers-header">Followers</h3>
        </div>
        <div className="followers-container">
          {
           item
          }
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserFollowers;