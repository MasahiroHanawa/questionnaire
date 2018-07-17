import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Radio extends Component {
  render() {
    return (
      <div className="radio">
        <span className="label label-default">{this.props.title}</span>
        <input type="radio" name={this.props.name} onClick={(e) => this.props.onClickRadio(e.target.value)} value={this.props.id} defaultChecked={this.props.checked}/>
      </div>
    )
  }
}

Radio.propTypes = {
  onClickRadio: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
}

export default Radio
