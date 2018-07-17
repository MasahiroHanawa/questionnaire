import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Answer extends Component {
  render() {
    return (
      <div className="result__answer_list">
        <span className="result__question">{this.props.questions[0].title}</span>
        <span className="result__answer">{(() => {
          let content = null
          let answerForm = []
          if (this.props.questions[0].type === this.props.formType.text) {
            content =this.props.answer.answer
          } else {
            answerForm = this.props.answerForms.filter(answerForm => 
              answerForm.id === parseInt(this.props.answer.answer, 10)
            )
            content = answerForm[0].title
          }
          return content
        })()}
        </span>
      </div>
    )
  }
}

Answer.propTypes = {
  formType: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  answerForms: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
}

export default Answer
