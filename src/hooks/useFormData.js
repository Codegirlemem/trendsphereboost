import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSubmitForm(newUser, setInputValue, account, validateForm) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [status, setStatus] = useState(false);

  // const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function getStoredAccounts() {
    const storedItems = localStorage.getItem("accounts");
    return storedItems ? JSON.parse(storedItems) : [];
  }

  function handleForm(event) {
    event.preventDefault();

    const accounts = getStoredAccounts();
    console.log(accounts);
    const users = [...accounts, newUser];
    if (validateForm()) {
      setIsLoading(true);
      console.log(validateForm());
      try {
        const user = accounts.find((acc) => acc.email === newUser.email);
        console.log(user);
        if (!user) {
          localStorage.setItem("accounts", JSON.stringify(users));
          setIsLoading(false);
          setStatus(true);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else if (user) {
          throw new Error(
            "User already exist. Sign up with a different email acccount"
          );
          // setIsLoading(false);
          // setFormError("User already exist. Sign up with a different email acccount")
        }

        // localStorage.setItem("accounts", JSON.stringify(users));
        // setIsLoading(false);
        // setStatus(true);
        // setTimeout(() => {
        //   navigate("/login");
        // }, 1000);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setFormError(err.message);
      } finally {
        setInputValue({ ...account });
        setTimeout(() => {
          setStatus(false);
        }, 1000);
      }
    } else {
      setIsLoading(false);
      setFormError("Ensure all input fields are filled or ticked");
    }
  }
  return [isLoading, status, formError, handleForm, setFormError];
}
