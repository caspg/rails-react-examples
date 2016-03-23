import React, { Component, PropTypes } from 'react';

import NavLink from './NavLink';
import tabs from '../constants/tabs';

export default class NavbarLinks extends Component {
  renderLinks() {
    return tabs.map((link, i) => {
      const { onLinkClick, routing } = this.props;
      const currentPath = routing.locationBeforeTransitions ?
        routing.locationBeforeTransitions.pathname : '';

      return (
        <NavLink key={i} path={link.pathname} onLinkClick={onLinkClick} currentPath={currentPath}>
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
  onLinkClick: PropTypes.func.isRequired,
  routing: PropTypes.object.isRequired
}
