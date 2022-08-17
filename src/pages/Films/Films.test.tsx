import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Films from './Films';

describe('<Films />', () => {
  test('it should mount', () => {
    render(<Films />);
    
    const films = screen.getByTestId('Films');

    expect(films).toBeInTheDocument();
  });
});