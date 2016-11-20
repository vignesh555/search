import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'search',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ResultTile = require('./containers/ResultTileContainer').default
      const reducer = require('./modules/resultTile').default
      const getSearchData = require('./modules/resultTile').getSearchData

      /*  Add the reducer to the store on key 'ResultTile'  */
      injectReducer(store, { key: 'searchData', reducer })

      /*  Return getComponent   */
      cb(null, ResultTile)
      store.dispatch(getSearchData())
    /* Webpack named bundle   */
    }, 'resultTile')
  }
})
