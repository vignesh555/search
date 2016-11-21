import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import SearchBox from '../../components/SearchBox'
import FilterDropDown from '../../components/FilterDropDown'
import { getFilterSearchData, sortData } from '../../routes/ResultTile/modules/resultTile'

let dispatchAction = {}
const filterList = [
  {
    text : 'By Title',
    key : 'title'
  },
  {
    text : 'By Author',
    key : 'author'
  }
]
const sortBy = [{
  text : 'Select a Sort By',
  key : ''
},
  {
    text : 'Title A-Z',
    key : 'title|ASC'
  },
  {
    text : 'Title Z-A',
    key : 'title|DESC'
  },
  {
    text : 'Author A-Z',
    key : 'author|ASC',
    order:'ASC'
  },
  {
    text : 'Author Z-A',
    key : 'author|DESC'
  }]
const searchDefaultText = 'Search...'
let searchByText = filterList[0].key

export const CoreLayout = ({ children = {} }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      <SearchBox getFilterData={getFilterData} placeHolderText={searchDefaultText} />
      <div className='col-xs-12'>
        <label className='pull-left'>Search By</label>
        <FilterDropDown id='Filter' className='form-control pull-left' selected=''
          handleChange={handleChange} dataList={filterList} />

        <label className='pull-left'>Sort By</label>
        <FilterDropDown id='Sort' className='form-control pull-left' selected=''
          handleChange={handleSort} dataList={sortBy} />
      </div>
      <div className='clearBoth'>
        {children}
      </div>
    </div>
  </div>
)

export const dispatchStore = function (store) {
  dispatchAction = store.dispatch
}

const handleChange = function (evt) {
  searchByText = evt.target.value
}

const handleSort = function (evt) {
  let selectedSort = evt.target.value ? evt.target.value.split('|') : ['', '']

  dispatchAction(sortData({
    sortType:selectedSort[0],
    sortOrder:selectedSort[1]
  }))
}

const getFilterData = function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault()
    dispatchAction(getFilterSearchData({ searchText:evt.target.value, searchBy:searchByText }))
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element
}

export default CoreLayout
