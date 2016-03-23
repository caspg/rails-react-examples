import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TabItem extends Component {
  render() {
    const { currentPath, path, label } = this.props;
    const isActive = (currentPath === path);

    return (
      <li role="presentation" className={isActive ? "active" : ""}>
        <Link to={path}>{label}</Link>
      </li>
    );
  }
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
