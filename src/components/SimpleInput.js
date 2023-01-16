import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    touched: nameIsTouched,
    enteredValueIsValid: enteredNameIsValid,
    onBlurHandler: onNameBlurHandler,
    onChangeHandler: onNameChangeHandler,
    reset: nameReset,
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredEmail,
    touched: emailIsTouched,
    enteredValueIsValid: enteredEmailIsValid,
    onBlurHandler: onEmailBlurHandler,
    onChangeHandler: onEmailChangeHandler,
    reset: emailReset,
  } = useInput(value => value.includes("@"));

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    nameReset();
    emailReset();
  };

  const nameInputClass = `form-control + ${
    !enteredNameIsValid && nameIsTouched ? "invalid" : ""
  }`;
  const emailInputClass = `form-control + ${
    !enteredEmailIsValid && emailIsTouched ? "invalid" : ""
  }`;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={onNameBlurHandler}
          onChange={onNameChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && nameIsTouched && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={onEmailBlurHandler}
          onChange={onEmailChangeHandler}
          value={enteredEmail}
        />
        {!enteredEmailIsValid && emailIsTouched && ( 
          <p className="error-text"> Enter valid email! </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [nameIsTouched, setNameIsTouched] = useState(false);
//   let enteredNameIsValid = enteredName.trim() !== "";

//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsTouched, setEmailIsTouched] = useState("");
//   let enteredEmailIsValid =
//     enteredEmail.trim() !== "" && enteredEmail.includes("@");

//   let formIsValid = enteredNameIsValid && enteredEmailIsValid;

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredName.trim() === "") {
//       // setEnteredNameIsValid(false);
//       setNameIsTouched(true);
//       return;
//     }
//     if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
//       setEmailIsTouched(true);
//       return;
//     }
//     setNameIsTouched(false);
//     setEmailIsTouched(false);
//     // setEnteredNameIsValid(true);
//     setEnteredName("");
//     setEnteredEmail("");
//   };

//   const onNameBlurHandler = (event) => {
//     setNameIsTouched(true);
//     // if (enteredName.trim() === "") {
//     //   setEnteredNameIsValid(false);
//     // }
//   };

//   const onNameChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     // if (event.target.value.trim() === "") {
//     //   setEnteredNameIsValid(false);
//     // }
//     // else {
//     //   setEnteredNameIsValid(true);
//     // }
//   };

//   const onEmailBlurHandler = (event) => {
//     setEmailIsTouched(true);
//   };

//   const onEmailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//     setEmailIsTouched(true);
//   };

//   const nameInputClass = `form-control + ${
//     !enteredNameIsValid && nameIsTouched ? "invalid" : ""
//   }`;
//   const emailInputClass = `form-control + ${
//     !enteredEmailIsValid && emailIsTouched ? "invalid" : ""
//   }`;

//   return (
//     <form onSubmit={onSubmitHandler}>
//       <div className={nameInputClass}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onBlur={onNameBlurHandler}
//           onChange={onNameChangeHandler}
//           value={enteredName}
//         />
//         {!enteredNameIsValid && nameIsTouched && (
//           <p className="error-text">Name must not be empty!</p>
//         )}
//       </div>
//       <div className={emailInputClass}>
//         <label htmlFor="email">Your Email</label>
//         <input
//           type="email"
//           id="email"
//           onBlur={onEmailBlurHandler}
//           onChange={onEmailChangeHandler}
//           value={enteredEmail}
//         />
//         {!enteredEmailIsValid && emailIsTouched && ( enteredEmail.trim() === "" ?
//           <p className="error-text">Email must not be empty!</p> :
//           <p className="error-text">Email must contain an @!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

export default SimpleInput;
