import React, { Component } from 'react';

class FollowerCard extends Component {
  render() {
    const {avatar_url, login} = this.props.follower;
    return (
      <div className="follower-container">
        <div className="follower-image-container inline">
          <img src={avatar_url} alt={login} className="follower-image"/>
        </div>
        <div className="follower-name-container inline">
          <h3 className="follower-name"><a href="#" onClick={(e) => this.props.currentUser(e, login)}>{login}</a></h3>
        </div>
      </div>
    );
  }
}

export default FollowerCard;