import React from 'react'
import './SearchBoxView.scss'

export const SearchBoxView = ({ getFilterData, placeHolderText }) => (
  <div>
    <input onKeyPress={getFilterData} type='text' placeholder={placeHolderText} />
  </div>
)

SearchBoxView.propTypes = {
  getFilterData : React.PropTypes.func.isRequired,
  placeHolderText:React.PropTypes.string
}

export default SearchBoxView
