import React, { Component } from 'react';
import SearchedUsersCards from './SearchedUserCards';

class SearchedUsersDisplay extends Component {
  render() {
    const {userSearched} = this.props;
    return (
      <div className="searched-users-container">
        {
          userSearched.map(user => 
            <SearchedUsersCards searchedUser={user} key={user.login}/>
          )
        }
      </div>
    );
  }
}

export default SearchedUsersDisplay;