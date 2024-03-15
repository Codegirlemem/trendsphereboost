import styled from "styled-components";

import Google from "../assets/icons/google.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import Linkedin from "../assets/icons/linkedin.svg";

const iconArray = [Google, Facebook, Instagram, Twitter, Linkedin];

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

const Span = styled.span`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export default function SignUpAccount() {
  return (
    <Div>
      {iconArray.map((icon) => (
        <Span key={icon}>
          <img src={icon} alt="" />
        </Span>
      ))}
    </Div>
  );
}
