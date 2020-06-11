import { INPUT_AUTH, LOGIN, SIGNIN, LOGOUT } from "./ActionType";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INPUT_AUTH:
      return { ...state, ...payload };
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
