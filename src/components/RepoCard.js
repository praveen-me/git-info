import React, { Component } from 'react';

class RepoCard extends Component {
  render() {
    const {html_url, name, description, language, stargazers_count, forks_count} = this.props.repo;
    return (
      <div className="repo-container">
        <h4 className="repo-header">
          <a href={html_url}>{name}</a>
        </h4>
        <p className="repo-description">{description}</p>
        <div className="repo-detail-section">
          <span className="repo-language repo-honour">{language}</span>
          <span className="repo-honour"><i class="fas fa-star"></i>{stargazers_count}</span>
          <span className="repo-honour"><i class="fas fa-code-branch"></i>{forks_count}</span>
        </div>
      </div>
    );
  }
}

export default RepoCard;