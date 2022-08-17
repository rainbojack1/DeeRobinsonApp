import React, { lazy, Suspense } from 'react';

const LazyContactUs = lazy(() => import('./ContactUs'));

const ContactUs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContactUs {...props} />
  </Suspense>
);

export default ContactUs;
