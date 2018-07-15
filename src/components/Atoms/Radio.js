import React, { Component } from 'react'

class Radio extends Component {
  render() {
    return (
      <div className="radio">
        <span className="label label-default">{this.props.title}</span>
        <input type="radio" name={this.props.name} onClick={(e) => this.props.onClickRadio(e.target.value)} value={this.props.id} />
      </div>
    )
  }
}
export default Radio
