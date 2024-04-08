import style from "./ResetPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DisplayError from "../../UI/DisplayError";

import UserInput from "../../UI/UserInput";
import Button from "../../UI/Button";
import { BackArrow } from "../../UI/FormIcons";
import axios from "axios";
import { useLoginDetails, useInputValues } from "../../hooks/formhooks";

export default function ResetPassword() {
  // const [formData, setFormData] = useState({
  //   userEmail: "",
  // });

  // const [errors, setErrors] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const account = {
    userEmail: "",
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
  };
  const url = "/reset-password/verification";

  const [isLoading, formError, handleForm, setFormError] = useLoginDetails(
    newUser,
    setInputValue,
    account,
    validateForm,
    url
  );

  const navigate = useNavigate();

  // function handleInputChange(name, value) {
  //   setFormData({ ...formData, [name]: value });
  //   validateForm();
  // }

  // function validateForm() {
  //   const invalidValues = {};
  //   let isValid = true;

  //   const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
  //     formData.userEmail
  //   );

  //   if (!formData.userEmail?.trim()) {
  //     invalidValues.userEmail = "Email is required";
  //     isValid = false;
  //   } else if (!emailTest) {
  //     invalidValues.userEmail = "Email is not valid";
  //     isValid = false;
  //   }

  //   setErrors(invalidValues);
  //   return isValid;
  // }

  // const submitForm = async function () {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }

  //   setIsLoading(false);
  // };

  // function handleForm(event) {
  //   event.preventDefault();

  //   console.log(formData);
  //   if (validateForm()) {
  //     submitForm();

  //     setFormData((values) => ({
  //       ...values,
  //       userEmail: "",
  //     }));
  //     navigate("/reset-password/verification");
  //   } else {
  //     // alert("user input not valid");
  //     console.log(errors);
  //   }
  // }

  return (
    <main className={style.container}>
      {isLoading && <div>Loading....</div>}

      {!isLoading && (
        <div>
          {/* <Verification /> */}
          <Link to="/login" className={style.goBack}>
            <BackArrow />
          </Link>

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
  );
}
