import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Select extends Component {
  render() {
    return (
      <div className="servey__select servey__option">
        <select value={this.props.value} onChange={(e) => this.props.onChangeSelect(e.target.value)} required>
          <option value="" hidden>Please Select</option>
          {this.props.options.map(option => {
            return <option value={option.id} key={option.id} >{option.title}</option>
          })}
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Select
