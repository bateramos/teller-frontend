import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

Enzyme.configure({ adapter: new Adapter() });

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};