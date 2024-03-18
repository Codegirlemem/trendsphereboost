import "../../index.css";
import style from "./LoginLeft.module.css";
import "../../index.css";
import AccountForm from "../AccountForm";
import SignUpWith from "../signup/SignUpWith";
import { CheckAccount, DividerText } from "../../UI/LoginSignup";
import { CheckboxAgreement } from "../../UI/FormIcons";
import { Logo } from "../../UI/FormIcons";

const inputArray = [
  { type: "email", placeholder: "Enter email", label: "Email Address" },
  { type: "password", placeholder: "Enter password", label: "Password" },
];

export default function LoginLeftSection() {
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
          <AccountForm inputDetails={inputArray}>
            <CheckboxAgreement signup={false} />
          </AccountForm>
        </div>

        <SignUpWith signup={false}>
          <CheckAccount signup={false} />
        </SignUpWith>
      </div>
    </section>
  );
}
