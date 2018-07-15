import React, { Component } from 'react'
import Button from '../Atoms/Button'
import _ from 'lodash'

class NextArea extends Component {
  onClickButton () {
    this.props.survey.actions.next()
  }
  render() {
    let className = ''
    let isDisabled = false
    if (_.isEmpty(this.props.survey.survey.params.answer)) {
      className = "btn btn-primary survey__content_next_desable"
      isDisabled = true
    } else {
      className = "btn btn-primary survey__content_next"
    }
    return (
      <div className="col-sm-6 col-md-3">
        {(() => {
          const button = (this.props.survey.survey.answers.length < this.props.survey.survey.questions.length) ?
            <Button name="Next" onClickButton={() => this.onClickButton()} className={className} isDisabled={isDisabled} /> :
            null
          return button
        })()}
      </div>
    )
  }
}

export default NextArea
