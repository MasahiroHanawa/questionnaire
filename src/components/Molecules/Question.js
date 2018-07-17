import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
class Question extends Component {
  render() {
    return (
      <div className="survey__survey_question">
        {!_.isEmpty(this.props.survey.survey.params.currentQuestion) ?
        this.props.survey.survey.params.currentQuestion.title 
        : ''}
      </div>
    )
  }
}

Question.propTypes = {
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

export default Question
