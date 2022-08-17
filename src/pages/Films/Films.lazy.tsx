import React, { lazy, Suspense } from 'react';

const LazyFilms = lazy(() => import('./Films'));

const Films = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFilms {...props} />
  </Suspense>
);

export default Films;
