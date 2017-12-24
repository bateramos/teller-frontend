import React from 'react';
import ReactDOM from 'react-dom';
import CreateNodeMenu from './CreateNodeMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateNodeMenu />, div);
});
