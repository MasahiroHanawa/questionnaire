import React, { Component } from 'react'
import Content from '../Organisms/Content'
import Footer from '../Organisms/Footer'
import * as actions from '../../actions/survey'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
class Survey extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.survey.result === true) {
      this.props.history.push('/result')
    } else if (this.props.survey.params.currentQuestion.id !== null &&
    nextProps.survey.params.currentQuestion.id !== this.props.survey.params.currentQuestion.id) {
      this.props.history.push('/survey/' + (nextProps.survey.params.currentQuestion.id))
    }
  }

  componentWillMount() {
    this.props.actions.getQuestion(this.props.location.pathname.substring(8))
    this.props.actions.getAnswer(this.props.location.pathname.substring(8))
  }

  render() {
    return (
      <div className="survey">
        <Content survey={this.props} />
        <Footer survey={this.props} />
      </div>
    )
  }
}

Survey.propTypes = {
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

export default connect(mapStateToProps, mapDispatchProps)(Survey)
