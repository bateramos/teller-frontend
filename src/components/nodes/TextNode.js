import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextNode.css';

import {
  Paper,
  TextField,
  RaisedButton,
  IconButton,
} from 'material-ui';

import {
  ActionList,
  ActionDelete,
} from 'material-ui/svg-icons';

class TextNode extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    hasConnection: PropTypes.bool,
    onCreateConnection: PropTypes.func.isRequired,
    onCancelCreateConnect: PropTypes.func.isRequired,
    onMoveStart: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    connectionMode: PropTypes.bool,
  }

  static defaultProps = {
    connectionMode: false,
    hasConnection: false,
  }

  state = {};

  onClick(event) {
    event.stopPropagation();
  }

  onCreateConnection() {
    this.props.onCreateConnection(this.props.id);
    this.setState({ creatingConnection: true });
  }

  onMoveStart() {
    this.props.onMoveStart(this.props.id);
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  onConnect() {
    this.props.onConnect(this.props.id);
  }

  onCancelCreateConnection() {
    this.props.onCancelCreateConnect();
    this.setState({ creatingConnection: false });
  }

  render() {
    const { connectionMode, hasConnection, onDelete } = this.props;
    const { creatingConnection } = this.state;
    return (
      <Paper className="Container" onClick={this.onClick} zDepth={5} style={{ left: this.props.x, top: this.props.y }}>
        <div>
          <IconButton tooltip="move" onClick={this.onMoveStart.bind(this)}>
            <ActionList />
          </IconButton>
          <IconButton tooltip="delete" onClick={this.onDelete.bind(this)}>
            <ActionDelete />
          </IconButton>
        </div>
        <TextField id="text" className="Text-Input" multiLine={true}/>
        {!hasConnection ? !creatingConnection ? !connectionMode ?
          <RaisedButton className="Connect-Button" label="Create Connection" primary={true} onClick={this.onCreateConnection.bind(this)}/> :
          <RaisedButton className="Connect-Button" label="Connect" primary={true} onClick={this.onConnect.bind(this)}/> :
          <RaisedButton className="Connect-Button" label="Cancel" primary={true} onClick={this.onCancelCreateConnection.bind(this)}/> :
          null
        }
      </Paper>
    );
  }
}

export default TextNode;