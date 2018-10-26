import React, { Component } from 'react';
import RepoCard from './RepoCard';

class DisplayCurrentUserRepos extends Component {  
  render() {
    const {userRepos}= this.props;
    let item;

    if(userRepos.length > 0) {
      item = userRepos.map(repo => (
          <RepoCard repo={repo}/>
        ))
    } else {
      item = "No Repos"
    }


    return (
      <div className="CurrentUserRepos">
        <div className="repo-header-container">
          <h3 className="repos-header">Repositories</h3>
        </div>
        <div className="repos-container">
          {
            item
          }
        </div>
      </div>
    );
  }
}

export default DisplayCurrentUserRepos;