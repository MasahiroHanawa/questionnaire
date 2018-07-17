import React, { Component } from 'react'
import Radio from '../Atoms/Radio'
import _ from 'lodash'
import PropTypes from 'prop-types'
class RadioAnswer extends Component {

  onClickRadio(value) {
    this.props.survey.actions.setAnswer(value)
  }

  render() {
    return (
      <div className="survey__radio_answer">
        {(() => {
          let answers = _.filter(this.props.survey.survey.answerForms, (a) => {
            return a.answer_manage_id === this.props.survey.survey.params.currentQuestion.answer_manage_id
          })
          let radios = answers.map((answer) => {
            return (
              <Radio 
                title={answer.title}
                id={answer.id}
                name="answer"
                checked={answer.id === parseInt(this.props.survey.survey.params.answer, 10) ?
                  true :
                  false}
                onClickRadio={(value) => this.onClickRadio(value)}
                key={answer.id}
                />
            )
          })
          return radios
        })()}
      </div>
    )
  }
}

RadioAnswer.propTypes = {
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

export default RadioAnswer
