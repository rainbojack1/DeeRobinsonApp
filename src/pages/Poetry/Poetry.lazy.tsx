import React, { lazy, Suspense } from 'react';

const LazyPoetry = lazy(() => import('./Poetry'));

const Poetry = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPoetry {...props} />
  </Suspense>
);

export default Poetry;
