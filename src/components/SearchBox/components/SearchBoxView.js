import React from 'react'
import './SearchBoxView.scss'

export const SearchBoxView = ({ getFilterData }) => (
  <div>
    <input onKeyPress={getFilterData} type='text' placeholder='Search..' />
  </div>
)

SearchBoxView.propTypes = {
  getFilterData : React.PropTypes.func.isRequired
}

export default SearchBoxView
