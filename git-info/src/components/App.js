import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import './../scss/App.scss';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchedUsers : [],
      error : false,
      currentUserDetails : {},
      currentUserRepos : {}, 
      currentUserFollowers : {}
    }
  }
  
  handleSubmit = (e, userName) => {
    console.log(userName);
    e.preventDefault();

    fetch(`https://api.github.com/search/users?q=${userName}`).
    then(res => res.json())
    .
    then(data => {
      if(data.total_count === 0) {
        return this.setState({
          error : true
        })
      } else {
        return this.setState({
          searchedUsers : data.items,
          error : false,
          currentUserDetails : {}, currentUserRepos : {}, 
          currentUserFollowers : {}
        })
      }
    });

    e.target.firstChild.value = '';
  }

  handleCurrentUser = (e, login) => {
    fetch(`https://api.github.com/users/${login}`).
    then(res => res.json()).
    then(data => this.setState({
      currentUserDetails : data
    }))
    fetch(`https://api.github.com/users/${login}/repos?per_page=10`).
    then(res => res.json()).
    then(data => this.setState({
      currentUserRepos : data
    }))
    fetch(`https://api.github.com/users/${login}/followers?per_page=10`).
    then(res => res.json()).
    then(data => this.setState({
      currentUserFollowers : data
    }))
  }

  render() {
    const {searchedUsers, error, currentUserDetails, currentUserRepos, currentUserFollowers} = this.state;

    return (
      <div className="App">
       <Header onSubmit={this.handleSubmit}/>
       <Main userSearched={searchedUsers} Error={error} currentUser={this.handleCurrentUser} currentUserDetails={currentUserDetails}currentUserRepos={currentUserRepos}
       currentUserFollowers={currentUserFollowers}/>
       {/* <Loader /> */}
      </div>
    );
  }
}

export default App;
