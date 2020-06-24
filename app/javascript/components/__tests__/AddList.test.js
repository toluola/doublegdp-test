import React from 'react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import AddList from '../AddList';

expect.extend({ toBeInTheDocument, toHaveClass })

test('Test for loading state', () => {
  render(
    <AddList />
  );
  screen.getByText('Add Task');
  expect(screen.getAllByRole('textbox'))
});