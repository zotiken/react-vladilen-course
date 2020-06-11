import { INPUT_AUTH, LOGIN, SIGNIN, LOGOUT } from "./ActionType";
import { validation } from "../util/validation";


const initialState = {
    formValid: true,
    formControls: {
      email: {
        label: "Email",
        type: "email",
        name: "email",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Некорректный email",
        validation: ["email"],
      },
      password: {
        label: "Password",
        type: "password",
        name: "password",
        valid: false,
        toutched: false,
        value: "",
        errorMessage: "Неверный пароль",
        validation: ["password"],
      },
    },
    formButtons: {
      login: {
        name: "Войти",
        type: "primary",
        button:"submit"
      },
      reisterg: {
        name: "Регистрация",
        type: "success",
        button:"button"
      },
    }
  };

export default (state = initialState, { type, payload }) => {
  switch (type) {
      
    case INPUT_AUTH:
        console.log(payload);
        return {...state,
            formControls: {
              ...state.formControls,
              [payload.name]: {
                ...state.formControls[payload.name],
                value: payload.event.target.value,
                toutched: true,
                valid: validation(payload.event.target.value, [
                  ...state.formControls[payload.name].validation,
                ]),
              },
            },
          }
      
    case LOGIN:
      return { ...state, ...payload };
    case SIGNIN:
      return { ...state, ...payload };
    case LOGOUT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
