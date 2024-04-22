import { useState } from 'react';
import { validateInput } from './validateInput';

export function useInputValues(account, signup) {
  const [inputValue, setInputValue] = useState({
    ...account,
  });
  const [inputErrors, setinputErrors] = useState({});

  function handleInputChange(name, value) {
    setInputValue({ ...inputValue, [name]: value });
  }

  validateInput(inputValue, signup);
  const [isValid, invalidValues] = validateInput(inputValue, signup);

  console.log(invalidValues, setinputErrors);
  // useEffect(function () {}, [inputValue]);
  return [inputValue, inputErrors, isValid, handleInputChange, setInputValue];
}
