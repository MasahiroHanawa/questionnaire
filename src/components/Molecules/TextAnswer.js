import React, { Component } from 'react'
import TextArea from '../Atoms/TextArea'
import PropTypes from 'prop-types'
class TextAnswer extends Component {

  onChangeText(value) {
    this.props.survey.actions.setAnswer(value)
  }

  render() {
    return (
      <div className="col-sm-6 col-md-3">
        <TextArea onChangeText={(value) => this.onChangeText(value)} value={this.props.survey.survey.params.answer} />
      </div>
    )
  }
}

TextAnswer.propTypes = {
  actions: PropTypes.shape({
    getAnswer: PropTypes.func.isRequired,
    getQuestion: PropTypes.func.isRequired,
    setAnswer: PropTypes.func.isRequired,
  }),
  survey: PropTypes.shape({
    params: PropTypes.shape({
      answer: PropTypes.string,
      currentQuestion: PropTypes.object,
    }),
    formType: PropTypes.shape({
      radio: PropTypes.integer,
      select: PropTypes.integer,
      text: PropTypes.integer,
    }),
    answers: PropTypes.array,
    answerForms: PropTypes.array,
    message: PropTypes.string,
  })
}

export default TextAnswer
