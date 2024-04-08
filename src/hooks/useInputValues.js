import { useEffect, useState } from "react";

export function useInputValues(account, signup) {
  const [inputValue, setInputValue] = useState({
    ...account,
  });
  const [inputErrors, setinputErrors] = useState({});

  function handleInputChange(name, value) {
    setInputValue({ ...inputValue, [name]: value });
    // validateForm();
  }
  console.log(inputValue);
  function validateForm() {
    const invalidValues = {};
    let isValid = true;

    const passwordTest = /^[0-9A-Za-z]{6,}$/.test(
      inputValue.userPassword?.trim()
    );

    const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
      inputValue.userEmail?.trim()
    );
    if (inputValue.userName) {
      if (inputValue.userName.length > 0) {
        if (!inputValue.userName?.trim()) {
          invalidValues.userName =
            "Name is required and cannot start with a space";
          isValid = false;
        } else if (inputValue.userName?.trim().length < 6) {
          invalidValues.userName = "Name must be atleast six characters long";
          isValid = false;
        }
      }
    }
    if (inputValue.userEmail) {
      if (!inputValue.userEmail?.trim()) {
        invalidValues.userEmail = "Email is required";
        isValid = false;
      } else if (!emailTest) {
        invalidValues.userEmail = "Email is not valid";
        isValid = false;
      }
    }
    if (inputValue.userPassword) {
      if (!inputValue.userPassword?.trim()) {
        invalidValues.userPassword =
          "Password is required and cannot start with a space";
        isValid = false;
      } else if (!passwordTest) {
        invalidValues.userPassword =
          "Password must be atleast six characters long with letters or numbers.";
        isValid = false;
      } else if (signup && inputValue.userPassword) {
        if (inputValue.confirmedPassword?.length === 0) {
          invalidValues.confirmedPassword = "Confirm your password";
          isValid = false;
        } else if (inputValue.userPassword !== inputValue.confirmedPassword) {
          invalidValues.confirmedPassword = "Password not matched";
          isValid = false;
        }
      }
    }
    if (signup) {
      if (!inputValue.checkbox) {
        invalidValues.checkbox = "Not checked";
        isValid = false;
      }
    }
    console.log(invalidValues);
    setinputErrors({ ...invalidValues });
    return isValid;
  }

  useEffect(
    function () {
      console.log(Object.keys(inputValue));
      validateForm();
    },
    [inputValue]
  );
  return [
    inputValue,
    inputErrors,
    validateForm,
    handleInputChange,
    setInputValue,
  ];
}
