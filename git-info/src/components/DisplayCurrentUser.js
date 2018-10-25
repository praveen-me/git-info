import React, { Component } from 'react';
import DisplayCurrentUserInfo from './DisplayCurrentUserInfo';

class DisplayCurrentUser extends Component {
  render() {
    const {currentUserDetails} = this.props;
    return (
      <div className="DisplayCurrentUser wrapper">
        <DisplayCurrentUserInfo userInfo={currentUserDetails} />
      </div>
    );
  }
}

export default DisplayCurrentUser;