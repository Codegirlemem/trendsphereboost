import { FormInputs } from "./LoopedItems";
import style from "./AccountForm.module.css";

// import { CheckboxAgreement } from "../UI/FormIcons";
import Button from "../UI/Button";

export default function SignupForm({ inputDetails, children }) {
  return (
    <>
      <form className={style.form} action="">
        <FormInputs inputDetails={inputDetails} />

        <div className={style.checkbox}>{children}</div>

        <div className={style.button}>
          <Button color="#FF5733" name="btnWide" btnType="Sign Up"></Button>
        </div>
      </form>
    </>
  );
}
