import React, { Component } from 'react'
import ResultArea from '../Molecules/ResultArea'
import PropTypes from 'prop-types'

class ResultContent extends Component {
  render() {
    return (
      <div className="result__content">
        <ResultArea survey={this.props.survey} />
      </div>
    )
  }
}

ResultContent.propTypes = {
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

export default ResultContent
