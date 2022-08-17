import React, { lazy, Suspense } from 'react';

const LazyBlog = lazy(() => import('./Blog'));

const Blog = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBlog {...props} />
  </Suspense>
);

export default Blog;
