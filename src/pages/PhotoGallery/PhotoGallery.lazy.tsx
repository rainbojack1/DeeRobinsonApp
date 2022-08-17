import React, { lazy, Suspense } from 'react';

const LazyPhotoGallery = lazy(() => import('./PhotoGallery'));

const PhotoGallery = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPhotoGallery {...props} />
  </Suspense>
);

export default PhotoGallery;
