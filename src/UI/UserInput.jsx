import style from './UserInput.module.css';
import { ReactComponent as ShowIcon } from '../assets/icons/show-password.svg';

import { useState } from 'react';
import { useStateContext } from '../pages/StateProvider';
import useValidate from '../hooks/useValidate';

// Pass the input type, placeholder text and label text content as props using type, placeholder and label as the exact prop name in the parent component

export default function UserInput({ data }) {
  const { name, label, type } = data;
  const {
    state,
    handleInputChange,
    signup,
    passwordMatch,
    isValid,
    validationErrors,
  } = useStateContext();
  const value = state.inputValue[name];
  const [showError, setShowError] = useState('');

  useValidate(
    name,
    value,
    signup,
    setShowError,
    passwordMatch,
    isValid,
    validationErrors,
  );

  const [hidePassword, setHidePassword] = useState(true);
  function togglePasswordDisplay() {
    setHidePassword(!hidePassword);
  }

  return (
    <label className={style.inputLabel}>
      <span>
        {label}
        <span className={style.star}>*</span>
      </span>
      <div className={style.inputDiv}>
        <input
          className={style.userInput}
          required
          type={
            type === 'password'
              ? hidePassword
                ? 'password'
                : 'text'
              : data.type
          }
          placeholder={data.placeholder}
          id={`user${data.label.split(' ').join('')}`}
          name={name}
          value={value}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />

        {data.type === 'password' && (
          <span onClick={togglePasswordDisplay}>
            <ShowIcon
              fill={hidePassword ? '#BCB7B7' : 'black'}
              fillOpacity={hidePassword ? '0.33' : '0.53'}
            />
          </span>
        )}
      </div>
      {showError && <p className={style.errorMsg}>{showError}</p>}
    </label>
  );
}
