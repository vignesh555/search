import React from 'react'
import './FilterDropDown.scss'

const FilterDropDown = ({ id, className, selected, handleChange, dataList }) => (
  <select id={id} className={className}
    onChange={handleChange}>
    {dataList.map(function (data) {
      return (
        <option key={data.key} value={data.key}>
          {data.text}
        </option>
      )
    })}
  </select>
)

FilterDropDown.propTypes = {
  id: React.PropTypes.string.isRequired,
  className:React.PropTypes.string.isRequired,
  selected:React.PropTypes.string,
  handleChange:React.PropTypes.func.isRequired,
  dataList:React.PropTypes.array.isRequired
}

export default FilterDropDown
