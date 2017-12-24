import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextNode from './components/nodes/TextNode';
import CreateNodeMenu from './components/nodes/CreateNodeMenu';

class App extends Component {

  state = {
    canvasItems: [{ x: 50, y: 50 }],
    openMenuPositon: { x :0, y: 0 },
    openMenu: false,
  };

  clickOnCanvas(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    this.setState({
      openMenu: true,
      openMenuPositon: { x: offsetX, y: offsetY },
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
        { x: openMenuPositon.x, y: openMenuPositon.y },
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
          {this.state.canvasItems.map(e => (<TextNode key={`${e.x}${e.y}`} x={e.x} y={e.y} />))}
        </div>
      </div>
    );
  }
}

export default App;
