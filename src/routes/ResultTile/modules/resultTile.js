import { List, fromJS } from 'immutable'
import { search } from '../../../utils/search'

// ------------------------------------
// Constants
// ------------------------------------
const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const FILTER_SEARCH_DATA = 'FILTER_SEARCH_DATA'
const SORT_SEARCH_DATA = 'SORT_SEARCH_DATA'
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
export function filterData (value = {}) {
  return {
    type: FILTER_SEARCH_DATA,
    searchObj : value
  }
}

export function sortData (value = {}) {
  return {
    type: SORT_SEARCH_DATA,
    sortObj : value
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
        localStorage.setItem('searchData', JSON.stringify(json))
        dispatch(getInitialData(fromJS(json)))
      })
  }
}

export const getFilterSearchData = (value) => {
  return (dispatch) => {
    return dispatch(filterData(value))
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
  [SORT_SEARCH_DATA] : (state, action) => {
    if (action.sortObj.sortOrder === 'ASC') {
      state = state.sort((a, b) =>
      a.get(action.sortObj.sortType).localeCompare(b.get(action.sortObj.sortType)))
    } else if (action.sortObj.sortOrder === 'DESC') {
      state = state.sort((a, b) =>
      a.get(action.sortObj.sortType).localeCompare(b.get(action.sortObj.sortType))).reverse()
    }
    return state
  },
  [FILTER_SEARCH_DATA] : (state, action) => {
    let newData = []
    if (action.searchObj.searchText) {
      newData = search(action.searchObj.searchText,
        JSON.parse(localStorage.getItem('searchData')),
        action.searchObj.searchBy)
    } else {
      newData = JSON.parse(localStorage.getItem('searchData'))
    }
    state = state.clear()
    state = fromJS(newData)
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
