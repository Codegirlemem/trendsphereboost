import style from "./SignUpWith.module.css";
import { OptionalAccounts } from "../LoopedItems";
import { DividerText } from "../../UI/LoginSignup";

export default function SignUpWith({ signup, children }) {
  return (
    <div id={style.options}>
      <div id={style.signup}>
        <DividerText signup={signup} />
      </div>
      <div id={style.accounts}>
        <OptionalAccounts />
      </div>
      {children}
    </div>
  );
}
