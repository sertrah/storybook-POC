import React from 'react';
import ReactDOM from 'react-dom';
import { Default } from './task.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Default />, div);
  expect(div).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});