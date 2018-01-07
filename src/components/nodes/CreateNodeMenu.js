import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  DropDownMenu,
  Menu,
  MenuItem,
  Popover,
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

    return (
      <div className="CreateMenuContainer" ref={ref => this.container = ref} style={{ width: x, height: y }}>
        <Popover open={open}
          anchorOrigin={{horizontal: "right", vertical: "bottom"}}
          targetOrigin={{horizontal: "left", vertical: "top"}}
          anchorEl={this.container}>
          <Menu>
            <MenuItem onClick={onCreateNode} primaryText="Create Node" />
            <MenuItem onClick={onCancel} primaryText="Cancel" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
