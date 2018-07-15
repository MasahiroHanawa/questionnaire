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
export function getQuestion() {
  return (dispatch) => {
    apiClient().get('/questions')
      .then((response) => {
        dispatch({
          type: constants.GET_QUESTION,
          questions: response.data
        })
      })
      .catch((response) => {
        dispatch({
          type: constants.CONNECTION_FAILED,
          questions: response
        })
      }
    )
  }
}
export function getAnswer() {
  return (dispatch) => {
    apiClient().get('/answers')
      .then((response) => {
        dispatch({
          type: constants.GET_ANSWER,
          answerForms: response.data
        })
      })
      .catch((response) => {
        dispatch({
          type: constants.CONNECTION_FAILED,
          answerForms: response
        })
      }
    )
  }
}