import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';

import createHash from 'hash-sum';

import TextNode from './components/nodes/TextNode';
import CreateNodeMenu from './components/nodes/CreateNodeMenu';
import ConnectionLine from './components/nodes/ConnectionLine';

class App extends Component {

  static propTypes = {
    canvasItems: PropTypes.array([
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      })
    ])
  }

  state = {
    canvasItems: [{
      x: 50, y: 50,
      id: createHash(new Date().getTime())
    }],
    openMenuPositon: { x :0, y: 0 },
    openMenu: false,
  };

  clickOnCanvas(event) {
    const { offsetX, offsetY } = event.nativeEvent;

    if (this.state.movingNode) {
      const { canvasItems, currentSelectedNode } = this.state;
      const node = canvasItems.find(i => i.id === currentSelectedNode);
      node.x = offsetX;
      node.y = offsetY;

      return this.setState({
        movingNode: false,
        currentSelectedNode: null,
        canvasItems: [...canvasItems],
      });
    }
    
    this.setState({
      openMenu: true,
      openMenuPositon: { x: offsetX, y: offsetY },
    });
  }

  onMoveStart(nodeId) {
    this.setState({
      movingNode: true,
      currentSelectedNode: nodeId,
    });
  }

  onDelete(nodeId) {

  }

  onCreateConnection(nodeId) {
    this.setState({
      connectNode: true,
      currentSelectedNode: nodeId,
    });
  }

  onCancelCreateConnect() {
    this.setState({
      connectNode: false,
      currentSelectedNode: null,
    }); 
  }

  onConnect(nodeId) {
    const { canvasItems, currentSelectedNode } = this.state;

    const node = canvasItems.find(i => i.id === currentSelectedNode);
    const targetNode = canvasItems.find(i => i.id === nodeId);

    node.connectTo = targetNode;

    this.setState({
      connectNode: false,
      currentSelectedNode: null,
      canvasItems: [...canvasItems],
    });
  }

  menuCancel() {
    this.setState({ openMenu: false });
  }

  menuCreateNode() {
    const { canvasItems, openMenuPositon } = this.state;
    this.setState({
      canvasItems: [
        ...canvasItems,
        {
          id: createHash(new Date().getTime()),
          x: openMenuPositon.x,
          y: openMenuPositon.y,
        },
      ],
      openMenu: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="Canvas"
          onClick={this.clickOnCanvas.bind(this)}>

          <CreateNodeMenu
            open={this.state.openMenu}
            x={this.state.openMenuPositon.x}
            y={this.state.openMenuPositon.y}
            onCreateNode={this.menuCreateNode.bind(this)}
            onCancel={this.menuCancel.bind(this)}
            
          />
          {this.state.canvasItems
            .filter(e => e.connectTo)
            .map(e => (
              <ConnectionLine
                key={`Line_${e.id}_${e.connectTo.id}`}
                nodeOrigin={e}
                nodeDestiny={e.connectTo} />
            ))
          }
          {this.state.canvasItems.map(e => (
            <TextNode key={e.id} x={e.x} y={e.y} id={e.id}
              hasConnection={!!e.connectTo}
              connectionMode={this.state.connectNode}
              onCreateConnection={this.onCreateConnection.bind(this)}
              onCancelCreateConnect={this.onCancelCreateConnect.bind(this)}
              onMoveStart={this.onMoveStart.bind(this)}
              onDelete={this.onDelete.bind(this)}
              onConnect={this.onConnect.bind(this)}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
