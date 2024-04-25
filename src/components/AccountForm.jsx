import { FormInputs } from './LoopedItems';
import style from './AccountForm.module.css';

import Button from '../UI/Button';

export default function AccountForm(props) {
  const { inputDetails, btnType, submitForm, children } = props;
  // console.log(handleData);

  return (
    <>
      <form onSubmit={submitForm} className={style.form}>
        <FormInputs inputDetails={inputDetails} />

        {children}

        <div className={style.button}>
          <Button color="#FF5733" name="btnWide" btnType={btnType}></Button>
        </div>
      </form>
    </>
  );
}
