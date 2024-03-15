import styled from "styled-components";
import FormInput from "../UI/FormInput";
import { CheckboxAgreement } from "../UI/FormIcons";
import Button from "../UI/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 62px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Link = styled.a`
  color: #002f5f;
  /* font-family: Montserrat; */
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 400;
  line-height: 160%;
  text-decoration-line: underline;
`;

export default function SignupForm() {
  return (
    <>
      <Form action="">
        <Div>
          <FormInput type="text" placeholder="Enter name" label="Name" />
          <FormInput
            type="email"
            placeholder="Enter email"
            label="Email Address"
          />
          <FormInput
            type="password"
            placeholder="Enter password"
            label="Password"
          />
          <FormInput
            type="password"
            placeholder="Enter password"
            label="Confirm Password"
          />

          <CheckboxAgreement>
            <p>
              I agree to the{" "}
              <Link href="https://www.facebook.com">terms of services</Link> and{" "}
              <Link href="https://www.facebook.com">privacy policy</Link>
            </p>
          </CheckboxAgreement>
        </Div>

        <Button color="#FF5733" name="btnWide" btnType="Sign Up"></Button>
      </Form>
    </>
  );
}
