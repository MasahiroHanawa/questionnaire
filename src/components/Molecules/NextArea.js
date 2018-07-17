import React, { Component } from 'react'
import Button from '../Atoms/Button'
import _ from 'lodash'
import PropTypes from 'prop-types'
class NextArea extends Component {
  onClickButton () {
    this.props.survey.actions.next()    
  }
  render() {
    let className = ''
    let isDisabled = false
    if (_.isEmpty(this.props.survey.survey.params.answer)) {
      className = "survey__button_desabled"
      isDisabled = true
    } else {
      className = "survey__button"
    }
    return (
      <div className="survey__next_area">
        {(() => {
          const button = (this.props.survey.survey.answers.length <= this.props.survey.survey.questions.length) ?
            <Button name="Next" onClickButton={() => this.onClickButton()} className={className} isDisabled={isDisabled} /> :
            null
          return button
        })()}
      </div>
    )
  }
}

NextArea.propTypes = {
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

export default NextArea
