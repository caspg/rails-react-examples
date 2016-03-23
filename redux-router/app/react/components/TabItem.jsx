import React, { Component, PropTypes } from 'react';

export default class TabItem extends Component {
  render() {
    return (
      <li role="presentation">
        <a href="#">{this.props.label}</a>
      </li>
    );
  }
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired
}
