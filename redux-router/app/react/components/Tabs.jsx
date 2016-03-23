import React, { Component, PropTypes } from 'react';

import TabItem from './TabItem';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.renderTabItems = this.renderTabItems.bind(this);
  }

  renderTabItems() {
    const tabs = [
      { label: 'Clicker', pathname: '/' },
      { label: 'Score Board', pathname: '/score-board' },
      { label: 'About', pathname: '/about' }
    ];

    return tabs.map((tab, i) => {
      const isActive = (this.props.currentPath === tab.pathname);
      return <TabItem key={i} label={tab.label} active={isActive} />;
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
