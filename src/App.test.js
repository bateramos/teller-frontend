import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

function render(component) {
  return mount(<MuiThemeProvider>
      {component}
    </MuiThemeProvider>)
}

test('renders without crashing', t => {
  const wrapper = render(<App />);
  t.pass();
});

test('render CreateMenu when clicking on canvas', t => {
  const wrapper = render(<App />);
  wrapper.find('.Canvas').simulate('click', {
    nativeEvent: { offsetX: 20, offsetY: 20 }
  });
  t.is(wrapper.find('CreateNodeMenu').length, 1);
});