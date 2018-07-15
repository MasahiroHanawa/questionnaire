import React, { Component } from 'react'
import Select from '../Atoms/Select'
import _ from 'lodash'
import PropTypes from 'prop-types'
class SelectAnswer extends Component {

  onChangeSelect(value) {
    this.props.survey.actions.setAnswer(value)
  }


  render() {
    let options = _.filter(this.props.survey.survey.answerForms, (a) => 
      this.props.survey.survey.params.currentQuestion.answer_manage_id === a.answer_manage_id
    )
    return (
      <div className="col-sm-6 col-md-6">
        <Select options={options}
          value={this.props.survey.survey.params.answer}
          onChangeSelect={(value) => this.onChangeSelect(value)}
        />
      </div>
    )
  }
}

SelectAnswer.propTypes = {
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

export default SelectAnswer
