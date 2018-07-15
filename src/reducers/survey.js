import * as constants from '../constants'
import * as strage from '../utils/strage'
import _ from 'lodash'

const initialState = {
  params: {
    currentQuestion: {
      id: null,
      type: null,
      title: null
    },
    answer: ''
  },
  questions: [],
  answerForms: [],
  answers: [],
  formType: {
    text: 1,
    radio: 2,
    select: 3
  },
  message: null
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case constants.SET_ANSWER:
      return {
        params: {
          currentQuestion: state.params.currentQuestion,
          answer: action.answer,
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        message: null
      }
    case constants.GET_QUESTION:
      const currentQuestion = !_.isEmpty(strage.get('question')) ? strage.get('question') : action.questions[0]
      return {
        params: {
          currentQuestion: currentQuestion,
          answer: state.params.answer,
        },
        questions: action.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        message: null
      }
    case constants.GET_ANSWER:
      const currentAnswers = !_.isEmpty(strage.get('answer')) ? strage.get('answer') : []
      return {
        params: {
          currentQuestion: state.params.currentQuestion,
          answer: state.params.answer,
        },
        questions: state.questions,
        answerForms: action.answerForms,
        answers: currentAnswers,
        formType: state.formType,
        message: null
      }
    case constants.CONNECTION_FAILED:
      return {
        params: {
          currentQuestion: state.params.currentQuestion,
          answer: action.answer,
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        message: "Can't connect server"
      }
    case constants.NEXT:
      let answers = state.answers
      answers.push({
        questionId: state.params.currentQuestion.id,
        answer: state.params.answer
      })
      return {
        params: {
          currentQuestion: state.questions[state.params.currentQuestion.id],
          answer: '',
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: answers,
        formType: state.formType,
        message: null
      }
    case constants.PREV:
      return {
        params: {
          currentQuestion: state.questions[state.params.currentQuestion.id - 2],
          answer: state.answers[state.answers.length - 1].answer,
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: state.answers.filter((a => a.id !== (state.answers.length - 1))),
        formType: state.formType,
        message: null
      }
    default:
      console.log('deo')
      return {
        params: {
          currentQuestion: {
            id: null,
            type: null,
            title: null
          },
          answer: ''
        },
        questions: [],
        answerForms: [],
        answers: [],
        formType: state.formType,
        message: null
      }
  }
}
