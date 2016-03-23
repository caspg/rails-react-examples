import React, { Component, PropTypes } from 'react';

export default class NavLink extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onLinkClick(this.props.path);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.handleClick.bind(this)}>{this.props.children}</a>
      </li>
    );
  }
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired
}
