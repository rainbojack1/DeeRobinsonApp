import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Music from './Music';

describe('<Music />', () => {
  test('it should mount', () => {
    render(<Music />);
    
    const music = screen.getByTestId('Music');

    expect(music).toBeInTheDocument();
  });
});