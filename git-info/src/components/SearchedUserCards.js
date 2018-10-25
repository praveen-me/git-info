import React, { Component } from 'react';

class SearchedUserCards extends Component {
  render() {
    const {login, avatar_url} = this.props.searchedUser
    return (
      <div className="searched-user-card">
        <div className="image-container inline">
          <img src={avatar_url} alt={login} className="searched-user-image"/>
        </div>
        <h2 className="searched-user-name">
          <a href="#">{login}</a>
        </h2>
      </div>
    );
  }
}

export default SearchedUserCards;