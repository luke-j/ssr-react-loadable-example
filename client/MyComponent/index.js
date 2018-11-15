import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./MyComponent'),
  loading: () => <span>loading</span>
})
