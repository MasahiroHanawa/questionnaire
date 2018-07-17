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
  result: false,
  message: null
}

export default function survey(state = initialState, action) {
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
        result: false,
        message: null
      }
    case constants.GET_QUESTION:
      let currentQuestion = []
      if (_.isEmpty(state.question_id) && _.isEmpty(strage.get('question'))) {
        currentQuestion = action.questions[0]
      } else if (!_.isEmpty(action.question_id)) {
        currentQuestion = action.questions.filter(q => {
          return q.id === parseInt(action.question_id, 10)
          }
        )
        _.isEmpty(currentQuestion) ? currentQuestion = state.params.currentQuestion : currentQuestion = currentQuestion[0]
      } else {
        currentQuestion = JSON.parse(strage.get('question'))
      }
      return {
        params: {
          currentQuestion: currentQuestion,
          answer: state.params.answer,
        },
        questions: action.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        result: false,
        message: null
      }
    case constants.GET_ANSWER:
      const currentAnswers = !_.isEmpty(strage.get('answer')) ? JSON.parse(strage.get('answer')) : []
      let currentAnswer = []
      if (_.isEmpty(state.question_id) && _.isEmpty(strage.get('answer'))) {
        currentAnswer = action.answerForms[0]
      } else if (!_.isEmpty(action.question_id)) {
        currentAnswer = JSON.parse(strage.get('answer')).filter(a => 
          a.question_id === parseInt(action.question_id, 10)
        )[0]
      } else {
        currentAnswer = JSON.parse(strage.get('question'))
      }
      return {
        params: {
          currentQuestion: state.params.currentQuestion,
          answer: !_.isEmpty(currentAnswer) ? currentAnswer.answer : '',
        },
        questions: state.questions,
        answerForms: action.answerForms,
        answers: currentAnswers,
        formType: state.formType,
        result: false,
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
        result: false,
        message: "Can't connect server"
      }
    case constants.NEXT:
      let answers = state.answers
      let nextAnswer = []
      let result = false
      let nextQuestion = {
        id: null,
        type: null,
        title: null
      }
      const existAnswer = answers.filter(a => a.question_id === state.params.currentQuestion.id)
      if (!_.isEmpty(state.questions[state.params.currentQuestion.id])) {
        nextAnswer = answers.filter(a => 
          a.question_id === state.questions[state.params.currentQuestion.id].id
        )[0]
      }
      if (_.isEmpty(existAnswer)) {
        answers.push({
          question_id: state.params.currentQuestion.id,
          answer: state.params.answer
        })
      } else {
        answers = state.answers.map(a => {
          if (a.question_id === existAnswer[0].question_id) {
            a.answer = state.params.answer
          }
          return a
        })
      }
      strage.put('question', JSON.stringify(state.questions[state.params.currentQuestion.id]))
      strage.put('answer', JSON.stringify(answers))
      _.isEmpty(state.questions[state.params.currentQuestion.id]) ?
        result = true : nextQuestion = state.questions[state.params.currentQuestion.id]
      return {
        params: {
          currentQuestion: nextQuestion,
          answer: !_.isEmpty(nextAnswer) ? nextAnswer.answer : '',
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: answers,
        formType: state.formType,
        result: result,
        message: null
      }
    case constants.PREV:
      const prevAnswer = state.answers.filter(a => a.question_id === state.questions[state.params.currentQuestion.id - 2].id)
      return {
        params: {
          currentQuestion: state.questions[state.params.currentQuestion.id - 2],
          answer: !_.isEmpty(prevAnswer) ? prevAnswer[0].answer : '',
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        result: false,
        message: null
      }
    case constants.CLEAR_SURVEY_DATA:
      strage.clear()
      return {
        params: {
          currentQuestion: state.params.currentQuestion,
          answer: state.params.answer,
        },
        questions: state.questions,
        answerForms: state.answerForms,
        answers: state.answers,
        formType: state.formType,
        result: true,
        message: null
      }
    default:
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
        result: false,
        message: null
      }
  }
}
