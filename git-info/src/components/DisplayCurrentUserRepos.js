import React, { Component } from 'react';
import RepoCard from './RepoCard';

class DisplayCurrentUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRepos : []
    }
  }

  componentWillMount() {
    const {userName}= this.props;

    fetch(`https://api.github.com/users/${userName}/repos?per_page=10`)
      .then(res => res.json())
      .then(data => 
        this.setState({
          userRepos : data
        }))
  }
  
  render() {
    const {userRepos} = this.state;
    return (
      <div className="CurrentUserRepos">
        <div className="repo-header-container">
          <h3 className="repos-header">Repositories</h3>
        </div>
        <div className="repos-container">
          {
            userRepos.map(repo => (
              <RepoCard repo={repo}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserRepos;