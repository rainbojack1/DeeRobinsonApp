import React, { FC } from 'react';
import './PhotoGallery.scss';

interface PhotoGalleryProps {}

const PhotoGallery: FC<PhotoGalleryProps> = () => (
  <div className="PhotoGallery" data-testid="PhotoGallery">
    PhotoGallery Component
  </div>
);

export default PhotoGallery;
