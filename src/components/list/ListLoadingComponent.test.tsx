import React from 'react';
import renderer from 'react-test-renderer';
import ListLoadingComponent from './ListLoadingComponent';

test('should render correctly', () => {
  const tree = renderer.create(<ListLoadingComponent />).toJSON();

  expect(tree).toMatchSnapshot();
});
