import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import NavbarLinks from '../components/NavbarLinks';
import CounterDisplay from '../components/CounterDisplay';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClicked = this.handleLinkClicked.bind(this);
  }

  handleLinkClicked(path) {
    this.props.dispatch(push(path));
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={{ borderRadius: 0 }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">RailsReduxRouter Example</a>
          </div>

          <NavbarLinks onLinkClick={this.handleLinkClicked} />

          <div className="pull-right">
            <CounterDisplay
              counter={this.props.counter}
            />
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, x) {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(Navbar);
