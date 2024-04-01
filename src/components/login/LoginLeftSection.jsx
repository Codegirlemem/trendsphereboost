import "../../index.css";
import style from "./LoginLeft.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "../signup/SignUpWith";
import { CheckAccount, DividerText } from "../../UI/LoginSignup";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { inputArray } from "./data";
import { Logo } from "../../UI/FormIcons";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginLeftSection() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    checkbox: isChecked,
  });
  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  function handleInputChange(name, value) {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    validateForm();
  }

  function validateForm() {
    const invalidValues = {};
    let isValid = true;

    const passwordTest = /^[0-9A-Za-z]{6,}$/.test(formData.userPassword);

    const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
      formData.userEmail
    );

    if (!formData.userEmail?.trim()) {
      invalidValues.userEmail = "Email is required";
      isValid = false;
    } else if (!emailTest) {
      invalidValues.userEmail = "Email is not valid";
      isValid = false;
    }

    if (!formData.userPassword?.trim()) {
      invalidValues.userPassword = "Password is required";
      isValid = false;
    } else if (!passwordTest) {
      invalidValues.userPassword =
        "Password must be atleast six characters long with letters or numbers.";
      isValid = false;
    }

    setErrors(invalidValues);
    return isValid;
  }

  function handleForm(event) {
    event.preventDefault();

    console.log(formData);

    if (validateForm()) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log(res.data);
      });

      setFormData((values) => ({
        ...values,
        userEmail: "",
        userPassword: "",
      }));
      // navigate("/login");
    } else {
      // alert("user input not valid");
      console.log(errors);
    }
  }

  return (
    <section className={style.container}>
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
            inputValue={formData}
            submitForm={handleForm}
            handleData={handleInputChange}
            errors={errors}
          >
            <div className={style.checkbox}>
              <CheckboxAgreement
                onChecked={setIsChecked}
                handleData={handleInputChange}
                signup={false}
                errors={errors}
                inputValue={formData}
              />
            </div>
          </AccountForm>
        </div>

        <SignUpWith signup={false}>
          <CheckAccount signup={false} />
        </SignUpWith>
      </div>
    </section>
  );
}
