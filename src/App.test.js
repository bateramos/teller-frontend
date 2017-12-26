import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';

import App from './App';

test('renders without crashing', t => {
  const wrapper = shallow(<App />);
  t.pass();
});
