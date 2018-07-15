import React, { Component } from 'react'
import NextArea from '../Molecules/NextArea'
import PrevArea from '../Molecules/PrevArea'

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <PrevArea survey={this.props.survey} />
        <NextArea survey={this.props.survey} />
      </div>
    )
  }
}

export default Footer
