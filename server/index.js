import Loadable from 'react-loadable'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { getBundles } from 'react-loadable/webpack'

import MyComponent from '../client/MyComponent'
import manifest from '../build/loadable-manifest.json'

const app = express()
app.use(express.static('build'))

app.get('/', (req, res) => {
  const modules = []
  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <MyComponent />
    </Loadable.Capture>
  )

  const bundles = getBundles(manifest, modules)

  res.send(`
    <html>
      <body>
        <div id="root">${markup}</div>
        <script src="/manifest.min.js"></script>
        ${bundles
          .map(({ file }) => `<script src="/${file}"></script>`)
          .join('\n')}
        <script src="/app.min.js"></script>
      </body>
    </html>
  `)
})

Loadable.preloadAll().then(() => {
  app.listen(8080, () => {
    console.log('Running...')
  })
})
