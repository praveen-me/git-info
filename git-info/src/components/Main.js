import React, { Component } from 'react';
import SearchedUsersDisplay from './SearchedUsersDisplay';
import DisplayCurrentUser from './DisplayCurrentUser';

class Main extends Component {
  render() {
    const {userSearched, Error, currentUser, currentUserDetails, currentUserRepos} = this.props;

    let displayItem;
    if(Object.keys(currentUserDetails).length === 0) {
      displayItem = <SearchedUsersDisplay userSearched={userSearched} Error={Error} currentUser={currentUser}/>
    } else {
      displayItem = <DisplayCurrentUser currentUserDetails={currentUserDetails}/>
    }

    return (
      <main>
        {
          displayItem
        }
      </main>
    );
  }
}

export default Main;