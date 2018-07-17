import apiClient from '../utils/api'
import * as constants from '../constants'

export function setAnswer(value) {
  return (dispatch) => {
    dispatch({
      type: constants.SET_ANSWER,
      answer: value
    })
  }
}
export function next() {
  return (dispatch) => {
    dispatch({
      type: constants.NEXT
    })
  }
}
export function prev() {
  return (dispatch) => {
    dispatch({
      type: constants.PREV
    })
  }
}
export function getQuestion(question_id) {
  return (dispatch) => {
    apiClient().get('/questions')
      .then((response) => {
        dispatch({
          type: constants.GET_QUESTION,
          questions: response.data,
          question_id: question_id
        })
      })
      .catch((response) => {
        debugger
        dispatch({
          type: constants.CONNECTION_FAILED,
          questions: response
        })
      }
    )
  }
}
export function getAnswer(question_id) {
  return (dispatch) => {
    apiClient().get('/answers')
      .then((response) => {
        dispatch({
          type: constants.GET_ANSWER,
          answerForms: response.data,
          question_id: question_id
        })
      })
      .catch((response) => {
        debugger
        dispatch({
          type: constants.CONNECTION_FAILED,
          answerForms: response
        })
      }
    )
  }
}

export function clearSurveyData() {
  return (dispatch) => {
    dispatch({
      type: constants.CLEAR_SURVEY_DATA
    })
  }
}