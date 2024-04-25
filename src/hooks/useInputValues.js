import { useState } from 'react';
import { validateInput } from './validateInput';

export function useInputValues(account, signup) {
  const [inputValue, setInputValue] = useState({
    ...account,
  });
  const [inputErrors, setinputErrors] = useState({});

  function handleInputChange(name, value) {
    setInputValue({ ...inputValue, [name]: value });
    validateInput(inputValue, signup, setinputErrors);
  }

  const inputData = {
    inputValue,
    inputErrors,
    handleInputChange,
    setInputValue,
    setinputErrors,
  };
  // console.log(invalidValues, setinputErrors);
  // useEffect(function () {}, [inputValue]);
  return inputData;
}
