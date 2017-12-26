import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';

import TextNode from './TextNode';

test('renders without crashing', t => {
  const wrapper = shallow(<TextNode />);
  t.pass();
});
