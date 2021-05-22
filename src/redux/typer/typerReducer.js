import { START_TYPING, START_DELETING, DELETING, TYPING } from "./typerActions";

const initialState = {
  text: "",
  isDeleting: true,
  loopNum: 0,
  speed: 150,
};

export default function typer(state = initialState, { type, payload }) {
  switch (type) {
    case START_TYPING:
      return {
        ...state,
        isDeleting: false,
        speed: payload,
        loopNum: state.loopNum + 1,
      };
    case START_DELETING:
      return {
        ...state,
        isDeleting: true,
        speed: payload,
      };

    case DELETING:
      return {
        ...state,
        text: payload.substring(0, state.text.length - 1),
      };
    case TYPING:
      return {
        ...state,
        text: payload.substring(0, state.text.length + 1),
        
      };
    default:
      return state;
  }
}
