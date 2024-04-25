import styled from 'styled-components';
import LoginLeftSection from '../components/login/LoginLeftSection';
import LoginRightSection from '../components/login/LoginRightSection';
import StateProvider from './StateProvider';
import { useState } from 'react';

const Main = styled.main`
  background-color: #002f5f;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100dvh;
`;

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const signup = false;
  const account = {
    userEmail: '',
    userPassword: '',
    checkbox: isChecked,
  };

  return (
    <div className="App">
      <Main>
        <StateProvider account={account} signup={signup}>
          <LoginLeftSection value={isChecked} checked={setIsChecked} />
          <LoginRightSection />
        </StateProvider>
      </Main>
    </div>
  );
}
