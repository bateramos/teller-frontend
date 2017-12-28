import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextNode from './TextNode';

const defaultProps = {
  id: 'defaultId', x: 0, y: 0,
  onCreateConnection: () => {},
  onCancelCreateConnect: () => {},
  onMoveStart: () => {},
  onConnect: () => {},
};

function render(component) {
  return mount(
    <MuiThemeProvider>
      {component}
    </MuiThemeProvider>
  );
}

test('renders without crashing', t => {
  const wrapper = render(<TextNode {...defaultProps} />);
  t.pass();
});

test('render connection mode', t => {
  const onConnect = spy();
  const wrapper = render(<TextNode {...{...defaultProps, onConnect} } connectionMode={true}/>);
  t.is(wrapper.find('RaisedButton').length, 1)
  wrapper.find('RaisedButton').find('button').simulate('click');
  t.true(onConnect.calledOnce);
});

test('render cancel connection mode', t => {
  const onCreateConnection = spy();
  const onCancelCreateConnect = spy();
  const wrapper = render(<TextNode {...{...defaultProps, onCreateConnection, onCancelCreateConnect} } connectionMode={false} hasConnection={false}/>);
  t.is(wrapper.find('RaisedButton').length, 1);
  wrapper.find('RaisedButton').find('button').simulate('click');
  t.true(onCreateConnection.calledOnce);
  t.is(wrapper.find('RaisedButton').length, 1);
  wrapper.find('RaisedButton').find('button').simulate('click');
  t.true(onCancelCreateConnect.calledOnce);
});

test('render without connection in connection mode', t => {
  const onCreateConnection = spy();
  const wrapper = render(<TextNode {...{...defaultProps, onCreateConnection} } hasConnection={false}/>);
  t.is(wrapper.find('RaisedButton').length, 1)
  wrapper.find('RaisedButton').find('button').simulate('click');
  t.true(onCreateConnection.calledOnce);
});

test('render connection mode when is already as connection', t => {
  const wrapper = render(<TextNode {...defaultProps} hasConnection={true} connectionMode={true}/>);
  t.is(wrapper.find('RaisedButton').length, 0)
});