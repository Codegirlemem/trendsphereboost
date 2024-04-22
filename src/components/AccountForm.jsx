import { FormInputs } from './LoopedItems';
import style from './AccountForm.module.css';

import Button from '../UI/Button';

export default function AccountForm(props) {
  const {
    inputDetails,
    btnType,
    inputValue,
    submitForm,
    handleChange,
    errors,
    children,
  } = props;
  // console.log(handleData);

  return (
    <>
      <form onSubmit={submitForm} className={style.form}>
        <FormInputs
          inputDetails={inputDetails}
          btnType={btnType}
          inputValue={inputValue}
          handleChange={handleChange}
          errors={errors}
        />

        {children}

        <div className={style.button}>
          <Button color="#FF5733" name="btnWide" btnType={btnType}></Button>
        </div>
      </form>
    </>
  );
}
