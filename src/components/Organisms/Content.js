import React, { Component } from 'react'
import Question from '../Molecules/Question'
import SelectAnswer from '../Molecules/SelectAnswer'
import RadioAnswer from '../Molecules/RadioAnswer'
import TextAnswer from '../Molecules/TextAnswer'
import PropTypes from 'prop-types'

class Content extends Component {
  render() {
    return (
      <div className="row">
        <Question survey={this.props.survey} />
        {(() => {
          let answerForm = null
          if (this.props.survey.survey.params.currentQuestion.type === this.props.survey.survey.formType.text) {
            answerForm = <TextAnswer survey={this.props.survey} />
          } else if (this.props.survey.survey.params.currentQuestion.type === this.props.survey.survey.formType.radio) {
            answerForm = <RadioAnswer survey={this.props.survey} />
          } else if (this.props.survey.survey.params.currentQuestion.type === this.props.survey.survey.formType.select) {
            answerForm = <SelectAnswer survey={this.props.survey} />
          }
          return answerForm;
        })()}
      </div>
    )
  }
}

Content.propTypes = {
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

export default Content
