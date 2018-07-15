import React, { Component } from 'react'

class Text extends Component {
  render() {
    return (
      <div>
        <textarea onChange={(e) => this.props.onChangeText(e.target.value)} />
      </div>
    )
  }
}

export default Text
