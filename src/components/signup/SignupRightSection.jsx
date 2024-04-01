import style from "./SignupRight.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "./SignUpWith";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { CheckAccount } from "../../UI/LoginSignup";
import { inputArray } from "./data";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { formToJSON } from "axios";
import { useInputValues } from "../../hooks/formhooks";
import { useFormData } from "../../hooks/useFormData";

export default function SignupRightSection() {
  const [isChecked, setIsChecked] = useState(true);

  const account = {
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmedPassword: "",
    checkbox: isChecked,
  };

  // const [isLoading, setIsLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState(false);
  const [inputValue, inputErrors, validateForm, handleInputChange] =
    useInputValues(account);

  const [formData, submitError, isLoading, handleForm, submitStatus] =
    useFormData(inputValue, validateForm);
  // console.log(submitError);

  const navigate = useNavigate();

  const userAccount = useRef({});

  console.log(Object.keys(formData).length);

  // useEffect(
  //   function () {
  //     async function submitForm() {
  //       setIsLoading(true);
  //       try {
  //         const response = await axios.post(
  //           "https://jsonplaceholder.typicode.com/posts",
  //           inputValue
  //         );
  //         setIsLoading(false);
  //         console.log(response);

  //         if (response.status === 201) {
  //           setSubmitStatus(true);
  //           setTimeout(() => {
  //             setSubmitStatus(false);
  //           }, 1000);
  //         }
  //       } catch (err) {
  //         console.error(err.message);
  //       } finally {
  //       }
  //     }
  //   },
  //   [formData]
  // );

  // const submitForm = async function () {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       inputValue
  //     );
  //     if (response.status === 201) {
  //       setIsLoading(false);
  //       setSubmitStatus(true);
  //     }

  //     if (response.status !== 201) {
  //       throw new Error("Something went wrong");
  //     }
  //     // else {
  //     //   setTimeout(() => {
  //     //     setSubmitStatus((cur) => !cur);
  //     //   }, 1000);
  //     // }

  //     setTimeout(() => {
  //       setSubmitStatus((cur) => !cur);
  //     }, 1000);
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // function handleForm(event) {
  //   event.preventDefault();
  //   console.log(inputValue.userName.length);

  //   if (validateForm()) {
  //     submitForm();

  //     // setFormData((values) => ({
  //     //   ...values,
  //     //   userName: "",
  //     //   userEmail: "",
  //     //   userPassword: "",
  //     //   confirmedPassword: "",
  //     //   checkbox: isChecked,
  //     // }));

  //     // navigate("/login");
  //   } else {
  //     // alert("user input not valid");
  //     console.log("form has errors");
  //   }

  //   console.log(isLoading);
  // }

  return (
    <section className={style.container}>
      {isLoading && <div>Loading...</div>}
      {submitStatus && <div>Success 👍</div>}
      {submitError && <div>{submitError}</div>}
      {!isLoading && !submitStatus && (
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
