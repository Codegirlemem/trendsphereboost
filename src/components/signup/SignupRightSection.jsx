import style from "./SignupRight.module.css";
import AccountForm from "../AccountForm";
import SignUpWith from "./SignUpWith";
import { CheckAccount } from "../../UI/LoginSignup";
import { CheckboxAgreement } from "../../UI/FormIcons";

const inputArray = [
  { type: "text", placeholder: "Enter name", label: "Name" },
  { type: "email", placeholder: "Enter email", label: "Email Address" },
  { type: "password", placeholder: "Enter password", label: "Password" },
  {
    type: "password",
    placeholder: "Confirm password",
    label: "Confirm password",
  },
];

export default function SignupRightSection() {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.heading}>Create Account</h1>

        <div className={style.signup}>
          <AccountForm inputDetails={inputArray}>
            <CheckboxAgreement signup={false} />
          </AccountForm>
        </div>
        <SignUpWith signup={true}>
          <CheckAccount signup={true} />
        </SignUpWith>
      </div>
    </section>
  );
}
