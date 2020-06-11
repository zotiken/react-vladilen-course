import {
  GET_LIST,
  SET_LIST,
  INIT_COPY_QUIZ,
  INPUT_CREATE_QUIZ,
  ON_CLICK_BUTTON,
  SUBMIT_QUIZ,
  INPUT_AUTH,
  LOGIN,
  SIGNIN,
  LOGOUT
} from "./ActionType";
import { api } from "./../api/api";

export const setQuizList = (payload) => ({
  type: SET_LIST,
  payload,
});

export const getQuizList = (payload) => async (dispatch) => {
  try {
    const response = await api.quizes.get();
    dispatch(setQuizList(response));
  } catch (error) {
    console.error(error);
  }
};

export const initCopyQuiz = (payload) => ({
  type: INIT_COPY_QUIZ,
  payload,
});

export const inputQuizCreate = (payload) => ({
  type: INPUT_CREATE_QUIZ,
  payload,
});

export const onClickButton = (payload) => ({
  type: ON_CLICK_BUTTON,
  payload,
});

export const submitQiuz = (payload) => ({
  type: SUBMIT_QUIZ,
  payload,
});

export const submitQiuzThunk = (payload) => async (dispatch) => {
  try {
    const response = await api.quizes.quiz.post(payload.createQuiz);
    dispatch(submitQiuz(response));
  } catch (error) {
    console.error(error);
  }
};

export const inputAuth = (payload) => ({
    type: INPUT_AUTH,
    payload,
  });
  
