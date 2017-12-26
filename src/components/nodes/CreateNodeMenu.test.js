import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import CreateNodeMenu from './CreateNodeMenu';

const defaultProps = {
  id: 'defaultId', x: 0, y: 0,
  open: false,
  onCreateNode: () => {},
  onCancel: () => {},
};

test('renders without crashing', t => {
  const wrapper = shallow(<CreateNodeMenu {...defaultProps} />);
  t.pass();
});
