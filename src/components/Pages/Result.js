import React, { Component } from 'react'
import ResultContent from '../Organisms/ResultContent'
import * as actions from '../../actions/survey'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import '../../css/survey.scss'
class Result extends Component {

  componentWillReceiveProps() {
    if (this.props.survey.result === false) {
      this.props.history.push('/')
    }
  }

  componentWillMount() {
    this.props.actions.clearSurveyData()
  }

  render() {
    return (
      <div className="container">
        <ResultContent survey={this.props} />
      </div>
    )
  }
}

Result.propTypes = {
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

const mapStateToProps = (state) => {
  const stateToProps = {
    survey: {
      ...state.survey
    }
  }
  return stateToProps;
}

const mapDispatchProps = (dispatch) => {
  const dispatchProps = {
    actions: bindActionCreators({
      ...actions,
    }, dispatch)
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchProps)(Result)
