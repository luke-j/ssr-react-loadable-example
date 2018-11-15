import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'

import MyComponent from './MyComponent'

Loadable.preloadReady().then(() => {
  hydrate(<MyComponent />, document.getElementById('root'))
})
