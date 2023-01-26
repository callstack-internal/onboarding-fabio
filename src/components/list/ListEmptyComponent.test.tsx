import React from 'react';
import renderer from 'react-test-renderer';
import ListEmptyComponent from './ListEmptyComponent';

test('should render correctly', () => {
  const tree = renderer
    .create(
      <ListEmptyComponent
        description={'Empty list.'}
        onTryAgainPress={() => {}}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('should render a different state correctly', () => {
  expect(
    <ListEmptyComponent
      description={'Empty list.'}
      onTryAgainPress={() => {}}
    />,
  ).toMatchDiffSnapshot(
    <ListEmptyComponent
      description={'Another description.'}
      onTryAgainPress={() => {}}
    />,
  );
});
