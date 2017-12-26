import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';

import CreateNodeMenu from './CreateNodeMenu';

test('renders without crashing', t => {
  const wrapper = shallow(<CreateNodeMenu />);
  t.pass();
});
