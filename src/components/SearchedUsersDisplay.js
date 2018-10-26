import React, { Component } from 'react';
import SearchedUsersCards from './SearchedUserCards';

class SearchedUsersDisplay extends Component {
  render() {
    const {userSearched, Error, currentUser} = this.props;
    let item;
    
    if(Error) {
      item = <div className="error-msg middle">Enter Valid UserName</div>
    } else {
      item = userSearched.map(user => 
          <SearchedUsersCards searchedUser={user} key={user.login} currentUser={currentUser} />
        )
    }

    return (
      <div className="searched-users-container">
        {
          item
        }
      </div>
    );
  }
}

export default SearchedUsersDisplay;