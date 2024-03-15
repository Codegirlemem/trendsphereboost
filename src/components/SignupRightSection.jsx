import styled from "styled-components";
import SignupForm from "./SignupForm";
import OptionalAccess from "./OptionalAccess";

const Section = styled.section`
  flex: 1;
  padding-top: 120px;
  padding-bottom: 55px;
  padding-left: 105px;
  border-radius: 24px;
  background-color: #fff;
`;
const H1 = styled.h1`
  color: #000;
  font-family: "Exo", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  margin-bottom: 48px;
`;

export default function SignupLeftSection() {
  return (
    <Section>
      <H1>Create Account</H1>
      <SignupForm />
      <OptionalAccess />
    </Section>
  );
}
