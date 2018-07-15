import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Select extends Component {
  render() {
    return (
      <div>
        <select value={this.props.value} onChange={(e) => this.props.onChangeSelect(e.target.value)} className="form-control">
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
