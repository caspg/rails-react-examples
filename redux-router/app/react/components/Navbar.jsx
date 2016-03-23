import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{ borderRadius: 0 }}>
        <div className="containerFluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">RailsReduxRouter Example</a>
          </div>
        </div>
      </nav>
    );
  }
}
