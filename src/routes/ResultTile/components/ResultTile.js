import React from 'react'
import Tile from './Tile'
import './ResultTile.scss'

const ResultTile = ({ searchData }) => (
  <div className='resultTile text-left'>
    {
      searchData.map((objData, index) => {
        return (
          <div key={index}><Tile searchObj={objData} /></div>
        )
      })
    }
  </div>
)

ResultTile.propTypes = {
  searchData     : React.PropTypes.array
}

export default ResultTile
