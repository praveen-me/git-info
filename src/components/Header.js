import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      userName : e.target.value
    })
  }

  render() {
    const {userName} = this.state;
    return (
      <header>
        <div className="logo-details">
          <div className="logo-container">
            <span className="logo-icon"> <i className="fab fa-github"></i> </span>
            <h1 className="logo inline">GitHub User Info</h1>
          </div>
          <div className="api-details">
            Made <i class="fas fa-heart"></i> by <a href="https://developer.github.com/v3/">Github API</a>
          </div>
        </div>
        <form className="search-form" onSubmit={(e) => this.props.onSubmit(e,userName)}>
          <input type="text" className="search-value" 
          onChange={this.handleOnChange} 
          value={userName}
          placeholder="Enter user-name eg: praveen-me"/>
        </form>
      </header>
    );
  }
}

export default Header;