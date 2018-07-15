import React, { Component } from 'react'
import Text from '../Atoms/Text'

class TextAnswer extends Component {

  onChangeText(value) {
    this.props.survey.actions.setAnswer(value)
  }

  render() {
    return (
      <div className="col-sm-6 col-md-3">
        information <Text onChangeText={(value) => this.onChangeText(value)} />
      </div>
    )
  }
}

export default TextAnswer
