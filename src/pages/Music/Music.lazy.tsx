import React, { lazy, Suspense } from 'react';

const LazyMusic = lazy(() => import('./Music'));

const Music = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMusic {...props} />
  </Suspense>
);

export default Music;
