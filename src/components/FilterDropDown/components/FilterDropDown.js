import React from 'react'
import './FilterDropDown.scss'

const FilterDropDown = ({ id, className, selected, handleChange, dataList }) => (
  <div>
    <select id={id} className={className} value={selected}
      onChange={handleChange}>
      {dataList.map(function (data) {
        return (
          <option key={data} value={data}>
            {data}
          </option>
        )
      })}
    </select>
  </div>
)

FilterDropDown.propTypes = {
  id: React.PropTypes.string.isRequired,
  className:React.PropTypes.string.isRequired,
  selected:React.PropTypes.string,
  handleChange:React.PropTypes.func.isRequired,
  dataList:React.PropTypes.array.isRequired
}

export default FilterDropDown
