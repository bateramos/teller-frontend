import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ConnectionLine extends Component {
  static propTypes = {
    nodeOrigin: PropTypes.shape().isRequired,
    nodeDestiny: PropTypes.shape().isRequired,
  }

  state = {}

  componentDidMount() {
    this.updatePositions(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePositions(nextProps);
  }

  updatePositions(props) {
    const { nodeOrigin, nodeDestiny } = props;
    const x1 = nodeOrigin.x <= nodeDestiny.x ? nodeOrigin.x : nodeDestiny.x;
    const x2 = nodeOrigin.x > nodeDestiny.x ? nodeOrigin.x : nodeDestiny.x;
    const y1 = nodeOrigin.y <= nodeDestiny.y ? nodeOrigin.y : nodeDestiny.y;
    const y2 = nodeOrigin.y > nodeDestiny.y ? nodeOrigin.y : nodeDestiny.y;

    const width = x2 - x1;
    const height = y2 - y1;

    const initialX = x1 < x2 ? x1 : x2;
    const initialY = y1 < y2 ? y1 : y2;

    this.setState({
      x1: nodeOrigin.x > nodeDestiny.x ? 0 : width,
      x2: nodeOrigin.x < nodeDestiny.x ? 0 : width,
      y1: nodeOrigin.y > nodeDestiny.y ? 0 : height,
      y2: nodeOrigin.y < nodeDestiny.y ? 0 : height,
      initialX, initialY, width, height
    });
  }

  render() {
    const { x1, x2, y1, y2, initialX, initialY, width, height } = this.state;
    return (
      <svg width={width} height={height} style={{
        position: 'absolute',
        left: initialX,
        top: initialY,
        pointerEvents: 'none'
      }}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={{
          stroke: '#006600',
          markerEnd: 'url(#markerArrow1)',
          position: 'absolute'
        }} />
      </svg>
    );
  }
}