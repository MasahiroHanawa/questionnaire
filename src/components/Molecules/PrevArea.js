import React, { Component } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'
import _ from 'lodash'
class PrevArea extends Component {

  onClickButton () {
    this.props.survey.actions.prev()
  }

  render() {
    return (
      <div className="survey__prev_area">
        {(() => {
          const button = !_.isEmpty(this.props.survey.survey.answers) &&
          this.props.survey.survey.params.currentQuestion.id !== this.props.survey.survey.questions[0].id ?
            <Button name="Prev" onClickButton={() => this.onClickButton()} className="survey__button survey__content_prev" /> :
            null
          return button
        })()}
      </div>
    )
  }
}

PrevArea.propTypes = {
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

export default PrevArea
