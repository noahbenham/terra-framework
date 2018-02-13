import React from 'react';

import Application from '../../src/Application';

describe('Application', () => {
  it('should render an Application without optional props', () => {
    const result = shallow((
      <Application />
    ));
    expect(result).toMatchSnapshot();
  });
});
