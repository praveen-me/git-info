import React, { Component } from 'react';

class DisplayCurrentUserInfo extends Component {
  render() {
    const {login, avatar_url, name, bio, location, blog, followers, following, public_repos} = this.props.userInfo;
    return (
      <div className="CurrentUserInfo">
        <div className="current-user-avatar-container">
          <img src={avatar_url} alt={login} className="current-user-image"/>
        </div>
        <div className="current-user-details-container">
          <div className="current-user-details">
            <h2 className="current-user-name inline">{name}</h2>
            <a href={`https://github.com/${login}`}>@{login}</a>
            <p className="current-user-bio">{bio}</p>
            <p className="current-user-location"><i class="fas fa-map-marker-alt"></i> {location}</p>
            <p className="current-user-contact"><i class="fas fa-user-tie"></i><a href={blog}>{blog}</a></p>
          </div>
          <div className="current-user-honour-section">
            <div className="user-honour inline">
              <p className="center honour-count">{followers}</p>
              <p>Followers</p>
            </div>
            <div className="user-honour inline">
              <p className="center honour-count">{following}</p>
              <p>Following</p>
            </div>
            <div className="user-honour inline">
              <p className="center honour-count">{public_repos}</p>
              <p>Repos</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserInfo;