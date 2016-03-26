import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: 5, padding: 20, marginTop: 50  }}>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { currentPath: ownProps.location.pathname };
}

export default connect(mapStateToProps)(App);
