import React, { Component } from 'react';

import Tabs from '../components/Tabs';

export default class App extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: 5, padding: 20, marginTop: 50  }}>
        <Tabs currentPath={this.props.location.pathname} />

        <br />

        {this.props.children}
      </div>
    );
  }
}
