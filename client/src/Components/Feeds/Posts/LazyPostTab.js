import React, { Suspense, lazy } from 'react'
const LazyPostTab = lazy(() => import('./PostTab'))

function component(props) {
  return (
    <Suspense fallback={null}>
      <LazyPostTab {...props} />
    </Suspense>
  )
}

export default component
