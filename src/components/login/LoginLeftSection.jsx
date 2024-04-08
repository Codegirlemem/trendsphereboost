import "../../index.css";
import style from "./LoginLeft.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "../signup/SignUpWith";
import { CheckAccount, DividerText } from "../../UI/LoginSignup";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { inputArray } from "./data";
import { Logo } from "../../UI/FormIcons";

import { useLoginDetails, useInputValues } from "../../hooks/formhooks";

import { useState } from "react";
import DisplayError from "../../UI/DisplayError";

import { useNavigate } from "react-router-dom";

export default function LoginLeftSection() {
  const [isChecked, setIsChecked] = useState(false);

  const account = {
    userEmail: "",
    userPassword: "",
    checkbox: isChecked,
  };
  const signup = false;

  const [
    inputValue,
    inputErrors,
    validateForm,
    handleInputChange,
    setInputValue,
  ] = useInputValues(account, signup);

  const newUser = {
    email: inputValue.userEmail?.trim(),
    password: inputValue.userPassword?.trim(),
  };
  const url = "/login";

  const [isLoading, formError, handleForm, setFormError] = useLoginDetails(
    newUser,
    setInputValue,
    account,
    validateForm,
    url
  );

  return (
    <section className={style.container}>
      {isLoading && <div>Loading...</div>}
      {formError && (
        <DisplayError
          name="readBtn"
          btnType="Back"
          setError={setFormError}
          data={formError}
        />
      )}
      {!isLoading && !formError && (
        <div className={style.wrapper}>
          <div className={style.header}>
            <Logo logo="blue" className={style.logo} />
            <div>
              <h1 className={style.heading}>Welcome</h1>
              <p>Elevate your social reach, Elevate your brand</p>
            </div>
          </div>

          <div className={style.divider}>
            <DividerText signup={false} />
          </div>

          <div className={style.form}>
            <AccountForm
              signup={false}
              inputDetails={inputArray}
              btnType="Login"
              inputValue={inputValue}
              submitForm={handleForm}
              handleData={handleInputChange}
              errors={inputErrors}
            >
              <div className={style.checkbox}>
                <CheckboxAgreement
                  onChecked={setIsChecked}
                  handleData={handleInputChange}
                  signup={false}
                  errors={inputErrors}
                  inputValue={inputValue}
                />
              </div>
            </AccountForm>
          </div>

          <SignUpWith signup={false}>
            <CheckAccount signup={false} />
          </SignUpWith>
        </div>
      )}
    </section>
  );
}
