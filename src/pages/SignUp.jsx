import styled from 'styled-components';
import SignupLeftSection from '../components/signup/SignupLeftSection';
import SignupRightSection from '../components/signup/SignupRightSection';
import { useState } from 'react';
import StateProvider from './StateProvider';

const Main = styled.main`
  background-color: #002f5f;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  min-height: 100dvh;
`;

function SignUp() {
  const [isChecked, setIsChecked] = useState(true);
  const signup = true;
  const account = {
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmedPassword: '',
    checkbox: isChecked,
  };

  return (
    <div className="App">
      <Main>
        <StateProvider account={account} signup={signup}>
          <SignupLeftSection />
          <SignupRightSection value={isChecked} checked={setIsChecked} />
        </StateProvider>
      </Main>
    </div>
  );
}

export default SignUp;
