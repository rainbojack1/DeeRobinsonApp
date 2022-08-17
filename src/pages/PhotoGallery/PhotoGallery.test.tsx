import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoGallery from './PhotoGallery';

describe('<PhotoGallery />', () => {
  test('it should mount', () => {
    render(<PhotoGallery />);
    
    const photoGallery = screen.getByTestId('PhotoGallery');

    expect(photoGallery).toBeInTheDocument();
  });
});