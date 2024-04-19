import style from "./SignupRight.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "./SignUpWith";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { CheckAccount } from "../../UI/LoginSignup";
import DisplayError from "../../UI/DisplayError";
import { inputArray } from "./data";
import { useState } from "react";

import { useInputValues, useSubmitForm } from "../../hooks/formhooks";

export default function SignupRightSection() {
  const [isChecked, setIsChecked] = useState(true);

  const signup = true;
  const type = "signup";
  const nextPage = "/login";

  const account = {
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmedPassword: "",
    checkbox: isChecked,
  };

  const [inputValue, inputErrors, isValid, handleInputChange, setInputValue] =
    useInputValues(account, signup);

  const userData = {
    name: inputValue.userName?.trim(),
    email: inputValue.userEmail?.trim(),
    password: inputValue.userPassword?.trim(),
  };
  const [isLoading, formError, handleForm, setFormError] = useSubmitForm(
    userData,
    setInputValue,
    account,
    isValid,
    type,
    nextPage
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
