import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import SearchBox from '../../components/SearchBox'
import { getFilterSearchData } from '../../routes/ResultTile/modules/resultTile'

export const CoreLayout = ({ children = {} }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      <SearchBox getFilterData={getFilterData} />
      {children}
    </div>
  </div>
)

const getFilterData = function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault()
    getFilterSearchData(evt.target.value)
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element
}

export default CoreLayout
