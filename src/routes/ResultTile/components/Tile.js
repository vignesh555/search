import React from 'react'
import { baseURL, timeSince, singularPluralChk } from '../../../utils'

const Tile = ({ searchObj }) => (
  <div className='tile'>
    <h4>{searchObj.title} <span className='subComments'>({baseURL(searchObj.url)})</span></h4>
    <p className='subComments'>
      <span>{singularPluralChk(searchObj.num_points, 'point', 'points')}</span>
      <span className='leftSpacing'>by {searchObj.author}</span>
      <span className='leftSpacing'>{timeSince(new Date(searchObj.created_at))}</span>
      <a className='leftSpacing'> | hide</a>
      <span className='leftSpacing'>{singularPluralChk(searchObj.num_comments, ' comment', ' comments', '|')}</span>
    </p>
  </div>
)

Tile.propTypes = {
  searchObj     : React.PropTypes.object
}

export default Tile
