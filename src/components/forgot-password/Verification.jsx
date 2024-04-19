import style from "./Verification.module.css";
import { Link } from "react-router-dom";

import { BackArrow } from "../../UI/FormIcons";
import Button from "../../UI/Button";
import EnterCode from "../../UI/EnterCode";
import { useContext } from "react";
import { PasswordContext } from "./ResetPassword";

export default function Verification({ otp }) {
  console.log(otp);
  const { dispatch, OTP_Code } = useContext(PasswordContext);
  console.log(dispatch);

  return (
    <main className={style.container}>
      <Link
        onClick={() => dispatch({ type: "back" })}
        to="/reset-password"
        className={style.goBack}
      >
        <BackArrow />
      </Link>
      <div className={style.wrapper}>
        <h1 className={style.heading}>Enter verification code</h1>
        <p>We just sent a verification code to example@gmail.com</p>

        <form className={style.form}>
          <EnterCode />
          <p className={style.para}>Send code again</p>
          <Button color="#485F85" name="btnWide" btnType="Continue" />
        </form>
        {/* <header className={style.header}>
          <h1>Enter verification code</h1>
          <p>We just sent a verification code to example@gmail.com</p>
        </header>

        <form className={style.form}>
          <EnterCode />
          <p className={style.para}>Send code again</p>
          <Button color="#485F85" name="btnWide" btnType="Continue" />
        </form> */}
      </div>
    </main>
  );
}

// <main className={style.container}>
// <div>
//   <Link to="/reset-password" className={style.goBack}>
//     <BackArrow />
//   </Link>

//   <header className={style.header}>
//     <h1>Enter verification code</h1>
//     <p>We just sent a verification code to example@gmail.com</p>
//   </header>

//   <form className={style.form}>
//     {/* <EnterCode /> */}
//     <UserInput />
//     <Button color="#485F85" name="btnWide" btnType="Continue" />
//   </form>
// </div>
// </main>
