import {
  INIT_COPY_QUIZ,
  INPUT_CREATE_QUIZ,
  ON_CLICK_BUTTON,
  SUBMIT_QUIZ
} from "./ActionType";

import { validation } from "../util/validation";

const initialState = {
  createQuiz: [],
  copyinitQuiz: null,
  formValid: true,
  initQuiz: {
    question: {
      label: "Вопрос",
      type: "text",
      name: "text",
      valid: true,
      toutched: false,
      value: "",
      errorMessage: "Некорректный Вопрос",
      validation: ["required"],
    },
    answers: [
      {
        label: "Вариант",
        type: "text",
        name: "text",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Некорректный Вариант",
        validation: ["required"],
        id: "1",
      },
      {
        label: "Вариант",
        type: "text",
        name: "text",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Некорректный Вариант",
        validation: ["required"],
        id: "2",
      },
      {
        label: "Вариант",
        type: "text",
        name: "text",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Некорректный Вариант",
        validation: ["required"],
        id: "3",
      },
      {
        label: "Вариант",
        type: "text",
        name: "text",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Некорректный Вариант",
        validation: ["required"],
        id: "4",
      },
    ],
    rightAnswers: null,
  },
  formButtons: {
    login: {
      name: "Добавить",
      type: "skilet",
      button: "button",
    },
    reisterg: {
      name: "Создать Тест",
      type: "skilet",
      button: "submit",
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COPY_QUIZ:
      return {
        ...state,
        copyinitQuiz: {
          ...state.initQuiz,
          question: { ...state.initQuiz["question"] },
          answers: [
            ...state.initQuiz["answers"].map((item, i) => (item = { ...item })),
          ],
        },
      };

    case INPUT_CREATE_QUIZ:
      const writeValue = (key, index) => {
        if (index === undefined) {
          return {
            ...state,
            copyinitQuiz: {
              ...state.copyinitQuiz,
              [key]: {
                ...state.copyinitQuiz[key],
                value: payload.event.target.value,
                toutched: true,
                valid: validation(payload.event.target.value, [
                  ...state.copyinitQuiz[key].validation,
                ]),
              },
            },
          };
        } else {
          return {
            ...state,
            copyinitQuiz: {
              ...state.copyinitQuiz,
              [key]: [
                ...state.copyinitQuiz[key],
                ...state.copyinitQuiz[key].filter((item, i) => {
                  if (i === index) {
                    item.value = payload.event.target.value;
                    item.toutched = true;
                    item.valid = validation(payload.event.target.value, [
                      ...state.copyinitQuiz[key][index].validation,
                    ]);
                  }
                }),
              ],
            },
          };
        }
      };

      if (payload.index === 7) {
        return writeValue("question");
      } else if (payload.index === 8) {
        return {
          ...state,
          copyinitQuiz: {
            ...state.copyinitQuiz,
            rightAnswers: payload.event.target.value,
          },
        };
      } else {
        return writeValue("answers", payload.index);
      }

    case ON_CLICK_BUTTON:
      const {copyinitQuiz, createQuiz, initQuiz} = state;
      const formControls = copyinitQuiz["answers"];
      let falseItem = formControls.filter(
        (item, index) => item.valid === false && item.toutched === false
      );
      if (falseItem.length === 0) {
        return {...state,
          createQuiz: [...createQuiz, { ...copyinitQuiz }],
          copyinitQuiz: {
            ...initQuiz,
            question: { ...initQuiz["question"] },
          answers: [...initQuiz["answers"].map((item,i) => item ={...item}
          )],
          },
          formValid: true
        };
  
      } else {
        return {...state,
          copyinitQuiz: {
            ...copyinitQuiz,
            question: { ...copyinitQuiz["question"] },
          },
          answers: [...initQuiz["answers"].map((item,i) => item ={...item}
          )],
          formValid: false,
        };
      };

    case SUBMIT_QUIZ:
      // const {copyinitQuiz, createQuiz, initQuiz} = state;
      // console.log(this.state);
      // const formControls = copyinitQuiz["answers"];
      // let falseItem = formControls.filter(
      //   (item, index) => item.valid === false && item.toutched === false
      // );
      // if (state.createQuiz.length !== 0) {
      // api.quizes.quiz.post(state.createQuiz)
      if (payload) {
        return {...state,
          createQuiz: [],
          formValid:true
        };
      }
  
        // alert("Success");
      // } else {
        // this.setState({
        //   copyinitQuiz: {
        //     ...copyinitQuiz,
        //     question: { ...copyinitQuiz["question"] },
        //   },
        //   answers: [...copyinitQuiz["answers"]],
        //   formValid: false,
        // });
      // }
    
    default:
      return state;
  }
};
