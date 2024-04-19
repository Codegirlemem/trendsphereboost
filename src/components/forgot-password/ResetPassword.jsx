import style from "./ResetPassword.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import DisplayError from "../../UI/DisplayError";

import UserInput from "../../UI/UserInput";
import Button from "../../UI/Button";
import { BackArrow } from "../../UI/FormIcons";
import axios from "axios";
import { useInputValues, useSubmitForm } from "../../hooks/formhooks";
import Verification from "./Verification";

const initialState = {
  account: {
    userEmail: "",
  },
  status: "enter email",
  OTP_Code: "",
  formError: "",
  signup: false,
  navigate: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "isLoading" };

    case "sent/otp":
      return {
        ...state,
        OTP_Code: 51356,
        account: {
          userEmail: action.payload,
        },
        status: "otp page",
      };
    case "form error":
      return { ...state, status: "error", formError: action.payload };
    case "back":
      return { ...state, status: "enter email" };
    default:
      throw new Error("error displaying");
  }
}

export const PasswordContext = createContext();

export default function ResetPassword() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  console.log(state);

  const [inputValue, inputErrors, isValid, handleInputChange, setInputValue] =
    useInputValues(state.account, state.signup);

  const userData = {
    email: inputValue.userEmail?.trim(),
  };

  function handleForm(e) {
    e.preventDefault();
    if (isValid) {
      if (state.status === "enter email") {
        dispatch({
          type: "sent/otp",
          payload: userData.email,
        });
        setInputValue("");
        navigate("/reset-password/verification");
      }
    } else {
      dispatch({ type: "form error", payload: "Invalid email" });
    }
  }

  function setFormError(bool) {
    dispatch({ type: "back" });
  }

  // const [isLoading, formError, handleForm, setFormError] = useSubmitForm(
  //   userData,
  //   setInputValue,
  //   account,
  //   isValid,
  //   type,
  //   nextPage
  // );

  return (
    <PasswordContext.Provider value={{ ...state, dispatch }}>
      {state.status === "otp page" && <Outlet />}
      <main className={style.container}>
        {state.status === "loading" && <div>Loading....</div>}

        {state.status === "error" && (
          <DisplayError
            name="readBtn"
            btnType="Back"
            setError={setFormError}
            data="Error"
          />
        )}

        {state.status === "enter email" && (
          <div>
            {/* <Verification /> */}
            <Link to="/login" className={style.goBack}>
              <BackArrow />
            </Link>
            {/* <div className={style.goBack}>
            <BackArrow />
          </div> */}

            {/* <CgArrowLeft /> */}

            <header className={style.header}>
              <h1>Reset Password</h1>
              <p>
                Enter the email address associated your account so we can send a
                link <br /> to reset your password
              </p>
            </header>

            <form onSubmit={handleForm} className={style.form}>
              <UserInput
                // type, placeholder, label, name, value, onChange, errors

                type="email"
                placeholder="Enter email"
                label="Email Address"
                name="userEmail"
                value={inputValue.userEmail}
                handleChange={handleInputChange}
                errors={inputErrors}
              />

              <Button color="#485F85" name="btnWide" btnType="Continue" />
            </form>
          </div>
        )}
      </main>
    </PasswordContext.Provider>
  );
}
