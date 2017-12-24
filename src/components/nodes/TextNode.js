import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextNode.css';

import {
  Paper,
  TextField,
} from 'material-ui';

class TextNode extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  onClick(event) {
    event.stopPropagation();
  }

  render() {
    return (
      <Paper className="Container" onClick={this.onClick} zDepth={5} style={{ left: this.props.x, top: this.props.y }}>
        <TextField id="text" className="Text-Input" multiLine={true}/>
      </Paper>
    );
  }
}

export default TextNode;