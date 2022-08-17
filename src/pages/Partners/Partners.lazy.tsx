import React, { lazy, Suspense } from 'react';

const LazyPartners = lazy(() => import('./Partners'));

const Partners = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPartners {...props} />
  </Suspense>
);

export default Partners;
