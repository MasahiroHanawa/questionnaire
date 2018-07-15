import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" 
          className={this.props.className} 
          name={this.props.name} 
          onClick={(e) => this.props.onClickButton(e.target.value)}
          disabled={this.props.isDisabled}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
}


export default Button
