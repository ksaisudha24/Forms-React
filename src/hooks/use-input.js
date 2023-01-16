import { useState } from "react";

const useInput = (checkValidity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  let enteredValueIsValid = checkValidity(enteredValue);

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    enteredValueIsValid,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
};

export default useInput;
