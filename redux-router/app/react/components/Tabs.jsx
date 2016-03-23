import React, { Component, PropTypes } from 'react';

import TabItem from './TabItem';
import tabs from '../constants/tabs';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.renderTabItems = this.renderTabItems.bind(this);
  }

  renderTabItems() {
    return tabs.map((tab, i) => {
      return (
        <TabItem
          key={i}
          label={tab.label}
          path={tab.pathname}
          currentPath={this.props.currentPath}
        />
      );
    });
  }

  render() {
    return (
      <ul className="nav nav-tabs">
        {this.renderTabItems()}
      </ul>
    );
  }
}

Tabs.propTypes = {
  currentPath: PropTypes.string.isRequired
}
