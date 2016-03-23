import React, { Component } from 'react';

import TabItem from './TabItem';

export default class Tabs extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <TabItem label="Clicker" />
        <TabItem label="Score Board" />
        <TabItem label="About" />
      </ul>
    );
  }
}
