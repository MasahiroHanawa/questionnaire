import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Answer extends Component {
  render() {
    return (
      <div>
        <span className="label label-default">{this.props.questions[0].title}</span>
        <p>{(() => {
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
        </p>
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
