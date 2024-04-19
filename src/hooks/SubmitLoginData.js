import { useEffect } from "react";
import { useAuth } from "./AuthContext";

export function SubmitLoginData(data) {
  const {
    user,
    userData,
    account,
    nextPage,
    setFormError,
    setInputValue,
    navigate,
  } = data;
  const userAccount = localStorage.getItem("user");

  const { loggedInUser, dispatch } = useAuth();
  console.log(loggedInUser);
  console.log(dispatch);
  //   useEffect(() => {
  //     if(userAccount) {
  //         if (userData.loggedIn) {
  //             localStorage.setItem("user", JSON.stringify(userData));
  //           } else if (!userData.loggedIn) {
  //             localStorage.removeItem("user");
  //           }
  //     } else
  //   }, [userAccount])

  if (!user) {
    setFormError("Account does not exist. Enter your correct email address");
  } else if (user) {
    if (user.password === userData.password) {
      if (userData.loggedIn) {
        console.log(userData.loggedIn);
        const userInfo = {
          name: user.name,
          email: user.email,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
      } else if (!userData.loggedIn) {
        localStorage.removeItem("user");
      }
      setInputValue({ ...account });
      navigate(nextPage);
    } else if (user.password !== userData.password) {
      setFormError("Incorrect password. Enter correct password to proceed");
    }
  }
  return;
}

export function SubmitPasswordReset(data) {
  let OTP;
  setInterval(() => {
    OTP = 51657;
    localStorage.setItem("otp", JSON.stringify(OTP));
  }, 60000);
}
