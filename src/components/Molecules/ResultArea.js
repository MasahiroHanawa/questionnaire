import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Answer from '../Atoms/Answer'

class ResultArea extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-12">
        {this.props.survey.survey.answers.map(answer => {
          return <Answer 
            formType={this.props.survey.survey.formType}
            answer={answer} 
            answerForms={this.props.survey.survey.answerForms} 
            questions={this.props.survey.survey.questions.filter((q => 
              q.id === answer.question_id
            ))} 
            key={answer.question_id}
          />
        })}
      </div>
    )
  }
}

ResultArea.propTypes = {
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

export default ResultArea
