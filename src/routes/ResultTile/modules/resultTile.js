import { List, fromJS } from 'immutable'
// ------------------------------------
// Constants
// ------------------------------------
const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const FILTER_SEARCH_DATA = 'FILTER_SEARCH_DATA'
const GET_SEARCH_DATA_URL = 'http://starlord.hackerearth.com/cognizantinternal/hackernews'

// ------------------------------------
// Actions
// ------------------------------------
export function getInitialData (value = List([])) {
  return {
    type    : GET_SEARCH_DATA,
    payload : value
  }
}
export function filterData (value = '') {
  console.log(value)
  return {
    type: FILTER_SEARCH_DATA,
    searchText : value
  }
}

export const getSearchData = () => {
  return (dispatch) => {
    return fetch(GET_SEARCH_DATA_URL)
      .then(response => {
        if (response.status >= 400) {
          console.log(response)
        }
        return response.json()
      })
      .then(json => {
        if (json.length > 0) {
          json.shift()
        }
        localStorage.setItem('searchData', json)
        dispatch(getInitialData(fromJS(json)))
      })
  }
}

export const getFilterSearchData = (value) => {
  return (dispatch) => {
    return dispatch(filterData())
  }
}

export const actions = {
  getSearchData
}

// ------------------------------------
// Actions Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_SEARCH_DATA] : (state, action) => {
    return action.payload
  },
  [FILTER_SEARCH_DATA] : (state, action) => {
    console.log(action)
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = List([])
export default function searchDataReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
