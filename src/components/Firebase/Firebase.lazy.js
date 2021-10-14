import React, { lazy, Suspense } from 'react';

const LazyFirebase = lazy(() => import('./Firebase'));

const Firebase = props => (
  <Suspense fallback={null}>
    <LazyFirebase {...props} />
  </Suspense>
);

export default Firebase;
