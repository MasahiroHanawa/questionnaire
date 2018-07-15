import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <span className="label label-default">{this.props.title}</span>
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
export default Button
