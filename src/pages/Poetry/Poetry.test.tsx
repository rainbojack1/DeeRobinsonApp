import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Poetry from './Poetry';

describe('<Poetry />', () => {
  test('it should mount', () => {
    render(<Poetry />);
    
    const poetry = screen.getByTestId('Poetry');

    expect(poetry).toBeInTheDocument();
  });
});