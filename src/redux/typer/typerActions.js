export const START_TYPING = "START_TYPING";
export const START_DELETING = "START_DELETING";
export const TYPING = "TYPING";
export const DELETING = "DELETING";

export function startTyping(typeSpeed){
    return{
        type : START_TYPING,
        payload : typeSpeed
    }
}
export function startDeleting(deleteSpeed) {
  return {
    type: START_DELETING,
    payload: deleteSpeed
  };
}

export function typing(fullText) {
  return {
    type: TYPING,
    payload:fullText
  };
}
export function deleting(fullText) {
  return {
    type: DELETING,
    payload:fullText
    
  };
}

// export function type(typeSpeed) {
//   return (dispatch) => {
//     dispatch(typing(typeSpeed));
//   };
// }

// export function clear(deleteSpeed) {
//   return (dispatch) => {
//     dispatch(deleting(deleteSpeed));
//   };
// }
