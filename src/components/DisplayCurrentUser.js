import React, { Component } from 'react';
import DisplayCurrentUserInfo from './DisplayCurrentUserInfo';
import DisplayCurrentUserRepos from './DisplayCurrentUserRepos';
import DisplayCurrentUserFollowers from './DisplayCurrentUserFollowers';

class DisplayCurrentUser extends Component {
  render() {
    const {currentUserDetails, currentUserRepos, currentUserFollowers} = this.props;
    return (
      <div className="DisplayCurrentUser wrapper">
        <DisplayCurrentUserInfo userInfo={currentUserDetails} />
        <div className="repos-follower-container">
          <DisplayCurrentUserRepos userRepos={currentUserRepos}/>
          <DisplayCurrentUserFollowers userFollowers={currentUserFollowers}currentUser={this.props.currentUser}/>
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUser;