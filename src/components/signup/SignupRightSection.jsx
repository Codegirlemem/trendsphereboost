import style from "./SignupRight.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "./SignUpWith";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { CheckAccount } from "../../UI/LoginSignup";
import DisplayError from "../../UI/DisplayError";
import { inputArray } from "./data";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useInputValues, useSubmitForm } from "../../hooks/formhooks";

export default function SignupRightSection() {
  const [isChecked, setIsChecked] = useState(true);

  const signup = true;
  const account = {
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmedPassword: "",
    checkbox: isChecked,
  };

  const [
    inputValue,
    inputErrors,
    validateForm,
    handleInputChange,
    setInputValue,
  ] = useInputValues(account, signup);

  let newUser = {
    name: inputValue.userName?.trim(),
    email: inputValue.userEmail?.trim(),
    password: inputValue.userPassword?.trim(),
  };

  const [isLoading, status, formError, handleForm, setFormError] =
    useSubmitForm(newUser, setInputValue, account, validateForm);

  return (
    <section className={style.container}>
      {isLoading && <div>Loading...</div>}
      {status && <div>Success 👍</div>}
      {formError && (
        <DisplayError
          name="readBtn"
          btnType="Back"
          setError={setFormError}
          data={formError}
        />
      )}
      {!isLoading && !status && !formError && (
        <div className={style.wrapper}>
          <h1 className={style.heading}>Create Account</h1>

          <div className={style.signup}>
            <AccountForm
              signup={true}
              inputDetails={inputArray}
              btnType="Sign Up"
              inputValue={inputValue}
              submitForm={handleForm}
              handleData={handleInputChange}
              errors={inputErrors}
            >
              <div className={style.checkbox}>
                <CheckboxAgreement
                  onChecked={setIsChecked}
                  handleData={handleInputChange}
                  signup={true}
                  errors={inputErrors}
                  value={inputValue.checkbox}
                />
              </div>
            </AccountForm>
          </div>
          <SignUpWith signup={true}>
            <CheckAccount signup={true} />
          </SignUpWith>
        </div>
      )}
    </section>
  );
}
