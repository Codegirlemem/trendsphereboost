import styled from "styled-components";
import { ReactComponent as ShowPassword } from "../assets/icons/show-password.svg";
import { useState } from "react";
// console.log(ShowPassword);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 450px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Label = styled.label`
  color: #b0b0b0;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #5e5e5e;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
`;
const InputContainer = styled.div`
  /* position: relative; */
  height: 56px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 0.5px solid #9b9b9b;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Span = styled.span`
  color: red;
  /* transform: translateX(); */
`;

// Pass the input type, placeholder text and label text content as props using type, placeholder and label as the exact prop name in the parent component

export default function LoginSignupInput({ type, placeholder, label }) {
  let inputType = type;

  const [hidePassword, setHidePassword] = useState(true);

  function show() {
    setHidePassword(!hidePassword);
  }

  function displayPassword() {
    if (inputType === "password") {
      if (hidePassword) {
        return "password";
      } else {
        return "text";
      }
    } else {
      return type;
    }
  }

  return (
    <Wrapper>
      <Label htmlFor="name">{label}</Label>

      <InputContainer>
        <Input type={displayPassword()} id="name" placeholder={placeholder} />

        {inputType === "password" && (
          <Span onClick={show}>
            {
              <ShowPassword
                fill={hidePassword ? "#BCB7B7" : "black"}
                fillOpacity={hidePassword ? "0.33" : "0.53"}
              />
            }
          </Span>
        )}
      </InputContainer>
    </Wrapper>
  );
}
