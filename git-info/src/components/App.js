import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './../scss/App.scss';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchedUsers : []
    }
  }
  
  handleSubmit = (e, userName) => {
    console.log(userName);
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${userName}`).
    then(res => res.json()).
    then(data => this.setState({
      searchedUsers : data.items
    }));

    e.target.firstChild.value = '';
  }

  render() {
    const {searchedUsers} = this.state;

    return (
      <div className="App">
       <Header onSubmit={this.handleSubmit}/>
       <Main userSearched={searchedUsers}/>
      </div>
    );
  }
}

export default App;
