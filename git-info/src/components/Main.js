import React, { Component } from 'react';
import SearchedUsersDisplay from './SearchedUsersDisplay';

class Main extends Component {
  render() {
    const {userSearched} = this.props;
    return (
      <main>
        <SearchedUsersDisplay userSearched={userSearched}/>
      </main>
    );
  }
}

export default Main;