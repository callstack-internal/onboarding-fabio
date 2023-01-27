import React from 'react';
import ListEmptyComponent from './ListEmptyComponent';

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
