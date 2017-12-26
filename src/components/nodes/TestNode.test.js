import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import TextNode from './TextNode';

const defaultProps = {
  id: 'defaultId', x: 0, y: 0,
  onCreateConnection: () => {},
  onCancelCreateConnect: () => {},
  onMoveStart: () => {},
  onConnect: () => {},
};

test('renders without crashing', t => {
  const wrapper = shallow(<TextNode {...defaultProps} />);
  t.pass();
});
