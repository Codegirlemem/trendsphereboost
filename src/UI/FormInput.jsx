import style from "./FormInput.module.css";
import { ReactComponent as ShowIcon } from "../assets/icons/show-password.svg";

import { useState } from "react";

// Pass the input type, placeholder text and label text content as props using type, placeholder and label as the exact prop name in the parent component

export default function FormInput({ type, placeholder, label }) {
  const [hidePassword, setHidePassword] = useState(true);

  function togglePasswordDisplay() {
    setHidePassword(!hidePassword);
  }

  return (
    <div className={style.inputField}>
      <label
        className={style.inputLabel}
        htmlFor={`user${label.split(" ").join("")}`}
      >
        {label}
      </label>

      <div className={style.inputDiv}>
        <input
          className={style.userInput}
          type={
            type === "password" ? (hidePassword ? "password" : "text") : type
          }
          placeholder={placeholder}
          id={`user${label.split(" ").join("")}`}
        />

        {type === "password" && (
          <span className={style.showIcon} onClick={togglePasswordDisplay}>
            {
              <ShowIcon
                fill={hidePassword ? "#BCB7B7" : "black"}
                fillOpacity={hidePassword ? "0.33" : "0.53"}
              />
            }
          </span>
        )}
      </div>
    </div>
  );
}
