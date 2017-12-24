import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  DropDownMenu,
  MenuItem,
} from 'material-ui';

export default class CreateNodeMenu extends Component {

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    onCreateNode: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  render() {
    const {
      x, y, open,
      onCreateNode,
      onCancel,
    } = this.props;

    return open && (
      <div className="Container" style={{ left: x, top: y }}>
        <DropDownMenu openImmediately={true}>
          <MenuItem onClick={onCreateNode} primaryText="Create Node" />
          <MenuItem onClick={onCancel} primaryText="Cancel" />
        </DropDownMenu>
      </div>
    );
  }
}