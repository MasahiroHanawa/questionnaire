import React, { Component } from 'react'
import Radio from '../Atoms/Radio'
import _ from 'lodash'

class RadioAnswer extends Component {

  onClickRadio(value) {
    this.props.survey.actions.setAnswer(value)
  }

  render() {
    return (
      <div className="form-inline col-sm-12 col-md-12">
        {(() => {
          let answers = _.filter(this.props.survey.survey.answerForms, (a) => {
            return a.answer_manage_id === this.props.survey.survey.params.currentQuestion.answer_manage_id
          })
          let radios = answers.map((answer) => {
            return (
              <div className="col-sm-12 col-md-6" key={answer.id}>
                <Radio title={answer.title} id={answer.id} name="answer" onClickRadio={(value) => this.onClickRadio(value)} />
              </div>
            )
          })
          return radios
        })()}
      </div>
    )
  }
}

export default RadioAnswer
