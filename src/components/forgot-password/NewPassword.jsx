import style from "./NewPassword.module.css";
import { Link } from "react-router-dom";

import { BackArrow } from "../../UI/FormIcons";

import { useInputValues, useSubmitForm } from "../../hooks/formhooks";
import { FormInputs } from "../LoopedItems";
import PasswordSuccess from "./PasswordSuccess";

import Button from "../../UI/Button";
import { useState } from "react";

const inputArray = [
  {
    type: "password",
    placeholder: "Enter password",
    label: "New Password",
    name: "newPassword",
  },

  {
    type: "password",
    placeholder: "Confirm password",
    label: "Confirm password",
    name: "confirmedPassword",
  },
];

export default function NewPassword() {
  const [successMessage, setSuccessMessage] = useState(true);

  const account = {
    newPassword: "",
    confirmedPassword: "",
  };

  const signup = true;

  const [
    inputValue,
    inputErrors,
    validateForm,
    handleInputChange,
    setInputValue,
  ] = useInputValues(account, signup);

  return (
    <main className={style.container}>
      {successMessage ? (
        <div className={style.success}>
          <PasswordSuccess />
        </div>
      ) : (
        <>
          <Link className={style.goBack} to="/password-reset/Verification">
            <BackArrow />
          </Link>
          <div className={style.wrapper}>
            <h1 className={style.heading}>Create New Password</h1>
            <p className={style.para}>
              Please enter a new password. Make sure your new password is strong
              and different from the previous password
            </p>

            <FormInputs
              inputDetails={inputArray}
              inputValue={inputValue}
              handleChange={handleInputChange}
              errors={inputErrors}
            />

            <Button color="#485F85" name="btnWide" btnType="Confirm Password" />
          </div>{" "}
        </>
      )}
    </main>
  );
}
