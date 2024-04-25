import { useEffect } from 'react';

function useValidate(
  name,
  value,
  signup,
  callback,
  match,
  isValid,
  inputErrors,
) {
  useEffect(() => {
    function validateInput(input) {
      if (name !== 'checkbox') {
        // TEST PATTERNS
        const passwordTest = /^[0-9A-Za-z]{6,}$/.test(value.trim());

        const emailTest =
          /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
            value.trim(),
          );

        // USERNAME VALIDATION
        if (name === 'userName') {
          if (!value) {
            inputErrors.current = {
              ...inputErrors.current,
              [name]: 'No username',
            };
            callback('');
          } else if (value) {
            if (!value.trim()) {
              callback('Name is required and cannot start with a space');

              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Name is required and cannot start with a space',
              };
            } else if (value.trim() && value.trim().length < 6) {
              callback('Name must be atleast six characters long');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Name must be atleast six characters long',
              };
            } else {
              callback('');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: '',
              };
            }
          }
        }

        // EMAIL VALIDATION
        if (name === 'userEmail') {
          if (!value) {
            inputErrors.current = {
              ...inputErrors.current,
              [name]: 'No userEmail',
            };
            callback('');
          } else if (value) {
            if (!value.trim()) {
              callback('Email is required and cannot start with a space');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Email is required and cannot start with a space',
              };
            } else if (value.trim() && !emailTest) {
              callback('Pattern not matched!');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Pattern not matched!',
              };
            } else {
              callback('');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: '',
              };
            }
          }
        }

        // PASSWORD VALIDATION
        if (name === 'userPassword') {
          match.current = { ...match.current, password: value };

          if (!value) {
            inputErrors.current = {
              ...inputErrors.current,
              [name]: 'No userpassword',
            };
            callback('');
          } else if (value) {
            if (!value.trim()) {
              callback('Password cannot start with space');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Password cannot start with spaces',
              };
            } else if (value.trim() && value.trim().length < 6) {
              callback('Password must be above six characters');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Password must be above six characters',
              };
            } else if (
              value.trim() &&
              value.trim().length >= 6 &&
              !passwordTest
            ) {
              callback('Use letters and numbers only');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Use letters and numbers only',
              };
            } else if (
              match.current.confirmed !== match.current.password &&
              match.current.confirmed
            ) {
              inputErrors.current = {
                ...inputErrors.current,
                [name]: 'Password does not match',
              };
              callback('Password does not match');
            } else {
              callback('');
              inputErrors.current = {
                ...inputErrors.current,
                [name]: '',
              };
            }
          }
        }
      } else {
        if (signup) {
          if (name === 'checkbox' && !value) {
            callback(true);
            inputErrors.current = {
              ...inputErrors.current,
              [name]: 'Not checked',
            };
          } else {
            callback(false);
            inputErrors.current = {
              ...inputErrors.current,
              [name]: '',
            };
          }
        }
      }
    }
    validateInput();
  }, [value, name, signup, callback, isValid, match, inputErrors]);

  useEffect(() => {
    if (name === 'confirmedPassword') {
      match.current = { ...match.current, confirmed: value };

      if (match.current.confirmed !== match.current.password) {
        inputErrors.current = {
          ...inputErrors.current,
          [name]: 'Password does not match',
        };
        callback('Password does not match');
      } else {
        callback('');
        inputErrors.current = {
          ...inputErrors.current,
          [name]: '',
        };
      }
    }

    if (
      match.current.confirmed !== match.current.password &&
      !match.current.confirmed.trim() & signup
    ) {
      inputErrors.current = {
        ...inputErrors.current,
        confirmedPassword: 'No confirmedPassword',
      };
    }
  }, [value, name, signup, callback, isValid, match, inputErrors]);

  useEffect(() => {
    const errors = Object.values(inputErrors.current);
    const showErrors = errors.filter((err) => err && err);
    isValid.current = showErrors.length === 0 ? true : false;
  }, [inputErrors, value, isValid, signup]);
}

export default useValidate;
