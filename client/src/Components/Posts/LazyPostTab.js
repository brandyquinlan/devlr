import React, { useState, Suspense, lazy, useEffect } from 'react'
import Loading from '../Loading'
const LazyPostTab = lazy(() => import('./PostTab'))

function component(props) {
  return (
    <Suspense fallback={<Loading />}>
      <LazyPostTab {...props} />
    </Suspense>
  )
}

export default component
