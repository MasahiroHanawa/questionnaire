import React, { Component } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'
class PrevArea extends Component {

  onClickButton () {
    this.props.survey.actions.prev()
  }

  render() {
    return (
      <div className="col-sm-6 col-md-6">
        {(() => {
          const button = (this.props.survey.survey.answers.length > 0) ?
            <Button name="Prev" onClickButton={() => this.onClickButton()} className="btn btn-primary survey__content_prev" /> :
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
