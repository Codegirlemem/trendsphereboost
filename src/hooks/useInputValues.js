import { useEffect, useState } from 'react';
import { validateInput } from './validateInput';

export function useInputValues(account, signup) {
  const [inputValue, setInputValue] = useState({
    ...account,
  });
  const [inputErrors, setinputErrors] = useState({});

  function handleInputChange(name, value) {
    setInputValue({ ...inputValue, [name]: value });
  }
  // const [isValid, invalidValues] = validateInput(inputValue, signup);
  // setinputErrors({ ...invalidValues });
  // validateInput(inputValue, signup);

  const [isValid, invalidValues] = validateInput(inputValue, signup);
  useEffect(
    function () {
      setinputErrors({ ...invalidValues });
    },
    [inputValue],
  );
  return [inputValue, isValid, inputErrors, handleInputChange, setInputValue];
}
