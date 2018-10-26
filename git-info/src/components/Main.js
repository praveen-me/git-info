import React, { Component } from 'react';
import SearchedUsersDisplay from './SearchedUsersDisplay';
import DisplayCurrentUser from './DisplayCurrentUser';

import Loader from './Loader';

class Main extends Component {
  render() {
    const {userSearched, Error, currentUser, currentUserDetails, currentUserRepos, currentUserFollowers, isLoading} = this.props;

    let displayItem;
    if(Object.keys(currentUserDetails).length === 0) {
      displayItem = <SearchedUsersDisplay userSearched={userSearched} Error={Error} currentUser={currentUser}/>
    } else {
      displayItem = <DisplayCurrentUser currentUserDetails={currentUserDetails}currentUser={this.props.currentUser}
      currentUserRepos={currentUserRepos}
      currentUserFollowers={currentUserFollowers}/>
    }

    return (
      <main>
        {
          isLoading ? <Loader /> : displayItem
        }
      </main>
    );
  }
}

export default Main;