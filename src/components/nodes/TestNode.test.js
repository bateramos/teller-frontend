import React from 'react';
import ReactDOM from 'react-dom';
import TextNode from './TextNode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextNode />, div);
});
