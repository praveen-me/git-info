import React, { Component } from 'react';
import DisplayCurrentUserInfo from './DisplayCurrentUserInfo';
import DisplayCurrentUserRepos from './DisplayCurrentUserRepos';

class DisplayCurrentUser extends Component {
  render() {
    const {currentUserDetails} = this.props;
    return (
      <div className="DisplayCurrentUser wrapper">
        <DisplayCurrentUserInfo userInfo={currentUserDetails} />
        <div className="repos-follower-container">
          <DisplayCurrentUserRepos userName={currentUserDetails.login}/>
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUser;