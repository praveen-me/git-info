import React, { Component } from 'react';
import FollowerCard from './FollowerCard';

class DisplayCurrentUserFollowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFollowers : []
    }
  }

  componentWillMount() {
    const {userName}= this.props;

    fetch(`https://api.github.com/users/${userName}/followers?per_page=10`)
      .then(res => res.json())
      .then(data => 
        this.setState({
          userFollowers : data
        }))
  }
  

  render() { 
    const {userFollowers} = this.state; 
    return (
      <div className="CurrentUserFollowers">
        <div className="followers-header-container">
          <h3 className="followers-header">Followers</h3>
        </div>
        <div className="followers-container">
          {
            userFollowers.map(follower => (
              <FollowerCard follower={follower} currentUser={this.props.currentUser}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserFollowers;