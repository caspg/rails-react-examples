import React, { Component } from 'react';

import NavbarLinks from '../components/NavbarLinks';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{ borderRadius: 0 }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">RailsReduxRouter Example</a>
          </div>

          <NavbarLinks />
        </div>
      </nav>
    );
  }
}
