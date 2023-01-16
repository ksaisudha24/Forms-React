import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched};
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true};
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false};
  }
  return inputStateReducer;
};
const useInput = (checkValidity) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const enteredValueIsValid = checkValidity(inputState.value);
  const onChangeHandler = (event) => {
    dispatch({type: "INPUT", value: event.target.value});
  }
  const onBlurHandler = (event) => {
    dispatch({type: "BLUR"});
  }
  const reset = () => {
    dispatch({type: "RESET"});
  }

  return {
    value: inputState.value,
    touched: inputState.isTouched,
    enteredValueIsValid,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
};
// import { useState } from "react";

// const useInput = (checkValidity) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);
//   let enteredValueIsValid = checkValidity(enteredValue);

//   const onBlurHandler = (event) => {
//     setIsTouched(true);
//   };

//   const onChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     enteredValue,
//     isTouched,
//     enteredValueIsValid,
//     onBlurHandler,
//     onChangeHandler,
//     reset,
//   };
// };

export default useInput;
