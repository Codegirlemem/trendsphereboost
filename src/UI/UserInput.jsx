import style from './UserInput.module.css';
import { ReactComponent as ShowIcon } from '../assets/icons/show-password.svg';

import { useState } from 'react';

// Pass the input type, placeholder text and label text content as props using type, placeholder and label as the exact prop name in the parent component

export default function UserInput(props) {
  const { data, value, errors, handleChange } = props;
  // console.log(data);
  // console.log(handleChange);

  const [hidePassword, setHidePassword] = useState(true);
  function togglePasswordDisplay() {
    setHidePassword(!hidePassword);
  }

  // type={detail.type}
  //       placeholder={detail.placeholder}
  //       label={detail.label}
  //       name={detail.name}
  //       value={inputValue[detail.name]}

  return (
    <label className={style.inputLabel}>
      <span>
        {data.label}
        <span className={style.star}>*</span>
      </span>
      <div className={style.inputDiv}>
        <input
          className={style.userInput}
          required
          type={
            data.type === 'password'
              ? hidePassword
                ? 'password'
                : 'text'
              : data.type
          }
          placeholder={data.placeholder}
          id={`user${data.label.split(' ').join('')}`}
          name={data.name}
          value={value}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
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
      {Boolean(errors[data.name]) && (
        <p className={value.length > 0 ? style.errorMsg : style.defaultError}>
          {errors[data.name]}
        </p>
      )}
    </label>
  );
}
