import React from 'react';
import renderer from 'react-test-renderer';
import ListSeparator from './ListSeparator';

test('should render correctly', () => {
  const tree = renderer.create(<ListSeparator />).toJSON();

  expect(tree).toMatchSnapshot();
});
