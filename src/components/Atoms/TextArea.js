import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea onChange={(e) => this.props.onChangeText(e.target.value)} 
        value={this.props.value} 
        className={this.props.className}
        />
      </div>
    )
  }
}

TextArea.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default TextArea
