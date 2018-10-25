import React, { Component } from 'react';

class DisplayCurrentUserInfo extends Component {
  render() {
    const {login, avatar_url, name} = this.props.userInfo;
    return (
      <div className="CurrentUserInfo">
        <div className="current-user-avatar-container">
          <img src={avatar_url} alt={login}/>
        </div>
        <div className="current-user-details-container">
          <div className="current-user-details">
            <h2 className="current-user-name">{name}</h2>
            <a href={`https://github.com/${login}`}>@{login}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserInfo;