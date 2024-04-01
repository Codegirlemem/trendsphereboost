import style from "./Verification.module.css";
import { Link } from "react-router-dom";

import { BackArrow } from "../UI/FormIcons";
import Button from "../UI/Button";
import EnterCode from "../UI/EnterCode";

export default function Verification() {
  return (
    <main className={style.container}>
      <Link className={style.goBack} to="/password-reset">
        <BackArrow />
      </Link>
      <div className={style.wrapper}>
        <header className={style.header}>
          <h1>Enter verification code</h1>
          <p>We just sent a verification code to example@gmail.com</p>
        </header>

        <form className={style.form}>
          <EnterCode />
          <p className={style.para}>Send code again</p>
          <Button color="#485F85" name="btnWide" btnType="Continue" />
        </form>
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
