import React, { Component, PropTypes } from 'react';

import NavLink from './NavLink';

export default class NavbarLinks extends Component {
  renderLinks() {
    const links = [
      { label: 'Clicker', pathname: '/' },
      { label: 'Score Board', pathname: '/score-board' },
      { label: 'About', pathname: '/about' }
    ];

    return links.map((link, i) => {
      const { onLinkClick } = this.props;
      return (
        <NavLink key={i} path={link.pathname} onLinkClick={onLinkClick}>
          {link.label}
        </NavLink>
      );
    });
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        {this.renderLinks()}
      </ul>
    );
  }
}

NavbarLinks.propTypes = {
  onLinkClick: PropTypes.func.isRequired
}
