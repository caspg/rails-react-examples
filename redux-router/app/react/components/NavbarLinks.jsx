import React, { Component, PropTypes } from 'react';

import NavLink from './NavLink';
import tabs from '../constants/tabs';

export default class NavbarLinks extends Component {
  renderLinks() {
    return tabs.map((link, i) => {
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
