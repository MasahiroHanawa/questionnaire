import React, { Component } from 'react'
class Question extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-12">
        {this.props.survey.survey.params.currentQuestion.title}
      </div>
    )
  }
}

export default Question
