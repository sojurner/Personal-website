import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

test('it has navigation bar', () => {
  const { getByText, getByTitle, getByLabelText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  getByText('Projects').click();
  expect();
});
